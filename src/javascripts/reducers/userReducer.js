/**
 * Created by chenghui on 2/19/2016.
 */
import * as actionTypes from './../constants/ActionTypes.js';
import {UPDATE_LOCATION} from 'react-router-redux';

export const user = (state = {showLogin: false}, action)=> {
  switch (action.type) {
    case actionTypes.OPEN_LOGIN:
      return Object.assign({}, state, {showLogin: true});
      break;
    case actionTypes.CLOSE_LOGIN:
      return Object.assign({}, state, {showLogin: false});
      break;
    case actionTypes.RECEIVE_LOGIN:
      return Object.assign({}, state, {
        username: action.data.username,
        userId: action.data['user_id'],
        token: action.data.token,
        emailVerified:action.data.email_check
      });
      break;
    case actionTypes.RECEIVE_LOGOUT:
      return {showLogin: false};
    default :
      return state;
  }
};
