import { useEffect, useRef, useState } from "react"
import ItemMenu from "../../atoms/ItemMenu"

const HamburguerMenu = () => {
	const [openMenu, setOpenMenu] = useState(false)

	let menuRef = useRef()

	useEffect(() => {
		let handler = (e) => {
			if (!menuRef.current.contains(e.target)) {
				setOpenMenu(false)
			}
		}
		document.addEventListener("mousedown", handler)

		return () => {
			document.removeEventListener("mousedown", handler)
		}
	}, [])

	return (
		<div ref={menuRef}>
			<div className="container-hamburguer">
				<div
					onClick={() => {
						setOpenMenu(!openMenu)
					}}
					className=" text-white px-1 text-xl hover:border hover:rounded-full"
				>
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
