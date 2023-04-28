import { useContext, useEffect, useState } from "react"
import GlobalContext from "../../contexts/GlobalContext"
import axios from "axios"
import { API_URL } from "../../constants/env"
import Loader from "./Loader"

const RenderIcon = ({ value }) => {
	const [card, setCard] = useState()
	const [error, setError] = useState()
	const [loading, setLoading] = useState(true)
	const { setShowEventModal, setIDimage, setHomeImageID, userData } =
		useContext(GlobalContext)

	const changeData = (id, name) => {
		setShowEventModal(true)
		setHomeImageID(id)
		setIDimage(name)
	}

	useEffect(() => {
		axios
			.get(`${API_URL}public/imagehome`)
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
						<span className="material-symbols-outlined">
							{card.details.icon}
						</span>
						<h5 className={`${card.color}`} style={{ color: card.color }}>
							{card.details.title}
						</h5>
						<h6 className={`${card.color}`} style={{ color: card.color }}>
							{card.description}
						</h6>
						<h6 style={{ color: card.color }}>{card.details.paragraph}</h6>
						{userData && (
							<button onClick={() => changeData(card.id, card.name)}>
								<span className="icons material-icons-outlined">edit</span>
							</button>
						)}
					</div>
				))}
		</article>
	)
}

export default RenderIcon
