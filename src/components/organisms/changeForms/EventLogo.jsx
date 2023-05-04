import { useContext } from "react"
import GlobalContext from "../../../contexts/GlobalContext"
import FormLogo from "./FormLogo"

const EventLogo = () => {
	const { nameForm, setShowEventLogo } = useContext(GlobalContext)

	return (
		<div className="container-window">
			<div className="container-windowForm">
				<div className="container-windowTop">
					<p style={{ color: "white" }}>Cambio de {nameForm}</p>
					<button onClick={() => setShowEventLogo(false)}>
						<span
							className="material-icons-outlined"
							style={{ color: "white" }}
						>
							close
						</span>
					</button>
				</div>
				<FormLogo />
			</div>
		</div>
	)
}

export default EventLogo
