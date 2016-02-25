(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("underscore"), require("react-dom"), require("react-bootstrap"), require("moment"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "underscore", "react-dom", "react-bootstrap", "moment"], factory);
	else if(typeof exports === 'object')
		exports["ReactGM"] = factory(require("react"), require("underscore"), require("react-dom"), require("react-bootstrap"), require("moment"));
	else
		root["ReactGM"] = factory(root["react"], root["underscore"], root["react-dom"], root["react-bootstrap"], root["moment"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_6__) {
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

	var _gridComponent = __webpack_require__(22);

	var _gridComponent2 = _interopRequireDefault(_gridComponent);

	var _paginationComponent = __webpack_require__(9);

	var _paginationComponent2 = _interopRequireDefault(_paginationComponent);

	var _paginationTextComponent = __webpack_require__(10);

	var _paginationTextComponent2 = _interopRequireDefault(_paginationTextComponent);

	var _droperComponent = __webpack_require__(7);

	var _droperComponent2 = _interopRequireDefault(_droperComponent);

	var _formerComponent = __webpack_require__(21);

	var _formerComponent2 = _interopRequireDefault(_formerComponent);

	var _validate = __webpack_require__(11);

	var _validate2 = _interopRequireDefault(_validate);

	var _validateMixin = __webpack_require__(29);

	var _validateMixin2 = _interopRequireDefault(_validateMixin);

	var _importLeadComponent = __webpack_require__(24);

	var _importLeadComponent2 = _interopRequireDefault(_importLeadComponent);

	var _storageComponent = __webpack_require__(27);

	var _storageComponent2 = _interopRequireDefault(_storageComponent);

	var _calendarComponent = __webpack_require__(5);

	var _calendarComponent2 = _interopRequireDefault(_calendarComponent);

	var _datepickerComponent = __webpack_require__(18);

	var _datepickerComponent2 = _interopRequireDefault(_datepickerComponent);

	var _daterangepicker = __webpack_require__(19);

	var _daterangepicker2 = _interopRequireDefault(_daterangepicker);

	var _tip = __webpack_require__(28);

	var _tip2 = _interopRequireDefault(_tip);

	var _nprogress = __webpack_require__(26);

	var _nprogress2 = _interopRequireDefault(_nprogress);

	var _hr = __webpack_require__(23);

	var _hr2 = _interopRequireDefault(_hr);

	var _dialog = __webpack_require__(20);

	var _dialog2 = _interopRequireDefault(_dialog);

	var _navigation = __webpack_require__(25);

	var _navigation2 = _interopRequireDefault(_navigation);

	var _flex = __webpack_require__(8);

	var _flex2 = _interopRequireDefault(_flex);

	var _gmUtil = __webpack_require__(14);

	var _gmUtil2 = _interopRequireDefault(_gmUtil);

	__webpack_require__(32);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	    Grid: _gridComponent2.default,
	    Pagination: _paginationComponent2.default,
	    PaginationText: _paginationTextComponent2.default,
	    Former: _formerComponent2.default,
	    Calendar: _calendarComponent2.default,
	    DatePicker: _datepickerComponent2.default,
	    DateRangePicker: _daterangepicker2.default,
	    ValidateMixin: _validateMixin2.default,
	    Validate: _validate2.default,
	    ImportLead: _importLeadComponent2.default,
	    Droper: _droperComponent2.default,
	    Storage: _storageComponent2.default,
	    Tip: _tip2.default,
	    NProgress: _nprogress2.default,
	    Hr: _hr2.default,
	    Dialog: _dialog2.default,
	    Navigation: _navigation2.default,
	    Flex: _flex2.default,
	    Util: _gmUtil2.default
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
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_4__;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _moment = __webpack_require__(6);

	var _moment2 = _interopRequireDefault(_moment);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Day = _react2.default.createClass({
	    displayName: 'Day',

	    render: function render() {
	        var now = this.props.nowMoment;
	        var m = this.props.moment;
	        var selected = this.props.selected;

	        var className = ['gm-calendar-day'];
	        if (now.month() > m.month()) {
	            className.push('gm-calendar-day-old');
	        } else if (now.month() < m.month()) {
	            className.push('gm-calendar-day-new');
	        }

	        if (+selected.startOf('day') === +m.startOf('day')) {
	            className.push('gm-calendar-active');
	        }

	        return _react2.default.createElement(
	            'span',
	            { className: className.join(' '), onClick: this.handleClick },
	            m.date()
	        );
	    },
	    handleClick: function handleClick() {
	        this.props.onClick(this.props.moment);
	    }
	});

	var Calendar = _react2.default.createClass({
	    displayName: 'Calendar',

	    propTypes: {
	        selected: _react2.default.PropTypes.object,
	        onSelect: _react2.default.PropTypes.func
	    },
	    getDefaultProps: function getDefaultProps() {
	        return {
	            selected: new Date(),
	            onSelect: function onSelect() {}
	        };
	    },
	    getInitialState: function getInitialState() {
	        return {
	            selected: this.props.selected, // 调用方的时间
	            moment: (0, _moment2.default)(this.props.selected), // 日历内的时间
	            isSelectMonth: false,
	            weekDays: ['日', '一', '二', '三', '四', '五', '六']
	        };
	    },
	    componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	        if (nextProps.selected) {
	            this.setState({
	                selected: nextProps.selected
	            });
	        }
	    },
	    handleChangeMonth: function handleChangeMonth(month) {
	        this.setState({
	            moment: this.state.moment.month(month),
	            isSelectMonth: false
	        });
	    },
	    handleSelectMonth: function handleSelectMonth() {
	        this.setState({
	            isSelectMonth: !this.state.isSelectMonth
	        });
	    },
	    handleSelectDay: function handleSelectDay(m) {
	        this.props.onSelect(m.toDate());
	    },
	    renderHead: function renderHead() {
	        var m = (0, _moment2.default)(this.state.moment);
	        var month = m.month();
	        return _react2.default.createElement(
	            'div',
	            { className: 'gm-calendar-head text-center clearfix' },
	            _react2.default.createElement(
	                'a',
	                { href: 'javascript:;', className: 'gm-calendar-head-pre pull-left',
	                    onClick: this.handleChangeMonth.bind(this, month - 1) },
	                _react2.default.createElement('i', { className: 'icon ico-chevron-left' })
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
	                { href: 'javascript:;', className: 'gm-calendar-head-next pull-right',
	                    onClick: this.handleChangeMonth.bind(this, month + 1) },
	                _react2.default.createElement('i', {
	                    className: 'icon ico-chevron-right' })
	            )
	        );
	    },
	    renderWeek: function renderWeek() {
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
	    },
	    renderMonth: function renderMonth() {
	        var month = this.state.moment.month();
	        var months = [];
	        var className = 'gm-calendar-month';
	        for (var i = 0; i < 12; i++) {
	            months.push(_react2.default.createElement(
	                'span',
	                { key: i, className: i === month ? className + " gm-calendar-active" : className,
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
	    },
	    renderContent: function renderContent() {
	        var m = (0, _moment2.default)(this.state.moment).startOf('month').day(0).add(-1, 'day');
	        var days = [];

	        for (var i = 0; i < 42; i++) {
	            days.push(_react2.default.createElement(Day, { key: i, selected: (0, _moment2.default)(this.state.selected), nowMoment: this.state.moment,
	                moment: (0, _moment2.default)(m.add(1, 'day')), onClick: this.handleSelectDay }));
	        }

	        return _react2.default.createElement(
	            'div',
	            { className: 'gm-calendar-content' },
	            days
	        );
	    },
	    render: function render() {
	        var t = this;
	        return _react2.default.createElement(
	            'div',
	            { className: 'gm-calendar' },
	            t.renderHead(),
	            t.renderWeek(),
	            t.renderContent(),
	            t.state.isSelectMonth ? t.renderMonth() : undefined
	        );
	    }
	});

	exports.default = Calendar;

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_6__;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Droper = function (_React$Component) {
	    _inherits(Droper, _React$Component);

	    function Droper(props, context) {
	        _classCallCheck(this, Droper);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Droper).call(this, props, context));

	        _this.onClick = _this.onClick.bind(_this);
	        _this.onDragEnter = _this.onDragEnter.bind(_this);
	        _this.onDragLeave = _this.onDragLeave.bind(_this);
	        _this.onDragOver = _this.onDragOver.bind(_this);
	        _this.onDrop = _this.onDrop.bind(_this);

	        _this.state = {
	            isDragActive: false
	        };
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

	            return _react2.default.createElement(
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
	                _react2.default.createElement('input', {
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
	}(_react2.default.Component);

	Droper.defaultProps = {
	    disableClick: false,
	    multiple: true
	};

	Droper.propTypes = {
	    onDrop: _react2.default.PropTypes.func,
	    onDropAccepted: _react2.default.PropTypes.func,
	    onDropRejected: _react2.default.PropTypes.func,
	    onDragEnter: _react2.default.PropTypes.func,
	    onDragLeave: _react2.default.PropTypes.func,

	    disableClick: _react2.default.PropTypes.bool,
	    multiple: _react2.default.PropTypes.bool,
	    accept: _react2.default.PropTypes.string
	};

	exports.default = Droper;

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(12);

	var _classnames2 = _interopRequireDefault(_classnames);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Flex = _react2.default.createClass({
	    displayName: 'Flex',

	    propTypes: {
	        flex: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.number, _react2.default.PropTypes.bool]),
	        auto: _react2.default.PropTypes.string,
	        width: _react2.default.PropTypes.string,
	        height: _react2.default.PropTypes.string,
	        row: _react2.default.PropTypes.bool,
	        column: _react2.default.PropTypes.bool,
	        wrap: _react2.default.PropTypes.bool,
	        nowrap: _react2.default.PropTypes.bool,
	        justifyStart: _react2.default.PropTypes.bool,
	        justifyEnd: _react2.default.PropTypes.bool,
	        justifyCenter: _react2.default.PropTypes.bool,
	        justifyBetween: _react2.default.PropTypes.bool,
	        justifyAround: _react2.default.PropTypes.bool,
	        alignStart: _react2.default.PropTypes.bool,
	        alignEnd: _react2.default.PropTypes.bool,
	        alignCenter: _react2.default.PropTypes.bool,
	        alignBaseline: _react2.default.PropTypes.bool,
	        alignStretch: _react2.default.PropTypes.bool
	    },
	    render: function render() {
	        var cn = (0, _classnames2.default)({
	            'gm-flex': true,

	            'gm-flex-auto': this.props.auto,
	            'gm-flex-none': this.props.width || this.props.height,

	            'gm-flex-row': this.props.row,
	            'gm-flex-column': this.props.column,

	            'gm-flex-wrap': this.props.wrap,
	            'gm-flex-nowrap': this.props.nowrap,

	            'gm-flex-justify-start': this.props.justifyStart,
	            'gm-flex-justify-end': this.props.justifyEnd,
	            'gm-flex-justify-center': this.props.justifyCenter,
	            'gm-flex-justify-between': this.props.justifyBetween,
	            'gm-flex-justify-around': this.props.justifyAround,

	            'gm-flex-align-start': this.props.alignStart,
	            'gm-flex-align-end': this.props.alignEnd,
	            'gm-flex-align-center': this.props.alignCenter,
	            'gm-flex-align-baseline': this.props.alignBaseline,
	            'gm-flex-align-stretch': this.props.alignStretch
	        }, this.props.className);

	        var style = Object.assign({}, this.props.style);
	        if (this.props.flex) {
	            style.flex = typeof this.props.flex === 'boolean' ? 1 : this.props.flex;
	        }
	        if (this.props.height) {
	            style.height = this.props.height;
	        }
	        if (this.props.width) {
	            style.width = this.props.width;
	        }

	        return _react2.default.createElement(
	            'div',
	            _extends({}, this.props, { className: cn, style: style }),
	            this.props.children
	        );
	    }
	});

	exports.default = Flex;

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Pagination = _react2.default.createClass({
	    displayName: "Pagination",

	    propTypes: {
	        data: _react2.default.PropTypes.shape({
	            count: _react2.default.PropTypes.number.isRequired,
	            offset: _react2.default.PropTypes.number.isRequired,
	            limit: _react2.default.PropTypes.number.isRequired
	        }),
	        toPage: _react2.default.PropTypes.func.isRequired
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
	                        "上一页"
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

	exports.default = Pagination;

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var PaginationText = _react2.default.createClass({
	    displayName: "PaginationText",

	    propTypes: {
	        data: _react2.default.PropTypes.shape({
	            count: _react2.default.PropTypes.number.isRequired,
	            offset: _react2.default.PropTypes.number.isRequired,
	            limit: _react2.default.PropTypes.number.isRequired
	        })
	    },
	    render: function render() {
	        var data = this.props.data;

	        return _react2.default.createElement(
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

	exports.default = PaginationText;

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _underscore = __webpack_require__(2);

	var _underscore2 = _interopRequireDefault(_underscore);

	var _gmUtil = __webpack_require__(14);

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
/* 12 */
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
		} else if ("function" === 'function' && _typeof(__webpack_require__(17)) === 'object' && __webpack_require__(17)) {
			// register as 'classnames', consistent with npm package name
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return classNames;
			}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			window.classNames = classNames;
		}
	})();

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _underscore = __webpack_require__(2);

	var _underscore2 = _interopRequireDefault(_underscore);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var format = function format(str, data) {
	    var result = str;
	    if (arguments.length < 2) {
	        return result;
	    }

	    result = result.replace(/\{([\d\w\.]+)\}/g, function (key) {
	        var keys = arguments[1].split('.');
	        var r = null;
	        _underscore2.default.each(keys, function (value, index) {
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

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _request = __webpack_require__(30);

	var _request2 = _interopRequireDefault(_request);

	var _requestInterceptor = __webpack_require__(16);

	var _requestInterceptor2 = _interopRequireDefault(_requestInterceptor);

	var _param = __webpack_require__(15);

	var _param2 = _interopRequireDefault(_param);

	var _format = __webpack_require__(13);

	var _format2 = _interopRequireDefault(_format);

	var _visibilitycheck = __webpack_require__(31);

	var _visibilitycheck2 = _interopRequireDefault(_visibilitycheck);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	    Request: _request2.default,
	    RequestInterceptor: _requestInterceptor2.default,
	    format: _format2.default,
	    param: _param2.default,
	    visibility: _visibilitycheck2.default
	};

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _underscore = __webpack_require__(2);

	var _underscore2 = _interopRequireDefault(_underscore);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var param = function param(obj) {
	    // encodeURIComponent
	    return _underscore2.default.map(obj, function (v, k) {
	        return [encodeURIComponent(k), '=', encodeURIComponent(v)].join('');
	    }).join('&').replace(/%20/g, "+");
	};

	exports.default = param;

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _underscore = __webpack_require__(2);

	var _underscore2 = _interopRequireDefault(_underscore);

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
	            interceptors = _underscore2.default.filter(interceptors, function (value) {
	                return value.__id !== interceptorId;
	            });
	        },

	        // 私有方法,谁用谁死
	        interceptor: {
	            request: function request(config) {
	                var promise = Promise.resolve(config);
	                _underscore2.default.each(interceptors, function (value) {
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
	                _underscore2.default.each(interceptors, function (value) {
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
	                _underscore2.default.each(interceptors, function (value) {
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

/***/ },
/* 17 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {module.exports = __webpack_amd_options__;

	/* WEBPACK VAR INJECTION */}.call(exports, {}))

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(3);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _moment = __webpack_require__(6);

	var _moment2 = _interopRequireDefault(_moment);

	var _reactBootstrap = __webpack_require__(4);

	var _calendarComponent = __webpack_require__(5);

	var _calendarComponent2 = _interopRequireDefault(_calendarComponent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var DatePicker = _react2.default.createClass({
	    displayName: 'DatePicker',

	    propTypes: {
	        date: _react2.default.PropTypes.object.isRequired,
	        onChange: _react2.default.PropTypes.func.isRequired,
	        inputClassName: _react2.default.PropTypes.string,
	        target: _react2.default.PropTypes.func
	    },
	    getInitialState: function getInitialState() {
	        return {
	            id: '_gm_datepicker_id' + (Math.random() + '').slice(2)
	        };
	    },
	    renderPopover: function renderPopover() {
	        return _react2.default.createElement(
	            _reactBootstrap.Popover,
	            { id: this.state.id, className: 'gm-datepicker-popover' },
	            _react2.default.createElement(_calendarComponent2.default, { selected: this.props.date, onSelect: this.handleSelect })
	        );
	    },
	    handleSelect: function handleSelect(date) {
	        if (this.refs.target) {
	            this.refs.target.click();
	        } else {
	            this.props.target().click();
	        }
	        this.props.onChange(date);
	    },
	    handleChange: function handleChange() {
	        // empty
	    },
	    render: function render() {
	        return _react2.default.createElement(
	            'div',
	            { className: 'gm-datepicker' },
	            _react2.default.createElement(
	                _reactBootstrap.OverlayTrigger,
	                { trigger: 'click', rootClose: true, placement: 'bottom', overlay: this.renderPopover() },
	                this.props.children ? this.props.children : _react2.default.createElement('input', { type: 'text', className: this.props.inputClassName, ref: 'target',
	                    value: (0, _moment2.default)(this.props.date).format('YYYY-MM-DD'), onChange: this.handleChange })
	            )
	        );
	    }
	});

	exports.default = DatePicker;

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(3);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _moment = __webpack_require__(6);

	var _moment2 = _interopRequireDefault(_moment);

	var _reactBootstrap = __webpack_require__(4);

	var _calendarComponent = __webpack_require__(5);

	var _calendarComponent2 = _interopRequireDefault(_calendarComponent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var DateRangePicker = _react2.default.createClass({
	    displayName: 'DateRangePicker',

	    propTypes: {
	        begin: _react2.default.PropTypes.object.isRequired,
	        end: _react2.default.PropTypes.object.isRequired,
	        onChange: _react2.default.PropTypes.func.isRequired,
	        inputClassName: _react2.default.PropTypes.string,
	        target: _react2.default.PropTypes.func
	    },
	    getInitialState: function getInitialState() {
	        return {
	            beginId: '_gm_datepicker_id' + (Math.random() + '').slice(2),
	            endId: '_gm_datepicker_id' + (Math.random() + '').slice(2)
	        };
	    },
	    handleSelect: function handleSelect(type, date) {
	        if (type === 'begin') {
	            this.props.onChange(date, this.props.end);
	        } else {
	            this.props.onChange(this.props.begin, date);
	        }
	        this.refs.endTarget.click();
	    },
	    renderPopoverBegin: function renderPopoverBegin() {
	        return _react2.default.createElement(
	            _reactBootstrap.Popover,
	            { id: this.state.beginId, className: 'gm-datepicker-popover' },
	            _react2.default.createElement(_calendarComponent2.default, { selected: this.props.begin, onSelect: this.handleSelect.bind(this, 'begin') })
	        );
	    },
	    renderPopoverEnd: function renderPopoverEnd() {
	        return _react2.default.createElement(
	            _reactBootstrap.Popover,
	            { id: this.state.endId, className: 'gm-datepicker-popover' },
	            _react2.default.createElement(_calendarComponent2.default, { selected: this.props.end, onSelect: this.handleSelect.bind(this, 'end') })
	        );
	    },
	    handleChange: function handleChange() {},
	    render: function render() {
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
	                        value: (0, _moment2.default)(this.props.begin).format('YYYY-MM-DD'), onChange: this.handleChange })
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
	                        value: (0, _moment2.default)(this.props.end).format('YYYY-MM-DD'), onChange: this.handleChange })
	                )
	            )
	        );
	    }
	});

	exports.default = DateRangePicker;

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(3);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _reactBootstrap = __webpack_require__(4);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var dialogContainerId = '_gm_dialog_container' + (Math.random() + '').slice(2);
	var dialogContainer = document.getElementById(dialogContainerId);
	if (!dialogContainer) {
	    dialogContainer = document.createElement('div');
	    dialogContainer.className = 'gm-container-dialog';
	    dialogContainer.id = dialogContainerId;
	    document.body.appendChild(dialogContainer);
	}

	var D = _react2.default.createClass({
	    displayName: 'D',
	    getDefaultProps: function getDefaultProps() {
	        return {
	            title: '提示',
	            onCancle: function onCancle() {},
	            onOK: function onOK() {}
	        };
	    },
	    getInitialState: function getInitialState() {
	        return {
	            show: true
	        };
	    },
	    handleCancle: function handleCancle() {
	        this.setState({
	            show: false
	        });
	        this.props.onCancle();
	    },
	    handleOk: function handleOk() {
	        this.setState({
	            show: false
	        });
	        this.props.onOK();
	    },
	    handleEnter: function handleEnter(event) {
	        if (event.keyCode === 13) {
	            this.handleOk();
	        }
	    },
	    render: function render() {
	        return _react2.default.createElement(
	            _reactBootstrap.Modal,
	            { show: this.state.show, onHide: this.handleCancle, bsSize: 'sm' },
	            _react2.default.createElement(
	                _reactBootstrap.Modal.Header,
	                { closeButton: true },
	                this.props.title
	            ),
	            _react2.default.createElement(
	                _reactBootstrap.Modal.Body,
	                null,
	                _react2.default.createElement(
	                    'div',
	                    { className: 'text-center' },
	                    this.props.children,
	                    this.props.type === 'prompt' && _react2.default.createElement('input', { type: 'text', style: { display: 'block', width: '100%' }, onKeyDown: this.handleEnter })
	                ),
	                _react2.default.createElement('div', { className: 'gm-gap10' }),
	                _react2.default.createElement(
	                    'div',
	                    { className: 'text-right' },
	                    this.props.type !== 'alert' && _react2.default.createElement(
	                        'button',
	                        { className: 'btn btn-default', onClick: this.handleCancle },
	                        '取消'
	                    ),
	                    _react2.default.createElement('div', { className: 'gm-gap10' }),
	                    _react2.default.createElement(
	                        'button',
	                        { className: 'btn btn-primary', onClick: this.handleOk },
	                        '确定'
	                    )
	                )
	            )
	        );
	    }
	});

	var Dialog = {
	    alert: function alert(options) {
	        options.type = 'alert';
	        return Dialog.dialog(options);
	    },
	    confirm: function confirm(options) {
	        options.type = 'confirm';
	        return Dialog.dialog(options);
	    },
	    prompt: function prompt(options) {
	        options.type = 'prompt';
	        return Dialog.dialog(options);
	    },
	    dialog: function dialog(options) {
	        return new Promise(function (resolve, reject) {
	            var div = document.createElement('div');
	            dialogContainer.appendChild(div);
	            options.onOK = function (value) {
	                return resolve(value);
	            };
	            options.onCancle = function () {
	                return reject();
	            };
	            _reactDom2.default.render(_react2.default.createElement(D, options), div);
	        });
	    }
	};

	exports.default = Dialog;

/***/ },
/* 21 */
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
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _paginationComponent = __webpack_require__(9);

	var _paginationComponent2 = _interopRequireDefault(_paginationComponent);

	var _paginationTextComponent = __webpack_require__(10);

	var _paginationTextComponent2 = _interopRequireDefault(_paginationTextComponent);

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
	                    _react2.default.createElement('i', { className: 'icon icon-spin ico-spinner2' })
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
	                _react2.default.createElement(_paginationComponent2.default, { data: data.pagination, toPage: t.onToPage })
	            ) : undefined,
	            data.enablePaginationText ? _react2.default.createElement(
	                'div',
	                { className: 'pull-right' },
	                _react2.default.createElement(_paginationTextComponent2.default, { data: data.pagination })
	            ) : undefined
	        );

	        return _react2.default.createElement(
	            'div',
	            { className: 'gm-grid' },
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
	                _react2.default.createElement(
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
	        this.state.data.toPage(page, index);
	    }
	});

	exports.default = Grid;

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Hr = _react2.default.createClass({
	    displayName: "Hr",
	    render: function render() {
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
	});

	exports.default = Hr;

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(3);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _underscore = __webpack_require__(2);

	var _underscore2 = _interopRequireDefault(_underscore);

	var _droper = __webpack_require__(7);

	var _droper2 = _interopRequireDefault(_droper);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var ImportLead = _react2.default.createClass({
	    displayName: 'ImportLead',

	    getInitialState: function getInitialState() {
	        return {
	            selectedFile: null
	        };
	    },
	    render: function render() {
	        var _this = this;

	        var t = this;
	        var data = _underscore2.default.extend({ columns: [], list: [] }, t.props.data);
	        var tips = t.props.tips || [];

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

	        var tableBody = data.list.map(function (elist, index) {

	            var tds = data.columns.map(function (col, i) {
	                var tip = tipsMap[index] && tipsMap[index][col.field];
	                return tip ? _react2.default.createElement(
	                    'td',
	                    { key: i, className: tip.modifyed ? "gm-bg-info" : "gm-bg-invalid" },
	                    _react2.default.createElement('input', { type: 'text', value: elist[col.field],
	                        onChange: t.handleEdit.bind(t, index, col.field, tip._index) }),
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
	                    elist[col.field]
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

	        var filename = t.state.selectedFile ? t.state.selectedFile.name : '';

	        var fileTempUrl = t.props.fileTempUrl;

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
	                    _react2.default.createElement(
	                        'button',
	                        { disabled: !canSubmit, className: 'btn btn-primary btn-sm', onClick: this.handleSubmit },
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
	                _react2.default.createElement(
	                    'div',
	                    { className: 'gm-import-line clearfix' },
	                    lineMap.map(function (v, i) {
	                        return _react2.default.createElement('div', { key: i, className: v ? "tip" : "", onClick: _this.handleLine.bind(_this, i) });
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
	        var content = _reactDom2.default.findDOMNode(t.refs.content);
	        var table = _reactDom2.default.findDOMNode(t.refs.table);
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

	exports.default = ImportLead;

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _underscore = __webpack_require__(2);

	var _underscore2 = _interopRequireDefault(_underscore);

	var _reactBootstrap = __webpack_require__(4);

	var _classnames = __webpack_require__(12);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _flex = __webpack_require__(8);

	var _flex2 = _interopRequireDefault(_flex);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Navigation = _react2.default.createClass({
	    displayName: 'Navigation',
	    getDefaultProps: function getDefaultProps() {
	        return {
	            data: [],
	            select: null,
	            onSelect: function onSelect() {}
	        };
	    },
	    getInitialState: function getInitialState() {
	        return {
	            data: this.props.data,
	            select: this.props.select
	        };
	    },
	    processData: function processData() {
	        var _this = this;

	        return _underscore2.default.map(this.state.data, function (value) {
	            value.open = value.open || false;
	            if (value.sub) {
	                _underscore2.default.map(value.sub, function (val) {
	                    val.open = val.open || false;
	                    if (val.key === _this.state.select) {
	                        value.open = true;
	                    }
	                });
	            }
	            return value;
	        });
	    },
	    componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	        this.setState({
	            select: nextProps.select
	        });
	    },
	    render: function render() {
	        var _this2 = this;

	        var data = this.processData();
	        return _react2.default.createElement(
	            'div',
	            { className: (0, _classnames2.default)("gm-navigation", this.props.className) },
	            _react2.default.createElement(
	                'ul',
	                null,
	                _underscore2.default.map(data, function (value) {
	                    return _react2.default.createElement(
	                        'li',
	                        { key: value.key,
	                            className: "gm-navigation-cell gm-navigation-level1" + _this2.getCurrentClassName(value.key) },
	                        _react2.default.createElement(
	                            _flex2.default,
	                            { alignCenter: true, className: 'gm-navigation-title' },
	                            _react2.default.createElement(
	                                _flex2.default,
	                                { flex: true, onClick: _this2.handleClick.bind(_this2, value) },
	                                value.title
	                            ),
	                            value.sub && _react2.default.createElement('span', {
	                                className: "fa gm-navigation-icon " + (value.open ? 'fa-angle-up' : ' fa-angle-down') })
	                        ),
	                        value.sub && _react2.default.createElement(
	                            _reactBootstrap.Collapse,
	                            { 'in': value.open },
	                            _react2.default.createElement(
	                                'ul',
	                                { className: 'gm-navigation-cell gm-navigation-level2' },
	                                _underscore2.default.map(value.sub, function (val) {
	                                    return _react2.default.createElement(
	                                        'li',
	                                        { key: val.key,
	                                            className: "gm-navigation-cell gm-navigation-sub-cell" + _this2.getCurrentClassName(val.key) },
	                                        _react2.default.createElement(
	                                            'div',
	                                            { className: 'gm-navigation-title',
	                                                onClick: _this2.handleClick.bind(_this2, val) },
	                                            val.title
	                                        )
	                                    );
	                                })
	                            )
	                        )
	                    );
	                })
	            )
	        );
	    },
	    handleClick: function handleClick(value) {
	        if (value.sub) {
	            this.handleToggle(value);
	        } else {
	            this.handleSelect(value);
	        }
	    },
	    handleSelect: function handleSelect(value) {
	        this.setState({
	            select: value.key
	        });
	        this.props.onSelect(value.key);
	    },
	    handleToggle: function handleToggle(value) {
	        // 先这样恶心处理吧
	        value.open = !value.open;
	        this.setState(this.state);
	    },
	    getCurrentClassName: function getCurrentClassName(key) {
	        return this.state.select === key ? ' current ' : ' ';
	    }
	});

	exports.default = Navigation;

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(3);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
	        _reactDom2.default.render(_react2.default.createElement(NProgress, { precent: 100 }), container);
	        setTimeout(function () {
	            _reactDom2.default.unmountComponentAtNode(container);
	        }, 250);
	    }
	};

	var NProgress = _react2.default.createClass({
	    displayName: 'NProgress',

	    statics: NProgressStatics,
	    getInitialState: function getInitialState() {
	        return {
	            precent: 0
	        };
	    },
	    componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	        if (nextProps.precent) {
	            clearTimeout(this.timer);
	            this.setState({
	                precent: nextProps.precent
	            });
	        }
	    },
	    render: function render() {
	        var percent = 100 - this.state.precent;
	        return _react2.default.createElement(
	            'div',
	            { className: 'gm-nprogress', style: { transform: "translate3d(-" + percent + "%, 0px, 0px)" } },
	            _react2.default.createElement('div', { className: 'gm-nprogress-head' })
	        );
	    },
	    componentDidMount: function componentDidMount() {
	        this.doInc();
	    },
	    componentWillUnmount: function componentWillUnmount() {
	        clearTimeout(this.timer);
	    },
	    doInc: function doInc() {
	        var t = this;
	        t.timer = setTimeout(function () {
	            t.setState({
	                precent: t.state.precent + (100 - t.state.precent) * 0.2
	            });
	            if (t.state.precent < 90) {
	                t.doInc();
	            }
	        }, 150);
	    }
	});

	exports.default = NProgress;

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _underscore = __webpack_require__(2);

	var _underscore2 = _interopRequireDefault(_underscore);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var PropTypes = _react2.default.PropTypes;

	var prefix = '_react-gm_';

	var Storage = _react2.default.createClass({
	    displayName: 'Storage',

	    statics: {
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
	    },
	    propTypes: {
	        name: PropTypes.string.isRequired,
	        value: PropTypes.oneOfType([PropTypes.string, PropTypes.object, PropTypes.array]),
	        autoSave: PropTypes.bool
	    },
	    getDefaultProps: function getDefaultProps() {
	        return {
	            useRaw: false,
	            autoSave: true
	        };
	    },
	    save: function save() {
	        Storage.set(this.props.name, value);
	    },
	    componentWillUpdate: function componentWillUpdate() {
	        if (this.props.autoSave) {
	            this.save();
	        }
	    },
	    componentWillMount: function componentWillMount() {
	        this.save();
	    },
	    render: function render() {
	        return null;
	    }
	});

	exports.default = Storage;

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(3);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
	        options.type = 'success';
	        TipStatics.tip(options);
	    },
	    info: function info(options) {
	        options.type = 'info';
	        TipStatics.tip(options);
	    },
	    warning: function warning(options) {
	        options.type = 'warning';
	        TipStatics.tip(options);
	    },
	    danger: function danger(options) {
	        options.type = 'danger';
	        TipStatics.tip(options);
	    }
	};

	var TipOverlay = _react2.default.createClass({
	    displayName: 'TipOverlay',

	    getDefaultProps: function getDefaultProps() {
	        return {
	            time: 3000
	        };
	    },
	    render: function render() {
	        return _react2.default.createElement(
	            'div',
	            { ref: 'tipOverlay', className: 'animated fadeInRight' },
	            _react2.default.createElement(
	                Tip,
	                { key: 'tip', title: this.props.title, type: this.props.type,
	                    onClose: this.handleClose },
	                this.props.text
	            )
	        );
	    },
	    componentDidMount: function componentDidMount() {
	        var t = this;
	        if (t.props.time) {
	            t.timer = setTimeout(function () {
	                t.fadeOut();
	            }, t.props.time);
	        }
	    },
	    componentWillUnmount: function componentWillUnmount() {
	        clearTimeout(this.timer);
	    },
	    handleClose: function handleClose() {
	        this.fadeOut();
	    },
	    fadeOut: function fadeOut() {
	        var t = this;
	        if (!t.hasClosed) {
	            t.hasClosed = true;
	            t.props.onClose();
	        }
	    }
	});

	var Tip = _react2.default.createClass({
	    displayName: 'Tip',

	    statics: TipStatics,
	    getDefaultProps: function getDefaultProps() {
	        return {
	            title: '',
	            type: 'info',
	            onClose: function onClose() {}
	        };
	    },
	    render: function render() {
	        var iconClassName = {
	            success: 'ico-success-circle',
	            info: 'ico-info-circle',
	            warning: 'ico-exclamation-circle',
	            danger: 'ico-fail-circle'
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
	            _react2.default.createElement('i', { className: "icon icon-2x text-" + this.props.type + ' ' + iconClassName[this.props.type] }),
	            _react2.default.createElement(
	                'div',
	                { className: 'panel-body' },
	                this.props.title ? _react2.default.createElement(
	                    'div',
	                    null,
	                    _react2.default.createElement(
	                        'strong',
	                        null,
	                        this.props.title
	                    )
	                ) : undefined,
	                this.props.children
	            )
	        );
	    },
	    handleClose: function handleClose() {
	        this.props.onClose();
	    }
	});

	exports.default = Tip;

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(3);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _underscore = __webpack_require__(2);

	var _underscore2 = _interopRequireDefault(_underscore);

	var _validate = __webpack_require__(11);

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
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _param = __webpack_require__(15);

	var _param2 = _interopRequireDefault(_param);

	var _format = __webpack_require__(13);

	var _format2 = _interopRequireDefault(_format);

	var _underscore = __webpack_require__(2);

	var _underscore2 = _interopRequireDefault(_underscore);

	var _request = __webpack_require__(16);

	var _request2 = _interopRequireDefault(_request);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var processRequest = function processRequest(config) {
	    return _request2.default.interceptor.request(config);
	};

	var processResponse = function processResponse(promise, url, sucCode, config) {
	    var color = 'color: #8a6d3b;';

	    return promise.then(function (res) {
	        if (res.ok) {
	            return res.json();
	        }
	        return Promise.reject((0, _format2.default)('服务器错误 {status} {statusText}', res));
	    }).then(function (json) {
	        return _request2.default.interceptor.response(json, config);
	    }, function (reason) {
	        return Promise.reject(_request2.default.interceptor.responseError(reason, config));
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

	var Request = function Request(url, options) {
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
	    code: function code(codes) {
	        if (_underscore2.default.isArray(codes)) {
	            this.sucCode = this.sucCode.concat(codes);
	        } else {
	            this.sucCode.push(codes);
	        }
	        return this;
	    },
	    data: function data(_data) {
	        this._data = _data || {};
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

	exports.default = RequestFactory;

/***/ },
/* 31 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	exports.default = function (dom) {

	    var topInRange = false;
	    var leftInRange = false;

	    // dom各边距离 窗口顶边、左边的距离
	    var BCR = dom.getBoundingClientRect();

	    if (BCR.top < window.innerHeight && BCR.bottom > 0) topInRange = true;

	    if (BCR.left < window.innerHeight && BCR.right > 0) leftInRange = true;

	    return topInRange && leftInRange;
	};

/***/ },
/* 32 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }
/******/ ])
});
;