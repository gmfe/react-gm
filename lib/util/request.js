import param from './param.js';
import format from './format.js';
import _ from 'underscore';
import RequestInterceptor from './request.interceptor';

var processRequest = function () {
    // 先啥也不做
    var interceptors = RequestInterceptor.getInterceptors();
    _.each(interceptors, function (value) {
        if(value.request){
            value.request();
        }
    });
};

var processResponse = function (promise, url, sucCode) {
    var color = 'color: #8a6d3b;';
    var interceptors = RequestInterceptor.getInterceptors();

    return promise.then(function (res) {
        if(res.ok){
            return res.json();
        }
        return Promise.reject(format('服务器错误 {status} {statusText}', res));
    }).then(function(json){
        _.each(interceptors, function (value) {
            if(value.response){
                value.response();
            }
        });
        return json;
    }, function(reason){
        _.each(interceptors, function (value) {
            if(value.responseError){
                value.responseError();
            }
        });
        return Promise.reject(reason);
    }).then(function (json) {
        if (sucCode.indexOf(json.code) > -1) {
            return json;
        } else {
            console.log('%c*** Request url: %s、code: %s、msg: %s', color, url, json.code, json.msg);
            return Promise.reject(json.msg || '未知错误');
        }
    }).catch(function (reason) {
        console.log('%c*** Request catch %s', color, reason);
        // reason 是个对象。目前先给字符串。吧。后续有需要在扩展
        return Promise.reject('' + reason);
    });
};

var Request = function (url, options) {
    this._data = {};
    this.url = url;
    this.sucCode = [0];
    this.options = Object.assign({
        method: 'get',
        credentials: 'include' // 需要设置才能获取cookie
    }, options);
};
Request.prototype = {
    code: function (codes) {
        if (_.isArray(codes)) {
            this.sucCode.concat(codes);
        } else {
            this.sucCode.push(codes);
        }
        return this;
    },
    data: function (data) {
        this._data = data || {};
        return this;
    },
    json: function (data) {
        this._data = JSON.stringify(data);
        return this;
    },
    get: function () {
        var p = param(this._data);
        var newUrl = this.url + (this.url.indexOf('?') > -1 ? '&' : '?') + p;

        processRequest();
        return processResponse(fetch(newUrl, this.options), this.url, this.sucCode);
    },
    post: function () {
        var data = this._data;
        var body;
        // 兼容传json string 的情况
        if (toString.call(data) === '[object Object]') {
            body = new FormData();
            for (var e in data) {
                body.append(e, data[e]);
            }
        }else{
            body = data;
        }
        this.options.method = 'post';
        this.options.body = body;

        processRequest();
        return processResponse(fetch(this.url, this.options), this.url, this.sucCode);
    }
};

var RequestFactory = function (url, options) {
    return new Request(url, options);
};


export default RequestFactory;
