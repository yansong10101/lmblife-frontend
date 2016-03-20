import * as ActionTypes from '../constants/ActionTypes.js';
import {push} from 'react-router-redux';

export const apply = ()=> {
  return dispatch => {
    dispatch(push('/user/apply'));
  }
};

