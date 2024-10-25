import React, { useState } from "react";
import axios from "axios";

function CreateActivityForm() {
    const [formData, setFormData] = useState({
        name: "",
        description: "",
        venue_name: "",
        postal_code: "",
        time_of_day_id: "",
        mood_id: "",
        price_range_id: "",
    });

    const [image, setImage] = useState(null);
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleImageChange = (e) => {
        setImage(e.target.files[0]);
    };

    const validatePostalCode = (postalCode) => {
        const regex = /^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/;
        return regex.test(postalCode);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validatePostalCode(formData.postal_code)) {
            setErrors({ postal_code: "Invalid Canadian postal code" });
            return;
        }

        if (!image) {
            setErrors({ image: "Please upload an image" });
            return;
        }

        const data = new FormData();
        data.append("name", formData.name);
        data.append("description", formData.description);
        data.append("venue_name", formData.venue_name);
        data.append("postal_code", formData.postal_code);
        data.append("time_of_day_id", formData.time_of_day_id);
        data.append("mood_id", formData.mood_id);
        data.append("price_range_id", formData.price_range_id);
        data.append("image", image);

        try {
            const response = await axios.post("/api/activities", data, {
                headers: { "Content-Type": "multipart/form-data" },
            });
            console.log("Activity created:", response.data);
            // Reset form or redirect
        } catch (error) {
            console.error("Error creating activity:", error);
            setErrors({ submit: "Failed to create activity" });
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
            {errors.name && <p>{errors.name}</p>}

            <input
                type="text"
                name="venue_name"
                placeholder="Venue"
                value={formData.venue_name}
                onChange={handleChange}
                required
            />
            {errors.venue_name && <p>{errors.venue_name}</p>}

            <input
                type="text"
                name="postal_code"
                placeholder="Postal Code"
                value={formData.postal_code}
                onChange={handleChange}
                required
            />
            {errors.postal_code && <p>{errors.postal_code}</p>}

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
                {/* Add options dynamically */}
            </select>

            <select
                name="mood_id"
                value={formData.mood_id}
                onChange={handleChange}
            >
                <option value="">Mood</option>
                {/* Add options dynamically */}
            </select>

            <select
                name="price_range_id"
                value={formData.price_range_id}
                onChange={handleChange}
            >
                <option value="">Price Range</option>
                {/* Add options dynamically */}
            </select>

            <input type="file" name="image" onChange={handleImageChange} />
            {errors.image && <p>{errors.image}</p>}

            <button type="submit">Submit</button>
            {errors.submit && <p>{errors.submit}</p>}
        </form>
    );
}

export default CreateActivityForm;
