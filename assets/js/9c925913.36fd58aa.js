"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[24951],{3905:function(t,e,r){r.d(e,{Zo:function(){return d},kt:function(){return m}});var n=r(67294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function p(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var o=n.createContext({}),c=function(t){var e=n.useContext(o),r=e;return t&&(r="function"==typeof t?t(e):p(p({},e),t)),r},d=function(t){var e=c(t.components);return n.createElement(o.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},s=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,i=t.originalType,o=t.parentName,d=l(t,["components","mdxType","originalType","parentName"]),s=c(r),m=a,f=s["".concat(o,".").concat(m)]||s[m]||u[m]||i;return r?n.createElement(f,p(p({ref:e},d),{},{components:r})):n.createElement(f,p({ref:e},d))}));function m(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=r.length,p=new Array(i);p[0]=s;var l={};for(var o in e)hasOwnProperty.call(e,o)&&(l[o]=e[o]);l.originalType=t,l.mdxType="string"==typeof t?t:a,p[1]=l;for(var c=2;c<i;c++)p[c]=r[c];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},26660:function(t,e,r){r.r(e),r.d(e,{frontMatter:function(){return l},contentTitle:function(){return o},metadata:function(){return c},toc:function(){return d},default:function(){return s}});var n=r(87462),a=r(63366),i=(r(67294),r(3905)),p=["components"],l={sidebar_position:4},o="DyteParticipant",c={unversionedId:"reference/participant",id:"version-0.3.x/reference/participant",isDocsHomePage:!1,title:"DyteParticipant",description:"Properties",source:"@site/flutter_versioned_docs/version-0.3.x/reference/participant.mdx",sourceDirName:"reference",slug:"/reference/participant",permalink:"/flutter/0.3.x/reference/participant",editUrl:"https://github.com/dyte-in/docs/tree/main/flutter_versioned_docs/version-0.3.x/reference/participant.mdx",tags:[],version:"0.3.x",lastUpdatedBy:"Mayur Tendulkar",lastUpdatedAt:1649245100,formattedLastUpdatedAt:"4/6/2022",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"version-0.3.2/mainSidebar",previous:{title:"DyteMeetingHandler",permalink:"/flutter/0.3.x/reference/meeting"},next:{title:"DyteSelfParticipant",permalink:"/flutter/0.3.x/reference/self-participant"}},d=[{value:"Properties",id:"properties",children:[]}],u={toc:d};function s(t){var e=t.components,r=(0,a.Z)(t,p);return(0,i.kt)("wrapper",(0,n.Z)({},u,r,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"dyteparticipant"},"DyteParticipant"),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Property name"),(0,i.kt)("th",{parentName:"tr",align:null},"Data type"),(0,i.kt)("th",{parentName:"tr",align:null},"Use"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"id"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"Peer ID of the participant")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"clientSpecificId"),(0,i.kt)("td",{parentName:"tr",align:null},"any"),(0,i.kt)("td",{parentName:"tr",align:null},"Client specific ID for this participant that was passed to the add participant API")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"name"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"Name set by the participant or as sent in the ",(0,i.kt)("inlineCode",{parentName:"td"},"add participant")," API")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"picture"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"URL of the participant picture, as sent in the ",(0,i.kt)("inlineCode",{parentName:"td"},"add participant")," API")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"audioEnabled"),(0,i.kt)("td",{parentName:"tr",align:null},"boolean"),(0,i.kt)("td",{parentName:"tr",align:null},"Checks if the participant is producing audio")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"videoEnabled"),(0,i.kt)("td",{parentName:"tr",align:null},"boolean"),(0,i.kt)("td",{parentName:"tr",align:null},"Checks if the participant is producing video")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"isPinned"),(0,i.kt)("td",{parentName:"tr",align:null},"boolean"),(0,i.kt)("td",{parentName:"tr",align:null},"Checks if the participant video is pinned (by the host, by the user, or by the preset)")))))}s.isMDXComponent=!0}}]);