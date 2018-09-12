(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{287:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var l=0;l<t.length;l++){var a=t[l];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,l,a){return l&&e(t.prototype,l),a&&e(t,a),t}}(),n=d(l(0)),r=l(7),u=d(l(17));function d(e){return e&&e.__esModule?e:{default:e}}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function m(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var f=function(e){function t(e){c(this,t);var l=m(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return l.state={date:(0,u.default)().startOf("day").toDate()},l.handleChange=l.handleChange.bind(l),l}return s(t,n.default.Component),a(t,[{key:"handleChange",value:function(e){console.log(e),this.setState({date:e})}},{key:"render",value:function(){return n.default.createElement("div",{className:"doc-time-span-container"},n.default.createElement("div",null,n.default.createElement("h5",null,"不设置时间最大值，禁用某时间段点击"),n.default.createElement(r.TimeSpan,{max:null,disabledSpan:function(e){return e.isSameOrAfter((0,u.default)("11:00","HH:mm"))&&e.isSameOrBefore((0,u.default)("18:30","HH:mm"))},selected:this.state.date,onSelect:this.handleChange})),n.default.createElement("div",null,n.default.createElement("h5",null,"设置最大时间值为 20:00"),n.default.createElement(r.TimeSpan,{max:(0,u.default)().hour(20).minute(0),selected:this.state.date,onSelect:this.handleChange})),n.default.createElement("div",null,n.default.createElement("h5",null,"设置时间跨度为 1 小时（默认 30 分钟）"),n.default.createElement(r.TimeSpan,{max:(0,u.default)().hour(20).minute(0),span:36e5,render:function(e){return(0,u.default)(e).format("HH")},selected:this.state.date,onSelect:this.handleChange})),n.default.createElement("div",null,n.default.createElement("div",null,n.default.createElement("h5",null,"时间选择"),n.default.createElement(r.TimeSpanPicker,{date:this.state.date,onChange:this.handleChange,disabledSpan:function(e){return e.isSameOrAfter((0,u.default)("11:00","HH:mm"))&&e.isSameOrBefore((0,u.default)("18:30","HH:mm"))}})),n.default.createElement("div",null,n.default.createElement("h5",null,"禁用"),n.default.createElement(r.TimeSpanPicker,{disabled:!0,date:this.state.date,onChange:this.handleChange})),n.default.createElement("div",null,n.default.createElement("h5",null,"时间选择（不显示输入框）"),n.default.createElement(r.TimeSpanPicker,{date:this.state.date,onChange:this.handleChange},n.default.createElement("span",null,this.state.date?(0,u.default)(this.state.date).format("HH:mm"):"请点击选择")))))}}]),t}(),i=function(e){function t(e){c(this,t);var l=m(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return l.state={},l}return s(t,n.default.Component),a(t,[{key:"handleToggleCode",value:function(e){var t={};t["showCode"+e]=!this.state["showCode"+e],this.setState(t)}},{key:"render",value:function(){return n.default.createElement("div",{className:"doc"},n.default.createElement("h2",{id:"timespan"},n.default.createElement("a",{className:"header-anchor",href:"#timespan","aria-hidden":"true"},"¶")," TimeSpan"),n.default.createElement("p",null,"时间段选择"),n.default.createElement("div",{className:"doc-demo-box "+(this.state.showCode6?"doc-demo-code-active":"")},n.default.createElement("div",{className:"doc-demo-instance"},n.default.createElement("h4",null,"Example"),n.default.createElement(f,null)),n.default.createElement("div",{className:"doc-demo-meta"},n.default.createElement("div",{className:"doc-demo-code"},n.default.createElement("pre",null,n.default.createElement("code",{className:"language-js"},n.default.createElement("span",{className:"hljs-class"},n.default.createElement("span",{className:"hljs-keyword"},"class")," ",n.default.createElement("span",{className:"hljs-title"},"TimeSpanWrap")," ",n.default.createElement("span",{className:"hljs-keyword"},"extends")," ",n.default.createElement("span",{className:"hljs-title"},"React"),".",n.default.createElement("span",{className:"hljs-title"},"Component")," "),"{",n.default.createElement("br",null),"    ",n.default.createElement("span",{className:"hljs-keyword"},"constructor"),"(props) ","{",n.default.createElement("br",null),"        ",n.default.createElement("span",{className:"hljs-keyword"},"super"),"(props);",n.default.createElement("br",null),"        ",n.default.createElement("span",{className:"hljs-keyword"},"this"),".state = ","{",n.default.createElement("br",null),"            ",n.default.createElement("span",{className:"hljs-attr"},"date"),": moment().startOf(",n.default.createElement("span",{className:"hljs-string"},"'day'"),").toDate()",n.default.createElement("br",null),"        ","}",";",n.default.createElement("br",null),"        ",n.default.createElement("span",{className:"hljs-keyword"},"this"),".handleChange = ::",n.default.createElement("span",{className:"hljs-keyword"},"this"),".handleChange;",n.default.createElement("br",null),"    ","}",n.default.createElement("br",null),"    ",n.default.createElement("br",null),"    handleChange(date) ","{",n.default.createElement("br",null),"        ",n.default.createElement("span",{className:"hljs-built_in"},"console"),".log(date);",n.default.createElement("br",null),"        ",n.default.createElement("span",{className:"hljs-keyword"},"this"),".setState(","{",n.default.createElement("br",null),"            date",n.default.createElement("br",null),"        ","}",");",n.default.createElement("br",null),"    ","}",n.default.createElement("br",null),"    ",n.default.createElement("br",null),"    render() ","{",n.default.createElement("br",null),"        ",n.default.createElement("span",{className:"hljs-keyword"},"return")," (                                        ",n.default.createElement("br",null),'            <div className="doc-time-span-container">',n.default.createElement("br",null),"                <div>",n.default.createElement("br",null),"                    <h5>不设置时间最大值，禁用某时间段点击</h5>",n.default.createElement("br",null),"                    <TimeSpan",n.default.createElement("br",null),"                        max=","{","null","}",n.default.createElement("br",null),"                        disabledSpan=","{","spanMoment => spanMoment.isSameOrAfter(moment('11:00', 'HH:mm')) && spanMoment.isSameOrBefore(moment('18:30', 'HH:mm'))","}",n.default.createElement("br",null),"                        selected=","{","this.state.date","}",n.default.createElement("br",null),"                        onSelect=","{","this.handleChange","}",n.default.createElement("br",null),"                    />",n.default.createElement("br",null),"                </div>",n.default.createElement("br",null),"                <div>",n.default.createElement("br",null),"                    <h5>设置最大时间值为 20:00</h5>",n.default.createElement("br",null),"                    <TimeSpan",n.default.createElement("br",null),"                        max=","{","moment().hour(20).minute(0)","}",n.default.createElement("br",null),"                        selected=","{","this.state.date","}",n.default.createElement("br",null),"                        onSelect=","{","this.handleChange","}",n.default.createElement("br",null),"                    />",n.default.createElement("br",null),"                </div>",n.default.createElement("br",null),"                <div>",n.default.createElement("br",null),"                    <h5>设置时间跨度为 1 小时（默认 30 分钟）</h5>",n.default.createElement("br",null),"                    <TimeSpan",n.default.createElement("br",null),"                        max=","{","moment().hour(20).minute(0)","}",n.default.createElement("br",null),"                        span=","{","60 * 60 * 1000","}",n.default.createElement("br",null),"                        render=","{","value => moment(value).format('HH')","}",n.default.createElement("br",null),"                        selected=","{","this.state.date","}",n.default.createElement("br",null),"                        onSelect=","{","this.handleChange","}",n.default.createElement("br",null),"                    />",n.default.createElement("br",null),"                </div>",n.default.createElement("br",null),"                <div>",n.default.createElement("br",null),"                    <div>",n.default.createElement("br",null),"                        <h5>时间选择</h5>",n.default.createElement("br",null),"                        <TimeSpanPicker",n.default.createElement("br",null),"                            date=","{","this.state.date","}",n.default.createElement("br",null),"                            onChange=","{","this.handleChange","}",n.default.createElement("br",null),"                            disabledSpan=","{","spanMoment => spanMoment.isSameOrAfter(moment('11:00', 'HH:mm')) && spanMoment.isSameOrBefore(moment('18:30', 'HH:mm'))","}",n.default.createElement("br",null),"                        />",n.default.createElement("br",null),"                    </div>",n.default.createElement("br",null),"                    <div>",n.default.createElement("br",null),"                        <h5>禁用</h5> ",n.default.createElement("br",null),"                        <TimeSpanPicker",n.default.createElement("br",null),"                           disabled=","{","true","}",n.default.createElement("br",null),"                           date=","{","this.state.date","}",n.default.createElement("br",null),"                           onChange=","{","this.handleChange","}",n.default.createElement("br",null),"                        />",n.default.createElement("br",null),"                    </div>",n.default.createElement("br",null),"                    <div>",n.default.createElement("br",null),"                        <h5>时间选择（不显示输入框）</h5> ",n.default.createElement("br",null),"                        <TimeSpanPicker",n.default.createElement("br",null),"                            date=","{","this.state.date","}",n.default.createElement("br",null),"                            onChange=","{","this.handleChange","}",n.default.createElement("br",null),"                        >",n.default.createElement("br",null),"                            <span>",n.default.createElement("br",null),"                            ","{","this.state.date ? moment(this.state.date).format('HH:mm') : '请点击选择'","}",n.default.createElement("br",null),"                            </span>",n.default.createElement("br",null),"                        </TimeSpanPicker>",n.default.createElement("br",null),"                    </div>",n.default.createElement("br",null),"                </div>",n.default.createElement("br",null),"            </div>",n.default.createElement("br",null),"        );",n.default.createElement("br",null),"    ","}",n.default.createElement("br",null),"}",n.default.createElement("br",null))),n.default.createElement("pre",null,n.default.createElement("code",{className:"language-jsx"},"<TimeSpanWrap/>",n.default.createElement("br",null)))),n.default.createElement("div",{className:"doc-demo-code-btn",onClick:this.handleToggleCode.bind(this,6)},n.default.createElement("i",null)))),n.default.createElement("h3",{id:"props"},n.default.createElement("a",{className:"header-anchor",href:"#props","aria-hidden":"true"},"¶")," Props"),n.default.createElement("ul",null,n.default.createElement("li",null,n.default.createElement("code",null,"min (object)")," Date对象 默认一天的开始"),n.default.createElement("li",null,n.default.createElement("code",null,"max (object)")," Date对象 默认一天的结束"),n.default.createElement("li",null,n.default.createElement("code",null,"span (number)")," 时间跨度，默认是30分钟，单位ms"),n.default.createElement("li",null,n.default.createElement("code",null,"selected (object)")," Date对象，选中的时间"),n.default.createElement("li",null,n.default.createElement("code",null,"render (func)")," 渲染出来的时间文本，默认是HH:mm"),n.default.createElement("li",null,n.default.createElement("code",null,"onSelect (func)")," 选择回调，参数是Date对象")),n.default.createElement("h3",{id:"timespanpicker"},n.default.createElement("a",{className:"header-anchor",href:"#timespanpicker","aria-hidden":"true"},"¶")," TimeSpanPicker"),n.default.createElement("ul",null,n.default.createElement("li",null,n.default.createElement("code",null,"min (object)")," 同"),n.default.createElement("li",null,n.default.createElement("code",null,"max (object)")," 同"),n.default.createElement("li",null,n.default.createElement("code",null,"disabledSpan (func)")," 同"),n.default.createElement("li",null,n.default.createElement("code",null,"span (number)")," 同"),n.default.createElement("li",null,n.default.createElement("code",null,"date (object)")," 同 TimeSpan selected"),n.default.createElement("li",null,n.default.createElement("code",null,"render (func)")," 同"),n.default.createElement("li",null,n.default.createElement("code",null,"onChange (func)")," 同 TimeSpan onSelect"),n.default.createElement("li",null,n.default.createElement("code",null,"inputClassName (string)")," 自定义input的className"),n.default.createElement("li",null,n.default.createElement("code",null,"disabled (bool)")," 不可编辑")))}}]),t}();t.default=i}}]);
//# sourceMappingURL=51.8b486c3c.bundle.js.map