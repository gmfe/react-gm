(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("underscore"), require("react-dom"), require("jquery"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "underscore", "react-dom", "jquery"], factory);
	else if(typeof exports === 'object')
		exports["ReactGM"] = factory(require("react"), require("underscore"), require("react-dom"), require("jquery"));
	else
		root["ReactGM"] = factory(root["React"], root["underscore"], root["ReactDOM"], root["jquery"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_11__, __WEBPACK_EXTERNAL_MODULE_12__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _gridComponentJs = __webpack_require__(8);

	var _gridComponentJs2 = _interopRequireDefault(_gridComponentJs);

	var _paginationComponentJs = __webpack_require__(4);

	var _paginationComponentJs2 = _interopRequireDefault(_paginationComponentJs);

	var _paginationTextComponentJs = __webpack_require__(5);

	var _paginationTextComponentJs2 = _interopRequireDefault(_paginationTextComponentJs);

	var _formerComponentJs = __webpack_require__(7);

	var _formerComponentJs2 = _interopRequireDefault(_formerComponentJs);

	var _validateJs = __webpack_require__(6);

	var _validateJs2 = _interopRequireDefault(_validateJs);

	var _validateMixinJs = __webpack_require__(9);

	var _validateMixinJs2 = _interopRequireDefault(_validateMixinJs);

	var _gmJs = __webpack_require__(3);

	var _gmJs2 = _interopRequireDefault(_gmJs);

	__webpack_require__(10);

	var ReactGM = {
	    Grid: _gridComponentJs2['default'],
	    Pagination: _paginationComponentJs2['default'],
	    PaginationText: _paginationTextComponentJs2['default'],
	    Former: _formerComponentJs2['default'],
	    Validate: _validateJs2['default'],
	    ValidateMixin: _validateMixinJs2['default']
	};

	exports.GM = _gmJs2['default'];
	exports['default'] = ReactGM;

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	// 实现观麦库，和业务无关的收归在GM
	'use strict';

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _underscore = __webpack_require__(2);

	var _underscore2 = _interopRequireDefault(_underscore);

	var fetch = window.fetch,
	    FormData = window.FormData,
	    Promise = window.FormData,
	    $ = window.$;

	/*****Request begin*****/
	var processRequestResponse = function processRequestResponse(promise, url) {
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
	    })['catch'](function (reason) {
	        console.log('%c*** Request catch %s', color, reason);
	    });
	};

	var Request = function Request(url, options) {
	    this._data = {};
	    this.url = url;
	    this.options = Object.assign({
	        method: 'get',
	        credentials: 'include' // 需要设置才能获取cookie
	    }, options);
	};
	Request.prototype = {
	    data: function data(_data) {
	        this._data = _data || {};
	        return this;
	    },
	    get: function get() {
	        var param = $.param(this._data);
	        var newUrl = this.url + (this.url.indexOf('?') > -1 ? '&' : '?') + param;

	        return processRequestResponse(fetch(newUrl, this.options));
	    },
	    post: function post() {
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

	var RequestFactory = function RequestFactory(url, options) {
	    return new Request(url, options);
	};

	/*****Request end*****/

	var $tipsContainer = null;
	var Tips = function Tips(word) {
	    if (!$tipsContainer) {
	        $tipsContainer = $('');
	    }
	};

	var format = function format(str, data) {
	    var result = str;
	    if (arguments.length < 2) {
	        return result;
	    }

	    result = result.replace(/\{([\d\w\.]+)\}/g, function (key) {
	        var keys = arguments[1].split('.');
	        var r = null;
	        _underscore2['default'].each(keys, function (value, index) {
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

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var Pagination = _react2["default"].createClass({
	    displayName: "Pagination",

	    propTypes: {
	        data: _react2["default"].PropTypes.shape({
	            count: _react2["default"].PropTypes.number.isRequired,
	            offset: _react2["default"].PropTypes.number.isRequired,
	            limit: _react2["default"].PropTypes.number.isRequired
	        }),
	        toPage: _react2["default"].PropTypes.func.isRequired
	    },
	    render: function render() {
	        var data = Object.assign({}, this.props.data);

	        data.index = data.offset / data.limit + 1;

	        var offset = 2,
	            pages = [],
	            all = Math.ceil(data.count / data.limit),
	            begin = Math.max(data.index - offset, 1),
	            end = Math.min(data.index + offset, all);

	        if (all > offset * 2 + 1) {
	            if (begin === 1) {
	                end += offset;
	            } else if (end === all) {
	                begin -= offset;
	            }
	        }

	        for (var i = begin; i <= end; i++) {
	            pages.push(i);
	        }

	        return _react2["default"].createElement(
	            "div",
	            { className: "gm-pagination" },
	            _react2["default"].createElement(
	                "ul",
	                { className: "pagination pagination-sm", onClick: this.onPage },
	                _react2["default"].createElement(
	                    "li",
	                    { className: data.index === 1 ? 'disabled' : '' },
	                    _react2["default"].createElement(
	                        "a",
	                        { href: "javascript:;", "data-page": data.index - 1 },
	                        "上一页"
	                    )
	                ),
	                begin >= 2 ? _react2["default"].createElement(
	                    "li",
	                    null,
	                    _react2["default"].createElement(
	                        "a",
	                        { href: "javascript:;", "data-page": "1" },
	                        "1"
	                    )
	                ) : undefined,
	                begin >= 3 ? _react2["default"].createElement(
	                    "li",
	                    { className: "disabled" },
	                    _react2["default"].createElement(
	                        "a",
	                        { href: "javascript:;" },
	                        "..."
	                    )
	                ) : undefined,
	                pages.map(function (page, i) {
	                    return _react2["default"].createElement(
	                        "li",
	                        { key: i, className: data.index === page ? 'active' : '' },
	                        _react2["default"].createElement(
	                            "a",
	                            {
	                                href: "javascript:;", "data-page": page },
	                            page
	                        )
	                    );
	                }),
	                end <= all - 2 ? _react2["default"].createElement(
	                    "li",
	                    { className: "disabled" },
	                    _react2["default"].createElement(
	                        "a",
	                        { href: "javascript:;" },
	                        "..."
	                    )
	                ) : undefined,
	                end <= all - 1 ? _react2["default"].createElement(
	                    "li",
	                    null,
	                    _react2["default"].createElement(
	                        "a",
	                        { href: "javascript:;", "data-page": all },
	                        all
	                    )
	                ) : undefined,
	                _react2["default"].createElement(
	                    "li",
	                    { className: data.index === all ? 'disabled' : '' },
	                    _react2["default"].createElement(
	                        "a",
	                        { href: "javascript:;", "data-page": data.index + 1 },
	                        "下一页"
	                    )
	                )
	            )
	        );
	    },
	    onPage: function onPage(event) {
	        var page = ~ ~event.target.getAttribute('data-page'),
	            data = this.props.data,
	            count = Math.ceil(data.count / data.limit),
	            toPage = this.props.toPage;
	        if (!page || page == data.index || page < 1 || page > count) {
	            return;
	        }

	        toPage({
	            offset: (page - 1) * data.limit,
	            limit: data.limit
	        }, page);
	    }
	});

	exports["default"] = Pagination;
	module.exports = exports["default"];

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var PaginationText = _react2["default"].createClass({
	    displayName: "PaginationText",

	    propTypes: {
	        data: _react2["default"].PropTypes.shape({
	            count: _react2["default"].PropTypes.number.isRequired,
	            offset: _react2["default"].PropTypes.number.isRequired,
	            limit: _react2["default"].PropTypes.number.isRequired
	        })
	    },
	    render: function render() {
	        var data = this.props.data;

	        return _react2["default"].createElement(
	            "div",
	            { className: "gm-pagination-text" },
	            "显示第 ",
	            data.offset + 1,
	            " 到 ",
	            Math.min(data.count, data.offset + data.limit - 1),
	            " 行，一共 ",
	            data.count,
	            " 行记录"
	        );
	    }
	});

	exports["default"] = PaginationText;
	module.exports = exports["default"];

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _underscore = __webpack_require__(2);

	var _underscore2 = _interopRequireDefault(_underscore);

	var _gmJs = __webpack_require__(3);

	var _gmJs2 = _interopRequireDefault(_gmJs);

	// 以下是可重复的，比如 *6-16：检测是否为6到16位任意字符
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
	//
	// regex

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

	var ruleToInfo = function ruleToInfo(rule) {
	    var info = {};

	    var ruleStr = _underscore2['default'].map(_underscore2['default'].keys(ruleKeyMap), function (value) {
	        return specialKeyMap[value] ? specialKeyMap[value] : value;
	    }).join('|');
	    var regExp = new RegExp('^(' + ruleStr + ')((\\d*)(-(\\d*))?)?$');

	    rule.replace(regExp, function () {
	        info.type = arguments[1];
	        info.min = arguments[3];
	        info.max = arguments[5];
	    });
	    return info;
	};

	var ValidateTip = function ValidateTip(rule) {
	    if (_underscore2['default'].isRegExp(rule)) {
	        return ruleKeyTipMap.def;
	    }

	    var info = ruleToInfo(rule);

	    if (noRangeRuleKeys.indexOf(info.type) === -1) {
	        if (info.max) {
	            return _gmJs2['default'].format(ruleKeyTipMap.w[info.type][2], info);
	        } else if (info.min) {
	            return _gmJs2['default'].format(ruleKeyTipMap.w[info.type][1], info);
	        }
	        return ruleKeyTipMap.w[info.type][0];
	    }
	    return ruleKeyTipMap.w[info.type] || ruleKeyTipMap.def;
	};

	var Validate = function Validate(rule, value, tip) {
	    var result;
	    tip = tip || false;
	    if (_underscore2['default'].isRegExp(rule)) {
	        result = rule.test(value);
	    } else {
	        var info = ruleToInfo(rule);

	        var regs = ['^', ruleKeyMap[info.type] || info.type];
	        if (noRangeRuleKeys.indexOf(info.type) === -1) {
	            if (info.min === undefined) {
	                regs = regs.concat(['+']);
	            } else {
	                regs = regs.concat(['{', info.min, ',', info.max === undefined ? '' : info.max, '}']);
	            }
	        }
	        result = new RegExp(regs.concat(['$']).join('')).test(value);
	    }

	    return result ? true : tip ? ValidateTip(rule) : false;
	};
	Validate.factory = function (rule, factory) {
	    var config = _underscore2['default'].extend({
	        range: false
	    }, factory());
	    ruleKeyTipMap.w[rule] = config.tip;
	    ruleKeyMap[rule] = config.rule;
	    if (config.range === false) {
	        noRangeRuleKeys.push(rule);
	    }
	};

	// 内置校验
	Validate.factory('*', function () {
	    return {
	        range: true,
	        rule: '[\\w\\W]',
	        tip: ['不能为空！', '请填写至少{min}位任意字符！', '请填写{min}到{max}位任意字符！']
	    };
	});
	Validate.factory('n', function () {
	    return {
	        range: true,
	        rule: '\\d',
	        tip: ['请填写数字！', '请填写至少{min}位数字！', '请填写{min}到{max}位数字！']
	    };
	});
	Validate.factory('s', function () {
	    return {
	        range: true,
	        rule: '[\\u4E00-\\u9FA5\\uf900-\\ufa2d\\w\\.\\s]',
	        tip: ['不能输入特殊字符！', '请填写至少{min}位字符！', '请填写{min}到{max}位字符！']
	    };
	});
	Validate.factory('l', function () {
	    return {
	        range: true,
	        rule: '[a-zA-Z]',
	        tip: ['请填写字母！', '请填写至少{min}位字母！', '请填写{min}到{max}位字母！']
	    };
	});
	Validate.factory('nl', function () {
	    return {
	        range: true,
	        rule: '[a-zA-Z0-9]',
	        tip: ['请填写字母或数字！', '请填写至少{min}位字母或数字！', '请填写{min}到{max}位字母或数字！']
	    };
	});
	Validate.factory('zh', function () {
	    return {
	        range: true,
	        rule: '[\\u4e00-\\u9fa5]',
	        tip: ['请填写汉字！', '请填写至少{min}位汉字！', '请填写{min}到{max}位汉字！']
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

	exports['default'] = Validate;
	module.exports = exports['default'];

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var Form = _react2['default'].createClass({
	    displayName: 'Form',

	    getDefaultProps: function getDefaultProps() {
	        return {
	            onSubmit: function onSubmit() {}
	        };
	    },
	    render: function render() {
	        return _react2['default'].createElement(
	            'form',
	            _extends({}, this.props, { onSubmit: this.onSubmit, noValidate: true }),
	            this.props.children
	        );
	    },
	    onSubmit: function onSubmit(event) {
	        event.preventDefault();
	        this.props.onSubmit(event);
	    }
	});

	var FieldMixin = {
	    beforeField: function beforeField() {
	        var label = this.props.label || this.props.name;
	        // id 经常会频繁切换，估不换。
	        var id = this.___filed_id || 'formerId' + (Math.random() + '').slice(2);
	        this.___filed_id = id;

	        var props = Object.assign({
	            id: id,
	            className: 'form-control'
	        }, this.props);
	        if (props.className.indexOf('form-control') === -1) {
	            props.className = 'form-control ' + props.className;
	        }

	        return {
	            label: label,
	            props: props
	        };
	    }
	};

	var Input = _react2['default'].createClass({
	    displayName: 'Input',

	    mixins: [FieldMixin],
	    render: function render() {
	        var field = Object.assign(this.beforeField(), {
	            value: '',
	            type: 'text'
	        }, this.props);

	        // 注意，input不能有children，否则很奇怪。
	        var _field$props = field.props;
	        var children = _field$props.children;

	        var other = _objectWithoutProperties(_field$props, ['children']);

	        return _react2['default'].createElement(
	            'div',
	            { className: 'form-group' },
	            _react2['default'].createElement(
	                'label',
	                { htmlFor: field.props.id },
	                field.label
	            ),
	            _react2['default'].createElement('input', other),
	            this.props.children
	        );
	    }
	});

	var Select = _react2['default'].createClass({
	    displayName: 'Select',

	    mixins: [FieldMixin],
	    render: function render() {
	        var field = Object.assign(this.beforeField(), {
	            value: '',
	            options: []
	        }, this.props);

	        var options = field.props.options.map(function (ele, i) {
	            if (typeof ele !== 'object') {
	                ele = {
	                    value: ele,
	                    text: ele
	                };
	            }
	            return _react2['default'].createElement(
	                'option',
	                { key: i, value: ele.value },
	                ele.text
	            );
	        });

	        delete field.props.options;
	        return _react2['default'].createElement(
	            'div',
	            { className: 'form-group' },
	            _react2['default'].createElement(
	                'label',
	                { htmlFor: field.props.id },
	                field.label
	            ),
	            _react2['default'].createElement(
	                'select',
	                field.props,
	                options,
	                this.props.children
	            )
	        );
	    }
	});

	var Former = Form;
	Object.assign(Former, {
	    Input: Input,
	    Select: Select
	});

	exports['default'] = Former;
	module.exports = exports['default'];

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _paginationComponentJs = __webpack_require__(4);

	var _paginationComponentJs2 = _interopRequireDefault(_paginationComponentJs);

	var _paginationTextComponentJs = __webpack_require__(5);

	var _paginationTextComponentJs2 = _interopRequireDefault(_paginationTextComponentJs);

	var GridHead = _react2['default'].createClass({
	    displayName: 'GridHead',

	    render: function render() {
	        var data = this.props.data;
	        return _react2['default'].createElement(
	            'thead',
	            null,
	            _react2['default'].createElement(
	                'tr',
	                null,
	                data.enableSelect ? _react2['default'].createElement(
	                    'th',
	                    { className: 'gm-grid-select' },
	                    _react2['default'].createElement('input', { type: 'checkbox', onClick: this.onSelect })
	                ) : undefined,
	                data.columns.map(function (col, i) {
	                    return _react2['default'].createElement(
	                        'th',
	                        { key: i },
	                        col.name
	                    );
	                }),
	                data.actions.length > 0 ? _react2['default'].createElement(
	                    'th',
	                    null,
	                    '操作'
	                ) : undefined
	            )
	        );
	    },
	    onSelect: function onSelect(event) {
	        var onSelect = this.props.onSelect;
	        onSelect(event.target.checked);
	    }
	});

	var Grid = _react2['default'].createClass({
	    displayName: 'Grid',

	    processData: function processData(data) {
	        data = Object.assign({
	            enableSelect: false, // 和 batchs 配合用
	            enablePagination: false, // 和 pagination toPage 配合用
	            enablePaginationText: false,
	            loading: false,
	            actions: [],
	            batchs: [],
	            list: [],
	            toPage: function toPage() {}
	        }, data);
	        data.actions.forEach(function (action) {
	            action.isShow = action.isShow || function () {
	                return true;
	            };
	        });

	        data.list.forEach(function (elist) {
	            elist.___select = false;
	        });
	        return data;
	    },
	    getInitialState: function getInitialState() {
	        return {
	            data: this.processData(this.props.data)
	        };
	    },
	    componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	        this.setState({
	            data: this.processData(nextProps.data)
	        });
	    },
	    render: function render() {
	        var t = this;
	        var data = this.state.data;
	        var actions = data.actions;
	        var batchs = data.batchs;

	        var tableBody;
	        if (data.loading) {
	            tableBody = _react2['default'].createElement(
	                'tr',
	                null,
	                _react2['default'].createElement(
	                    'td',
	                    { colSpan: '99', className: 'text-center' },
	                    _react2['default'].createElement('i', { className: 'fa fa-spin fa-spinner fa-pulse' })
	                )
	            );
	        } else if (data.list.length === 0) {
	            tableBody = _react2['default'].createElement(
	                'tr',
	                null,
	                _react2['default'].createElement(
	                    'td',
	                    { colSpan: '99', className: 'text-center' },
	                    '无'
	                )
	            );
	        } else if (data.list.length > 0) {
	            tableBody = data.list.map(function (elist, index) {
	                var tds = data.columns.map(function (col, i) {
	                    // 转换成字符串，避免 true false 没显示
	                    if (col.render) {
	                        return _react2['default'].createElement(
	                            'td',
	                            { key: i },
	                            '' + col.render(elist[col.field], elist)
	                        );
	                    } else {
	                        return _react2['default'].createElement(
	                            'td',
	                            { key: i },
	                            '' + elist[col.field]
	                        );
	                    }
	                });

	                var buttons = actions.map(function (action, i) {
	                    var classes = 'btn btn-default btn-xs ' + action.className;
	                    if (action.isShow(elist, index) === false) {
	                        classes += ' hidden';
	                    }
	                    return _react2['default'].createElement(
	                        'button',
	                        { key: i, onClick: t.onActions.bind(t, elist, index, action),
	                            className: classes },
	                        action.text
	                    );
	                });

	                return _react2['default'].createElement(
	                    'tr',
	                    { key: index },
	                    data.enableSelect ? _react2['default'].createElement(
	                        'td',
	                        null,
	                        _react2['default'].createElement('input', { type: 'checkbox', checked: elist.___select, onClick: t.onSelect.bind(t, elist) })
	                    ) : undefined,
	                    tds,
	                    actions.length > 0 ? _react2['default'].createElement(
	                        'td',
	                        null,
	                        buttons
	                    ) : undefined
	                );
	            });
	        }

	        var batchButtons = batchs.map(function (batch, i) {
	            var classes = 'btn btn-default btn-sm ' + batch.className;
	            return _react2['default'].createElement(
	                'button',
	                { key: i, onClick: t.onBatchs.bind(t, batch), className: classes },
	                batch.text
	            );
	        });

	        var pagination = _react2['default'].createElement(
	            'div',
	            null,
	            data.enablePagination ? _react2['default'].createElement(
	                'div',
	                { className: 'pull-right' },
	                _react2['default'].createElement(_paginationComponentJs2['default'], { data: data.pagination, toPage: t.onToPage })
	            ) : undefined,
	            data.enablePaginationText ? _react2['default'].createElement(
	                'div',
	                { className: 'pull-right' },
	                _react2['default'].createElement(_paginationTextComponentJs2['default'], { data: data.pagination })
	            ) : undefined
	        );

	        return _react2['default'].createElement(
	            'div',
	            { className: 'gm-grid' },
	            _react2['default'].createElement(
	                'table',
	                { className: 'table table-striped table-hover table-condensed table-bordered' },
	                _react2['default'].createElement(GridHead, { data: data, onSelect: t.onSelectAll }),
	                _react2['default'].createElement(
	                    'tbody',
	                    null,
	                    tableBody
	                )
	            ),
	            _react2['default'].createElement(
	                'div',
	                { className: 'gm-grid-foot clearfix' },
	                _react2['default'].createElement(
	                    'div',
	                    { className: 'pull-left gm-grid-batch' },
	                    data.enableSelect ? batchButtons : undefined
	                ),
	                data.pagination ? pagination : undefined
	            )
	        );
	    },
	    onActions: function onActions(elist, index, action) {
	        action.click(elist, index);
	    },
	    onBatchs: function onBatchs(batch) {
	        var lists = this.state.data.list.filter(function (elist) {
	            return elist.___select;
	        });
	        if (lists.length > 0) {
	            batch.click(lists);
	        }
	    },
	    onSelect: function onSelect(elist, event) {
	        elist.___select = event.target.checked;
	        this.setState({
	            list: this.state.data.list
	        });
	    },
	    onSelectAll: function onSelectAll(bool) {
	        this.setState({
	            list: this.state.data.list.map(function (elist) {
	                elist.___select = bool;
	            })
	        });
	    },
	    onToPage: function onToPage(page, index) {
	        this.state.data.toPage(page, index);
	    }
	});

	exports['default'] = Grid;
	module.exports = exports['default'];

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(11);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _underscore = __webpack_require__(2);

	var _underscore2 = _interopRequireDefault(_underscore);

	var _validateJs = __webpack_require__(6);

	var _validateJs2 = _interopRequireDefault(_validateJs);

	var _jquery = __webpack_require__(12);

	var _jquery2 = _interopRequireDefault(_jquery);

	var className = {
	    error: 'gm-invalid'
	};

	// 因为对validate的用法没有规定，可以onChange验证，可以onBlur验证，或者其他的，需要在这里补充使用场景。
	var expectEvent = ['onChange', 'onBlur', 'onFocus'];

	var nameRule = function nameRule(list, obj) {
	    if (obj.props && obj.props.name !== undefined) {
	        var rule;
	        _underscore2['default'].find(expectEvent, function (eventName) {
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
	    } else if (obj.props && obj.props.children && _underscore2['default'].isArray(obj.props.children)) {
	        _underscore2['default'].each(obj.props.children, function (value) {
	            nameRule(list, value);
	        });
	    } else if (obj.props && obj.props.children && _underscore2['default'].isObject(obj.props.children)) {
	        nameRule(list, obj.props.children);
	    }
	};

	var toNameRuleList = function toNameRuleList(ref) {
	    var list = [];
	    nameRule(list, ref);
	    return list;
	};

	var doValidate = function doValidate(options, rule, target) {
	    var value = target.value;
	    var name = target.name;

	    var result = (0, _validateJs2['default'])(rule, value, true);
	    options.tip[name] = result;

	    if (result === true) {
	        (0, _jquery2['default'])(target).removeClass(className.error);
	    } else {
	        (0, _jquery2['default'])(target).addClass(className.error);
	    }
	};

	var ValidateMixin = function ValidateMixin() {
	    var options = {
	        tip: {}
	    };

	    return {
	        validate: function validate(rule, next) {
	            var t = this;

	            var func = function func(event) {
	                doValidate(options, rule, event.target);
	                t.setState(t.state);

	                if (next) {
	                    next.apply(t, arguments, options.tip[event.target.name]);
	                }
	            };
	            func.___validate_rule = rule;

	            return func;
	        },
	        validateAll: function validateAll(formRef) {
	            var t = this;
	            var list = toNameRuleList(formRef);
	            var form = _reactDom2['default'].findDOMNode(formRef);

	            _underscore2['default'].each(list, function (elist) {
	                doValidate(options, elist.rule, form[elist.name]);
	            });
	            t.setState(t.state);
	        },
	        validateTip: function validateTip(name) {
	            if (name) {
	                return options.tip[name];
	            }
	            return _underscore2['default'].map(_underscore2['default'].filter(options.tip, function (v, k) {
	                return k !== true;
	            }), function (v) {
	                return v;
	            });
	        }
	    };
	};

	exports['default'] = ValidateMixin;
	module.exports = exports['default'];

/***/ },
/* 10 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 11 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_11__;

/***/ },
/* 12 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_12__;

/***/ }
/******/ ])
});
;