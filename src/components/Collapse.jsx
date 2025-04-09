import { useState } from "react"
import chevronUp from "../assets/icon_chevron_up.png"
import chevronDown from "../assets/icon_chevron_down.png"

function Collapse({ title, content }) {
	const [open, setOpen] = useState("haut")
	const active = open === "bas" ? " active" : ""

	return (
		<>
			<h2 className="collapse__title">{title}</h2>
			<img
				className={"collapse__icon"}
				onClick={() => setOpen(open === "haut" ? "bas" : "haut")}
				src={open === "haut" ? chevronUp : chevronDown}
				alt={`Icône chevron vers le ${open}`}
			/>
			<p className={"collapse__content" + active}>{content}</p>
		</>
	)
}

export default Collapse
