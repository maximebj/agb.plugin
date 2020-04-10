/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 281);
/******/ })
/************************************************************************/
/******/ ({

/***/ 1:
/*!**************************!*\
  !*** external "wp.i18n" ***!
  \**************************/
/*! dynamic exports provided */
/*! exports used: __ */
/***/ (function(module, exports) {

module.exports = wp.i18n;

/***/ }),

/***/ 281:
/*!************************!*\
  !*** ./src/formats.js ***!
  \************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__formats_subscript__ = __webpack_require__(/*! ./formats/subscript */ 282);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__formats_superscript__ = __webpack_require__(/*! ./formats/superscript */ 284);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__formats_remove__ = __webpack_require__(/*! ./formats/remove */ 286);\n// Formats\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjgxLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2Zvcm1hdHMuanM/YjRjNyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBGb3JtYXRzXG5pbXBvcnQgJy4vZm9ybWF0cy9zdWJzY3JpcHQnO1xuaW1wb3J0ICcuL2Zvcm1hdHMvc3VwZXJzY3JpcHQnO1xuaW1wb3J0ICcuL2Zvcm1hdHMvcmVtb3ZlJztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9mb3JtYXRzLmpzXG4vLyBtb2R1bGUgaWQgPSAyODFcbi8vIG1vZHVsZSBjaHVua3MgPSAxIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///281\n");

/***/ }),

