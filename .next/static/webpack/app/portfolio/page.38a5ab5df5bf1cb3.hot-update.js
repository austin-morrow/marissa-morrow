"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/portfolio/page",{

/***/ "(app-pages-browser)/./node_modules/next/dist/api/navigation.js":
/*!**************************************************!*\
  !*** ./node_modules/next/dist/api/navigation.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _client_components_navigation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../client/components/navigation */ \"(app-pages-browser)/./node_modules/next/dist/client/components/navigation.js\");\n/* harmony import */ var _client_components_navigation__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_client_components_navigation__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _client_components_navigation__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== \"default\") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _client_components_navigation__WEBPACK_IMPORTED_MODULE_0__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)\n/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);\n\n\n//# sourceMappingURL=navigation.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYXBpL25hdmlnYXRpb24uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWdEOztBQUVoRCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2FwaS9uYXZpZ2F0aW9uLmpzPzFlNDQiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0ICogZnJvbSBcIi4uL2NsaWVudC9jb21wb25lbnRzL25hdmlnYXRpb25cIjtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bmF2aWdhdGlvbi5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./node_modules/next/dist/api/navigation.js\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/app/portfolio/page.js":
/*!***********************************!*\
  !*** ./src/app/portfolio/page.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Portfolio; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst photos = [\n    {\n        id: 1,\n        category: \"concerts\",\n        src: \"/images/portfolio/IMG_1333.png\",\n        width: 500,\n        height: 750\n    },\n    {\n        id: 2,\n        category: \"concerts\",\n        src: \"/images/portfolio/IMG_1830.png\",\n        width: 500,\n        height: 750\n    },\n    {\n        id: 3,\n        category: \"concerts\",\n        src: \"/images/portfolio/IMG_1831.png\",\n        width: 500,\n        height: 750\n    },\n    {\n        id: 4,\n        category: \"portraits\",\n        src: \"/images/portfolio/IMG_1832.png\",\n        width: 500,\n        height: 750\n    },\n    {\n        id: 5,\n        category: \"portraits\",\n        src: \"/images/portfolio/IMG_1833.png\",\n        width: 500,\n        height: 750\n    },\n    {\n        id: 6,\n        category: \"portraits\",\n        src: \"/images/portfolio/IMG_1834.png\",\n        width: 500,\n        height: 750\n    },\n    {\n        id: 7,\n        category: \"portraits\",\n        src: \"/images/portfolio/IMG_1835.png\",\n        width: 500,\n        height: 750\n    },\n    {\n        id: 8,\n        category: \"concerts\",\n        src: \"/images/portfolio/IMG_1838.png\",\n        width: 500,\n        height: 750\n    },\n    {\n        id: 9,\n        category: \"portraits\",\n        src: \"/images/portfolio/IMG_1839.png\",\n        width: 500,\n        height: 750\n    },\n    {\n        id: 10,\n        category: \"portraits\",\n        src: \"/images/portfolio/IMG_1840.png\",\n        width: 500,\n        height: 750\n    },\n    {\n        id: 11,\n        category: \"portraits\",\n        src: \"/images/portfolio/IMG_1841.png\",\n        width: 500,\n        height: 750\n    },\n    {\n        id: 12,\n        category: \"concerts\",\n        src: \"/images/portfolio/IMG_2871.png\",\n        width: 500,\n        height: 750\n    },\n    {\n        id: 13,\n        category: \"portraits\",\n        src: \"/images/portfolio/IMG_5700.png\",\n        width: 500,\n        height: 750\n    }\n];\nfunction Portfolio() {\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const { category } = router.query;\n    const [selectedCategory, setSelectedCategory] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"all\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (category) {\n            setSelectedCategory(category);\n        } else {\n            setSelectedCategory(\"all\");\n        }\n    }, [\n        category\n    ]);\n    const filteredPhotos = selectedCategory === \"all\" ? photos : photos.filter((photo)=>photo.category === selectedCategory);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4\",\n            children: filteredPhotos.map((photo)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mb-4 break-inside\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        src: photo.src,\n                        alt: photo.category,\n                        width: photo.width,\n                        height: photo.height,\n                        layout: \"responsive\",\n                        className: \"w-full h-auto\"\n                    }, void 0, false, {\n                        fileName: \"/Users/austinmorrow/Documents/morro/source/projects/marissa-morrow/src/app/portfolio/page.js\",\n                        lineNumber: 123,\n                        columnNumber: 13\n                    }, this)\n                }, photo.id, false, {\n                    fileName: \"/Users/austinmorrow/Documents/morro/source/projects/marissa-morrow/src/app/portfolio/page.js\",\n                    lineNumber: 122,\n                    columnNumber: 11\n                }, this))\n        }, void 0, false, {\n            fileName: \"/Users/austinmorrow/Documents/morro/source/projects/marissa-morrow/src/app/portfolio/page.js\",\n            lineNumber: 120,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/austinmorrow/Documents/morro/source/projects/marissa-morrow/src/app/portfolio/page.js\",\n        lineNumber: 119,\n        columnNumber: 5\n    }, this);\n}\n_s(Portfolio, \"5pf2XjyimJI3bQy84H/G5eC/4XY=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Portfolio;\n;\nvar _c;\n$RefreshReg$(_c, \"Portfolio\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcG9ydGZvbGlvL3BhZ2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFFbUQ7QUFDUDtBQUNiO0FBRS9CLE1BQU1LLFNBQVM7SUFDYjtRQUNFQyxJQUFJO1FBQ0pDLFVBQVU7UUFDVkMsS0FBSztRQUNMQyxPQUFPO1FBQ1BDLFFBQVE7SUFDVjtJQUNBO1FBQ0VKLElBQUk7UUFDSkMsVUFBVTtRQUNWQyxLQUFLO1FBQ0xDLE9BQU87UUFDUEMsUUFBUTtJQUNWO0lBQ0E7UUFDRUosSUFBSTtRQUNKQyxVQUFVO1FBQ1ZDLEtBQUs7UUFDTEMsT0FBTztRQUNQQyxRQUFRO0lBQ1Y7SUFDQTtRQUNFSixJQUFJO1FBQ0pDLFVBQVU7UUFDVkMsS0FBSztRQUNMQyxPQUFPO1FBQ1BDLFFBQVE7SUFDVjtJQUNBO1FBQ0VKLElBQUk7UUFDSkMsVUFBVTtRQUNWQyxLQUFLO1FBQ0xDLE9BQU87UUFDUEMsUUFBUTtJQUNWO0lBQ0E7UUFDRUosSUFBSTtRQUNKQyxVQUFVO1FBQ1ZDLEtBQUs7UUFDTEMsT0FBTztRQUNQQyxRQUFRO0lBQ1Y7SUFDQTtRQUNFSixJQUFJO1FBQ0pDLFVBQVU7UUFDVkMsS0FBSztRQUNMQyxPQUFPO1FBQ1BDLFFBQVE7SUFDVjtJQUNBO1FBQ0VKLElBQUk7UUFDSkMsVUFBVTtRQUNWQyxLQUFLO1FBQ0xDLE9BQU87UUFDUEMsUUFBUTtJQUNWO0lBQ0E7UUFDRUosSUFBSTtRQUNKQyxVQUFVO1FBQ1ZDLEtBQUs7UUFDTEMsT0FBTztRQUNQQyxRQUFRO0lBQ1Y7SUFDQTtRQUNFSixJQUFJO1FBQ0pDLFVBQVU7UUFDVkMsS0FBSztRQUNMQyxPQUFPO1FBQ1BDLFFBQVE7SUFDVjtJQUNBO1FBQ0VKLElBQUk7UUFDSkMsVUFBVTtRQUNWQyxLQUFLO1FBQ0xDLE9BQU87UUFDUEMsUUFBUTtJQUNWO0lBQ0E7UUFDRUosSUFBSTtRQUNKQyxVQUFVO1FBQ1ZDLEtBQUs7UUFDTEMsT0FBTztRQUNQQyxRQUFRO0lBQ1Y7SUFDQTtRQUNFSixJQUFJO1FBQ0pDLFVBQVU7UUFDVkMsS0FBSztRQUNMQyxPQUFPO1FBQ1BDLFFBQVE7SUFDVjtDQUNEO0FBRWMsU0FBU0M7O0lBQ3RCLE1BQU1DLFNBQVNULDBEQUFTQTtJQUN4QixNQUFNLEVBQUVJLFFBQVEsRUFBRSxHQUFHSyxPQUFPQyxLQUFLO0lBQ2pDLE1BQU0sQ0FBQ0Msa0JBQWtCQyxvQkFBb0IsR0FBR2QsK0NBQVFBLENBQUM7SUFFekRDLGdEQUFTQSxDQUFDO1FBQ1IsSUFBSUssVUFBVTtZQUNaUSxvQkFBb0JSO1FBQ3RCLE9BQU87WUFDTFEsb0JBQW9CO1FBQ3RCO0lBQ0YsR0FBRztRQUFDUjtLQUFTO0lBRWIsTUFBTVMsaUJBQWlCRixxQkFBcUIsUUFDeENULFNBQ0FBLE9BQU9ZLE1BQU0sQ0FBQ0MsQ0FBQUEsUUFBU0EsTUFBTVgsUUFBUSxLQUFLTztJQUU5QyxxQkFDRSw4REFBQ0s7a0JBQ0MsNEVBQUNBO1lBQUlDLFdBQVU7c0JBQ1pKLGVBQWVLLEdBQUcsQ0FBQ0gsQ0FBQUEsc0JBQ2xCLDhEQUFDQztvQkFBbUJDLFdBQVU7OEJBQzVCLDRFQUFDaEIsa0RBQUtBO3dCQUNKSSxLQUFLVSxNQUFNVixHQUFHO3dCQUNkYyxLQUFLSixNQUFNWCxRQUFRO3dCQUNuQkUsT0FBT1MsTUFBTVQsS0FBSzt3QkFDbEJDLFFBQVFRLE1BQU1SLE1BQU07d0JBQ3BCYSxRQUFPO3dCQUNQSCxXQUFVOzs7Ozs7bUJBUEpGLE1BQU1aLEVBQUU7Ozs7Ozs7Ozs7Ozs7OztBQWM1QjtHQW5Dd0JLOztRQUNQUixzREFBU0E7OztLQURGUSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL3BvcnRmb2xpby9wYWdlLmpzPzg1MmQiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcblxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L25hdmlnYXRpb24nO1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xuXG5jb25zdCBwaG90b3MgPSBbXG4gIHtcbiAgICBpZDogMSxcbiAgICBjYXRlZ29yeTogXCJjb25jZXJ0c1wiLFxuICAgIHNyYzogXCIvaW1hZ2VzL3BvcnRmb2xpby9JTUdfMTMzMy5wbmdcIixcbiAgICB3aWR0aDogNTAwLFxuICAgIGhlaWdodDogNzUwLFxuICB9LFxuICB7XG4gICAgaWQ6IDIsXG4gICAgY2F0ZWdvcnk6IFwiY29uY2VydHNcIixcbiAgICBzcmM6IFwiL2ltYWdlcy9wb3J0Zm9saW8vSU1HXzE4MzAucG5nXCIsXG4gICAgd2lkdGg6IDUwMCxcbiAgICBoZWlnaHQ6IDc1MCxcbiAgfSxcbiAge1xuICAgIGlkOiAzLFxuICAgIGNhdGVnb3J5OiBcImNvbmNlcnRzXCIsXG4gICAgc3JjOiBcIi9pbWFnZXMvcG9ydGZvbGlvL0lNR18xODMxLnBuZ1wiLFxuICAgIHdpZHRoOiA1MDAsXG4gICAgaGVpZ2h0OiA3NTAsXG4gIH0sXG4gIHtcbiAgICBpZDogNCxcbiAgICBjYXRlZ29yeTogXCJwb3J0cmFpdHNcIixcbiAgICBzcmM6IFwiL2ltYWdlcy9wb3J0Zm9saW8vSU1HXzE4MzIucG5nXCIsXG4gICAgd2lkdGg6IDUwMCxcbiAgICBoZWlnaHQ6IDc1MCxcbiAgfSxcbiAge1xuICAgIGlkOiA1LFxuICAgIGNhdGVnb3J5OiBcInBvcnRyYWl0c1wiLFxuICAgIHNyYzogXCIvaW1hZ2VzL3BvcnRmb2xpby9JTUdfMTgzMy5wbmdcIixcbiAgICB3aWR0aDogNTAwLFxuICAgIGhlaWdodDogNzUwLFxuICB9LFxuICB7XG4gICAgaWQ6IDYsXG4gICAgY2F0ZWdvcnk6IFwicG9ydHJhaXRzXCIsXG4gICAgc3JjOiBcIi9pbWFnZXMvcG9ydGZvbGlvL0lNR18xODM0LnBuZ1wiLFxuICAgIHdpZHRoOiA1MDAsXG4gICAgaGVpZ2h0OiA3NTAsXG4gIH0sXG4gIHtcbiAgICBpZDogNyxcbiAgICBjYXRlZ29yeTogXCJwb3J0cmFpdHNcIixcbiAgICBzcmM6IFwiL2ltYWdlcy9wb3J0Zm9saW8vSU1HXzE4MzUucG5nXCIsXG4gICAgd2lkdGg6IDUwMCxcbiAgICBoZWlnaHQ6IDc1MCxcbiAgfSxcbiAge1xuICAgIGlkOiA4LFxuICAgIGNhdGVnb3J5OiBcImNvbmNlcnRzXCIsXG4gICAgc3JjOiBcIi9pbWFnZXMvcG9ydGZvbGlvL0lNR18xODM4LnBuZ1wiLFxuICAgIHdpZHRoOiA1MDAsXG4gICAgaGVpZ2h0OiA3NTAsXG4gIH0sXG4gIHtcbiAgICBpZDogOSxcbiAgICBjYXRlZ29yeTogXCJwb3J0cmFpdHNcIixcbiAgICBzcmM6IFwiL2ltYWdlcy9wb3J0Zm9saW8vSU1HXzE4MzkucG5nXCIsXG4gICAgd2lkdGg6IDUwMCxcbiAgICBoZWlnaHQ6IDc1MCxcbiAgfSxcbiAge1xuICAgIGlkOiAxMCxcbiAgICBjYXRlZ29yeTogXCJwb3J0cmFpdHNcIixcbiAgICBzcmM6IFwiL2ltYWdlcy9wb3J0Zm9saW8vSU1HXzE4NDAucG5nXCIsXG4gICAgd2lkdGg6IDUwMCxcbiAgICBoZWlnaHQ6IDc1MCxcbiAgfSxcbiAge1xuICAgIGlkOiAxMSxcbiAgICBjYXRlZ29yeTogXCJwb3J0cmFpdHNcIixcbiAgICBzcmM6IFwiL2ltYWdlcy9wb3J0Zm9saW8vSU1HXzE4NDEucG5nXCIsXG4gICAgd2lkdGg6IDUwMCxcbiAgICBoZWlnaHQ6IDc1MCxcbiAgfSxcbiAge1xuICAgIGlkOiAxMixcbiAgICBjYXRlZ29yeTogXCJjb25jZXJ0c1wiLFxuICAgIHNyYzogXCIvaW1hZ2VzL3BvcnRmb2xpby9JTUdfMjg3MS5wbmdcIixcbiAgICB3aWR0aDogNTAwLFxuICAgIGhlaWdodDogNzUwLFxuICB9LFxuICB7XG4gICAgaWQ6IDEzLFxuICAgIGNhdGVnb3J5OiBcInBvcnRyYWl0c1wiLFxuICAgIHNyYzogXCIvaW1hZ2VzL3BvcnRmb2xpby9JTUdfNTcwMC5wbmdcIixcbiAgICB3aWR0aDogNTAwLFxuICAgIGhlaWdodDogNzUwLFxuICB9LFxuXTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUG9ydGZvbGlvKCkge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgeyBjYXRlZ29yeSB9ID0gcm91dGVyLnF1ZXJ5O1xuICBjb25zdCBbc2VsZWN0ZWRDYXRlZ29yeSwgc2V0U2VsZWN0ZWRDYXRlZ29yeV0gPSB1c2VTdGF0ZSgnYWxsJyk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoY2F0ZWdvcnkpIHtcbiAgICAgIHNldFNlbGVjdGVkQ2F0ZWdvcnkoY2F0ZWdvcnkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZXRTZWxlY3RlZENhdGVnb3J5KCdhbGwnKTtcbiAgICB9XG4gIH0sIFtjYXRlZ29yeV0pO1xuXG4gIGNvbnN0IGZpbHRlcmVkUGhvdG9zID0gc2VsZWN0ZWRDYXRlZ29yeSA9PT0gJ2FsbCdcbiAgICA/IHBob3Rvc1xuICAgIDogcGhvdG9zLmZpbHRlcihwaG90byA9PiBwaG90by5jYXRlZ29yeSA9PT0gc2VsZWN0ZWRDYXRlZ29yeSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5zLTEgc206Y29sdW1ucy0yIG1kOmNvbHVtbnMtMyBsZzpjb2x1bW5zLTQgZ2FwLTRcIj5cbiAgICAgICAge2ZpbHRlcmVkUGhvdG9zLm1hcChwaG90byA9PiAoXG4gICAgICAgICAgPGRpdiBrZXk9e3Bob3RvLmlkfSBjbGFzc05hbWU9XCJtYi00IGJyZWFrLWluc2lkZVwiPlxuICAgICAgICAgICAgPEltYWdlIFxuICAgICAgICAgICAgICBzcmM9e3Bob3RvLnNyY30gXG4gICAgICAgICAgICAgIGFsdD17cGhvdG8uY2F0ZWdvcnl9IFxuICAgICAgICAgICAgICB3aWR0aD17cGhvdG8ud2lkdGh9IFxuICAgICAgICAgICAgICBoZWlnaHQ9e3Bob3RvLmhlaWdodH0gXG4gICAgICAgICAgICAgIGxheW91dD1cInJlc3BvbnNpdmVcIiBcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGgtYXV0b1wiIFxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSl9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VSb3V0ZXIiLCJJbWFnZSIsInBob3RvcyIsImlkIiwiY2F0ZWdvcnkiLCJzcmMiLCJ3aWR0aCIsImhlaWdodCIsIlBvcnRmb2xpbyIsInJvdXRlciIsInF1ZXJ5Iiwic2VsZWN0ZWRDYXRlZ29yeSIsInNldFNlbGVjdGVkQ2F0ZWdvcnkiLCJmaWx0ZXJlZFBob3RvcyIsImZpbHRlciIsInBob3RvIiwiZGl2IiwiY2xhc3NOYW1lIiwibWFwIiwiYWx0IiwibGF5b3V0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/portfolio/page.js\n"));

/***/ })

});