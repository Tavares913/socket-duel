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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _utils_classes_GameRoom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/classes/GameRoom */ \"./utils/classes/GameRoom.js\");\n/* harmony import */ var _utils_classes_GameRoom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_utils_classes_GameRoom__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _utils_socketConnect__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/socketConnect */ \"./utils/socketConnect.js\");\n/* harmony import */ var _utils_socketConnect__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_utils_socketConnect__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _utils_updateScreen__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/updateScreen */ \"./utils/updateScreen.js\");\n/* harmony import */ var _utils_drawingDetails__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/drawingDetails */ \"./utils/drawingDetails.js\");\n/* harmony import */ var _utils_settings__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/settings */ \"./utils/settings.js\");\n/* harmony import */ var _utils_settings__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_utils_settings__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _styles_Room_module_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../styles/Room.module.css */ \"./styles/Room.module.css\");\n/* harmony import */ var _styles_Room_module_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_styles_Room_module_css__WEBPACK_IMPORTED_MODULE_10__);\nvar _this = undefined;\n\n\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar Room = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), gameInProgress = ref[0], setGameInProgress = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), roundInProgress = ref1[0], setRoundInProgress = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), gameStartError = ref2[0], setGameStartError = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), winner = ref3[0], setWinner = ref3[1];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), P1Score = ref4[0], setP1Score = ref4[1];\n    var ref5 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), P2Score = ref5[0], setP2Score = ref5[1];\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    var roomId = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector)(function(state) {\n        return state.gameDetails.roomId;\n    });\n    var playerNum1 = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector)(function(state) {\n        return state.gameDetails.playerNum;\n    });\n    var direction = null;\n    var startGameHandler = function() {\n        _utils_socketConnect__WEBPACK_IMPORTED_MODULE_5___default().emit(\"start-round\", roomId);\n    };\n    var backToHomeHandler = function() {\n        _utils_drawingDetails__WEBPACK_IMPORTED_MODULE_8__[\"default\"] = null;\n        router.push(\"/\");\n    };\n    var updateDirection = function(e) {\n        if (e.key == \"ArrowUp\") {\n            direction = \"up\";\n        } else if (e.key == \"ArrowDown\") {\n            direction = \"down\";\n        } else if (e.key == \"ArrowLeft\") {\n            direction = \"left\";\n        } else if (e.key == \"ArrowRight\") {\n            direction = \"right\";\n        } else if (e.key == \" \") {\n            _utils_socketConnect__WEBPACK_IMPORTED_MODULE_5___default().emit(\"shot\", {\n                roomId: roomId,\n                playerNum: playerNum1,\n                direction: direction\n            });\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        _utils_socketConnect__WEBPACK_IMPORTED_MODULE_5___default().on(\"round-started\", function() {\n            setGameInProgress(true);\n            setRoundInProgress(true);\n            setGameStartError(false);\n            (0,_utils_updateScreen__WEBPACK_IMPORTED_MODULE_7__[\"default\"])();\n        });\n        _utils_socketConnect__WEBPACK_IMPORTED_MODULE_5___default().on(\"game-start-error\", function() {\n            setGameStartError(true);\n        });\n        _utils_socketConnect__WEBPACK_IMPORTED_MODULE_5___default().on(\"tick\", function(gameRoom) {\n            _utils_drawingDetails__WEBPACK_IMPORTED_MODULE_8__[\"default\"] = gameRoom;\n        });\n        _utils_socketConnect__WEBPACK_IMPORTED_MODULE_5___default().on(\"update-scores\", function(scores) {\n            setP1Score(scores[0]);\n            setP2Score(scores[1]);\n        });\n        _utils_socketConnect__WEBPACK_IMPORTED_MODULE_5___default().on(\"end-game\", function() {\n            console.log(\"game-ended\");\n            setRoundInProgress(false);\n            setGameInProgress(false);\n            _utils_drawingDetails__WEBPACK_IMPORTED_MODULE_8__[\"default\"] = null;\n        });\n        _utils_socketConnect__WEBPACK_IMPORTED_MODULE_5___default().on(\"end-round\", function() {\n            console.log(\"round-ended\");\n            setRoundInProgress(false);\n            _utils_drawingDetails__WEBPACK_IMPORTED_MODULE_8__[\"default\"] = null;\n        });\n        _utils_socketConnect__WEBPACK_IMPORTED_MODULE_5___default().on(\"winner\", function(playerNum) {\n            setWinner(playerNum);\n        });\n        window.addEventListener(\"keydown\", updateDirection);\n        var playerMoveInterval = setInterval(function() {\n            _utils_socketConnect__WEBPACK_IMPORTED_MODULE_5___default().emit(\"player-move\", {\n                roomId: roomId,\n                playerNum: playerNum1,\n                direction: direction\n            });\n        }, 33);\n        return function() {\n            clearInterval(playerMoveInterval);\n            window.removeEventListener(\"keydown\", updateDirection);\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Game Room\"\n                    }, void 0, false, {\n                        fileName: \"/Users/tavares913/Desktop/CS/Projects/socket-duel/client/pages/[room].js\",\n                        lineNumber: 108,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        description: \"The game room that players fight in while playing socket duel\"\n                    }, void 0, false, {\n                        fileName: \"/Users/tavares913/Desktop/CS/Projects/socket-duel/client/pages/[room].js\",\n                        lineNumber: 109,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/tavares913/Desktop/CS/Projects/socket-duel/client/pages/[room].js\",\n                lineNumber: 107,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Room_module_css__WEBPACK_IMPORTED_MODULE_10___default().scores),\n                children: [\n                    gameInProgress && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Room_module_css__WEBPACK_IMPORTED_MODULE_10___default().score),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"Player 1:\"\n                            }, void 0, false, {\n                                fileName: \"/Users/tavares913/Desktop/CS/Projects/socket-duel/client/pages/[room].js\",\n                                lineNumber: 114,\n                                columnNumber: 13\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: P1Score\n                            }, void 0, false, {\n                                fileName: \"/Users/tavares913/Desktop/CS/Projects/socket-duel/client/pages/[room].js\",\n                                lineNumber: 115,\n                                columnNumber: 13\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/tavares913/Desktop/CS/Projects/socket-duel/client/pages/[room].js\",\n                        lineNumber: 113,\n                        columnNumber: 11\n                    }, _this),\n                    gameInProgress && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Room_module_css__WEBPACK_IMPORTED_MODULE_10___default().score),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"Player 2:\"\n                            }, void 0, false, {\n                                fileName: \"/Users/tavares913/Desktop/CS/Projects/socket-duel/client/pages/[room].js\",\n                                lineNumber: 120,\n                                columnNumber: 13\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: P2Score\n                            }, void 0, false, {\n                                fileName: \"/Users/tavares913/Desktop/CS/Projects/socket-duel/client/pages/[room].js\",\n                                lineNumber: 121,\n                                columnNumber: 13\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/tavares913/Desktop/CS/Projects/socket-duel/client/pages/[room].js\",\n                        lineNumber: 119,\n                        columnNumber: 11\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/tavares913/Desktop/CS/Projects/socket-duel/client/pages/[room].js\",\n                lineNumber: 111,\n                columnNumber: 7\n            }, _this),\n            winner && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Room_module_css__WEBPACK_IMPORTED_MODULE_10___default().winner),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"Player \",\n                            winner,\n                            \" wins!\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/tavares913/Desktop/CS/Projects/socket-duel/client/pages/[room].js\",\n                        lineNumber: 127,\n                        columnNumber: 11\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: backToHomeHandler,\n                        className: (_styles_Room_module_css__WEBPACK_IMPORTED_MODULE_10___default().button),\n                        children: \"Back to Home\"\n                    }, void 0, false, {\n                        fileName: \"/Users/tavares913/Desktop/CS/Projects/socket-duel/client/pages/[room].js\",\n                        lineNumber: 128,\n                        columnNumber: 11\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/tavares913/Desktop/CS/Projects/socket-duel/client/pages/[room].js\",\n                lineNumber: 126,\n                columnNumber: 9\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Room_module_css__WEBPACK_IMPORTED_MODULE_10___default()[\"room-id\"]),\n                children: !gameInProgress && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: [\n                        \"Room Id: \",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            children: roomId\n                        }, void 0, false, {\n                            fileName: \"/Users/tavares913/Desktop/CS/Projects/socket-duel/client/pages/[room].js\",\n                            lineNumber: 137,\n                            columnNumber: 22\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/tavares913/Desktop/CS/Projects/socket-duel/client/pages/[room].js\",\n                    lineNumber: 136,\n                    columnNumber: 11\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/tavares913/Desktop/CS/Projects/socket-duel/client/pages/[room].js\",\n                lineNumber: 134,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Room_module_css__WEBPACK_IMPORTED_MODULE_10___default()[\"game-area-container\"]),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"canvas\", {\n                    id: \"game-area\",\n                    className: (_styles_Room_module_css__WEBPACK_IMPORTED_MODULE_10___default()[\"game-area\"]),\n                    width: \"\".concat((_utils_settings__WEBPACK_IMPORTED_MODULE_9___default().fieldWidth), \"px\"),\n                    height: \"\".concat((_utils_settings__WEBPACK_IMPORTED_MODULE_9___default().fieldHeight), \"px\")\n                }, void 0, false, {\n                    fileName: \"/Users/tavares913/Desktop/CS/Projects/socket-duel/client/pages/[room].js\",\n                    lineNumber: 143,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/tavares913/Desktop/CS/Projects/socket-duel/client/pages/[room].js\",\n                lineNumber: 142,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Room_module_css__WEBPACK_IMPORTED_MODULE_10___default()[\"round-buttons\"]),\n                children: [\n                    !roundInProgress && !winner && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: startGameHandler,\n                        className: (_styles_Room_module_css__WEBPACK_IMPORTED_MODULE_10___default().button),\n                        children: \"Start Round\"\n                    }, void 0, false, {\n                        fileName: \"/Users/tavares913/Desktop/CS/Projects/socket-duel/client/pages/[room].js\",\n                        lineNumber: 153,\n                        columnNumber: 11\n                    }, _this),\n                    gameStartError && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: (_styles_Room_module_css__WEBPACK_IMPORTED_MODULE_10___default().error),\n                        children: \"The game can only start once there are 2 players\"\n                    }, void 0, false, {\n                        fileName: \"/Users/tavares913/Desktop/CS/Projects/socket-duel/client/pages/[room].js\",\n                        lineNumber: 158,\n                        columnNumber: 11\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/tavares913/Desktop/CS/Projects/socket-duel/client/pages/[room].js\",\n                lineNumber: 151,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true);\n};\n_s(Room, \"Mlt7XgypsJYrbMnb9A0uXKfQxVQ=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter,\n        react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector\n    ];\n});\n_c = Room;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Room);\nvar _c;\n$RefreshReg$(_c, \"Room\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9bcm9vbV0uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFBNEM7QUFDSjtBQUNYO0FBRW9CO0FBQ0w7QUFDRjtBQUNPO0FBQ0k7QUFDWjtBQUVPOztBQUVoRCxJQUFNVyxJQUFJLEdBQUcsV0FBTTs7SUFDakIsSUFBNENWLEdBQWUsR0FBZkEsK0NBQVEsQ0FBQyxLQUFLLENBQUMsRUFkN0QsY0FjdUIsR0FBdUJBLEdBQWUsR0FBdEMsRUFkdkIsaUJBYzBDLEdBQUlBLEdBQWUsR0FBbkI7SUFDeEMsSUFBOENBLElBQWUsR0FBZkEsK0NBQVEsQ0FBQyxLQUFLLENBQUMsRUFmL0QsZUFld0IsR0FBd0JBLElBQWUsR0FBdkMsRUFmeEIsa0JBZTRDLEdBQUlBLElBQWUsR0FBbkI7SUFDMUMsSUFBNENBLElBQVUsR0FBVkEsK0NBQVEsRUFBRSxFQWhCeEQsY0FnQnVCLEdBQXVCQSxJQUFVLEdBQWpDLEVBaEJ2QixpQkFnQjBDLEdBQUlBLElBQVUsR0FBZDtJQUN4QyxJQUE0QkEsSUFBYyxHQUFkQSwrQ0FBUSxDQUFDLElBQUksQ0FBQyxFQWpCNUMsTUFpQmUsR0FBZUEsSUFBYyxHQUE3QixFQWpCZixTQWlCMEIsR0FBSUEsSUFBYyxHQUFsQjtJQUN4QixJQUE4QkEsSUFBVyxHQUFYQSwrQ0FBUSxDQUFDLENBQUMsQ0FBQyxFQWxCM0MsT0FrQmdCLEdBQWdCQSxJQUFXLEdBQTNCLEVBbEJoQixVQWtCNEIsR0FBSUEsSUFBVyxHQUFmO0lBQzFCLElBQThCQSxJQUFXLEdBQVhBLCtDQUFRLENBQUMsQ0FBQyxDQUFDLEVBbkIzQyxPQW1CZ0IsR0FBZ0JBLElBQVcsR0FBM0IsRUFuQmhCLFVBbUI0QixHQUFJQSxJQUFXLEdBQWY7SUFFMUIsSUFBTXVCLE1BQU0sR0FBR3RCLHNEQUFTLEVBQUU7SUFFMUIsSUFBTXVCLE1BQU0sR0FBR25CLHdEQUFXLENBQUMsU0FBQ29CLEtBQUs7ZUFBS0EsS0FBSyxDQUFDQyxXQUFXLENBQUNGLE1BQU07S0FBQSxDQUFDO0lBQy9ELElBQU1HLFVBQVMsR0FBR3RCLHdEQUFXLENBQUMsU0FBQ29CLEtBQUs7ZUFBS0EsS0FBSyxDQUFDQyxXQUFXLENBQUNDLFNBQVM7S0FBQSxDQUFDO0lBQ3JFLElBQUlDLFNBQVMsR0FBRyxJQUFJO0lBRXBCLElBQU1DLGdCQUFnQixHQUFHLFdBQU07UUFDN0J6QixnRUFBVyxDQUFDLGFBQWEsRUFBRW9CLE1BQU0sQ0FBQyxDQUFDO0tBQ3BDO0lBRUQsSUFBTU8saUJBQWlCLEdBQUcsV0FBTTtRQUM5QnhCLDZEQUFjLEdBQUcsSUFBSSxDQUFDO1FBQ3RCZ0IsTUFBTSxDQUFDUyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7S0FDbEI7SUFFRCxJQUFNQyxlQUFlLEdBQUcsU0FBQ0MsQ0FBQyxFQUFLO1FBQzdCLElBQUlBLENBQUMsQ0FBQ0MsR0FBRyxJQUFJLFNBQVMsRUFBRTtZQUN0QlAsU0FBUyxHQUFHLElBQUksQ0FBQztTQUNsQixNQUFNLElBQUlNLENBQUMsQ0FBQ0MsR0FBRyxJQUFJLFdBQVcsRUFBRTtZQUMvQlAsU0FBUyxHQUFHLE1BQU0sQ0FBQztTQUNwQixNQUFNLElBQUlNLENBQUMsQ0FBQ0MsR0FBRyxJQUFJLFdBQVcsRUFBRTtZQUMvQlAsU0FBUyxHQUFHLE1BQU0sQ0FBQztTQUNwQixNQUFNLElBQUlNLENBQUMsQ0FBQ0MsR0FBRyxJQUFJLFlBQVksRUFBRTtZQUNoQ1AsU0FBUyxHQUFHLE9BQU8sQ0FBQztTQUNyQixNQUFNLElBQUlNLENBQUMsQ0FBQ0MsR0FBRyxJQUFJLEdBQUcsRUFBRTtZQUN2Qi9CLGdFQUFXLENBQUMsTUFBTSxFQUFFO2dCQUFFb0IsTUFBTSxFQUFOQSxNQUFNO2dCQUFFRyxTQUFTLEVBQVRBLFVBQVM7Z0JBQUVDLFNBQVMsRUFBVEEsU0FBUzthQUFFLENBQUMsQ0FBQztTQUN2RDtLQUNGO0lBRUQ3QixnREFBUyxDQUFDLFdBQU07UUFDZEssOERBQVMsQ0FBQyxlQUFlLEVBQUUsV0FBTTtZQUMvQlEsaUJBQWlCLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDeEJFLGtCQUFrQixDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3pCRSxpQkFBaUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUN6QlYsK0RBQVksRUFBRSxDQUFDO1NBQ2hCLENBQUMsQ0FBQztRQUVIRiw4REFBUyxDQUFDLGtCQUFrQixFQUFFLFdBQU07WUFDbENZLGlCQUFpQixDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3pCLENBQUMsQ0FBQztRQUVIWiw4REFBUyxDQUFDLE1BQU0sRUFBRSxTQUFDaUMsUUFBUSxFQUFLO1lBQzlCOUIsNkRBQWMsR0FBRzhCLFFBQVEsQ0FBQztTQUMzQixDQUFDLENBQUM7UUFFSGpDLDhEQUFTLENBQUMsZUFBZSxFQUFFLFNBQUNrQyxNQUFNLEVBQUs7WUFDckNsQixVQUFVLENBQUNrQixNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN0QmhCLFVBQVUsQ0FBQ2dCLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3ZCLENBQUMsQ0FBQztRQUVIbEMsOERBQVMsQ0FBQyxVQUFVLEVBQUUsV0FBTTtZQUMxQm1DLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQzFCMUIsa0JBQWtCLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDMUJGLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3pCTCw2REFBYyxHQUFHLElBQUksQ0FBQztTQUN2QixDQUFDLENBQUM7UUFFSEgsOERBQVMsQ0FBQyxXQUFXLEVBQUUsV0FBTTtZQUMzQm1DLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBQzNCMUIsa0JBQWtCLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDMUJQLDZEQUFjLEdBQUcsSUFBSSxDQUFDO1NBQ3ZCLENBQUMsQ0FBQztRQUVISCw4REFBUyxDQUFDLFFBQVEsRUFBRSxTQUFDdUIsU0FBUyxFQUFLO1lBQ2pDVCxTQUFTLENBQUNTLFNBQVMsQ0FBQyxDQUFDO1NBQ3RCLENBQUMsQ0FBQztRQUVIYyxNQUFNLENBQUNDLGdCQUFnQixDQUFDLFNBQVMsRUFBRVQsZUFBZSxDQUFDLENBQUM7UUFFcEQsSUFBTVUsa0JBQWtCLEdBQUdDLFdBQVcsQ0FBQyxXQUFNO1lBQzNDeEMsZ0VBQVcsQ0FBQyxhQUFhLEVBQUU7Z0JBQ3pCb0IsTUFBTSxFQUFOQSxNQUFNO2dCQUNORyxTQUFTLEVBQVRBLFVBQVM7Z0JBQ1RDLFNBQVMsRUFBVEEsU0FBUzthQUNWLENBQUMsQ0FBQztTQUNKLEVBQUUsRUFBRSxDQUFDO1FBRU4sT0FBTyxXQUFNO1lBQ1hpQixhQUFhLENBQUNGLGtCQUFrQixDQUFDLENBQUM7WUFDbENGLE1BQU0sQ0FBQ0ssbUJBQW1CLENBQUMsU0FBUyxFQUFFYixlQUFlLENBQUMsQ0FBQztTQUN4RCxDQUFDO0tBQ0gsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUVQLHFCQUNFOzswQkFDRSw4REFBQy9CLGtEQUFJOztrQ0FDSCw4REFBQzZDLE9BQUs7a0NBQUMsV0FBUzs7Ozs7NkJBQVE7a0NBQ3hCLDhEQUFDQyxNQUFJO3dCQUFDQyxXQUFXLEVBQUMsK0RBQStEOzs7Ozs2QkFBRzs7Ozs7O3FCQUMvRTswQkFDUCw4REFBQ0MsS0FBRztnQkFBQ0MsU0FBUyxFQUFFMUMsd0VBQWM7O29CQUMzQkUsY0FBYyxrQkFDYiw4REFBQ3VDLEtBQUc7d0JBQUNDLFNBQVMsRUFBRTFDLHVFQUFhOzswQ0FDM0IsOERBQUM0QyxHQUFDOzBDQUFDLFdBQVM7Ozs7O3FDQUFJOzBDQUNoQiw4REFBQ0MsTUFBSTswQ0FBRW5DLE9BQU87Ozs7O3FDQUFROzs7Ozs7NkJBQ2xCO29CQUVQUixjQUFjLGtCQUNiLDhEQUFDdUMsS0FBRzt3QkFBQ0MsU0FBUyxFQUFFMUMsdUVBQWE7OzBDQUMzQiw4REFBQzRDLEdBQUM7MENBQUMsV0FBUzs7Ozs7cUNBQUk7MENBQ2hCLDhEQUFDQyxNQUFJOzBDQUFFakMsT0FBTzs7Ozs7cUNBQVE7Ozs7Ozs2QkFDbEI7Ozs7OztxQkFFSjtZQUNMSixNQUFNLGtCQUNMLDhEQUFDaUMsS0FBRztnQkFBQ0MsU0FBUyxFQUFFMUMsd0VBQWM7O2tDQUM1Qiw4REFBQzRDLEdBQUM7OzRCQUFDLFNBQU87NEJBQUNwQyxNQUFNOzRCQUFDLFFBQU07Ozs7Ozs2QkFBSTtrQ0FDNUIsOERBQUNzQyxRQUFNO3dCQUFDQyxPQUFPLEVBQUV6QixpQkFBaUI7d0JBQUVvQixTQUFTLEVBQUUxQyx3RUFBYztrQ0FBRSxjQUUvRDs7Ozs7NkJBQVM7Ozs7OztxQkFDTDswQkFHUiw4REFBQ3lDLEtBQUc7Z0JBQUNDLFNBQVMsRUFBRTFDLDRFQUFrQjswQkFDL0IsQ0FBQ0UsY0FBYyxrQkFDZCw4REFBQzBDLEdBQUM7O3dCQUFDLFdBQ1E7c0NBQUEsOERBQUNDLE1BQUk7c0NBQUU5QixNQUFNOzs7OztpQ0FBUTs7Ozs7O3lCQUM1Qjs7Ozs7cUJBRUY7MEJBRU4sOERBQUMwQixLQUFHO2dCQUFDQyxTQUFTLEVBQUUxQyx3RkFBOEI7MEJBQzVDLDRFQUFDZ0QsUUFBTTtvQkFDTEMsRUFBRSxFQUFDLFdBQVc7b0JBQ2RQLFNBQVMsRUFBRTFDLDhFQUFvQjtvQkFDL0JrRCxLQUFLLEVBQUUsRUFBQyxDQUFzQixNQUFFLENBQXRCbkQsbUVBQW1CLEVBQUMsSUFBRSxDQUFDO29CQUNqQ3FELE1BQU0sRUFBRSxFQUFDLENBQXVCLE1BQUUsQ0FBdkJyRCxvRUFBb0IsRUFBQyxJQUFFLENBQUM7Ozs7O3lCQUMzQjs7Ozs7cUJBQ047MEJBRU4sOERBQUMwQyxLQUFHO2dCQUFDQyxTQUFTLEVBQUUxQyxrRkFBd0I7O29CQUNyQyxDQUFDSSxlQUFlLElBQUksQ0FBQ0ksTUFBTSxrQkFDMUIsOERBQUNzQyxRQUFNO3dCQUFDQyxPQUFPLEVBQUUzQixnQkFBZ0I7d0JBQUVzQixTQUFTLEVBQUUxQyx3RUFBYztrQ0FBRSxhQUU5RDs7Ozs7NkJBQVM7b0JBRVZNLGNBQWMsa0JBQ2IsOERBQUNzQyxHQUFDO3dCQUFDRixTQUFTLEVBQUUxQyx1RUFBYTtrQ0FBRSxrREFFN0I7Ozs7OzZCQUFJOzs7Ozs7cUJBRUY7O29CQUNMLENBQ0g7Q0FDSDtHQXZKS0MsSUFBSTs7UUFRT1Qsa0RBQVM7UUFFVEksb0RBQVc7UUFDUkEsb0RBQVc7OztBQVh6QkssS0FBQUEsSUFBSTtBQXlKViwrREFBZUEsSUFBSSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL1tyb29tXS5qcz9jYjUzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuXG5pbXBvcnQgR2FtZVJvb20gZnJvbSBcIi4uL3V0aWxzL2NsYXNzZXMvR2FtZVJvb21cIjtcbmltcG9ydCBzb2NrZXQgZnJvbSBcIi4uL3V0aWxzL3NvY2tldENvbm5lY3RcIjtcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgdXBkYXRlU2NyZWVuIGZyb20gXCIuLi91dGlscy91cGRhdGVTY3JlZW5cIjtcbmltcG9ydCBkcmF3aW5nRGV0YWlscyBmcm9tIFwiLi4vdXRpbHMvZHJhd2luZ0RldGFpbHNcIjtcbmltcG9ydCBzZXR0aW5ncyBmcm9tIFwiLi4vdXRpbHMvc2V0dGluZ3NcIjtcblxuaW1wb3J0IGNsYXNzZXMgZnJvbSBcIi4uL3N0eWxlcy9Sb29tLm1vZHVsZS5jc3NcIjtcblxuY29uc3QgUm9vbSA9ICgpID0+IHtcbiAgY29uc3QgW2dhbWVJblByb2dyZXNzLCBzZXRHYW1lSW5Qcm9ncmVzc10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtyb3VuZEluUHJvZ3Jlc3MsIHNldFJvdW5kSW5Qcm9ncmVzc10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtnYW1lU3RhcnRFcnJvciwgc2V0R2FtZVN0YXJ0RXJyb3JdID0gdXNlU3RhdGUoKTtcbiAgY29uc3QgW3dpbm5lciwgc2V0V2lubmVyXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbUDFTY29yZSwgc2V0UDFTY29yZV0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW1AyU2NvcmUsIHNldFAyU2NvcmVdID0gdXNlU3RhdGUoMCk7XG5cbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgY29uc3Qgcm9vbUlkID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5nYW1lRGV0YWlscy5yb29tSWQpO1xuICBjb25zdCBwbGF5ZXJOdW0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmdhbWVEZXRhaWxzLnBsYXllck51bSk7XG4gIGxldCBkaXJlY3Rpb24gPSBudWxsO1xuXG4gIGNvbnN0IHN0YXJ0R2FtZUhhbmRsZXIgPSAoKSA9PiB7XG4gICAgc29ja2V0LmVtaXQoXCJzdGFydC1yb3VuZFwiLCByb29tSWQpO1xuICB9O1xuXG4gIGNvbnN0IGJhY2tUb0hvbWVIYW5kbGVyID0gKCkgPT4ge1xuICAgIGRyYXdpbmdEZXRhaWxzID0gbnVsbDtcbiAgICByb3V0ZXIucHVzaChcIi9cIik7XG4gIH07XG5cbiAgY29uc3QgdXBkYXRlRGlyZWN0aW9uID0gKGUpID0+IHtcbiAgICBpZiAoZS5rZXkgPT0gXCJBcnJvd1VwXCIpIHtcbiAgICAgIGRpcmVjdGlvbiA9IFwidXBcIjtcbiAgICB9IGVsc2UgaWYgKGUua2V5ID09IFwiQXJyb3dEb3duXCIpIHtcbiAgICAgIGRpcmVjdGlvbiA9IFwiZG93blwiO1xuICAgIH0gZWxzZSBpZiAoZS5rZXkgPT0gXCJBcnJvd0xlZnRcIikge1xuICAgICAgZGlyZWN0aW9uID0gXCJsZWZ0XCI7XG4gICAgfSBlbHNlIGlmIChlLmtleSA9PSBcIkFycm93UmlnaHRcIikge1xuICAgICAgZGlyZWN0aW9uID0gXCJyaWdodFwiO1xuICAgIH0gZWxzZSBpZiAoZS5rZXkgPT0gXCIgXCIpIHtcbiAgICAgIHNvY2tldC5lbWl0KFwic2hvdFwiLCB7IHJvb21JZCwgcGxheWVyTnVtLCBkaXJlY3Rpb24gfSk7XG4gICAgfVxuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc29ja2V0Lm9uKFwicm91bmQtc3RhcnRlZFwiLCAoKSA9PiB7XG4gICAgICBzZXRHYW1lSW5Qcm9ncmVzcyh0cnVlKTtcbiAgICAgIHNldFJvdW5kSW5Qcm9ncmVzcyh0cnVlKTtcbiAgICAgIHNldEdhbWVTdGFydEVycm9yKGZhbHNlKTtcbiAgICAgIHVwZGF0ZVNjcmVlbigpO1xuICAgIH0pO1xuXG4gICAgc29ja2V0Lm9uKFwiZ2FtZS1zdGFydC1lcnJvclwiLCAoKSA9PiB7XG4gICAgICBzZXRHYW1lU3RhcnRFcnJvcih0cnVlKTtcbiAgICB9KTtcblxuICAgIHNvY2tldC5vbihcInRpY2tcIiwgKGdhbWVSb29tKSA9PiB7XG4gICAgICBkcmF3aW5nRGV0YWlscyA9IGdhbWVSb29tO1xuICAgIH0pO1xuXG4gICAgc29ja2V0Lm9uKFwidXBkYXRlLXNjb3Jlc1wiLCAoc2NvcmVzKSA9PiB7XG4gICAgICBzZXRQMVNjb3JlKHNjb3Jlc1swXSk7XG4gICAgICBzZXRQMlNjb3JlKHNjb3Jlc1sxXSk7XG4gICAgfSk7XG5cbiAgICBzb2NrZXQub24oXCJlbmQtZ2FtZVwiLCAoKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhcImdhbWUtZW5kZWRcIik7XG4gICAgICBzZXRSb3VuZEluUHJvZ3Jlc3MoZmFsc2UpO1xuICAgICAgc2V0R2FtZUluUHJvZ3Jlc3MoZmFsc2UpO1xuICAgICAgZHJhd2luZ0RldGFpbHMgPSBudWxsO1xuICAgIH0pO1xuXG4gICAgc29ja2V0Lm9uKFwiZW5kLXJvdW5kXCIsICgpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKFwicm91bmQtZW5kZWRcIik7XG4gICAgICBzZXRSb3VuZEluUHJvZ3Jlc3MoZmFsc2UpO1xuICAgICAgZHJhd2luZ0RldGFpbHMgPSBudWxsO1xuICAgIH0pO1xuXG4gICAgc29ja2V0Lm9uKFwid2lubmVyXCIsIChwbGF5ZXJOdW0pID0+IHtcbiAgICAgIHNldFdpbm5lcihwbGF5ZXJOdW0pO1xuICAgIH0pO1xuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIHVwZGF0ZURpcmVjdGlvbik7XG5cbiAgICBjb25zdCBwbGF5ZXJNb3ZlSW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICBzb2NrZXQuZW1pdChcInBsYXllci1tb3ZlXCIsIHtcbiAgICAgICAgcm9vbUlkLFxuICAgICAgICBwbGF5ZXJOdW0sXG4gICAgICAgIGRpcmVjdGlvbixcbiAgICAgIH0pO1xuICAgIH0sIDMzKTtcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBjbGVhckludGVydmFsKHBsYXllck1vdmVJbnRlcnZhbCk7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgdXBkYXRlRGlyZWN0aW9uKTtcbiAgICB9O1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5HYW1lIFJvb208L3RpdGxlPlxuICAgICAgICA8bWV0YSBkZXNjcmlwdGlvbj1cIlRoZSBnYW1lIHJvb20gdGhhdCBwbGF5ZXJzIGZpZ2h0IGluIHdoaWxlIHBsYXlpbmcgc29ja2V0IGR1ZWxcIiAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuc2NvcmVzfT5cbiAgICAgICAge2dhbWVJblByb2dyZXNzICYmIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5zY29yZX0+XG4gICAgICAgICAgICA8cD5QbGF5ZXIgMTo8L3A+XG4gICAgICAgICAgICA8c3Bhbj57UDFTY29yZX08L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG4gICAgICAgIHtnYW1lSW5Qcm9ncmVzcyAmJiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuc2NvcmV9PlxuICAgICAgICAgICAgPHA+UGxheWVyIDI6PC9wPlxuICAgICAgICAgICAgPHNwYW4+e1AyU2NvcmV9PC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgICB7d2lubmVyICYmIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMud2lubmVyfT5cbiAgICAgICAgICA8cD5QbGF5ZXIge3dpbm5lcn0gd2lucyE8L3A+XG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtiYWNrVG9Ib21lSGFuZGxlcn0gY2xhc3NOYW1lPXtjbGFzc2VzLmJ1dHRvbn0+XG4gICAgICAgICAgICBCYWNrIHRvIEhvbWVcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlc1tcInJvb20taWRcIl19PlxuICAgICAgICB7IWdhbWVJblByb2dyZXNzICYmIChcbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIFJvb20gSWQ6IDxzcGFuPntyb29tSWR9PC9zcGFuPlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlc1tcImdhbWUtYXJlYS1jb250YWluZXJcIl19PlxuICAgICAgICA8Y2FudmFzXG4gICAgICAgICAgaWQ9XCJnYW1lLWFyZWFcIlxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlc1tcImdhbWUtYXJlYVwiXX1cbiAgICAgICAgICB3aWR0aD17YCR7c2V0dGluZ3MuZmllbGRXaWR0aH1weGB9XG4gICAgICAgICAgaGVpZ2h0PXtgJHtzZXR0aW5ncy5maWVsZEhlaWdodH1weGB9XG4gICAgICAgID48L2NhbnZhcz5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlc1tcInJvdW5kLWJ1dHRvbnNcIl19PlxuICAgICAgICB7IXJvdW5kSW5Qcm9ncmVzcyAmJiAhd2lubmVyICYmIChcbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3N0YXJ0R2FtZUhhbmRsZXJ9IGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b259PlxuICAgICAgICAgICAgU3RhcnQgUm91bmRcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgKX1cbiAgICAgICAge2dhbWVTdGFydEVycm9yICYmIChcbiAgICAgICAgICA8cCBjbGFzc05hbWU9e2NsYXNzZXMuZXJyb3J9PlxuICAgICAgICAgICAgVGhlIGdhbWUgY2FuIG9ubHkgc3RhcnQgb25jZSB0aGVyZSBhcmUgMiBwbGF5ZXJzXG4gICAgICAgICAgPC9wPlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBSb29tO1xuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlUm91dGVyIiwiSGVhZCIsIkdhbWVSb29tIiwic29ja2V0IiwidXNlU2VsZWN0b3IiLCJ1cGRhdGVTY3JlZW4iLCJkcmF3aW5nRGV0YWlscyIsInNldHRpbmdzIiwiY2xhc3NlcyIsIlJvb20iLCJnYW1lSW5Qcm9ncmVzcyIsInNldEdhbWVJblByb2dyZXNzIiwicm91bmRJblByb2dyZXNzIiwic2V0Um91bmRJblByb2dyZXNzIiwiZ2FtZVN0YXJ0RXJyb3IiLCJzZXRHYW1lU3RhcnRFcnJvciIsIndpbm5lciIsInNldFdpbm5lciIsIlAxU2NvcmUiLCJzZXRQMVNjb3JlIiwiUDJTY29yZSIsInNldFAyU2NvcmUiLCJyb3V0ZXIiLCJyb29tSWQiLCJzdGF0ZSIsImdhbWVEZXRhaWxzIiwicGxheWVyTnVtIiwiZGlyZWN0aW9uIiwic3RhcnRHYW1lSGFuZGxlciIsImVtaXQiLCJiYWNrVG9Ib21lSGFuZGxlciIsInB1c2giLCJ1cGRhdGVEaXJlY3Rpb24iLCJlIiwia2V5Iiwib24iLCJnYW1lUm9vbSIsInNjb3JlcyIsImNvbnNvbGUiLCJsb2ciLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwicGxheWVyTW92ZUludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJjbGVhckludGVydmFsIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInRpdGxlIiwibWV0YSIsImRlc2NyaXB0aW9uIiwiZGl2IiwiY2xhc3NOYW1lIiwic2NvcmUiLCJwIiwic3BhbiIsImJ1dHRvbiIsIm9uQ2xpY2siLCJjYW52YXMiLCJpZCIsIndpZHRoIiwiZmllbGRXaWR0aCIsImhlaWdodCIsImZpZWxkSGVpZ2h0IiwiZXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/[room].js\n");

/***/ })

});