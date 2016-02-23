//privates
var _pathes = [
  "page0.json",
  "feature",
  "feature/about",
  "feature/about/page1.json",
  "feature/about/page2.json",
  "feature/contact",
  "feature/contact/page3.json"
];
var _files = {
  "page0.json": {
    title:"page0",
    content: '<p>page0 content</p>'
  },
  "feature/about/page1.json": {
    title:"page1",
    content: '<p>page1 content</p>'
  },
  "feature/about/page2.json": {
    title:"page2",
    content: '<p>page2 content</p>'
  },
  "feature/contact/page3.json": {
    title:"page3",
    content: '<p>page3 content</p>'
  },
}
export default {
  getItems(pathArr) {
      var resultHash = {};
      var result = [];
      _pathes.forEach(function(item) {
        var arr = item.split('/');
        var type = (arr[0].indexOf('.json') !== -1) ? 'FILE' : 'FOLDER';
        var found = {
          name: arr[0],
          path: item,
          type: type
        };
        if (pathArr.length > 0) {
          pathArr.every(function(item, index) {
            var target = arr[index];
            if (target && target === item) {
              found.name = arr[index + 1];
              if (arr[index + 1]) {
                found.type = (arr[index + 1].indexOf('.json') !== -1) ? 'FILE' : 'FOLDER';
              }
              return true;
            }
            found = null;
            return false;
          });
        }
        if (found && found.name && resultHash[found.name] === undefined) {
          resultHash[found.name] = found;
        }
      });
      Object.keys(resultHash).forEach(function(key) {
        var item = resultHash[key];
        item.name = item.name.split('.')[0];
        result.push(item);
      });
      return result;
    },

    getPage(path) {
      return _files[path];
    },

    postItem(path) {
      _pathes.push(path);
    },

    savePage(oldPath, newPath, page) {
      if(oldPath){
        delete _files[oldPath];
      }
      var pathIndex = _pathes.indexOf(oldPath)
      if(pathIndex!==-1){
        _pathes[pathIndex] = newPath;
      }else{
        _pathes.push(newPath);
      }
      _files[newPath]=page;
      return _files[newPath];
    }
}
