import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faItchIo, faHackerrank } from '@fortawesome/free-brands-svg-icons'

const Header = () => {
	return(
		<header>
			<div className="overlay"></div>
			<div className="name">
				<h1>ADRIEN SKRZYPCZAK</h1>
				<div className="separator"></div>
				<h2>SOFTWARE ENGINEER</h2>
			</div>
			<div className="contacts">
				<h3>You can also find me on</h3>
				<div className="inner">
					<FontAwesomeIcon icon={faGithub} />
					<FontAwesomeIcon icon={faLinkedin} />
					<FontAwesomeIcon icon={faItchIo} />
					<FontAwesomeIcon icon={faHackerrank} />
				</div>
			</div>
		</header>
	);
}

export default Header;