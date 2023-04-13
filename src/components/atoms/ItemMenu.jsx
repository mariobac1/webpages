import { Link } from "react-router-dom"

const ItemMenu = ({ navi, text }) => {
	return (
		<li className="flex  items-center hover:text-gray-500 hover:font-semibold">
			<Link className="text-black lg:text-gray-100 mx-4 my-1" to={navi}>
				{text}
			</Link>
		</li>
	)
}

export default ItemMenu
