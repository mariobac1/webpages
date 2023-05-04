import RenderTitle from "../../atoms/RenderTitle"
import Card from "../../molecules/body/Card"

const InfoBox = () => {
	return (
		<div className=" ">
			<div className="container-infoBoxTitle">
				<h2>
					<RenderTitle value="title2" />
				</h2>
				<h3>
					<RenderTitle value="title3" />
				</h3>
			</div>
			<div>
				<Card />
			</div>
		</div>
	)
}

export default InfoBox
