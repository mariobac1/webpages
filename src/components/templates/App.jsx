import { Outlet } from "react-router-dom"
import MainFooter from "../organisms/footer/MainFooter"
import MainHeader from "../organisms/header/MainHeader"

function App() {
	return (
		<div className="App">
			<header>
				<MainHeader />
			</header>
			<main>
				<Outlet />
			</main>
			<footer>
				<MainFooter />
			</footer>
		</div>
	)
}

export default App
