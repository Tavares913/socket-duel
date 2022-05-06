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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _store_gameDetailsSlice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store/gameDetailsSlice */ \"./store/gameDetailsSlice.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _utils_socketConnect__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/socketConnect */ \"./utils/socketConnect.js\");\n/* harmony import */ var _utils_socketConnect__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_utils_socketConnect__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _styles_index_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/index.module.css */ \"./styles/index.module.css\");\n/* harmony import */ var _styles_index_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_index_module_css__WEBPACK_IMPORTED_MODULE_7__);\nvar _this = undefined;\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar Home = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), showJoinRoomForm = ref[0], setShowJoinRoomForm = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), errorJoiningRoom = ref1[0], setErrorJoiningRoom = ref1[1];\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n    var roomCodeRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();\n    var showJoinRoomHandler = function() {\n        setShowJoinRoomForm(function(state) {\n            return !state;\n        });\n    };\n    var howToPlayHandler = function() {\n        router.push(\"howToPlay\");\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        _utils_socketConnect__WEBPACK_IMPORTED_MODULE_6___default().on(\"room-created\", function(roomId) {\n            dispatch(_store_gameDetailsSlice__WEBPACK_IMPORTED_MODULE_4__.gameDetailsActions.setRoomId(roomId));\n            dispatch(_store_gameDetailsSlice__WEBPACK_IMPORTED_MODULE_4__.gameDetailsActions.setPlayerNum(1));\n            router.push(\"/\".concat(roomId));\n        });\n        _utils_socketConnect__WEBPACK_IMPORTED_MODULE_6___default().on(\"room-joined\", function(roomId) {\n            dispatch(_store_gameDetailsSlice__WEBPACK_IMPORTED_MODULE_4__.gameDetailsActions.setRoomId(roomId));\n            dispatch(_store_gameDetailsSlice__WEBPACK_IMPORTED_MODULE_4__.gameDetailsActions.setPlayerNum(2));\n            router.push(\"/\".concat(roomId));\n        });\n        _utils_socketConnect__WEBPACK_IMPORTED_MODULE_6___default().on(\"room-join-error\", function() {\n            setErrorJoiningRoom(true);\n        });\n    });\n    var createRoomHandler = function() {\n        _utils_socketConnect__WEBPACK_IMPORTED_MODULE_6___default().emit(\"create-room\");\n    };\n    var joinRoomHandler = function(e) {\n        e.preventDefault();\n        if (roomCodeRef.current.value == \"\") {\n            return;\n        }\n        _utils_socketConnect__WEBPACK_IMPORTED_MODULE_6___default().emit(\"join-room\", roomCodeRef.current.value);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_styles_index_module_css__WEBPACK_IMPORTED_MODULE_7___default()[\"main-container\"]),\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_index_module_css__WEBPACK_IMPORTED_MODULE_7___default()[\"sub-container\"]),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: (_styles_index_module_css__WEBPACK_IMPORTED_MODULE_7___default().title),\n                        children: \"Socket Duel\"\n                    }, void 0, false, {\n                        fileName: \"/Users/tavares913/Desktop/CS/Projects/socket-duel/client/pages/index.js\",\n                        lineNumber: 60,\n                        columnNumber: 11\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: createRoomHandler,\n                        className: \"\".concat((_styles_index_module_css__WEBPACK_IMPORTED_MODULE_7___default()[\"create-room-button\"]), \" \").concat((_styles_index_module_css__WEBPACK_IMPORTED_MODULE_7___default().button)),\n                        children: \"Create a Room\"\n                    }, void 0, false, {\n                        fileName: \"/Users/tavares913/Desktop/CS/Projects/socket-duel/client/pages/index.js\",\n                        lineNumber: 61,\n                        columnNumber: 11\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: showJoinRoomHandler,\n                        className: (_styles_index_module_css__WEBPACK_IMPORTED_MODULE_7___default().button),\n                        children: \"Join a Room\"\n                    }, void 0, false, {\n                        fileName: \"/Users/tavares913/Desktop/CS/Projects/socket-duel/client/pages/index.js\",\n                        lineNumber: 67,\n                        columnNumber: 11\n                    }, _this),\n                    showJoinRoomForm && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                        onSubmit: joinRoomHandler,\n                        className: (_styles_index_module_css__WEBPACK_IMPORTED_MODULE_7___default()[\"join-room-form\"]),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"room-code\",\n                                children: \"Join room: \"\n                            }, void 0, false, {\n                                fileName: \"/Users/tavares913/Desktop/CS/Projects/socket-duel/client/pages/index.js\",\n                                lineNumber: 75,\n                                columnNumber: 15\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                ref: roomCodeRef,\n                                id: \"room-code\",\n                                type: \"text\"\n                            }, void 0, false, {\n                                fileName: \"/Users/tavares913/Desktop/CS/Projects/socket-duel/client/pages/index.js\",\n                                lineNumber: 76,\n                                columnNumber: 15\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: (_styles_index_module_css__WEBPACK_IMPORTED_MODULE_7___default().button),\n                                children: \"Submit\"\n                            }, void 0, false, {\n                                fileName: \"/Users/tavares913/Desktop/CS/Projects/socket-duel/client/pages/index.js\",\n                                lineNumber: 77,\n                                columnNumber: 15\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/tavares913/Desktop/CS/Projects/socket-duel/client/pages/index.js\",\n                        lineNumber: 71,\n                        columnNumber: 13\n                    }, _this),\n                    errorJoiningRoom && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: (_styles_index_module_css__WEBPACK_IMPORTED_MODULE_7___default().error),\n                        children: \"Either an invalid room id, or two people are already in that room.\"\n                    }, void 0, false, {\n                        fileName: \"/Users/tavares913/Desktop/CS/Projects/socket-duel/client/pages/index.js\",\n                        lineNumber: 81,\n                        columnNumber: 13\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_index_module_css__WEBPACK_IMPORTED_MODULE_7___default()[\"how-to-play-link\"]),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                            href: \"howToPlay\",\n                            children: \"How to Play\"\n                        }, void 0, false, {\n                            fileName: \"/Users/tavares913/Desktop/CS/Projects/socket-duel/client/pages/index.js\",\n                            lineNumber: 86,\n                            columnNumber: 13\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/tavares913/Desktop/CS/Projects/socket-duel/client/pages/index.js\",\n                        lineNumber: 85,\n                        columnNumber: 11\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/tavares913/Desktop/CS/Projects/socket-duel/client/pages/index.js\",\n                lineNumber: 59,\n                columnNumber: 9\n            }, _this)\n        }, void 0, false, {\n            fileName: \"/Users/tavares913/Desktop/CS/Projects/socket-duel/client/pages/index.js\",\n            lineNumber: 58,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false);\n};\n_s(Home, \"A4SImiUClcq4WlMsy83wbzplRhk=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter,\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch\n    ];\n});\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNDLE9BQU8sRUFBRXBCLG1CQUFtQjt3QkFBRWdCLFNBQVMsRUFBRXpCLHdFQUFjO2tDQUFFLGFBRWpFOzs7Ozs2QkFBUztvQkFDUkUsZ0JBQWdCLGtCQUNmLDhEQUFDNEIsTUFBSTt3QkFDSEMsUUFBUSxFQUFFWixlQUFlO3dCQUN6Qk0sU0FBUyxFQUFFekIsbUZBQXlCOzswQ0FFcEMsOERBQUNnQyxPQUFLO2dDQUFDQyxPQUFPLEVBQUMsV0FBVzswQ0FBQyxhQUFXOzs7OztxQ0FBUTswQ0FDOUMsOERBQUNDLE9BQUs7Z0NBQUNDLEdBQUcsRUFBRTVCLFdBQVc7Z0NBQUU2QixFQUFFLEVBQUMsV0FBVztnQ0FBQ0MsSUFBSSxFQUFDLE1BQU07Ozs7O3FDQUFHOzBDQUN0RCw4REFBQ1QsUUFBTTtnQ0FBQ0gsU0FBUyxFQUFFekIsd0VBQWM7MENBQUUsUUFBTTs7Ozs7cUNBQVM7Ozs7Ozs2QkFDN0M7b0JBRVJJLGdCQUFnQixrQkFDZiw4REFBQ2tDLEdBQUM7d0JBQUNiLFNBQVMsRUFBRXpCLHVFQUFhO2tDQUFFLG9FQUU3Qjs7Ozs7NkJBQUk7a0NBRU4sOERBQUN3QixLQUFHO3dCQUFDQyxTQUFTLEVBQUV6QixxRkFBMkI7a0NBQ3pDLDRFQUFDSixrREFBSTs0QkFBQzRDLElBQUksRUFBQyxXQUFXO3NDQUFDLGFBQVc7Ozs7O2lDQUFPOzs7Ozs2QkFDckM7Ozs7OztxQkFDRjs7Ozs7aUJBQ0Y7cUJBQ0wsQ0FDSDtDQUNIO0dBbEZLdkMsSUFBSTs7UUFJT0gsa0RBQVM7UUFFUEgsb0RBQVc7OztBQU54Qk0sS0FBQUEsSUFBSTtBQW9GViwrREFBZUEsSUFBSSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHsgZ2FtZURldGFpbHNBY3Rpb25zIH0gZnJvbSBcIi4uL3N0b3JlL2dhbWVEZXRhaWxzU2xpY2VcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHNvY2tldCBmcm9tIFwiLi4vdXRpbHMvc29ja2V0Q29ubmVjdFwiO1xuXG5pbXBvcnQgY2xhc3NlcyBmcm9tIFwiLi4vc3R5bGVzL2luZGV4Lm1vZHVsZS5jc3NcIjtcblxuY29uc3QgSG9tZSA9ICgpID0+IHtcbiAgY29uc3QgW3Nob3dKb2luUm9vbUZvcm0sIHNldFNob3dKb2luUm9vbUZvcm1dID0gdXNlU3RhdGUoKTtcbiAgY29uc3QgW2Vycm9ySm9pbmluZ1Jvb20sIHNldEVycm9ySm9pbmluZ1Jvb21dID0gdXNlU3RhdGUoKTtcblxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3Qgcm9vbUNvZGVSZWYgPSB1c2VSZWYoKTtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuXG4gIGNvbnN0IHNob3dKb2luUm9vbUhhbmRsZXIgPSAoKSA9PiB7XG4gICAgc2V0U2hvd0pvaW5Sb29tRm9ybSgoc3RhdGUpID0+ICFzdGF0ZSk7XG4gIH07XG5cbiAgY29uc3QgaG93VG9QbGF5SGFuZGxlciA9ICgpID0+IHtcbiAgICByb3V0ZXIucHVzaChcImhvd1RvUGxheVwiKTtcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNvY2tldC5vbihcInJvb20tY3JlYXRlZFwiLCAocm9vbUlkKSA9PiB7XG4gICAgICBkaXNwYXRjaChnYW1lRGV0YWlsc0FjdGlvbnMuc2V0Um9vbUlkKHJvb21JZCkpO1xuICAgICAgZGlzcGF0Y2goZ2FtZURldGFpbHNBY3Rpb25zLnNldFBsYXllck51bSgxKSk7XG4gICAgICByb3V0ZXIucHVzaChgLyR7cm9vbUlkfWApO1xuICAgIH0pO1xuXG4gICAgc29ja2V0Lm9uKFwicm9vbS1qb2luZWRcIiwgKHJvb21JZCkgPT4ge1xuICAgICAgZGlzcGF0Y2goZ2FtZURldGFpbHNBY3Rpb25zLnNldFJvb21JZChyb29tSWQpKTtcbiAgICAgIGRpc3BhdGNoKGdhbWVEZXRhaWxzQWN0aW9ucy5zZXRQbGF5ZXJOdW0oMikpO1xuICAgICAgcm91dGVyLnB1c2goYC8ke3Jvb21JZH1gKTtcbiAgICB9KTtcblxuICAgIHNvY2tldC5vbihcInJvb20tam9pbi1lcnJvclwiLCAoKSA9PiB7XG4gICAgICBzZXRFcnJvckpvaW5pbmdSb29tKHRydWUpO1xuICAgIH0pO1xuICB9KTtcblxuICBjb25zdCBjcmVhdGVSb29tSGFuZGxlciA9ICgpID0+IHtcbiAgICBzb2NrZXQuZW1pdChcImNyZWF0ZS1yb29tXCIpO1xuICB9O1xuXG4gIGNvbnN0IGpvaW5Sb29tSGFuZGxlciA9IChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmIChyb29tQ29kZVJlZi5jdXJyZW50LnZhbHVlID09IFwiXCIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgc29ja2V0LmVtaXQoXCJqb2luLXJvb21cIiwgcm9vbUNvZGVSZWYuY3VycmVudC52YWx1ZSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXNbXCJtYWluLWNvbnRhaW5lclwiXX0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzW1wic3ViLWNvbnRhaW5lclwiXX0+XG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZX0+U29ja2V0IER1ZWw8L2gxPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIG9uQ2xpY2s9e2NyZWF0ZVJvb21IYW5kbGVyfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtjbGFzc2VzW1wiY3JlYXRlLXJvb20tYnV0dG9uXCJdfSAke2NsYXNzZXMuYnV0dG9ufWB9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgQ3JlYXRlIGEgUm9vbVxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17c2hvd0pvaW5Sb29tSGFuZGxlcn0gY2xhc3NOYW1lPXtjbGFzc2VzLmJ1dHRvbn0+XG4gICAgICAgICAgICBKb2luIGEgUm9vbVxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIHtzaG93Sm9pblJvb21Gb3JtICYmIChcbiAgICAgICAgICAgIDxmb3JtXG4gICAgICAgICAgICAgIG9uU3VibWl0PXtqb2luUm9vbUhhbmRsZXJ9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlc1tcImpvaW4tcm9vbS1mb3JtXCJdfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInJvb20tY29kZVwiPkpvaW4gcm9vbTogPC9sYWJlbD5cbiAgICAgICAgICAgICAgPGlucHV0IHJlZj17cm9vbUNvZGVSZWZ9IGlkPVwicm9vbS1jb2RlXCIgdHlwZT1cInRleHRcIiAvPlxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b259PlN1Ym1pdDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICl9XG4gICAgICAgICAge2Vycm9ySm9pbmluZ1Jvb20gJiYgKFxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtjbGFzc2VzLmVycm9yfT5cbiAgICAgICAgICAgICAgRWl0aGVyIGFuIGludmFsaWQgcm9vbSBpZCwgb3IgdHdvIHBlb3BsZSBhcmUgYWxyZWFkeSBpbiB0aGF0IHJvb20uXG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgKX1cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlc1tcImhvdy10by1wbGF5LWxpbmtcIl19PlxuICAgICAgICAgICAgPExpbmsgaHJlZj1cImhvd1RvUGxheVwiPkhvdyB0byBQbGF5PC9MaW5rPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVJlZiIsInVzZURpc3BhdGNoIiwiTGluayIsImdhbWVEZXRhaWxzQWN0aW9ucyIsInVzZVJvdXRlciIsInNvY2tldCIsImNsYXNzZXMiLCJIb21lIiwic2hvd0pvaW5Sb29tRm9ybSIsInNldFNob3dKb2luUm9vbUZvcm0iLCJlcnJvckpvaW5pbmdSb29tIiwic2V0RXJyb3JKb2luaW5nUm9vbSIsInJvdXRlciIsInJvb21Db2RlUmVmIiwiZGlzcGF0Y2giLCJzaG93Sm9pblJvb21IYW5kbGVyIiwic3RhdGUiLCJob3dUb1BsYXlIYW5kbGVyIiwicHVzaCIsIm9uIiwicm9vbUlkIiwic2V0Um9vbUlkIiwic2V0UGxheWVyTnVtIiwiY3JlYXRlUm9vbUhhbmRsZXIiLCJlbWl0Iiwiam9pblJvb21IYW5kbGVyIiwiZSIsInByZXZlbnREZWZhdWx0IiwiY3VycmVudCIsInZhbHVlIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJ0aXRsZSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJmb3JtIiwib25TdWJtaXQiLCJsYWJlbCIsImh0bWxGb3IiLCJpbnB1dCIsInJlZiIsImlkIiwidHlwZSIsInAiLCJlcnJvciIsImhyZWYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});