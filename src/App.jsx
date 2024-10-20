import "./App.scss";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import Quiz from "./pages/Quiz/Quiz.jsx";
import ActivitiesList from "./pages/ActivitiesList/ActivitiesList.jsx";
import ActivityDetails from "./pages/ActivityDetails/ActivityDetails.jsx";
import AddActivity from "./pages/AddActivity/AddActivity.jsx";
import AboutUs from "./pages/AboutUs/AboutUs.jsx";

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/quiz" element={<Quiz />} />
                <Route path="/activities" element={<ActivitiesList />} />
                <Route path="/activities/:id" element={<ActivityDetails />} />
                <Route path="/add-activity" element={<AddActivity />} />
                <Route path="/about" element={<AboutUs />} />
            </Routes>
        </Router>
    );
}
