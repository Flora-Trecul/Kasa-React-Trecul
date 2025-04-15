import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import "./index.scss"

import Header from "./components/Layout/Header"
import Footer from "./components/Layout/Footer"
import Home from "./components/Pages/Home"
import Lodging from "./components/Pages/Lodging"
import About from "./components/Pages/About"
import Error from "./components/Pages/Error"

// Importation unique des données (à remplacer ici pour traiter la nouvelle base de données)
// Mapping avec le composant Lodging pour générer une route par logement et passer en prop uniquement l'objet associé à l'URL
import listLodgings from "./data/logements.json"
// Récupération des propriétés utilisées sur la page d'accueil pour ne pas passer la liste entière en props
const lodgingsHome = listLodgings.map(({ id, title, cover }) => ({
	id,
	title,
	cover
}))

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<Router>
			<Header />
			<main>
				<Routes>
					<Route path="/" element={<Home lodgings={lodgingsHome} />} />
					{listLodgings.map((lodging) => (
						<Route path={`/lodging/${lodging.id}`} element={<Lodging lodging={lodging} />} />
					))}
					<Route path="/about" element={<About />} />
					<Route path="*" element={<Error />} />
				</Routes>
			</main>
			<Footer />
		</Router>
	</StrictMode>
)
