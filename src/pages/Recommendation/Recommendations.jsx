import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";

function Recommendations() {
    const location = useLocation();
    const navigate = useNavigate();
    const activities = location.state?.activities || [];

    return (
        <div>
            <Header />
            <h2>Recommended Activities</h2>
            {activities.message ? (
                <div>
                    <p>{activities.message}</p>
                    <button onClick={() => navigate("/activities")}>
                        View All Activities
                    </button>
                    <button onClick={() => navigate("/quiz")}>
                        Take Quiz Again
                    </button>
                </div>
            ) : (
                activities.map((activity) => (
                    <div key={activity.id} className="activity-card">
                        <h3>{activity.name}</h3>
                        {/* Add more details and links to activity details if needed */}
                    </div>
                ))
            )}
        </div>
    );
}

export default Recommendations;
