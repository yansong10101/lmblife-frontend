import * as actionTypes from '../constants/ActionTypes'

export function increase() {
  return dispatch => {
    //dispatch an action when start aync process
    dispatch({
      type:actionTypes.REQUEST_INCREASE
    });
    setTimeout(() => {
      //dispatch an action when finish aync process
      dispatch({
        type:actionTypes.RECEIVE_INCREASE
      });
    }, 1000);
  }
}

//export more actions here