/***/ 282:
/*!****************************************!*\
  !*** ./src/formats/subscript/index.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__wordpress_i18n__ = __webpack_require__(/*! @wordpress/i18n */ 1);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__wordpress_i18n___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__wordpress_i18n__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__icon__ = __webpack_require__(/*! ./icon */ 283);\n\nvar Fragment = wp.element.Fragment;\nvar _wp$richText = wp.richText,\n    registerFormatType = _wp$richText.registerFormatType,\n    toggleFormat = _wp$richText.toggleFormat;\nvar _wp$blockEditor = wp.blockEditor,\n    RichTextToolbarButton = _wp$blockEditor.RichTextToolbarButton,\n    RichTextShortcut = _wp$blockEditor.RichTextShortcut;\n\n\n\n\nvar type = 'advanced-gutenberg-blocks/sub-format';\n\nif (advancedGutenbergBlocksFormats.buttons.includes('subscript')) {\n\n  registerFormatType(type, {\n    title: Object(__WEBPACK_IMPORTED_MODULE_0__wordpress_i18n__[\"__\"])('Subscript', 'advanced-gutenberg-blocks'),\n    tagName: 'sub',\n    className: null,\n    edit: function edit(props) {\n      var isActive = props.isActive,\n          value = props.value,\n          onChange = props.onChange;\n\n\n      var onToggle = function onToggle() {\n        return onChange(toggleFormat(value, { type: type }));\n      };\n\n      return wp.element.createElement(\n        Fragment,\n        null,\n        wp.element.createElement(RichTextShortcut, {\n          type: 'primary',\n          character: '.',\n          onUse: onToggle\n        }),\n        wp.element.createElement(RichTextToolbarButton, {\n          icon: __WEBPACK_IMPORTED_MODULE_1__icon__[\"a\" /* default */],\n          title: Object(__WEBPACK_IMPORTED_MODULE_0__wordpress_i18n__[\"__\"])('Subscript', 'advanced-gutenberg-blocks'),\n          isActive: isActive,\n          onClick: onToggle\n        })\n      );\n    }\n  });\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjgyLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2Zvcm1hdHMvc3Vic2NyaXB0L2luZGV4LmpzPzU2ZDIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgX18gfSBmcm9tICdAd29yZHByZXNzL2kxOG4nO1xudmFyIEZyYWdtZW50ID0gd3AuZWxlbWVudC5GcmFnbWVudDtcbnZhciBfd3AkcmljaFRleHQgPSB3cC5yaWNoVGV4dCxcbiAgICByZWdpc3RlckZvcm1hdFR5cGUgPSBfd3AkcmljaFRleHQucmVnaXN0ZXJGb3JtYXRUeXBlLFxuICAgIHRvZ2dsZUZvcm1hdCA9IF93cCRyaWNoVGV4dC50b2dnbGVGb3JtYXQ7XG52YXIgX3dwJGJsb2NrRWRpdG9yID0gd3AuYmxvY2tFZGl0b3IsXG4gICAgUmljaFRleHRUb29sYmFyQnV0dG9uID0gX3dwJGJsb2NrRWRpdG9yLlJpY2hUZXh0VG9vbGJhckJ1dHRvbixcbiAgICBSaWNoVGV4dFNob3J0Y3V0ID0gX3dwJGJsb2NrRWRpdG9yLlJpY2hUZXh0U2hvcnRjdXQ7XG5cblxuaW1wb3J0IGljb24gZnJvbSAnLi9pY29uJztcblxudmFyIHR5cGUgPSAnYWR2YW5jZWQtZ3V0ZW5iZXJnLWJsb2Nrcy9zdWItZm9ybWF0JztcblxuaWYgKGFkdmFuY2VkR3V0ZW5iZXJnQmxvY2tzRm9ybWF0cy5idXR0b25zLmluY2x1ZGVzKCdzdWJzY3JpcHQnKSkge1xuXG4gIHJlZ2lzdGVyRm9ybWF0VHlwZSh0eXBlLCB7XG4gICAgdGl0bGU6IF9fKCdTdWJzY3JpcHQnLCAnYWR2YW5jZWQtZ3V0ZW5iZXJnLWJsb2NrcycpLFxuICAgIHRhZ05hbWU6ICdzdWInLFxuICAgIGNsYXNzTmFtZTogbnVsbCxcbiAgICBlZGl0OiBmdW5jdGlvbiBlZGl0KHByb3BzKSB7XG4gICAgICB2YXIgaXNBY3RpdmUgPSBwcm9wcy5pc0FjdGl2ZSxcbiAgICAgICAgICB2YWx1ZSA9IHByb3BzLnZhbHVlLFxuICAgICAgICAgIG9uQ2hhbmdlID0gcHJvcHMub25DaGFuZ2U7XG5cblxuICAgICAgdmFyIG9uVG9nZ2xlID0gZnVuY3Rpb24gb25Ub2dnbGUoKSB7XG4gICAgICAgIHJldHVybiBvbkNoYW5nZSh0b2dnbGVGb3JtYXQodmFsdWUsIHsgdHlwZTogdHlwZSB9KSk7XG4gICAgICB9O1xuXG4gICAgICByZXR1cm4gd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuICAgICAgICBGcmFnbWVudCxcbiAgICAgICAgbnVsbCxcbiAgICAgICAgd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFJpY2hUZXh0U2hvcnRjdXQsIHtcbiAgICAgICAgICB0eXBlOiAncHJpbWFyeScsXG4gICAgICAgICAgY2hhcmFjdGVyOiAnLicsXG4gICAgICAgICAgb25Vc2U6IG9uVG9nZ2xlXG4gICAgICAgIH0pLFxuICAgICAgICB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoUmljaFRleHRUb29sYmFyQnV0dG9uLCB7XG4gICAgICAgICAgaWNvbjogaWNvbixcbiAgICAgICAgICB0aXRsZTogX18oJ1N1YnNjcmlwdCcsICdhZHZhbmNlZC1ndXRlbmJlcmctYmxvY2tzJyksXG4gICAgICAgICAgaXNBY3RpdmU6IGlzQWN0aXZlLFxuICAgICAgICAgIG9uQ2xpY2s6IG9uVG9nZ2xlXG4gICAgICAgIH0pXG4gICAgICApO1xuICAgIH1cbiAgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvZm9ybWF0cy9zdWJzY3JpcHQvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDI4MlxuLy8gbW9kdWxlIGNodW5rcyA9IDEiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///282\n");

/***/ }),

/***/ 283:
/*!***************************************!*\
  !*** ./src/formats/subscript/icon.js ***!
  \***************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("var icon = wp.element.createElement(\n  'svg',\n  { width: '15', height: '11', viewBox: '0 0 15 11', xmlns: 'http://www.w3.org/2000/svg' },\n  wp.element.createElement(\n    'g',\n    null,\n    wp.element.createElement('path', { d: 'M11.2977701,10.95 L11.2977701,10.2923407 C11.4084447,10.1944362 11.5787108,10.0465176 11.8085734,9.84858033 C12.0384361,9.65064302 12.2108304,9.50059608 12.3257618,9.3984349 C12.440693,9.29627373 12.5822268,9.161125 12.750367,8.99298476 C12.9185073,8.82484453 13.0430144,8.68331076 13.123892,8.5683795 C13.3324711,8.27040941 13.436759,8.00649699 13.436759,7.77663435 C13.436759,7.32542249 13.2281831,7.09981994 12.8110249,7.09981994 C12.6067026,7.09981994 12.4470782,7.16792637 12.3321468,7.30414127 C12.2172156,7.44035618 12.1576223,7.62764885 12.1533657,7.86602493 L11.285,7.86602493 C11.2892568,7.36798914 11.4350471,6.98914713 11.7223753,6.72948753 C12.0097036,6.46982794 12.3853532,6.34 12.8493352,6.34 C13.3133171,6.34 13.6772609,6.47195621 13.9411773,6.73587258 C14.2050937,6.99978895 14.3370499,7.33180779 14.3370499,7.73193906 C14.3370499,8.02990915 14.2604301,8.30659152 14.1071884,8.56199446 C14.0305675,8.69820936 13.9560761,8.81845974 13.8837119,8.92274931 C13.8113477,9.02703887 13.7081239,9.14728925 13.5740374,9.28350416 C13.4399509,9.41971906 13.3345987,9.52613535 13.2579778,9.60275623 C13.181357,9.67937711 13.0653632,9.78685754 12.9099931,9.92520083 C12.7546229,10.0635441 12.6471425,10.160383 12.5875485,10.2157202 L14.4455956,10.2157202 L14.4455956,10.95 L11.2977701,10.95 Z' }),\n    wp.element.createElement('path', { d: 'M8.23,11 L10.13,11 L6,0 L4,0 L0,11 L1.88,11 L2.95,8 L7.13,8 L8.23,11 Z M6.7,6.46 L3.51,6.46 L5,1.6 L6.7,6.46 Z' })\n  )\n);\n\n/* harmony default export */ __webpack_exports__[\"a\"] = (icon);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjgzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2Zvcm1hdHMvc3Vic2NyaXB0L2ljb24uanM/Y2YzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgaWNvbiA9IHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcbiAgJ3N2ZycsXG4gIHsgd2lkdGg6ICcxNScsIGhlaWdodDogJzExJywgdmlld0JveDogJzAgMCAxNSAxMScsIHhtbG5zOiAnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIH0sXG4gIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcbiAgICAnZycsXG4gICAgbnVsbCxcbiAgICB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoJ3BhdGgnLCB7IGQ6ICdNMTEuMjk3NzcwMSwxMC45NSBMMTEuMjk3NzcwMSwxMC4yOTIzNDA3IEMxMS40MDg0NDQ3LDEwLjE5NDQzNjIgMTEuNTc4NzEwOCwxMC4wNDY1MTc2IDExLjgwODU3MzQsOS44NDg1ODAzMyBDMTIuMDM4NDM2MSw5LjY1MDY0MzAyIDEyLjIxMDgzMDQsOS41MDA1OTYwOCAxMi4zMjU3NjE4LDkuMzk4NDM0OSBDMTIuNDQwNjkzLDkuMjk2MjczNzMgMTIuNTgyMjI2OCw5LjE2MTEyNSAxMi43NTAzNjcsOC45OTI5ODQ3NiBDMTIuOTE4NTA3Myw4LjgyNDg0NDUzIDEzLjA0MzAxNDQsOC42ODMzMTA3NiAxMy4xMjM4OTIsOC41NjgzNzk1IEMxMy4zMzI0NzExLDguMjcwNDA5NDEgMTMuNDM2NzU5LDguMDA2NDk2OTkgMTMuNDM2NzU5LDcuNzc2NjM0MzUgQzEzLjQzNjc1OSw3LjMyNTQyMjQ5IDEzLjIyODE4MzEsNy4wOTk4MTk5NCAxMi44MTEwMjQ5LDcuMDk5ODE5OTQgQzEyLjYwNjcwMjYsNy4wOTk4MTk5NCAxMi40NDcwNzgyLDcuMTY3OTI2MzcgMTIuMzMyMTQ2OCw3LjMwNDE0MTI3IEMxMi4yMTcyMTU2LDcuNDQwMzU2MTggMTIuMTU3NjIyMyw3LjYyNzY0ODg1IDEyLjE1MzM2NTcsNy44NjYwMjQ5MyBMMTEuMjg1LDcuODY2MDI0OTMgQzExLjI4OTI1NjgsNy4zNjc5ODkxNCAxMS40MzUwNDcxLDYuOTg5MTQ3MTMgMTEuNzIyMzc1Myw2LjcyOTQ4NzUzIEMxMi4wMDk3MDM2LDYuNDY5ODI3OTQgMTIuMzg1MzUzMiw2LjM0IDEyLjg0OTMzNTIsNi4zNCBDMTMuMzEzMzE3MSw2LjM0IDEzLjY3NzI2MDksNi40NzE5NTYyMSAxMy45NDExNzczLDYuNzM1ODcyNTggQzE0LjIwNTA5MzcsNi45OTk3ODg5NSAxNC4zMzcwNDk5LDcuMzMxODA3NzkgMTQuMzM3MDQ5OSw3LjczMTkzOTA2IEMxNC4zMzcwNDk5LDguMDI5OTA5MTUgMTQuMjYwNDMwMSw4LjMwNjU5MTUyIDE0LjEwNzE4ODQsOC41NjE5OTQ0NiBDMTQuMDMwNTY3NSw4LjY5ODIwOTM2IDEzLjk1NjA3NjEsOC44MTg0NTk3NCAxMy44ODM3MTE5LDguOTIyNzQ5MzEgQzEzLjgxMTM0NzcsOS4wMjcwMzg4NyAxMy43MDgxMjM5LDkuMTQ3Mjg5MjUgMTMuNTc0MDM3NCw5LjI4MzUwNDE2IEMxMy40Mzk5NTA5LDkuNDE5NzE5MDYgMTMuMzM0NTk4Nyw5LjUyNjEzNTM1IDEzLjI1Nzk3NzgsOS42MDI3NTYyMyBDMTMuMTgxMzU3LDkuNjc5Mzc3MTEgMTMuMDY1MzYzMiw5Ljc4Njg1NzU0IDEyLjkwOTk5MzEsOS45MjUyMDA4MyBDMTIuNzU0NjIyOSwxMC4wNjM1NDQxIDEyLjY0NzE0MjUsMTAuMTYwMzgzIDEyLjU4NzU0ODUsMTAuMjE1NzIwMiBMMTQuNDQ1NTk1NiwxMC4yMTU3MjAyIEwxNC40NDU1OTU2LDEwLjk1IEwxMS4yOTc3NzAxLDEwLjk1IFonIH0pLFxuICAgIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudCgncGF0aCcsIHsgZDogJ004LjIzLDExIEwxMC4xMywxMSBMNiwwIEw0LDAgTDAsMTEgTDEuODgsMTEgTDIuOTUsOCBMNy4xMyw4IEw4LjIzLDExIFogTTYuNyw2LjQ2IEwzLjUxLDYuNDYgTDUsMS42IEw2LjcsNi40NiBaJyB9KVxuICApXG4pO1xuXG5leHBvcnQgZGVmYXVsdCBpY29uO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2Zvcm1hdHMvc3Vic2NyaXB0L2ljb24uanNcbi8vIG1vZHVsZSBpZCA9IDI4M1xuLy8gbW9kdWxlIGNodW5rcyA9IDEiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///283\n");

/***/ }),

