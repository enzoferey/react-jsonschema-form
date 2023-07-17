"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4974],{876:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var r=n(2784);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,c=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),m=l(n),p=o,f=m["".concat(s,".").concat(p)]||m[p]||u[p]||c;return n?r.createElement(f,a(a({ref:t},d),{},{components:n})):r.createElement(f,a({ref:t},d))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=n.length,a=new Array(c);a[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[m]="string"==typeof e?e:o,a[1]=i;for(var l=2;l<c;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5337:(e,t,n)=>{n.d(t,{Z:()=>y});var r=n(2784),o=n(6277),c=n(4855),a=n(9817),i=n(1344),s=n(1077);const l={cardContainer:"cardContainer_Shn5",cardTitle:"cardTitle_h48N",cardDescription:"cardDescription_CytT"};function d(e){let{href:t,children:n}=e;return r.createElement(a.Z,{href:t,className:(0,o.Z)("card padding--lg",l.cardContainer)},n)}function m(e){let{href:t,icon:n,title:c,description:a}=e;return r.createElement(d,{href:t},r.createElement("h2",{className:(0,o.Z)("text--truncate",l.cardTitle),title:c},n," ",c),a&&r.createElement("p",{className:(0,o.Z)("text--truncate",l.cardDescription),title:a},a))}function u(e){let{item:t}=e;const n=(0,c.Wl)(t);return n?r.createElement(m,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,s.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function p(e){let{item:t}=e;const n=(0,i.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",o=(0,c.xz)(t.docId??void 0);return r.createElement(m,{href:t.href,icon:n,title:t.label,description:t.description??o?.description})}function f(e){let{item:t}=e;switch(t.type){case"link":return r.createElement(p,{item:t});case"category":return r.createElement(u,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function v(e){let{className:t}=e;const n=(0,c.jA)();return r.createElement(y,{items:n.items,className:t})}function y(e){const{items:t,className:n}=e;if(!t)return r.createElement(v,e);const a=(0,c.MN)(t);return r.createElement("section",{className:(0,o.Z)("row",n)},a.map(((e,t)=>r.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},r.createElement(f,{item:e})))))}},6361:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>d});var r=n(7896),o=(n(2784),n(876)),c=n(5337);const a={title:"Advanced Customization",description:"Advanced customization documentation for react-jsonschema-form."},i=void 0,s={unversionedId:"advanced-customization/index",id:"version-4.2.3/advanced-customization/index",title:"Advanced Customization",description:"Advanced customization documentation for react-jsonschema-form.",source:"@site/versioned_docs/version-4.2.3/advanced-customization/index.mdx",sourceDirName:"advanced-customization",slug:"/advanced-customization/",permalink:"/react-jsonschema-form/docs/version-4.2.3/advanced-customization/",draft:!1,editUrl:"https://github.com/rjsf-team/react-jsonschema-form/tree/main/packages/docs/versioned_docs/version-4.2.3/advanced-customization/index.mdx",tags:[],version:"4.2.3",frontMatter:{title:"Advanced Customization",description:"Advanced customization documentation for react-jsonschema-form."},sidebar:"docs",previous:{title:"Quickstart",permalink:"/react-jsonschema-form/docs/version-4.2.3/quickstart"},next:{title:"Custom Templates",permalink:"/react-jsonschema-form/docs/version-4.2.3/advanced-customization/custom-templates"}},l={},d=[],m={toc:d},u="wrapper";function p(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,a.description),(0,o.kt)(c.Z,{mdxType:"DocCardList"}))}p.isMDXComponent=!0}}]);