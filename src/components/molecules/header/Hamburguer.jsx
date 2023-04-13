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
				className={`absolute mt-1 right-0.5 bg-white    ${
					!openMenu ? "hidden" : "visible"
				}`}
			>
				<ul className="flex flex-col justify-end text-gray-100 divide-y shadow-2xl radius-lg">
					<div
						onClick={() => {
							setOpenMenu(!openMenu)
						}}
					>
						<ItemMenu navi={"/"} text={"Inicio"} />
					</div>
					<div
						onClick={() => {
							setOpenMenu(!openMenu)
						}}
					>
						<ItemMenu navi={"/producto"} text={"Productos"} />
					</div>
					<div
						onClick={() => {
							setOpenMenu(!openMenu)
						}}
					>
						<ItemMenu navi={"/contacto"} text={"Contacto"} />
					</div>
				</ul>
			</div>
		</div>
	)
}

export default HamburguerMenu
