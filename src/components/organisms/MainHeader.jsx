import Logo from "../molecules/header/Logo"
import MainMenu from "../molecules/header/MainMenu"
import SocialNetwork from "../molecules/header/SocialNetwork"

const MainHeader = () => {
	return (
		<div>
			<div className="container-header bg-gradient">
				<div className="flex">
					<div className="w-1/4 pt-2">
						<Logo />
					</div>
					<div className="w-3/4 pt-4">
						<div>
							<SocialNetwork />
						</div>
						<div className="mx-auto">
							<MainMenu />
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default MainHeader
