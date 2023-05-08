import { useContext, useEffect, useState } from "react"
import GlobalContext from "../../contexts/GlobalContext"
import axios from "axios"
import { API_URL } from "../../constants/env"
import Loader from "./Loader"
import { useLocation } from "react-router-dom"

const RenderIcon = ({ value }) => {
	const [card, setCard] = useState()
	const [error, setError] = useState()
	const [loading, setLoading] = useState(true)
	const location = useLocation()

	const {
		setShowEventFooter,
		setNameForm,
		setHomeImageID,
		setColorForm,
		setDescriptionForm,
		setParagraphForm,
		setIconForm,
		setFontForm,
		setTitleForm,
		userData,
	} = useContext(GlobalContext)

	const changeData = (
		id,
		name,
		color,
		description,
		paragraph,
		icon,
		font,
		title
	) => {
		setShowEventFooter(true)
		setHomeImageID(id)
		setNameForm(name)
		setColorForm(color)
		setDescriptionForm(description)
		setParagraphForm(paragraph)
		setIconForm(icon)
		setFontForm(font)
		setTitleForm(title)
	}

	useEffect(() => {
		axios
			.get(`${API_URL}public/variablevalue`)
			.then((resp) => {
				setCard(resp.data.data)
			})
			.catch((err) => {
				setError(err)
			})
			.finally(() => {
				setLoading(false)
			})
	}, [])

	if (error) return <h1>{error?.message}</h1>
	if (loading) return <Loader />

	return (
		<article className="container-footerInfo">
			{card
				.filter((card) => card.name.includes(value))
				.sort((a, b) => a.name.localeCompare(b.name))
				.map((card) => (
					<div key={card.id} className="footer-info">
						<span className="iconFooter material-symbols-outlined">
							{card.icon}
						</span>
						<h5
							className={`${card.color}`}
							style={{
								color: card.color,
								fontFamily: card.font,
							}}
						>
							{card.title}
						</h5>
						<h6
							className={`${card.color}`}
							style={{
								color: card.color,
								fontFamily: card.font,
							}}
						>
							{card.description}
						</h6>
						<h6
							style={{
								color: card.color,
								fontFamily: card.font,
							}}
						>
							{card.paragraph}
						</h6>
						{location.pathname === "/" && userData && (
							<button
								onClick={() =>
									changeData(
										card.id,
										card.name,
										card.color,
										card.description,
										card.paragraph,
										card.icon,
										card.font,
										card.title
									)
								}
							>
								<span className="icons material-icons-outlined">edit</span>
							</button>
						)}
					</div>
				))}
		</article>
	)
}

export default RenderIcon
