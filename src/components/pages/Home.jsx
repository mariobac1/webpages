import { useContext } from "react"
import GlobalContext from "../../contexts/GlobalContext"
import Slogan from "../organisms/body/Slogan"
import InfoBox from "../organisms/body/InfoBox"
import ImageHorizontal from "../molecules/body/ImageHorizontal"
import EventModal from "../organisms/changeForms/EventModal"
import EventButton from "../organisms/changeForms/EventButton"
import EventTitle from "../organisms/changeForms/EventTitle"
import EventFooter from "../organisms/changeForms/EventFooter"
import EventLogo from "../organisms/changeForms/EventLogo"
import EventBox from "../organisms/changeForms/EventBox"
import EventSocialNetwork from "../organisms/changeForms/EventSocialNetwork"

const Home = () => {
	const {
		showEventModal,
		showEventButton,
		showEventTitle,
		showEventFooter,
		showEventLogo,
		showEventBox,
		showEventSocialNetwork,
	} = useContext(GlobalContext)

	return (
		<div>
			{showEventModal && <EventModal />}
			{showEventButton && <EventButton />}
			{showEventTitle && <EventTitle />}
			{showEventFooter && <EventFooter />}
			{showEventLogo && <EventLogo />}
			{showEventBox && <EventBox />}
			{showEventSocialNetwork && <EventSocialNetwork />}

			<div className="container-homeBody">
				<Slogan />
				<div className="container-images">
					{/* <ImageVertical /> */}
					<ImageHorizontal />
				</div>
				<InfoBox />
			</div>
		</div>
	)
}

export default Home
