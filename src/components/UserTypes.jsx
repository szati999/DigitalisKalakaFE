import React from "react";
import { Link } from "react-router-dom";
import './UserTypes.css'
export default function UserTypes() {
	return (
        <div className="select-user-container">
            <div className="select-user-type">
                <Link to="/mentor">
                    <button className="btn btn-primary btn-lg" type="button">Mentor</button>
                </Link>
                <Link to="/student">
                    <button className="btn btn-secondary btn-lg" type="button">Tanuló</button>
                </Link>
		    </div>
        </div>
		
	);
}
