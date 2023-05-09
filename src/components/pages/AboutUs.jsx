import { useContext, useEffect, useState } from "react"
import GlobalContext from "../../contexts/GlobalContext"
import axios from "axios"
import { ABOUT_US_ID, API_URL, IMAGE_HOME_URL } from "../../constants/env"
import Loader from "../atoms/Loader"
import EventAboutUs from "../organisms/changeForms/EventAboutUs"

const AboutUs = () => {
	const [card, setCard] = useState()
	const [error, setError] = useState()
	const [loading, setLoading] = useState(true)

	const {
		setShowEventAboutUs,
		showEventAboutUs,
		setNameForm,
		setHomeImageID,
		setColorForm,
		setDescriptionForm,
		setParagraphForm,
		setFontForm,
		setTitleForm,
		userData,
	} = useContext(GlobalContext)

	const changeData = (id, name, color, description, paragraph, font, title) => {
		setShowEventAboutUs(true)
		setHomeImageID(id)
		setNameForm(name)
		setColorForm(color)
		setDescriptionForm(description)
		setParagraphForm(paragraph)
		setFontForm(font)
		setTitleForm(title)
	}
	useEffect(() => {
		axios
			.get(`${API_URL}public/variablevalue/${ABOUT_US_ID}`)
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
		<div>
			{showEventAboutUs && <EventAboutUs />}
			<div className="container-aboutUs">
				<h1
					className={`${card.color}`}
					style={{ color: card.color, fontFamily: card.font }}
				>
					{card.title}
				</h1>
				<div className="body-aboutUs">
					<div>
						<h2
							className={`${card.color}`}
							style={{ color: card.color, fontFamily: card.font }}
						>
							{card.paragraph}
						</h2>
						<p
							className={`${card.color}`}
							style={{ color: card.color, fontFamily: card.font }}
						>
							{card.description}
						</p>
					</div>
					<img
						src={`${API_URL}${IMAGE_HOME_URL}${
							card.id
						}?time=${new Date().getTime()}`}
						alt={card.name}
					/>
				</div>
				{userData && (
					<button
						onClick={() =>
							changeData(
								card.id,
								card.name,
								card.color,
								card.description,
								card.paragraph,
								card.font,
								card.title
							)
						}
					>
						<span className="icons material-icons-outlined">edit</span>
					</button>
				)}
			</div>
		</div>
	)
}

export default AboutUs
