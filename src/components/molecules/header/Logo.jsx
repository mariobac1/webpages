import { useContext, useEffect, useState } from "react"
import { API_URL } from "../../../constants/env"
import GlobalContext from "../../../contexts/GlobalContext"
import axios from "axios"
import { token } from "../../../helpers/auth"
import Loader from "../../atoms/Loader"
import { LOGO_ID } from "../../../constants/env"
import { IMAGE_HOME_URL } from "../../../constants/env"
import { Link, useLocation } from "react-router-dom"

const Logo = () => {
	const {
		setShowEventLogo,
		setNameForm,
		setHomeImageID,
		setColorForm,
		setDescriptionForm,
		setFontForm,
		setParagraphForm,
		userData,
	} = useContext(GlobalContext)
	const [logo, setLogo] = useState()
	const [route, setRoute] = useState()
	const [error, setError] = useState()
	const [loading, setLoading] = useState(true)
	const location = useLocation()

	const changeData = (id, name, color, description, font, paragraph) => {
		setShowEventLogo(true)
		setHomeImageID(id)
		setNameForm(name)
		setColorForm(color)
		setDescriptionForm(description)
		setFontForm(font)
		setParagraphForm(paragraph)
	}

	useEffect(() => {
		axios
			.get(`${API_URL}public/variablevalue/${LOGO_ID}`, {
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
			{location.pathname === "/" && userData && (
				<button
					onClick={() =>
						changeData(
							logo.id,
							logo.name,
							logo.color,
							logo.description,
							logo.font,
							logo.paragraph
						)
					}
				>
					<span className="icons material-icons-outlined">edit</span>
				</button>
			)}

			<Link className="container-logo" to="/">
				<img className="logo" src={route} alt="logo" />
				<p
					className="brand"
					style={{
						color: logo.color,
						fontFamily: logo.font,
						background: logo.bgcolor,
						fontSize: logo.paragraph,
					}}
				>
					{logo && logo.description}
				</p>
			</Link>
		</div>
	)
}

export default Logo
