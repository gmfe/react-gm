import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'underscore';
import Validate from './validate.js';
import $ from 'jquery';

var className = {
    error: 'gm-invalid'
};

// 因为对validate的用法没有规定，可以onChange验证，可以onBlur验证，或者其他的，需要在这里补充使用场景。
var expectEvent = ['onChange', 'onBlur', 'onFocus'];

var nameRule = function (list, obj) {
    if (obj.props && obj.props.name !== undefined) {
        var rule;
        _.find(expectEvent, function (eventName) {
            if (obj.props[eventName]) {
                rule = obj.props[eventName].___validate_rule;
                return true;
            }
        });
        if (rule) {
            list.push({
                name: obj.props.name,
                rule: rule
            });
        }
    } else if (obj.props && obj.props.children && _.isArray(obj.props.children)) {
        _.each(obj.props.children, function (value) {
            nameRule(list, value);
        });
    } else if (obj.props && obj.props.children && _.isObject(obj.props.children)) {
        nameRule(list, obj.props.children);
    }
};

var toNameRuleList = function (ref) {
    var list = [];
    nameRule(list, ref);
    return list;
};

var doValidate = function (options, rule, target) {
    var value = target.value;
    var name = target.name;

    var result = Validate(rule, value, true);
    options.tip[name] = result;

    if (result === true) {
        $(target).removeClass(className.error);
    } else {
        $(target).addClass(className.error);
    }
};

var ValidateMixin = function () {
    var options = {
        tip: {}
    };

    return {
        validate: function (rule, next) {
            var t = this;

            var func = function (event) {
                doValidate(options, rule, event.target);
                t.setState(t.state);

                if (next) {
                    next.apply(t, arguments, options.tip[event.target.name]);
                }
            };
            func.___validate_rule = rule;

            return func;
        },
        validateAll: function (formRef) {
            var t = this;
            var list = toNameRuleList(formRef);
            var form = ReactDOM.findDOMNode(formRef);

            _.each(list, function (elist) {
                doValidate(options, elist.rule, form[elist.name]);
            });
            t.setState(t.state);
        },
        validateTip: function (name) {
            if(name){
                return  options.tip[name];
            }
            return _.map(_.filter(options.tip, function (v, k) {
                return k !== true;
            }), function (v) {
                return v;
            });
        }
    };
};

export default ValidateMixin;