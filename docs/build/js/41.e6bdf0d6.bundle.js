(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{277:function(e,l,t){"use strict";Object.defineProperty(l,"__esModule",{value:!0});var a=function(){function e(e,l){for(var t=0;t<l.length;t++){var a=l[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(l,t,a){return t&&e(l.prototype,t),a&&e(l,a),l}}(),n=c(t(0)),s=t(7),r=c(t(2));function c(e){return e&&e.__esModule?e:{default:e}}function u(e,l){if(!(e instanceof l))throw new TypeError("Cannot call a class as a function")}function d(e,l){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!l||"object"!=typeof l&&"function"!=typeof l?e:l}function m(e,l){if("function"!=typeof l&&null!==l)throw new TypeError("Super expression must either be null or a function, not "+typeof l);e.prototype=Object.create(l&&l.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),l&&(Object.setPrototypeOf?Object.setPrototypeOf(e,l):e.__proto__=l)}var f=[{name:"华侨城"},{name:"世界之窗"},{name:"南山"},{name:"梧桐山"},{name:"欢乐海岸"},{name:"东部华侨城"},{name:"深圳湾"},{name:"华中科技大学"}],h=[{label:"一组",children:[{name:"华侨城"},{name:"世界之窗"},{name:"南山"},{name:"梧桐山"},{name:"欢乐海岸"}]},{label:"二组",children:[{name:"东部华侨城"},{name:"深圳湾"},{name:"华中科技大学"}]}],E=function(e){function l(e){u(this,l);var t=d(this,(l.__proto__||Object.getPrototypeOf(l)).call(this,e));return t.state={selected:f[2],list:f},t.handleSelect=t.handleSelect.bind(t),t.handleSearch=t.handleSearch.bind(t),t}return m(l,n.default.Component),a(l,[{key:"handleSelect",value:function(e){console.log(e),this.setState({selected:e})}},{key:"handleSearch",value:function(e){this.state.selected&&e===this.state.selected.name?this.setState({list:f}):this.setState({list:r.default.filter(f,function(l){return l.name.indexOf(e)>-1})})}},{key:"render",value:function(){return n.default.createElement("div",{style:{width:"300px"}},n.default.createElement(s.SearchSelect,{list:this.state.list,selected:this.state.selected,onSearch:this.handleSearch,onSelect:this.handleSelect,placeholder:"搜索"}),n.default.createElement(s.SearchSelect,{list:this.state.list,renderListCell:function(e){return n.default.createElement("strong",null,e.name," balabala")},selected:this.state.selected,onSearch:this.handleSearch,onSelect:this.handleSelect,placeholder:"搜索"}),n.default.createElement(s.SearchSelect,{disabled:!0,list:this.state.list,selected:this.state.selected,onSearch:this.handleSearch,onSelect:this.handleSelect,placeholder:"搜索"}))}}]),l}(),i=function(e){function l(e){u(this,l);var t=d(this,(l.__proto__||Object.getPrototypeOf(l)).call(this,e));return t.state={selected:f,list:f},t.handleSelect=t.handleSelect.bind(t),t.handleSearch=t.handleSearch.bind(t),t}return m(l,n.default.Component),a(l,[{key:"handleSelect",value:function(e){console.log(e),this.setState({selected:e})}},{key:"handleSearch",value:function(e){this.state.selected&&e===this.state.selected?this.setState({list:f}):this.setState({list:r.default.filter(f,function(l){return l.name.indexOf(e)>-1})})}},{key:"render",value:function(){return n.default.createElement("div",{style:{width:"500px"}},n.default.createElement(s.SearchSelect,{list:this.state.list,selected:this.state.selected,onSearch:this.handleSearch,onSelect:this.handleSelect,multiple:!0,placeholder:"搜索"}),n.default.createElement(s.SearchSelect,{disabled:!0,list:this.state.list,selected:this.state.selected,onSearch:this.handleSearch,onSelect:this.handleSelect,multiple:!0,placeholder:"搜索"}))}}]),l}(),o=function(e){function l(e){u(this,l);var t=d(this,(l.__proto__||Object.getPrototypeOf(l)).call(this,e));return t.state={selected:null,list:[].concat(h)},t.handleSelect=t.handleSelect.bind(t),t.handleSearch=t.handleSearch.bind(t),t}return m(l,n.default.Component),a(l,[{key:"handleSelect",value:function(e){console.log(e),this.setState({selected:e})}},{key:"handleSearch",value:function(e){var l=JSON.parse(JSON.stringify(h));this.state.selected&&this.state.selected.name===e?this.setState({list:[].concat(h)}):this.setState({list:r.default.filter(l,function(l){return l.children=r.default.filter(l.children,function(l){return console.log("item",l.name.indexOf(e)>-1),l.name.indexOf(e)>-1}),l.children.length})})}},{key:"render",value:function(){return n.default.createElement("div",{style:{width:"300px"}},n.default.createElement(s.SearchSelect,{list:this.state.list,isGroupList:!0,selected:this.state.selected,onSearch:this.handleSearch,onSelect:this.handleSelect,placeholder:"搜索"}))}}]),l}(),b=function(e){function l(e){u(this,l);var t=d(this,(l.__proto__||Object.getPrototypeOf(l)).call(this,e));return t.state={},t}return m(l,n.default.Component),a(l,[{key:"handleToggleCode",value:function(e){var l={};l["showCode"+e]=!this.state["showCode"+e],this.setState(l)}},{key:"render",value:function(){return n.default.createElement("div",{className:"doc"},n.default.createElement("h2",{id:"searchselect"},n.default.createElement("a",{className:"header-anchor",href:"#searchselect","aria-hidden":"true"},"¶")," SearchSelect"),n.default.createElement("p",null,"搜索选择组件，请优先考虑选择更便捷的",n.default.createElement("a",{href:"#/doc/FilterSearchSelect"},"FilterSearchSelect"),"。"),n.default.createElement("p",null,"SearchSelect  和 FilterSearchSelect 如果用起来发现二次进入的时候会有奇怪现象（输入框的默认值存在），就试试给个key吧，设计的略复杂，不知道怎么处理了。"),n.default.createElement("div",{className:"doc-demo-box "+(this.state.showCode9?"doc-demo-code-active":"")},n.default.createElement("div",{className:"doc-demo-instance"},n.default.createElement("h4",null,"Example")),n.default.createElement("div",{className:"doc-demo-meta"},n.default.createElement("div",{className:"doc-demo-description"},n.default.createElement("p",null,"以下example依赖的数据")),n.default.createElement("div",{className:"doc-demo-code"},n.default.createElement("pre",null,n.default.createElement("code",{className:"language-js"},n.default.createElement("span",{className:"hljs-keyword"},"const")," searchSelectData = [",n.default.createElement("br",null),"    ","{",n.default.createElement("span",{className:"hljs-attr"},"name"),": ",n.default.createElement("span",{className:"hljs-string"},"'华侨城'"),"}",",",n.default.createElement("br",null),"    ","{",n.default.createElement("span",{className:"hljs-attr"},"name"),": ",n.default.createElement("span",{className:"hljs-string"},"'世界之窗'"),"}",",",n.default.createElement("br",null),"    ","{",n.default.createElement("span",{className:"hljs-attr"},"name"),": ",n.default.createElement("span",{className:"hljs-string"},"'南山'"),"}",",",n.default.createElement("br",null),"    ","{",n.default.createElement("span",{className:"hljs-attr"},"name"),": ",n.default.createElement("span",{className:"hljs-string"},"'梧桐山'"),"}",",",n.default.createElement("br",null),"    ","{",n.default.createElement("span",{className:"hljs-attr"},"name"),": ",n.default.createElement("span",{className:"hljs-string"},"'欢乐海岸'"),"}",",",n.default.createElement("br",null),"    ","{",n.default.createElement("span",{className:"hljs-attr"},"name"),": ",n.default.createElement("span",{className:"hljs-string"},"'东部华侨城'"),"}",",",n.default.createElement("br",null),"    ","{",n.default.createElement("span",{className:"hljs-attr"},"name"),": ",n.default.createElement("span",{className:"hljs-string"},"'深圳湾'"),"}",",",n.default.createElement("br",null),"    ","{",n.default.createElement("span",{className:"hljs-attr"},"name"),": ",n.default.createElement("span",{className:"hljs-string"},"'华中科技大学'"),"}",n.default.createElement("br",null),"];",n.default.createElement("br",null),"    ",n.default.createElement("br",null),n.default.createElement("span",{className:"hljs-keyword"},"const")," searchSelectGroupData = [","{",n.default.createElement("br",null),"    ",n.default.createElement("span",{className:"hljs-attr"},"label"),": ",n.default.createElement("span",{className:"hljs-string"},"'一组'"),",",n.default.createElement("br",null),"    ",n.default.createElement("span",{className:"hljs-attr"},"children"),": [",n.default.createElement("br",null),"        ","{",n.default.createElement("span",{className:"hljs-attr"},"name"),": ",n.default.createElement("span",{className:"hljs-string"},"'华侨城'"),"}",",",n.default.createElement("br",null),"        ","{",n.default.createElement("span",{className:"hljs-attr"},"name"),": ",n.default.createElement("span",{className:"hljs-string"},"'世界之窗'"),"}",",",n.default.createElement("br",null),"        ","{",n.default.createElement("span",{className:"hljs-attr"},"name"),": ",n.default.createElement("span",{className:"hljs-string"},"'南山'"),"}",",",n.default.createElement("br",null),"        ","{",n.default.createElement("span",{className:"hljs-attr"},"name"),": ",n.default.createElement("span",{className:"hljs-string"},"'梧桐山'"),"}",",",n.default.createElement("br",null),"        ","{",n.default.createElement("span",{className:"hljs-attr"},"name"),": ",n.default.createElement("span",{className:"hljs-string"},"'欢乐海岸'"),"}",n.default.createElement("br",null),"    ]",n.default.createElement("br",null),"}",",","{",n.default.createElement("br",null),"    ",n.default.createElement("span",{className:"hljs-attr"},"label"),": ",n.default.createElement("span",{className:"hljs-string"},"'二组'"),",",n.default.createElement("br",null),"    ",n.default.createElement("span",{className:"hljs-attr"},"children"),": [",n.default.createElement("br",null),"        ","{",n.default.createElement("span",{className:"hljs-attr"},"name"),": ",n.default.createElement("span",{className:"hljs-string"},"'东部华侨城'"),"}",",",n.default.createElement("br",null),"        ","{",n.default.createElement("span",{className:"hljs-attr"},"name"),": ",n.default.createElement("span",{className:"hljs-string"},"'深圳湾'"),"}",",",n.default.createElement("br",null),"        ","{",n.default.createElement("span",{className:"hljs-attr"},"name"),": ",n.default.createElement("span",{className:"hljs-string"},"'华中科技大学'"),"}",n.default.createElement("br",null),"    ]",n.default.createElement("br",null),"}","];",n.default.createElement("br",null)))),n.default.createElement("div",{className:"doc-demo-code-btn",onClick:this.handleToggleCode.bind(this,9)},n.default.createElement("i",null)))),n.default.createElement("div",{className:"doc-demo-box "+(this.state.showCode12?"doc-demo-code-active":"")},n.default.createElement("div",{className:"doc-demo-instance"},n.default.createElement("h4",null,"Example"),n.default.createElement(E,null)),n.default.createElement("div",{className:"doc-demo-meta"},n.default.createElement("div",{className:"doc-demo-description"},n.default.createElement("p",null,"单选。如果把搜索条件清空，则代表没有选择。")),n.default.createElement("div",{className:"doc-demo-code"},n.default.createElement("pre",null,n.default.createElement("code",{className:"language-js"},n.default.createElement("span",{className:"hljs-class"},n.default.createElement("span",{className:"hljs-keyword"},"class")," ",n.default.createElement("span",{className:"hljs-title"},"SearchSelect1")," ",n.default.createElement("span",{className:"hljs-keyword"},"extends")," ",n.default.createElement("span",{className:"hljs-title"},"React"),".",n.default.createElement("span",{className:"hljs-title"},"Component")," "),"{",n.default.createElement("br",null),"    ",n.default.createElement("span",{className:"hljs-keyword"},"constructor"),"(props) ","{",n.default.createElement("br",null),"        ",n.default.createElement("span",{className:"hljs-keyword"},"super"),"(props);",n.default.createElement("br",null),"        ",n.default.createElement("span",{className:"hljs-keyword"},"this"),".state = ","{",n.default.createElement("br",null),"            ",n.default.createElement("span",{className:"hljs-attr"},"selected"),": searchSelectData[",n.default.createElement("span",{className:"hljs-number"},"2"),"],",n.default.createElement("br",null),"            ",n.default.createElement("span",{className:"hljs-attr"},"list"),": searchSelectData",n.default.createElement("br",null),"        ","}",";",n.default.createElement("br",null),"        ",n.default.createElement("span",{className:"hljs-keyword"},"this"),".handleSelect = ::",n.default.createElement("span",{className:"hljs-keyword"},"this"),".handleSelect;",n.default.createElement("br",null),"        ",n.default.createElement("span",{className:"hljs-keyword"},"this"),".handleSearch = ::",n.default.createElement("span",{className:"hljs-keyword"},"this"),".handleSearch;",n.default.createElement("br",null),"    ","}",n.default.createElement("br",null),"    ",n.default.createElement("br",null),"    handleSelect(selected) ","{",n.default.createElement("br",null),"        ",n.default.createElement("span",{className:"hljs-built_in"},"console"),".log(selected);",n.default.createElement("br",null),"        ",n.default.createElement("span",{className:"hljs-keyword"},"this"),".setState(","{",n.default.createElement("br",null),"            selected",n.default.createElement("br",null),"        ","}",");",n.default.createElement("br",null),"    ","}",n.default.createElement("br",null),"    ",n.default.createElement("br",null),"    handleSearch(value) ","{",n.default.createElement("br",null),"        ",n.default.createElement("span",{className:"hljs-keyword"},"if"),"(",n.default.createElement("span",{className:"hljs-keyword"},"this"),".state.selected && value === ",n.default.createElement("span",{className:"hljs-keyword"},"this"),".state.selected.name)","{",n.default.createElement("br",null),"            ",n.default.createElement("span",{className:"hljs-keyword"},"this"),".setState(","{",n.default.createElement("br",null),"                ",n.default.createElement("span",{className:"hljs-attr"},"list"),": searchSelectData",n.default.createElement("br",null),"            ","}",");",n.default.createElement("br",null),"        ","}",n.default.createElement("span",{className:"hljs-keyword"},"else"),"{",n.default.createElement("br",null),"            ",n.default.createElement("span",{className:"hljs-keyword"},"this"),".setState(","{",n.default.createElement("br",null),"                ",n.default.createElement("span",{className:"hljs-attr"},"list"),": _.filter(searchSelectData, v => ","{",n.default.createElement("br",null),"                    ",n.default.createElement("span",{className:"hljs-keyword"},"return")," v.name.indexOf(value) > ",n.default.createElement("span",{className:"hljs-number"},"-1"),";",n.default.createElement("br",null),"                ","}",")",n.default.createElement("br",null),"            ","}",");",n.default.createElement("br",null),"        ","}",n.default.createElement("br",null),"    ","}",n.default.createElement("br",null),"    ",n.default.createElement("br",null),"    render() ","{",n.default.createElement("br",null),"        ",n.default.createElement("span",{className:"hljs-keyword"},"return")," (",n.default.createElement("br",null),"            <div style=","{","{","width: '300px'","}","}",">",n.default.createElement("br",null),"                <SearchSelect",n.default.createElement("br",null),"                    list=","{","this.state.list","}",n.default.createElement("br",null),"                    selected=","{","this.state.selected","}",n.default.createElement("br",null),"                    onSearch=","{","this.handleSearch","}",n.default.createElement("br",null),"                    onSelect=","{","this.handleSelect","}",n.default.createElement("br",null),'                    placeholder="搜索"',n.default.createElement("br",null),"                />",n.default.createElement("br",null),"<SearchSelect",n.default.createElement("br",null),"                    list=","{","this.state.list","}",n.default.createElement("br",null),"                    renderListCell=","{","v => (<strong>","{","v.name","}"," balabala</strong>)","}",n.default.createElement("br",null),"                    selected=","{","this.state.selected","}",n.default.createElement("br",null),"                    onSearch=","{","this.handleSearch","}",n.default.createElement("br",null),"                    onSelect=","{","this.handleSelect","}",n.default.createElement("br",null),'                    placeholder="搜索"',n.default.createElement("br",null),"                />",n.default.createElement("br",null),"                ",n.default.createElement("br",null),"                <SearchSelect",n.default.createElement("br",null),"                    disabled",n.default.createElement("br",null),"                    list=","{","this.state.list","}",n.default.createElement("br",null),"                    selected=","{","this.state.selected","}",n.default.createElement("br",null),"                    onSearch=","{","this.handleSearch","}",n.default.createElement("br",null),"                    onSelect=","{","this.handleSelect","}",n.default.createElement("br",null),'                    placeholder="搜索"',n.default.createElement("br",null),"                />",n.default.createElement("br",null),"            </div>",n.default.createElement("br",null),"        );",n.default.createElement("br",null),"    ","}",n.default.createElement("br",null),"}",n.default.createElement("br",null))),n.default.createElement("pre",null,n.default.createElement("code",{className:"language-jsx"},"<SearchSelect1/>",n.default.createElement("br",null)))),n.default.createElement("div",{className:"doc-demo-code-btn",onClick:this.handleToggleCode.bind(this,12)},n.default.createElement("i",null)))),n.default.createElement("div",{className:"doc-demo-box "+(this.state.showCode16?"doc-demo-code-active":"")},n.default.createElement("div",{className:"doc-demo-instance"},n.default.createElement("h4",null,"Example"),n.default.createElement(i,null)),n.default.createElement("div",{className:"doc-demo-meta"},n.default.createElement("div",{className:"doc-demo-description"},n.default.createElement("p",null,"多选。 按delete可删除。")),n.default.createElement("div",{className:"doc-demo-code"},n.default.createElement("pre",null,n.default.createElement("code",{className:"language-js"},n.default.createElement("span",{className:"hljs-class"},n.default.createElement("span",{className:"hljs-keyword"},"class")," ",n.default.createElement("span",{className:"hljs-title"},"SearchSelect2")," ",n.default.createElement("span",{className:"hljs-keyword"},"extends")," ",n.default.createElement("span",{className:"hljs-title"},"React"),".",n.default.createElement("span",{className:"hljs-title"},"Component")," "),"{",n.default.createElement("br",null),"    ",n.default.createElement("span",{className:"hljs-keyword"},"constructor"),"(props) ","{",n.default.createElement("br",null),"        ",n.default.createElement("span",{className:"hljs-keyword"},"super"),"(props);",n.default.createElement("br",null),"        ",n.default.createElement("span",{className:"hljs-keyword"},"this"),".state = ","{",n.default.createElement("br",null),"            ",n.default.createElement("span",{className:"hljs-attr"},"selected"),": searchSelectData,",n.default.createElement("br",null),"            ",n.default.createElement("span",{className:"hljs-attr"},"list"),": searchSelectData",n.default.createElement("br",null),"        ","}",";",n.default.createElement("br",null),"        ",n.default.createElement("span",{className:"hljs-keyword"},"this"),".handleSelect = ::",n.default.createElement("span",{className:"hljs-keyword"},"this"),".handleSelect;",n.default.createElement("br",null),"        ",n.default.createElement("span",{className:"hljs-keyword"},"this"),".handleSearch = ::",n.default.createElement("span",{className:"hljs-keyword"},"this"),".handleSearch;",n.default.createElement("br",null),"    ","}",n.default.createElement("br",null),"    ",n.default.createElement("br",null),"    handleSelect(selected) ","{",n.default.createElement("br",null),"        ",n.default.createElement("span",{className:"hljs-built_in"},"console"),".log(selected);",n.default.createElement("br",null),"        ",n.default.createElement("span",{className:"hljs-keyword"},"this"),".setState(","{",n.default.createElement("br",null),"            selected",n.default.createElement("br",null),"        ","}",");",n.default.createElement("br",null),"    ","}",n.default.createElement("br",null),"    ",n.default.createElement("br",null),"    handleSearch(value) ","{",n.default.createElement("br",null),"        ",n.default.createElement("span",{className:"hljs-comment"},"// 字符串匹配过滤，如果和选中的一样，则返回全部"),n.default.createElement("br",null),"        ",n.default.createElement("span",{className:"hljs-keyword"},"if"),"(",n.default.createElement("span",{className:"hljs-keyword"},"this"),".state.selected && value === ",n.default.createElement("span",{className:"hljs-keyword"},"this"),".state.selected)","{",n.default.createElement("br",null),"            ",n.default.createElement("span",{className:"hljs-keyword"},"this"),".setState(","{",n.default.createElement("br",null),"                ",n.default.createElement("span",{className:"hljs-attr"},"list"),": searchSelectData",n.default.createElement("br",null),"            ","}",");",n.default.createElement("br",null),"        ","}",n.default.createElement("span",{className:"hljs-keyword"},"else"),"{",n.default.createElement("br",null),"            ",n.default.createElement("span",{className:"hljs-keyword"},"this"),".setState(","{",n.default.createElement("br",null),"                 ",n.default.createElement("span",{className:"hljs-attr"},"list"),": _.filter(searchSelectData, v => v.name.indexOf(value) > ",n.default.createElement("span",{className:"hljs-number"},"-1"),")",n.default.createElement("br",null),"            ","}",");",n.default.createElement("br",null),"        ","}",n.default.createElement("br",null),"    ","}",n.default.createElement("br",null),"    ",n.default.createElement("br",null),"    render() ","{",n.default.createElement("br",null),"        ",n.default.createElement("span",{className:"hljs-keyword"},"return")," (",n.default.createElement("br",null),"            <div style=","{","{","width: '500px'","}","}",">",n.default.createElement("br",null),"                <SearchSelect",n.default.createElement("br",null),"                    list=","{","this.state.list","}",n.default.createElement("br",null),"                    selected=","{","this.state.selected","}",n.default.createElement("br",null),"                    onSearch=","{","this.handleSearch","}",n.default.createElement("br",null),"                    onSelect=","{","this.handleSelect","}",n.default.createElement("br",null),"                    multiple",n.default.createElement("br",null),'                    placeholder="搜索"',n.default.createElement("br",null),"                />",n.default.createElement("br",null),"                ",n.default.createElement("br",null),"                <SearchSelect",n.default.createElement("br",null),"                    disabled",n.default.createElement("br",null),"                    list=","{","this.state.list","}",n.default.createElement("br",null),"                    selected=","{","this.state.selected","}",n.default.createElement("br",null),"                    onSearch=","{","this.handleSearch","}",n.default.createElement("br",null),"                    onSelect=","{","this.handleSelect","}",n.default.createElement("br",null),"                    multiple",n.default.createElement("br",null),'                    placeholder="搜索"',n.default.createElement("br",null),"                />",n.default.createElement("br",null),"            </div>",n.default.createElement("br",null),"        );",n.default.createElement("br",null),"    ","}",n.default.createElement("br",null),"}",n.default.createElement("br",null))),n.default.createElement("pre",null,n.default.createElement("code",{className:"language-jsx"},"<SearchSelect2/>",n.default.createElement("br",null)))),n.default.createElement("div",{className:"doc-demo-code-btn",onClick:this.handleToggleCode.bind(this,16)},n.default.createElement("i",null)))),n.default.createElement("div",{className:"doc-demo-box "+(this.state.showCode20?"doc-demo-code-active":"")},n.default.createElement("div",{className:"doc-demo-instance"},n.default.createElement("h4",null,"Example"),n.default.createElement(o,null)),n.default.createElement("div",{className:"doc-demo-meta"},n.default.createElement("div",{className:"doc-demo-description"},n.default.createElement("p",null,"按组分")),n.default.createElement("div",{className:"doc-demo-code"},n.default.createElement("pre",null,n.default.createElement("code",{className:"language-js"},n.default.createElement("span",{className:"hljs-class"},n.default.createElement("span",{className:"hljs-keyword"},"class")," ",n.default.createElement("span",{className:"hljs-title"},"SearchSelect3")," ",n.default.createElement("span",{className:"hljs-keyword"},"extends")," ",n.default.createElement("span",{className:"hljs-title"},"React"),".",n.default.createElement("span",{className:"hljs-title"},"Component")," "),"{",n.default.createElement("br",null),"    ",n.default.createElement("span",{className:"hljs-keyword"},"constructor"),"(props) ","{",n.default.createElement("br",null),"        ",n.default.createElement("span",{className:"hljs-keyword"},"super"),"(props);",n.default.createElement("br",null),"        ",n.default.createElement("span",{className:"hljs-keyword"},"this"),".state = ","{",n.default.createElement("br",null),"            ",n.default.createElement("span",{className:"hljs-attr"},"selected"),": ",n.default.createElement("span",{className:"hljs-literal"},"null"),",",n.default.createElement("br",null),"            ",n.default.createElement("span",{className:"hljs-attr"},"list"),": [...searchSelectGroupData]",n.default.createElement("br",null),"        ","}",";",n.default.createElement("br",null),"        ",n.default.createElement("span",{className:"hljs-keyword"},"this"),".handleSelect = ::",n.default.createElement("span",{className:"hljs-keyword"},"this"),".handleSelect;",n.default.createElement("br",null),"        ",n.default.createElement("span",{className:"hljs-keyword"},"this"),".handleSearch = ::",n.default.createElement("span",{className:"hljs-keyword"},"this"),".handleSearch;",n.default.createElement("br",null),"    ","}",n.default.createElement("br",null),"    ",n.default.createElement("br",null),"    handleSelect(selected) ","{",n.default.createElement("br",null),"        ",n.default.createElement("span",{className:"hljs-built_in"},"console"),".log(selected);",n.default.createElement("br",null),"        ",n.default.createElement("span",{className:"hljs-keyword"},"this"),".setState(","{",n.default.createElement("br",null),"            selected",n.default.createElement("br",null),"        ","}",");",n.default.createElement("br",null),"    ","}",n.default.createElement("br",null),"    ",n.default.createElement("br",null),"    handleSearch(value) ","{",n.default.createElement("br",null),"        ",n.default.createElement("span",{className:"hljs-keyword"},"const")," list = ",n.default.createElement("span",{className:"hljs-built_in"},"JSON"),".parse(",n.default.createElement("span",{className:"hljs-built_in"},"JSON"),".stringify(searchSelectGroupData));",n.default.createElement("br",null),"        ",n.default.createElement("br",null),"        ",n.default.createElement("span",{className:"hljs-keyword"},"if"),"(",n.default.createElement("span",{className:"hljs-keyword"},"this"),".state.selected && ",n.default.createElement("span",{className:"hljs-keyword"},"this"),".state.selected.name === value)","{",n.default.createElement("br",null),"            ",n.default.createElement("span",{className:"hljs-keyword"},"this"),".setState(","{",n.default.createElement("br",null),"                ",n.default.createElement("span",{className:"hljs-attr"},"list"),": [...searchSelectGroupData]",n.default.createElement("br",null),"            ","}",");",n.default.createElement("br",null),"        ","}",n.default.createElement("span",{className:"hljs-keyword"},"else"),"{",n.default.createElement("br",null),"            ",n.default.createElement("span",{className:"hljs-keyword"},"this"),".setState(","{",n.default.createElement("br",null),"                ",n.default.createElement("span",{className:"hljs-attr"},"list"),": _.filter(list, v => ","{",n.default.createElement("br",null),"                    v.children = _.filter(v.children, item => ","{",n.default.createElement("br",null),"                        ",n.default.createElement("span",{className:"hljs-built_in"},"console"),".log(",n.default.createElement("span",{className:"hljs-string"},"'item'"),", item.name.indexOf(value) > ",n.default.createElement("span",{className:"hljs-number"},"-1"),");",n.default.createElement("br",null),"                        ",n.default.createElement("span",{className:"hljs-keyword"},"return")," item.name.indexOf(value) > ",n.default.createElement("span",{className:"hljs-number"},"-1"),";",n.default.createElement("br",null),"                    ","}",");",n.default.createElement("br",null),"                    ",n.default.createElement("br",null),"                    ",n.default.createElement("span",{className:"hljs-keyword"},"return")," v.children.length;",n.default.createElement("br",null),"                ","}",")",n.default.createElement("br",null),"            ","}",");",n.default.createElement("br",null),"        ","}",n.default.createElement("br",null),"    ","}",n.default.createElement("br",null),"    ",n.default.createElement("br",null),"    render() ","{",n.default.createElement("br",null),"        ",n.default.createElement("span",{className:"hljs-keyword"},"return")," (",n.default.createElement("br",null),"            ",n.default.createElement("span",{className:"xml"},n.default.createElement("span",{className:"hljs-tag"},"<",n.default.createElement("span",{className:"hljs-name"},"div")," ",n.default.createElement("span",{className:"hljs-attr"},"style"),"=",n.default.createElement("span",{className:"hljs-string"},"{","{","width:")," '",n.default.createElement("span",{className:"hljs-attr"},"300px"),"'","}","}",">"),n.default.createElement("br",null),"                ",n.default.createElement("span",{className:"hljs-tag"},"<",n.default.createElement("span",{className:"hljs-name"},"SearchSelect"),n.default.createElement("br",null),"                    ",n.default.createElement("span",{className:"hljs-attr"},"list"),"=",n.default.createElement("span",{className:"hljs-string"},"{","this.state.list","}"),n.default.createElement("br",null),"                    ",n.default.createElement("span",{className:"hljs-attr"},"isGroupList"),n.default.createElement("br",null),"                    ",n.default.createElement("span",{className:"hljs-attr"},"selected"),"=",n.default.createElement("span",{className:"hljs-string"},"{","this.state.selected","}"),n.default.createElement("br",null),"                    ",n.default.createElement("span",{className:"hljs-attr"},"onSearch"),"=",n.default.createElement("span",{className:"hljs-string"},"{","this.handleSearch","}"),n.default.createElement("br",null),"                    ",n.default.createElement("span",{className:"hljs-attr"},"onSelect"),"=",n.default.createElement("span",{className:"hljs-string"},"{","this.handleSelect","}"),n.default.createElement("br",null),"                    ",n.default.createElement("span",{className:"hljs-attr"},"placeholder"),"=",n.default.createElement("span",{className:"hljs-string"},'"搜索"'),n.default.createElement("br",null),"                />"),n.default.createElement("br",null),"            ",n.default.createElement("span",{className:"hljs-tag"},"</",n.default.createElement("span",{className:"hljs-name"},"div"),">"),n.default.createElement("br",null),"        );",n.default.createElement("br",null),"    ","}",n.default.createElement("br",null),"}",n.default.createElement("br",null)))),n.default.createElement("pre",null,n.default.createElement("code",{className:"language-jsx"},"<SearchSelect3/>",n.default.createElement("br",null)))),n.default.createElement("div",{className:"doc-demo-code-btn",onClick:this.handleToggleCode.bind(this,20)},n.default.createElement("i",null)))),n.default.createElement("h3",{id:"props"},n.default.createElement("a",{className:"header-anchor",href:"#props","aria-hidden":"true"},"¶")," Props"),n.default.createElement("p",null,n.default.createElement("strong",null,"注意，请尽量提供key")),n.default.createElement("ul",null,n.default.createElement("li",null,n.default.createElement("code",null,"list (array|isRequired)")," 搜索待选数据，是过滤后的数据。结构",n.default.createElement("code",null,"[{name: &quot;aaaaa&quot;}]")," ，name用来显示"),n.default.createElement("li",null,n.default.createElement("code",null,"renderListCell")," 有时候需要改变列表的样式，通过此方法自定义"),n.default.createElement("li",null,n.default.createElement("code",null,"isGroupList (bool)")," list数据是否分组数据，此时list的结构为",n.default.createElement("code",null,"[{label: &quot;一组&quot;, children: [{name: &quot;aaaaa&quot;}]}]")),n.default.createElement("li",null,n.default.createElement("code",null,"selected (any)")," 选中了什么，",n.default.createElement("code",null,"list"),"中某条数据(引用！)"),n.default.createElement("li",null,n.default.createElement("code",null,"onSelect (func|isRequired)")," 选中后触发，提供和",n.default.createElement("code",null,"selected"),"一样的数据结构，一般直接设置",n.default.createElement("code",null,"selected"),"即可"),n.default.createElement("li",null,n.default.createElement("code",null,"onSearch (func|isRequired)")," 搜索触发函数，以便过滤重新得出",n.default.createElement("code",null,"list"),"数据。"),n.default.createElement("li",null,n.default.createElement("code",null,"delay (number)")," 搜索过程中延迟多少ms才出触发",n.default.createElement("code",null,"onSearch"),"， 默认500"),n.default.createElement("li",null,n.default.createElement("code",null,"listMaxHeight (string)")," 搜索待选数据的高度，默认250px"),n.default.createElement("li",null,n.default.createElement("code",null,"multiple (bool)")," 是否多选，默认false。 如果多选，则selected是数组"),n.default.createElement("li",null,n.default.createElement("code",null,"placeholder (string)")),n.default.createElement("li",null,n.default.createElement("code",null,"isScrollToSelected (bool)")," focus后列表是否滚动到选择的位置")))}}]),l}();l.default=b}}]);
//# sourceMappingURL=41.e6bdf0d6.bundle.js.map