(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{246:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var l=function(){function e(e,a){for(var t=0;t<a.length;t++){var l=a[t];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}return function(a,t,l){return t&&e(a.prototype,t),l&&e(a,l),a}}(),n=function(e){return e&&e.__esModule?e:{default:e}}(t(0)),s=t(7);function r(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}function c(e,a){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!a||"object"!=typeof a&&"function"!=typeof a?e:a}function m(e,a){if("function"!=typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function, not "+typeof a);e.prototype=Object.create(a&&a.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),a&&(Object.setPrototypeOf?Object.setPrototypeOf(e,a):e.__proto__=a)}var u=function(e){function a(){return r(this,a),c(this,(a.__proto__||Object.getPrototypeOf(a)).apply(this,arguments))}return m(a,n.default.Component),l(a,[{key:"handleModal",value:function(){s.Drawer.render({children:n.default.createElement("div",{style:{display:"flex",flexDirection:"column",height:"100%"}},n.default.createElement("div",{style:{flex:"1",overflowY:"auto"}},"示例示例",n.default.createElement("br",null),"右侧右侧的示例示例",n.default.createElement("br",null),"右侧右侧的示例示例",n.default.createElement("br",null),"右侧右侧的示例示例",n.default.createElement("br",null),"右侧右侧的示例示例",n.default.createElement("br",null),"右侧右侧的示例示例",n.default.createElement("br",null),"右侧右侧的 示例示例",n.default.createElement("br",null),"右侧右侧的示例示例",n.default.createElement("br",null),"右侧右侧的示例示例",n.default.createElement("br",null),"右侧右侧的示例示例",n.default.createElement("br",null),"右侧右侧的示例示例",n.default.createElement("br",null),"右侧右侧的示例示例",n.default.createElement("br",null),"右侧右侧的"),n.default.createElement("div",{style:{height:"50px",backgroundColor:"#64DD17"}},"btn")),onHide:s.Drawer.hide,opacityMask:!0,style:{width:"600px",height:"100%"}})}},{key:"render",value:function(){return n.default.createElement("div",null,n.default.createElement("button",{className:"btn btn-default",onClick:this.handleModal.bind(this)},"Drawer"))}}]),a}(),d=function(e){function a(e){r(this,a);var t=c(this,(a.__proto__||Object.getPrototypeOf(a)).call(this,e));return t.state={},t}return m(a,n.default.Component),l(a,[{key:"handleToggleCode",value:function(e){var a={};a["showCode"+e]=!this.state["showCode"+e],this.setState(a)}},{key:"render",value:function(){return n.default.createElement("div",{className:"doc"},n.default.createElement("h2",{id:"drawer"},n.default.createElement("a",{className:"header-anchor",href:"#drawer","aria-hidden":"true"},"¶")," Drawer"),n.default.createElement("div",{className:"doc-demo-box "+(this.state.showCode3?"doc-demo-code-active":"")},n.default.createElement("div",{className:"doc-demo-instance"},n.default.createElement("h4",null,"Example"),n.default.createElement(u,null)),n.default.createElement("div",{className:"doc-demo-meta"},n.default.createElement("div",{className:"doc-demo-description"},n.default.createElement("p",null,"Drawer")),n.default.createElement("div",{className:"doc-demo-code"},n.default.createElement("pre",null,n.default.createElement("code",{className:"language-js"},n.default.createElement("span",{className:"hljs-class"},n.default.createElement("span",{className:"hljs-keyword"},"class")," ",n.default.createElement("span",{className:"hljs-title"},"ModalWrap")," ",n.default.createElement("span",{className:"hljs-keyword"},"extends")," ",n.default.createElement("span",{className:"hljs-title"},"React"),".",n.default.createElement("span",{className:"hljs-title"},"Component")," "),"{",n.default.createElement("br",null),"  handleModal()","{",n.default.createElement("br",null),"    Drawer.render(","{",n.default.createElement("br",null),"      ",n.default.createElement("span",{className:"hljs-attr"},"children"),": ",n.default.createElement("span",{className:"xml"},n.default.createElement("span",{className:"hljs-tag"},"<",n.default.createElement("span",{className:"hljs-name"},"div")," ",n.default.createElement("span",{className:"hljs-attr"},"style"),"=",n.default.createElement("span",{className:"hljs-string"},"{","{","display:")," '",n.default.createElement("span",{className:"hljs-attr"},"flex"),"', ",n.default.createElement("span",{className:"hljs-attr"},"flexDirection:")," '",n.default.createElement("span",{className:"hljs-attr"},"column"),"', ",n.default.createElement("span",{className:"hljs-attr"},"height:")," '",n.default.createElement("span",{className:"hljs-attr"},"100"),"%'","}","}",">"),n.default.createElement("br",null),"        ",n.default.createElement("span",{className:"hljs-tag"},"<",n.default.createElement("span",{className:"hljs-name"},"div")," ",n.default.createElement("span",{className:"hljs-attr"},"style"),"=",n.default.createElement("span",{className:"hljs-string"},"{","{","flex:")," '",n.default.createElement("span",{className:"hljs-attr"},"1"),"', ",n.default.createElement("span",{className:"hljs-attr"},"overflowY:")," '",n.default.createElement("span",{className:"hljs-attr"},"auto"),"'","}","}",">"),n.default.createElement("br",null),"          示例示例",n.default.createElement("span",{className:"hljs-tag"},"<",n.default.createElement("span",{className:"hljs-name"},"br"),"/>"),"右侧右侧的示例示例",n.default.createElement("span",{className:"hljs-tag"},"<",n.default.createElement("span",{className:"hljs-name"},"br"),"/>"),"右侧右侧的示例示例",n.default.createElement("span",{className:"hljs-tag"},"<",n.default.createElement("span",{className:"hljs-name"},"br"),"/>"),"右侧右侧的示例示例",n.default.createElement("span",{className:"hljs-tag"},"<",n.default.createElement("span",{className:"hljs-name"},"br"),"/>"),"右侧右侧的示例示例",n.default.createElement("span",{className:"hljs-tag"},"<",n.default.createElement("span",{className:"hljs-name"},"br"),"/>"),"右侧右侧的示例示例",n.default.createElement("span",{className:"hljs-tag"},"<",n.default.createElement("span",{className:"hljs-name"},"br"),"/>"),"右侧右侧的",n.default.createElement("br",null),"          示例示例",n.default.createElement("span",{className:"hljs-tag"},"<",n.default.createElement("span",{className:"hljs-name"},"br"),"/>"),"右侧右侧的示例示例",n.default.createElement("span",{className:"hljs-tag"},"<",n.default.createElement("span",{className:"hljs-name"},"br"),"/>"),"右侧右侧的示例示例",n.default.createElement("span",{className:"hljs-tag"},"<",n.default.createElement("span",{className:"hljs-name"},"br"),"/>"),"右侧右侧的示例示例",n.default.createElement("span",{className:"hljs-tag"},"<",n.default.createElement("span",{className:"hljs-name"},"br"),"/>"),"右侧右侧的示例示例",n.default.createElement("span",{className:"hljs-tag"},"<",n.default.createElement("span",{className:"hljs-name"},"br"),"/>"),"右侧右侧的示例示例",n.default.createElement("span",{className:"hljs-tag"},"<",n.default.createElement("span",{className:"hljs-name"},"br"),"/>"),"右侧右侧的",n.default.createElement("br",null),"        ",n.default.createElement("span",{className:"hljs-tag"},"</",n.default.createElement("span",{className:"hljs-name"},"div"),">"),n.default.createElement("br",null),"        ",n.default.createElement("span",{className:"hljs-tag"},"<",n.default.createElement("span",{className:"hljs-name"},"div")," ",n.default.createElement("span",{className:"hljs-attr"},"style"),"=",n.default.createElement("span",{className:"hljs-string"},"{","{","height:")," '",n.default.createElement("span",{className:"hljs-attr"},"50px"),"', ",n.default.createElement("span",{className:"hljs-attr"},"backgroundColor:")," '#",n.default.createElement("span",{className:"hljs-attr"},"64DD17"),"'","}","}",">"),"btn",n.default.createElement("span",{className:"hljs-tag"},"</",n.default.createElement("span",{className:"hljs-name"},"div"),">"),n.default.createElement("br",null),"      ",n.default.createElement("span",{className:"hljs-tag"},"</",n.default.createElement("span",{className:"hljs-name"},"div"),">")),",",n.default.createElement("br",null),"      ",n.default.createElement("span",{className:"hljs-attr"},"onHide"),": Drawer.hide,",n.default.createElement("br",null),"      ",n.default.createElement("span",{className:"hljs-attr"},"opacityMask"),": ",n.default.createElement("span",{className:"hljs-literal"},"true"),",",n.default.createElement("br",null),"      ",n.default.createElement("span",{className:"hljs-attr"},"style"),": ","{",n.default.createElement("span",{className:"hljs-attr"},"width"),": ",n.default.createElement("span",{className:"hljs-string"},"'600px'"),", ",n.default.createElement("span",{className:"hljs-attr"},"height"),": ",n.default.createElement("span",{className:"hljs-string"},"'100%'"),"}","}",n.default.createElement("br",null),"    );",n.default.createElement("br",null),"  ","}",n.default.createElement("br",null),"render() ","{",n.default.createElement("br",null),"    ",n.default.createElement("span",{className:"hljs-keyword"},"return")," (",n.default.createElement("br",null),"    ",n.default.createElement("span",{className:"xml"},n.default.createElement("span",{className:"hljs-tag"},"<",n.default.createElement("span",{className:"hljs-name"},"div"),">"),n.default.createElement("br",null),"      ",n.default.createElement("span",{className:"hljs-tag"},"<",n.default.createElement("span",{className:"hljs-name"},"button"),n.default.createElement("br",null),"        ",n.default.createElement("span",{className:"hljs-attr"},"className"),"=",n.default.createElement("span",{className:"hljs-string"},'"btn btn-default"'),n.default.createElement("br",null),"        ",n.default.createElement("span",{className:"hljs-attr"},"onClick"),"=",n.default.createElement("span",{className:"hljs-string"},"{","this.handleModal.bind(this)","}"),n.default.createElement("br",null),"        >"),"Drawer",n.default.createElement("br",null),"      ",n.default.createElement("span",{className:"hljs-tag"},"</",n.default.createElement("span",{className:"hljs-name"},"button"),">"),n.default.createElement("br",null),"    ",n.default.createElement("span",{className:"hljs-tag"},"</",n.default.createElement("span",{className:"hljs-name"},"div"),">")),");",n.default.createElement("br",null),"  ","}",n.default.createElement("br",null),"}",n.default.createElement("br",null))),n.default.createElement("pre",null,n.default.createElement("code",{className:"language-jsx"},"<ModalWrap />",n.default.createElement("br",null)))),n.default.createElement("div",{className:"doc-demo-code-btn",onClick:this.handleToggleCode.bind(this,3)},n.default.createElement("i",null)))),n.default.createElement("h3",{id:"props"},n.default.createElement("a",{className:"header-anchor",href:"#props","aria-hidden":"true"},"¶")," Props"),n.default.createElement("ul",null,n.default.createElement("li",null,n.default.createElement("code",null,"onHide (func)")," 隐藏触发回调"),n.default.createElement("li",null,n.default.createElement("code",null,"opacityMask (bool)")," 遮罩透明"),n.default.createElement("li",null,n.default.createElement("code",null,"children")," 抽屉内容"),n.default.createElement("li",null,n.default.createElement("code",null,"style (object)")," drawer的样式"),n.default.createElement("li",null,n.default.createElement("code",null,"animation (bool)")," 是否使用动画, 默认为ture")),n.default.createElement("h3",{id:"static"},n.default.createElement("a",{className:"header-anchor",href:"#static","aria-hidden":"true"},"¶")," Static"),n.default.createElement("ul",null,n.default.createElement("li",null,n.default.createElement("code",null,"render")),n.default.createElement("li",null,n.default.createElement("code",null,"hide"))))}}]),a}();a.default=d}}]);
//# sourceMappingURL=16.1141afb9.bundle.js.map