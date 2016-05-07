/**
 * Created by ypling on 4/30/16.
 */

let _token;

function _getUserToken(){
    if(_token){
        return _token;
    }else {
        _token = window.localStorage.getItem('token');
        return _token;
    }
}

export function setUserToken(token){
    _token = token;
    window.localStorage.setItem('token', token);
}

export const token = (function(){return _getUserToken()})();