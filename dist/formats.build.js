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
/******/ 	return __webpack_require__(__webpack_require__.s = 96);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/*!**************************!*\
  !*** external "wp.i18n" ***!
  \**************************/
/*! dynamic exports provided */
/*! exports used: __ */
/***/ (function(module, exports) {

module.exports = wp.i18n;

/***/ }),

/***/ 100:
/*!*****************************************!*\
  !*** ./src/formats/superscript/icon.js ***!
  \*****************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("var icon = wp.element.createElement(\n    'svg',\n    { width: '15', height: '11', viewBox: '0 0 15 11', xmlns: 'http://www.w3.org/2000/svg' },\n    wp.element.createElement(\n        'g',\n        null,\n        wp.element.createElement('path', { d: 'M11.2977701,4.61 L11.2977701,3.95234072 C11.4084447,3.8544362 11.5787108,3.70651764 11.8085734,3.50858033 C12.0384361,3.31064302 12.2108304,3.16059608 12.3257618,3.0584349 C12.440693,2.95627373 12.5822268,2.821125 12.750367,2.65298476 C12.9185073,2.48484453 13.0430144,2.34331076 13.123892,2.2283795 C13.3324711,1.93040941 13.436759,1.66649699 13.436759,1.43663435 C13.436759,0.98542249 13.2281831,0.759819945 12.8110249,0.759819945 C12.6067026,0.759819945 12.4470782,0.827926373 12.3321468,0.964141274 C12.2172156,1.10035618 12.1576223,1.28764885 12.1533657,1.52602493 L11.285,1.52602493 C11.2892568,1.02798914 11.4350471,0.649147125 11.7223753,0.389487535 C12.0097036,0.129827944 12.3853532,0 12.8493352,0 C13.3133171,0 13.6772609,0.131956206 13.9411773,0.395872576 C14.2050937,0.659788947 14.3370499,0.991807787 14.3370499,1.39193906 C14.3370499,1.68990915 14.2604301,1.96659152 14.1071884,2.22199446 C14.0305675,2.35820936 13.9560761,2.47845974 13.8837119,2.58274931 C13.8113477,2.68703887 13.7081239,2.80728925 13.5740374,2.94350416 C13.4399509,3.07971906 13.3345987,3.18613535 13.2579778,3.26275623 C13.181357,3.33937711 13.0653632,3.44685754 12.9099931,3.58520083 C12.7546229,3.72354412 12.6471425,3.82038298 12.5875485,3.87572022 L14.4455956,3.87572022 L14.4455956,4.61 L11.2977701,4.61 Z',\n            id: '2' }),\n        wp.element.createElement('path', { d: 'M8.23,11 L10.13,11 L6,0 L4,0 L0,11 L1.88,11 L2.95,8 L7.13,8 L8.23,11 Z M6.7,6.46 L3.51,6.46 L5,1.6 L6.7,6.46 Z',\n            id: 'Shape' })\n    )\n);\n\n/* harmony default export */ __webpack_exports__[\"a\"] = (icon);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTAwLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2Zvcm1hdHMvc3VwZXJzY3JpcHQvaWNvbi5qcz81NmJmIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBpY29uID0gd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuICAgICdzdmcnLFxuICAgIHsgd2lkdGg6ICcxNScsIGhlaWdodDogJzExJywgdmlld0JveDogJzAgMCAxNSAxMScsIHhtbG5zOiAnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIH0sXG4gICAgd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAnZycsXG4gICAgICAgIG51bGwsXG4gICAgICAgIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudCgncGF0aCcsIHsgZDogJ00xMS4yOTc3NzAxLDQuNjEgTDExLjI5Nzc3MDEsMy45NTIzNDA3MiBDMTEuNDA4NDQ0NywzLjg1NDQzNjIgMTEuNTc4NzEwOCwzLjcwNjUxNzY0IDExLjgwODU3MzQsMy41MDg1ODAzMyBDMTIuMDM4NDM2MSwzLjMxMDY0MzAyIDEyLjIxMDgzMDQsMy4xNjA1OTYwOCAxMi4zMjU3NjE4LDMuMDU4NDM0OSBDMTIuNDQwNjkzLDIuOTU2MjczNzMgMTIuNTgyMjI2OCwyLjgyMTEyNSAxMi43NTAzNjcsMi42NTI5ODQ3NiBDMTIuOTE4NTA3MywyLjQ4NDg0NDUzIDEzLjA0MzAxNDQsMi4zNDMzMTA3NiAxMy4xMjM4OTIsMi4yMjgzNzk1IEMxMy4zMzI0NzExLDEuOTMwNDA5NDEgMTMuNDM2NzU5LDEuNjY2NDk2OTkgMTMuNDM2NzU5LDEuNDM2NjM0MzUgQzEzLjQzNjc1OSwwLjk4NTQyMjQ5IDEzLjIyODE4MzEsMC43NTk4MTk5NDUgMTIuODExMDI0OSwwLjc1OTgxOTk0NSBDMTIuNjA2NzAyNiwwLjc1OTgxOTk0NSAxMi40NDcwNzgyLDAuODI3OTI2MzczIDEyLjMzMjE0NjgsMC45NjQxNDEyNzQgQzEyLjIxNzIxNTYsMS4xMDAzNTYxOCAxMi4xNTc2MjIzLDEuMjg3NjQ4ODUgMTIuMTUzMzY1NywxLjUyNjAyNDkzIEwxMS4yODUsMS41MjYwMjQ5MyBDMTEuMjg5MjU2OCwxLjAyNzk4OTE0IDExLjQzNTA0NzEsMC42NDkxNDcxMjUgMTEuNzIyMzc1MywwLjM4OTQ4NzUzNSBDMTIuMDA5NzAzNiwwLjEyOTgyNzk0NCAxMi4zODUzNTMyLDAgMTIuODQ5MzM1MiwwIEMxMy4zMTMzMTcxLDAgMTMuNjc3MjYwOSwwLjEzMTk1NjIwNiAxMy45NDExNzczLDAuMzk1ODcyNTc2IEMxNC4yMDUwOTM3LDAuNjU5Nzg4OTQ3IDE0LjMzNzA0OTksMC45OTE4MDc3ODcgMTQuMzM3MDQ5OSwxLjM5MTkzOTA2IEMxNC4zMzcwNDk5LDEuNjg5OTA5MTUgMTQuMjYwNDMwMSwxLjk2NjU5MTUyIDE0LjEwNzE4ODQsMi4yMjE5OTQ0NiBDMTQuMDMwNTY3NSwyLjM1ODIwOTM2IDEzLjk1NjA3NjEsMi40Nzg0NTk3NCAxMy44ODM3MTE5LDIuNTgyNzQ5MzEgQzEzLjgxMTM0NzcsMi42ODcwMzg4NyAxMy43MDgxMjM5LDIuODA3Mjg5MjUgMTMuNTc0MDM3NCwyLjk0MzUwNDE2IEMxMy40Mzk5NTA5LDMuMDc5NzE5MDYgMTMuMzM0NTk4NywzLjE4NjEzNTM1IDEzLjI1Nzk3NzgsMy4yNjI3NTYyMyBDMTMuMTgxMzU3LDMuMzM5Mzc3MTEgMTMuMDY1MzYzMiwzLjQ0Njg1NzU0IDEyLjkwOTk5MzEsMy41ODUyMDA4MyBDMTIuNzU0NjIyOSwzLjcyMzU0NDEyIDEyLjY0NzE0MjUsMy44MjAzODI5OCAxMi41ODc1NDg1LDMuODc1NzIwMjIgTDE0LjQ0NTU5NTYsMy44NzU3MjAyMiBMMTQuNDQ1NTk1Niw0LjYxIEwxMS4yOTc3NzAxLDQuNjEgWicsXG4gICAgICAgICAgICBpZDogJzInIH0pLFxuICAgICAgICB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoJ3BhdGgnLCB7IGQ6ICdNOC4yMywxMSBMMTAuMTMsMTEgTDYsMCBMNCwwIEwwLDExIEwxLjg4LDExIEwyLjk1LDggTDcuMTMsOCBMOC4yMywxMSBaIE02LjcsNi40NiBMMy41MSw2LjQ2IEw1LDEuNiBMNi43LDYuNDYgWicsXG4gICAgICAgICAgICBpZDogJ1NoYXBlJyB9KVxuICAgIClcbik7XG5cbmV4cG9ydCBkZWZhdWx0IGljb247XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvZm9ybWF0cy9zdXBlcnNjcmlwdC9pY29uLmpzXG4vLyBtb2R1bGUgaWQgPSAxMDBcbi8vIG1vZHVsZSBjaHVua3MgPSAxIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///100\n");

