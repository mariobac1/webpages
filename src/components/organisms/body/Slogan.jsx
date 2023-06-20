import RenderButton from "../../atoms/RenderButton"
import RenderTitle from "../../atoms/RenderTitle"

const Slogan = () => {
	return (
		<div className="container-slogan">
			<h1>
				<RenderTitle value="title1" />
			</h1>
			<RenderButton value="Boton1" route="/promociones" />
		</div>
	)
}

export default Slogan
