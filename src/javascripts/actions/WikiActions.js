import {routeActions} from 'react-router-redux';
import * as ActionTypes from '../constants/ActionTypes.js';
import * as WikiItemTypes from '../constants/WikiItemTypes.js';
import * as WikiViews from './../constants/WikiViews.js';
import api from '../API/mock/wikiAPI';
import SDK from '../SDK/wikiSDK';
/* eslint-disable no-console */

//Action describe a user's action, are not setters. (e.g. select-page not set-page-id).
// selectPage(pageId) {
//   Dispatcher.handleViewAction({
//     type: Constants.ActionTypes.SELECT_PAGE,
//     id: pageId
//   });
// },
//Actions

export const editPage = ()=> {
    return dispatch=> {
        console.log("wiki action: edit page");
        dispatch({
            type: ActionTypes.EDIT_PAGE
        });
    }
};

export const savePage = (folderPath, oldTitle, page)=> {
    return dispatch=> {
        console.log("wiki action: save page, page:" + page);
        var oldPath = (oldTitle) ? (folderPath + oldTitle + '.json') : undefined;
        var newPath = folderPath + page.title + '.json';
        SDK.savePage(oldPath, newPath, page).then(() => {
            dispatch({
                type: ActionTypes.SAVE_PAGE,
                page
            });
        });
    }
};
export const deletePage = (path, title)=> {
    return dispatch=> {
        console.log('wiki action: delete page');
        var s3Key = path + title + '.json';
        SDK.deletePage(s3Key).then(() => {
            dispatch(getFolderItems(path));
        });
    }
};
export const cancelEdit = ()=> {
    return dispatch=> {
        console.log('wiki action: cencel edit');
        dispatch({
            type: ActionTypes.CANCEL_EDIT,
        });
    }
};

export const init = (path = "")=> {
    return dispatch=> {
        console.log('wiki action: init');
        var route=path.split("/");
        if(route.pop()===""){
            console.log('get folderItems');
            SDK.getItems(path).then(function (items) {
                dispatch({
                    type: ActionTypes.INITWIKI,
                    view:WikiViews.FOLDER,
                    items,
                    page:null,
                    path
                });
            });
        }else{
            console.log('get folderItems&pageContent');
            route=route.map(name=>name+"/");
            Promise.all([SDK.getItems(route.join("")),SDK.getPage(path+".json")]).then(data=>{
                dispatch({
                    type: ActionTypes.INITWIKI,
                    view:WikiViews.CONTENT,
                    items:data[0],
                    page:data[1],
                    path:route.join("")
                });
            });
        }

    }
};
export const getFolderItems = (path = "")=> {
    return dispatch=> {
        console.log('wiki action: select item, folder');
        SDK.getItems(path).then(function (items) {
            dispatch(routeActions.push("/wiki/" + path));
            dispatch({
                type: ActionTypes.SELECT_FOLDER,
                path,
                items
            });
        });
    }
};

export const selectItem = (item)=> {
    return dispatch=> {
        if (item.type === WikiItemTypes.FOLDER) {
            dispatch(getFolderItems(item.path))
        } else {
            console.log('wiki action: select item, page');
            SDK.getPage(item.path).then(page => {
                dispatch(routeActions.push("/wiki/" + item.path.slice(0,-5)));
                dispatch({
                    type: ActionTypes.SELECT_PAGE,
                    page
                });
            });
        }
    };
};

export const createFolder = (path)=> {
    console.log(path);
    return dispatch=> {
        console.log('wiki action: create folder');
        dispatch({
            type: ActionTypes.CREATE_FOLDER
        })
        dispatch(routeActions.push('/wiki/' + path + '/'));

    }
};
export const createPage = () => {
    return dispatch=> {
        console.log('wiki action: create page');
        dispatch({
            type: ActionTypes.CREATE_PAGE
        });
    }
};
export const uploadImage = (file) => {
    return dispatch=> {
        console.log('wiki action: upload image');
        SDK.uploadImage(file).then((url) => {
            dispatch({
                type: ActionTypes.UPLOAD_IMAGE,
                url
            });
        });
    }
};

