import {OPEN_LOGIN, CLOSE_LOGIN} from '../constants/ActionTypes.js';

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
            type: OPEN_LOGIN
        })
    }
};
export const closeLogin = ()=> {
    return dispatch=> {
        dispatch({
            type: CLOSE_LOGIN
        })
    }
};
export const login = (username,password)=> {
    return dispatch=> {


        dispatch({
            type: CLOSE_LOGIN
        })
    }
};
// More Actions
