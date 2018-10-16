(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{284:function(e,l,a){"use strict";Object.defineProperty(l,"__esModule",{value:!0});var t=function(){function e(e,l){for(var a=0;a<l.length;a++){var t=l[a];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}return function(l,a,t){return a&&e(l.prototype,a),t&&e(l,t),l}}(),n=r(a(0)),s=a(7);r(a(2));function r(e){return e&&e.__esModule?e:{default:e}}function c(e,l){if(!(e instanceof l))throw new TypeError("Cannot call a class as a function")}function u(e,l){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!l||"object"!=typeof l&&"function"!=typeof l?e:l}function m(e,l){if("function"!=typeof l&&null!==l)throw new TypeError("Super expression must either be null or a function, not "+typeof l);e.prototype=Object.create(l&&l.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),l&&(Object.setPrototypeOf?Object.setPrototypeOf(e,l):e.__proto__=l)}var d=[{value:1,name:"蔬菜",children:[{value:11,name:"叶菜",children:[{value:111,name:"皇帝菜"},{value:112,name:"金不换"}]},{value:12,name:"甘蓝",children:[{value:121,name:"甘蓝1"},{value:122,name:"甘蓝2"}]}]},{value:2,name:"冻品",children:[{value:21,name:"冻猪肉",children:[{value:211,name:"五花肉"},{value:212,name:"猪脚"}]}]}],f=function(e){function l(e){c(this,l);var a=u(this,(l.__proto__||Object.getPrototypeOf(l)).call(this,e));return a.handleSelect=function(e){console.log(e),a.setState({selectedValues:e})},a.handleClickCheckbox=function(e,l){console.log(e,l)},a.showGroupCheckbox=function(e){return!(e.children&&e.children[0]&&e.children[0].children)},a.state={selectedValues:[]},a}return m(l,n.default.Component),t(l,[{key:"handleClickLeafName",value:function(e,l){console.log(e,l)}},{key:"render",value:function(){var e=this.state.selectedValues;return n.default.createElement("div",null,n.default.createElement(s.Tree,{list:d,selectedValues:e,onSelectValues:this.handleSelect,onClickLeafName:this.handleClickLeafName,onClickCheckbox:this.handleClickCheckbox,disableSelectAll:!0,showGroupCheckbox:this.showGroupCheckbox}))}}]),l}(),E=function(e){function l(e){c(this,l);var a=u(this,(l.__proto__||Object.getPrototypeOf(l)).call(this,e));return a.state={},a}return m(l,n.default.Component),t(l,[{key:"handleToggleCode",value:function(e){var l={};l["showCode"+e]=!this.state["showCode"+e],this.setState(l)}},{key:"render",value:function(){return n.default.createElement("div",{className:"doc"},n.default.createElement("h2",{id:"tree"},n.default.createElement("a",{className:"header-anchor",href:"#tree","aria-hidden":"true"},"¶")," Tree"),n.default.createElement("p",null,"树形选择框"),n.default.createElement("div",{className:"doc-demo-box "+(this.state.showCode6?"doc-demo-code-active":"")},n.default.createElement("div",{className:"doc-demo-instance"},n.default.createElement("h4",null,"Example"),n.default.createElement(f,null)),n.default.createElement("div",{className:"doc-demo-meta"},n.default.createElement("div",{className:"doc-demo-code"},n.default.createElement("pre",null,n.default.createElement("code",{className:"language-js"},n.default.createElement("span",{className:"hljs-keyword"},"const")," treeData = [","{",n.default.createElement("br",null),"    ",n.default.createElement("span",{className:"hljs-attr"},"value"),": ",n.default.createElement("span",{className:"hljs-number"},"1"),",",n.default.createElement("br",null),"    ",n.default.createElement("span",{className:"hljs-attr"},"name"),": ",n.default.createElement("span",{className:"hljs-string"},"'蔬菜'"),",",n.default.createElement("br",null),"    ",n.default.createElement("span",{className:"hljs-attr"},"children"),": [","{",n.default.createElement("br",null),"        ",n.default.createElement("span",{className:"hljs-attr"},"value"),": ",n.default.createElement("span",{className:"hljs-number"},"11"),",",n.default.createElement("br",null),"        ",n.default.createElement("span",{className:"hljs-attr"},"name"),": ",n.default.createElement("span",{className:"hljs-string"},"'叶菜'"),",",n.default.createElement("br",null),"        ",n.default.createElement("span",{className:"hljs-attr"},"children"),": [","{",n.default.createElement("br",null),"            ",n.default.createElement("span",{className:"hljs-attr"},"value"),": ",n.default.createElement("span",{className:"hljs-number"},"111"),",",n.default.createElement("br",null),"            ",n.default.createElement("span",{className:"hljs-attr"},"name"),": ",n.default.createElement("span",{className:"hljs-string"},"'皇帝菜'"),n.default.createElement("br",null),"        ","}",", ","{",n.default.createElement("br",null),"            ",n.default.createElement("span",{className:"hljs-attr"},"value"),": ",n.default.createElement("span",{className:"hljs-number"},"112"),",",n.default.createElement("br",null),"            ",n.default.createElement("span",{className:"hljs-attr"},"name"),": ",n.default.createElement("span",{className:"hljs-string"},"'金不换'"),n.default.createElement("br",null),"        ","}","]",n.default.createElement("br",null),"    ","}",", ","{",n.default.createElement("br",null),"        ",n.default.createElement("span",{className:"hljs-attr"},"value"),": ",n.default.createElement("span",{className:"hljs-number"},"12"),",",n.default.createElement("br",null),"        ",n.default.createElement("span",{className:"hljs-attr"},"name"),": ",n.default.createElement("span",{className:"hljs-string"},"'甘蓝'"),",",n.default.createElement("br",null),"        ",n.default.createElement("span",{className:"hljs-attr"},"children"),": [","{",n.default.createElement("br",null),"            ",n.default.createElement("span",{className:"hljs-attr"},"value"),": ",n.default.createElement("span",{className:"hljs-number"},"121"),",",n.default.createElement("br",null),"            ",n.default.createElement("span",{className:"hljs-attr"},"name"),": ",n.default.createElement("span",{className:"hljs-string"},"'甘蓝1'"),n.default.createElement("br",null),"        ","}",", ","{",n.default.createElement("br",null),"            ",n.default.createElement("span",{className:"hljs-attr"},"value"),": ",n.default.createElement("span",{className:"hljs-number"},"122"),",",n.default.createElement("br",null),"            ",n.default.createElement("span",{className:"hljs-attr"},"name"),": ",n.default.createElement("span",{className:"hljs-string"},"'甘蓝2'"),n.default.createElement("br",null),"        ","}","]",n.default.createElement("br",null),"    ","}","]",n.default.createElement("br",null),"}",", ","{",n.default.createElement("br",null),"    ",n.default.createElement("span",{className:"hljs-attr"},"value"),": ",n.default.createElement("span",{className:"hljs-number"},"2"),",",n.default.createElement("br",null),"    ",n.default.createElement("span",{className:"hljs-attr"},"name"),": ",n.default.createElement("span",{className:"hljs-string"},"'冻品'"),",",n.default.createElement("br",null),"    ",n.default.createElement("span",{className:"hljs-attr"},"children"),": [","{",n.default.createElement("br",null),"        ",n.default.createElement("span",{className:"hljs-attr"},"value"),": ",n.default.createElement("span",{className:"hljs-number"},"21"),",",n.default.createElement("br",null),"        ",n.default.createElement("span",{className:"hljs-attr"},"name"),": ",n.default.createElement("span",{className:"hljs-string"},"'冻猪肉'"),",",n.default.createElement("br",null),"        ",n.default.createElement("span",{className:"hljs-attr"},"children"),": [","{",n.default.createElement("br",null),"            ",n.default.createElement("span",{className:"hljs-attr"},"value"),": ",n.default.createElement("span",{className:"hljs-number"},"211"),",",n.default.createElement("br",null),"            ",n.default.createElement("span",{className:"hljs-attr"},"name"),": ",n.default.createElement("span",{className:"hljs-string"},"'五花肉'"),n.default.createElement("br",null),"        ","}",", ","{",n.default.createElement("br",null),"            ",n.default.createElement("span",{className:"hljs-attr"},"value"),": ",n.default.createElement("span",{className:"hljs-number"},"212"),",",n.default.createElement("br",null),"            ",n.default.createElement("span",{className:"hljs-attr"},"name"),": ",n.default.createElement("span",{className:"hljs-string"},"'猪脚'"),n.default.createElement("br",null),"        ","}","]",n.default.createElement("br",null),"    ","}","]",n.default.createElement("br",null),"}","];",n.default.createElement("br",null),n.default.createElement("span",{className:"hljs-class"},n.default.createElement("span",{className:"hljs-keyword"},"class")," ",n.default.createElement("span",{className:"hljs-title"},"Component")," ",n.default.createElement("span",{className:"hljs-keyword"},"extends")," ",n.default.createElement("span",{className:"hljs-title"},"React"),".",n.default.createElement("span",{className:"hljs-title"},"Component")," "),"{",n.default.createElement("br",null),"    ",n.default.createElement("span",{className:"hljs-keyword"},"constructor"),"(props) ","{",n.default.createElement("br",null),"        ",n.default.createElement("span",{className:"hljs-keyword"},"super"),"(props);",n.default.createElement("br",null),"        ",n.default.createElement("span",{className:"hljs-keyword"},"this"),".state = ","{",n.default.createElement("br",null),"            ",n.default.createElement("span",{className:"hljs-attr"},"selectedValues"),": []",n.default.createElement("br",null),"        ","}",";",n.default.createElement("br",null),"    ","}",n.default.createElement("br",null),"handleSelect = ",n.default.createElement("span",{className:"hljs-function"},"(",n.default.createElement("span",{className:"hljs-params"},"selectedValues"),") =>")," ","{",n.default.createElement("br",null),"        ",n.default.createElement("span",{className:"hljs-built_in"},"console"),".log(selectedValues);",n.default.createElement("br",null),"        ",n.default.createElement("span",{className:"hljs-keyword"},"this"),".setState(","{",n.default.createElement("br",null),"            selectedValues",n.default.createElement("br",null),"        ","}",");",n.default.createElement("br",null),"    ","}",";",n.default.createElement("br",null),"handleClickLeafName(leaf, checked) ","{",n.default.createElement("br",null),"        ",n.default.createElement("span",{className:"hljs-built_in"},"console"),".log(leaf, checked);",n.default.createElement("br",null),"    ","}",n.default.createElement("br",null),"handleClickCheckbox = ",n.default.createElement("span",{className:"hljs-function"},"(",n.default.createElement("span",{className:"hljs-params"},"data, checked"),") =>")," ","{",n.default.createElement("br",null),"        ",n.default.createElement("span",{className:"hljs-built_in"},"console"),".log(data, checked);",n.default.createElement("br",null),"    ","}",";",n.default.createElement("br",null),"showGroupCheckbox = ",n.default.createElement("span",{className:"hljs-function"},"(",n.default.createElement("span",{className:"hljs-params"},"group"),") =>")," ","{",n.default.createElement("br",null),"        ",n.default.createElement("br",null),"        ",n.default.createElement("span",{className:"hljs-keyword"},"if"),"(group.children && group.children[",n.default.createElement("span",{className:"hljs-number"},"0"),"] && group.children[",n.default.createElement("span",{className:"hljs-number"},"0"),"].children)","{",n.default.createElement("br",null),"            ",n.default.createElement("span",{className:"hljs-keyword"},"return")," ",n.default.createElement("span",{className:"hljs-literal"},"false"),";",n.default.createElement("br",null),"        ","}",n.default.createElement("br",null),"        ",n.default.createElement("span",{className:"hljs-keyword"},"return")," ",n.default.createElement("span",{className:"hljs-literal"},"true"),";",n.default.createElement("br",null),"    ","}",";",n.default.createElement("br",null),"render() ","{",n.default.createElement("br",null),"        ",n.default.createElement("span",{className:"hljs-keyword"},"const")," ","{","selectedValues","}"," = ",n.default.createElement("span",{className:"hljs-keyword"},"this"),".state;",n.default.createElement("br",null),n.default.createElement("span",{className:"hljs-keyword"},"return")," (",n.default.createElement("br",null),"            ",n.default.createElement("span",{className:"xml"},n.default.createElement("span",{className:"hljs-tag"},"<",n.default.createElement("span",{className:"hljs-name"},"div"),">"),n.default.createElement("br",null),"                ",n.default.createElement("span",{className:"hljs-tag"},"<",n.default.createElement("span",{className:"hljs-name"},"Tree"),n.default.createElement("br",null),"                    ",n.default.createElement("span",{className:"hljs-attr"},"list"),"=",n.default.createElement("span",{className:"hljs-string"},"{","treeData","}"),n.default.createElement("br",null),"                    ",n.default.createElement("span",{className:"hljs-attr"},"selectedValues"),"=",n.default.createElement("span",{className:"hljs-string"},"{","selectedValues","}"),n.default.createElement("br",null),"                    ",n.default.createElement("span",{className:"hljs-attr"},"onSelectValues"),"=",n.default.createElement("span",{className:"hljs-string"},"{","this.handleSelect","}"),n.default.createElement("br",null),"                    ",n.default.createElement("span",{className:"hljs-attr"},"onClickLeafName"),"=",n.default.createElement("span",{className:"hljs-string"},"{","this.handleClickLeafName","}"),n.default.createElement("br",null),"                    ",n.default.createElement("span",{className:"hljs-attr"},"onClickCheckbox"),"=",n.default.createElement("span",{className:"hljs-string"},"{","this.handleClickCheckbox","}"),n.default.createElement("br",null),"                    ",n.default.createElement("span",{className:"hljs-attr"},"disableSelectAll"),n.default.createElement("br",null),"                    ",n.default.createElement("span",{className:"hljs-attr"},"showGroupCheckbox"),"=",n.default.createElement("span",{className:"hljs-string"},"{","this.showGroupCheckbox","}"),n.default.createElement("br",null),"                />"),n.default.createElement("br",null),"            ",n.default.createElement("span",{className:"hljs-tag"},"</",n.default.createElement("span",{className:"hljs-name"},"div"),">"),n.default.createElement("br",null),"        );",n.default.createElement("br",null),"    ","}",n.default.createElement("br",null),"}",n.default.createElement("br",null)))),n.default.createElement("pre",null,n.default.createElement("code",{className:"language-jsx"},"<Component/>",n.default.createElement("br",null)))),n.default.createElement("div",{className:"doc-demo-code-btn",onClick:this.handleToggleCode.bind(this,6)},n.default.createElement("i",null)))),n.default.createElement("h3",{id:"props"},n.default.createElement("a",{className:"header-anchor",href:"#props","aria-hidden":"true"},"¶")," Props"),n.default.createElement("ul",null,n.default.createElement("li",null,n.default.createElement("code",null,"title (string)")," 标题"),n.default.createElement("li",null,n.default.createElement("code",null,"list (array|isRequired)")," 数据列表啦，格式是 ",n.default.createElement("code",null,"{","value: 3, name: 'item2', children: [","{","value, name","}","]","}")),n.default.createElement("li",null,n.default.createElement("code",null,"selectedValues (array|isRequired)")," 已选择的值，格式是",n.default.createElement("code",null,"[1,2,3]")),n.default.createElement("li",null,n.default.createElement("code",null,"onSelectValues (func|isRequired)")," 选择回调，参数和",n.default.createElement("code",null,"selectedValues"),"一样"),n.default.createElement("li",null,n.default.createElement("code",null,"style (object)")," 框的高宽，默认",n.default.createElement("code",null,"{","width: '250px', height: '350px'","}")),n.default.createElement("li",null,n.default.createElement("code",null,"onClickLeafName (func)")," 点击叶子节点事件。如果提供，则 chexkbox 和 name 点击分开处理。"),n.default.createElement("li",null,n.default.createElement("code",null,"onClickCheckbox (func)")," 勾选 checkbox 触发事件"),n.default.createElement("li",null,n.default.createElement("code",null,"withFilter (func|bool)")," 过滤函数，默认 true 且集成拼音搜索。false 则不出过滤框，fun 则过滤逻辑业务控"),n.default.createElement("li",null,n.default.createElement("code",null,"placeHolder (string)")),n.default.createElement("li",null,n.default.createElement("code",null,"disableSelectAll (bool)")),n.default.createElement("li",null,n.default.createElement("code",null,"showGroupCheckbox (func)")," 是否显示 checkbox，参数是 group 信息"),n.default.createElement("li",null,n.default.createElement("code",null,"style")," 默认 width 250px height 350px")),n.default.createElement("h2",{id:"transfergroup"},n.default.createElement("a",{className:"header-anchor",href:"#transfergroup","aria-hidden":"true"},"¶")," TransferGroup"),n.default.createElement("p",null,"分组版，区别是 list 结构变了，具体见上述例子"))}}]),l}();l.default=E}}]);
//# sourceMappingURL=54.f131113d.bundle.js.map