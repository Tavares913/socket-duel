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

/***/ "./utils/classes/Orb.js":
/*!******************************!*\
  !*** ./utils/classes/Orb.js ***!
  \******************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("\nfunction _classCallCheck(instance, Constructor) {\n    if (!(instance instanceof Constructor)) {\n        throw new TypeError(\"Cannot call a class as a function\");\n    }\n}\nfunction _defineProperties(target, props) {\n    for(var i = 0; i < props.length; i++){\n        var descriptor = props[i];\n        descriptor.enumerable = descriptor.enumerable || false;\n        descriptor.configurable = true;\n        if (\"value\" in descriptor) descriptor.writable = true;\n        Object.defineProperty(target, descriptor.key, descriptor);\n    }\n}\nfunction _createClass(Constructor, protoProps, staticProps) {\n    if (protoProps) _defineProperties(Constructor.prototype, protoProps);\n    if (staticProps) _defineProperties(Constructor, staticProps);\n    return Constructor;\n}\nvar settings = __webpack_require__(/*! ../settings */ \"./utils/settings.js\");\nvar Orb = /*#__PURE__*/ function() {\n    \"use strict\";\n    function Orb(playerNum, locX, locY, vecX, vecY) {\n        _classCallCheck(this, Orb);\n        this.playerNum = playerNum;\n        this.locX = locX;\n        this.locY = locY;\n        this.radius = settings.orbRadius;\n        this.vecX = vecX;\n        this.vecY = vecY;\n        this.colour = this.playerNum == 1 ? \"red\" : \"blue\";\n    }\n    _createClass(Orb, [\n        {\n            key: \"getLocX\",\n            value: function getLocX() {\n                return this.locX;\n            }\n        },\n        {\n            key: \"getLocY\",\n            value: function getLocY() {\n                return this.getY;\n            }\n        },\n        {\n            key: \"getRadius\",\n            value: function getRadius() {\n                return this.radius;\n            }\n        },\n        {\n            key: \"getColour\",\n            value: function getColour() {\n                return this.colour;\n            }\n        },\n        {\n            key: \"checkVecs\",\n            value: function checkVecs() {\n                var dx = this.locX + this.vecX;\n                var dy = this.locY + this.vecY;\n                if (dx - this.radius < 0 || dx + this.radius > settings.fieldWidth) {\n                    this.vecX = -this.vecX;\n                }\n                if (dy - this.radius < 0 || dy + this.radius > settings.fieldHeight) {\n                    this.vecY = -this.vecY;\n                }\n            }\n        },\n        {\n            key: \"updatePos\",\n            value: function updatePos() {\n                // make sure not at border, if so change so that it bounces off\n                this.checkVecs();\n                this.locX += this.vecX;\n                this.locY += this.vecY;\n            }\n        }\n    ]);\n    return Orb;\n}();\nmodule.exports = Orb;\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi91dGlscy9jbGFzc2VzL09yYi5qcy5qcyIsIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFNQSxRQUFRLEdBQUdDLG1CQUFPLENBQUMsd0NBQWEsQ0FBQztBQUV2QyxPQUFTLGlCQTBDTjs7YUExQ0dDLEdBQUcsQ0FDS0MsU0FBUyxFQUFFQyxJQUFJLEVBQUVDLElBQUksRUFBRUMsSUFBSSxFQUFFQyxJQUFJOztRQUMzQyxJQUFJLENBQUNKLFNBQVMsR0FBR0EsU0FBUyxDQUFDO1FBQzNCLElBQUksQ0FBQ0MsSUFBSSxHQUFHQSxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDQyxJQUFJLEdBQUdBLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUNHLE1BQU0sR0FBR1IsUUFBUSxDQUFDUyxTQUFTLENBQUM7UUFDakMsSUFBSSxDQUFDSCxJQUFJLEdBQUdBLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUNDLElBQUksR0FBR0EsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQ0csTUFBTSxHQUFHLElBQUksQ0FBQ1AsU0FBUyxJQUFJLENBQUMsR0FBRyxLQUFLLEdBQUcsTUFBTSxDQUFDOzs7O1lBR3JEUSxHQUFPLEVBQVBBLFNBQU87bUJBQVBBLFNBQUFBLE9BQU8sR0FBRztnQkFDUixPQUFPLElBQUksQ0FBQ1AsSUFBSSxDQUFDO2FBQ2xCOzs7WUFDRFEsR0FBTyxFQUFQQSxTQUFPO21CQUFQQSxTQUFBQSxPQUFPLEdBQUc7Z0JBQ1IsT0FBTyxJQUFJLENBQUNDLElBQUksQ0FBQzthQUNsQjs7O1lBQ0RDLEdBQVMsRUFBVEEsV0FBUzttQkFBVEEsU0FBQUEsU0FBUyxHQUFHO2dCQUNWLE9BQU8sSUFBSSxDQUFDTixNQUFNLENBQUM7YUFDcEI7OztZQUNETyxHQUFTLEVBQVRBLFdBQVM7bUJBQVRBLFNBQUFBLFNBQVMsR0FBRztnQkFDVixPQUFPLElBQUksQ0FBQ0wsTUFBTSxDQUFDO2FBQ3BCOzs7WUFFRE0sR0FBUyxFQUFUQSxXQUFTO21CQUFUQSxTQUFBQSxTQUFTLEdBQUc7Z0JBQ1YsSUFBTUMsRUFBRSxHQUFHLElBQUksQ0FBQ2IsSUFBSSxHQUFHLElBQUksQ0FBQ0UsSUFBSTtnQkFDaEMsSUFBTVksRUFBRSxHQUFHLElBQUksQ0FBQ2IsSUFBSSxHQUFHLElBQUksQ0FBQ0UsSUFBSTtnQkFDaEMsSUFBSVUsRUFBRSxHQUFHLElBQUksQ0FBQ1QsTUFBTSxHQUFHLENBQUMsSUFBSVMsRUFBRSxHQUFHLElBQUksQ0FBQ1QsTUFBTSxHQUFHUixRQUFRLENBQUNtQixVQUFVLEVBQUU7b0JBQ2xFLElBQUksQ0FBQ2IsSUFBSSxHQUFHLENBQUMsSUFBSSxDQUFDQSxJQUFJLENBQUM7aUJBQ3hCO2dCQUNELElBQUlZLEVBQUUsR0FBRyxJQUFJLENBQUNWLE1BQU0sR0FBRyxDQUFDLElBQUlVLEVBQUUsR0FBRyxJQUFJLENBQUNWLE1BQU0sR0FBR1IsUUFBUSxDQUFDb0IsV0FBVyxFQUFFO29CQUNuRSxJQUFJLENBQUNiLElBQUksR0FBRyxDQUFDLElBQUksQ0FBQ0EsSUFBSSxDQUFDO2lCQUN4QjthQUNGOzs7WUFDRGMsR0FBUyxFQUFUQSxXQUFTO21CQUFUQSxTQUFBQSxTQUFTLEdBQUc7Z0JBQ1YsK0RBQStEO2dCQUMvRCxJQUFJLENBQUNMLFNBQVMsRUFBRSxDQUFDO2dCQUNqQixJQUFJLENBQUNaLElBQUksSUFBSSxJQUFJLENBQUNFLElBQUksQ0FBQztnQkFDdkIsSUFBSSxDQUFDRCxJQUFJLElBQUksSUFBSSxDQUFDRSxJQUFJLENBQUM7YUFDeEI7Ozs7Q0FDRjtBQUVEZSxNQUFNLENBQUNDLE9BQU8sR0FBR3JCLEdBQUcsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi91dGlscy9jbGFzc2VzL09yYi5qcz85ODYwIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHNldHRpbmdzID0gcmVxdWlyZShcIi4uL3NldHRpbmdzXCIpO1xuXG5jbGFzcyBPcmIge1xuICBjb25zdHJ1Y3RvcihwbGF5ZXJOdW0sIGxvY1gsIGxvY1ksIHZlY1gsIHZlY1kpIHtcbiAgICB0aGlzLnBsYXllck51bSA9IHBsYXllck51bTtcbiAgICB0aGlzLmxvY1ggPSBsb2NYO1xuICAgIHRoaXMubG9jWSA9IGxvY1k7XG4gICAgdGhpcy5yYWRpdXMgPSBzZXR0aW5ncy5vcmJSYWRpdXM7XG4gICAgdGhpcy52ZWNYID0gdmVjWDtcbiAgICB0aGlzLnZlY1kgPSB2ZWNZO1xuICAgIHRoaXMuY29sb3VyID0gdGhpcy5wbGF5ZXJOdW0gPT0gMSA/IFwicmVkXCIgOiBcImJsdWVcIjtcbiAgfVxuXG4gIGdldExvY1goKSB7XG4gICAgcmV0dXJuIHRoaXMubG9jWDtcbiAgfVxuICBnZXRMb2NZKCkge1xuICAgIHJldHVybiB0aGlzLmdldFk7XG4gIH1cbiAgZ2V0UmFkaXVzKCkge1xuICAgIHJldHVybiB0aGlzLnJhZGl1cztcbiAgfVxuICBnZXRDb2xvdXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29sb3VyO1xuICB9XG5cbiAgY2hlY2tWZWNzKCkge1xuICAgIGNvbnN0IGR4ID0gdGhpcy5sb2NYICsgdGhpcy52ZWNYO1xuICAgIGNvbnN0IGR5ID0gdGhpcy5sb2NZICsgdGhpcy52ZWNZO1xuICAgIGlmIChkeCAtIHRoaXMucmFkaXVzIDwgMCB8fCBkeCArIHRoaXMucmFkaXVzID4gc2V0dGluZ3MuZmllbGRXaWR0aCkge1xuICAgICAgdGhpcy52ZWNYID0gLXRoaXMudmVjWDtcbiAgICB9XG4gICAgaWYgKGR5IC0gdGhpcy5yYWRpdXMgPCAwIHx8IGR5ICsgdGhpcy5yYWRpdXMgPiBzZXR0aW5ncy5maWVsZEhlaWdodCkge1xuICAgICAgdGhpcy52ZWNZID0gLXRoaXMudmVjWTtcbiAgICB9XG4gIH1cbiAgdXBkYXRlUG9zKCkge1xuICAgIC8vIG1ha2Ugc3VyZSBub3QgYXQgYm9yZGVyLCBpZiBzbyBjaGFuZ2Ugc28gdGhhdCBpdCBib3VuY2VzIG9mZlxuICAgIHRoaXMuY2hlY2tWZWNzKCk7XG4gICAgdGhpcy5sb2NYICs9IHRoaXMudmVjWDtcbiAgICB0aGlzLmxvY1kgKz0gdGhpcy52ZWNZO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gT3JiO1xuIl0sIm5hbWVzIjpbInNldHRpbmdzIiwicmVxdWlyZSIsIk9yYiIsInBsYXllck51bSIsImxvY1giLCJsb2NZIiwidmVjWCIsInZlY1kiLCJyYWRpdXMiLCJvcmJSYWRpdXMiLCJjb2xvdXIiLCJnZXRMb2NYIiwiZ2V0TG9jWSIsImdldFkiLCJnZXRSYWRpdXMiLCJnZXRDb2xvdXIiLCJjaGVja1ZlY3MiLCJkeCIsImR5IiwiZmllbGRXaWR0aCIsImZpZWxkSGVpZ2h0IiwidXBkYXRlUG9zIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./utils/classes/Orb.js\n");

/***/ })

});