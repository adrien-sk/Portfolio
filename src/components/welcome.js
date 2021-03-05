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
					<p>I have ~<strong>7 years of experience</strong> in different languages and platforms, but a longer affinity for <strong>Computer Science</strong>.</p>
					<br />
					<p>I'm working a lot with <strong>C# .Net</strong> for <strong>Web Apps</strong>, but also in Unity to work on Video Games on my free time.</p>
					<p>Recently focusing on one of my first language : <strong>Javascript</strong> and its friends (<strong>NodeJS</strong>, <strong>React</strong>, <strong>Redux</strong>, <strong>Next.JS</strong>, <strong>Express</strong>, ...)</p>
					<br />
					<p>Very <strong>Curious</strong> and <strong>Interested</strong> in new technologies, I love <strong>Learning</strong>, <strong>Discovering</strong>, and <strong>Building things</strong>.</p>
					<br />
					<p>I focus on developing <strong>Quality</strong> and <strong>Functional</strong> products.</p>
				</div>
			</div>
		</section>
	);
}

export default Welcome;