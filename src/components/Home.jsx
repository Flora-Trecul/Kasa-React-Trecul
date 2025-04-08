import Card from "./Card"
import Banner from "./Banner"
import cover from "../assets/photo_home_mer-falaises.jpg"
import listLogements from "../data/logements.json"

function Home() {
	return (
		<section className="home">
			<Banner section="home" src={cover} desc="Panorama de falaises en bord de mer" />
			<h2 className="home__title">
				Chez vous,
				<br /> partout et ailleurs
			</h2>
			<div className="gallery">
				{listLogements.map((logement) => (
					<Card key={`card-${logement.id}`} title={logement.title} id={logement.id} cover={logement.cover} />
				))}
			</div>
		</section>
	)
}

export default Home
