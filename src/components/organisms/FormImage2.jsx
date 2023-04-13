import axios from "axios"
import { API_URL } from "../../constants/env"
import { token } from "../../helpers/auth"

const SingleFileUpload = () => {
	const handleSubmite = (e) => {
		e.preventDefault()
		const data = new FormData()
		data.append("nombre", e.target.nombre.value)
		data.append("apellido", e.target.apellido.value)
		data.append("file", e.target.file.files[0])

		axios
			.post(`${API_URL}/image`, data, {
				headers: {
					Authorization: `Bearer ${token()}`,
					"Content-Type": "multipart/form-data",
				},
			})
			.then((resp) => {
				console.log(resp.data.data)
			})
			.catch((err) => {
				console.error(err)
			})
	}
	return (
		<div>
			<h1>Upload single file with fields</h1>
			<form onSubmit={handleSubmite} encType="multipart/form-data">
				Nombre: <input type="text" name="nombre" />
				<br />
				Apellido: <input type="text" name="apellido" />
				<br />
				Files: <input type="file" name="file" />
				<br />
				<br />
				<input type="submit" value="Submit" />
			</form>
		</div>
	)
}

export default SingleFileUpload
