import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import axios from "axios";
import Header from "../../components/Header/Header";
import "./SearchResults.scss";

const SearchResults = () => {
    const location = useLocation();
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchSearchResults = async () => {
            setLoading(true);
            try {
                const searchParams = new URLSearchParams(location.search);
                const query = searchParams.get("q");
                if (!query) {
                    setError("No search query provided");
                    setLoading(false);
                    return;
                }
                const response = await axios.get(
                    `/api/activities/search?query=${encodeURIComponent(query)}`
                );
                setResults(response.data);
            } catch (error) {
                console.error("Error fetching search results:", error);
                setError("Failed to fetch search results");
            } finally {
                setLoading(false);
            }
        };

        fetchSearchResults();
    }, [location.search]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (results.length === 0) {
        return (
            <div className="search-results">
                <Header />
                <p className="search-results__empty">No results found.</p>
            </div>
        );
    }

    return (
        <div className="search-results">
            <Header />
            <h2 className="search-results__title">Search Results</h2>
            <div className="date">
                {results.map((activity, index) => (
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
                                    {activity.venue_name}
                                </span>
                            </p>
                            <p className="date__category">
                                Time of Day:
                                <span className="date__option">
                                    {activity.times_of_day || "Not specified"}
                                </span>
                            </p>
                            <p className="date__category">
                                Price Range:
                                <span className="date__option">
                                    {activity.price_ranges || "Not specified"}
                                </span>
                            </p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default SearchResults;
