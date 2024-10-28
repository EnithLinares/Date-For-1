import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import ActivityCarousel from "../../components/ActivityCarousel/ActivityCarousel";
import "../ActivitiesList/ActivitiesList.scss";

function ActivitiesList() {
    const [activities, setActivities] = useState([]);
    const [venues, setVenues] = useState([]);
    const [moods, setMoods] = useState([]);
    const [priceRanges, setPriceRanges] = useState([]);
    const [timesOfDay, setTimesOfDay] = useState([]);
    const [filters, setFilters] = useState({
        venue: "",
        mood: "",
        priceRange: "",
        timeOfDay: "",
    });
    const [openFilters, setOpenFilters] = useState({
        venue: false,
        mood: false,
        priceRange: false,
        timeOfDay: false,
    });

    const fetchActivities = async () => {
        try {
            const response = await axios.get("/api/activities", {
                params: filters,
            });
            setActivities(Array.isArray(response.data) ? response.data : []);
        } catch (error) {
            console.error("Error fetching activities:", error);
            setActivities([]); // Ensure activities is always an array
        }
    };

    const fetchOptions = async () => {
        try {
            const venuesResponse = await axios.get("/api/options/venues");
            const moodsResponse = await axios.get("/api/options/moods");
            const priceRangesResponse = await axios.get(
                "/api/options/price-ranges"
            );
            const timesResponse = await axios.get("/api/options/times-of-day");

            setVenues(venuesResponse.data);
            setMoods(moodsResponse.data);
            setPriceRanges(priceRangesResponse.data);
            setTimesOfDay(timesResponse.data);
        } catch (error) {
            console.error("Error fetching options:", error);
        }
    };

    useEffect(() => {
        fetchOptions();
        fetchActivities();
    }, [filters]);

    const handleFilterChange = (e) => {
        setFilters({
            ...filters,
            [e.target.name]: e.target.value,
        });
    };

    const toggleFilter = (filterName) => {
        setOpenFilters((prevState) => ({
            ...prevState,
            [filterName]: !prevState[filterName],
        }));
    };

    return (
        <div className="ideas">
            <Header />
            <ActivityCarousel activities={activities} />
            <h2 className="ideas__title">
                Check out the whole list <br></br>of Date Ideas
            </h2>
            <div className="ideas__filter">
                <p className="ideas__label">
                    Use these filters for a more curated experience
                </p>
                <button
                    onClick={() => toggleFilter("venue")}
                    className="ideas__filter--button"
                >
                    Venue {openFilters.venue ? "▲" : "▼"}
                </button>
                {openFilters.venue && (
                    <select name="venue" onChange={handleFilterChange}>
                        <option value="">All Venues</option>
                        {venues.map((venue) => (
                            <option key={venue.id} value={venue.id}>
                                {venue.name}
                            </option>
                        ))}
                    </select>
                )}

                <button
                    onClick={() => toggleFilter("mood")}
                    className="ideas__filter--button"
                >
                    Mood {openFilters.mood ? "▲" : "▼"}
                </button>
                {openFilters.mood && (
                    <select name="mood" onChange={handleFilterChange}>
                        <option value="">All Moods</option>
                        {moods.map((mood) => (
                            <option key={mood.id} value={mood.name}>
                                {mood.name}
                            </option>
                        ))}
                    </select>
                )}

                <button
                    onClick={() => toggleFilter("priceRange")}
                    className="ideas__filter--button"
                >
                    Price Range {openFilters.priceRange ? "▲" : "▼"}
                </button>
                {openFilters.priceRange && (
                    <select name="priceRange" onChange={handleFilterChange}>
                        <option value="">All Price Ranges</option>
                        {priceRanges.map((range) => (
                            <option key={range.id} value={range.range}>
                                {range.range}
                            </option>
                        ))}
                    </select>
                )}

                <button
                    onClick={() => toggleFilter("timeOfDay")}
                    className="ideas__filter--button"
                >
                    Time of Day {openFilters.timeOfDay ? "▲" : "▼"}
                </button>
                {openFilters.timeOfDay && (
                    <select name="timeOfDay" onChange={handleFilterChange}>
                        <option value="">All Times of Day</option>
                        {timesOfDay.map((time) => (
                            <option key={time.id} value={time.name}>
                                {time.name}
                            </option>
                        ))}
                    </select>
                )}
            </div>

            {activities.length === 0 && (
                <p className="ideas__empty">
                    I'm all out of ideas!<br></br> Please try another filter.
                </p>
            )}

            <div className="date">
                {activities.map((activity, index) => (
                    <Link
                        to={`/activities/${activity.id}`}
                        key={`${activity.id}-${index}`}
                        className="date__link"
                    >
                        <div className="date__card">
                            <img
                                src={activity.image_url}
                                alt={activity.name}
                                className="date__image"
                            />
                            <h3 className="date__name">{activity.name}</h3>
                            <p className="date__description">
                                {activity.description
                                    ? activity.description.slice(0, 100) + "..."
                                    : "No description available."}
                            </p>

                            <p className="date__category">
                                Venue:{" "}
                                <span className="date__option">
                                    {" "}
                                    {activity.venue_name}{" "}
                                </span>
                            </p>

                            <p className="date__category">
                                Time of Day:
                                <span className="date__option">
                                    {" "}
                                    {(activity.times_of_day || "")
                                        .split(", ")
                                        .join(",  ")}
                                </span>
                            </p>
                            <p className="date__category">
                                Price Range:
                                <span className="date__option">
                                    {" "}
                                    {(activity.price_ranges || "")
                                        .split(", ")
                                        .join(", ")}
                                </span>
                            </p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default ActivitiesList;
