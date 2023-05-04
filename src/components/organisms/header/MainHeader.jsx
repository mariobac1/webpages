import Logo from "../../molecules/header/Logo"
import MainMenu from "../../molecules/header/MainMenu"
import SocialNetwork from "../../molecules/header/SocialNetwork"

const MainHeader = () => {
	return (
		<div className="container-header">
			<Logo />
			<MainMenu />
			<SocialNetwork />
		</div>
	)
}

export default MainHeader
