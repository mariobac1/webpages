import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { API_URL, IMAGE_HOME_URL } from "../../../constants/env"
import Loader from "../../atoms/Loader"
import GlobalContext from "../../../contexts/GlobalContext"

const Card = () => {
	const [card, setCard] = useState()
	const [error, setError] = useState()
	const [loading, setLoading] = useState(true)
	const { setShowEventModal, setIDimage, setHomeImageID } =
		useContext(GlobalContext)

	const changeData = (id, name) => {
		setShowEventModal(true)
		setHomeImageID(id)
		setIDimage(name)
		console.log(id, name)
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
		<article className="container-boxes">
			{card
				.filter((card) => card.name.includes("Box"))
				.sort((a, b) => a.name.localeCompare(b.name))
				.map((card) => (
					<div key={card.id} className="container-box">
						<div className="">
							<img
								src={`${API_URL}${IMAGE_HOME_URL}${
									card.id
								}?time=${new Date().getTime()}`}
								alt={card.name}
							/>
						</div>
						<div>
							<p style={{ color: card.color }}>{card.description}</p>
							<button
								className=""
								onClick={() => changeData(card.id, card.name)}
							>
								<span className="border  border-gray-400  px-1 rounded-full material-icons-outlined text-gray-400 text-sm">
									edit
								</span>
							</button>
						</div>
					</div>
				))}
		</article>
	)
}
export default Card
