/* eslint-disable react/prop-types */
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import AboutPage from "./pages/AboutPage";
import Navbar from "./components/navbar/Navbar";
import ProjectsPage from "./pages/ProjectsPage";
import ContactPage from "./pages/ContactPage";
import "./App.css";
// import darkBg from "./assets";
import { AiFillGithub, AiOutlineInstagram } from "react-icons/ai";
import { FiLinkedin, FiTwitter } from "react-icons/fi";

const Socials = ({icon}) => {
	return (
		<li style={{margin: "10px"}}>
			{icon}
		</li>
	);
};

function App() {
	return (
		<BrowserRouter>
			<div id="app-container">
				<Navbar />
				<div style={{display: "flex"}}>
					<ul style={{paddingLeft: "7.5%", paddingTop: "16%"}}>
						<Socials icon={<AiFillGithub size={15} color="#0F85F2"/>} />
						<Socials icon={<FiTwitter size={15} color="#0F85F2"/>} />
						<Socials icon={<FiLinkedin size={15} color="#0F85F2"/>} />
						<Socials icon={<AiOutlineInstagram size={15} color="#0F85F2"/>} />
					</ul>
					<Routes>
						<Route path="/my-portfolio" element=<HomePage /> />
						<Route path="/about" element=<AboutPage /> />
						<Route path="/projects" element=<ProjectsPage /> />
						<Route path="/contact" element=<ContactPage /> />
						{/* <Route path="/resume" element=<AboutPage /> /> */}
					</Routes>
				</div>
				<div>
					<p>fehbkrgrfguifr</p>
				</div>
			</div>
		</BrowserRouter>
	);
}

export default App;