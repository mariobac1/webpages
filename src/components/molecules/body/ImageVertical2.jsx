import { useContext, useEffect, useState } from "react"
import GlobalContext from "../../../contexts/GlobalContext"
import axios from "axios"
import { API_URL, IMAGE_HOME_URL, IMAGE_THIRD_ID } from "../../../constants/env"
import { token } from "../../../helpers/auth"
import Loader from "../../atoms/Loader"

const ImageVertical2 = () => {
	const [principal, setPrincipal] = useState()
	const [route, setRoute] = useState()
	const [error, setError] = useState()
	const [loading, setLoading] = useState()

	const { setShowEventModal, setIDimage } = useContext(GlobalContext)
	const changeData = () => {
		setShowEventModal(true)
		setIDimage("third")
	}

	useEffect(() => {
		axios
			.get(`${API_URL}public/imagehome/${IMAGE_THIRD_ID}`, {
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
			`${API_URL}${IMAGE_HOME_URL}${IMAGE_THIRD_ID}?time=` +
				new Date().getTime()
		)
	}, [])

	if (error) return <h1>{error?.message}</h1>
	if (loading) return <Loader />
	return (
		<div className="container-verticalImage">
			<img className="vertical-image" src={route} alt="main" />
			<div className="flex flex-col mx-auto container">
				<p
					className="container-phraseVertical2 rounded-l-full items-center inline-block -mt-80  bg-gray-500 bg-opacity-50  text-center text-white 2xl:text-5xl xl:text-3xl text-overflow"
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

export default ImageVertical2
