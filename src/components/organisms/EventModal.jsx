import { useContext } from "react"
import GlobalContext from "../../contexts/GlobalContext"
import FormImage from "./FormImage"

const EventModal = () => {
	const { IDimage, setShowEventModal } = useContext(GlobalContext)

	return (
		<div className="h-screen bg-white w-1/4 fixed left-100 top-100 flex-col justify-center items-center">
			<header className="bg-gray-100 px-4 py-2 flex justify-between items-end">
				<p className="mx-auto py-2">Cambio de {IDimage}</p>
				<button onClick={() => setShowEventModal(false)}>
					<span className="material-icons-outlined text-gray-400">close</span>
				</button>
			</header>
			<FormImage />
		</div>
	)
}

export default EventModal
