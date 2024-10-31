import React from "react";
import { Link } from "react-router-dom";
import Headshot from "../../assets/photos/Enith_Linares_LI.jpg";
import logo from "../../assets/logo/date-for-1-logo.svg";
import github from "../../assets/logo/github-icon-1-logo-svgrepo-com.svg";
import linkedin from "../../assets/logo/linkedin-icon-2-logo-svgrepo-com.svg";
import instagram from "../../assets/logo/instagram-2016-logo-svgrepo-com.svg";
import Header from "../../components/Header/Header";
import "../AboutUs/AboutUs.scss";

export default function AboutUs() {
    return (
        <>
            <Header />
            <div className="aboutme">
                <img
                    src={Headshot}
                    alt="picture of a lady in her early 30's with curly hair and a smile"
                    className="aboutme__photo"
                />
                <div className="aboutme__info">
                    <h3 className="aboutme__name">Hi, I'm Nini Linares</h3>
                    <p className="aboutme__subheader">
                        Software Engineer and Local Lover
                    </p>
                    <p className="aboutme__body">
                        I made this project to help explore local businesses,
                        connect with the community and enjoy spending much
                        deserved 'Me Time'
                    </p>
                </div>
                <div className="aboutme__quote">
                    <h4 className="aboutme__quote--bold">
                        'There's so much to explore in London, Ontatio'
                    </h4>
                    <p className="aboutme__quote--normal">
                        The city is a UNESCO City of Music, full of beautiful
                        conservation areas, incredible cafes and communities.
                        Connect with yourself, connect with your city.
                    </p>
                    <p className="aboutme__attribution">
                        {" "}
                        - Nini Linares, Lead Developer
                    </p>
                </div>
            </div>
            <div className="footer">
                <div className="footer__about--start">
                    <h5 className="footer__about--title">About Us</h5>
                    <a
                        href="https://local-voices.ca/voices-of-london"
                        rel="noopener noreferrer"
                        className="footer__about--link"
                    >
                        Nini's Blog - Local Voices
                    </a>
                    <Link
                        to="https://local-voices.ca/contact-me"
                        rel="noopener noreferrer"
                        className="footer__about--link"
                    >
                        Contact Me
                    </Link>

                    <p className="footer__about--title">Socials</p>
                    <div className="footer__about--socials">
                        <a
                            href="https://github.com/EnithLinares"
                            rel="noopener noreferrer"
                            className="footer__about--link"
                        >
                            <img
                                src={github}
                                className="footer__about--icon"
                            ></img>
                        </a>
                        <a
                            href="https://www.instagram.com/local.voices/"
                            rel="noopener noreferrer"
                            className="footer__about--link"
                        >
                            <img
                                src={instagram}
                                className="footer__about--icon"
                            ></img>
                        </a>
                        <a
                            href="www.linkedin.com/in/enithlinares"
                            rel="noopener noreferrer"
                            className="footer__about--link"
                        >
                            <img
                                src={linkedin}
                                className="footer__about--icon"
                            ></img>
                        </a>
                    </div>
                </div>
                <div className="footer__about">
                    <h5 className="footer__about--title">Activities</h5>
                    <Link to="activities" className="footer__about--link">
                        All Activities
                    </Link>
                    <Link to="/add-activity" className="footer__about--link">
                        Add Your Activity
                    </Link>
                    <p className="footer__about--link">Venues</p>
                    <Link to="/quiz" className="footer__about--link">
                        Take the Quiz
                    </Link>
                    <Link to="/">
                        <img src={logo} className="footer__about--link" />
                    </Link>
                </div>
            </div>
        </>
    );
}
