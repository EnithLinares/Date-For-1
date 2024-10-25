import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function ActivityCarousel({ images = [] }) {
    // Default to an empty array
    const responsive = {
        superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 5 },
        desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
        tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
        mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
    };

    return (
        <Carousel responsive={responsive}>
            {images.map((image, index) => (
                <img key={index} src={image} alt="Activity" />
            ))}
        </Carousel>
    );
}

export default ActivityCarousel;
