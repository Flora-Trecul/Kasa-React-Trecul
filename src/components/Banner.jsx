import { useLocation } from "react-router-dom"
import "../styles/Banner.scss"

function Banner({ section, src, desc, title, direction, srcNext, srcPrevious }) {
	const path = useLocation().pathname
	const slider = path.startsWith("/lodging") ? " slider" + direction : ""

	// Adaptation du composant selon la page où il est utilisé : ajout de deux img sur les pages logements pour le slideshow
	// Ajout d'un overlay sur les autres pages + titre sur la page d'accueil
	return (
		<div className={section + "__banner" + slider}>
			{path.startsWith("/lodging") && (
				<img className="banner__img" alt="Image précédente dans le carrousel" src={srcPrevious} />
			)}
			<img src={src} alt={`Bannière : ${desc}`} className="banner__img" />
			{path.startsWith("/lodging") ? (
				<img className="banner__img" alt="Image suivante dans le carrousel" src={srcNext} />
			) : (
				<div className="banner__overlay"></div>
			)}
			{path === "/" && <h2 className="home__title">{title}</h2>}
		</div>
	)
}

export default Banner
