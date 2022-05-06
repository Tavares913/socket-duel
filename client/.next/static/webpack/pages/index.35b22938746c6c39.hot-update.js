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

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _store_gameDetailsSlice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../store/gameDetailsSlice */ \"./store/gameDetailsSlice.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _utils_socketConnect__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/socketConnect */ \"./utils/socketConnect.js\");\n/* harmony import */ var _utils_socketConnect__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_utils_socketConnect__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _styles_index_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/index.module.css */ \"./styles/index.module.css\");\n/* harmony import */ var _styles_index_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_index_module_css__WEBPACK_IMPORTED_MODULE_8__);\nvar _this = undefined;\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar Home = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), showJoinRoomForm = ref[0], setShowJoinRoomForm = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), errorJoiningRoom = ref1[0], setErrorJoiningRoom = ref1[1];\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();\n    var roomCodeRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();\n    var showJoinRoomHandler = function() {\n        setShowJoinRoomForm(function(state) {\n            return !state;\n        });\n    };\n    var howToPlayHandler = function() {\n        router.push(\"howToPlay\");\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        _utils_socketConnect__WEBPACK_IMPORTED_MODULE_7___default().on(\"room-created\", function(roomId) {\n            dispatch(_store_gameDetailsSlice__WEBPACK_IMPORTED_MODULE_5__.gameDetailsActions.setRoomId(roomId));\n            dispatch(_store_gameDetailsSlice__WEBPACK_IMPORTED_MODULE_5__.gameDetailsActions.setPlayerNum(1));\n            router.push(\"/\".concat(roomId));\n        });\n        _utils_socketConnect__WEBPACK_IMPORTED_MODULE_7___default().on(\"room-joined\", function(roomId) {\n            dispatch(_store_gameDetailsSlice__WEBPACK_IMPORTED_MODULE_5__.gameDetailsActions.setRoomId(roomId));\n            dispatch(_store_gameDetailsSlice__WEBPACK_IMPORTED_MODULE_5__.gameDetailsActions.setPlayerNum(2));\n            router.push(\"/\".concat(roomId));\n        });\n        _utils_socketConnect__WEBPACK_IMPORTED_MODULE_7___default().on(\"room-join-error\", function() {\n            setErrorJoiningRoom(true);\n        });\n    });\n    var createRoomHandler = function() {\n        _utils_socketConnect__WEBPACK_IMPORTED_MODULE_7___default().emit(\"create-room\");\n    };\n    var joinRoomHandler = function(e) {\n        e.preventDefault();\n        _utils_socketConnect__WEBPACK_IMPORTED_MODULE_7___default().emit(\"join-room\", roomCodeRef.current.value);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_styles_index_module_css__WEBPACK_IMPORTED_MODULE_8___default()[\"main-container\"]),\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_index_module_css__WEBPACK_IMPORTED_MODULE_8___default()[\"sub-container\"]),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: (_styles_index_module_css__WEBPACK_IMPORTED_MODULE_8___default().title),\n                        children: \"Socket Duel\"\n                    }, void 0, false, {\n                        fileName: \"/Users/tavares913/Desktop/CS/Projects/socket-duel/client/pages/index.js\",\n                        lineNumber: 59,\n                        columnNumber: 11\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: createRoomHandler,\n                        className: \"\".concat((_styles_index_module_css__WEBPACK_IMPORTED_MODULE_8___default()[\"create-room-button\"]), \" \").concat((_styles_index_module_css__WEBPACK_IMPORTED_MODULE_8___default().button)),\n                        children: \"Create a Room\"\n                    }, void 0, false, {\n                        fileName: \"/Users/tavares913/Desktop/CS/Projects/socket-duel/client/pages/index.js\",\n                        lineNumber: 60,\n                        columnNumber: 11\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: showJoinRoomHandler,\n                        className: (_styles_index_module_css__WEBPACK_IMPORTED_MODULE_8___default().button),\n                        children: \"Join a Room\"\n                    }, void 0, false, {\n                        fileName: \"/Users/tavares913/Desktop/CS/Projects/socket-duel/client/pages/index.js\",\n                        lineNumber: 66,\n                        columnNumber: 11\n                    }, _this),\n                    showJoinRoomForm && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                        onSubmit: joinRoomHandler,\n                        className: (_styles_index_module_css__WEBPACK_IMPORTED_MODULE_8___default()[\"join-room-form\"]),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"room-code\",\n                                children: \"Join room: \"\n                            }, void 0, false, {\n                                fileName: \"/Users/tavares913/Desktop/CS/Projects/socket-duel/client/pages/index.js\",\n                                lineNumber: 74,\n                                columnNumber: 15\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                ref: roomCodeRef,\n                                id: \"room-code\",\n                                type: \"text\"\n                            }, void 0, false, {\n                                fileName: \"/Users/tavares913/Desktop/CS/Projects/socket-duel/client/pages/index.js\",\n                                lineNumber: 75,\n                                columnNumber: 15\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: (_styles_index_module_css__WEBPACK_IMPORTED_MODULE_8___default().button),\n                                children: \"Submit\"\n                            }, void 0, false, {\n                                fileName: \"/Users/tavares913/Desktop/CS/Projects/socket-duel/client/pages/index.js\",\n                                lineNumber: 76,\n                                columnNumber: 15\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/tavares913/Desktop/CS/Projects/socket-duel/client/pages/index.js\",\n                        lineNumber: 70,\n                        columnNumber: 13\n                    }, _this),\n                    errorJoiningRoom && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: (_styles_index_module_css__WEBPACK_IMPORTED_MODULE_8___default().error),\n                        children: \"Either an invalid room id, or two people are already in that room.\"\n                    }, void 0, false, {\n                        fileName: \"/Users/tavares913/Desktop/CS/Projects/socket-duel/client/pages/index.js\",\n                        lineNumber: 80,\n                        columnNumber: 13\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_index_module_css__WEBPACK_IMPORTED_MODULE_8___default()[\"how-to-play-link\"]),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                            href: \"/howToPlay\",\n                            children: \"How to Play\"\n                        }, void 0, false, {\n                            fileName: \"/Users/tavares913/Desktop/CS/Projects/socket-duel/client/pages/index.js\",\n                            lineNumber: 85,\n                            columnNumber: 13\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/tavares913/Desktop/CS/Projects/socket-duel/client/pages/index.js\",\n                        lineNumber: 84,\n                        columnNumber: 11\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/tavares913/Desktop/CS/Projects/socket-duel/client/pages/index.js\",\n                lineNumber: 58,\n                columnNumber: 9\n            }, _this)\n        }, void 0, false, {\n            fileName: \"/Users/tavares913/Desktop/CS/Projects/socket-duel/client/pages/index.js\",\n            lineNumber: 57,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false);\n};\n_s(Home, \"A4SImiUClcq4WlMsy83wbzplRhk=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter,\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch\n    ];\n});\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7NkJBQVM7b0JBQ1JFLGdCQUFnQixrQkFDZiw4REFBQzRCLE1BQUk7d0JBQ0hDLFFBQVEsRUFBRVosZUFBZTt3QkFDekJNLFNBQVMsRUFBRXpCLG1GQUF5Qjs7MENBRXBDLDhEQUFDZ0MsT0FBSztnQ0FBQ0MsT0FBTyxFQUFDLFdBQVc7MENBQUMsYUFBVzs7Ozs7cUNBQVE7MENBQzlDLDhEQUFDQyxPQUFLO2dDQUFDQyxHQUFHLEVBQUU1QixXQUFXO2dDQUFFNkIsRUFBRSxFQUFDLFdBQVc7Z0NBQUNDLElBQUksRUFBQyxNQUFNOzs7OztxQ0FBRzswQ0FDdEQsOERBQUNULFFBQU07Z0NBQUNILFNBQVMsRUFBRXpCLHdFQUFjOzBDQUFFLFFBQU07Ozs7O3FDQUFTOzs7Ozs7NkJBQzdDO29CQUVSSSxnQkFBZ0Isa0JBQ2YsOERBQUNrQyxHQUFDO3dCQUFDYixTQUFTLEVBQUV6Qix1RUFBYTtrQ0FBRSxvRUFFN0I7Ozs7OzZCQUFJO2tDQUVOLDhEQUFDd0IsS0FBRzt3QkFBQ0MsU0FBUyxFQUFFekIscUZBQTJCO2tDQUN6Qyw0RUFBQ0wsa0RBQUk7NEJBQUM2QyxJQUFJLEVBQUMsWUFBWTtzQ0FBQyxhQUFXOzs7OztpQ0FBTzs7Ozs7NkJBQ3RDOzs7Ozs7cUJBQ0Y7Ozs7O2lCQUNGO3FCQUNMLENBQ0g7Q0FDSDtHQS9FS3ZDLElBQUk7O1FBSU9ILGtEQUFTO1FBRVBKLG9EQUFXOzs7QUFOeEJPLEtBQUFBLElBQUk7QUFpRlYsK0RBQWVBLElBQUksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcblxuaW1wb3J0IHsgZ2FtZURldGFpbHNBY3Rpb25zIH0gZnJvbSBcIi4uL3N0b3JlL2dhbWVEZXRhaWxzU2xpY2VcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHNvY2tldCBmcm9tIFwiLi4vdXRpbHMvc29ja2V0Q29ubmVjdFwiO1xuXG5pbXBvcnQgY2xhc3NlcyBmcm9tIFwiLi4vc3R5bGVzL2luZGV4Lm1vZHVsZS5jc3NcIjtcblxuY29uc3QgSG9tZSA9ICgpID0+IHtcbiAgY29uc3QgW3Nob3dKb2luUm9vbUZvcm0sIHNldFNob3dKb2luUm9vbUZvcm1dID0gdXNlU3RhdGUoKTtcbiAgY29uc3QgW2Vycm9ySm9pbmluZ1Jvb20sIHNldEVycm9ySm9pbmluZ1Jvb21dID0gdXNlU3RhdGUoKTtcblxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3Qgcm9vbUNvZGVSZWYgPSB1c2VSZWYoKTtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuXG4gIGNvbnN0IHNob3dKb2luUm9vbUhhbmRsZXIgPSAoKSA9PiB7XG4gICAgc2V0U2hvd0pvaW5Sb29tRm9ybSgoc3RhdGUpID0+ICFzdGF0ZSk7XG4gIH07XG5cbiAgY29uc3QgaG93VG9QbGF5SGFuZGxlciA9ICgpID0+IHtcbiAgICByb3V0ZXIucHVzaChcImhvd1RvUGxheVwiKTtcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNvY2tldC5vbihcInJvb20tY3JlYXRlZFwiLCAocm9vbUlkKSA9PiB7XG4gICAgICBkaXNwYXRjaChnYW1lRGV0YWlsc0FjdGlvbnMuc2V0Um9vbUlkKHJvb21JZCkpO1xuICAgICAgZGlzcGF0Y2goZ2FtZURldGFpbHNBY3Rpb25zLnNldFBsYXllck51bSgxKSk7XG4gICAgICByb3V0ZXIucHVzaChgLyR7cm9vbUlkfWApO1xuICAgIH0pO1xuXG4gICAgc29ja2V0Lm9uKFwicm9vbS1qb2luZWRcIiwgKHJvb21JZCkgPT4ge1xuICAgICAgZGlzcGF0Y2goZ2FtZURldGFpbHNBY3Rpb25zLnNldFJvb21JZChyb29tSWQpKTtcbiAgICAgIGRpc3BhdGNoKGdhbWVEZXRhaWxzQWN0aW9ucy5zZXRQbGF5ZXJOdW0oMikpO1xuICAgICAgcm91dGVyLnB1c2goYC8ke3Jvb21JZH1gKTtcbiAgICB9KTtcblxuICAgIHNvY2tldC5vbihcInJvb20tam9pbi1lcnJvclwiLCAoKSA9PiB7XG4gICAgICBzZXRFcnJvckpvaW5pbmdSb29tKHRydWUpO1xuICAgIH0pO1xuICB9KTtcblxuICBjb25zdCBjcmVhdGVSb29tSGFuZGxlciA9ICgpID0+IHtcbiAgICBzb2NrZXQuZW1pdChcImNyZWF0ZS1yb29tXCIpO1xuICB9O1xuXG4gIGNvbnN0IGpvaW5Sb29tSGFuZGxlciA9IChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHNvY2tldC5lbWl0KFwiam9pbi1yb29tXCIsIHJvb21Db2RlUmVmLmN1cnJlbnQudmFsdWUpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzW1wibWFpbi1jb250YWluZXJcIl19PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlc1tcInN1Yi1jb250YWluZXJcIl19PlxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGV9PlNvY2tldCBEdWVsPC9oMT5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBvbkNsaWNrPXtjcmVhdGVSb29tSGFuZGxlcn1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7Y2xhc3Nlc1tcImNyZWF0ZS1yb29tLWJ1dHRvblwiXX0gJHtjbGFzc2VzLmJ1dHRvbn1gfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIENyZWF0ZSBhIFJvb21cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3Nob3dKb2luUm9vbUhhbmRsZXJ9IGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b259PlxuICAgICAgICAgICAgSm9pbiBhIFJvb21cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICB7c2hvd0pvaW5Sb29tRm9ybSAmJiAoXG4gICAgICAgICAgICA8Zm9ybVxuICAgICAgICAgICAgICBvblN1Ym1pdD17am9pblJvb21IYW5kbGVyfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXNbXCJqb2luLXJvb20tZm9ybVwiXX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJyb29tLWNvZGVcIj5Kb2luIHJvb206IDwvbGFiZWw+XG4gICAgICAgICAgICAgIDxpbnB1dCByZWY9e3Jvb21Db2RlUmVmfSBpZD1cInJvb20tY29kZVwiIHR5cGU9XCJ0ZXh0XCIgLz5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9ufT5TdWJtaXQ8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICApfVxuICAgICAgICAgIHtlcnJvckpvaW5pbmdSb29tICYmIChcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17Y2xhc3Nlcy5lcnJvcn0+XG4gICAgICAgICAgICAgIEVpdGhlciBhbiBpbnZhbGlkIHJvb20gaWQsIG9yIHR3byBwZW9wbGUgYXJlIGFscmVhZHkgaW4gdGhhdCByb29tLlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICl9XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXNbXCJob3ctdG8tcGxheS1saW5rXCJdfT5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvaG93VG9QbGF5XCI+SG93IHRvIFBsYXk8L0xpbms+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIb21lO1xuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlUmVmIiwidXNlRGlzcGF0Y2giLCJMaW5rIiwiSGVhZCIsImdhbWVEZXRhaWxzQWN0aW9ucyIsInVzZVJvdXRlciIsInNvY2tldCIsImNsYXNzZXMiLCJIb21lIiwic2hvd0pvaW5Sb29tRm9ybSIsInNldFNob3dKb2luUm9vbUZvcm0iLCJlcnJvckpvaW5pbmdSb29tIiwic2V0RXJyb3JKb2luaW5nUm9vbSIsInJvdXRlciIsInJvb21Db2RlUmVmIiwiZGlzcGF0Y2giLCJzaG93Sm9pblJvb21IYW5kbGVyIiwic3RhdGUiLCJob3dUb1BsYXlIYW5kbGVyIiwicHVzaCIsIm9uIiwicm9vbUlkIiwic2V0Um9vbUlkIiwic2V0UGxheWVyTnVtIiwiY3JlYXRlUm9vbUhhbmRsZXIiLCJlbWl0Iiwiam9pblJvb21IYW5kbGVyIiwiZSIsInByZXZlbnREZWZhdWx0IiwiY3VycmVudCIsInZhbHVlIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJ0aXRsZSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJmb3JtIiwib25TdWJtaXQiLCJsYWJlbCIsImh0bWxGb3IiLCJpbnB1dCIsInJlZiIsImlkIiwidHlwZSIsInAiLCJlcnJvciIsImhyZWYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "./node_modules/next/head.js":
/*!***********************************!*\
  !*** ./node_modules/next/head.js ***!
  \***********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./dist/shared/lib/head */ \"./node_modules/next/dist/shared/lib/head.js\")\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9oZWFkLmpzLmpzIiwibWFwcGluZ3MiOiJBQUFBLGlIQUFrRCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9oZWFkLmpzPzg4NDkiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3Qvc2hhcmVkL2xpYi9oZWFkJylcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/next/head.js\n");

/***/ })

});