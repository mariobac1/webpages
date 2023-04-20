import { useContext } from "react"
import GlobalContext from "../../contexts/GlobalContext"
import EventModal from "../organisms/EventModal"
import Slogan from "../organisms/body/Slogan"
import InfoBox from "../organisms/body/InfoBox"
import ImageVertical from "../molecules/body/ImageVertical"
import ImageHorizontal from "../molecules/body/ImageHorizontal"

const Home = () => {
	const { showEventModal } = useContext(GlobalContext)

	return (
		<div>
			{showEventModal && <EventModal />}
			<div className="container-homeBody">
				<Slogan />
				<div className="container-images">
					<ImageVertical />
					<ImageHorizontal />
				</div>
				<InfoBox />
			</div>
		</div>
	)
}

export default Home
