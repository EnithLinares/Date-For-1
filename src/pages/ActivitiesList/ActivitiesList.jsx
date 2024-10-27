import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";

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
            console.log("Fetched Activities:", response.data);
            setActivities(response.data);
        } catch (error) {
            console.error("Error fetching activities:", error);
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

            console.log("Venues:", venuesResponse.data);
            console.log("Moods:", moodsResponse.data);
            console.log("Price Ranges:", priceRangesResponse.data);
            console.log("Times of Day:", timesResponse.data);

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
        <div>
            <Header />
            <h1>Activities List</h1>
            <div>
                <button onClick={() => toggleFilter("venue")}>
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

                <button onClick={() => toggleFilter("mood")}>
                    Mood {openFilters.mood ? "▲" : "▼"}
                </button>
                {openFilters.mood && (
                    <select name="mood" onChange={handleFilterChange}>
                        <option value="">All Moods</option>
                        {moods.map((mood) => (
                            <option key={mood.id} value={mood.id}>
                                {mood.name}
                            </option>
                        ))}
                    </select>
                )}

                <button onClick={() => toggleFilter("priceRange")}>
                    Price Range {openFilters.priceRange ? "▲" : "▼"}
                </button>
                {openFilters.priceRange && (
                    <select name="priceRange" onChange={handleFilterChange}>
                        <option value="">All Price Ranges</option>
                        {priceRanges.map((range) => (
                            <option key={range.id} value={range.id}>
                                {range.range}
                            </option>
                        ))}
                    </select>
                )}

                <button onClick={() => toggleFilter("timeOfDay")}>
                    Time of Day {openFilters.timeOfDay ? "▲" : "▼"}
                </button>
                {openFilters.timeOfDay && (
                    <select name="timeOfDay" onChange={handleFilterChange}>
                        <option value="">All Times of Day</option>
                        {timesOfDay.map((time) => (
                            <option key={time.id} value={time.id}>
                                {time.name}
                            </option>
                        ))}
                    </select>
                )}
            </div>
            <div>
                {activities.map((activity) => (
                    <Link
                        to={`/activity/${activity.id}`}
                        key={activity.id}
                        className="activity-link"
                    >
                        <div className="activity-item">
                            <h3>{activity.name}</h3>
                            <p className="description-preview">
                                {activity.description
                                    ? activity.description.slice(0, 100) + "..."
                                    : "No description available."}
                            </p>
                            {/* Add more activity details here if needed */}
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default ActivitiesList;
