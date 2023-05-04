import { useContext } from "react"
import GlobalContext from "../../../contexts/GlobalContext"
import FormFooter from "./FormFooter"

const EventFooter = () => {
	const { nameForm, setShowEventFooter } = useContext(GlobalContext)

	return (
		<div className="container-window">
			<div className="container-windowForm">
				<div className="container-windowTop">
					<p style={{ color: "white" }}>Cambio de {nameForm}</p>
					<button onClick={() => setShowEventFooter(false)}>
						<span
							className="material-icons-outlined"
							style={{ color: "white" }}
						>
							close
						</span>
					</button>
				</div>
				<FormFooter />
			</div>
		</div>
	)
}

export default EventFooter
