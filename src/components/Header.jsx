import { Link } from "react-router-dom"

function Header() {
	return (
		<header className="header">
			<div className="header__container">
				<h1 className="header__title">
					<picture>
						<source
							srcSet="src/assets/logo_Kasa.png 210w, src/assets/logo_Kasa_small.png 145w"
							type="image/jpeg"
							sizes="(max-width: 768px) 145px, 210px"
						/>
						<img src="src/assets/logo_Kasa.png" alt="Logo de Kasa" />
					</picture>
					<span className="header__title__text">Kasa</span>
				</h1>
				<nav className="header__navbar">
					<Link to="/" className="header__navbar__link active">
						Accueil
					</Link>
					<Link to="/about" className="header__navbar__link">
						A propos
					</Link>
				</nav>
			</div>
		</header>
	)
}

export default Header
