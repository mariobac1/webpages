const Slogan = () => {
	return (
		<div>
			<div className="container  mx-auto">
				<h1 className="container-slogan" style={{ fontFamily: "Lilita one" }}>
					¡ CONFETTI el toque de moda que necesitas !
				</h1>
				<div>
					<button
						className="bg-gradient-buttom"
						style={{ fontFamily: "Delicious Handrawn" }}
					>
						<p>PROMOCIONES</p>
						<p className="icon-cart material-symbols-outlined">
							shopping_cart_checkout
						</p>
					</button>
				</div>
			</div>
		</div>
	)
}

export default Slogan
