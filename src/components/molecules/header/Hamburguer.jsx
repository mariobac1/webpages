import { useContext, useEffect, useState } from "react"
import ItemMenu from "../../atoms/ItemMenu"
import GlobalContext from "../../../contexts/GlobalContext"

const HamburguerMenu = () => {
	const { userData } = useContext(GlobalContext)
	const [openMenu, setOpenMenu] = useState(false)
	const [openMenuProduct, setOpenMenuProduct] = useState(false)

	const handleDocumentClick = (e) => {
		const menu = document.querySelector(".container-Menuhamburguer")
		if (!menu.contains(e.target)) {
			setOpenMenu(false)
			setOpenMenuProduct(false)
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

	const renderMenuProduct = () => {
		setOpenMenuProduct(!openMenuProduct)
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
					{userData ? (
						<div>
							<li onClick={() => renderMenuProduct()}>
								PRODUCTOS{" "}
								<span className="material-symbols-outlined">expand_more</span>
							</li>
							<div
								className={` ${
									!openMenuProduct
										? "container-subMenuHidden"
										: "container-subMenuH"
								}`}
							>
								<ul>
									<div
										onClick={() => {
											setOpenMenuProduct(!openMenuProduct)
											setOpenMenu(!openMenu)
										}}
									>
										<ItemMenu navi={"/producto"} text={"MIS PRODUCTOS"} />
									</div>
									<div
										onClick={() => {
											setOpenMenuProduct(!openMenuProduct)
											setOpenMenu(!openMenu)
										}}
									>
										<ItemMenu
											navi={"/producto/tabla"}
											text={"TABLA DE PRODUCTOS"}
										/>
									</div>
									<div
										onClick={() => {
											setOpenMenuProduct(!openMenuProduct)
											setOpenMenu(!openMenu)
										}}
									>
										<ItemMenu
											navi={"/producto/crear"}
											text={"NUEVO PRODUCTO"}
										/>
									</div>
								</ul>
							</div>
						</div>
					) : (
						<div
							onClick={() => {
								setOpenMenu(!openMenu)
							}}
						>
							<ItemMenu navi={"/producto"} text={"PRODUCTOS"} />
						</div>
					)}
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
