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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!***********************!*\
  !*** ./src/blocks.js ***!
  \***********************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__notice_index_js__ = __webpack_require__(/*! ./notice/index.js */ 1);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9ja3MuanM/N2I1YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4vbm90aWNlL2luZGV4LmpzJztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9ibG9ja3MuanNcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!*****************************!*\
  !*** ./src/notice/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_scss__ = __webpack_require__(/*! ./style.scss */ 2);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__style_scss__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editor_scss__ = __webpack_require__(/*! ./editor.scss */ 3);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editor_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__editor_scss__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(/*! classnames */ 4);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);\n/**\n * BLOCK: Notice\n *\n * Display a notice block\n * 4 types are available : Tips, Warning, Avoid, Info\n */\n\n\n\n\nvar __ = wp.i18n.__;\n\n\n\n\nvar _wp$blocks = wp.blocks,\n    registerBlockType = _wp$blocks.registerBlockType,\n    RichText = _wp$blocks.RichText;\n\n\nvar types = {\n  'advice': __('Advice'),\n  'avoid': __('Avoid'),\n  'warning': __('Warning'),\n  'info': __('Information')\n};\n\n/* unused harmony default export */ var _unused_webpack_default_export = (registerBlockType('gutenblock/notice', {\n  title: __('Notice'),\n  description: __('Put forward a tips or a warning'),\n  category: 'common',\n  icon: 'warning',\n  keywords: [__('warning'), __('information'), __('tips')],\n  attributes: {\n    type: {\n      source: 'attribute',\n      selector: '.wp-block-gutenblock-notice',\n      attribute: 'data-type',\n      default: Object.keys(types)[0]\n    },\n    title: {\n      source: 'text',\n      type: 'string',\n      selector: '.wp-block-gutenblock-notice__title',\n      default: types.advice\n    },\n    content: {\n      type: 'array',\n      source: 'children',\n      selector: '.wp-block-gutenblock-notice__content'\n    }\n  },\n  edit: function edit(props) {\n\n    var options = [];\n    _.each(types, function (obj, key) {\n      options.push(wp.element.createElement(\n        'option',\n        { value: key },\n        obj\n      ));\n    });\n\n    var onChangeContent = function onChangeContent(value) {\n      props.setAttributes({ content: value });\n    };\n\n    var onChangeType = function onChangeType(event) {\n      props.setAttributes({ type: event.target.value, title: types[event.target.value] });\n    };\n\n    return wp.element.createElement(\n      'div',\n      { className: __WEBPACK_IMPORTED_MODULE_2_classnames___default()(props.className, props.className + '--' + props.attributes.type) },\n      !!props.focus ? wp.element.createElement(\n        'select',\n        {\n          name: 'type',\n          onChange: onChangeType,\n          value: props.attributes.type\n        },\n        options\n      ) : wp.element.createElement(\n        'p',\n        { className: 'wp-block-gutenblock-notice__title' },\n        props.attributes.title\n      ),\n      wp.element.createElement(RichText, {\n        tagName: 'p',\n        placeholder: __('Your tip/warning content'),\n        value: props.attributes.content,\n        className: 'wp-block-gutenblock-notice__content',\n        onChange: onChangeContent,\n        focus: props.focus\n      })\n    );\n  },\n  save: function save(props) {\n    return wp.element.createElement(\n      'div',\n      { className: 'wp-block-gutenblock-notice--' + props.attributes.type, 'data-type': props.attributes.type },\n      wp.element.createElement(\n        'p',\n        { className: 'wp-block-gutenblock-notice__title' },\n        props.attributes.title\n      ),\n      wp.element.createElement(\n        'p',\n        { className: 'wp-block-gutenblock-notice__content' },\n        props.attributes.content\n      )\n    );\n  }\n}));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ub3RpY2UvaW5kZXguanM/OWM4MSJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEJMT0NLOiBOb3RpY2VcbiAqXG4gKiBEaXNwbGF5IGEgbm90aWNlIGJsb2NrXG4gKiA0IHR5cGVzIGFyZSBhdmFpbGFibGUgOiBUaXBzLCBXYXJuaW5nLCBBdm9pZCwgSW5mb1xuICovXG5cbmltcG9ydCAnLi9zdHlsZS5zY3NzJztcbmltcG9ydCAnLi9lZGl0b3Iuc2Nzcyc7XG5cbnZhciBfXyA9IHdwLmkxOG4uX187XG5cblxuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5cbnZhciBfd3AkYmxvY2tzID0gd3AuYmxvY2tzLFxuICAgIHJlZ2lzdGVyQmxvY2tUeXBlID0gX3dwJGJsb2Nrcy5yZWdpc3RlckJsb2NrVHlwZSxcbiAgICBSaWNoVGV4dCA9IF93cCRibG9ja3MuUmljaFRleHQ7XG5cblxudmFyIHR5cGVzID0ge1xuICAnYWR2aWNlJzogX18oJ0FkdmljZScpLFxuICAnYXZvaWQnOiBfXygnQXZvaWQnKSxcbiAgJ3dhcm5pbmcnOiBfXygnV2FybmluZycpLFxuICAnaW5mbyc6IF9fKCdJbmZvcm1hdGlvbicpXG59O1xuXG5leHBvcnQgZGVmYXVsdCByZWdpc3RlckJsb2NrVHlwZSgnZ3V0ZW5ibG9jay9ub3RpY2UnLCB7XG4gIHRpdGxlOiBfXygnTm90aWNlJyksXG4gIGRlc2NyaXB0aW9uOiBfXygnUHV0IGZvcndhcmQgYSB0aXBzIG9yIGEgd2FybmluZycpLFxuICBjYXRlZ29yeTogJ2NvbW1vbicsXG4gIGljb246ICd3YXJuaW5nJyxcbiAga2V5d29yZHM6IFtfXygnd2FybmluZycpLCBfXygnaW5mb3JtYXRpb24nKSwgX18oJ3RpcHMnKV0sXG4gIGF0dHJpYnV0ZXM6IHtcbiAgICB0eXBlOiB7XG4gICAgICBzb3VyY2U6ICdhdHRyaWJ1dGUnLFxuICAgICAgc2VsZWN0b3I6ICcud3AtYmxvY2stZ3V0ZW5ibG9jay1ub3RpY2UnLFxuICAgICAgYXR0cmlidXRlOiAnZGF0YS10eXBlJyxcbiAgICAgIGRlZmF1bHQ6IE9iamVjdC5rZXlzKHR5cGVzKVswXVxuICAgIH0sXG4gICAgdGl0bGU6IHtcbiAgICAgIHNvdXJjZTogJ3RleHQnLFxuICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICBzZWxlY3RvcjogJy53cC1ibG9jay1ndXRlbmJsb2NrLW5vdGljZV9fdGl0bGUnLFxuICAgICAgZGVmYXVsdDogdHlwZXMuYWR2aWNlXG4gICAgfSxcbiAgICBjb250ZW50OiB7XG4gICAgICB0eXBlOiAnYXJyYXknLFxuICAgICAgc291cmNlOiAnY2hpbGRyZW4nLFxuICAgICAgc2VsZWN0b3I6ICcud3AtYmxvY2stZ3V0ZW5ibG9jay1ub3RpY2VfX2NvbnRlbnQnXG4gICAgfVxuICB9LFxuICBlZGl0OiBmdW5jdGlvbiBlZGl0KHByb3BzKSB7XG5cbiAgICB2YXIgb3B0aW9ucyA9IFtdO1xuICAgIF8uZWFjaCh0eXBlcywgZnVuY3Rpb24gKG9iaiwga2V5KSB7XG4gICAgICBvcHRpb25zLnB1c2god3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAnb3B0aW9uJyxcbiAgICAgICAgeyB2YWx1ZToga2V5IH0sXG4gICAgICAgIG9ialxuICAgICAgKSk7XG4gICAgfSk7XG5cbiAgICB2YXIgb25DaGFuZ2VDb250ZW50ID0gZnVuY3Rpb24gb25DaGFuZ2VDb250ZW50KHZhbHVlKSB7XG4gICAgICBwcm9wcy5zZXRBdHRyaWJ1dGVzKHsgY29udGVudDogdmFsdWUgfSk7XG4gICAgfTtcblxuICAgIHZhciBvbkNoYW5nZVR5cGUgPSBmdW5jdGlvbiBvbkNoYW5nZVR5cGUoZXZlbnQpIHtcbiAgICAgIHByb3BzLnNldEF0dHJpYnV0ZXMoeyB0eXBlOiBldmVudC50YXJnZXQudmFsdWUsIHRpdGxlOiB0eXBlc1tldmVudC50YXJnZXQudmFsdWVdIH0pO1xuICAgIH07XG5cbiAgICByZXR1cm4gd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuICAgICAgJ2RpdicsXG4gICAgICB7IGNsYXNzTmFtZTogY2xhc3NuYW1lcyhwcm9wcy5jbGFzc05hbWUsIHByb3BzLmNsYXNzTmFtZSArICctLScgKyBwcm9wcy5hdHRyaWJ1dGVzLnR5cGUpIH0sXG4gICAgICAhIXByb3BzLmZvY3VzID8gd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAnc2VsZWN0JyxcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6ICd0eXBlJyxcbiAgICAgICAgICBvbkNoYW5nZTogb25DaGFuZ2VUeXBlLFxuICAgICAgICAgIHZhbHVlOiBwcm9wcy5hdHRyaWJ1dGVzLnR5cGVcbiAgICAgICAgfSxcbiAgICAgICAgb3B0aW9uc1xuICAgICAgKSA6IHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgJ3AnLFxuICAgICAgICB7IGNsYXNzTmFtZTogJ3dwLWJsb2NrLWd1dGVuYmxvY2stbm90aWNlX190aXRsZScgfSxcbiAgICAgICAgcHJvcHMuYXR0cmlidXRlcy50aXRsZVxuICAgICAgKSxcbiAgICAgIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChSaWNoVGV4dCwge1xuICAgICAgICB0YWdOYW1lOiAncCcsXG4gICAgICAgIHBsYWNlaG9sZGVyOiBfXygnWW91ciB0aXAvd2FybmluZyBjb250ZW50JyksXG4gICAgICAgIHZhbHVlOiBwcm9wcy5hdHRyaWJ1dGVzLmNvbnRlbnQsXG4gICAgICAgIGNsYXNzTmFtZTogJ3dwLWJsb2NrLWd1dGVuYmxvY2stbm90aWNlX19jb250ZW50JyxcbiAgICAgICAgb25DaGFuZ2U6IG9uQ2hhbmdlQ29udGVudCxcbiAgICAgICAgZm9jdXM6IHByb3BzLmZvY3VzXG4gICAgICB9KVxuICAgICk7XG4gIH0sXG4gIHNhdmU6IGZ1bmN0aW9uIHNhdmUocHJvcHMpIHtcbiAgICByZXR1cm4gd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuICAgICAgJ2RpdicsXG4gICAgICB7IGNsYXNzTmFtZTogJ3dwLWJsb2NrLWd1dGVuYmxvY2stbm90aWNlLS0nICsgcHJvcHMuYXR0cmlidXRlcy50eXBlLCAnZGF0YS10eXBlJzogcHJvcHMuYXR0cmlidXRlcy50eXBlIH0sXG4gICAgICB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdwJyxcbiAgICAgICAgeyBjbGFzc05hbWU6ICd3cC1ibG9jay1ndXRlbmJsb2NrLW5vdGljZV9fdGl0bGUnIH0sXG4gICAgICAgIHByb3BzLmF0dHJpYnV0ZXMudGl0bGVcbiAgICAgICksXG4gICAgICB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdwJyxcbiAgICAgICAgeyBjbGFzc05hbWU6ICd3cC1ibG9jay1ndXRlbmJsb2NrLW5vdGljZV9fY29udGVudCcgfSxcbiAgICAgICAgcHJvcHMuYXR0cmlidXRlcy5jb250ZW50XG4gICAgICApXG4gICAgKTtcbiAgfVxufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvbm90aWNlL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/*!*******************************!*\
  !*** ./src/notice/style.scss ***!
  \*******************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ub3RpY2Uvc3R5bGUuc2Nzcz9iMzMyIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvbm90aWNlL3N0eWxlLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///2\n");

/***/ }),
/* 3 */
/*!********************************!*\
  !*** ./src/notice/editor.scss ***!
  \********************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ub3RpY2UvZWRpdG9yLnNjc3M/MWM2ZCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL25vdGljZS9lZGl0b3Iuc2Nzc1xuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///3\n");

/***/ }),
/* 4 */
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/*! dynamic exports provided */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!\n  Copyright (c) 2016 Jed Watson.\n  Licensed under the MIT License (MIT), see\n  http://jedwatson.github.io/classnames\n*/\n/* global define */\n\n(function () {\n\t'use strict';\n\n\tvar hasOwn = {}.hasOwnProperty;\n\n\tfunction classNames () {\n\t\tvar classes = [];\n\n\t\tfor (var i = 0; i < arguments.length; i++) {\n\t\t\tvar arg = arguments[i];\n\t\t\tif (!arg) continue;\n\n\t\t\tvar argType = typeof arg;\n\n\t\t\tif (argType === 'string' || argType === 'number') {\n\t\t\t\tclasses.push(arg);\n\t\t\t} else if (Array.isArray(arg)) {\n\t\t\t\tclasses.push(classNames.apply(null, arg));\n\t\t\t} else if (argType === 'object') {\n\t\t\t\tfor (var key in arg) {\n\t\t\t\t\tif (hasOwn.call(arg, key) && arg[key]) {\n\t\t\t\t\t\tclasses.push(key);\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\n\t\treturn classes.join(' ');\n\t}\n\n\tif (typeof module !== 'undefined' && module.exports) {\n\t\tmodule.exports = classNames;\n\t} else if (true) {\n\t\t// register as 'classnames', consistent with npm package name\n\t\t!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {\n\t\t\treturn classNames;\n\t\t}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n\t} else {\n\t\twindow.classNames = classNames;\n\t}\n}());\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jbGFzc25hbWVzL2luZGV4LmpzPzFkNmUiXSwic291cmNlc0NvbnRlbnQiOlsiLyohXG4gIENvcHlyaWdodCAoYykgMjAxNiBKZWQgV2F0c29uLlxuICBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKE1JVCksIHNlZVxuICBodHRwOi8vamVkd2F0c29uLmdpdGh1Yi5pby9jbGFzc25hbWVzXG4qL1xuLyogZ2xvYmFsIGRlZmluZSAqL1xuXG4oZnVuY3Rpb24gKCkge1xuXHQndXNlIHN0cmljdCc7XG5cblx0dmFyIGhhc093biA9IHt9Lmhhc093blByb3BlcnR5O1xuXG5cdGZ1bmN0aW9uIGNsYXNzTmFtZXMgKCkge1xuXHRcdHZhciBjbGFzc2VzID0gW107XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGFyZyA9IGFyZ3VtZW50c1tpXTtcblx0XHRcdGlmICghYXJnKSBjb250aW51ZTtcblxuXHRcdFx0dmFyIGFyZ1R5cGUgPSB0eXBlb2YgYXJnO1xuXG5cdFx0XHRpZiAoYXJnVHlwZSA9PT0gJ3N0cmluZycgfHwgYXJnVHlwZSA9PT0gJ251bWJlcicpIHtcblx0XHRcdFx0Y2xhc3Nlcy5wdXNoKGFyZyk7XG5cdFx0XHR9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoYXJnKSkge1xuXHRcdFx0XHRjbGFzc2VzLnB1c2goY2xhc3NOYW1lcy5hcHBseShudWxsLCBhcmcpKTtcblx0XHRcdH0gZWxzZSBpZiAoYXJnVHlwZSA9PT0gJ29iamVjdCcpIHtcblx0XHRcdFx0Zm9yICh2YXIga2V5IGluIGFyZykge1xuXHRcdFx0XHRcdGlmIChoYXNPd24uY2FsbChhcmcsIGtleSkgJiYgYXJnW2tleV0pIHtcblx0XHRcdFx0XHRcdGNsYXNzZXMucHVzaChrZXkpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBjbGFzc2VzLmpvaW4oJyAnKTtcblx0fVxuXG5cdGlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyAmJiBtb2R1bGUuZXhwb3J0cykge1xuXHRcdG1vZHVsZS5leHBvcnRzID0gY2xhc3NOYW1lcztcblx0fSBlbHNlIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBkZWZpbmUuYW1kID09PSAnb2JqZWN0JyAmJiBkZWZpbmUuYW1kKSB7XG5cdFx0Ly8gcmVnaXN0ZXIgYXMgJ2NsYXNzbmFtZXMnLCBjb25zaXN0ZW50IHdpdGggbnBtIHBhY2thZ2UgbmFtZVxuXHRcdGRlZmluZSgnY2xhc3NuYW1lcycsIFtdLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZXR1cm4gY2xhc3NOYW1lcztcblx0XHR9KTtcblx0fSBlbHNlIHtcblx0XHR3aW5kb3cuY2xhc3NOYW1lcyA9IGNsYXNzTmFtZXM7XG5cdH1cbn0oKSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jbGFzc25hbWVzL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///4\n");

/***/ })
/******/ ]);