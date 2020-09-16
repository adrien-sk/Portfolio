import React from 'react';

import kendoThumb from '../images/thumbs/kendo.jpg';
import ordaliartThumb from '../images/thumbs/ordaliart.jpg';
import adrienThumb from '../images/thumbs/adrien-s.jpg';


const WorkProjects = () =>{
	return(
		<section id="workprojects">
			<h2>Projects</h2>
			<h4>Some projects I developed for work</h4>
			<div className="projects-container">
				<div className="project">
					<figure className="effect">
						<img src={kendoThumb} alt="Alsace Kendo" />
						
						<figcaption>
							<h3>Alsace Kendo</h3>
							<p>Local Kendo club website</p>
							<p><strong>Tags:</strong> <br />Wordpress, Bootstrap, CSS</p>
							<a href="http://alsace-kendo.fr" target="_blank">View more</a>
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
							<a href="http://ordaliart.com" target="_blank">View more</a>
						</figcaption> 
					</figure>
				</div>
				<div className="project">
					<figure className="effect">
						<img src={adrienThumb} alt="My portfolio" />
						
						<figcaption>
							<h3>My portfolio</h3>
							<p>This portfolio website</p>
							<p><strong>Tags:</strong> <br />Gatsby, ReactJS, CSS</p>
							<a href="#" target="_blank">View more</a>
						</figcaption> 
					</figure>
				</div>
			</div>
		</section>
	);
}

export default WorkProjects;