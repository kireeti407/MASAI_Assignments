import React from "react";
import { useForm } from "./useForm";
const ContactForm = () => {
  const { formData, handleChange, resetForm } = useForm({
    name: "",
    email: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted:", formData);
    resetForm();
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Name"
      />
      <input
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
      />
      <button type="submit">Submit</button>
    </form>
  );
};
export default ContactForm;
