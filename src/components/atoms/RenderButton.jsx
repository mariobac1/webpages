import { useContext, useEffect, useState } from "react"
import GlobalContext from "../../contexts/GlobalContext"
import axios from "axios"
import { API_URL } from "../../constants/env"
import Loader from "./Loader"

const RenderButton = ({ value }) => {
	const [card, setCard] = useState()
	const [error, setError] = useState()
	const [loading, setLoading] = useState(true)
	const {
		setShowEventButton,
		setNameForm,
		setHomeImageID,
		setColorForm,
		setDescriptionForm,
		setBgColorForm,
		setIconForm,
		setFontForm,
		userData,
	} = useContext(GlobalContext)

	const changeData = (id, name, color, description, bgColor, icon, font) => {
		setShowEventButton(true)
		setHomeImageID(id)
		setNameForm(name)
		setColorForm(color)
		setDescriptionForm(description)
		setBgColorForm(bgColor)
		setIconForm(icon)
		setFontForm(font)
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
		<article className="">
			{card
				.filter((card) => card.name.includes(value))
				.map((card) => (
					<div key={card.id} className="container-button">
						{userData && (
							<button
								className=""
								onClick={() =>
									changeData(
										card.id,
										card.name,
										card.color,
										card.description,
										card.bgcolor,
										card.icon,
										card.font
									)
								}
							>
								<span className="icons material-icons-outlined">edit</span>
							</button>
						)}
						<button
							className="button material-icons-outlined"
							style={{
								color: card.color,
								fontFamily: card.font,
								background: card.bgcolor,
							}}
						>
							<span className={`${card.color}`}>{card.description}</span>
							<span className="icon-inButton material-icons-outlined">
								{card.icon}
							</span>
						</button>
					</div>
				))}
		</article>
	)
}

export default RenderButton
