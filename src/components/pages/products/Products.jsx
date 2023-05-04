import { token } from "../../../helpers/auth"
import useFetch from "../../../hooks/useFetch"
import Loader from "../../atoms/Loader"
import Card from "../../molecules/product/Card"

const Habitaciones = () => {
	const { data, error, loading } = useFetch("public/product", {
		headers: {
			Authorization: `Bearer ${token()}`,
		},
	})

	if (loading) return <Loader />
	if (error) return <h1>{error?.message}</h1>

	return (
		<section>
			<h1 className="container-titleDisplayProducts">
				Explora nuestros Productos
			</h1>
			<div className="containers-product">
				{data.map((product) => (
					<Card key={product.id} product={product} />
				))}
			</div>
		</section>
	)
}

export default Habitaciones
