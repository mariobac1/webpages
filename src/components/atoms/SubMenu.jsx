import { Link } from "react-router-dom"

const SubMenu = ({ navi, text }) => {
	return (
		<ul>
			<li className="">
				<Link className="" to={navi}>
					<h4 className="">{text}</h4>
				</Link>
			</li>
		</ul>
	)
}

export default SubMenu
