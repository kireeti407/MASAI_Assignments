const initialState = {
  count: 0,
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "INCREMENT":
      return { ...state, count: state.count + payload };
    case "DECREMENT":
      return { ...state, count: state.count - payload };
    case "RESET":
      return { ...state, count: 0 };
    default:
      return state;
  }
};
