import { useLocation } from "react-router-dom"

function Banner({ section, src, desc }) {
	const path = useLocation().pathname
	return (
		<div className={section + "__banner"}>
			<img src={src} alt={`Bannière : ${desc}`} className="banner__img" />
			{!path.startsWith("/lodging") && <div className="banner__overlay"></div>}
		</div>
	)
}

export default Banner
