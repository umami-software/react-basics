"use strict";(self.webpackChunkreact_basics=self.webpackChunkreact_basics||[]).push([[1737],{"./src/stories/Toggle.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:function(){return Basic},Disabled:function(){return Disabled},__namedExportsOrder:function(){return __namedExportsOrder}});var _Basic$parameters,_Basic$parameters2,_Basic$parameters2$do,_Disabled$parameters,_Disabled$parameters2,_Disabled$parameters3,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),_storybook_client_api__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("@storybook/client-api")),_index__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/index.ts"),_utils__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/stories/utils.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js");function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}__webpack_exports__.default={title:"Input/Toggle",component:_index__WEBPACK_IMPORTED_MODULE_3__.ZD};const Template=args=>{const[{checked:checked},updateArgs]=(0,_storybook_client_api__WEBPACK_IMPORTED_MODULE_2__.useArgs)();return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_index__WEBPACK_IMPORTED_MODULE_3__.ZD,_objectSpread(_objectSpread({},args),{},{checked:checked,onChecked:value=>updateArgs({checked:value})}))};Template.displayName="Template";const Basic=(0,_utils__WEBPACK_IMPORTED_MODULE_5__.q)(Template,{args:{children:"Toggle"}}),Disabled=(0,_utils__WEBPACK_IMPORTED_MODULE_5__.q)(Template,{args:{children:"Toggle",disabled:!0}});Basic.parameters=_objectSpread(_objectSpread({},Basic.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Basic$parameters=Basic.parameters)||void 0===_Basic$parameters?void 0:_Basic$parameters.docs),{},{source:_objectSpread({originalSource:"makeStory(Template, {\n  args: {\n    children: 'Toggle'\n  }\n})"},null===(_Basic$parameters2=Basic.parameters)||void 0===_Basic$parameters2||null===(_Basic$parameters2$do=_Basic$parameters2.docs)||void 0===_Basic$parameters2$do?void 0:_Basic$parameters2$do.source)})}),Disabled.parameters=_objectSpread(_objectSpread({},Disabled.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Disabled$parameters=Disabled.parameters)||void 0===_Disabled$parameters?void 0:_Disabled$parameters.docs),{},{source:_objectSpread({originalSource:"makeStory(Template, {\n  args: {\n    children: 'Toggle',\n    disabled: true\n  }\n})"},null===(_Disabled$parameters2=Disabled.parameters)||void 0===_Disabled$parameters2||null===(_Disabled$parameters3=_Disabled$parameters2.docs)||void 0===_Disabled$parameters3?void 0:_Disabled$parameters3.source)})});const __namedExportsOrder=["Basic","Disabled"]}}]);