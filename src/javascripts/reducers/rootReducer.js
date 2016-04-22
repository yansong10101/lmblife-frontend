import {combineReducers} from 'redux';
import {routeReducer} from 'react-router-redux';
import {wiki} from './wikiReducer';
import {user} from './userReducer';
import {SDK} from './SDKReducer';
import admin from './adminReducer';

const rootReducer = combineReducers({
    routing: routeReducer,
    user,
    SDK,
    wiki,
    admin
});
export default rootReducer;
