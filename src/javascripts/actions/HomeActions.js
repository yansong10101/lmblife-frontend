import * as ActionTypes from './../constants/ActionTypes.js';
import SDK from './../SDK/schoolInfoSDK.js';
import {push} from 'react-router-redux';

export const apply = ()=> {
  return dispatch => {
    dispatch(push('/user/apply'));
  }
};
export const getHomepageSettings = () => {
  return dispatch=> {
    console.log("Home action: get page setting");
    var schoolname=window.location.hostname.split(".").shift();
    SDK.getHomepageSettings(schoolname).then(function (data) {
      dispatch({
        type: "GetHomepageSettings",
        homepage:data
      });
    }, function () {
      alert('getFeatureGroups error');
    });
  }
};
