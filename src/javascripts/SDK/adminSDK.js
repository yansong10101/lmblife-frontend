import $ from '../../../bower_components/jQuery/dist/jquery.min.js'
export default{
  getFeatureGroups(){
    var promise = new Promise(function(resolve,reject){
      $.ajax(
        {
          url:'http://uslife.herokuapp.com/api/feature-groups',
          method:'GET'
        }
      ).done(function(data){
        resolve(data);
      });
    });
    return promise;
  }
}
