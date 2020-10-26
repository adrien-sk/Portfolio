import React from 'react';

import soundboardThumb from '../images/thumbs/soundboard.png';
import battleshipsThumb from '../images/thumbs/battleships.png';

const SideProjects = () =>{
	return(
		<section id="sideprojects">
			<h2>The Lab : Side Projects</h2>
			<h4>Here's the Lab : Experiments and Projects for Fun</h4>
			<div className="projects-container">
				<div className="project">
					<figure className="effect">
						<img src={soundboardThumb} alt="Discord Soundboard" />
						<figcaption>
							<h3>Discord Soundboard</h3>
							<p>Web soundboard for Discord</p>
							<p><strong>Tags:</strong> <br />React, NodeJS, ExpressJS, Socket.IO</p>
							<a href="https://github.com/Nadrielle/Discord-Web-Soundboard" target="_blank">View more</a>
						</figcaption> 
					</figure>
				</div>
				<div className="project">
					<figure className="effect">
						<img src={battleshipsThumb} alt="Battleships" />
						<figcaption>
							<h3>Battleships</h3>
							<p>React Battleships singleplayer game</p>
							<p><strong>Tags:</strong> <br />React, SASS</p>
							<a href="https://github.com/Nadrielle/Battleships" target="_blank">View more</a>
						</figcaption> 
					</figure>
				</div>
			</div>
		</section>
	);
}

export default SideProjects;