import { useContext } from "react"
import GlobalContext from "../../../contexts/GlobalContext"
import FormTitle from "./FormTitle"

const EventTitle = () => {
	const { nameForm, setShowEventTitle } = useContext(GlobalContext)

	return (
		<div className="container-window">
			<div className="container-windowForm">
				<div className="container-windowTop">
					<p style={{ color: "white" }}>Cambio de {nameForm}</p>
					<button onClick={() => setShowEventTitle(false)}>
						<span
							className="material-icons-outlined"
							style={{ color: "white" }}
						>
							close
						</span>
					</button>
				</div>
				<FormTitle />
			</div>
		</div>
	)
}

export default EventTitle
