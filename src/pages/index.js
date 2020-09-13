import React from "react";
import Layout from "../components/layout";
import Welcome from "../components/welcome";

const IndexPage = () => {
	return(
		<Layout>
			<Welcome />
			{/*<WorkProjects />
			<SideProjects />
			<GameDev />
			<PixelArt />
			<Contact />*/}
		</Layout>
	);
}

export default IndexPage;