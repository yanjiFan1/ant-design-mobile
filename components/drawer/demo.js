webpackJsonp([20,98],{426:function(n,s){"use strict";n.exports={content:[["p","\u906e\u7f69\u5c42\u6a21\u5f0f"]],meta:{order:0,title:"\u57fa\u672c",filename:"components/drawer/demo/basic.md",id:"components-drawer-demo-basic"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Drawer<span class="token punctuation" >,</span> List<span class="token punctuation" >,</span> NavBar <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd-mobile\'</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >const</span> App1 <span class="token operator" >=</span> React<span class="token punctuation" >.</span><span class="token function" >createClass</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n  <span class="token function" >getInitialState</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >return</span> <span class="token punctuation" >{</span>\n      open<span class="token punctuation" >:</span> <span class="token boolean" >false</span><span class="token punctuation" >,</span>\n      position<span class="token punctuation" >:</span> <span class="token string" >\'left\'</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token function" >onOpenChange</span><span class="token punctuation" >(</span>isOpen<span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    console<span class="token punctuation" >.</span><span class="token function" >log</span><span class="token punctuation" >(</span>isOpen<span class="token punctuation" >,</span> arguments<span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n    <span class="token keyword" >this</span><span class="token punctuation" >.</span><span class="token function" >setState</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span> open<span class="token punctuation" >:</span> <span class="token operator" >!</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>state<span class="token punctuation" >.</span>open <span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token function" >render</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >const</span> sidebar <span class="token operator" >=</span> <span class="token punctuation" >(</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>List</span><span class="token punctuation" >></span></span>\n      <span class="token punctuation" >{</span><span class="token punctuation" >[</span><span class="token punctuation" >.</span><span class="token punctuation" >.</span><span class="token punctuation" >.</span><span class="token function" >Array</span><span class="token punctuation" >(</span><span class="token number" >20</span><span class="token punctuation" >)</span><span class="token punctuation" >.</span><span class="token function" >keys</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span><span class="token punctuation" >]</span><span class="token punctuation" >.</span><span class="token function" >map</span><span class="token punctuation" >(</span><span class="token punctuation" >(</span>i<span class="token punctuation" >,</span> index<span class="token punctuation" >)</span> <span class="token operator" >=</span><span class="token operator" >></span> <span class="token punctuation" >{</span>\n        <span class="token keyword" >if</span> <span class="token punctuation" >(</span>index <span class="token operator" >===</span> <span class="token number" >0</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n          <span class="token keyword" >return</span> <span class="token punctuation" >(</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>List.Item</span> <span class="token attr-name" >key</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>index<span class="token punctuation" >}</span></span>\n            <span class="token attr-name" >thumb</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>https://zos.alipayobjects.com/rmsportal/eOZidTabPoEbPeU.png<span class="token punctuation" >"</span></span>\n            <span class="token attr-name" >multipleLine</span>\n          <span class="token punctuation" >></span></span>\u5206\u7c7b<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>List.Item</span><span class="token punctuation" >></span></span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n        <span class="token punctuation" >}</span>\n        <span class="token keyword" >return</span> <span class="token punctuation" >(</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>List.Item</span> <span class="token attr-name" >key</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>index<span class="token punctuation" >}</span></span>\n          <span class="token attr-name" >thumb</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>https://zos.alipayobjects.com/rmsportal/eOZidTabPoEbPeU.png<span class="token punctuation" >"</span></span>\n        <span class="token punctuation" >></span></span>\u5206\u7c7b<span class="token punctuation" >{</span>index<span class="token punctuation" >}</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>List.Item</span><span class="token punctuation" >></span></span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n      <span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >}</span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>List</span><span class="token punctuation" >></span></span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n\n    <span class="token keyword" >const</span> drawerProps <span class="token operator" >=</span> <span class="token punctuation" >{</span>\n      open<span class="token punctuation" >:</span> <span class="token keyword" >this</span><span class="token punctuation" >.</span>state<span class="token punctuation" >.</span>open<span class="token punctuation" >,</span>\n      position<span class="token punctuation" >:</span> <span class="token keyword" >this</span><span class="token punctuation" >.</span>state<span class="token punctuation" >.</span>position<span class="token punctuation" >,</span>\n      onOpenChange<span class="token punctuation" >:</span> <span class="token keyword" >this</span><span class="token punctuation" >.</span>onOpenChange<span class="token punctuation" >,</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >;</span>\n    <span class="token keyword" >return</span> <span class="token punctuation" >(</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >style</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> height<span class="token punctuation" >:</span> <span class="token string" >\'100%\'</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>NavBar</span> <span class="token attr-name" >iconName</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>ellipsis<span class="token punctuation" >"</span></span> <span class="token attr-name" >onLeftClick</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>onOpenChange<span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\n        \u57fa\u672c\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>NavBar</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >className</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>drawer-container<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Drawer</span> <span class="token attr-name" >sidebar</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>sidebar<span class="token punctuation" >}</span></span>\n          <span class="token attr-name" >dragHandleStyle</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> display<span class="token punctuation" >:</span> <span class="token string" >\'none\'</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span>\n          <span class="token attr-name" >contentStyle</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> color<span class="token punctuation" >:</span> <span class="token string" >\'#A6A6A6\'</span><span class="token punctuation" >,</span> textAlign<span class="token punctuation" >:</span> <span class="token string" >\'center\'</span><span class="token punctuation" >,</span> paddingTop<span class="token punctuation" >:</span> <span class="token number" >42</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span>\n          <span class="token attr-name" >{...drawerProps}</span>\n        <span class="token punctuation" >></span></span>\n          \u8bf7\u70b9\u51fb\u5de6\u4e0a\u89d2\u56fe\u6807\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Drawer</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>App1</span> <span class="token punctuation" >/></span></span><span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:["pre",{lang:"__react"},["code","import { Drawer, List, NavBar } from 'antd-mobile';\n\nconst App1 = React.createClass({\n  getInitialState() {\n    return {\n      open: false,\n      position: 'left',\n    };\n  },\n  onOpenChange(isOpen) {\n    console.log(isOpen, arguments);\n    this.setState({ open: !this.state.open });\n  },\n  render() {\n    const sidebar = (<List>\n      {[...Array(20).keys()].map((i, index) => {\n        if (index === 0) {\n          return (<List.Item key={index}\n            thumb=\"https://zos.alipayobjects.com/rmsportal/eOZidTabPoEbPeU.png\"\n            multipleLine\n          >\u5206\u7c7b</List.Item>);\n        }\n        return (<List.Item key={index}\n          thumb=\"https://zos.alipayobjects.com/rmsportal/eOZidTabPoEbPeU.png\"\n        >\u5206\u7c7b{index}</List.Item>);\n      })}\n    </List>);\n\n    const drawerProps = {\n      open: this.state.open,\n      position: this.state.position,\n      onOpenChange: this.onOpenChange,\n    };\n    return (<div style={{ height: '100%' }}>\n      <NavBar iconName=\"ellipsis\" onLeftClick={this.onOpenChange}>\n        \u57fa\u672c\n      </NavBar>\n      <div className=\"drawer-container\">\n        <Drawer sidebar={sidebar}\n          dragHandleStyle={{ display: 'none' }}\n          contentStyle={{ color: '#A6A6A6', textAlign: 'center', paddingTop: 42 }}\n          {...drawerProps}\n        >\n          \u8bf7\u70b9\u51fb\u5de6\u4e0a\u89d2\u56fe\u6807\n        </Drawer>\n      </div>\n    </div>);\n  },\n});\n\nReactDOM.render(<App1 />, mountNode);"]],style:"\n.drawer-container {\n  position: relative;\n  height: 100%;\n}\n.am-drawer {\n  overflow: auto;\n}\n.am-drawer-sidebar {\n  max-width: 260px;\n  background-color: #fff;\n  overflow: auto;\n}\n.am-drawer-sidebar .am-list {\n  padding: 0;\n}\n"}},427:function(n,s){"use strict";n.exports={content:[["p","\u5d4c\u5165\u5230\u6587\u6863\u6d41\u4e2d"]],meta:{order:1,title:"\u5d4c\u5165\u6587\u6863\u6a21\u5f0f",filename:"components/drawer/demo/dock.md",id:"components-drawer-demo-dock"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Drawer<span class="token punctuation" >,</span> List<span class="token punctuation" >,</span> NavBar <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd-mobile\'</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >const</span> App <span class="token operator" >=</span> React<span class="token punctuation" >.</span><span class="token function" >createClass</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n  <span class="token function" >getInitialState</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >return</span> <span class="token punctuation" >{</span>\n      docked<span class="token punctuation" >:</span> <span class="token boolean" >false</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token function" >onDock</span><span class="token punctuation" >(</span>d<span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >this</span><span class="token punctuation" >.</span><span class="token function" >setState</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n      <span class="token punctuation" >[</span>d<span class="token punctuation" >]</span><span class="token punctuation" >:</span> <span class="token operator" >!</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>state<span class="token punctuation" >[</span>d<span class="token punctuation" >]</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token function" >render</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >const</span> sidebar <span class="token operator" >=</span> <span class="token punctuation" >(</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>List</span><span class="token punctuation" >></span></span>\n      <span class="token punctuation" >{</span><span class="token punctuation" >[</span><span class="token punctuation" >.</span><span class="token punctuation" >.</span><span class="token punctuation" >.</span><span class="token function" >Array</span><span class="token punctuation" >(</span><span class="token number" >20</span><span class="token punctuation" >)</span><span class="token punctuation" >.</span><span class="token function" >keys</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span><span class="token punctuation" >]</span><span class="token punctuation" >.</span><span class="token function" >map</span><span class="token punctuation" >(</span><span class="token punctuation" >(</span>i<span class="token punctuation" >,</span> index<span class="token punctuation" >)</span> <span class="token operator" >=</span><span class="token operator" >></span> <span class="token punctuation" >{</span>\n        <span class="token keyword" >if</span> <span class="token punctuation" >(</span>index <span class="token operator" >===</span> <span class="token number" >0</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n          <span class="token keyword" >return</span> <span class="token punctuation" >(</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>List.Item</span> <span class="token attr-name" >key</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>index<span class="token punctuation" >}</span></span>\n            <span class="token attr-name" >thumb</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>https://zos.alipayobjects.com/rmsportal/eOZidTabPoEbPeU.png<span class="token punctuation" >"</span></span>\n            <span class="token attr-name" >multipleLine</span>\n          <span class="token punctuation" >></span></span>\u5206\u7c7b<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>List.Item</span><span class="token punctuation" >></span></span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n        <span class="token punctuation" >}</span>\n        <span class="token keyword" >return</span> <span class="token punctuation" >(</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>List.Item</span> <span class="token attr-name" >key</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>index<span class="token punctuation" >}</span></span>\n          <span class="token attr-name" >thumb</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>https://zos.alipayobjects.com/rmsportal/eOZidTabPoEbPeU.png<span class="token punctuation" >"</span></span>\n        <span class="token punctuation" >></span></span>\u5206\u7c7b<span class="token punctuation" >{</span>index<span class="token punctuation" >}</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>List.Item</span><span class="token punctuation" >></span></span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n      <span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >}</span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>List</span><span class="token punctuation" >></span></span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n\n    <span class="token keyword" >const</span> drawerProps <span class="token operator" >=</span> <span class="token punctuation" >{</span>\n      docked<span class="token punctuation" >:</span> <span class="token keyword" >this</span><span class="token punctuation" >.</span>state<span class="token punctuation" >.</span>docked<span class="token punctuation" >,</span>\n      open<span class="token punctuation" >:</span> <span class="token boolean" >false</span><span class="token punctuation" >,</span>\n      position<span class="token punctuation" >:</span> <span class="token string" >\'left\'</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >;</span>\n    <span class="token keyword" >return</span> <span class="token punctuation" >(</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >style</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> height<span class="token punctuation" >:</span> <span class="token string" >\'100%\'</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>NavBar</span> <span class="token attr-name" >iconName</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>ellipsis<span class="token punctuation" >"</span></span> <span class="token attr-name" >onLeftClick</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token operator" >=</span><span class="token operator" >></span> <span class="token keyword" >this</span><span class="token punctuation" >.</span><span class="token function" >onDock</span><span class="token punctuation" >(</span><span class="token string" >\'docked\'</span><span class="token punctuation" >)</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\u5d4c\u5165\u6587\u6863<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>NavBar</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >className</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>drawer-container<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Drawer</span> <span class="token attr-name" >sidebar</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>sidebar<span class="token punctuation" >}</span></span>\n          <span class="token attr-name" >dragHandleStyle</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> display<span class="token punctuation" >:</span> <span class="token string" >\'none\'</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span>\n          <span class="token attr-name" >sidebarStyle</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> border<span class="token punctuation" >:</span> <span class="token string" >\'1px solid #ddd\'</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span>\n          <span class="token attr-name" >contentStyle</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> color<span class="token punctuation" >:</span> <span class="token string" >\'#A6A6A6\'</span><span class="token punctuation" >,</span> textAlign<span class="token punctuation" >:</span> <span class="token string" >\'center\'</span><span class="token punctuation" >,</span> paddingTop<span class="token punctuation" >:</span> <span class="token number" >42</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span>\n          <span class="token attr-name" >{...drawerProps}</span>\n        <span class="token punctuation" >></span></span>\n          \u8bf7\u70b9\u51fb\u5de6\u4e0a\u89d2\u56fe\u6807\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Drawer</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>App</span> <span class="token punctuation" >/></span></span><span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:["pre",{lang:"__react"},["code","import { Drawer, List, NavBar } from 'antd-mobile';\n\nconst App = React.createClass({\n  getInitialState() {\n    return {\n      docked: false,\n    };\n  },\n  onDock(d) {\n    this.setState({\n      [d]: !this.state[d],\n    });\n  },\n  render() {\n    const sidebar = (<List>\n      {[...Array(20).keys()].map((i, index) => {\n        if (index === 0) {\n          return (<List.Item key={index}\n            thumb=\"https://zos.alipayobjects.com/rmsportal/eOZidTabPoEbPeU.png\"\n            multipleLine\n          >\u5206\u7c7b</List.Item>);\n        }\n        return (<List.Item key={index}\n          thumb=\"https://zos.alipayobjects.com/rmsportal/eOZidTabPoEbPeU.png\"\n        >\u5206\u7c7b{index}</List.Item>);\n      })}\n    </List>);\n\n    const drawerProps = {\n      docked: this.state.docked,\n      open: false,\n      position: 'left',\n    };\n    return (<div style={{ height: '100%' }}>\n      <NavBar iconName=\"ellipsis\" onLeftClick={() => this.onDock('docked')}>\u5d4c\u5165\u6587\u6863</NavBar>\n      <div className=\"drawer-container\">\n        <Drawer sidebar={sidebar}\n          dragHandleStyle={{ display: 'none' }}\n          sidebarStyle={{ border: '1px solid #ddd' }}\n          contentStyle={{ color: '#A6A6A6', textAlign: 'center', paddingTop: 42 }}\n          {...drawerProps}\n        >\n          \u8bf7\u70b9\u51fb\u5de6\u4e0a\u89d2\u56fe\u6807\n        </Drawer>\n      </div>\n    </div>);\n  },\n});\n\nReactDOM.render(<App />, mountNode);"]],style:"\n.drawer-container {\n  position: relative;\n  height: 100%;\n}\n.am-drawer {\n  overflow: auto;\n}\n.am-drawer-sidebar {\n  max-width: 260px;\n  background-color: #fff;\n  overflow: auto;\n}\n.am-drawer-sidebar .am-list {\n  padding: 0;\n}\n"}},607:function(n,s,a){n.exports={basic:a(426),dock:a(427)}}});