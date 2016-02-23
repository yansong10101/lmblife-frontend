import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/rootReducer';
export default function configureStore(initialState) {
  const store = applyMiddleware(thunk)(createStore)(rootReducer,initialState);
  return store;
}
