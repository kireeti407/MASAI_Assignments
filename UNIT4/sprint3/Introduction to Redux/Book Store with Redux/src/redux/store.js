import { configureStore, combineReducers } from '@reduxjs/toolkit';
import booksReducer from './books/booksReducer';
import filtersReducer from './filters/filtersReducer';

const rootReducer = combineReducers({
  books: booksReducer,
  filters: filtersReducer,
});

const store = configureStore({ reducer: rootReducer });

export default store;