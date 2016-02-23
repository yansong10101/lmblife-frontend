import'../index.html';
//import'../../node_modules/bootstrap/dist/css/bootstrap.css';
//import'../../node_modules/tinymce/tinymce.min.js';
//import'tinymce';
//import'../myCss.css';

import '!style!css!sass!../stylesheets/styles.scss';
import $ from '../../bower_components/jQuery/dist/jquery.min.js';
import sdk from './SDK/adminSDK';

import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import App from './App.js';
const store = configureStore();
window.$ = $;
window.sdk = sdk;

ReactDOM.render(<Provider store={store}><App/></Provider>,document.getElementById('main'));
