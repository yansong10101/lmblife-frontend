import request from 'superagent';
import config from './config';
import {setToken , getToken} from './utils/userToken';

export function signup(firstName, lastName, username, password, confirmPassword) {
    return new Promise((resolve, reject) => {
        request
            .post('/api/portal/customer/signup/')
            .type('form')
            .send({
                first_name:firstName,
                last_name:lastName,
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
                        setToken(data.token);
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
                token: getToken()
            })
            .end((err, res)=> {
                if (!err && res) {
                    setToken("");
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
                token: getToken()
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
                token: getToken()
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
                token: getToken(),
                university,
                customer_comment
            })
            .end((err, res) => {
                resolve(res.body);
            });
    })
}

export function changePassword(oldPassword, newPassword, newPasswordConfirm){
    return new Promise((resolve, reject)=> {
        request.post('/api/portal/user/change-password/')
            .type('form')
            .send({
                code: getToken(),
                old_password:oldPassword,
                password1: newPassword,
                password2: newPasswordConfirm
            })
            .end((err, res) => {
                resolve(res.body);
            });
    })
}

export function forgotPassword(username){
    return new Promise((resolve, reject)=> {
        request.post('/api/portal/user/send/forgot-password-email/')
            .type('form')
            .send({
                username
            })
            .end((err, res) => {
                resolve(res.body);
            });
    })
}

export function resetPassword(code, newPassword, newPasswordConfirm){
    return new Promise((resolve, reject)=> {
        request.post('/api/portal/user/reset-password/')
            .type('form')
            .send({
                token:code,
                password1: newPassword,
                password2: newPasswordConfirm
            })
            .end((err, res) => {
                resolve(res.body);
            });
    })
}


export function updateAvatar(file){
    return new Promise((resolve, reject)=> {
        let form = new FormData();
        form.append('file', file);
        form.append('token', getToken());
        request.post('/api/portal/user-avatar/upload/')
            .send(form)
            .end((err, res) => {
                resolve(res.body.image_url);
            });
    })
}
