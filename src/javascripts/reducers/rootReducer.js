import {combineReducers} from 'redux';
import {routeReducer} from 'react-router-redux';
import {wiki} from './wikiReducer.js';
import {user} from './userReducer.js';
import {SDK} from './SDKReducer.js';

const rootReducer = combineReducers({
    routing: routeReducer,
    user,
    SDK,
    wiki
});
export default rootReducer;
