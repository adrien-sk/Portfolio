import React from "react";
import Layout from "../components/layout";
import Welcome from "../components/welcome";
import Projects from "../components/projects";
import Contact from "../components/contact";

const IndexPage = () => {
	return(
		<Layout>
			<Welcome />
			<Projects />
			<Contact />
		</Layout>
	);
}

export default IndexPage;