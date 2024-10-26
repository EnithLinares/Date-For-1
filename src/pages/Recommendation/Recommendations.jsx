import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Recommendations() {
    const location = useLocation();
    const navigate = useNavigate();
    const activities = location.state?.activities || [];

    return (
        <div>
            <h2>Recommended Activities</h2>
            {activities.map((activity) => (
                <div key={activity.id} className="activity-card">
                    <h3>{activity.name}</h3>
                    {/* Add more details and links to activity details if needed */}
                </div>
            ))}
            <button onClick={() => navigate("/activities")}>
                All Activities
            </button>
            <button onClick={() => navigate("/quiz")}>Take Quiz Again</button>
        </div>
    );
}

export default Recommendations;
