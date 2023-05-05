import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { API_URL } from "../../../constants/env"
import { token } from "../../../helpers/auth"
import Loader from "../../atoms/Loader"
import GlobalContext from "../../../contexts/GlobalContext"
import { useNavigate, useParams } from "react-router-dom"

const Form = () => {
	const nav = useNavigate()
	const params = useParams()
	const [error, setError] = useState()
	const { userData } = useContext(GlobalContext)

	const [loading, setLoading] = useState(false)
	const [success, setSuccess] = useState(null)
	const [product, setProduct] = useState()
	const [miJson, setMiJson] = useState({
		name: "",
		price: 0.0,
		description: "",
		file: null,
	})

	useEffect(() => {
		if (params?.id) {
			setLoading(true)
			axios
				.get(`${API_URL}public/product/${params.id}`)
				.then((data) => {
					setProduct(data.data.data)
				})
				.finally(() => {
					setLoading(false)
				})
		}
	}, [])

	const handleInputChange = (event) => {
		const { name, value } = event.target
		setMiJson({ ...miJson, [name]: value })
	}

	const handleFileChange = (event) => {
		setMiJson({ ...miJson, file: event.target.files[0] })
	}

	const eraseForm = () => {
		document.getElementById("productForm").reset()
	}

	const handleSubmit = (e) => {
		e.preventDefault()

		const data = {
			name: miJson.name,
			price: parseFloat(miJson.price),
			description: miJson.description,
			file: miJson.file,
		}

		axios
			.post(`${API_URL}private/product`, data, {
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
			})
			.catch((err) => {
				setError(err)
			})
			.finally(() => {
				setLoading(false)
			})
	}

	if (!userData) nav("/")
	if (loading) return <Loader />
	if (error) return <h1>{error?.message}</h1>

	return (
		<section className="inputProduct-page">
			<h1>¡Ofrece a tus clientes una mejor expreriencia!</h1>
			<h2 className="">{`${params.iD ? "Editar" : "Crear"}`} producto</h2>
			<form className="container-form" id="productForm" onSubmit={handleSubmit}>
				<div>
					<label htmlFor="name">NOMBRE DE PRODUCTO:</label>
					<input
						type="text"
						name="name"
						onChange={handleInputChange}
						defaultValue={product && product.name}
						required
					/>
				</div>
				<div>
					<label htmlFor="name">PRECIO DE PRODUCTO:</label>
					<input
						type="number"
						name="price"
						onChange={handleInputChange}
						defaultValue={product && product.price}
						step="0.01"
						required
					/>
				</div>
				<div>
					<label htmlFor="name">DESCRIPCCIÓN:</label>
					<textarea
						name="description"
						rows="5"
						onChange={handleInputChange}
						defaultValue={product && product.description}
					/>
				</div>
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
				<input type="submit" value="Crear Producto" />
			</form>
		</section>
	)
}

export default Form
