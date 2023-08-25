import axios from "axios"
import { useEffect, useState } from "react"
import { API_URL } from "../../../constants/env"
import { token } from "../../../helpers/auth"
import Loader from "../../atoms/Loader"
import { useNavigate, useParams } from "react-router-dom"

const Form = () => {
	const nav = useNavigate()
	const params = useParams()
	const [error, setError] = useState()

	const [loading, setLoading] = useState(false)
	const [success, setSuccess] = useState(null)
	const [product, setProduct] = useState()
	const [miJson, setMiJson] = useState({
		name: "",
		price: 0.0,
		promotion: false,
		description: "",
		file: null,
		details: { complete_description: "", items: {} },
	})

	const [productCount, setProductCount] = useState(0)

	const handleProductNameChange = (event, index) => {
		const updatedDetails = { ...miJson.details }
		const productName = `producto${index + 1}`
		updatedDetails.items = {
			...(updatedDetails.items || {}),
			[productName]: {
				name: event.target.value,
				included: miJson.details.items?.[productName]?.included || false,
			},
		}
		setMiJson({
			...miJson,
			details: updatedDetails,
		})
	}

	const handleProductInclusionChange = (event, index) => {
		const updatedDetails = { ...miJson.details }
		const productName = `producto${index + 1}`
		updatedDetails.items = {
			...(updatedDetails.items || {}),
			[productName]: {
				name: miJson.details.items?.[productName]?.name || "",
				included: event.target.checked,
			},
		}
		setMiJson({
			...miJson,
			details: updatedDetails,
		})
	}

	const handleRemoveProduct = (index) => {
		const updatedDetails = { ...miJson.details }
		const productName = `producto${index + 1}`
		delete updatedDetails.items[productName]
		const newItems = {}
		let newIndex = 1

		for (const key in updatedDetails.items) {
			newItems[`producto${newIndex}`] = updatedDetails.items[key]
			newIndex++
		}

		setMiJson((prevMiJson) => ({
			...prevMiJson,
			details: {
				...prevMiJson.details,
				items: newItems,
			},
		}))
		setProductCount((prevProductCount) => prevProductCount - 1)
	}

	const reorderProducts = () => {
		const updatedDetails = { ...miJson.details }
		const newItems = {}
		let newIndex = 1

		for (const key in updatedDetails.items) {
			newItems[`producto${newIndex}`] = updatedDetails.items[key]
			newIndex++
		}

		setMiJson((prevMiJson) => ({
			...prevMiJson,
			details: {
				...prevMiJson.details,
				items: newItems,
			},
		}))
	}

	useEffect(() => {
		if (params?.id) {
			setLoading(true)
			axios
				.get(`${API_URL}public/product/${params.id}`)
				.then((data) => {
					setProduct(data.data.data)
					setMiJson({
						name: data.data.data.name,
						price: data.data.data.price,
						promotion: data.data.data.promotion,
						description: data.data.data.description,
						file: null,
						details: data.data.data.details,
					})
					const itemCount = Object.keys(
						data.data.data.details.items || {}
					).length
					setProductCount(itemCount)
				})
				.finally(() => {
					setLoading(false)
				})
		}
	}, [])
	useEffect(() => {
		console.log(miJson)
	})

	const handleFileChange = (event) => {
		setMiJson({ ...miJson, file: event.target.files[0] })
	}

	const handleCheckBox = (event) => {
		setMiJson({ ...miJson, promotion: event.target.checked })
	}

	const setInputValuesToMiJson = (event) => {
		const { name, value } = event.target

		if (name === "complete_description") {
			setMiJson((prevMiJson) => ({
				...prevMiJson,
				details: {
					...prevMiJson.details,
					complete_description: value,
				},
			}))
		} else {
			setMiJson((prevMiJson) => ({
				...prevMiJson,
				[name]: value,
			}))
		}
	}

	const eraseForm = () => {
		document.getElementById("productForm").reset()
	}

	const handleSubmit = (e) => {
		e.preventDefault()

		reorderProducts()

		const formData = new FormData()
		formData.append("name", miJson.name)
		formData.append("price", miJson.price)
		formData.append("description", miJson.description)
		formData.append("promotion", miJson.promotion)

		const detailsObject = {
			complete_description: miJson.details.complete_description,
			items: miJson.details.items,
		}

		formData.append("details", JSON.stringify(detailsObject))
		formData.append("file", miJson.file)

		if (!params.id) {
			axios
				.post(`${API_URL}private/product`, formData, {
					headers: {
						Authorization: `Bearer ${token()}`,
						"Content-Type": "multipart/form-data",
					},
				})
				.then(() => {
					setLoading(true)
					setSuccess("Guardado Exitosamente")
					setTimeout(() => {
						// eraseForm()
						setSuccess(null)
					}, 1200)
					nav("/producto/tabla")
				})
				.catch((err) => {
					setError(err)
				})
				.finally(() => {
					setLoading(false)
				})
		} else {
			axios
				.put(`${API_URL}private/product/${params.id}`, formData, {
					headers: {
						Authorization: `Bearer ${token()}`,
						"Content-Type": "multipart/form-data",
					},
				})
				.then(() => {
					setLoading(true)
					setSuccess("Guardado Exitosamente")
					setTimeout(() => {
						eraseForm()
						setSuccess(null)
					}, 1200)
					nav("/producto/tabla")
				})
				.catch((err) => {
					setError(err)
				})
				.finally(() => {
					setLoading(false)
				})
		}
	}

	if (loading) return <Loader />
	if (error) return <h1>{error?.message}</h1>

	return (
		<section className="inputProduct-page">
			<h1>¡Ofrece a tus clientes una mejor expreriencia!</h1>
			<h2 className="">{`${params.id ? "Editar" : "Crear"}`} producto</h2>
			<form className="container-form" id="productForm" onSubmit={handleSubmit}>
				<div>
					<label htmlFor="name">NOMBRE DE PRODUCTO:</label>
					<input
						type="text"
						name="name"
						maxLength="50"
						defaultValue={product && product.name}
						onChange={setInputValuesToMiJson}
						required
					/>
				</div>
				<div>
					<label htmlFor="name">PRECIO DE PRODUCTO:</label>
					<input
						type="number"
						name="price"
						defaultValue={product && product.price}
						onChange={setInputValuesToMiJson}
						step="0.01"
						required
					/>
				</div>
				<div>
					<label htmlFor="name">PROMOCIÓN:</label>
					<input
						type="checkbox"
						name="promotion"
						defaultValue={product && product.promotion}
						onChange={handleCheckBox}
					/>
				</div>
				<div>
					<label htmlFor="name">DESCRIPCCIÓN:</label>
					<textarea
						name="description"
						rows="5"
						defaultValue={product && product.description}
						onChange={setInputValuesToMiJson}
					/>
				</div>
				<div>
					<label htmlFor="name">DESCRIPCCIÓN COMPLETA:</label>
					<textarea
						name="complete_description"
						rows="5"
						defaultValue={product && product.details.complete_description}
						onChange={setInputValuesToMiJson}
					/>
				</div>
				<p>Ingrese lo que incluye</p>
				{Array.from({ length: productCount }, (_, index) => (
					<div key={index}>
						{productCount > 0 && (
							<>
								<input
									type="text"
									placeholder={`Item ${index + 1}`}
									value={
										miJson.details.items?.[`producto${index + 1}`]?.name || ""
									}
									onChange={(e) => handleProductNameChange(e, index)}
								/>
								<label>
									Incluir
									<input
										type="checkbox"
										checked={
											miJson.details.items?.[`producto${index + 1}`]
												?.included || false
										}
										onChange={(e) => handleProductInclusionChange(e, index)}
									/>
								</label>
								{index >= 0 && (
									<button
										type="button"
										onClick={() => handleRemoveProduct(index)}
									>
										X
									</button>
								)}
							</>
						)}
					</div>
				))}

				<button type="button" onClick={() => setProductCount(productCount + 1)}>
					Incluir Item +
				</button>

				<div>
					<label htmlFor="file">IMAGEN: *.jpg, *.jepg, *.png</label>
					<input
						type="file"
						id="file"
						name="file"
						onChange={handleFileChange}
					/>
				</div>
				{success && <p className="confirmation">{success}</p>}
				<input
					type="submit"
					value={`${params.id ? "Editar" : "Crear"} Producto`}
				/>
			</form>
		</section>
	)
}

export default Form
