import { useContext } from "react"
import GlobalContext from "../../contexts/GlobalContext"
import FormImage from "./body/FormImage"

const EventModal = () => {
	const { IDimage, setShowEventModal } = useContext(GlobalContext)

	return (
		<div className="">
			<header className="">
				<p className="">Cambio de {IDimage}</p>
				<button onClick={() => setShowEventModal(false)}>
					<span className="">close</span>
				</button>
			</header>
			<FormImage />
		</div>
	)
}

export default EventModal
