import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../SearchBar/SearchBar.scss";

function SearchBar() {
    const [query, setQuery] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSearch = async () => {
        try {
            const response = await axios.get("/api/activities/search", {
                params: { query },
            });

            console.log("Response Data:", response.data);

            if (response.data.length === 0) {
                setError("No results found");
            } else {
                setError("");
                navigate("/search-results", {
                    state: { results: response.data },
                });
            }
        } catch (err) {
            console.error(err);
            setError("An error occurred during the search");
        }
    };

    const handleKeyPress = (event) => {
        if (event.key === "Enter") {
            handleSearch();
        }
    };

    return (
        <div className="search">
            <input
                type="text"
                className="search__bar"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Search your date idea..."
            />
            <button onClick={handleSearch} className="search__button">
                Search
            </button>
            {error && <p>{error}</p>}
        </div>
    );
}

export default SearchBar;
