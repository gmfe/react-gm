(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{185:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor};function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}var obj,_react=__webpack_require__(0),_react2=(obj=_react)&&obj.__esModule?obj:{default:obj},_index=__webpack_require__(12);function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(self,call){if(!self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!call||"object"!=typeof call&&"function"!=typeof call?self:call}function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:!1,writable:!0,configurable:!0}}),superClass&&(Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass)}var PriceWrap=function(){function PriceWrap(props){_classCallCheck(this,PriceWrap);var _this=_possibleConstructorReturn(this,(PriceWrap.__proto__||Object.getPrototypeOf(PriceWrap)).call(this,props));return _this.priceArr=function(){return _this.state.valArr.map(function(item){return _react2.default.createElement("div",{key:item},_react2.default.createElement(_index.Price,{value:item}))})},_this.state={valArr:[0,10839,2345454545,1e3,12310,1e7,-10,-226,-1e3,-1000002323]},_index.Price.setCurrency("¥"),_this}return _inherits(PriceWrap,_react2.default.Component),_createClass(PriceWrap,[{key:"render",value:function(){return _react2.default.createElement("div",null,this.priceArr(),_react2.default.createElement(_index.Price,{isFenUnit:!0,value:1234,style:{fontSize:"28px",color:"red"}})," ",_react2.default.createElement("br",null),_react2.default.createElement(_index.Price,{value:40002288,currencyScale:.8,style:{fontSize:"28px",color:"red"}}),_react2.default.createElement("br",null))}}]),PriceWrap}(),MarkdownItReactComponent=function(){function MarkdownItReactComponent(props){_classCallCheck(this,MarkdownItReactComponent);var _this2=_possibleConstructorReturn(this,(MarkdownItReactComponent.__proto__||Object.getPrototypeOf(MarkdownItReactComponent)).call(this,props));return _this2.state={},_this2}return _inherits(MarkdownItReactComponent,_react2.default.Component),_createClass(MarkdownItReactComponent,[{key:"handleToggleCode",value:function(flag){var state={};state["showCode"+flag]=!this.state["showCode"+flag],this.setState(state)}},{key:"render",value:function(){return _react2.default.createElement("div",{className:"doc"},_react2.default.createElement("h2",{id:"price"},_react2.default.createElement("a",{className:"header-anchor",href:"#price","aria-hidden":"true"},"¶")," Price"),_react2.default.createElement("div",{className:"doc-demo-box "+(this.state.showCode3?"doc-demo-code-active":"")},_react2.default.createElement("div",{className:"doc-demo-instance"},_react2.default.createElement("h4",null,"Example"),_react2.default.createElement(PriceWrap,null)),_react2.default.createElement("div",{className:"doc-demo-meta"},_react2.default.createElement("div",{className:"doc-demo-description"},_react2.default.createElement("p",null,"Price")),_react2.default.createElement("div",{className:"doc-demo-code"},_react2.default.createElement("pre",null,_react2.default.createElement("code",{className:"language-js"},_react2.default.createElement("span",{className:"hljs-class"},_react2.default.createElement("span",{className:"hljs-keyword"},"class")," ",_react2.default.createElement("span",{className:"hljs-title"},"PriceWrap")," ",_react2.default.createElement("span",{className:"hljs-keyword"},"extends")," ",_react2.default.createElement("span",{className:"hljs-title"},"React"),".",_react2.default.createElement("span",{className:"hljs-title"},"Component")," "),"{",_react2.default.createElement("br",null),"    ",_react2.default.createElement("span",{className:"hljs-keyword"},"constructor"),"(props) ","{",_react2.default.createElement("br",null),"        ",_react2.default.createElement("span",{className:"hljs-keyword"},"super"),"(props);",_react2.default.createElement("br",null),"        ",_react2.default.createElement("span",{className:"hljs-keyword"},"this"),".state= ","{",_react2.default.createElement("br",null),"          ",_react2.default.createElement("span",{className:"hljs-attr"},"valArr"),": [",_react2.default.createElement("br",null),"          ",_react2.default.createElement("span",{className:"hljs-number"},"0"),",",_react2.default.createElement("br",null),"          ",_react2.default.createElement("span",{className:"hljs-number"},"10839"),",",_react2.default.createElement("br",null),"          ",_react2.default.createElement("span",{className:"hljs-number"},"2345454545"),",",_react2.default.createElement("br",null),"          ",_react2.default.createElement("span",{className:"hljs-number"},"1000"),",",_react2.default.createElement("br",null),"          ",_react2.default.createElement("span",{className:"hljs-number"},"12310"),",",_react2.default.createElement("br",null),"          ",_react2.default.createElement("span",{className:"hljs-number"},"10000000"),",",_react2.default.createElement("br",null),"          ",_react2.default.createElement("span",{className:"hljs-number"},"-10"),",",_react2.default.createElement("br",null),"          ",_react2.default.createElement("span",{className:"hljs-number"},"-226"),",",_react2.default.createElement("br",null),"          ",_react2.default.createElement("span",{className:"hljs-number"},"-1000"),",",_react2.default.createElement("br",null),"          ",_react2.default.createElement("span",{className:"hljs-number"},"-1000002323"),_react2.default.createElement("br",null),"          ]",_react2.default.createElement("br",null),"        ","}",_react2.default.createElement("br",null),_react2.default.createElement("span",{className:"hljs-comment"},"//初始化"),_react2.default.createElement("br",null),"        Price.setCurrency(",_react2.default.createElement("span",{className:"hljs-string"},"'¥'"),")",_react2.default.createElement("br",null),"    ","}",_react2.default.createElement("br",null),"priceArr = ",_react2.default.createElement("span",{className:"hljs-function"},_react2.default.createElement("span",{className:"hljs-params"},"()")," =>")," ","{",_react2.default.createElement("br",null),"      ",_react2.default.createElement("span",{className:"hljs-keyword"},"return")," ",_react2.default.createElement("span",{className:"hljs-keyword"},"this"),".state.valArr.map(",_react2.default.createElement("span",{className:"hljs-function"},_react2.default.createElement("span",{className:"hljs-params"},"item"),"=>"),"{",_react2.default.createElement("br",null),"        ",_react2.default.createElement("span",{className:"hljs-keyword"},"return")," (",_react2.default.createElement("br",null),"          <div key=","{","item","}",">",_react2.default.createElement("br",null),"            <Price value=","{","item","}","/>",_react2.default.createElement("br",null),"          </div>",_react2.default.createElement("br",null),"        )",_react2.default.createElement("br",null),"      ","}",")",_react2.default.createElement("br",null),"    ","}",_react2.default.createElement("br",null),"render() ","{",_react2.default.createElement("br",null),"        return (",_react2.default.createElement("br",null),"            <div>",_react2.default.createElement("br",null),"              ","{","this.priceArr()","}",_react2.default.createElement("br",null),"              <Price isFenUnit value=","{","1234","}"," style=","{","{","fontSize:'28px',color:'red'","}","}","/> <br/>",_react2.default.createElement("br",null),"              <Price value=","{","40002288","}"," currencyScale=","{",".8","}"," style=","{","{","fontSize:'28px',color:'red'","}","}","/>",_react2.default.createElement("br",null),"              <br/>",_react2.default.createElement("br",null),"            </div>",_react2.default.createElement("br",null),"        );",_react2.default.createElement("br",null),"    ","}",_react2.default.createElement("br",null),"}",_react2.default.createElement("br",null))),_react2.default.createElement("pre",null,_react2.default.createElement("code",{className:"language-jsx"},"<PriceWrap />",_react2.default.createElement("br",null)))),_react2.default.createElement("div",{className:"doc-demo-code-btn",onClick:this.handleToggleCode.bind(this,3)},_react2.default.createElement("i",null)))),_react2.default.createElement("h3",{id:"props"},_react2.default.createElement("a",{className:"header-anchor",href:"#props","aria-hidden":"true"},"¶")," Props"),_react2.default.createElement("ul",null,_react2.default.createElement("li",null,_react2.default.createElement("code",null,"value(number|isRequired)")," 传入的价格"),_react2.default.createElement("li",null,_react2.default.createElement("code",null,"isFenUnit(boolean)")," value 是否以分为单位，默认是",_react2.default.createElement("strong",null,"false"),", 以元为单位"),_react2.default.createElement("li",null,_react2.default.createElement("code",null,"precision(number)")," 保留几位小数，默认是",_react2.default.createElement("strong",null,"2"),"位"),_react2.default.createElement("li",null,_react2.default.createElement("code",null,"useGrouping(boolean)")," 是否使用千分符。默认值是",_react2.default.createElement("strong",null,"true"),"."),_react2.default.createElement("li",null,_react2.default.createElement("code",null,"currencyScale(number)")," 货币符号的缩放大小,可能的值是",_react2.default.createElement("strong",null,"0-1"),",默认值是",_react2.default.createElement("strong",null,"0.85")),_react2.default.createElement("li",null,_react2.default.createElement("code",null,"keepZero(boolean)")," 是否保留小数点后无效的零，默认值是",_react2.default.createElement("strong",null,"true"),"."),_react2.default.createElement("li",null,_react2.default.createElement("code",null,"...rest"))),_react2.default.createElement("h3",{id:"jing-tai-fang-fa"},_react2.default.createElement("a",{className:"header-anchor",href:"#jing-tai-fang-fa","aria-hidden":"true"},"¶")," 静态方法"),_react2.default.createElement("ul",null,_react2.default.createElement("li",null,_react2.default.createElement("code",null,"Price.setCurrency(currency)")," 'currency'为",_react2.default.createElement("strong",null,"货币符号"),"，如“￥”。")))}}]),MarkdownItReactComponent}();exports.default=MarkdownItReactComponent}}]);