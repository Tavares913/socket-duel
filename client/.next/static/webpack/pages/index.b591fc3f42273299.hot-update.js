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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _store_gameDetailsSlice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../store/gameDetailsSlice */ \"./store/gameDetailsSlice.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _utils_socketConnect__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/socketConnect */ \"./utils/socketConnect.js\");\n/* harmony import */ var _utils_socketConnect__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_utils_socketConnect__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _styles_index_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/index.module.css */ \"./styles/index.module.css\");\n/* harmony import */ var _styles_index_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_index_module_css__WEBPACK_IMPORTED_MODULE_8__);\nvar _this = undefined;\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar Home = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), showJoinRoomForm = ref[0], setShowJoinRoomForm = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), errorJoiningRoom = ref1[0], setErrorJoiningRoom = ref1[1];\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();\n    var roomCodeRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();\n    var showJoinRoomHandler = function() {\n        setShowJoinRoomForm(function(state) {\n            return !state;\n        });\n    };\n    var howToPlayHandler = function() {\n        router.push(\"howToPlay\");\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        _utils_socketConnect__WEBPACK_IMPORTED_MODULE_7___default().on(\"room-created\", function(roomId) {\n            dispatch(_store_gameDetailsSlice__WEBPACK_IMPORTED_MODULE_5__.gameDetailsActions.setRoomId(roomId));\n            dispatch(_store_gameDetailsSlice__WEBPACK_IMPORTED_MODULE_5__.gameDetailsActions.setPlayerNum(1));\n            router.push(\"/\".concat(roomId));\n        });\n        _utils_socketConnect__WEBPACK_IMPORTED_MODULE_7___default().on(\"room-joined\", function(roomId) {\n            dispatch(_store_gameDetailsSlice__WEBPACK_IMPORTED_MODULE_5__.gameDetailsActions.setRoomId(roomId));\n            dispatch(_store_gameDetailsSlice__WEBPACK_IMPORTED_MODULE_5__.gameDetailsActions.setPlayerNum(2));\n            router.push(\"/\".concat(roomId));\n        });\n        _utils_socketConnect__WEBPACK_IMPORTED_MODULE_7___default().on(\"room-join-error\", function() {\n            setErrorJoiningRoom(true);\n        });\n    });\n    var createRoomHandler = function() {\n        _utils_socketConnect__WEBPACK_IMPORTED_MODULE_7___default().emit(\"create-room\");\n    };\n    var joinRoomHandler = function(e) {\n        e.preventDefault();\n        _utils_socketConnect__WEBPACK_IMPORTED_MODULE_7___default().emit(\"join-room\", roomCodeRef.current.value);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_4___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Socket Duel\"\n                    }, void 0, false, {\n                        fileName: \"/Users/tavares913/Desktop/CS/Projects/socket-duel/client/pages/index.js\",\n                        lineNumber: 58,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"description\", {\n                        children: \"The home page for socket duel.\"\n                    }, void 0, false, {\n                        fileName: \"/Users/tavares913/Desktop/CS/Projects/socket-duel/client/pages/index.js\",\n                        lineNumber: 59,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/tavares913/Desktop/CS/Projects/socket-duel/client/pages/index.js\",\n                lineNumber: 57,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_index_module_css__WEBPACK_IMPORTED_MODULE_8___default()[\"main-container\"]),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_index_module_css__WEBPACK_IMPORTED_MODULE_8___default()[\"sub-container\"]),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: (_styles_index_module_css__WEBPACK_IMPORTED_MODULE_8___default().title),\n                            children: \"Socket Duel\"\n                        }, void 0, false, {\n                            fileName: \"/Users/tavares913/Desktop/CS/Projects/socket-duel/client/pages/index.js\",\n                            lineNumber: 63,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: createRoomHandler,\n                            className: \"\".concat((_styles_index_module_css__WEBPACK_IMPORTED_MODULE_8___default()[\"create-room-button\"]), \" \").concat((_styles_index_module_css__WEBPACK_IMPORTED_MODULE_8___default().button)),\n                            children: \"Create a Room\"\n                        }, void 0, false, {\n                            fileName: \"/Users/tavares913/Desktop/CS/Projects/socket-duel/client/pages/index.js\",\n                            lineNumber: 64,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: showJoinRoomHandler,\n                            className: (_styles_index_module_css__WEBPACK_IMPORTED_MODULE_8___default().button),\n                            children: \"Join a Room\"\n                        }, void 0, false, {\n                            fileName: \"/Users/tavares913/Desktop/CS/Projects/socket-duel/client/pages/index.js\",\n                            lineNumber: 70,\n                            columnNumber: 11\n                        }, _this),\n                        showJoinRoomForm && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                            onSubmit: joinRoomHandler,\n                            className: (_styles_index_module_css__WEBPACK_IMPORTED_MODULE_8___default()[\"join-room-form\"]),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    htmlFor: \"room-code\",\n                                    children: \"Join room: \"\n                                }, void 0, false, {\n                                    fileName: \"/Users/tavares913/Desktop/CS/Projects/socket-duel/client/pages/index.js\",\n                                    lineNumber: 78,\n                                    columnNumber: 15\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    ref: roomCodeRef,\n                                    id: \"room-code\",\n                                    type: \"text\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/tavares913/Desktop/CS/Projects/socket-duel/client/pages/index.js\",\n                                    lineNumber: 79,\n                                    columnNumber: 15\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: (_styles_index_module_css__WEBPACK_IMPORTED_MODULE_8___default().button),\n                                    children: \"Submit\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/tavares913/Desktop/CS/Projects/socket-duel/client/pages/index.js\",\n                                    lineNumber: 80,\n                                    columnNumber: 15\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/tavares913/Desktop/CS/Projects/socket-duel/client/pages/index.js\",\n                            lineNumber: 74,\n                            columnNumber: 13\n                        }, _this),\n                        errorJoiningRoom && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: (_styles_index_module_css__WEBPACK_IMPORTED_MODULE_8___default().error),\n                            children: \"Either an invalid room id, or two people are already in that room.\"\n                        }, void 0, false, {\n                            fileName: \"/Users/tavares913/Desktop/CS/Projects/socket-duel/client/pages/index.js\",\n                            lineNumber: 84,\n                            columnNumber: 13\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_index_module_css__WEBPACK_IMPORTED_MODULE_8___default()[\"how-to-play-link\"]),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                href: \"/howToPlay\",\n                                children: \"How to Play\"\n                            }, void 0, false, {\n                                fileName: \"/Users/tavares913/Desktop/CS/Projects/socket-duel/client/pages/index.js\",\n                                lineNumber: 89,\n                                columnNumber: 13\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/tavares913/Desktop/CS/Projects/socket-duel/client/pages/index.js\",\n                            lineNumber: 88,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/tavares913/Desktop/CS/Projects/socket-duel/client/pages/index.js\",\n                    lineNumber: 62,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/tavares913/Desktop/CS/Projects/socket-duel/client/pages/index.js\",\n                lineNumber: 61,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true);\n};\n_s(Home, \"A4SImiUClcq4WlMsy83wbzplRhk=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter,\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch\n    ];\n});\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUFvRDtBQUNWO0FBQ2I7QUFDQTtBQUVrQztBQUN2QjtBQUNJO0FBRUs7O0FBRWpELElBQU1VLElBQUksR0FBRyxXQUFNOztJQUNqQixJQUFnRFYsR0FBVSxHQUFWQSwrQ0FBUSxFQUFFLEVBWjVELGdCQVl5QixHQUF5QkEsR0FBVSxHQUFuQyxFQVp6QixtQkFZOEMsR0FBSUEsR0FBVSxHQUFkO0lBQzVDLElBQWdEQSxJQUFVLEdBQVZBLCtDQUFRLEVBQUUsRUFiNUQsZ0JBYXlCLEdBQXlCQSxJQUFVLEdBQW5DLEVBYnpCLG1CQWE4QyxHQUFJQSxJQUFVLEdBQWQ7SUFFNUMsSUFBTWUsTUFBTSxHQUFHUixzREFBUyxFQUFFO0lBQzFCLElBQU1TLFdBQVcsR0FBR2QsNkNBQU0sRUFBRTtJQUM1QixJQUFNZSxRQUFRLEdBQUdkLHdEQUFXLEVBQUU7SUFFOUIsSUFBTWUsbUJBQW1CLEdBQUcsV0FBTTtRQUNoQ04sbUJBQW1CLENBQUMsU0FBQ08sS0FBSzttQkFBSyxDQUFDQSxLQUFLO1NBQUEsQ0FBQyxDQUFDO0tBQ3hDO0lBRUQsSUFBTUMsZ0JBQWdCLEdBQUcsV0FBTTtRQUM3QkwsTUFBTSxDQUFDTSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7S0FDMUI7SUFFRHBCLGdEQUFTLENBQUMsV0FBTTtRQUNkTyw4REFBUyxDQUFDLGNBQWMsRUFBRSxTQUFDZSxNQUFNLEVBQUs7WUFDcENOLFFBQVEsQ0FBQ1gsaUZBQTRCLENBQUNpQixNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQy9DTixRQUFRLENBQUNYLG9GQUErQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDN0NTLE1BQU0sQ0FBQ00sSUFBSSxDQUFDLEdBQUUsQ0FBUyxPQUFQRSxNQUFNLENBQUUsQ0FBQyxDQUFDO1NBQzNCLENBQUMsQ0FBQztRQUVIZiw4REFBUyxDQUFDLGFBQWEsRUFBRSxTQUFDZSxNQUFNLEVBQUs7WUFDbkNOLFFBQVEsQ0FBQ1gsaUZBQTRCLENBQUNpQixNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQy9DTixRQUFRLENBQUNYLG9GQUErQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDN0NTLE1BQU0sQ0FBQ00sSUFBSSxDQUFDLEdBQUUsQ0FBUyxPQUFQRSxNQUFNLENBQUUsQ0FBQyxDQUFDO1NBQzNCLENBQUMsQ0FBQztRQUVIZiw4REFBUyxDQUFDLGlCQUFpQixFQUFFLFdBQU07WUFDakNNLG1CQUFtQixDQUFDLElBQUksQ0FBQyxDQUFDO1NBQzNCLENBQUMsQ0FBQztLQUNKLENBQUMsQ0FBQztJQUVILElBQU1ZLGlCQUFpQixHQUFHLFdBQU07UUFDOUJsQixnRUFBVyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0tBQzVCO0lBRUQsSUFBTW9CLGVBQWUsR0FBRyxTQUFDQyxDQUFDLEVBQUs7UUFDN0JBLENBQUMsQ0FBQ0MsY0FBYyxFQUFFLENBQUM7UUFDbkJ0QixnRUFBVyxDQUFDLFdBQVcsRUFBRVEsV0FBVyxDQUFDZSxPQUFPLENBQUNDLEtBQUssQ0FBQyxDQUFDO0tBQ3JEO0lBRUQscUJBQ0U7OzBCQUNFLDhEQUFDM0Isa0RBQUk7O2tDQUNILDhEQUFDNEIsT0FBSztrQ0FBQyxhQUFXOzs7Ozs2QkFBUTtrQ0FDMUIsOERBQUNDLGFBQVc7a0NBQUMsZ0NBQThCOzs7Ozs2QkFBYzs7Ozs7O3FCQUNwRDswQkFDUCw4REFBQ0MsS0FBRztnQkFBQ0MsU0FBUyxFQUFFM0IsbUZBQXlCOzBCQUN2Qyw0RUFBQzBCLEtBQUc7b0JBQUNDLFNBQVMsRUFBRTNCLGtGQUF3Qjs7c0NBQ3RDLDhEQUFDNEIsSUFBRTs0QkFBQ0QsU0FBUyxFQUFFM0IsdUVBQWE7c0NBQUUsYUFBVzs7Ozs7aUNBQUs7c0NBQzlDLDhEQUFDNkIsUUFBTTs0QkFDTEMsT0FBTyxFQUFFYixpQkFBaUI7NEJBQzFCVSxTQUFTLEVBQUUsRUFBQyxDQUFtQzNCLE1BQWMsQ0FBL0NBLHVGQUE2QixFQUFDLEdBQUMsQ0FBaUIsUUFBZkEsd0VBQWMsQ0FBRTtzQ0FDaEUsZUFFRDs7Ozs7aUNBQVM7c0NBQ1QsOERBQUM2QixRQUFNOzRCQUFDQyxPQUFPLEVBQUVyQixtQkFBbUI7NEJBQUVrQixTQUFTLEVBQUUzQix3RUFBYztzQ0FBRSxhQUVqRTs7Ozs7aUNBQVM7d0JBQ1JFLGdCQUFnQixrQkFDZiw4REFBQzZCLE1BQUk7NEJBQ0hDLFFBQVEsRUFBRWIsZUFBZTs0QkFDekJRLFNBQVMsRUFBRTNCLG1GQUF5Qjs7OENBRXBDLDhEQUFDaUMsT0FBSztvQ0FBQ0MsT0FBTyxFQUFDLFdBQVc7OENBQUMsYUFBVzs7Ozs7eUNBQVE7OENBQzlDLDhEQUFDQyxPQUFLO29DQUFDQyxHQUFHLEVBQUU3QixXQUFXO29DQUFFOEIsRUFBRSxFQUFDLFdBQVc7b0NBQUNDLElBQUksRUFBQyxNQUFNOzs7Ozt5Q0FBRzs4Q0FDdEQsOERBQUNULFFBQU07b0NBQUNGLFNBQVMsRUFBRTNCLHdFQUFjOzhDQUFFLFFBQU07Ozs7O3lDQUFTOzs7Ozs7aUNBQzdDO3dCQUVSSSxnQkFBZ0Isa0JBQ2YsOERBQUNtQyxHQUFDOzRCQUFDWixTQUFTLEVBQUUzQix1RUFBYTtzQ0FBRSxvRUFFN0I7Ozs7O2lDQUFJO3NDQUVOLDhEQUFDMEIsS0FBRzs0QkFBQ0MsU0FBUyxFQUFFM0IscUZBQTJCO3NDQUN6Qyw0RUFBQ0wsa0RBQUk7Z0NBQUM4QyxJQUFJLEVBQUMsWUFBWTswQ0FBQyxhQUFXOzs7OztxQ0FBTzs7Ozs7aUNBQ3RDOzs7Ozs7eUJBQ0Y7Ozs7O3FCQUNGOztvQkFDTCxDQUNIO0NBQ0g7R0FuRkt4QyxJQUFJOztRQUlPSCxrREFBUztRQUVQSixvREFBVzs7O0FBTnhCTyxLQUFBQSxJQUFJO0FBcUZWLCtEQUFlQSxJQUFJLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5cbmltcG9ydCB7IGdhbWVEZXRhaWxzQWN0aW9ucyB9IGZyb20gXCIuLi9zdG9yZS9nYW1lRGV0YWlsc1NsaWNlXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCBzb2NrZXQgZnJvbSBcIi4uL3V0aWxzL3NvY2tldENvbm5lY3RcIjtcblxuaW1wb3J0IGNsYXNzZXMgZnJvbSBcIi4uL3N0eWxlcy9pbmRleC5tb2R1bGUuY3NzXCI7XG5cbmNvbnN0IEhvbWUgPSAoKSA9PiB7XG4gIGNvbnN0IFtzaG93Sm9pblJvb21Gb3JtLCBzZXRTaG93Sm9pblJvb21Gb3JtXSA9IHVzZVN0YXRlKCk7XG4gIGNvbnN0IFtlcnJvckpvaW5pbmdSb29tLCBzZXRFcnJvckpvaW5pbmdSb29tXSA9IHVzZVN0YXRlKCk7XG5cbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IHJvb21Db2RlUmVmID0gdXNlUmVmKCk7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcblxuICBjb25zdCBzaG93Sm9pblJvb21IYW5kbGVyID0gKCkgPT4ge1xuICAgIHNldFNob3dKb2luUm9vbUZvcm0oKHN0YXRlKSA9PiAhc3RhdGUpO1xuICB9O1xuXG4gIGNvbnN0IGhvd1RvUGxheUhhbmRsZXIgPSAoKSA9PiB7XG4gICAgcm91dGVyLnB1c2goXCJob3dUb1BsYXlcIik7XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzb2NrZXQub24oXCJyb29tLWNyZWF0ZWRcIiwgKHJvb21JZCkgPT4ge1xuICAgICAgZGlzcGF0Y2goZ2FtZURldGFpbHNBY3Rpb25zLnNldFJvb21JZChyb29tSWQpKTtcbiAgICAgIGRpc3BhdGNoKGdhbWVEZXRhaWxzQWN0aW9ucy5zZXRQbGF5ZXJOdW0oMSkpO1xuICAgICAgcm91dGVyLnB1c2goYC8ke3Jvb21JZH1gKTtcbiAgICB9KTtcblxuICAgIHNvY2tldC5vbihcInJvb20tam9pbmVkXCIsIChyb29tSWQpID0+IHtcbiAgICAgIGRpc3BhdGNoKGdhbWVEZXRhaWxzQWN0aW9ucy5zZXRSb29tSWQocm9vbUlkKSk7XG4gICAgICBkaXNwYXRjaChnYW1lRGV0YWlsc0FjdGlvbnMuc2V0UGxheWVyTnVtKDIpKTtcbiAgICAgIHJvdXRlci5wdXNoKGAvJHtyb29tSWR9YCk7XG4gICAgfSk7XG5cbiAgICBzb2NrZXQub24oXCJyb29tLWpvaW4tZXJyb3JcIiwgKCkgPT4ge1xuICAgICAgc2V0RXJyb3JKb2luaW5nUm9vbSh0cnVlKTtcbiAgICB9KTtcbiAgfSk7XG5cbiAgY29uc3QgY3JlYXRlUm9vbUhhbmRsZXIgPSAoKSA9PiB7XG4gICAgc29ja2V0LmVtaXQoXCJjcmVhdGUtcm9vbVwiKTtcbiAgfTtcblxuICBjb25zdCBqb2luUm9vbUhhbmRsZXIgPSAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBzb2NrZXQuZW1pdChcImpvaW4tcm9vbVwiLCByb29tQ29kZVJlZi5jdXJyZW50LnZhbHVlKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPlNvY2tldCBEdWVsPC90aXRsZT5cbiAgICAgICAgPGRlc2NyaXB0aW9uPlRoZSBob21lIHBhZ2UgZm9yIHNvY2tldCBkdWVsLjwvZGVzY3JpcHRpb24+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlc1tcIm1haW4tY29udGFpbmVyXCJdfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXNbXCJzdWItY29udGFpbmVyXCJdfT5cbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlfT5Tb2NrZXQgRHVlbDwvaDE+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgb25DbGljaz17Y3JlYXRlUm9vbUhhbmRsZXJ9XG4gICAgICAgICAgICBjbGFzc05hbWU9e2Ake2NsYXNzZXNbXCJjcmVhdGUtcm9vbS1idXR0b25cIl19ICR7Y2xhc3Nlcy5idXR0b259YH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBDcmVhdGUgYSBSb29tXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtzaG93Sm9pblJvb21IYW5kbGVyfSBjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9ufT5cbiAgICAgICAgICAgIEpvaW4gYSBSb29tXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAge3Nob3dKb2luUm9vbUZvcm0gJiYgKFxuICAgICAgICAgICAgPGZvcm1cbiAgICAgICAgICAgICAgb25TdWJtaXQ9e2pvaW5Sb29tSGFuZGxlcn1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzW1wiam9pbi1yb29tLWZvcm1cIl19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicm9vbS1jb2RlXCI+Sm9pbiByb29tOiA8L2xhYmVsPlxuICAgICAgICAgICAgICA8aW5wdXQgcmVmPXtyb29tQ29kZVJlZn0gaWQ9XCJyb29tLWNvZGVcIiB0eXBlPVwidGV4dFwiIC8+XG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtjbGFzc2VzLmJ1dHRvbn0+U3VibWl0PC9idXR0b24+XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgKX1cbiAgICAgICAgICB7ZXJyb3JKb2luaW5nUm9vbSAmJiAoXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9e2NsYXNzZXMuZXJyb3J9PlxuICAgICAgICAgICAgICBFaXRoZXIgYW4gaW52YWxpZCByb29tIGlkLCBvciB0d28gcGVvcGxlIGFyZSBhbHJlYWR5IGluIHRoYXQgcm9vbS5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICApfVxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzW1wiaG93LXRvLXBsYXktbGlua1wiXX0+XG4gICAgICAgICAgICA8TGluayBocmVmPVwiL2hvd1RvUGxheVwiPkhvdyB0byBQbGF5PC9MaW5rPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVJlZiIsInVzZURpc3BhdGNoIiwiTGluayIsIkhlYWQiLCJnYW1lRGV0YWlsc0FjdGlvbnMiLCJ1c2VSb3V0ZXIiLCJzb2NrZXQiLCJjbGFzc2VzIiwiSG9tZSIsInNob3dKb2luUm9vbUZvcm0iLCJzZXRTaG93Sm9pblJvb21Gb3JtIiwiZXJyb3JKb2luaW5nUm9vbSIsInNldEVycm9ySm9pbmluZ1Jvb20iLCJyb3V0ZXIiLCJyb29tQ29kZVJlZiIsImRpc3BhdGNoIiwic2hvd0pvaW5Sb29tSGFuZGxlciIsInN0YXRlIiwiaG93VG9QbGF5SGFuZGxlciIsInB1c2giLCJvbiIsInJvb21JZCIsInNldFJvb21JZCIsInNldFBsYXllck51bSIsImNyZWF0ZVJvb21IYW5kbGVyIiwiZW1pdCIsImpvaW5Sb29tSGFuZGxlciIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImN1cnJlbnQiLCJ2YWx1ZSIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJmb3JtIiwib25TdWJtaXQiLCJsYWJlbCIsImh0bWxGb3IiLCJpbnB1dCIsInJlZiIsImlkIiwidHlwZSIsInAiLCJlcnJvciIsImhyZWYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});