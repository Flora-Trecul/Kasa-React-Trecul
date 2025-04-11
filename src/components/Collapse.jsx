import { useState } from "react"
import chevronUp from "../assets/icon_chevron_up.png"
import "../styles/Collapse.scss"

function Collapse({ title, content }) {
	const [open, setOpen] = useState(false)
	const alt = open ? "bas" : "haut"
	const active = open ? " active" : ""

	return (
		<>
			<h2 className="collapse__title">{title}</h2>
			<img
				className={"collapse__icon" + active}
				onClick={() => setOpen(!open)}
				src={chevronUp}
				alt={`Icône chevron vers le ${alt}`}
			/>
			<p className={"collapse__content" + active}>{content}</p>
		</>
	)
}

export default Collapse
