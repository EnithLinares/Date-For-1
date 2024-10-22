import React from "react";
import "../Home/Home.scss";
import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";

export default function Home() {
    return (
        <div>
            <Header />
            <h1>Welcome to Date for 1</h1>
            <nav>
                <ul>
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
