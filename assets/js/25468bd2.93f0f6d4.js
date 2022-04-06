"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[34181],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),d=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),s=d(r),f=o,m=s["".concat(l,".").concat(f)]||s[f]||p[f]||i;return r?n.createElement(m,a(a({ref:t},u),{},{components:r})):n.createElement(m,a({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=s;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var d=2;d<i;d++)a[d]=r[d];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},92964:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return d},toc:function(){return u},default:function(){return s}});var n=r(87462),o=r(63366),i=(r(67294),r(3905)),a=["components"],c={sidebar_position:6},l="MeetingErrorListener",d={unversionedId:"reference/dyte-errors",id:"version-0.1.x/reference/dyte-errors",isDocsHomePage:!1,title:"MeetingErrorListener",description:"MeetingErrorListener is an interface that allows you to override different errors that can occur from within the client SDK, apart from exceptions.",source:"@site/android_versioned_docs/version-0.1.x/reference/dyte-errors.mdx",sourceDirName:"reference",slug:"/reference/dyte-errors",permalink:"/android/0.1.x/reference/dyte-errors",editUrl:"https://github.com/dyte-in/docs/tree/main/android_versioned_docs/version-0.1.x/reference/dyte-errors.mdx",tags:[],version:"0.1.x",lastUpdatedBy:"Mayur Tendulkar",lastUpdatedAt:1649245100,formattedLastUpdatedAt:"4/6/2022",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"version-0.1.30/mainSidebar",previous:{title:"DyteSelfParticipant",permalink:"/android/0.1.x/reference/self-participant"},next:{title:"MeetingEventListener",permalink:"/android/0.1.x/reference/dyte-meeting-events"}},u=[],p={toc:u};function s(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"meetingerrorlistener"},"MeetingErrorListener"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"MeetingErrorListener")," is an interface that allows you to override different errors that can occur from within the client SDK, apart from exceptions."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"public void meetingNotFound();\npublic void unauthorized();\n")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Error"),(0,i.kt)("th",{parentName:"tr",align:null},"Meaning"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"unauthorized"),(0,i.kt)("td",{parentName:"tr",align:null},"The ",(0,i.kt)("inlineCode",{parentName:"td"},"authToken")," provided during initialization is incorrect / does not match our records")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"meetingNotFound"),(0,i.kt)("td",{parentName:"tr",align:null},"The ",(0,i.kt)("inlineCode",{parentName:"td"},"roomName")," provided during initialization is incorrect / does not match our records")))))}s.isMDXComponent=!0}}]);