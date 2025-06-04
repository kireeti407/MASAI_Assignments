const initialState = [];

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_BOOK':
      return [...state, action.payload];
    case 'EDIT_BOOK':
      return state.map(book =>
        book.id === action.payload.id ? { ...book, ...action.payload } : book
      );
    case 'DELETE_BOOK':
      return state.filter(book => book.id !== action.payload);
    case 'TOGGLE_READ':
      return state.map(book =>
        book.id === action.payload ? { ...book, read: !book.read } : book
      );
    default:
      return state;
  }
};

export default booksReducer