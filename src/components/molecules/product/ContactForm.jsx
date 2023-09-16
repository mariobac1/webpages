import { useState } from "react"

const ContactForm = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		date: "",
		message: "",
	})

	const handleChange = (event) => {
		const { name, value } = event.target
		setFormData({
			...formData,
			[name]: value,
		})
	}

	const handleSubmit = (event) => {
		event.preventDefault()
		// Aquí puedes agregar la lógica para enviar los datos del formulario
		console.log("Formulario enviado:", formData)
	}

	return (
		<div className="contact-form-container">
			<p>Por Correo Electrónico</p>
			<form onSubmit={handleSubmit}>
				<div className="contact-form">
					<label htmlFor="name">Nombre:</label>
					<input
						type="text"
						id="name"
						name="name"
						value={formData.name}
						onChange={handleChange}
						required
					/>
				</div>
				<div>
					<label htmlFor="email">Correo electrónico:</label>
					<input
						type="email"
						id="email"
						name="email"
						value={formData.email}
						onChange={handleChange}
						required
					/>
				</div>
				<div>
					<label htmlFor="date">Fecha:</label>
					<input
						type="date"
						id="date"
						name="date"
						value={formData.date}
						onChange={handleChange}
						required
					/>
				</div>
				<div>
					<label htmlFor="message">Mensaje:</label>
					<textarea
						id="message"
						name="message"
						value={formData.message}
						onChange={handleChange}
						required
					/>
				</div>
				<button type="submit">Enviar</button>
			</form>
		</div>
	)
}

export default ContactForm
