/**
 * Created by chenghui on 2/19/2016.
 */
import * as actionTypes from './../constants/ActionTypes.js';
import {UPDATE_LOCATION} from 'react-router-redux';

export const user = (state = {showLogin: false}, action)=> {
    let newState;
    switch (action.type) {
        case actionTypes.OPEN_LOGIN:
            return Object.assign({}, state, {showLogin: true});
            break;
        case actionTypes.CLOSE_LOGIN:
            return Object.assign({}, state, {showLogin: false});
            break;
        case actionTypes.RECEIVE_LOGIN:
            return Object.assign({}, state, {
                avatar: action.data.avatar,
                firstName: action.data.first_name,
                lastName: action.data.last_name,
                username: action.data.username,
                userId: action.data['user_id'],
                isLogin: true,
                emailVerified: action.data.email_check
            });
            break;
        case actionTypes.RECEIVE_LOGOUT:
            return {showLogin: false};
        case actionTypes.RECEIVE_UPDATE_AVATAR:
            newState = Object.assign({},state,{avatar:action.imageUrl});
            return newState;
            break;
        default :
            return state;
    }
};
