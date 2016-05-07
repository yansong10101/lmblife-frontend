import * as actionTypes from '../constants/ActionTypes';
import {push} from 'react-router-redux';
import * as sdk from '../SDK/user';

/* eslint-disable no-console */
//Action describe a user's action, are not setters. (e.g. select-page not set-page-id).
// selectPage(pageId) {
//   Dispatcher.handleViewAction({
//     type: Constants.ActionTypes.SELECT_PAGE,
//     id: pageId
//   });
// },
export const openLogin = ()=> {
  return dispatch=> {
    dispatch({
      type: actionTypes.OPEN_LOGIN
    })
  }
};

export const closeLogin = ()=> {
  return dispatch=> {
    dispatch({
      type: actionTypes.CLOSE_LOGIN
    })
  }
};

export const login = (username, password)=> {
  return dispatch=> {
    sdk.login(username, password).then((data)=> {
      dispatch({
        type:actionTypes.RECEIVE_LOGIN,
        data
      });
      dispatch({
          type: actionTypes.CLOSE_LOGIN
        });
      }
    );
  }
};

export const logout = (token) =>{
  return dispatch =>{
    sdk.logout(token);
    dispatch({
      type:actionTypes.RECEIVE_LOGOUT
    });
  }
};

export const checkLogin = () =>{
  return dispatch =>{
      sdk.getUserInfo().then((data)=>{
        dispatch({
          type:actionTypes.RECEIVE_LOGIN,
          data
        });
      })
  }
};

export const signUp = (username, password, confirmPassword) => {
  return dispatch => {
    sdk.signup(username, password, confirmPassword).then(data=>{
      dispatch(push('/user/email-confirm'));
    });
  }
};

export const applyPermission = ()=>{
  return dispatch => {
    sdk.getUserInfo().then((data)=>{
      if(!data.email_check){
        dispatch(push('/user/email-confirm'))
      }else {
        dispatch(push('/user/apply'))
      }
    });
  }
};

export const emailConfirmed = () => {
  return dispatch => {
    dispatch(push('/user/apply'))
  }
};
// More Actions