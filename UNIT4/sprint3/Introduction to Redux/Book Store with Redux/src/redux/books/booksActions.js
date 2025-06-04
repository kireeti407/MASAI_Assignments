export const addBook = (book) => ({ type: 'ADD_BOOK', payload: book });
export const editBook = (book) => ({ type: 'EDIT_BOOK', payload: book });
export const deleteBook = (id) => ({ type: 'DELETE_BOOK', payload: id });
export const toggleRead = (id) => ({ type: 'TOGGLE_READ', payload: id });