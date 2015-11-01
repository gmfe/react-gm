import _ from 'underscore';
import GM from './gm.js';

// 以下是可重复的
// *：任何字符
// n：数字
// s：字符
// l：字母
// nl: 数字和字母
// zh: 中文

// 以下是某具体类型
// p：邮政编码
// m：手机号码
// e：email
// url：网址

// 有些特别的字符需要转换。后续维护增加
var specialKeyMap = {
    '*': '\\*'
};

var ruleKeyTipMap = {
    'def': '请填写正确的信息！',
    'w': {},
    reck: '两次输入的内容不一致！',
    ok: '通过信息验证！'
};
var ruleKeyMap = {};
var noRangeRuleKeys = [];


var ruleToInfo = function (rule) {
    var info = {};

    var ruleStr = _.map(_.keys(ruleKeyMap), function (value) {
        return specialKeyMap[value] ? specialKeyMap[value] : value;
    }).join('|');
    var regExp = new RegExp('^(' + ruleStr + ')((\\d*)((-)(\\d*))?)?$');

    rule.replace(regExp, function () {
        info.type = arguments[1];
        info.min = arguments[3];
        info.cross = arguments[4];
        info.max = arguments[6];
    });
    return info;
};

var ValidateTip = function (rule) {
    if (_.isRegExp(rule)) {
        return ruleKeyTipMap.def;
    }

    var info = ruleToInfo(rule);

    if (noRangeRuleKeys.indexOf(info.type) === -1) {
        if (info.max) {
            return GM.format(ruleKeyTipMap.w[info.type][3], info);
        } else if(info.cross){
            return GM.format(ruleKeyTipMap.w[info.type][2], info);
        } else if (info.min) {
            return GM.format(ruleKeyTipMap.w[info.type][1], info);
        }
        return ruleKeyTipMap.w[info.type][0];
    }
    return ruleKeyTipMap.w[info.type] || ruleKeyTipMap.def;
};

var Validate = function (rule, value, tip) {
    var result;
    tip = tip || false;
    if (_.isRegExp(rule)) {
        result = rule.test(value);
    } else {
        var info = ruleToInfo(rule);

        var regs = ['^', ruleKeyMap[info.type] || info.type];
        if (noRangeRuleKeys.indexOf(info.type) === -1) {
            if (info.min === undefined) {
                regs = regs.concat(['+']);
            } else if(!info.cross){
                regs = regs.concat(['{', info.min, '}']);
            } else {
                regs = regs.concat(['{', info.min, ',', info.max === undefined ? '' : info.max, '}']);
            }
        }
        result = new RegExp(regs.concat(['$']).join('')).test(value);
    }

    return result ? true : (tip ? ValidateTip(rule) : false);
};
Validate.factory = function (rule, factory) {
    var config = _.extend({
        range: false
    }, factory());
    ruleKeyTipMap.w[rule] = config.tip;
    ruleKeyMap[rule] = config.rule;
    if(config.range === false){
        noRangeRuleKeys.push(rule);
    }
};

// 内置校验
Validate.factory('*', function () {
    return {
        range: true,
        rule: '[\\w\\W]',
        tip: ['不能为空！', '请填写{min}位任意字符！', '请填写至少{min}位任意字符！', '请填写{min}到{max}位任意字符！']
    };
});
Validate.factory('n', function () {
    return {
        range: true,
        rule: '\\d',
        tip: ['请填写数字！', '请填写{min}位数字！', '请填写至少{min}位数字！', '请填写{min}到{max}位数字！']
    };
});
Validate.factory('s', function () {
    return {
        range: true,
        rule: '[\\u4E00-\\u9FA5\\uf900-\\ufa2d\\w\\.\\s]',
        tip: ['不能输入特殊字符！', '请填写{min}位字符！', '请填写至少{min}位字符！', '请填写{min}到{max}位字符！']
    };
});
Validate.factory('l', function () {
    return {
        range: true,
        rule: '[a-zA-Z]',
        tip: ['请填写字母！', '请填写{min}位字母！', '请填写至少{min}位字母！', '请填写{min}到{max}位字母！']
    };
});
Validate.factory('nl', function () {
    return {
        range: true,
        rule: '[a-zA-Z0-9]',
        tip: ['请填写字母或数字！', '请填写{min}位字母或数字！', '请填写至少{min}位字母或数字！', '请填写{min}到{max}位字母或数字！']
    };
});
Validate.factory('zh', function () {
    return {
        range: true,
        rule: '[\\u4e00-\\u9fa5]',
        tip: ['请填写汉字！', '请填写{min}位汉字！', '请填写至少{min}位汉字！', '请填写{min}到{max}位汉字！']
    };
});
Validate.factory('p', function () {
    return {
        rule: '[0-9]{6}',
        tip: '请填写邮政编码'
    };
});
Validate.factory('m', function () {
    return {
        rule: '13[0-9]{9}$|14[0-9]{9}|15[0-9]{9}$|18[0-9]{9}',
        tip: '请填写手机号码'
    };
});
Validate.factory('e', function () {
    return {
        rule: '\\w+([-+.\']\\w+)*@\\w+([-.]\\w+)*\\.\\w+([-.]\\w+)*',
        tip: '请填写邮件地址'
    };
});
Validate.factory('url', function () {
    return {
        rule: '(\\w+:\\/\\/)?\\w+(\\.\\w+)+.*',
        tip: '请填写网址'
    };
});

export default Validate;