/***/ 284:
/*!******************************************!*\
  !*** ./src/formats/superscript/index.js ***!
  \******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__wordpress_i18n__ = __webpack_require__(/*! @wordpress/i18n */ 1);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__wordpress_i18n___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__wordpress_i18n__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__icon__ = __webpack_require__(/*! ./icon */ 285);\n\nvar Fragment = wp.element.Fragment;\nvar _wp$richText = wp.richText,\n    registerFormatType = _wp$richText.registerFormatType,\n    toggleFormat = _wp$richText.toggleFormat;\nvar _wp$blockEditor = wp.blockEditor,\n    RichTextToolbarButton = _wp$blockEditor.RichTextToolbarButton,\n    RichTextShortcut = _wp$blockEditor.RichTextShortcut;\n\n\n\n\nvar type = 'advanced-gutenberg-bloc/sup-format';\n\nif (advancedGutenbergBlocksFormats.buttons.includes('superscript')) {\n\n  registerFormatType(type, {\n    title: Object(__WEBPACK_IMPORTED_MODULE_0__wordpress_i18n__[\"__\"])('Superscript', 'advanced-gutenberg-blocks'),\n    tagName: 'sup',\n    className: null,\n    edit: function edit(props) {\n      var isActive = props.isActive,\n          value = props.value,\n          onChange = props.onChange;\n\n\n      var onToggle = function onToggle() {\n        return onChange(toggleFormat(value, { type: type }));\n      };\n\n      return wp.element.createElement(\n        Fragment,\n        null,\n        wp.element.createElement(RichTextShortcut, {\n          type: 'primary',\n          character: ',',\n          onUse: onToggle\n        }),\n        wp.element.createElement(RichTextToolbarButton, {\n          icon: __WEBPACK_IMPORTED_MODULE_1__icon__[\"a\" /* default */],\n          title: Object(__WEBPACK_IMPORTED_MODULE_0__wordpress_i18n__[\"__\"])('Superscript', 'advanced-gutenberg-blocks'),\n          isActive: isActive,\n          onClick: onToggle\n        })\n      );\n    }\n  });\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjg0LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2Zvcm1hdHMvc3VwZXJzY3JpcHQvaW5kZXguanM/M2FjNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBfXyB9IGZyb20gJ0B3b3JkcHJlc3MvaTE4bic7XG52YXIgRnJhZ21lbnQgPSB3cC5lbGVtZW50LkZyYWdtZW50O1xudmFyIF93cCRyaWNoVGV4dCA9IHdwLnJpY2hUZXh0LFxuICAgIHJlZ2lzdGVyRm9ybWF0VHlwZSA9IF93cCRyaWNoVGV4dC5yZWdpc3RlckZvcm1hdFR5cGUsXG4gICAgdG9nZ2xlRm9ybWF0ID0gX3dwJHJpY2hUZXh0LnRvZ2dsZUZvcm1hdDtcbnZhciBfd3AkYmxvY2tFZGl0b3IgPSB3cC5ibG9ja0VkaXRvcixcbiAgICBSaWNoVGV4dFRvb2xiYXJCdXR0b24gPSBfd3AkYmxvY2tFZGl0b3IuUmljaFRleHRUb29sYmFyQnV0dG9uLFxuICAgIFJpY2hUZXh0U2hvcnRjdXQgPSBfd3AkYmxvY2tFZGl0b3IuUmljaFRleHRTaG9ydGN1dDtcblxuXG5pbXBvcnQgaWNvbiBmcm9tICcuL2ljb24nO1xuXG52YXIgdHlwZSA9ICdhZHZhbmNlZC1ndXRlbmJlcmctYmxvYy9zdXAtZm9ybWF0JztcblxuaWYgKGFkdmFuY2VkR3V0ZW5iZXJnQmxvY2tzRm9ybWF0cy5idXR0b25zLmluY2x1ZGVzKCdzdXBlcnNjcmlwdCcpKSB7XG5cbiAgcmVnaXN0ZXJGb3JtYXRUeXBlKHR5cGUsIHtcbiAgICB0aXRsZTogX18oJ1N1cGVyc2NyaXB0JywgJ2FkdmFuY2VkLWd1dGVuYmVyZy1ibG9ja3MnKSxcbiAgICB0YWdOYW1lOiAnc3VwJyxcbiAgICBjbGFzc05hbWU6IG51bGwsXG4gICAgZWRpdDogZnVuY3Rpb24gZWRpdChwcm9wcykge1xuICAgICAgdmFyIGlzQWN0aXZlID0gcHJvcHMuaXNBY3RpdmUsXG4gICAgICAgICAgdmFsdWUgPSBwcm9wcy52YWx1ZSxcbiAgICAgICAgICBvbkNoYW5nZSA9IHByb3BzLm9uQ2hhbmdlO1xuXG5cbiAgICAgIHZhciBvblRvZ2dsZSA9IGZ1bmN0aW9uIG9uVG9nZ2xlKCkge1xuICAgICAgICByZXR1cm4gb25DaGFuZ2UodG9nZ2xlRm9ybWF0KHZhbHVlLCB7IHR5cGU6IHR5cGUgfSkpO1xuICAgICAgfTtcblxuICAgICAgcmV0dXJuIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgRnJhZ21lbnQsXG4gICAgICAgIG51bGwsXG4gICAgICAgIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChSaWNoVGV4dFNob3J0Y3V0LCB7XG4gICAgICAgICAgdHlwZTogJ3ByaW1hcnknLFxuICAgICAgICAgIGNoYXJhY3RlcjogJywnLFxuICAgICAgICAgIG9uVXNlOiBvblRvZ2dsZVxuICAgICAgICB9KSxcbiAgICAgICAgd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFJpY2hUZXh0VG9vbGJhckJ1dHRvbiwge1xuICAgICAgICAgIGljb246IGljb24sXG4gICAgICAgICAgdGl0bGU6IF9fKCdTdXBlcnNjcmlwdCcsICdhZHZhbmNlZC1ndXRlbmJlcmctYmxvY2tzJyksXG4gICAgICAgICAgaXNBY3RpdmU6IGlzQWN0aXZlLFxuICAgICAgICAgIG9uQ2xpY2s6IG9uVG9nZ2xlXG4gICAgICAgIH0pXG4gICAgICApO1xuICAgIH1cbiAgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvZm9ybWF0cy9zdXBlcnNjcmlwdC9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMjg0XG4vLyBtb2R1bGUgY2h1bmtzID0gMSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///284\n");

/***/ }),

/***/ 285:
/*!*****************************************!*\
  !*** ./src/formats/superscript/icon.js ***!
  \*****************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("var icon = wp.element.createElement(\n    'svg',\n    { width: '15', height: '11', viewBox: '0 0 15 11', xmlns: 'http://www.w3.org/2000/svg' },\n    wp.element.createElement(\n        'g',\n        null,\n        wp.element.createElement('path', { d: 'M11.2977701,4.61 L11.2977701,3.95234072 C11.4084447,3.8544362 11.5787108,3.70651764 11.8085734,3.50858033 C12.0384361,3.31064302 12.2108304,3.16059608 12.3257618,3.0584349 C12.440693,2.95627373 12.5822268,2.821125 12.750367,2.65298476 C12.9185073,2.48484453 13.0430144,2.34331076 13.123892,2.2283795 C13.3324711,1.93040941 13.436759,1.66649699 13.436759,1.43663435 C13.436759,0.98542249 13.2281831,0.759819945 12.8110249,0.759819945 C12.6067026,0.759819945 12.4470782,0.827926373 12.3321468,0.964141274 C12.2172156,1.10035618 12.1576223,1.28764885 12.1533657,1.52602493 L11.285,1.52602493 C11.2892568,1.02798914 11.4350471,0.649147125 11.7223753,0.389487535 C12.0097036,0.129827944 12.3853532,0 12.8493352,0 C13.3133171,0 13.6772609,0.131956206 13.9411773,0.395872576 C14.2050937,0.659788947 14.3370499,0.991807787 14.3370499,1.39193906 C14.3370499,1.68990915 14.2604301,1.96659152 14.1071884,2.22199446 C14.0305675,2.35820936 13.9560761,2.47845974 13.8837119,2.58274931 C13.8113477,2.68703887 13.7081239,2.80728925 13.5740374,2.94350416 C13.4399509,3.07971906 13.3345987,3.18613535 13.2579778,3.26275623 C13.181357,3.33937711 13.0653632,3.44685754 12.9099931,3.58520083 C12.7546229,3.72354412 12.6471425,3.82038298 12.5875485,3.87572022 L14.4455956,3.87572022 L14.4455956,4.61 L11.2977701,4.61 Z',\n            id: '2' }),\n        wp.element.createElement('path', { d: 'M8.23,11 L10.13,11 L6,0 L4,0 L0,11 L1.88,11 L2.95,8 L7.13,8 L8.23,11 Z M6.7,6.46 L3.51,6.46 L5,1.6 L6.7,6.46 Z',\n            id: 'Shape' })\n    )\n);\n\n/* harmony default export */ __webpack_exports__[\"a\"] = (icon);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjg1LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2Zvcm1hdHMvc3VwZXJzY3JpcHQvaWNvbi5qcz81NmJmIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBpY29uID0gd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuICAgICdzdmcnLFxuICAgIHsgd2lkdGg6ICcxNScsIGhlaWdodDogJzExJywgdmlld0JveDogJzAgMCAxNSAxMScsIHhtbG5zOiAnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIH0sXG4gICAgd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAnZycsXG4gICAgICAgIG51bGwsXG4gICAgICAgIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudCgncGF0aCcsIHsgZDogJ00xMS4yOTc3NzAxLDQuNjEgTDExLjI5Nzc3MDEsMy45NTIzNDA3MiBDMTEuNDA4NDQ0NywzLjg1NDQzNjIgMTEuNTc4NzEwOCwzLjcwNjUxNzY0IDExLjgwODU3MzQsMy41MDg1ODAzMyBDMTIuMDM4NDM2MSwzLjMxMDY0MzAyIDEyLjIxMDgzMDQsMy4xNjA1OTYwOCAxMi4zMjU3NjE4LDMuMDU4NDM0OSBDMTIuNDQwNjkzLDIuOTU2MjczNzMgMTIuNTgyMjI2OCwyLjgyMTEyNSAxMi43NTAzNjcsMi42NTI5ODQ3NiBDMTIuOTE4NTA3MywyLjQ4NDg0NDUzIDEzLjA0MzAxNDQsMi4zNDMzMTA3NiAxMy4xMjM4OTIsMi4yMjgzNzk1IEMxMy4zMzI0NzExLDEuOTMwNDA5NDEgMTMuNDM2NzU5LDEuNjY2NDk2OTkgMTMuNDM2NzU5LDEuNDM2NjM0MzUgQzEzLjQzNjc1OSwwLjk4NTQyMjQ5IDEzLjIyODE4MzEsMC43NTk4MTk5NDUgMTIuODExMDI0OSwwLjc1OTgxOTk0NSBDMTIuNjA2NzAyNiwwLjc1OTgxOTk0NSAxMi40NDcwNzgyLDAuODI3OTI2MzczIDEyLjMzMjE0NjgsMC45NjQxNDEyNzQgQzEyLjIxNzIxNTYsMS4xMDAzNTYxOCAxMi4xNTc2MjIzLDEuMjg3NjQ4ODUgMTIuMTUzMzY1NywxLjUyNjAyNDkzIEwxMS4yODUsMS41MjYwMjQ5MyBDMTEuMjg5MjU2OCwxLjAyNzk4OTE0IDExLjQzNTA0NzEsMC42NDkxNDcxMjUgMTEuNzIyMzc1MywwLjM4OTQ4NzUzNSBDMTIuMDA5NzAzNiwwLjEyOTgyNzk0NCAxMi4zODUzNTMyLDAgMTIuODQ5MzM1MiwwIEMxMy4zMTMzMTcxLDAgMTMuNjc3MjYwOSwwLjEzMTk1NjIwNiAxMy45NDExNzczLDAuMzk1ODcyNTc2IEMxNC4yMDUwOTM3LDAuNjU5Nzg4OTQ3IDE0LjMzNzA0OTksMC45OTE4MDc3ODcgMTQuMzM3MDQ5OSwxLjM5MTkzOTA2IEMxNC4zMzcwNDk5LDEuNjg5OTA5MTUgMTQuMjYwNDMwMSwxLjk2NjU5MTUyIDE0LjEwNzE4ODQsMi4yMjE5OTQ0NiBDMTQuMDMwNTY3NSwyLjM1ODIwOTM2IDEzLjk1NjA3NjEsMi40Nzg0NTk3NCAxMy44ODM3MTE5LDIuNTgyNzQ5MzEgQzEzLjgxMTM0NzcsMi42ODcwMzg4NyAxMy43MDgxMjM5LDIuODA3Mjg5MjUgMTMuNTc0MDM3NCwyLjk0MzUwNDE2IEMxMy40Mzk5NTA5LDMuMDc5NzE5MDYgMTMuMzM0NTk4NywzLjE4NjEzNTM1IDEzLjI1Nzk3NzgsMy4yNjI3NTYyMyBDMTMuMTgxMzU3LDMuMzM5Mzc3MTEgMTMuMDY1MzYzMiwzLjQ0Njg1NzU0IDEyLjkwOTk5MzEsMy41ODUyMDA4MyBDMTIuNzU0NjIyOSwzLjcyMzU0NDEyIDEyLjY0NzE0MjUsMy44MjAzODI5OCAxMi41ODc1NDg1LDMuODc1NzIwMjIgTDE0LjQ0NTU5NTYsMy44NzU3MjAyMiBMMTQuNDQ1NTk1Niw0LjYxIEwxMS4yOTc3NzAxLDQuNjEgWicsXG4gICAgICAgICAgICBpZDogJzInIH0pLFxuICAgICAgICB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoJ3BhdGgnLCB7IGQ6ICdNOC4yMywxMSBMMTAuMTMsMTEgTDYsMCBMNCwwIEwwLDExIEwxLjg4LDExIEwyLjk1LDggTDcuMTMsOCBMOC4yMywxMSBaIE02LjcsNi40NiBMMy41MSw2LjQ2IEw1LDEuNiBMNi43LDYuNDYgWicsXG4gICAgICAgICAgICBpZDogJ1NoYXBlJyB9KVxuICAgIClcbik7XG5cbmV4cG9ydCBkZWZhdWx0IGljb247XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvZm9ybWF0cy9zdXBlcnNjcmlwdC9pY29uLmpzXG4vLyBtb2R1bGUgaWQgPSAyODVcbi8vIG1vZHVsZSBjaHVua3MgPSAxIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///285\n");

/***/ }),