/***/ }),

/***/ 101:
/*!*************************************!*\
  !*** ./src/formats/remove/index.js ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__wordpress_i18n__ = __webpack_require__(/*! @wordpress/i18n */ 0);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__wordpress_i18n___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__wordpress_i18n__);\n\nvar registerFormatType = wp.richText.registerFormatType;\nvar RichTextToolbarButton = wp.blockEditor.RichTextToolbarButton;\n\n\nvar type = 'advanced-gutenberg-bloc/remove-format';\n\nif (advancedGutenbergBlocksFormats.buttons.includes('remove')) {\n\n  registerFormatType(type, {\n    title: Object(__WEBPACK_IMPORTED_MODULE_0__wordpress_i18n__[\"__\"])('Remove formatting', 'advanced-gutenberg-blocks'),\n    tagName: 'span',\n    className: 'remove',\n    edit: function edit(props) {\n      var value = props.value,\n          onChange = props.onChange;\n\n\n      return wp.element.createElement(RichTextToolbarButton, {\n        icon: 'editor-removeformatting',\n        title: Object(__WEBPACK_IMPORTED_MODULE_0__wordpress_i18n__[\"__\"])('Remove formatting', 'advanced-gutenberg-blocks'),\n        onClick: function onClick() {\n          return onChange(Object.assign({}, value, { formats: Array(value.formats.length) }));\n        }\n      });\n    }\n  });\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTAxLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2Zvcm1hdHMvcmVtb3ZlL2luZGV4LmpzPzg1NjciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgX18gfSBmcm9tICdAd29yZHByZXNzL2kxOG4nO1xudmFyIHJlZ2lzdGVyRm9ybWF0VHlwZSA9IHdwLnJpY2hUZXh0LnJlZ2lzdGVyRm9ybWF0VHlwZTtcbnZhciBSaWNoVGV4dFRvb2xiYXJCdXR0b24gPSB3cC5ibG9ja0VkaXRvci5SaWNoVGV4dFRvb2xiYXJCdXR0b247XG5cblxudmFyIHR5cGUgPSAnYWR2YW5jZWQtZ3V0ZW5iZXJnLWJsb2MvcmVtb3ZlLWZvcm1hdCc7XG5cbmlmIChhZHZhbmNlZEd1dGVuYmVyZ0Jsb2Nrc0Zvcm1hdHMuYnV0dG9ucy5pbmNsdWRlcygncmVtb3ZlJykpIHtcblxuICByZWdpc3RlckZvcm1hdFR5cGUodHlwZSwge1xuICAgIHRpdGxlOiBfXygnUmVtb3ZlIGZvcm1hdHRpbmcnLCAnYWR2YW5jZWQtZ3V0ZW5iZXJnLWJsb2NrcycpLFxuICAgIHRhZ05hbWU6ICdzcGFuJyxcbiAgICBjbGFzc05hbWU6ICdyZW1vdmUnLFxuICAgIGVkaXQ6IGZ1bmN0aW9uIGVkaXQocHJvcHMpIHtcbiAgICAgIHZhciB2YWx1ZSA9IHByb3BzLnZhbHVlLFxuICAgICAgICAgIG9uQ2hhbmdlID0gcHJvcHMub25DaGFuZ2U7XG5cblxuICAgICAgcmV0dXJuIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChSaWNoVGV4dFRvb2xiYXJCdXR0b24sIHtcbiAgICAgICAgaWNvbjogJ2VkaXRvci1yZW1vdmVmb3JtYXR0aW5nJyxcbiAgICAgICAgdGl0bGU6IF9fKCdSZW1vdmUgZm9ybWF0dGluZycsICdhZHZhbmNlZC1ndXRlbmJlcmctYmxvY2tzJyksXG4gICAgICAgIG9uQ2xpY2s6IGZ1bmN0aW9uIG9uQ2xpY2soKSB7XG4gICAgICAgICAgcmV0dXJuIG9uQ2hhbmdlKE9iamVjdC5hc3NpZ24oe30sIHZhbHVlLCB7IGZvcm1hdHM6IEFycmF5KHZhbHVlLmZvcm1hdHMubGVuZ3RoKSB9KSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvZm9ybWF0cy9yZW1vdmUvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDEwMVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///101\n");

/***/ }),

/***/ 96:
/*!************************!*\
  !*** ./src/formats.js ***!
  \************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__formats_subscript__ = __webpack_require__(/*! ./formats/subscript */ 97);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__formats_superscript__ = __webpack_require__(/*! ./formats/superscript */ 99);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__formats_remove__ = __webpack_require__(/*! ./formats/remove */ 101);\n// Formats\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOTYuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZm9ybWF0cy5qcz9iNGM3Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIEZvcm1hdHNcbmltcG9ydCAnLi9mb3JtYXRzL3N1YnNjcmlwdCc7XG5pbXBvcnQgJy4vZm9ybWF0cy9zdXBlcnNjcmlwdCc7XG5pbXBvcnQgJy4vZm9ybWF0cy9yZW1vdmUnO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2Zvcm1hdHMuanNcbi8vIG1vZHVsZSBpZCA9IDk2XG4vLyBtb2R1bGUgY2h1bmtzID0gMSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///96\n");

/***/ }),

