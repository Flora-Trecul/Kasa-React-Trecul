import { Link } from "react-router-dom"

function Card({ title, cover, id }) {
	return (
		<Link to={`/logement/${id}`}>
			<article className="card">
				<h2 className="card__title">{title}</h2>
				<img className="card__cover" src={cover} alt={title} />
				<div className="card__overlay"></div>
			</article>
		</Link>
	)
}

export default Card
