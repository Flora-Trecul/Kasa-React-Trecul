import "../styles/Card.scss"

function Card({ title, cover, handleClick }) {
	return (
		<article onClick={handleClick} className="card">
			<h2 className="card__title">{title}</h2>
			<img className="card__cover" src={cover} alt={title} />
			<div className="card__overlay"></div>
		</article>
	)
}

export default Card
