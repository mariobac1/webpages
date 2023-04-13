import { API_URL } from "../../../constants/env"

const SocialNetwork = () => {
	return (
		<nav>
			<ul className="container-socialNetwork">
				<li className="hover:text-gray-100 hover:font-semibold">
					<a href="https://facebook.com">
						<img src={`${API_URL}facebookIcon?time`} alt="facebook" />
					</a>
				</li>
				<li className="hover:text-gray-100 hover:font-semibold">
					<a href="https://instagram.com">
						<img src={`${API_URL}instagramIcon?time=`} alt="instagram" />
					</a>
				</li>
				<li className="hover:text-gray-100 hover:font-semibold">
					<a href="https://twitter.com">
						<img src={`${API_URL}TwitterIcon`} alt="twitter" />
					</a>
				</li>
				<li className="hover:text-gray-100 hover:font-semibold">
					<a href="https://wa.me/50224102600">
						<img src={`${API_URL}whatsappIcon`} alt="whatsapp" />
					</a>
				</li>
			</ul>
		</nav>
	)
}

export default SocialNetwork
