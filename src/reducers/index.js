import { combineReducers } from 'redux';
import initialStateReducer from './reducer1'

const allReducers = combineReducers({
  initial: initialStateReducer,
});

export default allReducers
