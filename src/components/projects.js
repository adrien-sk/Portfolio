import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import soundboardThumb from '../images/thumbs/soundboard.png';
import battleshipsThumb from '../images/thumbs/battleships.png';

import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'


const Projects = () =>{
	return(
		<section id="projects">
			<div className="inner">
				<h2 data-sal="slide-right" data-sal-delay="0" data-sal-easing="ease" data-sal-duration="600">Projects</h2>
				<h4 data-sal="slide-right" data-sal-delay="0" data-sal-easing="ease" data-sal-duration="600">Some Client Projects, Side Projects and Experiments</h4>
				<div className="projects-container">
					<div className="project">
						<div className="project-image" data-sal="slide-right" data-sal-delay="100" data-sal-easing="ease" data-sal-duration="600">
							<a href="https://github.com/Nadrielle/Discord-Web-Soundboard" target="_blank" rel="noopener noreferrer">
								<img src={soundboardThumb} alt="Discord Soundboard" />
							</a>
						</div>
						<div className="project-content" data-sal="slide-left" data-sal-delay="200" data-sal-easing="ease" data-sal-duration="600">
							<h3 className="project-title">Discord Web Soundboard</h3>
							<div className="project-description">
								<p>Simply and quickly connect a Bot to your Discord server, and make him play sounds and musics of your choice by using a Web-interface. All your users will be able to play with sounds to emphasize funny discussion/gaming moments !</p>
							</div>
							<ul className="project-tech-list">
								<li>React</li>
								<li>NodeJS</li>
								<li>ExpressJS</li>
								<li>Socket.IO</li>
							</ul>
							<div className="project-links">
								<a href="https://github.com/Nadrielle/Discord-Web-Soundboard" target="_blank" className="git-link" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} /></a>
							</div>
						</div>
					</div>

					<div className="project">
						<div className="project-image" data-sal="slide-left" data-sal-delay="100" data-sal-easing="ease" data-sal-duration="600">
							<a href="https://github.com/Nadrielle/Battleships" target="_blank" rel="noopener noreferrer">
								<img src={battleshipsThumb} alt="Battleships" />
							</a>
						</div>
						<div className="project-content" data-sal="slide-right" data-sal-delay="200" data-sal-easing="ease" data-sal-duration="600">
							<h3 className="project-title">Battleships</h3>
							<div className="project-description">
								<p>A singleplayer SPA Battleships game created with Create-react-app</p>
							</div>
							<ul className="project-tech-list">
								<li>Javascript</li>
								<li>React</li>
								<li>SASS</li>
							</ul>
							<div className="project-links">
								<a href="https://adrien-s-battleships.netlify.app/" target="_blank" className="site-link" rel="noopener noreferrer"><FontAwesomeIcon icon={faExternalLinkAlt} /></a>
								<a href="https://github.com/Nadrielle/Battleships" target="_blank" className="git-link" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} /></a>
							</div>
						</div>
					</div>

					{/* <div className="project">
						<figure className="effect">
							<img src={soundboardThumb} alt="Discord Soundboard" />
							<figcaption>
								<h3>Discord Soundboard</h3>
								<p>Web soundboard for Discord</p>
								<p><strong>Tags:</strong> <br />React, NodeJS, ExpressJS, Socket.IO</p>
								<a href="https://github.com/Nadrielle/Discord-Web-Soundboard" target="_blank" className="site-link" rel="noopener noreferrer">View more</a>
								<a href="https://github.com/Nadrielle/Discord-Web-Soundboard" target="_blank" className="git-link" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} /></a>
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
								<a href="https://github.com/Nadrielle/Battleships" target="_blank" className="site-link" rel="noopener noreferrer">View more</a>
								<a href="https://github.com/Nadrielle/Battleships" target="_blank" className="git-link" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} /></a>
							</figcaption> 
						</figure>
					</div> */}
					
					{/* <div className="project">
						<figure className="effect">
							<img src={kendoThumb} alt="Alsace Kendo" />
							
							<figcaption>
								<h3>Alsace Kendo</h3>
								<p>Local Kendo club website</p>
								<p><strong>Tags:</strong> <br />Wordpress, Bootstrap, CSS</p>
								<a href="http://alsace-kendo.fr" target="_blank" className="site-link" rel="noopener noreferrer">View more</a>
							</figcaption> 
						</figure>
					</div>
					<div className="project">
						<figure className="effect">
							<img src={ordaliartThumb} alt="Ordaliart" />
							
							<figcaption>
								<h3>Ordaliart</h3>
								<p>Young illustrator portfolio</p>
								<p><strong>Tags:</strong> <br />Wordpress, Bootstrap, CSS</p>
								<a href="http://ordaliart.com" target="_blank" className="site-link" rel="noopener noreferrer">View more</a>
							</figcaption> 
						</figure>
					</div>
					<div className="project">
						<figure className="effect">
							<img src={adrienThumb} alt="My portfolio" />
							
							<figcaption>
								<h3>My portfolio</h3>
								<p>This portfolio website</p>
								<p><strong>Tags:</strong> <br />Gatsby, ReactJS, SASS</p>
								<a href="https://github.com/Nadrielle/Portfolio" target="_blank" className="site-link" rel="noopener noreferrer">View more</a>
								<a href="https://github.com/Nadrielle/Portfolio" target="_blank" className="git-link" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} /></a>
							</figcaption> 
						</figure>
					</div> */}
				</div>
			</div>
		</section>
	);
}

export default Projects;