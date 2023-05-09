import axios from "axios"
import { useContext, useState } from "react"
import { API_URL } from "../../../constants/env"
import GlobalContext from "../../../contexts/GlobalContext"
import { token } from "../../../helpers/auth"

const FormTitle = () => {
	const {
		nameForm,
		homeImageID,
		colorForm,
		descriptionForm,
		fontForm,
		setShowEventTitle,
	} = useContext(GlobalContext)
	const [error, setError] = useState()
	const [success, setSuccess] = useState("")
	const [miJson, setMiJson] = useState({
		name: nameForm,
		color: colorForm,
		description: descriptionForm,
		font: fontForm,
	})

	const handleInputChange = (event) => {
		const { name, value } = event.target
		setMiJson({ ...miJson, [name]: value })
	}
	const handleSubmit = (e) => {
		e.preventDefault()
		const data = {
			name: miJson.name,
			color: miJson.color,
			description: miJson.description,
			font: miJson.font,
		}
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
					setShowEventTitle(false)
				}, 800)
			})
			.catch((err) => {
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
					value={miJson.description}
					onChange={handleInputChange}
				/>
				<p>{error && JSON.stringify(error)}</p>
				{success && <p className="confirmation">{success}</p>}
				<input type="submit" value="Enviar" />
			</div>
		</form>
	)
}

export default FormTitle
