import { Link } from "react-router-dom"
import HamburguerMenu from "./Hamburguer"

const MainMenu = () => {
	return (
		<nav className="container-mainMenu">
			<ul className="mainMenu">
				<li className="" style={{ fontFamily: "Delicious Handrawn" }}>
					<Link to="/">INICIO</Link>
				</li>
				<li>|</li>
				<li className="" style={{ fontFamily: "Delicious Handrawn" }}>
					<Link to="/producto">PRODUCTOS</Link>
				</li>
				<li>|</li>
				<li className="" style={{ fontFamily: "Delicious Handrawn" }}>
					<Link to="/contact">CONTACTO</Link>
				</li>
			</ul>
			<div className="hamburguerMenu">
				<HamburguerMenu />
			</div>
		</nav>
	)
}

export default MainMenu
