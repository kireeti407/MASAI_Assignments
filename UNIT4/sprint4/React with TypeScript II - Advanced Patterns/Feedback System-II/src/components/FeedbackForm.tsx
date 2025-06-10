import React, { useState } from "react";
import { useFeedback } from "../context/FeedbackContext";
import { useNavigate } from "react-router-dom";

const FeedbackForm: React.FC = () => {
  const { data, setData } = useFeedback();
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: name === "rating" ? Number(value) || '' : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, rating, feedback } = data;

    if (!name || !email || rating === '' || !feedback) {
      setError("Please fill in all fields.");
      return;
    }

    setError("");
    navigate("/summary");
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: 400, margin: "auto" }}>
      <h2>Feedback Form</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}

      <input name="name" placeholder="Name" value={data.name} onChange={handleChange} /><br />
      <input name="email" placeholder="Email" type="email" value={data.email} onChange={handleChange} /><br />
      <input name="rating" placeholder="Rating (1-5)" type="number" value={data.rating} onChange={handleChange} min={1} max={5} /><br />
      <textarea name="feedback" placeholder="Your Feedback" value={data.feedback} onChange={handleChange}></textarea><br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default FeedbackForm;
