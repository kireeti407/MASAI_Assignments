import React from "react";
import { useFeedback } from "../context/FeedbackContext";
import { useNavigate } from "react-router-dom";

const FeedbackSummary: React.FC = () => {
  const { data } = useFeedback();
  const navigate = useNavigate();

  const isFormComplete =
    data.name && data.email && data.rating !== '' && data.feedback;

  if (!isFormComplete) {
    return (
      <div style={{ textAlign: "center", padding: 20 }}>
        <p>Form incomplete. Please submit the form first.</p>
        <button onClick={() => navigate("/")}>Go to Form</button>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: 400, margin: "auto" }}>
      <h2>Thank You!</h2>
      <p><strong>Name:</strong> {data.name}</p>
      <p><strong>Email:</strong> {data.email}</p>
      <p><strong>Rating:</strong> {data.rating}</p>
      <p><strong>Feedback:</strong> {data.feedback}</p>
      <button onClick={() => navigate("/")}>Submit Another</button>
    </div>
  );
};

export default FeedbackSummary;
