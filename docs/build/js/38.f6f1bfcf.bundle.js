(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{175:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor};function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}var obj,_react=__webpack_require__(0),_react2=(obj=_react)&&obj.__esModule?obj:{default:obj},_index=__webpack_require__(12);function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(self,call){if(!self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!call||"object"!=typeof call&&"function"!=typeof call?self:call}function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:!1,writable:!0,configurable:!0}}),superClass&&(Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass)}var Component2=function(){function Component2(props){_classCallCheck(this,Component2);var _this=_possibleConstructorReturn(this,(Component2.__proto__||Object.getPrototypeOf(Component2)).call(this,props));return _this.state={value:null},_this.refInput=_react2.default.createRef(),_this}return _inherits(Component2,_react2.default.Component),_createClass(Component2,[{key:"render",value:function(){var _this2=this;return _react2.default.createElement("div",null,_react2.default.createElement(_index.InputNumberV2,{ref:this.refInput,value:this.state.value,onChange:function(value){console.log(value),_this2.setState({value:value})}}),_react2.default.createElement("button",{onClick:function(){_this2.refInput.current.apiDoFocus()}},"focus"))}}]),Component2}(),Component=function(){function Component(props){_classCallCheck(this,Component);var _this3=_possibleConstructorReturn(this,(Component.__proto__||Object.getPrototypeOf(Component)).call(this,props));return _this3.state={value:""},_this3.handleChange=_this3.handleChange.bind(_this3),_this3}return _inherits(Component,_react2.default.Component),_createClass(Component,[{key:"render",value:function(){return _react2.default.createElement("div",null,_react2.default.createElement(_index.InputNumber,{value:this.state.value,onChange:this.handleChange,placeholder:"最大1000，最小0，可保留4为小数，默认2位",max:1e3,min:0,precision:4,className:"form-control",minus:!0}),_react2.default.createElement("br",null),_react2.default.createElement(_index.InputNumber,{value:this.state.value,onChange:this.handleChange,placeholder:"最大0，最小0",max:0,min:0,precision:0,className:"form-control",minus:!0}))}},{key:"handleChange",value:function(value){this.setState({value:value})}}]),Component}(),MarkdownItReactComponent=function(){function MarkdownItReactComponent(props){_classCallCheck(this,MarkdownItReactComponent);var _this4=_possibleConstructorReturn(this,(MarkdownItReactComponent.__proto__||Object.getPrototypeOf(MarkdownItReactComponent)).call(this,props));return _this4.state={},_this4}return _inherits(MarkdownItReactComponent,_react2.default.Component),_createClass(MarkdownItReactComponent,[{key:"handleToggleCode",value:function(flag){var state={};state["showCode"+flag]=!this.state["showCode"+flag],this.setState(state)}},{key:"render",value:function(){return _react2.default.createElement("div",{className:"doc"},_react2.default.createElement("h2",{id:"inputnumberv2-tui-jian-shi-yong"},_react2.default.createElement("a",{className:"header-anchor",href:"#inputnumberv2-tui-jian-shi-yong","aria-hidden":"true"},"¶")," InputNumberV2 推荐使用"),_react2.default.createElement("p",null,"InputNumber 输出的是 字符串，调用方还是要包一层去处理 数字和字符串的区别，累。"),_react2.default.createElement("p",null,"所以才有了 InputNumberV2"),_react2.default.createElement("div",{className:"doc-demo-box "+(this.state.showCode9?"doc-demo-code-active":"")},_react2.default.createElement("div",{className:"doc-demo-instance"},_react2.default.createElement("h4",null,"Example"),_react2.default.createElement(Component2,null)),_react2.default.createElement("div",{className:"doc-demo-meta"},_react2.default.createElement("div",{className:"doc-demo-description"},_react2.default.createElement("p",null,"数字输入，数字输出，没有值则是 null")),_react2.default.createElement("div",{className:"doc-demo-code"},_react2.default.createElement("pre",null,_react2.default.createElement("code",{className:"language-js"},_react2.default.createElement("span",{className:"hljs-class"},_react2.default.createElement("span",{className:"hljs-keyword"},"class")," ",_react2.default.createElement("span",{className:"hljs-title"},"Component2")," ",_react2.default.createElement("span",{className:"hljs-keyword"},"extends")," ",_react2.default.createElement("span",{className:"hljs-title"},"React"),".",_react2.default.createElement("span",{className:"hljs-title"},"Component")," "),"{",_react2.default.createElement("br",null),"    ",_react2.default.createElement("span",{className:"hljs-keyword"},"constructor"),"(props)","{",_react2.default.createElement("br",null),"        ",_react2.default.createElement("span",{className:"hljs-keyword"},"super"),"(props);",_react2.default.createElement("br",null),"        ",_react2.default.createElement("span",{className:"hljs-keyword"},"this"),".state = ","{",_react2.default.createElement("br",null),"            ",_react2.default.createElement("span",{className:"hljs-attr"},"value"),": ",_react2.default.createElement("span",{className:"hljs-literal"},"null"),_react2.default.createElement("br",null),"        ","}",";",_react2.default.createElement("br",null),"        ",_react2.default.createElement("span",{className:"hljs-keyword"},"this"),".refInput = React.createRef()",_react2.default.createElement("br",null),"    ","}",_react2.default.createElement("br",null),"    ",_react2.default.createElement("br",null),"    render()","{",_react2.default.createElement("br",null),"        ",_react2.default.createElement("span",{className:"hljs-keyword"},"return")," (",_react2.default.createElement("br",null),"            ",_react2.default.createElement("span",{className:"xml"},_react2.default.createElement("span",{className:"hljs-tag"},"<",_react2.default.createElement("span",{className:"hljs-name"},"div"),">"),_react2.default.createElement("br",null),"                ",_react2.default.createElement("span",{className:"hljs-tag"},"<",_react2.default.createElement("span",{className:"hljs-name"},"InputNumberV2"),_react2.default.createElement("br",null),"                  ",_react2.default.createElement("span",{className:"hljs-attr"},"ref"),"=",_react2.default.createElement("span",{className:"hljs-string"},"{","this.refInput","}"),_react2.default.createElement("br",null),"                  ",_react2.default.createElement("span",{className:"hljs-attr"},"value"),"=",_react2.default.createElement("span",{className:"hljs-string"},"{","this.state.value","}"),_react2.default.createElement("br",null),"                  ",_react2.default.createElement("span",{className:"hljs-attr"},"onChange"),"=",_react2.default.createElement("span",{className:"hljs-string"},"{","value")," =>")," ","{",_react2.default.createElement("br",null),"                    console.log(value)",_react2.default.createElement("br",null),"                    this.setState(","{","value","}",")",_react2.default.createElement("br",null),"                  ","}","}",_react2.default.createElement("br",null),"                />",_react2.default.createElement("br",null),"                ",_react2.default.createElement("br",null),"                ",_react2.default.createElement("span",{className:"hljs-tag"},"<",_react2.default.createElement("span",{className:"hljs-name"},"button")," ",_react2.default.createElement("span",{className:"hljs-attr"},"onClick"),"=",_react2.default.createElement("span",{className:"hljs-string"},"{","()")," =>")," ","{","this.refInput.current.apiDoFocus()","}","}",">focus",_react2.default.createElement("span",{className:"hljs-tag"},"</",_react2.default.createElement("span",{className:"hljs-name"},"button"),">"),_react2.default.createElement("br",null),"            ",_react2.default.createElement("span",{className:"hljs-tag"},"</",_react2.default.createElement("span",{className:"hljs-name"},"div"),">"),_react2.default.createElement("br",null),"        );",_react2.default.createElement("br",null),"    ","}",_react2.default.createElement("br",null),"}",_react2.default.createElement("br",null)))),_react2.default.createElement("pre",null,_react2.default.createElement("code",{className:"language-jsx"},"<Component2/>",_react2.default.createElement("br",null)))),_react2.default.createElement("div",{className:"doc-demo-code-btn",onClick:this.handleToggleCode.bind(this,9)},_react2.default.createElement("i",null)))),_react2.default.createElement("h3",{id:"props"},_react2.default.createElement("a",{className:"header-anchor",href:"#props","aria-hidden":"true"},"¶")," Props"),_react2.default.createElement("ul",null,_react2.default.createElement("li",null,_react2.default.createElement("code",null,"value (number|string)")," 当前值"),_react2.default.createElement("li",null,_react2.default.createElement("code",null,"max (number)")," 最大值"),_react2.default.createElement("li",null,_react2.default.createElement("code",null,"min (number)")," 最小值"),_react2.default.createElement("li",null,_react2.default.createElement("code",null,"precision (number)")," 精确度，保留几位小数"),_react2.default.createElement("li",null,_react2.default.createElement("code",null,"onChange (func|isRequired)")," 数值变化回调"),_react2.default.createElement("li",null,_react2.default.createElement("code",null,"placeholder (string)"),": 默认值"),_react2.default.createElement("li",null,_react2.default.createElement("code",null,"...rest"))),_react2.default.createElement("h2",{id:"inputnumber"},_react2.default.createElement("a",{className:"header-anchor",href:"#inputnumber","aria-hidden":"true"},"¶")," InputNumber"),_react2.default.createElement("div",{className:"doc-demo-box "+(this.state.showCode56?"doc-demo-code-active":"")},_react2.default.createElement("div",{className:"doc-demo-instance"},_react2.default.createElement("h4",null,"Example"),_react2.default.createElement(Component,null)),_react2.default.createElement("div",{className:"doc-demo-meta"},_react2.default.createElement("div",{className:"doc-demo-description"},_react2.default.createElement("p",null,"数字输入框")),_react2.default.createElement("div",{className:"doc-demo-code"},_react2.default.createElement("pre",null,_react2.default.createElement("code",{className:"language-js"},_react2.default.createElement("span",{className:"hljs-class"},_react2.default.createElement("span",{className:"hljs-keyword"},"class")," ",_react2.default.createElement("span",{className:"hljs-title"},"Component")," ",_react2.default.createElement("span",{className:"hljs-keyword"},"extends")," ",_react2.default.createElement("span",{className:"hljs-title"},"React"),".",_react2.default.createElement("span",{className:"hljs-title"},"Component")," "),"{",_react2.default.createElement("br",null),"    ",_react2.default.createElement("span",{className:"hljs-keyword"},"constructor"),"(props)","{",_react2.default.createElement("br",null),"        ",_react2.default.createElement("span",{className:"hljs-keyword"},"super"),"(props);",_react2.default.createElement("br",null),"        ",_react2.default.createElement("span",{className:"hljs-keyword"},"this"),".state = ","{",_react2.default.createElement("br",null),"            ",_react2.default.createElement("span",{className:"hljs-attr"},"value"),": ",_react2.default.createElement("span",{className:"hljs-string"},"''"),_react2.default.createElement("br",null),"        ","}",";",_react2.default.createElement("br",null),"        ",_react2.default.createElement("span",{className:"hljs-keyword"},"this"),".handleChange = ::",_react2.default.createElement("span",{className:"hljs-keyword"},"this"),".handleChange;",_react2.default.createElement("br",null),"    ","}",_react2.default.createElement("br",null),"    ",_react2.default.createElement("br",null),"    render()","{",_react2.default.createElement("br",null),"        ",_react2.default.createElement("span",{className:"hljs-keyword"},"return")," (",_react2.default.createElement("br",null),"            <div>",_react2.default.createElement("br",null),"                <InputNumber",_react2.default.createElement("br",null),"                    value=","{","this.state.value","}",_react2.default.createElement("br",null),"                    onChange=","{","this.handleChange","}",_react2.default.createElement("br",null),'                    placeholder="最大1000，最小0，可保留4为小数，默认2位"',_react2.default.createElement("br",null),"                    max=","{","1000","}",_react2.default.createElement("br",null),"                    min=","{","0","}",_react2.default.createElement("br",null),"                    precision=","{","4","}",_react2.default.createElement("br",null),'                    className="form-control"',_react2.default.createElement("br",null),"                    minus",_react2.default.createElement("br",null),"                />",_react2.default.createElement("br",null),"                <br/>",_react2.default.createElement("br",null),"                <InputNumber",_react2.default.createElement("br",null),"                    value=","{","this.state.value","}",_react2.default.createElement("br",null),"                    onChange=","{","this.handleChange","}",_react2.default.createElement("br",null),'                    placeholder="最大0，最小0"',_react2.default.createElement("br",null),"                    max=","{","0","}",_react2.default.createElement("br",null),"                    min=","{","0","}",_react2.default.createElement("br",null),"                    precision=","{","0","}",_react2.default.createElement("br",null),'                    className="form-control"',_react2.default.createElement("br",null),"                    minus",_react2.default.createElement("br",null),"                />",_react2.default.createElement("br",null),"            </div>",_react2.default.createElement("br",null),"        );",_react2.default.createElement("br",null),"    ","}",_react2.default.createElement("br",null),"    ",_react2.default.createElement("br",null),"    handleChange(value)","{",_react2.default.createElement("br",null),"        this.setState(","{",_react2.default.createElement("br",null),"            value",_react2.default.createElement("br",null),"        ","}",");",_react2.default.createElement("br",null),"    ","}",_react2.default.createElement("br",null),"}",_react2.default.createElement("br",null))),_react2.default.createElement("pre",null,_react2.default.createElement("code",{className:"language-jsx"},"<Component/>",_react2.default.createElement("br",null)))),_react2.default.createElement("div",{className:"doc-demo-code-btn",onClick:this.handleToggleCode.bind(this,56)},_react2.default.createElement("i",null)))),_react2.default.createElement("h3",{id:"props-2"},_react2.default.createElement("a",{className:"header-anchor",href:"#props-2","aria-hidden":"true"},"¶")," Props"),_react2.default.createElement("ul",null,_react2.default.createElement("li",null,_react2.default.createElement("code",null,"value (number|string)")," 当前值"),_react2.default.createElement("li",null,_react2.default.createElement("code",null,"max (number)")," 最大值"),_react2.default.createElement("li",null,_react2.default.createElement("code",null,"min (number)")," 最小值"),_react2.default.createElement("li",null,_react2.default.createElement("code",null,"precision (number)")," 精确度，保留几位小数"),_react2.default.createElement("li",null,_react2.default.createElement("code",null,"onChange (func|isRequired)")," 数值变化回调"),_react2.default.createElement("li",null,_react2.default.createElement("code",null,"placeholder (string)"),": 默认值"),_react2.default.createElement("li",null,_react2.default.createElement("code",null,"minus (bool)")," 是否支持输入负数"),_react2.default.createElement("li",null,_react2.default.createElement("code",null,"...rest"))))}}]),MarkdownItReactComponent}();exports.default=MarkdownItReactComponent}}]);