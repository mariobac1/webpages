import { Link } from "react-router-dom"

const ItemMenu = ({ navi, text }) => {
	return (
		<li className="">
			<Link className="" to={navi}>
				{text}
			</Link>
		</li>
	)
}

export default ItemMenu
