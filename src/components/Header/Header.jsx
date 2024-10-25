import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo/date-for-1-logo.svg";
import "../Header/Header.scss";

export default function Header() {
    return (
        <nav className="nav">
            <Link to={"/"} className="link">
                <img src={logo} alt="date for 1 logo" className="nav__logo" />
            </Link>
            <div className="nav__buttons">
                <Link to="/activities" className="link">
                    <button className="nav__buttons--options">
                        Date Ideas
                    </button>
                </Link>

                <Link to="/quiz" className="link">
                    <button className="nav__buttons--options">Quiz</button>
                </Link>
            </div>
        </nav>
    );
}
