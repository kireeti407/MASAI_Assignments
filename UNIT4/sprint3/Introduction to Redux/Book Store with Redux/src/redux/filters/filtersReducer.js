const initialState = {
  author: '',
  genre: '',
  status: 'all',
};

const filtersReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_FILTER':
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default filtersReducer;