import axios from "axios"
import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { API_URL } from "../../constants/env"
import { setToken } from "../../helpers/auth"
import LoginTemplate from "../templates/Login"
import GlobalContext from "../../contexts/GlobalContext"

const Login = () => {
	const nav = useNavigate()
	const { setUserData } = useContext(GlobalContext)

	const [error, setError] = useState()
	const [data, setData] = useState({ email: "", password: "" })

	const changeData = (e) => {
		setData({
			...data,
			[e.target.name]: e.target.value,
		})
	}

	const handleSubmit = (e) => {
		e.preventDefault()

		axios
			.post(`${API_URL}public/login`, data)
			.then((resp) => {
				setToken(resp.data.data.token)
				setUserData(resp.data.data.user)
				nav("/")
			})
			.catch((err) => {
				setError(err)
			})
	}

	return (
		<LoginTemplate title="Iniciar sesión">
			<form onSubmit={handleSubmit}>
				<div className="mb-4">
					<input
						type="email"
						placeholder="Correo electrónico"
						name="email"
						onChange={changeData}
						required
					/>
				</div>
				<div className="mb-4">
					<input
						type="password"
						placeholder="Contraseña"
						name="password"
						onChange={changeData}
						required
					/>
				</div>
				<div className="text-center pt-1 mb-12 pb-1">
					<button className="bg-gradient w-full" type="submit">
						Ingresar
					</button>
				</div>
				{error && (
					<p className="text-center p-2 bg-red-100 text-red-800">
						{error?.response?.data?.data}
					</p>
				)}
			</form>
		</LoginTemplate>
	)
}

export default Login
