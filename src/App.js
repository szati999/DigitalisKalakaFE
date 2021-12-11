import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import UserTypes from "./components/UserTypes";
import MentorRegister from "./components/MentorRegister";
import StudentRegistration from "./components/StudentRegistration";
import StudentList from "./components/StudentList";

export default function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<UserTypes />}></Route>
				<Route path="/mentor-registration" element={<MentorRegister />} />
				<Route path="/student-registration" element={<StudentRegistration />} />
				<Route path="/student" element={<StudentList />}></Route>
			</Routes>
		</Router>
	);
}
