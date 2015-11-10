(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("underscore"), require("react-dom"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "underscore", "react-dom"], factory);
	else if(typeof exports === 'object')
		exports["ReactGM"] = factory(require("react"), require("underscore"), require("react-dom"));
	else
		root["ReactGM"] = factory(root["React"], root["underscore"], root["ReactDOM"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_9__) {
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

	var _gridComponentJs = __webpack_require__(11);

	var _gridComponentJs2 = _interopRequireDefault(_gridComponentJs);

	var _paginationComponentJs = __webpack_require__(4);

	var _paginationComponentJs2 = _interopRequireDefault(_paginationComponentJs);

	var _paginationTextComponentJs = __webpack_require__(5);

	var _paginationTextComponentJs2 = _interopRequireDefault(_paginationTextComponentJs);

	var _droperComponentJs = __webpack_require__(3);

	var _droperComponentJs2 = _interopRequireDefault(_droperComponentJs);

	var _formerComponentJs = __webpack_require__(10);

	var _formerComponentJs2 = _interopRequireDefault(_formerComponentJs);

	var _validateJs = __webpack_require__(8);

	var _validateJs2 = _interopRequireDefault(_validateJs);

	var _validateMixinJs = __webpack_require__(15);

	var _validateMixinJs2 = _interopRequireDefault(_validateMixinJs);

	var _utilJs = __webpack_require__(6);

	var _utilJs2 = _interopRequireDefault(_utilJs);

	var _importLeadComponentJs = __webpack_require__(12);

	var _importLeadComponentJs2 = _interopRequireDefault(_importLeadComponentJs);

	__webpack_require__(16);

	var ReactGM = {
	    Grid: _gridComponentJs2['default'],
	    Pagination: _paginationComponentJs2['default'],
	    PaginationText: _paginationTextComponentJs2['default'],
	    Former: _formerComponentJs2['default'],
	    ValidateMixin: _validateMixinJs2['default'],
	    Validate: _validateJs2['default'],
	    ImportLead: _importLeadComponentJs2['default'],
	    Droper: _droperComponentJs2['default'],
	    Util: _utilJs2['default']
	};

	exports['default'] = ReactGM;
	module.exports = exports['default'];

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

	'use strict';

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var React = __webpack_require__(1);

	var Droper = (function (_React$Component) {
	    _inherits(Droper, _React$Component);

	    function Droper(props, context) {
	        _classCallCheck(this, Droper);

	        _get(Object.getPrototypeOf(Droper.prototype), 'constructor', this).call(this, props, context);
	        this.onClick = this.onClick.bind(this);
	        this.onDragEnter = this.onDragEnter.bind(this);
	        this.onDragLeave = this.onDragLeave.bind(this);
	        this.onDragOver = this.onDragOver.bind(this);
	        this.onDrop = this.onDrop.bind(this);

	        this.state = {
	            isDragActive: false
	        };
	    }

	    _createClass(Droper, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            this.enterCounter = 0;
	        }
	    }, {
	        key: 'accept',
	        value: function accept(file, acceptedFiles) {
	            if (file && acceptedFiles) {
	                var _ret = (function () {
	                    var acceptedFilesArray = acceptedFiles.split(',');
	                    var fileName = file.name || '';
	                    var mimeType = file.type || '';
	                    var baseMimeType = mimeType.replace(/\/.*$/, '');

	                    return {
	                        v: acceptedFilesArray.some(function (type) {
	                            var validType = type.trim();
	                            if (validType.charAt(0) === '.') {
	                                return fileName.toLowerCase().endsWith(validType.toLowerCase());
	                            } else if (/\/\*$/.test(validType)) {
	                                // This is something like a image/* mime type
	                                return baseMimeType === validType.replace(/\/.*$/, '');
	                            }
	                            return mimeType === validType;
	                        })
	                    };
	                })();

	                if (typeof _ret === 'object') return _ret.v;
	            }
	            return true;
	        }
	    }, {
	        key: 'allFilesAccepted',
	        value: function allFilesAccepted(files) {
	            var _this = this;

	            return files.every(function (file) {
	                return _this.accept(file, _this.props.accept);
	            });
	        }
	    }, {
	        key: 'onDragEnter',
	        value: function onDragEnter(e) {
	            e.preventDefault();

	            ++this.enterCounter;

	            // This is tricky. During the drag even the dataTransfer.files is null
	            // But Chrome implements some drag store, which is accesible via dataTransfer.items
	            var dataTransferItems = e.dataTransfer && e.dataTransfer.items ? e.dataTransfer.items : [];

	            // Now we need to convert the DataTransferList to Array
	            var itemsArray = Array.prototype.slice.call(dataTransferItems);
	            var allFilesAccepted = this.allFilesAccepted(itemsArray);

	            this.setState({
	                isDragActive: allFilesAccepted,
	                isDragReject: !allFilesAccepted
	            });

	            if (this.props.onDragEnter) {
	                this.props.onDragEnter(e);
	            }
	        }
	    }, {
	        key: 'onDragOver',
	        value: function onDragOver(e) {
	            e.preventDefault();
	        }
	    }, {
	        key: 'onDragLeave',
	        value: function onDragLeave(e) {
	            e.preventDefault();

	            if (--this.enterCounter > 0) {
	                return;
	            }

	            this.setState({
	                isDragActive: false,
	                isDragReject: false
	            });

	            if (this.props.onDragLeave) {
	                this.props.onDragLeave(e);
	            }
	        }
	    }, {
	        key: 'onDrop',
	        value: function onDrop(e) {
	            e.preventDefault();

	            // Reset the counter along with the drag on a drop.
	            this.enterCounter = 0;

	            this.setState({
	                isDragActive: false,
	                isDragReject: false
	            });

	            var droppedFiles = e.dataTransfer ? e.dataTransfer.files : e.target.files;
	            var max = this.props.multiple ? droppedFiles.length : 1;
	            var files = [];

	            for (var i = 0; i < max; i++) {
	                var file = droppedFiles[i];
	                file.preview = window.URL.createObjectURL(file);
	                files.push(file);
	            }

	            if (this.props.onDrop) {
	                this.props.onDrop(files, e);
	            }

	            if (this.allFilesAccepted(files)) {
	                if (this.props.onDropAccepted) {
	                    this.props.onDropAccepted(files, e);
	                }
	            } else {
	                if (this.props.onDropRejected) {
	                    this.props.onDropRejected(files, e);
	                }
	            }
	        }
	    }, {
	        key: 'onClick',
	        value: function onClick() {
	            if (!this.props.disableClick) {
	                this.open();
	            }
	        }
	    }, {
	        key: 'open',
	        value: function open() {
	            var fileInput = this.refs.fileInput;
	            fileInput.value = null;
	            fileInput.click();
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var className = 'gm-droper ';
	            className += this.props.className ? this.props.className : ' gm-droper-default ';

	            return React.createElement(
	                'div',
	                {
	                    className: className,
	                    onClick: this.onClick,
	                    onDragEnter: this.onDragEnter,
	                    onDragOver: this.onDragOver,
	                    onDragLeave: this.onDragLeave,
	                    onDrop: this.onDrop
	                },
	                this.props.children,
	                React.createElement('input', {
	                    type: 'file',
	                    ref: 'fileInput',
	                    className: 'gm-droper-input',
	                    multiple: this.props.multiple,
	                    accept: this.props.accept,
	                    onChange: this.onDrop
	                })
	            );
	        }
	    }]);

	    return Droper;
	})(React.Component);

	Droper.defaultProps = {
	    disableClick: false,
	    multiple: true
	};

	Droper.propTypes = {
	    onDrop: React.PropTypes.func,
	    onDropAccepted: React.PropTypes.func,
	    onDropRejected: React.PropTypes.func,
	    onDragEnter: React.PropTypes.func,
	    onDragLeave: React.PropTypes.func,

	    disableClick: React.PropTypes.bool,
	    multiple: React.PropTypes.bool,
	    accept: React.PropTypes.string
	};

	module.exports = Droper;

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

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _utilRequestJs = __webpack_require__(14);

	var _utilRequestJs2 = _interopRequireDefault(_utilRequestJs);

	var _utilParamJs = __webpack_require__(7);

	var _utilParamJs2 = _interopRequireDefault(_utilParamJs);

	var _utilFormatJs = __webpack_require__(13);

	var _utilFormatJs2 = _interopRequireDefault(_utilFormatJs);

	var Util = {
	    Request: _utilRequestJs2['default'],
	    format: _utilFormatJs2['default'],
	    param: _utilParamJs2['default']
	};

	module.exports = Util;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _underscore = __webpack_require__(2);

	var _underscore2 = _interopRequireDefault(_underscore);

	var param = function param(obj) {
	    // encodeURIComponent
	    return _underscore2['default'].map(obj, function (v, k) {
	        return [encodeURIComponent(k), '=', encodeURIComponent(v)].join('');
	    }).join('&').replace(/%20/g, "+");
	};

	module.exports = param;

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _underscore = __webpack_require__(2);

	var _underscore2 = _interopRequireDefault(_underscore);

	var _utilJs = __webpack_require__(6);

	var _utilJs2 = _interopRequireDefault(_utilJs);

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

	var ruleToInfo = function ruleToInfo(rule) {
	    var info = {};

	    var ruleStr = _underscore2['default'].map(_underscore2['default'].keys(ruleKeyMap), function (value) {
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

	var ValidateTip = function ValidateTip(rule) {
	    if (_underscore2['default'].isRegExp(rule)) {
	        return ruleKeyTipMap.def;
	    }

	    var info = ruleToInfo(rule);

	    if (noRangeRuleKeys.indexOf(info.type) === -1) {
	        if (info.max) {
	            return _utilJs2['default'].format(ruleKeyTipMap.w[info.type][3], info);
	        } else if (info.cross) {
	            return _utilJs2['default'].format(ruleKeyTipMap.w[info.type][2], info);
	        } else if (info.min) {
	            return _utilJs2['default'].format(ruleKeyTipMap.w[info.type][1], info);
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
	            } else if (!info.cross) {
	                regs = regs.concat(['{', info.min, '}']);
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
	Validate.factory('num', function () {
	    return {
	        rule: '[+-]?((\\d+.\\d+)|(\\d+))',
	        tip: '请填写数字！'
	    };
	});

	exports['default'] = Validate;
	module.exports = exports['default'];

/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_9__;

/***/ },
/* 10 */
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
					this.props.children,
					options
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
/* 11 */
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
	                            col.render(elist[col.field], elist)
	                        );
	                    } else {
	                        return _react2['default'].createElement(
	                            'td',
	                            { key: i },
	                            elist[col.field]
	                        );
	                    }
	                });

	                var buttons = actions.map(function (action, i) {
	                    var classes = 'btn btn-default btn-xs ' + action.className;
	                    if (!!action.isShow(elist, index) === false) {
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
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(1);
	var ReactDOM = __webpack_require__(9);
	var _ = __webpack_require__(2);
	var Droper = __webpack_require__(3);

	var ImportLead = React.createClass({
	    displayName: 'ImportLead',

		getInitialState: function getInitialState() {
			return {
				selectedFile: null
			};
		},
	    render: function render() {
	        var _this = this;

	        var t = this;
	        var data = _.extend({ columns: [], list: [] }, t.props.data);
	        var tips = t.props.tips || [];

	        var tipsMap = {};

	        var lineMap = _.map(data.list, function () {
	            return false;
	        });

	        _.each(tips, function (tip, index) {
	            tipsMap[tip.index] = tipsMap[tip.index] || {};
	            tip._index = index;
	            tipsMap[tip.index][tip.field] = tip;

	            if (!tip.modifyed) {
	                lineMap[tip.index] = true;
	            }
	        });

	        var tableBody = data.list.map(function (elist, index) {

	            var tds = data.columns.map(function (col, i) {
	                var tip = tipsMap[index] && tipsMap[index][col.field];
	                return tip ? React.createElement(
	                    'td',
	                    { key: i, className: tip.modifyed ? "gm-bg-info" : "gm-bg-invalid" },
	                    React.createElement('input', { type: 'text', value: elist[col.field],
	                        onChange: t.handleEdit.bind(t, index, col.field, tip._index) }),
	                    React.createElement(
	                        'small',
	                        { className: 'gm-import-lead-tip badge' },
	                        React.createElement(
	                            'i',
	                            null,
	                            tip.msg
	                        )
	                    )
	                ) : React.createElement(
	                    'td',
	                    { key: i },
	                    elist[col.field]
	                );
	            });

	            return React.createElement(
	                'tr',
	                { key: index },
	                tds
	            );
	        });

	        var canSubmit = _.filter(tips, function (value) {
	            return value.modifyed === true;
	        }).length === tips.length;

			var filename = t.state.selectedFile ? t.state.selectedFile.name : '';

			var fileTempUrl = t.props.fileTempUrl;

	        return React.createElement(
	            'div',
	            { className: 'gm-import-lead' },
	            React.createElement(
	                'div',
	                null,
	                React.createElement(
	                    'div',
	                    null,
	                    React.createElement(
	                        Droper,
							{className: 'gm-droper-wrap', onDrop: this.handleDrop, accept: '.xlsx'},
	                        React.createElement(
	                            'button',
	                            { className: 'btn btn-primary btn-sm' },
	                            '上传xlsx'
	                        )
	                    ),
	                    '    ',
	                    React.createElement(
	                        'button',
	                        { disabled: !canSubmit, className: 'btn btn-primary btn-sm', onClick: this.handleSubmit },
	                        '提交'
						),
						'    ',
						fileTempUrl ? React.createElement(
							'a',
							{href: fileTempUrl, target: 'blank'},
							'上传模板下载'
						) : undefined,
						React.createElement(
							'div',
							null,
							filename
	                    )
	                ),
	                React.createElement(
	                    'div',
	                    { className: 'gm-import-line clearfix' },
	                    lineMap.map(function (v, i) {
	                        return React.createElement('div', { key: i, className: v ? "tip" : "", onClick: _this.handleLine.bind(_this, i) });
	                    })
	                )
	            ),
	            React.createElement(
	                'div',
	                { className: 'gm-import-lead-content', ref: 'content' },
	                data ? React.createElement(
	                    'table',
	                    { className: 'table table-condensed table-bordered', ref: 'table' },
	                    React.createElement(
	                        'thead',
	                        null,
	                        React.createElement(
	                            'tr',
	                            null,
	                            data.columns.map(function (col, i) {
	                                return React.createElement(
	                                    'th',
	                                    { key: i },
	                                    col.name
	                                );
	                            })
	                        )
	                    ),
	                    React.createElement(
	                        'tbody',
	                        null,
	                        tableBody
	                    )
	                ) : undefined
	            )
	        );
	    },
	    handleEdit: function handleEdit(index, field, i, event) {
	        var t = this;
	        if (t.props.onEdit) {
	            t.props.onEdit(index, field, event.target.value, i);
	        }
	    },
	    handleSubmit: function handleSubmit(event) {
	        var t = this;
	        event.preventDefault();
	        if (t.props.onSubmit) {
	            t.props.onSubmit();
	        }
	    },
	    handleLine: function handleLine(index) {
	        var t = this;
	        var content = ReactDOM.findDOMNode(t.refs.content);
	        var table = ReactDOM.findDOMNode(t.refs.table);
	        content.scrollTop = index / t.props.data.list.length * table.offsetHeight;
	    },
	    handleDrop: function handleDrop(files) {
	        var t = this;
			t.setState({
				selectedFile: files[0]
			});
	        if (files[0] && t.props.onDrop) {
	            t.props.onDrop(files[0]);
	        }
	    }
	});

	module.exports = ImportLead;

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _underscore = __webpack_require__(2);

	var _underscore2 = _interopRequireDefault(_underscore);

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

	module.exports = format;

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _paramJs = __webpack_require__(7);

	var _paramJs2 = _interopRequireDefault(_paramJs);

		var _underscore = __webpack_require__(2);

		var _underscore2 = _interopRequireDefault(_underscore);

		var processRequestResponse = function processRequestResponse(promise, url, sucCode) {
	    var color = 'color: #8a6d3b;';
	    return promise.then(function (res) {
	        return res.json();
	    }).then(function (json) {
			if (sucCode.indexOf(json.code) > -1) {
				return json;
	        } else {
	            console.log('%c*** Request url: %s、code: %s、msg: %s', color, url, json.code, json.msg);
				return Promise.reject(json.msg || '未知错误');
	        }
	    })['catch'](function (reason) {
	        console.log('%c*** Request catch %s', color, reason);
	        // reason 是个对象。目前先给字符串。吧。后续有需要在扩展
	        return Promise.reject('' + reason);
	    });
	};

	var Request = function Request(url, options) {
	    this._data = {};
	    this.url = url;
		this.sucCode = [0];
	    this.options = Object.assign({
	        method: 'get',
	        credentials: 'include' // 需要设置才能获取cookie
	    }, options);
	};
	Request.prototype = {
		code: function code(codes) {
			if (_underscore2['default'].isArray(codes)) {
				this.sucCode.concat(codes);
			} else {
				this.sucCode.push(codes);
			}
			return this;
		},
	    data: function data(_data) {
	        this._data = _data || {};
	        return this;
	    },
	    json: function json(data) {
	        this._data = JSON.stringify(data);
	        return this;
	    },
	    get: function get() {
	        var p = (0, _paramJs2['default'])(this._data);
	        var newUrl = this.url + (this.url.indexOf('?') > -1 ? '&' : '?') + p;

			return processRequestResponse(fetch(newUrl, this.options), this.url, this.sucCode);
	    },
	    post: function post() {
	        var data = this._data;
	        var body;
	        // 兼容传json string 的情况
	        if (toString.call(data) === '[object Object]') {
	            body = new FormData();
	            for (var e in data) {
	                body.append(e, data[e]);
	            }
	        } else {
	            body = data;
	        }
	        this.options.method = 'post';
	        this.options.body = body;
			return processRequestResponse(fetch(this.url, this.options), this.url, this.sucCode);
	    }
	};

	var RequestFactory = function RequestFactory(url, options) {
	    return new Request(url, options);
	};

	module.exports = RequestFactory;

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(9);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _underscore = __webpack_require__(2);

	var _underscore2 = _interopRequireDefault(_underscore);

	var _validateJs = __webpack_require__(8);

	var _validateJs2 = _interopRequireDefault(_validateJs);

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
	        target.className = _underscore2['default'].without(target.className.split(' '), className.error).join(' ');
	    } else {
	        target.className = _underscore2['default'].union(target.className.split(' '), [className.error]).join(' ');
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
	                t.setState({});

	                if (next) {
	                    next.apply(t, arguments, options.tip[event.target.name]);
	                }
	            };
	            func.___validate_rule = rule;

	            return func;
	        },
	        validateAll: function validateAll(formRef) {
	            if (!formRef) {
	                return false;
	            }
	            var t = this;
	            var list = toNameRuleList(formRef);
	            var form = _reactDom2['default'].findDOMNode(formRef);

	            _underscore2['default'].each(list, function (elist) {
	                doValidate(options, elist.rule, form[elist.name]);
	            });
	            t.setState({});
	            return t.validateTip().length === 0;
	        },
	        validateTip: function validateTip(name) {
	            if (name) {
	                return options.tip[name];
	            }
	            return _underscore2['default'].map(_underscore2['default'].filter(options.tip, function (v) {
	                return v !== true;
	            }), function (v) {
	                return v;
	            });
	        }
	    };
	};

	exports['default'] = ValidateMixin;
	module.exports = exports['default'];

/***/ },
/* 16 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }
/******/ ])
});
;