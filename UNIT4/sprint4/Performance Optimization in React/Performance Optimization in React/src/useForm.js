import { useState } from "react";
export const useForm = (initialValues) => {
  const [formData, setFormData] = useState(initialValues);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const resetForm = () => setFormData(initialValues);
  return { formData, handleChange, resetForm };
};
