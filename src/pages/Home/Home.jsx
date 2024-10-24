import React from "react";
import "../Home/Home.scss";
import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import SearchBar from "../../components/SearchBar/SearchBar";
import TypingSuggestions from "../../components/TypingSuggestions/TypingSuggestions";

export default function Home() {
    return (
        <>
            <div>
                <Header />
                <div className="hero">
                    <h1 className="hero__title">
                        Celebrating the art<br></br> of taking yourself out on
                        <br></br>a date
                    </h1>
                    <p className="hero__body">
                        Explore your city, try something new <br></br>and enjoy
                        some much needed <br></br>'Me Time"
                    </p>
                    <SearchBar />
                </div>
                <div>
                    <TypingSuggestions />
                </div>
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
        </>
    );
}
