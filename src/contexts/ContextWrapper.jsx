import { useEffect, useState } from "react"
import GlobalContext from "./GlobalContext"
import {
	LOGO_ID,
	IMAGE_PRINCIPAL_ID,
	IMAGE_THIRD_ID,
	IMAGE_SECOND_ID,
	IMAGE_FOURTH_ID,
} from "../constants/env"

const ContextWrapper = ({ children }) => {
	const [showEventModal, setShowEventModal] = useState(false)
	const [IDimage, setIDimage] = useState("")
	const [homeImageID, setHomeImageID] = useState("")

	useEffect(() => {
		switch (IDimage) {
			case "logo":
				setHomeImageID(`${LOGO_ID}`)
				break
			case "principal":
				setHomeImageID(`${IMAGE_PRINCIPAL_ID}`)
				break
			case "second":
				setHomeImageID(`${IMAGE_SECOND_ID}`)
				break
			case "third":
				setHomeImageID(`${IMAGE_THIRD_ID}`)
				break
			case "fourth":
				setHomeImageID(`${IMAGE_FOURTH_ID}`)
				break
			// case "Box1":
			// 	setHomeImageID(`${IMAGE_FOURTH_ID}`)
			// 	break
			// case "Box2":
			// 	setHomeImageID(`${IMAGE_FOURTH_ID}`)
			// 	break
			// case "Box3":
			// 	setHomeImageID(`${IMAGE_FOURTH_ID}`)
			// 	break
			case "":
				setHomeImageID("")
				break
		}
	}, [IDimage])

	return (
		<GlobalContext.Provider
			value={{
				showEventModal,
				setShowEventModal,
				IDimage,
				setIDimage,
				homeImageID,
				setHomeImageID,
			}}
		>
			{children}
		</GlobalContext.Provider>
	)
}

export default ContextWrapper
