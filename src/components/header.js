import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faItchIo, faHackerrank } from '@fortawesome/free-brands-svg-icons'

const Header = () => {
	return(
		<header>
			<div className="overlay"></div>
			<div className="name">
				<h1>Adrien Skrzypczak</h1>
				<h2>Full-Stack Software Engineer</h2>
			</div>
			<div className="contacts">
				<h3>You can also find me on</h3>
				<div className="inner">
					<a href="https://github.com/Nadrielle" target="_blank"><FontAwesomeIcon icon={faGithub} /></a>
					<a href="https://www.linkedin.com/in/adrien-skrzypczak-87b114b8/" target="_blank"><FontAwesomeIcon icon={faLinkedin} /></a>
					<a href="https://adrien-s.itch.io/" target="_blank"><FontAwesomeIcon icon={faItchIo} /></a>
					<a href="https://www.hackerrank.com/adrien_sk" target="_blank"><FontAwesomeIcon icon={faHackerrank} /></a>
				</div>
			</div>
		</header>
	);
}

export default Header;