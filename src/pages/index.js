import React from "react";
import GameDev from "../components/gamedev";
import Layout from "../components/layout";
import PixelArt from "../components/pixelart";
import SideProjects from "../components/sideprojects";
import Welcome from "../components/welcome";
import WorkProjects from "../components/workprojects";

const IndexPage = () => {
	return(
		<Layout>
			{/* Photo, presentation, ...
				<Welcome /> */}
			<WorkProjects />
			<SideProjects />
			{/* <GameDev />
			<PixelArt /> */}
		</Layout>
	);
}

export default IndexPage;