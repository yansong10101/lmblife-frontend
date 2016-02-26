/**
 * Created by chenghui on 2/20/2016.
 */
import {FOLDER} from '../constants/WikiViews.js'
export const initialState = {
    routing: {
        location: {
            pathname:"/wiki/",
            search:"",
            hash:"",
            state:null
        }
    },
    user: {
        showLogin: false
    },
    SDK: {
        featureGroups: []
    },
    wiki: {
        currentView: FOLDER,
        currentPage: null,
        folderItems: [],
        folderPath: ""
    }
};