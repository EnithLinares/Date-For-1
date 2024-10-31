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
                console.log("API Response:", response.data); // Log API response for debugging
                setActivity(response.data); // Update state with activity details
            } catch (err) {
                console.error("Error fetching activity details:", err);
                setError("Failed to load activity details");
            } finally {
                setLoading(false); // Stop loading once request completes
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
        <div className="date">
            <h1 className="date__name">{activity.name}</h1>
            <img
                src={activity.image_url} // Use image_url directly from API response
                alt={activity.name}
                className="date__image"
            />
            <p className="date__description">{activity.description}</p>

            <div className="date__venue">
                <h2>Venue Information</h2>
                <p>
                    <strong>Name:</strong> {activity.venue_name}
                </p>
                <p>
                    <strong>Address:</strong> {activity.venue_address}
                </p>
                {activity.venue_website && (
                    <p>
                        <strong>Website:</strong>{" "}
                        <a
                            href={activity.venue_website}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {activity.venue_website}
                        </a>
                    </p>
                )}
            </div>

            {/* Additional information such as moods, price ranges, and times of day */}
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
    );
};

export default ActivityDetails;
