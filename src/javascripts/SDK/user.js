import request from 'superagent';
import config from './config';
import {setUserToken , token} from './utils/userToken';

export function signup(username, password, confirmPassword) {
    return new Promise((resolve, reject) => {
        request
            .post('/api/portal/customer/signup/')
            .type('form')
            .send({
                email: username,
                password1: password,
                password2: confirmPassword
            })
            .end((err, res) => {
                if (!err && res) {
                    resolve(res.body);
                }
            });
    });
}

export function login(username, password) {
    return new Promise((resolve, reject) => {
        request
            .post('/api/portal/user/login/')
            .type('form')
            .send({
                username,
                password
            })
            .end((err, res) => {
                if (res.body.result === 'success') {
                    let data = res.body.data;
                    if(data.token){
                        setUserToken(data.token);
                    }
                    resolve(data);
                }
            });
    });
}

export function logout() {
    return new Promise((resolve, reject) => {
        request
            .post('/api/portal/user/logout/')
            .type('form')
            .send({
                token
            })
            .end((err, res)=> {
                if (!err && res) {
                    resolve(res.body);
                }
            });
    });
}

export function getUserInfo() {
    return new Promise((resolve, reject) => {
        request
            .get('/api/portal/refresh-cache/user-cache/')
            .query({
                token
            })
            .end((err, res) => {
                resolve(res.body.data);
            });
    });
}

export function emailVerification() {
    return new Promise((resolve, reject)=> {
        request.get('/api/portal/email-token-verification/')
            .query({
                token
            })
            .end((err, res) => {
                resolve(res.body.is_verified);
            });
    });
}

export function applyPermission(university, customer_comment) {
    return new Promise((resolve, reject)=> {
        request.post('/api/management/customer-permission/apply/')
            .send({
                token,
                university,
                customer_comment
            })
            .end((err, res) => {
                resolve(res.body);
            });
    })
}