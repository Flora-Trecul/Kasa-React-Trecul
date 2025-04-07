// import { useState } from "react"
// import "./App.css"
import Card from "./Card"
import Banner from "./Banner"

function Home() {
	// const [count, setCount] = useState(0)

	return (
		<main>
			<Banner />
			<h2>Chez nous, partout et ailleurs</h2>
			<div className="gallery">
				<Card />
			</div>
		</main>
	)
}

export default Home
