(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("lodash"), require("moment"), require("react-dom"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "lodash", "moment", "react-dom"], factory);
	else if(typeof exports === 'object')
		exports["ReactGM"] = factory(require("react"), require("lodash"), require("moment"), require("react-dom"));
	else
		root["ReactGM"] = factory(root["react"], root["lodash"], root["moment"], root["react-dom"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_5__, __WEBPACK_EXTERNAL_MODULE_6__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 67);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

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
	} else if ("function" === 'function' && _typeof(__webpack_require__(25)) === 'object' && __webpack_require__(25)) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
			return classNames;
		}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {
		window.classNames = classNames;
	}
})();

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(2);

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

        return _possibleConstructorReturn(this, (Flex.__proto__ || Object.getPrototypeOf(Flex)).apply(this, arguments));
    }

    _createClass(Flex, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                flex = _props.flex,
                auto = _props.auto,
                none = _props.none,
                width = _props.width,
                height = _props.height,
                row = _props.row,
                column = _props.column,
                wrap = _props.wrap,
                nowrap = _props.nowrap,
                justifyStart = _props.justifyStart,
                justifyEnd = _props.justifyEnd,
                justifyCenter = _props.justifyCenter,
                justifyBetween = _props.justifyBetween,
                justifyAround = _props.justifyAround,
                alignStart = _props.alignStart,
                alignEnd = _props.alignEnd,
                alignCenter = _props.alignCenter,
                alignBaseline = _props.alignBaseline,
                alignStretch = _props.alignStretch,
                className = _props.className,
                style = _props.style,
                rest = _objectWithoutProperties(_props, ['flex', 'auto', 'none', 'width', 'height', 'row', 'column', 'wrap', 'nowrap', 'justifyStart', 'justifyEnd', 'justifyCenter', 'justifyBetween', 'justifyAround', 'alignStart', 'alignEnd', 'alignCenter', 'alignBaseline', 'alignStretch', 'className', 'style']);

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

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(6);

var _classnames = __webpack_require__(2);

var _classnames2 = _interopRequireDefault(_classnames);

var _gmUtil = __webpack_require__(7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Trigger = function (_React$Component) {
    _inherits(Trigger, _React$Component);

    function Trigger(props) {
        _classCallCheck(this, Trigger);

        var _this = _possibleConstructorReturn(this, (Trigger.__proto__ || Object.getPrototypeOf(Trigger)).call(this, props));

        _this.state = {
            active: false
        };
        _this.handleClick = _this.handleClick.bind(_this);
        _this.handleMouseEnter = _this.handleMouseEnter.bind(_this);
        _this.handleMouseLeave = _this.handleMouseLeave.bind(_this);
        _this.handleBodyClick = _this.handleBodyClick.bind(_this);

        _this.timer = null;
        _this.refPopup = null;
        return _this;
    }

    _createClass(Trigger, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            window.document.body.addEventListener('click', this.handleBodyClick);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            window.document.body.removeEventListener('click', this.handleBodyClick);
        }
    }, {
        key: 'handleBodyClick',
        value: function handleBodyClick(event) {
            var target = event.target;
            var root = (0, _reactDom.findDOMNode)(this);
            if (!(0, _gmUtil.contains)(root, target)) {
                this.setState({
                    active: false
                });
            }
        }
    }, {
        key: 'handleClick',
        value: function handleClick(event) {
            var _props = this.props,
                disabled = _props.disabled,
                children = _props.children,
                type = _props.type;
            // 优先获取props的disabled

            if (disabled === true) {
                return;
            }

            var active = true;
            if (type === 'click') {
                // 如果是点击的，点击 popup 内部不改变active
                if ((0, _gmUtil.contains)((0, _reactDom.findDOMNode)(this.refPopup), event.target)) {
                    return;
                }

                active = !this.state.active;
            }

            if (disabled === false) {
                this.setState({
                    active: active
                });
            }
            // 如果没有props disabled，判定children是否不可用状态
            if (!children.props.disabled) {
                this.setState({
                    active: active
                });
            }
        }
    }, {
        key: 'handleMouseEnter',
        value: function handleMouseEnter() {
            var _props2 = this.props,
                disabled = _props2.disabled,
                children = _props2.children;
            // 优先获取props的disabled

            if (disabled === true) {
                return;
            }

            clearTimeout(this.timer);

            if (disabled === false) {
                this.setState({
                    active: true
                });
            }

            // 如果没有props disabled，判定children是否不可用状态
            if (!children.props.disabled) {
                this.setState({
                    active: true
                });
            }
        }
    }, {
        key: 'handleMouseLeave',
        value: function handleMouseLeave() {
            var _this2 = this;

            var _props3 = this.props,
                disabled = _props3.disabled,
                children = _props3.children;
            // 优先获取props的disabled

            if (disabled === true) {
                return;
            }

            clearTimeout(this.timer);

            if (disabled === false) {
                this.timer = setTimeout(function () {
                    _this2.setState({
                        active: false
                    });
                }, 500);
            }

            // 如果没有props disabled，判定children是否不可用状态
            if (!children.props.disabled) {
                this.timer = setTimeout(function () {
                    _this2.setState({
                        active: false
                    });
                }, 500);
            }
        }

        // 添加浮层的三角标，三角标背景用border模拟，三角标的boder用box-shadow模拟

    }, {
        key: 'renderTriggerArrow',
        value: function renderTriggerArrow(showArrow, arrowBgColor, arrowBorderColor) {
            var arrowStyle = {};
            if (showArrow) {
                var _props4 = this.props,
                    right = _props4.right,
                    top = _props4.top;

                arrowStyle = {
                    'borderRightColor': arrowBgColor,
                    'borderBottomColor': arrowBgColor
                };
                if (arrowBorderColor) {
                    arrowStyle = Object.assign({}, arrowStyle, {
                        'boxShadow': '1px 1px 0px ' + arrowBorderColor
                    });
                }

                return _react2.default.createElement('div', {
                    className: (0, _classnames2.default)('gm-trigger-arrow', {
                        'gm-trigger-arrow-right': right,
                        'gm-trigger-arrow-top': top
                    }),
                    style: arrowStyle
                });
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            var _props5 = this.props,
                component = _props5.component,
                children = _props5.children,
                popup = _props5.popup,
                type = _props5.type,
                right = _props5.right,
                top = _props5.top,
                showArrow = _props5.showArrow,
                arrowBgColor = _props5.arrowBgColor,
                arrowBorderColor = _props5.arrowBorderColor;

            var child = _react2.default.Children.only(children);
            var active = this.state.active;


            var p = {};
            if (type === 'focus' || type === 'click') {
                p.onClick = (0, _gmUtil.createChainedFunction)(component.props.onClick, this.handleClick);
            } else if (type === 'hover') {
                p.onMouseEnter = (0, _gmUtil.createChainedFunction)(component.props.onMouseEnter, this.handleMouseEnter);
                p.onMouseLeave = (0, _gmUtil.createChainedFunction)(component.props.onMouseLeave, this.handleMouseLeave);
            }

            var componentProps = Object.assign({}, component.props, p);

            return _react2.default.cloneElement(component, Object.assign({}, componentProps, {
                className: (0, _classnames2.default)(component.props.className, 'gm-trigger'),
                children: [child, active ? this.renderTriggerArrow(showArrow, arrowBgColor, arrowBorderColor) : undefined, active ? _react2.default.createElement('div', {
                    key: 'popup',
                    ref: function ref(_ref) {
                        return _this3.refPopup = _ref;
                    },
                    className: (0, _classnames2.default)('gm-trigger-popup ', {
                        'gm-trigger-popup-right': right,
                        'gm-trigger-popup-top': top
                    }),
                    children: [popup]
                }) : undefined]
            }));
        }
    }]);

    return Trigger;
}(_react2.default.Component);

Trigger.propTypes = {
    type: _react.PropTypes.oneOf(['focus', 'click', 'hover']),
    component: _react.PropTypes.element.isRequired,
    popup: _react.PropTypes.element, // 有可能是无
    children: _react.PropTypes.element,
    right: _react.PropTypes.bool,
    top: _react.PropTypes.bool,
    disabled: _react.PropTypes.bool,
    showArrow: _react.PropTypes.bool, // 是否显示三角标
    arrowBgColor: _react.PropTypes.string, // 三角标的背景颜色
    arrowBorderColor: _react.PropTypes.string // 三角标的border颜色
};

Trigger.defaultProps = {
    type: 'focus',
    showArrow: false,
    arrowBgColor: '#FFF'
};

exports.default = Trigger;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_5__;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_6__;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Request = __webpack_require__(50);

var _Request2 = _interopRequireDefault(_Request);

var _RequestInterceptor = __webpack_require__(20);

var _RequestInterceptor2 = _interopRequireDefault(_RequestInterceptor);

var _param = __webpack_require__(22);

var _param2 = _interopRequireDefault(_param);

var _format = __webpack_require__(21);

var _format2 = _interopRequireDefault(_format);

var _isElementInViewport = __webpack_require__(55);

var _isElementInViewport2 = _interopRequireDefault(_isElementInViewport);

var _isElementOverViewport = __webpack_require__(56);

var _isElementOverViewport2 = _interopRequireDefault(_isElementOverViewport);

var _is = __webpack_require__(54);

var _is2 = _interopRequireDefault(_is);

var _contains = __webpack_require__(51);

var _contains2 = _interopRequireDefault(_contains);

var _createChainedFunction = __webpack_require__(52);

var _createChainedFunction2 = _interopRequireDefault(_createChainedFunction);

var _getElementPosition = __webpack_require__(53);

var _getElementPosition2 = _interopRequireDefault(_getElementPosition);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
    Request: _Request2.default,
    RequestInterceptor: _RequestInterceptor2.default,
    format: _format2.default,
    param: _param2.default,
    isElementInViewport: _isElementInViewport2.default,
    isElementOverViewport: _isElementOverViewport2.default,
    is: _is2.default,
    contains: _contains2.default,
    createChainedFunction: _createChainedFunction2.default,
    getElementPosition: _getElementPosition2.default
};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _moment = __webpack_require__(5);

var _moment2 = _interopRequireDefault(_moment);

var _classnames = __webpack_require__(2);

var _classnames2 = _interopRequireDefault(_classnames);

var _lodash = __webpack_require__(1);

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var nowMountStart = +(0, _moment2.default)().startOf('day');

var Day = function (_React$Component) {
    _inherits(Day, _React$Component);

    function Day(props) {
        _classCallCheck(this, Day);

        var _this = _possibleConstructorReturn(this, (Day.__proto__ || Object.getPrototypeOf(Day)).call(this, props));

        _this.handleClick = _this.handleClick.bind(_this);
        return _this;
    }

    _createClass(Day, [{
        key: 'handleClick',
        value: function handleClick() {
            var _props = this.props,
                disabled = _props.disabled,
                onClick = _props.onClick,
                value = _props.value;


            if (disabled) {
                return;
            }
            onClick(value);
        }
    }, {
        key: 'render',
        value: function render() {
            var _props2 = this.props,
                willSelect = _props2.willSelect,
                value = _props2.value,
                selected = _props2.selected,
                disabled = _props2.disabled;


            var cn = (0, _classnames2.default)('gm-calendar-day', {
                'gm-calendar-day-now': nowMountStart === +value.startOf('day'),
                'gm-calendar-day-old': willSelect.month() > value.month(),
                'gm-calendar-day-new': willSelect.month() < value.month(),
                'gm-calendar-day-disabled': disabled,
                'gm-calendar-active': +selected.startOf('day') === +value.startOf('day')
            });

            return _react2.default.createElement(
                'span',
                { className: cn, onClick: this.handleClick },
                value.date()
            );
        }
    }]);

    return Day;
}(_react2.default.Component);

var Calendar = function (_React$Component2) {
    _inherits(Calendar, _React$Component2);

    function Calendar(props) {
        _classCallCheck(this, Calendar);

        var _this2 = _possibleConstructorReturn(this, (Calendar.__proto__ || Object.getPrototypeOf(Calendar)).call(this, props));

        var selected = props.selected;

        _this2.state = {
            selected: selected ? selected : null, // 调用方的时间
            moment: selected ? (0, _moment2.default)(selected) : (0, _moment2.default)(), // 日历内的时间
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
                    {
                        className: 'gm-calendar-head-pre pull-left',
                        onClick: this.handleChangeMonth.bind(this, month - 1)
                    },
                    _react2.default.createElement('i', { className: 'glyphicon glyphicon-chevron-left' })
                ),
                _react2.default.createElement(
                    'span',
                    { className: 'gm-calendar-head-title' },
                    _react2.default.createElement(
                        'span',
                        {
                            className: 'gm-calendar-head-month',
                            onClick: this.handleSelectMonth
                        },
                        month + 1,
                        '\u6708'
                    ),
                    _react2.default.createElement(
                        'span',
                        null,
                        '\xA0\xA0',
                        m.year()
                    )
                ),
                _react2.default.createElement(
                    'a',
                    {
                        className: 'gm-calendar-head-next pull-right',
                        onClick: this.handleChangeMonth.bind(this, month + 1)
                    },
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
                _lodash2.default.map(this.state.weekDays, function (v, i) {
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
                    {
                        key: i,
                        className: cn,
                        onClick: this.handleChangeMonth.bind(this, i)
                    },
                    i + 1,
                    '\u6708'
                ));
            }
            return _react2.default.createElement(
                'div',
                { className: 'gm-calendar-months' },
                months
            );
        }
    }, {
        key: 'getDisabled',
        value: function getDisabled(m) {
            var _props3 = this.props,
                min = _props3.min,
                max = _props3.max,
                disabledDate = _props3.disabledDate;

            min = min ? (0, _moment2.default)(min).startOf('day') : null;
            max = max ? (0, _moment2.default)(max).startOf('day') : null;

            var disabled = false;

            if (disabledDate) {
                disabled = disabledDate(m.toDate());
            } else {
                if (min && m < min) {
                    disabled = true;
                }
                if (max && m > max) {
                    disabled = true;
                }
            }
            return disabled;
        }
    }, {
        key: 'renderContent',
        value: function renderContent() {
            var _this3 = this;

            var m = (0, _moment2.default)(this.state.moment).startOf('month').day(0).add(-1, 'day');

            return _react2.default.createElement(
                'div',
                { className: 'gm-calendar-content' },
                _lodash2.default.map(_lodash2.default.groupBy(_lodash2.default.range(42), function (v) {
                    return parseInt(v / 7);
                }), function (v, i) {
                    return _react2.default.createElement(
                        'div',
                        { key: i, className: 'gm-calendar-content-div' },
                        _lodash2.default.map(v, function (value, index) {
                            var mm = (0, _moment2.default)(m.add(1, 'day'));
                            return _react2.default.createElement(Day, {
                                key: index,
                                selected: (0, _moment2.default)(_this3.state.selected),
                                willSelect: _this3.state.moment,
                                value: mm,
                                onClick: _this3.handleSelectDay,
                                disabled: _this3.getDisabled(mm)
                            });
                        })
                    );
                })
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
                this.state.isSelectMonth ? this.renderMonth() : null
            );
        }
    }]);

    return Calendar;
}(_react2.default.Component);

Calendar.propTypes = {
    selected: _react2.default.PropTypes.object,
    onSelect: _react2.default.PropTypes.func,
    min: _react2.default.PropTypes.object,
    max: _react2.default.PropTypes.object,
    disabledDate: _react2.default.PropTypes.func
};

Calendar.defaultProps = {
    onSelect: _lodash2.default.noop
};

exports.default = Calendar;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _validator = __webpack_require__(24);

var _validator2 = _interopRequireDefault(_validator);

__webpack_require__(69);

var _type = __webpack_require__(23);

var _type2 = _interopRequireDefault(_type);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 初始化默认的规则
Object.assign(_validator2.default, {
    TYPE: _type2.default
});

exports.default = _validator2.default;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _lodash = __webpack_require__(1);

var _lodash2 = _interopRequireDefault(_lodash);

var _classnames = __webpack_require__(2);

var _classnames2 = _interopRequireDefault(_classnames);

var _flex = __webpack_require__(3);

var _flex2 = _interopRequireDefault(_flex);

var _trigger = __webpack_require__(4);

