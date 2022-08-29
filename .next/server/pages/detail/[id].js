"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/detail/[id]";
exports.ids = ["pages/detail/[id]"];
exports.modules = {

/***/ "./pages/api/apis.js":
/*!***************************!*\
  !*** ./pages/api/apis.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"apis\": () => (/* binding */ apis)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\nconst instance = axios__WEBPACK_IMPORTED_MODULE_0___default().create({\n  baseURL: 'http://localhost:3000/'\n});\nconst apis = {\n  // main\n  getSuggestions: data => instance.get(`api/suggestion/${data.idx}`)\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvYXBpcy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUVBLE1BQU1DLFFBQVEsR0FBR0QsbURBQUEsQ0FBYTtFQUM1QkcsT0FBTyxFQUFFO0FBRG1CLENBQWIsQ0FBakI7QUFLTyxNQUFNQyxJQUFJLEdBQUc7RUFDbkI7RUFDQUMsY0FBYyxFQUFHQyxJQUFELElBQVVMLFFBQVEsQ0FBQ00sR0FBVCxDQUFjLGtCQUFpQkQsSUFBSSxDQUFDRSxHQUFJLEVBQXhDO0FBRlAsQ0FBYiIsInNvdXJjZXMiOlsid2VicGFjazovL2dsYW0vLi9wYWdlcy9hcGkvYXBpcy5qcz82N2JiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmNvbnN0IGluc3RhbmNlID0gYXhpb3MuY3JlYXRlKHtcbiAgYmFzZVVSTDogJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC8nXG59KTtcblxuXG5leHBvcnQgY29uc3QgYXBpcyA9IHtcblx0Ly8gbWFpblxuXHRnZXRTdWdnZXN0aW9uczogKGRhdGEpID0+IGluc3RhbmNlLmdldChgYXBpL3N1Z2dlc3Rpb24vJHtkYXRhLmlkeH1gKSxcbn1cblxuIl0sIm5hbWVzIjpbImF4aW9zIiwiaW5zdGFuY2UiLCJjcmVhdGUiLCJiYXNlVVJMIiwiYXBpcyIsImdldFN1Z2dlc3Rpb25zIiwiZGF0YSIsImdldCIsImlkeCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/apis.js\n");

/***/ }),

/***/ "./pages/detail/[id].js":
/*!******************************!*\
  !*** ./pages/detail/[id].js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ detail),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps)\n/* harmony export */ });\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _api_apis__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api/apis */ \"./pages/api/apis.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\nvar _jsxFileName = \"/Users/hayeonkim/Desktop/Project/nextjs-emotionjs/glam/pages/detail/[id].js\";\n\n\n\n\nfunction detail({\n  params\n}) {\n  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_0__.useRouter)(); // const id = router.query.id;\n  // const [detail, setDetail] = useState([]);\n\n  console.log(params, '');\n  console.log(router);\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {\n    (async () => {\n      const list = await _api_apis__WEBPACK_IMPORTED_MODULE_2__.apis.getSuggestions({\n        idx: id\n      });\n      setDetail(list.data.data);\n      console.log(list.data.data);\n    })();\n  }, []);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {}, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 19,\n    columnNumber: 5\n  }, this);\n}\nfunction getServerSideProps({\n  params: {\n    params\n  }\n}) {\n  return {\n    props: {\n      params\n    }\n  };\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9kZXRhaWwvW2lkXS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVlLFNBQVNJLE1BQVQsQ0FBaUI7RUFBQ0M7QUFBRCxDQUFqQixFQUEyQjtFQUN4QyxNQUFNQyxNQUFNLEdBQUdOLHNEQUFTLEVBQXhCLENBRHdDLENBRXhDO0VBQ0E7O0VBQ0FPLE9BQU8sQ0FBQ0MsR0FBUixDQUFZSCxNQUFaLEVBQW1CLEVBQW5CO0VBQ0FFLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixNQUFaO0VBQ0FMLGdEQUFTLENBQUMsTUFBSTtJQUNaLENBQUMsWUFBWTtNQUNYLE1BQU1RLElBQUksR0FBRyxNQUFNTiwwREFBQSxDQUFvQjtRQUFDUSxHQUFHLEVBQUVDO01BQU4sQ0FBcEIsQ0FBbkI7TUFDQUMsU0FBUyxDQUFDSixJQUFJLENBQUNLLElBQUwsQ0FBVUEsSUFBWCxDQUFUO01BQ0FQLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxJQUFJLENBQUNLLElBQUwsQ0FBVUEsSUFBdEI7SUFDRCxDQUpEO0VBS0QsQ0FOUSxFQU1QLEVBTk8sQ0FBVDtFQU9BLG9CQUNFO0lBQUE7SUFBQTtJQUFBO0VBQUEsUUFERjtBQUtEO0FBRU0sU0FBU0Msa0JBQVQsQ0FBNEI7RUFBQ1YsTUFBTSxFQUFDO0lBQUNBO0VBQUQ7QUFBUixDQUE1QixFQUE4QztFQUNuRCxPQUFPO0lBQ0xXLEtBQUssRUFBRTtNQUNMWDtJQURLO0VBREYsQ0FBUDtBQUtEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ2xhbS8uL3BhZ2VzL2RldGFpbC9baWRdLmpzPzgyOTMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gJ25leHQvcm91dGVyJzsgXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHthcGlzfSBmcm9tICcuLi9hcGkvYXBpcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRldGFpbCAoe3BhcmFtc30pIHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIC8vIGNvbnN0IGlkID0gcm91dGVyLnF1ZXJ5LmlkO1xuICAvLyBjb25zdCBbZGV0YWlsLCBzZXREZXRhaWxdID0gdXNlU3RhdGUoW10pO1xuICBjb25zb2xlLmxvZyhwYXJhbXMsJycpXG4gIGNvbnNvbGUubG9nKHJvdXRlcilcbiAgdXNlRWZmZWN0KCgpPT57XG4gICAgKGFzeW5jICgpID0+IHtcbiAgICAgIGNvbnN0IGxpc3QgPSBhd2FpdCBhcGlzLmdldFN1Z2dlc3Rpb25zKHtpZHg6IGlkfSk7XG4gICAgICBzZXREZXRhaWwobGlzdC5kYXRhLmRhdGEpO1xuICAgICAgY29uc29sZS5sb2cobGlzdC5kYXRhLmRhdGEpXG4gICAgfSkoKTtcbiAgfSxbXSlcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgey8qIDxEZXRhaWxIZWFkZXI+PC9EZXRhaWxIZWFkZXI+ICovfVxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoe3BhcmFtczp7cGFyYW1zfX0pe1xuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBwYXJhbXNcbiAgICB9XG4gIH1cbn0iXSwibmFtZXMiOlsidXNlUm91dGVyIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJhcGlzIiwiZGV0YWlsIiwicGFyYW1zIiwicm91dGVyIiwiY29uc29sZSIsImxvZyIsImxpc3QiLCJnZXRTdWdnZXN0aW9ucyIsImlkeCIsImlkIiwic2V0RGV0YWlsIiwiZGF0YSIsImdldFNlcnZlclNpZGVQcm9wcyIsInByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/detail/[id].js\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/detail/[id].js"));
module.exports = __webpack_exports__;

})();