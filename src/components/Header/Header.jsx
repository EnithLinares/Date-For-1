import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <div>
            <p>
                <Link to="/quiz">Take the Quiz</Link>
            </p>
            <p>
                <Link to="/activities">Browse Activities</Link>
            </p>
        </div>
    );
}
