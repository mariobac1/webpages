import { Link } from "react-router-dom"
import HamburguerMenu from "./Hamburguer"
import { useContext, useEffect, useState } from "react"
import GlobalContext from "../../../contexts/GlobalContext"
import ItemMenu from "../../atoms/ItemMenu"

const MainMenu = () => {
	const userData = useContext(GlobalContext)
	const [openMenu, setOpenMenu] = useState(false)

	const handleDocumentClick = (e) => {
		const menu = document.querySelector(".container-mainMenu")
		if (!menu.contains(e.target)) {
			setOpenMenu(false)
		}
	}

	useEffect(() => {
		document.addEventListener("click", handleDocumentClick)
		console.log("first")
		return () => {
			document.removeEventListener("click", handleDocumentClick)
			console.log("first")
		}
	}, [])

	const renderMenu = () => {
		setOpenMenu(!openMenu)
	}

	return (
		<nav className="container-mainMenu">
			<ul className="mainMenu">
				<li style={{ fontFamily: "Delicious Handrawn" }}>
					<Link to="/">INICIO</Link>
				</li>
				<li>|</li>
				{userData ? (
					<li style={{ fontFamily: "Delicious Handrawn" }}>
						<div className="selector" onClick={() => renderMenu()}>
							PRODUCTOS{" "}
							<span className="material-symbols-outlined">expand_more</span>{" "}
						</div>
						<div
							className={` ${
								!openMenu ? "container-subMenuHidden" : "container-subMenu"
							}`}
						>
							<ul>
								<div
									onClick={() => {
										setOpenMenu(!openMenu)
									}}
								>
									<ItemMenu navi={"/producto"} text={"Mis Productos"} />
								</div>
								<div
									onClick={() => {
										setOpenMenu(!openMenu)
									}}
								>
									<ItemMenu
										navi={"/producto/tabla"}
										text={"Tabla de Productos"}
									/>
								</div>
								<div
									onClick={() => {
										setOpenMenu(!openMenu)
									}}
								>
									<ItemMenu navi={"/producto/crear"} text={"Nuevo producto"} />
								</div>
							</ul>
						</div>
					</li>
				) : (
					<li style={{ fontFamily: "Delicious Handrawn" }}>
						<Link to="/producto">PRODUCTOS</Link>
					</li>
				)}
				<li>|</li>
				<li style={{ fontFamily: "Delicious Handrawn" }}>
					<Link to="/contact">QUIENES SOMOS</Link>
				</li>
			</ul>
			<div className="hamburguerMenu">
				<HamburguerMenu />
			</div>
		</nav>
	)
}

export default MainMenu
