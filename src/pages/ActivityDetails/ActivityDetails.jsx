import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Header from "../../components/Header/Header";
import "../ActivityDetails/ActivityDetails.scss";

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

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <div>
            <Header />
            <div className="detail">
                <h2 className="detail__name">{activity.name}</h2>
                <img
                    src={activity.image_url}
                    alt={activity.name}
                    className="detail__image"
                />
                <p className="detail__description">{activity.description}</p>
                <div className="detail__info">
                    <p className="detail__info--type">
                        <span className="detail__info--bold">Price Range:</span>{" "}
                        {activity.price_ranges?.split(", ").join(", ")}
                    </p>
                    <p className="detail__info--type">
                        <span className="detail__info--bold">Moods:</span>{" "}
                        {activity.moods?.split(", ").join(", ")}
                    </p>
                    <p className="detail__info--type">
                        <span className="detail__info--bold">
                            Times of Day:
                        </span>{" "}
                        {activity.times_of_day?.split(", ").join(", ")}
                    </p>
                    <div className="detail__venue">
                        <h3 className="detail__venue--title">
                            Venue Information
                        </h3>
                        <p className="detail__venue--info">
                            <span className="detail__venue--bold">Name:</span>{" "}
                            {activity.venue_name}
                        </p>
                        <p className="detail__venue--info">
                            <span className="detail__venue--bold">
                                Address:
                            </span>{" "}
                            {activity.venue_address}
                        </p>
                        {activity.venue_website && (
                            <p className="detail__venue--info">
                                <span className="detail__venue--bold">
                                    Website:
                                </span>{" "}
                                <a
                                    href={activity.venue_website}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="detail__venue--link"
                                >
                                    {activity.venue_website}
                                </a>
                            </p>
                        )}
                    </div>
                </div>
                <button onClick={scrollToTop} className="detail__button">
                    Back to Top
                </button>
            </div>
        </div>
    );
}

export default ActivityDetail;
