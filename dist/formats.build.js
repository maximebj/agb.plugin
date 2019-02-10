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
/*!************************!*\
  !*** ./src/formats.js ***!
  \************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__formats_color__ = __webpack_require__(/*! ./formats/color */ 1);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__formats_color___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__formats_color__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__formats_code__ = __webpack_require__(/*! ./formats/code */ 2);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__formats_code___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__formats_code__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__formats_strike__ = __webpack_require__(/*! ./formats/strike */ 3);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__formats_strike___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__formats_strike__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__formats_superscript__ = __webpack_require__(/*! ./formats/superscript */ 4);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__formats_superscript___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__formats_superscript__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__formats_subscript__ = __webpack_require__(/*! ./formats/subscript */ 5);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__formats_subscript___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__formats_subscript__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__formats_remove__ = __webpack_require__(/*! ./formats/remove */ 6);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__formats_remove___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__formats_remove__);\n\n// Formats\n\n\n\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9mb3JtYXRzLmpzP2I0YzciXSwic291cmNlc0NvbnRlbnQiOlsiXG4vLyBGb3JtYXRzXG5pbXBvcnQgJy4vZm9ybWF0cy9jb2xvcic7XG5pbXBvcnQgJy4vZm9ybWF0cy9jb2RlJztcbmltcG9ydCAnLi9mb3JtYXRzL3N0cmlrZSc7XG5pbXBvcnQgJy4vZm9ybWF0cy9zdXBlcnNjcmlwdCc7XG5pbXBvcnQgJy4vZm9ybWF0cy9zdWJzY3JpcHQnO1xuaW1wb3J0ICcuL2Zvcm1hdHMvcmVtb3ZlJztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9mb3JtYXRzLmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!************************************!*\
  !*** ./src/formats/color/index.js ***!
  \************************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("(function (wp) {\n\n  if (advancedGutenbergBlocksFormats.buttons.includes('color')) {\n    wp.richText.registerFormatType('advanced-gutenberg-blocks/color-format', {\n      title: wp.i18n.__('Color', 'advanced-gutenberg-blocks'),\n      tagName: 'span',\n      className: null,\n      edit: function edit(props) {\n        return wp.element.createElement(wp.editor.RichTextToolbarButton, {\n          icon: 'admin-appearance',\n          title: wp.i18n.__('Color', 'advanced-gutenberg-blocks'),\n          onClick: function onClick() {\n            props.onChange(wp.richText.toggleFormat(props.value, { type: 'advanced-gutenberg-blocks/color-format' }));\n          },\n          isActive: props.isActive\n        });\n      }\n    });\n  }\n\n  if (advancedGutenbergBlocksFormats.buttons.includes('code')) {\n    wp.richText.registerFormatType('advanced-gutenberg-blocks/code-format', {\n      title: wp.i18n.__('Code', 'advanced-gutenberg-blocks'),\n      tagName: 'code',\n      className: null,\n      edit: function edit(props) {\n        return wp.element.createElement(wp.editor.RichTextToolbarButton, {\n          icon: 'editor-code',\n          title: wp.i18n.__('Code', 'advanced-gutenberg-blocks'),\n          onClick: function onClick() {\n            props.onChange(wp.richText.toggleFormat(props.value, { type: 'advanced-gutenberg-blocks/code-format' }));\n          },\n          isActive: props.isActive\n        });\n      }\n    });\n  }\n\n  if (advancedGutenbergBlocksFormats.buttons.includes('strike')) {\n    wp.richText.registerFormatType('advanced-gutenberg-blocks/strike-format', {\n      title: wp.i18n.__('Strike Trough', 'advanced-gutenberg-blocks'),\n      tagName: 'del',\n      className: null,\n      edit: function edit(props) {\n        return wp.element.createElement(wp.editor.RichTextToolbarButton, {\n          icon: 'editor-strikethrough',\n          title: wp.i18n.__('Strike Trough', 'advanced-gutenberg-blocks'),\n          onClick: function onClick() {\n            props.onChange(wp.richText.toggleFormat(props.value, { type: 'advanced-gutenberg-blocks/strike-format' }));\n          },\n          isActive: props.isActive\n        });\n      }\n    });\n  }\n\n  if (advancedGutenbergBlocksFormats.buttons.includes('superscript')) {\n    wp.richText.registerFormatType('advanced-gutenberg-blocks/sup-format', {\n      title: wp.i18n.__('Superscript', 'advanced-gutenberg-blocks'),\n      tagName: 'sup',\n      className: null,\n      edit: function edit(props) {\n        return wp.element.createElement(wp.editor.RichTextToolbarButton, {\n          icon: 'editor-textcolor',\n          title: wp.i18n.__('Superscript', 'advanced-gutenberg-blocks'),\n          onClick: function onClick() {\n            props.onChange(wp.richText.toggleFormat(props.value, { type: 'advanced-gutenberg-blocks/sup-format' }));\n          },\n          isActive: props.isActive\n        });\n      }\n    });\n  }\n\n  if (advancedGutenbergBlocksFormats.buttons.includes('subscript')) {\n    wp.richText.registerFormatType('advanced-gutenberg-blocks/sub-format', {\n      title: wp.i18n.__('Subrscript', 'advanced-gutenberg-blocks'),\n      tagName: 'sub',\n      className: null,\n      edit: function edit(props) {\n        return wp.element.createElement(wp.editor.RichTextToolbarButton, {\n          icon: 'editor-textcolor',\n          title: wp.i18n.__('Subscript', 'advanced-gutenberg-blocks'),\n          onClick: function onClick() {\n            props.onChange(wp.richText.toggleFormat(props.value, { type: 'advanced-gutenberg-blocks/sub-format' }));\n          },\n          isActive: props.isActive\n        });\n      }\n    });\n  }\n\n  if (advancedGutenbergBlocksFormats.buttons.includes('remove')) {\n    wp.richText.registerFormatType('advanced-gutenberg-blocks/remove-format', {\n      title: wp.i18n.__('Remove formatting', 'advanced-gutenberg-blocks'),\n      tagName: '<span>',\n      className: null,\n      edit: function edit(props) {\n        return wp.element.createElement(wp.editor.RichTextToolbarButton, {\n          icon: 'editor-removeformatting',\n          title: wp.i18n.__('Remove formatting', 'advanced-gutenberg-blocks'),\n          onClick: function onClick() {\n            props.onChange(wp.richText.removeFormat(props.value, { type: 'advanced-gutenberg-blocks/remove-format' }));\n          },\n          isActive: props.isActive\n        });\n      }\n    });\n  }\n})(window.wp);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9mb3JtYXRzL2NvbG9yL2luZGV4LmpzPzZkZmIiXSwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uICh3cCkge1xuXG4gIGlmIChhZHZhbmNlZEd1dGVuYmVyZ0Jsb2Nrc0Zvcm1hdHMuYnV0dG9ucy5pbmNsdWRlcygnY29sb3InKSkge1xuICAgIHdwLnJpY2hUZXh0LnJlZ2lzdGVyRm9ybWF0VHlwZSgnYWR2YW5jZWQtZ3V0ZW5iZXJnLWJsb2Nrcy9jb2xvci1mb3JtYXQnLCB7XG4gICAgICB0aXRsZTogd3AuaTE4bi5fXygnQ29sb3InLCAnYWR2YW5jZWQtZ3V0ZW5iZXJnLWJsb2NrcycpLFxuICAgICAgdGFnTmFtZTogJ3NwYW4nLFxuICAgICAgY2xhc3NOYW1lOiBudWxsLFxuICAgICAgZWRpdDogZnVuY3Rpb24gZWRpdChwcm9wcykge1xuICAgICAgICByZXR1cm4gd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KHdwLmVkaXRvci5SaWNoVGV4dFRvb2xiYXJCdXR0b24sIHtcbiAgICAgICAgICBpY29uOiAnYWRtaW4tYXBwZWFyYW5jZScsXG4gICAgICAgICAgdGl0bGU6IHdwLmkxOG4uX18oJ0NvbG9yJywgJ2FkdmFuY2VkLWd1dGVuYmVyZy1ibG9ja3MnKSxcbiAgICAgICAgICBvbkNsaWNrOiBmdW5jdGlvbiBvbkNsaWNrKCkge1xuICAgICAgICAgICAgcHJvcHMub25DaGFuZ2Uod3AucmljaFRleHQudG9nZ2xlRm9ybWF0KHByb3BzLnZhbHVlLCB7IHR5cGU6ICdhZHZhbmNlZC1ndXRlbmJlcmctYmxvY2tzL2NvbG9yLWZvcm1hdCcgfSkpO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgaXNBY3RpdmU6IHByb3BzLmlzQWN0aXZlXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgaWYgKGFkdmFuY2VkR3V0ZW5iZXJnQmxvY2tzRm9ybWF0cy5idXR0b25zLmluY2x1ZGVzKCdjb2RlJykpIHtcbiAgICB3cC5yaWNoVGV4dC5yZWdpc3RlckZvcm1hdFR5cGUoJ2FkdmFuY2VkLWd1dGVuYmVyZy1ibG9ja3MvY29kZS1mb3JtYXQnLCB7XG4gICAgICB0aXRsZTogd3AuaTE4bi5fXygnQ29kZScsICdhZHZhbmNlZC1ndXRlbmJlcmctYmxvY2tzJyksXG4gICAgICB0YWdOYW1lOiAnY29kZScsXG4gICAgICBjbGFzc05hbWU6IG51bGwsXG4gICAgICBlZGl0OiBmdW5jdGlvbiBlZGl0KHByb3BzKSB7XG4gICAgICAgIHJldHVybiB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQod3AuZWRpdG9yLlJpY2hUZXh0VG9vbGJhckJ1dHRvbiwge1xuICAgICAgICAgIGljb246ICdlZGl0b3ItY29kZScsXG4gICAgICAgICAgdGl0bGU6IHdwLmkxOG4uX18oJ0NvZGUnLCAnYWR2YW5jZWQtZ3V0ZW5iZXJnLWJsb2NrcycpLFxuICAgICAgICAgIG9uQ2xpY2s6IGZ1bmN0aW9uIG9uQ2xpY2soKSB7XG4gICAgICAgICAgICBwcm9wcy5vbkNoYW5nZSh3cC5yaWNoVGV4dC50b2dnbGVGb3JtYXQocHJvcHMudmFsdWUsIHsgdHlwZTogJ2FkdmFuY2VkLWd1dGVuYmVyZy1ibG9ja3MvY29kZS1mb3JtYXQnIH0pKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIGlzQWN0aXZlOiBwcm9wcy5pc0FjdGl2ZVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGlmIChhZHZhbmNlZEd1dGVuYmVyZ0Jsb2Nrc0Zvcm1hdHMuYnV0dG9ucy5pbmNsdWRlcygnc3RyaWtlJykpIHtcbiAgICB3cC5yaWNoVGV4dC5yZWdpc3RlckZvcm1hdFR5cGUoJ2FkdmFuY2VkLWd1dGVuYmVyZy1ibG9ja3Mvc3RyaWtlLWZvcm1hdCcsIHtcbiAgICAgIHRpdGxlOiB3cC5pMThuLl9fKCdTdHJpa2UgVHJvdWdoJywgJ2FkdmFuY2VkLWd1dGVuYmVyZy1ibG9ja3MnKSxcbiAgICAgIHRhZ05hbWU6ICdkZWwnLFxuICAgICAgY2xhc3NOYW1lOiBudWxsLFxuICAgICAgZWRpdDogZnVuY3Rpb24gZWRpdChwcm9wcykge1xuICAgICAgICByZXR1cm4gd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KHdwLmVkaXRvci5SaWNoVGV4dFRvb2xiYXJCdXR0b24sIHtcbiAgICAgICAgICBpY29uOiAnZWRpdG9yLXN0cmlrZXRocm91Z2gnLFxuICAgICAgICAgIHRpdGxlOiB3cC5pMThuLl9fKCdTdHJpa2UgVHJvdWdoJywgJ2FkdmFuY2VkLWd1dGVuYmVyZy1ibG9ja3MnKSxcbiAgICAgICAgICBvbkNsaWNrOiBmdW5jdGlvbiBvbkNsaWNrKCkge1xuICAgICAgICAgICAgcHJvcHMub25DaGFuZ2Uod3AucmljaFRleHQudG9nZ2xlRm9ybWF0KHByb3BzLnZhbHVlLCB7IHR5cGU6ICdhZHZhbmNlZC1ndXRlbmJlcmctYmxvY2tzL3N0cmlrZS1mb3JtYXQnIH0pKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIGlzQWN0aXZlOiBwcm9wcy5pc0FjdGl2ZVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGlmIChhZHZhbmNlZEd1dGVuYmVyZ0Jsb2Nrc0Zvcm1hdHMuYnV0dG9ucy5pbmNsdWRlcygnc3VwZXJzY3JpcHQnKSkge1xuICAgIHdwLnJpY2hUZXh0LnJlZ2lzdGVyRm9ybWF0VHlwZSgnYWR2YW5jZWQtZ3V0ZW5iZXJnLWJsb2Nrcy9zdXAtZm9ybWF0Jywge1xuICAgICAgdGl0bGU6IHdwLmkxOG4uX18oJ1N1cGVyc2NyaXB0JywgJ2FkdmFuY2VkLWd1dGVuYmVyZy1ibG9ja3MnKSxcbiAgICAgIHRhZ05hbWU6ICdzdXAnLFxuICAgICAgY2xhc3NOYW1lOiBudWxsLFxuICAgICAgZWRpdDogZnVuY3Rpb24gZWRpdChwcm9wcykge1xuICAgICAgICByZXR1cm4gd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KHdwLmVkaXRvci5SaWNoVGV4dFRvb2xiYXJCdXR0b24sIHtcbiAgICAgICAgICBpY29uOiAnZWRpdG9yLXRleHRjb2xvcicsXG4gICAgICAgICAgdGl0bGU6IHdwLmkxOG4uX18oJ1N1cGVyc2NyaXB0JywgJ2FkdmFuY2VkLWd1dGVuYmVyZy1ibG9ja3MnKSxcbiAgICAgICAgICBvbkNsaWNrOiBmdW5jdGlvbiBvbkNsaWNrKCkge1xuICAgICAgICAgICAgcHJvcHMub25DaGFuZ2Uod3AucmljaFRleHQudG9nZ2xlRm9ybWF0KHByb3BzLnZhbHVlLCB7IHR5cGU6ICdhZHZhbmNlZC1ndXRlbmJlcmctYmxvY2tzL3N1cC1mb3JtYXQnIH0pKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIGlzQWN0aXZlOiBwcm9wcy5pc0FjdGl2ZVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGlmIChhZHZhbmNlZEd1dGVuYmVyZ0Jsb2Nrc0Zvcm1hdHMuYnV0dG9ucy5pbmNsdWRlcygnc3Vic2NyaXB0JykpIHtcbiAgICB3cC5yaWNoVGV4dC5yZWdpc3RlckZvcm1hdFR5cGUoJ2FkdmFuY2VkLWd1dGVuYmVyZy1ibG9ja3Mvc3ViLWZvcm1hdCcsIHtcbiAgICAgIHRpdGxlOiB3cC5pMThuLl9fKCdTdWJyc2NyaXB0JywgJ2FkdmFuY2VkLWd1dGVuYmVyZy1ibG9ja3MnKSxcbiAgICAgIHRhZ05hbWU6ICdzdWInLFxuICAgICAgY2xhc3NOYW1lOiBudWxsLFxuICAgICAgZWRpdDogZnVuY3Rpb24gZWRpdChwcm9wcykge1xuICAgICAgICByZXR1cm4gd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KHdwLmVkaXRvci5SaWNoVGV4dFRvb2xiYXJCdXR0b24sIHtcbiAgICAgICAgICBpY29uOiAnZWRpdG9yLXRleHRjb2xvcicsXG4gICAgICAgICAgdGl0bGU6IHdwLmkxOG4uX18oJ1N1YnNjcmlwdCcsICdhZHZhbmNlZC1ndXRlbmJlcmctYmxvY2tzJyksXG4gICAgICAgICAgb25DbGljazogZnVuY3Rpb24gb25DbGljaygpIHtcbiAgICAgICAgICAgIHByb3BzLm9uQ2hhbmdlKHdwLnJpY2hUZXh0LnRvZ2dsZUZvcm1hdChwcm9wcy52YWx1ZSwgeyB0eXBlOiAnYWR2YW5jZWQtZ3V0ZW5iZXJnLWJsb2Nrcy9zdWItZm9ybWF0JyB9KSk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBpc0FjdGl2ZTogcHJvcHMuaXNBY3RpdmVcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBpZiAoYWR2YW5jZWRHdXRlbmJlcmdCbG9ja3NGb3JtYXRzLmJ1dHRvbnMuaW5jbHVkZXMoJ3JlbW92ZScpKSB7XG4gICAgd3AucmljaFRleHQucmVnaXN0ZXJGb3JtYXRUeXBlKCdhZHZhbmNlZC1ndXRlbmJlcmctYmxvY2tzL3JlbW92ZS1mb3JtYXQnLCB7XG4gICAgICB0aXRsZTogd3AuaTE4bi5fXygnUmVtb3ZlIGZvcm1hdHRpbmcnLCAnYWR2YW5jZWQtZ3V0ZW5iZXJnLWJsb2NrcycpLFxuICAgICAgdGFnTmFtZTogJzxzcGFuPicsXG4gICAgICBjbGFzc05hbWU6IG51bGwsXG4gICAgICBlZGl0OiBmdW5jdGlvbiBlZGl0KHByb3BzKSB7XG4gICAgICAgIHJldHVybiB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQod3AuZWRpdG9yLlJpY2hUZXh0VG9vbGJhckJ1dHRvbiwge1xuICAgICAgICAgIGljb246ICdlZGl0b3ItcmVtb3ZlZm9ybWF0dGluZycsXG4gICAgICAgICAgdGl0bGU6IHdwLmkxOG4uX18oJ1JlbW92ZSBmb3JtYXR0aW5nJywgJ2FkdmFuY2VkLWd1dGVuYmVyZy1ibG9ja3MnKSxcbiAgICAgICAgICBvbkNsaWNrOiBmdW5jdGlvbiBvbkNsaWNrKCkge1xuICAgICAgICAgICAgcHJvcHMub25DaGFuZ2Uod3AucmljaFRleHQucmVtb3ZlRm9ybWF0KHByb3BzLnZhbHVlLCB7IHR5cGU6ICdhZHZhbmNlZC1ndXRlbmJlcmctYmxvY2tzL3JlbW92ZS1mb3JtYXQnIH0pKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIGlzQWN0aXZlOiBwcm9wcy5pc0FjdGl2ZVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufSkod2luZG93LndwKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9mb3JtYXRzL2NvbG9yL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/*!***********************************!*\
  !*** ./src/formats/code/index.js ***!
  \***********************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///2\n");

/***/ }),
/* 3 */
/*!*************************************!*\
  !*** ./src/formats/strike/index.js ***!
  \*************************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///3\n");

/***/ }),
/* 4 */
/*!******************************************!*\
  !*** ./src/formats/superscript/index.js ***!
  \******************************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNC5qcyIsInNvdXJjZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///4\n");

/***/ }),
/* 5 */
/*!****************************************!*\
  !*** ./src/formats/subscript/index.js ***!
  \****************************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5qcyIsInNvdXJjZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///5\n");

/***/ }),
/* 6 */
/*!*************************************!*\
  !*** ./src/formats/remove/index.js ***!
  \*************************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNi5qcyIsInNvdXJjZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///6\n");

/***/ })
/******/ ]);