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
