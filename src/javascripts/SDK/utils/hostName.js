function _getHostName(){
    if(window) {
        return window.location.hostname.split('.')[0];
    }
}
const hostName = (function(){return _getHostName()})();
export default hostName;