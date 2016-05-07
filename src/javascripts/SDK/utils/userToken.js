/**
 * Created by ypling on 4/30/16.
 */
import subDomain from './hostName.js';
import config from './../config.js';
let _token;

export function setToken(token) {
    _token = token;
    window.localStorage.setItem('token', token);
    document.getElementsByTagName("iframe")[0].contentWindow.postMessage({action: "setToken", msg: token}, "*");
}

export function getToken() {
    if (_token) {
        return _token;
    } else {
        _token = window.localStorage.getItem('token');
        return _token;
    }
}

function iframMessageHandler(e) {
    if (e.origin.match(config.host.substr(3)) && e.data.action === 'setToken') {
        window.localStorage.setItem('token', e.data.msg);
        parent.postMessage({action: "response", msg: "token is updated "}, "*");
    }
}

if (subDomain === "www") onmessage = iframMessageHandler;
onload = function () {
parent.postMessage({action: "syncToken", msg: getToken()}, "*");
};

export const tokenPromise = new Promise((resolve, reject)=> {
    if (subDomain !== "www")
        onmessage = function (e) {
            if (e.origin.match(config.host)) {
                switch (e.data.action) {
                    case "syncToken":
                        setToken(e.data.msg);
                        resolve(e.data.msg);
                        break;
                    case "response":
                        console.log(e.data.msg);
                        break;
                    default :
                        break;
                }
            }
        };
});
