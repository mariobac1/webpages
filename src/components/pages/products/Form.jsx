import axios from "axios"
import { useState } from "react"
import { API_URL } from "../../../constants/env"

import { token } from "../../../helpers/auth"
import Loader from "../../atoms/Loader"

const Form = () => {
	// const [file, setFile] = useState(null)
	const [error, setError] = useState()
	const [loading, setLoading] = useState(false)
	// const { userData } = useContext(UserContext)
	const [miJson, setMiJson] = useState({
		name: "",
		price: 0.0,
		description: "",
		file: null,
	})

	const handleInputChange = (event) => {
		const { name, value } = event.target
		setMiJson({ ...miJson, [name]: value })
		console.log(miJson)
	}

	const handleFileChange = (event) => {
		setMiJson({ ...miJson, file: event.target.files[0] })
		console.log(miJson)
	}

	const handleSubmit = (e) => {
		e.preventDefault()

		const data = {
			name: miJson.name,
			price: parseFloat(miJson.price),
			description: miJson.description,
			file: miJson.file,
			// details: {
			// 	who_make: userData.email,
			// },
		}

		axios
			.post(`${API_URL}private/product`, data, {
				headers: {
					Authorization: `Bearer ${token()}`,
					"Content-Type": "multipart/form-data",
				},
			})
			.then((resp) => {
				setLoading(true)
				console.log(resp)
			})
			.catch((err) => {
				setError(err)
				alert("ERROR AL CREAR EL PRODUCTO")
			})
			.finally(() => {
				setLoading(false)
			})
	}

	if (loading) return <Loader />
	if (error) return <h1>{error?.message}</h1>

	return (
		<div className="pt-16 max-w-256 m-auto">
			<section className="pt-10">
				<h1 className="text-4xl mb-6">Crear Producto</h1>
				<form onSubmit={handleSubmit}>
					<div className="grid grid-cols-2 gap-6 mb-6">
						<input
							type="text"
							name="name"
							placeholder="Nombre del Producto"
							onChange={handleInputChange}
							required
						/>
						<input
							type="number"
							name="price"
							placeholder="Precio del producto"
							onChange={handleInputChange}
							step="0.01"
							required
						/>
					</div>
					<textarea
						name="description"
						rows="10"
						className="mb-4"
						onChange={handleInputChange}
					/>
					<div>
						<label htmlFor="file">Imagen: *.jpg, *.jepg, *.png</label>
						<input
							type="file"
							id="file"
							name="file"
							className="block w-full text-sm text-slate-500
								file:mr-4 file:py-2 file:px-4
								file:rounded-full file:border-0
								file:text-sm file:font-semibold
								file:bg-violet-50 file:text-violet-700
								hover:file:bg-violet-100"
							onChange={handleFileChange}
						/>
					</div>
					<button type="submit" className="bg-gradient">
						Crear Producto
					</button>
				</form>
			</section>
		</div>
	)
}

export default Form
