import { useContext } from "react"
import GlobalContext from "../../contexts/GlobalContext"
import EventModal from "../organisms/EventModal"
import Slogan from "../organisms/Slogan"
import ImageVertical2 from "../molecules/body/ImageVertical2"
import ImageVertical1 from "../molecules/body/ImageVertical1"
import ImageHorizontal1 from "../molecules/body/ImageHorizontal1"
import ImageHorizontal2 from "../molecules/body/ImageHorizontal2"
import InfoBox from "../organisms/InfoBox"

const Home = () => {
	const { showEventModal } = useContext(GlobalContext)

	return (
		<div className="container-main">
			{showEventModal && <EventModal />}
			<Slogan />
			<div>
				<div className="container-body-mdOrUpper">
					<ImageVertical1 />
					<ImageVertical2 />
					<div className="container-horizontal-Total">
						<ImageHorizontal1 />
						<ImageHorizontal2 />
					</div>
				</div>
				<InfoBox />
			</div>
			<div className="container-body-mdOrLower">
				<div className="flex w-full">
					<ImageVertical1 />
					<ImageVertical2 />
				</div>
				<div className="">
					<ImageHorizontal1 />
					<ImageHorizontal2 />
				</div>
			</div>
		</div>
	)
}

export default Home
