import { useState } from "react"

function Collapse({ title, content }) {
	const [open, setOpen] = useState("haut")
	const active = open === "bas" ? " active" : ""

	return (
		<>
			<h2 className="collapse__title">{title}</h2>
			<img
				className={"collapse__icon"}
				onClick={() => setOpen(open === "haut" ? "bas" : "haut")}
				src={`src/assets/icone_chevron_${open}.png`}
				alt={`Icône chevron vers le ${open}`}
			/>
			<p className={"collapse__content" + active}>{content}</p>
		</>
	)
}

export default Collapse
