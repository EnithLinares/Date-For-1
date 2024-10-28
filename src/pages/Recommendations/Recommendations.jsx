import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import "../Recommendations/Recommendations.scss";

function Recommendations() {
    const location = useLocation();
    const navigate = useNavigate();
    const activities = location.state?.activities || [];

    return (
        <div>
            <Header />
            <div className="reco">
                <h2 className="reco__title">Check out this ideas!</h2>
                {activities.length === 0 ? (
                    <div className="reco__error">
                        <p className="reco__error--message">
                            Whoops, we don't have any date ideas matching your
                            answers.
                        </p>
                    </div>
                ) : (
                    activities.map((activity) => (
                        <div key={activity.id} className="reco__option">
                            <img
                                src={activity.image_url}
                                alt={activity.name}
                                className="reco__option--image"
                            />
                            <h3 className="reco__option--name">
                                {activity.name}
                            </h3>
                            <p className="reco__option--details">
                                {activity.description
                                    ? activity.description.slice(0, 100) + "..."
                                    : "No description available."}
                            </p>
                            <button
                                onClick={() =>
                                    navigate(`/activities/${activity.id}`)
                                }
                                className="reco__option--button"
                            >
                                View Details
                            </button>
                        </div>
                    ))
                )}
                <div className="reco__others">
                    <p className="reco__others--message">
                        Not your cup of tea? <br></br> No problem
                    </p>
                    <p className="reco__others--body">
                        {" "}
                        Check out our full list of date ideas <br></br> or{" "}
                        <br></br> take the quiz again!
                    </p>
                    <button
                        onClick={() => navigate("/activities")}
                        className="reco__others--button"
                    >
                        View All Activities
                    </button>
                    <button
                        onClick={() => navigate("/quiz")}
                        className="reco__others--button"
                    >
                        Take Quiz Again
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Recommendations;
