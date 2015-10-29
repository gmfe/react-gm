(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["ReactGM"] = factory(require("react"));
	else
		root["ReactGM"] = factory(root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__) {
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

	var _gridComponentJs = __webpack_require__(5);

	var _gridComponentJs2 = _interopRequireDefault(_gridComponentJs);

	var _paginationComponentJs = __webpack_require__(2);

	var _paginationComponentJs2 = _interopRequireDefault(_paginationComponentJs);

	var _paginationTextComponentJs = __webpack_require__(3);

	var _paginationTextComponentJs2 = _interopRequireDefault(_paginationTextComponentJs);

	var _droperComponentJs = __webpack_require__(4);

	var _droperComponentJs2 = _interopRequireDefault(_droperComponentJs);

	__webpack_require__(6);

	exports.Grid = _gridComponentJs2['default'];
	exports.Pagination = _paginationComponentJs2['default'];
	exports.PaginationText = _paginationTextComponentJs2['default'];
	exports.Droper = _droperComponentJs2['default'];

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ },
/* 2 */
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
	                ) : null,
	                begin >= 3 ? _react2["default"].createElement(
	                    "li",
	                    { className: "disabled" },
	                    _react2["default"].createElement(
	                        "a",
	                        { href: "javascript:;" },
	                        "..."
	                    )
	                ) : null,
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
	                ) : null,
	                end <= all - 1 ? _react2["default"].createElement(
	                    "li",
	                    null,
	                    _react2["default"].createElement(
	                        "a",
	                        { href: "javascript:;", "data-page": all },
	                        all
	                    )
	                ) : null,
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
/* 3 */
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
/* 4 */
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
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _paginationComponentJs = __webpack_require__(2);

	var _paginationComponentJs2 = _interopRequireDefault(_paginationComponentJs);

	var _paginationTextComponentJs = __webpack_require__(3);

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
	                ) : null,
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
	                ) : null
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
	                    ) : null,
	                    tds,
	                    actions.length > 0 ? _react2['default'].createElement(
	                        'td',
	                        null,
	                        buttons
	                    ) : null
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
	            ) : null,
	            data.enablePaginationText ? _react2['default'].createElement(
	                'div',
	                { className: 'pull-right' },
	                _react2['default'].createElement(_paginationTextComponentJs2['default'], { data: data.pagination })
	            ) : null
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
	                    data.enableSelect ? batchButtons : null
	                ),
	                data.pagination ? pagination : null
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
/* 6 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }
/******/ ])
});
;