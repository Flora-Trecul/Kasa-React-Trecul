function Banner({ section, src, desc }) {
	return (
		<div className={section + "__banner banner"}>
			<img src={src} alt={`Bannière : ${desc}`} className="banner__img" />
			<div className="banner__overlay"></div>
		</div>
	)
}

export default Banner
