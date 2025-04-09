import Banner from "./Banner.jsx"
import arrowNext from "../assets/arrow_gallery_next.png"
import arrowPrevious from "../assets/arrow_gallery_previous.png"
import { useState } from "react"

function Slideshow({ gallery, title }) {
	const [imgSrc, updateSrc] = useState(0)

	function handleClick(e) {
		const arrow = e.target.ariaLabel
		const banner = document.querySelector(".lodging__banner img")
		const index = gallery.indexOf(banner.src)

		if (arrow === "Previous") {
			if (index - 1 < 0) {
				updateSrc(gallery.length - 1)
			} else {
				updateSrc(index - 1)
			}
		} else {
			if (index + 1 >= gallery.length) {
				updateSrc(0)
			} else {
				updateSrc(index + 1)
			}
		}
	}

	return (
		<div className="banner">
			<Banner section="lodging" src={gallery[imgSrc]} desc={`Photo de l'hébergement ${title}`} />
			{gallery.length > 1 && (
				<>
					<img
						onClick={handleClick}
						className="banner__arrow previous"
						src={arrowPrevious}
						alt="Icône flèche image précédente"
						aria-label="Previous"
					/>
					<img
						onClick={handleClick}
						className="banner__arrow next"
						src={arrowNext}
						alt="Icône flèche image suivante"
						aria-label="Next"
					/>
					<p className="banner__currentSlide">
						{imgSrc + 1}/{gallery.length}
					</p>
				</>
			)}
		</div>
	)
}

export default Slideshow
