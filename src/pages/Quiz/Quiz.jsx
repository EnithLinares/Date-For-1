import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

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
            <h2>Quiz</h2>
            {step === 1 && (
                <div>
                    <h3>How do you feel today?</h3>
                    <div
                        className="card"
                        onClick={() => handleSelect("mood", "adventurous")}
                    >
                        <img
                            src="/images/adventure.jpg"
                            alt="a guys legs hanging on top of a mountain landscape"
                        />
                        <p>I feel Adventurous!</p>
                    </div>
                    <div
                        className="card"
                        onClick={() => handleSelect("mood", "hungry")}
                    >
                        <img
                            src="/images/hungry.jpg"
                            alt="a delicious looking bowl of rice and prawns with curry"
                        />
                        <p>I'm feeling Hungry</p>
                    </div>
                    <div
                        className="card"
                        onClick={() => handleSelect("mood", "creative")}
                    >
                        <img
                            src="/images/creative.jpg"
                            alt="notepad with watercolors and brushes"
                        />
                        <p>I'm feeling Creative</p>
                    </div>
                    <div
                        className="card"
                        onClick={() => handleSelect("mood", "cozy")}
                    >
                        <img
                            src="/images/cozy.jpg"
                            alt="a reading nooks surrounded by bookshelves"
                        />
                        <p>I'm feeling Cozy</p>
                    </div>
                </div>
            )}
            {step === 2 && (
                <div>
                    <h3>At what time will you like to go?</h3>
                    <div
                        className="card"
                        onClick={() => handleSelect("timeOfDay", "morning")}
                    >
                        <img src="/images/morning.jpg" alt="Morning" />
                        <p>Early bird gets the worm (7am - 10am)</p>
                    </div>
                    <div
                        className="card"
                        onClick={() => handleSelect("timeOfDay", "evening")}
                    >
                        <img src="/images/evening.jpg" alt="Evening" />
                        <p>Anytime after 10am</p>
                    </div>
                </div>
            )}
            {step === 3 && (
                <div>
                    <h3>What is your budget for this date?</h3>
                    <div
                        className="card"
                        onClick={() => handleSelect("priceRange", "low")}
                    >
                        <img src="/images/low-budget.jpg" alt="Low Budget" />
                        <p>I'm on a budget (free - $20)</p>
                    </div>
                    <div
                        className="card"
                        onClick={() => handleSelect("priceRange", "medium")}
                    >
                        <img
                            src="/images/medium-budget.jpg"
                            alt="Medium Budget"
                        />
                        <p>I deserve a little treat ($21 - $60)</p>
                    </div>
                </div>
            )}
            <div>
                {step > 1 && <button onClick={handlePrevious}>Previous</button>}
                {step < 3 ? (
                    <button onClick={handleNext}>Next</button>
                ) : (
                    <button onClick={handleSubmit}>Submit</button>
                )}
                <button onClick={() => navigate("/")}>Cancel</button>
            </div>
        </div>
    );
}

export default Quiz;
