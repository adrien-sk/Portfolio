import React from "react";
import Layout from "../components/layout";
import Welcome from "../components/welcome";
import Projects from "../components/projects";
import GameDev from "../components/gamedev";

const IndexPage = () => {
	return(
		<Layout>
			<Welcome />
			<Projects />
			{/* <GameDev /> */}
		</Layout>
	);
}

export default IndexPage;