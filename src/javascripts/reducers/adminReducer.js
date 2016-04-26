import * as actionTypes from './../constants/ActionTypes.js';

const admin = (state = {customers: [
    {
        id:"1001",
        name:"Customer 1",
        level:1,
        state:"apply"
    },
    {
        id:"1002",
        name:"Customer 2",
        level:3
    }
]}, action)=> {
    switch (action.type) {
        default :
            return state;
    }
};

export default admin;
