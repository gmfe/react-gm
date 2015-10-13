// 目前有两种实现
// jquery.ajax
// html5 fetch(未来趋势，也是ECMA的标准，目前未来趋势)

var RequestAdapt = function(url){
    this.config = {
        url: '',
        method: 'get'
    };
};
RequestAdapt.prototype = {
    init: function () {

    },
    data: function () {

    },
    get: function () {

    },
    post: function () {

    }
};


// 期待调用方式是
//Request('http://xxxx/xxx').data({id: 1}).get().then(function () {
//
//}).catch(function () {
//
//});
var Request = function(){

};

export default Request;