var _trigger2 = _interopRequireDefault(_trigger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Cascader = function (_React$Component) {
    _inherits(Cascader, _React$Component);

    function Cascader(props) {
        _classCallCheck(this, Cascader);

        var _this = _possibleConstructorReturn(this, (Cascader.__proto__ || Object.getPrototypeOf(Cascader)).call(this, props));

        _this.state = {
            value: _this.props.value || []
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
            _lodash2.default.each(this.state.value, function (value, i) {
                var match = _lodash2.default.find(result[i], function (v) {
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
            var _this2 = this;

            return _react2.default.createElement(
                _flex2.default,
                { className: (0, _classnames2.default)("gm-cascader-list", this.props.className) },
                _lodash2.default.map(this.getList(), function (value, i) {
                    return _react2.default.createElement(
                        _flex2.default,
                        { column: true, key: i, className: 'list-group gm-block' },
                        _lodash2.default.map(value, function (v) {
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
        key: 'renderChildren',
        value: function renderChildren() {
            var _props = this.props,
                data = _props.data,
                valueRender = _props.valueRender,
                inputProps = _props.inputProps;


            var value = [];
            if (this.state.value.length > 0) {
                _lodash2.default.each(this.state.value, function (v, i) {
                    var match = _lodash2.default.find(i === 0 ? data : value[i - 1].children, function (val) {
                        return v === val.value;
                    });
                    value.push(match);
                });
            }

            return _react2.default.createElement(
                'div',
                { className: 'gm-cascader-input' },
                _react2.default.createElement('input', _extends({}, inputProps, {
                    type: 'text',
                    onChange: _lodash2.default.noop,
                    value: valueRender ? valueRender(value) : _lodash2.default.map(value, function (v) {
                        return v.name;
                    }).join(','),
                    className: (0, _classnames2.default)("form-control", inputProps.className)
                })),
                _react2.default.createElement('i', { className: 'gm-arrow-down' })
            );
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                _trigger2.default,
                {
                    component: _react2.default.createElement('div', { className: 'gm-cascader' }),
                    popup: this.renderOverlay()
                },
                this.props.children ? this.props.children : this.renderChildren()
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
    valueRender: _react.PropTypes.func,
    children: _react.PropTypes.element
};

Cascader.defaultProps = {
    onChange: _lodash2.default.noop,
    inputProps: {}
};

exports.default = Cascader;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(2);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Collapse = function (_React$Component) {
    _inherits(Collapse, _React$Component);

    function Collapse() {
        _classCallCheck(this, Collapse);

        return _possibleConstructorReturn(this, (Collapse.__proto__ || Object.getPrototypeOf(Collapse)).apply(this, arguments));
    }

    _createClass(Collapse, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                children = _props.children,
                rest = _objectWithoutProperties(_props, ['children']);

            return _react2.default.createElement(
                'div',
                _extends({}, rest, { className: (0, _classnames2.default)('gm-collapse', this.props.className, {
                        'in': this.props.in
                    }) }),
                children
            );
        }
    }]);

    return Collapse;
}(_react2.default.Component);

Collapse.propTypes = {
    in: _react.PropTypes.bool.isRequired
};

exports.default = Collapse;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _gmUtil = __webpack_require__(7);

var _gmUtil2 = _interopRequireDefault(_gmUtil);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Dropper = function (_React$Component) {
    _inherits(Dropper, _React$Component);

    function Dropper(props) {
        _classCallCheck(this, Dropper);

        var _this = _possibleConstructorReturn(this, (Dropper.__proto__ || Object.getPrototypeOf(Dropper)).call(this, props));

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

    _createClass(Dropper, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.enterCounter = 0;
        }
    }, {
        key: 'accept',
        value: function accept(file, acceptedFiles) {
            if (file && acceptedFiles) {
                var acceptedFilesArray = acceptedFiles.split(',');
                var fileName = file.name || '';
                var mimeType = file.type || '';
                var baseMimeType = mimeType.replace(/\/.*$/, '');

                return acceptedFilesArray.some(function (type) {
                    var validType = type.trim();
                    if (validType.charAt(0) === '.') {
                        return fileName.toLowerCase().endsWith(validType.toLowerCase());
                    } else if (/\/\*$/.test(validType)) {
                        // This is something like a image/* mime type
                        return baseMimeType === validType.replace(/\/.*$/, '');
                    }
                    return mimeType === validType;
                });
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

            var _props = this.props,
                multiple = _props.multiple,
                onDrop = _props.onDrop,
                onDropAccepted = _props.onDropAccepted,
                onDropRejected = _props.onDropRejected;


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
            var _props2 = this.props,
                className = _props2.className,
                children = _props2.children,
                accept = _props2.accept,
                multiple = _props2.multiple;

            var cn = className ? className : 'gm-dropper-default';

            return _react2.default.createElement(
                'div',
                { className: 'gm-dropper' },
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
                    className: 'gm-dropper-input',
                    accept: accept,
                    onChange: this.onDrop
                }) : _react2.default.createElement('input', {
                    type: 'file',
                    ref: 'fileInput',
                    className: 'gm-dropper-input',
                    multiple: multiple,
                    accept: accept,
                    onChange: this.onDrop
                })
            );
        }
    }]);

    return Dropper;
}(_react2.default.Component);

Dropper.defaultProps = {
    multiple: false
};

Dropper.propTypes = {
    onDrop: _react.PropTypes.func,
    onDropAccepted: _react.PropTypes.func,
    onDropRejected: _react.PropTypes.func,
    onDragEnter: _react.PropTypes.func,
    onDragLeave: _react.PropTypes.func,

    multiple: _react.PropTypes.bool,
    accept: _react.PropTypes.string,

    className: _react.PropTypes.string
};

exports.default = Dropper;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TYPE = {
    MODAL: 'modal',
    TIP: 'tip'
};

var setComponentFunc = null;

var LayerRoot = function (_React$Component) {
    _inherits(LayerRoot, _React$Component);

    function LayerRoot(props) {
        _classCallCheck(this, LayerRoot);

        var _this = _possibleConstructorReturn(this, (LayerRoot.__proto__ || Object.getPrototypeOf(LayerRoot)).call(this, props));

        _this.state = {
            modal: null,
            tip: null
        };
        return _this;
    }

    _createClass(LayerRoot, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            setComponentFunc = function setComponentFunc(type, component) {
                var s = {};
                s[type] = component;
                _this2.setState(s);
            };
        }
    }, {
        key: 'componentWillUnMount',
        value: function componentWillUnMount() {
            setComponentFunc = null;
        }
    }, {
        key: 'render',
        value: function render() {
            // 有层级关系
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'div',
                    null,
                    this.state.modal
                ),
                _react2.default.createElement(
                    'div',
                    null,
                    this.state.tip
                )
            );
        }
    }]);

    return LayerRoot;
}(_react2.default.Component);

LayerRoot.setComponent = function (type, com) {
    if (setComponentFunc) {
        LayerRoot.removeComponent();
        setComponentFunc(type, com);
    } else {
        console.warn('LayerRoot is uninitialized');
    }
};

LayerRoot.removeComponent = function (type) {
    if (setComponentFunc) {
        setComponentFunc(type, undefined);
    } else {
        console.warn('LayerRoot is uninitialized');
    }
};

LayerRoot.TYPE = TYPE;

exports.default = LayerRoot;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _layout_root = __webpack_require__(13);

var _layout_root2 = _interopRequireDefault(_layout_root);

var _classnames = __webpack_require__(2);

var _classnames2 = _interopRequireDefault(_classnames);

var _lodash = __webpack_require__(1);

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Modal = function (_React$Component) {
    _inherits(Modal, _React$Component);

    function Modal(props) {
        _classCallCheck(this, Modal);

        var _this = _possibleConstructorReturn(this, (Modal.__proto__ || Object.getPrototypeOf(Modal)).call(this, props));

        _this.handleMask = _this.handleMask.bind(_this);
        _this.handleClose = _this.handleClose.bind(_this);
        _this.handleKeyDown = _this.handleKeyDown.bind(_this);
        return _this;
    }

    _createClass(Modal, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            window.document.body.addEventListener('keydown', this.handleKeyDown);
        }
    }, {
        key: 'componentWillUnMount',
        value: function componentWillUnMount() {
            window.document.body.removeEventListener('keydown', this.handleKeyDown);
        }
    }, {
        key: 'handleKeyDown',
        value: function handleKeyDown(event) {
            if (this.props.show) {
                if (event.keyCode === 27) {
                    this.props.onHide();
                }
            }
        }
    }, {
        key: 'handleMask',
        value: function handleMask(e) {
            if (!this.props.disableMaskClose && e.target.className === 'gm-modal') {
                this.props.onHide();
            }
        }
    }, {
        key: 'handleClose',
        value: function handleClose() {
            this.props.onHide();
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                show = _props.show,
                title = _props.title,
                size = _props.size,
                children = _props.children;

            if (!show) {
                return null;
            }

            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement('div', { className: 'gm-modal-mask' }),
                _react2.default.createElement(
                    'div',
                    {
                        className: 'gm-modal',
                        tabIndex: '-1',
                        onClick: this.handleMask
                    },
                    _react2.default.createElement(
                        'div',
                        { className: (0, _classnames2.default)("gm-modal-dialog", "gm-modal-" + size, {
                                in: show
                            }) },
                        _react2.default.createElement(
                            'button',
                            {
                                type: 'button',
                                className: 'close',
                                onClick: this.handleClose
                            },
                            _react2.default.createElement(
                                'span',
                                null,
                                '\xD7'
                            )
                        ),
                        title ? _react2.default.createElement(
                            'div',
                            { className: 'gm-modal-title' },
                            title
                        ) : null,
                        _react2.default.createElement(
                            'div',
                            { className: 'gm-modal-content' },
                            children
                        )
                    )
                )
            );
        }
    }]);

    return Modal;
}(_react2.default.Component);

Modal.render = function (props) {
    _layout_root2.default.setComponent(_layout_root2.default.TYPE.MODAL, _react2.default.createElement(Modal, _extends({ show: true }, props)));
};

Modal.hide = function () {
    return _layout_root2.default.setComponent(_layout_root2.default.TYPE.MODAL, null);
};

Modal.propTypes = {
    show: _react.PropTypes.bool.isRequired,
    onHide: _react.PropTypes.func,
    disableMaskClose: _react.PropTypes.bool,
    size: _react.PropTypes.string, // lg md sm
    title: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.element])
};

Modal.defaultProps = {
    onHide: _lodash2.default.noop,
    size: 'md',
    disableMaskClose: false
};

