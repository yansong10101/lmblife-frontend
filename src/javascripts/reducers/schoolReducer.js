/**
 * Created by chenghui on 2/19/2016.
 */
import {UPDATE_LOCATION} from 'react-router-redux';
import * as ActionTypes from '../constants/ActionTypes.js';
import * as WikiViews from '../constants/WikiViews.js';

export const school = (state = {
    homepage: {
        logo: {
            src:null,
            alt: ""
        },
        cover: {
            img: {
                src: null,
                alt: ""
            },
            text: "",
            linkText: ""
        },
        notice: {
            title: "",
            text: "",
            data:""
        },
        featureGroup: {
            title: "",
            text: "",
            link: {
                text: "",
                href: "/about/university/"
            },
            data: [{
                title: "",
                img: {
                    src: null,
                    alt: ""
                },
                text: ""
            }, {
                title: "",
                img: {src: null, alt: ""},
                text: ""
            }, {
                title: "",
                img: {src: null, alt: ""},
                text: ""
            }]
        }

    },
    editableHomepage:null,
    editable: false
}, action)=> {
    switch (action.type) {
        case "Cover":
            return Object.assign({}, state, {editableHomepage:Object.assign({},state.editableHomepage,{cover: action.data})});
        case "Logo":
            return Object.assign({}, state, {editableHomepage:Object.assign({},state.editableHomepage,{logo: action.data})});
        case "Notice":
            return Object.assign({}, state, {editableHomepage:Object.assign({},state.editableHomepage,{notice: action.data})});
        case "FeatureGroup":
            return Object.assign({}, state, {editableHomepage:Object.assign({},state.editableHomepage,{featureGroup: action.data})});
        case "Edit":
            return Object.assign({}, state, {editable:true,editableHomepage:state.homepage});
        case "Save":
            return Object.assign({}, state, {editable: false,homepage:state.editableHomepage});
        case "GetHomepageSettings":
            return Object.assign({}, state, {homepage:action.homepage,cached:true});
        case "Cancel":
            return Object.assign({}, state, {editable: false});
        default:
            return state;
    }
};
