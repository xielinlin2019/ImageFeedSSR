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

/***/ "./pages/home/imageFeed/imageCarousel/index.tsx":
/*!******************************************************!*\
  !*** ./pages/home/imageFeed/imageCarousel/index.tsx ***!
  \******************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_imageCarousel_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/styles/imageCarousel.module.css */ \"./styles/imageCarousel.module.css\");\n/* harmony import */ var _styles_imageCarousel_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_imageCarousel_module_css__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nconst ImageCarousel = (param)=>{\n    let { characters } = param;\n    _s();\n    const [currentIndex, setCurrentIndex] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const { id, name, image } = characters[currentIndex];\n    const limit = characters.length;\n    const handlePrev = ()=>{\n        setCurrentIndex((prev)=>prev === 0 ? limit - 1 : prev - 1);\n    };\n    const handleNext = ()=>{\n        setCurrentIndex((prev)=>prev === limit - 1 ? 0 : prev + 1);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_imageCarousel_module_css__WEBPACK_IMPORTED_MODULE_2___default().carousel),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: (_styles_imageCarousel_module_css__WEBPACK_IMPORTED_MODULE_2___default().control),\n                onClick: handlePrev,\n                children: \"prev\"\n            }, void 0, false, {\n                fileName: \"/Users/xielinlin/Desktop/ImageFeed/pages/home/imageFeed/imageCarousel/index.tsx\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_imageCarousel_module_css__WEBPACK_IMPORTED_MODULE_2___default().carouselSlide),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: image,\n                        alt: name\n                    }, void 0, false, {\n                        fileName: \"/Users/xielinlin/Desktop/ImageFeed/pages/home/imageFeed/imageCarousel/index.tsx\",\n                        lineNumber: 23,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            name,\n                            \" \"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/xielinlin/Desktop/ImageFeed/pages/home/imageFeed/imageCarousel/index.tsx\",\n                        lineNumber: 24,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/xielinlin/Desktop/ImageFeed/pages/home/imageFeed/imageCarousel/index.tsx\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: (_styles_imageCarousel_module_css__WEBPACK_IMPORTED_MODULE_2___default().control),\n                onClick: handleNext,\n                children: \"next\"\n            }, void 0, false, {\n                fileName: \"/Users/xielinlin/Desktop/ImageFeed/pages/home/imageFeed/imageCarousel/index.tsx\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/xielinlin/Desktop/ImageFeed/pages/home/imageFeed/imageCarousel/index.tsx\",\n        lineNumber: 18,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ImageCarousel, \"tusBbsahUVevXfyh6oH5R6YDC9Q=\");\n_c = ImageCarousel;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ImageCarousel);\nvar _c;\n$RefreshReg$(_c, \"ImageCarousel\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9ob21lL2ltYWdlRmVlZC9pbWFnZUNhcm91c2VsL2luZGV4LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBd0M7QUFLZTtBQUN2RCxNQUFNRyxnQkFBc0M7UUFBQyxFQUFFQyxVQUFVLEVBQUU7O0lBQ3pELE1BQU0sQ0FBQ0MsY0FBY0MsZ0JBQWdCLEdBQUdMLCtDQUFRQSxDQUFDO0lBQ2pELE1BQU0sRUFBRU0sRUFBRSxFQUFFQyxJQUFJLEVBQUVDLEtBQUssRUFBRSxHQUFHTCxVQUFVLENBQUNDLGFBQWE7SUFDcEQsTUFBTUssUUFBUU4sV0FBV08sTUFBTTtJQUMvQixNQUFNQyxhQUFhO1FBQ2pCTixnQkFBZ0IsQ0FBQ08sT0FBVUEsU0FBUyxJQUFJSCxRQUFRLElBQUlHLE9BQU87SUFDN0Q7SUFDQSxNQUFNQyxhQUFhO1FBQ2pCUixnQkFBZ0IsQ0FBQ08sT0FBVUEsU0FBU0gsUUFBUSxJQUFJLElBQUlHLE9BQU87SUFDN0Q7SUFDQSxxQkFDRSw4REFBQ0U7UUFBSUMsV0FBV2Qsa0ZBQWU7OzBCQUM3Qiw4REFBQ2dCO2dCQUFPRixXQUFXZCxpRkFBYztnQkFBRWtCLFNBQVNSOzBCQUFZOzs7Ozs7MEJBR3hELDhEQUFDRztnQkFBSUMsV0FBV2QsdUZBQW9COztrQ0FDbEMsOERBQUNvQjt3QkFBSUMsS0FBS2Q7d0JBQU9lLEtBQUtoQjs7Ozs7O2tDQUN0Qiw4REFBQ2lCOzs0QkFBR2pCOzRCQUFLOzs7Ozs7Ozs7Ozs7OzBCQUVYLDhEQUFDVTtnQkFBT0YsV0FBV2QsaUZBQWM7Z0JBQUVrQixTQUFTTjswQkFBWTs7Ozs7Ozs7Ozs7O0FBSzlEO0dBeEJNWDtLQUFBQTtBQTBCTiwrREFBZUEsYUFBYUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9ob21lL2ltYWdlRmVlZC9pbWFnZUNhcm91c2VsL2luZGV4LnRzeD84OWJiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQ2hhcmFjdGVycyB9IGZyb20gXCIuLi8uLi8uLi8uLi9JbnRlcmZhY2VcIjtcblxuaW1wb3J0IHsgR3JpZCB9IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XG5pbXBvcnQgQ2hhcmFjdGVyIGZyb20gXCJAL3BhZ2VzL2NvbXBvbmVudHMvY2hhcmFjdGVyXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCJAL3N0eWxlcy9pbWFnZUNhcm91c2VsLm1vZHVsZS5jc3NcIjtcbmNvbnN0IEltYWdlQ2Fyb3VzZWw6IFJlYWN0LkZDPENoYXJhY3RlcnM+ID0gKHsgY2hhcmFjdGVycyB9KSA9PiB7XG4gIGNvbnN0IFtjdXJyZW50SW5kZXgsIHNldEN1cnJlbnRJbmRleF0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgeyBpZCwgbmFtZSwgaW1hZ2UgfSA9IGNoYXJhY3RlcnNbY3VycmVudEluZGV4XTtcbiAgY29uc3QgbGltaXQgPSBjaGFyYWN0ZXJzLmxlbmd0aDtcbiAgY29uc3QgaGFuZGxlUHJldiA9ICgpID0+IHtcbiAgICBzZXRDdXJyZW50SW5kZXgoKHByZXYpID0+IChwcmV2ID09PSAwID8gbGltaXQgLSAxIDogcHJldiAtIDEpKTtcbiAgfTtcbiAgY29uc3QgaGFuZGxlTmV4dCA9ICgpID0+IHtcbiAgICBzZXRDdXJyZW50SW5kZXgoKHByZXYpID0+IChwcmV2ID09PSBsaW1pdCAtIDEgPyAwIDogcHJldiArIDEpKTtcbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNhcm91c2VsfT5cbiAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuY29udHJvbH0gb25DbGljaz17aGFuZGxlUHJldn0+XG4gICAgICAgIHByZXZcbiAgICAgIDwvYnV0dG9uPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jYXJvdXNlbFNsaWRlfT5cbiAgICAgICAgPGltZyBzcmM9e2ltYWdlfSBhbHQ9e25hbWV9IC8+XG4gICAgICAgIDxwPntuYW1lfSA8L3A+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuY29udHJvbH0gb25DbGljaz17aGFuZGxlTmV4dH0+XG4gICAgICAgIG5leHRcbiAgICAgIDwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSW1hZ2VDYXJvdXNlbDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwic3R5bGVzIiwiSW1hZ2VDYXJvdXNlbCIsImNoYXJhY3RlcnMiLCJjdXJyZW50SW5kZXgiLCJzZXRDdXJyZW50SW5kZXgiLCJpZCIsIm5hbWUiLCJpbWFnZSIsImxpbWl0IiwibGVuZ3RoIiwiaGFuZGxlUHJldiIsInByZXYiLCJoYW5kbGVOZXh0IiwiZGl2IiwiY2xhc3NOYW1lIiwiY2Fyb3VzZWwiLCJidXR0b24iLCJjb250cm9sIiwib25DbGljayIsImNhcm91c2VsU2xpZGUiLCJpbWciLCJzcmMiLCJhbHQiLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/home/imageFeed/imageCarousel/index.tsx\n"));

/***/ })

});