import { useContext, useEffect, useState } from "react"
import GlobalContext from "../../../contexts/GlobalContext"
import axios from "axios"
import {
	API_URL,
	IMAGE_FOURTH_ID,
	IMAGE_HOME_URL,
} from "../../../constants/env"
import { token } from "../../../helpers/auth"
import Loader from "../../atoms/Loader"

const ImageHorizontal1 = () => {
	const [principal, setPrincipal] = useState()
	const [route, setRoute] = useState()
	const [error, setError] = useState()
	const [loading, setLoading] = useState()

	const { setShowEventModal, setIDimage } = useContext(GlobalContext)
	const changeData = () => {
		setShowEventModal(true)
		setIDimage("fourth")
	}

	useEffect(() => {
		axios
			.get(`${API_URL}public/imagehome/${IMAGE_FOURTH_ID}`, {
				headers: {
					Authorization: `Bearer ${token()}`,
				},
			})
			.then((resp) => {
				setPrincipal(resp.data.data)
			})
			.catch((err) => {
				setError(err)
			})
			.finally(() => {
				setLoading(false)
			})
	}, [])
	useEffect(() => {
		setRoute(
			`${API_URL}${IMAGE_HOME_URL}${IMAGE_FOURTH_ID}?time=` +
				new Date().getTime()
		)
	}, [])

	if (error) return <h1>{error?.message}</h1>
	if (loading) return <Loader />

	return (
		<div className="container-horizontalImage">
			<img className="horizontal-image" src={route} alt="principal" />
			<div className="container flex flex-col">
				<p
					className="container-phraseHorizontal text-overflow"
					style={{ fontFamily: "Acme" }}
				>
					{principal && principal.description}
				</p>
				{/* <button onClick={changeData}>
					<span className="border-2 ml-2 -mr-3 border-gray-400 mt-6 px-1 rounded-full material-icons-outlined text-gray-400 text-sm">
						edit
					</span>
				</button> */}
			</div>
		</div>
	)
}

export default ImageHorizontal1
