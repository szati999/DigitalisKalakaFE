import React from "react";
import { Link } from "react-router-dom";

export default function UserTypes() {
	return (
		<div>
			{/* <nav>
				<ul>
					<li>
						<Link to="/mentor">Mentor</Link>
					</li>
					<li>
						<Link to="/student">Tanuló</Link>
					</li>
				</ul>
			</nav> */}
			<Link to="/mentor">
				<button type="button">Mentor</button>
			</Link>
			<Link to="/student">
				<button type="button">Tanuló</button>
			</Link>
		</div>
	);
}
