"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4497],{876:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var i=n(2784);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),p=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},c=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),m=p(n),c=a,h=m["".concat(s,".").concat(c)]||m[c]||d[c]||o;return n?i.createElement(h,l(l({ref:t},u),{},{components:n})):i.createElement(h,l({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=c;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r[m]="string"==typeof e?e:a,l[1]=r;for(var p=2;p<o;p++)l[p]=n[p];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}c.displayName="MDXCreateElement"},1242:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>r,toc:()=>p});var i=n(7896),a=(n(2784),n(876));const o={},l="uiSchema",r={unversionedId:"api-reference/uiSchema",id:"api-reference/uiSchema",title:"uiSchema",description:"JSON Schema is limited for describing how a given data type should be rendered as a form input component. That's why this library introduces the concept of uiSchema.",source:"@site/docs/api-reference/uiSchema.md",sourceDirName:"api-reference",slug:"/api-reference/uiSchema",permalink:"/react-jsonschema-form/docs/api-reference/uiSchema",draft:!1,editUrl:"https://github.com/rjsf-team/react-jsonschema-form/tree/main/packages/docs/docs/api-reference/uiSchema.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Semantic-UI Customization",permalink:"/react-jsonschema-form/docs/api-reference/themes/semantic-ui/uiSchema"},next:{title:"RJSF utility functions, constants and types",permalink:"/react-jsonschema-form/docs/api-reference/utility-functions"}},s={},p=[{value:"Exceptions to the equivalence",id:"exceptions-to-the-equivalence",level:2},{value:"ui:globalOptions",id:"uiglobaloptions",level:3},{value:"ui:rootFieldId",id:"uirootfieldid",level:3},{value:"ui:field",id:"uifield",level:3},{value:"ui:fieldReplacesAnyOrOneOf",id:"uifieldreplacesanyoroneof",level:3},{value:"ui:options",id:"uioptions",level:3},{value:"ui:XXX or ui:options.XXX",id:"uixxx-or-uioptionsxxx",level:2},{value:"widget",id:"widget",level:3},{value:"classNames",id:"classnames",level:3},{value:"style",id:"style",level:3},{value:"autocomplete",id:"autocomplete",level:3},{value:"autofocus",id:"autofocus",level:3},{value:"description",id:"description",level:3},{value:"disabled",id:"disabled",level:3},{value:"emptyValue",id:"emptyvalue",level:3},{value:"enumDisabled",id:"enumdisabled",level:3},{value:"filePreview",id:"filepreview",level:3},{value:"help",id:"help",level:3},{value:"hideError",id:"hideerror",level:3},{value:"inputType",id:"inputtype",level:3},{value:"label",id:"label",level:3},{value:"order",id:"order",level:3},{value:"placeholder",id:"placeholder",level:3},{value:"readonly",id:"readonly",level:3},{value:"rows",id:"rows",level:3},{value:"title",id:"title",level:3},{value:"submitButtonOptions",id:"submitbuttonoptions",level:3},{value:"<code>norender</code> option",id:"norender-option",level:4},{value:"<code>submitText</code> option",id:"submittext-option",level:4},{value:"<code>props</code> section",id:"props-section",level:4},{value:"<code>disabled</code> prop",id:"disabled-prop",level:5},{value:"<code>className</code> prop",id:"classname-prop",level:5},{value:"<code>duplicateKeySuffixSeparator</code> option",id:"duplicatekeysuffixseparator-option",level:2},{value:"Theme Options",id:"theme-options",level:2}],u={toc:p},m="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"uischema"},"uiSchema"),(0,a.kt)("p",null,"JSON Schema is limited for describing how a given data type should be rendered as a form input component. That's why this library introduces the concept of uiSchema."),(0,a.kt)("p",null,"A UI schema is basically an object literal providing information on ",(0,a.kt)("strong",{parentName:"p"},"how")," the form should be rendered, while the JSON schema tells ",(0,a.kt)("strong",{parentName:"p"},"what"),"."),(0,a.kt)("p",null,"The uiSchema object follows the tree structure of the form field hierarchy, and defines how each property should be rendered."),(0,a.kt)("p",null,"Note that almost every property within uiSchema can be rendered in one of two ways: ",(0,a.kt)("inlineCode",{parentName:"p"},'{"ui:options": {[property]: [value]}}'),", or ",(0,a.kt)("inlineCode",{parentName:"p"},'{"ui:[property]": value}'),"."),(0,a.kt)("p",null,"In other words, the following ",(0,a.kt)("inlineCode",{parentName:"p"},"uiSchema"),"s are equivalent:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "ui:title": "Title",\n  "ui:description": "Description",\n  "ui:classNames": "my-class",\n  "ui:submitButtonOptions": {\n    "props": {\n      "disabled": false,\n      "className": "btn btn-info"\n    },\n    "norender": false,\n    "submitText": "Submit"\n  }\n}\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "ui:options": {\n    "title": "Title",\n    "description": "Description",\n    "classNames": "my-class",\n    "submitButtonOptions": {\n      "props": {\n        "disabled": false,\n        "className": "btn btn-info"\n      },\n      "norender": false,\n      "submitText": "Submit"\n    }\n  }\n}\n')),(0,a.kt)("p",null,"For a full list of what is supported in the ",(0,a.kt)("inlineCode",{parentName:"p"},"uiSchema")," see the ",(0,a.kt)("inlineCode",{parentName:"p"},"UiSchema")," type in ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/rjsf-team/react-jsonschema-form/blob/main/packages/utils/src/types.ts"},"@rjsf/utils/types.ts"),".\nBe sure to pay attention to the hierarchical intersection to these other types: ",(0,a.kt)("inlineCode",{parentName:"p"},"UIOptionsBaseType")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"TemplatesType"),"."),(0,a.kt)("h2",{id:"exceptions-to-the-equivalence"},"Exceptions to the equivalence"),(0,a.kt)("p",null,"There are 4 properties that exist in a ",(0,a.kt)("inlineCode",{parentName:"p"},"UiSchema")," that will not be found in an inner ",(0,a.kt)("inlineCode",{parentName:"p"},"ui:options")," object."),(0,a.kt)("h3",{id:"uiglobaloptions"},"ui:globalOptions"),(0,a.kt)("p",null,"The set of globally relevant ",(0,a.kt)("inlineCode",{parentName:"p"},"UiSchema")," options that are read from the root-level ",(0,a.kt)("inlineCode",{parentName:"p"},"UiSchema")," and stored in the ",(0,a.kt)("inlineCode",{parentName:"p"},"registry")," for use everywhere."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { UiSchema } from '@rjsf/utils';\n\nconst uiSchema: UiSchema = {\n  'ui:globalOptions': { copyable: true },\n};\n")),(0,a.kt)("h3",{id:"uirootfieldid"},"ui:rootFieldId"),(0,a.kt)("p",null,"By default, this library will generate ids unique to the form for all rendered widgets.\nIf you plan on using multiple instances of the ",(0,a.kt)("inlineCode",{parentName:"p"},"Form")," component in a same page, it's wise to declare a root prefix for these, using the ",(0,a.kt)("inlineCode",{parentName:"p"},"ui:rootFieldId")," uiSchema directive:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { UiSchema } from '@rjsf/utils';\n\nconst uiSchema: UiSchema = {\n  'ui:rootFieldId': 'myform',\n};\n")),(0,a.kt)("p",null,"This will make all widgets have an id prefixed with ",(0,a.kt)("inlineCode",{parentName:"p"},"myform"),"."),(0,a.kt)("h3",{id:"uifield"},"ui:field"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"ui:field")," property overrides the ",(0,a.kt)("inlineCode",{parentName:"p"},"Field")," implementation used for rendering any field in the form's hierarchy.\nSpecify either the name of a field that is used to look up an implementation from the ",(0,a.kt)("inlineCode",{parentName:"p"},"fields")," list or an actual one-off ",(0,a.kt)("inlineCode",{parentName:"p"},"Field")," component implementation itself."),(0,a.kt)("p",null,"See ",(0,a.kt)("a",{parentName:"p",href:"/react-jsonschema-form/docs/advanced-customization/custom-widgets-fields#custom-field-components"},"Custom Widgets and Fields")," for more information about how to use this property."),(0,a.kt)("h3",{id:"uifieldreplacesanyoroneof"},"ui:fieldReplacesAnyOrOneOf"),(0,a.kt)("p",null,"By default, any field that is rendered for an ",(0,a.kt)("inlineCode",{parentName:"p"},"anyOf"),"/",(0,a.kt)("inlineCode",{parentName:"p"},"oneOf")," schema will be wrapped inside the ",(0,a.kt)("inlineCode",{parentName:"p"},"AnyOfField")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"OneOfField")," component.\nThis default behavior may be undesirable if your custom field already handles behavior related to choosing one or more subschemas contained in the ",(0,a.kt)("inlineCode",{parentName:"p"},"anyOf"),"/",(0,a.kt)("inlineCode",{parentName:"p"},"oneOf")," schema.\nBy providing a ",(0,a.kt)("inlineCode",{parentName:"p"},"true")," value for this flag in association with a custom ",(0,a.kt)("inlineCode",{parentName:"p"},"ui:field"),", the wrapped components will be omitted, so just one instance of the custom field will be rendered.\nIf the flag is omitted or set to ",(0,a.kt)("inlineCode",{parentName:"p"},"false"),", your custom field will be wrapped by ",(0,a.kt)("inlineCode",{parentName:"p"},"AnyOfField"),"/",(0,a.kt)("inlineCode",{parentName:"p"},"OneOfField"),"."),(0,a.kt)("h3",{id:"uioptions"},"ui:options"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"ui:options")," property cannot be nested inside itself and thus is the last exception."),(0,a.kt)("h2",{id:"uixxx-or-uioptionsxxx"},"ui:XXX or ui:options.XXX"),(0,a.kt)("p",null,"All the properties that follow can be specified in the ",(0,a.kt)("inlineCode",{parentName:"p"},"uiSchema")," in either of the two equivalent ways."),(0,a.kt)("p",null,"NOTE: The properties specific to array items can be found ",(0,a.kt)("a",{parentName:"p",href:"/react-jsonschema-form/docs/json-schema/arrays#array-item-uiSchema-options"},"here")),(0,a.kt)("h3",{id:"widget"},"widget"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"ui:widget")," property overrides the ",(0,a.kt)("inlineCode",{parentName:"p"},"Widget")," implementation used for rendering any field in the form's hierarchy.\nSpecify either the name of a widget that is used to look up an implementation from the ",(0,a.kt)("inlineCode",{parentName:"p"},"widgets")," list or an actual one-off ",(0,a.kt)("inlineCode",{parentName:"p"},"Widget")," component implementation itself."),(0,a.kt)("p",null,"See ",(0,a.kt)("a",{parentName:"p",href:"/react-jsonschema-form/docs/advanced-customization/custom-widgets-fields"},"Custom Widgets and Fields")," for more information about how to use this property."),(0,a.kt)("h3",{id:"classnames"},"classNames"),(0,a.kt)("p",null,"The uiSchema object accepts a ",(0,a.kt)("inlineCode",{parentName:"p"},"ui:classNames")," property for each field of the schema:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import { UiSchema } from '@rjsf/utils';\n\nconst uiSchema = {\n  title: {\n    'ui:classNames': 'task-title foo-bar',\n  },\n};\n")),(0,a.kt)("p",null,"Will result in:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<div class="field field-string task-title foo-bar">\n  <label>\n    <span>Title*</span>\n    <input value="My task" required="" type="text" />\n  </label>\n</div>\n')),(0,a.kt)("h3",{id:"style"},"style"),(0,a.kt)("p",null,"The uiSchema object accepts a ",(0,a.kt)("inlineCode",{parentName:"p"},"ui:style")," property for each field of the schema:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import { UiSchema } from '@rjsf/utils';\n\nconst uiSchema = {\n  title: {\n    'ui:style': { color: 'red' },\n  },\n};\n")),(0,a.kt)("p",null,"Will result in:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<div class="field field-string task-title" style={{ color: "red" }}>\n  <label>\n    <span>Title*</span>\n    <input value="My task" required="" type="text">\n  </label>\n</div>\n')),(0,a.kt)("h3",{id:"autocomplete"},"autocomplete"),(0,a.kt)("p",null,"If you want to mark a text input, select or textarea input to use the HTML autocomplete feature, set the ",(0,a.kt)("inlineCode",{parentName:"p"},"ui:autocomplete")," uiSchema directive to a valid ",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete#values"},"HTML autocomplete value"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import { RJSFSchema, UiSchema } from '@rjsf/utils';\n\nconst schema: RJSFSchema = { type: 'string' };\nconst uiSchema: UiSchema = {\n  'ui:widget': 'textarea',\n  'ui:autocomplete': 'on',\n};\n")),(0,a.kt)("h3",{id:"autofocus"},"autofocus"),(0,a.kt)("p",null,"If you want to automatically focus on a text input or textarea input, set the ",(0,a.kt)("inlineCode",{parentName:"p"},"ui:autofocus")," uiSchema directive to ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import { RJSFSchema, UiSchema } from '@rjsf/utils';\n\nconst schema: RJSFSchema = { type: 'string' };\nconst uiSchema: UiSchema = {\n  'ui:widget': 'textarea',\n  'ui:autofocus': true,\n};\n")),(0,a.kt)("h3",{id:"description"},"description"),(0,a.kt)("p",null,"Sometimes it's convenient to change the description of a field. This is the purpose of the ",(0,a.kt)("inlineCode",{parentName:"p"},"ui:description")," uiSchema directive:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import { RJSFSchema, UiSchema } from '@rjsf/utils';\n\nconst schema: RJSFSchema = { type: 'string' };\nconst uiSchema: UiSchema = {\n  'ui:widget': 'password',\n  'ui:description': 'The best password',\n};\n")),(0,a.kt)("h3",{id:"disabled"},"disabled"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"ui:disabled")," uiSchema directive will disable all child widgets from a given field."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Note: If you're wondering about the difference between a ",(0,a.kt)("inlineCode",{parentName:"p"},"disabled")," field and a ",(0,a.kt)("inlineCode",{parentName:"p"},"readonly")," one: Marking a field as read-only will render it greyed out, but its text value will be selectable. Disabling it will prevent its value to be selected at all.")),(0,a.kt)("h3",{id:"emptyvalue"},"emptyValue"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"ui:emptyValue")," uiSchema directive provides the default value to use when an input for a field is empty"),(0,a.kt)("h3",{id:"enumdisabled"},"enumDisabled"),(0,a.kt)("p",null,"To disable an option, use the ",(0,a.kt)("inlineCode",{parentName:"p"},"enumDisabled")," property in uiSchema."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import { RJSFSchema, UiSchema } from '@rjsf/utils';\n\nconst schema: RJSFSchema = {\n  type: 'string',\n  enum: ['one', 'two', 'three'],\n};\n\nconst uiSchema: UiSchema = {\n  'ui:enumDisabled': ['two'],\n};\n")),(0,a.kt)("h3",{id:"filepreview"},"filePreview"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"FileWidget")," can be configured to show a preview of an image or a download link for non-images using this flag."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import { RJSFSchema, UiSchema } from '@rjsf/utils';\n\nconst schema: RJSFSchema = {\n  type: 'string',\n  format: 'data-url',\n};\nconst uiSchema: UiSchema = {\n  'ui:options': {\n    filePreview: true,\n  },\n};\n")),(0,a.kt)("h3",{id:"help"},"help"),(0,a.kt)("p",null,"Sometimes it's convenient to add text next to a field to guide the end user filling it. This is the purpose of the ",(0,a.kt)("inlineCode",{parentName:"p"},"ui:help")," uiSchema directive:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import { RJSFSchema, UiSchema } from '@rjsf/utils';\n\nconst schema: RJSFSchema = { type: 'string' };\nconst uiSchema: UiSchema = {\n  'ui:widget': 'password',\n  'ui:help': 'Hint: Make it strong!',\n};\n")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://i.imgur.com/scJUuZo.png",alt:null})),(0,a.kt)("p",null,"Help texts work for any kind of field at any level, and will always be rendered immediately below the field component widget(s) (after contextualized errors, if any)."),(0,a.kt)("h3",{id:"hideerror"},"hideError"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"ui:hideError")," uiSchema directive will, if set to ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),", hide the default error display for the given field AND all of its child fields in the hierarchy."),(0,a.kt)("p",null,"If you need to enable the default error display of a child in the hierarchy after setting ",(0,a.kt)("inlineCode",{parentName:"p"},"hideError: true")," on the parent field, simply set ",(0,a.kt)("inlineCode",{parentName:"p"},"hideError: false")," on the child."),(0,a.kt)("p",null,"This is useful when you have a custom field or widget that utilizes either the ",(0,a.kt)("inlineCode",{parentName:"p"},"rawErrors")," or the ",(0,a.kt)("inlineCode",{parentName:"p"},"errorSchema")," to manipulate and/or show the error(s) for the field/widget itself."),(0,a.kt)("h3",{id:"inputtype"},"inputType"),(0,a.kt)("p",null,"To change the input type (for example, ",(0,a.kt)("inlineCode",{parentName:"p"},"tel")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"email"),") you can specify the ",(0,a.kt)("inlineCode",{parentName:"p"},"inputType")," in the ",(0,a.kt)("inlineCode",{parentName:"p"},"ui:options")," uiSchema directive."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import { RJSFSchema, UiSchema } from '@rjsf/utils';\n\nconst schema: RJSFSchema = { type: 'string' };\nconst uiSchema: UiSchema = {\n  'ui:options': {\n    inputType: 'tel',\n  },\n};\n")),(0,a.kt)("h3",{id:"label"},"label"),(0,a.kt)("p",null,"Field labels are rendered by default.\nLabels may be omitted on a per-field by setting the ",(0,a.kt)("inlineCode",{parentName:"p"},"label")," option to ",(0,a.kt)("inlineCode",{parentName:"p"},"false")," in the ",(0,a.kt)("inlineCode",{parentName:"p"},"ui:options")," uiSchema directive."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import { RJSFSchema, UiSchema } from '@rjsf/utils';\nimport validator from '@rjsf/validator-ajv8';\n\nconst schema: RJSFSchema = { type: 'string' };\nconst uiSchema: UiSchema = {\n  'ui:options': {\n    label: false,\n  },\n};\n\nrender(<Form schema={schema} uiSchema={uiSchema} validator={validator} />, document.getElementById('app'));\n")),(0,a.kt)("p",null,"They can also be omitted globally by setting the ",(0,a.kt)("inlineCode",{parentName:"p"},"label")," option to ",(0,a.kt)("inlineCode",{parentName:"p"},"false")," in the ",(0,a.kt)("inlineCode",{parentName:"p"},"ui:globalOptions")," uiSchema directive."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import { RJSFSchema, UiSchema } from '@rjsf/utils';\nimport validator from '@rjsf/validator-ajv8';\n\nconst schema: RJSFSchema = { type: 'string' };\nconst uiSchema: UiSchema = {\n  'ui:globalOptions': {\n    label: false,\n  },\n};\n\nrender(<Form schema={schema} uiSchema={uiSchema} validator={validator} />, document.getElementById('app'));\n")),(0,a.kt)("h3",{id:"order"},"order"),(0,a.kt)("p",null,"This property allows you to reorder the properties that are shown for a particular object. See ",(0,a.kt)("a",{parentName:"p",href:"/react-jsonschema-form/docs/json-schema/objects"},"Objects")," for more information."),(0,a.kt)("h3",{id:"placeholder"},"placeholder"),(0,a.kt)("p",null,"You can add placeholder text to an input by using the ",(0,a.kt)("inlineCode",{parentName:"p"},"ui:placeholder")," uiSchema directive:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import { RJSFSchema, UiSchema } from '@rjsf/utils';\nimport validator from '@rjsf/validator-ajv8';\n\nconst schema: RJSFSchema = { type: 'string', format: 'uri' };\nconst uiSchema: UiSchema = {\n  'ui:placeholder': 'http://',\n};\n\nrender(<Form schema={schema} uiSchema={uiSchema} validator={validator} />, document.getElementById('app'));\n")),(0,a.kt)("p",null,"Fields using ",(0,a.kt)("inlineCode",{parentName:"p"},"enum")," can also use ",(0,a.kt)("inlineCode",{parentName:"p"},"ui:placeholder"),". The value will be used as the text for the empty option in the select widget."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import { RJSFSchema, UiSchema } from '@rjsf/utils';\nimport validator from '@rjsf/validator-ajv8';\n\nconst schema: RJSFSchema = { type: 'string', enum: ['First', 'Second'] };\nconst uiSchema: UiSchema = {\n  'ui:placeholder': 'Choose an option',\n};\n\nrender(<Form schema={schema} uiSchema={uiSchema} validator={validator} />, document.getElementById('app'));\n")),(0,a.kt)("h3",{id:"readonly"},"readonly"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"ui:readonly")," uiSchema directive will mark all child widgets from a given field as read-only. This is equivalent to setting the ",(0,a.kt)("inlineCode",{parentName:"p"},"readOnly")," property in the schema."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Note: If you're wondering about the difference between a ",(0,a.kt)("inlineCode",{parentName:"p"},"disabled")," field and a ",(0,a.kt)("inlineCode",{parentName:"p"},"readonly")," one: Marking a field as read-only will render it greyed out, but its text value will be selectable. Disabling it will prevent its value to be selected at all.")),(0,a.kt)("h3",{id:"rows"},"rows"),(0,a.kt)("p",null,"You can set the initial height of a textarea widget by specifying ",(0,a.kt)("inlineCode",{parentName:"p"},"rows")," option."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import { RJSFSchema, UiSchema } from '@rjsf/utils';\nimport validator from '@rjsf/validator-ajv8';\n\nconst schema: RJSFSchema = { type: 'string' };\nconst uiSchema: UiSchema = {\n  'ui:options': {\n    widget: 'textarea',\n    rows: 15,\n  },\n};\n\nrender(<Form schema={schema} uiSchema={uiSchema} validator={validator} />, document.getElementById('app'));\n")),(0,a.kt)("h3",{id:"title"},"title"),(0,a.kt)("p",null,"Sometimes it's convenient to change a field's title. This is the purpose of the ",(0,a.kt)("inlineCode",{parentName:"p"},"ui:title")," uiSchema directive:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import { RJSFSchema, UiSchema } from '@rjsf/utils';\n\nconst schema: RJSFSchema = { type: 'string' };\nconst uiSchema: UiSchema = {\n  'ui:widget': 'password',\n  'ui:title': 'Your password',\n};\n")),(0,a.kt)("h3",{id:"submitbuttonoptions"},"submitButtonOptions"),(0,a.kt)("p",null,"Sometimes it's convenient to change the behavior of the submit button for the form. This is the purpose of the ",(0,a.kt)("inlineCode",{parentName:"p"},"ui:submitButtonOptions")," uiSchema directive:"),(0,a.kt)("p",null,"You can pass any other prop to the submit button if you want, by default, this library will set the following options / props mentioned below for all submit buttons:"),(0,a.kt)("h4",{id:"norender-option"},(0,a.kt)("inlineCode",{parentName:"h4"},"norender")," option"),(0,a.kt)("p",null,"You can set this property to ",(0,a.kt)("inlineCode",{parentName:"p"},"true")," to remove the submit button completely from the form. Nice option, if the form is just for viewing purposes."),(0,a.kt)("h4",{id:"submittext-option"},(0,a.kt)("inlineCode",{parentName:"h4"},"submitText")," option"),(0,a.kt)("p",null,'You can use this option to change the text of the submit button. Set to "Submit" by default.'),(0,a.kt)("h4",{id:"props-section"},(0,a.kt)("inlineCode",{parentName:"h4"},"props")," section"),(0,a.kt)("p",null,"You can pass any other prop to the submit button if you want, via this section."),(0,a.kt)("h5",{id:"disabled-prop"},(0,a.kt)("inlineCode",{parentName:"h5"},"disabled")," prop"),(0,a.kt)("p",null,"You can use this option to disable the submit button."),(0,a.kt)("h5",{id:"classname-prop"},(0,a.kt)("inlineCode",{parentName:"h5"},"className")," prop"),(0,a.kt)("p",null,"You can use this option to specify a class name for the submit button."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import { UiSchema } from '@rjsf/utils';\n\nconst uiSchema: UiSchema = {\n  'ui:submitButtonOptions': {\n    props: {\n      disabled: false,\n      className: 'btn btn-info',\n    },\n    norender: false,\n    submitText: 'Submit',\n  },\n};\n")),(0,a.kt)("h2",{id:"duplicatekeysuffixseparator-option"},(0,a.kt)("inlineCode",{parentName:"h2"},"duplicateKeySuffixSeparator")," option"),(0,a.kt)("p",null,"When using ",(0,a.kt)("inlineCode",{parentName:"p"},"additionalProperties"),", key collision is prevented by appending a unique integer suffix to the duplicate key.\nFor example, when you add a key named ",(0,a.kt)("inlineCode",{parentName:"p"},"myKey")," to a form where ",(0,a.kt)("inlineCode",{parentName:"p"},"myKey")," is already defined, then your new key will become ",(0,a.kt)("inlineCode",{parentName:"p"},"myKey-1"),".\nYou can use ",(0,a.kt)("inlineCode",{parentName:"p"},"ui:duplicateKeySuffixSeparator")," to override the default separator, ",(0,a.kt)("inlineCode",{parentName:"p"},'"-"')," with a string of your choice on a per-field basis."),(0,a.kt)("p",null,"You can also set this in the ",(0,a.kt)("inlineCode",{parentName:"p"},"ui:globalOptions")," to have the same separator used everywhere."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { UiSchema } from '@rjsf/utils';\n\nconst uiSchema = {\n  'ui:globalOptions': {\n    duplicateKeySuffixSeparator: '_',\n  },\n};\n")),(0,a.kt)("h2",{id:"theme-options"},"Theme Options"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/react-jsonschema-form/docs/api-reference/themes/antd/uiSchema"},"AntD Customization")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/react-jsonschema-form/docs/api-reference/themes/chakra-ui/uiSchema"},"Chakra-UI Customization")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/react-jsonschema-form/docs/api-reference/themes/semantic-ui/uiSchema"},"Semantic-UI Customization"))))}d.isMDXComponent=!0}}]);