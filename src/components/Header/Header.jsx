import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo/date-for-1.svg";

export default function Header() {
    return (
        <nav className="nav">
            <img src={logo} alt="date for 1 logo" className="nav__logo" />
            <div className="nav__buttons">
                <button className="options">
                    <Link to="/quiz">Take the Quiz</Link>
                </button>

                <button className="options">
                    <Link to="/activities">Browse Activities</Link>
                </button>
            </div>
        </nav>
    );
}
