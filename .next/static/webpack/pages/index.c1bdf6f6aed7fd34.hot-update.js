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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_imageCarousel_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/styles/imageCarousel.module.css */ \"./styles/imageCarousel.module.css\");\n/* harmony import */ var _styles_imageCarousel_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_imageCarousel_module_css__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nconst ImageCarousel = (param)=>{\n    let { characters } = param;\n    _s();\n    console.log(characters.length);\n    const [currentIndex, setCurrentIndex] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const { id, name, image } = characters[currentIndex];\n    const limit = characters.length;\n    const handlePrev = ()=>{\n        setCurrentIndex((prev)=>prev === 0 ? limit - 1 : prev - 1);\n    };\n    const handleNext = ()=>{\n        setCurrentIndex((prev)=>prev === limit - 1 ? 0 : prev + 1);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_imageCarousel_module_css__WEBPACK_IMPORTED_MODULE_2___default().carousel),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: (_styles_imageCarousel_module_css__WEBPACK_IMPORTED_MODULE_2___default().control),\n                onClick: handlePrev,\n                children: \"prev\"\n            }, void 0, false, {\n                fileName: \"/Users/xielinlin/Desktop/ImageFeed/pages/home/imageFeed/imageCarousel/index.tsx\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_imageCarousel_module_css__WEBPACK_IMPORTED_MODULE_2___default().carouselSlide),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: image,\n                        alt: name\n                    }, void 0, false, {\n                        fileName: \"/Users/xielinlin/Desktop/ImageFeed/pages/home/imageFeed/imageCarousel/index.tsx\",\n                        lineNumber: 24,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            name,\n                            \" \"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/xielinlin/Desktop/ImageFeed/pages/home/imageFeed/imageCarousel/index.tsx\",\n                        lineNumber: 25,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/xielinlin/Desktop/ImageFeed/pages/home/imageFeed/imageCarousel/index.tsx\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: (_styles_imageCarousel_module_css__WEBPACK_IMPORTED_MODULE_2___default().control),\n                onClick: handleNext,\n                children: \"next\"\n            }, void 0, false, {\n                fileName: \"/Users/xielinlin/Desktop/ImageFeed/pages/home/imageFeed/imageCarousel/index.tsx\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/xielinlin/Desktop/ImageFeed/pages/home/imageFeed/imageCarousel/index.tsx\",\n        lineNumber: 19,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ImageCarousel, \"tusBbsahUVevXfyh6oH5R6YDC9Q=\");\n_c = ImageCarousel;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ImageCarousel);\nvar _c;\n$RefreshReg$(_c, \"ImageCarousel\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9ob21lL2ltYWdlRmVlZC9pbWFnZUNhcm91c2VsL2luZGV4LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBd0M7QUFLZTtBQUN2RCxNQUFNRyxnQkFBc0M7UUFBQyxFQUFFQyxVQUFVLEVBQUU7O0lBQ3pEQyxRQUFRQyxHQUFHLENBQUNGLFdBQVdHLE1BQU07SUFDN0IsTUFBTSxDQUFDQyxjQUFjQyxnQkFBZ0IsR0FBR1IsK0NBQVFBLENBQUM7SUFDakQsTUFBTSxFQUFFUyxFQUFFLEVBQUVDLElBQUksRUFBRUMsS0FBSyxFQUFFLEdBQUdSLFVBQVUsQ0FBQ0ksYUFBYTtJQUNwRCxNQUFNSyxRQUFRVCxXQUFXRyxNQUFNO0lBQy9CLE1BQU1PLGFBQWE7UUFDakJMLGdCQUFnQixDQUFDTSxPQUFVQSxTQUFTLElBQUlGLFFBQVEsSUFBSUUsT0FBTztJQUM3RDtJQUNBLE1BQU1DLGFBQWE7UUFDakJQLGdCQUFnQixDQUFDTSxPQUFVQSxTQUFTRixRQUFRLElBQUksSUFBSUUsT0FBTztJQUM3RDtJQUNBLHFCQUNFLDhEQUFDRTtRQUFJQyxXQUFXaEIsa0ZBQWU7OzBCQUM3Qiw4REFBQ2tCO2dCQUFPRixXQUFXaEIsaUZBQWM7Z0JBQUVvQixTQUFTUjswQkFBWTs7Ozs7OzBCQUd4RCw4REFBQ0c7Z0JBQUlDLFdBQVdoQix1RkFBb0I7O2tDQUNsQyw4REFBQ3NCO3dCQUFJQyxLQUFLYjt3QkFBT2MsS0FBS2Y7Ozs7OztrQ0FDdEIsOERBQUNnQjs7NEJBQUdoQjs0QkFBSzs7Ozs7Ozs7Ozs7OzswQkFFWCw4REFBQ1M7Z0JBQU9GLFdBQVdoQixpRkFBYztnQkFBRW9CLFNBQVNOOzBCQUFZOzs7Ozs7Ozs7Ozs7QUFLOUQ7R0F6Qk1iO0tBQUFBO0FBMkJOLCtEQUFlQSxhQUFhQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2hvbWUvaW1hZ2VGZWVkL2ltYWdlQ2Fyb3VzZWwvaW5kZXgudHN4Pzg5YmIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBDaGFyYWN0ZXJzIH0gZnJvbSBcIi4uLy4uLy4uLy4uL0ludGVyZmFjZVwiO1xuXG5pbXBvcnQgeyBHcmlkIH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcbmltcG9ydCBDaGFyYWN0ZXIgZnJvbSBcIkAvcGFnZXMvY29tcG9uZW50cy9jaGFyYWN0ZXJcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIkAvc3R5bGVzL2ltYWdlQ2Fyb3VzZWwubW9kdWxlLmNzc1wiO1xuY29uc3QgSW1hZ2VDYXJvdXNlbDogUmVhY3QuRkM8Q2hhcmFjdGVycz4gPSAoeyBjaGFyYWN0ZXJzIH0pID0+IHtcbiAgY29uc29sZS5sb2coY2hhcmFjdGVycy5sZW5ndGgpO1xuICBjb25zdCBbY3VycmVudEluZGV4LCBzZXRDdXJyZW50SW5kZXhdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IHsgaWQsIG5hbWUsIGltYWdlIH0gPSBjaGFyYWN0ZXJzW2N1cnJlbnRJbmRleF07XG4gIGNvbnN0IGxpbWl0ID0gY2hhcmFjdGVycy5sZW5ndGg7XG4gIGNvbnN0IGhhbmRsZVByZXYgPSAoKSA9PiB7XG4gICAgc2V0Q3VycmVudEluZGV4KChwcmV2KSA9PiAocHJldiA9PT0gMCA/IGxpbWl0IC0gMSA6IHByZXYgLSAxKSk7XG4gIH07XG4gIGNvbnN0IGhhbmRsZU5leHQgPSAoKSA9PiB7XG4gICAgc2V0Q3VycmVudEluZGV4KChwcmV2KSA9PiAocHJldiA9PT0gbGltaXQgLSAxID8gMCA6IHByZXYgKyAxKSk7XG4gIH07XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jYXJvdXNlbH0+XG4gICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmNvbnRyb2x9IG9uQ2xpY2s9e2hhbmRsZVByZXZ9PlxuICAgICAgICBwcmV2XG4gICAgICA8L2J1dHRvbj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2Fyb3VzZWxTbGlkZX0+XG4gICAgICAgIDxpbWcgc3JjPXtpbWFnZX0gYWx0PXtuYW1lfSAvPlxuICAgICAgICA8cD57bmFtZX0gPC9wPlxuICAgICAgPC9kaXY+XG4gICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmNvbnRyb2x9IG9uQ2xpY2s9e2hhbmRsZU5leHR9PlxuICAgICAgICBuZXh0XG4gICAgICA8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEltYWdlQ2Fyb3VzZWw7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInN0eWxlcyIsIkltYWdlQ2Fyb3VzZWwiLCJjaGFyYWN0ZXJzIiwiY29uc29sZSIsImxvZyIsImxlbmd0aCIsImN1cnJlbnRJbmRleCIsInNldEN1cnJlbnRJbmRleCIsImlkIiwibmFtZSIsImltYWdlIiwibGltaXQiLCJoYW5kbGVQcmV2IiwicHJldiIsImhhbmRsZU5leHQiLCJkaXYiLCJjbGFzc05hbWUiLCJjYXJvdXNlbCIsImJ1dHRvbiIsImNvbnRyb2wiLCJvbkNsaWNrIiwiY2Fyb3VzZWxTbGlkZSIsImltZyIsInNyYyIsImFsdCIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/home/imageFeed/imageCarousel/index.tsx\n"));

/***/ })

});