"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./styles/reset.js":
/*!*************************!*\
  !*** ./styles/reset.js ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"reset\": function() { return /* binding */ reset; }\n/* harmony export */ });\n/* harmony import */ var _Users_hayeonkim_Desktop_Project_nextjs_emotionjs_glam_node_modules_next_dist_compiled_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/taggedTemplateLiteral.js */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/react */ \"./node_modules/@emotion/react/dist/emotion-react.browser.esm.js\");\n\n\nvar _templateObject;\n\n\nvar reset = (0,_emotion_react__WEBPACK_IMPORTED_MODULE_1__.css)(_templateObject || (_templateObject = (0,_Users_hayeonkim_Desktop_Project_nextjs_emotionjs_glam_node_modules_next_dist_compiled_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  html, body, div, span, applet, object, iframe,\\n  h1, h2, h3, h4, h5, h6, p, blockquote, pre,\\n  a, abbr, acronym, address, big, cite, code,\\n  del, dfn, em, img, ins, kbd, q, s, samp,\\n  small, strike, strong, sub, sup, tt, var,\\n  b, u, i, center,\\n  dl, dt, dd, ol, ul, li,\\n  fieldset, form, label, legend,\\n  table, caption, tbody, tfoot, thead, tr, th, td,\\n  article, aside, canvas, details, embed, \\n  figure, figcaption, footer, header, hgroup, \\n  menu, nav, output, ruby, section, summary,\\n  time, mark, audio, video {\\n    margin: 0;\\n    padding: 0;\\n    border: 0;\\n    font-size: 100%;\\n    vertical-align: baseline;\\n  }\\n  /* HTML5 display-role reset for older browsers */\\n  article, aside, details, figcaption, figure, \\n  footer, header, hgroup, menu, nav, section {\\n    display: block;\\n  }\\n  body {\\n    line-height: 1.2;\\n    font-family: 'Noto Sans KR', sans-serif;\\n    background-color: #e9e9e9;\\n    height: 100%;\\n    overflow: hidden;\\n  }\\n  ol, ul {\\n    list-style: none;\\n  }\\n  blockquote, q {\\n    quotes: none;\\n  }\\n  blockquote:before, blockquote:after,\\n  q:before, q:after {\\n    content: '';\\n    content: none;\\n  }\\n  table {\\n    border-collapse: collapse;\\n    border-spacing: 0;\\n  }\\n  a {\\n    color: #000;\\n    text-decoration: none;\\n  }\\n\\n  button {\\n    background-color: transparent;\\n    cursor: pointer;\\n    border: none;\\n  }\\n\\n  * {\\n    box-sizing: border-box;\\n  }\\n  .inner{\\n    width: 100%;\\n    padding: 0 12px;\\n    box-sizing: border-box;\\n  }\\n  .container{\\n    overflow: hidden;\\n    overflow-y: auto;\\n  }\\n\"])));\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdHlsZXMvcmVzZXQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQ08sSUFBTUMsS0FBSyxHQUFHRCxtREFBSCxzeERBQVgiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL3Jlc2V0LmpzPzA2NmEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3NzIH0gZnJvbSBcIkBlbW90aW9uL3JlYWN0XCI7XG5leHBvcnQgY29uc3QgcmVzZXQgPSBjc3NgXG4gIGh0bWwsIGJvZHksIGRpdiwgc3BhbiwgYXBwbGV0LCBvYmplY3QsIGlmcmFtZSxcbiAgaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgYmxvY2txdW90ZSwgcHJlLFxuICBhLCBhYmJyLCBhY3JvbnltLCBhZGRyZXNzLCBiaWcsIGNpdGUsIGNvZGUsXG4gIGRlbCwgZGZuLCBlbSwgaW1nLCBpbnMsIGtiZCwgcSwgcywgc2FtcCxcbiAgc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhcixcbiAgYiwgdSwgaSwgY2VudGVyLFxuICBkbCwgZHQsIGRkLCBvbCwgdWwsIGxpLFxuICBmaWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCxcbiAgdGFibGUsIGNhcHRpb24sIHRib2R5LCB0Zm9vdCwgdGhlYWQsIHRyLCB0aCwgdGQsXG4gIGFydGljbGUsIGFzaWRlLCBjYW52YXMsIGRldGFpbHMsIGVtYmVkLCBcbiAgZmlndXJlLCBmaWdjYXB0aW9uLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLCBcbiAgbWVudSwgbmF2LCBvdXRwdXQsIHJ1YnksIHNlY3Rpb24sIHN1bW1hcnksXG4gIHRpbWUsIG1hcmssIGF1ZGlvLCB2aWRlbyB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgYm9yZGVyOiAwO1xuICAgIGZvbnQtc2l6ZTogMTAwJTtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XG4gIH1cbiAgLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xuICBhcnRpY2xlLCBhc2lkZSwgZGV0YWlscywgZmlnY2FwdGlvbiwgZmlndXJlLCBcbiAgZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgbWVudSwgbmF2LCBzZWN0aW9uIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuICBib2R5IHtcbiAgICBsaW5lLWhlaWdodDogMS4yO1xuICAgIGZvbnQtZmFtaWx5OiAnTm90byBTYW5zIEtSJywgc2Fucy1zZXJpZjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTllOWU5O1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICB9XG4gIG9sLCB1bCB7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgfVxuICBibG9ja3F1b3RlLCBxIHtcbiAgICBxdW90ZXM6IG5vbmU7XG4gIH1cbiAgYmxvY2txdW90ZTpiZWZvcmUsIGJsb2NrcXVvdGU6YWZ0ZXIsXG4gIHE6YmVmb3JlLCBxOmFmdGVyIHtcbiAgICBjb250ZW50OiAnJztcbiAgICBjb250ZW50OiBub25lO1xuICB9XG4gIHRhYmxlIHtcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICAgIGJvcmRlci1zcGFjaW5nOiAwO1xuICB9XG4gIGEge1xuICAgIGNvbG9yOiAjMDAwO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgfVxuXG4gIGJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgfVxuXG4gICoge1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIH1cbiAgLmlubmVye1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDAgMTJweDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB9XG4gIC5jb250YWluZXJ7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xuICB9XG5gO1xuXG4iXSwibmFtZXMiOlsiY3NzIiwicmVzZXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./styles/reset.js\n"));

/***/ })

});