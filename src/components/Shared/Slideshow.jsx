import Banner from "./Banner"
import arrowNext from "../../assets/arrow_gallery_next.png"
import arrowPrevious from "../../assets/arrow_gallery_previous.png"
import { useState } from "react"
import "./Slideshow.scss"

function Slideshow({ gallery, title }) {
	const [srcCurrent, setCurrent] = useState(0)
	const [srcNext, setNext] = useState(1)
	const [srcPrevious, setPrevious] = useState(gallery.length - 1)
	const [direction, setDirection] = useState("")

	function handleClick(e) {
		const arrow = e.target.ariaLabel

		// Gère l'ajout de la classe "slide-previous" ou "slide-next" pour jouer l'animation vers la gauche ou la droite
		setDirection(arrow === "Previous" ? " slide-previous" : " slide-next")

		// Fonction pour actualiser l'index des images dans le slideshow
		function updateSrc(src, setSrc) {
			const newIndex =
				// Clic sur previous : si l'index précédent est inférieur à 0 on affiche la dernière image de la liste
				// Clic sur next : si l'index suivant est supérieur au nombre total d'images, on affiche la première
				arrow === "Previous" ? (src - 1 < 0 ? gallery.length - 1 : src - 1) : src + 1 >= gallery.length ? 0 : src + 1
			setSrc(newIndex)
		}

		// set Timeout pour changer les src des images après avoir joué l'animation
		setTimeout(() => {
			updateSrc(srcCurrent, setCurrent)
			updateSrc(srcPrevious, setPrevious)
			updateSrc(srcNext, setNext)

			// On enlève la classe "slide-previous/next" pour ne pas rejouer l'animation
			setDirection("")
		}, 700)
	}

	return (
		<div className="banner slideshow">
			<Banner
				section="lodging"
				src={gallery[srcCurrent]}
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
						{srcCurrent + 1}/{gallery.length}
					</p>
				</>
			)}
		</div>
	)
}

export default Slideshow
