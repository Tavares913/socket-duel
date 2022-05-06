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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_Room_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/Room.module.css */ \"./styles/Room.module.css\");\n/* harmony import */ var _styles_Room_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_Room_module_css__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _utils_socketConnect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/socketConnect */ \"./utils/socketConnect.js\");\n/* harmony import */ var _utils_socketConnect__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_utils_socketConnect__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _utils_updateScreen__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/updateScreen */ \"./utils/updateScreen.js\");\n/* harmony import */ var _utils_drawingDetails__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/drawingDetails */ \"./utils/drawingDetails.js\");\n/* harmony import */ var _utils_settings__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/settings */ \"./utils/settings.js\");\n/* harmony import */ var _utils_settings__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_utils_settings__WEBPACK_IMPORTED_MODULE_7__);\nvar _this = undefined;\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar Room = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), gameInProgress = ref[0], setGameInProgress = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), roundInProgress = ref1[0], setRoundInProgress = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), gameStartError = ref2[0], setGameStartError = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), winner = ref3[0], setWinner = ref3[1];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), P1Score = ref4[0], setP1Score = ref4[1];\n    var ref5 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), P2Score = ref5[0], setP2Score = ref5[1];\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    var roomId = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)(function(state) {\n        return state.gameDetails.roomId;\n    });\n    var playerNum1 = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)(function(state) {\n        return state.gameDetails.playerNum;\n    });\n    var direction = null;\n    var startGameHandler = function() {\n        _utils_socketConnect__WEBPACK_IMPORTED_MODULE_3___default().emit(\"start-round\", roomId);\n    };\n    var backToHomeHandler = function() {\n        _utils_drawingDetails__WEBPACK_IMPORTED_MODULE_6__[\"default\"] = null;\n        router.push(\"/\");\n    };\n    var updateDirection = function(e) {\n        if (e.key == \"ArrowUp\") {\n            direction = \"up\";\n        } else if (e.key == \"ArrowDown\") {\n            direction = \"down\";\n        } else if (e.key == \"ArrowLeft\") {\n            direction = \"left\";\n        } else if (e.key == \"ArrowRight\") {\n            direction = \"right\";\n        } else if (e.key == \" \") {\n            _utils_socketConnect__WEBPACK_IMPORTED_MODULE_3___default().emit(\"shot\", {\n                roomId: roomId,\n                playerNum: playerNum1,\n                direction: direction\n            });\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        _utils_socketConnect__WEBPACK_IMPORTED_MODULE_3___default().on(\"message\", function(message) {\n            console.log(message);\n        });\n        _utils_socketConnect__WEBPACK_IMPORTED_MODULE_3___default().on(\"round-started\", function() {\n            setGameInProgress(true);\n            setRoundInProgress(true);\n            setGameStartError(false);\n            (0,_utils_updateScreen__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n        });\n        _utils_socketConnect__WEBPACK_IMPORTED_MODULE_3___default().on(\"game-start-error\", function() {\n            setGameStartError(true);\n        });\n        _utils_socketConnect__WEBPACK_IMPORTED_MODULE_3___default().on(\"tick\", function(gameRoom) {\n            _utils_drawingDetails__WEBPACK_IMPORTED_MODULE_6__[\"default\"] = gameRoom;\n        });\n        _utils_socketConnect__WEBPACK_IMPORTED_MODULE_3___default().on(\"update-scores\", function(scores) {\n            setP1Score(scores[0]);\n            setP2Score(scores[1]);\n        });\n        _utils_socketConnect__WEBPACK_IMPORTED_MODULE_3___default().on(\"end-game\", function() {\n            console.log(\"game-ended\");\n            setRoundInProgress(false);\n            setGameInProgress(false);\n            _utils_drawingDetails__WEBPACK_IMPORTED_MODULE_6__[\"default\"] = null;\n        });\n        _utils_socketConnect__WEBPACK_IMPORTED_MODULE_3___default().on(\"end-round\", function() {\n            console.log(\"round-ended\");\n            setRoundInProgress(false);\n            _utils_drawingDetails__WEBPACK_IMPORTED_MODULE_6__[\"default\"] = null;\n        });\n        _utils_socketConnect__WEBPACK_IMPORTED_MODULE_3___default().on(\"winner\", function(playerNum) {\n            setWinner(playerNum);\n        });\n        window.addEventListener(\"keydown\", updateDirection);\n        var playerMoveInterval = setInterval(function() {\n            _utils_socketConnect__WEBPACK_IMPORTED_MODULE_3___default().emit(\"player-move\", {\n                roomId: roomId,\n                playerNum: playerNum1,\n                direction: direction\n            });\n        }, 33);\n        return function() {\n            clearInterval(playerMoveInterval);\n            window.removeEventListener(\"keydown\", updateDirection);\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Room_module_css__WEBPACK_IMPORTED_MODULE_8___default().scores),\n                children: [\n                    gameInProgress && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: [\n                                \"Player 1: \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    children: P1Score\n                                }, void 0, false, {\n                                    fileName: \"/Users/tavares913/Desktop/CS/Projects/socket-duel/client/pages/[room].js\",\n                                    lineNumber: 111,\n                                    columnNumber: 25\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/tavares913/Desktop/CS/Projects/socket-duel/client/pages/[room].js\",\n                            lineNumber: 110,\n                            columnNumber: 13\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/tavares913/Desktop/CS/Projects/socket-duel/client/pages/[room].js\",\n                        lineNumber: 109,\n                        columnNumber: 11\n                    }, _this),\n                    gameInProgress && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"Player 2: \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: P2Score\n                            }, void 0, false, {\n                                fileName: \"/Users/tavares913/Desktop/CS/Projects/socket-duel/client/pages/[room].js\",\n                                lineNumber: 117,\n                                columnNumber: 23\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/tavares913/Desktop/CS/Projects/socket-duel/client/pages/[room].js\",\n                        lineNumber: 116,\n                        columnNumber: 11\n                    }, _this),\n                    !gameInProgress && winner && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"The Game Is Over\"\n                    }, void 0, false, {\n                        fileName: \"/Users/tavares913/Desktop/CS/Projects/socket-duel/client/pages/[room].js\",\n                        lineNumber: 120,\n                        columnNumber: 39\n                    }, _this),\n                    winner && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: [\n                                    \"Player \",\n                                    winner,\n                                    \" wins!\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/tavares913/Desktop/CS/Projects/socket-duel/client/pages/[room].js\",\n                                lineNumber: 123,\n                                columnNumber: 13\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: backToHomeHandler,\n                                children: \"Back to Home\"\n                            }, void 0, false, {\n                                fileName: \"/Users/tavares913/Desktop/CS/Projects/socket-duel/client/pages/[room].js\",\n                                lineNumber: 124,\n                                columnNumber: 13\n                            }, _this)\n                        ]\n                    }, void 0, true)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/tavares913/Desktop/CS/Projects/socket-duel/client/pages/[room].js\",\n                lineNumber: 107,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Room_module_css__WEBPACK_IMPORTED_MODULE_8___default()[\"room-id\"]),\n                children: !gameInProgress && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: [\n                        \"Room Id: \",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            children: roomId\n                        }, void 0, false, {\n                            fileName: \"/Users/tavares913/Desktop/CS/Projects/socket-duel/client/pages/[room].js\",\n                            lineNumber: 132,\n                            columnNumber: 22\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/tavares913/Desktop/CS/Projects/socket-duel/client/pages/[room].js\",\n                    lineNumber: 131,\n                    columnNumber: 11\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/tavares913/Desktop/CS/Projects/socket-duel/client/pages/[room].js\",\n                lineNumber: 129,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Room_module_css__WEBPACK_IMPORTED_MODULE_8___default()[\"game-area-container\"]),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"canvas\", {\n                    id: \"game-area\",\n                    className: (_styles_Room_module_css__WEBPACK_IMPORTED_MODULE_8___default()[\"game-area\"]),\n                    width: \"\".concat((_utils_settings__WEBPACK_IMPORTED_MODULE_7___default().fieldWidth), \"px\"),\n                    height: \"\".concat((_utils_settings__WEBPACK_IMPORTED_MODULE_7___default().fieldHeight), \"px\")\n                }, void 0, false, {\n                    fileName: \"/Users/tavares913/Desktop/CS/Projects/socket-duel/client/pages/[room].js\",\n                    lineNumber: 138,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/tavares913/Desktop/CS/Projects/socket-duel/client/pages/[room].js\",\n                lineNumber: 137,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Room_module_css__WEBPACK_IMPORTED_MODULE_8___default()[\"round-buttons\"]),\n                children: [\n                    !roundInProgress && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: startGameHandler,\n                        className: (_styles_Room_module_css__WEBPACK_IMPORTED_MODULE_8___default().button),\n                        children: \"Start Round\"\n                    }, void 0, false, {\n                        fileName: \"/Users/tavares913/Desktop/CS/Projects/socket-duel/client/pages/[room].js\",\n                        lineNumber: 148,\n                        columnNumber: 11\n                    }, _this),\n                    gameStartError && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: (_styles_Room_module_css__WEBPACK_IMPORTED_MODULE_8___default().error),\n                        children: \"The game can only start once there are 2 players\"\n                    }, void 0, false, {\n                        fileName: \"/Users/tavares913/Desktop/CS/Projects/socket-duel/client/pages/[room].js\",\n                        lineNumber: 153,\n                        columnNumber: 11\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/tavares913/Desktop/CS/Projects/socket-duel/client/pages/[room].js\",\n                lineNumber: 146,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true);\n};\n_s(Room, \"Mlt7XgypsJYrbMnb9A0uXKfQxVQ=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter,\n        react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector\n    ];\n});\n_c = Room;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Room);\nvar _c;\n$RefreshReg$(_c, \"Room\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9bcm9vbV0uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUE0QztBQUNKO0FBQ1E7QUFDSjtBQUNGO0FBQ087QUFDSTtBQUNaOztBQUV6QyxJQUFNUyxJQUFJLEdBQUcsV0FBTTs7SUFDakIsSUFBNENSLEdBQWUsR0FBZkEsK0NBQVEsQ0FBQyxLQUFLLENBQUMsRUFWN0QsY0FVdUIsR0FBdUJBLEdBQWUsR0FBdEMsRUFWdkIsaUJBVTBDLEdBQUlBLEdBQWUsR0FBbkI7SUFDeEMsSUFBOENBLElBQWUsR0FBZkEsK0NBQVEsQ0FBQyxLQUFLLENBQUMsRUFYL0QsZUFXd0IsR0FBd0JBLElBQWUsR0FBdkMsRUFYeEIsa0JBVzRDLEdBQUlBLElBQWUsR0FBbkI7SUFDMUMsSUFBNENBLElBQVUsR0FBVkEsK0NBQVEsRUFBRSxFQVp4RCxjQVl1QixHQUF1QkEsSUFBVSxHQUFqQyxFQVp2QixpQkFZMEMsR0FBSUEsSUFBVSxHQUFkO0lBQ3hDLElBQTRCQSxJQUFjLEdBQWRBLCtDQUFRLENBQUMsSUFBSSxDQUFDLEVBYjVDLE1BYWUsR0FBZUEsSUFBYyxHQUE3QixFQWJmLFNBYTBCLEdBQUlBLElBQWMsR0FBbEI7SUFDeEIsSUFBOEJBLElBQVcsR0FBWEEsK0NBQVEsQ0FBQyxDQUFDLENBQUMsRUFkM0MsT0FjZ0IsR0FBZ0JBLElBQVcsR0FBM0IsRUFkaEIsVUFjNEIsR0FBSUEsSUFBVyxHQUFmO0lBQzFCLElBQThCQSxJQUFXLEdBQVhBLCtDQUFRLENBQUMsQ0FBQyxDQUFDLEVBZjNDLE9BZWdCLEdBQWdCQSxJQUFXLEdBQTNCLEVBZmhCLFVBZTRCLEdBQUlBLElBQVcsR0FBZjtJQUUxQixJQUFNcUIsTUFBTSxHQUFHcEIsc0RBQVMsRUFBRTtJQUUxQixJQUFNcUIsTUFBTSxHQUFHbEIsd0RBQVcsQ0FBQyxTQUFDbUIsS0FBSztlQUFLQSxLQUFLLENBQUNDLFdBQVcsQ0FBQ0YsTUFBTTtLQUFBLENBQUM7SUFDL0QsSUFBTUcsVUFBUyxHQUFHckIsd0RBQVcsQ0FBQyxTQUFDbUIsS0FBSztlQUFLQSxLQUFLLENBQUNDLFdBQVcsQ0FBQ0MsU0FBUztLQUFBLENBQUM7SUFDckUsSUFBSUMsU0FBUyxHQUFHLElBQUk7SUFFcEIsSUFBTUMsZ0JBQWdCLEdBQUcsV0FBTTtRQUM3QnhCLGdFQUFXLENBQUMsYUFBYSxFQUFFbUIsTUFBTSxDQUFDLENBQUM7S0FDcEM7SUFFRCxJQUFNTyxpQkFBaUIsR0FBRyxXQUFNO1FBQzlCdkIsNkRBQWMsR0FBRyxJQUFJLENBQUM7UUFDdEJlLE1BQU0sQ0FBQ1MsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0tBQ2xCO0lBRUQsSUFBTUMsZUFBZSxHQUFHLFNBQUNDLENBQUMsRUFBSztRQUM3QixJQUFJQSxDQUFDLENBQUNDLEdBQUcsSUFBSSxTQUFTLEVBQUU7WUFDdEJQLFNBQVMsR0FBRyxJQUFJLENBQUM7U0FDbEIsTUFBTSxJQUFJTSxDQUFDLENBQUNDLEdBQUcsSUFBSSxXQUFXLEVBQUU7WUFDL0JQLFNBQVMsR0FBRyxNQUFNLENBQUM7U0FDcEIsTUFBTSxJQUFJTSxDQUFDLENBQUNDLEdBQUcsSUFBSSxXQUFXLEVBQUU7WUFDL0JQLFNBQVMsR0FBRyxNQUFNLENBQUM7U0FDcEIsTUFBTSxJQUFJTSxDQUFDLENBQUNDLEdBQUcsSUFBSSxZQUFZLEVBQUU7WUFDaENQLFNBQVMsR0FBRyxPQUFPLENBQUM7U0FDckIsTUFBTSxJQUFJTSxDQUFDLENBQUNDLEdBQUcsSUFBSSxHQUFHLEVBQUU7WUFDdkI5QixnRUFBVyxDQUFDLE1BQU0sRUFBRTtnQkFBRW1CLE1BQU0sRUFBTkEsTUFBTTtnQkFBRUcsU0FBUyxFQUFUQSxVQUFTO2dCQUFFQyxTQUFTLEVBQVRBLFNBQVM7YUFBRSxDQUFDLENBQUM7U0FDdkQ7S0FDRjtJQUVEM0IsZ0RBQVMsQ0FBQyxXQUFNO1FBQ2RJLDhEQUFTLENBQUMsU0FBUyxFQUFFLFNBQUNnQyxPQUFPLEVBQUs7WUFDaENDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixPQUFPLENBQUMsQ0FBQztTQUN0QixDQUFDLENBQUM7UUFFSGhDLDhEQUFTLENBQUMsZUFBZSxFQUFFLFdBQU07WUFDL0JPLGlCQUFpQixDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3hCRSxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN6QkUsaUJBQWlCLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDekJULCtEQUFZLEVBQUUsQ0FBQztTQUNoQixDQUFDLENBQUM7UUFFSEYsOERBQVMsQ0FBQyxrQkFBa0IsRUFBRSxXQUFNO1lBQ2xDVyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUN6QixDQUFDLENBQUM7UUFFSFgsOERBQVMsQ0FBQyxNQUFNLEVBQUUsU0FBQ21DLFFBQVEsRUFBSztZQUM5QmhDLDZEQUFjLEdBQUdnQyxRQUFRLENBQUM7U0FDM0IsQ0FBQyxDQUFDO1FBRUhuQyw4REFBUyxDQUFDLGVBQWUsRUFBRSxTQUFDb0MsTUFBTSxFQUFLO1lBQ3JDckIsVUFBVSxDQUFDcUIsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDdEJuQixVQUFVLENBQUNtQixNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUN2QixDQUFDLENBQUM7UUFFSHBDLDhEQUFTLENBQUMsVUFBVSxFQUFFLFdBQU07WUFDMUJpQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUMxQnpCLGtCQUFrQixDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzFCRixpQkFBaUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUN6QkosNkRBQWMsR0FBRyxJQUFJLENBQUM7U0FDdkIsQ0FBQyxDQUFDO1FBRUhILDhEQUFTLENBQUMsV0FBVyxFQUFFLFdBQU07WUFDM0JpQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUMzQnpCLGtCQUFrQixDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzFCTiw2REFBYyxHQUFHLElBQUksQ0FBQztTQUN2QixDQUFDLENBQUM7UUFFSEgsOERBQVMsQ0FBQyxRQUFRLEVBQUUsU0FBQ3NCLFNBQVMsRUFBSztZQUNqQ1QsU0FBUyxDQUFDUyxTQUFTLENBQUMsQ0FBQztTQUN0QixDQUFDLENBQUM7UUFFSGUsTUFBTSxDQUFDQyxnQkFBZ0IsQ0FBQyxTQUFTLEVBQUVWLGVBQWUsQ0FBQyxDQUFDO1FBRXBELElBQU1XLGtCQUFrQixHQUFHQyxXQUFXLENBQUMsV0FBTTtZQUMzQ3hDLGdFQUFXLENBQUMsYUFBYSxFQUFFO2dCQUN6Qm1CLE1BQU0sRUFBTkEsTUFBTTtnQkFDTkcsU0FBUyxFQUFUQSxVQUFTO2dCQUNUQyxTQUFTLEVBQVRBLFNBQVM7YUFDVixDQUFDLENBQUM7U0FDSixFQUFFLEVBQUUsQ0FBQztRQUVOLE9BQU8sV0FBTTtZQUNYa0IsYUFBYSxDQUFDRixrQkFBa0IsQ0FBQyxDQUFDO1lBQ2xDRixNQUFNLENBQUNLLG1CQUFtQixDQUFDLFNBQVMsRUFBRWQsZUFBZSxDQUFDLENBQUM7U0FDeEQsQ0FBQztLQUNILEVBQUUsRUFBRSxDQUFDLENBQUM7SUFFUCxxQkFDRTs7MEJBQ0UsOERBQUNlLEtBQUc7Z0JBQUNDLFNBQVMsRUFBRTdDLHVFQUFjOztvQkFDM0JPLGNBQWMsa0JBQ2IsOERBQUNxQyxLQUFHO2tDQUNGLDRFQUFDRSxHQUFDOztnQ0FBQyxZQUNTOzhDQUFBLDhEQUFDQyxNQUFJOzhDQUFFaEMsT0FBTzs7Ozs7eUNBQVE7Ozs7OztpQ0FDOUI7Ozs7OzZCQUNBO29CQUVQUixjQUFjLGtCQUNiLDhEQUFDdUMsR0FBQzs7NEJBQUMsWUFDUzswQ0FBQSw4REFBQ0MsTUFBSTswQ0FBRTlCLE9BQU87Ozs7O3FDQUFROzs7Ozs7NkJBQzlCO29CQUVMLENBQUNWLGNBQWMsSUFBSU0sTUFBTSxrQkFBSSw4REFBQ2lDLEdBQUM7a0NBQUMsa0JBQWdCOzs7Ozs2QkFBSTtvQkFDcERqQyxNQUFNLGtCQUNMOzswQ0FDRSw4REFBQ2lDLEdBQUM7O29DQUFDLFNBQU87b0NBQUNqQyxNQUFNO29DQUFDLFFBQU07Ozs7OztxQ0FBSTswQ0FDNUIsOERBQUNtQyxRQUFNO2dDQUFDQyxPQUFPLEVBQUV0QixpQkFBaUI7MENBQUUsY0FBWTs7Ozs7cUNBQVM7O29DQUN4RDs7Ozs7O3FCQUVEOzBCQUVOLDhEQUFDaUIsS0FBRztnQkFBQ0MsU0FBUyxFQUFFN0MsMkVBQWtCOzBCQUMvQixDQUFDTyxjQUFjLGtCQUNkLDhEQUFDdUMsR0FBQzs7d0JBQUMsV0FDUTtzQ0FBQSw4REFBQ0MsTUFBSTtzQ0FBRTNCLE1BQU07Ozs7O2lDQUFROzs7Ozs7eUJBQzVCOzs7OztxQkFFRjswQkFFTiw4REFBQ3dCLEtBQUc7Z0JBQUNDLFNBQVMsRUFBRTdDLHVGQUE4QjswQkFDNUMsNEVBQUNrRCxRQUFNO29CQUNMQyxFQUFFLEVBQUMsV0FBVztvQkFDZE4sU0FBUyxFQUFFN0MsNkVBQW9CO29CQUMvQm9ELEtBQUssRUFBRSxFQUFDLENBQXNCLE1BQUUsQ0FBdEIvQyxtRUFBbUIsRUFBQyxJQUFFLENBQUM7b0JBQ2pDaUQsTUFBTSxFQUFFLEVBQUMsQ0FBdUIsTUFBRSxDQUF2QmpELG9FQUFvQixFQUFDLElBQUUsQ0FBQzs7Ozs7eUJBQzNCOzs7OztxQkFDTjswQkFFTiw4REFBQ3VDLEtBQUc7Z0JBQUNDLFNBQVMsRUFBRTdDLGlGQUF3Qjs7b0JBQ3JDLENBQUNTLGVBQWUsa0JBQ2YsOERBQUN1QyxRQUFNO3dCQUFDQyxPQUFPLEVBQUV4QixnQkFBZ0I7d0JBQUVvQixTQUFTLEVBQUU3Qyx1RUFBYztrQ0FBRSxhQUU5RDs7Ozs7NkJBQVM7b0JBRVZXLGNBQWMsa0JBQ2IsOERBQUNtQyxHQUFDO3dCQUFDRCxTQUFTLEVBQUU3QyxzRUFBYTtrQ0FBRSxrREFFN0I7Ozs7OzZCQUFJOzs7Ozs7cUJBRUY7O29CQUNMLENBQ0g7Q0FDSDtHQXRKS00sSUFBSTs7UUFRT1Asa0RBQVM7UUFFVEcsb0RBQVc7UUFDUkEsb0RBQVc7OztBQVh6QkksS0FBQUEsSUFBSTtBQXdKViwrREFBZUEsSUFBSSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL1tyb29tXS5qcz9jYjUzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IGNsYXNzZXMgZnJvbSBcIi4uL3N0eWxlcy9Sb29tLm1vZHVsZS5jc3NcIjtcbmltcG9ydCBzb2NrZXQgZnJvbSBcIi4uL3V0aWxzL3NvY2tldENvbm5lY3RcIjtcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgdXBkYXRlU2NyZWVuIGZyb20gXCIuLi91dGlscy91cGRhdGVTY3JlZW5cIjtcbmltcG9ydCBkcmF3aW5nRGV0YWlscyBmcm9tIFwiLi4vdXRpbHMvZHJhd2luZ0RldGFpbHNcIjtcbmltcG9ydCBzZXR0aW5ncyBmcm9tIFwiLi4vdXRpbHMvc2V0dGluZ3NcIjtcblxuY29uc3QgUm9vbSA9ICgpID0+IHtcbiAgY29uc3QgW2dhbWVJblByb2dyZXNzLCBzZXRHYW1lSW5Qcm9ncmVzc10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtyb3VuZEluUHJvZ3Jlc3MsIHNldFJvdW5kSW5Qcm9ncmVzc10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtnYW1lU3RhcnRFcnJvciwgc2V0R2FtZVN0YXJ0RXJyb3JdID0gdXNlU3RhdGUoKTtcbiAgY29uc3QgW3dpbm5lciwgc2V0V2lubmVyXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbUDFTY29yZSwgc2V0UDFTY29yZV0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW1AyU2NvcmUsIHNldFAyU2NvcmVdID0gdXNlU3RhdGUoMCk7XG5cbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgY29uc3Qgcm9vbUlkID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5nYW1lRGV0YWlscy5yb29tSWQpO1xuICBjb25zdCBwbGF5ZXJOdW0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmdhbWVEZXRhaWxzLnBsYXllck51bSk7XG4gIGxldCBkaXJlY3Rpb24gPSBudWxsO1xuXG4gIGNvbnN0IHN0YXJ0R2FtZUhhbmRsZXIgPSAoKSA9PiB7XG4gICAgc29ja2V0LmVtaXQoXCJzdGFydC1yb3VuZFwiLCByb29tSWQpO1xuICB9O1xuXG4gIGNvbnN0IGJhY2tUb0hvbWVIYW5kbGVyID0gKCkgPT4ge1xuICAgIGRyYXdpbmdEZXRhaWxzID0gbnVsbDtcbiAgICByb3V0ZXIucHVzaChcIi9cIik7XG4gIH07XG5cbiAgY29uc3QgdXBkYXRlRGlyZWN0aW9uID0gKGUpID0+IHtcbiAgICBpZiAoZS5rZXkgPT0gXCJBcnJvd1VwXCIpIHtcbiAgICAgIGRpcmVjdGlvbiA9IFwidXBcIjtcbiAgICB9IGVsc2UgaWYgKGUua2V5ID09IFwiQXJyb3dEb3duXCIpIHtcbiAgICAgIGRpcmVjdGlvbiA9IFwiZG93blwiO1xuICAgIH0gZWxzZSBpZiAoZS5rZXkgPT0gXCJBcnJvd0xlZnRcIikge1xuICAgICAgZGlyZWN0aW9uID0gXCJsZWZ0XCI7XG4gICAgfSBlbHNlIGlmIChlLmtleSA9PSBcIkFycm93UmlnaHRcIikge1xuICAgICAgZGlyZWN0aW9uID0gXCJyaWdodFwiO1xuICAgIH0gZWxzZSBpZiAoZS5rZXkgPT0gXCIgXCIpIHtcbiAgICAgIHNvY2tldC5lbWl0KFwic2hvdFwiLCB7IHJvb21JZCwgcGxheWVyTnVtLCBkaXJlY3Rpb24gfSk7XG4gICAgfVxuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc29ja2V0Lm9uKFwibWVzc2FnZVwiLCAobWVzc2FnZSkgPT4ge1xuICAgICAgY29uc29sZS5sb2cobWVzc2FnZSk7XG4gICAgfSk7XG5cbiAgICBzb2NrZXQub24oXCJyb3VuZC1zdGFydGVkXCIsICgpID0+IHtcbiAgICAgIHNldEdhbWVJblByb2dyZXNzKHRydWUpO1xuICAgICAgc2V0Um91bmRJblByb2dyZXNzKHRydWUpO1xuICAgICAgc2V0R2FtZVN0YXJ0RXJyb3IoZmFsc2UpO1xuICAgICAgdXBkYXRlU2NyZWVuKCk7XG4gICAgfSk7XG5cbiAgICBzb2NrZXQub24oXCJnYW1lLXN0YXJ0LWVycm9yXCIsICgpID0+IHtcbiAgICAgIHNldEdhbWVTdGFydEVycm9yKHRydWUpO1xuICAgIH0pO1xuXG4gICAgc29ja2V0Lm9uKFwidGlja1wiLCAoZ2FtZVJvb20pID0+IHtcbiAgICAgIGRyYXdpbmdEZXRhaWxzID0gZ2FtZVJvb207XG4gICAgfSk7XG5cbiAgICBzb2NrZXQub24oXCJ1cGRhdGUtc2NvcmVzXCIsIChzY29yZXMpID0+IHtcbiAgICAgIHNldFAxU2NvcmUoc2NvcmVzWzBdKTtcbiAgICAgIHNldFAyU2NvcmUoc2NvcmVzWzFdKTtcbiAgICB9KTtcblxuICAgIHNvY2tldC5vbihcImVuZC1nYW1lXCIsICgpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKFwiZ2FtZS1lbmRlZFwiKTtcbiAgICAgIHNldFJvdW5kSW5Qcm9ncmVzcyhmYWxzZSk7XG4gICAgICBzZXRHYW1lSW5Qcm9ncmVzcyhmYWxzZSk7XG4gICAgICBkcmF3aW5nRGV0YWlscyA9IG51bGw7XG4gICAgfSk7XG5cbiAgICBzb2NrZXQub24oXCJlbmQtcm91bmRcIiwgKCkgPT4ge1xuICAgICAgY29uc29sZS5sb2coXCJyb3VuZC1lbmRlZFwiKTtcbiAgICAgIHNldFJvdW5kSW5Qcm9ncmVzcyhmYWxzZSk7XG4gICAgICBkcmF3aW5nRGV0YWlscyA9IG51bGw7XG4gICAgfSk7XG5cbiAgICBzb2NrZXQub24oXCJ3aW5uZXJcIiwgKHBsYXllck51bSkgPT4ge1xuICAgICAgc2V0V2lubmVyKHBsYXllck51bSk7XG4gICAgfSk7XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgdXBkYXRlRGlyZWN0aW9uKTtcblxuICAgIGNvbnN0IHBsYXllck1vdmVJbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIHNvY2tldC5lbWl0KFwicGxheWVyLW1vdmVcIiwge1xuICAgICAgICByb29tSWQsXG4gICAgICAgIHBsYXllck51bSxcbiAgICAgICAgZGlyZWN0aW9uLFxuICAgICAgfSk7XG4gICAgfSwgMzMpO1xuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGNsZWFySW50ZXJ2YWwocGxheWVyTW92ZUludGVydmFsKTtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCB1cGRhdGVEaXJlY3Rpb24pO1xuICAgIH07XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5zY29yZXN9PlxuICAgICAgICB7Z2FtZUluUHJvZ3Jlc3MgJiYgKFxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgUGxheWVyIDE6IDxzcGFuPntQMVNjb3JlfTwvc3Bhbj5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgICAge2dhbWVJblByb2dyZXNzICYmIChcbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIFBsYXllciAyOiA8c3Bhbj57UDJTY29yZX08L3NwYW4+XG4gICAgICAgICAgPC9wPlxuICAgICAgICApfVxuICAgICAgICB7IWdhbWVJblByb2dyZXNzICYmIHdpbm5lciAmJiA8cD5UaGUgR2FtZSBJcyBPdmVyPC9wPn1cbiAgICAgICAge3dpbm5lciAmJiAoXG4gICAgICAgICAgPD5cbiAgICAgICAgICAgIDxwPlBsYXllciB7d2lubmVyfSB3aW5zITwvcD5cbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17YmFja1RvSG9tZUhhbmRsZXJ9PkJhY2sgdG8gSG9tZTwvYnV0dG9uPlxuICAgICAgICAgIDwvPlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzW1wicm9vbS1pZFwiXX0+XG4gICAgICAgIHshZ2FtZUluUHJvZ3Jlc3MgJiYgKFxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAgUm9vbSBJZDogPHNwYW4+e3Jvb21JZH08L3NwYW4+XG4gICAgICAgICAgPC9wPlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzW1wiZ2FtZS1hcmVhLWNvbnRhaW5lclwiXX0+XG4gICAgICAgIDxjYW52YXNcbiAgICAgICAgICBpZD1cImdhbWUtYXJlYVwiXG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzW1wiZ2FtZS1hcmVhXCJdfVxuICAgICAgICAgIHdpZHRoPXtgJHtzZXR0aW5ncy5maWVsZFdpZHRofXB4YH1cbiAgICAgICAgICBoZWlnaHQ9e2Ake3NldHRpbmdzLmZpZWxkSGVpZ2h0fXB4YH1cbiAgICAgICAgPjwvY2FudmFzPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzW1wicm91bmQtYnV0dG9uc1wiXX0+XG4gICAgICAgIHshcm91bmRJblByb2dyZXNzICYmIChcbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3N0YXJ0R2FtZUhhbmRsZXJ9IGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b259PlxuICAgICAgICAgICAgU3RhcnQgUm91bmRcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgKX1cbiAgICAgICAge2dhbWVTdGFydEVycm9yICYmIChcbiAgICAgICAgICA8cCBjbGFzc05hbWU9e2NsYXNzZXMuZXJyb3J9PlxuICAgICAgICAgICAgVGhlIGdhbWUgY2FuIG9ubHkgc3RhcnQgb25jZSB0aGVyZSBhcmUgMiBwbGF5ZXJzXG4gICAgICAgICAgPC9wPlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBSb29tO1xuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlUm91dGVyIiwiY2xhc3NlcyIsInNvY2tldCIsInVzZVNlbGVjdG9yIiwidXBkYXRlU2NyZWVuIiwiZHJhd2luZ0RldGFpbHMiLCJzZXR0aW5ncyIsIlJvb20iLCJnYW1lSW5Qcm9ncmVzcyIsInNldEdhbWVJblByb2dyZXNzIiwicm91bmRJblByb2dyZXNzIiwic2V0Um91bmRJblByb2dyZXNzIiwiZ2FtZVN0YXJ0RXJyb3IiLCJzZXRHYW1lU3RhcnRFcnJvciIsIndpbm5lciIsInNldFdpbm5lciIsIlAxU2NvcmUiLCJzZXRQMVNjb3JlIiwiUDJTY29yZSIsInNldFAyU2NvcmUiLCJyb3V0ZXIiLCJyb29tSWQiLCJzdGF0ZSIsImdhbWVEZXRhaWxzIiwicGxheWVyTnVtIiwiZGlyZWN0aW9uIiwic3RhcnRHYW1lSGFuZGxlciIsImVtaXQiLCJiYWNrVG9Ib21lSGFuZGxlciIsInB1c2giLCJ1cGRhdGVEaXJlY3Rpb24iLCJlIiwia2V5Iiwib24iLCJtZXNzYWdlIiwiY29uc29sZSIsImxvZyIsImdhbWVSb29tIiwic2NvcmVzIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsInBsYXllck1vdmVJbnRlcnZhbCIsInNldEludGVydmFsIiwiY2xlYXJJbnRlcnZhbCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJkaXYiLCJjbGFzc05hbWUiLCJwIiwic3BhbiIsImJ1dHRvbiIsIm9uQ2xpY2siLCJjYW52YXMiLCJpZCIsIndpZHRoIiwiZmllbGRXaWR0aCIsImhlaWdodCIsImZpZWxkSGVpZ2h0IiwiZXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/[room].js\n");

/***/ })

});