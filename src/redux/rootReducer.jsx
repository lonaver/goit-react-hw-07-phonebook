import { combineReducers } from 'redux';
import { tasksReducer } from './taskSlice';
import { filtersReducer } from './filterSlice';

export const rootReducer = combineReducers({
  contacts: tasksReducer,
  filters: filtersReducer,
});
