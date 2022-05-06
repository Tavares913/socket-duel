"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/[room]",{

/***/ "./pages/[room].js":
/*!*************************!*\
  !*** ./pages/[room].js ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _utils_socketConnect__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/socketConnect */ \"./utils/socketConnect.js\");\n/* harmony import */ var _utils_socketConnect__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_utils_socketConnect__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _utils_updateScreen__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/updateScreen */ \"./utils/updateScreen.js\");\n/* harmony import */ var _utils_drawingDetails__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/drawingDetails */ \"./utils/drawingDetails.js\");\n/* harmony import */ var _utils_settings__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/settings */ \"./utils/settings.js\");\n/* harmony import */ var _utils_settings__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_utils_settings__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _styles_Room_module_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../styles/Room.module.css */ \"./styles/Room.module.css\");\n/* harmony import */ var _styles_Room_module_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_Room_module_css__WEBPACK_IMPORTED_MODULE_9__);\nvar _this = undefined;\n\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar Room = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), gameInProgress = ref[0], setGameInProgress = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), roundInProgress = ref1[0], setRoundInProgress = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), gameStartError = ref2[0], setGameStartError = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), winner = ref3[0], setWinner = ref3[1];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), P1Score = ref4[0], setP1Score = ref4[1];\n    var ref5 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), P2Score = ref5[0], setP2Score = ref5[1];\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    var roomId = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)(function(state) {\n        return state.gameDetails.roomId;\n    });\n    var playerNum1 = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)(function(state) {\n        return state.gameDetails.playerNum;\n    });\n    var direction = null;\n    var startGameHandler = function() {\n        _utils_socketConnect__WEBPACK_IMPORTED_MODULE_4___default().emit(\"start-round\", roomId);\n    };\n    var backToHomeHandler = function() {\n        _utils_drawingDetails__WEBPACK_IMPORTED_MODULE_7__[\"default\"] = null;\n        router.push(\"/\");\n    };\n    var updateDirection = function(e) {\n        if (e.key == \"ArrowUp\") {\n            direction = \"up\";\n        } else if (e.key == \"ArrowDown\") {\n            direction = \"down\";\n        } else if (e.key == \"ArrowLeft\") {\n            direction = \"left\";\n        } else if (e.key == \"ArrowRight\") {\n            direction = \"right\";\n        } else if (e.key == \" \") {\n            _utils_socketConnect__WEBPACK_IMPORTED_MODULE_4___default().emit(\"shot\", {\n                roomId: roomId,\n                playerNum: playerNum1,\n                direction: direction\n            });\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        _utils_socketConnect__WEBPACK_IMPORTED_MODULE_4___default().on(\"message\", function(message) {\n            console.log(message);\n        });\n        _utils_socketConnect__WEBPACK_IMPORTED_MODULE_4___default().on(\"round-started\", function() {\n            setGameInProgress(true);\n            setRoundInProgress(true);\n            setGameStartError(false);\n            (0,_utils_updateScreen__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\n        });\n        _utils_socketConnect__WEBPACK_IMPORTED_MODULE_4___default().on(\"game-start-error\", function() {\n            setGameStartError(true);\n        });\n        _utils_socketConnect__WEBPACK_IMPORTED_MODULE_4___default().on(\"tick\", function(gameRoom) {\n            _utils_drawingDetails__WEBPACK_IMPORTED_MODULE_7__[\"default\"] = gameRoom;\n        });\n        _utils_socketConnect__WEBPACK_IMPORTED_MODULE_4___default().on(\"update-scores\", function(scores) {\n            setP1Score(scores[0]);\n            setP2Score(scores[1]);\n        });\n        _utils_socketConnect__WEBPACK_IMPORTED_MODULE_4___default().on(\"end-game\", function() {\n            console.log(\"game-ended\");\n            setRoundInProgress(false);\n            setGameInProgress(false);\n            _utils_drawingDetails__WEBPACK_IMPORTED_MODULE_7__[\"default\"] = null;\n        });\n        _utils_socketConnect__WEBPACK_IMPORTED_MODULE_4___default().on(\"end-round\", function() {\n            console.log(\"round-ended\");\n            setRoundInProgress(false);\n            _utils_drawingDetails__WEBPACK_IMPORTED_MODULE_7__[\"default\"] = null;\n        });\n        _utils_socketConnect__WEBPACK_IMPORTED_MODULE_4___default().on(\"winner\", function(playerNum) {\n            setWinner(playerNum);\n        });\n        window.addEventListener(\"keydown\", updateDirection);\n        var playerMoveInterval = setInterval(function() {\n            _utils_socketConnect__WEBPACK_IMPORTED_MODULE_4___default().emit(\"player-move\", {\n                roomId: roomId,\n                playerNum: playerNum1,\n                direction: direction\n            });\n        }, 33);\n        return function() {\n            clearInterval(playerMoveInterval);\n            window.removeEventListener(\"keydown\", updateDirection);\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Game Room\"\n                    }, void 0, false, {\n                        fileName: \"/Users/tavares913/Desktop/CS/Projects/socket-duel/client/pages/[room].js\",\n                        lineNumber: 111,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        description: \"The game room that players fight in while playing socket duel\"\n                    }, void 0, false, {\n                        fileName: \"/Users/tavares913/Desktop/CS/Projects/socket-duel/client/pages/[room].js\",\n                        lineNumber: 112,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/tavares913/Desktop/CS/Projects/socket-duel/client/pages/[room].js\",\n                lineNumber: 110,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Room_module_css__WEBPACK_IMPORTED_MODULE_9___default().scores),\n                children: [\n                    gameInProgress && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Room_module_css__WEBPACK_IMPORTED_MODULE_9___default().score),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"Player 1:\"\n                            }, void 0, false, {\n                                fileName: \"/Users/tavares913/Desktop/CS/Projects/socket-duel/client/pages/[room].js\",\n                                lineNumber: 117,\n                                columnNumber: 13\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: P1Score\n                            }, void 0, false, {\n                                fileName: \"/Users/tavares913/Desktop/CS/Projects/socket-duel/client/pages/[room].js\",\n                                lineNumber: 118,\n                                columnNumber: 13\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/tavares913/Desktop/CS/Projects/socket-duel/client/pages/[room].js\",\n                        lineNumber: 116,\n                        columnNumber: 11\n                    }, _this),\n                    gameInProgress && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Room_module_css__WEBPACK_IMPORTED_MODULE_9___default().score),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"Player 2:\"\n                            }, void 0, false, {\n                                fileName: \"/Users/tavares913/Desktop/CS/Projects/socket-duel/client/pages/[room].js\",\n                                lineNumber: 123,\n                                columnNumber: 13\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: P2Score\n                            }, void 0, false, {\n                                fileName: \"/Users/tavares913/Desktop/CS/Projects/socket-duel/client/pages/[room].js\",\n                                lineNumber: 124,\n                                columnNumber: 13\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/tavares913/Desktop/CS/Projects/socket-duel/client/pages/[room].js\",\n                        lineNumber: 122,\n                        columnNumber: 11\n                    }, _this),\n                    !gameInProgress && winner && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"The Game Is Over\"\n                    }, void 0, false, {\n                        fileName: \"/Users/tavares913/Desktop/CS/Projects/socket-duel/client/pages/[room].js\",\n                        lineNumber: 127,\n                        columnNumber: 39\n                    }, _this),\n                    winner && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: [\n                                    \"Player \",\n                                    winner,\n                                    \" wins!\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/tavares913/Desktop/CS/Projects/socket-duel/client/pages/[room].js\",\n                                lineNumber: 130,\n                                columnNumber: 13\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: backToHomeHandler,\n                                children: \"Back to Home\"\n                            }, void 0, false, {\n                                fileName: \"/Users/tavares913/Desktop/CS/Projects/socket-duel/client/pages/[room].js\",\n                                lineNumber: 131,\n                                columnNumber: 13\n                            }, _this)\n                        ]\n                    }, void 0, true)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/tavares913/Desktop/CS/Projects/socket-duel/client/pages/[room].js\",\n                lineNumber: 114,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Room_module_css__WEBPACK_IMPORTED_MODULE_9___default()[\"room-id\"]),\n                children: !gameInProgress && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: [\n                        \"Room Id: \",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            children: roomId\n                        }, void 0, false, {\n                            fileName: \"/Users/tavares913/Desktop/CS/Projects/socket-duel/client/pages/[room].js\",\n                            lineNumber: 139,\n                            columnNumber: 22\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/tavares913/Desktop/CS/Projects/socket-duel/client/pages/[room].js\",\n                    lineNumber: 138,\n                    columnNumber: 11\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/tavares913/Desktop/CS/Projects/socket-duel/client/pages/[room].js\",\n                lineNumber: 136,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Room_module_css__WEBPACK_IMPORTED_MODULE_9___default()[\"game-area-container\"]),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"canvas\", {\n                    id: \"game-area\",\n                    className: (_styles_Room_module_css__WEBPACK_IMPORTED_MODULE_9___default()[\"game-area\"]),\n                    width: \"\".concat((_utils_settings__WEBPACK_IMPORTED_MODULE_8___default().fieldWidth), \"px\"),\n                    height: \"\".concat((_utils_settings__WEBPACK_IMPORTED_MODULE_8___default().fieldHeight), \"px\")\n                }, void 0, false, {\n                    fileName: \"/Users/tavares913/Desktop/CS/Projects/socket-duel/client/pages/[room].js\",\n                    lineNumber: 145,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/tavares913/Desktop/CS/Projects/socket-duel/client/pages/[room].js\",\n                lineNumber: 144,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Room_module_css__WEBPACK_IMPORTED_MODULE_9___default()[\"round-buttons\"]),\n                children: [\n                    !roundInProgress && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: startGameHandler,\n                        className: (_styles_Room_module_css__WEBPACK_IMPORTED_MODULE_9___default().button),\n                        children: \"Start Round\"\n                    }, void 0, false, {\n                        fileName: \"/Users/tavares913/Desktop/CS/Projects/socket-duel/client/pages/[room].js\",\n                        lineNumber: 155,\n                        columnNumber: 11\n                    }, _this),\n                    gameStartError && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: (_styles_Room_module_css__WEBPACK_IMPORTED_MODULE_9___default().error),\n                        children: \"The game can only start once there are 2 players\"\n                    }, void 0, false, {\n                        fileName: \"/Users/tavares913/Desktop/CS/Projects/socket-duel/client/pages/[room].js\",\n                        lineNumber: 160,\n                        columnNumber: 11\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/tavares913/Desktop/CS/Projects/socket-duel/client/pages/[room].js\",\n                lineNumber: 153,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true);\n};\n_s(Room, \"Mlt7XgypsJYrbMnb9A0uXKfQxVQ=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter,\n        react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector\n    ];\n});\n_c = Room;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Room);\nvar _c;\n$RefreshReg$(_c, \"Room\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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d0JBQUNGLFNBQVMsRUFBRTNDLHNFQUFhO2tDQUFFLGtEQUU3Qjs7Ozs7NkJBQUk7Ozs7OztxQkFFRjs7b0JBQ0wsQ0FDSDtDQUNIO0dBMUpLQyxJQUFJOztRQVFPUixrREFBUztRQUVURyxvREFBVztRQUNSQSxvREFBVzs7O0FBWHpCSyxLQUFBQSxJQUFJO0FBNEpWLCtEQUFlQSxJQUFJLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvW3Jvb21dLmpzP2NiNTMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5cbmltcG9ydCBzb2NrZXQgZnJvbSBcIi4uL3V0aWxzL3NvY2tldENvbm5lY3RcIjtcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgdXBkYXRlU2NyZWVuIGZyb20gXCIuLi91dGlscy91cGRhdGVTY3JlZW5cIjtcbmltcG9ydCBkcmF3aW5nRGV0YWlscyBmcm9tIFwiLi4vdXRpbHMvZHJhd2luZ0RldGFpbHNcIjtcbmltcG9ydCBzZXR0aW5ncyBmcm9tIFwiLi4vdXRpbHMvc2V0dGluZ3NcIjtcblxuaW1wb3J0IGNsYXNzZXMgZnJvbSBcIi4uL3N0eWxlcy9Sb29tLm1vZHVsZS5jc3NcIjtcblxuY29uc3QgUm9vbSA9ICgpID0+IHtcbiAgY29uc3QgW2dhbWVJblByb2dyZXNzLCBzZXRHYW1lSW5Qcm9ncmVzc10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtyb3VuZEluUHJvZ3Jlc3MsIHNldFJvdW5kSW5Qcm9ncmVzc10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtnYW1lU3RhcnRFcnJvciwgc2V0R2FtZVN0YXJ0RXJyb3JdID0gdXNlU3RhdGUoKTtcbiAgY29uc3QgW3dpbm5lciwgc2V0V2lubmVyXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbUDFTY29yZSwgc2V0UDFTY29yZV0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW1AyU2NvcmUsIHNldFAyU2NvcmVdID0gdXNlU3RhdGUoMCk7XG5cbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgY29uc3Qgcm9vbUlkID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5nYW1lRGV0YWlscy5yb29tSWQpO1xuICBjb25zdCBwbGF5ZXJOdW0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmdhbWVEZXRhaWxzLnBsYXllck51bSk7XG4gIGxldCBkaXJlY3Rpb24gPSBudWxsO1xuXG4gIGNvbnN0IHN0YXJ0R2FtZUhhbmRsZXIgPSAoKSA9PiB7XG4gICAgc29ja2V0LmVtaXQoXCJzdGFydC1yb3VuZFwiLCByb29tSWQpO1xuICB9O1xuXG4gIGNvbnN0IGJhY2tUb0hvbWVIYW5kbGVyID0gKCkgPT4ge1xuICAgIGRyYXdpbmdEZXRhaWxzID0gbnVsbDtcbiAgICByb3V0ZXIucHVzaChcIi9cIik7XG4gIH07XG5cbiAgY29uc3QgdXBkYXRlRGlyZWN0aW9uID0gKGUpID0+IHtcbiAgICBpZiAoZS5rZXkgPT0gXCJBcnJvd1VwXCIpIHtcbiAgICAgIGRpcmVjdGlvbiA9IFwidXBcIjtcbiAgICB9IGVsc2UgaWYgKGUua2V5ID09IFwiQXJyb3dEb3duXCIpIHtcbiAgICAgIGRpcmVjdGlvbiA9IFwiZG93blwiO1xuICAgIH0gZWxzZSBpZiAoZS5rZXkgPT0gXCJBcnJvd0xlZnRcIikge1xuICAgICAgZGlyZWN0aW9uID0gXCJsZWZ0XCI7XG4gICAgfSBlbHNlIGlmIChlLmtleSA9PSBcIkFycm93UmlnaHRcIikge1xuICAgICAgZGlyZWN0aW9uID0gXCJyaWdodFwiO1xuICAgIH0gZWxzZSBpZiAoZS5rZXkgPT0gXCIgXCIpIHtcbiAgICAgIHNvY2tldC5lbWl0KFwic2hvdFwiLCB7IHJvb21JZCwgcGxheWVyTnVtLCBkaXJlY3Rpb24gfSk7XG4gICAgfVxuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc29ja2V0Lm9uKFwibWVzc2FnZVwiLCAobWVzc2FnZSkgPT4ge1xuICAgICAgY29uc29sZS5sb2cobWVzc2FnZSk7XG4gICAgfSk7XG5cbiAgICBzb2NrZXQub24oXCJyb3VuZC1zdGFydGVkXCIsICgpID0+IHtcbiAgICAgIHNldEdhbWVJblByb2dyZXNzKHRydWUpO1xuICAgICAgc2V0Um91bmRJblByb2dyZXNzKHRydWUpO1xuICAgICAgc2V0R2FtZVN0YXJ0RXJyb3IoZmFsc2UpO1xuICAgICAgdXBkYXRlU2NyZWVuKCk7XG4gICAgfSk7XG5cbiAgICBzb2NrZXQub24oXCJnYW1lLXN0YXJ0LWVycm9yXCIsICgpID0+IHtcbiAgICAgIHNldEdhbWVTdGFydEVycm9yKHRydWUpO1xuICAgIH0pO1xuXG4gICAgc29ja2V0Lm9uKFwidGlja1wiLCAoZ2FtZVJvb20pID0+IHtcbiAgICAgIGRyYXdpbmdEZXRhaWxzID0gZ2FtZVJvb207XG4gICAgfSk7XG5cbiAgICBzb2NrZXQub24oXCJ1cGRhdGUtc2NvcmVzXCIsIChzY29yZXMpID0+IHtcbiAgICAgIHNldFAxU2NvcmUoc2NvcmVzWzBdKTtcbiAgICAgIHNldFAyU2NvcmUoc2NvcmVzWzFdKTtcbiAgICB9KTtcblxuICAgIHNvY2tldC5vbihcImVuZC1nYW1lXCIsICgpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKFwiZ2FtZS1lbmRlZFwiKTtcbiAgICAgIHNldFJvdW5kSW5Qcm9ncmVzcyhmYWxzZSk7XG4gICAgICBzZXRHYW1lSW5Qcm9ncmVzcyhmYWxzZSk7XG4gICAgICBkcmF3aW5nRGV0YWlscyA9IG51bGw7XG4gICAgfSk7XG5cbiAgICBzb2NrZXQub24oXCJlbmQtcm91bmRcIiwgKCkgPT4ge1xuICAgICAgY29uc29sZS5sb2coXCJyb3VuZC1lbmRlZFwiKTtcbiAgICAgIHNldFJvdW5kSW5Qcm9ncmVzcyhmYWxzZSk7XG4gICAgICBkcmF3aW5nRGV0YWlscyA9IG51bGw7XG4gICAgfSk7XG5cbiAgICBzb2NrZXQub24oXCJ3aW5uZXJcIiwgKHBsYXllck51bSkgPT4ge1xuICAgICAgc2V0V2lubmVyKHBsYXllck51bSk7XG4gICAgfSk7XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgdXBkYXRlRGlyZWN0aW9uKTtcblxuICAgIGNvbnN0IHBsYXllck1vdmVJbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIHNvY2tldC5lbWl0KFwicGxheWVyLW1vdmVcIiwge1xuICAgICAgICByb29tSWQsXG4gICAgICAgIHBsYXllck51bSxcbiAgICAgICAgZGlyZWN0aW9uLFxuICAgICAgfSk7XG4gICAgfSwgMzMpO1xuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGNsZWFySW50ZXJ2YWwocGxheWVyTW92ZUludGVydmFsKTtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCB1cGRhdGVEaXJlY3Rpb24pO1xuICAgIH07XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPkdhbWUgUm9vbTwvdGl0bGU+XG4gICAgICAgIDxtZXRhIGRlc2NyaXB0aW9uPVwiVGhlIGdhbWUgcm9vbSB0aGF0IHBsYXllcnMgZmlnaHQgaW4gd2hpbGUgcGxheWluZyBzb2NrZXQgZHVlbFwiIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5zY29yZXN9PlxuICAgICAgICB7Z2FtZUluUHJvZ3Jlc3MgJiYgKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnNjb3JlfT5cbiAgICAgICAgICAgIDxwPlBsYXllciAxOjwvcD5cbiAgICAgICAgICAgIDxzcGFuPntQMVNjb3JlfTwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgICAge2dhbWVJblByb2dyZXNzICYmIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5zY29yZX0+XG4gICAgICAgICAgICA8cD5QbGF5ZXIgMjo8L3A+XG4gICAgICAgICAgICA8c3Bhbj57UDJTY29yZX08L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG4gICAgICAgIHshZ2FtZUluUHJvZ3Jlc3MgJiYgd2lubmVyICYmIDxwPlRoZSBHYW1lIElzIE92ZXI8L3A+fVxuICAgICAgICB7d2lubmVyICYmIChcbiAgICAgICAgICA8PlxuICAgICAgICAgICAgPHA+UGxheWVyIHt3aW5uZXJ9IHdpbnMhPC9wPlxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtiYWNrVG9Ib21lSGFuZGxlcn0+QmFjayB0byBIb21lPC9idXR0b24+XG4gICAgICAgICAgPC8+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXNbXCJyb29tLWlkXCJdfT5cbiAgICAgICAgeyFnYW1lSW5Qcm9ncmVzcyAmJiAoXG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICBSb29tIElkOiA8c3Bhbj57cm9vbUlkfTwvc3Bhbj5cbiAgICAgICAgICA8L3A+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXNbXCJnYW1lLWFyZWEtY29udGFpbmVyXCJdfT5cbiAgICAgICAgPGNhbnZhc1xuICAgICAgICAgIGlkPVwiZ2FtZS1hcmVhXCJcbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXNbXCJnYW1lLWFyZWFcIl19XG4gICAgICAgICAgd2lkdGg9e2Ake3NldHRpbmdzLmZpZWxkV2lkdGh9cHhgfVxuICAgICAgICAgIGhlaWdodD17YCR7c2V0dGluZ3MuZmllbGRIZWlnaHR9cHhgfVxuICAgICAgICA+PC9jYW52YXM+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXNbXCJyb3VuZC1idXR0b25zXCJdfT5cbiAgICAgICAgeyFyb3VuZEluUHJvZ3Jlc3MgJiYgKFxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17c3RhcnRHYW1lSGFuZGxlcn0gY2xhc3NOYW1lPXtjbGFzc2VzLmJ1dHRvbn0+XG4gICAgICAgICAgICBTdGFydCBSb3VuZFxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICApfVxuICAgICAgICB7Z2FtZVN0YXJ0RXJyb3IgJiYgKFxuICAgICAgICAgIDxwIGNsYXNzTmFtZT17Y2xhc3Nlcy5lcnJvcn0+XG4gICAgICAgICAgICBUaGUgZ2FtZSBjYW4gb25seSBzdGFydCBvbmNlIHRoZXJlIGFyZSAyIHBsYXllcnNcbiAgICAgICAgICA8L3A+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJvb207XG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VSb3V0ZXIiLCJIZWFkIiwic29ja2V0IiwidXNlU2VsZWN0b3IiLCJ1cGRhdGVTY3JlZW4iLCJkcmF3aW5nRGV0YWlscyIsInNldHRpbmdzIiwiY2xhc3NlcyIsIlJvb20iLCJnYW1lSW5Qcm9ncmVzcyIsInNldEdhbWVJblByb2dyZXNzIiwicm91bmRJblByb2dyZXNzIiwic2V0Um91bmRJblByb2dyZXNzIiwiZ2FtZVN0YXJ0RXJyb3IiLCJzZXRHYW1lU3RhcnRFcnJvciIsIndpbm5lciIsInNldFdpbm5lciIsIlAxU2NvcmUiLCJzZXRQMVNjb3JlIiwiUDJTY29yZSIsInNldFAyU2NvcmUiLCJyb3V0ZXIiLCJyb29tSWQiLCJzdGF0ZSIsImdhbWVEZXRhaWxzIiwicGxheWVyTnVtIiwiZGlyZWN0aW9uIiwic3RhcnRHYW1lSGFuZGxlciIsImVtaXQiLCJiYWNrVG9Ib21lSGFuZGxlciIsInB1c2giLCJ1cGRhdGVEaXJlY3Rpb24iLCJlIiwia2V5Iiwib24iLCJtZXNzYWdlIiwiY29uc29sZSIsImxvZyIsImdhbWVSb29tIiwic2NvcmVzIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsInBsYXllck1vdmVJbnRlcnZhbCIsInNldEludGVydmFsIiwiY2xlYXJJbnRlcnZhbCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJ0aXRsZSIsIm1ldGEiLCJkZXNjcmlwdGlvbiIsImRpdiIsImNsYXNzTmFtZSIsInNjb3JlIiwicCIsInNwYW4iLCJidXR0b24iLCJvbkNsaWNrIiwiY2FudmFzIiwiaWQiLCJ3aWR0aCIsImZpZWxkV2lkdGgiLCJoZWlnaHQiLCJmaWVsZEhlaWdodCIsImVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/[room].js\n");

/***/ })

});