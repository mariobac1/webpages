import { Link } from "react-router-dom"
import HamburguerMenu from "./Hamburguer"

const MainMenu = () => {
	return (
		<nav>
			<ul className="container-mainMenu">
				<li
					className="hover:text-gray-100 hover:font-semibold"
					style={{ fontFamily: "Delicious Handrawn" }}
				>
					<Link to="/">INICIO</Link>
				</li>
				<p>|</p>
				<li
					className="hover:text-gray-100 hover:font-semibold"
					style={{ fontFamily: "Delicious Handrawn" }}
				>
					<Link to="/producto">PRODUCTOS</Link>
				</li>
				<p>|</p>
				<li
					className="hover:text-gray-100 hover:font-semibold"
					style={{ fontFamily: "Delicious Handrawn" }}
				>
					<Link to="/contact">CONTACTO</Link>
				</li>
			</ul>
			<div className="container-hamburguerMenu">
				<HamburguerMenu />
			</div>
		</nav>
	)
}

export default MainMenu
