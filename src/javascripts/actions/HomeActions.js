import * as ActionTypes from './../constants/ActionTypes.js';
import * as SDK from './../SDK/schoolInfo.js';
import {push} from 'react-router-redux';
import CryptoJS from 'crypto-js';

export const getHomepageSettings = () => {
  return dispatch=> {
    console.log("Home action: get page setting");
    var schoolname=window.location.hostname.split(".").shift();
    SDK.getHomepageSettings(schoolname).then(function (data) {
      //console.log(data);
      dispatch({
        type: ActionTypes.GET_HOMEPAGE,
        homepage:JSON.parse(CryptoJS.RC4.decrypt(data,"myKey").toString(CryptoJS.enc.Utf8))
      });
    }, function () {
      alert('getHomepage error');
    });
  }
};
export const editPage = ()=> {
  return dispatch=> {
    console.log("Home action: edit page");
    dispatch({
      type: ActionTypes.EDIT_HOMEPAGE
    });
  }
};
export const savePage = (pageContent)=> {
  return dispatch=> {
    console.log("Home action: save page:"+pageContent );
    SDK.saveHomepageSettings(pageContent).then(() => {
      dispatch({
        type: ActionTypes.SAVE_HOMEPAGE
      });
    });
  }
};
export const cancelEdit = ()=> {
  return dispatch=> {
    console.log('Home action: cencel edit');
    dispatch({
      type: ActionTypes.CANCEL_EDIT_HOMEPAGE
    });
  }
};
export const editPageContent = (content)=> {
  return dispatch=> {
    console.log("Home action: edit page");
    dispatch({
      type: ActionTypes.EDIT_HOMEPAGE_CONTENT,
      data:content
    });
  }
};