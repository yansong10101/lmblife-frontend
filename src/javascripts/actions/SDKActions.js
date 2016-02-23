import {GET_FEATURE_GROUPS} from '../constants/ActionTypes.js';
import SDK from '../SDK/adminSDK';

/* eslint-disable no-console */
//Action describe a user's action, are not setters. (e.g. select-page not set-page-id).
// selectPage(pageId) {
//   Dispatcher.handleViewAction({
//     type: Constants.ActionTypes.SELECT_PAGE,
//     id: pageId
//   });
// },

export const getFeatureGroups = () => {
    return dispatch=> {
        console.log("wiki action: getFeatureGroups");
        var featureGroups;
        SDK.getFeatureGroups().then(function (data) {
            featureGroups = data;
            dispatch({
                type: GET_FEATURE_GROUPS,
                featureGroups
            });
        }, function () {
            alert('getFeatureGroups error');
        });
    }
};
// More Actions

