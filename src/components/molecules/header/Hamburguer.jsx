import { useEffect, useState } from "react"
import ItemMenu from "../../atoms/ItemMenu"

const HamburguerMenu = () => {
	const [openMenu, setOpenMenu] = useState(false)

	const handleDocumentClick = (e) => {
		const menu = document.querySelector(".container-Menuhamburguer")
		if (!menu.contains(e.target)) {
			setOpenMenu(false)
		}
	}

	useEffect(() => {
		document.addEventListener("click", handleDocumentClick)
		return () => {
			document.removeEventListener("click", handleDocumentClick)
		}
	}, [])

	const renderMenu = () => {
		setOpenMenu(!openMenu)
	}

	return (
		<div className="container-Menuhamburguer">
			<div className="container-hamburguer">
				<div onClick={() => renderMenu()} className="hambur">
					☰
				</div>
			</div>
			<div
				className={` ${
					!openMenu ? "container-subMenuHidden" : "container-subMenuHamburguer"
				}`}
			>
				<ul>
					<div
						onClick={() => {
							setOpenMenu(!openMenu)
						}}
					>
						<ItemMenu navi={"/"} text={"INICIO"} />
					</div>
					<div
						onClick={() => {
							setOpenMenu(!openMenu)
						}}
					>
						<ItemMenu navi={"/producto"} text={"PRODUCTOS"} />
					</div>
					<div
						onClick={() => {
							setOpenMenu(!openMenu)
						}}
					>
						<ItemMenu navi={"/sobrenosotros"} text={"QUIENES SOMOS"} />
					</div>
				</ul>
			</div>
		</div>
	)
}

export default HamburguerMenu
