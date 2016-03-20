import request from 'superagent';
import config from './config';

export const signup = (username, password, confirmPassword) => {
  return new Promise((resolve, reject) => {
    request
      .post(config.APIHost + 'api/portal/customer/signup/')
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
};

export const login = (username, password) => {
  return new Promise((resolve, reject) => {
    request
      .post(config.APIHost + 'api/portal/user/login/')
      .type('form')
      .send({
        username,
        password
      })
      .end((err, res) => {
        if (res.body.result === 'success') {
          resolve(res.body.data);
        }
      });
  });
};

export const logout = (token) => {
  return new Promise((resolve, reject) => {
    request
      .post(config.APIHost + 'api/portal/user/logout/')
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
};

export const getUserInfo = (token) => {
  return new Promise((resolve, reject) => {
    request
      .get(config.APIHost + 'api/portal/refresh-cache/user-cache/')
      .query({
        token
      })
      .end((err,res) =>{
        resolve(res.body.data);
      });
  });
};

export const emailVerification = (token) => {
  return new Promise((resolve, reject)=>{
    request.get(config.APIHost + 'api/portal/email-token-verification/')
      .query({
        token
      })
      .end((err,res) =>{
        resolve(res.body.is_verified);
      });
  });
};
//export const applyPermission(token,customer,university,)