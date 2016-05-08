import request from 'superagent';
import {getToken} from './utils/userToken';

export function getFeatureGroups() {
    return new Promise(function (resolve, reject) {
        $.ajax(
            {
                url: 'http://uslife.herokuapp.com/api/feature-groups',
                method: 'GET'
            }
        ).done(function (data) {
            resolve(data);
        });
    });
}

export function getCustomerList(slug) {
    return new Promise((resolve, reject) => {
        request.get('/api/management/perm-group-list/')
            .query({university_slug: slug, getToken})
            .end((err, res) => {
                resolve(res.body);
            });
    })
}



