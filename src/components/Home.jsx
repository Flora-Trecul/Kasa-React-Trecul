import Card from "./Card"
import Banner from "./Banner"
import cover from "../assets/photo_home_mer-falaises.jpg"
import listLodgings from "../data/logements.json"

function Home() {
	return (
		<section className="home">
			<div className="banner">
				<Banner section="home" src={cover} desc="Panorama de falaises en bord de mer" />
			</div>
			<h2 className="home__title">
				Chez vous,
				<br /> partout et ailleurs
			</h2>
			<div className="gallery">
				{listLodgings.map((lodging) => (
					<Card key={`card-${lodging.id}`} title={lodging.title} id={lodging.id} cover={lodging.cover} />
				))}
			</div>
		</section>
	)
}

export default Home
