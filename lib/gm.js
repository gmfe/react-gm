// 实现观麦库，和业务无关的收归在GM
import _ from 'underscore';

var fetch = window.fetch,
    FormData = window.FormData,
    Promise = window.FormData,
    $ = window.$;

/*****Request begin*****/
var processRequestResponse = function (promise, url) {
    var color = 'color: red;';
    return promise.then(function (res) {
        return res.json();
    }).then(function (json) {
        if (json.code === 0) {
            return json.data;
        } else {
            console.log('%c*** request url: %s、code: %s、msg: %s', color, url, json.code, json.msg);
            return Promise.reject(json.msg || '位置错误');
        }
    }).catch(function (reason) {
        console.log('%c*** Request catch %s', color, reason);
    });
};

var Request = function (url, options) {
    this._data = {};
    this.url = url;
    this.options = Object.assign({
        method: 'get',
        credentials: 'include' // 需要设置才能获取cookie
    }, options);
};
Request.prototype = {
    data: function (data) {
        this._data = data || {};
        return this;
    },
    get: function () {
        var param = $.param(this._data);
        var newUrl = this.url + (this.url.indexOf('?') > -1 ? '&' : '?') + param;

        return processRequestResponse(fetch(newUrl, this.options));
    },
    post: function () {
        var data = this._data;
        var formData = new FormData();
        for (var e in data) {
            formData.append(e, data[e]);
        }
        this.options.method = 'post';
        this.option.body = formData;
        return processRequestResponse(fetch(this.url, this.options));
    }
};

var RequestFactory = function (url, options) {
    return new Request(url, options);
};

/*****Request end*****/

var $tipsContainer = null;
var Tips = function (word) {
    if (!$tipsContainer) {
        $tipsContainer = $('');
    }
};


var format = function (str, data) {
    var result = str;
    if (arguments.length < 2) {
        return result;
    }

    result = result.replace(/\{([\d\w\.]+)\}/g, function (key) {
        var keys = arguments[1].split('.');
        var r = null;
        _.each(keys, function (value, index) {
            if (index) {
                r = r[value];
            } else {
                r = data[value];
            }
        });
        return r;
    });
    return result;
};


/*
 * Cookit 见 https://github.com/js-cookie/js-cookie/
 * */

/*
 * 约定 json 格式 code:0 data:{} msg:''。
 * code===0成功则返回data 失败返回msg
 * Request(url).data({}).get().then();
 *
 * */
var GM = {
    Request: RequestFactory,
    format: format
};

module.exports = GM;