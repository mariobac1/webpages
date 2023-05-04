import React, { useContext } from "react"
import { useEffect, useState } from "react"
import axios from "axios"
import { API_URL, IMAGE_HOME_URL } from "../../constants/env"
import Loader from "./Loader"
import { useLocation } from "react-router-dom"
import GlobalContext from "../../contexts/GlobalContext"

const RenderSocialNetwork = ({ value }) => {
	const [card, setCard] = useState()
	const [error, setError] = useState()
	const [loading, setLoading] = useState(true)
	const location = useLocation()

	const {
		setShowEventSocialNetwork,
		setNameForm,
		setHomeImageID,
		setColorForm,
		setDescriptionForm,
		setBgColorForm,
		setFontForm,
		userData,
	} = useContext(GlobalContext)

	const changeData = (id, name, color, description, bgColor, font) => {
		setShowEventSocialNetwork(true)
		setHomeImageID(id)
		setNameForm(name)
		setColorForm(color)
		setDescriptionForm(description)
		setBgColorForm(bgColor)
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
	console.log(card)
	if (error) return <h1>{error?.message}</h1>
	if (loading) return <Loader />

	return (
		<article className={`container-socialNetwork${value}`}>
			{location.pathname === "/" && userData
				? card
						.filter((card) => card.name.includes(value))
						.map((card) => (
							<div className="socialNetworkIcons" key={card.id}>
								<a
									href={card.description}
									target="_blank"
									rel="noopener noreferrer"
								>
									<img
										src={`${API_URL}${IMAGE_HOME_URL}${
											card.id
										}?time=${new Date().getTime()}`}
										alt={card.name}
									/>
								</a>
								{location.pathname === "/" && userData && (
									<button
										onClick={() =>
											changeData(
												card.id,
												card.name,
												card.color,
												card.description,
												card.bgcolor,
												card.font
											)
										}
									>
										<span className="icons material-icons-outlined">edit</span>
									</button>
								)}
							</div>
						))
				: card
						.filter(
							(card) => card.name.includes(value) && card.description.length > 0
						)
						.sort((a, b) => a.name.localeCompare(b.name))
						.slice(0, 3)
						.map((card) => (
							<div className="socialNetworkIcons" key={card.id}>
								<a
									href={card.description}
									target="_blank"
									rel="noopener noreferrer"
								>
									<img
										src={`${API_URL}${IMAGE_HOME_URL}${
											card.id
										}?time=${new Date().getTime()}`}
										alt={card.name}
									/>
								</a>
							</div>
						))}
		</article>
	)
}

export default RenderSocialNetwork
