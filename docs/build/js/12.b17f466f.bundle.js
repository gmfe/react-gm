(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{253:function(e,l,t){"use strict";Object.defineProperty(l,"__esModule",{value:!0});var a=function(){function e(e,l){for(var t=0;t<l.length;t++){var a=l[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(l,t,a){return t&&e(l.prototype,t),a&&e(l,a),l}}(),n=function(e){return e&&e.__esModule?e:{default:e}}(t(0)),r=t(7);var u=[{id:3,name:"小明",age:"10"},{id:4,name:"小红",age:"15",_gm_select:!0},{id:5,name:"小蓝",age:"20"}],d=function(e){function l(e){!function(e,l){if(!(e instanceof l))throw new TypeError("Cannot call a class as a function")}(this,l);var t=function(e,l){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!l||"object"!=typeof l&&"function"!=typeof l?e:l}(this,(l.__proto__||Object.getPrototypeOf(l)).call(this,e));return t.state={},t}return function(e,l){if("function"!=typeof l&&null!==l)throw new TypeError("Super expression must either be null or a function, not "+typeof l);e.prototype=Object.create(l&&l.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),l&&(Object.setPrototypeOf?Object.setPrototypeOf(e,l):e.__proto__=l)}(l,n.default.Component),a(l,[{key:"handleToggleCode",value:function(e){var l={};l["showCode"+e]=!this.state["showCode"+e],this.setState(l)}},{key:"render",value:function(){return n.default.createElement("div",{className:"doc"},n.default.createElement("h2",{id:"sheetcolumn"},n.default.createElement("a",{className:"header-anchor",href:"#sheetcolumn","aria-hidden":"true"},"¶")," SheetColumn"),n.default.createElement("p",null,"SheetColumn的顺序决定table列的顺序"),n.default.createElement("div",{className:"doc-demo-box "+(this.state.showCode6?"doc-demo-code-active":"")},n.default.createElement("div",{className:"doc-demo-instance"},n.default.createElement("h4",null,"Example"),n.default.createElement(r.Sheet,{list:u},n.default.createElement(r.SheetColumn,{field:"id",name:"id"}),n.default.createElement(r.SheetColumn,{field:"name",name:n.default.createElement("div",null,"1换行",n.default.createElement("br",null),"2")}),n.default.createElement(r.SheetColumn,{field:"age",name:"年龄",style:{width:"100px",backgroundColor:"red"}}),n.default.createElement(r.SheetColumn,{field:"name",name:"name"},function(e){return"你好 "+e}),n.default.createElement(r.SheetColumn,{field:"name",name:"name",render:function(e){return"你好 "+e}}),n.default.createElement(r.SheetColumn,{field:"name",name:"name"},function(e){return n.default.createElement("strong",null,"你好 ",e)}),n.default.createElement(r.SheetColumn,{field:"name",name:"name"},function(e,l){return n.default.createElement("strong",null,"你好 ",e,"，你的id是 ",u[l].id)}),n.default.createElement(r.SheetColumn,{field:"asfafasfas",name:"field乱来"},function(e,l){return n.default.createElement("strong",null,"你好 ",u[l].name,"，你的id是 ",u[l].id)}))),n.default.createElement("div",{className:"doc-demo-meta"},n.default.createElement("div",{className:"doc-demo-description"},n.default.createElement("p",null,"自定义")),n.default.createElement("div",{className:"doc-demo-code"},n.default.createElement("pre",null,n.default.createElement("code",{className:"language-js"},n.default.createElement("span",{className:"hljs-keyword"},"const")," list= [","{",n.default.createElement("br",null),"    ",n.default.createElement("span",{className:"hljs-attr"},"id"),": ",n.default.createElement("span",{className:"hljs-number"},"3"),",",n.default.createElement("br",null),"    ",n.default.createElement("span",{className:"hljs-attr"},"name"),": ",n.default.createElement("span",{className:"hljs-string"},"'小明'"),",",n.default.createElement("br",null),"    ",n.default.createElement("span",{className:"hljs-attr"},"age"),": ",n.default.createElement("span",{className:"hljs-string"},"'10'"),n.default.createElement("br",null),"}",", ","{",n.default.createElement("br",null),"    ",n.default.createElement("span",{className:"hljs-attr"},"id"),": ",n.default.createElement("span",{className:"hljs-number"},"4"),",",n.default.createElement("br",null),"    ",n.default.createElement("span",{className:"hljs-attr"},"name"),": ",n.default.createElement("span",{className:"hljs-string"},"'小红'"),",",n.default.createElement("br",null),"    ",n.default.createElement("span",{className:"hljs-attr"},"age"),": ",n.default.createElement("span",{className:"hljs-string"},"'15'"),",",n.default.createElement("br",null),"    ",n.default.createElement("span",{className:"hljs-attr"},"_gm_select"),": ",n.default.createElement("span",{className:"hljs-literal"},"true"),n.default.createElement("br",null),"}",", ","{",n.default.createElement("br",null),"   ",n.default.createElement("span",{className:"hljs-attr"},"id"),": ",n.default.createElement("span",{className:"hljs-number"},"5"),",",n.default.createElement("br",null),"   ",n.default.createElement("span",{className:"hljs-attr"},"name"),": ",n.default.createElement("span",{className:"hljs-string"},"'小蓝'"),",",n.default.createElement("br",null),"   ",n.default.createElement("span",{className:"hljs-attr"},"age"),": ",n.default.createElement("span",{className:"hljs-string"},"'20'"),n.default.createElement("br",null),"}","];",n.default.createElement("br",null))),n.default.createElement("pre",null,n.default.createElement("code",{className:"language-jsx"},"<Sheet list=","{","list","}",">",n.default.createElement("br",null),'    <SheetColumn field="id" name="id"/>',n.default.createElement("br",null),"    ",n.default.createElement("br",null),'    <SheetColumn field="name" name=',"{","<div>1换行<br/>2</div>","}","/>",n.default.createElement("br",null),"    ",n.default.createElement("br",null),'    <SheetColumn field="age" name="年龄" style=',"{","{","width: '100px', backgroundColor: 'red'","}","}","/>",n.default.createElement("br",null),"    ",n.default.createElement("br",null),"    ","{","/*可以自定义显示，children传入一个func，func提供当前数据值，返回要显示的结果*/","}",n.default.createElement("br",null),'    <SheetColumn field="name" name="name">',n.default.createElement("br",null),"        ","{","value => '你好 ' + value","}",n.default.createElement("br",null),"    </SheetColumn>",n.default.createElement("br",null),"{","/*可以自定义显示，children传入一个func，func提供当前数据值，返回要显示的结果*/","}",n.default.createElement("br",null),'    <SheetColumn field="name" name="name" render=',"{","value => ('你好 ' + value)","}","/>",n.default.createElement("br",null),"    ",n.default.createElement("br",null),"    ","{","/*不止文本，可以返回任何东西。 可交互的input啊，button啊等*/","}",n.default.createElement("br",null),'    <SheetColumn field="name" name="name">',n.default.createElement("br",null),"        ","{","value => <strong>你好 ","{","value","}","</strong>","}",n.default.createElement("br",null),"    </SheetColumn>",n.default.createElement("br",null),"    ",n.default.createElement("br",null),"    ","{","/*func第二个参数提供当前数据的索引，通过索引你可以找到当前的数据*/","}",n.default.createElement("br",null),'    <SheetColumn field="name" name="name">',n.default.createElement("br",null),"        ","{","(value, i) => <strong>你好 ","{","value","}","，你的id是 ","{","list[i].id","}","</strong>","}",n.default.createElement("br",null),"    </SheetColumn>",n.default.createElement("br",null),"    ",n.default.createElement("br",null),"    ","{","/*field你也可以乱来，你喜欢*/","}",n.default.createElement("br",null),'    <SheetColumn field="asfafasfas" name="field乱来">',n.default.createElement("br",null),"        ","{","(value, i) => <strong>你好 ","{","list[i].name","}","，你的id是 ","{","list[i].id","}","</strong>","}",n.default.createElement("br",null),"    </SheetColumn>",n.default.createElement("br",null),"</Sheet>",n.default.createElement("br",null)))),n.default.createElement("div",{className:"doc-demo-code-btn",onClick:this.handleToggleCode.bind(this,6)},n.default.createElement("i",null)))),n.default.createElement("h3",{id:"props"},n.default.createElement("a",{className:"header-anchor",href:"#props","aria-hidden":"true"},"¶")," Props"),n.default.createElement("ul",null,n.default.createElement("li",null,n.default.createElement("code",null,"field (string|isRequired)")," 某列读取数据的字段名"),n.default.createElement("li",null,n.default.createElement("code",null,"name (string|element|isRequired)")," 某列表头的名字"),n.default.createElement("li",null,n.default.createElement("code",null,"placeholder (any)")," 默认值， 值为 undefined 和 null 时就显示placeholder的值"),n.default.createElement("li",null,n.default.createElement("code",null,"render (func)")," 返回任意东西，自定义单元格展现"),n.default.createElement("li",null,n.default.createElement("code",null,"children (func)")," 返回任意东西，自定义单元格展现"),n.default.createElement("li",null,"...rest")))}}]),l}();l.default=d}}]);
//# sourceMappingURL=12.b17f466f.bundle.js.map