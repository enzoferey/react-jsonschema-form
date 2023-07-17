"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6003],{876:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>f});var r=n(2784);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),d=c(n),u=a,f=d["".concat(s,".").concat(u)]||d[u]||m[u]||o;return n?r.createElement(f,i(i({ref:t},l),{},{components:n})):r.createElement(f,i({ref:t},l))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[d]="string"==typeof e?e:a,i[1]=p;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1806:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var r=n(7896),a=(n(2784),n(876));const o={},i="Objects",p={unversionedId:"json-schema/objects",id:"json-schema/objects",title:"Objects",description:"Object properties",source:"@site/docs/json-schema/objects.md",sourceDirName:"json-schema",slug:"/json-schema/objects",permalink:"/react-jsonschema-form/docs/json-schema/objects",draft:!1,editUrl:"https://github.com/rjsf-team/react-jsonschema-form/tree/main/packages/docs/docs/json-schema/objects.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Dependencies",permalink:"/react-jsonschema-form/docs/json-schema/dependencies"},next:{title:"oneOf, anyOf, and allOf",permalink:"/react-jsonschema-form/docs/json-schema/oneof"}},s={},c=[{value:"Object properties",id:"object-properties",level:2},{value:"Required properties",id:"required-properties",level:2},{value:"Specifying property order",id:"specifying-property-order",level:2},{value:"Additional properties",id:"additional-properties",level:2},{value:"<code>expandable</code> option",id:"expandable-option",level:3}],l={toc:c},d="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"objects"},"Objects"),(0,a.kt)("h2",{id:"object-properties"},"Object properties"),(0,a.kt)("p",null,"Objects are defined with a type equal to ",(0,a.kt)("inlineCode",{parentName:"p"},"object")," and properties specified in the ",(0,a.kt)("inlineCode",{parentName:"p"},"properties")," keyword."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import { RJSFSchema } from '@rjsf/utils';\nimport validator from '@rjsf/validator-ajv8';\n\nconst schema: RJSFSchema = {\n  title: 'My title',\n  description: 'My description',\n  type: 'object',\n  properties: {\n    name: {\n      type: 'string',\n    },\n    age: {\n      type: 'number',\n    },\n  },\n};\n\nrender(<Form schema={schema} validator={validator} />, document.getElementById('app'));\n")),(0,a.kt)("h2",{id:"required-properties"},"Required properties"),(0,a.kt)("p",null,"You can specify which properties are required using the ",(0,a.kt)("inlineCode",{parentName:"p"},"required")," attribute:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import { RJSFSchema } from '@rjsf/utils';\nimport validator from '@rjsf/validator-ajv8';\n\nconst schema: RJSFSchema = {\n  title: 'My title',\n  description: 'My description',\n  type: 'object',\n  properties: {\n    name: {\n      type: 'string',\n    },\n    age: {\n      type: 'number',\n    },\n  },\n  required: ['name'],\n};\n\nrender(<Form schema={schema} validator={validator} />, document.getElementById('app'));\n")),(0,a.kt)("h2",{id:"specifying-property-order"},"Specifying property order"),(0,a.kt)("p",null,"Since the order of object properties in Javascript and JSON is not guaranteed, the ",(0,a.kt)("inlineCode",{parentName:"p"},"uiSchema")," object spec allows you to define the order in which properties are rendered using the ",(0,a.kt)("inlineCode",{parentName:"p"},"ui:order")," property:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import { RJSFSchema, UiSchema } from '@rjsf/utils';\nimport validator from '@rjsf/validator-ajv8';\n\nconst schema: RJSFSchema = {\n  type: 'object',\n  properties: {\n    foo: { type: 'string' },\n    bar: { type: 'string' },\n  },\n};\n\nconst uiSchema: UiSchema = {\n  'ui:order': ['bar', 'foo'],\n};\n\nrender(<Form schema={schema} uiSchema={uiSchema} validator={validator} />, document.getElementById('app'));\n")),(0,a.kt)("p",null,"If a guaranteed fixed order is only important for some fields, you can insert a wildcard ",(0,a.kt)("inlineCode",{parentName:"p"},'"*"')," item in your ",(0,a.kt)("inlineCode",{parentName:"p"},"ui:order")," definition. All fields that are not referenced explicitly anywhere in the list will be rendered at that point:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { UiSchema } from '@rjsf/utils';\n\nconst uiSchema: UiSchema = {\n  'ui:order': ['bar', '*'],\n};\n")),(0,a.kt)("h2",{id:"additional-properties"},"Additional properties"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"additionalProperties")," keyword allows the user to add properties with arbitrary key names. Set this keyword equal to a schema object:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import { RJSFSchema } from '@rjsf/utils';\nimport validator from '@rjsf/validator-ajv8';\n\nconst schema: RJSFSchema = {\n  type: 'object',\n  properties: {\n    name: {\n      type: 'string',\n    },\n  },\n  additionalProperties: {\n    type: 'number',\n    enum: [1, 2, 3],\n  },\n};\n\nrender(<Form schema={schema} validator={validator} />, document.getElementById('app'));\n")),(0,a.kt)("p",null,"In this way, an add button for new properties is shown by default."),(0,a.kt)("p",null,"You can also define ",(0,a.kt)("inlineCode",{parentName:"p"},"uiSchema")," options for ",(0,a.kt)("inlineCode",{parentName:"p"},"additionalProperties")," by setting the ",(0,a.kt)("inlineCode",{parentName:"p"},"additionalProperties")," attribute in the ",(0,a.kt)("inlineCode",{parentName:"p"},"uiSchema"),"."),(0,a.kt)("h3",{id:"expandable-option"},(0,a.kt)("inlineCode",{parentName:"h3"},"expandable")," option"),(0,a.kt)("p",null,"You can turn support for ",(0,a.kt)("inlineCode",{parentName:"p"},"additionalProperties")," off with the ",(0,a.kt)("inlineCode",{parentName:"p"},"expandable")," option in ",(0,a.kt)("inlineCode",{parentName:"p"},"uiSchema"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { UiSchema } from '@rjsf/utils';\n\nconst uiSchema: UiSchema = {\n  'ui:options': {\n    expandable: false,\n  },\n};\n")))}m.isMDXComponent=!0}}]);