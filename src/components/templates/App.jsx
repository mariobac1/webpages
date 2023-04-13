import { Outlet } from "react-router-dom"
import MainFooter from "../organisms/MainFooter"
import MainHeader from "../organisms/MainHeader"

function App() {
	return (
		<div className="App">
			<MainHeader />
			<div className="">
				<Outlet />
			</div>
			<MainFooter />
		</div>
	)
}

export default App
