(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{289:function(e,l,t){"use strict";Object.defineProperty(l,"__esModule",{value:!0});var a=function(){function e(e,l){for(var t=0;t<l.length;t++){var a=l[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(l,t,a){return t&&e(l.prototype,t),a&&e(l,a),l}}(),n=r(t(0)),s=t(7);r(t(2));function r(e){return e&&e.__esModule?e:{default:e}}function u(e,l){if(!(e instanceof l))throw new TypeError("Cannot call a class as a function")}function c(e,l){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!l||"object"!=typeof l&&"function"!=typeof l?e:l}function m(e,l){if("function"!=typeof l&&null!==l)throw new TypeError("Super expression must either be null or a function, not "+typeof l);e.prototype=Object.create(l&&l.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),l&&(Object.setPrototypeOf?Object.setPrototypeOf(e,l):e.__proto__=l)}var d=function(e){function l(e){u(this,l);var t=c(this,(l.__proto__||Object.getPrototypeOf(l)).call(this,e));return t.state={list:[{value:1,name:"水果"},{value:2,name:"蔬菜"},{value:3,name:"肉类"},{value:4,name:"干果"},{value:5,name:"什么乱七八糟"},{value:6,name:"电子科技"}],selectedValues:[0,2]},t.handleSelect=t.handleSelect.bind(t),t}return m(l,n.default.Component),a(l,[{key:"handleSelect",value:function(e){console.log(e),this.setState({selectedValues:e})}},{key:"render",value:function(){var e=this.state,l=e.list,t=e.selectedValues;return n.default.createElement(s.Transfer,{list:l,selectedValues:t,onSelect:this.handleSelect})}}]),l}(),f=function(e){function l(e){u(this,l);var t=c(this,(l.__proto__||Object.getPrototypeOf(l)).call(this,e));return t.state={list:[{value:1,name:"蔬菜",children:[{value:11,name:"叶菜",children:[{value:111,name:"皇帝菜"},{value:112,name:"金不换"}]},{value:12,name:"甘蓝",children:[{value:121,name:"甘蓝1"},{value:122,name:"甘蓝2"}]}]},{value:2,name:"冻品",children:[{value:21,name:"冻猪肉",children:[{value:211,name:"五花肉"},{value:212,name:"猪脚"}]}]}],selectedValues:[111,212]},t.handleSelect=t.handleSelect.bind(t),t}return m(l,n.default.Component),a(l,[{key:"handleSelect",value:function(e){console.log(e),this.setState({selectedValues:e})}},{key:"render",value:function(){var e=this.state,l=e.list,t=e.selectedValues;return n.default.createElement(s.TransferGroup,{list:l,selectedValues:t,onSelect:this.handleSelect})}}]),l}(),E=function(e){function l(e){u(this,l);var t=c(this,(l.__proto__||Object.getPrototypeOf(l)).call(this,e));return t.state={},t}return m(l,n.default.Component),a(l,[{key:"handleToggleCode",value:function(e){var l={};l["showCode"+e]=!this.state["showCode"+e],this.setState(l)}},{key:"render",value:function(){return n.default.createElement("div",{className:"doc"},n.default.createElement("h2",{id:"transfer"},n.default.createElement("a",{className:"header-anchor",href:"#transfer","aria-hidden":"true"},"¶")," Transfer"),n.default.createElement("p",null,"穿梭框"),n.default.createElement("div",{className:"doc-demo-box "+(this.state.showCode6?"doc-demo-code-active":"")},n.default.createElement("div",{className:"doc-demo-instance"},n.default.createElement("h4",null,"Example"),n.default.createElement(d,null)),n.default.createElement("div",{className:"doc-demo-meta"},n.default.createElement("div",{className:"doc-demo-code"},n.default.createElement("pre",null,n.default.createElement("code",{className:"language-js"},n.default.createElement("span",{className:"hljs-class"},n.default.createElement("span",{className:"hljs-keyword"},"class")," ",n.default.createElement("span",{className:"hljs-title"},"Component")," ",n.default.createElement("span",{className:"hljs-keyword"},"extends")," ",n.default.createElement("span",{className:"hljs-title"},"React"),".",n.default.createElement("span",{className:"hljs-title"},"Component")," "),"{",n.default.createElement("br",null),"    ",n.default.createElement("span",{className:"hljs-keyword"},"constructor"),"(props) ","{",n.default.createElement("br",null),"        ",n.default.createElement("span",{className:"hljs-keyword"},"super"),"(props);",n.default.createElement("br",null),"        ",n.default.createElement("span",{className:"hljs-keyword"},"const")," list = [","{",n.default.createElement("br",null),"            ",n.default.createElement("span",{className:"hljs-attr"},"value"),": ",n.default.createElement("span",{className:"hljs-number"},"1"),",",n.default.createElement("br",null),"            ",n.default.createElement("span",{className:"hljs-attr"},"name"),": ",n.default.createElement("span",{className:"hljs-string"},"'水果'"),n.default.createElement("br",null),"        ","}",",","{",n.default.createElement("br",null),"            ",n.default.createElement("span",{className:"hljs-attr"},"value"),": ",n.default.createElement("span",{className:"hljs-number"},"2"),",",n.default.createElement("br",null),"            ",n.default.createElement("span",{className:"hljs-attr"},"name"),": ",n.default.createElement("span",{className:"hljs-string"},"'蔬菜'"),n.default.createElement("br",null),"        ","}",",","{",n.default.createElement("br",null),"            ",n.default.createElement("span",{className:"hljs-attr"},"value"),": ",n.default.createElement("span",{className:"hljs-number"},"3"),",",n.default.createElement("br",null),"            ",n.default.createElement("span",{className:"hljs-attr"},"name"),": ",n.default.createElement("span",{className:"hljs-string"},"'肉类'"),n.default.createElement("br",null),"        ","}",",","{",n.default.createElement("br",null),"            ",n.default.createElement("span",{className:"hljs-attr"},"value"),": ",n.default.createElement("span",{className:"hljs-number"},"4"),",",n.default.createElement("br",null),"            ",n.default.createElement("span",{className:"hljs-attr"},"name"),": ",n.default.createElement("span",{className:"hljs-string"},"'干果'"),n.default.createElement("br",null),"        ","}",",","{",n.default.createElement("br",null),"            ",n.default.createElement("span",{className:"hljs-attr"},"value"),": ",n.default.createElement("span",{className:"hljs-number"},"5"),",",n.default.createElement("br",null),"            ",n.default.createElement("span",{className:"hljs-attr"},"name"),": ",n.default.createElement("span",{className:"hljs-string"},"'什么乱七八糟'"),n.default.createElement("br",null),"        ","}",",","{",n.default.createElement("br",null),"            ",n.default.createElement("span",{className:"hljs-attr"},"value"),": ",n.default.createElement("span",{className:"hljs-number"},"6"),",",n.default.createElement("br",null),"            ",n.default.createElement("span",{className:"hljs-attr"},"name"),": ",n.default.createElement("span",{className:"hljs-string"},"'电子科技'"),n.default.createElement("br",null),"        ","}","];",n.default.createElement("br",null),"        ",n.default.createElement("br",null),"        ",n.default.createElement("span",{className:"hljs-keyword"},"this"),".state = ","{",n.default.createElement("br",null),"            list,",n.default.createElement("br",null),"            ",n.default.createElement("span",{className:"hljs-attr"},"selectedValues"),": [",n.default.createElement("span",{className:"hljs-number"},"0"),", ",n.default.createElement("span",{className:"hljs-number"},"2"),"]",n.default.createElement("br",null),"        ","}",";",n.default.createElement("br",null),"        ",n.default.createElement("span",{className:"hljs-keyword"},"this"),".handleSelect = ::",n.default.createElement("span",{className:"hljs-keyword"},"this"),".handleSelect;",n.default.createElement("br",null),"    ","}",n.default.createElement("br",null),"    ",n.default.createElement("br",null),"    handleSelect(selectedValues) ","{",n.default.createElement("br",null),"        ",n.default.createElement("span",{className:"hljs-built_in"},"console"),".log(selectedValues);",n.default.createElement("br",null),"        ",n.default.createElement("span",{className:"hljs-keyword"},"this"),".setState(","{",n.default.createElement("br",null),"            selectedValues",n.default.createElement("br",null),"        ","}",");",n.default.createElement("br",null),"    ","}",n.default.createElement("br",null),"    ",n.default.createElement("br",null),"    render() ","{",n.default.createElement("br",null),"        ",n.default.createElement("span",{className:"hljs-keyword"},"const")," ","{","list, selectedValues","}"," = ",n.default.createElement("span",{className:"hljs-keyword"},"this"),".state;",n.default.createElement("br",null),"        ",n.default.createElement("span",{className:"hljs-keyword"},"return")," (",n.default.createElement("br",null),"            ",n.default.createElement("span",{className:"xml"},n.default.createElement("span",{className:"hljs-tag"},"<",n.default.createElement("span",{className:"hljs-name"},"Transfer"),n.default.createElement("br",null),"                ",n.default.createElement("span",{className:"hljs-attr"},"list"),"=",n.default.createElement("span",{className:"hljs-string"},"{","list","}"),n.default.createElement("br",null),"                ",n.default.createElement("span",{className:"hljs-attr"},"selectedValues"),"=",n.default.createElement("span",{className:"hljs-string"},"{","selectedValues","}"),n.default.createElement("br",null),"                ",n.default.createElement("span",{className:"hljs-attr"},"onSelect"),"=",n.default.createElement("span",{className:"hljs-string"},"{","this.handleSelect","}"),n.default.createElement("br",null),"            />"),n.default.createElement("br",null),"        );",n.default.createElement("br",null),"    ","}",n.default.createElement("br",null),"}",n.default.createElement("br",null)))),n.default.createElement("pre",null,n.default.createElement("code",{className:"language-jsx"},"<Component/>",n.default.createElement("br",null)))),n.default.createElement("div",{className:"doc-demo-code-btn",onClick:this.handleToggleCode.bind(this,6)},n.default.createElement("i",null)))),n.default.createElement("div",{className:"doc-demo-box "+(this.state.showCode10?"doc-demo-code-active":"")},n.default.createElement("div",{className:"doc-demo-instance"},n.default.createElement("h4",null,"Example"),n.default.createElement(f,null)),n.default.createElement("div",{className:"doc-demo-meta"},n.default.createElement("div",{className:"doc-demo-code"},n.default.createElement("pre",null,n.default.createElement("code",{className:"language-js"},n.default.createElement("span",{className:"hljs-class"},n.default.createElement("span",{className:"hljs-keyword"},"class")," ",n.default.createElement("span",{className:"hljs-title"},"Component2")," ",n.default.createElement("span",{className:"hljs-keyword"},"extends")," ",n.default.createElement("span",{className:"hljs-title"},"React"),".",n.default.createElement("span",{className:"hljs-title"},"Component")," "),"{",n.default.createElement("br",null),"    ",n.default.createElement("span",{className:"hljs-keyword"},"constructor"),"(props) ","{",n.default.createElement("br",null),"        ",n.default.createElement("span",{className:"hljs-keyword"},"super"),"(props);",n.default.createElement("br",null),"        ",n.default.createElement("span",{className:"hljs-keyword"},"const")," list = [","{",n.default.createElement("br",null),"             ",n.default.createElement("span",{className:"hljs-attr"},"value"),": ",n.default.createElement("span",{className:"hljs-number"},"1"),",",n.default.createElement("br",null),"             ",n.default.createElement("span",{className:"hljs-attr"},"name"),": ",n.default.createElement("span",{className:"hljs-string"},"'蔬菜'"),",",n.default.createElement("br",null),"             ",n.default.createElement("span",{className:"hljs-attr"},"children"),": [","{",n.default.createElement("br",null),"                 ",n.default.createElement("span",{className:"hljs-attr"},"value"),": ",n.default.createElement("span",{className:"hljs-number"},"11"),",",n.default.createElement("br",null),"                 ",n.default.createElement("span",{className:"hljs-attr"},"name"),": ",n.default.createElement("span",{className:"hljs-string"},"'叶菜'"),",",n.default.createElement("br",null),"                 ",n.default.createElement("span",{className:"hljs-attr"},"children"),": [","{",n.default.createElement("br",null),"                     ",n.default.createElement("span",{className:"hljs-attr"},"value"),": ",n.default.createElement("span",{className:"hljs-number"},"111"),",",n.default.createElement("br",null),"                     ",n.default.createElement("span",{className:"hljs-attr"},"name"),": ",n.default.createElement("span",{className:"hljs-string"},"'皇帝菜'"),n.default.createElement("br",null),"                 ","}",", ","{",n.default.createElement("br",null),"                     ",n.default.createElement("span",{className:"hljs-attr"},"value"),": ",n.default.createElement("span",{className:"hljs-number"},"112"),",",n.default.createElement("br",null),"                     ",n.default.createElement("span",{className:"hljs-attr"},"name"),": ",n.default.createElement("span",{className:"hljs-string"},"'金不换'"),n.default.createElement("br",null),"                 ","}","]",n.default.createElement("br",null),"             ","}",", ","{",n.default.createElement("br",null),"                 ",n.default.createElement("span",{className:"hljs-attr"},"value"),": ",n.default.createElement("span",{className:"hljs-number"},"12"),",",n.default.createElement("br",null),"                 ",n.default.createElement("span",{className:"hljs-attr"},"name"),": ",n.default.createElement("span",{className:"hljs-string"},"'甘蓝'"),",",n.default.createElement("br",null),"                 ",n.default.createElement("span",{className:"hljs-attr"},"children"),": [","{",n.default.createElement("br",null),"                     ",n.default.createElement("span",{className:"hljs-attr"},"value"),": ",n.default.createElement("span",{className:"hljs-number"},"121"),",",n.default.createElement("br",null),"                     ",n.default.createElement("span",{className:"hljs-attr"},"name"),": ",n.default.createElement("span",{className:"hljs-string"},"'甘蓝1'"),n.default.createElement("br",null),"                 ","}",", ","{",n.default.createElement("br",null),"                    ",n.default.createElement("span",{className:"hljs-attr"},"value"),": ",n.default.createElement("span",{className:"hljs-number"},"122"),",",n.default.createElement("br",null),"                    ",n.default.createElement("span",{className:"hljs-attr"},"name"),": ",n.default.createElement("span",{className:"hljs-string"},"'甘蓝2'"),"  ",n.default.createElement("br",null),"                 ","}","]",n.default.createElement("br",null),"             ","}","]",n.default.createElement("br",null),"         ","}",", ","{",n.default.createElement("br",null),"             ",n.default.createElement("span",{className:"hljs-attr"},"value"),": ",n.default.createElement("span",{className:"hljs-number"},"2"),",",n.default.createElement("br",null),"             ",n.default.createElement("span",{className:"hljs-attr"},"name"),": ",n.default.createElement("span",{className:"hljs-string"},"'冻品'"),",",n.default.createElement("br",null),"             ",n.default.createElement("span",{className:"hljs-attr"},"children"),": [","{",n.default.createElement("br",null),"                 ",n.default.createElement("span",{className:"hljs-attr"},"value"),": ",n.default.createElement("span",{className:"hljs-number"},"21"),",",n.default.createElement("br",null),"                 ",n.default.createElement("span",{className:"hljs-attr"},"name"),": ",n.default.createElement("span",{className:"hljs-string"},"'冻猪肉'"),",",n.default.createElement("br",null),"                 ",n.default.createElement("span",{className:"hljs-attr"},"children"),": [","{",n.default.createElement("br",null),"                     ",n.default.createElement("span",{className:"hljs-attr"},"value"),": ",n.default.createElement("span",{className:"hljs-number"},"211"),",",n.default.createElement("br",null),"                     ",n.default.createElement("span",{className:"hljs-attr"},"name"),": ",n.default.createElement("span",{className:"hljs-string"},"'五花肉'"),n.default.createElement("br",null),"                 ","}",", ","{",n.default.createElement("br",null),"                     ",n.default.createElement("span",{className:"hljs-attr"},"value"),": ",n.default.createElement("span",{className:"hljs-number"},"212"),",",n.default.createElement("br",null),"                     ",n.default.createElement("span",{className:"hljs-attr"},"name"),": ",n.default.createElement("span",{className:"hljs-string"},"'猪脚'"),n.default.createElement("br",null),"                 ","}","]",n.default.createElement("br",null),"             ","}","]",n.default.createElement("br",null),"         ","}","];",n.default.createElement("br",null),"        ",n.default.createElement("br",null),"        ",n.default.createElement("span",{className:"hljs-keyword"},"this"),".state = ","{",n.default.createElement("br",null),"            list,",n.default.createElement("br",null),"            ",n.default.createElement("span",{className:"hljs-attr"},"selectedValues"),": [",n.default.createElement("span",{className:"hljs-number"},"111"),", ",n.default.createElement("span",{className:"hljs-number"},"212"),"]",n.default.createElement("br",null),"        ","}",";",n.default.createElement("br",null),"        ",n.default.createElement("span",{className:"hljs-keyword"},"this"),".handleSelect = ::",n.default.createElement("span",{className:"hljs-keyword"},"this"),".handleSelect;",n.default.createElement("br",null),"    ","}",n.default.createElement("br",null),"    ",n.default.createElement("br",null),"    handleSelect(selectedValues) ","{",n.default.createElement("br",null),"        ",n.default.createElement("span",{className:"hljs-built_in"},"console"),".log(selectedValues);",n.default.createElement("br",null),"        ",n.default.createElement("span",{className:"hljs-keyword"},"this"),".setState(","{",n.default.createElement("br",null),"            selectedValues",n.default.createElement("br",null),"        ","}",");",n.default.createElement("br",null),"    ","}",n.default.createElement("br",null),"    ",n.default.createElement("br",null),"    render() ","{",n.default.createElement("br",null),"        ",n.default.createElement("span",{className:"hljs-keyword"},"const")," ","{","list, selectedValues","}"," = ",n.default.createElement("span",{className:"hljs-keyword"},"this"),".state;",n.default.createElement("br",null),"        ",n.default.createElement("span",{className:"hljs-keyword"},"return")," (",n.default.createElement("br",null),"            ",n.default.createElement("span",{className:"xml"},n.default.createElement("span",{className:"hljs-tag"},"<",n.default.createElement("span",{className:"hljs-name"},"TransferGroup"),n.default.createElement("br",null),"                ",n.default.createElement("span",{className:"hljs-attr"},"list"),"=",n.default.createElement("span",{className:"hljs-string"},"{","list","}"),n.default.createElement("br",null),"                ",n.default.createElement("span",{className:"hljs-attr"},"selectedValues"),"=",n.default.createElement("span",{className:"hljs-string"},"{","selectedValues","}"),n.default.createElement("br",null),"                ",n.default.createElement("span",{className:"hljs-attr"},"onSelect"),"=",n.default.createElement("span",{className:"hljs-string"},"{","this.handleSelect","}"),n.default.createElement("br",null),"            />"),n.default.createElement("br",null),"        );",n.default.createElement("br",null),"    ","}",n.default.createElement("br",null),"}",n.default.createElement("br",null)))),n.default.createElement("pre",null,n.default.createElement("code",{className:"language-jsx"},"<Component2/>",n.default.createElement("br",null)))),n.default.createElement("div",{className:"doc-demo-code-btn",onClick:this.handleToggleCode.bind(this,10)},n.default.createElement("i",null)))),n.default.createElement("h3",{id:"props"},n.default.createElement("a",{className:"header-anchor",href:"#props","aria-hidden":"true"},"¶")," Props"),n.default.createElement("ul",null,n.default.createElement("li",null,n.default.createElement("p",null,n.default.createElement("code",null,"list (array|isRequired)")," 数据列表啦，格式是 ",n.default.createElement("code",null,"{","value: 3, name: 'item2'","}"))),n.default.createElement("li",null,n.default.createElement("p",null,n.default.createElement("code",null,"selectedValues (array|isRequired)")," 已选择的值，格式是",n.default.createElement("code",null,"[1,2,3]"))),n.default.createElement("li",null,n.default.createElement("p",null,n.default.createElement("code",null,"onSelect (func|isRequired)")," 选择回调，参数和",n.default.createElement("code",null,"selectedValues"),"一样")),n.default.createElement("li",null,n.default.createElement("p",null,n.default.createElement("code",null,"listStyle (object)")," 框的高宽，默认",n.default.createElement("code",null,"{","width: '250px', height: '350px'","}"))),n.default.createElement("li",null,n.default.createElement("p",null,n.default.createElement("code",null,"leftTitle (string)")," 标题，默认 待选择")),n.default.createElement("li",null,n.default.createElement("p",null,n.default.createElement("code",null,"leftWithFilter (func|bool)")," 过滤函数，默认 true 且集成拼音搜索。false 则不出过滤框，fun 则过滤逻辑业务控")),n.default.createElement("li",null,n.default.createElement("p",null,n.default.createElement("code",null,"leftPlaceHolder (string)"))),n.default.createElement("li",null,n.default.createElement("p",null,n.default.createElement("code",null,"rightTitle (string)")," 标题，默认 待选择")),n.default.createElement("li",null,n.default.createElement("p",null,n.default.createElement("code",null,"rightWithFilter (func|bool)")," 过滤函数，默认 true 且集成拼音搜索。false 则不出过滤框，fun 则过滤逻辑业务控")),n.default.createElement("li",null,n.default.createElement("p",null,n.default.createElement("code",null,"rightPlaceHolder (string)")))),n.default.createElement("h2",{id:"transfergroup"},n.default.createElement("a",{className:"header-anchor",href:"#transfergroup","aria-hidden":"true"},"¶")," TransferGroup"),n.default.createElement("p",null,"分组版，区别是 list 结构变了，具体见上述例子"))}}]),l}();l.default=E}}]);
//# sourceMappingURL=53.0eb6a0d3.bundle.js.map