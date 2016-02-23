/**
 * Created by chenghui on 2/19/2016.
 */
import {GET_FEATURE_GROUPS} from '../constants/ActionTypes.js';
export const SDK = (state = {featureGroups: []}, action)=> {
    switch (action.type) {
        case GET_FEATURE_GROUPS:
            return Object.assign({}, state, {featureGroups: action.featureGroups});
        default:
            return state;
    }
};
