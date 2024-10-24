import React from "react";
import Typewriter from "react-ts-typewriter";
import { Link } from "react-router-dom";
import "../TypingSuggestions/TypingSuggestions.scss";

function TypingSuggestions() {
    return (
        <>
            <div className="typing">
                <p className="typing__text">Don't know what to search for? </p>
                <span className="typing__animation">
                    Try{" "}
                    <Typewriter
                        text={["Hungry", "Adventurous", "Cozy", "Creative"]}
                        delay={1000}
                        loop={true}
                    />
                </span>
                <p className="typing__text">or</p>

                <div className="typing__buttons">
                    <Link to="/quiz" className="link">
                        <button className="typing__buttons--options">
                            Date Ideas
                        </button>
                    </Link>

                    <Link to="/activities" className="link">
                        <button className="typing__buttons--options">
                            Take The Quiz
                        </button>
                    </Link>
                </div>
            </div>
        </>
    );
}

export default TypingSuggestions;
