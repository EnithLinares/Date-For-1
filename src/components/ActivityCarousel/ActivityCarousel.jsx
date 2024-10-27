import React from "react";
import { useNavigate } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../ActivityCarousel/ActivityCarousel.scss";

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
    },
};

function ActivityCarousel({ activities }) {
    const navigate = useNavigate();

    return (
        <Carousel
            responsive={responsive}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={4000}
        >
            {activities.map((activity) => (
                <div key={activity.id} className="carousel">
                    <img
                        src={activity.image_url}
                        alt={activity.name}
                        className="carousel__image"
                    />
                    <h3>{activity.name}</h3>
                    <button
                        className="carousel__button"
                        onClick={() => navigate(`/activities/${activity.id}`)}
                    >
                        Pick this date!
                    </button>
                </div>
            ))}
        </Carousel>
    );
}

export default ActivityCarousel;
