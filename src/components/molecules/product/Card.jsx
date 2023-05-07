import { Link } from "react-router-dom"
import { API_URL, IMAGE_PRODUCT_URL } from "../../../constants/env"

const Card = ({ product }) => {
	const { name, id, price, description } = product

	return (
		<article className="article-product">
			<Link to={`/${id}`}>
				<div className="container-imageProduct">
					<img
						className="group-hover/item:ml-1"
						src={`${API_URL}${IMAGE_PRODUCT_URL}${id}?time=${new Date().getTime()}`}
						alt={name}
					/>
				</div>
				<div className="container-infoProduct">
					<h2 className="group-hover/item:font-bold">{name}</h2>
					<h3 className="group-hover/item:text-2xl">Precio: Q.{price}</h3>
					<p className="group-hover/item:font-bold">{description}</p>
				</div>
			</Link>
		</article>
	)
}
export default Card
