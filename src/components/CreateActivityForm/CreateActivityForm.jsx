import React, { useState, useEffect } from "react";
import axios from "axios";

function CreateActivityForm() {
    const [formData, setFormData] = useState({
        name: "",
        description: "",
        venue_name: "",
        time_of_day_id: "",
        mood_id: "",
        price_range_id: "",
    });

    const [image, setImage] = useState(null);
    const [errors, setErrors] = useState({});
    const [timesOfDay, setTimesOfDay] = useState([]);
    const [moods, setMoods] = useState([]);
    const [priceRanges, setPriceRanges] = useState([]);

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

                setTimesOfDay(timesResponse.data);
                setMoods(moodsResponse.data);
                setPriceRanges(priceRangesResponse.data);
            } catch (error) {
                console.error("Error fetching options:", error);
            }
        };

        fetchOptions();
    }, []);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file && !file.type.match("image.*")) {
            setErrors({ ...errors, image: "Please upload a valid image file" });
            return;
        }
        setImage(file);
        setErrors({ ...errors, image: null });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = new FormData();
        data.append("name", formData.name);
        data.append("description", formData.description);
        data.append("venue_name", formData.venue_name);
        data.append("time_of_day_id", formData.time_of_day_id);
        data.append("mood_id", formData.mood_id);
        data.append("price_range_id", formData.price_range_id); // Ensure this is populated
        data.append("image", image);

        try {
            const response = await axios.post(
                "http://localhost:8080/api/activities",
                data
            );
            console.log("Activity created:", response.data);
            // Reset form or show success message
            setFormData({
                name: "",
                description: "",
                venue_name: "",
                time_of_day_id: "",
                mood_id: "",
                price_range_id: "",
            });
            setImage(null);
            setErrors({});
        } catch (error) {
            console.error(
                "Error creating activity:",
                error.response?.data || error.message
            );
            setErrors({ ...errors, submit: "Failed to create activity" });
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Create Activity</h2>

            <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
            />

            <input
                type="text"
                name="venue_name"
                placeholder="Venue"
                value={formData.venue_name}
                onChange={handleChange}
                required
            />

            <textarea
                name="description"
                placeholder="Be as detailed as possible"
                value={formData.description}
                onChange={handleChange}
            />

            <select
                name="time_of_day_id"
                value={formData.time_of_day_id}
                onChange={handleChange}
            >
                <option value="">Time of Day</option>
                {timesOfDay.map((time) => (
                    <option key={time.id} value={time.id}>
                        {time.name}
                    </option>
                ))}
            </select>

            <select
                name="mood_id"
                value={formData.mood_id}
                onChange={handleChange}
            >
                <option value="">Mood</option>
                {moods.map((mood) => (
                    <option key={mood.id} value={mood.id}>
                        {mood.name}
                    </option>
                ))}
            </select>

            <select
                name="price_range_id"
                value={formData.price_range_id}
                onChange={handleChange}
            >
                <option value="">Price Range</option>
                {priceRanges.map((range) => (
                    <option key={range.id} value={range.id}>
                        {range.range}
                    </option>
                ))}
            </select>

            <input type="file" name="image" onChange={handleImageChange} />

            {errors.image && <p className="error">{errors.image}</p>}

            <button type="submit">Submit</button>

            {errors.submit && <p className="error">{errors.submit}</p>}
        </form>
    );
}

export default CreateActivityForm;
