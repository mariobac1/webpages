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
		<article className="w-full flex pb-10 text-center">
			{card
				.filter((card) => card.name.includes("Box"))
				.sort((a, b) => a.name.localeCompare(b.name))
				.map((card) => (
					<div
						key={card.id}
						className="border w-1/3 text-center mx-5 bg-white rounded-lg shadow-lg"
					>
						<div className="mb-5 text-center mx-auto w-1/4 mt-5 border rounded-lg overflow-hidden">
							<img
								className="aling-middle h-full w-full object-cover text-center group-hover/item:ml-1"
								src={`${API_URL}${IMAGE_HOME_URL}${
									card.id
								}?time=${new Date().getTime()}`}
								alt={card.name}
							/>
						</div>
						<div className="border mx-10 mb-6">
							<p
								className="text-gray-500 text-xl line-clamp-2 font-bold"
								style={{ color: card.color }}
							>
								{card.description}
							</p>
							<button
								className=" ml-2 mt-12"
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
