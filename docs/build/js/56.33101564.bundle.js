(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{292:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var l=0;l<t.length;l++){var a=t[l];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,l,a){return l&&e(t.prototype,l),a&&e(t,a),t}}(),n=function(e){return e&&e.__esModule?e:{default:e}}(l(0)),c=l(7);var d=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var l=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return l.state={},l}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,n.default.Component),a(t,[{key:"handleToggleCode",value:function(e){var t={};t["showCode"+e]=!this.state["showCode"+e],this.setState(t)}},{key:"render",value:function(){return n.default.createElement("div",{className:"doc"},n.default.createElement("h2",{id:"uploader"},n.default.createElement("a",{className:"header-anchor",href:"#uploader","aria-hidden":"true"},"¶")," Uploader"),n.default.createElement("p",null,"上传文件"),n.default.createElement("div",{className:"doc-demo-box "+(this.state.showCode6?"doc-demo-code-active":"")},n.default.createElement("div",{className:"doc-demo-instance"},n.default.createElement("h4",null,"Example"),n.default.createElement("div",null,n.default.createElement(c.Uploader,{onUpload:function(e,t){return console.log(e,t)},accept:"image/*"}))),n.default.createElement("div",{className:"doc-demo-meta"},n.default.createElement("div",{className:"doc-demo-description"},n.default.createElement("p",null,"默认样式")),n.default.createElement("div",{className:"doc-demo-code"},n.default.createElement("pre",null,n.default.createElement("code",{className:"language-jsx"},"<div>",n.default.createElement("br",null),"    ",n.default.createElement("span",{className:"xml"},n.default.createElement("span",{className:"hljs-tag"},"<",n.default.createElement("span",{className:"hljs-name"},"Uploader")," ",n.default.createElement("span",{className:"hljs-attr"},"onUpload"),"=",n.default.createElement("span",{className:"hljs-string"},"{","(datas,")," ",n.default.createElement("span",{className:"hljs-attr"},"e"),") =>")," console.log(datas, e)","}",' accept="image/*" />',n.default.createElement("br",null),n.default.createElement("span",{className:"hljs-tag"},"</",n.default.createElement("span",{className:"hljs-name"},"div"),">")),n.default.createElement("br",null)))),n.default.createElement("div",{className:"doc-demo-code-btn",onClick:this.handleToggleCode.bind(this,6)},n.default.createElement("i",null)))),n.default.createElement("div",{className:"doc-demo-box "+(this.state.showCode9?"doc-demo-code-active":"")},n.default.createElement("div",{className:"doc-demo-instance"},n.default.createElement("h4",null,"Example"),n.default.createElement("div",null,n.default.createElement(c.Uploader,{onUpload:function(e,t){return console.log(e,t)},accept:".xlsx"},n.default.createElement("button",{className:"btn"},"自定义")))),n.default.createElement("div",{className:"doc-demo-meta"},n.default.createElement("div",{className:"doc-demo-description"},n.default.createElement("p",null,"自定义样式")),n.default.createElement("div",{className:"doc-demo-code"},n.default.createElement("pre",null,n.default.createElement("code",{className:"language-jsx"},"<div>",n.default.createElement("br",null),"    <Uploader onUpload=","{","(datas, e) => console.log(datas, e)","}",'  accept=".xlsx">',n.default.createElement("br",null),'        <button className="btn">自定义</button>',n.default.createElement("br",null),"    </Uploader>",n.default.createElement("br",null),"</div>",n.default.createElement("br",null)))),n.default.createElement("div",{className:"doc-demo-code-btn",onClick:this.handleToggleCode.bind(this,9)},n.default.createElement("i",null)))),n.default.createElement("h3",{id:"props"},n.default.createElement("a",{className:"header-anchor",href:"#props","aria-hidden":"true"},"¶")," Props"),n.default.createElement("ul",null,n.default.createElement("li",null,n.default.createElement("code",null,"multiple (bool)")," 是否多选，默认false。 ",n.default.createElement("strong",null,"Android微信"),"不支持多选，内部已经判断是微信就不开放多选功能"),n.default.createElement("li",null,n.default.createElement("code",null,"accept (string)")," 选择的类型，比如图片 ",n.default.createElement("code",null,"image/*"),"，excel ",n.default.createElement("code",null,".xlsx"),"，具体见HTML5规范"),n.default.createElement("li",null,n.default.createElement("code",null,"onUpload (func|isRequired)")," 选择图片后触发函数"),n.default.createElement("li",null,n.default.createElement("code",null,"children")," 提供自定义选择图片的触发区域")))}}]),t}();t.default=d}}]);
//# sourceMappingURL=56.33101564.bundle.js.map