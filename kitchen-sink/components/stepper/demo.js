webpackJsonp([37,87],{312:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=void 0;var e=s(4),p=t(e),o=s(6),u=t(o),c=s(5),l=t(c),i=s(8),r=t(i),d=s(7),k=t(d),f=s(1),h=t(f),m=s(3),g=t(m),v=s(13),b=t(v),y=s(386),T=t(y),C=function(n){function a(){return(0,l["default"])(this,a),(0,r["default"])(this,n.apply(this,arguments))}return(0,k["default"])(a,n),a.prototype.render=function(){var n,a=this.props,s=a.prefixCls,t=a.className,e=a.showNumber,o=(0,g["default"])((n={},(0,u["default"])(n,t,!!t),(0,u["default"])(n,"showNumber",!!e),n)),c=(0,b["default"])({},this.props);return["className","prefixCls","showNumber"].forEach(function(n){c.hasOwnProperty(n)&&delete c[n]}),h["default"].createElement(T["default"],(0,p["default"])({ref:"inputNumber",prefixCls:s,className:o},c))},a}(h["default"].Component);a["default"]=C,C.defaultProps={prefixCls:"am-stepper",step:1,readOnly:!1,showNumber:!1},n.exports=a["default"]},313:function(n,a,s){"use strict";s(12),s(372)},372:function(n,a){},385:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(a,"__esModule",{value:!0});var e=s(6),p=t(e),o=s(4),u=t(o),c=s(5),l=t(c),i=s(8),r=t(i),d=s(7),k=t(d),f=s(1),h=t(f),m=s(3),g=t(m),v=s(388),b=t(v),y=function(n){function a(){return(0,l["default"])(this,a),(0,r["default"])(this,n.apply(this,arguments))}return(0,k["default"])(a,n),a.prototype.render=function(){var n,a=(0,u["default"])({},this.props),s=a.prefixCls,t=(0,g["default"])((n={},(0,p["default"])(n,""+a.className,!0),(0,p["default"])(n,s+"-handler-active",!a.disabled&&a.touchFeedback),n));return["prefixCls","touchFeedback"].forEach(function(n){a.hasOwnProperty(n)&&delete a[n]}),h["default"].createElement("span",(0,u["default"])({},a,{className:t}),a.children)},a}(f.Component);y.defaultProps={prefixCls:"am-stepper"},a["default"]=(0,b["default"])(y,"InputHandler"),n.exports=a["default"]},386:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}function e(){}function p(n){n.preventDefault()}Object.defineProperty(a,"__esModule",{value:!0});var o=s(6),u=t(o),c=s(4),l=t(c),i=s(1),r=t(i),d=s(3),k=t(d),f=s(387),h=t(f),m=s(385),g=t(m),v=r["default"].createClass({displayName:"InputNumber",propTypes:{onChange:i.PropTypes.func,onKeyDown:i.PropTypes.func,prefixCls:i.PropTypes.string,disabled:i.PropTypes.bool,onFocus:i.PropTypes.func,onBlur:i.PropTypes.func,readOnly:i.PropTypes.bool,max:i.PropTypes.number,min:i.PropTypes.number,step:i.PropTypes.oneOfType([i.PropTypes.number,i.PropTypes.string])},mixins:[h["default"]],getDefaultProps:function(){return{prefixCls:"rc-input-number"}},componentDidMount:function(){this.componentDidUpdate()},componentDidUpdate:function(){this.state.focused&&document.activeElement!==this.refs.input&&this.refs.input.focus()},onKeyDown:function(n){var a;38===n.keyCode?this.up(n):40===n.keyCode&&this.down(n);for(var s=arguments.length,t=Array(s>1?s-1:0),e=1;e<s;e++)t[e-1]=arguments[e];(a=this.props).onKeyDown.apply(a,[n].concat(t))},getValueFromEvent:function(n){return n.target.value},focus:function(){this.refs.input.focus()},render:function(){var n,a=(0,l["default"])({},this.props),s=a.prefixCls,t=a.disabled,o=a.readOnly,c=(0,k["default"])((n={},(0,u["default"])(n,s,!0),(0,u["default"])(n,a.className,!!a.className),(0,u["default"])(n,s+"-disabled",t),(0,u["default"])(n,s+"-focused",this.state.focused),n)),i="",d="",f=this.state.value;if(isNaN(f))i=s+"-handler-up-disabled",d=s+"-handler-down-disabled";else{var h=Number(f);h>=a.max&&(i=s+"-handler-up-disabled"),h<=a.min&&(d=s+"-handler-down-disabled")}var m=!a.readOnly&&!a.disabled,v=void 0;return v=this.state.focused?this.state.inputValue:this.state.value,void 0===v&&(v=""),delete a.defaultValue,delete a.prefixCls,r["default"].createElement("div",{className:c,style:a.style},r["default"].createElement("div",{className:s+"-handler-wrap"},r["default"].createElement(g["default"],{ref:"up",disabled:!!i||t||o,prefixCls:s,unselectable:"unselectable",onTouchStart:m&&!i?this.up:e,onTouchEnd:this.stop,onMouseDown:m&&!i?this.up:e,onMouseUp:this.stop,onMouseLeave:this.stop,className:s+"-handler "+s+"-handler-up "+i},r["default"].createElement("span",{unselectable:"unselectable",className:s+"-handler-up-inner",onClick:p})),r["default"].createElement(g["default"],{ref:"down",disabled:!!d||t||o,prefixCls:s,unselectable:"unselectable",onTouchStart:m&&!d?this.down:e,onTouchEnd:this.stop,onMouseDown:m&&!d?this.down:e,onMouseUp:this.stop,onMouseLeave:this.stop,className:s+"-handler "+s+"-handler-down "+d},r["default"].createElement("span",{unselectable:"unselectable",className:s+"-handler-down-inner",onClick:p}))),r["default"].createElement("div",{className:s+"-input-wrap"},r["default"].createElement("input",(0,l["default"])({},a,{style:null,className:s+"-input",autoComplete:"off",onFocus:this.onFocus,onBlur:this.onBlur,onKeyDown:this.onKeyDown,onKeyUp:this.stop,autoFocus:a.autoFocus,readOnly:a.readOnly,disabled:a.disabled,max:a.max,min:a.min,name:a.name,onChange:this.onChange,ref:"input",value:v}))))}});a["default"]=v,n.exports=a["default"]},387:function(n,a){"use strict";function s(){}Object.defineProperty(a,"__esModule",{value:!0});var t=50,e=600;a["default"]={getDefaultProps:function(){return{max:1/0,min:-(1/0),step:1,style:{},defaultValue:null,onChange:s,onKeyDown:s,onFocus:s,onBlur:s}},getInitialState:function(){var n=void 0,a=this.props;return n="value"in a?a.value:a.defaultValue,n=this.toPrecisionAsStep(n),{inputValue:n,value:n,focused:a.autoFocus}},componentWillReceiveProps:function(n){if("value"in n){var a=this.toPrecisionAsStep(n.value);this.setState({inputValue:a,value:a})}},componentWillUnmount:function(){this.stop()},onChange:function(n){this.setInputValue(this.getValueFromEvent(n).trim())},onFocus:function(){var n;this.setState({focused:!0}),(n=this.props).onFocus.apply(n,arguments)},onBlur:function(n){var a;this.setState({focused:!1});var s=this.getCurrentValidValue(this.getValueFromEvent(n).trim());this.setValue(s);for(var t=arguments.length,e=Array(t>1?t-1:0),p=1;p<t;p++)e[p-1]=arguments[p];(a=this.props).onBlur.apply(a,[n].concat(e))},getCurrentValidValue:function(n){var a=n,s=this.props;return""===a?a="":isNaN(a)?a=this.state.value:(a=Number(a),a<s.min&&(a=s.min),a>s.max&&(a=s.max)),this.toPrecisionAsStep(a)},setValue:function(n){"value"in this.props||this.setState({value:n,inputValue:n});var a=isNaN(n)||""===n?void 0:n;a!==this.state.value?this.props.onChange(a):this.setState({inputValue:this.state.value})},setInputValue:function(n){this.setState({inputValue:n})},getPrecision:function(){var n=this.props,a=n.step.toString();if(a.indexOf("e-")>=0)return parseInt(a.slice(a.indexOf("e-")+1),10);var s=0;return a.indexOf(".")>=0&&(s=a.length-a.indexOf(".")-1),s},getPrecisionFactor:function(){var n=this.getPrecision();return Math.pow(10,n)},toPrecisionAsStep:function(n){if(isNaN(n)||""===n)return n;var a=this.getPrecision();return Number(Number(n).toFixed(Math.abs(a)))},upStep:function(n){var a=this.props,s=a.step,t=a.min,e=this.getPrecisionFactor(),p=void 0;return p="number"==typeof n?(e*n+e*s)/e:t===-(1/0)?s:t,this.toPrecisionAsStep(p)},downStep:function(n){var a=this.props,s=a.step,t=a.min,e=this.getPrecisionFactor(),p=void 0;return p="number"==typeof n?(e*n-e*s)/e:t===-(1/0)?-s:t,this.toPrecisionAsStep(p)},step:function(n,a){a&&a.preventDefault();var s=this.props;if(!s.disabled){var t=this.getCurrentValidValue(this.state.value);if(this.setState({value:t}),!isNaN(t)){var e=this[n+"Step"](t);e>s.max||e<s.min||(this.setValue(e),this.setState({focused:!0}))}}},stop:function(){this.autoStepTimer&&clearTimeout(this.autoStepTimer)},down:function(n,a){var s=this;n.persist&&n.persist(),this.stop(),this.step("down",n),this.autoStepTimer=setTimeout(function(){s.down(n,!0)},a?t:e)},up:function(n,a){var s=this;n.persist&&n.persist(),this.stop(),this.step("up",n),this.autoStepTimer=setTimeout(function(){s.up(n,!0)},a?t:e)}},n.exports=a["default"]},388:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}function e(n){var a=arguments.length<=1||void 0===arguments[1]?"":arguments[1],s=c["default"].createClass({displayName:"TouchableFeedbackComponent",propTypes:{onTouchStart:u.PropTypes.func,onTouchEnd:u.PropTypes.func,onTouchCancel:u.PropTypes.func},statics:{myName:a||"TouchableFeedbackComponent"},getInitialState:function(){return{touchFeedback:!1}},onTouchStart:function(n){this.props.onTouchStart&&this.props.onTouchStart(n),this.setTouchFeedbackState(!0)},onTouchEnd:function(n){this.props.onTouchEnd&&this.props.onTouchEnd(n),this.setTouchFeedbackState(!1)},onTouchCancel:function(n){this.props.onTouchCancel&&this.props.onTouchCancel(n),this.setTouchFeedbackState(!1)},onMouseDown:function(n){this.props.onTouchStart&&this.props.onTouchStart(n),this.setTouchFeedbackState(!0)},onMouseUp:function(n){this.props.onTouchEnd&&this.props.onTouchEnd(n),this.setTouchFeedbackState(!1)},setTouchFeedbackState:function(n){this.setState({touchFeedback:n})},render:function(){var a=l?{onTouchStart:this.onTouchStart,onTouchEnd:this.onTouchEnd,onTouchCancel:this.onTouchCancel}:{onMouseDown:this.onMouseDown,onMouseUp:this.state.touchFeedback?this.onMouseUp:void 0,onMouseLeave:this.state.touchFeedback?this.onMouseUp:void 0};return c["default"].createElement(n,(0,o["default"])({},this.props,{touchFeedback:this.state.touchFeedback},a))}});return s}Object.defineProperty(a,"__esModule",{value:!0});var p=s(4),o=t(p);a["default"]=e;var u=s(1),c=t(u),l="undefined"!=typeof window&&"ontouchstart"in window;n.exports=a["default"]},704:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var e=(s(14),s(15)),p=t(e),o=(s(313),s(312)),u=t(o),c=s(1),l=t(c),i=s(2);t(i);n.exports={content:[["p","\u6570\u5b57\u8f93\u5165\u6846\u3002"]],meta:{order:0,title:"\u57fa\u672c",filename:"components/stepper/demo/form.md",id:"components-stepper-demo-form"},highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> List<span class="token punctuation" >,</span> Stepper <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd-mobile\'</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >function</span> <span class="token function" >onChange</span><span class="token punctuation" >(</span>value<span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n  console<span class="token punctuation" >.</span><span class="token function" >log</span><span class="token punctuation" >(</span><span class="token string" >\'changed\'</span><span class="token punctuation" >,</span> value<span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n<span class="token punctuation" >}</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>List</span> <span class="token attr-name" >renderHeader</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token operator" >=</span><span class="token operator" >></span> <span class="token string" >\'\u8868\u5355\'</span><span class="token punctuation" >}</span></span> <span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>List.Item</span> <span class="token attr-name" >extra</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token operator" >&lt;</span>Stepper max<span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >10</span><span class="token punctuation" >}</span> min<span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >1</span><span class="token punctuation" >}</span> defaultValue<span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >3</span><span class="token punctuation" >}</span> onChange<span class="token punctuation" >=</span><span class="token punctuation" >{</span>onChange<span class="token punctuation" >}</span></span> <span class="token punctuation" >/></span></span><span class="token punctuation" >}</span><span class="token operator" >></span>\n      \u9ed8\u8ba4\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>List.Item</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>List.Item</span> <span class="token attr-name" >extra</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token operator" >&lt;</span>Stepper showNumber max<span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >10</span><span class="token punctuation" >}</span> min<span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >1</span><span class="token punctuation" >}</span> defaultValue<span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >1</span><span class="token punctuation" >}</span> onChange<span class="token punctuation" >=</span><span class="token punctuation" >{</span>onChange<span class="token punctuation" >}</span></span> <span class="token punctuation" >/></span></span><span class="token punctuation" >}</span><span class="token operator" >></span>\n      \u663e\u793a\u6570\u503c\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>List.Item</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>List.Item</span> <span class="token attr-name" >extra</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token operator" >&lt;</span>Stepper disabled max<span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >10</span><span class="token punctuation" >}</span> min<span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >1</span><span class="token punctuation" >}</span> defaultValue<span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >3</span><span class="token punctuation" >}</span> onChange<span class="token punctuation" >=</span><span class="token punctuation" >{</span>onChange<span class="token punctuation" >}</span></span> <span class="token punctuation" >/></span></span><span class="token punctuation" >}</span><span class="token operator" >></span>\n      \u7981\u7528\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>List.Item</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>List.Item</span> <span class="token attr-name" >extra</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token operator" >&lt;</span>Stepper disabled max<span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >10</span><span class="token punctuation" >}</span> min<span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >1</span><span class="token punctuation" >}</span> showNumber defaultValue<span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >3</span><span class="token punctuation" >}</span> onChange<span class="token punctuation" >=</span><span class="token punctuation" >{</span>onChange<span class="token punctuation" >}</span></span> <span class="token punctuation" >/></span></span><span class="token punctuation" >}</span><span class="token operator" >></span>\n      \u7981\u7528\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>List.Item</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>List</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>List</span> <span class="token attr-name" >renderHeader</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token operator" >=</span><span class="token operator" >></span> <span class="token string" >\'\u6b65\u8fdb\u5668\'</span><span class="token punctuation" >}</span></span> <span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>List.Item</span> <span class="token attr-name" >extra</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token operator" >&lt;</span>Stepper showNumber max<span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >10</span><span class="token punctuation" >}</span> min<span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >1</span><span class="token punctuation" >}</span> defaultValue<span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >3</span><span class="token punctuation" >}</span> onChange<span class="token punctuation" >=</span><span class="token punctuation" >{</span>onChange<span class="token punctuation" >}</span></span> <span class="token punctuation" >/></span></span><span class="token punctuation" >}</span><span class="token operator" >></span>\n        \u9884\u5b9a\u4eba\u6570\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>List.Item</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>List</span><span class="token punctuation" >></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n<span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){function n(n){console.log("changed",n)}return l["default"].createElement("div",null,l["default"].createElement(p["default"],{renderHeader:function(){return"\u8868\u5355"}},l["default"].createElement(p["default"].Item,{extra:l["default"].createElement(u["default"],{max:10,min:1,defaultValue:3,onChange:n})},"\u9ed8\u8ba4"),l["default"].createElement(p["default"].Item,{extra:l["default"].createElement(u["default"],{showNumber:!0,max:10,min:1,defaultValue:1,onChange:n})},"\u663e\u793a\u6570\u503c"),l["default"].createElement(p["default"].Item,{extra:l["default"].createElement(u["default"],{disabled:!0,max:10,min:1,defaultValue:3,onChange:n})},"\u7981\u7528"),l["default"].createElement(p["default"].Item,{extra:l["default"].createElement(u["default"],{disabled:!0,max:10,min:1,showNumber:!0,defaultValue:3,onChange:n})},"\u7981\u7528")),l["default"].createElement(p["default"],{renderHeader:function(){return"\u6b65\u8fdb\u5668"}},l["default"].createElement(p["default"].Item,{extra:l["default"].createElement(u["default"],{showNumber:!0,max:10,min:1,defaultValue:3,onChange:n})},"\u9884\u5b9a\u4eba\u6570")))}}},838:function(n,a,s){n.exports={form:s(704)}}});