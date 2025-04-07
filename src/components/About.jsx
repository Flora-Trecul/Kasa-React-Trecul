import Banner from "./Banner"

function About() {
	return (
		<main className="about">
			<Banner src="src/assets/photo_about_panorama-montagne.jpg" desc="montagnes" />

			<article>
				<h2>Fiabilité</h2>
				<img src="src/assets/icone_chevron_up.png" alt="Icône chevron vers le haut" />
				<p>
					Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et
					toutes les informations sont régulièrement vérifiées par nos équipes.
				</p>
			</article>
			<article>
				<h2>Respect</h2>
				<img src="src/assets/icone_chevron_up.png" alt="Icône chevron vers le haut" />
				<p>
					La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de
					perturbation du voisinage entraînera une exclusion de notre plateforme.
				</p>
			</article>
			<article>
				<h2>Service</h2>
				<img src="src/assets/icone_chevron_up.png" alt="Icône chevron vers le haut" />
				<p>
					La qualité du service est au cœur de notre engagement chez Kasa. Nous veillons à ce que chaque interaction,
					que ce soit avec nos hôtes ou nos locataires, soit empreinte de respect et de bienveillance.
				</p>
			</article>
			<article>
				<h2>Sécurité</h2>
				<img src="src/assets/icone_chevron_up.png" alt="Icône chevron vers le haut" />
				<p>
					La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement
					correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au
					locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons
					également des ateliers sur la sécurité domestique pour nos hôtes.
				</p>
			</article>
		</main>
	)
}

export default About
