import { useContext } from "react"
import GlobalContext from "../../../contexts/GlobalContext"
import FormAboutUs from "./FormAboutUs"

const EventAboutUs = () => {
	const { nameForm, setShowEventAboutUs } = useContext(GlobalContext)

	return (
		<div className="container-window">
			<div className="container-windowForm">
				<div className="container-windowTop">
					<p style={{ color: "white" }}>Cambio de {nameForm}</p>
					<button onClick={() => setShowEventAboutUs(false)}>
						<span
							className="material-icons-outlined"
							style={{ color: "white" }}
						>
							close
						</span>
					</button>
				</div>
				<FormAboutUs />
			</div>
		</div>
	)
}

export default EventAboutUs
