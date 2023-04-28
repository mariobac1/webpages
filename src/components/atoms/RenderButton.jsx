import { useContext, useEffect, useState } from "react"
import GlobalContext from "../../contexts/GlobalContext"
import axios from "axios"
import { API_URL } from "../../constants/env"
import Loader from "./Loader"

const RenderButton = ({ value }) => {
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
		<article className="">
			{card
				.filter((card) => card.name.includes(value))
				.map((card) => (
					<div key={card.id} className="container-button">
						{userData && (
							<button
								className=""
								onClick={() => changeData(card.id, card.name)}
							>
								<span className="icons material-icons-outlined">edit</span>
							</button>
						)}
						<button className="button">
							<span>{card.description}</span>
							<span className="icon-inButton material-icons-outlined">
								{card.details.icon}
							</span>
						</button>
					</div>
				))}
		</article>
	)
}

export default RenderButton
