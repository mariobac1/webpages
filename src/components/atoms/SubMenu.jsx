import { Link } from "react-router-dom"

const SubMenu = ({ navi, text }) => {
	return (
		<ul>
			<li className="h-8 mb-8">
				<Link className="menu-item" to={navi}>
					<h4 className="text-gray-700 ml-2 truncate hover:font-semibold">
						{text}
					</h4>
				</Link>
			</li>
		</ul>
	)
}

export default SubMenu
