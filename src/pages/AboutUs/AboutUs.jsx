import React from "react";
import Headshot from "../../assets/photos/Enith_Linares_LI.jpg";
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
                <div className="footer__about">
                    <h5 className="footer__about--title">About Us</h5>
                    <p className="footer__about--link">
                        Nini's Blog - Local Voices
                    </p>
                    <p className="footer__about--title">Contact Me</p>
                    <div className="footer__about--socials">
                        <p className="footer__about--title">Socials</p>
                        <p className="footer__about--link">GitHub</p>
                        <p className="footer__about--link">Instagram</p>
                        <p className="footer__about--link">LinkedIn</p>
                    </div>
                </div>
                <div className="footer__about">
                    <h5 className="footer__about--title">Activities</h5>
                    <p className="footer__about--link">All Activities</p>
                    <p className="footer__about--link">Add Your Activity</p>
                    <p className="footer__about--link">Venues</p>
                    <p className="footer__about--link">Take the Quiz</p>
                    <p className="footer__about--link">logo</p>
                </div>
            </div>
        </>
    );
}