/***/ 286:
/*!*************************************!*\
  !*** ./src/formats/remove/index.js ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__wordpress_i18n__ = __webpack_require__(/*! @wordpress/i18n */ 1);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__wordpress_i18n___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__wordpress_i18n__);\n\nvar registerFormatType = wp.richText.registerFormatType;\nvar RichTextToolbarButton = wp.blockEditor.RichTextToolbarButton;\n\n\nvar type = 'advanced-gutenberg-bloc/remove-format';\n\nif (advancedGutenbergBlocksFormats.buttons.includes('remove')) {\n\n  registerFormatType(type, {\n    title: Object(__WEBPACK_IMPORTED_MODULE_0__wordpress_i18n__[\"__\"])('Remove formatting', 'advanced-gutenberg-blocks'),\n    tagName: 'span',\n    className: 'remove',\n    edit: function edit(props) {\n      var value = props.value,\n          onChange = props.onChange;\n\n\n      return wp.element.createElement(RichTextToolbarButton, {\n        icon: 'editor-removeformatting',\n        title: Object(__WEBPACK_IMPORTED_MODULE_0__wordpress_i18n__[\"__\"])('Remove formatting', 'advanced-gutenberg-blocks'),\n        onClick: function onClick() {\n          return onChange(Object.assign({}, value, { formats: Array(value.formats.length) }));\n        }\n      });\n    }\n  });\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjg2LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2Zvcm1hdHMvcmVtb3ZlL2luZGV4LmpzPzg1NjciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgX18gfSBmcm9tICdAd29yZHByZXNzL2kxOG4nO1xudmFyIHJlZ2lzdGVyRm9ybWF0VHlwZSA9IHdwLnJpY2hUZXh0LnJlZ2lzdGVyRm9ybWF0VHlwZTtcbnZhciBSaWNoVGV4dFRvb2xiYXJCdXR0b24gPSB3cC5ibG9ja0VkaXRvci5SaWNoVGV4dFRvb2xiYXJCdXR0b247XG5cblxudmFyIHR5cGUgPSAnYWR2YW5jZWQtZ3V0ZW5iZXJnLWJsb2MvcmVtb3ZlLWZvcm1hdCc7XG5cbmlmIChhZHZhbmNlZEd1dGVuYmVyZ0Jsb2Nrc0Zvcm1hdHMuYnV0dG9ucy5pbmNsdWRlcygncmVtb3ZlJykpIHtcblxuICByZWdpc3RlckZvcm1hdFR5cGUodHlwZSwge1xuICAgIHRpdGxlOiBfXygnUmVtb3ZlIGZvcm1hdHRpbmcnLCAnYWR2YW5jZWQtZ3V0ZW5iZXJnLWJsb2NrcycpLFxuICAgIHRhZ05hbWU6ICdzcGFuJyxcbiAgICBjbGFzc05hbWU6ICdyZW1vdmUnLFxuICAgIGVkaXQ6IGZ1bmN0aW9uIGVkaXQocHJvcHMpIHtcbiAgICAgIHZhciB2YWx1ZSA9IHByb3BzLnZhbHVlLFxuICAgICAgICAgIG9uQ2hhbmdlID0gcHJvcHMub25DaGFuZ2U7XG5cblxuICAgICAgcmV0dXJuIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChSaWNoVGV4dFRvb2xiYXJCdXR0b24sIHtcbiAgICAgICAgaWNvbjogJ2VkaXRvci1yZW1vdmVmb3JtYXR0aW5nJyxcbiAgICAgICAgdGl0bGU6IF9fKCdSZW1vdmUgZm9ybWF0dGluZycsICdhZHZhbmNlZC1ndXRlbmJlcmctYmxvY2tzJyksXG4gICAgICAgIG9uQ2xpY2s6IGZ1bmN0aW9uIG9uQ2xpY2soKSB7XG4gICAgICAgICAgcmV0dXJuIG9uQ2hhbmdlKE9iamVjdC5hc3NpZ24oe30sIHZhbHVlLCB7IGZvcm1hdHM6IEFycmF5KHZhbHVlLmZvcm1hdHMubGVuZ3RoKSB9KSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvZm9ybWF0cy9yZW1vdmUvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDI4NlxuLy8gbW9kdWxlIGNodW5rcyA9IDEiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///286\n");

/***/ })

/******/ });