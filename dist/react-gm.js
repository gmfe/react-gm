(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["ReactGM"] = factory(require("react"));
	else
		root["ReactGM"] = factory(root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__) {
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

	var _gridComponentJs = __webpack_require__(3);

	var _gridComponentJs2 = _interopRequireDefault(_gridComponentJs);

	var _paginationComponentJs = __webpack_require__(1);

	var _paginationComponentJs2 = _interopRequireDefault(_paginationComponentJs);

	exports.Grid = _gridComponentJs2['default'];
	exports.Pagination = _paginationComponentJs2['default'];

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var Pagination = _react2["default"].createClass({
	    displayName: "Pagination",

	    propTypes: {
	        paginationData: _react2["default"].PropTypes.shape({
	            total: _react2["default"].PropTypes.number.isRequired,
	            index: _react2["default"].PropTypes.number.isRequired,
	            size: _react2["default"].PropTypes.number.isRequired
	        }),
	        toPage: _react2["default"].PropTypes.func.isRequired
	    },
	    render: function render() {
	        var paginationData = this.props.paginationData;

	        var offset = 2,
	            pages = [],
	            count = Math.ceil(paginationData.total / paginationData.size),
	            begin = Math.max(paginationData.index - offset, 1),
	            end = Math.min(paginationData.index + offset, count);

	        if (count > offset * 2 + 1) {
	            if (begin === 1) {
	                end += offset;
	            } else if (end === count) {
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
	                { className: "pagination pagination-sm", onClick: this._onPage.bind(this) },
	                _react2["default"].createElement(
	                    "li",
	                    { className: paginationData.index === 1 ? 'disabled' : '' },
	                    _react2["default"].createElement(
	                        "a",
	                        { href: "javascript:;", "data-page": paginationData.index - 1 },
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
	                ) : '',
	                begin >= 3 ? _react2["default"].createElement(
	                    "li",
	                    { className: "disabled" },
	                    _react2["default"].createElement(
	                        "a",
	                        { href: "javascript:;" },
	                        "..."
	                    )
	                ) : '',
	                pages.map(function (page) {
	                    return _react2["default"].createElement(
	                        "li",
	                        { className: paginationData.index === page ? 'active' : '' },
	                        _react2["default"].createElement(
	                            "a",
	                            {
	                                href: "javascript:;", "data-page": page },
	                            page
	                        )
	                    );
	                }),
	                end <= count - 2 ? _react2["default"].createElement(
	                    "li",
	                    { className: "disabled" },
	                    _react2["default"].createElement(
	                        "a",
	                        { href: "javascript:;" },
	                        "..."
	                    )
	                ) : '',
	                end <= count - 1 ? _react2["default"].createElement(
	                    "li",
	                    null,
	                    _react2["default"].createElement(
	                        "a",
	                        { href: "javascript:;", "data-page": count },
	                        count
	                    )
	                ) : '',
	                _react2["default"].createElement(
	                    "li",
	                    { className: paginationData.index === count ? 'disabled' : '' },
	                    _react2["default"].createElement(
	                        "a",
	                        { href: "javascript:;", "data-page": paginationData.index + 1 },
	                        "下一页"
	                    )
	                )
	            )
	        );
	    },
	    _onPage: function _onPage(event) {
	        var page = event.target.getAttribute('data-page'),
	            paginationData = this.props.paginationData,
	            count = Math.ceil(paginationData.total / paginationData.size);
	        if (!page || page == paginationData.index || page < 1 || page > count) {
	            return;
	        }

	        console.log(page);
	    }
	});

	exports["default"] = Pagination;
	module.exports = exports["default"];

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _paginationComponentJs = __webpack_require__(1);

	var _paginationComponentJs2 = _interopRequireDefault(_paginationComponentJs);

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var GridHead = _react2['default'].createClass({
	    displayName: 'GridHead',

	    render: function render() {
	        var columns = this.props.columns;
	        var actions = this.props.actions;
	        return _react2['default'].createElement(
	            'thead',
	            null,
	            _react2['default'].createElement(
	                'tr',
	                null,
	                columns.map(function (col) {
	                    return _react2['default'].createElement(
	                        'th',
	                        null,
	                        col.name
	                    );
	                }),
	                actions.length > 0 ? _react2['default'].createElement(
	                    'th',
	                    null,
	                    '操作'
	                ) : ''
	            )
	        );
	    }
	});

	var Grid = _react2['default'].createClass({
	    displayName: 'Grid',

	    render: function render() {
	        var t = this;
	        var gridData = this.props.gridData;
	        var actions = gridData.actions;

	        var tableBody = gridData.data.map(function (eData, index) {
	            var tds = gridData.columns.map(function (col) {
	                // 转换成字符串，避免 true false 没显示
	                return _react2['default'].createElement(
	                    'td',
	                    null,
	                    '' + eData[col.field]
	                );
	            });

	            var buttons = actions.map(function (action) {
	                var classes = 'btn btn-default btn-xs ' + action.className;
	                return _react2['default'].createElement(
	                    'button',
	                    { onClick: t._onActions.bind(t, eData, index, action),
	                        className: classes },
	                    action.text
	                );
	            });

	            return _react2['default'].createElement(
	                'tr',
	                null,
	                tds,
	                actions.length > 0 ? _react2['default'].createElement(
	                    'td',
	                    null,
	                    buttons
	                ) : ''
	            );
	        });

	        return _react2['default'].createElement(
	            'div',
	            { className: 'gm-grid' },
	            _react2['default'].createElement(
	                'table',
	                { className: 'table table-striped table-hover table-condensed table-bordered' },
	                _react2['default'].createElement(GridHead, { columns: gridData.columns, actions: gridData.actions }),
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
	                    { className: 'pull-right' },
	                    _react2['default'].createElement(_paginationComponentJs2['default'], { paginationData: gridData.pagination, onPage: t._onPage.bind(this) })
	                )
	            )
	        );
	    },
	    _onActions: function _onActions(eData, index, action) {
	        console.log(arguments);
	        action.click(eData, index);
	    },
	    _onPage: function _onPage() {}
	});

	exports['default'] = Grid;
	module.exports = exports['default'];

/***/ }
/******/ ])
});
;