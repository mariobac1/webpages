import React, { useContext } from "react"
import { useEffect, useState } from "react"
import axios from "axios"
import { API_URL } from "../../constants/env"
import Loader from "./Loader"
import GlobalContext from "../../contexts/GlobalContext"
import { useLocation } from "react-router-dom"

const RenderTitle = ({ value }) => {
	const [card, setCard] = useState()
	const [error, setError] = useState()
	const [loading, setLoading] = useState(true)
	const location = useLocation()

	const {
		setShowEventTitle,
		showEventTitle,
		setNameForm,
		setHomeImageID,
		setColorForm,
		setDescriptionForm,
		setFontForm,
		userData,
	} = useContext(GlobalContext)

	const changeData = (id, name, color, description, font) => {
		setShowEventTitle(true)
		setHomeImageID(id)
		setNameForm(name)
		setColorForm(color)
		setDescriptionForm(description)
		setFontForm(font)
	}
	console.log(showEventTitle)
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
		<article>
			{card
				.filter((card) => card.name.includes(value))
				.map((card) => (
					<div key={card.id} className="container-title">
						{location.pathname === "/" && userData && (
							<button
								onClick={() =>
									changeData(
										card.id,
										card.name,
										card.color,
										card.description,
										card.font
									)
								}
							>
								<span className="icons material-icons-outlined">edit</span>
							</button>
						)}
						<div
							className={`${card.color}`}
							style={{ color: card.color, fontFamily: card.font }}
						>
							{card.description}
						</div>
					</div>
				))}
		</article>
	)
}

export default RenderTitle
