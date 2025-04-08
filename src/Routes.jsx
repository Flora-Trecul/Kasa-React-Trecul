import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import "./index.scss"
import Home from "./components/Home"
import Logement from "./components/Logement"
import Header from "./components/Header"
import Footer from "./components/Footer"
import About from "./components/About"
import Error from "./components/Error"
import listLogements from "./data/logements.json"

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<Router>
			<Header />
			<main>
				<Routes>
					<Route path="/" element={<Home />} />
					{listLogements.map((logement) => (
						<Route path={`/logement/${logement.id}`} element={<Logement />} />
					))}
					<Route path="/about" element={<About />} />
					<Route path="*" element={<Error />} />
				</Routes>
			</main>
			<Footer />
		</Router>
	</StrictMode>
)
