import React, { useEffect, useState /* , useRef */ } from "react";
import axios from "axios";
import "./StudentList.css";
import studImg from "./student.svg";
import studAssignedImg from "./student-assigned.png";
import certificate from "./certificate.svg";
import motivation from "./motivation.svg";
import { useNavigate } from "react-router-dom";

export default function StudentList() {
	const [userList, setUserList] = useState([]);
	const [mentorDetails, setMentorDetails] = useState(null);
	let navigate = useNavigate();
	// const [isContactShown, setContactShown] = useState(false);
	// const textarearef = useRef();

	useEffect(() => {
		const subject = localStorage.getItem("studentSubject");
		const mentorId = localStorage.getItem("mentorId");

		// Update the document title using the browser API
		axios.get(`http://localhost:3000/getStudents/${subject}`).then((resp) => {
			setUserList(resp.data);
		});

		axios.get(`http://localhost:3000/getMentors/${subject}`).then((resp) => {
			let data = resp.data.find((el) => el.id === mentorId);
			setMentorDetails(data);
		});
	}, []);

	const navToDetailsHandler = (item) => {
		navigate(`/student/${item.id}`);
	};

	const renderImageSection = (item) => {
		if (mentorDetails && mentorDetails.assignedStudents.includes(item.id)) {
			return (
				<div className="profile-image">
					<img src={studAssignedImg} alt="stud-img" />
				</div>
			);
		} else {
			return (
				<div className="profile-image">
					<img src={studImg} alt="stud-img" />
				</div>
			);
		}
	};

	const decideColor = (item) => {
		if (mentorDetails && mentorDetails.assignedStudents.includes(item.id)) {
			return true;
		} else {
			return false;
		}
	};

	return (
		<div className="student-card-container">
			<div className="student-card-holder">
				<div className="title-container">
					<div className="title">Diákok listája</div>
					<div className="subtitle">
						Legyél önkéntes mentor és segíts a diákoknak tanulni.
					</div>
				</div>
				<div className="holder">
					{userList.map((item, i) => (
						<div className={"student-card"} key={i}>
							{renderImageSection(item)}
							<div className="student-name">{item.studentName}</div>
							<div
								className={`category ${
									decideColor(item) ? "bgAssigned" : "bgWhite"
								}`}
							>
								<div>
									<img src={certificate} alt="" />
								</div>
								<div>
									<div className="profil">Profil</div>
									<div>{item.subject}</div>
								</div>
							</div>
							<div
								className={`motivation ${
									decideColor(item) ? "bgAssigned" : "bgWhite"
								}`}
							>
								<div>
									<img src={motivation} alt="" />
								</div>
								<div>
									<div className="profil">Rólam</div>
									<div>{item.studentMotivation}</div>
								</div>
							</div>
							<div className="button-container">
								<button
									onClick={() => navToDetailsHandler(item)}
									className="btn btn-primary btn-lg"
									type="button"
								>
									Megtekintés
								</button>
							</div>
						</div>
					))}
				</div>
				{/* {isContactShown && (
					<div className="contact-modal">
						<div>
							<textarea ref={textarearef} placeholder="irj valamit" />
						</div>
						<div className="modal-button-container">
							<button
								onClick={() => setContactShown(!isContactShown)}
								className="btn btn-danger"
								type="button"
							>
								Bezaras
							</button>
							<button
								onClick={() =>
									console.log(textarearef.current.value, "teaxtarea")
								}
								className="btn btn-primary"
								type="button"
							>
								Kuldes
							</button>
						</div>
					</div>
				)} */}
				<div></div>
			</div>
		</div>
	);
}
