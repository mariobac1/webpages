import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import {
	API_URL,
	IMAGE_HOME_URL,
	IMAGE_PRODUCT_URL,
} from "../../../constants/env"
import Loader from "../../atoms/Loader"
import ContactForm from "./ContactForm"

const Page = () => {
	const params = useParams()
	const [error, setError] = useState()
	const [loading, setLoading] = useState()
	const [miJson, setMiJson] = useState({
		name: "",
		price: 0.0,
		promotion: false,
		description: "",
		file: null,
		details: { complete_description: "", items: {} },
	})
	const trueItems = []
	const falseItems = []

	useEffect(() => {
		console.log(trueItems)
		console.log(falseItems)
	})

	useEffect(() => {
		setLoading(true)
		setError(null)
		axios
			.get(`${API_URL}public/product/${params.id}`)
			.then((data) => {
				const responseData = data.data.data
				setMiJson({
					name: responseData.name,
					price: responseData.price,
					promotion: responseData.promotion,
					description: responseData.description,
					file: null,
					details: responseData.details,
				})
			})
			.catch((err) => {
				setError(err)
			})
			.finally(() => {
				setLoading(false)
			})
	}, [])

	Object.keys(miJson.details.items).forEach((itemKey) => {
		const item = miJson.details.items[itemKey]
		if (item.included) {
			trueItems.push(item)
		} else {
			falseItems.push(item)
		}
	})

	if (loading) return <Loader />
	if (error) return <h1>{error?.message}</h1>
	return (
		<div>
			<h1 className="title-page">{miJson.name}</h1>
			<div className="imagen-product">
				<img
					src={`${API_URL}${IMAGE_PRODUCT_URL}${
						params.id
					}?time=${new Date().getTime()}`}
					alt={miJson.name}
				/>
				<div>
					<p
						dangerouslySetInnerHTML={{
							__html: miJson.details.complete_description.replace(
								/\n/g,
								"<br>"
							),
						}}
					></p>
					<div className="includes">
						<div>
							<h2 className="title2">¿Qué incluye?</h2>
							<ul className="">
								{trueItems.map((item) => (
									<li className="" key={item.name}>
										{" "}
										<span className="material-symbols-outlined">
											done_outline
										</span>
										<p>{item.name}</p>
									</li>
								))}
							</ul>
						</div>
						<div>
							<h2 className="title2">¿Qué no incluye?</h2>
							<ul className="">
								{falseItems.map((item) => (
									<li key={item.name}>
										<span className="material-symbols-outlined">close</span>
										<p>{item.name}</p>
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>
			</div>
			<h3>Opciones para reservar:</h3>
			<div className="contact-Whatsapp">
				<p>Por Whatsapp</p>
				<a
					href={`https://wa.me/50242150655?text=Estoy interesado en ${miJson.name}`}
					target="_blank"
					rel="noopener noreferrer"
				>
					<img
						src={`${API_URL}${IMAGE_HOME_URL}e912973f-dc67-11ed-ba1a-3271c8c03996?time=${new Date().getTime()}`}
						alt="whatsapp"
					/>
				</a>
			</div>
			<ContactForm />
		</div>
	)
}

export default Page
