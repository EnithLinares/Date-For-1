import "./App.scss";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import SearchResults from "./pages/SearchResults/SearchResults.jsx";
import Quiz from "./pages/Quiz/Quiz.jsx";
import ActivitiesList from "./pages/ActivitiesList/ActivitiesList.jsx";
import ActivityDetail from "./pages/ActivityDetails/ActivityDetails.jsx";
import AddActivity from "./pages/AddActivity/AddActivity.jsx";
import AboutUs from "./pages/AboutUs/AboutUs.jsx";
import Recommendations from "./pages/Recommendations/Recommendations.jsx";

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/search" element={<SearchResults />} />
                <Route path="/quiz" element={<Quiz />} />
                <Route path="/recommendations" element={<Recommendations />} />
                <Route path="/activities" element={<ActivitiesList />} />
                <Route path="/activities/:id" element={<ActivityDetail />} />
                <Route path="/add-activity" element={<AddActivity />} />
                <Route path="/about" element={<AboutUs />} />
            </Routes>
        </Router>
    );
}
