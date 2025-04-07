function Banner({ src, desc }) {
	return (
		<div className="banner">
			<img src={src} alt={`Bannière : Panorama de ${desc}`} className="banner__img" />
			<div className="banner__background"></div>
			<div className="banner__overlay"></div>
		</div>
	)
}

export default Banner
