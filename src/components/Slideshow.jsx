import Banner from "./Banner.jsx"
import arrowNext from "../assets/arrow_gallery_next.png"
import arrowPrevious from "../assets/arrow_gallery_previous.png"
import { useState } from "react"
import "../styles/Slideshow.scss"

function Slideshow({ gallery, title }) {
	const [imgSrc, updateSrc] = useState(0)
	const [srcNext, updateNext] = useState(1)
	const [srcPrevious, updatePrevious] = useState(gallery.length - 1)
	const [direction, setDirection] = useState("")

	function handleClick(e) {
		const arrow = e.target.ariaLabel

		setDirection(arrow === "Previous" ? " slide-previous" : " slide-next")

		setTimeout(() => {
			updateSrc(
				arrow === "Previous"
					? imgSrc - 1 < 0
						? gallery.length - 1
						: imgSrc - 1
					: imgSrc + 1 >= gallery.length
						? 0
						: imgSrc + 1
			)
			updateNext(
				arrow === "Previous"
					? srcNext - 1 < 0
						? gallery.length - 1
						: srcNext - 1
					: srcNext + 1 >= gallery.length
						? 0
						: srcNext + 1
			)
			updatePrevious(
				arrow === "Previous"
					? srcPrevious - 1 < 0
						? gallery.length - 1
						: srcPrevious - 1
					: srcPrevious + 1 >= gallery.length
						? 0
						: srcPrevious + 1
			)
			setDirection("")
		}, 1000)
	}

	return (
		<div className="banner slideshow">
			<Banner
				section="lodging"
				src={gallery[imgSrc]}
				srcNext={gallery[srcNext]}
				srcPrevious={gallery[srcPrevious]}
				desc={`Photo de l'hébergement ${title}`}
				direction={direction}
			/>
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
