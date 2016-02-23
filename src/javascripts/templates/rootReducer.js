import {combineReducers} from 'redux';
import templateReducer from './templateReducer';
const rootReducer = combineReducers({
  template:templateReducer
  //Add more reducers here
});

export default rootReducer;
