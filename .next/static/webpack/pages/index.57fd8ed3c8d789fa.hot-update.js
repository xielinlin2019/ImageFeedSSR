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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _imageGrid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./imageGrid */ \"./pages/home/imageFeed/imageGrid/index.tsx\");\n/* harmony import */ var _styles_imageFeed_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../styles/imageFeed.module.css */ \"./styles/imageFeed.module.css\");\n/* harmony import */ var _styles_imageFeed_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_imageFeed_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n// import ImageCarousel from \"./imageCarousel\";\n\n\nconst ImageFeed = (param)=>{\n    let { characters, page, totalPages } = param;\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const [targetView, setTargetView] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"carousel\");\n    // handle pagination router\n    const handlePageChange = (event, newPage)=>{\n        router.push(\"/?page=\".concat(newPage));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_styles_imageFeed_module_css__WEBPACK_IMPORTED_MODULE_4___default().home),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Typography, {\n                    variant: \"h5\",\n                    component: \"div\",\n                    align: \"center\",\n                    children: \"Rick and Morty Characters\"\n                }, void 0, false, {\n                    fileName: \"/Users/xielinlin/Desktop/ImageFeed/pages/home/imageFeed/index.tsx\",\n                    lineNumber: 24,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: (prev)=>{\n                        setTargetView(targetView === \"carousel\" ? \"grid\" : \"carousel\");\n                    },\n                    children: [\n                        \"Switch to \",\n                        targetView,\n                        \" view\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/xielinlin/Desktop/ImageFeed/pages/home/imageFeed/index.tsx\",\n                    lineNumber: 27,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_imageGrid__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    characters: characters\n                }, void 0, false, {\n                    fileName: \"/Users/xielinlin/Desktop/ImageFeed/pages/home/imageFeed/index.tsx\",\n                    lineNumber: 34,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Pagination, {\n                    count: totalPages,\n                    page: page,\n                    onChange: handlePageChange,\n                    shape: \"circular\",\n                    showFirstButton: true,\n                    showLastButton: true,\n                    size: \"small\"\n                }, void 0, false, {\n                    fileName: \"/Users/xielinlin/Desktop/ImageFeed/pages/home/imageFeed/index.tsx\",\n                    lineNumber: 35,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/xielinlin/Desktop/ImageFeed/pages/home/imageFeed/index.tsx\",\n            lineNumber: 23,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/xielinlin/Desktop/ImageFeed/pages/home/imageFeed/index.tsx\",\n        lineNumber: 22,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ImageFeed, \"nE34Ep/U5yF8qttblRUylWUBKhY=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = ImageFeed;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ImageFeed);\nvar _c;\n$RefreshReg$(_c, \"ImageFeed\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9ob21lL2ltYWdlRmVlZC9pbmRleC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUF3QztBQUNBO0FBR0o7QUFDcEMsK0NBQStDO0FBQ1c7QUFDSDtBQUV2RCxNQUFNTyxZQUFrQztRQUFDLEVBQUVDLFVBQVUsRUFBRUMsSUFBSSxFQUFFQyxVQUFVLEVBQUU7O0lBQ3ZFLE1BQU1DLFNBQVNULHNEQUFTQTtJQUN4QixNQUFNLENBQUNVLFlBQVlDLGNBQWMsR0FBR1osK0NBQVFBLENBQUM7SUFDN0MsMkJBQTJCO0lBQzNCLE1BQU1hLG1CQUFtQixDQUN2QkMsT0FDQUM7UUFFQUwsT0FBT00sSUFBSSxDQUFDLFVBQWtCLE9BQVJEO0lBQ3hCO0lBRUEscUJBQ0UsOERBQUNFO2tCQUNDLDRFQUFDQTtZQUFJQyxXQUFXZiwwRUFBVzs7OEJBQ3pCLDhEQUFDQyxxREFBVUE7b0JBQUNnQixTQUFRO29CQUFLQyxXQUFVO29CQUFNQyxPQUFNOzhCQUFTOzs7Ozs7OEJBR3hELDhEQUFDQztvQkFDQ0MsU0FBUyxDQUFDQzt3QkFDUmIsY0FBY0QsZUFBZSxhQUFhLFNBQVM7b0JBQ3JEOzt3QkFDRDt3QkFDWUE7d0JBQVc7Ozs7Ozs7OEJBRXhCLDhEQUFDVCxrREFBU0E7b0JBQUNLLFlBQVlBOzs7Ozs7OEJBQ3ZCLDhEQUFDRixxREFBVUE7b0JBQ1RxQixPQUFPakI7b0JBQ1BELE1BQU1BO29CQUNObUIsVUFBVWQ7b0JBQ1ZlLE9BQU07b0JBQ05DLGVBQWU7b0JBQ2ZDLGNBQWM7b0JBQ2RDLE1BQUs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS2Y7R0FyQ016Qjs7UUFDV0wsa0RBQVNBOzs7S0FEcEJLO0FBdUNOLCtEQUFlQSxTQUFTQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2hvbWUvaW1hZ2VGZWVkL2luZGV4LnRzeD85YzlmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgeyBJbWFnZVByb3BzIH0gZnJvbSBcIi4uLy4uLy4uL0ludGVyZmFjZVwiO1xuXG5pbXBvcnQgSW1hZ2VHcmlkIGZyb20gXCIuL2ltYWdlR3JpZFwiO1xuLy8gaW1wb3J0IEltYWdlQ2Fyb3VzZWwgZnJvbSBcIi4vaW1hZ2VDYXJvdXNlbFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vLi4vLi4vc3R5bGVzL2ltYWdlRmVlZC5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgeyBUeXBvZ3JhcGh5LCBQYWdpbmF0aW9uIH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcblxuY29uc3QgSW1hZ2VGZWVkOiBSZWFjdC5GQzxJbWFnZVByb3BzPiA9ICh7IGNoYXJhY3RlcnMsIHBhZ2UsIHRvdGFsUGFnZXMgfSkgPT4ge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgW3RhcmdldFZpZXcsIHNldFRhcmdldFZpZXddID0gdXNlU3RhdGUoXCJjYXJvdXNlbFwiKTtcbiAgLy8gaGFuZGxlIHBhZ2luYXRpb24gcm91dGVyXG4gIGNvbnN0IGhhbmRsZVBhZ2VDaGFuZ2UgPSAoXG4gICAgZXZlbnQ6IFJlYWN0LkNoYW5nZUV2ZW50PHVua25vd24+LFxuICAgIG5ld1BhZ2U6IG51bWJlclxuICApID0+IHtcbiAgICByb3V0ZXIucHVzaChgLz9wYWdlPSR7bmV3UGFnZX1gKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmhvbWV9PlxuICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDVcIiBjb21wb25lbnQ9XCJkaXZcIiBhbGlnbj1cImNlbnRlclwiPlxuICAgICAgICAgIFJpY2sgYW5kIE1vcnR5IENoYXJhY3RlcnNcbiAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgb25DbGljaz17KHByZXYpID0+IHtcbiAgICAgICAgICAgIHNldFRhcmdldFZpZXcodGFyZ2V0VmlldyA9PT0gXCJjYXJvdXNlbFwiID8gXCJncmlkXCIgOiBcImNhcm91c2VsXCIpO1xuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICBTd2l0Y2ggdG8ge3RhcmdldFZpZXd9IHZpZXdcbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDxJbWFnZUdyaWQgY2hhcmFjdGVycz17Y2hhcmFjdGVyc30gLz5cbiAgICAgICAgPFBhZ2luYXRpb25cbiAgICAgICAgICBjb3VudD17dG90YWxQYWdlc31cbiAgICAgICAgICBwYWdlPXtwYWdlfVxuICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVQYWdlQ2hhbmdlfVxuICAgICAgICAgIHNoYXBlPVwiY2lyY3VsYXJcIlxuICAgICAgICAgIHNob3dGaXJzdEJ1dHRvblxuICAgICAgICAgIHNob3dMYXN0QnV0dG9uXG4gICAgICAgICAgc2l6ZT1cInNtYWxsXCJcbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSW1hZ2VGZWVkO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VSb3V0ZXIiLCJJbWFnZUdyaWQiLCJzdHlsZXMiLCJUeXBvZ3JhcGh5IiwiUGFnaW5hdGlvbiIsIkltYWdlRmVlZCIsImNoYXJhY3RlcnMiLCJwYWdlIiwidG90YWxQYWdlcyIsInJvdXRlciIsInRhcmdldFZpZXciLCJzZXRUYXJnZXRWaWV3IiwiaGFuZGxlUGFnZUNoYW5nZSIsImV2ZW50IiwibmV3UGFnZSIsInB1c2giLCJkaXYiLCJjbGFzc05hbWUiLCJob21lIiwidmFyaWFudCIsImNvbXBvbmVudCIsImFsaWduIiwiYnV0dG9uIiwib25DbGljayIsInByZXYiLCJjb3VudCIsIm9uQ2hhbmdlIiwic2hhcGUiLCJzaG93Rmlyc3RCdXR0b24iLCJzaG93TGFzdEJ1dHRvbiIsInNpemUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/home/imageFeed/index.tsx\n"));

/***/ })

});