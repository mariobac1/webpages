import Card from "../molecules/body/Card"

const InfoBox = () => {
	return (
		<div>
			<div className="container  mx-auto">
				<h2
					className="container-slogan font-bold "
					style={{ fontFamily: "Sansita" }}
				>
					TODO LO QUE NECESITAS SABER
				</h2>
				<p
					className="container-slogan"
					style={{
						fontFamily: "Shadows Into Light",
						fontSize: "2.5rem",
						color: "green",
					}}
				>
					¡ No dejes para mañana lo que puedes comprar hoy !
				</p>
				<div className="">
					<Card />
				</div>
			</div>
		</div>
	)
}

export default InfoBox
