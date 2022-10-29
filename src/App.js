import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import Navbar from "./components/navbar/Navbar";
import ProjectsPage from "./pages/ProjectsPage";

function App() {
	return (

		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route exact path="/" element=<HomePage /> />
				<Route path="/about" element=<AboutPage /> />
				<Route path="/projects" element=<ProjectsPage /> />
			</Routes>
		</BrowserRouter>
		
	);
}

export default App;