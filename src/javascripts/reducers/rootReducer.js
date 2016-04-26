import {combineReducers} from 'redux';
import {routeReducer} from 'react-router-redux';
import {wiki} from './wikiReducer';
import {user} from './userReducer';
import {SDK} from './SDKReducer';
import admin from './adminReducer';
import {school} from './schoolReducer.js';

const rootReducer = combineReducers({
    routing: routeReducer,
    user,
    SDK,
    school,
    wiki,
    admin
});
export default rootReducer;
