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

/***/ "./utils/updateScreen.js":
/*!*******************************!*\
  !*** ./utils/updateScreen.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _drawingDetails__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./drawingDetails */ \"./utils/drawingDetails.js\");\n/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./settings */ \"./utils/settings.js\");\n/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_settings__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar getContext = function() {\n    var canvas = document.getElementById(\"game-area\");\n    var context = canvas.getContext(\"2d\");\n    return context;\n};\nvar updateScreen = function() {\n    var ctx = getContext();\n    ctx.clearRect(0, 0, (_settings__WEBPACK_IMPORTED_MODULE_1___default().fieldWidth), (_settings__WEBPACK_IMPORTED_MODULE_1___default().fieldHeight));\n    console.log(\"details\");\n    if (_drawingDetails__WEBPACK_IMPORTED_MODULE_0__[\"default\"] == null) {\n        requestAnimationFrame(updateScreen);\n        return;\n    } else if (_drawingDetails__WEBPACK_IMPORTED_MODULE_0__[\"default\"].gameEnded) {\n        return;\n    }\n    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;\n    try {\n        for(var _iterator = _drawingDetails__WEBPACK_IMPORTED_MODULE_0__[\"default\"].players[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){\n            var player = _step.value;\n            ctx.beginPath();\n            ctx.arc(player.locX, player.locY, player.radius, 0, 2 * Math.PI);\n            ctx.fillStyle = player.colour;\n            ctx.fill();\n            ctx.stroke();\n        }\n    } catch (err) {\n        _didIteratorError = true;\n        _iteratorError = err;\n    } finally{\n        try {\n            if (!_iteratorNormalCompletion && _iterator.return != null) {\n                _iterator.return();\n            }\n        } finally{\n            if (_didIteratorError) {\n                throw _iteratorError;\n            }\n        }\n    }\n    var _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;\n    try {\n        for(var _iterator1 = _drawingDetails__WEBPACK_IMPORTED_MODULE_0__[\"default\"].orbs[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){\n            var orb = _step1.value;\n            ctx.beginPath();\n            ctx.arc(orb.locX, orb.locY, orb.radius, 0, 2 * Math.PI);\n            ctx.fillStyle = orb.colour;\n            ctx.fill();\n            ctx.stroke();\n        }\n    } catch (err) {\n        _didIteratorError1 = true;\n        _iteratorError1 = err;\n    } finally{\n        try {\n            if (!_iteratorNormalCompletion1 && _iterator1.return != null) {\n                _iterator1.return();\n            }\n        } finally{\n            if (_didIteratorError1) {\n                throw _iteratorError1;\n            }\n        }\n    }\n    var _iteratorNormalCompletion2 = true, _didIteratorError2 = false, _iteratorError2 = undefined;\n    try {\n        for(var _iterator2 = _drawingDetails__WEBPACK_IMPORTED_MODULE_0__[\"default\"].pickups[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true){\n            var pickup = _step2.value;\n            ctx.beginPath();\n            ctx.arc(pickup.getLocX(), pickup.getLocY(), pickup.getRadius(), 0, 2 * Math.PI);\n            ctx.fillStyle = pickup.colour;\n            ctx.fill();\n            ctx.stroke();\n        }\n    } catch (err) {\n        _didIteratorError2 = true;\n        _iteratorError2 = err;\n    } finally{\n        try {\n            if (!_iteratorNormalCompletion2 && _iterator2.return != null) {\n                _iterator2.return();\n            }\n        } finally{\n            if (_didIteratorError2) {\n                throw _iteratorError2;\n            }\n        }\n    }\n    requestAnimationFrame(updateScreen);\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (updateScreen);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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aEJWLEdBQUcsQ0FBQ1csR0FBRyxDQUNMYSxNQUFNLENBQUNDLE9BQU8sRUFBRSxFQUNoQkQsTUFBTSxDQUFDRSxPQUFPLEVBQUUsRUFDaEJGLE1BQU0sQ0FBQ0csU0FBUyxFQUFFLEVBQ2xCLENBQUMsRUFDRCxDQUFDLEdBQUdaLElBQUksQ0FBQ0MsRUFBRSxDQUNaLENBQUM7WUFDRmhCLEdBQUcsQ0FBQ2lCLFNBQVMsR0FBR08sTUFBTSxDQUFDTixNQUFNLENBQUM7WUFDOUJsQixHQUFHLENBQUNtQixJQUFJLEVBQUUsQ0FBQztZQUNYbkIsR0FBRyxDQUFDb0IsTUFBTSxFQUFFLENBQUM7U0FDZDs7UUFaSSxrQkFBVTtRQUFWLGVBQVU7OztpQkFBViwwQkFBVSxJQUFWLFVBQVU7Z0JBQVYsVUFBVTs7O2dCQUFWLGtCQUFVO3NCQUFWLGVBQVU7Ozs7SUFjZmQscUJBQXFCLENBQUNQLFlBQVksQ0FBQyxDQUFDO0NBQ3JDO0FBRUQsK0RBQWVBLFlBQVksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi91dGlscy91cGRhdGVTY3JlZW4uanM/NmY0NSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZHJhd2luZ0RldGFpbHMgZnJvbSBcIi4vZHJhd2luZ0RldGFpbHNcIjtcbmltcG9ydCBzZXR0aW5ncyBmcm9tIFwiLi9zZXR0aW5nc1wiO1xuXG5jb25zdCBnZXRDb250ZXh0ID0gKCkgPT4ge1xuICBsZXQgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJnYW1lLWFyZWFcIik7XG4gIGxldCBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcblxuICByZXR1cm4gY29udGV4dDtcbn07XG5cbmNvbnN0IHVwZGF0ZVNjcmVlbiA9ICgpID0+IHtcbiAgbGV0IGN0eCA9IGdldENvbnRleHQoKTtcblxuICBjdHguY2xlYXJSZWN0KDAsIDAsIHNldHRpbmdzLmZpZWxkV2lkdGgsIHNldHRpbmdzLmZpZWxkSGVpZ2h0KTtcblxuICBjb25zb2xlLmxvZyhcImRldGFpbHNcIik7XG4gIGlmIChkcmF3aW5nRGV0YWlscyA9PSBudWxsKSB7XG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHVwZGF0ZVNjcmVlbik7XG4gICAgcmV0dXJuO1xuICB9IGVsc2UgaWYgKGRyYXdpbmdEZXRhaWxzLmdhbWVFbmRlZCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGZvciAobGV0IHBsYXllciBvZiBkcmF3aW5nRGV0YWlscy5wbGF5ZXJzKSB7XG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGN0eC5hcmMocGxheWVyLmxvY1gsIHBsYXllci5sb2NZLCBwbGF5ZXIucmFkaXVzLCAwLCAyICogTWF0aC5QSSk7XG4gICAgY3R4LmZpbGxTdHlsZSA9IHBsYXllci5jb2xvdXI7XG4gICAgY3R4LmZpbGwoKTtcbiAgICBjdHguc3Ryb2tlKCk7XG4gIH1cbiAgZm9yIChsZXQgb3JiIG9mIGRyYXdpbmdEZXRhaWxzLm9yYnMpIHtcbiAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgY3R4LmFyYyhvcmIubG9jWCwgb3JiLmxvY1ksIG9yYi5yYWRpdXMsIDAsIDIgKiBNYXRoLlBJKTtcbiAgICBjdHguZmlsbFN0eWxlID0gb3JiLmNvbG91cjtcbiAgICBjdHguZmlsbCgpO1xuICAgIGN0eC5zdHJva2UoKTtcbiAgfVxuICBmb3IgKGxldCBwaWNrdXAgb2YgZHJhd2luZ0RldGFpbHMucGlja3Vwcykge1xuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICBjdHguYXJjKFxuICAgICAgcGlja3VwLmdldExvY1goKSxcbiAgICAgIHBpY2t1cC5nZXRMb2NZKCksXG4gICAgICBwaWNrdXAuZ2V0UmFkaXVzKCksXG4gICAgICAwLFxuICAgICAgMiAqIE1hdGguUElcbiAgICApO1xuICAgIGN0eC5maWxsU3R5bGUgPSBwaWNrdXAuY29sb3VyO1xuICAgIGN0eC5maWxsKCk7XG4gICAgY3R4LnN0cm9rZSgpO1xuICB9XG5cbiAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHVwZGF0ZVNjcmVlbik7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB1cGRhdGVTY3JlZW47XG4iXSwibmFtZXMiOlsiZHJhd2luZ0RldGFpbHMiLCJzZXR0aW5ncyIsImdldENvbnRleHQiLCJjYW52YXMiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiY29udGV4dCIsInVwZGF0ZVNjcmVlbiIsImN0eCIsImNsZWFyUmVjdCIsImZpZWxkV2lkdGgiLCJmaWVsZEhlaWdodCIsImNvbnNvbGUiLCJsb2ciLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJnYW1lRW5kZWQiLCJwbGF5ZXJzIiwicGxheWVyIiwiYmVnaW5QYXRoIiwiYXJjIiwibG9jWCIsImxvY1kiLCJyYWRpdXMiLCJNYXRoIiwiUEkiLCJmaWxsU3R5bGUiLCJjb2xvdXIiLCJmaWxsIiwic3Ryb2tlIiwib3JicyIsIm9yYiIsInBpY2t1cHMiLCJwaWNrdXAiLCJnZXRMb2NYIiwiZ2V0TG9jWSIsImdldFJhZGl1cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./utils/updateScreen.js\n");

/***/ })

});