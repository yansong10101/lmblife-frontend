import { createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import {browserHistory} from 'react-router';
import rootReducer from '../reducers/rootReducer';
import { syncHistory } from 'react-router-redux';
import {initialState} from './initianState.js';
export default function configureStore() {
  const reduxRouterMiddleware = syncHistory(browserHistory);

  const store = compose(
      applyMiddleware(thunk),
      applyMiddleware(reduxRouterMiddleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )(createStore)(rootReducer,initialState);
  reduxRouterMiddleware.listenForReplays(store);
  return store;
}
