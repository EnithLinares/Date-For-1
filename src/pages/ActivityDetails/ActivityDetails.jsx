import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Header from "../../components/Header/Header";

function ActivityDetail() {
    const [activity, setActivity] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        const fetchActivity = async () => {
            try {
                const response = await axios.get(`/api/activities/${id}`);
                setActivity(response.data);
            } catch (error) {
                console.error("Error fetching activity:", error);
            }
        };

        fetchActivity();
    }, [id]);

    if (!activity) return <div>Loading...</div>;

    return (
        <div>
            <Header />
            <h1>{activity.name}</h1>
            <p>{activity.description}</p>
            {/* Add more activity details here */}
        </div>
    );
}

export default ActivityDetail;
