import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";

import classes from "./MentorRegister.module.css";

const MentorRegister = () => {
	const nameRef = useRef();
	const subjectRef = useRef();
	const descRef = useRef();
	const emailRef = useRef();
	const ageRef = useRef();
	const phoneRef = useRef();

	const handleRegisterMentor = async (event) => {
		event.preventDefault();

		const enteredName = nameRef.current.value;
		const enteredSubjectType = subjectRef.current.value;
		const enteredDesc = descRef.current.value;
		const enteredEmail = emailRef.current.value;
		const enteredAge = ageRef.current.value;
		const enteredPhone = phoneRef.current.value;

		console.log({
			name: enteredName,
			subject: enteredSubjectType,
			description: enteredDesc,
			email: enteredEmail,
			age: enteredAge,
			phone: enteredPhone,
		});

		try {
			await fetch("http://localhost:3000/register_mentor", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					name: enteredName,
					subject: enteredSubjectType,
					description: enteredDesc,
					email: enteredEmail,
					age: enteredAge,
					phone: enteredPhone,
				}),
			});
		} catch (error) {
			console.log("Error during register: ", error);
		}
	};

	return (
		<div className={classes.container}>
			<h2 className={classes.title}>Mentor Regisztráció</h2>
			<Form onSubmit={handleRegisterMentor}>
				<Form.Group className="mb-3">
					<Form.Label>Név</Form.Label>
					<Form.Control type="text" ref={nameRef} required />
					<Form.Label>Email</Form.Label>
					<Form.Control type="email" ref={emailRef} required />
					<Form.Label>Szakterület</Form.Label>
					<Form.Control type="text" ref={subjectRef} required />
					<Form.Label>Telefonszám</Form.Label>
					<Form.Control type="text" ref={phoneRef} required />
					<Form.Label>Életkor</Form.Label>
					<Form.Control type="number" ref={ageRef} />
					<Form.Label>Leírás</Form.Label>
					<Form.Control as="textarea" ref={descRef} />
				</Form.Group>
				<Button variant="primary" type="submit">
					Regisztráció
				</Button>
			</Form>
		</div>
	);
};

export default MentorRegister;
