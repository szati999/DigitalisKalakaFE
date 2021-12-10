import React from "react";

const MentorRegister = () => {
	return (
		<div>
			<h2>Mentor Regisztráció</h2>
			<form>
				<label>Név: </label>
				<input type="text" />
				<br />
				<label>Szakterület: </label>
				<input type="text" />
				<br />
				<label>Leírás: </label>
				<textarea></textarea>
				<br />
				<label>Email: </label>
				<input type="email" />
				<br />
				<label>Életkor: </label>
				<input type="number" />
				<br />
				<label>Telefonszám: </label>
				<input type="number" />
			</form>
		</div>
	);
};

export default MentorRegister;
