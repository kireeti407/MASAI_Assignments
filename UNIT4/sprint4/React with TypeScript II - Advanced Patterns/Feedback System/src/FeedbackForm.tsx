import React, { useState, ChangeEvent, FormEvent } from 'react';

type FeedbackData = {
  name: string;
  email: string;
  rating: number | '';
  feedback: string;
};

const initialFormState: FeedbackData = {
  name: '',
  email: '',
  rating: '',
  feedback: '',
};

const FeedbackForm: React.FC = () => {
  const [formData, setFormData] = useState<FeedbackData>(initialFormState);
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: name === 'rating' ? Number(value) || '' : value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { name, email, rating, feedback } = formData;

    if (!name || !email || rating === '' || !feedback) {
      alert('Please fill in all fields.');
      return;
    }

    setSubmitted(true);
    setFormData(initialFormState);
  };

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto' }}>
      <h2>Customer Feedback Form</h2>

      {!submitted ? (
        <form onSubmit={handleSubmit}>
          <div>
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label>Rating (1–5):</label>
            <input
              type="number"
              name="rating"
              value={formData.rating}
              onChange={handleChange}
              min={1}
              max={5}
              required
            />
          </div>

          <div>
            <label>Feedback:</label>
            <textarea
              name="feedback"
              value={formData.feedback}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <button type="submit">Submit Feedback</button>
        </form>
      ) : (
        <div>
          <h3>Thank you for your feedback!</h3>
          <button onClick={() => setSubmitted(false)}>Submit Another</button>
        </div>
      )}
    </div>
  );
};

export default FeedbackForm;
