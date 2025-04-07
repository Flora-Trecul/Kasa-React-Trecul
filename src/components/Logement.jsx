function Logement() {
	return (
		<main>
			<div>
				{/* <img src="" alt="Image du logement" /> */}
				<h2></h2>
				<p className="location"></p>
				<div className="tags"></div>
			</div>
			<div>
				<p className="host"></p>
				{/* <img src="" alt="Photo de l'hôte" /> */}
				<div className="ranking"></div>
			</div>
			<article>
				<p>Description</p>
				<img src="src/assets/icone_chevron_up.png" alt="Icône chevron vers le haut" />
			</article>
			<article>
				<p>Équipements</p>
				<img src="src/assets/icone_chevron_up.png" alt="Icône chevron vers le haut" />
			</article>
		</main>
	)
}

export default Logement
