"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/detail/[...params]",{

/***/ "./pages/detail/[...params].js":
/*!*************************************!*\
  !*** ./pages/detail/[...params].js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; },\n/* harmony export */   \"default\": function() { return /* binding */ detail; }\n/* harmony export */ });\n/* harmony import */ var _Users_hayeonkim_Desktop_Project_nextjs_emotionjs_glam_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/asyncToGenerator.js */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _Users_hayeonkim_Desktop_Project_nextjs_emotionjs_glam_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/regenerator/index.js */ \"./node_modules/next/dist/compiled/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_hayeonkim_Desktop_Project_nextjs_emotionjs_glam_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_hayeonkim_Desktop_Project_nextjs_emotionjs_glam_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _api_apis__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api/apis */ \"./pages/api/apis.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);\n\n\nvar _jsxFileName = \"/Users/hayeonkim/Desktop/Project/nextjs-emotionjs/glam/pages/detail/[...params].js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\nvar __N_SSP = true;\nfunction detail(_ref) {\n  _s();\n\n  var params = _ref.params;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]),\n      detail = _useState[0],\n      setDetail = _useState[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {\n    (0,_Users_hayeonkim_Desktop_Project_nextjs_emotionjs_glam_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( /*#__PURE__*/_Users_hayeonkim_Desktop_Project_nextjs_emotionjs_glam_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {\n      var list;\n      return _Users_hayeonkim_Desktop_Project_nextjs_emotionjs_glam_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.next = 2;\n              return _api_apis__WEBPACK_IMPORTED_MODULE_4__.apis.getSuggestions({\n                idx: params[0]\n              });\n\n            case 2:\n              list = _context.sent;\n              setDetail(list.data.data);\n\n            case 4:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }))();\n  }, []);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {}, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 14,\n    columnNumber: 5\n  }, this);\n}\n\n_s(detail, \"Q87NTtcO6ja+jWRof/W3uqX8zyg=\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9kZXRhaWwvWy4uLnBhcmFtc10uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOzs7QUFFZSxTQUFTSSxNQUFULE9BQTJCO0VBQUE7O0VBQUEsSUFBVEMsTUFBUyxRQUFUQSxNQUFTOztFQUN4QyxnQkFBNEJILCtDQUFRLENBQUMsRUFBRCxDQUFwQztFQUFBLElBQU9FLE1BQVA7RUFBQSxJQUFlRSxTQUFmOztFQUNBTCxnREFBUyxDQUFDLFlBQUk7SUFDWixxV0FBQztNQUFBO01BQUE7UUFBQTtVQUFBO1lBQUE7Y0FBQTtjQUFBLE9BQ29CRSwwREFBQSxDQUFvQjtnQkFBQ0ssR0FBRyxFQUFFSCxNQUFNLENBQUMsQ0FBRDtjQUFaLENBQXBCLENBRHBCOztZQUFBO2NBQ09JLElBRFA7Y0FFQ0gsU0FBUyxDQUFDRyxJQUFJLENBQUNDLElBQUwsQ0FBVUEsSUFBWCxDQUFUOztZQUZEO1lBQUE7Y0FBQTtVQUFBO1FBQUE7TUFBQTtJQUFBLENBQUQ7RUFJRCxDQUxRLEVBS1AsRUFMTyxDQUFUO0VBTUEsb0JBQ0U7SUFBQTtJQUFBO0lBQUE7RUFBQSxRQURGO0FBTUQ7O0dBZHVCTiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9kZXRhaWwvWy4uLnBhcmFtc10uanM/MmNlMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3VzZVJvdXRlcn0gZnJvbSAnbmV4dC9yb3V0ZXInOyBcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge2FwaXN9IGZyb20gJy4uL2FwaS9hcGlzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGV0YWlsICh7cGFyYW1zfSkge1xuICBjb25zdCBbZGV0YWlsLCBzZXREZXRhaWxdID0gdXNlU3RhdGUoW10pO1xuICB1c2VFZmZlY3QoKCk9PntcbiAgICAoYXN5bmMgKCkgPT4ge1xuICAgICAgY29uc3QgbGlzdCA9IGF3YWl0IGFwaXMuZ2V0U3VnZ2VzdGlvbnMoe2lkeDogcGFyYW1zWzBdfSk7XG4gICAgICBzZXREZXRhaWwobGlzdC5kYXRhLmRhdGEpO1xuICAgIH0pKCk7XG4gIH0sW10pXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIHsvKiA8RGV0YWlsSGVhZGVyPjwvRGV0YWlsSGVhZGVyPiAqL31cbiAgICAgIFxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoe3BhcmFtczp7cGFyYW1zfX0pe1xuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBwYXJhbXNcbiAgICB9XG4gIH1cbn0iXSwibmFtZXMiOlsidXNlUm91dGVyIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJhcGlzIiwiZGV0YWlsIiwicGFyYW1zIiwic2V0RGV0YWlsIiwiZ2V0U3VnZ2VzdGlvbnMiLCJpZHgiLCJsaXN0IiwiZGF0YSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/detail/[...params].js\n"));

/***/ })

});