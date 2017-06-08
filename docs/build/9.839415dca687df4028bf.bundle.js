webpackJsonp([9],{517:function(e,t,l){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var d=function(){function e(e,t){for(var l=0;l<t.length;l++){var a=t[l];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,l,a){return l&&e(t.prototype,l),a&&e(t,a),t}}(),c=l(1),m=a(c),s=l(238),f=l(0),o=a(f),i=function(e){function t(e){n(this,t);var l=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return l.state={date:(0,o.default)().startOf("day").toDate()},l.handleChange=l.handleChange.bind(l),l}return u(t,e),d(t,[{key:"handleChange",value:function(e){console.log(e),this.setState({date:e})}},{key:"render",value:function(){return m.default.createElement("div",null,m.default.createElement("div",null,m.default.createElement(s.TimeSpan,{max:null,selected:this.state.date,onSelect:this.handleChange}),m.default.createElement(s.TimeSpan,{max:(0,o.default)().hour(20).minute(0),selected:this.state.date,onSelect:this.handleChange}),m.default.createElement(s.TimeSpan,{max:(0,o.default)().hour(20).minute(0),span:36e5,render:function(e){return(0,o.default)(e).format("HH")},selected:this.state.date,onSelect:this.handleChange})),m.default.createElement("div",null,m.default.createElement(s.TimeSpanPicker,{date:this.state.date,onChange:this.handleChange}),m.default.createElement(s.TimeSpanPicker,{disabled:!0,date:this.state.date,onChange:this.handleChange}),m.default.createElement(s.TimeSpanPicker,{date:this.state.date,onChange:this.handleChange},m.default.createElement("span",null,this.state.date?(0,o.default)(this.state.date).format("HH:mm"):"请点击选择"))))}}]),t}(m.default.Component),E=function(e){function t(e){n(this,t);var l=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return l.state={},l}return u(t,e),d(t,[{key:"handleToggleCode",value:function(e){var t={};t["showCode"+e]=!this.state["showCode"+e],this.setState(t)}},{key:"render",value:function(){return m.default.createElement("div",{className:"doc"},m.default.createElement("h2",{id:"timespan"},m.default.createElement("a",{className:"header-anchor",href:"#timespan","aria-hidden":"true"},"¶")," TimeSpan"),m.default.createElement("p",null,"时间段选择"),m.default.createElement("div",{className:"doc-demo-box "+(this.state.showCode6?"doc-demo-code-active":"")},m.default.createElement("div",{className:"doc-demo-instance"},m.default.createElement("h4",null,"Example"),m.default.createElement(i,null)),m.default.createElement("div",{className:"doc-demo-meta"},m.default.createElement("div",{className:"doc-demo-code"},m.default.createElement("pre",null,m.default.createElement("code",{className:"language-js"},m.default.createElement("span",{className:"hljs-class"},m.default.createElement("span",{className:"hljs-keyword"},"class")," ",m.default.createElement("span",{className:"hljs-title"},"TimeSpanWrap")," ",m.default.createElement("span",{className:"hljs-keyword"},"extends")," ",m.default.createElement("span",{className:"hljs-title"},"React"),".",m.default.createElement("span",{className:"hljs-title"},"Component")," "),"{",m.default.createElement("br",null),"    ",m.default.createElement("span",{className:"hljs-keyword"},"constructor"),"(props) ","{",m.default.createElement("br",null),"        ",m.default.createElement("span",{className:"hljs-keyword"},"super"),"(props);",m.default.createElement("br",null),"        ",m.default.createElement("span",{className:"hljs-keyword"},"this"),".state = ","{",m.default.createElement("br",null),"            ",m.default.createElement("span",{className:"hljs-attr"},"date"),": moment().startOf(",m.default.createElement("span",{className:"hljs-string"},"'day'"),").toDate()",m.default.createElement("br",null),"        ","}",";",m.default.createElement("br",null),"        ",m.default.createElement("span",{className:"hljs-keyword"},"this"),".handleChange = ::",m.default.createElement("span",{className:"hljs-keyword"},"this"),".handleChange;",m.default.createElement("br",null),"    ","}",m.default.createElement("br",null),"    ",m.default.createElement("br",null),"    handleChange(date) ","{",m.default.createElement("br",null),"        ",m.default.createElement("span",{className:"hljs-built_in"},"console"),".log(date);",m.default.createElement("br",null),"        ",m.default.createElement("span",{className:"hljs-keyword"},"this"),".setState(","{",m.default.createElement("br",null),"            date",m.default.createElement("br",null),"        ","}",");",m.default.createElement("br",null),"    ","}",m.default.createElement("br",null),"    ",m.default.createElement("br",null),"    render() ","{",m.default.createElement("br",null),"        ",m.default.createElement("span",{className:"hljs-keyword"},"return")," (",m.default.createElement("br",null),"            <div>",m.default.createElement("br",null),"                <div>",m.default.createElement("br",null),"                    <TimeSpan",m.default.createElement("br",null),"                        max=","{","null","}",m.default.createElement("br",null),"                        selected=","{","this.state.date","}",m.default.createElement("br",null),"                        onSelect=","{","this.handleChange","}",m.default.createElement("br",null),"                    />",m.default.createElement("br",null),"                    <TimeSpan",m.default.createElement("br",null),"                        max=","{","moment().hour(20).minute(0)","}",m.default.createElement("br",null),"                        selected=","{","this.state.date","}",m.default.createElement("br",null),"                        onSelect=","{","this.handleChange","}",m.default.createElement("br",null),"                    />",m.default.createElement("br",null),"                    <TimeSpan",m.default.createElement("br",null),"                        max=","{","moment().hour(20).minute(0)","}",m.default.createElement("br",null),"                        span=","{","60 * 60 * 1000","}",m.default.createElement("br",null),"                        render=","{","value => moment(value).format('HH')","}",m.default.createElement("br",null),"                        selected=","{","this.state.date","}",m.default.createElement("br",null),"                        onSelect=","{","this.handleChange","}",m.default.createElement("br",null),"                    />",m.default.createElement("br",null),"                </div>",m.default.createElement("br",null),"                <div>",m.default.createElement("br",null),"                    <TimeSpanPicker",m.default.createElement("br",null),"                        date=","{","this.state.date","}",m.default.createElement("br",null),"                        onChange=","{","this.handleChange","}",m.default.createElement("br",null),"                    />",m.default.createElement("br",null),"                    <TimeSpanPicker",m.default.createElement("br",null),"                        disabled=","{","true","}",m.default.createElement("br",null),"                        date=","{","this.state.date","}",m.default.createElement("br",null),"                        onChange=","{","this.handleChange","}",m.default.createElement("br",null),"                    />",m.default.createElement("br",null),"                    <TimeSpanPicker",m.default.createElement("br",null),"                        date=","{","this.state.date","}",m.default.createElement("br",null),"                        onChange=","{","this.handleChange","}",m.default.createElement("br",null),"                    >",m.default.createElement("br",null),"                        <span>",m.default.createElement("br",null),"                        ","{","this.state.date ? moment(this.state.date).format('HH:mm') : '请点击选择'","}",m.default.createElement("br",null),"                        </span>",m.default.createElement("br",null),"                    </TimeSpanPicker>",m.default.createElement("br",null),"                </div>",m.default.createElement("br",null),"            </div>",m.default.createElement("br",null),"        );",m.default.createElement("br",null),"    ","}",m.default.createElement("br",null),"}",m.default.createElement("br",null))),m.default.createElement("pre",null,m.default.createElement("code",{className:"language-jsx"},"<TimeSpanWrap/>",m.default.createElement("br",null)))),m.default.createElement("div",{className:"doc-demo-code-btn",onClick:this.handleToggleCode.bind(this,6)},m.default.createElement("i",null)))),m.default.createElement("h3",{id:"props"},m.default.createElement("a",{className:"header-anchor",href:"#props","aria-hidden":"true"},"¶")," Props"),m.default.createElement("ul",null,m.default.createElement("li",null,m.default.createElement("code",null,"min (object)")," Date对象 默认一天的开始"),m.default.createElement("li",null,m.default.createElement("code",null,"max (object)")," Date对象 默认一天的结束"),m.default.createElement("li",null,m.default.createElement("code",null,"span (number)")," 时间跨度，默认是30分钟，单位ms"),m.default.createElement("li",null,m.default.createElement("code",null,"selected (object)")," Date对象，选中的时间"),m.default.createElement("li",null,m.default.createElement("code",null,"render (func)")," 渲染出来的时间文本，默认是HH:mm"),m.default.createElement("li",null,m.default.createElement("code",null,"onSelect (func)")," 选择回调，参数是Date对象")),m.default.createElement("h3",{id:"timespanpicker"},m.default.createElement("a",{className:"header-anchor",href:"#timespanpicker","aria-hidden":"true"},"¶")," TimeSpanPicker"),m.default.createElement("ul",null,m.default.createElement("li",null,m.default.createElement("code",null,"min (object)")," 同"),m.default.createElement("li",null,m.default.createElement("code",null,"max (object)")," 同"),m.default.createElement("li",null,m.default.createElement("code",null,"span (number)")," 同"),m.default.createElement("li",null,m.default.createElement("code",null,"date (object)")," 同 TimeSpan selected"),m.default.createElement("li",null,m.default.createElement("code",null,"render (func)")," 同"),m.default.createElement("li",null,m.default.createElement("code",null,"onChange (func)")," 同 TimeSpan onSelect"),m.default.createElement("li",null,m.default.createElement("code",null,"inputClassName (string)")," 自定义input的className"),m.default.createElement("li",null,m.default.createElement("code",null,"disabled (bool)")," 不可编辑")))}}]),t}(m.default.Component);t.default=E}});