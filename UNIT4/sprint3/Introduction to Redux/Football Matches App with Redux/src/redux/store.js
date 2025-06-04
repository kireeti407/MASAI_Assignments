import { configureStore, combineReducers } from '@reduxjs/toolkit';
import matchesReducer from './matches/matchesReducer';
import filtersReducer from './filters/filtersReducer';
import uiReducer from './ui/uiReducer';

const rootReducer = combineReducers({
  matches: matchesReducer,
  filters: filtersReducer,
  ui: uiReducer,
});

const store = configureStore({ reducer: rootReducer });

export default store;