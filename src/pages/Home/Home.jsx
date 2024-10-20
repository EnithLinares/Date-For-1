import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div>
            <h1>Welcome to Date for 1</h1>
            <nav>
                <ul>
                    <li>
                        <Link to="/quiz">Take the Quiz</Link>
                    </li>
                    <li>
                        <Link to="/activities">Browse Activities</Link>
                    </li>
                    <li>
                        <Link to="/add-activity">Add an Activity</Link>
                    </li>
                    <li>
                        <Link to="/about">About Us</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact Us</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
