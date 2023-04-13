import { API_URL } from "../../../constants/env"

const SocialNetworkGray = () => {
	return (
		<nav>
			<ul className="container-socialNetworkGray">
				<li className="hover:text-gray-100 hover:font-semibold text-sm">
					<a href="https://facebook.com">
						<img src={`${API_URL}facebookGrayIcon?time`} alt="facebook" />
					</a>
				</li>
				<li className="hover:text-gray-100 hover:font-semibold">
					<a href="https://instagram.com">
						<img src={`${API_URL}instagramGrayIcon?time=`} alt="instagram" />
					</a>
				</li>
				<li className="hover:text-gray-100 hover:font-semibold">
					<a href="https://twitter.com">
						<img src={`${API_URL}TwitterGrayIcon`} alt="twitter" />
					</a>
				</li>
				<li className="hover:text-gray-100 hover:font-semibold">
					<a href="https://wa.me/50224102600">
						<img src={`${API_URL}whatsappGrayIcon`} alt="whatsapp" />
					</a>
				</li>
			</ul>
		</nav>
	)
}

export default SocialNetworkGray
