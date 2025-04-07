import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
// import "./index.css"
import Home from "./components/Home"
import Logement from "./components/Logement"
import Header from "./components/Header"
import Footer from "./components/Footer"
import About from "./components/About"
import Error from "./components/Error"

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<Router>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/logement" element={<Logement />} />
				<Route path="/about" element={<About />} />
				<Route path="*" element={<Error />} />
			</Routes>
			<Footer />
		</Router>
	</StrictMode>
)
