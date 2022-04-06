"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[52934],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=c(n),f=a,m=p["".concat(u,".").concat(f)]||p[f]||d[f]||o;return n?r.createElement(m,i(i({ref:t},s),{},{components:n})):r.createElement(m,i({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},4207:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return s},default:function(){return p}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=(n(55064),n(58215),["components"]),l={sidebar_position:2},u="Quickstart",c={unversionedId:"quickstart",id:"version-0.3.x/quickstart",isDocsHomePage:!1,title:"Quickstart",description:"Get the roomName for the meeting and the participant's authToken from our backend APIs (read more about our server APIs here), and pass them to Dyte's DyteMeeting widget.",source:"@site/flutter_versioned_docs/version-0.3.x/quickstart.mdx",sourceDirName:".",slug:"/quickstart",permalink:"/flutter/0.3.x/quickstart",editUrl:"https://github.com/dyte-in/docs/tree/main/flutter_versioned_docs/version-0.3.x/quickstart.mdx",tags:[],version:"0.3.x",lastUpdatedBy:"Mayur Tendulkar",lastUpdatedAt:1649245100,formattedLastUpdatedAt:"4/6/2022",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"version-0.3.2/mainSidebar",previous:{title:"Installation",permalink:"/flutter/0.3.x/installation"},next:{title:"Basic Usage",permalink:"/flutter/0.3.x/usage"}},s=[],d={toc:s};function p(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"quickstart"},"Quickstart"),(0,o.kt)("p",null,"Get the ",(0,o.kt)("inlineCode",{parentName:"p"},"roomName")," for the meeting and the participant's ",(0,o.kt)("inlineCode",{parentName:"p"},"authToken")," from our backend APIs (read more about our server APIs ",(0,o.kt)("a",{parentName:"p",href:"/api/"},"here"),"), and pass them to Dyte's ",(0,o.kt)("inlineCode",{parentName:"p"},"DyteMeeting")," widget."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Import the package.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-dart"},"import 'package:dyte_client/dyte.dart';\nimport 'package:dyte_client/dyteMeeting.dart';\n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Pass relevant information to ",(0,o.kt)("inlineCode",{parentName:"li"},"DyteMeeting")," widget.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-dart"},'SizedBox(\n    width: <width>,\n    height: <height>,\n    child: DyteMeeting(\n        roomName: "<roomName>",\n        authToken: "<authToken>",\n        onInit: (DyteMeetingHandler meeting) async {\n          // your handler\n        },\n    )\n)\n')),(0,o.kt)("p",null,"You can use any other constraining widget instead of SizedBox, the parent widget just needs to have a ",(0,o.kt)("inlineCode",{parentName:"p"},"maxHeight")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"maxWidth"),"."),(0,o.kt)("p",null,"For example, for a full screen meeting you could use the following code."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-dart"},"import 'package:flutter/material.dart';\nimport 'package:dyte_client/dyte.dart';\n\nvoid main() {\n  runApp(MaterialApp(home:MyApp()));\n}\n\nclass MyApp extends StatefulWidget {\n  @override\n  _MyAppState createState() => _MyAppState();\n}\n\nclass _MyAppState extends State<MyApp> {\n\n  @override\n  void initState() {\n    super.initState();\n  }\n\n  @override\n  Widget build(BuildContext context) {\n\n    // get the page height, width\n    double width = MediaQuery.of(context).size.width;\n    double height = MediaQuery.of(context).size.height;\n\n    return Scaffold(\n        body: Row(\n          children: <Widget>[\n            SizedBox(\n              width: width,\n              height: height,\n              child: DyteMeeting(\n                roomName: \"<roomName>\",\n                authToken: \"<authToken>\",\n                onInit: (DyteMeetingHandler meeting) async {\n                     var self = await meeting.self;\n                },\n              )\n            )\n          ],\n        ),\n    );\n  }\n}\n")))}p.isMDXComponent=!0},58215:function(e,t,n){var r=n(67294);t.Z=function(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},55064:function(e,t,n){n.d(t,{Z:function(){return c}});var r=n(67294),a=n(79443);var o=function(){var e=(0,r.useContext)(a.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},i=n(86010),l="tabItem_1uMI",u="tabItemActive_2DSg";var c=function(e){var t,n=e.lazy,a=e.block,c=e.defaultValue,s=e.values,d=e.groupId,p=e.className,f=r.Children.toArray(e.children),m=null!=s?s:f.map((function(e){return{value:e.props.value,label:e.props.label}})),h=null!=c?c:null==(t=f.find((function(e){return e.props.default})))?void 0:t.props.value,g=o(),y=g.tabGroupChoices,v=g.setTabGroupChoices,b=(0,r.useState)(h),k=b[0],w=b[1],x=[];if(null!=d){var N=y[d];null!=N&&N!==k&&m.some((function(e){return e.value===N}))&&w(N)}var O=function(e){var t=e.currentTarget,n=x.indexOf(t),r=m[n].value;w(r),null!=d&&(v(d,r),setTimeout((function(){var e,n,r,a,o,i,l,c;(e=t.getBoundingClientRect(),n=e.top,r=e.left,a=e.bottom,o=e.right,i=window,l=i.innerHeight,c=i.innerWidth,n>=0&&o<=c&&a<=l&&r>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(u),setTimeout((function(){return t.classList.remove(u)}),2e3))}),150))},M=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=x.indexOf(e.target)+1;n=x[r]||x[0];break;case"ArrowLeft":var a=x.indexOf(e.target)-1;n=x[a]||x[x.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.default)("tabs",{"tabs--block":a},p)},m.map((function(e){var t=e.value,n=e.label;return r.createElement("li",{role:"tab",tabIndex:k===t?0:-1,"aria-selected":k===t,className:(0,i.default)("tabs__item",l,{"tabs__item--active":k===t}),key:t,ref:function(e){return x.push(e)},onKeyDown:M,onFocus:O,onClick:O},null!=n?n:t)}))),n?(0,r.cloneElement)(f.filter((function(e){return e.props.value===k}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},f.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==k})}))))}},79443:function(e,t,n){var r=(0,n(67294).createContext)(void 0);t.Z=r},86010:function(e,t,n){function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function a(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}n.r(t),n.d(t,{default:function(){return a}})}}]);