/***/ 97:
/*!****************************************!*\
  !*** ./src/formats/subscript/index.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__wordpress_i18n__ = __webpack_require__(/*! @wordpress/i18n */ 0);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__wordpress_i18n___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__wordpress_i18n__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__icon__ = __webpack_require__(/*! ./icon */ 98);\n\nvar Fragment = wp.element.Fragment;\nvar _wp$richText = wp.richText,\n    registerFormatType = _wp$richText.registerFormatType,\n    toggleFormat = _wp$richText.toggleFormat;\nvar _wp$blockEditor = wp.blockEditor,\n    RichTextToolbarButton = _wp$blockEditor.RichTextToolbarButton,\n    RichTextShortcut = _wp$blockEditor.RichTextShortcut;\n\n\n\n\nvar type = 'advanced-gutenberg-blocks/sub-format';\n\nif (advancedGutenbergBlocksFormats.buttons.includes('subscript')) {\n\n  registerFormatType(type, {\n    title: Object(__WEBPACK_IMPORTED_MODULE_0__wordpress_i18n__[\"__\"])('Subscript', 'advanced-gutenberg-blocks'),\n    tagName: 'sub',\n    className: null,\n    edit: function edit(props) {\n      var isActive = props.isActive,\n          value = props.value,\n          onChange = props.onChange;\n\n\n      var onToggle = function onToggle() {\n        return onChange(toggleFormat(value, { type: type }));\n      };\n\n      return wp.element.createElement(\n        Fragment,\n        null,\n        wp.element.createElement(RichTextShortcut, {\n          type: 'primary',\n          character: '.',\n          onUse: onToggle\n        }),\n        wp.element.createElement(RichTextToolbarButton, {\n          icon: __WEBPACK_IMPORTED_MODULE_1__icon__[\"a\" /* default */],\n          title: Object(__WEBPACK_IMPORTED_MODULE_0__wordpress_i18n__[\"__\"])('Subscript', 'advanced-gutenberg-blocks'),\n          isActive: isActive,\n          onClick: onToggle\n        })\n      );\n    }\n  });\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOTcuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZm9ybWF0cy9zdWJzY3JpcHQvaW5kZXguanM/NTZkMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBfXyB9IGZyb20gJ0B3b3JkcHJlc3MvaTE4bic7XG52YXIgRnJhZ21lbnQgPSB3cC5lbGVtZW50LkZyYWdtZW50O1xudmFyIF93cCRyaWNoVGV4dCA9IHdwLnJpY2hUZXh0LFxuICAgIHJlZ2lzdGVyRm9ybWF0VHlwZSA9IF93cCRyaWNoVGV4dC5yZWdpc3RlckZvcm1hdFR5cGUsXG4gICAgdG9nZ2xlRm9ybWF0ID0gX3dwJHJpY2hUZXh0LnRvZ2dsZUZvcm1hdDtcbnZhciBfd3AkYmxvY2tFZGl0b3IgPSB3cC5ibG9ja0VkaXRvcixcbiAgICBSaWNoVGV4dFRvb2xiYXJCdXR0b24gPSBfd3AkYmxvY2tFZGl0b3IuUmljaFRleHRUb29sYmFyQnV0dG9uLFxuICAgIFJpY2hUZXh0U2hvcnRjdXQgPSBfd3AkYmxvY2tFZGl0b3IuUmljaFRleHRTaG9ydGN1dDtcblxuXG5pbXBvcnQgaWNvbiBmcm9tICcuL2ljb24nO1xuXG52YXIgdHlwZSA9ICdhZHZhbmNlZC1ndXRlbmJlcmctYmxvY2tzL3N1Yi1mb3JtYXQnO1xuXG5pZiAoYWR2YW5jZWRHdXRlbmJlcmdCbG9ja3NGb3JtYXRzLmJ1dHRvbnMuaW5jbHVkZXMoJ3N1YnNjcmlwdCcpKSB7XG5cbiAgcmVnaXN0ZXJGb3JtYXRUeXBlKHR5cGUsIHtcbiAgICB0aXRsZTogX18oJ1N1YnNjcmlwdCcsICdhZHZhbmNlZC1ndXRlbmJlcmctYmxvY2tzJyksXG4gICAgdGFnTmFtZTogJ3N1YicsXG4gICAgY2xhc3NOYW1lOiBudWxsLFxuICAgIGVkaXQ6IGZ1bmN0aW9uIGVkaXQocHJvcHMpIHtcbiAgICAgIHZhciBpc0FjdGl2ZSA9IHByb3BzLmlzQWN0aXZlLFxuICAgICAgICAgIHZhbHVlID0gcHJvcHMudmFsdWUsXG4gICAgICAgICAgb25DaGFuZ2UgPSBwcm9wcy5vbkNoYW5nZTtcblxuXG4gICAgICB2YXIgb25Ub2dnbGUgPSBmdW5jdGlvbiBvblRvZ2dsZSgpIHtcbiAgICAgICAgcmV0dXJuIG9uQ2hhbmdlKHRvZ2dsZUZvcm1hdCh2YWx1ZSwgeyB0eXBlOiB0eXBlIH0pKTtcbiAgICAgIH07XG5cbiAgICAgIHJldHVybiB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgIEZyYWdtZW50LFxuICAgICAgICBudWxsLFxuICAgICAgICB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoUmljaFRleHRTaG9ydGN1dCwge1xuICAgICAgICAgIHR5cGU6ICdwcmltYXJ5JyxcbiAgICAgICAgICBjaGFyYWN0ZXI6ICcuJyxcbiAgICAgICAgICBvblVzZTogb25Ub2dnbGVcbiAgICAgICAgfSksXG4gICAgICAgIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChSaWNoVGV4dFRvb2xiYXJCdXR0b24sIHtcbiAgICAgICAgICBpY29uOiBpY29uLFxuICAgICAgICAgIHRpdGxlOiBfXygnU3Vic2NyaXB0JywgJ2FkdmFuY2VkLWd1dGVuYmVyZy1ibG9ja3MnKSxcbiAgICAgICAgICBpc0FjdGl2ZTogaXNBY3RpdmUsXG4gICAgICAgICAgb25DbGljazogb25Ub2dnbGVcbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgfVxuICB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9mb3JtYXRzL3N1YnNjcmlwdC9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gOTdcbi8vIG1vZHVsZSBjaHVua3MgPSAxIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///97\n");

/***/ }),

/***/ 98:
/*!***************************************!*\
  !*** ./src/formats/subscript/icon.js ***!
  \***************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("var icon = wp.element.createElement(\n  'svg',\n  { width: '15', height: '11', viewBox: '0 0 15 11', xmlns: 'http://www.w3.org/2000/svg' },\n  wp.element.createElement(\n    'g',\n    null,\n    wp.element.createElement('path', { d: 'M11.2977701,10.95 L11.2977701,10.2923407 C11.4084447,10.1944362 11.5787108,10.0465176 11.8085734,9.84858033 C12.0384361,9.65064302 12.2108304,9.50059608 12.3257618,9.3984349 C12.440693,9.29627373 12.5822268,9.161125 12.750367,8.99298476 C12.9185073,8.82484453 13.0430144,8.68331076 13.123892,8.5683795 C13.3324711,8.27040941 13.436759,8.00649699 13.436759,7.77663435 C13.436759,7.32542249 13.2281831,7.09981994 12.8110249,7.09981994 C12.6067026,7.09981994 12.4470782,7.16792637 12.3321468,7.30414127 C12.2172156,7.44035618 12.1576223,7.62764885 12.1533657,7.86602493 L11.285,7.86602493 C11.2892568,7.36798914 11.4350471,6.98914713 11.7223753,6.72948753 C12.0097036,6.46982794 12.3853532,6.34 12.8493352,6.34 C13.3133171,6.34 13.6772609,6.47195621 13.9411773,6.73587258 C14.2050937,6.99978895 14.3370499,7.33180779 14.3370499,7.73193906 C14.3370499,8.02990915 14.2604301,8.30659152 14.1071884,8.56199446 C14.0305675,8.69820936 13.9560761,8.81845974 13.8837119,8.92274931 C13.8113477,9.02703887 13.7081239,9.14728925 13.5740374,9.28350416 C13.4399509,9.41971906 13.3345987,9.52613535 13.2579778,9.60275623 C13.181357,9.67937711 13.0653632,9.78685754 12.9099931,9.92520083 C12.7546229,10.0635441 12.6471425,10.160383 12.5875485,10.2157202 L14.4455956,10.2157202 L14.4455956,10.95 L11.2977701,10.95 Z' }),\n    wp.element.createElement('path', { d: 'M8.23,11 L10.13,11 L6,0 L4,0 L0,11 L1.88,11 L2.95,8 L7.13,8 L8.23,11 Z M6.7,6.46 L3.51,6.46 L5,1.6 L6.7,6.46 Z' })\n  )\n);\n\n/* harmony default export */ __webpack_exports__[\"a\"] = (icon);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOTguanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZm9ybWF0cy9zdWJzY3JpcHQvaWNvbi5qcz9jZjM1Il0sInNvdXJjZXNDb250ZW50IjpbInZhciBpY29uID0gd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuICAnc3ZnJyxcbiAgeyB3aWR0aDogJzE1JywgaGVpZ2h0OiAnMTEnLCB2aWV3Qm94OiAnMCAwIDE1IDExJywgeG1sbnM6ICdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgfSxcbiAgd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuICAgICdnJyxcbiAgICBudWxsLFxuICAgIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudCgncGF0aCcsIHsgZDogJ00xMS4yOTc3NzAxLDEwLjk1IEwxMS4yOTc3NzAxLDEwLjI5MjM0MDcgQzExLjQwODQ0NDcsMTAuMTk0NDM2MiAxMS41Nzg3MTA4LDEwLjA0NjUxNzYgMTEuODA4NTczNCw5Ljg0ODU4MDMzIEMxMi4wMzg0MzYxLDkuNjUwNjQzMDIgMTIuMjEwODMwNCw5LjUwMDU5NjA4IDEyLjMyNTc2MTgsOS4zOTg0MzQ5IEMxMi40NDA2OTMsOS4yOTYyNzM3MyAxMi41ODIyMjY4LDkuMTYxMTI1IDEyLjc1MDM2Nyw4Ljk5Mjk4NDc2IEMxMi45MTg1MDczLDguODI0ODQ0NTMgMTMuMDQzMDE0NCw4LjY4MzMxMDc2IDEzLjEyMzg5Miw4LjU2ODM3OTUgQzEzLjMzMjQ3MTEsOC4yNzA0MDk0MSAxMy40MzY3NTksOC4wMDY0OTY5OSAxMy40MzY3NTksNy43NzY2MzQzNSBDMTMuNDM2NzU5LDcuMzI1NDIyNDkgMTMuMjI4MTgzMSw3LjA5OTgxOTk0IDEyLjgxMTAyNDksNy4wOTk4MTk5NCBDMTIuNjA2NzAyNiw3LjA5OTgxOTk0IDEyLjQ0NzA3ODIsNy4xNjc5MjYzNyAxMi4zMzIxNDY4LDcuMzA0MTQxMjcgQzEyLjIxNzIxNTYsNy40NDAzNTYxOCAxMi4xNTc2MjIzLDcuNjI3NjQ4ODUgMTIuMTUzMzY1Nyw3Ljg2NjAyNDkzIEwxMS4yODUsNy44NjYwMjQ5MyBDMTEuMjg5MjU2OCw3LjM2Nzk4OTE0IDExLjQzNTA0NzEsNi45ODkxNDcxMyAxMS43MjIzNzUzLDYuNzI5NDg3NTMgQzEyLjAwOTcwMzYsNi40Njk4Mjc5NCAxMi4zODUzNTMyLDYuMzQgMTIuODQ5MzM1Miw2LjM0IEMxMy4zMTMzMTcxLDYuMzQgMTMuNjc3MjYwOSw2LjQ3MTk1NjIxIDEzLjk0MTE3NzMsNi43MzU4NzI1OCBDMTQuMjA1MDkzNyw2Ljk5OTc4ODk1IDE0LjMzNzA0OTksNy4zMzE4MDc3OSAxNC4zMzcwNDk5LDcuNzMxOTM5MDYgQzE0LjMzNzA0OTksOC4wMjk5MDkxNSAxNC4yNjA0MzAxLDguMzA2NTkxNTIgMTQuMTA3MTg4NCw4LjU2MTk5NDQ2IEMxNC4wMzA1Njc1LDguNjk4MjA5MzYgMTMuOTU2MDc2MSw4LjgxODQ1OTc0IDEzLjg4MzcxMTksOC45MjI3NDkzMSBDMTMuODExMzQ3Nyw5LjAyNzAzODg3IDEzLjcwODEyMzksOS4xNDcyODkyNSAxMy41NzQwMzc0LDkuMjgzNTA0MTYgQzEzLjQzOTk1MDksOS40MTk3MTkwNiAxMy4zMzQ1OTg3LDkuNTI2MTM1MzUgMTMuMjU3OTc3OCw5LjYwMjc1NjIzIEMxMy4xODEzNTcsOS42NzkzNzcxMSAxMy4wNjUzNjMyLDkuNzg2ODU3NTQgMTIuOTA5OTkzMSw5LjkyNTIwMDgzIEMxMi43NTQ2MjI5LDEwLjA2MzU0NDEgMTIuNjQ3MTQyNSwxMC4xNjAzODMgMTIuNTg3NTQ4NSwxMC4yMTU3MjAyIEwxNC40NDU1OTU2LDEwLjIxNTcyMDIgTDE0LjQ0NTU5NTYsMTAuOTUgTDExLjI5Nzc3MDEsMTAuOTUgWicgfSksXG4gICAgd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KCdwYXRoJywgeyBkOiAnTTguMjMsMTEgTDEwLjEzLDExIEw2LDAgTDQsMCBMMCwxMSBMMS44OCwxMSBMMi45NSw4IEw3LjEzLDggTDguMjMsMTEgWiBNNi43LDYuNDYgTDMuNTEsNi40NiBMNSwxLjYgTDYuNyw2LjQ2IFonIH0pXG4gIClcbik7XG5cbmV4cG9ydCBkZWZhdWx0IGljb247XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvZm9ybWF0cy9zdWJzY3JpcHQvaWNvbi5qc1xuLy8gbW9kdWxlIGlkID0gOThcbi8vIG1vZHVsZSBjaHVua3MgPSAxIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///98\n");

/***/ }),

