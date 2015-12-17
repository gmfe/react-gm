import param from './param.js';
import format from './format.js';
import _ from 'underscore';
import RequestInterceptor from './request.interceptor';

var processRequest = function (config) {
    return RequestInterceptor.interceptor.request(config);
};

var processResponse = function (promise, url, sucCode) {
    var color = 'color: #8a6d3b;';

    return promise.then(function (res) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(format('服务器错误 {status} {statusText}', res));
    }).then(RequestInterceptor.interceptor.response, RequestInterceptor.interceptor.responseError).then(function (json) {
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
        headers: {
            'Accept': 'application/json'
        },
        credentials: 'include' // 需要设置才能获取cookie
    }, options);
};
Request.prototype = {
    code: function (codes) {
        if (_.isArray(codes)) {
            this.sucCode = this.sucCode.concat(codes);
        } else {
            this.sucCode.push(codes);
        }
        return this;
    },
    data: function (_data) {
        this._data = _data || {};
        return this;
    },
    json: function (_data) {
        this._data = JSON.stringify(_data);
        return this;
    },
    beforeRequest: function () {
        var t = this;
        return processRequest({
            url: t.url,
            data: t._data,
            sucCode: t.sucCode,
            options: t.options
        }).then(function (d) {
            t.url = d.url;
            t._data = d.data;
            t.sucCode = d.sucCode;
            t.options = d.options;
            return d;
        });
    },
    get: function () {
        var t = this;

        return t.beforeRequest().then(function () {
            var p = param(t._data);
            var newUrl = t.url + (t.url.indexOf('?') > -1 ? '&' : '?') + p;
            return processResponse(fetch(newUrl, t.options), t.url, t.sucCode);
        });
    },
    post: function () {
        var t = this;
        var data = t._data;
        var body;
        t.options.method = 'post';

        return t.beforeRequest().then(function () {
            // 兼容传json string 的情况
            if (toString.call(data) === '[object Object]') {
                body = new FormData();
                for (var e in data) {
                    body.append(e, data[e]);
                }
            } else {
                body = data;
            }
            t.options.body = body;
            return processResponse(fetch(t.url, t.options), t.url, t.sucCode);
        });
    }
};

var RequestFactory = function (url, options) {
    return new Request(url, options);
};


export default RequestFactory;
