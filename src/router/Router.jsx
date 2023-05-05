import { createBrowserRouter } from "react-router-dom"
import Error404 from "../components/pages/Error404"
import Home from "../components/pages/Home"
import Login from "../components/pages/Login"
import Form from "../components/pages/products/Form"
import App from "../components/templates/App"
import Products from "../components/pages/products/Products"
import Table from "../components/pages/products/Table"
import AboutUs from "../components/pages/AboutUs"

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
			{
				path: "/producto/editar/:id",
				element: <Form />,
			},
			{
				path: "/producto/tabla",
				element: <Table />,
			},
			{
				path: "/sobrenosotros",
				element: <AboutUs />,
			},
		],
	},
	{
		path: "/login",
		element: <Login />,
	},
])

export default router
