(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("underscore"), require("react-bootstrap"), require("react-dom"), require("moment"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "underscore", "react-bootstrap", "react-dom", "moment"], factory);
	else if(typeof exports === 'object')
		exports["ReactGM"] = factory(require("react"), require("underscore"), require("react-bootstrap"), require("react-dom"), require("moment"));
	else
		root["ReactGM"] = factory(root["react"], root["underscore"], root["react-bootstrap"], root["react-dom"], root["moment"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_5__, __WEBPACK_EXTERNAL_MODULE_7__) {
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

	var _gmUtil = __webpack_require__(8);

	var _gmUtil2 = _interopRequireDefault(_gmUtil);

	var _grid = __webpack_require__(31);

	var _grid2 = _interopRequireDefault(_grid);

	var _pagination = __webpack_require__(10);

	var _pagination2 = _interopRequireDefault(_pagination);

	var _pagination3 = __webpack_require__(11);

	var _pagination4 = _interopRequireDefault(_pagination3);

	var _droper = __webpack_require__(16);

	var _droper2 = _interopRequireDefault(_droper);

	var _former = __webpack_require__(30);

	var _former2 = _interopRequireDefault(_former);

	var _validate = __webpack_require__(18);

	var _validate2 = _interopRequireDefault(_validate);

	var _validate3 = __webpack_require__(42);

	var _validate4 = _interopRequireDefault(_validate3);

	var _import = __webpack_require__(33);

	var _import2 = _interopRequireDefault(_import);

	var _storage = __webpack_require__(38);

	var _storage2 = _interopRequireDefault(_storage);

	var _calendar = __webpack_require__(9);

	var _calendar2 = _interopRequireDefault(_calendar);

	var _datepicker = __webpack_require__(26);

	var _datepicker2 = _interopRequireDefault(_datepicker);

	var _daterangepicker = __webpack_require__(27);

	var _daterangepicker2 = _interopRequireDefault(_daterangepicker);

	var _tip = __webpack_require__(41);

	var _tip2 = _interopRequireDefault(_tip);

	var _nprogress = __webpack_require__(35);

	var _nprogress2 = _interopRequireDefault(_nprogress);

	var _hr = __webpack_require__(32);

	var _hr2 = _interopRequireDefault(_hr);

	var _dialog = __webpack_require__(28);

	var _dialog2 = _interopRequireDefault(_dialog);

	var _navigation = __webpack_require__(34);

	var _navigation2 = _interopRequireDefault(_navigation);

	var _flex = __webpack_require__(6);

	var _flex2 = _interopRequireDefault(_flex);

	var _timespan = __webpack_require__(17);

	var _timespan2 = _interopRequireDefault(_timespan);

	var _timespanpicker = __webpack_require__(40);

	var _timespanpicker2 = _interopRequireDefault(_timespanpicker);

	var _drop = __webpack_require__(29);

	var _drop2 = _interopRequireDefault(_drop);

	var _advance = __webpack_require__(24);

	var _advance2 = _interopRequireDefault(_advance);

	var _search = __webpack_require__(36);

	var _search2 = _interopRequireDefault(_search);

	var _switch = __webpack_require__(39);

	var _switch2 = _interopRequireDefault(_switch);

	var _sheet = __webpack_require__(37);

	var _sheet2 = _interopRequireDefault(_sheet);

	var _cascader = __webpack_require__(15);

	var _cascader2 = _interopRequireDefault(_cascader);

	var _cascader3 = __webpack_require__(25);

	var _cascader4 = _interopRequireDefault(_cascader3);

	__webpack_require__(43);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var SheetColumn = _sheet2.default.SheetColumn;
	var SheetAction = _sheet2.default.SheetAction;
	var SheetSelect = _sheet2.default.SheetSelect;
	var SheetBatchAction = _sheet2.default.SheetBatchAction;


	module.exports = {
	    Util: _gmUtil2.default,
	    Grid: _grid2.default,
	    Pagination: _pagination2.default,
	    PaginationText: _pagination4.default,
	    Former: _former2.default,
	    Calendar: _calendar2.default,
	    DatePicker: _datepicker2.default,
	    DateRangePicker: _daterangepicker2.default,
	    ValidateMixin: _validate4.default,
	    Validate: _validate2.default,
	    ImportLead: _import2.default,
	    Droper: _droper2.default,
	    Storage: _storage2.default,
	    Tip: _tip2.default,
	    NProgress: _nprogress2.default,
	    Hr: _hr2.default,
	    Dialog: _dialog2.default,
	    Navigation: _navigation2.default,
	    Flex: _flex2.default,
	    TimeSpan: _timespan2.default,
	    TimeSpanPicker: _timespanpicker2.default,
	    DropSelect: _drop2.default,
	    AdvanceSelect: _advance2.default,
	    SearchSelect: _search2.default,
	    Cascader: _cascader2.default,
	    CascaderSelect: _cascader4.default,
	    Switch: _switch2.default,
	    Sheet: _sheet2.default,
	    SheetColumn: SheetColumn,
	    SheetAction: SheetAction,
	    SheetSelect: SheetSelect,
	    SheetBatchAction: SheetBatchAction
	};

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

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	/*!
	  Copyright (c) 2016 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/
	/* global define */

	(function () {
		'use strict';

		var hasOwn = {}.hasOwnProperty;

		function classNames() {
			var classes = [];

			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;

				var argType = typeof arg === 'undefined' ? 'undefined' : _typeof(arg);

				if (argType === 'string' || argType === 'number') {
					classes.push(arg);
				} else if (Array.isArray(arg)) {
					classes.push(classNames.apply(null, arg));
				} else if (argType === 'object') {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				}
			}

			return classes.join(' ');
		}

		if (typeof module !== 'undefined' && module.exports) {
			module.exports = classNames;
		} else if ("function" === 'function' && _typeof(__webpack_require__(19)) === 'object' && __webpack_require__(19)) {
			// register as 'classnames', consistent with npm package name
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return classNames;
			}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			window.classNames = classNames;
		}
	})();

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_4__;

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_5__;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(3);

	var _classnames2 = _interopRequireDefault(_classnames);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Flex = function (_React$Component) {
	    _inherits(Flex, _React$Component);

	    function Flex() {
	        _classCallCheck(this, Flex);

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Flex).apply(this, arguments));
	    }

	    _createClass(Flex, [{
	        key: 'render',
	        value: function render() {
	            var _props = this.props;
	            var flex = _props.flex;
	            var auto = _props.auto;
	            var none = _props.none;
	            var width = _props.width;
	            var height = _props.height;
	            var row = _props.row;
	            var column = _props.column;
	            var wrap = _props.wrap;
	            var nowrap = _props.nowrap;
	            var justifyStart = _props.justifyStart;
	            var justifyEnd = _props.justifyEnd;
	            var justifyCenter = _props.justifyCenter;
	            var justifyBetween = _props.justifyBetween;
	            var justifyAround = _props.justifyAround;
	            var alignStart = _props.alignStart;
	            var alignEnd = _props.alignEnd;
	            var alignCenter = _props.alignCenter;
	            var alignBaseline = _props.alignBaseline;
	            var alignStretch = _props.alignStretch;
	            var className = _props.className;
	            var style = _props.style;

	            var rest = _objectWithoutProperties(_props, ['flex', 'auto', 'none', 'width', 'height', 'row', 'column', 'wrap', 'nowrap', 'justifyStart', 'justifyEnd', 'justifyCenter', 'justifyBetween', 'justifyAround', 'alignStart', 'alignEnd', 'alignCenter', 'alignBaseline', 'alignStretch', 'className', 'style']);

	            var cn = (0, _classnames2.default)({
	                'gm-flex': true,

	                'gm-flex-flex': flex,
	                'gm-flex-auto': auto,
	                'gm-flex-none': none || width || height,

	                'gm-flex-row': row,
	                'gm-flex-column': column,

	                'gm-flex-wrap': wrap,
	                'gm-flex-nowrap': nowrap,

	                'gm-flex-justify-start': justifyStart,
	                'gm-flex-justify-end': justifyEnd,
	                'gm-flex-justify-center': justifyCenter,
	                'gm-flex-justify-between': justifyBetween,
	                'gm-flex-justify-around': justifyAround,

	                'gm-flex-align-start': alignStart,
	                'gm-flex-align-end': alignEnd,
	                'gm-flex-align-center': alignCenter,
	                'gm-flex-align-baseline': alignBaseline,
	                'gm-flex-align-stretch': alignStretch
	            }, className);

	            // TODO 有待商榷，WebkitFlex 是否会生效？
	            var s = Object.assign({}, style);
	            if (flex) {
	                s.flex = typeof flex === 'boolean' ? 1 : flex;
	                s.WebKitFlex = typeof flex === 'boolean' ? 1 : flex;
	            }
	            if (height) {
	                s.height = height;
	            }
	            if (width) {
	                s.width = width;
	            }

	            return _react2.default.createElement(
	                'div',
	                _extends({}, rest, { className: cn, style: s }),
	                this.props.children
	            );
	        }
	    }]);

	    return Flex;
	}(_react2.default.Component);

	Flex.propTypes = {
	    flex: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.bool]),
	    auto: _react.PropTypes.bool,
	    none: _react.PropTypes.bool,
	    width: _react.PropTypes.string,
	    height: _react.PropTypes.string,
	    row: _react.PropTypes.bool,
	    column: _react.PropTypes.bool,
	    wrap: _react.PropTypes.bool,
	    nowrap: _react.PropTypes.bool,
	    justifyStart: _react.PropTypes.bool,
	    justifyEnd: _react.PropTypes.bool,
	    justifyCenter: _react.PropTypes.bool,
	    justifyBetween: _react.PropTypes.bool,
	    justifyAround: _react.PropTypes.bool,
	    alignStart: _react.PropTypes.bool,
	    alignEnd: _react.PropTypes.bool,
	    alignCenter: _react.PropTypes.bool,
	    alignBaseline: _react.PropTypes.bool,
	    alignStretch: _react.PropTypes.bool
	};

	exports.default = Flex;

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_7__;

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { 'default': obj };
	}

	var _Request = __webpack_require__(20);

	var _Request2 = _interopRequireDefault(_Request);

	var _RequestInterceptor = __webpack_require__(12);

	var _RequestInterceptor2 = _interopRequireDefault(_RequestInterceptor);

	var _param = __webpack_require__(14);

	var _param2 = _interopRequireDefault(_param);

	var _format = __webpack_require__(13);

	var _format2 = _interopRequireDefault(_format);

	var _isElementInViewport = __webpack_require__(22);

	var _isElementInViewport2 = _interopRequireDefault(_isElementInViewport);

	var _isElementOverViewport = __webpack_require__(23);

	var _isElementOverViewport2 = _interopRequireDefault(_isElementOverViewport);

	var _is = __webpack_require__(21);

	var _is2 = _interopRequireDefault(_is);

	module.exports = {
	    Request: _Request2['default'],
	    RequestInterceptor: _RequestInterceptor2['default'],
	    format: _format2['default'],
	    param: _param2['default'],
	    isElementInViewport: _isElementInViewport2['default'],
	    isElementOverViewport: _isElementOverViewport2['default'],
	    is: _is2['default']
	};

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _moment = __webpack_require__(7);

	var _moment2 = _interopRequireDefault(_moment);

	var _classnames = __webpack_require__(3);

	var _classnames2 = _interopRequireDefault(_classnames);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var noop = function noop() {};

	var Day = function (_React$Component) {
	    _inherits(Day, _React$Component);

	    function Day(props) {
	        _classCallCheck(this, Day);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Day).call(this, props));

	        _this.handleClick = _this.handleClick.bind(_this);
	        return _this;
	    }

	    _createClass(Day, [{
	        key: 'render',
	        value: function render() {
	            var now = this.props.nowMoment,
	                m = this.props.moment,
	                selected = this.props.selected;

	            var cn = (0, _classnames2.default)('gm-calendar-day', {
	                'gm-calendar-day-old': now.month() > m.month(),
	                'gm-calendar-day-new': now.month() < m.month(),
	                'gm-calendar-active': +selected.startOf('day') === +m.startOf('day')
	            });

	            return _react2.default.createElement(
	                'span',
	                { className: cn, onClick: this.handleClick },
	                m.date()
	            );
	        }
	    }, {
	        key: 'handleClick',
	        value: function handleClick() {
	            this.props.onClick(this.props.moment);
	        }
	    }]);

	    return Day;
	}(_react2.default.Component);

	var Calendar = function (_React$Component2) {
	    _inherits(Calendar, _React$Component2);

	    function Calendar(props) {
	        _classCallCheck(this, Calendar);

	        var _this2 = _possibleConstructorReturn(this, Object.getPrototypeOf(Calendar).call(this, props));

	        _this2.state = {
	            selected: _this2.props.selected ? _this2.props.selected : null, // 调用方的时间
	            moment: _this2.props.selected ? (0, _moment2.default)(_this2.props.selected) : (0, _moment2.default)(), // 日历内的时间
	            isSelectMonth: false,
	            weekDays: ['日', '一', '二', '三', '四', '五', '六']
	        };
	        _this2.handleSelectMonth = _this2.handleSelectMonth.bind(_this2);
	        _this2.handleSelectDay = _this2.handleSelectDay.bind(_this2);
	        return _this2;
	    }

	    _createClass(Calendar, [{
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(nextProps) {
	            if (nextProps.selected) {
	                this.setState({
	                    selected: nextProps.selected
	                });
	            }
	        }
	    }, {
	        key: 'handleChangeMonth',
	        value: function handleChangeMonth(month, event) {
	            event.preventDefault();
	            this.setState({
	                moment: this.state.moment.month(month),
	                isSelectMonth: false
	            });
	        }
	    }, {
	        key: 'handleSelectMonth',
	        value: function handleSelectMonth() {
	            this.setState({
	                isSelectMonth: !this.state.isSelectMonth
	            });
	        }
	    }, {
	        key: 'handleSelectDay',
	        value: function handleSelectDay(m) {
	            this.props.onSelect(m.toDate());
	        }
	    }, {
	        key: 'renderHead',
	        value: function renderHead() {
	            var m = (0, _moment2.default)(this.state.moment);
	            var month = m.month();
	            return _react2.default.createElement(
	                'div',
	                { className: 'gm-calendar-head text-center clearfix' },
	                _react2.default.createElement(
	                    'a',
	                    { className: 'gm-calendar-head-pre pull-left',
	                        onClick: this.handleChangeMonth.bind(this, month - 1) },
	                    _react2.default.createElement('i', { className: 'glyphicon glyphicon-chevron-left' })
	                ),
	                _react2.default.createElement(
	                    'span',
	                    { className: 'gm-calendar-head-title' },
	                    _react2.default.createElement(
	                        'span',
	                        { className: 'gm-calendar-head-month',
	                            onClick: this.handleSelectMonth },
	                        month + 1,
	                        '月'
	                    ),
	                    _react2.default.createElement(
	                        'span',
	                        null,
	                        '  ',
	                        m.year()
	                    )
	                ),
	                _react2.default.createElement(
	                    'a',
	                    { className: 'gm-calendar-head-next pull-right',
	                        onClick: this.handleChangeMonth.bind(this, month + 1) },
	                    _react2.default.createElement('i', { className: 'glyphicon glyphicon-chevron-right' })
	                )
	            );
	        }
	    }, {
	        key: 'renderWeek',
	        value: function renderWeek() {
	            return _react2.default.createElement(
	                'div',
	                { className: 'gm-calendar-week' },
	                this.state.weekDays.map(function (v, i) {
	                    return _react2.default.createElement(
	                        'span',
	                        { key: i, className: 'gm-calendar-day-name' },
	                        v
	                    );
	                })
	            );
	        }
	    }, {
	        key: 'renderMonth',
	        value: function renderMonth() {
	            var month = this.state.moment.month();
	            var months = [];
	            for (var i = 0; i < 12; i++) {
	                var cn = (0, _classnames2.default)('gm-calendar-month', {
	                    'gm-calendar-active': i === month
	                });
	                months.push(_react2.default.createElement(
	                    'span',
	                    { key: i,
	                        className: cn,
	                        onClick: this.handleChangeMonth.bind(this, i) },
	                    i + 1,
	                    '月'
	                ));
	            }
	            return _react2.default.createElement(
	                'div',
	                { className: 'gm-calendar-months' },
	                months
	            );
	        }
	    }, {
	        key: 'renderContent',
	        value: function renderContent() {
	            var m = (0, _moment2.default)(this.state.moment).startOf('month').day(0).add(-1, 'day');
	            var days = [];

	            for (var i = 0; i < 42; i++) {
	                days.push(_react2.default.createElement(Day, { key: i,
	                    selected: (0, _moment2.default)(this.state.selected),
	                    nowMoment: this.state.moment,
	                    moment: (0, _moment2.default)(m.add(1, 'day')),
	                    onClick: this.handleSelectDay }));
	            }

	            return _react2.default.createElement(
	                'div',
	                { className: 'gm-calendar-content' },
	                days
	            );
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                { className: 'gm-calendar' },
	                this.renderHead(),
	                this.renderWeek(),
	                this.renderContent(),
	                this.state.isSelectMonth ? this.renderMonth() : undefined
	            );
	        }
	    }]);

	    return Calendar;
	}(_react2.default.Component);

	Calendar.propTypes = {
	    selected: _react2.default.PropTypes.object,
	    onSelect: _react2.default.PropTypes.func
	};
	Calendar.defaultProps = {
	    onSelect: noop
	};

	exports.default = Calendar;

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Pagination = function (_React$Component) {
	    _inherits(Pagination, _React$Component);

	    function Pagination(props) {
	        _classCallCheck(this, Pagination);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Pagination).call(this, props));

	        _this.onPage = _this.onPage.bind(_this);
	        return _this;
	    }

	    _createClass(Pagination, [{
	        key: "render",
	        value: function render() {
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
	                    begin = Math.max(begin - offset, 1);
	                }
	            }

	            for (var i = begin; i <= end; i++) {
	                pages.push(i);
	            }

	            return _react2.default.createElement(
	                "div",
	                { className: "gm-pagination" },
	                _react2.default.createElement(
	                    "ul",
	                    { className: "pagination pagination-sm", onClick: this.onPage },
	                    _react2.default.createElement(
	                        "li",
	                        { className: data.index === 1 ? 'disabled' : '' },
	                        _react2.default.createElement(
	                            "a",
	                            { href: "javascript:;", "data-page": data.index - 1 },
	                            "«"
	                        )
	                    ),
	                    begin >= 2 ? _react2.default.createElement(
	                        "li",
	                        null,
	                        _react2.default.createElement(
	                            "a",
	                            { href: "javascript:;", "data-page": "1" },
	                            "1"
	                        )
	                    ) : undefined,
	                    begin >= 3 ? _react2.default.createElement(
	                        "li",
	                        { className: "disabled" },
	                        _react2.default.createElement(
	                            "a",
	                            { href: "javascript:;" },
	                            "..."
	                        )
	                    ) : undefined,
	                    pages.map(function (page, i) {
	                        return _react2.default.createElement(
	                            "li",
	                            { key: i, className: data.index === page ? 'active' : '' },
	                            _react2.default.createElement(
	                                "a",
	                                {
	                                    href: "javascript:;", "data-page": page },
	                                page
	                            )
	                        );
	                    }),
	                    end <= all - 2 ? _react2.default.createElement(
	                        "li",
	                        { className: "disabled" },
	                        _react2.default.createElement(
	                            "a",
	                            { href: "javascript:;" },
	                            "..."
	                        )
	                    ) : undefined,
	                    end <= all - 1 ? _react2.default.createElement(
	                        "li",
	                        null,
	                        _react2.default.createElement(
	                            "a",
	                            { href: "javascript:;", "data-page": all },
	                            all
	                        )
	                    ) : undefined,
	                    _react2.default.createElement(
	                        "li",
	                        { className: data.index === all ? 'disabled' : '' },
	                        _react2.default.createElement(
	                            "a",
	                            { href: "javascript:;", "data-page": data.index + 1 },
	                            "»"
	                        )
	                    )
	                )
	            );
	        }
	    }, {
	        key: "onPage",
	        value: function onPage(event) {
	            var page = ~~event.target.getAttribute('data-page'),
	                data = this.props.data,
	                count = Math.ceil(data.count / data.limit),
	                toPage = this.props.toPage;
	            if (!page || page === data.index || page < 1 || page > count) {
	                return;
	            }

	            toPage({
	                offset: (page - 1) * data.limit,
	                limit: data.limit
	            }, page);
	        }
	    }]);

	    return Pagination;
	}(_react2.default.Component);

	Pagination.displayName = 'Pagination';
	Pagination.propTypes = {
	    data: _react2.default.PropTypes.shape({
	        count: _react2.default.PropTypes.number.isRequired,
	        offset: _react2.default.PropTypes.number.isRequired,
	        limit: _react2.default.PropTypes.number.isRequired
	    }),
	    toPage: _react2.default.PropTypes.func.isRequired
	};

	exports.default = Pagination;

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var PaginationText = function (_React$Component) {
	    _inherits(PaginationText, _React$Component);

	    function PaginationText() {
	        _classCallCheck(this, PaginationText);

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(PaginationText).apply(this, arguments));
	    }

	    _createClass(PaginationText, [{
	        key: 'render',
	        value: function render() {
	            var data = Object.assign({}, this.props.data);
	            return _react2.default.createElement(
	                'div',
	                { className: 'gm-pagination-text' },
	                '显示第 ',
	                data.offset + 1,
	                ' 到 ',
	                Math.min(data.count, data.offset + data.limit),
	                ' 行，一共 ',
	                data.count,
	                ' 行记录'
	            );
	        }
	    }]);

	    return PaginationText;
	}(_react2.default.Component);

	PaginationText.displayName = 'PaginationText';
	PaginationText.propTypes = {
	    data: _react2.default.PropTypes.shape({
	        count: _react2.default.PropTypes.number.isRequired,
	        offset: _react2.default.PropTypes.number.isRequired,
	        limit: _react2.default.PropTypes.number.isRequired
	    })
	};

	exports.default = PaginationText;

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { 'default': obj };
	}

	var _underscore = __webpack_require__(2);

	var _underscore2 = _interopRequireDefault(_underscore);

	var RequestInterceptor = function () {
	    var interceptors = []; // [{request: function(){}, response: function(){}, responseError: function(){}}]
	    var id = 0;

	    return {
	        add: function add(interceptor) {
	            interceptor.__id = id++;
	            interceptors.push(interceptor);
	            return interceptor.__id;
	        },
	        remove: function remove(interceptorId) {
	            interceptors = _underscore2['default'].filter(interceptors, function (value) {
	                return value.__id !== interceptorId;
	            });
	        },

	        // 私有方法,谁用谁死
	        interceptor: {
	            request: function request(config) {
	                var promise = Promise.resolve(config);
	                _underscore2['default'].each(interceptors, function (value) {
	                    if (value.request) {
	                        promise = promise.then(function (_config) {
	                            // 如果request不按规范来,啥也不做. 则默认放回 config
	                            return value.request(_config) || config;
	                        });
	                    }
	                });

	                return promise;
	            },
	            response: function response(json, config) {
	                var promise = Promise.resolve(json);
	                _underscore2['default'].each(interceptors, function (value) {
	                    if (value.response) {
	                        promise = promise.then(function (json) {
	                            // 如果response不按规范来,啥也不做. 则默认放回json
	                            return value.response(json, config) || json;
	                        });
	                    }
	                });
	                return promise;
	            },
	            responseError: function responseError(reason, config) {
	                var promise = Promise.reject(reason);
	                _underscore2['default'].each(interceptors, function (value) {
	                    if (value.responseError) {
	                        promise = promise['catch'](function (reason) {
	                            // 如果responseError不按规范来,啥也不做. reason
	                            return Promise.reject(value.responseError(reason, config) || reason);
	                        });
	                    }
	                });

	                return promise;
	            }
	        }
	    };
	}();

	exports['default'] = RequestInterceptor;
	module.exports = exports['default'];

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { 'default': obj };
	}

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

	exports['default'] = format;
	module.exports = exports['default'];

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { 'default': obj };
	}

	var _underscore = __webpack_require__(2);

	var _underscore2 = _interopRequireDefault(_underscore);

	var param = function param(obj) {
	    // encodeURIComponent
	    return _underscore2['default'].map(obj, function (v, k) {
	        return [encodeURIComponent(k), '=', encodeURIComponent(v)].join('');
	    }).join('&').replace(/%20/g, "+");
	};

	exports['default'] = param;
	module.exports = exports['default'];

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactBootstrap = __webpack_require__(4);

	var _underscore = __webpack_require__(2);

	var _underscore2 = _interopRequireDefault(_underscore);

	var _classnames = __webpack_require__(3);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _flex = __webpack_require__(6);

	var _flex2 = _interopRequireDefault(_flex);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var noop = function noop() {};

	var Cascader = function (_React$Component) {
	    _inherits(Cascader, _React$Component);

	    function Cascader(props) {
	        _classCallCheck(this, Cascader);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Cascader).call(this, props));

	        _this.state = {
	            value: _this.props.value || [],
	            id: '_gm_cascader_id' + (Math.random() + '').slice(2),
	            in: false
	        };
	        return _this;
	    }

	    _createClass(Cascader, [{
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(nextProps) {
	            if ('value' in nextProps) {
	                this.setState({
	                    value: nextProps.value || []
	                });
	            }
	        }
	    }, {
	        key: 'getList',
	        value: function getList() {
	            var result = [this.props.data];
	            _underscore2.default.each(this.state.value, function (value, i) {
	                var match = _underscore2.default.find(result[i], function (v) {
	                    return v.value === value;
	                });
	                if (match) {
	                    if (match.children) {
	                        result.push(match.children);
	                    }
	                }
	            });

	            return result;
	        }
	    }, {
	        key: 'renderList',
	        value: function renderList() {
	            var _this2 = this;

	            return _react2.default.createElement(
	                _flex2.default,
	                { className: (0, _classnames2.default)("gm-cascader-list", this.props.className) },
	                _underscore2.default.map(this.getList(), function (value, i) {
	                    return _react2.default.createElement(
	                        _flex2.default,
	                        { column: true, key: i, className: 'list-group gm-block' },
	                        _underscore2.default.map(value, function (v) {
	                            return _react2.default.createElement(
	                                'a',
	                                { key: v.value,
	                                    title: v.name,
	                                    onClick: _this2.handleSelect.bind(_this2, v, i),
	                                    className: (0, _classnames2.default)("list-group-item", {
	                                        active: v.value === _this2.state.value[i]
	                                    })
	                                },
	                                v.name
	                            );
	                        })
	                    );
	                })
	            );
	        }
	    }, {
	        key: 'handleSelect',
	        value: function handleSelect(value, index) {
	            var selected = this.state.value;
	            selected[index] = value.value;
	            selected.length = index + 1;
	            this.setState({
	                selected: selected
	            });
	            this.props.onChange(selected);
	        }
	    }, {
	        key: 'renderOverlay',
	        value: function renderOverlay() {
	            return _react2.default.createElement(
	                _reactBootstrap.Popover,
	                {
	                    id: this.state.id,
	                    placement: 'bottom',
	                    className: 'gm-cascader-overlay'
	                },
	                this.renderList()
	            );
	        }
	    }, {
	        key: 'handleEnter',
	        value: function handleEnter() {
	            this.setState({
	                in: true
	            });
	        }
	    }, {
	        key: 'handleExit',
	        value: function handleExit() {
	            this.setState({
	                in: false
	            });
	        }
	    }, {
	        key: 'renderChildren',
	        value: function renderChildren() {
	            var _props = this.props;
	            var data = _props.data;
	            var valueRender = _props.valueRender;
	            var inputProps = _props.inputProps;

	            var value = [];
	            if (this.state.value.length > 0) {
	                _underscore2.default.each(this.state.value, function (v, i) {
	                    var match = _underscore2.default.find(i === 0 ? data : value[i - 1].children, function (val) {
	                        return v === val.value;
	                    });
	                    value.push(match);
	                });
	            }

	            return _react2.default.createElement(
	                'div',
	                { className: 'gm-cascader-input' },
	                _react2.default.createElement('i', { className: (0, _classnames2.default)("glyphicon glyphicon-menu-down", {
	                        "active": this.state.in
	                    }) }),
	                _react2.default.createElement('input', _extends({}, inputProps, {
	                    type: 'text',
	                    onChange: noop,
	                    value: valueRender ? valueRender(value) : _underscore2.default.map(value, function (v) {
	                        return v.name;
	                    }).join(','),
	                    className: (0, _classnames2.default)("form-control", inputProps.className) }))
	            );
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                { className: 'gm-cascader' },
	                _react2.default.createElement(
	                    _reactBootstrap.OverlayTrigger,
	                    {
	                        trigger: "click",
	                        rootClose: true,
	                        placement: 'bottom',
	                        container: this,
	                        overlay: this.renderOverlay(),
	                        onEnter: this.handleEnter.bind(this),
	                        onExit: this.handleExit.bind(this)
	                    },
	                    this.props.children ? this.props.children : this.renderChildren()
	                )
	            );
	        }
	    }]);

	    return Cascader;
	}(_react2.default.Component);

	Cascader.propTypes = {
	    // 格式 [{value: 1, name: '深圳', children: [{...}]}]
	    data: _react.PropTypes.array.isRequired,
	    // [1,2,...]
	    value: _react.PropTypes.array,
	    // 同上
	    defaultValue: _react.PropTypes.array,
	    // 会提供整个value回去
	    onChange: _react.PropTypes.func,
	    // 没有this.props.children时有效
	    inputProps: _react.PropTypes.object,

	    valueRender: _react.PropTypes.func
	};

	Cascader.defaultProps = {
	    onChange: noop,
	    inputProps: {}
	};

	exports.default = Cascader;

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _gmUtil = __webpack_require__(8);

	var _gmUtil2 = _interopRequireDefault(_gmUtil);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Droper = function (_React$Component) {
	    _inherits(Droper, _React$Component);

	    function Droper(props) {
	        _classCallCheck(this, Droper);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Droper).call(this, props));

	        _this.state = {
	            isDragActive: false,
	            isWX: _gmUtil2.default.is.weixin()
	        };
	        _this.onClick = _this.onClick.bind(_this);
	        _this.onDragEnter = _this.onDragEnter.bind(_this);
	        _this.onDragLeave = _this.onDragLeave.bind(_this);
	        _this.onDragOver = _this.onDragOver.bind(_this);
	        _this.onDrop = _this.onDrop.bind(_this);
	        return _this;
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
	                var _ret = function () {
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
	                }();

	                if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
	            }
	            return true;
	        }
	    }, {
	        key: 'allFilesAccepted',
	        value: function allFilesAccepted(files) {
	            var _this2 = this;

	            return files.every(function (file) {
	                return _this2.accept(file, _this2.props.accept);
	            });
	        }
	    }, {
	        key: 'onDragEnter',
	        value: function onDragEnter(e) {
	            e.preventDefault();

	            ++this.enterCounter;

	            var dataTransferItems = e.dataTransfer && e.dataTransfer.items ? e.dataTransfer.items : [];

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

	            var _props = this.props;
	            var multiple = _props.multiple;
	            var onDrop = _props.onDrop;
	            var onDropAccepted = _props.onDropAccepted;
	            var onDropRejected = _props.onDropRejected;


	            this.enterCounter = 0;

	            this.setState({
	                isDragActive: false,
	                isDragReject: false
	            });

	            var droppedFiles = e.dataTransfer ? e.dataTransfer.files : e.target.files;
	            var max = multiple ? droppedFiles.length : 1;
	            var files = [];

	            for (var i = 0; i < max; i++) {
	                var file = droppedFiles[i];
	                file.preview = window.URL.createObjectURL(file);
	                files.push(file);
	            }

	            if (onDrop) {
	                onDrop(files, e);
	            }

	            if (this.allFilesAccepted(files)) {
	                if (onDropAccepted) {
	                    onDropAccepted(files, e);
	                }
	            } else {
	                if (onDropRejected) {
	                    onDropRejected(files, e);
	                }
	            }
	        }
	    }, {
	        key: 'onClick',
	        value: function onClick() {
	            this.open();
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
	            var _props2 = this.props;
	            var className = _props2.className;
	            var children = _props2.children;
	            var accept = _props2.accept;
	            var multiple = _props2.multiple;

	            var cn = className ? className : 'gm-droper-default';

	            return _react2.default.createElement(
	                'div',
	                { className: 'gm-droper' },
	                _react2.default.createElement(
	                    'div',
	                    { className: cn,
	                        onClick: this.onClick,
	                        onDragEnter: this.onDragEnter,
	                        onDragOver: this.onDragOver,
	                        onDragLeave: this.onDragLeave,
	                        onDrop: this.onDrop },
	                    children
	                ),
	                this.state.isWX ? _react2.default.createElement('input', {
	                    type: 'file',
	                    ref: 'fileInput',
	                    className: 'gm-droper-input',
	                    accept: accept,
	                    onChange: this.onDrop
	                }) : _react2.default.createElement('input', {
	                    type: 'file',
	                    ref: 'fileInput',
	                    className: 'gm-droper-input',
	                    multiple: multiple,
	                    accept: accept,
	                    onChange: this.onDrop
	                })
	            );
	        }
	    }]);

	    return Droper;
	}(_react2.default.Component);

	Droper.defaultProps = {
	    multiple: false
	};

	Droper.propTypes = {
	    onDrop: _react.PropTypes.func,
	    onDropAccepted: _react.PropTypes.func,
	    onDropRejected: _react.PropTypes.func,
	    onDragEnter: _react.PropTypes.func,
	    onDragLeave: _react.PropTypes.func,

	    multiple: _react.PropTypes.bool,
	    accept: _react.PropTypes.string,

	    className: _react.PropTypes.string
	};

	exports.default = Droper;

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _moment = __webpack_require__(7);

	var _moment2 = _interopRequireDefault(_moment);

	var _underscore = __webpack_require__(2);

	var _underscore2 = _interopRequireDefault(_underscore);

	var _classnames = __webpack_require__(3);

	var _classnames2 = _interopRequireDefault(_classnames);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var TimeSpan = function (_React$Component) {
	    _inherits(TimeSpan, _React$Component);

	    function TimeSpan() {
	        _classCallCheck(this, TimeSpan);

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(TimeSpan).apply(this, arguments));
	    }

	    _createClass(TimeSpan, [{
	        key: 'getCells',
	        value: function getCells() {
	            var _props = this.props;
	            var min = _props.min;
	            var max = _props.max;
	            var span = _props.span;

	            var dMax = (0, _moment2.default)(max);
	            var d = (0, _moment2.default)(min),
	                cells = [];
	            while (d <= dMax) {
	                cells.push(d);
	                d = (0, _moment2.default)(d + span);
	            }
	            return cells;
	        }
	    }, {
	        key: 'handleSelect',
	        value: function handleSelect(value) {
	            this.props.onSelect(value.toDate());
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this2 = this;

	            var cells = this.getCells();var _props2 = this.props;
	            var selected = _props2.selected;
	            var render = _props2.render;


	            return _react2.default.createElement(
	                'div',
	                { className: 'gm-time-span' },
	                _underscore2.default.map(cells, function (value, i) {
	                    return _react2.default.createElement(
	                        'div',
	                        { key: i, className: (0, _classnames2.default)("gm-time-span-cell", {
	                                active: +value === +selected
	                            }), onClick: _this2.handleSelect.bind(_this2, value) },
	                        render(value.toDate())
	                    );
	                })
	            );
	        }
	    }]);

	    return TimeSpan;
	}(_react2.default.Component);

	TimeSpan.propTypes = {
	    min: _react2.default.PropTypes.object,
	    max: _react2.default.PropTypes.object,
	    span: _react2.default.PropTypes.number,
	    selected: _react2.default.PropTypes.object,
	    render: _react2.default.PropTypes.func,
	    onSelect: _react2.default.PropTypes.func
	};
	TimeSpan.defaultProps = {
	    min: (0, _moment2.default)().startOf('day').toDate(),
	    max: (0, _moment2.default)().endOf('day').toDate(),
	    span: 30 * 60 * 1000,
	    render: function render(value) {
	        return (0, _moment2.default)(value).format('HH:mm');
	    },
	    onSelect: function onSelect() {}
	};

	exports.default = TimeSpan;

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _underscore = __webpack_require__(2);

	var _underscore2 = _interopRequireDefault(_underscore);

	var _gmUtil = __webpack_require__(8);

	var _gmUtil2 = _interopRequireDefault(_gmUtil);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

	    var ruleStr = _underscore2.default.map(_underscore2.default.keys(ruleKeyMap), function (value) {
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
	    if (_underscore2.default.isRegExp(rule)) {
	        return ruleKeyTipMap.def;
	    }

	    var info = ruleToInfo(rule);

	    if (noRangeRuleKeys.indexOf(info.type) === -1) {
	        if (info.max) {
	            return _gmUtil2.default.format(ruleKeyTipMap.w[info.type][3], info);
	        } else if (info.cross) {
	            return _gmUtil2.default.format(ruleKeyTipMap.w[info.type][2], info);
	        } else if (info.min) {
	            return _gmUtil2.default.format(ruleKeyTipMap.w[info.type][1], info);
	        }
	        return ruleKeyTipMap.w[info.type][0];
	    }
	    return ruleKeyTipMap.w[info.type] || ruleKeyTipMap.def;
	};

	var Validate = function Validate(rule, value, tip) {
	    var result;
	    tip = tip || false;
	    if (_underscore2.default.isRegExp(rule)) {
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
	    var config = _underscore2.default.extend({
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

	exports.default = Validate;

/***/ },
/* 19 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {module.exports = __webpack_amd_options__;

	/* WEBPACK VAR INJECTION */}.call(exports, {}))

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { 'default': obj };
	}

	var _paramJs = __webpack_require__(14);

	var _paramJs2 = _interopRequireDefault(_paramJs);

	var _formatJs = __webpack_require__(13);

	var _formatJs2 = _interopRequireDefault(_formatJs);

	var _underscore = __webpack_require__(2);

	var _underscore2 = _interopRequireDefault(_underscore);

	var _RequestInterceptor = __webpack_require__(12);

	var _RequestInterceptor2 = _interopRequireDefault(_RequestInterceptor);

	var setPromiseTimeout = function setPromiseTimeout(promise, ms) {
	    if (ms === false) {
	        return promise;
	    }
	    return new Promise(function (resolve, reject) {
	        setTimeout(function () {
	            reject('request timeout');
	        }, ms);
	        promise.then(resolve, reject);
	    });
	};

	var processRequest = function processRequest(config) {
	    return _RequestInterceptor2['default'].interceptor.request(config);
	};

	var processResponse = function processResponse(promise, url, sucCode, config) {
	    var color = 'color: #8a6d3b;';

	    return setPromiseTimeout(promise, config.options.timeout).then(function (res) {
	        if (res.ok) {
	            var ct = res.headers.get('content-type');
	            // 后台可能会有登录拦截，返回登录页面
	            if (ct.indexOf('text/html') > -1) {
	                return res.text().then(function (html) {
	                    if (html.indexOf('title>登陆</title') > -1) {
	                        return Promise.reject('请登录!');
	                    }
	                    return Promise.reject('未知错误！！！！！');
	                });
	            } else {
	                return res.json();
	            }
	        }
	        return Promise.reject((0, _formatJs2['default'])('服务器错误 {status} {statusText}', res));
	    }).then(function (json) {
	        return _RequestInterceptor2['default'].interceptor.response(json, config);
	    }, function (reason) {
	        return Promise.reject(_RequestInterceptor2['default'].interceptor.responseError(reason, config));
	    }).then(function (json) {
	        if (sucCode.indexOf(json.code) > -1) {
	            return json;
	        } else {
	            console.log('%c*** Request url: %s、code: %s、msg: %s', color, url, json.code, json.msg);
	            return Promise.reject(json.msg || '未知错误');
	        }
	    })['catch'](function (reason) {
	        // reason 有点复杂，各种实现，碰到一个解决一个吧
	        if (toString.call(reason) === '[object Promise]') {
	            return reason['catch'](function (rea) {
	                console.error('%c*** Request catch %s', color, rea);
	                // reason 是个对象。目前先给字符串。吧。后续有需要在扩展
	                return Promise.reject('' + rea);
	            });
	        } else {
	            console.error('%c*** Request catch %s', color, reason);
	            // reason 是个对象。目前先给字符串。吧。后续有需要在扩展
	            return Promise.reject('' + reason);
	        }
	    });
	};

	var Request = function Request(url, options) {
	    this._data = {};
	    this.url = url;
	    this.sucCode = [0];
	    this.options = Object.assign({
	        timeout: 10000, // number or false
	        method: 'get',
	        headers: {
	            'Accept': 'application/json'
	        },
	        credentials: 'include' // 需要设置才能获取cookie
	    }, options);
	};
	Request.prototype = {
	    code: function code(codes) {
	        if (_underscore2['default'].isArray(codes)) {
	            this.sucCode = this.sucCode.concat(codes);
	        } else {
	            this.sucCode.push(codes);
	        }
	        return this;
	    },
	    timeout: function timeout(_timeout) {
	        Object.assign(this.options, {
	            timeout: _timeout
	        });
	        return this;
	    },
	    data: function data(_data) {
	        // 过滤null  undefined 只Object 类型。
	        this._data = Object.assign({}, _data);
	        if (toString.call(this._data) === '[object Object]') {
	            this._data = _underscore2['default'].pick(this._data, function (value) {
	                return value !== null && value !== undefined;
	            });
	        }
	        return this;
	    },
	    json: function json(_data) {
	        this._data = JSON.stringify(_data);
	        return this;
	    },
	    _getConfig: function _getConfig() {
	        var t = this;
	        return {
	            url: t.url,
	            data: t._data,
	            sucCode: t.sucCode,
	            options: t.options
	        };
	    },
	    _setConfig: function _setConfig(d) {
	        var t = this;
	        t.url = d.url;
	        t._data = d.data;
	        t.sucCode = d.sucCode;
	        t.options = d.options;
	    },
	    _beforeRequest: function _beforeRequest() {
	        var t = this;
	        return processRequest(t._getConfig()).then(t._setConfig.bind(t));
	    },
	    get: function get() {
	        var t = this;

	        return t._beforeRequest().then(function () {
	            var p = (0, _paramJs2['default'])(t._data);
	            var newUrl = t.url + (t.url.indexOf('?') > -1 ? '&' : '?') + p;
	            return processResponse(fetch(newUrl, t.options), t.url, t.sucCode, t._getConfig());
	        });
	    },
	    post: function post() {
	        var t = this;
	        var data = t._data;
	        var body;
	        t.options.method = 'post';

	        return t._beforeRequest().then(function () {
	            // 兼容传[json string] [formData] 的情况,暂时这两种. 其他的看情况
	            if (toString.call(data) === '[object Object]') {
	                body = new FormData();
	                for (var e in data) {
	                    body.append(e, data[e]);
	                }
	            } else {
	                body = data;
	            }
	            t.options.body = body;
	            return processResponse(fetch(t.url, t.options), t.url, t.sucCode, t._getConfig());
	        });
	    }
	};

	var RequestFactory = function RequestFactory(url, options) {
	    return new Request(url, options);
	};

	exports['default'] = RequestFactory;
	module.exports = exports['default'];

/***/ },
/* 21 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var is = {};

	is.weixin = function () {
	    return (/MicroMessenger/i.test(navigator.userAgent)
	    );
	};

	exports["default"] = is;
	module.exports = exports["default"];

/***/ },
/* 22 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	exports["default"] = function (dom) {
	    var rect = dom.getBoundingClientRect();
	    return rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth);
	};

	module.exports = exports["default"];

/***/ },
/* 23 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	exports["default"] = function (dom) {
	    var rect = dom.getBoundingClientRect();
	    return rect.bottom > 0 && rect.right > 0 && rect.left < (window.innerWidth || document.documentElement.clientWidth) && rect.top < (window.innerHeight || document.documentElement.clientHeight);
	};

	module.exports = exports["default"];

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var AdvanceSelect = _react2.default.createClass({
	    displayName: 'AdvanceSelect',

	    propTypes: {
	        list: _react2.default.PropTypes.array.isRequired, //格式[{value:"XXX",name:"XXX"}]
	        title: _react2.default.PropTypes.string, //输入框为空时默认显示的样式
	        value: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.number]),
	        inputStyleName: _react2.default.PropTypes.object, //自定义的样式
	        id: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.number // TODO id不能为数字
	        ])
	    },

	    getDefaultProps: function getDefaultProps() {
	        return {
	            onValueChange: null,
	            onFilterData: null,
	            inputClassName: 'form-control',
	            inputStyleName: {} // TODO style吧？为啥要styleName
	        };
	    },

	    getInitialState: function getInitialState() {
	        var propsData = this.processInitData();
	        return Object.assign({}, propsData, { opened: false });
	    },

	    componentDidMount: function componentDidMount() {
	        console.error('AdvanceSelect are deprecated! Replace with SearchSelect!');
	        document.addEventListener('click', this._close);
	    },

	    componentWillUnmount: function componentWillUnmount() {
	        document.removeEventListener('click', this._close);
	    },

	    componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	        this.setState({
	            list: nextProps.list,
	            selectedIndex: this.getValueAndIndex(nextProps).selectedIndex,
	            inputValue: this.getValueAndIndex(nextProps).inputValue,
	            selectedValue: this.getValueAndIndex(nextProps).selectedValue
	        });
	    },

	    processInitData: function processInitData() {
	        var self = this;
	        var p = self.props;
	        var list = p.list || [],
	            value = p.value,
	            id = p.id;
	        var selectedValue = "",
	            inputValue = "",
	            selectedIndex = 0;
	        var keys = {
	            ESC: 27,
	            TAB: 9,
	            RETURN: 13,
	            LEFT: 37,
	            UP: 38,
	            RIGHT: 39,
	            DOWN: 40,
	            ENTER: 13,
	            SHIFT: 16
	        };

	        //默认选择值
	        if (0 !== list.length) {
	            selectedValue = list[0].value;
	            inputValue = "";
	            if (value) {
	                list.forEach(function (data, index) {
	                    if (data.value === value) {
	                        selectedValue = value;
	                        selectedIndex = index;
	                        inputValue = data.name;
	                        return;
	                    }
	                });
	            }
	        }

	        return {
	            id: id,
	            list: list,
	            selectedValue: selectedValue,
	            selectedIndex: selectedIndex,
	            inputValue: inputValue,
	            keys: keys
	        };
	    },

	    getValueAndIndex: function getValueAndIndex(nextProps) {
	        var list = nextProps.list;
	        var selectedValue = "",
	            inputValue = "",
	            selectedIndex = 0;
	        if (0 !== list.length) {
	            selectedValue = list[0].value;
	            // inputValue = list[0].name;
	            if (nextProps.value) {
	                list.forEach(function (data, index) {
	                    if (data.value === nextProps.value) {
	                        selectedValue = nextProps.value;
	                        selectedIndex = index;
	                        inputValue = data.name;
	                        return;
	                    }
	                });
	            }
	        }
	        return { inputValue: inputValue, selectedIndex: selectedIndex, selectedValue: selectedValue };
	    },

	    render: function render() {
	        var _this = this;

	        var list = this.state.list,
	            selectedIndex = this.state.selectedIndex,
	            inputValue = this.state.inputValue;
	        var inputClass = "gm-input " + this.props.inputClassName;
	        var inputStyle = this.props.inputStyleName;
	        var optionList = list.map(function (data, i) {
	            return _react2.default.createElement(
	                'li',
	                { className: selectedIndex === i ? "option-item option-hover option-selected" : "option-item",
	                    value: data.value, key: data.value,
	                    onClick: _this.selectOption.bind(_this, data, i) },
	                data.name
	            );
	        });

	        return _react2.default.createElement(
	            'div',
	            { className: this.state.opened ? "gm-select gm-open" : "gm-select" },
	            _react2.default.createElement('div', { className: 'gm-arrow', onClick: this.handleArrow }),
	            _react2.default.createElement(
	                'ul',
	                { className: 'gm-dropdown' },
	                optionList
	            ),
	            _react2.default.createElement('input', { id: this.state.id, ref: 'input', type: 'text', placeholder: this.props.title,
	                className: inputClass, style: inputStyle,
	                value: inputValue,
	                onChange: this.changeInputValue, onKeyUp: this._keyup, onKeyDown: this._keydown,
	                onClick: this._open })
	        );
	    },

	    handleArrow: function handleArrow(event) {
	        if (0 === this.state.list.length) {
	            this.setState({
	                inputValue: this.props.list ? this.props.list[0].name : ""
	            });
	            this._filter("");
	        }
	        this.setState({
	            opened: !this.state.opened
	        });
	        event.nativeEvent.stopImmediatePropagation();
	    },

	    _open: function _open(event) {
	        this.refs.input.select();

	        this.setState({
	            opened: true
	        });
	        event.nativeEvent.stopImmediatePropagation();
	    },

	    _close: function _close() {
	        this.setState({
	            opened: false
	        });
	    },

	    changeInputValue: function changeInputValue() {
	        this.setState({
	            inputValue: this.refs.input.value
	        });
	    },

	    selectOption: function selectOption(data, index) {
	        var inputValue = data.name;

	        if (inputValue !== this.refs.input.value && this.props.onValueChange) {
	            this.props.onValueChange(this.state.id, data.value);
	        }

	        this.setState({
	            inputValue: inputValue,
	            selectedIndex: index,
	            selectedValue: data.value,
	            opened: false
	        });
	    },

	    _keyup: function _keyup(event) {
	        var keys = this.state.keys;
	        switch (event.which) {
	            case keys.ESC:
	                this._close();
	                break;

	            case keys.ENTER:
	            case keys.UP:
	            case keys.DOWN:
	            case keys.LEFT:
	            case keys.RIGHT:
	            case keys.TAB:
	            case keys.SHIFT:
	                break;

	            default:
	                this._filter(event.target.value);
	                break;
	        }
	    },

	    _keydown: function _keydown(event) {
	        if (this.state.opened) {
	            var keys = this.state.keys,
	                index = this.state.selectedIndex;
	            switch (event.which) {

	                case keys.UP:
	                    this._move('up', index);
	                    break;

	                case keys.DOWN:
	                    this._move('down', index);
	                    break;

	                case keys.TAB:
	                    this._enter(index);
	                    break;

	                case keys.ENTER:
	                    this._enter(index);
	                    break;

	                default:
	                    break;
	            }
	        } else {
	            this.setState({
	                opened: true
	            });
	        }
	    },

	    _enter: function _enter(index) {
	        if (this.state.list[index].name !== this.refs.input.value && this.props.onValueChange) {
	            this.props.onValueChange(this.state.id, this.state.list[index].value);
	        }
	        this.setState({
	            inputValue: this.state.list[index].name,
	            selectedIndex: index,
	            selectedValue: this.state.list[index].value,
	            opened: false
	        });
	    },

	    _move: function _move(dir, i) {

	        var index = i,
	            total = this.state.list.length;

	        switch (dir) {
	            case 'up':
	                index--;
	                index < 0 && (index = 0);
	                break;

	            case 'down':
	                index++;
	                index >= total && (index = total - 1);
	                break;
	        }

	        this.setState({
	            selectedIndex: index
	        });
	    },

	    _filter: function _filter(search) {
	        if (this.props.onFilterData) {
	            this.setState({
	                list: this.props.onFilterData(search)
	            });
	        }
	    }

	});

	exports.default = AdvanceSelect;

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _underscore = __webpack_require__(2);

	var _underscore2 = _interopRequireDefault(_underscore);

	var _cascader = __webpack_require__(15);

	var _cascader2 = _interopRequireDefault(_cascader);

	var _flex = __webpack_require__(6);

	var _flex2 = _interopRequireDefault(_flex);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var noop = function noop() {};

	var getPropsSelected = function getPropsSelected(props) {
	    if (props.multiple) {
	        if (props.selected) {
	            return props.selected;
	        } else {
	            return [];
	        }
	    } else {
	        if (props.selected) {
	            return [props.selected];
	        } else {
	            return [];
	        }
	    }
	};

	var CascaderSelect = function (_React$Component) {
	    _inherits(CascaderSelect, _React$Component);

	    function CascaderSelect(props) {
	        _classCallCheck(this, CascaderSelect);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(CascaderSelect).call(this, props));

	        _this.state = {
	            selected: getPropsSelected(props),
	            cascaderValue: []
	        };
	        return _this;
	    }

	    _createClass(CascaderSelect, [{
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(nextProps) {
	            this.setState({
	                selected: getPropsSelected(nextProps)
	            });
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this2 = this;

	            return _react2.default.createElement(
	                'div',
	                { className: 'gm-cascader-select', ref: 'cascaderSelect' },
	                _react2.default.createElement(
	                    _flex2.default,
	                    { className: 'gm-cascader-select-input' },
	                    _underscore2.default.map(this.state.selected, function (value, i) {
	                        return _react2.default.createElement(
	                            _flex2.default,
	                            { key: i, alignStart: true, className: 'selected' },
	                            _this2.props.selectedRender ? _this2.props.selectedRender(value, i) : _underscore2.default.map(value, function (v) {
	                                return v.name;
	                            }).join(','),
	                            _react2.default.createElement(
	                                'button',
	                                { type: 'button', className: 'close',
	                                    onClick: _this2.handleClose.bind(_this2, value) },
	                                '×'
	                            )
	                        );
	                    }),
	                    _react2.default.createElement(
	                        _flex2.default,
	                        { flex: true, column: true, onKeyDown: this.handleKeyDown.bind(this) },
	                        _react2.default.createElement(_cascader2.default, { data: this.props.data,
	                            value: this.state.cascaderValue,
	                            onChange: this.handleChange.bind(this) })
	                    )
	                )
	            );
	        }
	    }, {
	        key: 'handleKeyDown',
	        value: function handleKeyDown(event) {
	            if (event.key === 'Backspace') {
	                if (this.state.cascaderValue.length > 0) {
	                    this.setState({
	                        cascaderValue: []
	                    });
	                } else if (event.target.value === '') {
	                    var selected = this.state.selected;
	                    selected.pop();
	                    this.doSelect(selected);
	                }
	            }
	        }
	    }, {
	        key: 'doSelect',
	        value: function doSelect(selected) {
	            if (this.props.multiple) {
	                this.props.onSelect(selected.length === 0 ? null : selected);
	            } else {
	                this.props.onSelect(selected.length === 0 ? null : selected.pop());
	            }
	        }
	    }, {
	        key: 'uniq',
	        value: function uniq(selected) {
	            var obj = {},
	                result = [];
	            _underscore2.default.each(selected, function (value) {
	                var key = _underscore2.default.map(value, function (v) {
	                    return v.value;
	                }).join(',');
	                if (!obj[key]) {
	                    result.push(value);
	                    obj[key] = true;
	                }
	            });
	            return result;
	        }
	    }, {
	        key: 'handleChange',
	        value: function handleChange(value) {
	            var _this3 = this;

	            var result = [];
	            this.setState({
	                cascaderValue: value
	            });

	            if (value.length > 0) {
	                _underscore2.default.each(value, function (v, i) {
	                    var match = _underscore2.default.find(i === 0 ? _this3.props.data : result[i - 1].children, function (val) {
	                        return v === val.value;
	                    });
	                    result.push(match);
	                });
	            }

	            if (!result[result.length - 1].children) {
	                var n = this.state.selected.slice();
	                n.push(result);
	                // 过滤
	                n = this.uniq(n);

	                this.doSelect(n);
	                this.setState({
	                    cascaderValue: []
	                });
	                // 单选完后就不继续出浮层
	                if (!this.props.multiple) {
	                    this.refs.cascaderSelect.click();
	                }
	            }
	        }
	    }, {
	        key: 'handleClose',
	        value: function handleClose(value) {
	            var selected = _underscore2.default.filter(this.state.selected, function (v) {
	                return v !== value;
	            });
	            this.doSelect(selected);
	        }
	    }]);

	    return CascaderSelect;
	}(_react2.default.Component);

	CascaderSelect.propTypes = {
	    data: _react.PropTypes.array.isRequired,
	    selected: _react.PropTypes.array,
	    // 会提供整个value回去
	    onSelect: _react.PropTypes.func.isRequired,
	    multiple: _react.PropTypes.bool,
	    placeholder: _react.PropTypes.string,
	    selectedRender: _react.PropTypes.func
	};

	CascaderSelect.defaultProps = {
	    onSelect: noop,
	    placeholder: ''
	};

	exports.default = CascaderSelect;

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _moment = __webpack_require__(7);

	var _moment2 = _interopRequireDefault(_moment);

	var _reactBootstrap = __webpack_require__(4);

	var _calendar = __webpack_require__(9);

	var _calendar2 = _interopRequireDefault(_calendar);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var DatePicker = function (_React$Component) {
	    _inherits(DatePicker, _React$Component);

	    function DatePicker(props) {
	        _classCallCheck(this, DatePicker);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(DatePicker).call(this, props));

	        _this.state = {
	            id: '_gm_datepicker_id' + (Math.random() + '').slice(2)
	        };
	        _this.handleSelect = _this.handleSelect.bind(_this);
	        _this.handleChange = _this.handleChange.bind(_this);
	        return _this;
	    }

	    _createClass(DatePicker, [{
	        key: 'renderPopover',
	        value: function renderPopover() {
	            return _react2.default.createElement(
	                _reactBootstrap.Popover,
	                { id: this.state.id, className: 'gm-datepicker-popover' },
	                _react2.default.createElement(_calendar2.default, { selected: this.props.date, onSelect: this.handleSelect })
	            );
	        }
	    }, {
	        key: 'handleSelect',
	        value: function handleSelect(date) {
	            if (this.refs.target) {
	                this.refs.target.click();
	            } else {
	                this.props.target().click();
	            }
	            this.props.onChange(date);
	        }
	    }, {
	        key: 'handleChange',
	        value: function handleChange(event) {
	            // 只允许合法的指传递出去
	            if (/\d\d\d\d-\d\d-\d\d/.test(event.target.value)) {
	                this.props.onChange((0, _moment2.default)(event.target.value).toDate());
	            } else {
	                this.props.onChange(null);
	            }
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                { className: 'gm-datepicker' },
	                _react2.default.createElement(
	                    _reactBootstrap.OverlayTrigger,
	                    { trigger: 'click',
	                        rootClose: true,
	                        placement: 'bottom',
	                        overlay: this.renderPopover() },
	                    this.props.children ? this.props.children : _react2.default.createElement('input', { type: 'text',
	                        className: this.props.inputClassName,
	                        placeholder: this.props.placeholder,
	                        ref: 'target',
	                        value: this.props.date ? (0, _moment2.default)(this.props.date).format('YYYY-MM-DD') : '',
	                        onChange: this.handleChange })
	                )
	            );
	        }
	    }]);

	    return DatePicker;
	}(_react2.default.Component);

	DatePicker.propTypes = {
	    date: _react.PropTypes.object,
	    onChange: _react.PropTypes.func.isRequired,
	    inputClassName: _react.PropTypes.string,
	    target: _react.PropTypes.func,
	    placeholder: _react.PropTypes.string
	};

	exports.default = DatePicker;

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _moment = __webpack_require__(7);

	var _moment2 = _interopRequireDefault(_moment);

	var _reactBootstrap = __webpack_require__(4);

	var _calendar = __webpack_require__(9);

	var _calendar2 = _interopRequireDefault(_calendar);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var noop = function noop() {};

	var DateRangePicker = function (_React$Component) {
	    _inherits(DateRangePicker, _React$Component);

	    function DateRangePicker(props) {
	        _classCallCheck(this, DateRangePicker);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(DateRangePicker).call(this, props));

	        _this.state = {
	            beginId: '_gm_datepicker_id' + (Math.random() + '').slice(2),
	            endId: '_gm_datepicker_id' + (Math.random() + '').slice(2)
	        };

	        _this.handleSelect = _this.handleSelect.bind(_this);

	        return _this;
	    }

	    _createClass(DateRangePicker, [{
	        key: 'handleSelect',
	        value: function handleSelect(type, date) {
	            if (type === 'begin') {
	                this.props.onChange(date, this.props.end);
	            } else {
	                this.props.onChange(this.props.begin, date);
	            }
	            this.refs.endTarget.click();
	        }
	    }, {
	        key: 'renderPopoverBegin',
	        value: function renderPopoverBegin() {
	            return _react2.default.createElement(
	                _reactBootstrap.Popover,
	                { id: this.state.beginId, className: 'gm-datepicker-popover' },
	                _react2.default.createElement(_calendar2.default, { selected: this.props.begin, onSelect: this.handleSelect.bind(this, 'begin') })
	            );
	        }
	    }, {
	        key: 'renderPopoverEnd',
	        value: function renderPopoverEnd() {
	            return _react2.default.createElement(
	                _reactBootstrap.Popover,
	                { id: this.state.endId, className: 'gm-datepicker-popover' },
	                _react2.default.createElement(_calendar2.default, { selected: this.props.end, onSelect: this.handleSelect.bind(this, 'end') })
	            );
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                { className: 'gm-datepicker gm-daterangepicker' },
	                _react2.default.createElement(
	                    _reactBootstrap.OverlayTrigger,
	                    { trigger: 'click', rootClose: true, placement: 'bottom', overlay: this.renderPopoverBegin() },
	                    _react2.default.createElement(
	                        'div',
	                        { ref: 'beginTarget' },
	                        _react2.default.createElement('input', { type: 'text', className: this.props.inputClassName,
	                            value: (0, _moment2.default)(this.props.begin).format('YYYY-MM-DD'), onChange: noop })
	                    )
	                ),
	                _react2.default.createElement(
	                    'span',
	                    null,
	                    ' ~ '
	                ),
	                _react2.default.createElement(
	                    _reactBootstrap.OverlayTrigger,
	                    { trigger: 'click', rootClose: true, placement: 'bottom', overlay: this.renderPopoverEnd() },
	                    _react2.default.createElement(
	                        'div',
	                        { ref: 'endTarget' },
	                        _react2.default.createElement('input', { type: 'text', className: this.props.inputClassName,
	                            value: (0, _moment2.default)(this.props.end).format('YYYY-MM-DD'), onChange: noop })
	                    )
	                )
	            );
	        }
	    }]);

	    return DateRangePicker;
	}(_react2.default.Component);

	DateRangePicker.propTypes = {
	    begin: _react.PropTypes.object.isRequired,
	    end: _react.PropTypes.object.isRequired,
	    onChange: _react.PropTypes.func.isRequired,
	    inputClassName: _react.PropTypes.string,
	    target: _react.PropTypes.func
	};

	exports.default = DateRangePicker;

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(5);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _reactBootstrap = __webpack_require__(4);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var noop = function noop() {};

	// 搞的复杂了，后续要补充文档

	var dialogContainerId = '_gm_dialog_container' + (Math.random() + '').slice(2);
	var dialogContainer = document.getElementById(dialogContainerId);
	if (!dialogContainer) {
	    dialogContainer = document.createElement('div');
	    dialogContainer.className = 'gm-container-dialog';
	    dialogContainer.id = dialogContainerId;
	    document.body.appendChild(dialogContainer);
	}
	var DialogStatics = {};
	DialogStatics = {
	    alert: function alert(options) {
	        options.type = 'alert';
	        return DialogStatics.dialog(options);
	    },
	    confirm: function confirm(options) {
	        options.type = 'confirm';
	        return DialogStatics.dialog(options);
	    },
	    prompt: function prompt(options) {
	        options.type = 'prompt';
	        return DialogStatics.dialog(options);
	    },
	    dialog: function dialog(options) {
	        options = Object.assign({}, options, { bsSize: 'sm' });
	        return new Promise(function (resolve, reject) {
	            var div = document.createElement('div');
	            dialogContainer.appendChild(div);
	            var _OK = options.onOK;
	            options.onOK = function (value) {
	                resolve(value);
	                return _OK && _OK(value);
	            };
	            options.onCancel = function () {
	                return reject();
	            };
	            _reactDom2.default.render(_react2.default.createElement(Dialog, _extends({ show: true }, options)), div);
	        });
	    }
	};

	var Dialog = function (_React$Component) {
	    _inherits(Dialog, _React$Component);

	    function Dialog(props) {
	        _classCallCheck(this, Dialog);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Dialog).call(this, props));

	        _this.state = {
	            show: props.show
	        };
	        _this.handleCancel = _this.handleCancel.bind(_this);
	        _this.handleOk = _this.handleOk.bind(_this);
	        _this.handleEnter = _this.handleEnter.bind(_this);
	        return _this;
	    }

	    _createClass(Dialog, [{
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(nextProps) {
	            if ('show' in nextProps) {
	                this.setState({
	                    show: nextProps.show
	                });
	            }
	        }
	    }, {
	        key: 'handleCancel',
	        value: function handleCancel() {
	            this.props.onCancel();
	            this.setState({
	                show: false
	            });
	        }
	    }, {
	        key: 'handleOk',
	        value: function handleOk() {
	            var _this2 = this;

	            var result = this.props.onOK(this.props.type === 'prompt' ? this.refs.input.value : undefined);
	            if (result === false) {
	                return;
	            }
	            Promise.resolve(result).then(function () {
	                _this2.setState({
	                    show: false
	                });
	            });
	        }
	    }, {
	        key: 'handleEnter',
	        value: function handleEnter(event) {
	            if (event.keyCode === 13) {
	                this.handleOk();
	            }
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _props = this.props;
	            var bsSize = _props.bsSize;
	            var title = _props.title;
	            var children = _props.children;
	            var type = _props.type;
	            var promptDefaultValue = _props.promptDefaultValue;
	            var noCancel = _props.noCancel;
	            var noOK = _props.noOK;

	            var modalProps = {
	                show: this.state.show,
	                ohHide: this.handleCancel
	            };
	            if (bsSize !== 'md') {
	                modalProps.bsSize = bsSize;
	            }
	            return _react2.default.createElement(
	                _reactBootstrap.Modal,
	                modalProps,
	                _react2.default.createElement(
	                    _reactBootstrap.Modal.Header,
	                    { closeButton: true },
	                    title
	                ),
	                _react2.default.createElement(
	                    _reactBootstrap.Modal.Body,
	                    null,
	                    _react2.default.createElement(
	                        'div',
	                        null,
	                        children,
	                        type === 'prompt' && _react2.default.createElement('input', { autoFocus: true, defaultValue: promptDefaultValue, ref: 'input', type: 'text',
	                            style: { display: 'block', width: '100%' },
	                            onKeyDown: this.handleEnter })
	                    ),
	                    _react2.default.createElement('div', { className: 'gm-gap10' }),
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'text-right' },
	                        type !== 'alert' && !noCancel && _react2.default.createElement(
	                            'button',
	                            { className: 'btn btn-default', onClick: this.handleCancel },
	                            '取消'
	                        ),
	                        _react2.default.createElement('div', { className: 'gm-gap10' }),
	                        !noOK && _react2.default.createElement(
	                            'button',
	                            { className: 'btn btn-primary', onClick: this.handleOk },
	                            '确定'
	                        )
	                    )
	                )
	            );
	        }
	    }]);

	    return Dialog;
	}(_react2.default.Component);

	Object.assign(Dialog, DialogStatics);

	Dialog.propTypes = {
	    show: _react.PropTypes.bool.isRequired,
	    title: _react.PropTypes.string,
	    onCancel: _react.PropTypes.func,
	    onOK: _react.PropTypes.func,
	    bsSize: _react.PropTypes.string,
	    noCancel: _react.PropTypes.bool,
	    noOK: _react.PropTypes.bool,
	    promptDefaultValue: _react.PropTypes.string
	};
	Dialog.defaultProps = {
	    show: false,
	    title: '提示',
	    type: 'confirm',
	    onCancel: noop,
	    onOK: noop,
	    bsSize: 'md',
	    noCancel: false, // 由于涉及原因只能这样搞了，传true 来屏蔽按钮
	    noOK: false
	};

	exports.default = Dialog;

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(5);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var DropSelect = function (_React$Component) {
	    _inherits(DropSelect, _React$Component);

	    function DropSelect(props) {
	        _classCallCheck(this, DropSelect);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(DropSelect).call(this, props));

	        _this.state = {};
	        _this.documentClickHandler = _this.documentClickHandler.bind(_this);
	        return _this;
	    }

	    _createClass(DropSelect, [{
	        key: 'processData',
	        value: function processData(data) {
	            return Object.assign({
	                loading: false,
	                show: false,
	                actions: [],
	                list: [],
	                columns: []
	            }, data);
	        }
	    }, {
	        key: 'documentClickHandler',
	        value: function documentClickHandler(e) {
	            var thisDom = _reactDom2.default.findDOMNode(this.refs.selectPanel);

	            if (!thisDom.contains(e.target)) {
	                this.props.onHide();
	            }
	        }
	    }, {
	        key: 'componentWillUnmount',
	        value: function componentWillUnmount() {
	            document.removeEventListener("click", this.documentClickHandler);
	        }
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            document.addEventListener("click", this.documentClickHandler);
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var thisProps = this.props,
	                show = thisProps.show;

	            var _processData = this.processData(this.props.data);

	            var loading = _processData.loading;
	            var list = _processData.list;
	            var columns = _processData.columns;
	            var actions = _processData.actions;

	            var coolList = void 0;

	            var coolTitle = columns.map(function (col) {
	                return _react2.default.createElement(
	                    'div',
	                    { className: 'gm-ellipsis', key: col.field },
	                    col.name
	                );
	            });

	            if (loading) {
	                coolList = _react2.default.createElement(
	                    'li',
	                    { className: 'gm-dropselect-item' },
	                    _react2.default.createElement(
	                        'span',
	                        null,
	                        ' '
	                    ),
	                    _react2.default.createElement('i', { className: 'glyphicon glyphicon-refresh' })
	                );
	            } else {
	                coolList = list.map(function (rowData, rowIndex) {
	                    var row = columns.map(function (col, index) {
	                        var field = col.field,
	                            value = rowData[field];
	                        if (col.render) {
	                            var val = col.render(value, rowData, rowIndex);
	                            return _react2.default.createElement(
	                                'div',
	                                { className: 'gm-ellipsis', style: { flex: '1' }, key: index,
	                                    title: val },
	                                val
	                            );
	                        } else {
	                            return _react2.default.createElement(
	                                'div',
	                                { className: 'gm-ellipsis', key: index, title: value },
	                                value
	                            );
	                        }
	                    });
	                    var actionDom = actions.map(function (action, index) {
	                        var disabled = action.getDisabled ? action.getDisabled(rowData, rowIndex) : false;
	                        return _react2.default.createElement(
	                            'button',
	                            { className: action.className,
	                                onClick: action.onClick.bind(null, rowData),
	                                disabled: disabled,
	                                key: index },
	                            action.text
	                        );
	                    });

	                    return _react2.default.createElement(
	                        'li',
	                        { className: 'gm-dropselect-item', key: rowData.id },
	                        row,
	                        _react2.default.createElement(
	                            'div',
	                            null,
	                            actionDom
	                        )
	                    );
	                });
	            }

	            return _react2.default.createElement(
	                'div',
	                { className: thisProps.className, ref: 'selectPanel' },
	                thisProps.children,
	                _react2.default.createElement(
	                    'div',
	                    { className: 'gm-dropselect-wrap' },
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'gm-dropselect-list-wrap', style: { display: show ? 'block' : 'none' } },
	                        _react2.default.createElement(
	                            'ul',
	                            { className: 'gm-dropselect-list' },
	                            _react2.default.createElement(
	                                'li',
	                                { className: 'gm-dropselect-item gm-dropselect-title' },
	                                coolTitle,
	                                !!actions.length && _react2.default.createElement(
	                                    'div',
	                                    null,
	                                    '操作'
	                                )
	                            ),
	                            coolList
	                        )
	                    )
	                )
	            );
	        }
	    }]);

	    return DropSelect;
	}(_react2.default.Component);

	DropSelect.propTypes = {
	    show: _react2.default.PropTypes.bool,
	    loading: _react2.default.PropTypes.bool,
	    data: _react2.default.PropTypes.object
	};

	exports.default = DropSelect;

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Form = _react2.default.createClass({
	    displayName: 'Form',

	    getDefaultProps: function getDefaultProps() {
	        return {
	            onSubmit: function onSubmit() {}
	        };
	    },
	    render: function render() {
	        return _react2.default.createElement(
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

	var Input = _react2.default.createClass({
	    displayName: 'Input',

	    mixins: [FieldMixin],
	    render: function render() {
	        var field = Object.assign(this.beforeField(), {
	            value: '',
	            type: 'text'
	        }, this.props);

	        // 注意，input不能有children，否则很奇怪。
	        var props = Object.assign({}, field.props);
	        delete props.children;

	        return _react2.default.createElement(
	            'div',
	            { className: 'form-group' },
	            _react2.default.createElement(
	                'label',
	                { htmlFor: field.props.id },
	                field.label
	            ),
	            _react2.default.createElement('input', props),
	            this.props.children
	        );
	    }
	});

	var Select = _react2.default.createClass({
	    displayName: 'Select',

	    mixins: [FieldMixin],
	    render: function render() {
	        var field = Object.assign(this.beforeField(), {
	            value: '',
	            options: []
	        }, this.props);

	        var options = field.props.options.map(function (ele, i) {
	            if ((typeof ele === 'undefined' ? 'undefined' : _typeof(ele)) !== 'object') {
	                ele = {
	                    value: ele,
	                    text: ele
	                };
	            }
	            return _react2.default.createElement(
	                'option',
	                { key: i, value: ele.value },
	                ele.text
	            );
	        });

	        delete field.props.options;
	        return _react2.default.createElement(
	            'div',
	            { className: 'form-group' },
	            _react2.default.createElement(
	                'label',
	                { htmlFor: field.props.id },
	                field.label
	            ),
	            _react2.default.createElement(
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

	exports.default = Former;

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _pagination = __webpack_require__(10);

	var _pagination2 = _interopRequireDefault(_pagination);

	var _paginationText = __webpack_require__(11);

	var _paginationText2 = _interopRequireDefault(_paginationText);

	var _underscore = __webpack_require__(2);

	var _underscore2 = _interopRequireDefault(_underscore);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var GridHead = _react2.default.createClass({
	    displayName: 'GridHead',

	    render: function render() {
	        var data = this.props.data;

	        var isSelectAll = false;
	        if (data.list.length > 0) {
	            isSelectAll = _underscore2.default.filter(data.list, function (value) {
	                return value._gm_select;
	            }).length === data.list.length;
	        }

	        return _react2.default.createElement(
	            'thead',
	            null,
	            _react2.default.createElement(
	                'tr',
	                null,
	                data.enableSelect ? _react2.default.createElement(
	                    'th',
	                    { className: 'gm-grid-select' },
	                    _react2.default.createElement('input', { type: 'checkbox', checked: isSelectAll,
	                        onChange: this.onSelect })
	                ) : undefined,
	                data.columns.map(function (col, i) {
	                    return _react2.default.createElement(
	                        'th',
	                        { key: i, style: col.style },
	                        col.name
	                    );
	                }),
	                data.actions.length > 0 ? _react2.default.createElement(
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

	var Grid = _react2.default.createClass({
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
	            select: function select() {},
	            selectAll: function selectAll() {},
	            toPage: function toPage() {}
	        }, data);
	        data.actions.forEach(function (action) {
	            action.isShow = action.isShow || function () {
	                return true;
	            };
	        });

	        data.list.forEach(function (elist) {
	            elist._gm_select = elist._gm_select === undefined ? false : elist._gm_select;
	        });
	        return data;
	    },
	    componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	        this.setState({
	            data: this.processData(nextProps.data)
	        });
	    },
	    render: function render() {
	        var t = this;
	        var data = this.processData(this.props.data);
	        var actions = data.actions;
	        var batchs = data.batchs;

	        var tableBody;
	        if (data.loading) {
	            tableBody = _react2.default.createElement(
	                'tr',
	                null,
	                _react2.default.createElement(
	                    'td',
	                    { colSpan: '99', className: 'text-center' },
	                    _react2.default.createElement('i', { className: 'glyphicon glyphicon-refresh' })
	                )
	            );
	        } else if (data.list.length === 0) {
	            tableBody = _react2.default.createElement(
	                'tr',
	                null,
	                _react2.default.createElement(
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
	                        return _react2.default.createElement(
	                            'td',
	                            { key: i },
	                            col.render(elist[col.field], elist)
	                        );
	                    } else {
	                        return _react2.default.createElement(
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
	                    if (action.render) {
	                        return _react2.default.cloneElement(action.render(elist, index), {
	                            key: i
	                        });
	                    }
	                    return _react2.default.createElement(
	                        'button',
	                        { key: i, onClick: t.onActions.bind(t, elist, index, action),
	                            className: classes },
	                        action.text
	                    );
	                });

	                return _react2.default.createElement(
	                    'tr',
	                    { key: index },
	                    data.enableSelect ? _react2.default.createElement(
	                        'td',
	                        null,
	                        _react2.default.createElement('input', { type: 'checkbox', checked: elist._gm_select, onChange: t.onSelect.bind(t, index) })
	                    ) : undefined,
	                    tds,
	                    actions.length > 0 ? _react2.default.createElement(
	                        'td',
	                        null,
	                        buttons
	                    ) : undefined
	                );
	            });
	        }

	        var batchButtons = batchs.map(function (batch, i) {
	            var classes = 'btn btn-default btn-sm ' + batch.className;
	            return _react2.default.createElement(
	                'button',
	                { key: i, onClick: t.onBatchs.bind(t, batch), className: classes },
	                batch.text
	            );
	        });

	        var pagination = _react2.default.createElement(
	            'div',
	            null,
	            data.enablePagination ? _react2.default.createElement(
	                'div',
	                { className: 'pull-right' },
	                _react2.default.createElement(_pagination2.default, { data: data.pagination, toPage: t.onToPage })
	            ) : undefined,
	            data.enablePaginationText ? _react2.default.createElement(
	                'div',
	                { className: 'pull-right' },
	                _react2.default.createElement(_paginationText2.default, { data: data.pagination })
	            ) : undefined
	        );

	        return _react2.default.createElement(
	            'div',
	            { className: 'gm-grid' },
	            _react2.default.createElement(
	                'div',
	                { className: 'gm-grid-top gm-marginBottom5' },
	                data.enableSelect ? _react2.default.createElement(
	                    'div',
	                    { className: 'gm-grid-batch' },
	                    batchButtons
	                ) : undefined
	            ),
	            _react2.default.createElement(
	                'table',
	                { className: 'table table-striped table-hover table-condensed table-bordered' },
	                _react2.default.createElement(GridHead, { data: data, onSelect: t.onSelectAll }),
	                _react2.default.createElement(
	                    'tbody',
	                    null,
	                    tableBody
	                )
	            ),
	            _react2.default.createElement(
	                'div',
	                { className: 'gm-grid-foot clearfix' },
	                _react2.default.createElement('div', { className: 'pull-left gm-grid-batch' }),
	                data.pagination ? pagination : undefined
	            )
	        );
	    },
	    componentDidMount: function componentDidMount() {
	        console.error('Grid are deprecated! Replace with Sheet!');
	    },

	    onActions: function onActions(elist, index, action) {
	        action.click(elist, index);
	    },
	    onBatchs: function onBatchs(batch) {
	        var lists = this.props.data.list.filter(function (elist) {
	            return elist._gm_select;
	        });
	        if (lists.length > 0) {
	            batch.click(lists);
	        }
	    },
	    onSelect: function onSelect(index) {
	        this.props.data.select(index);
	    },
	    onSelectAll: function onSelectAll(bool) {
	        this.props.data.selectAll(bool);
	    },
	    onToPage: function onToPage(page, index) {
	        this.props.data.toPage(page, index);
	    }
	});

	exports.default = Grid;

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Hr = function (_React$Component) {
	    _inherits(Hr, _React$Component);

	    function Hr() {
	        _classCallCheck(this, Hr);

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Hr).apply(this, arguments));
	    }

	    _createClass(Hr, [{
	        key: "render",
	        value: function render() {
	            return _react2.default.createElement(
	                "div",
	                { className: "gm-divider" },
	                _react2.default.createElement(
	                    "div",
	                    { className: "gm-divider-content" },
	                    typeof this.props.children === 'string' ? _react2.default.createElement(
	                        "h4",
	                        null,
	                        this.props.children
	                    ) : this.props.children
	                )
	            );
	        }
	    }]);

	    return Hr;
	}(_react2.default.Component);

	exports.default = Hr;

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(5);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _underscore = __webpack_require__(2);

	var _underscore2 = _interopRequireDefault(_underscore);

	var _droper = __webpack_require__(16);

	var _droper2 = _interopRequireDefault(_droper);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var ImportLead = function (_React$Component) {
	    _inherits(ImportLead, _React$Component);

	    function ImportLead(props) {
	        _classCallCheck(this, ImportLead);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ImportLead).call(this, props));

	        _this.state = {
	            selectedFile: null
	        };
	        _this.handleSubmit = _this.handleSubmit.bind(_this);
	        _this.handleDrop = _this.handleDrop.bind(_this);
	        return _this;
	    }

	    _createClass(ImportLead, [{
	        key: 'render',
	        value: function render() {
	            var _this2 = this;

	            var data = _underscore2.default.extend({ columns: [], list: [] }, this.props.data);
	            var tips = this.props.tips || [];

	            var tipsMap = {};

	            var lineMap = _underscore2.default.map(data.list, function () {
	                return false;
	            });

	            _underscore2.default.each(tips, function (tip, index) {
	                tipsMap[tip.index] = tipsMap[tip.index] || {};
	                tip._index = index;
	                tipsMap[tip.index][tip.field] = tip;

	                if (!tip.modifyed) {
	                    lineMap[tip.index] = true;
	                }
	            });

	            var tableBody = data.list.map(function (eList, index) {
	                var tds = data.columns.map(function (col, i) {
	                    var tip = tipsMap[index] && tipsMap[index][col.field];
	                    return tip ? _react2.default.createElement(
	                        'td',
	                        { key: i, className: tip.modifyed ? "gm-bg-info" : "gm-bg-invalid" },
	                        _this2.props.disableEdit ? eList[col.field] : _react2.default.createElement('input', { type: 'text',
	                            value: eList[col.field],
	                            onChange: _this2.handleEdit.bind(_this2, index, col.field, tip._index) }),
	                        _react2.default.createElement(
	                            'small',
	                            { className: 'gm-import-lead-tip badge' },
	                            _react2.default.createElement(
	                                'i',
	                                null,
	                                tip.msg
	                            )
	                        )
	                    ) : _react2.default.createElement(
	                        'td',
	                        { key: i },
	                        eList[col.field]
	                    );
	                });

	                return _react2.default.createElement(
	                    'tr',
	                    { key: index },
	                    tds
	                );
	            });

	            var canSubmit = _underscore2.default.filter(tips, function (value) {
	                return value.modifyed === true;
	            }).length === tips.length;

	            var filename = this.state.selectedFile ? this.state.selectedFile.name : '';

	            var fileTempUrl = this.props.fileTempUrl;

	            return _react2.default.createElement(
	                'div',
	                { className: 'gm-import-lead' },
	                _react2.default.createElement(
	                    'div',
	                    null,
	                    _react2.default.createElement(
	                        'div',
	                        null,
	                        _react2.default.createElement(
	                            _droper2.default,
	                            { className: 'gm-droper-wrap', onDrop: this.handleDrop, accept: '.xlsx' },
	                            _react2.default.createElement(
	                                'button',
	                                { className: 'btn btn-primary btn-sm' },
	                                '上传xlsx'
	                            )
	                        ),
	                        '    ',
	                        !this.props.disableSubmit && _react2.default.createElement(
	                            'button',
	                            { disabled: !canSubmit, className: 'btn btn-primary btn-sm',
	                                onClick: this.handleSubmit },
	                            '提交'
	                        ),
	                        '    ',
	                        fileTempUrl ? _react2.default.createElement(
	                            'a',
	                            { href: fileTempUrl, target: 'blank' },
	                            '上传模板下载'
	                        ) : undefined,
	                        _react2.default.createElement(
	                            'div',
	                            null,
	                            filename
	                        )
	                    ),
	                    !this.props.unLine && _react2.default.createElement(
	                        'div',
	                        { className: 'gm-import-line clearfix' },
	                        lineMap.map(function (v, i) {
	                            return _react2.default.createElement('div', { key: i, className: v ? "tip" : "",
	                                onClick: _this2.handleLine.bind(_this2, i) });
	                        })
	                    )
	                ),
	                _react2.default.createElement(
	                    'div',
	                    { className: 'gm-import-lead-content', ref: 'content' },
	                    data ? _react2.default.createElement(
	                        'table',
	                        { className: 'table table-condensed table-bordered', ref: 'table' },
	                        _react2.default.createElement(
	                            'thead',
	                            null,
	                            _react2.default.createElement(
	                                'tr',
	                                null,
	                                data.columns.map(function (col, i) {
	                                    return _react2.default.createElement(
	                                        'th',
	                                        { key: i },
	                                        col.name
	                                    );
	                                })
	                            )
	                        ),
	                        _react2.default.createElement(
	                            'tbody',
	                            null,
	                            tableBody
	                        )
	                    ) : undefined
	                )
	            );
	        }
	    }, {
	        key: 'handleEdit',
	        value: function handleEdit(index, field, i, event) {
	            if (this.props.onEdit) {
	                this.props.onEdit(index, field, event.target.value, i);
	            }
	        }
	    }, {
	        key: 'handleSubmit',
	        value: function handleSubmit(event) {
	            event.preventDefault();
	            if (this.props.onSubmit) {
	                this.props.onSubmit();
	            }
	        }
	    }, {
	        key: 'handleLine',
	        value: function handleLine(index) {
	            var content = _reactDom2.default.findDOMNode(this.refs.content),
	                table = _reactDom2.default.findDOMNode(this.refs.table);
	            content.scrollTop = index / this.props.data.list.length * table.offsetHeight;
	        }
	    }, {
	        key: 'handleDrop',
	        value: function handleDrop(files) {
	            this.setState({
	                selectedFile: files[0]
	            });
	            if (files[0] && this.props.onDrop) {
	                this.props.onDrop(files[0]);
	            }
	        }
	    }]);

	    return ImportLead;
	}(_react2.default.Component);

	ImportLead.propTypes = {
	    data: _react.PropTypes.object,
	    tips: _react.PropTypes.array,
	    onEdit: _react.PropTypes.func,
	    fileTempUrl: _react.PropTypes.string,
	    disableEdit: _react.PropTypes.bool,
	    unLine: _react.PropTypes.bool,
	    disableSubmit: _react.PropTypes.bool
	};

	exports.default = ImportLead;

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _underscore = __webpack_require__(2);

	var _underscore2 = _interopRequireDefault(_underscore);

	var _reactBootstrap = __webpack_require__(4);

	var _classnames = __webpack_require__(3);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _flex = __webpack_require__(6);

	var _flex2 = _interopRequireDefault(_flex);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var noop = function noop() {};

	var Navigation = function (_React$Component) {
	    _inherits(Navigation, _React$Component);

	    function Navigation(props) {
	        _classCallCheck(this, Navigation);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Navigation).call(this, props));

	        _this.state = {
	            data: _this.props.data,
	            select: _this.props.select
	        };
	        return _this;
	    }

	    _createClass(Navigation, [{
	        key: 'processData',
	        value: function processData() {
	            var _this2 = this;

	            return _underscore2.default.map(this.state.data, function (value) {
	                value.open = value.open || false;
	                if (value.sub) {
	                    _underscore2.default.map(value.sub, function (val) {
	                        val.open = val.open || false;
	                        if (val.key === _this2.state.select) {
	                            value.open = true;
	                        }
	                    });
	                }
	                return value;
	            });
	        }
	    }, {
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(nextProps) {
	            this.setState({
	                select: nextProps.select
	            });
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this3 = this;

	            var data = this.processData();
	            return _react2.default.createElement(
	                'div',
	                { className: (0, _classnames2.default)("gm-navigation", this.props.className) },
	                _react2.default.createElement(
	                    'ul',
	                    { className: 'gm-navigation-level1' },
	                    _underscore2.default.map(data, function (value) {
	                        return _react2.default.createElement(
	                            'li',
	                            { key: value.key },
	                            _react2.default.createElement(
	                                _flex2.default,
	                                { alignCenter: true, className: (0, _classnames2.default)("gm-navigation-title", {
	                                        'current': _this3.state.select === value.key
	                                    }) },
	                                _react2.default.createElement(
	                                    _flex2.default,
	                                    { flex: true, onClick: _this3.handleClick.bind(_this3, value) },
	                                    value.title
	                                ),
	                                value.sub && _react2.default.createElement('span', { className: (0, _classnames2.default)("glyphicon", {
	                                        'glyphicon-menu-up': value.open,
	                                        'glyphicon-menu-down': !value.open
	                                    }) })
	                            ),
	                            value.sub ? _react2.default.createElement(
	                                _reactBootstrap.Collapse,
	                                { 'in': value.open },
	                                _react2.default.createElement(
	                                    'ul',
	                                    { className: 'gm-navigation-level2' },
	                                    _underscore2.default.map(value.sub, function (val) {
	                                        return _react2.default.createElement(
	                                            'li',
	                                            { key: val.key },
	                                            _react2.default.createElement(
	                                                'div',
	                                                {
	                                                    className: "gm-navigation-title" + _this3.getCurrentClassName(val.key),
	                                                    onClick: _this3.handleClick.bind(_this3, val) },
	                                                val.title
	                                            )
	                                        );
	                                    })
	                                )
	                            ) : undefined
	                        );
	                    })
	                )
	            );
	        }
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            console.error('Navigation are deprecated!');
	        }
	    }, {
	        key: 'handleClick',
	        value: function handleClick(value) {
	            if (value.sub) {
	                value.open = !value.open;
	                this.setState(this.state);
	            } else {
	                this.setState({
	                    select: value.key
	                });
	                this.props.onSelect(value.key);
	            }
	        }
	    }]);

	    return Navigation;
	}(_react2.default.Component);

	Navigation.defaultProps = {
	    data: [],
	    select: null,
	    onSelect: noop
	};

	exports.default = Navigation;

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(5);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var containerId = '_gm_nprogress_container' + (Math.random() + '').slice(2);
	var container = document.getElementById(containerId);
	if (!container) {
	    container = document.createElement('div');
	    container.className = 'gm-nprogress-container';
	    container.id = containerId;
	    document.body.appendChild(container);
	}

	var NProgressStatics = {
	    start: function start() {
	        _reactDom2.default.unmountComponentAtNode(container);
	        _reactDom2.default.render(_react2.default.createElement(NProgress, null), container);
	    },
	    done: function done() {
	        _reactDom2.default.render(_react2.default.createElement(NProgress, { percent: 100 }), container);
	        setTimeout(function () {
	            _reactDom2.default.unmountComponentAtNode(container);
	        }, 250);
	    }
	};

	var NProgress = function (_React$Component) {
	    _inherits(NProgress, _React$Component);

	    function NProgress(props) {
	        _classCallCheck(this, NProgress);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(NProgress).call(this, props));

	        _this.state = {
	            percent: 0
	        };
	        _this.timer = null;
	        return _this;
	    }

	    _createClass(NProgress, [{
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(nextProps) {
	            if (nextProps.percent) {
	                clearTimeout(this.timer);
	                this.setState({
	                    percent: nextProps.percent
	                });
	            }
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var percent = 100 - this.state.percent;
	            return _react2.default.createElement(
	                'div',
	                { className: 'gm-nprogress', style: { transform: "translate3d(-" + percent + "%, 0px, 0px)" } },
	                _react2.default.createElement('div', { className: 'gm-nprogress-head' })
	            );
	        }
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            this.doInc();
	        }
	    }, {
	        key: 'componentWillUnmount',
	        value: function componentWillUnmount() {
	            clearTimeout(this.timer);
	        }
	    }, {
	        key: 'doInc',
	        value: function doInc() {
	            var _this2 = this;

	            this.timer = setTimeout(function () {
	                var percent = _this2.state.percent;

	                _this2.setState({
	                    percent: percent + (100 - percent) * 0.2
	                });
	                if (percent < 90) {
	                    _this2.doInc();
	                }
	            }, 150);
	        }
	    }]);

	    return NProgress;
	}(_react2.default.Component);

	Object.assign(NProgress, NProgressStatics);

	NProgress.propTypes = {
	    percent: _react.PropTypes.number
	};

	exports.default = NProgress;

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _underscore = __webpack_require__(2);

	var _underscore2 = _interopRequireDefault(_underscore);

	var _flex = __webpack_require__(6);

	var _flex2 = _interopRequireDefault(_flex);

	var _classnames = __webpack_require__(3);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _reactBootstrap = __webpack_require__(4);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	// 略复杂了，脱离初衷，应该把单选和多选版本分开，改代码请周知

	var getPropsSelected = function getPropsSelected(props) {
	    if (props.multiple) {
	        if (props.selected) {
	            return props.selected;
	        } else {
	            return [];
	        }
	    } else {
	        if (props.selected) {
	            return [props.selected];
	        } else {
	            return [];
	        }
	    }
	};

	var SearchSelect = function (_React$Component) {
	    _inherits(SearchSelect, _React$Component);

	    function SearchSelect(props) {
	        _classCallCheck(this, SearchSelect);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(SearchSelect).call(this, props));

	        _this.timer = null;

	        _this.state = {
	            value: '',
	            in: false,
	            selected: getPropsSelected(props),
	            id: '_gm_search_select_id' + (Math.random() + '').slice(2)
	        };
	        return _this;
	    }

	    _createClass(SearchSelect, [{
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(nextProps) {
	            this.setState({
	                selected: getPropsSelected(nextProps)
	            });
	        }
	    }, {
	        key: 'renderOverlay',
	        value: function renderOverlay() {
	            var _this2 = this;

	            return _react2.default.createElement(
	                _reactBootstrap.Popover,
	                {
	                    id: this.state.id,
	                    className: 'gm-search-select-overlay' },
	                this.props.list.length > 0 ? _react2.default.createElement(
	                    'div',
	                    { className: 'list-group', style: { maxHeight: this.props.listMaxHeight } },
	                    _underscore2.default.map(this.props.list, function (value, i) {
	                        return _react2.default.createElement(
	                            'a',
	                            {
	                                key: i,
	                                className: (0, _classnames2.default)('list-group-item', _this2.props.inputClassName, {
	                                    active: _this2.state.selected.indexOf(value) > -1
	                                }),
	                                onClick: _this2.handleSelect.bind(_this2, value) },
	                            value.name,
	                            _this2.state.selected.indexOf(value) > -1 ? _react2.default.createElement('i', { className: 'glyphicon glyphicon-ok text-success pull-right' }) : undefined
	                        );
	                    })
	                ) : undefined
	            );
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this3 = this;

	            return _react2.default.createElement(
	                'div',
	                { className: (0, _classnames2.default)("gm-search-select", { "gm-search-select-empty": this.props.list.length === 0 }) },
	                _react2.default.createElement(
	                    _flex2.default,
	                    { className: 'gm-search-select-input' },
	                    this.props.multiple ? _underscore2.default.map(this.state.selected, function (value, i) {
	                        return _react2.default.createElement(
	                            _flex2.default,
	                            { key: i, alignStart: true, className: 'selected' },
	                            value.name,
	                            _react2.default.createElement(
	                                'button',
	                                { type: 'button',
	                                    className: 'close',
	                                    onClick: _this3.handleClose.bind(_this3, value) },
	                                '×'
	                            )
	                        );
	                    }) : undefined,
	                    _react2.default.createElement(
	                        _flex2.default,
	                        { flex: true },
	                        _react2.default.createElement(
	                            _reactBootstrap.OverlayTrigger,
	                            {
	                                trigger: 'click',
	                                rootClose: true,
	                                placement: 'bottom',
	                                container: this,
	                                overlay: this.renderOverlay(),
	                                onEnter: this.handleEnter.bind(this),
	                                onExit: this.handleExit.bind(this) },
	                            _react2.default.createElement('input', {
	                                ref: 'target',
	                                type: 'text',
	                                value: this.state.value,
	                                name: 'value',
	                                onChange: this.handleChange.bind(this),
	                                onKeyDown: this.handleKeyDown.bind(this),
	                                placeholder: this.props.placeholder })
	                        )
	                    )
	                )
	            );
	        }
	    }, {
	        key: 'handleEnter',
	        value: function handleEnter() {
	            this.setState({
	                in: true
	            });
	        }
	    }, {
	        key: 'handleExit',
	        value: function handleExit() {
	            this.setState({
	                in: false
	            });
	        }
	    }, {
	        key: 'handleKeyDown',
	        value: function handleKeyDown(event) {
	            if (event.key === 'Backspace') {
	                if (event.target.value === '') {
	                    var selected = this.state.selected;
	                    selected.pop();
	                    this.doSelect(selected);
	                }
	            }
	        }
	    }, {
	        key: 'handleClose',
	        value: function handleClose(value) {
	            var selected = _underscore2.default.filter(this.state.selected, function (v) {
	                return v !== value;
	            });
	            this.doSelect(selected);
	        }

	        // arr

	    }, {
	        key: 'doSelect',
	        value: function doSelect(selected) {
	            if (this.props.multiple) {
	                this.props.onSelect(selected.length === 0 ? null : selected);
	            } else {
	                this.props.onSelect(selected.length === 0 ? null : selected.pop());
	            }
	            this.props.onSearch('');
	        }
	    }, {
	        key: 'handleSelect',
	        value: function handleSelect(value, event) {
	            event.preventDefault();
	            if (event.target.className.indexOf('active') > -1) {
	                this.doSelect(_underscore2.default.filter(this.state.selected, function (v) {
	                    return v !== value;
	                }));
	            } else {
	                this.doSelect(this.state.selected.concat(value));
	            }
	            this.setState({
	                value: this.props.multiple ? '' : value.name
	            });
	            if (this.state.in) {
	                this.refs.target.click();
	            }
	        }
	    }, {
	        key: 'handleChange',
	        value: function handleChange(event) {
	            var _this4 = this;

	            clearTimeout(this.timer);
	            var value = event.target.value;
	            this.setState({
	                value: value
	            });

	            if (!this.state.in) {
	                this.refs.target.click();
	            }

	            setTimeout(function () {
	                _this4.props.onSearch(value);
	            }, this.props.delay);
	        }
	    }]);

	    return SearchSelect;
	}(_react2.default.Component);

	SearchSelect.propTypes = {
	    list: _react.PropTypes.array.isRequired,
	    selected: _react.PropTypes.any,
	    onSearch: _react.PropTypes.func.isRequired,
	    onSelect: _react.PropTypes.func.isRequired,
	    delay: _react.PropTypes.number,
	    listMaxHeight: _react.PropTypes.string,
	    multiple: _react.PropTypes.bool,
	    placeholder: _react.PropTypes.string
	};

	SearchSelect.defaultProps = {
	    value: '',
	    listMaxHeight: '250px',
	    delay: 500,
	    multiple: false,
	    placeholder: ''
	};

	exports.default = SearchSelect;

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _pagination = __webpack_require__(10);

	var _pagination2 = _interopRequireDefault(_pagination);

	var _paginationText = __webpack_require__(11);

	var _paginationText2 = _interopRequireDefault(_paginationText);

	var _underscore = __webpack_require__(2);

	var _underscore2 = _interopRequireDefault(_underscore);

	var _classnames = __webpack_require__(3);

	var _classnames2 = _interopRequireDefault(_classnames);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var SheetColumn = function (_React$Component) {
	    _inherits(SheetColumn, _React$Component);

	    function SheetColumn() {
	        _classCallCheck(this, SheetColumn);

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(SheetColumn).apply(this, arguments));
	    }

	    _createClass(SheetColumn, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement('div', null);
	        }
	    }]);

	    return SheetColumn;
	}(_react2.default.Component);

	SheetColumn.displayName = 'SheetColumn';
	SheetColumn.propTypes = {
	    field: _react.PropTypes.string.isRequired,
	    name: _react.PropTypes.string.isRequired
	};

	var SheetAction = function (_React$Component2) {
	    _inherits(SheetAction, _React$Component2);

	    function SheetAction() {
	        _classCallCheck(this, SheetAction);

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(SheetAction).apply(this, arguments));
	    }

	    _createClass(SheetAction, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                null,
	                this.props.children
	            );
	        }
	    }]);

	    return SheetAction;
	}(_react2.default.Component);

	SheetAction.displayName = 'SheetAction';

	var SheetSelect = function (_React$Component3) {
	    _inherits(SheetSelect, _React$Component3);

	    function SheetSelect() {
	        _classCallCheck(this, SheetSelect);

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(SheetSelect).apply(this, arguments));
	    }

	    _createClass(SheetSelect, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                null,
	                this.props.children
	            );
	        }
	    }]);

	    return SheetSelect;
	}(_react2.default.Component);

	SheetSelect.displayName = 'SheetSelect';
	SheetSelect.propTypes = {
	    onSelect: _react.PropTypes.func.isRequired,
	    onSelectAll: _react.PropTypes.func.isRequired
	};

	var SheetBatchAction = function (_React$Component4) {
	    _inherits(SheetBatchAction, _React$Component4);

	    function SheetBatchAction() {
	        _classCallCheck(this, SheetBatchAction);

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(SheetBatchAction).apply(this, arguments));
	    }

	    _createClass(SheetBatchAction, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                null,
	                this.props.children
	            );
	        }
	    }]);

	    return SheetBatchAction;
	}(_react2.default.Component);

	SheetBatchAction.displayName = 'SheetBatchAction';

	var Sheet = function (_React$Component5) {
	    _inherits(Sheet, _React$Component5);

	    function Sheet(props) {
	        _classCallCheck(this, Sheet);

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Sheet).call(this, props));
	    }

	    _createClass(Sheet, [{
	        key: 'render',
	        value: function render() {
	            var _this6 = this;

	            var select = false,
	                isSelectAll = false,
	                list = this.props.list || [],
	                loading = this.props.loading,
	                enableEmptyTip = this.props.enableEmptyTip;

	            if (list.length > 0) {
	                isSelectAll = _underscore2.default.filter(list, function (value) {
	                    return value._gm_select;
	                }).length === list.length;
	            }

	            var children = toString.call(this.props.children) === '[object Array]' ? this.props.children : [this.props.children];

	            var columns = [],
	                actions = false,
	                batchs = false,
	                others = [],
	                pagination = void 0,
	                paginationText = void 0;

	            _underscore2.default.each(children, function (value) {
	                if (value !== null && value !== undefined) {
	                    if (value.type.displayName === SheetColumn.displayName) {
	                        columns.push(value);
	                    } else if (value.type.displayName === SheetAction.displayName) {
	                        actions = value;
	                    } else if (value.type.displayName === SheetSelect.displayName) {
	                        select = value;
	                    } else if (value.type.displayName === SheetBatchAction.displayName) {
	                        batchs = value;
	                    } else if (value.type.displayName === _pagination2.default.displayName) {
	                        pagination = value;
	                    } else if (value.type.displayName === _paginationText2.default.displayName) {
	                        paginationText = value;
	                    } else {
	                        others.push(value);
	                    }
	                }
	            });

	            return _react2.default.createElement(
	                'div',
	                { className: (0, _classnames2.default)("gm-sheet", this.props.className) },
	                select && batchs ? _react2.default.createElement(
	                    'div',
	                    { className: 'gm-marginBottom5' },
	                    batchs.props.children
	                ) : undefined,
	                _react2.default.createElement(
	                    'table',
	                    { className: 'table table-striped table-hover table-bordered' },
	                    _react2.default.createElement(
	                        'thead',
	                        null,
	                        _react2.default.createElement(
	                            'tr',
	                            null,
	                            select ? _react2.default.createElement(
	                                'th',
	                                { className: 'gm-sheet-select' },
	                                _react2.default.createElement('input', { type: 'checkbox', checked: isSelectAll,
	                                    onChange: this.handleSelectAll.bind(this, select) })
	                            ) : undefined,
	                            _underscore2.default.map(columns, function (value, index) {
	                                var _value$props = value.props;
	                                var children = _value$props.children;
	                                var field = _value$props.field;
	                                var name = _value$props.name;

	                                var rest = _objectWithoutProperties(_value$props, ['children', 'field', 'name']);

	                                return _react2.default.createElement(
	                                    'th',
	                                    _extends({ key: index }, rest),
	                                    value.props.name
	                                );
	                            }),
	                            actions ? _react2.default.createElement(
	                                'th',
	                                null,
	                                '操作'
	                            ) : undefined
	                        )
	                    ),
	                    _react2.default.createElement(
	                        'tbody',
	                        null,
	                        loading ? _react2.default.createElement(
	                            'tr',
	                            null,
	                            _react2.default.createElement(
	                                'td',
	                                { colSpan: '99', className: 'text-center' },
	                                '加载中...'
	                            )
	                        ) : undefined,
	                        !loading && enableEmptyTip && list.length === 0 ? _react2.default.createElement(
	                            'tr',
	                            null,
	                            _react2.default.createElement(
	                                'td',
	                                { colSpan: '99', className: 'text-center' },
	                                enableEmptyTip === true ? '没有数据' : enableEmptyTip
	                            )
	                        ) : undefined,
	                        !loading ? _underscore2.default.map(list, function (value, index) {
	                            return _react2.default.createElement(
	                                'tr',
	                                { key: index },
	                                select ? _react2.default.createElement(
	                                    'td',
	                                    null,
	                                    _react2.default.createElement('input', { type: 'checkbox', checked: value._gm_select || false,
	                                        onChange: _this6.handleSelect.bind(_this6, select, index) })
	                                ) : undefined,
	                                _underscore2.default.map(columns, function (v, i) {
	                                    var _v$props = v.props;
	                                    var children = _v$props.children;
	                                    var field = _v$props.field;
	                                    var name = _v$props.name;

	                                    var rest = _objectWithoutProperties(_v$props, ['children', 'field', 'name']);

	                                    if (typeof children === 'function') {
	                                        return _react2.default.createElement(
	                                            'td',
	                                            _extends({ key: i }, rest),
	                                            children(value[field], index)
	                                        );
	                                    } else {
	                                        return _react2.default.createElement(
	                                            'td',
	                                            _extends({ key: i }, rest),
	                                            value[field]
	                                        );
	                                    }
	                                }),
	                                actions ? _react2.default.createElement(
	                                    'td',
	                                    null,
	                                    actions.props.children(value, index)
	                                ) : undefined
	                            );
	                        }) : undefined
	                    )
	                ),
	                _react2.default.createElement(
	                    'div',
	                    { className: 'clearfix' },
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'pull-right' },
	                        pagination
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'pull-right' },
	                        paginationText
	                    )
	                ),
	                others
	            );
	        }
	    }, {
	        key: 'handleSelect',
	        value: function handleSelect(select, i, event) {
	            select.props.onSelect(event.target.checked, i);
	        }
	    }, {
	        key: 'handleSelectAll',
	        value: function handleSelectAll(select, event) {
	            select.props.onSelectAll(event.target.checked);
	        }
	    }]);

	    return Sheet;
	}(_react2.default.Component);

	Sheet.propTypes = {
	    list: _react.PropTypes.array.isRequired,
	    loading: _react.PropTypes.bool,
	    enableEmptyTip: _react.PropTypes.oneOfType([_react.PropTypes.bool, _react.PropTypes.string, _react.PropTypes.element]),
	    className: _react.PropTypes.string
	};

	Sheet.defaultProps = {
	    list: [],
	    loading: false
	};

	Object.assign(Sheet, {
	    SheetColumn: SheetColumn,
	    SheetAction: SheetAction,
	    SheetSelect: SheetSelect,
	    SheetBatchAction: SheetBatchAction
	});

	exports.default = Sheet;

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _underscore = __webpack_require__(2);

	var _underscore2 = _interopRequireDefault(_underscore);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var prefix = '_react-gm_';

	var StorageStatics = {
	    set: function set(key, value) {
	        localStorage.setItem(prefix + key, JSON.stringify(value));
	    },
	    get: function get(key) {
	        var v = localStorage.getItem(prefix + key);
	        return v ? JSON.parse(v) : v;
	    },
	    remove: function remove(key) {
	        localStorage.removeItem(prefix + key);
	    },
	    clear: function clear() {
	        localStorage.clear();
	    },
	    getAll: function getAll() {
	        var result = {};
	        var key;
	        for (var i = 0; i < localStorage.length; i++) {
	            key = localStorage.key(i);
	            if (key.startsWith(prefix)) {
	                key = key.slice(prefix.length);
	                result[key] = Storage.get(key);
	            }
	        }
	        return _underscore2.default.keys(result) ? result : null;
	    }
	};

	var Storage = function (_React$Component) {
	    _inherits(Storage, _React$Component);

	    function Storage() {
	        _classCallCheck(this, Storage);

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Storage).apply(this, arguments));
	    }

	    _createClass(Storage, [{
	        key: 'save',
	        value: function save() {
	            Storage.set(this.props.name, this.props.value);
	        }
	    }, {
	        key: 'componentWillUpdate',
	        value: function componentWillUpdate() {
	            if (this.props.autoSave) {
	                this.save();
	            }
	        }
	    }, {
	        key: 'componentWillMount',
	        value: function componentWillMount() {
	            this.save();
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return null;
	        }
	    }]);

	    return Storage;
	}(_react2.default.Component);

	Object.assign(Storage, StorageStatics);

	Storage.propTypes = {
	    name: _react.PropTypes.string.isRequired,
	    value: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.object, _react.PropTypes.array]),
	    autoSave: _react.PropTypes.bool
	};
	Storage.defaultProps = {
	    useRaw: false,
	    autoSave: true
	};

	exports.default = Storage;

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(3);

	var _classnames2 = _interopRequireDefault(_classnames);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function noop() {}

	var Switch = function (_React$Component) {
	    _inherits(Switch, _React$Component);

	    function Switch(props) {
	        _classCallCheck(this, Switch);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Switch).call(this, props));

	        var checked = false;
	        if ('checked' in props) {
	            checked = !!props.checked;
	        } else {
	            checked = !!props.defaultChecked;
	        }
	        _this.state = {
	            checked: checked
	        };

	        _this.handleToggle = _this.handleToggle.bind(_this);
	        _this.handleMouseUp = _this.handleMouseUp.bind(_this);
	        return _this;
	    }

	    _createClass(Switch, [{
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(nextProps) {
	            if ('checked' in nextProps) {
	                this.setState({
	                    checked: !!nextProps.checked
	                });
	            }
	        }
	    }, {
	        key: 'setChecked',
	        value: function setChecked(checked) {
	            if (!('checked' in this.props)) {
	                this.setState({
	                    checked: checked
	                });
	            }
	            this.props.onChange(checked);
	        }
	    }, {
	        key: 'handleToggle',
	        value: function handleToggle() {
	            if (this.props.disabled) {
	                return;
	            }
	            var checked = !this.state.checked;
	            this.setChecked(checked);
	        }
	    }, {
	        key: 'handleMouseUp',
	        value: function handleMouseUp() {
	            if (this.refs.node) {
	                this.refs.node.blur();
	            }
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _props = this.props;
	            var className = _props.className;
	            var checked = _props.checked;
	            var defaultChecked = _props.defaultChecked;
	            var onChange = _props.onChange;
	            var disabled = _props.disabled;
	            var checkedChildren = _props.checkedChildren;
	            var unCheckedChildren = _props.unCheckedChildren;

	            var rest = _objectWithoutProperties(_props, ['className', 'checked', 'defaultChecked', 'onChange', 'disabled', 'checkedChildren', 'unCheckedChildren']);

	            var cn = (0, _classnames2.default)('gm-switch', this.props.className, {
	                'gm-switch-checked': this.state.checked,
	                'gm-switch-disabled': disabled
	            });
	            return _react2.default.createElement(
	                'span',
	                _extends({}, rest, {
	                    className: cn,
	                    tabIndex: '0',
	                    ref: 'node',
	                    onClick: this.handleToggle,
	                    onMouseUp: this.handleMouseUp }),
	                _react2.default.createElement(
	                    'span',
	                    { className: 'gm-switch-inner' },
	                    this.state.checked ? checkedChildren : unCheckedChildren
	                )
	            );
	        }
	    }]);

	    return Switch;
	}(_react2.default.Component);

	Switch.propTypes = {
	    checked: _react.PropTypes.bool,
	    defaultChecked: _react.PropTypes.bool,
	    disabled: _react.PropTypes.bool,
	    checkedChildren: _react.PropTypes.any,
	    unCheckedChildren: _react.PropTypes.any,
	    onChange: _react.PropTypes.func,
	    className: _react.PropTypes.string
	};
	Switch.defaultProps = {
	    checkedChildren: 'ON',
	    unCheckedChildren: 'OFF',
	    defaultChecked: false,
	    onChange: noop
	};

	module.exports = Switch;

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _moment = __webpack_require__(7);

	var _moment2 = _interopRequireDefault(_moment);

	var _reactBootstrap = __webpack_require__(4);

	var _timespan = __webpack_require__(17);

	var _timespan2 = _interopRequireDefault(_timespan);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var noop = function noop() {};

	var TimeSpanPicker = function (_React$Component) {
	    _inherits(TimeSpanPicker, _React$Component);

	    function TimeSpanPicker(props) {
	        _classCallCheck(this, TimeSpanPicker);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(TimeSpanPicker).call(this, props));

	        _this.state = {
	            id: '_gm_timespanpicker_id' + (Math.random() + '').slice(2)
	        };
	        _this.handleSelect = _this.handleSelect.bind(_this);
	        return _this;
	    }

	    _createClass(TimeSpanPicker, [{
	        key: 'renderPopover',
	        value: function renderPopover() {
	            return _react2.default.createElement(
	                _reactBootstrap.Popover,
	                { id: this.state.id,
	                    className: 'gm-time-span-picker-popover' },
	                _react2.default.createElement(_timespan2.default, { min: this.props.min,
	                    max: this.props.max,
	                    span: this.props.span,
	                    selected: this.props.date,
	                    onSelect: this.handleSelect })
	            );
	        }
	    }, {
	        key: 'handleSelect',
	        value: function handleSelect(date) {
	            if (this.refs.target) {
	                this.refs.target.click();
	            } else {
	                this.props.target().click();
	            }
	            this.props.onChange(date);
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                { className: 'gm-time-span-picker' },
	                _react2.default.createElement(
	                    _reactBootstrap.OverlayTrigger,
	                    { trigger: 'click',
	                        rootClose: true,
	                        placement: 'bottom',
	                        overlay: this.renderPopover() },
	                    this.props.children ? this.props.children : _react2.default.createElement('input', { type: 'text',
	                        className: this.props.inputClassName,
	                        ref: 'target',
	                        value: this.props.render(this.props.date),
	                        onChange: noop })
	                )
	            );
	        }
	    }]);

	    return TimeSpanPicker;
	}(_react2.default.Component);

	TimeSpanPicker.propTypes = {
	    min: _react.PropTypes.object,
	    max: _react.PropTypes.object,
	    span: _react.PropTypes.number,
	    date: _react.PropTypes.object.isRequired,
	    render: _react.PropTypes.func,
	    onChange: _react.PropTypes.func,
	    inputClassName: _react.PropTypes.string,
	    target: _react.PropTypes.func
	};

	TimeSpanPicker.defaultProps = {
	    render: function render(value) {
	        return (0, _moment2.default)(value).format('HH:mm');
	    },
	    onChange: noop
	};

	exports.default = TimeSpanPicker;

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(5);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var noop = function noop() {};

	var tipContainerId = '_gm_tips_container' + (Math.random() + '').slice(2);
	var tipsContainer = document.getElementById(tipContainerId);
	if (!tipsContainer) {
	    tipsContainer = document.createElement('div');
	    tipsContainer.className = 'gm-tips';
	    tipsContainer.id = tipContainerId;
	    document.body.appendChild(tipsContainer);
	}

	var TipStatics = {
	    tip: function tip(options) {
	        var _b_onClose = options.onClose;
	        var div = document.createElement('div');
	        div.className = 'gm-tips-cell';
	        tipsContainer.appendChild(div);

	        options.onClose = function () {
	            tipsContainer.removeChild(div);
	            if (_b_onClose) {
	                _b_onClose();
	            }
	        };
	        _reactDom2.default.render(_react2.default.createElement(TipOverlay, options), div);
	    },
	    success: function success(options) {
	        if (typeof options === 'string') {
	            options = {
	                children: options
	            };
	        }
	        options.type = 'success';
	        TipStatics.tip(options);
	    },
	    info: function info(options) {
	        if (typeof options === 'string') {
	            options = {
	                children: options
	            };
	        }
	        options.type = 'info';
	        TipStatics.tip(options);
	    },
	    warning: function warning(options) {
	        if (typeof options === 'string') {
	            options = {
	                children: options
	            };
	        }
	        options.type = 'warning';
	        TipStatics.tip(options);
	    },
	    danger: function danger(options) {
	        if (typeof options === 'string') {
	            options = {
	                children: options
	            };
	        }
	        options.type = 'danger';
	        TipStatics.tip(options);
	    }
	};

	var TipOverlay = function (_React$Component) {
	    _inherits(TipOverlay, _React$Component);

	    function TipOverlay(props) {
	        _classCallCheck(this, TipOverlay);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(TipOverlay).call(this, props));

	        _this.timer = null;
	        _this.hasClosed = false;
	        _this.handleClose = _this.handleClose.bind(_this);
	        return _this;
	    }

	    _createClass(TipOverlay, [{
	        key: 'render',
	        value: function render() {
	            var _props = this.props;
	            var title = _props.title;
	            var type = _props.type;
	            var children = _props.children;

	            return _react2.default.createElement(
	                'div',
	                { ref: 'tipOverlay', className: 'animated fadeInRight' },
	                _react2.default.createElement(
	                    Tip,
	                    { title: title,
	                        type: type,
	                        onClose: this.handleClose },
	                    children
	                )
	            );
	        }
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            var _this2 = this;

	            var time = this.props.time;

	            if (time) {
	                this.timer = setTimeout(function () {
	                    return _this2.fadeOut();
	                }, time);
	            }
	        }
	    }, {
	        key: 'componentWillUnmount',
	        value: function componentWillUnmount() {
	            clearTimeout(this.timer);
	        }
	    }, {
	        key: 'handleClose',
	        value: function handleClose() {
	            this.fadeOut();
	        }
	    }, {
	        key: 'fadeOut',
	        value: function fadeOut() {
	            if (!this.hasClosed) {
	                this.hasClosed = true;
	                this.props.onClose();
	            }
	        }
	    }]);

	    return TipOverlay;
	}(_react2.default.Component);

	TipOverlay.PropTypes = {
	    title: _react.PropTypes.string,
	    type: _react.PropTypes.string,
	    onClose: _react.PropTypes.func,
	    time: _react.PropTypes.number
	};

	TipOverlay.defaultProps = {
	    time: 3000
	};

	var Tip = function (_React$Component2) {
	    _inherits(Tip, _React$Component2);

	    function Tip(props) {
	        _classCallCheck(this, Tip);

	        var _this3 = _possibleConstructorReturn(this, Object.getPrototypeOf(Tip).call(this, props));

	        _this3.handleClose = _this3.handleClose.bind(_this3);
	        return _this3;
	    }

	    _createClass(Tip, [{
	        key: 'render',
	        value: function render() {
	            var _props2 = this.props;
	            var title = _props2.title;
	            var type = _props2.type;
	            var children = _props2.children;

	            var iconClassName = {
	                success: 'glyphicon glyphicon-ok-sign',
	                info: 'glyphicon glyphicon-info-sign',
	                warning: 'glyphicon glyphicon-exclamation-sign',
	                danger: 'glyphicon glyphicon-remove-sign'
	            };

	            return _react2.default.createElement(
	                'div',
	                { className: 'gm-tip panel panel-default' },
	                _react2.default.createElement(
	                    'button',
	                    { type: 'button', className: 'close', onClick: this.handleClose },
	                    _react2.default.createElement(
	                        'span',
	                        null,
	                        '×'
	                    )
	                ),
	                _react2.default.createElement('i', { className: "text-" + type + ' ' + iconClassName[type] }),
	                _react2.default.createElement(
	                    'div',
	                    { className: 'panel-body' },
	                    title ? _react2.default.createElement(
	                        'div',
	                        null,
	                        _react2.default.createElement(
	                            'strong',
	                            null,
	                            title
	                        )
	                    ) : undefined,
	                    children
	                )
	            );
	        }
	    }, {
	        key: 'handleClose',
	        value: function handleClose() {
	            this.props.onClose();
	        }
	    }]);

	    return Tip;
	}(_react2.default.Component);

	Tip.propTypes = {
	    title: _react.PropTypes.string,
	    type: _react.PropTypes.string,
	    onClose: _react.PropTypes.func
	};

	Tip.defaultProps = {
	    title: '',
	    type: 'info',
	    onClose: noop
	};

	Object.assign(Tip, TipStatics);

	exports.default = Tip;

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _reactDom = __webpack_require__(5);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _underscore = __webpack_require__(2);

	var _underscore2 = _interopRequireDefault(_underscore);

	var _validate = __webpack_require__(18);

	var _validate2 = _interopRequireDefault(_validate);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var className = {
	    error: 'gm-invalid'
	};

	// 因为对validate的用法没有规定，可以onChange验证，可以onBlur验证，或者其他的，需要在这里补充使用场景。
	var expectEvent = ['onChange', 'onBlur', 'onFocus'];

	var nameRule = function nameRule(list, obj) {
	    if (obj.props && obj.props.name !== undefined) {
	        var rule;
	        _underscore2.default.find(expectEvent, function (eventName) {
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
	    } else if (obj.props && obj.props.children && _underscore2.default.isArray(obj.props.children)) {
	        _underscore2.default.each(obj.props.children, function (value) {
	            nameRule(list, value);
	        });
	    } else if (obj.props && obj.props.children && _underscore2.default.isObject(obj.props.children)) {
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

	    var result = (0, _validate2.default)(rule, value, true);
	    options.tip[name] = result;

	    if (result === true) {
	        target.className = _underscore2.default.without(target.className.split(' '), className.error).join(' ');
	    } else {
	        target.className = _underscore2.default.union(target.className.split(' '), [className.error]).join(' ');
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
	            var form = _reactDom2.default.findDOMNode(formRef);

	            _underscore2.default.each(list, function (elist) {
	                doValidate(options, elist.rule, form[elist.name]);
	            });
	            t.setState({});
	            return t.validateTip().length === 0;
	        },
	        validateTip: function validateTip(name) {
	            if (name) {
	                return options.tip[name];
	            }
	            return _underscore2.default.map(_underscore2.default.filter(options.tip, function (v) {
	                return v !== true;
	            }), function (v) {
	                return v;
	            });
	        }
	    };
	};

	exports.default = ValidateMixin;

/***/ },
/* 43 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }
/******/ ])
});
;