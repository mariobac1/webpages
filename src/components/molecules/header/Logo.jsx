import { useContext, useEffect, useState } from "react"
import { API_URL } from "../../../constants/env"
import GlobalContext from "../../../contexts/GlobalContext"
import axios from "axios"
import { token } from "../../../helpers/auth"
import Loader from "../../atoms/Loader"
import { LOGO_ID } from "../../../constants/env"
import { IMAGE_HOME_URL } from "../../../constants/env"
import { Link } from "react-router-dom"

const Logo = () => {
	const { setIDimage, setShowEventModal, setHomeImageID, userData } =
		useContext(GlobalContext)
	const [logo, setLogo] = useState()
	const [route, setRoute] = useState()
	const [error, setError] = useState()
	const [loading, setLoading] = useState(true)

	const changeData = (id, name) => {
		setShowEventModal(true)
		setHomeImageID(id)
		setIDimage(name)
	}

	useEffect(() => {
		axios
			.get(`${API_URL}public/imagehome/${LOGO_ID}`, {
				headers: {
					Authorization: `Bearer ${token()}`,
				},
			})
			.then((resp) => {
				setLogo(resp.data.data)
			})
			.catch((err) => {
				setError(err)
			})
			.finally(() => {
				setLoading(false)
			})
	}, [])
	useEffect(() => {
		setRoute(
			`${API_URL}${IMAGE_HOME_URL}${LOGO_ID}?time=` + new Date().getTime()
		)
	}, [])

	if (error) return <h1>{error?.message}</h1>
	if (loading) return <Loader />

	return (
		<div className="container-logoEdit">
			{userData && (
				<button onClick={() => changeData(logo.id, logo.name)}>
					<span className="icons material-icons-outlined">edit</span>
				</button>
			)}

			<Link className="container-logo" to="/">
				<img className="logo" src={route} alt="logo" />
				<p className="brand" style={{ color: logo.color }}>
					{logo && logo.description}
				</p>
			</Link>
		</div>
	)
}

export default Logo
