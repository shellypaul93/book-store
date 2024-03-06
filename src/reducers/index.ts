import { combineReducers } from 'redux';
import bookReducer from './bookReducer';

const rootReducer = combineReducers({
  bookstore: bookReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
