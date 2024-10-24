import React from "react";
import { useLocation } from "react-router-dom";

const SearchResults = () => {
    const location = useLocation();
    const results = Array.isArray(location.state?.results)
        ? location.state.results
        : [];

    return (
        <div>
            <h2>Search Results</h2>
            {results.length === 0 ? (
                <p>No results found</p>
            ) : (
                <ul>
                    {results.map((activity) => (
                        <li key={activity.id}>
                            <h3>{activity.name}</h3>
                            <p>{activity.description}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default SearchResults;
