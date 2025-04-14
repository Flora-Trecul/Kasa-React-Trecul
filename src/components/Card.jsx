import "../styles/Card.scss"

// onClick dans la carte pour la rendre potentiellement cliquable et adapter les instructions selon l'endroit où on l'utilise
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
