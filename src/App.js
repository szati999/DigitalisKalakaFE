import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import UserTypes from "./components/UserTypes";
import MentorRegister from "./components/MentorRegister";

export default function App() {
	return (
		<Router>
			<Routes>
				<Route path="/mentor" element={<MentorRegister />} />
				<Route path="/student"></Route>
				<Route path="/" element={<UserTypes />}></Route>
			</Routes>
		</Router>
	);
}
