import React from "react"
import { useEffect, useState } from "react"
import axios from "axios"
import { API_URL, IMAGE_HOME_URL } from "../../constants/env"
import Loader from "./Loader"

const RenderSocialNetwork = ({ value }) => {
	const [card, setCard] = useState()
	const [error, setError] = useState()
	const [loading, setLoading] = useState(true)

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
		<article className={`container-socialNetwork${value}`}>
			{card
				.filter(
					(card) => card.name.includes(value) && card.description.length > 0
				)
				.sort((a, b) => a.name.localeCompare(b.name))
				.map((card) => (
					<div className="socialNetworkIcons" key={card.id}>
						<img
							src={`${API_URL}${IMAGE_HOME_URL}${
								card.id
							}?time=${new Date().getTime()}`}
							alt={card.name}
						/>
					</div>
				))}
		</article>
	)
}

export default RenderSocialNetwork