/***/ 99:
/*!******************************************!*\
  !*** ./src/formats/superscript/index.js ***!
  \******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__wordpress_i18n__ = __webpack_require__(/*! @wordpress/i18n */ 0);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__wordpress_i18n___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__wordpress_i18n__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__icon__ = __webpack_require__(/*! ./icon */ 100);\n\nvar Fragment = wp.element.Fragment;\nvar _wp$richText = wp.richText,\n    registerFormatType = _wp$richText.registerFormatType,\n    toggleFormat = _wp$richText.toggleFormat;\nvar _wp$blockEditor = wp.blockEditor,\n    RichTextToolbarButton = _wp$blockEditor.RichTextToolbarButton,\n    RichTextShortcut = _wp$blockEditor.RichTextShortcut;\n\n\n\n\nvar type = 'advanced-gutenberg-bloc/sup-format';\n\nif (advancedGutenbergBlocksFormats.buttons.includes('superscript')) {\n\n  registerFormatType(type, {\n    title: Object(__WEBPACK_IMPORTED_MODULE_0__wordpress_i18n__[\"__\"])('Superscript', 'advanced-gutenberg-blocks'),\n    tagName: 'sup',\n    className: null,\n    edit: function edit(props) {\n      var isActive = props.isActive,\n          value = props.value,\n          onChange = props.onChange;\n\n\n      var onToggle = function onToggle() {\n        return onChange(toggleFormat(value, { type: type }));\n      };\n\n      return wp.element.createElement(\n        Fragment,\n        null,\n        wp.element.createElement(RichTextShortcut, {\n          type: 'primary',\n          character: ',',\n          onUse: onToggle\n        }),\n        wp.element.createElement(RichTextToolbarButton, {\n          icon: __WEBPACK_IMPORTED_MODULE_1__icon__[\"a\" /* default */],\n          title: Object(__WEBPACK_IMPORTED_MODULE_0__wordpress_i18n__[\"__\"])('Superscript', 'advanced-gutenberg-blocks'),\n          isActive: isActive,\n          onClick: onToggle\n        })\n      );\n    }\n  });\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOTkuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZm9ybWF0cy9zdXBlcnNjcmlwdC9pbmRleC5qcz8zYWM3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IF9fIH0gZnJvbSAnQHdvcmRwcmVzcy9pMThuJztcbnZhciBGcmFnbWVudCA9IHdwLmVsZW1lbnQuRnJhZ21lbnQ7XG52YXIgX3dwJHJpY2hUZXh0ID0gd3AucmljaFRleHQsXG4gICAgcmVnaXN0ZXJGb3JtYXRUeXBlID0gX3dwJHJpY2hUZXh0LnJlZ2lzdGVyRm9ybWF0VHlwZSxcbiAgICB0b2dnbGVGb3JtYXQgPSBfd3AkcmljaFRleHQudG9nZ2xlRm9ybWF0O1xudmFyIF93cCRibG9ja0VkaXRvciA9IHdwLmJsb2NrRWRpdG9yLFxuICAgIFJpY2hUZXh0VG9vbGJhckJ1dHRvbiA9IF93cCRibG9ja0VkaXRvci5SaWNoVGV4dFRvb2xiYXJCdXR0b24sXG4gICAgUmljaFRleHRTaG9ydGN1dCA9IF93cCRibG9ja0VkaXRvci5SaWNoVGV4dFNob3J0Y3V0O1xuXG5cbmltcG9ydCBpY29uIGZyb20gJy4vaWNvbic7XG5cbnZhciB0eXBlID0gJ2FkdmFuY2VkLWd1dGVuYmVyZy1ibG9jL3N1cC1mb3JtYXQnO1xuXG5pZiAoYWR2YW5jZWRHdXRlbmJlcmdCbG9ja3NGb3JtYXRzLmJ1dHRvbnMuaW5jbHVkZXMoJ3N1cGVyc2NyaXB0JykpIHtcblxuICByZWdpc3RlckZvcm1hdFR5cGUodHlwZSwge1xuICAgIHRpdGxlOiBfXygnU3VwZXJzY3JpcHQnLCAnYWR2YW5jZWQtZ3V0ZW5iZXJnLWJsb2NrcycpLFxuICAgIHRhZ05hbWU6ICdzdXAnLFxuICAgIGNsYXNzTmFtZTogbnVsbCxcbiAgICBlZGl0OiBmdW5jdGlvbiBlZGl0KHByb3BzKSB7XG4gICAgICB2YXIgaXNBY3RpdmUgPSBwcm9wcy5pc0FjdGl2ZSxcbiAgICAgICAgICB2YWx1ZSA9IHByb3BzLnZhbHVlLFxuICAgICAgICAgIG9uQ2hhbmdlID0gcHJvcHMub25DaGFuZ2U7XG5cblxuICAgICAgdmFyIG9uVG9nZ2xlID0gZnVuY3Rpb24gb25Ub2dnbGUoKSB7XG4gICAgICAgIHJldHVybiBvbkNoYW5nZSh0b2dnbGVGb3JtYXQodmFsdWUsIHsgdHlwZTogdHlwZSB9KSk7XG4gICAgICB9O1xuXG4gICAgICByZXR1cm4gd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuICAgICAgICBGcmFnbWVudCxcbiAgICAgICAgbnVsbCxcbiAgICAgICAgd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFJpY2hUZXh0U2hvcnRjdXQsIHtcbiAgICAgICAgICB0eXBlOiAncHJpbWFyeScsXG4gICAgICAgICAgY2hhcmFjdGVyOiAnLCcsXG4gICAgICAgICAgb25Vc2U6IG9uVG9nZ2xlXG4gICAgICAgIH0pLFxuICAgICAgICB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoUmljaFRleHRUb29sYmFyQnV0dG9uLCB7XG4gICAgICAgICAgaWNvbjogaWNvbixcbiAgICAgICAgICB0aXRsZTogX18oJ1N1cGVyc2NyaXB0JywgJ2FkdmFuY2VkLWd1dGVuYmVyZy1ibG9ja3MnKSxcbiAgICAgICAgICBpc0FjdGl2ZTogaXNBY3RpdmUsXG4gICAgICAgICAgb25DbGljazogb25Ub2dnbGVcbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgfVxuICB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9mb3JtYXRzL3N1cGVyc2NyaXB0L2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA5OVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///99\n");

/***/ })

/******/ });