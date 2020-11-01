import React from 'react';

import profileImage from '../images/profile_image.svg';

const Welcome = () =>{
	return(
		<section id="welcome" data-sal="slide-up" data-sal-delay="0" data-sal-easing="ease" data-sal-duration="400">
			<div className="inner">
				<div class="profile-description">
					<h3>I'm Adrien,</h3>
					<h3>a Full-Stack Software Engineer</h3>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vel sem at lorem laoreet iaculis sed commodo tortor. Proin tristique nunc vitae mi vestibulum, vel vestibulum tortor ornare. Aliquam rhoncus massa ac sem ultrices, eget dictum quam aliquet. Fusce ultricies aliquam metus, in lobortis mauris venenatis id. Aenean ullamcorper velit dolor, vitae commodo lacus lacinia vitae. Proin ullamcorper dictum porttitor.</p>
				</div>
				<img src={profileImage} alt="Profile Image"/>
			</div>
		</section>
	);
}

export default Welcome;