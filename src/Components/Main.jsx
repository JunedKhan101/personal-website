import React from "react";
import About from "./About";
import Projects from "./Projects";
import Skills from "./Skills";
import Contact from "./Contact";
import Intro from "./Intro";

export default function Main() {
	return (
		<div className="main">
			<Intro />
			<About />
			<Projects />
			<Skills />
			<Contact />
		</div>
	);
}