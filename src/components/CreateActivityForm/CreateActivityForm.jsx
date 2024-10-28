import React, { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import "./CreateActivityForm.scss";

function CreateActivityForm() {
    const [formData, setFormData] = useState({
        name: "",
        venue: "",
        description: "",
        timeOfDay: "",
        mood: "",
        priceRange: "",
        image: null,
    });

    const [options, setOptions] = useState({
        timesOfDay: [],
        moods: [],
        priceRanges: [],
    });

    const navigate = useNavigate();

    useEffect(() => {
        const fetchOptions = async () => {
            try {
                const timesResponse = await axios.get(
                    "/api/options/times-of-day"
                );
                const moodsResponse = await axios.get("/api/options/moods");
                const priceRangesResponse = await axios.get(
                    "/api/options/price-ranges"
                );

                setOptions({
                    timesOfDay: timesResponse.data,
                    moods: moodsResponse.data,
                    priceRanges: priceRangesResponse.data,
                });
            } catch (error) {
                console.error("Error fetching options:", error);
            }
        };

        fetchOptions();
    }, []);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleFileChange = (e) => {
        setFormData({ ...formData, image: e.target.files[0] });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = new FormData();

        // Append all form fields with correct keys
        data.append("name", formData.name);
        data.append("venue_name", formData.venue);
        data.append("description", formData.description);

        const timeOfDay = options.timesOfDay.find(
            (time) => time.name === formData.timeOfDay
        );
        const mood = options.moods.find((mood) => mood.name === formData.mood);
        const priceRange = options.priceRanges.find(
            (range) => range.range === formData.priceRange
        );

        if (timeOfDay) data.append("time_of_day_id", timeOfDay.id);
        if (mood) data.append("mood_id", mood.id);
        if (priceRange) data.append("price_range_id", priceRange.id);

        if (formData.image) {
            data.append("image", formData.image);
        }

        try {
            await axios.post("/api/activities", data, {
                headers: { "Content-Type": "multipart/form-data" },
            });
            toast.success("Activity added successfully!");
            setFormData({
                name: "",
                venue: "",
                description: "",
                timeOfDay: "",
                mood: "",
                priceRange: "",
                image: null,
            });
            navigate("/activities");
        } catch (error) {
            console.error("Error adding activity:", error);
            toast.error("Failed to add activity.");
        }
    };

    return (
        <div className="form">
            <h2 className="form__title">
                Nothing caught your eye? Help us grow the database!
            </h2>
            <form onSubmit={handleSubmit} className="form__fields">
                <label className="form__input">
                    Date Idea
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Date Idea"
                        className="form__input--field"
                    />
                </label>
                <label className="form__input">
                    Venue
                    <input
                        type="text"
                        name="venue"
                        value={formData.venue}
                        onChange={handleChange}
                        placeholder="Venue"
                        className="form__input--field"
                    />
                </label>
                <label className="form__input">
                    Description
                    <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        placeholder="What are we doing?"
                        className="form__input--textarea"
                    />
                </label>
                <label className="form__select">
                    Time of day
                    <select
                        name="timeOfDay"
                        value={formData.timeOfDay}
                        onChange={handleChange}
                    >
                        <option value="">Time of Day</option>
                        {options.timesOfDay.map((time) => (
                            <option key={time.id} value={time.name}>
                                {time.name}
                            </option>
                        ))}
                    </select>
                </label>
                <label className="form__select">
                    Mood
                    <select
                        name="mood"
                        value={formData.mood}
                        onChange={handleChange}
                    >
                        <option value="">Mood</option>
                        {options.moods.map((mood) => (
                            <option key={mood.id} value={mood.name}>
                                {mood.name}
                            </option>
                        ))}
                    </select>
                </label>
                <label className="form__select">
                    <select
                        name="priceRange"
                        value={formData.priceRange}
                        onChange={handleChange}
                    >
                        <option value="">Price Range</option>
                        {options.priceRanges.map((range) => (
                            <option key={range.id} value={range.range}>
                                {range.range}
                            </option>
                        ))}
                    </select>
                </label>
                <div className="upload-section">
                    <label htmlFor="imageUpload" className="upload-label">
                        Upload Photo
                    </label>
                    <input
                        type="file"
                        id="imageUpload"
                        accept="image/*"
                        onChange={handleFileChange}
                        className="upload-input"
                    />
                </div>

                <button type="submit" className="form__button">
                    Submit
                </button>
            </form>
            <ToastContainer />
        </div>
    );
}

export default CreateActivityForm;
