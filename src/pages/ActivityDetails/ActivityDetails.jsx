import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Header from "../../components/Header/Header";
import "../ActivityDetails/ActivityDetails.scss";

const ActivityDetails = () => {
    const { id } = useParams(); // Get the activity ID from the URL
    const [activity, setActivity] = useState(null); // State to hold activity details
    const [loading, setLoading] = useState(true); // Loading state
    const [error, setError] = useState(null); // Error state

    // Fetch activity details when component mounts
    useEffect(() => {
        const fetchActivityDetails = async () => {
            try {
                const response = await axios.get(`/api/activities/${id}`);
                setActivity(response.data);
            } catch (err) {
                console.error("Error fetching activity details:", err);
                setError("Failed to load activity details");
            } finally {
                setLoading(false);
            }
        };

        fetchActivityDetails();
    }, [id]);

    if (loading) {
        return <div className="ideas__empty">Loading...</div>;
    }

    if (error) {
        return <div className="ideas__empty">{error}</div>;
    }

    if (!activity) {
        return <div className="ideas__empty">No activity found</div>;
    }

    return (
        <>
            <Header />
            <div className="date">
                <h1 className="date__name">{activity.name}</h1>
                <img
                    src={activity.image_url}
                    alt={activity.name}
                    className="date__image"
                />
                <p className="date__description">{activity.description}</p>

                <div className="date__venue">
                    <h2>The Venue</h2>
                    <p>
                        <span className="date__venue--bold">Name:</span>{" "}
                        {activity.venue_name}
                    </p>
                    <p>
                        <span className="date__venue--bold">Address:</span>{" "}
                        {activity.venue_address}
                    </p>
                    {activity.venue_website && (
                        <p>
                            <span className="date__venue--bold">Website:</span>{" "}
                            <a
                                href={activity.venue_website}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="date__venue--link"
                            >
                                {activity.venue_website}
                            </a>
                        </p>
                    )}
                </div>
                <div className="date__info">
                    {activity.moods && (
                        <div className="date__info">
                            <h3>Moods</h3>
                            <p>{activity.moods}</p>
                        </div>
                    )}

                    {activity.price_ranges && (
                        <div className="date__info">
                            <h3>Price Ranges</h3>
                            <p>{activity.price_ranges}</p>
                        </div>
                    )}

                    {activity.times_of_day && (
                        <div className="date__info">
                            <h3>Best Times to Visit</h3>
                            <p>{activity.times_of_day}</p>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default ActivityDetails;
