import { createSlice } from "@reduxjs/toolkit";
const TaskSlice = createSlice({
  name: "AddTask",
  initialState: [],
  reducers: {
    ADD: (state, action) => {
      state.push(action.payload.current);
      return state;
    },
    REMOVE: (state, action) => {
      return state.filter((e) => e.id != action.payload);
    },
    TOGGLE: (state, action) => {
      const task = state.find((e) => e.id === action.payload);
      if (task) {
        task.status = !task.status;
      }
      return state;
    },
  },
});

export const { ADD, REMOVE, TOGGLE } = TaskSlice.actions;
export default TaskSlice.reducer;
