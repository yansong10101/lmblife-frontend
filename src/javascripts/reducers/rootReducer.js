import {combineReducers} from 'redux';
import {routeReducer} from 'react-router-redux';
import {wiki} from './wikiReducer.js';
import {user} from './userReducer.js';
import {SDK} from './SDKReducer.js';
import {school} from './schoolReducer.js';

const rootReducer = combineReducers({
    routing: routeReducer,
    user,
    SDK,
    wiki,
    school
});
export default rootReducer;
