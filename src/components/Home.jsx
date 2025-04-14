import Card from "./Card"
import Banner from "./Banner"
import cover from "../assets/photo_home_mer-falaises.jpg"
import "../styles/Home.scss"
import { useNavigate } from "react-router-dom"

function Home({ lodgings }) {
	const title = (
		<>
			Chez vous, <br />
			partout et ailleurs
		</>
	)

	// useNavigate au lieu d'un Link englobant la Card, plus grande liberté sur les instructions à appliquer au clic
	// Permet aussi de ne pas gêner l'affichage d'autres éléments éventuellement cliquables sur la carte à l'avenir
	// Permettra également de gérer la redirection pour utilisateur authentifié ou non
	const navigate = useNavigate()

	const handleClick = (id) => navigate(`/lodging/${id}`)

	return (
		<section className="home">
			<div className="banner">
				<Banner section="home" src={cover} desc="Panorama de falaises en bord de mer" title={title} />
			</div>

			<div className="gallery">
				{lodgings.map((lodging) => (
					<Card
						key={`card-${lodging.id}`}
						handleClick={() => handleClick(lodging.id)}
						title={lodging.title}
						cover={lodging.cover}
					/>
				))}
			</div>
		</section>
	)
}

export default Home
