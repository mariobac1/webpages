import { useEffect, useState } from "react"
import GlobalContext from "./GlobalContext"
import { token } from "../helpers/auth"
import axios from "axios"
import { API_URL } from "../constants/env"

const ContextWrapper = ({ children }) => {
	const [showEventModal, setShowEventModal] = useState(false)
	const [IDimage, setIDimage] = useState("")
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
				IDimage,
				setIDimage,
				homeImageID,
				setHomeImageID,
				userData,
				setUserData,
			}}
		>
			{children}
		</GlobalContext.Provider>
	)
}

export default ContextWrapper
