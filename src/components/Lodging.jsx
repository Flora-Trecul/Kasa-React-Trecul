import Slideshow from "./Slideshow.jsx"
import Collapse from "./Collapse.jsx"
import listLodgings from "../data/logements.json"
import { useLocation } from "react-router-dom"
import starFull from "../assets/icon_star_full.png"
import starEmpty from "../assets/icon_star_empty.png"

function Lodging() {
	const currentId = useLocation().pathname.toString().split("/lodging/")[1]
	const lodging = listLodgings.find((lodging) => lodging.id === currentId)
	const range = [1, 2, 3, 4, 5]

	return (
		<section className="lodging">
			<Slideshow gallery={lodging.pictures} title={lodging.title} />
			<div className="lodging__info">
				<div>
					<h2 className="lodging__info__title">{lodging.title}</h2>
					<p className="lodging__info__content">{lodging.location}</p>
					<div className="lodging__info__tags">
						{lodging.tags.map((tag, index) => (
							<span className="lodging__info__tags__tag" key={lodging.id + "-tag" + (index + 1)}>
								{tag}
							</span>
						))}
					</div>
				</div>
				<div className="lodging__info__host">
					<div className="lodging__info__host__content">
						<p className="lodging__info__host__content__name">{lodging.host.name}</p>
						<img className="lodging__info__host__content__picture" src={lodging.host.picture} alt="Photo de l'hôte" />
					</div>
					<div className="lodging__info__host__ranking">
						{range.map((number, index) =>
							lodging.rating >= number ? (
								<img key={lodging.id + "-star" + (index + 1)} src={starFull} alt="Icône étoile pleine" />
							) : (
								<img key={lodging.id + "-star" + (index + 1)} src={starEmpty} alt="Icône étoile vide" />
							)
						)}
					</div>
				</div>
			</div>
			<div className="lodging__desc">
				<article className="lodging__collapse collapse">
					<Collapse title="Description" content={lodging.description} />
				</article>
				<article className="lodging__collapse collapse">
					<Collapse
						title="Équipements"
						content={lodging.equipments.map((item, index) => (
							<span key={lodging.id + "-equipment" + (index + 1)}>
								{item}
								<br />
							</span>
						))}
					/>
				</article>
			</div>
		</section>
	)
}

export default Lodging
