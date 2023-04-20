import axios from "axios"
import { useContext, useState } from "react"
import { API_URL } from "../../../constants/env"
import GlobalContext from "../../../contexts/GlobalContext"
import { token } from "../../../helpers/auth"

const FormImage = () => {
	const { IDimage, homeImageID, setShowEventModal } = useContext(GlobalContext)
	const [error, setError] = useState()
	const [success, setSuccess] = useState("")
	const [miJson, setMiJson] = useState({
		name: "IDimage",
		color: "",
		description: "",
		file: null,
	})

	const handleInputChange = (event) => {
		const { name, value } = event.target
		setMiJson({ ...miJson, [name]: value })
	}

	const handleFileChange = (event) => {
		setMiJson({ ...miJson, file: event.target.files[0] })
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		miJson.name = IDimage
		const data = {
			name: miJson.name,
			color: miJson.color,
			description: miJson.description,
			file: miJson.file,
		}
		console.log(data)
		console.log(homeImageID)
		axios
			.put(`${API_URL}private/imagehome/${homeImageID}`, data, {
				headers: {
					Authorization: `Bearer ${token()}`,
					"Content-Type": "multipart/form-data",
				},
			})
			.then(() => {
				setSuccess("Guardado Exitosamente")
				setTimeout(() => {
					setShowEventModal(false)
				}, 800)
			})
			.catch((err) => {
				console.error(err)
				setError(err)
			})
	}
	if (error) return <h1>{error?.message}</h1>

	return (
		<form className="" onSubmit={handleSubmit}>
			<div>
				<label htmlFor="nombre">Color:</label>
				<input
					type="text"
					id="color"
					name="color"
					value={miJson.color}
					onChange={handleInputChange}
				/>
			</div>
			<div>
				<label htmlFor="nombre">Descripción:</label>
				<input
					type="text"
					id="description"
					name="description"
					value={miJson.description}
					onChange={handleInputChange}
				/>
			</div>
			<div>
				<label htmlFor="file">Imagen:</label>
				<input
					type="file"
					id="file"
					name="file"
					// className="block w-full text-sm text-slate-500
					// file:mr-4 file:py-2 file:px-4
					// file:rounded-full file:border-0
					// file:text-sm file:font-semibold
					// file:bg-violet-50 file:text-violet-700
					// hover:file:bg-violet-100"
					accept="image/jpeg,image/png,image/jpg"
					onChange={handleFileChange}
				/>
			</div>
			<p>{error && JSON.stringify(error)}</p>
			<p className="text-green-500">{success && success}</p>
			<button type="submit">Enviar</button>
		</form>
	)
}

export default FormImage
