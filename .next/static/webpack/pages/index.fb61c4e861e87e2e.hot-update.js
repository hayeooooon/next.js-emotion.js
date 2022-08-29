"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/ImageSlider.js":
/*!***********************************!*\
  !*** ./components/ImageSlider.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ImageSlider; }\n/* harmony export */ });\n/* harmony import */ var _Users_hayeonkim_Desktop_Project_nextjs_emotionjs_glam_node_modules_next_dist_compiled_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/taggedTemplateLiteral.js */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/react */ \"./node_modules/@emotion/react/dist/emotion-react.browser.esm.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/react/jsx-dev-runtime */ \"./node_modules/@emotion/react/jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.browser.esm.js\");\n\n\nvar _jsxFileName = \"/Users/hayeonkim/Desktop/Project/nextjs-emotionjs/glam/components/ImageSlider.js\",\n    _templateObject,\n    _templateObject2;\n\n/** @jsxImportSource @emotion/react */\n\n\n\nfunction ImageSlider(_ref) {\n  var _this = this;\n\n  var data = _ref.data;\n\n  /**\n   * 슬라이더 translateX 값 변경시키는 함수\n   * @param target 타겟 슬라이더\n   * @param index 보여져야 할 슬라이더의 index\n   * @param width 슬라이드 보여지는 너비\n   */\n  var moveSlider = function moveSlider(target, index, width) {\n    target.dataset.index = index;\n    target.dataset.translate = width * index;\n    target.style.transform = \"translateX(-\".concat(width * index, \"px)\");\n    var children = target.nextElementSibling.childNodes;\n\n    for (var i = 0; i < children.length; i++) {\n      if (index === i) children[i].style.opacity = 1;else children[i].style.opacity = .4;\n    }\n  };\n  /** 슬라이더 클릭 시 다음 슬라이드의 위치를 찾는 함수 */\n\n\n  var getSliderPosition = function getSliderPosition(e) {\n    var half = window.innerWidth / 2;\n    var cardWidth = e.target.clientWidth;\n    var slider = e.currentTarget;\n    var prevIndex = Number(slider.dataset.index);\n    var lastIndex = e.currentTarget.childNodes.length - 1;\n    var newIndex = 0; // 왼쪽 방향으로 슬라이드\n\n    if (e.clientX < half && prevIndex > 0) {\n      newIndex = prevIndex - 1;\n      moveSlider(slider, newIndex, cardWidth); // 오른쪽 방향으로 슬라이드\n    } else if (e.clientX >= half && prevIndex < lastIndex) {\n      newIndex = prevIndex + 1;\n      moveSlider(slider, newIndex, cardWidth);\n    }\n  };\n\n  return (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n    css: sliderStyle,\n    children: [(0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"ul\", {\n      onClick: getSliderPosition,\n      \"data-translate\": 0,\n      \"data-index\": 0,\n      children: data.map(function (photo, i) {\n        return (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"li\", {\n          css: {\n            backgroundImage: \"url(\".concat(photo, \")\")\n          }\n        }, \"photo\".concat(i), false, {\n          fileName: _jsxFileName,\n          lineNumber: 44,\n          columnNumber: 6\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 4\n    }, this), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n      css: sliderNavStyle,\n      \"data-active\": 0,\n      children: Array.from({\n        length: data.length\n      }, function (photo, i) {\n        return (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"button\", {\n          style: {\n            opacity: i === 0 ? 1 : 0.4\n          },\n          children: i\n        }, \"sliderNav\".concat(i), false, {\n          fileName: _jsxFileName,\n          lineNumber: 52,\n          columnNumber: 6\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 4\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 41,\n    columnNumber: 3\n  }, this);\n}\n_c = ImageSlider;\nvar sliderStyle = (0,_emotion_react__WEBPACK_IMPORTED_MODULE_3__.css)(_templateObject || (_templateObject = (0,_Users_hayeonkim_Desktop_Project_nextjs_emotionjs_glam_node_modules_next_dist_compiled_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\noverflow: hidden;\\nposition: relative;\\n  ul{\\n    position: relative;\\n    display: flex;\\n    flex-wrap: nowrap;\\n    li{\\n      flex-basis: 100%;\\n      flex-shrink: 0;\\n      height: 0;\\n      padding-bottom: 158.806%;\\n      background-position: center;\\n      background-repeat: no-repeat;\\n      background-size: cover;\\n    }\\n  }\\n  &::before{\\n    position: absolute;\\n    left: 0;\\n    right: 0;\\n    top: 0;\\n    height: 7%;\\n    background: linear-gradient(0deg, rgba(0,0,0,0) 0%, rgba(0,0,0,.3) 70%);\\n    content: '';\\n    z-index: 2;\\n  }\\n  &::after{\\n    position: absolute;\\n    left: 0;\\n    right: 0;\\n    bottom: 0;\\n    height: 25%;\\n    background: linear-gradient(0deg, rgba(51,51,51,1) 40%, rgba(51,51,51,0) 100%);\\n    content: '';\\n    z-index: 1;\\n  }\\n\"])));\nvar sliderNavStyle = (0,_emotion_react__WEBPACK_IMPORTED_MODULE_3__.css)(_templateObject2 || (_templateObject2 = (0,_Users_hayeonkim_Desktop_Project_nextjs_emotionjs_glam_node_modules_next_dist_compiled_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  position: absolute;\\n  left: 0;\\n  right: 0;\\n  padding: 0 30%;\\n  top: 12px;\\n  display: flex;\\n  align-items: center;\\n  gap: 4px;\\n  z-index: 3;\\n  button{\\n    flex-basis: 100%;\\n    height: 4px;\\n    border-radius: 2px;\\n    background-color: #fff;\\n    font-size: 0;\\n    opacity: .4;\\n  }\\n\"])));\n\nvar _c;\n\n$RefreshReg$(_c, \"ImageSlider\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQXZDO01BQUEsVUFDRUMsS0FBSyxDQUFDQyxJQUFOLENBQVc7UUFBRXRCLE1BQU0sRUFBRWIsSUFBSSxDQUFDYTtNQUFmLENBQVgsRUFBb0MsVUFBQ2tCLEtBQUQsRUFBUW5CLENBQVI7UUFBQSxPQUNwQztVQUE4QixLQUFLLEVBQUU7WUFBRUUsT0FBTyxFQUFFRixDQUFDLEtBQUssQ0FBTixHQUFVLENBQVYsR0FBYztVQUF6QixDQUFyQztVQUFBLFVBQ0VBO1FBREYsc0JBQXlCQSxDQUF6QjtVQUFBO1VBQUE7VUFBQTtRQUFBLFNBRG9DO01BQUEsQ0FBcEM7SUFERjtNQUFBO01BQUE7TUFBQTtJQUFBLFFBVEQ7RUFBQTtJQUFBO0lBQUE7SUFBQTtFQUFBLFFBREQ7QUFtQkE7S0F0RHVCYjtBQXdEeEIsSUFBTThCLFdBQVcsR0FBR2hDLG1EQUFILG8vQkFBakI7QUFzQ0EsSUFBTW9DLGNBQWMsR0FBR3BDLG1EQUFILG1oQkFBcEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9JbWFnZVNsaWRlci5qcz80YTBhIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4SW1wb3J0U291cmNlIEBlbW90aW9uL3JlYWN0ICovXG5pbXBvcnQge2Nzc30gZnJvbSAnQGVtb3Rpb24vcmVhY3QnO1xuaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gJ25leHQvcm91dGVyJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW1hZ2VTbGlkZXIoe2RhdGF9KSB7XG4gIC8qKlxuICAgKiDsiqzrnbzsnbTrjZQgdHJhbnNsYXRlWCDqsJIg67OA6rK97Iuc7YKk64qUIO2VqOyImFxuICAgKiBAcGFyYW0gdGFyZ2V0IO2DgOqynyDsiqzrnbzsnbTrjZRcbiAgICogQHBhcmFtIGluZGV4IOuztOyXrOyguOyVvCDtlaAg7Iqs65287J20642U7J2YIGluZGV4XG4gICAqIEBwYXJhbSB3aWR0aCDsiqzrnbzsnbTrk5wg67O07Jes7KeA64qUIOuEiOu5hFxuICAgKi9cbiAgIGNvbnN0IG1vdmVTbGlkZXIgPSAodGFyZ2V0LCBpbmRleCwgd2lkdGgpID0+IHtcbiAgICB0YXJnZXQuZGF0YXNldC5pbmRleCA9IGluZGV4O1xuICAgIHRhcmdldC5kYXRhc2V0LnRyYW5zbGF0ZSA9IHdpZHRoICogaW5kZXg7XG4gICAgdGFyZ2V0LnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVYKC0ke3dpZHRoICogaW5kZXh9cHgpYDtcbiAgICBjb25zdCBjaGlsZHJlbiA9IHRhcmdldC5uZXh0RWxlbWVudFNpYmxpbmcuY2hpbGROb2RlcztcbiAgICBmb3IobGV0IGk9MDsgaTxjaGlsZHJlbi5sZW5ndGg7IGkrKyl7XG4gICAgICBpZihpbmRleCA9PT0gaSkgY2hpbGRyZW5baV0uc3R5bGUub3BhY2l0eSA9IDE7XG4gICAgICBlbHNlIGNoaWxkcmVuW2ldLnN0eWxlLm9wYWNpdHkgPSAuNDtcbiAgICB9XG4gIH1cbiAgLyoqIOyKrOudvOydtOuNlCDtgbTrpq0g7IucIOuLpOydjCDsiqzrnbzsnbTrk5zsnZgg7JyE7LmY66W8IOywvuuKlCDtlajsiJggKi9cbiAgY29uc3QgZ2V0U2xpZGVyUG9zaXRpb24gPSAoZSkgPT4ge1xuICAgIGNvbnN0IGhhbGYgPSB3aW5kb3cuaW5uZXJXaWR0aCAvIDI7XG4gICAgY29uc3QgY2FyZFdpZHRoID0gZS50YXJnZXQuY2xpZW50V2lkdGg7XG4gICAgY29uc3Qgc2xpZGVyID0gZS5jdXJyZW50VGFyZ2V0O1xuICAgIGNvbnN0IHByZXZJbmRleCA9IE51bWJlcihzbGlkZXIuZGF0YXNldC5pbmRleCk7XG4gICAgY29uc3QgbGFzdEluZGV4ID0gZS5jdXJyZW50VGFyZ2V0LmNoaWxkTm9kZXMubGVuZ3RoLTE7XG4gICAgbGV0IG5ld0luZGV4ID0gMDtcbiAgICAvLyDsmbzsqr0g67Cp7Zal7Jy866GcIOyKrOudvOydtOuTnFxuICAgIGlmKGUuY2xpZW50WCA8IGhhbGYgJiYgcHJldkluZGV4ID4gMCl7XG4gICAgICBuZXdJbmRleCA9IHByZXZJbmRleCAtIDE7XG4gICAgICBtb3ZlU2xpZGVyKHNsaWRlciwgbmV3SW5kZXgsIGNhcmRXaWR0aCk7XG4gICAgLy8g7Jik66W47Kq9IOuwqe2WpeycvOuhnCDsiqzrnbzsnbTrk5xcbiAgICB9ZWxzZSBpZihlLmNsaWVudFggPj0gaGFsZiAmJiBwcmV2SW5kZXggPCBsYXN0SW5kZXgpe1xuICAgICAgbmV3SW5kZXggPSBwcmV2SW5kZXggKyAxO1xuICAgICAgbW92ZVNsaWRlcihzbGlkZXIsIG5ld0luZGV4LCBjYXJkV2lkdGgpO1xuICAgIH1cbiAgfVxuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY3NzPXtzbGlkZXJTdHlsZX0+XG5cdFx0XHQ8dWwgb25DbGljaz17Z2V0U2xpZGVyUG9zaXRpb259IGRhdGEtdHJhbnNsYXRlPXswfSBkYXRhLWluZGV4PXswfT5cblx0XHRcdFx0e2RhdGEubWFwKChwaG90bywgaSkgPT4gKFxuXHRcdFx0XHRcdDxsaVxuXHRcdFx0XHRcdFx0a2V5PXtgcGhvdG8ke2l9YH1cblx0XHRcdFx0XHRcdGNzcz17eyBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHtwaG90b30pYCB9fVxuXHRcdFx0XHRcdD48L2xpPlxuXHRcdFx0XHQpKX1cblx0XHRcdDwvdWw+XG5cdFx0XHQ8ZGl2IGNzcz17c2xpZGVyTmF2U3R5bGV9IGRhdGEtYWN0aXZlPXswfT5cblx0XHRcdFx0e0FycmF5LmZyb20oeyBsZW5ndGg6IGRhdGEubGVuZ3RoIH0sIChwaG90bywgaSkgPT4gKFxuXHRcdFx0XHRcdDxidXR0b24ga2V5PXtgc2xpZGVyTmF2JHtpfWB9IHN0eWxlPXt7IG9wYWNpdHk6IGkgPT09IDAgPyAxIDogMC40IH19PlxuXHRcdFx0XHRcdFx0e2l9XG5cdFx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHRcdCkpfVxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cdCk7XG59XG5cbmNvbnN0IHNsaWRlclN0eWxlID0gY3NzYFxub3ZlcmZsb3c6IGhpZGRlbjtcbnBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdWx7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiBub3dyYXA7XG4gICAgbGl7XG4gICAgICBmbGV4LWJhc2lzOiAxMDAlO1xuICAgICAgZmxleC1zaHJpbms6IDA7XG4gICAgICBoZWlnaHQ6IDA7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogMTU4LjgwNiU7XG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICB9XG4gIH1cbiAgJjo6YmVmb3Jle1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIHRvcDogMDtcbiAgICBoZWlnaHQ6IDclO1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgwZGVnLCByZ2JhKDAsMCwwLDApIDAlLCByZ2JhKDAsMCwwLC4zKSA3MCUpO1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIHotaW5kZXg6IDI7XG4gIH1cbiAgJjo6YWZ0ZXJ7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIGhlaWdodDogMjUlO1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgwZGVnLCByZ2JhKDUxLDUxLDUxLDEpIDQwJSwgcmdiYSg1MSw1MSw1MSwwKSAxMDAlKTtcbiAgICBjb250ZW50OiAnJztcbiAgICB6LWluZGV4OiAxO1xuICB9XG5gXG5jb25zdCBzbGlkZXJOYXZTdHlsZSA9IGNzc2BcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgcGFkZGluZzogMCAzMCU7XG4gIHRvcDogMTJweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA0cHg7XG4gIHotaW5kZXg6IDM7XG4gIGJ1dHRvbntcbiAgICBmbGV4LWJhc2lzOiAxMDAlO1xuICAgIGhlaWdodDogNHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGZvbnQtc2l6ZTogMDtcbiAgICBvcGFjaXR5OiAuNDtcbiAgfVxuYCJdLCJuYW1lcyI6WyJjc3MiLCJ1c2VSb3V0ZXIiLCJJbWFnZVNsaWRlciIsImRhdGEiLCJtb3ZlU2xpZGVyIiwidGFyZ2V0IiwiaW5kZXgiLCJ3aWR0aCIsImRhdGFzZXQiLCJ0cmFuc2xhdGUiLCJzdHlsZSIsInRyYW5zZm9ybSIsImNoaWxkcmVuIiwibmV4dEVsZW1lbnRTaWJsaW5nIiwiY2hpbGROb2RlcyIsImkiLCJsZW5ndGgiLCJvcGFjaXR5IiwiZ2V0U2xpZGVyUG9zaXRpb24iLCJlIiwiaGFsZiIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJjYXJkV2lkdGgiLCJjbGllbnRXaWR0aCIsInNsaWRlciIsImN1cnJlbnRUYXJnZXQiLCJwcmV2SW5kZXgiLCJOdW1iZXIiLCJsYXN0SW5kZXgiLCJuZXdJbmRleCIsImNsaWVudFgiLCJzbGlkZXJTdHlsZSIsIm1hcCIsInBob3RvIiwiYmFja2dyb3VuZEltYWdlIiwic2xpZGVyTmF2U3R5bGUiLCJBcnJheSIsImZyb20iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/ImageSlider.js\n"));

/***/ })

});