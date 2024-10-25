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
                <div className="about">
                    <p>Learn about the app's creator</p>
                    <Link to="/about" className="link">
                        <button className="about__button">About Me</button>
                    </Link>
                </div>
            </div>
        </>
    );
}
