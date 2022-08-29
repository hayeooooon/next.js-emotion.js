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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ImageSlider; }\n/* harmony export */ });\n/* harmony import */ var _Users_hayeonkim_Desktop_Project_nextjs_emotionjs_glam_node_modules_next_dist_compiled_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/taggedTemplateLiteral.js */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/react */ \"./node_modules/@emotion/react/dist/emotion-react.browser.esm.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/react/jsx-dev-runtime */ \"./node_modules/@emotion/react/jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.browser.esm.js\");\n\n\nvar _jsxFileName = \"/Users/hayeonkim/Desktop/Project/nextjs-emotionjs/glam/components/ImageSlider.js\",\n    _s = $RefreshSig$(),\n    _templateObject,\n    _templateObject2;\n\n/** @jsxImportSource @emotion/react */\n\n\n\nfunction ImageSlider(_ref) {\n  _s();\n\n  var _this = this;\n\n  var data = _ref.data;\n  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n  /**\n   * 슬라이더 translateX 값 변경시키는 함수\n   * @param target 타겟 슬라이더\n   * @param index 보여져야 할 슬라이더의 index\n   * @param width 슬라이드 영역 width 값\n   */\n\n  var moveSlider = function moveSlider(target, index, width) {\n    target.dataset.index = index;\n    target.dataset.translate = width * index;\n    target.style.transform = \"translateX(-\".concat(width * index, \"px)\");\n    var children = target.nextElementSibling.childNodes;\n\n    for (var i = 0; i < children.length; i++) {\n      if (index === i) children[i].style.opacity = 1;else children[i].style.opacity = .4;\n    }\n  };\n  /** 슬라이더 클릭 시 다음 슬라이드의 위치를 찾는 함수 */\n\n\n  var getSliderPosition = function getSliderPosition(e) {\n    var half = window.innerWidth / 2;\n    var cardWidth = e.target.clientWidth;\n    var slider = e.currentTarget;\n    var prevIndex = Number(slider.dataset.index);\n    var lastIndex = e.currentTarget.childNodes.length - 1;\n    var newIndex = 0; // 왼쪽 방향으로 슬라이드\n\n    if (e.clientX < half && prevIndex > 0) {\n      newIndex = prevIndex - 1;\n      moveSlider(slider, newIndex, cardWidth); // 오른쪽 방향으로 슬라이드\n    } else if (e.clientX >= half && prevIndex < lastIndex) {\n      newIndex = prevIndex + 1;\n      moveSlider(slider, newIndex, cardWidth);\n    }\n  };\n\n  return (\n    /**\n     * @class \n     */\n    (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n      css: sliderStyle,\n      className: router.pathname === '/' ? 'hasInfo' : '',\n      children: [(0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"ul\", {\n        onClick: getSliderPosition,\n        \"data-translate\": 0,\n        \"data-index\": 0,\n        children: data.map(function (photo, i) {\n          return (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"li\", {\n            css: {\n              backgroundImage: \"url(\".concat(photo, \")\"),\n              paddingBottom: router.pathname === '/' ? '158.806%' : '100%'\n            }\n          }, \"photo\".concat(i), false, {\n            fileName: _jsxFileName,\n            lineNumber: 48,\n            columnNumber: 6\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 46,\n        columnNumber: 4\n      }, this), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n        css: sliderNavStyle,\n        \"data-active\": 0,\n        children: Array.from({\n          length: data.length\n        }, function (photo, i) {\n          return (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"button\", {\n            style: {\n              opacity: i === 0 ? 1 : 0.4\n            },\n            children: i\n          }, \"sliderNav\".concat(i), false, {\n            fileName: _jsxFileName,\n            lineNumber: 56,\n            columnNumber: 6\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 54,\n        columnNumber: 4\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 3\n    }, this)\n  );\n}\n\n_s(ImageSlider, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter];\n});\n\n_c = ImageSlider;\nvar sliderStyle = (0,_emotion_react__WEBPACK_IMPORTED_MODULE_3__.css)(_templateObject || (_templateObject = (0,_Users_hayeonkim_Desktop_Project_nextjs_emotionjs_glam_node_modules_next_dist_compiled_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\noverflow: hidden;\\nposition: relative;\\n  ul{\\n    position: relative;\\n    display: flex;\\n    flex-wrap: nowrap;\\n    li{\\n      flex-basis: 100%;\\n      flex-shrink: 0;\\n      height: 0;\\n      background-position: center;\\n      background-repeat: no-repeat;\\n      background-size: cover;\\n    }\\n  }\\n  &.hasInfo{\\n    &::after{\\n      position: absolute;\\n      left: 0;\\n      right: 0;\\n      bottom: 0;\\n      height: 25%;\\n      background: linear-gradient(0deg, rgba(51,51,51,1) 40%, rgba(51,51,51,0) 100%);\\n      content: '';\\n      z-index: 1;\\n    }\\n  }\\n  &::before{\\n    position: absolute;\\n    left: 0;\\n    right: 0;\\n    top: 0;\\n    height: 7%;\\n    background: linear-gradient(0deg, rgba(0,0,0,0) 0%, rgba(0,0,0,.3) 70%);\\n    content: '';\\n    z-index: 2;\\n  }\\n\"])));\nvar sliderNavStyle = (0,_emotion_react__WEBPACK_IMPORTED_MODULE_3__.css)(_templateObject2 || (_templateObject2 = (0,_Users_hayeonkim_Desktop_Project_nextjs_emotionjs_glam_node_modules_next_dist_compiled_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  position: absolute;\\n  left: 0;\\n  right: 0;\\n  padding: 0 30%;\\n  top: 12px;\\n  display: flex;\\n  align-items: center;\\n  gap: 4px;\\n  z-index: 3;\\n  button{\\n    flex-basis: 100%;\\n    height: 4px;\\n    border-radius: 2px;\\n    background-color: #fff;\\n    font-size: 0;\\n    opacity: .4;\\n  }\\n\"])));\n\nvar _c;\n\n$RefreshReg$(_c, \"ImageSlider\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VCxNQUFqQjtjQUFvQ0UsYUFBYSxFQUFFbEMsTUFBTSxDQUFDOEIsUUFBUCxLQUFvQixHQUFwQixHQUEwQixVQUExQixHQUF1QztZQUExRjtVQUZOLGtCQUNjbEIsQ0FEZDtZQUFBO1lBQUE7WUFBQTtVQUFBLFNBRFM7UUFBQSxDQUFUO01BREY7UUFBQTtRQUFBO1FBQUE7TUFBQSxRQURELEVBU0M7UUFBSyxHQUFHLEVBQUV1QixjQUFWO1FBQTBCLGVBQWEsQ0FBdkM7UUFBQSxVQUNFQyxLQUFLLENBQUNDLElBQU4sQ0FBVztVQUFFeEIsTUFBTSxFQUFFZCxJQUFJLENBQUNjO1FBQWYsQ0FBWCxFQUFvQyxVQUFDbUIsS0FBRCxFQUFRcEIsQ0FBUjtVQUFBLE9BQ3BDO1lBQThCLEtBQUssRUFBRTtjQUFFRSxPQUFPLEVBQUVGLENBQUMsS0FBSyxDQUFOLEdBQVUsQ0FBVixHQUFjO1lBQXpCLENBQXJDO1lBQUEsVUFDRUE7VUFERixzQkFBeUJBLENBQXpCO1lBQUE7WUFBQTtZQUFBO1VBQUEsU0FEb0M7UUFBQSxDQUFwQztNQURGO1FBQUE7UUFBQTtRQUFBO01BQUEsUUFURDtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFKRDtBQXNCQTs7R0ExRHVCZDtVQUNQRDs7O0tBRE9DO0FBNER4QixJQUFNK0IsV0FBVyxHQUFHakMsbURBQUgsMC9CQUFqQjtBQXVDQSxJQUFNdUMsY0FBYyxHQUFHdkMsbURBQUgsbWhCQUFwQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0ltYWdlU2xpZGVyLmpzPzRhMGEiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3hJbXBvcnRTb3VyY2UgQGVtb3Rpb24vcmVhY3QgKi9cbmltcG9ydCB7Y3NzfSBmcm9tICdAZW1vdGlvbi9yZWFjdCc7XG5pbXBvcnQge3VzZVJvdXRlcn0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbWFnZVNsaWRlcih7ZGF0YX0pIHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIC8qKlxuICAgKiDsiqzrnbzsnbTrjZQgdHJhbnNsYXRlWCDqsJIg67OA6rK97Iuc7YKk64qUIO2VqOyImFxuICAgKiBAcGFyYW0gdGFyZ2V0IO2DgOqynyDsiqzrnbzsnbTrjZRcbiAgICogQHBhcmFtIGluZGV4IOuztOyXrOyguOyVvCDtlaAg7Iqs65287J20642U7J2YIGluZGV4XG4gICAqIEBwYXJhbSB3aWR0aCDsiqzrnbzsnbTrk5wg7JiB7JetIHdpZHRoIOqwklxuICAgKi9cbiAgIGNvbnN0IG1vdmVTbGlkZXIgPSAodGFyZ2V0LCBpbmRleCwgd2lkdGgpID0+IHtcbiAgICB0YXJnZXQuZGF0YXNldC5pbmRleCA9IGluZGV4O1xuICAgIHRhcmdldC5kYXRhc2V0LnRyYW5zbGF0ZSA9IHdpZHRoICogaW5kZXg7XG4gICAgdGFyZ2V0LnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVYKC0ke3dpZHRoICogaW5kZXh9cHgpYDtcbiAgICBjb25zdCBjaGlsZHJlbiA9IHRhcmdldC5uZXh0RWxlbWVudFNpYmxpbmcuY2hpbGROb2RlcztcbiAgICBmb3IobGV0IGk9MDsgaTxjaGlsZHJlbi5sZW5ndGg7IGkrKyl7XG4gICAgICBpZihpbmRleCA9PT0gaSkgY2hpbGRyZW5baV0uc3R5bGUub3BhY2l0eSA9IDE7XG4gICAgICBlbHNlIGNoaWxkcmVuW2ldLnN0eWxlLm9wYWNpdHkgPSAuNDtcbiAgICB9XG4gIH1cbiAgLyoqIOyKrOudvOydtOuNlCDtgbTrpq0g7IucIOuLpOydjCDsiqzrnbzsnbTrk5zsnZgg7JyE7LmY66W8IOywvuuKlCDtlajsiJggKi9cbiAgY29uc3QgZ2V0U2xpZGVyUG9zaXRpb24gPSAoZSkgPT4ge1xuICAgIGNvbnN0IGhhbGYgPSB3aW5kb3cuaW5uZXJXaWR0aCAvIDI7XG4gICAgY29uc3QgY2FyZFdpZHRoID0gZS50YXJnZXQuY2xpZW50V2lkdGg7XG4gICAgY29uc3Qgc2xpZGVyID0gZS5jdXJyZW50VGFyZ2V0O1xuICAgIGNvbnN0IHByZXZJbmRleCA9IE51bWJlcihzbGlkZXIuZGF0YXNldC5pbmRleCk7XG4gICAgY29uc3QgbGFzdEluZGV4ID0gZS5jdXJyZW50VGFyZ2V0LmNoaWxkTm9kZXMubGVuZ3RoLTE7XG4gICAgbGV0IG5ld0luZGV4ID0gMDtcbiAgICAvLyDsmbzsqr0g67Cp7Zal7Jy866GcIOyKrOudvOydtOuTnFxuICAgIGlmKGUuY2xpZW50WCA8IGhhbGYgJiYgcHJldkluZGV4ID4gMCl7XG4gICAgICBuZXdJbmRleCA9IHByZXZJbmRleCAtIDE7XG4gICAgICBtb3ZlU2xpZGVyKHNsaWRlciwgbmV3SW5kZXgsIGNhcmRXaWR0aCk7XG4gICAgLy8g7Jik66W47Kq9IOuwqe2WpeycvOuhnCDsiqzrnbzsnbTrk5xcbiAgICB9ZWxzZSBpZihlLmNsaWVudFggPj0gaGFsZiAmJiBwcmV2SW5kZXggPCBsYXN0SW5kZXgpe1xuICAgICAgbmV3SW5kZXggPSBwcmV2SW5kZXggKyAxO1xuICAgICAgbW92ZVNsaWRlcihzbGlkZXIsIG5ld0luZGV4LCBjYXJkV2lkdGgpO1xuICAgIH1cbiAgfVxuXHRyZXR1cm4gKFxuICAgIC8qKlxuICAgICAqIEBjbGFzcyBcbiAgICAgKi9cblx0XHQ8ZGl2IGNzcz17c2xpZGVyU3R5bGV9IGNsYXNzTmFtZT17cm91dGVyLnBhdGhuYW1lID09PSAnLycgPyAnaGFzSW5mbycgOiAnJ30+XG5cdFx0XHQ8dWwgb25DbGljaz17Z2V0U2xpZGVyUG9zaXRpb259IGRhdGEtdHJhbnNsYXRlPXswfSBkYXRhLWluZGV4PXswfT5cblx0XHRcdFx0e2RhdGEubWFwKChwaG90bywgaSkgPT4gKFxuXHRcdFx0XHRcdDxsaVxuXHRcdFx0XHRcdFx0a2V5PXtgcGhvdG8ke2l9YH1cblx0XHRcdFx0XHRcdGNzcz17eyBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHtwaG90b30pYCwgcGFkZGluZ0JvdHRvbTogcm91dGVyLnBhdGhuYW1lID09PSAnLycgPyAnMTU4LjgwNiUnIDogJzEwMCUnfX1cblx0XHRcdFx0XHQ+PC9saT5cblx0XHRcdFx0KSl9XG5cdFx0XHQ8L3VsPlxuXHRcdFx0PGRpdiBjc3M9e3NsaWRlck5hdlN0eWxlfSBkYXRhLWFjdGl2ZT17MH0+XG5cdFx0XHRcdHtBcnJheS5mcm9tKHsgbGVuZ3RoOiBkYXRhLmxlbmd0aCB9LCAocGhvdG8sIGkpID0+IChcblx0XHRcdFx0XHQ8YnV0dG9uIGtleT17YHNsaWRlck5hdiR7aX1gfSBzdHlsZT17eyBvcGFjaXR5OiBpID09PSAwID8gMSA6IDAuNCB9fT5cblx0XHRcdFx0XHRcdHtpfVxuXHRcdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0XHQpKX1cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHQpO1xufVxuXG5jb25zdCBzbGlkZXJTdHlsZSA9IGNzc2Bcbm92ZXJmbG93OiBoaWRkZW47XG5wb3NpdGlvbjogcmVsYXRpdmU7XG4gIHVse1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogbm93cmFwO1xuICAgIGxpe1xuICAgICAgZmxleC1iYXNpczogMTAwJTtcbiAgICAgIGZsZXgtc2hyaW5rOiAwO1xuICAgICAgaGVpZ2h0OiAwO1xuICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgfVxuICB9XG4gICYuaGFzSW5mb3tcbiAgICAmOjphZnRlcntcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGxlZnQ6IDA7XG4gICAgICByaWdodDogMDtcbiAgICAgIGJvdHRvbTogMDtcbiAgICAgIGhlaWdodDogMjUlO1xuICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDBkZWcsIHJnYmEoNTEsNTEsNTEsMSkgNDAlLCByZ2JhKDUxLDUxLDUxLDApIDEwMCUpO1xuICAgICAgY29udGVudDogJyc7XG4gICAgICB6LWluZGV4OiAxO1xuICAgIH1cbiAgfVxuICAmOjpiZWZvcmV7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgdG9wOiAwO1xuICAgIGhlaWdodDogNyU7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDBkZWcsIHJnYmEoMCwwLDAsMCkgMCUsIHJnYmEoMCwwLDAsLjMpIDcwJSk7XG4gICAgY29udGVudDogJyc7XG4gICAgei1pbmRleDogMjtcbiAgfVxuYFxuY29uc3Qgc2xpZGVyTmF2U3R5bGUgPSBjc3NgXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHBhZGRpbmc6IDAgMzAlO1xuICB0b3A6IDEycHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogNHB4O1xuICB6LWluZGV4OiAzO1xuICBidXR0b257XG4gICAgZmxleC1iYXNpczogMTAwJTtcbiAgICBoZWlnaHQ6IDRweDtcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBmb250LXNpemU6IDA7XG4gICAgb3BhY2l0eTogLjQ7XG4gIH1cbmAiXSwibmFtZXMiOlsiY3NzIiwidXNlUm91dGVyIiwiSW1hZ2VTbGlkZXIiLCJkYXRhIiwicm91dGVyIiwibW92ZVNsaWRlciIsInRhcmdldCIsImluZGV4Iiwid2lkdGgiLCJkYXRhc2V0IiwidHJhbnNsYXRlIiwic3R5bGUiLCJ0cmFuc2Zvcm0iLCJjaGlsZHJlbiIsIm5leHRFbGVtZW50U2libGluZyIsImNoaWxkTm9kZXMiLCJpIiwibGVuZ3RoIiwib3BhY2l0eSIsImdldFNsaWRlclBvc2l0aW9uIiwiZSIsImhhbGYiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiY2FyZFdpZHRoIiwiY2xpZW50V2lkdGgiLCJzbGlkZXIiLCJjdXJyZW50VGFyZ2V0IiwicHJldkluZGV4IiwiTnVtYmVyIiwibGFzdEluZGV4IiwibmV3SW5kZXgiLCJjbGllbnRYIiwic2xpZGVyU3R5bGUiLCJwYXRobmFtZSIsIm1hcCIsInBob3RvIiwiYmFja2dyb3VuZEltYWdlIiwicGFkZGluZ0JvdHRvbSIsInNsaWRlck5hdlN0eWxlIiwiQXJyYXkiLCJmcm9tIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/ImageSlider.js\n"));

/***/ })

});