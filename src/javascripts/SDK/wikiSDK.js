import request from 'superagent';
import config from './config';
export default {
    getItems(path) {
        var promise = new Promise((resolve, reject) => {
            request
                .post(config.APIHost + 'api/portal/keys/get/')
                .type('form')
                .send({
                    key_name: path
                })
                .end((err, res) => {
                    var result = [];
                    res.body.result_list.forEach(path => {
                        var routes = path.split('/');
                        var item = routes.pop();
                        if (item === "") {
                            item = routes.pop();
                        }
                        var type = (item.indexOf('.json') !== -1) ? 'FILE' : 'FOLDER';
                        var name = (type === 'FILE') ? item.substr(0, item.indexOf('.json')) : item;
                        result.push({
                            name,
                            type,
                            path
                        });
                    });
                    resolve(result);
                });
        });
        return promise;
    },
    getPage(path) {
        var promise = new Promise((resolve, reject) => {
            request
                .get(config.s3Host + path)
                .end((err, res)=> {
                    //console.log(res);
                    resolve(JSON.parse(res.text));
                })
        });
        return promise;
    },
    savePage(oldPath, newPath, page) {
        var promise = new Promise((resolve, reject) => {
            request
                .post(config.APIHost + 'api/portal/wiki/upload/')
                .type('form')
                .send({
                    old_path: oldPath,
                    new_path: newPath,
                    page: JSON.stringify(page)
                })
                .end((err, res)=> {
                    //console.log(err,res);
                    resolve(page)
                });
        });
        return promise;
    },
    deletePage(path) {
        var promise = new Promise((resolve, reject) => {
            request
                .post(config.APIHost + 'api/portal/keys/delete/')
                .type('form')
                .send({
                    key_name: path
                })
                .end((err, res)=> {
                    resolve();
                });
        });
        return promise;
    },
    uploadImage(file) {
        var promise = new Promise((resolve, reject) => {
            var form = new FormData();
            form.append('file', file);
            request
                .post(config.APIHost + 'api/portal/image/upload/')
                .send(form)
                .end((err, res)=> {
                    resolve(config.s3Host + res.body.s3_key);
                });
        });
        return promise;
    }
}
