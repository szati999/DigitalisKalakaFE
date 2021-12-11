import React, { useRef } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
// import { useNavigate } from "react-router-dom";

import classes from "./MentorRegister.module.css";
import SUBJECTS_ARRAY from "../constants/subjects";

const MentorRegister = () => {
	// let navigate = useNavigate();

	const lastNameRef = useRef();
	const firstNameRef = useRef();
	const ageRef = useRef();
	const emailRef = useRef();
	const phoneRef = useRef();
	const educationRef = useRef();
	const subjectRef = useRef();
	const descRef = useRef();

	const handleRegisterMentor = async (event) => {
		event.preventDefault();

		const enteredLName = lastNameRef.current.value;
		const enteredFName = firstNameRef.current.value;
		const enteredAge = ageRef.current.value;
		const enteredEmail = emailRef.current.value;
		const enteredPhone = phoneRef.current.value;
		const enteredEducation = educationRef.current.value;
		const enteredSubject = subjectRef.current.value;
		const enteredDescription = descRef.current.value;

		try {
			const resp = await fetch("http://localhost:3000/register_mentor", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					name: enteredLName + " " + enteredFName,
					age: enteredAge,
					email: enteredEmail,
					phone: enteredPhone,
					education: enteredEducation,
					subject: enteredSubject,
					description: enteredDescription,
					pending: true,
				}),
			});
			if (resp.status === 200 || resp.status === 201) {
				console.log("Mentor registered successfully!", resp);
				let respData = await resp.json();
				localStorage.setItem("studentId", respData);
				localStorage.setItem("studentSubject", enteredSubject);
			} else {
				console.log("Error during register (from server) ", resp);
			}
			// navigate("/");
		} catch (error) {
			console.log("Error during register: ", error);
		}
	};

	const renderOptions = () => {
		return SUBJECTS_ARRAY.map((item, index) => {
			return (
				<option key={index} value={item}>
					{item}
				</option>
			);
		});
	};

	return (
		<div className={classes.container}>
			<div>
				<h1 className={classes.title}>Kérjük töltsd ki az alábbi űrlapot</h1>
				<p className={classes.subTitleText}>
					Regisztrációdhoz szükséges megadnod az alábbi adatokat, majd azok
					egyéni elbírálása után beléphetsz a felületre.
				</p>
			</div>
			<Form onSubmit={handleRegisterMentor}>
				<h2 className={classes.h2}>Személyes adatok</h2>

				<Row className="mb-3">
					<Form.Group as={Col}>
						<Form.Label className={classes.label}>Vezetéknév</Form.Label>
						<Form.Control
							type="text"
							ref={lastNameRef}
							placeholder="Kérjük add meg a vezetékneved"
							required
						/>
					</Form.Group>
					<Form.Group as={Col}>
						<Form.Label className={classes.label}>Keresztnév</Form.Label>
						<Form.Control
							type="text"
							ref={firstNameRef}
							placeholder="Kérjük add meg a keresztneved"
							required
						/>
					</Form.Group>
				</Row>
				<Row>
					<Col sm={6}>
						<Form.Label className={classes.label}>Életkor</Form.Label>
						<Form.Control
							type="number"
							ref={ageRef}
							placeholder="Kérjük add meg az életkorod"
							required
						/>
					</Col>
				</Row>
				<h2 className={classes.h2}>Elérhetőségi adatok</h2>
				<Row className="mb-3">
					<Form.Group as={Col}>
						<Form.Label className={classes.label}>Email cím</Form.Label>
						<Form.Control
							type="email"
							ref={emailRef}
							placeholder="Kérjük add meg az email címedet"
							required
						/>
					</Form.Group>
					<Form.Group as={Col}>
						<Form.Label className={classes.label}>Telefonszám</Form.Label>
						<Form.Control
							type="text"
							ref={phoneRef}
							placeholder="Kérjük add meg a telefonszámodat"
						/>
					</Form.Group>
				</Row>
				<h2 className={classes.h2}>Leírás</h2>
				<Row className="mb-3">
					<Form.Group as={Col}>
						<Form.Label className={classes.label}>Végzettség</Form.Label>
						<Form.Control
							type="text"
							ref={educationRef}
							placeholder="Kérjük add meg a végzettségedet"
							required
						/>
					</Form.Group>
					<Form.Group as={Col}>
						<Form.Label className={classes.label}>Mentor kategória</Form.Label>
						<Form.Select ref={subjectRef} required>
							<option value="">Kérjük válaszd ki a kategóriát</option>
							{renderOptions()}
						</Form.Select>
					</Form.Group>
				</Row>
				<Form.Group className="mb-3">
					<Form.Label className={classes.label}>Leírás</Form.Label>
					<Form.Control
						as="textarea"
						ref={descRef}
						placeholder="Kérjük ismertesd magad pár sorban"
					/>
					<p className={classes.descText}>
						Miért szeretnél önkéntes mentor lenni? Miért gondolod, hogy
						megfelelő vagy ehhez a feladathoz?
					</p>
				</Form.Group>
				<div className={`mb-5 ${classes.submitBtnRow}`}>
					<Button variant="primary" type="submit" className={classes.submitBtn}>
						Űrlap beküldése
					</Button>
				</div>
			</Form>
		</div>
	);
};

export default MentorRegister;
