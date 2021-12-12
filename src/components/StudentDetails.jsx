import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import classes from "./StudentDetails.module.css";
import backArrow from "../components/back-arrow.png";
import studImg from "../components/student.svg";
import { Button, Col, Row } from "react-bootstrap";

const StudentDetails = (props) => {
	const params = useParams();
	const navigate = useNavigate();

	const { studentId } = params;

	const [studDetails, setStudDetails] = useState(null);

	useEffect(() => {
		const getStudDetails = async () => {
			const resp = await fetch("http://localhost:3000/getAllStudents");
			if (resp.status === 200 || resp.status === 201) {
				let data = await resp.json();
				let foundStudent = data.find((el) => el.id === studentId);
				setStudDetails(foundStudent);
			}
		};
		getStudDetails();
	}, [studentId]);

	const handleAcceptAsStudent = async () => {
		try {
			let mentorId = localStorage.getItem("mentorId");

			let resp = await fetch("http://localhost:3000/assignStudentToMentor", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					mentorId: mentorId,
					studentId: studentId,
				}),
			});

			if (resp.status === 200 || resp.status === 200) {
				let data = await resp.json();
				console.log("Success student was approved by mentor: ", data);
				navigate("/student");
			}
		} catch (error) {
			console.log("Oops there was an error:", error);
		}
	};

	if (!studDetails) {
		return (
			<div className={classes.loadingSpinner}>
				<p>Loading...</p>
			</div>
		);
	}

	return (
		<div className={classes.mainContainer}>
			{/* TODO: header-logo here */}
			<div>
				<h1 className={classes.title}>Diák adatai</h1>
				<p className={classes.subTitleText}>
					Itt találhatod a korrepetálást igénylő diák adatait.
				</p>
			</div>
			<div className={classes.back_arrow_cont} onClick={() => navigate(-1)}>
				<img alt="vissza" src={backArrow} />
				<p className={classes.backArrTxt}>Vissza</p>
			</div>
			<div className={classes.stud_profile_image}>
				<img src={studImg} alt="stud-img" />
			</div>
			<h2 className={classes.h2}>Diák személyes adatai</h2>
			<Row className="mb-3">
				<Col sm={6}>
					<div className={classes.info_block}>
						<h4 className={classes.h4}>Vezetéknév</h4>
						<p>{studDetails.studentName.split(" ")[0]}</p>
					</div>
				</Col>
				<Col sm={6}>
					<div className={classes.info_block}>
						<h4 className={classes.h4}>Keresztnév</h4>
						<p>{studDetails.studentName.split(" ")[1]}</p>
					</div>
				</Col>
			</Row>
			<Row className="mb-3">
				<Col sm={6}>
					<div className={classes.info_block}>
						<h4 className={classes.h4}>Életkor</h4>
						<p>{studDetails.studentAge}</p>
					</div>
				</Col>
			</Row>
			<h2 className={classes.h2}>Diák elérhetőségi adatai</h2>
			<Row className="mb-3">
				<Col sm={6}>
					<div className={classes.info_block}>
						<h4 className={classes.h4}>Email cím</h4>
						<p>{studDetails.studentEmail}</p>
					</div>
				</Col>
				<Col sm={6}>
					<div className={classes.info_block}>
						<h4 className={classes.h4}>Telefonszám</h4>
						<p>{studDetails.studentPhone}</p>
					</div>
				</Col>
			</Row>
			<h2 className={classes.h2}>Oktatási adatok</h2>
			<Row className="mb-3">
				<Col sm={6}>
					<div className={classes.info_block}>
						<h4 className={classes.h4}>Iskola</h4>
						<p>{studDetails.studentSchool}</p>
					</div>
				</Col>
				<Col sm={6}>
					<div className={classes.info_block}>
						<h4 className={classes.h4}>Osztály</h4>
						<p>{studDetails.studentClass}. osztály</p>
					</div>
				</Col>
			</Row>
			<h2 className={classes.h2}>Leírás</h2>
			<Row className="mb-3">
				<Col sm={12}>
					<div className={classes.info_block}>
						<h4 className={classes.h4}>Korrepetálás kategória</h4>
						<p>{studDetails.subject}</p>
					</div>
				</Col>
			</Row>
			<Row className="mb-3">
				<Col sm={12}>
					<div className={classes.info_block}>
						<h4 className={classes.h4}>Motivációs levél</h4>
						<p>{studDetails.studentMotivation}</p>
					</div>
				</Col>
			</Row>
			<Row>
				<div className={classes.hr}></div>
			</Row>
			<h2 className={classes.h2}>Szülő adatai</h2>
			<Row className="mb-3">
				<Col sm={6}>
					<div className={classes.info_block}>
						<h4 className={classes.h4}>Szülő vezetékneve</h4>
						<p>{studDetails.parentName.split(" ")[0]}</p>
					</div>
				</Col>
				<Col sm={6}>
					<div className={classes.info_block}>
						<h4 className={classes.h4}>Szülő keresztneve</h4>
						<p>{studDetails.parentName.split(" ")[1]}</p>
					</div>
				</Col>
			</Row>
			<Row className="mb-3">
				<Col sm={6}>
					<div className={classes.info_block}>
						<h4 className={classes.h4}>Szülő email címe</h4>
						<p>{studDetails.parentEmail}</p>
					</div>
				</Col>
				<Col sm={6}>
					<div className={classes.info_block}>
						<h4 className={classes.h4}>Szülő telefonszáma</h4>
						<p>{studDetails.parentPhoneNumber}</p>
					</div>
				</Col>
			</Row>
			<Row style={{ marginTop: "5%" }}>
				<div className={classes.hr}></div>
			</Row>
			{studDetails.techerName &&
				studDetails.teacherEmail &&
				studDetails.teacherPhoneNumber && (
					<>
						<h2 className={classes.h2}>Tanár adatai</h2>
						<Row className="mb-3">
							<Col sm={6}>
								<div className={classes.info_block}>
									<h4 className={classes.h4}>Tanár vezetékneve</h4>
									<p>{studDetails.techerName.split(" ")[0]}</p>
								</div>
							</Col>
							<Col sm={6}>
								<div className={classes.info_block}>
									<h4 className={classes.h4}>Tanár keresztneve</h4>
									<p>{studDetails.techerName.split(" ")[1]}</p>
								</div>
							</Col>
						</Row>
						<Row className="mb-3">
							<Col sm={6}>
								<div className={classes.info_block}>
									<h4 className={classes.h4}>Tanár email címe</h4>
									<p>{studDetails.teacherEmail}</p>
								</div>
							</Col>
							<Col sm={6}>
								<div className={classes.info_block}>
									<h4 className={classes.h4}>Tanár telefonszáma</h4>
									<p>{studDetails.teacherPhoneNumber}</p>
								</div>
							</Col>
						</Row>
					</>
				)}
			<div className={`mb-5 ${classes.submitBtnRow}`}>
				<Button
					variant="primary"
					className={classes.submitBtn}
					onClick={handleAcceptAsStudent}
				>
					Diák elfogadása
				</Button>
			</div>
		</div>
	);
};

export default StudentDetails;
