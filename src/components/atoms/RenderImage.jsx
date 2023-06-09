import { useContext, useEffect, useState } from "react"
import GlobalContext from "../../contexts/GlobalContext"
import axios from "axios"
import { API_URL, IMAGE_HOME_URL } from "../../constants/env"
import Loader from "./Loader"
import { useLocation } from "react-router-dom"

const RenderImage = ({ value }) => {
	const [card, setCard] = useState()
	const [error, setError] = useState()
	const [loading, setLoading] = useState(true)
	const location = useLocation()

	const {
		setShowEventModal,
		setNameForm,
		setHomeImageID,
		setColorForm,
		setDescriptionForm,
		setBgColorForm,
		setFontForm,
		userData,
	} = useContext(GlobalContext)

	const changeData = (id, name, color, description, bgColor, font) => {
		setShowEventModal(true)
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

	if (error) return <h1>{error?.message}</h1>
	if (loading) return <Loader />

	return (
		<article className="container-imageHorizontal">
			{card
				.filter((card) => card.name.includes(value))
				.sort((a, b) => a.name.localeCompare(b.name))
				.map((card) => (
					<div key={card.id} className="container-eachHorizontal">
						<img
							src={`${API_URL}${IMAGE_HOME_URL}${
								card.id
							}?time=${new Date().getTime()}`}
							alt={card.name}
						/>
						<div className="infoImage">
							<h4
								className={`${card.color}`}
								style={{
									color: card.color,
									fontFamily: card.font,
									backgroundColor: card.bgcolor,
								}}
							>
								{card.description}
							</h4>
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
					</div>
				))}
		</article>
	)
}

export default RenderImage