exports.default = Modal;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var WithCount = function (_React$Component) {
    _inherits(WithCount, _React$Component);

    function WithCount(props) {
        _classCallCheck(this, WithCount);

        var _this = _possibleConstructorReturn(this, (WithCount.__proto__ || Object.getPrototypeOf(WithCount)).call(this, props));

        _this.handlePage = _this.handlePage.bind(_this);
        return _this;
    }

    _createClass(WithCount, [{
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
                    { className: "pagination pagination-sm", onClick: this.handlePage },
                    _react2.default.createElement(
                        "li",
                        { className: data.index === 1 ? 'disabled' : '' },
                        _react2.default.createElement(
                            "a",
                            { href: "javascript:;", "data-page": data.index - 1 },
                            "\xAB"
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
                            "\xBB"
                        )
                    )
                )
            );
        }
    }, {
        key: "handlePage",
        value: function handlePage(event) {
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

    return WithCount;
}(_react2.default.Component);

var WithoutCount = function (_React$Component2) {
    _inherits(WithoutCount, _React$Component2);

    function WithoutCount(props) {
        _classCallCheck(this, WithoutCount);

        var _this2 = _possibleConstructorReturn(this, (WithoutCount.__proto__ || Object.getPrototypeOf(WithoutCount)).call(this, props));

        _this2.handlePage = _this2.handlePage.bind(_this2);
        return _this2;
    }

    _createClass(WithoutCount, [{
        key: "handlePage",
        value: function handlePage(action) {
            var _props = this.props,
                data = _props.data,
                toPage = _props.toPage;


            if (action === -1) {
                if (data.offset === 0) {
                    return;
                }
                toPage({
                    offset: Math.max(data.offset - data.limit, 0),
                    limit: data.limit
                });
            } else {
                toPage({
                    offset: data.offset + data.limit,
                    limit: data.limit
                });
            }
        }
    }, {
        key: "render",
        value: function render() {
            var _props2 = this.props,
                data = _props2.data,
                nextDisabled = _props2.nextDisabled;

            return _react2.default.createElement(
                "div",
                { className: "gm-pagination" },
                _react2.default.createElement(
                    "ul",
                    { className: "pagination pagination-sm" },
                    _react2.default.createElement(
                        "li",
                        { className: data.offset === 0 ? 'disabled' : '' },
                        _react2.default.createElement(
                            "a",
                            {
                                href: "javascript:;",
                                onClick: this.handlePage.bind(this, -1)
                            },
                            "\u4E0A\u4E00\u9875"
                        )
                    ),
                    _react2.default.createElement(
                        "li",
                        { className: nextDisabled ? 'disabled' : '' },
                        _react2.default.createElement(
                            "a",
                            {
                                href: "javascript:;",
                                onClick: this.handlePage.bind(this, 1)
                            },
                            "\u4E0B\u4E00\u9875"
                        )
                    )
                )
            );
        }
    }]);

    return WithoutCount;
}(_react2.default.Component);

var Pagination = function (_React$Component3) {
    _inherits(Pagination, _React$Component3);

    function Pagination() {
        _classCallCheck(this, Pagination);

        return _possibleConstructorReturn(this, (Pagination.__proto__ || Object.getPrototypeOf(Pagination)).apply(this, arguments));
    }

    _createClass(Pagination, [{
        key: "render",
        value: function render() {
            if (this.props.data.count) {
                return _react2.default.createElement(WithCount, this.props);
            } else {
                return _react2.default.createElement(WithoutCount, this.props);
            }
        }
    }]);

    return Pagination;
}(_react2.default.Component);

Pagination.displayName = 'Pagination';
Pagination.propTypes = {
    data: _react.PropTypes.shape({
        count: _react.PropTypes.number,
        offset: _react.PropTypes.number.isRequired,
        limit: _react.PropTypes.number.isRequired
    }),
    toPage: _react.PropTypes.func.isRequired,
    nextDisabled: _react.PropTypes.bool
};

exports.default = Pagination;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var WithCount = function (_React$Component) {
    _inherits(WithCount, _React$Component);

    function WithCount() {
        _classCallCheck(this, WithCount);

        return _possibleConstructorReturn(this, (WithCount.__proto__ || Object.getPrototypeOf(WithCount)).apply(this, arguments));
    }

    _createClass(WithCount, [{
        key: "render",
        value: function render() {
            var data = this.props.data;

            return _react2.default.createElement(
                "div",
                { className: "gm-pagination-text" },
                "\u663E\u793A\u7B2C ",
                data.offset + 1,
                " \u5230 ",
                Math.min(data.count, data.offset + data.limit),
                " \u884C\uFF0C\u4E00\u5171 ",
                data.count,
                " \u884C\u8BB0\u5F55"
            );
        }
    }]);

    return WithCount;
}(_react2.default.Component);

var WithoutCount = function (_React$Component2) {
    _inherits(WithoutCount, _React$Component2);

    function WithoutCount() {
        _classCallCheck(this, WithoutCount);

        return _possibleConstructorReturn(this, (WithoutCount.__proto__ || Object.getPrototypeOf(WithoutCount)).apply(this, arguments));
    }

    _createClass(WithoutCount, [{
        key: "render",
        value: function render() {
            var data = this.props.data;

            return _react2.default.createElement(
                "div",
                { className: "gm-pagination-text" },
                "\u663E\u793A\u7B2C ",
                data.offset + 1,
                " \u5230 ",
                data.offset + data.limit,
                " \u884C"
            );
        }
    }]);

    return WithoutCount;
}(_react2.default.Component);

var PaginationText = function (_React$Component3) {
    _inherits(PaginationText, _React$Component3);

    function PaginationText() {
        _classCallCheck(this, PaginationText);

        return _possibleConstructorReturn(this, (PaginationText.__proto__ || Object.getPrototypeOf(PaginationText)).apply(this, arguments));
    }

    _createClass(PaginationText, [{
        key: "render",
        value: function render() {
            if (this.props.data.count) {
                return _react2.default.createElement(WithCount, this.props);
            } else {
                return _react2.default.createElement(WithoutCount, this.props);
            }
        }
    }]);

    return PaginationText;
}(_react2.default.Component);

PaginationText.displayName = 'PaginationText';
PaginationText.propTypes = {
    data: _react2.default.PropTypes.shape({
        count: _react2.default.PropTypes.number,
        offset: _react2.default.PropTypes.number.isRequired,
        limit: _react2.default.PropTypes.number.isRequired
    })
};

exports.default = PaginationText;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _lodash = __webpack_require__(1);

var _lodash2 = _interopRequireDefault(_lodash);

var _flex = __webpack_require__(3);

var _flex2 = _interopRequireDefault(_flex);

var _classnames = __webpack_require__(2);

var _classnames2 = _interopRequireDefault(_classnames);

var _trigger = __webpack_require__(4);

var _trigger2 = _interopRequireDefault(_trigger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// 略复杂了，脱离初衷，应该把单选和多选版本分开，改代码请周知

// 在内部，this.state.selected 是个数组处理
var getPropsSelected = function getPropsSelected(props) {
    if (props.multiple) {
        if (props.selected) {
            // 此时selected是个数组
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

        var _this = _possibleConstructorReturn(this, (SearchSelect.__proto__ || Object.getPrototypeOf(SearchSelect)).call(this, props));

        _this.timer = null;

        // 单选版本才设置value
        _this.state = {
            value: props.selected && props.selected.name || '',
            selected: getPropsSelected(props),
            activeIndex: null // 键盘上下键选中的index
        };

        _this.searchSelect = null;
        _this.searchSelectList = null;
        _this.refInput = null;
        _this.______isMounted = false;

        _this.scrollTimer = null;

        _this.handleFocus = _this.handleFocus.bind(_this);
        _this.handleBlur = _this.handleBlur.bind(_this);
        _this.handleChange = _this.handleChange.bind(_this);
        _this.getListItemCount = _this.getListItemCount.bind(_this);

        console.warn('请尽量提供key（暂时无法检测key是否有传，暴力提示）');
        return _this;
    }

    _createClass(SearchSelect, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            if ('selected' in nextProps) {
                this.setState({
                    selected: getPropsSelected(nextProps)
                });
            }
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps, prevState) {
            if (this.state.activeIndex !== prevState.activeIndex && this.searchSelectList) {
                var dom = this.searchSelectList.querySelector('.list-group-item.line-selected');
                dom && dom.scrollIntoViewIfNeeded();
            }
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            this.______isMounted = true;
        }
    }, {
        key: 'doScroll',
        value: function doScroll() {
            // 滚动到选择的地方。 不知道会发生什么，尽量来做容错
            if (this.searchSelectList) {
                // 选第一个
                var activeDOM = this.searchSelectList.querySelectorAll(".list-group-item.active")[0];
                if (activeDOM) {
                    this.searchSelectList.scrollTop = activeDOM.offsetTop;
                }
            }
        }
    }, {
        key: 'handleFocus',
        value: function handleFocus(event) {
            var _this2 = this;

            event.target.select();

            this.props.onInputFocus();

            if (this.props.isScrollToSelected) {
                // focus 先触发，此时浮层未出来。等个500毫秒？
                clearTimeout(this.scrollTimer);
                this.scrollTimer = setTimeout(function () {
                    _this2.doScroll();
                }, 500);
            }
        }
    }, {
        key: 'handleBlur',
        value: function handleBlur(event) {
            var _this3 = this;

            // 慎用blur，在选择的之前会出发blur
            event.preventDefault();
            var multiple = this.props.multiple;

            // 多选不处理

            if (!multiple) {
                // 延迟下，500s应该够了。另外selected应该在此时获取，才是最新的selected
                setTimeout(function () {
                    if (!_this3.______isMounted) {
                        var selected = _this3.props.selected;

                        _this3.doChange(selected && selected.name || '');
                    }
                }, 500);
            }

            // 失去焦点，去掉选中
            this.setState({
                activeIndex: null
            });
        }
    }, {
        key: 'handleKeyDown',
        value: function handleKeyDown(size, event) {
            var keyCode = event.keyCode;

            var activeIndex = this.state.activeIndex;

            if (keyCode !== 38 && keyCode !== 40) {
                if (event.key === 'Backspace') {
                    if (event.target.value === '') {
                        var selected = this.state.selected;
                        selected.pop();
                        this.doSelect(selected);
                    }
                } else if (keyCode === 13) {
                    // 键盘 回车
                    var dom = this.searchSelectList.querySelector('.list-group-item.line-selected');
                    if (dom) {
                        dom.click();
                        !this.props.multiple && this.refInput.blur();
                    }
                }

                return;
            }

            if (keyCode === 38) {
                // 键盘 上键
                if (activeIndex === null) activeIndex = size;

                activeIndex--;
            } else if (keyCode === 40) {
                // 键盘 下键
                if (activeIndex === null) activeIndex = -1;

                activeIndex++;
            }

            this.setState({
                activeIndex: (size + activeIndex) % size
            });
        }
    }, {
        key: 'handleItemMouseEnter',
        value: function handleItemMouseEnter(activeIndex) {
            this.setState({
                activeIndex: activeIndex
            });
        }
    }, {
        key: 'handleClose',
        value: function handleClose(value) {
            var selected = _lodash2.default.filter(this.state.selected, function (v) {
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
            var _this4 = this;

            event.preventDefault();
            if (this.state.selected.indexOf(value) > -1) {
                this.doSelect(_lodash2.default.filter(this.state.selected, function (v) {
                    return v !== value;
                }));
            } else {
                this.doSelect(this.state.selected.concat(value));
            }
            this.setState({
                value: this.props.multiple ? '' : value.name
            });
            // 单选选后关闭
            if (!this.props.multiple) {
                // 要异步
                setTimeout(function () {
                    if (!_this4.______isMounted) {
                        _this4.searchSelect.click();
                    }
                }, 0);
            }
        }
    }, {
        key: 'doChange',
        value: function doChange(value) {
            var _this5 = this;

            clearTimeout(this.timer);
            this.setState({
                value: value
            });

            // 多选不处理
            if (!this.props.multiple && !value) {
                this.doSelect([]);
            }

            this.timer = setTimeout(function () {
                if (!_this5.______isMounted) {
                    _this5.props.onSearch(value);
                }
            }, this.props.delay);
        }
    }, {
        key: 'handleChange',
        value: function handleChange(event) {
            this.doChange(event.target.value);
        }
    }, {
        key: 'getListItemCount',
        value: function getListItemCount() {
            var _props = this.props,
                list = _props.list,
                isGroupList = _props.isGroupList;


            if (isGroupList) return _lodash2.default.reduce(list, function (count, group) {
                return count + group.children.length;
            }, 0);

            return list.length;
        }
    }, {
        key: 'renderOverlay',
        value: function renderOverlay() {
            var _this6 = this;

            var _props2 = this.props,
                list = _props2.list,
                listMaxHeight = _props2.listMaxHeight,
                inputClassName = _props2.inputClassName,
                isGroupList = _props2.isGroupList;


            if (isGroupList) {
                // 不存在group数据
                if (list.length === 0) {
                    return null;
                }
                // 不存在其中一个group有数据
                if (!_lodash2.default.find(list, function (value) {
                    return (value.children || []).length > 0;
                })) {
                    return null;
                }

                var itemSequence = -1;

                return _react2.default.createElement(
                    'div',
                    {
                        className: 'list-group',
                        style: { maxHeight: listMaxHeight },
                        ref: function ref(_ref) {
                            return _this6.searchSelectList = _ref;
                        }
                    },
                    _lodash2.default.map(list, function (groupList, i) {
                        return _react2.default.createElement(
                            'div',
                            { key: i, className: 'list-group-label' },
                            _react2.default.createElement(
                                'div',
                                { className: 'list-group-label-item' },
                                groupList.label
                            ),
                            _lodash2.default.map(groupList.children, function (value, i) {
                                itemSequence++;

                                return _react2.default.createElement(
                                    _flex2.default,
                                    {
                                        key: i,
                                        alignCenter: true,
                                        className: (0, _classnames2.default)('list-group-item', inputClassName, {
                                            'active': _this6.state.selected.indexOf(value) > -1,
                                            'line-selected': _this6.state.activeIndex === itemSequence
                                        }),
                                        onClick: _this6.handleSelect.bind(_this6, value),
                                        onMouseEnter: _this6.handleItemMouseEnter.bind(_this6, itemSequence)
                                    },
                                    _react2.default.createElement(
                                        _flex2.default,
                                        { flex: true },
                                        value.name
                                    )
                                );
                            })
                        );
                    })
                );
            } else {
                if (list.length === 0) {
                    return null;
                }
                return _react2.default.createElement(
                    'div',
                    {
                        className: 'list-group gm-search-select-list',
                        style: { maxHeight: listMaxHeight },
                        ref: function ref(_ref2) {
                            return _this6.searchSelectList = _ref2;
                        }
                    },
                    _lodash2.default.map(list, function (value, i) {
                        return _react2.default.createElement(
                            _flex2.default,
                            {
                                key: i,
                                alignCenter: true,
                                className: (0, _classnames2.default)('list-group-item', inputClassName, {
                                    'active': _this6.state.selected.indexOf(value) > -1,
                                    'line-selected': _this6.state.activeIndex === i
                                }),
                                onClick: _this6.handleSelect.bind(_this6, value),
                                onMouseEnter: _this6.handleItemMouseEnter.bind(_this6, i)
                            },
                            value.name
                        );
                    })
                );
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this7 = this;

            return _react2.default.createElement(
                'div',
                {
                    ref: function ref(_ref4) {
                        return _this7.searchSelect = _ref4;
                    },
                    className: (0, _classnames2.default)("gm-search-select", this.props.className, {
                        "gm-search-select-disabled": this.props.disabled
                    })
                },
                _react2.default.createElement(
                    _flex2.default,
                    { wrap: true, className: 'gm-search-select-input' },
                    this.props.multiple ? _lodash2.default.map(this.state.selected, function (value, i) {
                        return _react2.default.createElement(
                            _flex2.default,
                            { key: i, alignStart: true, className: 'selected' },
                            value.name,
                            _react2.default.createElement(
                                'button',
                                {
                                    disabled: _this7.props.disabled,
                                    type: 'button',
                                    className: 'close',
                                    onClick: _this7.handleClose.bind(_this7, value)
                                },
                                '\xD7'
                            )
                        );
                    }) : undefined,
                    _react2.default.createElement(
                        _trigger2.default,
                        {
                            component: _react2.default.createElement(_flex2.default, { flex: true }),
                            popup: this.renderOverlay()
                        },
                        _react2.default.createElement('input', {
                            disabled: this.props.disabled,
                            ref: function ref(_ref3) {
                                return _this7.refInput = _ref3;
                            },
                            type: 'text',
                            value: this.state.value,
                            onFocus: this.handleFocus,
                            onBlur: this.handleBlur,
                            onChange: this.handleChange,
                            onKeyDown: this.handleKeyDown.bind(this, this.getListItemCount()),
                            placeholder: this.props.placeholder
                        })
                    ),
                    _react2.default.createElement('i', { className: 'gm-arrow-down' })
                )
            );
        }
    }]);

    return SearchSelect;
}(_react2.default.Component);

SearchSelect.propTypes = {
    disabled: _react.PropTypes.bool,
    list: _react.PropTypes.array.isRequired,
    isGroupList: _react.PropTypes.bool,
    selected: _react.PropTypes.any,
    onSearch: _react.PropTypes.func.isRequired,
    onSelect: _react.PropTypes.func.isRequired,
    delay: _react.PropTypes.number,
    listMaxHeight: _react.PropTypes.string,
    multiple: _react.PropTypes.bool,
    placeholder: _react.PropTypes.string,
    isScrollToSelected: _react.PropTypes.bool,
    onInputFocus: _react.PropTypes.func
};

SearchSelect.defaultProps = {
    disabled: false,
    isGroupList: false,
    listMaxHeight: '250px',
    delay: 500,
    multiple: false,
    placeholder: '',
    onInputFocus: function onInputFocus() {}
};

exports.default = SearchSelect;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _select = __webpack_require__(65);

var _select2 = _interopRequireDefault(_select);

var _option = __webpack_require__(64);

var _option2 = _interopRequireDefault(_option);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

Object.assign(_select2.default, {
    Option: _option2.default
});

exports.default = _select2.default;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _moment = __webpack_require__(5);

var _moment2 = _interopRequireDefault(_moment);

var _lodash = __webpack_require__(1);

var _lodash2 = _interopRequireDefault(_lodash);

var _classnames = __webpack_require__(2);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TimeSpan = function (_React$Component) {
    _inherits(TimeSpan, _React$Component);

    function TimeSpan() {
        _classCallCheck(this, TimeSpan);

        return _possibleConstructorReturn(this, (TimeSpan.__proto__ || Object.getPrototypeOf(TimeSpan)).apply(this, arguments));
    }

    _createClass(TimeSpan, [{
        key: 'getCells',
        value: function getCells() {
            var _props = this.props,
                min = _props.min,
                max = _props.max,
                span = _props.span;

            var dMax = max ? (0, _moment2.default)(max) : (0, _moment2.default)().endOf('day');
            var d = min ? (0, _moment2.default)(min) : (0, _moment2.default)().startOf('day'),
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

            var cells = this.getCells(),
                _props2 = this.props,
                selected = _props2.selected,
                render = _props2.render;

            return _react2.default.createElement(
                'div',
                { className: 'gm-time-span' },
                _lodash2.default.map(cells, function (value, i) {
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

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _lodash = __webpack_require__(1);

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
            interceptors = _lodash2.default.filter(interceptors, function (value) {
                return value.__id !== interceptorId;
            });
        },

        // 私有方法,谁用谁死
        interceptor: {
            request: function request(config) {
                var promise = Promise.resolve(config);
                _lodash2.default.each(interceptors, function (value) {
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
                _lodash2.default.each(interceptors, function (value) {
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
                _lodash2.default.each(interceptors, function (value) {
                    if (value.responseError) {
                        promise = promise.catch(function (reason) {
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

exports.default = RequestInterceptor;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _lodash = __webpack_require__(1);

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var format = function format(str, data) {
    var result = str;
    if (arguments.length < 2) {
        return result;
    }

    result = result.replace(/\{([\d\w\.]+)\}/g, function (key) {
        var keys = arguments[1].split('.');
        var r = null;
        _lodash2.default.each(keys, function (value, index) {
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

exports.default = format;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _lodash = __webpack_require__(1);

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var param = function param(obj) {
    // encodeURIComponent
    return _lodash2.default.map(obj, function (v, k) {
        return [encodeURIComponent(k), '=', encodeURIComponent(v)].join('');
    }).join('&').replace(/%20/g, "+");
};

exports.default = param;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var TYPE = {
    required: 'required',
    email: 'email',
    url: 'url',
    number: 'number',
    number_or_letter: 'number_or_letter'
};

exports.default = TYPE;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _lodash = __webpack_require__(1);

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ruleMap = {};

var hasValue = function hasValue(value) {
    return !(value === '' || value === null || value === undefined);
};

var Validator = {
    // type 类型名，全局唯一
    // rules [{help, required, validate}] 其中help必填
    register: function register(type, rules) {
        if (ruleMap[type]) {
            console.warn('you has register the type ' + type + ', will be overwritten!');
        }

        if (_lodash2.default.filter(rules, function (r) {
            return !r.help;
        }).length !== 0) {
            console.warn('missing help in rules');
            return;
        }

        ruleMap[type] = {
            type: type,
            rules: rules
        };
    },
    validate: function validate(type, value) {
        if (!ruleMap[type]) {
            console.warn('can not find validator of ' + type);
            return '';
        }

        var rules = ruleMap[type].rules;
        var help = '';

        // 用find不用遍历整个rules
        _lodash2.default.find(rules, function (rule) {
            if (rule.required && !hasValue(value)) {
                help = rule.help;
                return true;
            }

            if (!hasValue(value)) {
                return true;
            }

            if (rule.validate) {
                var rt = rule.validate(value, rule);
                if (!rt) {
                    help = rule.help;
                    return true;
                }
            }
        });

        return help;
    },
    create: function create(types, value, nextValidate) {
        types = _lodash2.default.isArray(types) ? types : [types];
        return function (before) {
            var help = '';

            if (before) {
                help = before(value);
                if (help) {
                    return help;
                }
            }

            _lodash2.default.find(types, function (type) {
                var rt = Validator.validate(type, value);
                if (rt) {
                    help = rt;
                    return true;
                }
            });

            if (!help && nextValidate) {
                help = nextValidate(value);
            }

            return help;
        };
    }
};

exports.default = Validator;

/***/ }),
/* 25 */
/***/ (function(module, exports) {

/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {/* globals __webpack_amd_options__ */
module.exports = __webpack_amd_options__;

/* WEBPACK VAR INJECTION */}.call(exports, {}))

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _lodash = __webpack_require__(1);

var _lodash2 = _interopRequireDefault(_lodash);

var _cascader = __webpack_require__(10);

var _cascader2 = _interopRequireDefault(_cascader);

var _flex = __webpack_require__(3);

var _flex2 = _interopRequireDefault(_flex);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// TODO 后续考虑拆开单选，多选。 耦合起来太蛋疼。

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

        var _this = _possibleConstructorReturn(this, (CascaderSelect.__proto__ || Object.getPrototypeOf(CascaderSelect)).call(this, props));

        _this.state = {
            selected: getPropsSelected(props),
            cascaderValue: []
        };

        _this.refCascaderSelect = null;
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
            _lodash2.default.each(selected, function (value) {
                var key = _lodash2.default.map(value, function (v) {
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
            var _this2 = this;

            var result = [];
            this.setState({
                cascaderValue: value
            });

            if (value.length > 0) {
                _lodash2.default.each(value, function (v, i) {
                    var match = _lodash2.default.find(i === 0 ? _this2.props.data : result[i - 1].children, function (val) {
                        return v === val.value;
                    });
                    result.push(match);
                });
            }

            // 知道没有children才认为选择了
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
                    this.refCascaderSelect.click();
                }
            }
        }
    }, {
        key: 'handleClose',
        value: function handleClose(value) {
            var selected = _lodash2.default.filter(this.state.selected, function (v) {
                return v !== value;
            });
            this.doSelect(selected);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            return _react2.default.createElement(
                'div',
                { className: 'gm-cascader-select', ref: function ref(_ref) {
                        return _this3.refCascaderSelect = _ref;
                    } },
                _react2.default.createElement(
                    _flex2.default,
                    { className: 'gm-cascader-select-input' },
                    _lodash2.default.map(this.state.selected, function (value, i) {
                        return _react2.default.createElement(
                            _flex2.default,
                            { key: i, alignStart: true, className: 'selected' },
                            _this3.props.selectedRender ? _this3.props.selectedRender(value, i) : _lodash2.default.map(value, function (v) {
                                return v.name;
                            }).join(','),
                            _react2.default.createElement(
                                'button',
                                {
                                    type: 'button',
                                    className: 'close',
                                    onClick: _this3.handleClose.bind(_this3, value)
                                },
                                '\xD7'
                            )
                        );
                    }),
                    _react2.default.createElement(
                        _flex2.default,
                        { flex: true, column: true, onKeyDown: this.handleKeyDown.bind(this) },
                        _react2.default.createElement(_cascader2.default, {
                            data: this.props.data,
                            value: this.state.cascaderValue,
                            onChange: this.handleChange.bind(this)
                        })
                    )
                )
            );
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
    selectedRender: _react.PropTypes.func
};

exports.default = CascaderSelect;

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _checkbox = __webpack_require__(57);

var _checkbox2 = _interopRequireDefault(_checkbox);

var _checkbox_group = __webpack_require__(58);

var _checkbox_group2 = _interopRequireDefault(_checkbox_group);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

Object.assign(_checkbox2.default, {
    CheckboxGroup: _checkbox_group2.default
});

exports.default = _checkbox2.default;

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _moment = __webpack_require__(5);

var _moment2 = _interopRequireDefault(_moment);

var _calendar = __webpack_require__(8);

var _calendar2 = _interopRequireDefault(_calendar);

var _classnames = __webpack_require__(2);

var _classnames2 = _interopRequireDefault(_classnames);

var _trigger = __webpack_require__(4);

var _trigger2 = _interopRequireDefault(_trigger);

var _lodash = __webpack_require__(1);

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DatePicker = function (_React$Component) {
    _inherits(DatePicker, _React$Component);

    function DatePicker(props) {
        _classCallCheck(this, DatePicker);

        var _this = _possibleConstructorReturn(this, (DatePicker.__proto__ || Object.getPrototypeOf(DatePicker)).call(this, props));

        _this.datepicker = null;
        _this.handleSelect = _this.handleSelect.bind(_this);
        return _this;
    }

    _createClass(DatePicker, [{
        key: 'handleSelect',
        value: function handleSelect(date) {
            var _this2 = this;

            this.props.onChange(date);
            setTimeout(function () {
                _this2.datepicker.click();
            }, 0);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            var _props = this.props,
                date = _props.date,
                min = _props.min,
                max = _props.max,
                disabledDate = _props.disabledDate,
                className = _props.className,
                children = _props.children,
                inputClassName = _props.inputClassName,
                placeholder = _props.placeholder,
                disabled = _props.disabled;


            var popup = _react2.default.createElement(_calendar2.default, {
                selected: date,
                onSelect: this.handleSelect,
                min: min,
                max: max,
                disabledDate: disabledDate
            });

            return _react2.default.createElement(
                'div',
                {
                    ref: function ref(_ref) {
                        return _this3.datepicker = _ref;
                    },
                    className: (0, _classnames2.default)("gm-datepicker", className)
                },
                _react2.default.createElement(
                    _trigger2.default,
                    { component: _react2.default.createElement('div', null), popup: popup },
                    children ? children : _react2.default.createElement('input', {
                        type: 'text',
                        className: inputClassName,
                        placeholder: placeholder,
                        disabled: disabled,
                        value: date ? (0, _moment2.default)(date).format('YYYY-MM-DD') : '',
                        onChange: _lodash2.default.noop
                    })
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
    placeholder: _react.PropTypes.string,
    disabled: _react.PropTypes.bool,
    className: _react.PropTypes.string,

    min: _react2.default.PropTypes.object,
    max: _react2.default.PropTypes.object,
    disabledDate: _react2.default.PropTypes.func
};

exports.default = DatePicker;

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _moment = __webpack_require__(5);

var _moment2 = _interopRequireDefault(_moment);

var _calendar = __webpack_require__(8);

var _calendar2 = _interopRequireDefault(_calendar);

var _classnames = __webpack_require__(2);

var _classnames2 = _interopRequireDefault(_classnames);

var _trigger = __webpack_require__(4);

var _trigger2 = _interopRequireDefault(_trigger);

var _lodash = __webpack_require__(1);

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DateRangePicker = function (_React$Component) {
    _inherits(DateRangePicker, _React$Component);

    function DateRangePicker(props) {
        _classCallCheck(this, DateRangePicker);

        var _this = _possibleConstructorReturn(this, (DateRangePicker.__proto__ || Object.getPrototypeOf(DateRangePicker)).call(this, props));

        _this.refDateRangePicker = null;
        _this.refEndTarget = null;
        _this.handleSelectBegin = _this.handleSelectBegin.bind(_this);
        _this.handleSelectEnd = _this.handleSelectEnd.bind(_this);
        return _this;
    }

    _createClass(DateRangePicker, [{
        key: 'handleSelectBegin',
        value: function handleSelectBegin(date) {
            var _this2 = this;

            this.props.onChange(date, this.props.end);
            setTimeout(function () {
                _this2.refEndTarget.click();
            }, 0);
        }
    }, {
        key: 'handleSelectEnd',
        value: function handleSelectEnd(date) {
            var _this3 = this;

            this.props.onChange(this.props.begin, date);
            setTimeout(function () {
                _this3.refDateRangePicker.click();
            }, 0);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this4 = this;

            var _props = this.props,
                begin = _props.begin,
                end = _props.end,
                beginLabel = _props.beginLabel,
                endLabel = _props.endLabel,
                beginProps = _props.beginProps,
                endProps = _props.endProps,
                inputClassName = _props.inputClassName,
                disabled = _props.disabled,
                beginRenderInputValue = _props.beginRenderInputValue,
                endRenderInputValue = _props.endRenderInputValue;


            return _react2.default.createElement(
                'div',
                {
                    ref: function ref(_ref2) {
                        return _this4.refDateRangePicker = _ref2;
                    },
                    className: (0, _classnames2.default)("gm-datepicker gm-daterangepicker", this.props.className)
                },
                beginLabel && _react2.default.createElement(
                    'span',
                    { className: 'gm-padding-right-5' },
                    beginLabel
                ),
                _react2.default.createElement(
                    _trigger2.default,
                    {
                        component: _react2.default.createElement('div', { className: 'gm-inline-block' }),
                        popup: _react2.default.createElement(_calendar2.default, _extends({
                            selected: begin,
                            onSelect: this.handleSelectBegin
                        }, beginProps))
                    },
                    _react2.default.createElement('input', {
                        type: 'text',
                        className: inputClassName,
                        disabled: disabled,
                        value: begin ? beginRenderInputValue ? beginRenderInputValue(begin) : (0, _moment2.default)(begin).format('YYYY-MM-DD') : '',
                        onChange: _lodash2.default.noop
                    })
                ),
                !endLabel && _react2.default.createElement(
                    'span',
                    null,
                    ' ~ '
                ),
                endLabel && _react2.default.createElement(
                    'span',
                    { className: 'gm-padding-lr-5' },
                    endLabel
                ),
                _react2.default.createElement(
                    _trigger2.default,
                    {
                        component: _react2.default.createElement('div', { className: 'gm-inline-block' }),
                        popup: _react2.default.createElement(_calendar2.default, _extends({
                            selected: end,
                            onSelect: this.handleSelectEnd
                        }, Object.assign({
                            min: begin
                        }, endProps)))
                    },
                    _react2.default.createElement('input', {
                        ref: function ref(_ref) {
                            return _this4.refEndTarget = _ref;
                        },
                        type: 'text',
                        className: inputClassName,
                        disabled: disabled,
                        value: end ? endRenderInputValue ? endRenderInputValue(end) : (0, _moment2.default)(end).format('YYYY-MM-DD') : '',
                        onChange: _lodash2.default.noop
                    })
                )
            );
        }
    }]);

    return DateRangePicker;
}(_react2.default.Component);

DateRangePicker.displayName = 'DateRangePicker';

DateRangePicker.propTypes = {
    begin: _react.PropTypes.object,
    end: _react.PropTypes.object,
    beginLabel: _react.PropTypes.string,
    endLabel: _react.PropTypes.string,
    onChange: _react.PropTypes.func,
    inputClassName: _react.PropTypes.string,
    disabled: _react.PropTypes.bool,
    className: _react.PropTypes.string,

    beginProps: _react.PropTypes.shape({
        min: _react2.default.PropTypes.object,
        max: _react2.default.PropTypes.object,
        disabledDate: _react2.default.PropTypes.func
    }),
    beginRenderInputValue: _react.PropTypes.func,
    endProps: _react.PropTypes.shape({
        min: _react2.default.PropTypes.object,
        max: _react2.default.PropTypes.object,
        disabledDate: _react2.default.PropTypes.func
    }),
    endRenderInputValue: _react.PropTypes.func
};

DateRangePicker.defaultProps = {
    onChange: _lodash2.default.noop
};

exports.default = DateRangePicker;

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(6);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _modal = __webpack_require__(14);

var _modal2 = _interopRequireDefault(_modal);

var _lodash = __webpack_require__(1);

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// 搞的复杂了，后续要补充文档

var dialogContainerId = '_gm_dialog_container' + (Math.random() + '').slice(2);
var dialogContainer = window.document.getElementById(dialogContainerId);
if (!dialogContainer) {
    dialogContainer = window.document.createElement('div');
    dialogContainer.className = 'gm-container-dialog';
    dialogContainer.id = dialogContainerId;
    window.document.body.appendChild(dialogContainer);
}
var DialogStatics = {};
DialogStatics = {
    alert: function alert(options) {
        options.type = 'alert';
        options.size = 'sm';
        return DialogStatics.dialog(options);
    },
    confirm: function confirm(options) {
        options.type = 'confirm';
        options.size = 'sm';
        return DialogStatics.dialog(options);
    },
    prompt: function prompt(options) {
        options.type = 'prompt';
        options.size = 'sm';
        return DialogStatics.dialog(options);
    },
    dialog: function dialog(options) {
        options = Object.assign({}, { size: 'sm' }, options);
        return new Promise(function (resolve, reject) {
            var div = window.document.createElement('div');
            dialogContainer.appendChild(div);
            var _OK = options.onOK;
            options.onOK = function (value) {
                var result = _OK && _OK(value);
                if (result !== false) {
                    resolve(value);
                } else if (result.then) {
                    // 简单判断是否promise
                    return result;
                }
                return result;
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

        var _this = _possibleConstructorReturn(this, (Dialog.__proto__ || Object.getPrototypeOf(Dialog)).call(this, props));

        _this.state = {
            show: props.show,
            isLoading: false
        };
        _this.handleCancel = _this.handleCancel.bind(_this);
        _this.handleOk = _this.handleOk.bind(_this);
        _this.handleEnter = _this.handleEnter.bind(_this);
        _this.______isMounted = false;
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
        key: 'componentWillUnMount',
        value: function componentWillUnMount() {
            this.______isMounted = true;
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

            this.setState({
                isLoading: true
            });

            Promise.resolve(result).then(function () {
                if (!_this2.______isMounted) {
                    _this2.setState({
                        show: false,
                        isLoading: false
                    });
                }
            }).catch(function () {
                _this2.setState({
                    isLoading: false
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
            var isLoading = this.state.isLoading;
            var _props = this.props,
                size = _props.size,
                title = _props.title,
                children = _props.children,
                type = _props.type,
                promptDefaultValue = _props.promptDefaultValue,
                promptPlaceholder = _props.promptPlaceholder,
                cancelBtn = _props.cancelBtn,
                OKBtn = _props.OKBtn,
                disableMaskClose = _props.disableMaskClose;

            var modalProps = {
                show: this.state.show,
                onHide: this.handleCancel,
                disableMaskClose: disableMaskClose
            };
            if (size !== 'md') {
                modalProps.size = size;
            }
            return _react2.default.createElement(
                _modal2.default,
                _extends({}, modalProps, { size: modalProps.size, title: title }),
                _react2.default.createElement(
                    'div',
                    null,
                    children,
                    type === 'prompt' && _react2.default.createElement('input', {
                        autoFocus: true,
                        defaultValue: promptDefaultValue,
                        placeholder: promptPlaceholder,
                        ref: 'input',
                        type: 'text',
                        style: { display: 'block', width: '100%' },
                        onKeyDown: this.handleEnter
                    })
                ),
                _react2.default.createElement('div', { className: 'gm-gap-10' }),
                _react2.default.createElement(
                    'div',
                    { className: 'text-right' },
                    type !== 'alert' && cancelBtn && !isLoading && _react2.default.createElement(
                        'button',
                        { className: 'btn btn-default', onClick: this.handleCancel },
                        cancelBtn
                    ),
                    _react2.default.createElement('div', { className: 'gm-gap-10' }),
                    OKBtn && _react2.default.createElement(
                        'button',
                        {
                            className: 'btn btn-primary',
                            disabled: isLoading,
                            onClick: !isLoading ? this.handleOk : null },
                        isLoading ? _react2.default.createElement('i', { className: 'glyphicon glyphicon-refresh glyphicon-spin' }) : OKBtn
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
    size: _react.PropTypes.string,
    promptDefaultValue: _react.PropTypes.string,
    promptPlaceholder: _react.PropTypes.string,
    cancelBtn: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.bool]),
    OKBtn: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.bool]),
    disableMaskClose: _react.PropTypes.bool
};
Dialog.defaultProps = {
    show: false,
    title: '提示',
    type: 'confirm',
    onCancel: _lodash2.default.noop,
    onOK: _lodash2.default.noop,
    size: 'md',
    cancelBtn: '取消',
    OKBtn: '确定',
    disableMaskClose: false
};

exports.default = Dialog;

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Divider = function (_React$Component) {
    _inherits(Divider, _React$Component);

    function Divider() {
        _classCallCheck(this, Divider);

        return _possibleConstructorReturn(this, (Divider.__proto__ || Object.getPrototypeOf(Divider)).apply(this, arguments));
    }

    _createClass(Divider, [{
        key: "render",
        value: function render() {
            var children = this.props.children;

            return _react2.default.createElement(
                "div",
                { className: "gm-divider" },
                _react2.default.createElement(
                    "div",
                    { className: "gm-divider-content" },
                    typeof children === 'string' ? _react2.default.createElement(
                        "h4",
                        null,
                        children
                    ) : children
                )
            );
        }
    }]);

    return Divider;
}(_react2.default.Component);

exports.default = Divider;

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(2);

var _classnames2 = _interopRequireDefault(_classnames);

var _trigger = __webpack_require__(4);

var _trigger2 = _interopRequireDefault(_trigger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Item = function (_React$Component) {
    _inherits(Item, _React$Component);

    function Item() {
        _classCallCheck(this, Item);

        return _possibleConstructorReturn(this, (Item.__proto__ || Object.getPrototypeOf(Item)).apply(this, arguments));
    }

    _createClass(Item, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                children = _props.children,
                rest = _objectWithoutProperties(_props, ['children']);

            return _react2.default.createElement(
                'li',
                rest,
                _react2.default.createElement(
                    'a',
                    { href: 'javascript:;' },
                    children
                )
            );
        }
    }]);

    return Item;
}(_react2.default.Component);

var Items = function (_React$Component2) {
    _inherits(Items, _React$Component2);

    function Items() {
        _classCallCheck(this, Items);

        return _possibleConstructorReturn(this, (Items.__proto__ || Object.getPrototypeOf(Items)).apply(this, arguments));
    }

    _createClass(Items, [{
        key: 'render',
        value: function render() {
            var _props2 = this.props,
                className = _props2.className,
                rest = _objectWithoutProperties(_props2, ['className']);

            return _react2.default.createElement(
                'ul',
                _extends({}, rest, {
                    className: (0, _classnames2.default)("dropdown-menu", className)
                }),
                this.props.children
            );
        }
    }]);

    return Items;
}(_react2.default.Component);

var DropDown = function (_React$Component3) {
    _inherits(DropDown, _React$Component3);

    function DropDown(props) {
        _classCallCheck(this, DropDown);

        var _this3 = _possibleConstructorReturn(this, (DropDown.__proto__ || Object.getPrototypeOf(DropDown)).call(this, props));

        _this3.refTrigger = null;

        _this3.handlePopupClick = _this3.handlePopupClick.bind(_this3);
        return _this3;
    }

    _createClass(DropDown, [{
        key: 'handlePopupClick',
        value: function handlePopupClick() {
            var _this4 = this;

            setTimeout(function () {
                _this4.refTrigger.click();
            }, 0);
        }
    }, {
        key: 'renderSplit',
        value: function renderSplit() {
            var _this5 = this;

            var _props3 = this.props,
                children = _props3.children,
                className = _props3.className,
                popup = _props3.popup,
                right = _props3.right,
                split = _props3.split,
                cartClassName = _props3.cartClassName,
                rest = _objectWithoutProperties(_props3, ['children', 'className', 'popup', 'right', 'split', 'cartClassName']);

            return _react2.default.createElement(
                'div',
                _extends({}, rest, {
                    className: (0, _classnames2.default)("gm-dropdown btn-group gm-dropdown-split", className)
                }),
                children,
                _react2.default.createElement(
                    _trigger2.default,
                    {
                        type: 'click',
                        right: right,
                        component: _react2.default.createElement('button', {
                            ref: function ref(_ref) {
                                return _this5.refTrigger = _ref;
                            },
                            className: (0, _classnames2.default)("btn btn-default dropdown-toggle", cartClassName)
                        }),
                        popup: _react2.default.createElement(
                            'div',
                            { onClick: this.handlePopupClick },
                            popup
                        )
                    },
                    _react2.default.createElement('span', { className: 'caret' })
                )
            );
        }
    }, {
        key: 'render',
        value: function render() {
            var _this6 = this;

            var _props4 = this.props,
                children = _props4.children,
                className = _props4.className,
                popup = _props4.popup,
                split = _props4.split,
                right = _props4.right,
                cartClassName = _props4.cartClassName,
                rest = _objectWithoutProperties(_props4, ['children', 'className', 'popup', 'split', 'right', 'cartClassName']);

            if (split) {
                return this.renderSplit();
            }

            return _react2.default.createElement(
                _trigger2.default,
                {
                    type: 'click',
                    right: right,
                    component: _react2.default.createElement('div', _extends({}, rest, {
                        ref: function ref(_ref2) {
                            return _this6.refTrigger = _ref2;
                        },
                        className: (0, _classnames2.default)("gm-dropdown btn-group", className)
                    })),
                    popup: _react2.default.createElement(
                        'div',
                        { onClick: this.handlePopupClick },
                        popup
                    )
                },
                children
            );
        }
    }]);

    return DropDown;
}(_react2.default.Component);

DropDown.DropDownItem = Item;
DropDown.DropDownItems = Items;

DropDown.propTypes = {
    popup: _react.PropTypes.element.isRequired,
    right: _react.PropTypes.bool,
    split: _react.PropTypes.bool,
    cartClassName: _react.PropTypes.string // split true时有效
};

DropDown.defaultProps = {
    split: false
};

exports.default = DropDown;

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(2);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DropSelect = function (_React$Component) {
    _inherits(DropSelect, _React$Component);

    function DropSelect(props) {
        _classCallCheck(this, DropSelect);

        var _this = _possibleConstructorReturn(this, (DropSelect.__proto__ || Object.getPrototypeOf(DropSelect)).call(this, props));

        _this.state = {
            activeIndex: null
        };

        _this.documentClickHandler = _this.documentClickHandler.bind(_this);
        _this.onEscapeKeyUp = _this.onEscapeKeyUp.bind(_this);
        return _this;
    }

    _createClass(DropSelect, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            window.document.addEventListener("click", this.documentClickHandler);
            window.document.addEventListener("keydown", this.onEscapeKeyUp);
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {
            var dom = this.refSelectPanel.querySelector('.gm-dropselect-list .active');
            dom && dom.scrollIntoViewIfNeeded(); //scrollIntoView
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            window.document.removeEventListener("click", this.documentClickHandler);
            window.document.removeEventListener("keydown", this.onEscapeKeyUp);
        }
    }, {
        key: 'processData',
        value: function processData(data) {
            return Object.assign({
                loading: false,
                actions: [],
                list: [],
                columns: []
            }, data);
        }
    }, {
        key: 'documentClickHandler',
        value: function documentClickHandler(e) {
            if (!this.refSelectPanel.contains(e.target)) {
                this.setState({
                    activeIndex: null
                });
                this.props.onHide();
            }
        }
    }, {
        key: 'handleKeyDown',
        value: function handleKeyDown(size, e) {
            // 列表为空
            if (!size) {
                return;
            }

            var activeIndex = this.state.activeIndex;

            // 键盘 上键
            if (e.keyCode === 38) {
                if (activeIndex === null) activeIndex = size;

                activeIndex--;
            } else if (e.keyCode === 40) {
                // 键盘 下键
                if (activeIndex === null) activeIndex = -1;

                activeIndex++;
            } else if (e.keyCode === 13) {
                // 键盘 回车
                if (activeIndex === null) return;
                this.props.onEnter(activeIndex);
            } else {
                return;
            }

            this.setState({
                activeIndex: (size + activeIndex) % size
            });
        }
    }, {
        key: 'onEscapeKeyUp',
        value: function onEscapeKeyUp(e) {
            if (e.keyCode === 27) {
                this.props.onHide();
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var thisProps = this.props,
                show = thisProps.show;

            var _processData = this.processData(this.props.data),
                loading = _processData.loading,
                list = _processData.list,
                columns = _processData.columns,
                actions = _processData.actions;

            var activeIndex = this.state.activeIndex;

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
                        '\xA0'
                    ),
                    _react2.default.createElement('i', { className: 'glyphicon glyphicon-refresh glyphicon-spin' })
                );
            } else {
                coolList = list.map(function (rowData, rowIndex) {
                    var cls = (0, _classnames2.default)('gm-dropselect-item', {
                        active: activeIndex === rowIndex
                    });
                    var row = columns.map(function (col, index) {
                        var field = col.field,
                            value = rowData[field];
                        if (col.render) {
                            var val = col.render(value, rowData, rowIndex);
                            return _react2.default.createElement(
                                'div',
                                {
                                    className: 'gm-ellipsis',
                                    style: { flex: '1' },
                                    key: index
                                },
                                val
                            );
                        } else {
                            return _react2.default.createElement(
                                'div',
                                { className: 'gm-ellipsis', key: index },
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
                        { className: cls, key: rowData.id },
                        row,
                        actionDom.length ? _react2.default.createElement(
                            'div',
                            null,
                            actionDom
                        ) : null
                    );
                });
            }

            return _react2.default.createElement(
                'div',
                {
                    className: thisProps.className,
                    ref: function ref(_ref) {
                        return _this2.refSelectPanel = _ref;
                    },
                    onKeyDown: this.handleKeyDown.bind(this, list.length)
                },
                thisProps.children,
                _react2.default.createElement(
                    'div',
                    { className: 'gm-dropselect-wrap' },
                    _react2.default.createElement(
                        'div',
                        {
                            className: 'gm-dropselect-list-wrap',
                            style: { display: show ? 'block' : 'none' }
                        },
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
                                    '\u64CD\u4F5C'
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
    show: _react2.default.PropTypes.bool.isRequired,
    data: _react2.default.PropTypes.object,
    onEnter: _react2.default.PropTypes.func,
    onHide: _react2.default.PropTypes.func
};

DropSelect.defaultProps = {
    onEnter: function onEnter(index) {
        console.log('onEnter index:', index);
    }
};

exports.default = DropSelect;

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _form = __webpack_require__(59);

var _form2 = _interopRequireDefault(_form);

var _form_item = __webpack_require__(61);

var _form_item2 = _interopRequireDefault(_form_item);

var _form_button = __webpack_require__(60);

var _form_button2 = _interopRequireDefault(_form_button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

Object.assign(_form2.default, {
    FormItem: _form_item2.default,
    FormButton: _form_button2.default
});

exports.default = _form2.default;

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(6);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _lodash = __webpack_require__(1);

var _lodash2 = _interopRequireDefault(_lodash);

var _index = __webpack_require__(12);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ImportLead = function (_React$Component) {
    _inherits(ImportLead, _React$Component);

    function ImportLead(props) {
        _classCallCheck(this, ImportLead);

        var _this = _possibleConstructorReturn(this, (ImportLead.__proto__ || Object.getPrototypeOf(ImportLead)).call(this, props));

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

            var data = _lodash2.default.extend({ columns: [], list: [] }, this.props.data);
            var tips = this.props.tips || [];

            var tipsMap = {};

            var lineMap = _lodash2.default.map(data.list, function () {
                return false;
            });

            _lodash2.default.each(tips, function (tip, index) {
                tipsMap[tip.index] = tipsMap[tip.index] || {};
                tip._index = index;
                tipsMap[tip.index][tip.field] = tip;

                if (!tip.modifyed) {
                    lineMap[tip.index] = true;
                }
            });

            var tableBody = data.list.map(function (eList, index) {
                var tds = data.columns.map(function (col, i) {
                    if (col.render) return _react2.default.createElement(
                        'td',
                        { key: i },
                        col.render(eList[col.field], eList, index)
                    );

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

            var canSubmit = _lodash2.default.filter(tips, function (value) {
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
                            _index2.default,
                            { className: 'gm-dropper-wrap', onDrop: this.handleDrop, accept: '.xlsx' },
                            _react2.default.createElement(
                                'button',
                                { className: 'btn btn-primary btn-sm' },
                                '\u4E0A\u4F20xlsx'
                            )
                        ),
                        '\xA0\xA0\xA0\xA0',
                        !this.props.disableSubmit && _react2.default.createElement(
                            'button',
                            { disabled: !canSubmit, className: 'btn btn-primary btn-sm',
                                onClick: this.handleSubmit },
                            '\u63D0\u4EA4'
                        ),
                        '\xA0\xA0\xA0\xA0',
                        fileTempUrl ? _react2.default.createElement(
                            'a',
                            { href: fileTempUrl, target: 'blank' },
                            '\u4E0A\u4F20\u6A21\u677F\u4E0B\u8F7D'
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

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InputNumber = function (_React$Component) {
    _inherits(InputNumber, _React$Component);

    function InputNumber(props) {
        _classCallCheck(this, InputNumber);

        var _this = _possibleConstructorReturn(this, (InputNumber.__proto__ || Object.getPrototypeOf(InputNumber)).call(this, props));

        _this.handleChange = _this.handleChange.bind(_this);
        return _this;
    }

    _createClass(InputNumber, [{
        key: "handleChange",
        value: function handleChange(e) {
            var _props = this.props,
                max = _props.max,
                min = _props.min,
                precision = _props.precision,
                minus = _props.minus;

            var value = e.target.value,
                figure = value;

            var reg = new RegExp("(^[1-9]\\d*(\\.\\d{0," + precision + "})?$)|(^0(\\.\\d{0," + precision + "})?$)");

            if (minus && value.indexOf('-') > -1) {
                // 去掉减号，然后去匹配正则
                figure = value.slice(1);
            }

            if (reg.test(figure) || figure === '') {
                var num = Number(value);

                if (max && num > max) this.props.onChange(max);else if (min && num < min) this.props.onChange(min);else this.props.onChange(value);
            } else if (/^0[1-9]/.test(value)) {
                // 如果第一个数字是0，第二个是1-9，则选取第二个数字
                this.props.onChange(value.substr(1));
            }
        }
    }, {
        key: "render",
        value: function render() {
            var _props2 = this.props,
                precision = _props2.precision,
                minus = _props2.minus,
                rest = _objectWithoutProperties(_props2, ["precision", "minus"]);

            return _react2.default.createElement("input", _extends({}, rest, {
                type: "text",
                onChange: this.handleChange
            }));
        }
    }]);

    return InputNumber;
}(_react2.default.Component);

InputNumber.displayName = 'InputNumber';

InputNumber.propTypes = {
    value: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string]),
    max: _react.PropTypes.number,
    min: _react.PropTypes.number,
    precision: _react.PropTypes.number, // 精确度，保留几位小数
    onChange: _react.PropTypes.func.isRequired,
    placeholder: _react.PropTypes.string,
    className: _react.PropTypes.string,
    minus: _react.PropTypes.bool // 是否支持输入负数
};

InputNumber.defaultProps = {
    precision: 2,
    minus: false
};

exports.default = InputNumber;

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _lodash = __webpack_require__(1);

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// 如果需要设置loading大小:  set size = 100  (default 50)
var LIMIT = 12;

var Loading = function (_React$Component) {
    _inherits(Loading, _React$Component);

    function Loading() {
        _classCallCheck(this, Loading);

        return _possibleConstructorReturn(this, (Loading.__proto__ || Object.getPrototypeOf(Loading)).apply(this, arguments));
    }

    _createClass(Loading, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                style = _props.style,
                size = _props.size;


            style = Object.assign({}, style, {
                'width': size + 'px',
                'height': size + 'px'
            });
            return _react2.default.createElement(
                'div',
                { className: 'gm-loading', style: style },
                _lodash2.default.times(LIMIT, function (i) {
                    return _react2.default.createElement('div', { key: i, className: "circle" + (i + 1) + " loading-circle" });
                })
            );
        }
    }]);

    return Loading;
}(_react2.default.Component);

Loading.propTypes = {
    size: _react.PropTypes.number
};

Loading.defaultProps = {
    size: 50
};

exports.default = Loading;

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(6);

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var containerId = '_gm_nprogress_container' + (Math.random() + '').slice(2);
var container = window.document.getElementById(containerId);
if (!container) {
    container = window.document.createElement('div');
    container.className = 'gm-nprogress-container';
    container.id = containerId;
    window.document.body.appendChild(container);
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

        var _this = _possibleConstructorReturn(this, (NProgress.__proto__ || Object.getPrototypeOf(NProgress)).call(this, props));

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

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.QuickDesc = exports.QuickTab = exports.QuickFilter = exports.QuickInfoCell = exports.QuickInfo = exports.QuickPanel = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _flex = __webpack_require__(3);

var _flex2 = _interopRequireDefault(_flex);

var _collapse = __webpack_require__(11);

var _collapse2 = _interopRequireDefault(_collapse);

var _lodash = __webpack_require__(1);

var _lodash2 = _interopRequireDefault(_lodash);

var _classnames = __webpack_require__(2);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var QuickPanel = function (_React$Component) {
    _inherits(QuickPanel, _React$Component);

    function QuickPanel(props) {
        _classCallCheck(this, QuickPanel);

        var _this = _possibleConstructorReturn(this, (QuickPanel.__proto__ || Object.getPrototypeOf(QuickPanel)).call(this, props));

        _this.state = {
            in: _this.props.in || true
        };
        return _this;
    }

    _createClass(QuickPanel, [{
        key: 'handleCollapse',
        value: function handleCollapse() {
            this.setState({
                in: !this.state.in
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                className = _props.className,
                title = _props.title,
                collapse = _props.collapse,
                right = _props.right,
                children = _props.children,
                rest = _objectWithoutProperties(_props, ['className', 'title', 'collapse', 'right', 'children']);

            return _react2.default.createElement(
                'div',
                _extends({}, rest, { className: (0, _classnames2.default)("gm-bg gm-border gm-quick gm-quick-panel", className) }),
                _react2.default.createElement(
                    _flex2.default,
                    { flex: true, alignCenter: true, justifyBetween: true, className: 'gm-quick-title' },
                    title,
                    collapse ? _react2.default.createElement(
                        'a',
                        { onClick: this.handleCollapse.bind(this), style: { fontSize: '12px', marginLeft: '25px' } },
                        collapse === true ? this.state.in ? "收拢明细" : "展现明细" : collapse
                    ) : undefined,
                    _react2.default.createElement(_flex2.default, { flex: true }),
                    right ? _react2.default.cloneElement(right, { className: right.props.className }) : undefined
                ),
                _react2.default.createElement(
                    _collapse2.default,
                    { 'in': this.state.in },
                    _react2.default.createElement(
                        'div',
                        { className: 'gm-border-top' },
                        children
                    )
                )
            );
        }
    }]);

    return QuickPanel;
}(_react2.default.Component);

QuickPanel.propTypes = {
    title: _react.PropTypes.oneOfType([_react.PropTypes.string.isRequired, _react.PropTypes.element]),
    collapse: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.bool]),
    right: _react.PropTypes.object,
    in: _react.PropTypes.bool
};

var QuickInfoCell = function (_React$Component2) {
    _inherits(QuickInfoCell, _React$Component2);

    function QuickInfoCell() {
        _classCallCheck(this, QuickInfoCell);

        return _possibleConstructorReturn(this, (QuickInfoCell.__proto__ || Object.getPrototypeOf(QuickInfoCell)).apply(this, arguments));
    }

    return QuickInfoCell;
}(_react2.default.Component);

QuickInfoCell.displayName = 'QuickInfoCell';
QuickInfoCell.propTypes = {
    primary: _react.PropTypes.bool,
    title: _react.PropTypes.string.isRequired
};

var QuickInfo = function (_React$Component3) {
    _inherits(QuickInfo, _React$Component3);

    function QuickInfo(props) {
        _classCallCheck(this, QuickInfo);

        return _possibleConstructorReturn(this, (QuickInfo.__proto__ || Object.getPrototypeOf(QuickInfo)).call(this, props));
    }

    _createClass(QuickInfo, [{
        key: 'render',
        value: function render() {
            var children = toString.call(this.props.children) === '[object Array]' ? this.props.children : [this.props.children];
            var infos = [],
                primaryInfo = false,
                others = [];

            _lodash2.default.each(children, function (value) {
                switch (value.type.displayName) {
                    case QuickInfoCell.displayName:
                        if (value.props.primary) {
                            primaryInfo = value;
                        } else {
                            infos.push(value);
                        }
                        break;
                    default:
                        others.push(value);
                        break;
                }
            });

            return _react2.default.createElement(
                'div',
                { className: (0, _classnames2.default)("gm-bg gm-border gm-quick", this.props.className) },
                infos.length > 0 || primaryInfo ? _react2.default.createElement(
                    _flex2.default,
                    { className: 'gm-quick-title' },
                    primaryInfo ? _react2.default.createElement(
                        _flex2.default,
                        { alignCenter: true, juestifyCenter: true, width: '150px' },
                        _react2.default.createElement(
                            'strong',
                            null,
                            primaryInfo.props.title,
                            '\uFF1A'
                        ),
                        ' ',
                        primaryInfo.props.children
                    ) : undefined,
                    primaryInfo ? _react2.default.createElement(_flex2.default, { className: 'gm-margin-lr-15 gm-border-right' }) : undefined,
                    _react2.default.createElement(
                        _flex2.default,
                        { flex: true, wrap: true },
                        _lodash2.default.map(infos, function (value, i) {
                            return _react2.default.createElement(
                                _flex2.default,
                                { key: i, width: '33.33%', juestifyCenter: true },
                                _react2.default.createElement(
                                    'strong',
                                    null,
                                    value.props.title,
                                    '\uFF1A'
                                ),
                                value.props.children
                            );
                        })
                    )
                ) : undefined,
                _react2.default.createElement(
                    'div',
                    { className: 'gm-border-top' },
                    others
                )
            );
        }
    }]);

    return QuickInfo;
}(_react2.default.Component);

var QuickFilter = function (_React$Component4) {
    _inherits(QuickFilter, _React$Component4);

    function QuickFilter(props) {
        _classCallCheck(this, QuickFilter);

        var _this4 = _possibleConstructorReturn(this, (QuickFilter.__proto__ || Object.getPrototypeOf(QuickFilter)).call(this, props));

        _this4.state = {
            show: false
        };

        _this4.handleCollape = _this4.handleCollape.bind(_this4);
        return _this4;
    }

    _createClass(QuickFilter, [{
        key: 'handleCollape',
        value: function handleCollape() {
            this.setState({
                show: !this.state.show
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _props2 = this.props,
                collapseRender = _props2.collapseRender,
                children = _props2.children,
                show = this.state.show;


            return _react2.default.createElement(
                'div',
                { className: (0, _classnames2.default)("gm-bg gm-border gm-quick gm-quick-filter gm-padding-15", this.props.className, {
                        'gm-padding-bottom-0': collapseRender
                    }) },
                collapseRender ? _react2.default.createElement(
                    'div',
                    null,
                    show ? null : children,
                    _react2.default.createElement(
                        _collapse2.default,
                        { 'in': show },
                        show ? collapseRender() : null
                    ),
                    _react2.default.createElement(
                        _flex2.default,
                        { justifyCenter: true, className: 'gm-padding-5' },
                        _react2.default.createElement(
                            'a',
                            { href: 'javascript:;', className: 'gm-quick-filter-toggle', onClick: this.handleCollape },
                            show ? '收拢筛选条件' : '展开筛选条件',
                            '\xA0',
                            _react2.default.createElement('i', { className: (0, _classnames2.default)('ifont', {
                                    'ifont-down': !show,
                                    'ifont-up': show
                                }) })
                        )
                    )
                ) : children
            );
        }
    }]);

    return QuickFilter;
}(_react2.default.Component);

QuickFilter.propTypes = {
    collapseRender: _react.PropTypes.func
};

var QuickTabItem = function (_React$Component5) {
    _inherits(QuickTabItem, _React$Component5);

    function QuickTabItem(props) {
        _classCallCheck(this, QuickTabItem);

        return _possibleConstructorReturn(this, (QuickTabItem.__proto__ || Object.getPrototypeOf(QuickTabItem)).call(this, props));
    }

    _createClass(QuickTabItem, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                this.props.children
            );
        }
    }]);

    return QuickTabItem;
}(_react2.default.Component);

var QuickTab = function (_React$Component6) {
    _inherits(QuickTab, _React$Component6);

    function QuickTab(props) {
        _classCallCheck(this, QuickTab);

        var _this6 = _possibleConstructorReturn(this, (QuickTab.__proto__ || Object.getPrototypeOf(QuickTab)).call(this, props));

        _this6.state = {
            active: props.active || 0
        };
        return _this6;
    }

    _createClass(QuickTab, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            if ('active' in nextProps) {
                this.setState({ active: nextProps.active });
            }
        }
    }, {
        key: 'handleTab',
        value: function handleTab(i) {
            var onChange = this.props.onChange;

            if ('active' in this.props) {
                onChange(i);
            } else {
                this.setState({
                    active: i
                });
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this7 = this;

            var _props3 = this.props,
                tabs = _props3.tabs,
                children = _props3.children,
                active = _props3.active,
                onChange = _props3.onChange,
                isStatic = _props3.isStatic,
                rest = _objectWithoutProperties(_props3, ['tabs', 'children', 'active', 'onChange', 'isStatic']);

            var activeTab = this.state.active;

            var tabPanels = _lodash2.default.map(children, function (child, i) {
                return _react2.default.createElement(
                    'div',
                    { key: i, className: activeTab !== i ? 'hidden' : '' },
                    child
                );
            });

            return _react2.default.createElement(
                'div',
                _extends({}, rest, { className: (0, _classnames2.default)("b-nav-tabs", this.props.className) }),
                this.props.right ? _react2.default.cloneElement(this.props.right, { className: this.props.right.props.className + ' pull-right' }) : null,
                _react2.default.createElement(
                    'ul',
                    { className: 'nav nav-tabs' },
                    _lodash2.default.map(tabs, function (tab, i) {
                        return _react2.default.createElement(
                            'li',
                            { key: i, className: (0, _classnames2.default)("gm-quick-tab", {
                                    active: i === activeTab
                                }) },
                            _react2.default.createElement(
                                'a',
                                { href: 'javascript:;', onClick: _this7.handleTab.bind(_this7, i) },
                                tab
                            )
                        );
                    })
                ),
                _react2.default.createElement(
                    'div',
                    null,
                    isStatic ? tabPanels : tabPanels[activeTab]
                )
            );
        }
    }]);

    return QuickTab;
}(_react2.default.Component);

// 如果有active，则一定有handleChange


QuickTab.propTypes = {
    tabs: _react.PropTypes.array.isRequired,
    onChange: _react.PropTypes.func,
    active: _react.PropTypes.number,
    right: _react.PropTypes.element,
    isStatic: _react.PropTypes.bool,
    children: function children(props, propName, componentName) {
        if (props.tabs && props.children && props.tabs.length !== props.children.length) {
            return new Error('Invalid prop `children` supplied to' + ' `' + componentName + '`, prop `tabs` length is not match prop `children` length');
        }
    }
};

QuickTab.defaultProps = {
    isStatic: false
};

Object.assign(QuickTab, {
    QuickTabItem: QuickTabItem
});

var QuickDesc = function (_React$Component7) {
    _inherits(QuickDesc, _React$Component7);

    function QuickDesc(props) {
        _classCallCheck(this, QuickDesc);

        return _possibleConstructorReturn(this, (QuickDesc.__proto__ || Object.getPrototypeOf(QuickDesc)).call(this, props));
    }

    _createClass(QuickDesc, [{
        key: 'render',
        value: function render() {
            var _props4 = this.props,
                left = _props4.left,
                right = _props4.right,
                leftFlex = _props4.leftFlex,
                rightFlex = _props4.rightFlex,
                children = _props4.children;


            return _react2.default.createElement(
                'div',
                { className: (0, _classnames2.default)("gm-bg gm-border gm-quick gm-quick-desc", this.props.className) },
                _react2.default.createElement(
                    _flex2.default,
                    null,
                    _react2.default.createElement(
                        _flex2.default,
                        { flex: leftFlex || 2, alignCenter: true, className: 'gm-quick-desc-title' },
                        left
                    ),
                    _react2.default.createElement(
                        _flex2.default,
                        { flex: rightFlex || 10, alignCenter: true, className: 'gm-padding-left-5' },
                        _react2.default.createElement('div', { className: 'gm-border-left gm-padding-left-15', style: { height: '40px' } }),
                        right ? _react2.default.cloneElement(right, {
                            className: "gm-quick-desc-right-box gm-padding-tb-10 " + (right.props.className || '')
                        }) : null
                    )
                ),
                children ? _react2.default.createElement(
                    _flex2.default,
                    { className: 'gm-border-top gm-padding-tb-15' },
                    children
                ) : null
            );
        }
    }]);

    return QuickDesc;
}(_react2.default.Component);

exports.QuickPanel = QuickPanel;
exports.QuickInfo = QuickInfo;
exports.QuickInfoCell = QuickInfoCell;
exports.QuickFilter = QuickFilter;
exports.QuickTab = QuickTab;
exports.QuickDesc = QuickDesc;

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _radio = __webpack_require__(62);

var _radio2 = _interopRequireDefault(_radio);

var _radio_group = __webpack_require__(63);

var _radio_group2 = _interopRequireDefault(_radio_group);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

Object.assign(_radio2.default, {
    RadioGroup: _radio_group2.default
});

exports.default = _radio2.default;

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _search = __webpack_require__(17);

var _search2 = _interopRequireDefault(_search);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FilterSearchSelect = function (_React$Component) {
    _inherits(FilterSearchSelect, _React$Component);

    function FilterSearchSelect(props) {
        _classCallCheck(this, FilterSearchSelect);

        var _this = _possibleConstructorReturn(this, (FilterSearchSelect.__proto__ || Object.getPrototypeOf(FilterSearchSelect)).call(this, props));

        _this.state = {
            query: ''
        };
        _this.handleSearch = _this.handleSearch.bind(_this);
        return _this;
    }

    _createClass(FilterSearchSelect, [{
        key: 'handleSearch',
        value: function handleSearch(query) {
            this.setState({
                query: query
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                list = _props.list,
                onFilter = _props.onFilter,
                rest = _objectWithoutProperties(_props, ['list', 'onFilter']);

            var query = this.state.query;

            var filterList = list;
            if (query) {
                filterList = onFilter(filterList, query);
            }
            return _react2.default.createElement(_search2.default, _extends({}, rest, {
                list: filterList,
                onSearch: this.handleSearch
            }));
        }
    }]);

    return FilterSearchSelect;
}(_react2.default.Component);

FilterSearchSelect.propTypes = {
    disabled: _react.PropTypes.bool,
    list: _react.PropTypes.array.isRequired,
    isGroupList: _react.PropTypes.bool,
    selected: _react.PropTypes.any,
    onSelect: _react.PropTypes.func.isRequired,
    onFilter: _react.PropTypes.func.isRequired,
    delay: _react.PropTypes.number,
    listMaxHeight: _react.PropTypes.string,
    placeholder: _react.PropTypes.string,
    isScrollToSelected: _react.PropTypes.bool
};

exports.default = FilterSearchSelect;

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _pagination = __webpack_require__(15);

var _pagination2 = _interopRequireDefault(_pagination);

var _paginationText = __webpack_require__(16);

var _paginationText2 = _interopRequireDefault(_paginationText);

var _lodash = __webpack_require__(1);

var _lodash2 = _interopRequireDefault(_lodash);

var _classnames = __webpack_require__(2);

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

        return _possibleConstructorReturn(this, (SheetColumn.__proto__ || Object.getPrototypeOf(SheetColumn)).apply(this, arguments));
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
    name: _react.PropTypes.oneOfType([_react.PropTypes.string.isRequired, _react.PropTypes.element.isRequired])
};

var SheetAction = function (_React$Component2) {
    _inherits(SheetAction, _React$Component2);

    function SheetAction() {
        _classCallCheck(this, SheetAction);

        return _possibleConstructorReturn(this, (SheetAction.__proto__ || Object.getPrototypeOf(SheetAction)).apply(this, arguments));
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

        return _possibleConstructorReturn(this, (SheetSelect.__proto__ || Object.getPrototypeOf(SheetSelect)).apply(this, arguments));
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
    onSelectAll: _react.PropTypes.func.isRequired,
    isDisabled: _react.PropTypes.func
};
SheetSelect.defaultProps = {
    isDisabled: function isDisabled() {
        return false;
    }
};

var SheetBatchAction = function (_React$Component4) {
    _inherits(SheetBatchAction, _React$Component4);

    function SheetBatchAction() {
        _classCallCheck(this, SheetBatchAction);

        return _possibleConstructorReturn(this, (SheetBatchAction.__proto__ || Object.getPrototypeOf(SheetBatchAction)).apply(this, arguments));
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

        return _possibleConstructorReturn(this, (Sheet.__proto__ || Object.getPrototypeOf(Sheet)).call(this, props));
    }

    _createClass(Sheet, [{
        key: 'render',
        value: function render() {
            var _this6 = this;

            var select = false,
                isSelectAll = false,
                list = this.props.list || [],
                loading = this.props.loading,
                enableEmptyTip = this.props.enableEmptyTip,
                scrollX = this.props.scrollX;

            var children = toString.call(this.props.children) === '[object Array]' ? this.props.children : [this.props.children];

            var columns = [],
                actions = false,
                batchs = false,
                others = [],
                pagination = void 0,
                paginationText = void 0;

            _lodash2.default.each(children, function (value) {
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

            if (select && list.length > 0) {
                // 存在有效行，且不存在未选中的行
                isSelectAll = _lodash2.default.find(list, function (value) {
                    return !select.props.isDisabled(value);
                }) && !_lodash2.default.find(list, function (value) {
                    return !select.props.isDisabled(value) && !value._gm_select;
                });
            }

            return _react2.default.createElement(
                'div',
                { className: (0, _classnames2.default)("gm-sheet", this.props.className) },
                select && batchs ? _react2.default.createElement(
                    'div',
                    { className: 'gm-marginBottom5 text-right' },
                    batchs.props.children
                ) : null,
                _react2.default.createElement(
                    'div',
                    { className: "gm-sheet-table" + (scrollX ? ' gm-sheet-table-scroll-x' : '') },
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
                                    _react2.default.createElement('input', {
                                        type: 'checkbox',
                                        checked: isSelectAll,
                                        onChange: this.handleSelectAll.bind(this, select)
                                    })
                                ) : null,
                                _lodash2.default.map(columns, function (value, index) {
                                    var _value$props = value.props,
                                        children = _value$props.children,
                                        field = _value$props.field,
                                        name = _value$props.name,
                                        rest = _objectWithoutProperties(_value$props, ['children', 'field', 'name']);

                                    return _react2.default.createElement(
                                        'th',
                                        _extends({ key: index }, rest),
                                        value.props.name
                                    );
                                }),
                                actions ? _react2.default.createElement(
                                    'th',
                                    { className: 'text-center' },
                                    '\u64CD\u4F5C'
                                ) : null
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
                                    '\u52A0\u8F7D\u4E2D...'
                                )
                            ) : null,
                            !loading && enableEmptyTip && list.length === 0 ? _react2.default.createElement(
                                'tr',
                                null,
                                _react2.default.createElement(
                                    'td',
                                    { colSpan: '99', className: 'text-center' },
                                    enableEmptyTip === true ? '没有数据' : enableEmptyTip
                                )
                            ) : null,
                            !loading ? _lodash2.default.map(list, function (value, index) {
                                return _react2.default.createElement(
                                    'tr',
                                    _extends({}, _this6.props.getTrProps(index), { key: index }),
                                    select ? _react2.default.createElement(
                                        'td',
                                        null,
                                        _react2.default.createElement('input', {
                                            type: 'checkbox',
                                            checked: value._gm_select || false,
                                            onChange: _this6.handleSelect.bind(_this6, select, index),
                                            disabled: select.props.isDisabled(value)
                                        })
                                    ) : null,
                                    _lodash2.default.map(columns, function (v, i) {
                                        var _v$props = v.props,
                                            children = _v$props.children,
                                            field = _v$props.field,
                                            name = _v$props.name,
                                            rest = _objectWithoutProperties(_v$props, ['children', 'field', 'name']);

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
                                        { className: 'text-center' },
                                        actions.props.children(value, index)
                                    ) : null
                                );
                            }) : null
                        )
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
    className: _react.PropTypes.string,
    getTrProps: _react.PropTypes.func,
    scrollX: _react.PropTypes.bool
};

Sheet.defaultProps = {
    list: [],
    loading: false,
    getTrProps: function getTrProps() {
        return {};
    },
    scrollX: false
};

Object.assign(Sheet, {
    SheetColumn: SheetColumn,
    SheetAction: SheetAction,
    SheetSelect: SheetSelect,
    SheetBatchAction: SheetBatchAction
});

exports.default = Sheet;

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _lodash = __webpack_require__(1);

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var prefix = '_react-gm_';
var _window = window,
    localStorage = _window.localStorage;


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
        _lodash2.default.each(_lodash2.default.range(localStorage.length), function (i) {
            var key = localStorage.key(i);
            if (key.startsWith(prefix)) {
                key = key.slice(prefix.length);
                result[key] = StorageStatics.get(key);
            }
        });
        return _lodash2.default.keys(result) ? result : null;
    }
};

var Storage = function (_React$Component) {
    _inherits(Storage, _React$Component);

    function Storage() {
        _classCallCheck(this, Storage);

        return _possibleConstructorReturn(this, (Storage.__proto__ || Object.getPrototypeOf(Storage)).apply(this, arguments));
    }

    _createClass(Storage, [{
        key: 'componentWillUpdate',
        value: function componentWillUpdate(nextProps) {
            if (this.props.autoSave) {
                StorageStatics.set(nextProps.name, nextProps.value);
            }
        }
    }, {
        key: 'componentWillMount',
        value: function componentWillMount() {
            StorageStatics.set(this.props.name, this.props.value);
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

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(2);

var _classnames2 = _interopRequireDefault(_classnames);

var _lodash = __webpack_require__(1);

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Switch = function (_React$Component) {
    _inherits(Switch, _React$Component);

    function Switch(props) {
        _classCallCheck(this, Switch);

        var _this = _possibleConstructorReturn(this, (Switch.__proto__ || Object.getPrototypeOf(Switch)).call(this, props));

        _this.state = {
            left: 1,
            checked: props.checked
        };

        _this.refOn = null;

        _this.handleChange = _this.handleChange.bind(_this);
        return _this;
    }

    _createClass(Switch, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            // 初始化后开始计算on的宽度，方便做开关切换动画
            this.setState({
                left: this.refOn.offsetWidth + 4 + 24 - 17
            });
        }
    }, {
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
        key: 'handleChange',
        value: function handleChange(e) {
            if (this.props.disabled) {
                return;
            }
            this.setChecked(e.target.checked);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props = this.props,
                checked = _props.checked,
                onChange = _props.onChange,
                type = _props.type,
                disabled = _props.disabled,
                on = _props.on,
                off = _props.off,
                rest = _objectWithoutProperties(_props, ['checked', 'onChange', 'type', 'disabled', 'on', 'off']);

            var cn = (0, _classnames2.default)('gm-switch gm-switch-' + type, this.props.className, {
                'gm-switch-disabled': disabled
            });

            var handleStyle = {};
            if (this.state.checked) {
                handleStyle.left = this.state.left;
            }

            return _react2.default.createElement(
                'label',
                _extends({}, rest, { className: cn }),
                _react2.default.createElement('input', {
                    disabled: disabled,
                    type: 'checkbox',
                    className: 'gm-switch-input',
                    checked: this.state.checked,
                    onChange: this.handleChange
                }),
                _react2.default.createElement(
                    'div',
                    { className: 'gm-switch-label' },
                    _react2.default.createElement(
                        'span',
                        null,
                        this.state.checked ? on : off
                    ),
                    _react2.default.createElement(
                        'span',
                        { className: 'gm-switch-label-on', ref: function ref(_ref) {
                                return _this2.refOn = _ref;
                            } },
                        on
                    )
                ),
                _react2.default.createElement('div', { className: 'gm-switch-handle', style: handleStyle })
            );
        }
    }]);

    return Switch;
}(_react2.default.Component);

Switch.propTypes = {
    type: _react.PropTypes.string, // default primary success info warning danger
    checked: _react.PropTypes.bool.isRequired,
    disabled: _react.PropTypes.bool,
    on: _react.PropTypes.any, // 请保证 on off 的宽度一样
    off: _react.PropTypes.any,
    onChange: _react.PropTypes.func
};
Switch.defaultProps = {
    type: 'default',
    on: 'ON',
    off: 'OFF',
    onChange: _lodash2.default.noop
};

exports.default = Switch;

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _moment = __webpack_require__(5);

var _moment2 = _interopRequireDefault(_moment);

var _timespan = __webpack_require__(19);

var _timespan2 = _interopRequireDefault(_timespan);

var _trigger = __webpack_require__(4);

var _trigger2 = _interopRequireDefault(_trigger);

var _lodash = __webpack_require__(1);

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TimeSpanPicker = function (_React$Component) {
    _inherits(TimeSpanPicker, _React$Component);

    function TimeSpanPicker(props) {
        _classCallCheck(this, TimeSpanPicker);

        var _this = _possibleConstructorReturn(this, (TimeSpanPicker.__proto__ || Object.getPrototypeOf(TimeSpanPicker)).call(this, props));

        _this.timeSpanPicker = null;
        _this.handleSelect = _this.handleSelect.bind(_this);
        return _this;
    }

    _createClass(TimeSpanPicker, [{
        key: 'handleSelect',
        value: function handleSelect(date) {
            var _this2 = this;

            this.props.onChange(date);
            setTimeout(function () {
                _this2.timeSpanPicker.click();
            }, 0);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            var _props = this.props,
                children = _props.children,
                inputClassName = _props.inputClassName,
                disabled = _props.disabled,
                render = _props.render,
                date = _props.date;

            var popup = _react2.default.createElement(_timespan2.default, {
                min: this.props.min,
                max: this.props.max,
                span: this.props.span,
                selected: this.props.date,
                onSelect: this.handleSelect
            });
            return _react2.default.createElement(
                'div',
                {
                    ref: function ref(_ref) {
                        _this3.timeSpanPicker = _ref;
                    },
                    className: 'gm-time-span-picker'
                },
                _react2.default.createElement(
                    _trigger2.default,
                    { component: _react2.default.createElement('div', null), popup: popup },
                    children ? children : _react2.default.createElement('input', {
                        type: 'text',
                        className: inputClassName,
                        ref: 'target',
                        disabled: disabled,
                        value: render(date),
                        onChange: _lodash2.default.noop
                    })
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
    disabled: _react.PropTypes.bool
};

TimeSpanPicker.defaultProps = {
    render: function render(value) {
        return (0, _moment2.default)(value).format('HH:mm');
    },
    disabled: false,
    onChange: _lodash2.default.noop
};

exports.default = TimeSpanPicker;

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(6);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _lodash = __webpack_require__(1);

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var tipContainerId = '_gm_tips_container' + (Math.random() + '').slice(2);
var tipsContainer = window.document.getElementById(tipContainerId);
if (!tipsContainer) {
    tipsContainer = window.document.createElement('div');
    tipsContainer.className = 'gm-tips';
    tipsContainer.id = tipContainerId;
    window.document.body.appendChild(tipsContainer);
}

var TipStatics = {
    tip: function tip(options) {
        var _b_onClose = options.onClose;
        var div = window.document.createElement('div');
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

        var _this = _possibleConstructorReturn(this, (TipOverlay.__proto__ || Object.getPrototypeOf(TipOverlay)).call(this, props));

        _this.timer = null;
        _this.hasClosed = false;
        _this.handleClose = _this.handleClose.bind(_this);
        return _this;
    }

    _createClass(TipOverlay, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                title = _props.title,
                type = _props.type,
                children = _props.children;

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

        var _this3 = _possibleConstructorReturn(this, (Tip.__proto__ || Object.getPrototypeOf(Tip)).call(this, props));

        _this3.handleClose = _this3.handleClose.bind(_this3);
        return _this3;
    }

    _createClass(Tip, [{
        key: 'render',
        value: function render() {
            var _props2 = this.props,
                title = _props2.title,
                type = _props2.type,
                children = _props2.children;

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
                        '\xD7'
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
    onClose: _lodash2.default.noop
};

Object.assign(Tip, TipStatics);

exports.default = Tip;

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _transfer = __webpack_require__(66);

var _transfer2 = _interopRequireDefault(_transfer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _transfer2.default;

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _flex = __webpack_require__(3);

var _flex2 = _interopRequireDefault(_flex);

var _lodash = __webpack_require__(1);

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TreeSelect = function (_React$Component) {
    _inherits(TreeSelect, _React$Component);

    function TreeSelect(props) {
        _classCallCheck(this, TreeSelect);

        var _this = _possibleConstructorReturn(this, (TreeSelect.__proto__ || Object.getPrototypeOf(TreeSelect)).call(this, props));

        _this.state = {
            showList: []
        };

        _this.handleSelectAll = _this.handleSelectAll.bind(_this);
        _this.handleSelect = _this.handleSelect.bind(_this);
        _this.handleShow = _this.handleShow.bind(_this);
        return _this;
    }

    _createClass(TreeSelect, [{
        key: 'handleSelectAll',
        value: function handleSelectAll(e) {
            if (e.target.checked) {
                var data = this.findAllChildrenNode(this.props.list);
                this.props.onSelect && this.props.onSelect(data);
                return;
            }
            this.props.onSelect && this.props.onSelect([]);
        }
    }, {
        key: 'handleSelect',
        value: function handleSelect(data, checked) {
            var _props = this.props,
                list = _props.list,
                selected = _props.selected;


            if (data.children) {
                if (checked) {
                    var selectData = this.findChildrenNodeByValue(list, data.value, selected);
                    this.props.onSelect && this.props.onSelect(selectData);
                } else {
                    var _selectData = this.findChildrenNodeByValue(list, data.value);
                    this.props.onSelect && this.props.onSelect(_lodash2.default.difference(selected, _selectData));
                }
            } else {
                if (checked) {
                    selected.push(data.value);
                    this.props.onSelect && this.props.onSelect(selected);
                } else {
                    var _selectData2 = _lodash2.default.without(selected, data.value);
                    this.props.onSelect && this.props.onSelect(_selectData2);
                }
            }
        }
    }, {
        key: 'findAllChildrenNode',
        value: function findAllChildrenNode(list) {
            var _this2 = this;

            var childrenNodes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

            _lodash2.default.each(list, function (data) {
                //只有便利到最后一层时才加入节点value
                if (data.children) {
                    _this2.findAllChildrenNode(data.children, childrenNodes);
                } else {
                    if (!_lodash2.default.includes(childrenNodes, data.value)) {
                        childrenNodes.push(data.value);
                    }
                }
            });
            return childrenNodes;
        }
    }, {
        key: 'findChildrenNodeByValue',
        value: function findChildrenNodeByValue(list, value) {
            var _this3 = this;

            var items = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

            _lodash2.default.each(list, function (data) {
                if (data.value === value) {
                    //只有便利到最后一层时才加入节点value
                    if (data.children) {
                        _this3.findAllChildrenNode(data.children, items);
                    } else {
                        if (!_lodash2.default.includes(items, value)) {
                            items.push(value);
                        }
                    }
                } else {
                    if (data.children) {
                        _this3.findChildrenNodeByValue(data.children, value, items);
                    }
                }
            });
            return items;
        }
    }, {
        key: 'handleShow',
        value: function handleShow(data) {
            var showList = this.state.showList;


            if (_lodash2.default.includes(showList, data.value)) {
                this.setState({ showList: _lodash2.default.without(showList, data.value) });
                return;
            }

            showList.push(data.value);
            this.setState({ showList: showList });
        }
    }, {
        key: 'renderNodeList',
        value: function renderNodeList(list) {
            var _this4 = this;

            var level = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
            var panel = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
            var _props2 = this.props,
                disabledSelected = _props2.disabledSelected,
                selected = _props2.selected;


            _lodash2.default.each(list, function (data) {
                var childrenNode = _this4.findChildrenNodeByValue(list, data.value);
                if (data.children) {
                    panel.push(_react2.default.createElement(TreeNode, {
                        key: data.value,
                        data: data,
                        childrenNode: childrenNode,
                        level: level,
                        last: false,
                        disabledSelected: disabledSelected,
                        selected: selected,
                        showList: _this4.state.showList,
                        handleSelect: _this4.handleSelect,
                        handleShow: _this4.handleShow
                    }));
                    if (_lodash2.default.includes(_this4.state.showList, data.value)) {
                        _this4.renderNodeList(data.children, level + 1, panel);
                    }
                } else {
                    panel.push(_react2.default.createElement(TreeNode, {
                        key: data.value,
                        data: data,
                        childrenNode: childrenNode,
                        level: level,
                        last: true,
                        disabledSelected: disabledSelected,
                        selected: selected,
                        showList: _this4.state.showList,
                        handleSelect: _this4.handleSelect
                    }));
                }
            });
            return panel;
        }
    }, {
        key: 'render',
        value: function render() {
            var _props3 = this.props,
                list = _props3.list,
                label = _props3.label,
                disabledSelected = _props3.disabledSelected,
                selected = _props3.selected;


            return _react2.default.createElement(
                'div',
                { className: 'tree-select' },
                _react2.default.createElement(
                    _flex2.default,
                    {
                        column: true,
                        className: 'tree-select-border'
                    },
                    disabledSelected ? undefined : _react2.default.createElement(
                        _flex2.default,
                        { flex: true, className: 'gm-border-bottom gm-padding-10 tree-select-title' },
                        _react2.default.createElement(
                            'div',
                            { style: { width: '30px' } },
                            _react2.default.createElement('input', {
                                type: 'checkbox',
                                checked: selected.length !== 0 && this.findAllChildrenNode(list).length === selected.length,
                                onChange: this.handleSelectAll
                            })
                        ),
                        _react2.default.createElement(
                            _flex2.default,
                            { flex: true, alignCenter: true },
                            label
                        )
                    ),
                    this.renderNodeList(list)
                )
            );
        }
    }]);

    return TreeSelect;
}(_react2.default.Component);

var TreeNode = function (_React$Component2) {
    _inherits(TreeNode, _React$Component2);

    function TreeNode(props) {
        _classCallCheck(this, TreeNode);

        return _possibleConstructorReturn(this, (TreeNode.__proto__ || Object.getPrototypeOf(TreeNode)).call(this, props));
    }

    _createClass(TreeNode, [{
        key: 'handleSelect',
        value: function handleSelect(data, e) {
            this.props.handleSelect && this.props.handleSelect(data, e.target.checked);
        }
    }, {
        key: 'handleShow',
        value: function handleShow(data) {
            this.props.handleShow && this.props.handleShow(data);
        }
    }, {
        key: 'render',
        value: function render() {
            var _props4 = this.props,
                data = _props4.data,
                childrenNode = _props4.childrenNode,
                level = _props4.level,
                last = _props4.last,
                disabledSelected = _props4.disabledSelected,
                selected = _props4.selected,
                showList = _props4.showList;

            var selectedFlag = false;

            if (last) {
                selectedFlag = _lodash2.default.includes(selected, data.value);
            } else {
                selectedFlag = _lodash2.default.difference(childrenNode, selected).length === 0;
            }

            return _react2.default.createElement(
                _flex2.default,
                { flex: true, className: 'gm-border-bottom gm-padding-10 tree-select-trap' },
                disabledSelected ? undefined : _react2.default.createElement(
                    'div',
                    { style: { width: '30px' } },
                    _react2.default.createElement('input', {
                        type: 'checkbox',
                        checked: selectedFlag,
                        onChange: this.handleSelect.bind(this, data)
                    })
                ),
                _react2.default.createElement(
                    _flex2.default,
                    { flex: true, alignCenter: true },
                    _react2.default.createElement(
                        'div',
                        {
                            className: data.children ? "tree-select-item" : '',
                            style: { marginLeft: Number(level) * 15 + 'px' },
                            onClick: this.handleShow.bind(this, data)
                        },
                        last ? _react2.default.createElement('div', { className: 'gm-gap-15' }) : _react2.default.createElement('span', {
                            className: _lodash2.default.includes(showList, data.value) ? "glyphicon glyphicon-minus text-primary" : "glyphicon glyphicon-plus text-primary" }),
                        '\xA0',
                        _react2.default.createElement(
                            'span',
                            { className: 'gm-padding-lr-5' },
                            data.value,
                            '\xA0',
                            data.name
                        )
                    )
                )
            );
        }
    }]);

    return TreeNode;
}(_react2.default.Component);

/**
 * list的格式为:
 * [{
 *  value: '111',
 *  name: '111',
 *  children: [{value: '222', name: '222', children:[{}...]
 *  },
 *  ...
 *  ]
 *  label:全选标签
 *  disabledSelected:是否开启select功能
 *  selected:选中的node
 *  onSelect:将选择的节点value，以数组结构暴露出去
 */


TreeSelect.propTypes = {
    list: _react2.default.PropTypes.array.isRequired,
    label: _react2.default.PropTypes.string,
    disabledSelected: _react2.default.PropTypes.bool,
    selected: _react2.default.PropTypes.array,
    onSelect: _react2.default.PropTypes.func
};

TreeSelect.defaultProps = {
    list: [],
    label: '选择全部',
    disabledSelected: false
};

exports.default = TreeSelect;

/***/ }),
/* 49 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _param = __webpack_require__(22);

var _param2 = _interopRequireDefault(_param);

var _format = __webpack_require__(21);

var _format2 = _interopRequireDefault(_format);

var _lodash = __webpack_require__(1);

var _lodash2 = _interopRequireDefault(_lodash);

var _RequestInterceptor = __webpack_require__(20);

var _RequestInterceptor2 = _interopRequireDefault(_RequestInterceptor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var setPromiseTimeout = function setPromiseTimeout(promise, ms) {
    if (ms === false) {
        return promise;
    }
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            reject('连接超时，请稍后重试');
        }, ms);
        promise.then(resolve, reject);
    });
};

var processRequest = function processRequest(config) {
    return _RequestInterceptor2.default.interceptor.request(config);
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
        return Promise.reject((0, _format2.default)('服务器错误 {status} {statusText}', res));
    }).then(function (json) {
        return _RequestInterceptor2.default.interceptor.response(json, config);
    }, function (reason) {
        return Promise.reject(_RequestInterceptor2.default.interceptor.responseError(reason, config));
    }).then(function (json) {
        if (sucCode.indexOf(json.code) > -1) {
            return json;
        } else {
            console.log('%c*** Request url: %s、code: %s、msg: %s', color, url, json.code, json.msg);
            return Promise.reject(json.msg || '未知错误');
        }
    }).catch(function (reason) {
        // reason 有点复杂，各种实现，碰到一个解决一个吧
        if (toString.call(reason) === '[object Promise]') {
            return reason.catch(function (rea) {
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
        if (_lodash2.default.isArray(codes)) {
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
            this._data = _lodash2.default.pickBy(this._data, function (value) {
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
            var p = (0, _param2.default)(t._data);
            var newUrl = t.url + (p ? (t.url.indexOf('?') > -1 ? '&' : '?') + p : '');
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

exports.default = RequestFactory;

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = contains;
function contains(root, n) {
    var node = n;
    while (node) {
        if (node === root) {
            return true;
        }
        node = node.parentNode;
    }

    return false;
};

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = createChainedFunction;
function createChainedFunction() {
    var args = arguments;
    return function chainedFunction() {
        for (var i = 0; i < args.length; i++) {
            if (args[i] && args[i].apply) {
                args[i].apply(this, arguments);
            }
        }
    };
}

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = getElementPosition;
function getElementPosition(element) {
    var top = element.offsetTop;
    var left = element.offsetLeft;
    var current = element.offsetParent;
    while (current !== null) {
        top += current.offsetTop;
        left += current.offsetLeft;
        current = current.offsetParent;
    }
    return {
        top: top,
        left: left
    };
}

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var is = {};

is.weixin = function () {
    return (/MicroMessenger/i.test(navigator.userAgent)
    );
};

exports.default = is;

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (dom) {
    var rect = dom.getBoundingClientRect();
    return rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth);
};

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (dom) {
    var rect = dom.getBoundingClientRect();
    return rect.bottom > 0 && rect.right > 0 && rect.left < (window.innerWidth || document.documentElement.clientWidth) && rect.top < (window.innerHeight || document.documentElement.clientHeight);
};

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _lodash = __webpack_require__(1);

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Checkbox = function (_React$Component) {
    _inherits(Checkbox, _React$Component);

    function Checkbox() {
        _classCallCheck(this, Checkbox);

        return _possibleConstructorReturn(this, (Checkbox.__proto__ || Object.getPrototypeOf(Checkbox)).apply(this, arguments));
    }

    _createClass(Checkbox, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                value = _props.value,
                checked = _props.checked,
                onChange = _props.onChange,
                children = _props.children,
                name = _props.name,
                inline = _props.inline;


            if (!inline) {
                return _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(
                        'label',
                        null,
                        _react2.default.createElement('input', {
                            type: 'checkbox',
                            name: name,
                            value: value,
                            checked: checked,
                            onChange: onChange
                        }),
                        children
                    )
                );
            } else {
                return _react2.default.createElement(
                    'label',
                    { className: 'checkbox-inline' },
                    _react2.default.createElement('input', {
                        type: 'checkbox',
                        name: name,
                        value: value,
                        checked: checked,
                        onChange: onChange
                    }),
                    children
                );
            }
        }
    }]);

    return Checkbox;
}(_react2.default.Component);

Checkbox.propTypes = {
    value: _react.PropTypes.any,
    onChange: _react.PropTypes.func,

    // 由CheckboxGroup 传下来
    name: _react.PropTypes.string,
    checked: _react.PropTypes.bool,
    inline: _react.PropTypes.bool
};

Checkbox.defaultProps = {
    checked: false,
    onChange: _lodash2.default.noop
};

exports.default = Checkbox;

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(2);

var _classnames2 = _interopRequireDefault(_classnames);

var _lodash = __webpack_require__(1);

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CheckboxGroup = function (_React$Component) {
    _inherits(CheckboxGroup, _React$Component);

    function CheckboxGroup() {
        _classCallCheck(this, CheckboxGroup);

        return _possibleConstructorReturn(this, (CheckboxGroup.__proto__ || Object.getPrototypeOf(CheckboxGroup)).apply(this, arguments));
    }

    _createClass(CheckboxGroup, [{
        key: 'handleChange',
        value: function handleChange(v) {
            var _props = this.props,
                onChange = _props.onChange,
                value = _props.value;

            if (value.indexOf(v) > -1) {
                onChange(_lodash2.default.without(value, v));
            } else {
                onChange([].concat(_toConsumableArray(value), [v]));
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props2 = this.props,
                onChange = _props2.onChange,
                value = _props2.value,
                inline = _props2.inline,
                className = _props2.className,
                children = _props2.children,
                name = _props2.name,
                rest = _objectWithoutProperties(_props2, ['onChange', 'value', 'inline', 'className', 'children', 'name']);

            var childList = _lodash2.default.isArray(children) ? children : [children];

            return _react2.default.createElement(
                'div',
                _extends({}, rest, { className: (0, _classnames2.default)('checkbox', className) }),
                _lodash2.default.map(childList, function (child, i) {
                    return _react2.default.cloneElement(child, {
                        key: i,
                        checked: value.indexOf(child.props.value) > -1,
                        inline: inline,
                        onChange: _this2.handleChange.bind(_this2, child.props.value),
                        name: name
                    });
                })
            );
        }
    }]);

    return CheckboxGroup;
}(_react2.default.Component);

CheckboxGroup.propTypes = {
    name: _react.PropTypes.string.isRequired,
    value: _react.PropTypes.array.isRequired,
    onChange: _react.PropTypes.func,
    inline: _react.PropTypes.bool
};

CheckboxGroup.defaultProps = {
    inline: false,
    value: [],
    onChange: _lodash2.default.noop
};

exports.default = CheckboxGroup;

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(2);

var _classnames2 = _interopRequireDefault(_classnames);

var _lodash = __webpack_require__(1);

var _lodash2 = _interopRequireDefault(_lodash);

var _validator = __webpack_require__(9);

var _validator2 = _interopRequireDefault(_validator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Form = function (_React$Component) {
    _inherits(Form, _React$Component);

    function Form(props) {
        _classCallCheck(this, Form);

        var _this = _possibleConstructorReturn(this, (Form.__proto__ || Object.getPrototypeOf(Form)).call(this, props));

        _this.handleSubmit = _this.handleSubmit.bind(_this);
        _this.state = {
            canValidate: false
        };
        return _this;
    }

    _createClass(Form, [{
        key: 'validateAll',
        value: function validateAll() {
            var children = this.props.children;

            var helpList = [];

            var childList = _lodash2.default.isArray(children) ? children : [children];

            _lodash2.default.each(childList, function (child) {
                if (child !== null && child !== undefined && child.type.displayName === 'FormItem') {
                    if (child.props.error) {
                        helpList.push({
                            label: child.props.label,
                            help: child.props.error
                        });
                    } else if (child.props.validate) {
                        var help = '';
                        if (child.props.required) {
                            help = child.props.validate(function (value) {
                                return _validator2.default.validate(_validator2.default.TYPE.required, value);
                            });
                        } else {
                            help = child.props.validate();
                        }
                        if (help) {
                            helpList.push({
                                label: child.props.label,
                                help: help
                            });
                        }
                    }
                }
            });

            return helpList.length === 0 ? null : helpList;
        }
    }, {
        key: 'handleSubmit',
        value: function handleSubmit(e) {
            e.preventDefault();
            this.setState({
                canValidate: true
            });

            this.props.onSubmit(e);

            var err = this.validateAll();
            if (!err) {
                this.props.onSubmitValidated();
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props = this.props,
                inline = _props.inline,
                horizontal = _props.horizontal,
                labelWidth = _props.labelWidth,
                className = _props.className,
                children = _props.children,
                onSubmitValidated = _props.onSubmitValidated,
                rest = _objectWithoutProperties(_props, ['inline', 'horizontal', 'labelWidth', 'className', 'children', 'onSubmitValidated']);

            var childList = _lodash2.default.isArray(children) ? children : [children];

            childList = _lodash2.default.map(childList, function (child, i) {
                return child !== null && child !== undefined && child.type.displayName === 'FormItem' ? _react2.default.cloneElement(child, {
                    key: i,
                    horizontal: horizontal,
                    inline: inline,
                    labelWidth: labelWidth,
                    canValidate: _this2.state.canValidate
                }) : child;
            });

            return _react2.default.createElement(
                'form',
                _extends({}, rest, {
                    className: (0, _classnames2.default)('gm-form', {
                        'form-inline': inline,
                        'form-horizontal': horizontal
                    }, className),
                    onSubmit: this.handleSubmit
                }),
                childList
            );
        }
    }]);

    return Form;
}(_react2.default.Component);

Form.propTypes = {
    inline: _react.PropTypes.bool,
    horizontal: _react.PropTypes.bool,
    labelWidth: _react.PropTypes.string, // horizontal true 才有效
    onSubmit: _react.PropTypes.func, // 默认处理了 preventDefault,
    onSubmitValidated: _react.PropTypes.func
};

Form.defaultProps = {
    inline: false,
    horizontal: false,
    onSubmit: _lodash2.default.noop,
    onSubmitValidated: _lodash2.default.noop
};

exports.default = Form;

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FormButton = function (_React$Component) {
    _inherits(FormButton, _React$Component);

    function FormButton() {
        _classCallCheck(this, FormButton);

        return _possibleConstructorReturn(this, (FormButton.__proto__ || Object.getPrototypeOf(FormButton)).apply(this, arguments));
    }

    _createClass(FormButton, [{
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "div",
                { className: "text-center" },
                this.props.children
            );
        }
    }]);

    return FormButton;
}(_react2.default.Component);

exports.default = FormButton;

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(2);

var _classnames2 = _interopRequireDefault(_classnames);

var _flex = __webpack_require__(3);

var _flex2 = _interopRequireDefault(_flex);

var _lodash = __webpack_require__(1);

var _lodash2 = _interopRequireDefault(_lodash);

var _validator = __webpack_require__(9);

var _validator2 = _interopRequireDefault(_validator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FormControl = function (_React$Component) {
    _inherits(FormControl, _React$Component);

    function FormControl() {
        _classCallCheck(this, FormControl);

        return _possibleConstructorReturn(this, (FormControl.__proto__ || Object.getPrototypeOf(FormControl)).apply(this, arguments));
    }

    _createClass(FormControl, [{
        key: 'render',
        value: function render() {
            var children = this.props.children;
            var _children$props = children.props,
                className = _children$props.className,
                inputClassName = _children$props.inputClassName;


            var child = children;

            if (child.type === 'input') {
                return _react2.default.cloneElement(child, {
                    className: (0, _classnames2.default)('form-control', className)
                });
            } else if (child.type === 'textarea') {
                return _react2.default.cloneElement(child, {
                    className: (0, _classnames2.default)('form-control', className)
                });
            } else if (child.type === 'select') {
                return _react2.default.cloneElement(child, {
                    className: (0, _classnames2.default)('form-control', className)
                });
            } else if (child.type.displayName === 'DateRangePicker') {
                return _react2.default.cloneElement(child, {
                    inputClassName: (0, _classnames2.default)('form-control', inputClassName)
                });
            } else if (child.type.displayName === 'InputNumber' || child.type.displayName === 'Search') {
                return _react2.default.cloneElement(child, {
                    className: (0, _classnames2.default)('form-control', className)
                });
            }

            return child;
        }
    }]);

    return FormControl;
}(_react2.default.Component);

var FormItem = function (_React$Component2) {
    _inherits(FormItem, _React$Component2);

    function FormItem() {
        _classCallCheck(this, FormItem);

        return _possibleConstructorReturn(this, (FormItem.__proto__ || Object.getPrototypeOf(FormItem)).apply(this, arguments));
    }

    _createClass(FormItem, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                label = _props.label,
                labelWidth = _props.labelWidth,
                inline = _props.inline,
                horizontal = _props.horizontal,
                required = _props.required,
                canValidate = _props.canValidate,
                validate = _props.validate,
                error = _props.error,
                help = _props.help,
                className = _props.className,
                children = _props.children,
                rest = _objectWithoutProperties(_props, ['label', 'labelWidth', 'inline', 'horizontal', 'required', 'canValidate', 'validate', 'error', 'help', 'className', 'children']);

            if (canValidate && validate !== undefined) {
                if (required) {
                    help = validate(function (value) {
                        return _validator2.default.validate(_validator2.default.TYPE.required, value);
                    });
                } else {
                    help = validate();
                }
                error = !!help;
            }

            return _react2.default.createElement(
                _flex2.default,
                _extends({ column: !horizontal && !inline }, rest, { className: (0, _classnames2.default)('gm-form-group', className, {
                        'has-error': error
                    }) }),
                _react2.default.createElement(
                    _flex2.default,
                    { justifyEnd: horizontal, width: labelWidth, className: 'gm-form-label control-label' },
                    required ? _react2.default.createElement(
                        'span',
                        { style: { color: 'red' } },
                        '*'
                    ) : '',
                    label,
                    label && inline ? '：' : null
                ),
                _react2.default.createElement(
                    _flex2.default,
                    { flex: true, column: true },
                    _react2.default.createElement(
                        'div',
                        null,
                        _lodash2.default.isArray(children) ? children : _react2.default.createElement(
                            FormControl,
                            null,
                            children
                        ),
                        error && help ? _react2.default.createElement(
                            'div',
                            { className: (0, _classnames2.default)({ 'help-block': error }) },
                            help
                        ) : null
                    )
                )
            );
        }
    }]);

    return FormItem;
}(_react2.default.Component);

FormItem.displayName = 'FormItem';
FormItem.propTypes = {
    required: _react.PropTypes.bool,
    label: _react.PropTypes.string,

    validate: _react.PropTypes.func, // 有 validate, 则 error help无效
    error: _react.PropTypes.bool,
    help: _react.PropTypes.string,

    // 以下先不要用， 由Form传过来的
    horizontal: _react.PropTypes.bool, // 由Form传过来
    inline: _react.PropTypes.bool, // 由Form传过来
    labelWidth: _react.PropTypes.string, // horizontal true 才有效， 可由Form传过来
    canValidate: _react.PropTypes.bool
};

exports.default = FormItem;

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _lodash = __webpack_require__(1);

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Radio = function (_React$Component) {
    _inherits(Radio, _React$Component);

    function Radio() {
        _classCallCheck(this, Radio);

        return _possibleConstructorReturn(this, (Radio.__proto__ || Object.getPrototypeOf(Radio)).apply(this, arguments));
    }

    _createClass(Radio, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                value = _props.value,
                checked = _props.checked,
                onChange = _props.onChange,
                children = _props.children,
                inline = _props.inline,
                name = _props.name;


            if (!inline) {
                return _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(
                        'label',
                        null,
                        _react2.default.createElement('input', {
                            type: 'radio',
                            name: name,
                            value: value,
                            checked: checked,
                            onChange: onChange
                        }),
                        children
                    )
                );
            } else {
                return _react2.default.createElement(
                    'label',
                    { className: 'radio-inline' },
                    _react2.default.createElement('input', {
                        type: 'radio',
                        name: name,
                        value: value,
                        checked: checked,
                        onChange: onChange
                    }),
                    children
                );
            }
        }
    }]);

    return Radio;
}(_react2.default.Component);

Radio.propTypes = {
    value: _react.PropTypes.any,
    onChange: _react.PropTypes.func,

    // 由RadioGroup 传下来
    checked: _react.PropTypes.bool,
    name: _react.PropTypes.string,
    inline: _react.PropTypes.bool
};

Radio.defaultProps = {
    checked: false,
    onChange: _lodash2.default.noop
};

exports.default = Radio;

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(2);

var _classnames2 = _interopRequireDefault(_classnames);

var _lodash = __webpack_require__(1);

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RadioGroup = function (_React$Component) {
    _inherits(RadioGroup, _React$Component);

    function RadioGroup() {
        _classCallCheck(this, RadioGroup);

        return _possibleConstructorReturn(this, (RadioGroup.__proto__ || Object.getPrototypeOf(RadioGroup)).apply(this, arguments));
    }

    _createClass(RadioGroup, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                _onChange = _props.onChange,
                value = _props.value,
                inline = _props.inline,
                className = _props.className,
                children = _props.children,
                name = _props.name,
                rest = _objectWithoutProperties(_props, ['onChange', 'value', 'inline', 'className', 'children', 'name']);

            var childList = _lodash2.default.isArray(children) ? children : [children];

            return _react2.default.createElement(
                'div',
                _extends({}, rest, { className: (0, _classnames2.default)('radio', className) }),
                _lodash2.default.map(childList, function (child, i) {
                    return _react2.default.cloneElement(child, {
                        key: i,
                        checked: child.props.value === value,
                        inline: inline,
                        onChange: function onChange() {
                            _onChange(child.props.value);
                        },
                        name: name
                    });
                })
            );
        }
    }]);

    return RadioGroup;
}(_react2.default.Component);

RadioGroup.propTypes = {
    name: _react.PropTypes.string.isRequired,
    value: _react.PropTypes.any,
    onChange: _react.PropTypes.func,
    inline: _react.PropTypes.bool
};

RadioGroup.defaultProps = {
    inline: false,
    onChange: _lodash2.default.noop
};

exports.default = RadioGroup;

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Option = function (_React$Component) {
    _inherits(Option, _React$Component);

    function Option() {
        _classCallCheck(this, Option);

        return _possibleConstructorReturn(this, (Option.__proto__ || Object.getPrototypeOf(Option)).apply(this, arguments));
    }

    _createClass(Option, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement('option', this.props);
        }
    }]);

    return Option;
}(_react2.default.Component);

Option.displayName = 'Option';

Option.propTypes = {
    value: _react.PropTypes.any.isRequired
};

exports.default = Option;

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(2);

var _classnames2 = _interopRequireDefault(_classnames);

var _lodash = __webpack_require__(1);

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Select = function (_React$Component) {
    _inherits(Select, _React$Component);

    function Select(props) {
        _classCallCheck(this, Select);

        var _this = _possibleConstructorReturn(this, (Select.__proto__ || Object.getPrototypeOf(Select)).call(this, props));

        _this.handleChange = _this.handleChange.bind(_this);
        _this.refSelect = null;
        return _this;
    }

    _createClass(Select, [{
        key: 'handleChange',
        value: function handleChange() {
            var _props = this.props,
                onChange = _props.onChange,
                children = _props.children,
                multiple = _props.multiple;

            var childList = _lodash2.default.isArray(children) ? children : [children];
            var result = [];
            _lodash2.default.each(this.refSelect.childNodes, function (node, i) {
                if (node.selected) {
                    result.push(childList[i].props.value);
                }
            });
            onChange(multiple ? result : result[0]);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props2 = this.props,
                value = _props2.value,
                multiple = _props2.multiple,
                onChange = _props2.onChange,
                className = _props2.className,
                children = _props2.children,
                rest = _objectWithoutProperties(_props2, ['value', 'multiple', 'onChange', 'className', 'children']);

            return _react2.default.createElement(
                'select',
                _extends({
                    ref: function ref(_ref) {
                        return _this2.refSelect = _ref;
                    }
                }, rest, {
                    multiple: multiple,
                    value: value,
                    onChange: this.handleChange,
                    className: (0, _classnames2.default)('form-control', className)
                }),
                children
            );
        }
    }]);

    return Select;
}(_react2.default.Component);

Select.displayName = 'Select';

Select.propTypes = {
    multiple: _react.PropTypes.bool,
    value: _react.PropTypes.any.isRequired,
    onChange: _react.PropTypes.func.isRequired
};

Select.defaultProps = {
    multiple: false
};

exports.default = Select;

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _lodash = __webpack_require__(1);

var _lodash2 = _interopRequireDefault(_lodash);

var _flex = __webpack_require__(3);

var _flex2 = _interopRequireDefault(_flex);

var _select = __webpack_require__(18);

var _select2 = _interopRequireDefault(_select);

var _util = __webpack_require__(68);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Option = _select2.default.Option;

var Transfer = function (_React$Component) {
    _inherits(Transfer, _React$Component);

    function Transfer(props) {
        _classCallCheck(this, Transfer);

        var _this = _possibleConstructorReturn(this, (Transfer.__proto__ || Object.getPrototypeOf(Transfer)).call(this, props));

        _this.state = {
            query: '',
            selectedSourceValues: [],
            selectedTargetValues: []
        };
        _this.handleQuery = _this.handleQuery.bind(_this);
        _this.handleSourceChange = _this.handleSourceChange.bind(_this);
        _this.handleTargetChange = _this.handleTargetChange.bind(_this);
        _this.handleSourceDoubleClick = _this.handleSourceDoubleClick.bind(_this);
        _this.handleTargetDoubleClick = _this.handleTargetDoubleClick.bind(_this);
        _this.handlePickAll = _this.handlePickAll.bind(_this);
        _this.handleRemoveAll = _this.handleRemoveAll.bind(_this);
        _this.handleToRightClick = _this.handleToRightClick.bind(_this);
        _this.handleToLeftClick = _this.handleToLeftClick.bind(_this);
        return _this;
    }

    _createClass(Transfer, [{
        key: 'handleQuery',
        value: function handleQuery(e) {
            this.setState({
                query: e.target.value
            });
        }
    }, {
        key: 'handleSourceChange',
        value: function handleSourceChange(selectedSourceValues) {
            this.setState({
                selectedSourceValues: selectedSourceValues
            });
        }
    }, {
        key: 'handleTargetChange',
        value: function handleTargetChange(selectedTargetValues) {
            this.setState({
                selectedTargetValues: selectedTargetValues
            });
        }
    }, {
        key: 'handleSourceDoubleClick',
        value: function handleSourceDoubleClick() {
            // 这个时候 selectedSourceValues 有值
            var _props = this.props,
                onSelect = _props.onSelect,
                selectedValues = _props.selectedValues;
            var selectedSourceValues = this.state.selectedSourceValues;


            onSelect(selectedValues.concat(selectedSourceValues));
            this.setState({
                selectedSourceValues: [],
                selectedTargetValues: []
            });
        }
    }, {
        key: 'handleTargetDoubleClick',
        value: function handleTargetDoubleClick() {
            var _props2 = this.props,
                onSelect = _props2.onSelect,
                selectedValues = _props2.selectedValues;
            var selectedTargetValues = this.state.selectedTargetValues;


            onSelect(_lodash2.default.difference(selectedValues, selectedTargetValues));
            this.setState({
                selectedSourceValues: [],
                selectedTargetValues: []
            });
        }
    }, {
        key: 'handlePickAll',
        value: function handlePickAll() {
            var _props3 = this.props,
                onSelect = _props3.onSelect,
                list = _props3.list;


            onSelect(_lodash2.default.map(list, function (v) {
                return v.value;
            }));
            this.setState({
                selectedSourceValues: [],
                selectedTargetValues: []
            });
        }
    }, {
        key: 'handleRemoveAll',
        value: function handleRemoveAll() {
            var onSelect = this.props.onSelect;


            onSelect([]);
            this.setState({
                selectedSourceValues: [],
                selectedTargetValues: []
            });
        }
    }, {
        key: 'handleToRightClick',
        value: function handleToRightClick() {
            var _props4 = this.props,
                onSelect = _props4.onSelect,
                selectedValues = _props4.selectedValues;
            var selectedSourceValues = this.state.selectedSourceValues;


            onSelect(selectedValues.concat(selectedSourceValues));
            this.setState({
                selectedSourceValues: [],
                selectedTargetValues: []
            });
        }
    }, {
        key: 'handleToLeftClick',
        value: function handleToLeftClick() {
            var _props5 = this.props,
                onSelect = _props5.onSelect,
                selectedValues = _props5.selectedValues;
            var selectedTargetValues = this.state.selectedTargetValues;


            onSelect(_lodash2.default.difference(selectedValues, selectedTargetValues));
            this.setState({
                selectedSourceValues: [],
                selectedTargetValues: []
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _props6 = this.props,
                list = _props6.list,
                titles = _props6.titles,
                selectedValues = _props6.selectedValues,
                withFilter = _props6.withFilter,
                listStyle = _props6.listStyle;
            var _state = this.state,
                query = _state.query,
                selectedSourceValues = _state.selectedSourceValues,
                selectedTargetValues = _state.selectedTargetValues;


            var selectedList = [];

            // 过滤掉已选中的
            _lodash2.default.each(list, function (v) {
                if (selectedValues.indexOf(v.value) > -1) {
                    selectedList.push(v);
                }
            });

            // 调用方自定义过滤
            list = _lodash2.default.filter(list, function (v) {
                return selectedValues.indexOf(v.value) === -1;
            });
            if (withFilter) {
                list = withFilter(list, query);
            }

            return _react2.default.createElement(
                'div',
                { className: 'gm-transfer' },
                _react2.default.createElement(
                    _flex2.default,
                    null,
                    _react2.default.createElement(
                        _flex2.default,
                        { column: true, className: 'gm-transfer-list', style: listStyle },
                        _react2.default.createElement(
                            'div',
                            { className: 'gm-transfer-list-title' },
                            titles[0]
                        ),
                        withFilter ? _react2.default.createElement(
                            'div',
                            { className: 'input-group input-group-sm gm-transfer-list-filter' },
                            _react2.default.createElement(
                                'span',
                                { className: 'input-group-addon' },
                                _react2.default.createElement('i', { className: 'glyphicon glyphicon-search' })
                            ),
                            _react2.default.createElement('input', {
                                type: 'text',
                                className: 'form-control',
                                value: query,
                                onChange: this.handleQuery
                            })
                        ) : null,
                        _react2.default.createElement(
                            _select2.default,
                            {
                                multiple: true,
                                value: selectedSourceValues,
                                onChange: this.handleSourceChange,
                                onDoubleClick: this.handleSourceDoubleClick
                            },
                            _lodash2.default.map(list, function (v) {
                                return _react2.default.createElement(
                                    Option,
                                    { key: v.value, value: v.value },
                                    v.name
                                );
                            })
                        ),
                        _react2.default.createElement(
                            'button',
                            {
                                className: 'gm-transfer-list-all btn btn-default btn-sm',
                                onClick: this.handlePickAll
                            },
                            '\u9009\u4E2D\u5168\u90E8'
                        )
                    ),
                    _react2.default.createElement(
                        _flex2.default,
                        { column: true, justifyCenter: true, alignCenter: true, className: 'gm-transfer-operation' },
                        _react2.default.createElement(
                            'button',
                            {
                                disabled: selectedSourceValues.length === 0,
                                className: 'btn btn-xs btn-default gm-margin-bottom-5',
                                onClick: this.handleToRightClick
                            },
                            '>'
                        ),
                        _react2.default.createElement(
                            'button',
                            {
                                disabled: selectedTargetValues.length === 0,
                                className: 'btn btn-xs btn-default',
                                onClick: this.handleToLeftClick
                            },
                            '<'
                        )
                    ),
                    _react2.default.createElement(
                        _flex2.default,
                        { column: true, className: 'gm-transfer-list', style: listStyle },
                        _react2.default.createElement(
                            'div',
                            { className: 'gm-transfer-list-title' },
                            titles[1]
                        ),
                        _react2.default.createElement(
                            _select2.default,
                            {
                                multiple: true,
                                value: selectedTargetValues,
                                onChange: this.handleTargetChange,
                                onDoubleClick: this.handleTargetDoubleClick
                            },
                            _lodash2.default.map(selectedList, function (v) {
                                return _react2.default.createElement(
                                    Option,
                                    { key: v.value, value: v.value },
                                    v.name
                                );
                            })
                        ),
                        _react2.default.createElement(
                            'button',
                            {
                                className: 'gm-transfer-list-all btn btn-default btn-sm',
                                onClick: this.handleRemoveAll
                            },
                            '\u5220\u9664\u5168\u90E8'
                        )
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'gm-text-desc' },
                    '\u6309\u4E0B',
                    _util.isMac ? 'Command' : 'Control',
                    '\u9009\u62E9\u591A\u4E2A\u503C'
                )
            );
        }
    }]);

    return Transfer;
}(_react2.default.Component);

Transfer.propTypes = {
    titles: _react.PropTypes.array,
    list: _react.PropTypes.array.isRequired,
    selectedValues: _react.PropTypes.array.isRequired,
    onSelect: _react.PropTypes.func.isRequired,
    withFilter: _react.PropTypes.func,
    listStyle: _react.PropTypes.object
};

Transfer.defaultProps = {
    titles: ['待选择', '已选择'],
    listStyle: {
        width: '250px',
        height: '300px'
    }
};

exports.default = Transfer;

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _gmUtil = __webpack_require__(7);

var _gmUtil2 = _interopRequireDefault(_gmUtil);

var _pagination = __webpack_require__(15);

var _pagination2 = _interopRequireDefault(_pagination);

var _pagination3 = __webpack_require__(16);

var _pagination4 = _interopRequireDefault(_pagination3);

var _index = __webpack_require__(12);

var _index2 = _interopRequireDefault(_index);

var _form = __webpack_require__(34);

var _form2 = _interopRequireDefault(_form);

var _import_lead = __webpack_require__(35);

var _import_lead2 = _interopRequireDefault(_import_lead);

var _storage = __webpack_require__(43);

var _storage2 = _interopRequireDefault(_storage);

var _calendar = __webpack_require__(8);

var _calendar2 = _interopRequireDefault(_calendar);

var _datepicker = __webpack_require__(28);

var _datepicker2 = _interopRequireDefault(_datepicker);

var _daterangepicker = __webpack_require__(29);

var _daterangepicker2 = _interopRequireDefault(_daterangepicker);

var _tip = __webpack_require__(46);

var _tip2 = _interopRequireDefault(_tip);

var _nprogress = __webpack_require__(38);

var _nprogress2 = _interopRequireDefault(_nprogress);

var _divider = __webpack_require__(31);

var _divider2 = _interopRequireDefault(_divider);

var _dialog = __webpack_require__(30);

var _dialog2 = _interopRequireDefault(_dialog);

var _flex = __webpack_require__(3);

var _flex2 = _interopRequireDefault(_flex);

var _timespan = __webpack_require__(19);

var _timespan2 = _interopRequireDefault(_timespan);

var _timespanpicker = __webpack_require__(45);

var _timespanpicker2 = _interopRequireDefault(_timespanpicker);

var _drop_select = __webpack_require__(33);

var _drop_select2 = _interopRequireDefault(_drop_select);

var _search = __webpack_require__(17);

var _search2 = _interopRequireDefault(_search);

var _filterSearch = __webpack_require__(41);

var _filterSearch2 = _interopRequireDefault(_filterSearch);

var _switch = __webpack_require__(44);

var _switch2 = _interopRequireDefault(_switch);

var _sheet = __webpack_require__(42);

var _sheet2 = _interopRequireDefault(_sheet);

var _cascader = __webpack_require__(10);

var _cascader2 = _interopRequireDefault(_cascader);

var _cascader3 = __webpack_require__(26);

var _cascader4 = _interopRequireDefault(_cascader3);

var _trigger = __webpack_require__(4);

var _trigger2 = _interopRequireDefault(_trigger);

var _loading = __webpack_require__(37);

var _loading2 = _interopRequireDefault(_loading);

var _input = __webpack_require__(36);

var _input2 = _interopRequireDefault(_input);

var _layout_root = __webpack_require__(13);

var _layout_root2 = _interopRequireDefault(_layout_root);

var _modal = __webpack_require__(14);

var _modal2 = _interopRequireDefault(_modal);

var _collapse = __webpack_require__(11);

var _collapse2 = _interopRequireDefault(_collapse);

var _drop_down = __webpack_require__(32);

var _drop_down2 = _interopRequireDefault(_drop_down);

var _tree_select = __webpack_require__(48);

var _tree_select2 = _interopRequireDefault(_tree_select);

var _quick = __webpack_require__(39);

var _radio = __webpack_require__(40);

var _radio2 = _interopRequireDefault(_radio);

var _checkbox = __webpack_require__(27);

var _checkbox2 = _interopRequireDefault(_checkbox);

var _validator = __webpack_require__(9);

var _validator2 = _interopRequireDefault(_validator);

var _transfer = __webpack_require__(47);

var _transfer2 = _interopRequireDefault(_transfer);

var _select = __webpack_require__(18);

var _select2 = _interopRequireDefault(_select);

__webpack_require__(49);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SheetColumn = _sheet2.default.SheetColumn,
    SheetAction = _sheet2.default.SheetAction,
    SheetSelect = _sheet2.default.SheetSelect,
    SheetBatchAction = _sheet2.default.SheetBatchAction;
var DropDownItems = _drop_down2.default.DropDownItems,
    DropDownItem = _drop_down2.default.DropDownItem;
var FormItem = _form2.default.FormItem,
    FormButton = _form2.default.FormButton;
var RadioGroup = _radio2.default.RadioGroup;
var CheckboxGroup = _checkbox2.default.CheckboxGroup;
var Option = _select2.default.Option;


module.exports = {
    Util: _gmUtil2.default,
    Pagination: _pagination2.default,
    PaginationText: _pagination4.default,
    Form: _form2.default, FormItem: FormItem, FormButton: FormButton,
    Calendar: _calendar2.default,
    DatePicker: _datepicker2.default,
    DateRangePicker: _daterangepicker2.default,
    ImportLead: _import_lead2.default,
    Dropper: _index2.default,
    Storage: _storage2.default,
    Tip: _tip2.default,
    NProgress: _nprogress2.default,
    Divider: _divider2.default,
    Dialog: _dialog2.default,
    TimeSpan: _timespan2.default,
    Flex: _flex2.default,
    TimeSpanPicker: _timespanpicker2.default,
    DropSelect: _drop_select2.default,
    SearchSelect: _search2.default,
    FilterSearchSelect: _filterSearch2.default,
    Cascader: _cascader2.default,
    CascaderSelect: _cascader4.default,
    Switch: _switch2.default,
    Sheet: _sheet2.default,
    SheetColumn: SheetColumn,
    SheetAction: SheetAction,
    SheetSelect: SheetSelect,
    SheetBatchAction: SheetBatchAction,
    Trigger: _trigger2.default,
    Loading: _loading2.default,
    InputNumber: _input2.default,
    LayoutRoot: _layout_root2.default,
    Modal: _modal2.default,
    Collapse: _collapse2.default,
    DropDown: _drop_down2.default, DropDownItems: DropDownItems, DropDownItem: DropDownItem,
    TreeSelect: _tree_select2.default,
    QuickInfo: _quick.QuickInfo,
    QuickInfoCell: _quick.QuickInfoCell,
    QuickPanel: _quick.QuickPanel,
    QuickFilter: _quick.QuickFilter,
    QuickTab: _quick.QuickTab,
    QuickDesc: _quick.QuickDesc,
    Validator: _validator2.default,
    Radio: _radio2.default, RadioGroup: RadioGroup,
    Checkbox: _checkbox2.default, CheckboxGroup: CheckboxGroup,
    Select: _select2.default, Option: Option,
    Transfer: _transfer2.default
};

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isMac = window.navigator.userAgent.indexOf('Mac') > -1;

module.exports = {
    isMac: isMac
};

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _validator = __webpack_require__(24);

var _validator2 = _interopRequireDefault(_validator);

var _type = __webpack_require__(23);

var _type2 = _interopRequireDefault(_type);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var pattern = {
    email: /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/,
    url: new RegExp('^(?!mailto:)(?:(?:http|https|ftp)://|//)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$', 'i'),
    number: /[+-]?((\d+.\d+)|(\d+))/,
    number_or_letter: /[a-zA-Z0-9]/
};

_validator2.default.register(_type2.default.required, [{
    help: '请填写',
    required: true
}]);

_validator2.default.register(_type2.default.email, [{
    help: '请填写邮件地址',
    validate: function validate(value) {
        return pattern.email.test(value);
    }
}]);

_validator2.default.register(_type2.default.url, [{
    help: '请填写网址',
    validate: function validate(value) {
        return pattern.url.test(value);
    }
}]);

_validator2.default.register(_type2.default.number, [{
    help: '请填写数字',
    validate: function validate(value) {
        return pattern.number.test(value);
    }
}]);

_validator2.default.register(_type2.default.number_or_letter, [{
    help: '请填写字母或数字',
    validate: function validate(value) {
        return pattern.number_or_letter.test(value);
    }
}]);

/***/ })
/******/ ]);
});