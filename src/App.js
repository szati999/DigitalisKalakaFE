import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import UserTypes from "./components/UserTypes";
import MentorRegister from "./components/MentorRegister";
import StudentList from "./components/StudentList";

export default function App() {
	return (
		<Router>
			<Routes>
				<Route path="/mentor" element={<MentorRegister />} />
				<Route path="/student" element={<StudentList />}></Route>
				<Route path="/" element={<UserTypes />}></Route>
			</Routes>
		</Router>
	);
}
