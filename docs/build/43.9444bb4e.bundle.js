webpackJsonp([43],{570:function(e,t,l){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function d(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var l=0;l<t.length;l++){var a=t[l];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,l,a){return l&&e(t.prototype,l),a&&e(t,a),t}}(),c=l(1),m=a(c),s=l(21),f=l(0),i=a(f),o=function(e){function t(e){n(this,t);var l=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return l.state={date:null},l.handleChange=l.handleChange.bind(l),l}return d(t,e),u(t,[{key:"handleChange",value:function(e){console.log(e),this.setState({date:e})}},{key:"render",value:function(){return m.default.createElement("div",null,m.default.createElement(s.Flex,null,m.default.createElement("div",null,m.default.createElement("div",null,"inline-block"),m.default.createElement(s.DatePicker,{date:this.state.date,placeholder:"请选择日期",onChange:this.handleChange})),m.default.createElement("div",null,m.default.createElement("div",null,"inputValueRender"),m.default.createElement(s.DatePicker,{date:this.state.date,placeholder:"请选择日期",onChange:this.handleChange,inputValueRender:function(e){return e.getMonth()+1+"月-"+e.getDate()+"日"}})),m.default.createElement("div",null,m.default.createElement("div",null,"disabled"),m.default.createElement(s.DatePicker,{date:this.state.date,placeholder:"请选择日期",disabled:!0,onChange:this.handleChange})),m.default.createElement("div",null,m.default.createElement("div",null,"disabled date"),m.default.createElement(s.DatePicker,{date:this.state.date,placeholder:"选今天之后的",onChange:this.handleChange,min:new Date})),m.default.createElement("div",null,m.default.createElement("div",null,"disabled date"),m.default.createElement(s.DatePicker,{date:this.state.date,placeholder:"非周五",onChange:this.handleChange,disabledDate:function(e){return 5===(0,i.default)(e).get("day")}})),m.default.createElement("div",null,m.default.createElement("div",null,"clear date"),m.default.createElement(s.DatePicker,{date:this.state.date,placeholder:"请选择日期",onChange:this.handleChange,canClear:!0}))),m.default.createElement("div",{className:"gm-padding10"}),m.default.createElement(s.DatePicker,{date:this.state.date,onChange:this.handleChange},m.default.createElement("span",null,this.state.date?(0,i.default)(this.state.date).format("YYYY-MM-DD"):"请点击选择")))}}]),t}(m.default.Component),E=function(e){function t(e){n(this,t);var l=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return l.state={},l}return d(t,e),u(t,[{key:"handleToggleCode",value:function(e){var t={};t["showCode"+e]=!this.state["showCode"+e],this.setState(t)}},{key:"render",value:function(){return m.default.createElement("div",{className:"doc"},m.default.createElement("h2",{id:"datepicker"},m.default.createElement("a",{className:"header-anchor",href:"#datepicker","aria-hidden":"true"},"¶")," DatePicker"),m.default.createElement("p",null,"只能选择，不能编辑。日期段选择版本",m.default.createElement("a",{href:"#/doc/DateRangePicker"},"DateRangePicker")),m.default.createElement("div",{className:"doc-demo-box "+(this.state.showCode6?"doc-demo-code-active":"")},m.default.createElement("div",{className:"doc-demo-instance"},m.default.createElement("h4",null,"Example"),m.default.createElement(o,null)),m.default.createElement("div",{className:"doc-demo-meta"},m.default.createElement("div",{className:"doc-demo-code"},m.default.createElement("pre",null,m.default.createElement("code",{className:"language-js"},m.default.createElement("span",{className:"hljs-class"},m.default.createElement("span",{className:"hljs-keyword"},"class")," ",m.default.createElement("span",{className:"hljs-title"},"DatePickerWrap")," ",m.default.createElement("span",{className:"hljs-keyword"},"extends")," ",m.default.createElement("span",{className:"hljs-title"},"React"),".",m.default.createElement("span",{className:"hljs-title"},"Component")," "),"{",m.default.createElement("br",null),"    ",m.default.createElement("span",{className:"hljs-keyword"},"constructor"),"(props) ","{",m.default.createElement("br",null),"        ",m.default.createElement("span",{className:"hljs-keyword"},"super"),"(props);",m.default.createElement("br",null),"        ",m.default.createElement("span",{className:"hljs-keyword"},"this"),".state = ","{",m.default.createElement("br",null),"            ",m.default.createElement("span",{className:"hljs-attr"},"date"),": ",m.default.createElement("span",{className:"hljs-literal"},"null"),m.default.createElement("br",null),"        ","}",";",m.default.createElement("br",null),"        ",m.default.createElement("span",{className:"hljs-keyword"},"this"),".handleChange = ::",m.default.createElement("span",{className:"hljs-keyword"},"this"),".handleChange;",m.default.createElement("br",null),"    ","}",m.default.createElement("br",null),"handleChange(date) ","{",m.default.createElement("br",null),"        ",m.default.createElement("span",{className:"hljs-built_in"},"console"),".log(date);",m.default.createElement("br",null),"        ",m.default.createElement("span",{className:"hljs-keyword"},"this"),".setState(","{",m.default.createElement("br",null),"            ",m.default.createElement("span",{className:"hljs-attr"},"date"),": date",m.default.createElement("br",null),"        ","}",");",m.default.createElement("br",null),"    ","}",m.default.createElement("br",null),"    ",m.default.createElement("br",null),"    render() ","{",m.default.createElement("br",null),"        ",m.default.createElement("span",{className:"hljs-keyword"},"return")," (",m.default.createElement("br",null),"            <div>",m.default.createElement("br",null),"                <Flex>",m.default.createElement("br",null),"                    <div>",m.default.createElement("br",null),"                        <div>inline-block</div>",m.default.createElement("br",null),"                        <DatePicker",m.default.createElement("br",null),"                            date=","{","this.state.date","}",m.default.createElement("br",null),'                            placeholder="请选择日期"',m.default.createElement("br",null),"                            onChange=","{","this.handleChange","}",m.default.createElement("br",null),"                        />",m.default.createElement("br",null),"                    </div>",m.default.createElement("br",null),"                    <div>",m.default.createElement("br",null),"                        <div>inputValueRender</div>",m.default.createElement("br",null),"                        <DatePicker",m.default.createElement("br",null),"                            date=","{","this.state.date","}",m.default.createElement("br",null),'                            placeholder="请选择日期"',m.default.createElement("br",null),"                            onChange=","{","this.handleChange","}",m.default.createElement("br",null),"                            inputValueRender=","{","begin => `$","{","begin.getMonth() + 1","}","月-$","{","begin.getDate()","}","日`","}",m.default.createElement("br",null),"                        />",m.default.createElement("br",null),"                    </div>",m.default.createElement("br",null),"                    <div>",m.default.createElement("br",null),"                        <div>disabled</div>",m.default.createElement("br",null),"                        <DatePicker",m.default.createElement("br",null),"                            date=","{","this.state.date","}",m.default.createElement("br",null),'                            placeholder="请选择日期"',m.default.createElement("br",null),"                            disabled=","{","true","}",m.default.createElement("br",null),"                            onChange=","{","this.handleChange","}",m.default.createElement("br",null),"                        />",m.default.createElement("br",null),"                    </div>",m.default.createElement("br",null),"                    <div>",m.default.createElement("br",null),"                        <div>disabled date</div>",m.default.createElement("br",null),"                        <DatePicker",m.default.createElement("br",null),"                            date=","{","this.state.date","}",m.default.createElement("br",null),'                            placeholder="选今天之后的"',m.default.createElement("br",null),"                            onChange=","{","this.handleChange","}",m.default.createElement("br",null),"                            min=","{","new Date()","}",m.default.createElement("br",null),"                        />",m.default.createElement("br",null),"                    </div>",m.default.createElement("br",null),"                    <div>",m.default.createElement("br",null),"                        <div>disabled date</div>",m.default.createElement("br",null),"                        <DatePicker",m.default.createElement("br",null),"                            date=","{","this.state.date","}",m.default.createElement("br",null),'                            placeholder="非周五"',m.default.createElement("br",null),"                            onChange=","{","this.handleChange","}",m.default.createElement("br",null),"                            disabledDate=","{","m => ","{",m.default.createElement("br",null),"                                return moment(m).get('day') === 5;",m.default.createElement("br",null),"                            ","}","}",m.default.createElement("br",null),"                        />",m.default.createElement("br",null),"                    </div>",m.default.createElement("br",null),"                    <div>",m.default.createElement("br",null),"                        <div>clear date</div>",m.default.createElement("br",null),"                        <DatePicker",m.default.createElement("br",null),"                            date=","{","this.state.date","}",m.default.createElement("br",null),'                            placeholder="请选择日期"',m.default.createElement("br",null),"                            onChange=","{","this.handleChange","}",m.default.createElement("br",null),"                            canClear=","{","true","}",m.default.createElement("br",null),"                        />",m.default.createElement("br",null),"                    </div>",m.default.createElement("br",null),"                </Flex>",m.default.createElement("br",null),"                ",m.default.createElement("br",null),'                <div className="gm-padding10"/>',m.default.createElement("br",null),"                ",m.default.createElement("br",null),"                <DatePicker",m.default.createElement("br",null),"                    date=","{","this.state.date","}",m.default.createElement("br",null),"                    onChange=","{","this.handleChange","}",m.default.createElement("br",null),"                >",m.default.createElement("br",null),"                    <span>",m.default.createElement("br",null),"                        ","{","this.state.date ? moment(this.state.date).format('YYYY-MM-DD') : '请点击选择'","}",m.default.createElement("br",null),"                    </span>",m.default.createElement("br",null),"                </DatePicker>",m.default.createElement("br",null),"            </div>",m.default.createElement("br",null),"        );",m.default.createElement("br",null),"    ","}",m.default.createElement("br",null),"}",m.default.createElement("br",null))),m.default.createElement("pre",null,m.default.createElement("code",{className:"language-jsx"},"<DatePickerWrap/>",m.default.createElement("br",null)))),m.default.createElement("div",{className:"doc-demo-code-btn",onClick:this.handleToggleCode.bind(this,6)},m.default.createElement("i",null)))),m.default.createElement("h3",{id:"props"},m.default.createElement("a",{className:"header-anchor",href:"#props","aria-hidden":"true"},"¶")," Props"),m.default.createElement("ul",null,m.default.createElement("li",null,m.default.createElement("code",null,"date (object)")," Date对象"),m.default.createElement("li",null,m.default.createElement("code",null,"onChange (func|isRequired)")," 选择后回调，参数是Date对象（若canClear为true，则清除date时会传null）"),m.default.createElement("li",null,m.default.createElement("code",null,"inputClassName (string)")," 自定义input的样子"),m.default.createElement("li",null,m.default.createElement("code",null,"placeholder (string)")),m.default.createElement("li",null,m.default.createElement("code",null,"disabled (bool)")," 是否不可用"),m.default.createElement("li",null,m.default.createElement("code",null,"className (string)")),m.default.createElement("li",null,m.default.createElement("code",null,"disabledDate (func)")," 提供date参数，返回true or false"),m.default.createElement("li",null,m.default.createElement("code",null,"min (object)")," 一个Date对象，最小日期"),m.default.createElement("li",null,m.default.createElement("code",null,"max (object)")," 一个Date对象，最大日期"),m.default.createElement("li",null,m.default.createElement("code",null,"canClear (bool)")," 是否可清除所选时间")))}}]),t}(m.default.Component);t.default=E}});