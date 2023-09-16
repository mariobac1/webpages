import { API_URL, IMAGE_PRODUCT_URL } from "../../../constants/env"
import { Link } from "react-router-dom"

const Card = ({ product }) => {
	const { name, id, price, description } = product
	// const [showPopup, setShowPopup] = useState(false)

	// const handleProductClick = () => {
	// 	setShowPopup(true)
	// }

	return (
		<article className="article-product">
			<Link
				to={`/producto/page/${product.id}`}
				className="my-product"
				// onClick={handleProductClick}
			>
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
			{/* {showPopup && (
				<div className="container-window">
					<div className="container-windowForm">
						<div className="container-windowTop">
							<p style={{ color: "white" }}>Contactanos por:</p>
							<button onClick={() => setShowPopup(false)}>
								<span
									className="material-icons-outlined"
									style={{ color: "white" }}
								>
									close
								</span>
							</button>
						</div>
						<p>Reserva tu nueva experiencia por: </p>
						<div className="container-ButtonSelection">
							<Link className="button-selection1">
								<button onClick={() => setShowPopup(false)}>Email</button>
							</Link>
							<a
								className="button-selection1"
								href={`${whatsapp}?text=Estoy interesado en ${name}`}
								target="_blank"
								rel="noopener noreferrer"
							>
								<button onClick={() => setShowPopup(false)}>WhatsApp</button>
							</a>
						</div>
					</div>
				</div>
			)} */}
		</article>
	)
}

export default Card
