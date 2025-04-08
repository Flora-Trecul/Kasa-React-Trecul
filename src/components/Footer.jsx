import logo from "../assets/logo_Kasa_footer.png"

function Footer() {
	return (
		<footer className="footer">
			<img src={logo} alt="Logo de Kasa" />
			<p className="footer__text">© 2020 Kasa. All rights reserved</p>
		</footer>
	)
}

export default Footer
