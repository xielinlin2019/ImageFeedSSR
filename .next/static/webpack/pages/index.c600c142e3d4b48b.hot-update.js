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

/***/ "./pages/home/imageFeed/index.tsx":
/*!****************************************!*\
  !*** ./pages/home/imageFeed/index.tsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_imageFeed_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../styles/imageFeed.module.css */ \"./styles/imageFeed.module.css\");\n/* harmony import */ var _styles_imageFeed_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_imageFeed_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n// import ImageCarousel from \"./imageCarousel\";\n\n\nconst ImageFeed = (param)=>{\n    let { characters, page, totalPages } = param;\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    // handle pagination router\n    const handlePageChange = (event, newPage)=>{\n        router.push(\"/?page=\".concat(newPage));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_styles_imageFeed_module_css__WEBPACK_IMPORTED_MODULE_3___default().home),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Typography, {\n                    variant: \"h5\",\n                    component: \"div\",\n                    align: \"center\",\n                    children: \"Rick and Morty Characters\"\n                }, void 0, false, {\n                    fileName: \"/Users/xielinlin/Desktop/ImageFeed/pages/home/imageFeed/index.tsx\",\n                    lineNumber: 24,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ImageCarousel, {\n                    characters: characters\n                }, void 0, false, {\n                    fileName: \"/Users/xielinlin/Desktop/ImageFeed/pages/home/imageFeed/index.tsx\",\n                    lineNumber: 27,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Pagination, {\n                    count: totalPages,\n                    page: page,\n                    onChange: handlePageChange,\n                    shape: \"circular\",\n                    showFirstButton: true,\n                    showLastButton: true,\n                    size: \"small\"\n                }, void 0, false, {\n                    fileName: \"/Users/xielinlin/Desktop/ImageFeed/pages/home/imageFeed/index.tsx\",\n                    lineNumber: 28,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/xielinlin/Desktop/ImageFeed/pages/home/imageFeed/index.tsx\",\n            lineNumber: 23,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/xielinlin/Desktop/ImageFeed/pages/home/imageFeed/index.tsx\",\n        lineNumber: 22,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ImageFeed, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = ImageFeed;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ImageFeed);\nvar _c;\n$RefreshReg$(_c, \"ImageFeed\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9ob21lL2ltYWdlRmVlZC9pbmRleC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQTBCO0FBQ2M7QUFJeEMsK0NBQStDO0FBQ1c7QUFDSDtBQUV2RCxNQUFNSyxZQUFrQztRQUFDLEVBQUVDLFVBQVUsRUFBRUMsSUFBSSxFQUFFQyxVQUFVLEVBQUU7O0lBQ3ZFLE1BQU1DLFNBQVNSLHNEQUFTQTtJQUV4QiwyQkFBMkI7SUFDM0IsTUFBTVMsbUJBQW1CLENBQ3ZCQyxPQUNBQztRQUVBSCxPQUFPSSxJQUFJLENBQUMsVUFBa0IsT0FBUkQ7SUFDeEI7SUFFQSxxQkFDRSw4REFBQ0U7a0JBQ0MsNEVBQUNBO1lBQUlDLFdBQVdiLDBFQUFXOzs4QkFDekIsOERBQUNDLHFEQUFVQTtvQkFBQ2MsU0FBUTtvQkFBS0MsV0FBVTtvQkFBTUMsT0FBTTs4QkFBUzs7Ozs7OzhCQUd4RCw4REFBQ0M7b0JBQWNkLFlBQVlBOzs7Ozs7OEJBQzNCLDhEQUFDRixxREFBVUE7b0JBQ1RpQixPQUFPYjtvQkFDUEQsTUFBTUE7b0JBQ05lLFVBQVVaO29CQUNWYSxPQUFNO29CQUNOQyxlQUFlO29CQUNmQyxjQUFjO29CQUNkQyxNQUFLOzs7Ozs7Ozs7Ozs7Ozs7OztBQUtmO0dBOUJNckI7O1FBQ1dKLGtEQUFTQTs7O0tBRHBCSTtBQWdDTiwrREFBZUEsU0FBU0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9ob21lL2ltYWdlRmVlZC9pbmRleC50c3g/OWM5ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IEltYWdlUHJvcHMgfSBmcm9tIFwiLi4vLi4vLi4vSW50ZXJmYWNlXCI7XG5cbmltcG9ydCBJbWFnZUdyaWQgZnJvbSBcIi4vaW1hZ2VHcmlkXCI7XG4vLyBpbXBvcnQgSW1hZ2VDYXJvdXNlbCBmcm9tIFwiLi9pbWFnZUNhcm91c2VsXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi8uLi8uLi9zdHlsZXMvaW1hZ2VGZWVkLm1vZHVsZS5jc3NcIjtcbmltcG9ydCB7IFR5cG9ncmFwaHksIFBhZ2luYXRpb24gfSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xuXG5jb25zdCBJbWFnZUZlZWQ6IFJlYWN0LkZDPEltYWdlUHJvcHM+ID0gKHsgY2hhcmFjdGVycywgcGFnZSwgdG90YWxQYWdlcyB9KSA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIC8vIGhhbmRsZSBwYWdpbmF0aW9uIHJvdXRlclxuICBjb25zdCBoYW5kbGVQYWdlQ2hhbmdlID0gKFxuICAgIGV2ZW50OiBSZWFjdC5DaGFuZ2VFdmVudDx1bmtub3duPixcbiAgICBuZXdQYWdlOiBudW1iZXJcbiAgKSA9PiB7XG4gICAgcm91dGVyLnB1c2goYC8/cGFnZT0ke25ld1BhZ2V9YCk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ob21lfT5cbiAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg1XCIgY29tcG9uZW50PVwiZGl2XCIgYWxpZ249XCJjZW50ZXJcIj5cbiAgICAgICAgICBSaWNrIGFuZCBNb3J0eSBDaGFyYWN0ZXJzXG4gICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgPEltYWdlQ2Fyb3VzZWwgY2hhcmFjdGVycz17Y2hhcmFjdGVyc30gLz5cbiAgICAgICAgPFBhZ2luYXRpb25cbiAgICAgICAgICBjb3VudD17dG90YWxQYWdlc31cbiAgICAgICAgICBwYWdlPXtwYWdlfVxuICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVQYWdlQ2hhbmdlfVxuICAgICAgICAgIHNoYXBlPVwiY2lyY3VsYXJcIlxuICAgICAgICAgIHNob3dGaXJzdEJ1dHRvblxuICAgICAgICAgIHNob3dMYXN0QnV0dG9uXG4gICAgICAgICAgc2l6ZT1cInNtYWxsXCJcbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSW1hZ2VGZWVkO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlUm91dGVyIiwic3R5bGVzIiwiVHlwb2dyYXBoeSIsIlBhZ2luYXRpb24iLCJJbWFnZUZlZWQiLCJjaGFyYWN0ZXJzIiwicGFnZSIsInRvdGFsUGFnZXMiLCJyb3V0ZXIiLCJoYW5kbGVQYWdlQ2hhbmdlIiwiZXZlbnQiLCJuZXdQYWdlIiwicHVzaCIsImRpdiIsImNsYXNzTmFtZSIsImhvbWUiLCJ2YXJpYW50IiwiY29tcG9uZW50IiwiYWxpZ24iLCJJbWFnZUNhcm91c2VsIiwiY291bnQiLCJvbkNoYW5nZSIsInNoYXBlIiwic2hvd0ZpcnN0QnV0dG9uIiwic2hvd0xhc3RCdXR0b24iLCJzaXplIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/home/imageFeed/index.tsx\n"));

/***/ })

});