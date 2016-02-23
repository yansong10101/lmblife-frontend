/**
 * Created by chenghui on 2/19/2016.
 */
import {OPEN_LOGIN,CLOSE_LOGIN} from './../constants/ActionTypes.js';
import {UPDATE_LOCATION} from 'react-router-redux';

export const user = (state = {showLogin: false}, action)=> {
    switch (action.type) {
        case OPEN_LOGIN:
        return Object.assign({}, state, {showLogin: true});
        case CLOSE_LOGIN:
            return Object.assign({}, state, {showLogin: false});
        default :
            return state;
    }
};
