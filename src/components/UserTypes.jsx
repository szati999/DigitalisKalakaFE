import React from "react";
import { Link } from "react-router-dom";
import './UserTypes.css'
import usermentor from './usermentor.svg'
import userstudent from './userstudent.svg'


export default function UserTypes() {
	return (
        <div className="select-user-container">
            <div className="select-user-type">
                <div className="type-title">Üdvözlünk a tanulnék oldalán! </div>
                <div className="type-subtitle">Kérjük válaszd ki, hogy önkéntes mentorként szeretnél regisztrálni vagy diáknak van szüksége korrepetálásra.</div>
                <div className="type-buttons">
                    <div className="type-mentor">
                        <img src={usermentor} />
                        <div className="type-mentor-title">Mentor</div>
                        <div className="type-user-subtitle">Legyél önkéntes mentor és segíts a diákoknak tanulni.</div>
                        <Link to="/mentor">
                            <button className="btn btn-primary btn-lg" type="button">Mentor</button>
                        </Link>
                    </div>
                    <div className="type-student">
                        <img src={userstudent} />
                        <div className="type-mentor-title">Student</div>
                        <div className="type-user-subtitle">Regisztráld a diákot, akinek szüksége van a korrepetálásra.</div>
                        <Link to="/student">
                            <button className="btn btn-secondary btn-lg" type="button">Tanuló</button>
                        </Link>
                    </div>
                </div>
                
		    </div>
        </div>
		
	);
}
