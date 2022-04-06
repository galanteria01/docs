"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[74775],{3905:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),u=s(r),m=a,f=u["".concat(l,".").concat(m)]||u[m]||p[m]||o;return r?n.createElement(f,i(i({ref:t},d),{},{components:r})):n.createElement(f,i({ref:t},d))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},85783:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return d},default:function(){return u}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),i=["components"],c={sidebar_position:6},l="DyteErrors",s={unversionedId:"reference/dyte-errors",id:"version-0.23.x/reference/dyte-errors",isDocsHomePage:!1,title:"DyteErrors",description:"DyteErrors is an enum that enumerates defined errors that can occur from within the client SDK, apart from exceptions.",source:"@site/react-native_versioned_docs/version-0.23.x/reference/dyte-errors.mdx",sourceDirName:"reference",slug:"/reference/dyte-errors",permalink:"/react-native/reference/dyte-errors",editUrl:"https://github.com/dyte-in/docs/tree/main/react-native_versioned_docs/version-0.23.x/reference/dyte-errors.mdx",tags:[],version:"0.23.x",lastUpdatedBy:"Mayur Tendulkar",lastUpdatedAt:1649245100,formattedLastUpdatedAt:"4/6/2022",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"version-0.23.x/mainSidebar",previous:{title:"DyteSelfParticipant",permalink:"/react-native/reference/self-participant"},next:{title:"DyteMeeting.Events",permalink:"/react-native/reference/dyte-meeting-events"}},d=[],p={toc:d};function u(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"dyteerrors"},"DyteErrors"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"DyteErrors")," is an enum that enumerates defined errors that can occur from within the client SDK, apart from exceptions."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"DyteErrors {\n    CLIENTID_INVALID,\n    MEETING_UNAUTHORIZED,\n    MEETING_NOTFOUND\n}\n")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Error"),(0,o.kt)("th",{parentName:"tr",align:null},"Meaning"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"CLIENTID_INVALID"),(0,o.kt)("td",{parentName:"tr",align:null},"The ",(0,o.kt)("inlineCode",{parentName:"td"},"clientId")," provided during initialization is incorrect / does not match our records")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"MEETING_UNAUTHORIZED"),(0,o.kt)("td",{parentName:"tr",align:null},"The ",(0,o.kt)("inlineCode",{parentName:"td"},"authToken")," provided during initialization is incorrect / does not match our records")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"MEETING_NOTFOUND"),(0,o.kt)("td",{parentName:"tr",align:null},"The ",(0,o.kt)("inlineCode",{parentName:"td"},"roomName")," provided during initialization is incorrect / does not match our records")))))}u.isMDXComponent=!0}}]);