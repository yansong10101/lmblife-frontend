/**
 * Created by chenghui on 2/19/2016.
 */
import {UPDATE_LOCATION} from 'react-router-redux';
import * as ActionTypes from '../constants/ActionTypes.js';
import * as WikiViews from '../constants/WikiViews.js';

export const wiki = (state = {folderItems:[],route:""}, action)=> {
    switch (action.type) {
        case ActionTypes.EDIT_PAGE:
            return Object.assign({}, state, {currentView: WikiViews.EDITOR});
        case ActionTypes.SAVE_PAGE:
            return Object.assign({}, state, {
                currentPage: action.page,
                currentView: WikiViews.CONTENT
            });
        case ActionTypes.CANCEL_EDIT:
            return Object.assign({}, state, {
                currentView: (state.currentPage) ? WikiViews.CONTENT : WikiViews.FOLDER
            });
        case ActionTypes.ROUTING:
            return Object.assign({}, state, {
                currentView: WikiViews.FOLDER,
                route:action.path,
                folderItems: action.items
            });
        case ActionTypes.SELECT_ITEM:
            return Object.assign({}, state, {
                currentView: WikiViews.CONTENT,
                currentPage: action.page
            });
        case ActionTypes.CREATE_FOLDER:
            return Object.assign({}, state, {});
        case ActionTypes.CREATE_PAGE:
            return Object.assign({}, state, {
                currentPage: null,
                currentView: WikiViews.EDITOR
            });
        case ActionTypes.UPLOAD_IMAGE:
            return Object.assign({}, state, {
                uploadedImageURL: action.url
            });
        case ActionTypes.DELETE_PAGE:
            return Object.assign({}, state, {
                currentPage: null
            });
        default:
            return state;
    }
};
