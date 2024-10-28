import React, { useState } from "react";
import axios from "axios";
import "./Quiz.scss";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";

function Quiz() {
    const [step, setStep] = useState(1);
    const [answers, setAnswers] = useState({
        mood: "",
        timeOfDay: "",
        priceRange: "",
    });
    const navigate = useNavigate();

    const handleSelect = (question, answer) => {
        setAnswers({ ...answers, [question]: answer });
    };

    const handleNext = () => {
        if (step < 3) setStep(step + 1);
    };

    const handlePrevious = () => {
        if (step > 1) setStep(step - 1);
    };

    const handleSubmit = async () => {
        try {
            const response = await axios.get("/api/activities", {
                params: answers,
            });
            navigate("/recommendations", {
                state: { activities: response.data },
            });
        } catch (error) {
            console.error("Error fetching activities:", error);
        }
    };

    return (
        <div>
            <Header />
            <h2 className="quiz">
                Answer the following questions and we will suggest date ideas
                based on your responses!
            </h2>
            {step === 1 && (
                <div className="quiz__question">
                    <h3>How do you feel today?</h3>
                    <div
                        className={`quiz__card ${
                            answers.mood === "Creative" ? "selected" : ""
                        }`}
                        onClick={() => handleSelect("mood", "Creative")}
                    >
                        <img src="/images/creative.jpg" alt="Creative" />
                        <p className="quiz__card--option">
                            I'm feeling Creative
                        </p>
                    </div>
                    <div
                        className={`quiz__card ${
                            answers.mood === "Adventurous" ? "selected" : ""
                        }`}
                        onClick={() => handleSelect("mood", "Adventurous")}
                    >
                        <img src="/images/adventure.jpg" alt="Adventurous" />
                        <p className="quiz__card--option">
                            I feel Adventurous!
                        </p>
                    </div>
                    <div
                        className={`quiz__card ${
                            answers.mood === "Cozy" ? "selected" : ""
                        }`}
                        onClick={() => handleSelect("mood", "Cozy")}
                    >
                        <img src="/images/cozy.jpg" alt="Cozy" />
                        <p className="quiz__card--option">I'm feeling Cozy</p>
                    </div>
                    <div
                        className={`quiz__card ${
                            answers.mood === "Hungry" ? "selected" : ""
                        }`}
                        onClick={() => handleSelect("mood", "Hungry")}
                    >
                        <img src="/images/hungry.jpg" alt="Hungry" />
                        <p className="quiz__card--option">I'm feeling Hungry</p>
                    </div>
                </div>
            )}
            {step === 2 && (
                <div className="quiz__question">
                    <h3>At what time will you like to go?</h3>
                    <div
                        className={`quiz__card ${
                            answers.timeOfDay === "Early Bird (7 am to 9 am)"
                                ? "selected"
                                : ""
                        }`}
                        onClick={() =>
                            handleSelect(
                                "timeOfDay",
                                "Early Bird (7 am to 9 am)"
                            )
                        }
                    >
                        <img src="/images/early-morning.jpg" alt="Morning" />
                        <p className="quiz__card--option">
                            Early bird gets the worm (7 am - 9 am)
                        </p>
                    </div>
                    <div
                        className={`quiz__card ${
                            answers.timeOfDay === "Anytime after 10 am"
                                ? "selected"
                                : ""
                        }`}
                        onClick={() =>
                            handleSelect("timeOfDay", "Anytime after 10 am")
                        }
                    >
                        <img src="/images/10am.jpg" alt="mid-afternoon" />
                        <p className="quiz__card--option">
                            Anytime after 10 am
                        </p>
                    </div>
                    <div
                        className={`quiz__card ${
                            answers.timeOfDay === "After work outing (5 pm+)"
                                ? "selected"
                                : ""
                        }`}
                        onClick={() =>
                            handleSelect(
                                "timeOfDay",
                                "After work outing (5 pm+)"
                            )
                        }
                    >
                        <img src="/images/after-work.jpg" alt="Evening" />
                        <p className="quiz__card--option">
                            I have to work (after 5 pm)
                        </p>
                    </div>
                    <div
                        className={`quiz__card ${
                            answers.timeOfDay === "Night owl (9 pm to 2 am)"
                                ? "selected"
                                : ""
                        }`}
                        onClick={() =>
                            handleSelect(
                                "timeOfDay",
                                "Night owl (9 pm to 2 am)"
                            )
                        }
                    >
                        <img src="/images/night-owl.jpg" alt="Evening" />
                        <p className="quiz__card--option">I'm a night owl</p>
                    </div>
                </div>
            )}
            {step === 3 && (
                <div className="quiz__question">
                    <h3>What is your budget for this date?</h3>
                    <div
                        className={`quiz__card ${
                            answers.priceRange === "$ (Free to $20)"
                                ? "selected"
                                : ""
                        }`}
                        onClick={() =>
                            handleSelect("priceRange", "$ (Free to $20)")
                        }
                    >
                        <img src="/images/budget.jpg" alt="Low Budget" />
                        <p className="quiz__card--option">
                            I'm on a budget (free - $20)
                        </p>
                    </div>
                    <div
                        className={`quiz__card ${
                            answers.priceRange === "$$ ($21 to $59)"
                                ? "selected"
                                : ""
                        }`}
                        onClick={() =>
                            handleSelect("priceRange", "$$ ($21 to $59)")
                        }
                    >
                        <img
                            src="/images/little-treat.jpg"
                            alt="Medium Budget"
                        />
                        <p className="quiz__card--option">
                            I deserve a little treat ($21 - $59)
                        </p>
                    </div>
                    <div
                        className={`quiz__card ${
                            answers.priceRange === "$$$ ($60 to $150)"
                                ? "selected"
                                : ""
                        }`}
                        onClick={() =>
                            handleSelect("priceRange", "$$$ ($60 to $150)")
                        }
                    >
                        <img
                            src="/images/special.jpg"
                            alt="sparkling drinks on a ledge"
                        />
                        <p className="quiz__card--option">
                            I want to make it special ($60 - $150)
                        </p>
                    </div>
                    <div
                        className={`quiz__card ${
                            answers.priceRange === "$$$$ ($150+)"
                                ? "selected"
                                : ""
                        }`}
                        onClick={() =>
                            handleSelect("priceRange", "$$$$ ($150+)")
                        }
                    >
                        <img
                            src="/images/expensive.jpg"
                            alt="expensive necklace"
                        />
                        <p className="quiz__card--option">
                            I'm going all out ($150+)
                        </p>
                    </div>
                </div>
            )}
            <div className="quiz__buttons">
                <button
                    onClick={() => navigate("/")}
                    className="quiz__buttons--option"
                >
                    Cancel
                </button>
                {step > 1 && (
                    <button
                        onClick={handlePrevious}
                        className="quiz__buttons--option"
                    >
                        Previous
                    </button>
                )}
                {step < 3 ? (
                    <button
                        onClick={handleNext}
                        className="quiz__buttons--option"
                    >
                        Next
                    </button>
                ) : (
                    <button
                        onClick={handleSubmit}
                        className="quiz__buttons--option"
                    >
                        Submit
                    </button>
                )}
            </div>
        </div>
    );
}

export default Quiz;
