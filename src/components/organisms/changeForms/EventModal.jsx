import { useContext } from "react"
import GlobalContext from "../../../contexts/GlobalContext"
import FormImage from "../body/FormImage"

const EventModal = () => {
	const { nameForm, setShowEventModal } = useContext(GlobalContext)

	return (
		<div className="container-window">
			<div className="container-windowForm">
				<div className="container-windowTop">
					<p style={{ color: "white" }}>Cambio de {nameForm}</p>
					<button onClick={() => setShowEventModal(false)}>
						<span
							className="material-icons-outlined"
							style={{ color: "white" }}
						>
							close
						</span>
					</button>
				</div>
				<FormImage />
			</div>
		</div>
	)
}

export default EventModal
