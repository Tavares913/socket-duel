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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_Room_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/Room.module.css */ \"./styles/Room.module.css\");\n/* harmony import */ var _styles_Room_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_Room_module_css__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _utils_socketConnect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/socketConnect */ \"./utils/socketConnect.js\");\n/* harmony import */ var _utils_socketConnect__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_utils_socketConnect__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _utils_updateScreen__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/updateScreen */ \"./utils/updateScreen.js\");\n/* harmony import */ var _utils_drawingDetails__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/drawingDetails */ \"./utils/drawingDetails.js\");\n/* harmony import */ var _utils_settings__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/settings */ \"./utils/settings.js\");\n/* harmony import */ var _utils_settings__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_utils_settings__WEBPACK_IMPORTED_MODULE_7__);\nvar _this = undefined;\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar Room = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), gameInProgress = ref[0], setGameInProgress = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), roundInProgress = ref1[0], setRoundInProgress = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), gameStartError = ref2[0], setGameStartError = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), winner = ref3[0], setWinner = ref3[1];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), P1Score = ref4[0], setP1Score = ref4[1];\n    var ref5 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), P2Score = ref5[0], setP2Score = ref5[1];\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    var roomId = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)(function(state) {\n        return state.gameDetails.roomId;\n    });\n    var playerNum1 = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)(function(state) {\n        return state.gameDetails.playerNum;\n    });\n    var direction = null;\n    var startGameHandler = function() {\n        _utils_socketConnect__WEBPACK_IMPORTED_MODULE_3___default().emit(\"start-round\", roomId);\n    };\n    var backToHomeHandler = function() {\n        _utils_drawingDetails__WEBPACK_IMPORTED_MODULE_6__[\"default\"] = null;\n        router.push(\"/\");\n    };\n    var updateDirection = function(e) {\n        if (e.key == \"ArrowUp\") {\n            direction = \"up\";\n        } else if (e.key == \"ArrowDown\") {\n            direction = \"down\";\n        } else if (e.key == \"ArrowLeft\") {\n            direction = \"left\";\n        } else if (e.key == \"ArrowRight\") {\n            direction = \"right\";\n        } else if (e.key == \" \") {\n            _utils_socketConnect__WEBPACK_IMPORTED_MODULE_3___default().emit(\"shot\", {\n                roomId: roomId,\n                playerNum: playerNum1,\n                direction: direction\n            });\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        _utils_socketConnect__WEBPACK_IMPORTED_MODULE_3___default().on(\"message\", function(message) {\n            console.log(message);\n        });\n        _utils_socketConnect__WEBPACK_IMPORTED_MODULE_3___default().on(\"round-started\", function() {\n            setGameInProgress(true);\n            setRoundInProgress(true);\n            setGameStartError(false);\n            (0,_utils_updateScreen__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n        });\n        _utils_socketConnect__WEBPACK_IMPORTED_MODULE_3___default().on(\"game-start-error\", function() {\n            setGameStartError(true);\n        });\n        _utils_socketConnect__WEBPACK_IMPORTED_MODULE_3___default().on(\"tick\", function(gameRoom) {\n            _utils_drawingDetails__WEBPACK_IMPORTED_MODULE_6__[\"default\"] = gameRoom;\n        });\n        _utils_socketConnect__WEBPACK_IMPORTED_MODULE_3___default().on(\"update-scores\", function(scores) {\n            setP1Score(scores[0]);\n            setP2Score(scores[1]);\n        });\n        _utils_socketConnect__WEBPACK_IMPORTED_MODULE_3___default().on(\"end-game\", function() {\n            console.log(\"game-ended\");\n            setRoundInProgress(false);\n            setGameInProgress(false);\n            _utils_drawingDetails__WEBPACK_IMPORTED_MODULE_6__[\"default\"] = null;\n        });\n        _utils_socketConnect__WEBPACK_IMPORTED_MODULE_3___default().on(\"end-round\", function() {\n            console.log(\"round-ended\");\n            setRoundInProgress(false);\n            _utils_drawingDetails__WEBPACK_IMPORTED_MODULE_6__[\"default\"] = null;\n        });\n        _utils_socketConnect__WEBPACK_IMPORTED_MODULE_3___default().on(\"winner\", function(playerNum) {\n            setWinner(playerNum);\n        });\n        window.addEventListener(\"keydown\", updateDirection);\n        var playerMoveInterval = setInterval(function() {\n            _utils_socketConnect__WEBPACK_IMPORTED_MODULE_3___default().emit(\"player-move\", {\n                roomId: roomId,\n                playerNum: playerNum1,\n                direction: direction\n            });\n        }, 33);\n        return function() {\n            clearInterval(playerMoveInterval);\n            window.removeEventListener(\"keydown\", updateDirection);\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Room_module_css__WEBPACK_IMPORTED_MODULE_8___default().scores),\n                children: [\n                    gameInProgress && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"Player 1: \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: P1Score\n                            }, void 0, false, {\n                                fileName: \"/Users/tavares913/Desktop/CS/Projects/socket-duel/client/pages/[room].js\",\n                                lineNumber: 110,\n                                columnNumber: 23\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/tavares913/Desktop/CS/Projects/socket-duel/client/pages/[room].js\",\n                        lineNumber: 109,\n                        columnNumber: 11\n                    }, _this),\n                    gameInProgress && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"Player 2: \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: P2Score\n                            }, void 0, false, {\n                                fileName: \"/Users/tavares913/Desktop/CS/Projects/socket-duel/client/pages/[room].js\",\n                                lineNumber: 115,\n                                columnNumber: 23\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/tavares913/Desktop/CS/Projects/socket-duel/client/pages/[room].js\",\n                        lineNumber: 114,\n                        columnNumber: 11\n                    }, _this),\n                    !gameInProgress && winner && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"The Game Is Over\"\n                    }, void 0, false, {\n                        fileName: \"/Users/tavares913/Desktop/CS/Projects/socket-duel/client/pages/[room].js\",\n                        lineNumber: 118,\n                        columnNumber: 39\n                    }, _this),\n                    winner && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: [\n                                    \"Player \",\n                                    winner,\n                                    \" wins!\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/tavares913/Desktop/CS/Projects/socket-duel/client/pages/[room].js\",\n                                lineNumber: 121,\n                                columnNumber: 13\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: backToHomeHandler,\n                                children: \"Back to Home\"\n                            }, void 0, false, {\n                                fileName: \"/Users/tavares913/Desktop/CS/Projects/socket-duel/client/pages/[room].js\",\n                                lineNumber: 122,\n                                columnNumber: 13\n                            }, _this)\n                        ]\n                    }, void 0, true)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/tavares913/Desktop/CS/Projects/socket-duel/client/pages/[room].js\",\n                lineNumber: 107,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Room_module_css__WEBPACK_IMPORTED_MODULE_8___default()[\"room-id\"]),\n                children: !gameInProgress && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: [\n                        \"Room Id: \",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            children: roomId\n                        }, void 0, false, {\n                            fileName: \"/Users/tavares913/Desktop/CS/Projects/socket-duel/client/pages/[room].js\",\n                            lineNumber: 130,\n                            columnNumber: 22\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/tavares913/Desktop/CS/Projects/socket-duel/client/pages/[room].js\",\n                    lineNumber: 129,\n                    columnNumber: 11\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/tavares913/Desktop/CS/Projects/socket-duel/client/pages/[room].js\",\n                lineNumber: 127,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Room_module_css__WEBPACK_IMPORTED_MODULE_8___default()[\"game-area-container\"]),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"canvas\", {\n                    id: \"game-area\",\n                    className: (_styles_Room_module_css__WEBPACK_IMPORTED_MODULE_8___default()[\"game-area\"]),\n                    width: \"\".concat((_utils_settings__WEBPACK_IMPORTED_MODULE_7___default().fieldWidth), \"px\"),\n                    height: \"\".concat((_utils_settings__WEBPACK_IMPORTED_MODULE_7___default().fieldHeight), \"px\")\n                }, void 0, false, {\n                    fileName: \"/Users/tavares913/Desktop/CS/Projects/socket-duel/client/pages/[room].js\",\n                    lineNumber: 136,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/tavares913/Desktop/CS/Projects/socket-duel/client/pages/[room].js\",\n                lineNumber: 135,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Room_module_css__WEBPACK_IMPORTED_MODULE_8___default()[\"round-buttons\"]),\n                children: [\n                    !roundInProgress && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: startGameHandler,\n                        className: (_styles_Room_module_css__WEBPACK_IMPORTED_MODULE_8___default().button),\n                        children: \"Start Round\"\n                    }, void 0, false, {\n                        fileName: \"/Users/tavares913/Desktop/CS/Projects/socket-duel/client/pages/[room].js\",\n                        lineNumber: 146,\n                        columnNumber: 11\n                    }, _this),\n                    gameStartError && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: (_styles_Room_module_css__WEBPACK_IMPORTED_MODULE_8___default().error),\n                        children: \"The game can only start once there are 2 players\"\n                    }, void 0, false, {\n                        fileName: \"/Users/tavares913/Desktop/CS/Projects/socket-duel/client/pages/[room].js\",\n                        lineNumber: 151,\n                        columnNumber: 11\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/tavares913/Desktop/CS/Projects/socket-duel/client/pages/[room].js\",\n                lineNumber: 144,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true);\n};\n_s(Room, \"Mlt7XgypsJYrbMnb9A0uXKfQxVQ=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter,\n        react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector\n    ];\n});\n_c = Room;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Room);\nvar _c;\n$RefreshReg$(_c, \"Room\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFZOzs7OztxQ0FBUzs7b0NBQ3hEOzs7Ozs7cUJBRUQ7MEJBRU4sOERBQUNpQixLQUFHO2dCQUFDQyxTQUFTLEVBQUU3QywyRUFBa0I7MEJBQy9CLENBQUNPLGNBQWMsa0JBQ2QsOERBQUN1QyxHQUFDOzt3QkFBQyxXQUNRO3NDQUFBLDhEQUFDQyxNQUFJO3NDQUFFM0IsTUFBTTs7Ozs7aUNBQVE7Ozs7Ozt5QkFDNUI7Ozs7O3FCQUVGOzBCQUVOLDhEQUFDd0IsS0FBRztnQkFBQ0MsU0FBUyxFQUFFN0MsdUZBQThCOzBCQUM1Qyw0RUFBQ2tELFFBQU07b0JBQ0xDLEVBQUUsRUFBQyxXQUFXO29CQUNkTixTQUFTLEVBQUU3Qyw2RUFBb0I7b0JBQy9Cb0QsS0FBSyxFQUFFLEVBQUMsQ0FBc0IsTUFBRSxDQUF0Qi9DLG1FQUFtQixFQUFDLElBQUUsQ0FBQztvQkFDakNpRCxNQUFNLEVBQUUsRUFBQyxDQUF1QixNQUFFLENBQXZCakQsb0VBQW9CLEVBQUMsSUFBRSxDQUFDOzs7Ozt5QkFDM0I7Ozs7O3FCQUNOOzBCQUVOLDhEQUFDdUMsS0FBRztnQkFBQ0MsU0FBUyxFQUFFN0MsaUZBQXdCOztvQkFDckMsQ0FBQ1MsZUFBZSxrQkFDZiw4REFBQ3VDLFFBQU07d0JBQUNDLE9BQU8sRUFBRXhCLGdCQUFnQjt3QkFBRW9CLFNBQVMsRUFBRTdDLHVFQUFjO2tDQUFFLGFBRTlEOzs7Ozs2QkFBUztvQkFFVlcsY0FBYyxrQkFDYiw4REFBQ21DLEdBQUM7d0JBQUNELFNBQVMsRUFBRTdDLHNFQUFhO2tDQUFFLGtEQUU3Qjs7Ozs7NkJBQUk7Ozs7OztxQkFFRjs7b0JBQ0wsQ0FDSDtDQUNIO0dBcEpLTSxJQUFJOztRQVFPUCxrREFBUztRQUVURyxvREFBVztRQUNSQSxvREFBVzs7O0FBWHpCSSxLQUFBQSxJQUFJO0FBc0pWLCtEQUFlQSxJQUFJLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvW3Jvb21dLmpzP2NiNTMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgY2xhc3NlcyBmcm9tIFwiLi4vc3R5bGVzL1Jvb20ubW9kdWxlLmNzc1wiO1xuaW1wb3J0IHNvY2tldCBmcm9tIFwiLi4vdXRpbHMvc29ja2V0Q29ubmVjdFwiO1xuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB1cGRhdGVTY3JlZW4gZnJvbSBcIi4uL3V0aWxzL3VwZGF0ZVNjcmVlblwiO1xuaW1wb3J0IGRyYXdpbmdEZXRhaWxzIGZyb20gXCIuLi91dGlscy9kcmF3aW5nRGV0YWlsc1wiO1xuaW1wb3J0IHNldHRpbmdzIGZyb20gXCIuLi91dGlscy9zZXR0aW5nc1wiO1xuXG5jb25zdCBSb29tID0gKCkgPT4ge1xuICBjb25zdCBbZ2FtZUluUHJvZ3Jlc3MsIHNldEdhbWVJblByb2dyZXNzXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3JvdW5kSW5Qcm9ncmVzcywgc2V0Um91bmRJblByb2dyZXNzXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2dhbWVTdGFydEVycm9yLCBzZXRHYW1lU3RhcnRFcnJvcl0gPSB1c2VTdGF0ZSgpO1xuICBjb25zdCBbd2lubmVyLCBzZXRXaW5uZXJdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFtQMVNjb3JlLCBzZXRQMVNjb3JlXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbUDJTY29yZSwgc2V0UDJTY29yZV0gPSB1c2VTdGF0ZSgwKTtcblxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICBjb25zdCByb29tSWQgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmdhbWVEZXRhaWxzLnJvb21JZCk7XG4gIGNvbnN0IHBsYXllck51bSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuZ2FtZURldGFpbHMucGxheWVyTnVtKTtcbiAgbGV0IGRpcmVjdGlvbiA9IG51bGw7XG5cbiAgY29uc3Qgc3RhcnRHYW1lSGFuZGxlciA9ICgpID0+IHtcbiAgICBzb2NrZXQuZW1pdChcInN0YXJ0LXJvdW5kXCIsIHJvb21JZCk7XG4gIH07XG5cbiAgY29uc3QgYmFja1RvSG9tZUhhbmRsZXIgPSAoKSA9PiB7XG4gICAgZHJhd2luZ0RldGFpbHMgPSBudWxsO1xuICAgIHJvdXRlci5wdXNoKFwiL1wiKTtcbiAgfTtcblxuICBjb25zdCB1cGRhdGVEaXJlY3Rpb24gPSAoZSkgPT4ge1xuICAgIGlmIChlLmtleSA9PSBcIkFycm93VXBcIikge1xuICAgICAgZGlyZWN0aW9uID0gXCJ1cFwiO1xuICAgIH0gZWxzZSBpZiAoZS5rZXkgPT0gXCJBcnJvd0Rvd25cIikge1xuICAgICAgZGlyZWN0aW9uID0gXCJkb3duXCI7XG4gICAgfSBlbHNlIGlmIChlLmtleSA9PSBcIkFycm93TGVmdFwiKSB7XG4gICAgICBkaXJlY3Rpb24gPSBcImxlZnRcIjtcbiAgICB9IGVsc2UgaWYgKGUua2V5ID09IFwiQXJyb3dSaWdodFwiKSB7XG4gICAgICBkaXJlY3Rpb24gPSBcInJpZ2h0XCI7XG4gICAgfSBlbHNlIGlmIChlLmtleSA9PSBcIiBcIikge1xuICAgICAgc29ja2V0LmVtaXQoXCJzaG90XCIsIHsgcm9vbUlkLCBwbGF5ZXJOdW0sIGRpcmVjdGlvbiB9KTtcbiAgICB9XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzb2NrZXQub24oXCJtZXNzYWdlXCIsIChtZXNzYWdlKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhtZXNzYWdlKTtcbiAgICB9KTtcblxuICAgIHNvY2tldC5vbihcInJvdW5kLXN0YXJ0ZWRcIiwgKCkgPT4ge1xuICAgICAgc2V0R2FtZUluUHJvZ3Jlc3ModHJ1ZSk7XG4gICAgICBzZXRSb3VuZEluUHJvZ3Jlc3ModHJ1ZSk7XG4gICAgICBzZXRHYW1lU3RhcnRFcnJvcihmYWxzZSk7XG4gICAgICB1cGRhdGVTY3JlZW4oKTtcbiAgICB9KTtcblxuICAgIHNvY2tldC5vbihcImdhbWUtc3RhcnQtZXJyb3JcIiwgKCkgPT4ge1xuICAgICAgc2V0R2FtZVN0YXJ0RXJyb3IodHJ1ZSk7XG4gICAgfSk7XG5cbiAgICBzb2NrZXQub24oXCJ0aWNrXCIsIChnYW1lUm9vbSkgPT4ge1xuICAgICAgZHJhd2luZ0RldGFpbHMgPSBnYW1lUm9vbTtcbiAgICB9KTtcblxuICAgIHNvY2tldC5vbihcInVwZGF0ZS1zY29yZXNcIiwgKHNjb3JlcykgPT4ge1xuICAgICAgc2V0UDFTY29yZShzY29yZXNbMF0pO1xuICAgICAgc2V0UDJTY29yZShzY29yZXNbMV0pO1xuICAgIH0pO1xuXG4gICAgc29ja2V0Lm9uKFwiZW5kLWdhbWVcIiwgKCkgPT4ge1xuICAgICAgY29uc29sZS5sb2coXCJnYW1lLWVuZGVkXCIpO1xuICAgICAgc2V0Um91bmRJblByb2dyZXNzKGZhbHNlKTtcbiAgICAgIHNldEdhbWVJblByb2dyZXNzKGZhbHNlKTtcbiAgICAgIGRyYXdpbmdEZXRhaWxzID0gbnVsbDtcbiAgICB9KTtcblxuICAgIHNvY2tldC5vbihcImVuZC1yb3VuZFwiLCAoKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhcInJvdW5kLWVuZGVkXCIpO1xuICAgICAgc2V0Um91bmRJblByb2dyZXNzKGZhbHNlKTtcbiAgICAgIGRyYXdpbmdEZXRhaWxzID0gbnVsbDtcbiAgICB9KTtcblxuICAgIHNvY2tldC5vbihcIndpbm5lclwiLCAocGxheWVyTnVtKSA9PiB7XG4gICAgICBzZXRXaW5uZXIocGxheWVyTnVtKTtcbiAgICB9KTtcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCB1cGRhdGVEaXJlY3Rpb24pO1xuXG4gICAgY29uc3QgcGxheWVyTW92ZUludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgc29ja2V0LmVtaXQoXCJwbGF5ZXItbW92ZVwiLCB7XG4gICAgICAgIHJvb21JZCxcbiAgICAgICAgcGxheWVyTnVtLFxuICAgICAgICBkaXJlY3Rpb24sXG4gICAgICB9KTtcbiAgICB9LCAzMyk7XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgY2xlYXJJbnRlcnZhbChwbGF5ZXJNb3ZlSW50ZXJ2YWwpO1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIHVwZGF0ZURpcmVjdGlvbik7XG4gICAgfTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnNjb3Jlc30+XG4gICAgICAgIHtnYW1lSW5Qcm9ncmVzcyAmJiAoXG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICBQbGF5ZXIgMTogPHNwYW4+e1AxU2NvcmV9PC9zcGFuPlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgKX1cbiAgICAgICAge2dhbWVJblByb2dyZXNzICYmIChcbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIFBsYXllciAyOiA8c3Bhbj57UDJTY29yZX08L3NwYW4+XG4gICAgICAgICAgPC9wPlxuICAgICAgICApfVxuICAgICAgICB7IWdhbWVJblByb2dyZXNzICYmIHdpbm5lciAmJiA8cD5UaGUgR2FtZSBJcyBPdmVyPC9wPn1cbiAgICAgICAge3dpbm5lciAmJiAoXG4gICAgICAgICAgPD5cbiAgICAgICAgICAgIDxwPlBsYXllciB7d2lubmVyfSB3aW5zITwvcD5cbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17YmFja1RvSG9tZUhhbmRsZXJ9PkJhY2sgdG8gSG9tZTwvYnV0dG9uPlxuICAgICAgICAgIDwvPlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzW1wicm9vbS1pZFwiXX0+XG4gICAgICAgIHshZ2FtZUluUHJvZ3Jlc3MgJiYgKFxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAgUm9vbSBJZDogPHNwYW4+e3Jvb21JZH08L3NwYW4+XG4gICAgICAgICAgPC9wPlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzW1wiZ2FtZS1hcmVhLWNvbnRhaW5lclwiXX0+XG4gICAgICAgIDxjYW52YXNcbiAgICAgICAgICBpZD1cImdhbWUtYXJlYVwiXG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzW1wiZ2FtZS1hcmVhXCJdfVxuICAgICAgICAgIHdpZHRoPXtgJHtzZXR0aW5ncy5maWVsZFdpZHRofXB4YH1cbiAgICAgICAgICBoZWlnaHQ9e2Ake3NldHRpbmdzLmZpZWxkSGVpZ2h0fXB4YH1cbiAgICAgICAgPjwvY2FudmFzPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzW1wicm91bmQtYnV0dG9uc1wiXX0+XG4gICAgICAgIHshcm91bmRJblByb2dyZXNzICYmIChcbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3N0YXJ0R2FtZUhhbmRsZXJ9IGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b259PlxuICAgICAgICAgICAgU3RhcnQgUm91bmRcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgKX1cbiAgICAgICAge2dhbWVTdGFydEVycm9yICYmIChcbiAgICAgICAgICA8cCBjbGFzc05hbWU9e2NsYXNzZXMuZXJyb3J9PlxuICAgICAgICAgICAgVGhlIGdhbWUgY2FuIG9ubHkgc3RhcnQgb25jZSB0aGVyZSBhcmUgMiBwbGF5ZXJzXG4gICAgICAgICAgPC9wPlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBSb29tO1xuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlUm91dGVyIiwiY2xhc3NlcyIsInNvY2tldCIsInVzZVNlbGVjdG9yIiwidXBkYXRlU2NyZWVuIiwiZHJhd2luZ0RldGFpbHMiLCJzZXR0aW5ncyIsIlJvb20iLCJnYW1lSW5Qcm9ncmVzcyIsInNldEdhbWVJblByb2dyZXNzIiwicm91bmRJblByb2dyZXNzIiwic2V0Um91bmRJblByb2dyZXNzIiwiZ2FtZVN0YXJ0RXJyb3IiLCJzZXRHYW1lU3RhcnRFcnJvciIsIndpbm5lciIsInNldFdpbm5lciIsIlAxU2NvcmUiLCJzZXRQMVNjb3JlIiwiUDJTY29yZSIsInNldFAyU2NvcmUiLCJyb3V0ZXIiLCJyb29tSWQiLCJzdGF0ZSIsImdhbWVEZXRhaWxzIiwicGxheWVyTnVtIiwiZGlyZWN0aW9uIiwic3RhcnRHYW1lSGFuZGxlciIsImVtaXQiLCJiYWNrVG9Ib21lSGFuZGxlciIsInB1c2giLCJ1cGRhdGVEaXJlY3Rpb24iLCJlIiwia2V5Iiwib24iLCJtZXNzYWdlIiwiY29uc29sZSIsImxvZyIsImdhbWVSb29tIiwic2NvcmVzIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsInBsYXllck1vdmVJbnRlcnZhbCIsInNldEludGVydmFsIiwiY2xlYXJJbnRlcnZhbCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJkaXYiLCJjbGFzc05hbWUiLCJwIiwic3BhbiIsImJ1dHRvbiIsIm9uQ2xpY2siLCJjYW52YXMiLCJpZCIsIndpZHRoIiwiZmllbGRXaWR0aCIsImhlaWdodCIsImZpZWxkSGVpZ2h0IiwiZXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/[room].js\n");

/***/ })

});