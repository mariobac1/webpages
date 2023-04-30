import { useContext } from "react"
import GlobalContext from "../../../contexts/GlobalContext"
import FormButton from "./FormButton"

const EventButton = () => {
	const { nameForm, setShowEventButton } = useContext(GlobalContext)

	return (
		<div className="container-window">
			<div className="container-windowForm">
				<div className="container-windowTop">
					<p style={{ color: "white" }}>Cambio de {nameForm}</p>
					<button onClick={() => setShowEventButton(false)}>
						<span
							className="material-icons-outlined"
							style={{ color: "white" }}
						>
							close
						</span>
					</button>
				</div>
				<FormButton />
			</div>
		</div>
	)
}

export default EventButton
