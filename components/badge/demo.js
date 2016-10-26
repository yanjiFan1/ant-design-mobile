webpackJsonp([11,98],{407:function(n,a){"use strict";n.exports={content:[["p","\u6570\u5b57\u5927\u4e8e99\uff0c\u4f1a\u663e\u793a ",["code","99+"]]],meta:{order:3,title:"\u5927\u6570\u5b57",filename:"components/badge/demo/99plus.md",id:"components-badge-demo-99plus"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Badge <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd-mobile\'</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >className</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>badge-container<span class="token punctuation" >"</span></span> <span class="token attr-name" >style</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> padding<span class="token punctuation" >:</span> <span class="token string" >\'40px 16px\'</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Badge</span> <span class="token attr-name" >text</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >99</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>span</span> <span class="token attr-name" >className</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>head-example<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Badge</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>p</span> <span class="token attr-name" >style</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> marginBottom<span class="token punctuation" >:</span> <span class="token number" >20</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span> <span class="token punctuation" >/></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Badge</span> <span class="token attr-name" >text</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >108</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>span</span> <span class="token attr-name" >className</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>head-example<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Badge</span><span class="token punctuation" >></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n<span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:["pre",{lang:"__react"},["code",'import { Badge } from \'antd-mobile\';\n\nReactDOM.render(\n  <div className="badge-container" style={{ padding: \'40px 16px\' }}>\n    <Badge text={99}>\n      <span className="head-example" />\n    </Badge>\n    <p style={{ marginBottom: 20 }} />\n    <Badge text={108}>\n      <span className="head-example" />\n    </Badge>\n  </div>\n, mountNode);']]}},408:function(n,a){"use strict";n.exports={content:[["p","\u7ed3\u5408\u5217\u8868\u7684\u6848\u4f8b\u53c2\u8003"]],meta:{order:4,title:"\u7efc\u5408\u793a\u4f8b",filename:"components/badge/demo/all.md",id:"components-badge-demo-all"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> List<span class="token punctuation" >,</span> Badge <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd-mobile\'</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >className</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>badge-container<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>form</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>List</span>\n        <span class="token attr-name" >renderHeader</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token operator" >=</span><span class="token operator" >></span> <span class="token string" >\'\u5217\u8868\'</span><span class="token punctuation" >}</span></span>\n      <span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>List.Item</span> <span class="token attr-name" >extra</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u5185\u5bb9\u5185\u5bb9<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n          \u6587\u672c\u5185\u5bb9<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Badge</span> <span class="token attr-name" >dot</span> <span class="token attr-name" >style</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> marginLeft<span class="token punctuation" >:</span> <span class="token number" >12</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span> <span class="token punctuation" >/></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>List.Item</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>List.Item</span> <span class="token attr-name" >extra</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u5185\u5bb9\u5185\u5bb9<span class="token punctuation" >"</span></span> <span class="token attr-name" >arrow</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>horizontal<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n          \u6587\u672c\u5185\u5bb9<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Badge</span> <span class="token attr-name" >text</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token string" >\'new\'</span><span class="token punctuation" >}</span></span> <span class="token attr-name" >style</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> marginLeft<span class="token punctuation" >:</span> <span class="token number" >12</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span> <span class="token punctuation" >/></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>List.Item</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>List.Item</span> <span class="token attr-name" >extra</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u5185\u5bb9\u5185\u5bb9<span class="token punctuation" >"</span></span> <span class="token attr-name" >arrow</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>horizontal<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n          \u6587\u672c\u5185\u5bb9<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Badge</span> <span class="token attr-name" >text</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >4</span><span class="token punctuation" >}</span></span> <span class="token attr-name" >style</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> marginLeft<span class="token punctuation" >:</span> <span class="token number" >12</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span> <span class="token punctuation" >/></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>List.Item</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>List.Item</span> <span class="token attr-name" >extra</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u5185\u5bb9\u5185\u5bb9<span class="token punctuation" >"</span></span> <span class="token attr-name" >arrow</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>horizontal<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n          \u6587\u672c\u5185\u5bb9<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Badge</span> <span class="token attr-name" >text</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >100</span><span class="token punctuation" >}</span></span> <span class="token attr-name" >style</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> marginLeft<span class="token punctuation" >:</span> <span class="token number" >12</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span> <span class="token punctuation" >/></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>List.Item</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>List</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>List</span>\n        <span class="token attr-name" >renderHeader</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token operator" >=</span><span class="token operator" >></span> <span class="token string" >\'\u5e26icon\'</span><span class="token punctuation" >}</span></span>\n      <span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>List.Item</span> <span class="token attr-name" >extra</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u5185\u5bb9\u5185\u5bb9<span class="token punctuation" >"</span></span> <span class="token attr-name" >arrow</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>horizontal<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Badge</span> <span class="token attr-name" >dot</span><span class="token punctuation" >></span></span>\n            <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>span</span> <span class="token attr-name" >style</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> width<span class="token punctuation" >:</span> <span class="token string" >\'0.52rem\'</span><span class="token punctuation" >,</span> height<span class="token punctuation" >:</span> <span class="token string" >\'0.52rem\'</span><span class="token punctuation" >,</span> background<span class="token punctuation" >:</span> <span class="token string" >\'#ddd\'</span><span class="token punctuation" >,</span> display<span class="token punctuation" >:</span> <span class="token string" >\'inline-block\'</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span> <span class="token punctuation" >/></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Badge</span><span class="token punctuation" >></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>span</span> <span class="token attr-name" >style</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> marginLeft<span class="token punctuation" >:</span> <span class="token number" >12</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\u5c0f\u5706\u70b9<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>span</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>List.Item</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>List.Item</span>\n          <span class="token attr-name" >thumb</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>https://zos.alipayobjects.com/rmsportal/faMhXAxhCzLvveJ.png<span class="token punctuation" >"</span></span>\n          <span class="token attr-name" >extra</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token operator" >&lt;</span>Badge text<span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >77</span><span class="token punctuation" >}</span></span> <span class="token punctuation" >/></span></span><span class="token punctuation" >}</span>\n          arrow<span class="token operator" >=</span><span class="token string" >"horizontal"</span>\n        <span class="token operator" >></span>\n          \u53f3\u4fa7\u5185\u5bb9\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>List.Item</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>List</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>List</span>\n        <span class="token attr-name" >renderHeader</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token operator" >=</span><span class="token operator" >></span> <span class="token string" >\'\u5927\u53f7icon\'</span><span class="token punctuation" >}</span></span>\n      <span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>List.Item</span> <span class="token attr-name" >extra</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u5185\u5bb9\u5185\u5bb9<span class="token punctuation" >"</span></span> <span class="token attr-name" >arrow</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>horizontal<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Badge</span> <span class="token attr-name" >text</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >9</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\n            <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>span</span> <span class="token attr-name" >style</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> width<span class="token punctuation" >:</span> <span class="token string" >\'1.04rem\'</span><span class="token punctuation" >,</span> height<span class="token punctuation" >:</span> <span class="token string" >\'1.04rem\'</span><span class="token punctuation" >,</span> background<span class="token punctuation" >:</span> <span class="token string" >\'#ddd\'</span><span class="token punctuation" >,</span> display<span class="token punctuation" >:</span> <span class="token string" >\'inline-block\'</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span> <span class="token punctuation" >/></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Badge</span><span class="token punctuation" >></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>span</span> <span class="token attr-name" >style</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> marginLeft<span class="token punctuation" >:</span> <span class="token number" >12</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\u6570\u5b57<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>span</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>List.Item</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>List.Item</span> <span class="token attr-name" >extra</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u5185\u5bb9\u5185\u5bb9<span class="token punctuation" >"</span></span> <span class="token attr-name" >arrow</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>horizontal<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Badge</span> <span class="token attr-name" >text</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >108</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\n            <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>span</span> <span class="token attr-name" >style</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> width<span class="token punctuation" >:</span> <span class="token string" >\'1.04rem\'</span><span class="token punctuation" >,</span> height<span class="token punctuation" >:</span> <span class="token string" >\'1.04rem\'</span><span class="token punctuation" >,</span> background<span class="token punctuation" >:</span> <span class="token string" >\'#ddd\'</span><span class="token punctuation" >,</span> display<span class="token punctuation" >:</span> <span class="token string" >\'inline-block\'</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span> <span class="token punctuation" >/></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Badge</span><span class="token punctuation" >></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>span</span> <span class="token attr-name" >style</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> marginLeft<span class="token punctuation" >:</span> <span class="token number" >12</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\u8d85\u51fa<span class="token number" >99</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>span</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>List.Item</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>List</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>form</span><span class="token punctuation" >></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n<span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:["pre",{lang:"__react"},["code","import { List, Badge } from 'antd-mobile';\n\nReactDOM.render(\n  <div className=\"badge-container\">\n    <form>\n      <List\n        renderHeader={() => '\u5217\u8868'}\n      >\n        <List.Item extra=\"\u5185\u5bb9\u5185\u5bb9\">\n          \u6587\u672c\u5185\u5bb9<Badge dot style={{ marginLeft: 12 }} />\n        </List.Item>\n        <List.Item extra=\"\u5185\u5bb9\u5185\u5bb9\" arrow=\"horizontal\">\n          \u6587\u672c\u5185\u5bb9<Badge text={'new'} style={{ marginLeft: 12 }} />\n        </List.Item>\n        <List.Item extra=\"\u5185\u5bb9\u5185\u5bb9\" arrow=\"horizontal\">\n          \u6587\u672c\u5185\u5bb9<Badge text={4} style={{ marginLeft: 12 }} />\n        </List.Item>\n        <List.Item extra=\"\u5185\u5bb9\u5185\u5bb9\" arrow=\"horizontal\">\n          \u6587\u672c\u5185\u5bb9<Badge text={100} style={{ marginLeft: 12 }} />\n        </List.Item>\n      </List>\n      <List\n        renderHeader={() => '\u5e26icon'}\n      >\n        <List.Item extra=\"\u5185\u5bb9\u5185\u5bb9\" arrow=\"horizontal\">\n          <Badge dot>\n            <span style={{ width: '0.52rem', height: '0.52rem', background: '#ddd', display: 'inline-block' }} />\n          </Badge>\n          <span style={{ marginLeft: 12 }}>\u5c0f\u5706\u70b9</span>\n        </List.Item>\n        <List.Item\n          thumb=\"https://zos.alipayobjects.com/rmsportal/faMhXAxhCzLvveJ.png\"\n          extra={<Badge text={77} />}\n          arrow=\"horizontal\"\n        >\n          \u53f3\u4fa7\u5185\u5bb9\n        </List.Item>\n      </List>\n      <List\n        renderHeader={() => '\u5927\u53f7icon'}\n      >\n        <List.Item extra=\"\u5185\u5bb9\u5185\u5bb9\" arrow=\"horizontal\">\n          <Badge text={9}>\n            <span style={{ width: '1.04rem', height: '1.04rem', background: '#ddd', display: 'inline-block' }} />\n          </Badge>\n          <span style={{ marginLeft: 12 }}>\u6570\u5b57</span>\n        </List.Item>\n        <List.Item extra=\"\u5185\u5bb9\u5185\u5bb9\" arrow=\"horizontal\">\n          <Badge text={108}>\n            <span style={{ width: '1.04rem', height: '1.04rem', background: '#ddd', display: 'inline-block' }} />\n          </Badge>\n          <span style={{ marginLeft: 12 }}>\u8d85\u51fa99</span>\n        </List.Item>\n      </List>\n    </form>\n  </div>\n, mountNode);"]],style:".head-example {\n  width: 1.04rem;\n  height: 1.04rem;\n  background: #ddd;\n  display: inline-block;\n}",highlightedStyle:'<span class="token selector" ><span class="token class" >.head-example</span> </span><span class="token punctuation" >{</span>\n  <span class="token property" >width</span><span class="token punctuation" >:</span> <span class="token number" >1.04</span>rem<span class="token punctuation" >;</span>\n  <span class="token property" >height</span><span class="token punctuation" >:</span> <span class="token number" >1.04</span>rem<span class="token punctuation" >;</span>\n  <span class="token property" >background</span><span class="token punctuation" >:</span> <span class="token hexcode" >#ddd</span><span class="token punctuation" >;</span>\n  <span class="token property" >display</span><span class="token punctuation" >:</span> inline-block<span class="token punctuation" >;</span>\n<span class="token punctuation" >}</span>'}},409:function(n,a){"use strict";n.exports={content:[["p","\u7b80\u5355\u7684\u5fbd\u7ae0\u5c55\u793a\u3002"]],meta:{order:0,title:"\u57fa\u672c",filename:"components/badge/demo/basic.md",id:"components-badge-demo-basic"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Badge <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd-mobile\'</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >className</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>badge-container<span class="token punctuation" >"</span></span> <span class="token attr-name" >style</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> padding<span class="token punctuation" >:</span> <span class="token string" >\'40px 16px\'</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Badge</span> <span class="token attr-name" >text</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >9</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>span</span> <span class="token attr-name" >className</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>head-example<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Badge</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>p</span> <span class="token attr-name" >style</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> marginBottom<span class="token punctuation" >:</span> <span class="token number" >20</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span> <span class="token punctuation" >/></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Badge</span> <span class="token attr-name" >text</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token string" >\'new\'</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>span</span> <span class="token attr-name" >className</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>head-example<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Badge</span><span class="token punctuation" >></span></span>\n\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n<span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'
}],preview:["pre",{lang:"__react"},["code","import { Badge } from 'antd-mobile';\n\nReactDOM.render(\n  <div className=\"badge-container\" style={{ padding: '40px 16px' }}>\n    <Badge text={9}>\n      <span className=\"head-example\" />\n    </Badge>\n    <p style={{ marginBottom: 20 }} />\n    <Badge text={'new'}>\n      <span className=\"head-example\" />\n    </Badge>\n\n  </div>\n, mountNode);"]]}},410:function(n,a){"use strict";n.exports={content:[["p","\u53ea\u6709\u4e2a\u5c0f\u7ea2\u70b9\uff0c\u6ca1\u6709\u5177\u4f53\u6570\u5b57"]],meta:{order:1,title:"\u5c0f\u7ea2\u70b9",filename:"components/badge/demo/dot.md",id:"components-badge-demo-dot"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Badge <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd-mobile\'</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >className</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>badge-container<span class="token punctuation" >"</span></span> <span class="token attr-name" >style</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> padding<span class="token punctuation" >:</span> <span class="token string" >\'40px 16px\'</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Badge</span> <span class="token attr-name" >dot</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>span</span> <span class="token attr-name" >className</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>dot-example<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Badge</span><span class="token punctuation" >></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n<span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:["pre",{lang:"__react"},["code","import { Badge } from 'antd-mobile';\n\nReactDOM.render(\n  <div className=\"badge-container\" style={{ padding: '40px 16px' }}>\n    <Badge dot>\n      <span className=\"dot-example\" />\n    </Badge>\n  </div>\n, mountNode);"]],style:".dot-example {\n  width: 0.56rem;\n  height: 0.56rem;\n  background: #ddd;\n  display: inline-block;\n}",highlightedStyle:'<span class="token selector" ><span class="token class" >.dot-example</span> </span><span class="token punctuation" >{</span>\n  <span class="token property" >width</span><span class="token punctuation" >:</span> <span class="token number" >0.56</span>rem<span class="token punctuation" >;</span>\n  <span class="token property" >height</span><span class="token punctuation" >:</span> <span class="token number" >0.56</span>rem<span class="token punctuation" >;</span>\n  <span class="token property" >background</span><span class="token punctuation" >:</span> <span class="token hexcode" >#ddd</span><span class="token punctuation" >;</span>\n  <span class="token property" >display</span><span class="token punctuation" >:</span> inline-block<span class="token punctuation" >;</span>\n<span class="token punctuation" >}</span>'}},601:function(n,a,s){n.exports={"99plus":s(407),all:s(408),basic:s(409),dot:s(410)}}});