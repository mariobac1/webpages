import { useContext, useEffect, useState } from "react"
import { API_URL } from "../../../constants/env"
import GlobalContext from "../../../contexts/GlobalContext"
import axios from "axios"
import { token } from "../../../helpers/auth"
import Loader from "../../atoms/Loader"
import { LOGO_ID } from "../../../constants/env"
import { IMAGE_HOME_URL } from "../../../constants/env"

const Logo = () => {
	const { setIDimage, setShowEventModal } = useContext(GlobalContext)
	const [logo, setLogo] = useState()
	const [route, setRoute] = useState()
	const [error, setError] = useState()
	const [loading, setLoading] = useState(true)

	const changeData = () => {
		setShowEventModal(true)
		setIDimage("logo")
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
		<div className="flex">
			{/* <button className=" ml-2 mt-12" onClick={changeData}>
				<span className="border  border-gray-400  px-1 rounded-full material-icons-outlined text-gray-400 text-sm">
					edit
				</span>
			</button> */}
			<div className="flex items-center">
				<img className="logo-image" src={route} alt="logo" />
				<p
					className="container-phraseLogo  text-overflow"
					style={{ fontFamily: "Inspiration" }}
				>
					{logo && logo.description}
				</p>
			</div>
		</div>
	)
}

export default Logo
