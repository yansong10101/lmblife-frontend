import $ from '../../../bower_components/jQuery/dist/jquery.min.js';
import config from './config';
export default {
  getItems(path) {
    console.log(path);
      var promise = new Promise((resolve, reject) => {
        $.ajax({
          url: config.APIHost + 'api/portal/keys/get/',
          method: 'POST',
          data: {
            key_name: path
          }
        }).done(data => {
          var result = [];
          data.result_list.forEach(path => {
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
        $.ajax({
          url: config.s3Host + path,
          method: 'GET'
        }).done(data => {
          resolve(JSON.parse(data));
        });
      });
      return promise;
    },
    savePage(oldPath, newPath, page) {
      var promise = new Promise((resolve, reject) => {
        $.ajax({
          url: config.APIHost + 'api/portal/wiki/upload/',
          method: 'POST',
          data: {
            old_path: oldPath,
            new_path: newPath,
            page: JSON.stringify(page)
          }
        }).done(() => {
          resolve(page);
        })
      });
      return promise;
    },
    deletePage(path) {
      var promise = new Promise((resolve, reject) =>{
        $.ajax({
          url:config.APIHost +'api/portal/keys/delete/',
          method:'POST',
          data:{
            key_name:path
          }
        }).done(()=>{
          resolve();
        });
      });
      return promise;
    },
    uploadImage(file) {
      var promise = new Promise((resolve, reject) => {
        var form = new FormData();
        form.append('file', file);
        $.ajax({
          url: config.APIHost + 'api/portal/image/upload/',
          method: 'POST',
          data: form,
          contentType: false,
          processData: false
        }).done((data) => {
          resolve(config.s3Host+data.s3_key);
        });
      });
      return promise;
    }
}
