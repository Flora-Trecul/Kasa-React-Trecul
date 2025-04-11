import { useLocation } from "react-router-dom"
import "../styles/Banner.scss"

function Banner({ section, src, desc, title }) {
	const path = useLocation().pathname
	return (
		<div className={section + "__banner"}>
			<img src={src} alt={`Bannière : ${desc}`} className="banner__img" />
			{!path.startsWith("/lodging") && <div className="banner__overlay"></div>}
			{path === "/" && <h2 className="home__title">{title}</h2>}
		</div>
	)
}

export default Banner
