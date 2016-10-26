webpackJsonp([34,98],{496:function(n,s){"use strict";n.exports={content:[["p","\u4e0b\u62c9\u5237\u65b0"]],meta:{order:0,title:"ListView RefreshControl",filename:"components/refresh-control/demo/basic.md",id:"components-refresh-control-demo-basic"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token comment" spellcheck="true">/* eslint no-dupe-keys: 0, no-mixed-operators: 0 */</span>\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span> RefreshControl<span class="token punctuation" >,</span> ListView <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd-mobile\'</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >const</span> data <span class="token operator" >=</span> <span class="token punctuation" >[</span>\n  <span class="token punctuation" >{</span>\n    img<span class="token punctuation" >:</span> <span class="token string" >\'https://zos.alipayobjects.com/rmsportal/dKbkpPXKfvZzWCM.png\'</span><span class="token punctuation" >,</span>\n    title<span class="token punctuation" >:</span> <span class="token string" >\'\u76f8\u7ea6\u9152\u5e97\'</span><span class="token punctuation" >,</span>\n    des<span class="token punctuation" >:</span> <span class="token string" >\'\u4e0d\u662f\u6240\u6709\u7684\u517c\u804c\u6c6a\u90fd\u9700\u8981\u98ce\u5439\u65e5\u6652\'</span><span class="token punctuation" >,</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token punctuation" >{</span>\n    img<span class="token punctuation" >:</span> <span class="token string" >\'https://zos.alipayobjects.com/rmsportal/XmwCzSeJiqpkuMB.png\'</span><span class="token punctuation" >,</span>\n    title<span class="token punctuation" >:</span> <span class="token string" >\'\u9ea6\u5f53\u52b3\u9080\u60a8\u8fc7\u5468\u672b\'</span><span class="token punctuation" >,</span>\n    des<span class="token punctuation" >:</span> <span class="token string" >\'\u4e0d\u662f\u6240\u6709\u7684\u517c\u804c\u6c6a\u90fd\u9700\u8981\u98ce\u5439\u65e5\u6652\'</span><span class="token punctuation" >,</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token punctuation" >{</span>\n    img<span class="token punctuation" >:</span> <span class="token string" >\'https://zos.alipayobjects.com/rmsportal/hfVtzEhPzTUewPm.png\'</span><span class="token punctuation" >,</span>\n    title<span class="token punctuation" >:</span> <span class="token string" >\'\u98df\u60e0\u5468\'</span><span class="token punctuation" >,</span>\n    des<span class="token punctuation" >:</span> <span class="token string" >\'\u4e0d\u662f\u6240\u6709\u7684\u517c\u804c\u6c6a\u90fd\u9700\u8981\u98ce\u5439\u65e5\u6652\'</span><span class="token punctuation" >,</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >]</span><span class="token punctuation" >;</span>\n<span class="token keyword" >let</span> index <span class="token operator" >=</span> data<span class="token punctuation" >.</span>length <span class="token operator" >-</span> <span class="token number" >1</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >let</span> pageIndex <span class="token operator" >=</span> <span class="token number" >0</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >const</span> App <span class="token operator" >=</span> React<span class="token punctuation" >.</span><span class="token function" >createClass</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n  <span class="token function" >getInitialState</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >const</span> dataSource <span class="token operator" >=</span> <span class="token keyword" >new</span> <span class="token class-name" >ListView<span class="token punctuation" >.</span>DataSource</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n      rowHasChanged<span class="token punctuation" >:</span> <span class="token punctuation" >(</span>row1<span class="token punctuation" >,</span> row2<span class="token punctuation" >)</span> <span class="token operator" >=</span><span class="token operator" >></span> row1 <span class="token operator" >!==</span> row2<span class="token punctuation" >,</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n\n    <span class="token keyword" >this</span><span class="token punctuation" >.</span>initData <span class="token operator" >=</span> <span class="token punctuation" >[</span><span class="token punctuation" >]</span><span class="token punctuation" >;</span>\n    <span class="token keyword" >for</span> <span class="token punctuation" >(</span><span class="token keyword" >let</span> i <span class="token operator" >=</span> <span class="token number" >0</span><span class="token punctuation" >;</span> i <span class="token operator" >&lt;</span> <span class="token number" >20</span><span class="token punctuation" >;</span> i<span class="token operator" >++</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n      <span class="token keyword" >this</span><span class="token punctuation" >.</span>initData<span class="token punctuation" >.</span><span class="token function" >push</span><span class="token punctuation" >(</span><span class="token template-string" ><span class="token string" >`r</span><span class="token interpolation" ><span class="token interpolation-punctuation punctuation" >${</span>i<span class="token interpolation-punctuation punctuation" >}</span></span><span class="token string" >`</span></span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n    <span class="token punctuation" >}</span>\n    <span class="token keyword" >return</span> <span class="token punctuation" >{</span>\n      dataSource<span class="token punctuation" >:</span> dataSource<span class="token punctuation" >.</span><span class="token function" >cloneWithRows</span><span class="token punctuation" >(</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>initData<span class="token punctuation" >)</span><span class="token punctuation" >,</span>\n      refreshing<span class="token punctuation" >:</span> <span class="token boolean" >false</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token function" >onRefresh</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >this</span><span class="token punctuation" >.</span><span class="token function" >setState</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span> refreshing<span class="token punctuation" >:</span> <span class="token boolean" >true</span> <span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n    <span class="token function" >setTimeout</span><span class="token punctuation" >(</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token operator" >=</span><span class="token operator" >></span> <span class="token punctuation" >{</span>\n      <span class="token keyword" >this</span><span class="token punctuation" >.</span>initData <span class="token operator" >=</span> <span class="token punctuation" >[</span><span class="token template-string" ><span class="token string" >`ref</span><span class="token interpolation" ><span class="token interpolation-punctuation punctuation" >${</span>pageIndex<span class="token operator" >++</span><span class="token interpolation-punctuation punctuation" >}</span></span><span class="token string" >`</span></span><span class="token punctuation" >,</span> <span class="token punctuation" >.</span><span class="token punctuation" >.</span><span class="token punctuation" >.</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>initData<span class="token punctuation" >]</span><span class="token punctuation" >;</span>\n      <span class="token keyword" >this</span><span class="token punctuation" >.</span><span class="token function" >setState</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n        dataSource<span class="token punctuation" >:</span> <span class="token keyword" >this</span><span class="token punctuation" >.</span>state<span class="token punctuation" >.</span>dataSource<span class="token punctuation" >.</span><span class="token function" >cloneWithRows</span><span class="token punctuation" >(</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>initData<span class="token punctuation" >)</span><span class="token punctuation" >,</span>\n        refreshing<span class="token punctuation" >:</span> <span class="token boolean" >false</span><span class="token punctuation" >,</span>\n      <span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >,</span> <span class="token number" >1000</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token function" >onScroll</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    console<span class="token punctuation" >.</span><span class="token function" >log</span><span class="token punctuation" >(</span><span class="token string" >\'sss\'</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token function" >render</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >const</span> separator <span class="token operator" >=</span> <span class="token punctuation" >(</span>sectionID<span class="token punctuation" >,</span> rowID<span class="token punctuation" >)</span> <span class="token operator" >=</span><span class="token operator" >></span> <span class="token punctuation" >(</span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span>\n        <span class="token attr-name" >key</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token template-string" ><span class="token string" >`</span><span class="token interpolation" ><span class="token interpolation-punctuation punctuation" >${</span>sectionID<span class="token interpolation-punctuation punctuation" >}</span></span><span class="token string" >-</span><span class="token interpolation" ><span class="token interpolation-punctuation punctuation" >${</span>rowID<span class="token interpolation-punctuation punctuation" >}</span></span><span class="token string" >`</span></span><span class="token punctuation" >}</span></span>\n        <span class="token attr-name" >style</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span>\n          backgroundColor<span class="token punctuation" >:</span> <span class="token string" >\'#F5F5F9\'</span><span class="token punctuation" >,</span>\n          height<span class="token punctuation" >:</span> <span class="token number" >8</span><span class="token punctuation" >,</span>\n          borderTop<span class="token punctuation" >:</span> <span class="token string" >\'1px solid #ECECED\'</span><span class="token punctuation" >,</span>\n          borderBottom<span class="token punctuation" >:</span> <span class="token string" >\'1px solid #ECECED\'</span><span class="token punctuation" >,</span>\n        <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span>\n      <span class="token punctuation" >/></span></span>\n    <span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n    <span class="token keyword" >const</span> row <span class="token operator" >=</span> <span class="token punctuation" >(</span>rowData<span class="token punctuation" >,</span> sectionID<span class="token punctuation" >,</span> rowID<span class="token punctuation" >)</span> <span class="token operator" >=</span><span class="token operator" >></span> <span class="token punctuation" >{</span>\n      <span class="token keyword" >if</span> <span class="token punctuation" >(</span>index <span class="token operator" >&lt;</span> <span class="token number" >0</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n        index <span class="token operator" >=</span> data<span class="token punctuation" >.</span>length <span class="token operator" >-</span> <span class="token number" >1</span><span class="token punctuation" >;</span>\n      <span class="token punctuation" >}</span>\n      <span class="token keyword" >const</span> obj <span class="token operator" >=</span> data<span class="token punctuation" >[</span>index<span class="token operator" >--</span><span class="token punctuation" >]</span><span class="token punctuation" >;</span>\n      <span class="token keyword" >return</span> <span class="token punctuation" >(</span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >key</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>rowID<span class="token punctuation" >}</span></span>\n          <span class="token attr-name" >style</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span>\n            padding<span class="token punctuation" >:</span> <span class="token string" >\'8px 16px\'</span><span class="token punctuation" >,</span>\n            backgroundColor<span class="token punctuation" >:</span> <span class="token string" >\'white\'</span><span class="token punctuation" >,</span>\n          <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span>\n        <span class="token punctuation" >></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>h3</span> <span class="token attr-name" >style</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> padding<span class="token punctuation" >:</span> <span class="token number" >2</span><span class="token punctuation" >,</span> marginBottom<span class="token punctuation" >:</span> <span class="token number" >8</span><span class="token punctuation" >,</span> borderBottom<span class="token punctuation" >:</span> <span class="token string" >\'1px solid #F6F6F6\'</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\n            <span class="token punctuation" >{</span>obj<span class="token punctuation" >.</span>title<span class="token punctuation" >}</span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>h3</span><span class="token punctuation" >></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >style</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> display<span class="token punctuation" >:</span> <span class="token string" >\'-webkit-box\'</span><span class="token punctuation" >,</span> display<span class="token punctuation" >:</span> <span class="token string" >\'flex\'</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\n            <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>img</span> <span class="token attr-name" >style</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> height<span class="token punctuation" >:</span> <span class="token number" >64</span> <span class="token operator" >*</span> <span class="token punctuation" >(</span>window<span class="token punctuation" >.</span>viewportScale <span class="token operator" >||</span> <span class="token number" >1</span><span class="token punctuation" >)</span><span class="token punctuation" >,</span> marginRight<span class="token punctuation" >:</span> <span class="token number" >8</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span> <span class="token attr-name" >src</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>obj<span class="token punctuation" >.</span>img<span class="token punctuation" >}</span></span> <span class="token punctuation" >/></span></span>\n            <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >style</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> display<span class="token punctuation" >:</span> <span class="token string" >\'inline-block\'</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\n              <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>p</span><span class="token punctuation" >></span></span><span class="token punctuation" >{</span>obj<span class="token punctuation" >.</span>des<span class="token punctuation" >}</span><span class="token operator" >-</span><span class="token punctuation" >{</span>rowData<span class="token punctuation" >}</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>p</span><span class="token punctuation" >></span></span>\n              <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>p</span><span class="token punctuation" >></span></span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>span</span> <span class="token attr-name" >style</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> fontSize<span class="token punctuation" >:</span> <span class="token string" >\'1.6em\'</span><span class="token punctuation" >,</span> color<span class="token punctuation" >:</span> <span class="token string" >\'#FF6E27\'</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span><span class="token number" >35</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>span</span><span class="token punctuation" >></span></span>\u5143<span class="token operator" >/</span>\u4efb\u52a1<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>p</span><span class="token punctuation" >></span></span>\n            <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n      <span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >;</span>\n    <span class="token keyword" >return</span> <span class="token punctuation" >(</span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>ListView</span>\n        <span class="token attr-name" >dataSource</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>state<span class="token punctuation" >.</span>dataSource<span class="token punctuation" >}</span></span>\n        <span class="token attr-name" >renderRow</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>row<span class="token punctuation" >}</span></span>\n        <span class="token attr-name" >renderSeparator</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>separator<span class="token punctuation" >}</span></span>\n        <span class="token attr-name" >initialListSize</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >5</span><span class="token punctuation" >}</span></span>\n        <span class="token attr-name" >pageSize</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >5</span><span class="token punctuation" >}</span></span>\n        <span class="token attr-name" >scrollRenderAheadDistance</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >200</span><span class="token punctuation" >}</span></span>\n        <span class="token attr-name" >scrollEventThrottle</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >20</span><span class="token punctuation" >}</span></span>\n        <span class="token attr-name" >onScroll</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>onScroll<span class="token punctuation" >}</span></span>\n        <span class="token attr-name" >style</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span>\n          height<span class="token punctuation" >:</span> document<span class="token punctuation" >.</span>body<span class="token punctuation" >.</span>clientHeight <span class="token operator" >/</span> <span class="token number" >2</span><span class="token punctuation" >,</span>\n          border<span class="token punctuation" >:</span> <span class="token string" >\'1px solid #ddd\'</span><span class="token punctuation" >,</span>\n          margin<span class="token punctuation" >:</span> <span class="token string" >\'10px 0\'</span><span class="token punctuation" >,</span>\n        <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span>\n        <span class="token attr-name" >scrollerOptions</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> scrollbars<span class="token punctuation" >:</span> <span class="token boolean" >true</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span>\n        <span class="token attr-name" >refreshControl</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token operator" >&lt;</span>RefreshControl\n          refreshing<span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>state<span class="token punctuation" >.</span>refreshing<span class="token punctuation" >}</span>\n          onRefresh<span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>onRefresh<span class="token punctuation" >}</span></span>\n        <span class="token punctuation" >/></span></span><span class="token punctuation" >}</span>\n      <span class="token operator" >/</span><span class="token operator" >></span>\n    <span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>App</span> <span class="token punctuation" >/></span></span><span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:["pre",{lang:"__react"},["code","/* eslint no-dupe-keys: 0, no-mixed-operators: 0 */\nimport { RefreshControl, ListView } from 'antd-mobile';\n\nconst data = [\n  {\n    img: 'https://zos.alipayobjects.com/rmsportal/dKbkpPXKfvZzWCM.png',\n    title: '\u76f8\u7ea6\u9152\u5e97',\n    des: '\u4e0d\u662f\u6240\u6709\u7684\u517c\u804c\u6c6a\u90fd\u9700\u8981\u98ce\u5439\u65e5\u6652',\n  },\n  {\n    img: 'https://zos.alipayobjects.com/rmsportal/XmwCzSeJiqpkuMB.png',\n    title: '\u9ea6\u5f53\u52b3\u9080\u60a8\u8fc7\u5468\u672b',\n    des: '\u4e0d\u662f\u6240\u6709\u7684\u517c\u804c\u6c6a\u90fd\u9700\u8981\u98ce\u5439\u65e5\u6652',\n  },\n  {\n    img: 'https://zos.alipayobjects.com/rmsportal/hfVtzEhPzTUewPm.png',\n    title: '\u98df\u60e0\u5468',\n    des: '\u4e0d\u662f\u6240\u6709\u7684\u517c\u804c\u6c6a\u90fd\u9700\u8981\u98ce\u5439\u65e5\u6652',\n  },\n];\nlet index = data.length - 1;\n\nlet pageIndex = 0;\n\nconst App = React.createClass({\n  getInitialState() {\n    const dataSource = new ListView.DataSource({\n      rowHasChanged: (row1, row2) => row1 !== row2,\n    });\n\n    this.initData = [];\n    for (let i = 0; i < 20; i++) {\n      this.initData.push(`r${i}`);\n    }\n    return {\n      dataSource: dataSource.cloneWithRows(this.initData),\n      refreshing: false,\n    };\n  },\n  onRefresh() {\n    this.setState({ refreshing: true });\n    setTimeout(() => {\n      this.initData = [`ref${pageIndex++}`, ...this.initData];\n      this.setState({\n        dataSource: this.state.dataSource.cloneWithRows(this.initData),\n        refreshing: false,\n      });\n    }, 1000);\n  },\n  onScroll() {\n    console.log('sss');\n  },\n  render() {\n    const separator = (sectionID, rowID) => (\n      <div\n        key={`${sectionID}-${rowID}`}\n        style={{\n          backgroundColor: '#F5F5F9',\n          height: 8,\n          borderTop: '1px solid #ECECED',\n          borderBottom: '1px solid #ECECED',\n        }}\n      />\n    );\n    const row = (rowData, sectionID, rowID) => {\n      if (index < 0) {\n        index = data.length - 1;\n      }\n      const obj = data[index--];\n      return (\n        <div key={rowID}\n          style={{\n            padding: '8px 16px',\n            backgroundColor: 'white',\n          }}\n        >\n          <h3 style={{ padding: 2, marginBottom: 8, borderBottom: '1px solid #F6F6F6' }}>\n            {obj.title}\n          </h3>\n          <div style={{ display: '-webkit-box', display: 'flex' }}>\n            <img style={{ height: 64 * (window.viewportScale || 1), marginRight: 8 }} src={obj.img} />\n            <div style={{ display: 'inline-block' }}>\n              <p>{obj.des}-{rowData}</p>\n              <p><span style={{ fontSize: '1.6em', color: '#FF6E27' }}>35</span>\u5143/\u4efb\u52a1</p>\n            </div>\n          </div>\n        </div>\n      );\n    };\n    return (\n      <ListView\n        dataSource={this.state.dataSource}\n        renderRow={row}\n        renderSeparator={separator}\n        initialListSize={5}\n        pageSize={5}\n        scrollRenderAheadDistance={200}\n        scrollEventThrottle={20}\n        onScroll={this.onScroll}\n        style={{\n          height: document.body.clientHeight / 2,\n          border: '1px solid #ddd',\n          margin: '10px 0',\n        }}\n        scrollerOptions={{ scrollbars: true }}\n        refreshControl={<RefreshControl\n          refreshing={this.state.refreshing}\n          onRefresh={this.onRefresh}\n        />}\n      />\n    );\n  },\n});\n\nReactDOM.render(<App />, mountNode);"]]}},624:function(n,s,a){n.exports={basic:a(496)}}});