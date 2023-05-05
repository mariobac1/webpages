import { API_URL, IMAGE_HOME_URL, LOGO_ID } from "../../constants/env"

const LoginTemplate = ({ children, title }) => {
	return (
		<section className="container-login">
			<div className="container-logindiv2">
				<div className="container-logindiv4">
					<img
						src={
							`${API_URL}${IMAGE_HOME_URL}${LOGO_ID}?time=` +
							new Date().getTime()
						}
						alt="logo"
					/>
					<h4>{title}</h4>
					{children}
				</div>
				<div className="container-login2">
					<div>
						<span>Para estar como en casa</span>
						<h4>Disfruta de nuestra Antigua Guatemala</h4>
					</div>
				</div>
			</div>
		</section>
	)
}
export default LoginTemplate
