const initialState = {
  data: [],
  favorites: [],
};

const matchesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_MATCHES':
      return { ...state, data: action.payload };
    case 'TOGGLE_FAVORITE':
      const exists = state.favorites.find((m) => m.id === action.payload.id);
      return {
        ...state,
        favorites: exists
          ? state.favorites.filter((m) => m.id !== action.payload.id)
          : [...state.favorites, action.payload],
      };
    default:
      return state;
  }
};

export default matchesReducer;