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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _imageGrid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./imageGrid */ \"./pages/home/imageFeed/imageGrid/index.tsx\");\n/* harmony import */ var _imageCarousel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./imageCarousel */ \"./pages/home/imageFeed/imageCarousel/index.tsx\");\n/* harmony import */ var _styles_imageFeed_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../styles/imageFeed.module.css */ \"./styles/imageFeed.module.css\");\n/* harmony import */ var _styles_imageFeed_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_imageFeed_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst ImageFeed = (param)=>{\n    let { characters, page, totalPages } = param;\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const [targetView, setTargetView] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"carousel\");\n    // handle pagination router\n    const handlePageChange = (event, newPage)=>{\n        router.push(\"/?page=\".concat(newPage));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: ()=>{\n                    setTargetView(targetView === \"carousel\" ? \"grid\" : \"carousel\");\n                },\n                children: [\n                    \"Switch to \",\n                    targetView,\n                    \" view\"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/xielinlin/Desktop/ImageFeed/pages/home/imageFeed/index.tsx\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_imageFeed_module_css__WEBPACK_IMPORTED_MODULE_5___default().home),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Typography, {\n                        variant: \"h5\",\n                        component: \"div\",\n                        align: \"center\",\n                        children: \"Rick and Morty Characters\"\n                    }, void 0, false, {\n                        fileName: \"/Users/xielinlin/Desktop/ImageFeed/pages/home/imageFeed/index.tsx\",\n                        lineNumber: 31,\n                        columnNumber: 9\n                    }, undefined),\n                    targetView === \"carousel\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_imageGrid__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        characters: characters\n                    }, void 0, false, {\n                        fileName: \"/Users/xielinlin/Desktop/ImageFeed/pages/home/imageFeed/index.tsx\",\n                        lineNumber: 36,\n                        columnNumber: 11\n                    }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_imageCarousel__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        characters: characters\n                    }, void 0, false, {\n                        fileName: \"/Users/xielinlin/Desktop/ImageFeed/pages/home/imageFeed/index.tsx\",\n                        lineNumber: 38,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Pagination, {\n                        count: totalPages,\n                        page: page,\n                        onChange: handlePageChange,\n                        shape: \"circular\",\n                        showFirstButton: true,\n                        showLastButton: true,\n                        size: \"small\"\n                    }, void 0, false, {\n                        fileName: \"/Users/xielinlin/Desktop/ImageFeed/pages/home/imageFeed/index.tsx\",\n                        lineNumber: 40,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/xielinlin/Desktop/ImageFeed/pages/home/imageFeed/index.tsx\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/xielinlin/Desktop/ImageFeed/pages/home/imageFeed/index.tsx\",\n        lineNumber: 22,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ImageFeed, \"nE34Ep/U5yF8qttblRUylWUBKhY=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = ImageFeed;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ImageFeed);\nvar _c;\n$RefreshReg$(_c, \"ImageFeed\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9ob21lL2ltYWdlRmVlZC9pbmRleC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBd0M7QUFDQTtBQUdKO0FBQ1E7QUFDYztBQUNIO0FBRXZELE1BQU1RLFlBQWtDO1FBQUMsRUFBRUMsVUFBVSxFQUFFQyxJQUFJLEVBQUVDLFVBQVUsRUFBRTs7SUFDdkUsTUFBTUMsU0FBU1Ysc0RBQVNBO0lBQ3hCLE1BQU0sQ0FBQ1csWUFBWUMsY0FBYyxHQUFHYiwrQ0FBUUEsQ0FBQztJQUM3QywyQkFBMkI7SUFDM0IsTUFBTWMsbUJBQW1CLENBQ3ZCQyxPQUNBQztRQUVBTCxPQUFPTSxJQUFJLENBQUMsVUFBa0IsT0FBUkQ7SUFDeEI7SUFFQSxxQkFDRSw4REFBQ0U7OzBCQUNDLDhEQUFDQztnQkFDQ0MsU0FBUztvQkFDUFAsY0FBY0QsZUFBZSxhQUFhLFNBQVM7Z0JBQ3JEOztvQkFDRDtvQkFDWUE7b0JBQVc7Ozs7Ozs7MEJBRXhCLDhEQUFDTTtnQkFBSUcsV0FBV2pCLDBFQUFXOztrQ0FDekIsOERBQUNDLHFEQUFVQTt3QkFBQ2tCLFNBQVE7d0JBQUtDLFdBQVU7d0JBQU1DLE9BQU07a0NBQVM7Ozs7OztvQkFJdkRiLGVBQWUsMkJBQ2QsOERBQUNWLGtEQUFTQTt3QkFBQ00sWUFBWUE7Ozs7O2tEQUV2Qiw4REFBQ0wsc0RBQWFBO3dCQUFDSyxZQUFZQTs7Ozs7O2tDQUU3Qiw4REFBQ0YscURBQVVBO3dCQUNUb0IsT0FBT2hCO3dCQUNQRCxNQUFNQTt3QkFDTmtCLFVBQVViO3dCQUNWYyxPQUFNO3dCQUNOQyxlQUFlO3dCQUNmQyxjQUFjO3dCQUNkQyxNQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLZjtHQTFDTXhCOztRQUNXTixrREFBU0E7OztLQURwQk07QUE0Q04sK0RBQWVBLFNBQVNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaG9tZS9pbWFnZUZlZWQvaW5kZXgudHN4PzljOWYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IEltYWdlUHJvcHMgfSBmcm9tIFwiLi4vLi4vLi4vSW50ZXJmYWNlXCI7XG5cbmltcG9ydCBJbWFnZUdyaWQgZnJvbSBcIi4vaW1hZ2VHcmlkXCI7XG5pbXBvcnQgSW1hZ2VDYXJvdXNlbCBmcm9tIFwiLi9pbWFnZUNhcm91c2VsXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi8uLi8uLi9zdHlsZXMvaW1hZ2VGZWVkLm1vZHVsZS5jc3NcIjtcbmltcG9ydCB7IFR5cG9ncmFwaHksIFBhZ2luYXRpb24gfSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xuXG5jb25zdCBJbWFnZUZlZWQ6IFJlYWN0LkZDPEltYWdlUHJvcHM+ID0gKHsgY2hhcmFjdGVycywgcGFnZSwgdG90YWxQYWdlcyB9KSA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCBbdGFyZ2V0Vmlldywgc2V0VGFyZ2V0Vmlld10gPSB1c2VTdGF0ZShcImNhcm91c2VsXCIpO1xuICAvLyBoYW5kbGUgcGFnaW5hdGlvbiByb3V0ZXJcbiAgY29uc3QgaGFuZGxlUGFnZUNoYW5nZSA9IChcbiAgICBldmVudDogUmVhY3QuQ2hhbmdlRXZlbnQ8dW5rbm93bj4sXG4gICAgbmV3UGFnZTogbnVtYmVyXG4gICkgPT4ge1xuICAgIHJvdXRlci5wdXNoKGAvP3BhZ2U9JHtuZXdQYWdlfWApO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxidXR0b25cbiAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgIHNldFRhcmdldFZpZXcodGFyZ2V0VmlldyA9PT0gXCJjYXJvdXNlbFwiID8gXCJncmlkXCIgOiBcImNhcm91c2VsXCIpO1xuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICBTd2l0Y2ggdG8ge3RhcmdldFZpZXd9IHZpZXdcbiAgICAgIDwvYnV0dG9uPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ob21lfT5cbiAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg1XCIgY29tcG9uZW50PVwiZGl2XCIgYWxpZ249XCJjZW50ZXJcIj5cbiAgICAgICAgICBSaWNrIGFuZCBNb3J0eSBDaGFyYWN0ZXJzXG4gICAgICAgIDwvVHlwb2dyYXBoeT5cblxuICAgICAgICB7dGFyZ2V0VmlldyA9PT0gXCJjYXJvdXNlbFwiID8gKFxuICAgICAgICAgIDxJbWFnZUdyaWQgY2hhcmFjdGVycz17Y2hhcmFjdGVyc30gLz5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8SW1hZ2VDYXJvdXNlbCBjaGFyYWN0ZXJzPXtjaGFyYWN0ZXJzfSAvPlxuICAgICAgICApfVxuICAgICAgICA8UGFnaW5hdGlvblxuICAgICAgICAgIGNvdW50PXt0b3RhbFBhZ2VzfVxuICAgICAgICAgIHBhZ2U9e3BhZ2V9XG4gICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZVBhZ2VDaGFuZ2V9XG4gICAgICAgICAgc2hhcGU9XCJjaXJjdWxhclwiXG4gICAgICAgICAgc2hvd0ZpcnN0QnV0dG9uXG4gICAgICAgICAgc2hvd0xhc3RCdXR0b25cbiAgICAgICAgICBzaXplPVwic21hbGxcIlxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBJbWFnZUZlZWQ7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZVJvdXRlciIsIkltYWdlR3JpZCIsIkltYWdlQ2Fyb3VzZWwiLCJzdHlsZXMiLCJUeXBvZ3JhcGh5IiwiUGFnaW5hdGlvbiIsIkltYWdlRmVlZCIsImNoYXJhY3RlcnMiLCJwYWdlIiwidG90YWxQYWdlcyIsInJvdXRlciIsInRhcmdldFZpZXciLCJzZXRUYXJnZXRWaWV3IiwiaGFuZGxlUGFnZUNoYW5nZSIsImV2ZW50IiwibmV3UGFnZSIsInB1c2giLCJkaXYiLCJidXR0b24iLCJvbkNsaWNrIiwiY2xhc3NOYW1lIiwiaG9tZSIsInZhcmlhbnQiLCJjb21wb25lbnQiLCJhbGlnbiIsImNvdW50Iiwib25DaGFuZ2UiLCJzaGFwZSIsInNob3dGaXJzdEJ1dHRvbiIsInNob3dMYXN0QnV0dG9uIiwic2l6ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/home/imageFeed/index.tsx\n"));

/***/ })

});