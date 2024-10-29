import React from "react";
import Headshot from "../../assets/photos/Enith_Linares_LI.jpg";
import Header from "../../components/Header/Header";

export default function AboutUs() {
    return (
        <>
            <Header />
            <div>
                <img
                    src={Headshot}
                    alt="picture of a lady in her early 30's with curly hair and a smile"
                />
                <div>
                    <h3>Hi, I'm Nini Linares</h3>
                    <p>Software Engineer and Local Lover</p>
                    <p>
                        I made this project to help explore local businesses,
                        connect with the community and enjoy spending much
                        deserved 'Me Time'
                    </p>
                </div>
                <div>
                    <h4>'There's so much to explore in London, Ontatio'</h4>
                    <p>
                        The city is a UNESCO City of Music, full of beautiful
                        conservation areas, incredible cafes and communities.
                        Connect with yourself, connect with your city.
                    </p>
                    <p> - Nini Linares, Lead Developer</p>
                </div>
                <div className="footer">
                    <h5>About Us</h5>
                    <p>Nini's Blog - Local Voices</p>
                    <p>Contact Me</p>
                    <div>
                        <p>Socials</p>
                        <p>GitHub</p>
                        <p>Instagram</p>
                    </div>
                    <div>
                        <h5>Activities</h5>
                        <p>All Activities</p>
                        <p>Add Your Activity</p>
                        <p>Venues</p>
                        <p>Take the Quiz</p>
                        <p>logo</p>
                    </div>
                </div>
            </div>
        </>
    );
}
