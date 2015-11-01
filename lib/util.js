import _ from 'underscore';

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


var Util = {
    //Request: RequestFactory,
    format: format
};

export default Util;