import SocialNetworkGray from "../molecules/header/SocialNetworkGray"

const MainFooter = () => {
	return (
		<div>
			<div className="container-footer font-bold">
				<div>
					<span className="material-symbols-outlined">person_pin_circle</span>
					<h2>Encuentranos</h2>
					<p>7 avenida 1-18 zona 10</p>
					<p>Guatemala Ciudad</p>
				</div>
				<div>
					<span className="material-symbols-outlined">schedule</span>
					<h2>Atención al Cliente</h2>
					<p>Lunes a Viernes 8am a 6pm</p>
					<p>Sábado y Domingo 10am a 8pm</p>
				</div>
				<div>
					<span className="material-symbols-outlined">contact_phone</span>
					<h2>Contáctanos</h2>
					<p>correo@dominio.com</p>
					<p>+502 0000-0000</p>
				</div>
			</div>
			<div className="container-footer-SN">
				<SocialNetworkGray />
			</div>
		</div>
	)
}

export default MainFooter
