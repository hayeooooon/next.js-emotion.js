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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; },\n/* harmony export */   \"default\": function() { return /* binding */ detail; }\n/* harmony export */ });\n/* harmony import */ var _Users_hayeonkim_Desktop_Project_nextjs_emotionjs_glam_node_modules_next_dist_compiled_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/taggedTemplateLiteral.js */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var _Users_hayeonkim_Desktop_Project_nextjs_emotionjs_glam_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/asyncToGenerator.js */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _Users_hayeonkim_Desktop_Project_nextjs_emotionjs_glam_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/regenerator/index.js */ \"./node_modules/next/dist/compiled/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_hayeonkim_Desktop_Project_nextjs_emotionjs_glam_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Users_hayeonkim_Desktop_Project_nextjs_emotionjs_glam_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @emotion/react */ \"./node_modules/@emotion/react/dist/emotion-react.browser.esm.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _api_apis__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../api/apis */ \"./pages/api/apis.js\");\n/* harmony import */ var _components_ImageSlider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/ImageSlider */ \"./components/ImageSlider.js\");\n/* harmony import */ var _components_DetailHeader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/DetailHeader */ \"./components/DetailHeader.js\");\n/* harmony import */ var _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @emotion/react/jsx-dev-runtime */ \"./node_modules/@emotion/react/jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.browser.esm.js\");\n\n\n\nvar _jsxFileName = \"/Users/hayeonkim/Desktop/Project/nextjs-emotionjs/glam/pages/detail/[...params].js\",\n    _s = $RefreshSig$(),\n    _templateObject;\n\n\n\n/** @jsxImportSource @emotion/react */\n\n\n\n\n\n\n\n\nvar __N_SSP = true;\nfunction detail(_ref) {\n  _s();\n\n  var params = _ref.params;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]),\n      detail = _useState[0],\n      setDetail = _useState[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function () {\n    (0,_Users_hayeonkim_Desktop_Project_nextjs_emotionjs_glam_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_Users_hayeonkim_Desktop_Project_nextjs_emotionjs_glam_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee() {\n      var list;\n      return _Users_hayeonkim_Desktop_Project_nextjs_emotionjs_glam_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.next = 2;\n              return _api_apis__WEBPACK_IMPORTED_MODULE_5__.apis.getSuggestions({\n                idx: params[0]\n              });\n\n            case 2:\n              list = _context.sent;\n              setDetail(list.data.data);\n\n            case 4:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }))();\n  }, []);\n  console.log(detail);\n  return (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {\n    children: [(0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_components_DetailHeader__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 7\n    }, this), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"div\", {\n      className: \"container\",\n      css: {\n        position: 'relative',\n        zIndex: 1\n      },\n      children: [(0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"section\", {\n        children: detail.photos ? (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_components_ImageSlider__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n          data: detail.photos,\n          css: {\n            zIndex: 1\n          }\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 24,\n          columnNumber: 29\n        }, this) : null\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 22,\n        columnNumber: 9\n      }, this), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"section\", {\n        className: \"inner\",\n        children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"div\", {\n          css: infoArea,\n          children: [(0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"h4\", {\n            children: [detail.name, \", \", detail.age, \" \", detail.verified && (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"i\", {}, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 29,\n              columnNumber: 65\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 29,\n            columnNumber: 13\n          }, this), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"p\", {\n            children: detail.work\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 30,\n            columnNumber: 13\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 28,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 27,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true);\n}\n\n_s(detail, \"Q87NTtcO6ja+jWRof/W3uqX8zyg=\");\n\nvar infoArea = (0,_emotion_react__WEBPACK_IMPORTED_MODULE_9__.css)(_templateObject || (_templateObject = (0,_Users_hayeonkim_Desktop_Project_nextjs_emotionjs_glam_node_modules_next_dist_compiled_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\nh4{\\n  position: relative;\\n  line-height: 1;\\n  font-size: 16px;\\n  font-weight: 700;\\n  margin: 14px 0;\\n  i{\\n    display: inline-block;\\n    position: relative;\\n    width: 14px;\\n    height: 14px;\\n    background-color: #54B767;\\n    border-radius: 50%;\\n    vertical-align: middle;\\n    margin-left: 6px;\\n    &::before{\\n      position: absolute;\\n      left: 0;\\n      right: 0;\\n      top: 50%;\\n      width: 3px;\\n      height: 6px;\\n      border-top: 2px solid #fff;\\n      border-left: 2px solid #fff;\\n      content: '';\\n      transform: rotate(-135deg);\\n      margin: -5px auto 0;\\n    }\\n  }\\n}\\n\"])));\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9kZXRhaWwvWy4uLnBhcmFtc10uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFFZSxTQUFTTyxNQUFULE9BQTJCO0VBQUE7O0VBQUEsSUFBVEMsTUFBUyxRQUFUQSxNQUFTOztFQUN4QyxnQkFBNEJMLCtDQUFRLENBQUMsRUFBRCxDQUFwQztFQUFBLElBQU9JLE1BQVA7RUFBQSxJQUFlRSxTQUFmOztFQUNBUCxnREFBUyxDQUFDLFlBQUk7SUFDWixxV0FBQztNQUFBO01BQUE7UUFBQTtVQUFBO1lBQUE7Y0FBQTtjQUFBLE9BQ29CRSwwREFBQSxDQUFvQjtnQkFBQ08sR0FBRyxFQUFFSCxNQUFNLENBQUMsQ0FBRDtjQUFaLENBQXBCLENBRHBCOztZQUFBO2NBQ09JLElBRFA7Y0FFQ0gsU0FBUyxDQUFDRyxJQUFJLENBQUNDLElBQUwsQ0FBVUEsSUFBWCxDQUFUOztZQUZEO1lBQUE7Y0FBQTtVQUFBO1FBQUE7TUFBQTtJQUFBLENBQUQ7RUFJRCxDQUxRLEVBS1AsRUFMTyxDQUFUO0VBTUFDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZUixNQUFaO0VBQ0EsT0FDRTtJQUFBLFdBQ0UsdUVBQUMsZ0VBQUQ7TUFBQTtNQUFBO01BQUE7SUFBQSxRQURGLEVBRUU7TUFBSyxTQUFTLEVBQUMsV0FBZjtNQUEyQixHQUFHLEVBQUU7UUFBQ1MsUUFBUSxFQUFFLFVBQVg7UUFBdUJDLE1BQU0sRUFBRTtNQUEvQixDQUFoQztNQUFBLFdBQ0U7UUFBQSxVQUVJVixNQUFNLENBQUNXLE1BQVAsR0FBZ0IsdUVBQUMsK0RBQUQ7VUFBYSxJQUFJLEVBQUVYLE1BQU0sQ0FBQ1csTUFBMUI7VUFBa0MsR0FBRyxFQUFFO1lBQUNELE1BQU0sRUFBRTtVQUFUO1FBQXZDO1VBQUE7VUFBQTtVQUFBO1FBQUEsUUFBaEIsR0FBd0U7TUFGNUU7UUFBQTtRQUFBO1FBQUE7TUFBQSxRQURGLEVBTUU7UUFBUyxTQUFTLEVBQUMsT0FBbkI7UUFBQSxVQUNFO1VBQUssR0FBRyxFQUFFRSxRQUFWO1VBQUEsV0FDRTtZQUFBLFdBQUtaLE1BQU0sQ0FBQ2EsSUFBWixRQUFvQmIsTUFBTSxDQUFDYyxHQUEzQixPQUFpQ2QsTUFBTSxDQUFDZSxRQUFQLElBQW1CO2NBQUE7Y0FBQTtjQUFBO1lBQUEsUUFBcEQ7VUFBQTtZQUFBO1lBQUE7WUFBQTtVQUFBLFFBREYsRUFFRTtZQUFBLFVBQUlmLE1BQU0sQ0FBQ2dCO1VBQVg7WUFBQTtZQUFBO1lBQUE7VUFBQSxRQUZGO1FBQUE7VUFBQTtVQUFBO1VBQUE7UUFBQTtNQURGO1FBQUE7UUFBQTtRQUFBO01BQUEsUUFORjtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUEsUUFGRjtFQUFBLGdCQURGO0FBa0JEOztHQTNCdUJoQjs7QUFxQ3hCLElBQU1ZLFFBQVEsR0FBR25CLG1EQUFILDIwQkFBZCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9kZXRhaWwvWy4uLnBhcmFtc10uanM/MmNlMiJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGpzeEltcG9ydFNvdXJjZSBAZW1vdGlvbi9yZWFjdCAqL1xuaW1wb3J0IHtjc3N9IGZyb20gJ0BlbW90aW9uL3JlYWN0JztcbmltcG9ydCB7dXNlUm91dGVyfSBmcm9tICduZXh0L3JvdXRlcic7IFxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7YXBpc30gZnJvbSAnLi4vYXBpL2FwaXMnO1xuaW1wb3J0IEltYWdlU2xpZGVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvSW1hZ2VTbGlkZXInO1xuaW1wb3J0IERldGFpbEhlYWRlciBmcm9tICcuLi8uLi9jb21wb25lbnRzL0RldGFpbEhlYWRlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRldGFpbCAoe3BhcmFtc30pIHtcbiAgY29uc3QgW2RldGFpbCwgc2V0RGV0YWlsXSA9IHVzZVN0YXRlKFtdKTtcbiAgdXNlRWZmZWN0KCgpPT57XG4gICAgKGFzeW5jICgpID0+IHtcbiAgICAgIGNvbnN0IGxpc3QgPSBhd2FpdCBhcGlzLmdldFN1Z2dlc3Rpb25zKHtpZHg6IHBhcmFtc1swXX0pO1xuICAgICAgc2V0RGV0YWlsKGxpc3QuZGF0YS5kYXRhKTtcbiAgICB9KSgpO1xuICB9LFtdKVxuICBjb25zb2xlLmxvZyhkZXRhaWwpXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxEZXRhaWxIZWFkZXI+PC9EZXRhaWxIZWFkZXI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyJyBjc3M9e3twb3NpdGlvbjogJ3JlbGF0aXZlJywgekluZGV4OiAxfX0+XG4gICAgICAgIDxzZWN0aW9uPlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGRldGFpbC5waG90b3MgPyA8SW1hZ2VTbGlkZXIgZGF0YT17ZGV0YWlsLnBob3Rvc30gY3NzPXt7ekluZGV4OiAxfX0vPiA6IG51bGxcbiAgICAgICAgICB9XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPSdpbm5lcic+XG4gICAgICAgICAgPGRpdiBjc3M9e2luZm9BcmVhfT5cbiAgICAgICAgICAgIDxoND57ZGV0YWlsLm5hbWV9LCB7ZGV0YWlsLmFnZX0ge2RldGFpbC52ZXJpZmllZCAmJiA8aT48L2k+fTwvaDQ+XG4gICAgICAgICAgICA8cD57ZGV0YWlsLndvcmt9PC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKHtwYXJhbXM6e3BhcmFtc319KXtcbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgcGFyYW1zXG4gICAgfVxuICB9XG59XG5cbmNvbnN0IGluZm9BcmVhID0gY3NzYFxuaDR7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbWFyZ2luOiAxNHB4IDA7XG4gIGl7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB3aWR0aDogMTRweDtcbiAgICBoZWlnaHQ6IDE0cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzU0Qjc2NztcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICBtYXJnaW4tbGVmdDogNnB4O1xuICAgICY6OmJlZm9yZXtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGxlZnQ6IDA7XG4gICAgICByaWdodDogMDtcbiAgICAgIHRvcDogNTAlO1xuICAgICAgd2lkdGg6IDNweDtcbiAgICAgIGhlaWdodDogNnB4O1xuICAgICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkICNmZmY7XG4gICAgICBib3JkZXItbGVmdDogMnB4IHNvbGlkICNmZmY7XG4gICAgICBjb250ZW50OiAnJztcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKC0xMzVkZWcpO1xuICAgICAgbWFyZ2luOiAtNXB4IGF1dG8gMDtcbiAgICB9XG4gIH1cbn1cbmAiXSwibmFtZXMiOlsiY3NzIiwidXNlUm91dGVyIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJhcGlzIiwiSW1hZ2VTbGlkZXIiLCJEZXRhaWxIZWFkZXIiLCJkZXRhaWwiLCJwYXJhbXMiLCJzZXREZXRhaWwiLCJnZXRTdWdnZXN0aW9ucyIsImlkeCIsImxpc3QiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsInBvc2l0aW9uIiwiekluZGV4IiwicGhvdG9zIiwiaW5mb0FyZWEiLCJuYW1lIiwiYWdlIiwidmVyaWZpZWQiLCJ3b3JrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/detail/[...params].js\n"));

/***/ })

});