import { Box, Button, Input, Textarea, NumberInput, NumberInputField, useToast } from "@chakra-ui/react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addFeedback } from "./feedbackSlice";
import { AppDispatch } from "../../app/store";

const FeedbackForm = () => {
  const dispatch = useDispatch<AppDispatch>();
  const toast = useToast();
  const [form, setForm] = useState({ name: "", email: "", rating: 0, feedback: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleRatingChange = (_: string, valueAsNumber: number) =>
    setForm((prev) => ({ ...prev, rating: valueAsNumber }));

  const handleSubmit = () => {
    if (!form.name || !form.email || !form.rating || !form.feedback) {
      toast({ status: "error", title: "Fill all fields" });
      return;
    }
    dispatch(addFeedback(form));
    toast({ status: "success", title: "Feedback submitted!" });
    setForm({ name: "", email: "", rating: 0, feedback: "" });
  };

  return (
    <Box maxW="md" mx="auto" mt={8}>
      <Input placeholder="Name" name="name" value={form.name} onChange={handleChange} mb={2} />
      <Input placeholder="Email" name="email" value={form.email} onChange={handleChange} mb={2} />
      <NumberInput min={1} max={5} value={form.rating} onChange={handleRatingChange} mb={2}>
        <NumberInputField placeholder="Rating" />
      </NumberInput>
      <Textarea name="feedback" placeholder="Feedback" value={form.feedback} onChange={handleChange} mb={4} />
      <Button onClick={handleSubmit} colorScheme="teal">Submit</Button>
    </Box>
  );
};

export default FeedbackForm;
