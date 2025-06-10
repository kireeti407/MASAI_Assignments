import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FeedbackEntry, FeedbackState } from "../../types/feedback";
import { v4 as uuidv4 } from "uuid";

const initialState: FeedbackState = {
  feedbacks: [],
  filter: {},
};

const feedbackSlice = createSlice({
  name: "feedback",
  initialState,
  reducers: {
    addFeedback: (state, action: PayloadAction<Omit<FeedbackEntry, "id" | "date">>) => {
      state.feedbacks.push({
        ...action.payload,
        id: uuidv4(),
        date: new Date().toISOString(),
      });
    },
    setFilter: (state, action: PayloadAction<FeedbackState["filter"]>) => {
      state.filter = action.payload;
    },
  },
});

export const { addFeedback, setFilter } = feedbackSlice.actions;
export default feedbackSlice.reducer;
