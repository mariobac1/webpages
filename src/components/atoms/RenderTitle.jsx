import React, { useContext } from "react"
import { useEffect, useState } from "react"
import axios from "axios"
import { API_URL } from "../../constants/env"
import Loader from "./Loader"
import GlobalContext from "../../contexts/GlobalContext"

const RenderTitle = ({ value }) => {
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
		<article>
			{card
				.filter((card) => card.name.includes(value))
				.map((card) => (
					<div key={card.id} className="container-title">
						{userData && (
							<button onClick={() => changeData(card.id, card.name)}>
								<span className="icons material-icons-outlined">edit</span>
							</button>
						)}
						<div
							className={`${card.color}`}
							style={{ color: card.color, fontFamily: card.details.font }}
						>
							{card.description}
						</div>
					</div>
				))}
		</article>
	)
}

export default RenderTitle
