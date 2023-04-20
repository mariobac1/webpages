import axios from "axios"
import { useState } from "react"
import { API_URL } from "../../../constants/env"

import { token } from "../../../helpers/auth"
import Loader from "../../atoms/Loader"
import { useNavigate } from "react-router-dom"

const Form = () => {
	// const [file, setFile] = useState(null)
	const nav = useNavigate()
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
				nav("/reservaciones")
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
		<section className="">
			<h1>¡Ofrece a tus clientes una mejor expreriencia!</h1>
			<h2 className="">Crear Producto</h2>
			<form className="" onSubmit={handleSubmit}>
				<div>
					<label htmlFor="name">NOMBRE DE PRODUCTO:</label>
					<input
						type="text"
						name="name"
						onChange={handleInputChange}
						required
					/>
				</div>
				<div>
					<label htmlFor="name">PRECIO DE PRODUCTO:</label>
					<input
						type="number"
						name="price"
						onChange={handleInputChange}
						step="0.01"
						required
					/>
				</div>
				<div>
					<label htmlFor="name">DESCRIPCCIÓN:</label>
					<textarea name="description" rows="5" onChange={handleInputChange} />
				</div>
				<div>
					<label htmlFor="file">IMAGEN: *.jpg, *.jepg, *.png</label>
					<input
						type="file"
						id="file"
						name="file"
						// className="block w-full text-sm text-slate-500 bg-white
						// 		file:mr-4 file:py-2 file:px-4
						// 		file:rounded-full file:border-0
						// 		file:text-sm file:font-semibold
						// 		file:bg-violet-50 file:text-violet-700
						// 		hover:file:bg-violet-100"
						onChange={handleFileChange}
					/>
				</div>
				<button type="submit" className="">
					Crear Producto
				</button>
			</form>
		</section>
	)
}

export default Form
