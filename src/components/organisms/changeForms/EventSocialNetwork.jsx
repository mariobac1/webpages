import { useContext } from "react"
import GlobalContext from "../../../contexts/GlobalContext"
import FormSocialNetwork from "./FormSocialNetwork"

const EventSocialNetwork = () => {
	const { nameForm, setShowEventSocialNetwork } = useContext(GlobalContext)

	return (
		<div className="container-window">
			<div className="container-windowForm">
				<div className="container-windowTop">
					<p style={{ color: "white" }}>Cambio de {nameForm}</p>
					<button onClick={() => setShowEventSocialNetwork(false)}>
						<span
							className="material-icons-outlined"
							style={{ color: "white" }}
						>
							close
						</span>
					</button>
				</div>
				<FormSocialNetwork />
			</div>
		</div>
	)
}

export default EventSocialNetwork
