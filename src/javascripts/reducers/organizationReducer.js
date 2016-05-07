/**
 * Created by chenghui on 2/19/2016.
 */
import * as ActionTypes from '../constants/ActionTypes.js';

export const organization = (state = {
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
    list:[],
    editableHomepage:null,
    editable: false
}, action)=> {
    switch (action.type) {
        case ActionTypes.EDIT_HOMEPAGE_CONTENT:
            return Object.assign({}, state, {editableHomepage:Object.assign({},state.editableHomepage,action.data)});
        case ActionTypes.EDIT_HOMEPAGE:
            return Object.assign({}, state, {editable:true,editableHomepage:state.homepage});
        case ActionTypes.SAVE_HOMEPAGE:
            return Object.assign({}, state, {editable: false,homepage:state.editableHomepage});
        case ActionTypes.GET_HOMEPAGE:
            return Object.assign({}, state, {homepage:action.homepage});
        case ActionTypes.GET_SCHOOL_LIST:
            return Object.assign({}, state, {list:action.schoolList});
        case ActionTypes.CANCEL_EDIT_HOMEPAGE:
            return Object.assign({}, state, {editable: false});
        default:
            return state;
    }
};
