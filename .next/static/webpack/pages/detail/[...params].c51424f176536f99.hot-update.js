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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; },\n/* harmony export */   \"default\": function() { return /* binding */ detail; }\n/* harmony export */ });\n/* harmony import */ var _Users_hayeonkim_Desktop_Project_nextjs_emotionjs_glam_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/asyncToGenerator.js */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _Users_hayeonkim_Desktop_Project_nextjs_emotionjs_glam_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/regenerator/index.js */ \"./node_modules/next/dist/compiled/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_hayeonkim_Desktop_Project_nextjs_emotionjs_glam_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_hayeonkim_Desktop_Project_nextjs_emotionjs_glam_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _api_apis__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api/apis */ \"./pages/api/apis.js\");\n/* harmony import */ var _components_ImageSlider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/ImageSlider */ \"./components/ImageSlider.js\");\n/* harmony import */ var _components_DetailHeader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/DetailHeader */ \"./components/DetailHeader.js\");\n/* harmony import */ var _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @emotion/react/jsx-dev-runtime */ \"./node_modules/@emotion/react/jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.browser.esm.js\");\n\n\nvar _jsxFileName = \"/Users/hayeonkim/Desktop/Project/nextjs-emotionjs/glam/pages/detail/[...params].js\",\n    _s = $RefreshSig$();\n\n\n\n/** @jsxImportSource @emotion/react */\n\n\n\n\n\n\n\n\nvar __N_SSP = true;\nfunction detail(_ref) {\n  _s();\n\n  var params = _ref.params;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]),\n      detail = _useState[0],\n      setDetail = _useState[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {\n    (0,_Users_hayeonkim_Desktop_Project_nextjs_emotionjs_glam_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( /*#__PURE__*/_Users_hayeonkim_Desktop_Project_nextjs_emotionjs_glam_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {\n      var list;\n      return _Users_hayeonkim_Desktop_Project_nextjs_emotionjs_glam_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.next = 2;\n              return _api_apis__WEBPACK_IMPORTED_MODULE_4__.apis.getSuggestions({\n                idx: params[0]\n              });\n\n            case 2:\n              list = _context.sent;\n              setDetail(list.data.data);\n\n            case 4:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }))();\n  }, []);\n  console.log(detail.photos);\n  return (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {\n    children: [(0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_components_DetailHeader__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 7\n    }, this), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"div\", {\n      className: \"container\",\n      css: {\n        position: 'relative',\n        zIndex: 1\n      },\n      children: [(0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"section\", {\n        children: detail.photos ? (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_components_ImageSlider__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n          data: detail.photos,\n          css: {\n            zIndex: 1\n          }\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 24,\n          columnNumber: 29\n        }, this) : null\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 22,\n        columnNumber: 9\n      }, this), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"sectioin\", {\n        className: \"inner\",\n        children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"h4\", {\n          children: [detail.name, \", \", detail.age, \" \", detail.verified && (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"i\", {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 28,\n            columnNumber: 63\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 28,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 27,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true);\n}\n\n_s(detail, \"Q87NTtcO6ja+jWRof/W3uqX8zyg=\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9kZXRhaWwvWy4uLnBhcmFtc10uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUVlLFNBQVNPLE1BQVQsT0FBMkI7RUFBQTs7RUFBQSxJQUFUQyxNQUFTLFFBQVRBLE1BQVM7O0VBQ3hDLGdCQUE0QkwsK0NBQVEsQ0FBQyxFQUFELENBQXBDO0VBQUEsSUFBT0ksTUFBUDtFQUFBLElBQWVFLFNBQWY7O0VBQ0FQLGdEQUFTLENBQUMsWUFBSTtJQUNaLHFXQUFDO01BQUE7TUFBQTtRQUFBO1VBQUE7WUFBQTtjQUFBO2NBQUEsT0FDb0JFLDBEQUFBLENBQW9CO2dCQUFDTyxHQUFHLEVBQUVILE1BQU0sQ0FBQyxDQUFEO2NBQVosQ0FBcEIsQ0FEcEI7O1lBQUE7Y0FDT0ksSUFEUDtjQUVDSCxTQUFTLENBQUNHLElBQUksQ0FBQ0MsSUFBTCxDQUFVQSxJQUFYLENBQVQ7O1lBRkQ7WUFBQTtjQUFBO1VBQUE7UUFBQTtNQUFBO0lBQUEsQ0FBRDtFQUlELENBTFEsRUFLUCxFQUxPLENBQVQ7RUFNQUMsT0FBTyxDQUFDQyxHQUFSLENBQVlSLE1BQU0sQ0FBQ1MsTUFBbkI7RUFDQSxPQUNFO0lBQUEsV0FDRSx1RUFBQyxnRUFBRDtNQUFBO01BQUE7TUFBQTtJQUFBLFFBREYsRUFFRTtNQUFLLFNBQVMsRUFBQyxXQUFmO01BQTJCLEdBQUcsRUFBRTtRQUFDQyxRQUFRLEVBQUUsVUFBWDtRQUF1QkMsTUFBTSxFQUFFO01BQS9CLENBQWhDO01BQUEsV0FDRTtRQUFBLFVBRUlYLE1BQU0sQ0FBQ1MsTUFBUCxHQUFnQix1RUFBQywrREFBRDtVQUFhLElBQUksRUFBRVQsTUFBTSxDQUFDUyxNQUExQjtVQUFrQyxHQUFHLEVBQUU7WUFBQ0UsTUFBTSxFQUFFO1VBQVQ7UUFBdkM7VUFBQTtVQUFBO1VBQUE7UUFBQSxRQUFoQixHQUF3RTtNQUY1RTtRQUFBO1FBQUE7UUFBQTtNQUFBLFFBREYsRUFNRTtRQUFVLFNBQVMsRUFBQyxPQUFwQjtRQUFBLFVBQ0U7VUFBQSxXQUFLWCxNQUFNLENBQUNZLElBQVosUUFBb0JaLE1BQU0sQ0FBQ2EsR0FBM0IsT0FBaUNiLE1BQU0sQ0FBQ2MsUUFBUCxJQUFtQjtZQUFBO1lBQUE7WUFBQTtVQUFBLFFBQXBEO1FBQUE7VUFBQTtVQUFBO1VBQUE7UUFBQTtNQURGO1FBQUE7UUFBQTtRQUFBO01BQUEsUUFORjtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUEsUUFGRjtFQUFBLGdCQURGO0FBZUQ7O0dBeEJ1QmQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZGV0YWlsL1suLi5wYXJhbXNdLmpzPzJjZTIiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3hJbXBvcnRTb3VyY2UgQGVtb3Rpb24vcmVhY3QgKi9cbmltcG9ydCB7Y3NzfSBmcm9tICdAZW1vdGlvbi9yZWFjdCc7XG5pbXBvcnQge3VzZVJvdXRlcn0gZnJvbSAnbmV4dC9yb3V0ZXInOyBcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge2FwaXN9IGZyb20gJy4uL2FwaS9hcGlzJztcbmltcG9ydCBJbWFnZVNsaWRlciBmcm9tICcuLi8uLi9jb21wb25lbnRzL0ltYWdlU2xpZGVyJztcbmltcG9ydCBEZXRhaWxIZWFkZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9EZXRhaWxIZWFkZXInO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkZXRhaWwgKHtwYXJhbXN9KSB7XG4gIGNvbnN0IFtkZXRhaWwsIHNldERldGFpbF0gPSB1c2VTdGF0ZShbXSk7XG4gIHVzZUVmZmVjdCgoKT0+e1xuICAgIChhc3luYyAoKSA9PiB7XG4gICAgICBjb25zdCBsaXN0ID0gYXdhaXQgYXBpcy5nZXRTdWdnZXN0aW9ucyh7aWR4OiBwYXJhbXNbMF19KTtcbiAgICAgIHNldERldGFpbChsaXN0LmRhdGEuZGF0YSk7XG4gICAgfSkoKTtcbiAgfSxbXSlcbiAgY29uc29sZS5sb2coZGV0YWlsLnBob3RvcylcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPERldGFpbEhlYWRlcj48L0RldGFpbEhlYWRlcj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXInIGNzcz17e3Bvc2l0aW9uOiAncmVsYXRpdmUnLCB6SW5kZXg6IDF9fT5cbiAgICAgICAgPHNlY3Rpb24+XG4gICAgICAgICAge1xuICAgICAgICAgICAgZGV0YWlsLnBob3RvcyA/IDxJbWFnZVNsaWRlciBkYXRhPXtkZXRhaWwucGhvdG9zfSBjc3M9e3t6SW5kZXg6IDF9fS8+IDogbnVsbFxuICAgICAgICAgIH1cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICA8c2VjdGlvaW4gY2xhc3NOYW1lPSdpbm5lcic+XG4gICAgICAgICAgPGg0PntkZXRhaWwubmFtZX0sIHtkZXRhaWwuYWdlfSB7ZGV0YWlsLnZlcmlmaWVkICYmIDxpPjwvaT59PC9oND5cbiAgICAgICAgPC9zZWN0aW9pbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoe3BhcmFtczp7cGFyYW1zfX0pe1xuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBwYXJhbXNcbiAgICB9XG4gIH1cbn1cblxuIl0sIm5hbWVzIjpbImNzcyIsInVzZVJvdXRlciIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiYXBpcyIsIkltYWdlU2xpZGVyIiwiRGV0YWlsSGVhZGVyIiwiZGV0YWlsIiwicGFyYW1zIiwic2V0RGV0YWlsIiwiZ2V0U3VnZ2VzdGlvbnMiLCJpZHgiLCJsaXN0IiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJwaG90b3MiLCJwb3NpdGlvbiIsInpJbmRleCIsIm5hbWUiLCJhZ2UiLCJ2ZXJpZmllZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/detail/[...params].js\n"));

/***/ })

});