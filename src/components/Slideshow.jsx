import Banner from "./Banner.jsx"
import arrowNext from "../assets/arrow_gallery_next.png"
import arrowPrevious from "../assets/arrow_gallery_previous.png"
import { useState } from "react"
import "../styles/Slideshow.scss"

function Slideshow({ gallery, title }) {
	const [imgSrc, updateSrc] = useState(0)

	function handleClick(e) {
		const arrow = e.target.ariaLabel

		if (arrow === "Previous") {
			updateSrc(imgSrc - 1 < 0 ? gallery.length - 1 : imgSrc - 1)
		} else {
			updateSrc(imgSrc + 1 >= gallery.length ? 0 : imgSrc + 1)
		}
	}

	return (
		<div className="banner slideshow">
			<Banner section="lodging" src={gallery[imgSrc]} desc={`Photo de l'hébergement ${title}`} />
			{gallery.length > 1 && (
				<>
					<img
						onClick={handleClick}
						className="slideshow__arrow previous"
						src={arrowPrevious}
						alt="Icône flèche image précédente"
						aria-label="Previous"
					/>
					<img
						onClick={handleClick}
						className="slideshow__arrow next"
						src={arrowNext}
						alt="Icône flèche image suivante"
						aria-label="Next"
					/>
					<p className="slideshow__currentSlide">
						{imgSrc + 1}/{gallery.length}
					</p>
				</>
			)}
		</div>
	)
}

export default Slideshow
