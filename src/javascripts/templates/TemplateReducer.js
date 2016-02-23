import * as actionTypes from '../constants/ActionTypes';
export default function TemplateReducer(state = {
  //give default state when state is not defined.
  count: 0,
  pendding: false
}, action) {
  switch (action.type) {
    case actionTypes.REQUEST_INCREASE:
      return {
        count: state.count,
        pendding: true
      }
      break;
    case actionTypes.RECEIVE_INCREASE:
      return {
        count: state.count + 1,
        pendding: false
      }
      break;
      //handle more action type cases here
    default:
      return state;
      break;
  }
}
