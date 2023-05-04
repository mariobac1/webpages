import { Link } from "react-router-dom"

const ItemMenu = ({ navi, text }) => {
	return (
		<li>
			<Link className="a_item_menu" to={navi}>
				{text}
			</Link>
		</li>
	)
}

export default ItemMenu
