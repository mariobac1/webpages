import { useEffect, useState } from "react"
import { token } from "../../../helpers/auth"
import useFetch from "../../../hooks/useFetch"
import Loader from "../../atoms/Loader"
import Card from "../../molecules/product/Card"
import axios from "axios"
import { API_URL } from "../../../constants/env"

const Promotions = () => {
	const [data2, setData2] = useState()
	const [error2, setError2] = useState()
	const [loading2, setLoading2] = useState(true)
	const { data, error, loading } = useFetch("public/product", {
		headers: {
			Authorization: `Bearer ${token()}`,
		},
	})

	useEffect(() => {
		axios
			.get(`${API_URL}public/variablevalue`)
			.then((resp) => {
				setData2(resp.data.data)
			})
			.catch((err) => {
				setError2(err)
			})
			.finally(() => {
				setLoading2(false)
			})
	}, [])

	const whats = () => {
		const whatsapp = data2
			.find((card) => card.name.includes("whatsapp_color"))
			?.description.substring(0, 25)
		return whatsapp || ""
	}
	const Boton = () => {
		const Botonfirst = data2
			.find((card) => card.name.includes("Boton1"))
			?.description.substring(0, 25)
		return Botonfirst || ""
	}

	if (loading) return <Loader />
	if (error) return <h1>{error?.message}</h1>
	if (loading2) return <Loader />
	if (error2) return <h1>{error2?.message}</h1>

	return (
		<section>
			<h1 className="container-titleDisplayProducts">{Boton()}</h1>
			<div className="containers-product">
				{data
					.filter((product) => product.promotion)
					.map((product) => (
						<Card key={product.id} product={product} whatsapp={whats()} />
					))}
			</div>
		</section>
	)
}

export default Promotions
