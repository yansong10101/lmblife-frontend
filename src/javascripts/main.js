import'../index.html';
//import '!style!css!sass!../stylesheets/styles.scss';
//import $ from '../../bower_components/jQuery/dist/jquery.min.js';
import * as sdk from './SDK/userSDK';
import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import App from './App.js';
import { browserHistory} from 'react-router';
const store = configureStore();
//window.$ = $;
window.sdk = sdk;

browserHistory.listen(function (location) {
  const path = (/#(\/.*)$/.exec(location.hash) || [])[1];
  if (path) {
    browserHistory.replace(path);
  }
});

ReactDOM.render(<Provider store={store}><App/></Provider>,document.getElementById('main'));
