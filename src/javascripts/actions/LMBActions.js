import * as ActionTypes from './../constants/ActionTypes.js';
import SDK from './../SDK/schoolInfoSDK.js';
//import {push} from 'react-router-redux';

export const getSchoolList = () => {
  return dispatch=> {
    console.log("LMB action: get schoolList");
    SDK.getSchoolList().then(function (data) {
      data=data.map((t,index)=>{t.pk=index;return t});
      dispatch({
        type: ActionTypes.GET_SCHOOL_LIST,
        schoolList:data
      });
    }, function () {
      alert('getSchoolList error');
    });
  }
};
