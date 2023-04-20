import { useContext, useEffect, useState } from "react"
import GlobalContext from "../../contexts/GlobalContext"
import axios from "axios"
import { API_URL, IMAGE_HOME_URL } from "../../constants/env"
import Loader from "./Loader"

const RenderImage = ({ value }) => {
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
		<article className={`container-${value}`}>
			{card
				.filter((card) => card.name.includes(value))
				.sort((a, b) => a.name.localeCompare(b.name))
				.map((card) => (
					<div key={card.id} className={`container-${card.name}`}>
						<img
							src={`${API_URL}${IMAGE_HOME_URL}${
								card.id
							}?time=${new Date().getTime()}`}
							alt={card.name}
						/>
						<h4 style={{ color: card.color }}>{card.description}</h4>
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

export default RenderImage
