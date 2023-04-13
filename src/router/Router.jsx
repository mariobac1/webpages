import { createBrowserRouter } from "react-router-dom"
import Error404 from "../components/pages/Error404"
import Home from "../components/pages/Home"
import Login from "../components/pages/Login"
import Products from "../components/pages/Products"
import Form from "../components/pages/products/Form"
import App from "../components/templates/App"

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		errorElement: <Error404 />,
		children: [
			{
				index: true,
				element: <Home />,
			},
			{
				path: "/producto",
				element: <Products />,
			},
			{
				path: "/producto/crear",
				element: <Form />,
			},
		],
	},
	{
		path: "/login",
		element: <Login />,
	},
])

export default router
