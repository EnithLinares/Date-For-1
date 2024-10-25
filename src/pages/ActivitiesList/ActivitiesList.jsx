import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import ActivityCarousel from "../../components/ActivityCarousel/ActivityCarousel.jsx";

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

    useEffect(() => {
        fetchActivities();
        fetchOptions();
    }, [filters]);

    const fetchActivities = async () => {
        try {
            const response = await axios.get("/api/activities", {
                params: filters,
            });
            setActivities(response.data);
        } catch (error) {
            console.error("Error fetching activities:", error);
        }
    };

    const fetchOptions = async () => {
        try {
            const venuesResponse = await axios.get("/api/venues");
            const moodsResponse = await axios.get("/api/moods");
            const priceRangesResponse = await axios.get("/api/price-ranges");
            const timesResponse = await axios.get("/api/times-of-day");

            setVenues(venuesResponse.data);
            setMoods(moodsResponse.data);
            setPriceRanges(priceRangesResponse.data);
            setTimesOfDay(timesResponse.data);
        } catch (error) {
            console.error("Error fetching options:", error);
        }
    };

    const handleFilterChange = (e) => {
        setFilters({
            ...filters,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <div>
            <h1>Activities List</h1>
            <div>
                <select name="venue" onChange={handleFilterChange}>
                    <option value="">All Venues</option>
                    {venues.map((venue) => (
                        <option key={venue.id} value={venue.id}>
                            {venue.name}
                        </option>
                    ))}
                </select>
                <select name="mood" onChange={handleFilterChange}>
                    <option value="">All Moods</option>
                    {moods.map((mood) => (
                        <option key={mood.id} value={mood.id}>
                            {mood.name}
                        </option>
                    ))}
                </select>
                <select name="priceRange" onChange={handleFilterChange}>
                    <option value="">All Price Ranges</option>
                    {priceRanges.map((range) => (
                        <option key={range.id} value={range.id}>
                            {range.name}
                        </option>
                    ))}
                </select>
                <select name="timeOfDay" onChange={handleFilterChange}>
                    <option value="">All Times of Day</option>
                    {timesOfDay.map((time) => (
                        <option key={time.id} value={time.id}>
                            {time.name}
                        </option>
                    ))}
                </select>
            </div>
            <div>
                {activities.map((activity) => (
                    <div key={activity.id}>
                        <h3>{activity.name}</h3>
                        {/* Add more activity details here */}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ActivitiesList;
