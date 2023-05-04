import { useContext } from "react"
import GlobalContext from "../../../contexts/GlobalContext"
import FormBox from "./FormBox"

const EventBox = () => {
	const { nameForm, setShowEventBox } = useContext(GlobalContext)

	return (
		<div className="container-window">
			<div className="container-windowForm">
				<div className="container-windowTop">
					<p style={{ color: "white" }}>Cambio de {nameForm}</p>
					<button onClick={() => setShowEventBox(false)}>
						<span
							className="material-icons-outlined"
							style={{ color: "white" }}
						>
							close
						</span>
					</button>
				</div>
				<FormBox />
			</div>
		</div>
	)
}

export default EventBox
