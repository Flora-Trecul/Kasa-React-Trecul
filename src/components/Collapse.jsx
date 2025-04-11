import { useState, useRef, useEffect } from "react"
import chevronUp from "../assets/icon_chevron_up.png"
import "../styles/Collapse.scss"

function Collapse({ title, content }) {
	const [open, setOpen] = useState(false)
	const alt = open ? "bas" : "haut"
	const active = open ? " active" : ""

	const [contentHeight, setHeight] = useState("0px")
	// On crée une référence et on l'associe ensuite au paragraphe dont on veut calculer la hauteur grâce à l'attribut ref
	const contentRef = useRef(null)

	// Actualise la hauteur à chaque fois que l'état de la collpase change
	// La propriété .current est spécifique au hook useEffect
	// La propriété scrollHeigth permet de mesurer la hauteur en pixels d'un élément
	useEffect(() => {
		// La valeur height générée est trop grande, on récupère le padding-bottom pour le soustraire
		const padding = parseFloat(getComputedStyle(contentRef.current).paddingBottom)
		open ? setHeight(`${contentRef.current.scrollHeight - padding}px`) : setHeight("0px")
	}, [open])

	return (
		<>
			<h2 className="collapse__title">{title}</h2>
			<img
				className={"collapse__icon" + active}
				onClick={() => setOpen(!open)}
				src={chevronUp}
				alt={`Icône chevron vers le ${alt}`}
			/>
			<div ref={contentRef} style={{ height: contentHeight }} className={`collapse__content${open ? " active" : ""}`}>
				<p className="collapse__content slide">{content}</p>
			</div>
		</>
	)
}

export default Collapse
