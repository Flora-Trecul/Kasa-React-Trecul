import { Link } from "react-router-dom"

function Error() {
	return (
		<main className="error">
			<h2 className="error__title">404</h2>
			<p className="error__text">
				Oups ! La page que <br />
				vous demandez n'existe pas
			</p>
			<Link to="/" className="error__link">
				Retourner sur la page d'accueil
			</Link>
		</main>
	)
}
export default Error
