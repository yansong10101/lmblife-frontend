/**
 * Created by ypling on 4/30/16.
 */

let _token;

export function getToken(){
    if(_token){
        return _token;
    }else {
        _token = window.localStorage.getItem('token');
        return _token;
    }
}

export function setToken(token){
    _token = token;
    window.localStorage.setItem('token', token);
}
