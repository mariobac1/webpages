import React from "react"
import ReactDOM from "react-dom/client"
import { RouterProvider } from "react-router-dom"
import ContextWrapper from "./contexts/ContextWrapper"
import { UserProvider } from "./contexts/UserContext"
import router from "./router/Router"
import "./styles/css/styles.css"

ReactDOM.createRoot(document.getElementById("root")).render(
	<UserProvider>
		<ContextWrapper>
			<RouterProvider router={router} />
		</ContextWrapper>
	</UserProvider>
)
