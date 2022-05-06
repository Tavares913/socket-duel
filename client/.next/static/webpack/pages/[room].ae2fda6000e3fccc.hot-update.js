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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _utils_classes_GameRoom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/classes/GameRoom */ \"./utils/classes/GameRoom.js\");\n/* harmony import */ var _utils_classes_GameRoom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_utils_classes_GameRoom__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _utils_socketConnect__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/socketConnect */ \"./utils/socketConnect.js\");\n/* harmony import */ var _utils_socketConnect__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_utils_socketConnect__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _utils_updateScreen__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/updateScreen */ \"./utils/updateScreen.js\");\n/* harmony import */ var _utils_drawingDetails__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/drawingDetails */ \"./utils/drawingDetails.js\");\n/* harmony import */ var _utils_settings__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/settings */ \"./utils/settings.js\");\n/* harmony import */ var _utils_settings__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_utils_settings__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _styles_Room_module_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../styles/Room.module.css */ \"./styles/Room.module.css\");\n/* harmony import */ var _styles_Room_module_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_styles_Room_module_css__WEBPACK_IMPORTED_MODULE_10__);\nvar _this = undefined;\n\n\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar Room = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), gameInProgress = ref[0], setGameInProgress = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), roundInProgress = ref1[0], setRoundInProgress = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), gameStartError = ref2[0], setGameStartError = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), winner = ref3[0], setWinner = ref3[1];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), P1Score = ref4[0], setP1Score = ref4[1];\n    var ref5 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), P2Score = ref5[0], setP2Score = ref5[1];\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    var roomId = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector)(function(state) {\n        return state.gameDetails.roomId;\n    });\n    var playerNum1 = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector)(function(state) {\n        return state.gameDetails.playerNum;\n    });\n    var direction = null;\n    var startGameHandler = function() {\n        _utils_socketConnect__WEBPACK_IMPORTED_MODULE_5___default().emit(\"start-round\", roomId);\n    };\n    var backToHomeHandler = function() {\n        _utils_drawingDetails__WEBPACK_IMPORTED_MODULE_8__[\"default\"] = null;\n        router.push(\"/\");\n    };\n    var updateDirection = function(e) {\n        if (e.key == \"ArrowUp\") {\n            direction = \"up\";\n        } else if (e.key == \"ArrowDown\") {\n            direction = \"down\";\n        } else if (e.key == \"ArrowLeft\") {\n            direction = \"left\";\n        } else if (e.key == \"ArrowRight\") {\n            direction = \"right\";\n        } else if (e.key == \" \") {\n            _utils_socketConnect__WEBPACK_IMPORTED_MODULE_5___default().emit(\"shot\", {\n                roomId: roomId,\n                playerNum: playerNum1,\n                direction: direction\n            });\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        _utils_socketConnect__WEBPACK_IMPORTED_MODULE_5___default().on(\"round-started\", function() {\n            setGameInProgress(true);\n            setRoundInProgress(true);\n            setGameStartError(false);\n            (0,_utils_updateScreen__WEBPACK_IMPORTED_MODULE_7__[\"default\"])();\n        });\n        _utils_socketConnect__WEBPACK_IMPORTED_MODULE_5___default().on(\"game-start-error\", function() {\n            setGameStartError(true);\n        });\n        _utils_socketConnect__WEBPACK_IMPORTED_MODULE_5___default().on(\"tick\", function(gameRoom) {\n            _utils_drawingDetails__WEBPACK_IMPORTED_MODULE_8__[\"default\"] = new (_utils_classes_GameRoom__WEBPACK_IMPORTED_MODULE_4___default())(gameRoom);\n        });\n        _utils_socketConnect__WEBPACK_IMPORTED_MODULE_5___default().on(\"update-scores\", function(scores) {\n            setP1Score(scores[0]);\n            setP2Score(scores[1]);\n        });\n        _utils_socketConnect__WEBPACK_IMPORTED_MODULE_5___default().on(\"end-game\", function() {\n            console.log(\"game-ended\");\n            setRoundInProgress(false);\n            setGameInProgress(false);\n            _utils_drawingDetails__WEBPACK_IMPORTED_MODULE_8__[\"default\"] = null;\n        });\n        _utils_socketConnect__WEBPACK_IMPORTED_MODULE_5___default().on(\"end-round\", function() {\n            console.log(\"round-ended\");\n            setRoundInProgress(false);\n            _utils_drawingDetails__WEBPACK_IMPORTED_MODULE_8__[\"default\"] = null;\n        });\n        _utils_socketConnect__WEBPACK_IMPORTED_MODULE_5___default().on(\"winner\", function(playerNum) {\n            setWinner(playerNum);\n        });\n        window.addEventListener(\"keydown\", updateDirection);\n        var playerMoveInterval = setInterval(function() {\n            _utils_socketConnect__WEBPACK_IMPORTED_MODULE_5___default().emit(\"player-move\", {\n                roomId: roomId,\n                playerNum: playerNum1,\n                direction: direction\n            });\n        }, 33);\n        return function() {\n            clearInterval(playerMoveInterval);\n            window.removeEventListener(\"keydown\", updateDirection);\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Game Room\"\n                    }, void 0, false, {\n                        fileName: \"/Users/tavares913/Desktop/CS/Projects/socket-duel/client/pages/[room].js\",\n                        lineNumber: 108,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        description: \"The game room that players fight in while playing socket duel\"\n                    }, void 0, false, {\n                        fileName: \"/Users/tavares913/Desktop/CS/Projects/socket-duel/client/pages/[room].js\",\n                        lineNumber: 109,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/tavares913/Desktop/CS/Projects/socket-duel/client/pages/[room].js\",\n                lineNumber: 107,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Room_module_css__WEBPACK_IMPORTED_MODULE_10___default().scores),\n                children: [\n                    gameInProgress && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Room_module_css__WEBPACK_IMPORTED_MODULE_10___default().score),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"Player 1:\"\n                            }, void 0, false, {\n                                fileName: \"/Users/tavares913/Desktop/CS/Projects/socket-duel/client/pages/[room].js\",\n                                lineNumber: 114,\n                                columnNumber: 13\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: P1Score\n                            }, void 0, false, {\n                                fileName: \"/Users/tavares913/Desktop/CS/Projects/socket-duel/client/pages/[room].js\",\n                                lineNumber: 115,\n                                columnNumber: 13\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/tavares913/Desktop/CS/Projects/socket-duel/client/pages/[room].js\",\n                        lineNumber: 113,\n                        columnNumber: 11\n                    }, _this),\n                    gameInProgress && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Room_module_css__WEBPACK_IMPORTED_MODULE_10___default().score),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"Player 2:\"\n                            }, void 0, false, {\n                                fileName: \"/Users/tavares913/Desktop/CS/Projects/socket-duel/client/pages/[room].js\",\n                                lineNumber: 120,\n                                columnNumber: 13\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: P2Score\n                            }, void 0, false, {\n                                fileName: \"/Users/tavares913/Desktop/CS/Projects/socket-duel/client/pages/[room].js\",\n                                lineNumber: 121,\n                                columnNumber: 13\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/tavares913/Desktop/CS/Projects/socket-duel/client/pages/[room].js\",\n                        lineNumber: 119,\n                        columnNumber: 11\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/tavares913/Desktop/CS/Projects/socket-duel/client/pages/[room].js\",\n                lineNumber: 111,\n                columnNumber: 7\n            }, _this),\n            winner && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Room_module_css__WEBPACK_IMPORTED_MODULE_10___default().winner),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"Player \",\n                            winner,\n                            \" wins!\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/tavares913/Desktop/CS/Projects/socket-duel/client/pages/[room].js\",\n                        lineNumber: 127,\n                        columnNumber: 11\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: backToHomeHandler,\n                        className: (_styles_Room_module_css__WEBPACK_IMPORTED_MODULE_10___default().button),\n                        children: \"Back to Home\"\n                    }, void 0, false, {\n                        fileName: \"/Users/tavares913/Desktop/CS/Projects/socket-duel/client/pages/[room].js\",\n                        lineNumber: 128,\n                        columnNumber: 11\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/tavares913/Desktop/CS/Projects/socket-duel/client/pages/[room].js\",\n                lineNumber: 126,\n                columnNumber: 9\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Room_module_css__WEBPACK_IMPORTED_MODULE_10___default()[\"room-id\"]),\n                children: !gameInProgress && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: [\n                        \"Room Id: \",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            children: roomId\n                        }, void 0, false, {\n                            fileName: \"/Users/tavares913/Desktop/CS/Projects/socket-duel/client/pages/[room].js\",\n                            lineNumber: 137,\n                            columnNumber: 22\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/tavares913/Desktop/CS/Projects/socket-duel/client/pages/[room].js\",\n                    lineNumber: 136,\n                    columnNumber: 11\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/tavares913/Desktop/CS/Projects/socket-duel/client/pages/[room].js\",\n                lineNumber: 134,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Room_module_css__WEBPACK_IMPORTED_MODULE_10___default()[\"game-area-container\"]),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"canvas\", {\n                    id: \"game-area\",\n                    className: (_styles_Room_module_css__WEBPACK_IMPORTED_MODULE_10___default()[\"game-area\"]),\n                    width: \"\".concat((_utils_settings__WEBPACK_IMPORTED_MODULE_9___default().fieldWidth), \"px\"),\n                    height: \"\".concat((_utils_settings__WEBPACK_IMPORTED_MODULE_9___default().fieldHeight), \"px\")\n                }, void 0, false, {\n                    fileName: \"/Users/tavares913/Desktop/CS/Projects/socket-duel/client/pages/[room].js\",\n                    lineNumber: 143,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/tavares913/Desktop/CS/Projects/socket-duel/client/pages/[room].js\",\n                lineNumber: 142,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Room_module_css__WEBPACK_IMPORTED_MODULE_10___default()[\"round-buttons\"]),\n                children: [\n                    !roundInProgress && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: startGameHandler,\n                        className: (_styles_Room_module_css__WEBPACK_IMPORTED_MODULE_10___default().button),\n                        children: \"Start Round\"\n                    }, void 0, false, {\n                        fileName: \"/Users/tavares913/Desktop/CS/Projects/socket-duel/client/pages/[room].js\",\n                        lineNumber: 153,\n                        columnNumber: 11\n                    }, _this),\n                    gameStartError && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: (_styles_Room_module_css__WEBPACK_IMPORTED_MODULE_10___default().error),\n                        children: \"The game can only start once there are 2 players\"\n                    }, void 0, false, {\n                        fileName: \"/Users/tavares913/Desktop/CS/Projects/socket-duel/client/pages/[room].js\",\n                        lineNumber: 158,\n                        columnNumber: 11\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/tavares913/Desktop/CS/Projects/socket-duel/client/pages/[room].js\",\n                lineNumber: 151,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true);\n};\n_s(Room, \"Mlt7XgypsJYrbMnb9A0uXKfQxVQ=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter,\n        react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector\n    ];\n});\n_c = Room;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Room);\nvar _c;\n$RefreshReg$(_c, \"Room\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0dBdkpLQyxJQUFJOztRQVFPVCxrREFBUztRQUVUSSxvREFBVztRQUNSQSxvREFBVzs7O0FBWHpCSyxLQUFBQSxJQUFJO0FBeUpWLCtEQUFlQSxJQUFJLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvW3Jvb21dLmpzP2NiNTMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5cbmltcG9ydCBHYW1lUm9vbSBmcm9tIFwiLi4vdXRpbHMvY2xhc3Nlcy9HYW1lUm9vbVwiO1xuaW1wb3J0IHNvY2tldCBmcm9tIFwiLi4vdXRpbHMvc29ja2V0Q29ubmVjdFwiO1xuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB1cGRhdGVTY3JlZW4gZnJvbSBcIi4uL3V0aWxzL3VwZGF0ZVNjcmVlblwiO1xuaW1wb3J0IGRyYXdpbmdEZXRhaWxzIGZyb20gXCIuLi91dGlscy9kcmF3aW5nRGV0YWlsc1wiO1xuaW1wb3J0IHNldHRpbmdzIGZyb20gXCIuLi91dGlscy9zZXR0aW5nc1wiO1xuXG5pbXBvcnQgY2xhc3NlcyBmcm9tIFwiLi4vc3R5bGVzL1Jvb20ubW9kdWxlLmNzc1wiO1xuXG5jb25zdCBSb29tID0gKCkgPT4ge1xuICBjb25zdCBbZ2FtZUluUHJvZ3Jlc3MsIHNldEdhbWVJblByb2dyZXNzXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3JvdW5kSW5Qcm9ncmVzcywgc2V0Um91bmRJblByb2dyZXNzXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2dhbWVTdGFydEVycm9yLCBzZXRHYW1lU3RhcnRFcnJvcl0gPSB1c2VTdGF0ZSgpO1xuICBjb25zdCBbd2lubmVyLCBzZXRXaW5uZXJdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFtQMVNjb3JlLCBzZXRQMVNjb3JlXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbUDJTY29yZSwgc2V0UDJTY29yZV0gPSB1c2VTdGF0ZSgwKTtcblxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICBjb25zdCByb29tSWQgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmdhbWVEZXRhaWxzLnJvb21JZCk7XG4gIGNvbnN0IHBsYXllck51bSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuZ2FtZURldGFpbHMucGxheWVyTnVtKTtcbiAgbGV0IGRpcmVjdGlvbiA9IG51bGw7XG5cbiAgY29uc3Qgc3RhcnRHYW1lSGFuZGxlciA9ICgpID0+IHtcbiAgICBzb2NrZXQuZW1pdChcInN0YXJ0LXJvdW5kXCIsIHJvb21JZCk7XG4gIH07XG5cbiAgY29uc3QgYmFja1RvSG9tZUhhbmRsZXIgPSAoKSA9PiB7XG4gICAgZHJhd2luZ0RldGFpbHMgPSBudWxsO1xuICAgIHJvdXRlci5wdXNoKFwiL1wiKTtcbiAgfTtcblxuICBjb25zdCB1cGRhdGVEaXJlY3Rpb24gPSAoZSkgPT4ge1xuICAgIGlmIChlLmtleSA9PSBcIkFycm93VXBcIikge1xuICAgICAgZGlyZWN0aW9uID0gXCJ1cFwiO1xuICAgIH0gZWxzZSBpZiAoZS5rZXkgPT0gXCJBcnJvd0Rvd25cIikge1xuICAgICAgZGlyZWN0aW9uID0gXCJkb3duXCI7XG4gICAgfSBlbHNlIGlmIChlLmtleSA9PSBcIkFycm93TGVmdFwiKSB7XG4gICAgICBkaXJlY3Rpb24gPSBcImxlZnRcIjtcbiAgICB9IGVsc2UgaWYgKGUua2V5ID09IFwiQXJyb3dSaWdodFwiKSB7XG4gICAgICBkaXJlY3Rpb24gPSBcInJpZ2h0XCI7XG4gICAgfSBlbHNlIGlmIChlLmtleSA9PSBcIiBcIikge1xuICAgICAgc29ja2V0LmVtaXQoXCJzaG90XCIsIHsgcm9vbUlkLCBwbGF5ZXJOdW0sIGRpcmVjdGlvbiB9KTtcbiAgICB9XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzb2NrZXQub24oXCJyb3VuZC1zdGFydGVkXCIsICgpID0+IHtcbiAgICAgIHNldEdhbWVJblByb2dyZXNzKHRydWUpO1xuICAgICAgc2V0Um91bmRJblByb2dyZXNzKHRydWUpO1xuICAgICAgc2V0R2FtZVN0YXJ0RXJyb3IoZmFsc2UpO1xuICAgICAgdXBkYXRlU2NyZWVuKCk7XG4gICAgfSk7XG5cbiAgICBzb2NrZXQub24oXCJnYW1lLXN0YXJ0LWVycm9yXCIsICgpID0+IHtcbiAgICAgIHNldEdhbWVTdGFydEVycm9yKHRydWUpO1xuICAgIH0pO1xuXG4gICAgc29ja2V0Lm9uKFwidGlja1wiLCAoZ2FtZVJvb20pID0+IHtcbiAgICAgIGRyYXdpbmdEZXRhaWxzID0gbmV3IEdhbWVSb29tKGdhbWVSb29tKTtcbiAgICB9KTtcblxuICAgIHNvY2tldC5vbihcInVwZGF0ZS1zY29yZXNcIiwgKHNjb3JlcykgPT4ge1xuICAgICAgc2V0UDFTY29yZShzY29yZXNbMF0pO1xuICAgICAgc2V0UDJTY29yZShzY29yZXNbMV0pO1xuICAgIH0pO1xuXG4gICAgc29ja2V0Lm9uKFwiZW5kLWdhbWVcIiwgKCkgPT4ge1xuICAgICAgY29uc29sZS5sb2coXCJnYW1lLWVuZGVkXCIpO1xuICAgICAgc2V0Um91bmRJblByb2dyZXNzKGZhbHNlKTtcbiAgICAgIHNldEdhbWVJblByb2dyZXNzKGZhbHNlKTtcbiAgICAgIGRyYXdpbmdEZXRhaWxzID0gbnVsbDtcbiAgICB9KTtcblxuICAgIHNvY2tldC5vbihcImVuZC1yb3VuZFwiLCAoKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhcInJvdW5kLWVuZGVkXCIpO1xuICAgICAgc2V0Um91bmRJblByb2dyZXNzKGZhbHNlKTtcbiAgICAgIGRyYXdpbmdEZXRhaWxzID0gbnVsbDtcbiAgICB9KTtcblxuICAgIHNvY2tldC5vbihcIndpbm5lclwiLCAocGxheWVyTnVtKSA9PiB7XG4gICAgICBzZXRXaW5uZXIocGxheWVyTnVtKTtcbiAgICB9KTtcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCB1cGRhdGVEaXJlY3Rpb24pO1xuXG4gICAgY29uc3QgcGxheWVyTW92ZUludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgc29ja2V0LmVtaXQoXCJwbGF5ZXItbW92ZVwiLCB7XG4gICAgICAgIHJvb21JZCxcbiAgICAgICAgcGxheWVyTnVtLFxuICAgICAgICBkaXJlY3Rpb24sXG4gICAgICB9KTtcbiAgICB9LCAzMyk7XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgY2xlYXJJbnRlcnZhbChwbGF5ZXJNb3ZlSW50ZXJ2YWwpO1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIHVwZGF0ZURpcmVjdGlvbik7XG4gICAgfTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+R2FtZSBSb29tPC90aXRsZT5cbiAgICAgICAgPG1ldGEgZGVzY3JpcHRpb249XCJUaGUgZ2FtZSByb29tIHRoYXQgcGxheWVycyBmaWdodCBpbiB3aGlsZSBwbGF5aW5nIHNvY2tldCBkdWVsXCIgLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnNjb3Jlc30+XG4gICAgICAgIHtnYW1lSW5Qcm9ncmVzcyAmJiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuc2NvcmV9PlxuICAgICAgICAgICAgPHA+UGxheWVyIDE6PC9wPlxuICAgICAgICAgICAgPHNwYW4+e1AxU2NvcmV9PC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgICB7Z2FtZUluUHJvZ3Jlc3MgJiYgKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnNjb3JlfT5cbiAgICAgICAgICAgIDxwPlBsYXllciAyOjwvcD5cbiAgICAgICAgICAgIDxzcGFuPntQMlNjb3JlfTwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgICAge3dpbm5lciAmJiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLndpbm5lcn0+XG4gICAgICAgICAgPHA+UGxheWVyIHt3aW5uZXJ9IHdpbnMhPC9wPlxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17YmFja1RvSG9tZUhhbmRsZXJ9IGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b259PlxuICAgICAgICAgICAgQmFjayB0byBIb21lXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cblxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXNbXCJyb29tLWlkXCJdfT5cbiAgICAgICAgeyFnYW1lSW5Qcm9ncmVzcyAmJiAoXG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICBSb29tIElkOiA8c3Bhbj57cm9vbUlkfTwvc3Bhbj5cbiAgICAgICAgICA8L3A+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXNbXCJnYW1lLWFyZWEtY29udGFpbmVyXCJdfT5cbiAgICAgICAgPGNhbnZhc1xuICAgICAgICAgIGlkPVwiZ2FtZS1hcmVhXCJcbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXNbXCJnYW1lLWFyZWFcIl19XG4gICAgICAgICAgd2lkdGg9e2Ake3NldHRpbmdzLmZpZWxkV2lkdGh9cHhgfVxuICAgICAgICAgIGhlaWdodD17YCR7c2V0dGluZ3MuZmllbGRIZWlnaHR9cHhgfVxuICAgICAgICA+PC9jYW52YXM+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXNbXCJyb3VuZC1idXR0b25zXCJdfT5cbiAgICAgICAgeyFyb3VuZEluUHJvZ3Jlc3MgJiYgKFxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17c3RhcnRHYW1lSGFuZGxlcn0gY2xhc3NOYW1lPXtjbGFzc2VzLmJ1dHRvbn0+XG4gICAgICAgICAgICBTdGFydCBSb3VuZFxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICApfVxuICAgICAgICB7Z2FtZVN0YXJ0RXJyb3IgJiYgKFxuICAgICAgICAgIDxwIGNsYXNzTmFtZT17Y2xhc3Nlcy5lcnJvcn0+XG4gICAgICAgICAgICBUaGUgZ2FtZSBjYW4gb25seSBzdGFydCBvbmNlIHRoZXJlIGFyZSAyIHBsYXllcnNcbiAgICAgICAgICA8L3A+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJvb207XG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VSb3V0ZXIiLCJIZWFkIiwiR2FtZVJvb20iLCJzb2NrZXQiLCJ1c2VTZWxlY3RvciIsInVwZGF0ZVNjcmVlbiIsImRyYXdpbmdEZXRhaWxzIiwic2V0dGluZ3MiLCJjbGFzc2VzIiwiUm9vbSIsImdhbWVJblByb2dyZXNzIiwic2V0R2FtZUluUHJvZ3Jlc3MiLCJyb3VuZEluUHJvZ3Jlc3MiLCJzZXRSb3VuZEluUHJvZ3Jlc3MiLCJnYW1lU3RhcnRFcnJvciIsInNldEdhbWVTdGFydEVycm9yIiwid2lubmVyIiwic2V0V2lubmVyIiwiUDFTY29yZSIsInNldFAxU2NvcmUiLCJQMlNjb3JlIiwic2V0UDJTY29yZSIsInJvdXRlciIsInJvb21JZCIsInN0YXRlIiwiZ2FtZURldGFpbHMiLCJwbGF5ZXJOdW0iLCJkaXJlY3Rpb24iLCJzdGFydEdhbWVIYW5kbGVyIiwiZW1pdCIsImJhY2tUb0hvbWVIYW5kbGVyIiwicHVzaCIsInVwZGF0ZURpcmVjdGlvbiIsImUiLCJrZXkiLCJvbiIsImdhbWVSb29tIiwic2NvcmVzIiwiY29uc29sZSIsImxvZyIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJwbGF5ZXJNb3ZlSW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwidGl0bGUiLCJtZXRhIiwiZGVzY3JpcHRpb24iLCJkaXYiLCJjbGFzc05hbWUiLCJzY29yZSIsInAiLCJzcGFuIiwiYnV0dG9uIiwib25DbGljayIsImNhbnZhcyIsImlkIiwid2lkdGgiLCJmaWVsZFdpZHRoIiwiaGVpZ2h0IiwiZmllbGRIZWlnaHQiLCJlcnJvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/[room].js\n");

/***/ })

});