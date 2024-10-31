import React, { useState } from "react";

import { useNavigate } from "react-router-dom";
import "../SearchBar/SearchBar.scss";

const SearchBar = () => {
    const [query, setQuery] = useState("");
    const navigate = useNavigate();

    const handleSearch = (e) => {
        e.preventDefault();
        if (query.trim()) {
            navigate(`/search?q=${encodeURIComponent(query)}`);
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            handleSearch(e);
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
        </div>
    );
};

export default SearchBar;
