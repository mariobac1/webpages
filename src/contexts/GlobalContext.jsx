import { createContext } from "react"

const GlobalContext = createContext({
	dayIndex: 0,
	setDayIndex: () => {},
	daySelected: null,
	setDaySelected: () => {},
	showEventModal: false,
	setShowEventModal: () => {},
	imageLogo: null,
	setImageLogo: () => {},
	IDimage: "",
	setIDimage: () => {},
	homeImageID: "",
	setHomeImageID: () => {},
	userData: "",
	setUserData: () => {},
})

export default GlobalContext
