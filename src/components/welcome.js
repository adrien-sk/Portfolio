import React from 'react';

import profileImage from '../images/avatar.png';

const Welcome = () =>{
	return(
		<section id="welcome" data-sal="slide-up" data-sal-delay="200" data-sal-easing="ease" data-sal-duration="800">
			<div className="inner">
				<img src={profileImage} alt="Profile"/>
				<div class="profile-description">
					<h3>Hello, I'm Adrien,</h3>
					<h3>a Full-Stack Software Engineer</h3>
					<p>I have 7 years of experience in different languages and platforms, but a longer affinity for Computer Science.</p>
					<p>I'm working a lot with C# .Net for Web Apps, but also in Unity to work on Video Games on my free time.</p>
					<p>Recently focusing on one of my first language : Javascript and its friends (NodeJS, React, Redux, Next.JS, Express, ...)</p>
					<p>I'm also having the chance to pursue a Master Degree and expand on my Computer Science knowledges.</p>
				</div>
			</div>
		</section>
	);
}

export default Welcome;