import { useContext } from "react"
import Logo from "../../molecules/header/Logo"
import MainMenu from "../../molecules/header/MainMenu"
import SocialNetwork from "../../molecules/header/SocialNetwork"
import GlobalContext from "../../../contexts/GlobalContext"

const MainHeader = () => {
	const { userData } = useContext(GlobalContext)
	return (
		<div className="container-header">
			<Logo />
			<MainMenu />
			<SocialNetwork />
			{userData && console.log(userData)}
		</div>
	)
}

export default MainHeader
