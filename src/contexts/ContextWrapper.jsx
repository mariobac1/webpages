import { useEffect, useState } from "react"
import GlobalContext from "./GlobalContext"
import { token } from "../helpers/auth"
import axios from "axios"
import { API_URL } from "../constants/env"

const ContextWrapper = ({ children }) => {
	const [showEventModal, setShowEventModal] = useState(false)
	const [showEventButton, setShowEventButton] = useState(false)
	const [showEventTitle, setShowEventTitle] = useState(false)
	const [showEventLogo, setShowEventLogo] = useState(false)
	const [showEventBox, setShowEventBox] = useState(false)
	const [showEventFooter, setShowEventFooter] = useState(false)
	const [showEventSocialNetwork, setShowEventSocialNetwork] = useState(false)
	const [showEventAboutUs, setShowEventAboutUs] = useState(false)
	const [IDimage, setIDimage] = useState("")
	const [nameForm, setNameForm] = useState("")
	const [descriptionForm, setDescriptionForm] = useState("")
	const [colorForm, setColorForm] = useState("")
	const [bgColorForm, setBgColorForm] = useState("")
	const [fontForm, setFontForm] = useState("")
	const [iconForm, setIconForm] = useState("")
	const [titleForm, setTitleForm] = useState("")
	const [paragraphForm, setParagraphForm] = useState("")
	const [homeImageID, setHomeImageID] = useState("")
	const [userData, setUserData] = useState("")

	useEffect(() => {
		if (token()) {
			axios
				.get(`${API_URL}private/users`, {
					headers: {
						Authorization: `Bearer ${token()}`,
					},
				})
				.then((resp) => {
					setUserData(resp.data.data)
				})
		}
	}, [])

	return (
		<GlobalContext.Provider
			value={{
				showEventModal,
				setShowEventModal,
				showEventButton,
				setShowEventButton,
				showEventTitle,
				setShowEventTitle,
				showEventLogo,
				setShowEventLogo,
				showEventBox,
				setShowEventBox,
				showEventFooter,
				setShowEventFooter,
				showEventSocialNetwork,
				setShowEventSocialNetwork,
				showEventAboutUs,
				setShowEventAboutUs,
				IDimage,
				setIDimage,
				homeImageID,
				setHomeImageID,
				nameForm,
				setNameForm,
				descriptionForm,
				setDescriptionForm,
				colorForm,
				setColorForm,
				bgColorForm,
				setBgColorForm,
				fontForm,
				setFontForm,
				iconForm,
				setIconForm,
				titleForm,
				setTitleForm,
				paragraphForm,
				setParagraphForm,
				userData,
				setUserData,
			}}
		>
			{children}
		</GlobalContext.Provider>
	)
}

export default ContextWrapper
