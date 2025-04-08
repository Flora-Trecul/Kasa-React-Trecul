import { Link } from "react-router-dom"
import { useLocation } from "react-router-dom"
import logo from "../assets/logo_Kasa.png"
import logoSmall from "../assets/logo_Kasa_small.png"

function Header() {
	const currentPath = useLocation().pathname

	return (
		<header className="header">
			<div className="header__container">
				<h1 className="header__title">
					<picture>
						<source
							srcSet={`${logo} 210w, ${logoSmall} 145w`}
							type="image/png"
							sizes="(max-width: 768px) 145px, 210px"
						/>
						<img src="src/assets/logo_Kasa.png" alt="Logo de Kasa" />
					</picture>
					<span className="header__title__text">Kasa</span>
				</h1>
				<nav className="header__navbar">
					<Link to="/" className={`header__navbar__link ${currentPath === "/" ? " active" : ""}`}>
						Accueil
					</Link>
					<Link to="/about" className={`header__navbar__link ${currentPath === "/about" ? " active" : ""}`}>
						A propos
					</Link>
				</nav>
			</div>
		</header>
	)
}

export default Header
