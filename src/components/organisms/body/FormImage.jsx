import axios from "axios"
import { useContext, useState } from "react"
import { API_URL } from "../../../constants/env"
import GlobalContext from "../../../contexts/GlobalContext"
import { token } from "../../../helpers/auth"

const FormImage = () => {
	const {
		nameForm,
		homeImageID,
		colorForm,
		descriptionForm,
		bgColorForm,
		fontForm,
		setShowEventModal,
	} = useContext(GlobalContext)
	const [error, setError] = useState()
	const [success, setSuccess] = useState("")
	const [miJson, setMiJson] = useState({
		name: nameForm,
		color: colorForm,
		description: descriptionForm,
		file: null,
		bgColor: bgColorForm,
		font: fontForm,
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
		const data = {
			name: miJson.name,
			color: miJson.color,
			description: miJson.description,
			file: miJson.file,
			font: miJson.font,
			bgcolor: miJson.bgColor,
		}
		console.log(data)
		axios
			.put(`${API_URL}private/variablevalue/${homeImageID}`, data, {
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
		<form className="formulary" onSubmit={handleSubmit}>
			<div className="formulary-body">
				<label htmlFor="nombre">Color de letra:</label>
				<input
					type="text"
					id="color"
					name="color"
					value={miJson.color}
					onChange={handleInputChange}
				/>
				<label htmlFor="nombre">Color de Fondo:</label>
				<input
					type="text"
					id="bgColor"
					name="bgColor"
					value={miJson.bgColor}
					onChange={handleInputChange}
				/>
				<label htmlFor="nombre">Fuente de texto:</label>
				<input
					type="text"
					id="font"
					name="font"
					value={miJson.font}
					onChange={handleInputChange}
				/>
				<label htmlFor="nombre">Descripción:</label>
				<input
					type="text"
					id="description"
					name="description"
					maxLength="30"
					value={miJson.description}
					onChange={handleInputChange}
				/>
				<label htmlFor="file">Imagen:</label>
				<input
					type="file"
					id="file"
					name="file"
					accept="image/jpeg,image/png,image/jpg"
					onChange={handleFileChange}
				/>
				<p>{error && JSON.stringify(error)}</p>
				{success && <p className="confirmation">{success}</p>}
				<input type="submit" value="Enviar" />
			</div>
		</form>
	)
}

export default FormImage
