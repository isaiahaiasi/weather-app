/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/style.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  /* * DESIGN TOKENS * */\n  /* COLORS */\n  --col-light-text: #f8e9d5;\n  --col-light-mid: #f5d3a6;\n  --col-light-secondary: #f1b64e;\n\n  --col-primary-light: #566a69;\n  --col-primary-mid: #142f35;\n  --col-primary-dark: #091219;\n\n  --col-secondary: #da5341;\n  --col-secondary-dark: #7a100c;\n\n  --grey-light: rgb(197, 197, 197);\n  --grey-default-mid: rgb(145, 145, 145);\n  --grey-default-dark: rgb(82, 82, 82);\n\n  --col-card: rgba(0, 0, 0, 0.3);\n\n  /* Z-INDEX SCHEMA */\n  --z-behind: -5;\n  --z-bg: 0;\n  --z-base: 10;\n  --z-element: 20;\n  --z-text: 50;\n\n  /* POSITIONS */\n  --top-height: 2rem; /* Header bar */\n  --bottom-height: 5rem; /* Search box */\n\n  /* * GLOBAL PREFERENCES * */\n  font-size: 1.5rem;\n  font-family: sans-serif;\n  color: var(--col-light-text);\n}\n\nbody {\n  box-sizing: border-box;\n  margin: 0;\n  min-height: 100vh;\n  padding: 0;\n  padding-top: var(--top-height);\n  padding-bottom: var(--bottom-height);\n  z-index: var(--z-bg);\n}\n\n/* General */\n.shadow {\n  box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);\n}\n\n/* MAIN */\n\n.main-content {\n  box-sizing: border-box;\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: var(--z-bg);\n\n  width: 100%;\n  --height: calc(100vh - var(--top-height) - var(--bottom-height));\n  height: var(--height);\n  min-height: var(--height);\n  padding-bottom: 2.5rem;\n\n  background: linear-gradient(\n    var(--col-primary-light),\n    var(--col-primary-mid),\n    var(--col-primary-dark)\n  );\n}\n\n.weather-content {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-content: center;\n  padding: 0.25rem;\n  text-shadow: 0.1rem 0.1rem 0.25rem var(--col-primary-dark);\n}\n\n.weather-card {\n  box-sizing: border-box;\n  height: 8rem;\n  width: 100%;\n  max-width: 20rem;\n  margin: 0.5rem auto;\n  position: relative;\n  z-index: 1;\n}\n.weather-card::before {\n  content: '';\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  opacity: 0.4;\n  background: var(--col-primary-dark);\n  z-index: -1;\n  border-radius: 10px;\n}\n\n.info-container {\n  height: 10rem;\n  padding: 0.2rem 0.5rem;\n}\n\n.icon-container {\n  text-align: center;\n  padding-top: 3rem;\n}\n\n.location {\n  position: absolute;\n  bottom: 0.3rem;\n  right: 0;\n  left: 0;\n  text-align: center;\n  font-size: 2rem;\n}\n\n/* WEATHER INFO CLASSES */\n\n.weather-info-container {\n  display: grid;\n  grid-template-columns: 50% 50%;\n}\n.weather-description {\n  text-align: center;\n  font-size: 1.5rem;\n}\n\n.weather-current-temp {\n  font-size: 5rem;\n  text-align: center;\n}\n\n.weather-details {\n  padding-top: 1rem;\n  padding-left: 0.2rem;\n  text-align: right;\n  line-height: 1.45em;\n}\n\n/* TOP */\n\n.top {\n  box-sizing: border-box;\n  position: fixed;\n  top: 0;\n  height: var(--top-height);\n  width: 100%;\n\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0.3em;\n\n  background: var(--col-light-mid);\n  color: var(--col-secondary);\n\n  z-index: var(--z-base);\n}\n\n/* SWITCH STYLES */\n\n.switch {\n  user-select: none;\n  position: relative;\n  box-sizing: border-box;\n  display: flex;\n  justify-content: space-between;\n  height: 100%;\n  background: var(--col-primary-light);\n  box-shadow: inset 0px 3px 10px var(--col-primary-mid);\n  border-radius: 100px;\n  width: 3rem;\n  z-index: var(--z-element);\n  padding: 0 0.4rem;\n}\n\n.switch > input {\n  opacity: 0;\n  position: absolute;\n  box-sizing: border-box;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  margin: 0;\n}\n\n.switch > input ~ .switch-thumb {\n  content: '';\n  position: absolute;\n  left: 0;\n  background: var(--col-light-text);\n  /* (slightly larger thumb) */\n  height: calc(100% + 4px);\n  transform: translateY(-2px);\n  width: 1.5rem;\n  border-radius: 50%;\n  z-index: 1;\n  transition: 0.3s cubic-bezier(0.53, -0.37, 0.53, 1.37);\n}\n\n.switch > input:checked ~ .switch-thumb {\n  transform: translateY(-2px) translateX(1.5rem);\n}\n\n.switch-thumb::before {\n  content: '';\n  z-index: -50;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n  box-shadow: 0 0 0.4rem var(--col-primary-light);\n  opacity: 0.7;\n}\n\n.switch-label {\n  margin: 0.12rem 0;\n  z-index: 2;\n  color: var(--col-light-text);\n}\n\n.switch > input:checked ~ .on,\n.switch > input:not(:checked) ~ .off {\n  color: var(--col-secondary);\n  font-weight: bold;\n  transition: 0.3s;\n}\n\n.gh-logo {\n  height: 100%;\n  width: 1.5rem;\n  border-radius: 50%;\n  background: var(--col-secondary);\n}\n\n/* SEARCH */\n\n.search-container {\n  position: fixed;\n  box-sizing: border-box;\n  height: var(--bottom-height);\n  bottom: 0;\n  background: var(--col-light-mid);\n  width: 100%;\n  padding: 0.5rem 1rem;\n\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n\n  color: var(--col-secondary);\n}\n\n.search-bar:hover,\n.search-bar:focus-within {\n  box-shadow: inset 0 0 10px var(--col-secondary-dark);\n  /* border: 2px solid var(--col-light-text); */\n}\n\n.search-bar {\n  position: relative;\n  box-sizing: border-box;\n  height: 1.5rem;\n  width: 100%;\n  max-width: 20rem;\n  margin-top: 0.5rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: var(--col-secondary);\n  color: var(--col-light-text);\n  border-radius: 2rem;\n}\n\n.search-input {\n  color: var(--col-light-text);\n  background: none;\n  outline: none;\n  border: none;\n  font-size: 1rem;\n  z-index: 1;\n  text-align: center;\n  max-width: 75%;\n}\n\n.search-input::placeholder {\n  color: var(--col-light-text);\n  font-size: 0.8rem;\n}\n\n.search-input:focus::placeholder {\n  color: transparent;\n}\n\n.search-icon-placeholder {\n  position: absolute;\n  right: 0;\n  height: 1rem;\n  width: 1rem;\n  margin: 0 0.2rem;\n  border-radius: 50%;\n  border: 2px solid var(--col-light-mid);\n  background: none;\n}\n\n.search-icon-placeholder.left {\n  left: 0;\n  border-color: var(--col-secondary);\n  opacity: 0;\n}\n\n.footer {\n  font-size: 0.7rem;\n  text-align: center;\n}\n", "",{"version":3,"sources":["webpack://./src/styles/style.css"],"names":[],"mappings":"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","sourcesContent":[":root {\n  /* * DESIGN TOKENS * */\n  /* COLORS */\n  --col-light-text: #f8e9d5;\n  --col-light-mid: #f5d3a6;\n  --col-light-secondary: #f1b64e;\n\n  --col-primary-light: #566a69;\n  --col-primary-mid: #142f35;\n  --col-primary-dark: #091219;\n\n  --col-secondary: #da5341;\n  --col-secondary-dark: #7a100c;\n\n  --grey-light: rgb(197, 197, 197);\n  --grey-default-mid: rgb(145, 145, 145);\n  --grey-default-dark: rgb(82, 82, 82);\n\n  --col-card: rgba(0, 0, 0, 0.3);\n\n  /* Z-INDEX SCHEMA */\n  --z-behind: -5;\n  --z-bg: 0;\n  --z-base: 10;\n  --z-element: 20;\n  --z-text: 50;\n\n  /* POSITIONS */\n  --top-height: 2rem; /* Header bar */\n  --bottom-height: 5rem; /* Search box */\n\n  /* * GLOBAL PREFERENCES * */\n  font-size: 1.5rem;\n  font-family: sans-serif;\n  color: var(--col-light-text);\n}\n\nbody {\n  box-sizing: border-box;\n  margin: 0;\n  min-height: 100vh;\n  padding: 0;\n  padding-top: var(--top-height);\n  padding-bottom: var(--bottom-height);\n  z-index: var(--z-bg);\n}\n\n/* General */\n.shadow {\n  box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);\n}\n\n/* MAIN */\n\n.main-content {\n  box-sizing: border-box;\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: var(--z-bg);\n\n  width: 100%;\n  --height: calc(100vh - var(--top-height) - var(--bottom-height));\n  height: var(--height);\n  min-height: var(--height);\n  padding-bottom: 2.5rem;\n\n  background: linear-gradient(\n    var(--col-primary-light),\n    var(--col-primary-mid),\n    var(--col-primary-dark)\n  );\n}\n\n.weather-content {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-content: center;\n  padding: 0.25rem;\n  text-shadow: 0.1rem 0.1rem 0.25rem var(--col-primary-dark);\n}\n\n.weather-card {\n  box-sizing: border-box;\n  height: 8rem;\n  width: 100%;\n  max-width: 20rem;\n  margin: 0.5rem auto;\n  position: relative;\n  z-index: 1;\n}\n.weather-card::before {\n  content: '';\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  opacity: 0.4;\n  background: var(--col-primary-dark);\n  z-index: -1;\n  border-radius: 10px;\n}\n\n.info-container {\n  height: 10rem;\n  padding: 0.2rem 0.5rem;\n}\n\n.icon-container {\n  text-align: center;\n  padding-top: 3rem;\n}\n\n.location {\n  position: absolute;\n  bottom: 0.3rem;\n  right: 0;\n  left: 0;\n  text-align: center;\n  font-size: 2rem;\n}\n\n/* WEATHER INFO CLASSES */\n\n.weather-info-container {\n  display: grid;\n  grid-template-columns: 50% 50%;\n}\n.weather-description {\n  text-align: center;\n  font-size: 1.5rem;\n}\n\n.weather-current-temp {\n  font-size: 5rem;\n  text-align: center;\n}\n\n.weather-details {\n  padding-top: 1rem;\n  padding-left: 0.2rem;\n  text-align: right;\n  line-height: 1.45em;\n}\n\n/* TOP */\n\n.top {\n  box-sizing: border-box;\n  position: fixed;\n  top: 0;\n  height: var(--top-height);\n  width: 100%;\n\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0.3em;\n\n  background: var(--col-light-mid);\n  color: var(--col-secondary);\n\n  z-index: var(--z-base);\n}\n\n/* SWITCH STYLES */\n\n.switch {\n  user-select: none;\n  position: relative;\n  box-sizing: border-box;\n  display: flex;\n  justify-content: space-between;\n  height: 100%;\n  background: var(--col-primary-light);\n  box-shadow: inset 0px 3px 10px var(--col-primary-mid);\n  border-radius: 100px;\n  width: 3rem;\n  z-index: var(--z-element);\n  padding: 0 0.4rem;\n}\n\n.switch > input {\n  opacity: 0;\n  position: absolute;\n  box-sizing: border-box;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  margin: 0;\n}\n\n.switch > input ~ .switch-thumb {\n  content: '';\n  position: absolute;\n  left: 0;\n  background: var(--col-light-text);\n  /* (slightly larger thumb) */\n  height: calc(100% + 4px);\n  transform: translateY(-2px);\n  width: 1.5rem;\n  border-radius: 50%;\n  z-index: 1;\n  transition: 0.3s cubic-bezier(0.53, -0.37, 0.53, 1.37);\n}\n\n.switch > input:checked ~ .switch-thumb {\n  transform: translateY(-2px) translateX(1.5rem);\n}\n\n.switch-thumb::before {\n  content: '';\n  z-index: -50;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n  box-shadow: 0 0 0.4rem var(--col-primary-light);\n  opacity: 0.7;\n}\n\n.switch-label {\n  margin: 0.12rem 0;\n  z-index: 2;\n  color: var(--col-light-text);\n}\n\n.switch > input:checked ~ .on,\n.switch > input:not(:checked) ~ .off {\n  color: var(--col-secondary);\n  font-weight: bold;\n  transition: 0.3s;\n}\n\n.gh-logo {\n  height: 100%;\n  width: 1.5rem;\n  border-radius: 50%;\n  background: var(--col-secondary);\n}\n\n/* SEARCH */\n\n.search-container {\n  position: fixed;\n  box-sizing: border-box;\n  height: var(--bottom-height);\n  bottom: 0;\n  background: var(--col-light-mid);\n  width: 100%;\n  padding: 0.5rem 1rem;\n\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n\n  color: var(--col-secondary);\n}\n\n.search-bar:hover,\n.search-bar:focus-within {\n  box-shadow: inset 0 0 10px var(--col-secondary-dark);\n  /* border: 2px solid var(--col-light-text); */\n}\n\n.search-bar {\n  position: relative;\n  box-sizing: border-box;\n  height: 1.5rem;\n  width: 100%;\n  max-width: 20rem;\n  margin-top: 0.5rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: var(--col-secondary);\n  color: var(--col-light-text);\n  border-radius: 2rem;\n}\n\n.search-input {\n  color: var(--col-light-text);\n  background: none;\n  outline: none;\n  border: none;\n  font-size: 1rem;\n  z-index: 1;\n  text-align: center;\n  max-width: 75%;\n}\n\n.search-input::placeholder {\n  color: var(--col-light-text);\n  font-size: 0.8rem;\n}\n\n.search-input:focus::placeholder {\n  color: transparent;\n}\n\n.search-icon-placeholder {\n  position: absolute;\n  right: 0;\n  height: 1rem;\n  width: 1rem;\n  margin: 0 0.2rem;\n  border-radius: 50%;\n  border: 2px solid var(--col-light-mid);\n  background: none;\n}\n\n.search-icon-placeholder.left {\n  left: 0;\n  border-color: var(--col-secondary);\n  opacity: 0;\n}\n\n.footer {\n  font-size: 0.7rem;\n  text-align: center;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!************************!*\
  !*** ./src/preload.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/style.css */ "./src/styles/style.css");
// Anything I need to preload


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3N0eWxlcy9zdHlsZS5jc3M/ZmY5NCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3ByZWxvYWQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDeUg7QUFDN0I7QUFDNUYsOEJBQThCLG1GQUEyQixDQUFDLHdHQUFxQztBQUMvRjtBQUNBLGlEQUFpRCx5RUFBeUUsNkJBQTZCLG1DQUFtQyxtQ0FBbUMsK0JBQStCLGdDQUFnQywrQkFBK0Isa0NBQWtDLHVDQUF1QywyQ0FBMkMseUNBQXlD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QUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLFVBQVUsS0FBSyxZQUFZLE9BQU8sV0FBVyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxjQUFjLFdBQVcsWUFBWSxhQUFhLGFBQWEsY0FBYyxTQUFTLEtBQUssTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLEtBQUssS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLFdBQVcsT0FBTyxhQUFhLE1BQU0sVUFBVSxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLFdBQVcsS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLFlBQVksVUFBVSxZQUFZLGFBQWEsWUFBWSxZQUFZLGNBQWMsYUFBYSxPQUFPLGFBQWEsTUFBTSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sTUFBTSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLFdBQVcsS0FBSyxVQUFVLFlBQVksYUFBYSxX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O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx3Q0FBd0MseUNBQXlDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBLHdGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7Ozs7Ozs7Ozs7QUNOQTtBQUM0QiIsImZpbGUiOiJwcmVsb2FkLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcbiAgLyogKiBERVNJR04gVE9LRU5TICogKi9cXG4gIC8qIENPTE9SUyAqL1xcbiAgLS1jb2wtbGlnaHQtdGV4dDogI2Y4ZTlkNTtcXG4gIC0tY29sLWxpZ2h0LW1pZDogI2Y1ZDNhNjtcXG4gIC0tY29sLWxpZ2h0LXNlY29uZGFyeTogI2YxYjY0ZTtcXG5cXG4gIC0tY29sLXByaW1hcnktbGlnaHQ6ICM1NjZhNjk7XFxuICAtLWNvbC1wcmltYXJ5LW1pZDogIzE0MmYzNTtcXG4gIC0tY29sLXByaW1hcnktZGFyazogIzA5MTIxOTtcXG5cXG4gIC0tY29sLXNlY29uZGFyeTogI2RhNTM0MTtcXG4gIC0tY29sLXNlY29uZGFyeS1kYXJrOiAjN2ExMDBjO1xcblxcbiAgLS1ncmV5LWxpZ2h0OiByZ2IoMTk3LCAxOTcsIDE5Nyk7XFxuICAtLWdyZXktZGVmYXVsdC1taWQ6IHJnYigxNDUsIDE0NSwgMTQ1KTtcXG4gIC0tZ3JleS1kZWZhdWx0LWRhcms6IHJnYig4MiwgODIsIDgyKTtcXG5cXG4gIC0tY29sLWNhcmQ6IHJnYmEoMCwgMCwgMCwgMC4zKTtcXG5cXG4gIC8qIFotSU5ERVggU0NIRU1BICovXFxuICAtLXotYmVoaW5kOiAtNTtcXG4gIC0tei1iZzogMDtcXG4gIC0tei1iYXNlOiAxMDtcXG4gIC0tei1lbGVtZW50OiAyMDtcXG4gIC0tei10ZXh0OiA1MDtcXG5cXG4gIC8qIFBPU0lUSU9OUyAqL1xcbiAgLS10b3AtaGVpZ2h0OiAycmVtOyAvKiBIZWFkZXIgYmFyICovXFxuICAtLWJvdHRvbS1oZWlnaHQ6IDVyZW07IC8qIFNlYXJjaCBib3ggKi9cXG5cXG4gIC8qICogR0xPQkFMIFBSRUZFUkVOQ0VTICogKi9cXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxuICBjb2xvcjogdmFyKC0tY29sLWxpZ2h0LXRleHQpO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBtYXJnaW46IDA7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gIHBhZGRpbmc6IDA7XFxuICBwYWRkaW5nLXRvcDogdmFyKC0tdG9wLWhlaWdodCk7XFxuICBwYWRkaW5nLWJvdHRvbTogdmFyKC0tYm90dG9tLWhlaWdodCk7XFxuICB6LWluZGV4OiB2YXIoLS16LWJnKTtcXG59XFxuXFxuLyogR2VuZXJhbCAqL1xcbi5zaGFkb3cge1xcbiAgYm94LXNoYWRvdzogMCAwIDE1cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xcbn1cXG5cXG4vKiBNQUlOICovXFxuXFxuLm1haW4tY29udGVudCB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHotaW5kZXg6IHZhcigtLXotYmcpO1xcblxcbiAgd2lkdGg6IDEwMCU7XFxuICAtLWhlaWdodDogY2FsYygxMDB2aCAtIHZhcigtLXRvcC1oZWlnaHQpIC0gdmFyKC0tYm90dG9tLWhlaWdodCkpO1xcbiAgaGVpZ2h0OiB2YXIoLS1oZWlnaHQpO1xcbiAgbWluLWhlaWdodDogdmFyKC0taGVpZ2h0KTtcXG4gIHBhZGRpbmctYm90dG9tOiAyLjVyZW07XFxuXFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXFxuICAgIHZhcigtLWNvbC1wcmltYXJ5LWxpZ2h0KSxcXG4gICAgdmFyKC0tY29sLXByaW1hcnktbWlkKSxcXG4gICAgdmFyKC0tY29sLXByaW1hcnktZGFyaylcXG4gICk7XFxufVxcblxcbi53ZWF0aGVyLWNvbnRlbnQge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDAuMjVyZW07XFxuICB0ZXh0LXNoYWRvdzogMC4xcmVtIDAuMXJlbSAwLjI1cmVtIHZhcigtLWNvbC1wcmltYXJ5LWRhcmspO1xcbn1cXG5cXG4ud2VhdGhlci1jYXJkIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBoZWlnaHQ6IDhyZW07XFxuICB3aWR0aDogMTAwJTtcXG4gIG1heC13aWR0aDogMjByZW07XFxuICBtYXJnaW46IDAuNXJlbSBhdXRvO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgei1pbmRleDogMTtcXG59XFxuLndlYXRoZXItY2FyZDo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6ICcnO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgb3BhY2l0eTogMC40O1xcbiAgYmFja2dyb3VuZDogdmFyKC0tY29sLXByaW1hcnktZGFyayk7XFxuICB6LWluZGV4OiAtMTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbi5pbmZvLWNvbnRhaW5lciB7XFxuICBoZWlnaHQ6IDEwcmVtO1xcbiAgcGFkZGluZzogMC4ycmVtIDAuNXJlbTtcXG59XFxuXFxuLmljb24tY29udGFpbmVyIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBhZGRpbmctdG9wOiAzcmVtO1xcbn1cXG5cXG4ubG9jYXRpb24ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm90dG9tOiAwLjNyZW07XFxuICByaWdodDogMDtcXG4gIGxlZnQ6IDA7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDJyZW07XFxufVxcblxcbi8qIFdFQVRIRVIgSU5GTyBDTEFTU0VTICovXFxuXFxuLndlYXRoZXItaW5mby1jb250YWluZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNTAlIDUwJTtcXG59XFxuLndlYXRoZXItZGVzY3JpcHRpb24ge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbi53ZWF0aGVyLWN1cnJlbnQtdGVtcCB7XFxuICBmb250LXNpemU6IDVyZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi53ZWF0aGVyLWRldGFpbHMge1xcbiAgcGFkZGluZy10b3A6IDFyZW07XFxuICBwYWRkaW5nLWxlZnQ6IDAuMnJlbTtcXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xcbiAgbGluZS1oZWlnaHQ6IDEuNDVlbTtcXG59XFxuXFxuLyogVE9QICovXFxuXFxuLnRvcCB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwO1xcbiAgaGVpZ2h0OiB2YXIoLS10b3AtaGVpZ2h0KTtcXG4gIHdpZHRoOiAxMDAlO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBwYWRkaW5nOiAwLjNlbTtcXG5cXG4gIGJhY2tncm91bmQ6IHZhcigtLWNvbC1saWdodC1taWQpO1xcbiAgY29sb3I6IHZhcigtLWNvbC1zZWNvbmRhcnkpO1xcblxcbiAgei1pbmRleDogdmFyKC0tei1iYXNlKTtcXG59XFxuXFxuLyogU1dJVENIIFNUWUxFUyAqL1xcblxcbi5zd2l0Y2gge1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJhY2tncm91bmQ6IHZhcigtLWNvbC1wcmltYXJ5LWxpZ2h0KTtcXG4gIGJveC1zaGFkb3c6IGluc2V0IDBweCAzcHggMTBweCB2YXIoLS1jb2wtcHJpbWFyeS1taWQpO1xcbiAgYm9yZGVyLXJhZGl1czogMTAwcHg7XFxuICB3aWR0aDogM3JlbTtcXG4gIHotaW5kZXg6IHZhcigtLXotZWxlbWVudCk7XFxuICBwYWRkaW5nOiAwIDAuNHJlbTtcXG59XFxuXFxuLnN3aXRjaCA+IGlucHV0IHtcXG4gIG9wYWNpdHk6IDA7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4uc3dpdGNoID4gaW5wdXQgfiAuc3dpdGNoLXRodW1iIHtcXG4gIGNvbnRlbnQ6ICcnO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMDtcXG4gIGJhY2tncm91bmQ6IHZhcigtLWNvbC1saWdodC10ZXh0KTtcXG4gIC8qIChzbGlnaHRseSBsYXJnZXIgdGh1bWIpICovXFxuICBoZWlnaHQ6IGNhbGMoMTAwJSArIDRweCk7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XFxuICB3aWR0aDogMS41cmVtO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgei1pbmRleDogMTtcXG4gIHRyYW5zaXRpb246IDAuM3MgY3ViaWMtYmV6aWVyKDAuNTMsIC0wLjM3LCAwLjUzLCAxLjM3KTtcXG59XFxuXFxuLnN3aXRjaCA+IGlucHV0OmNoZWNrZWQgfiAuc3dpdGNoLXRodW1iIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KSB0cmFuc2xhdGVYKDEuNXJlbSk7XFxufVxcblxcbi5zd2l0Y2gtdGh1bWI6OmJlZm9yZSB7XFxuICBjb250ZW50OiAnJztcXG4gIHotaW5kZXg6IC01MDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGJveC1zaGFkb3c6IDAgMCAwLjRyZW0gdmFyKC0tY29sLXByaW1hcnktbGlnaHQpO1xcbiAgb3BhY2l0eTogMC43O1xcbn1cXG5cXG4uc3dpdGNoLWxhYmVsIHtcXG4gIG1hcmdpbjogMC4xMnJlbSAwO1xcbiAgei1pbmRleDogMjtcXG4gIGNvbG9yOiB2YXIoLS1jb2wtbGlnaHQtdGV4dCk7XFxufVxcblxcbi5zd2l0Y2ggPiBpbnB1dDpjaGVja2VkIH4gLm9uLFxcbi5zd2l0Y2ggPiBpbnB1dDpub3QoOmNoZWNrZWQpIH4gLm9mZiB7XFxuICBjb2xvcjogdmFyKC0tY29sLXNlY29uZGFyeSk7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIHRyYW5zaXRpb246IDAuM3M7XFxufVxcblxcbi5naC1sb2dvIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxLjVyZW07XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2wtc2Vjb25kYXJ5KTtcXG59XFxuXFxuLyogU0VBUkNIICovXFxuXFxuLnNlYXJjaC1jb250YWluZXIge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGhlaWdodDogdmFyKC0tYm90dG9tLWhlaWdodCk7XFxuICBib3R0b206IDA7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2wtbGlnaHQtbWlkKTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMC41cmVtIDFyZW07XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICBjb2xvcjogdmFyKC0tY29sLXNlY29uZGFyeSk7XFxufVxcblxcbi5zZWFyY2gtYmFyOmhvdmVyLFxcbi5zZWFyY2gtYmFyOmZvY3VzLXdpdGhpbiB7XFxuICBib3gtc2hhZG93OiBpbnNldCAwIDAgMTBweCB2YXIoLS1jb2wtc2Vjb25kYXJ5LWRhcmspO1xcbiAgLyogYm9yZGVyOiAycHggc29saWQgdmFyKC0tY29sLWxpZ2h0LXRleHQpOyAqL1xcbn1cXG5cXG4uc2VhcmNoLWJhciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgaGVpZ2h0OiAxLjVyZW07XFxuICB3aWR0aDogMTAwJTtcXG4gIG1heC13aWR0aDogMjByZW07XFxuICBtYXJnaW4tdG9wOiAwLjVyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZDogdmFyKC0tY29sLXNlY29uZGFyeSk7XFxuICBjb2xvcjogdmFyKC0tY29sLWxpZ2h0LXRleHQpO1xcbiAgYm9yZGVyLXJhZGl1czogMnJlbTtcXG59XFxuXFxuLnNlYXJjaC1pbnB1dCB7XFxuICBjb2xvcjogdmFyKC0tY29sLWxpZ2h0LXRleHQpO1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBmb250LXNpemU6IDFyZW07XFxuICB6LWluZGV4OiAxO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbWF4LXdpZHRoOiA3NSU7XFxufVxcblxcbi5zZWFyY2gtaW5wdXQ6OnBsYWNlaG9sZGVyIHtcXG4gIGNvbG9yOiB2YXIoLS1jb2wtbGlnaHQtdGV4dCk7XFxuICBmb250LXNpemU6IDAuOHJlbTtcXG59XFxuXFxuLnNlYXJjaC1pbnB1dDpmb2N1czo6cGxhY2Vob2xkZXIge1xcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG4uc2VhcmNoLWljb24tcGxhY2Vob2xkZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDA7XFxuICBoZWlnaHQ6IDFyZW07XFxuICB3aWR0aDogMXJlbTtcXG4gIG1hcmdpbjogMCAwLjJyZW07XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1jb2wtbGlnaHQtbWlkKTtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxufVxcblxcbi5zZWFyY2gtaWNvbi1wbGFjZWhvbGRlci5sZWZ0IHtcXG4gIGxlZnQ6IDA7XFxuICBib3JkZXItY29sb3I6IHZhcigtLWNvbC1zZWNvbmRhcnkpO1xcbiAgb3BhY2l0eTogMDtcXG59XFxuXFxuLmZvb3RlciB7XFxuICBmb250LXNpemU6IDAuN3JlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9zdHlsZS5j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QjtBQUNuQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsWUFBWTtFQUNaLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLHNDQUFzQztFQUN0QyxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxPQUFPO0VBQ1Asa0NBQWtDO0VBQ2xDLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcbiAgLyogKiBERVNJR04gVE9LRU5TICogKi9cXG4gIC8qIENPTE9SUyAqL1xcbiAgLS1jb2wtbGlnaHQtdGV4dDogI2Y4ZTlkNTtcXG4gIC0tY29sLWxpZ2h0LW1pZDogI2Y1ZDNhNjtcXG4gIC0tY29sLWxpZ2h0LXNlY29uZGFyeTogI2YxYjY0ZTtcXG5cXG4gIC0tY29sLXByaW1hcnktbGlnaHQ6ICM1NjZhNjk7XFxuICAtLWNvbC1wcmltYXJ5LW1pZDogIzE0MmYzNTtcXG4gIC0tY29sLXByaW1hcnktZGFyazogIzA5MTIxOTtcXG5cXG4gIC0tY29sLXNlY29uZGFyeTogI2RhNTM0MTtcXG4gIC0tY29sLXNlY29uZGFyeS1kYXJrOiAjN2ExMDBjO1xcblxcbiAgLS1ncmV5LWxpZ2h0OiByZ2IoMTk3LCAxOTcsIDE5Nyk7XFxuICAtLWdyZXktZGVmYXVsdC1taWQ6IHJnYigxNDUsIDE0NSwgMTQ1KTtcXG4gIC0tZ3JleS1kZWZhdWx0LWRhcms6IHJnYig4MiwgODIsIDgyKTtcXG5cXG4gIC0tY29sLWNhcmQ6IHJnYmEoMCwgMCwgMCwgMC4zKTtcXG5cXG4gIC8qIFotSU5ERVggU0NIRU1BICovXFxuICAtLXotYmVoaW5kOiAtNTtcXG4gIC0tei1iZzogMDtcXG4gIC0tei1iYXNlOiAxMDtcXG4gIC0tei1lbGVtZW50OiAyMDtcXG4gIC0tei10ZXh0OiA1MDtcXG5cXG4gIC8qIFBPU0lUSU9OUyAqL1xcbiAgLS10b3AtaGVpZ2h0OiAycmVtOyAvKiBIZWFkZXIgYmFyICovXFxuICAtLWJvdHRvbS1oZWlnaHQ6IDVyZW07IC8qIFNlYXJjaCBib3ggKi9cXG5cXG4gIC8qICogR0xPQkFMIFBSRUZFUkVOQ0VTICogKi9cXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxuICBjb2xvcjogdmFyKC0tY29sLWxpZ2h0LXRleHQpO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBtYXJnaW46IDA7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gIHBhZGRpbmc6IDA7XFxuICBwYWRkaW5nLXRvcDogdmFyKC0tdG9wLWhlaWdodCk7XFxuICBwYWRkaW5nLWJvdHRvbTogdmFyKC0tYm90dG9tLWhlaWdodCk7XFxuICB6LWluZGV4OiB2YXIoLS16LWJnKTtcXG59XFxuXFxuLyogR2VuZXJhbCAqL1xcbi5zaGFkb3cge1xcbiAgYm94LXNoYWRvdzogMCAwIDE1cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xcbn1cXG5cXG4vKiBNQUlOICovXFxuXFxuLm1haW4tY29udGVudCB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHotaW5kZXg6IHZhcigtLXotYmcpO1xcblxcbiAgd2lkdGg6IDEwMCU7XFxuICAtLWhlaWdodDogY2FsYygxMDB2aCAtIHZhcigtLXRvcC1oZWlnaHQpIC0gdmFyKC0tYm90dG9tLWhlaWdodCkpO1xcbiAgaGVpZ2h0OiB2YXIoLS1oZWlnaHQpO1xcbiAgbWluLWhlaWdodDogdmFyKC0taGVpZ2h0KTtcXG4gIHBhZGRpbmctYm90dG9tOiAyLjVyZW07XFxuXFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXFxuICAgIHZhcigtLWNvbC1wcmltYXJ5LWxpZ2h0KSxcXG4gICAgdmFyKC0tY29sLXByaW1hcnktbWlkKSxcXG4gICAgdmFyKC0tY29sLXByaW1hcnktZGFyaylcXG4gICk7XFxufVxcblxcbi53ZWF0aGVyLWNvbnRlbnQge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDAuMjVyZW07XFxuICB0ZXh0LXNoYWRvdzogMC4xcmVtIDAuMXJlbSAwLjI1cmVtIHZhcigtLWNvbC1wcmltYXJ5LWRhcmspO1xcbn1cXG5cXG4ud2VhdGhlci1jYXJkIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBoZWlnaHQ6IDhyZW07XFxuICB3aWR0aDogMTAwJTtcXG4gIG1heC13aWR0aDogMjByZW07XFxuICBtYXJnaW46IDAuNXJlbSBhdXRvO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgei1pbmRleDogMTtcXG59XFxuLndlYXRoZXItY2FyZDo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6ICcnO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgb3BhY2l0eTogMC40O1xcbiAgYmFja2dyb3VuZDogdmFyKC0tY29sLXByaW1hcnktZGFyayk7XFxuICB6LWluZGV4OiAtMTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbi5pbmZvLWNvbnRhaW5lciB7XFxuICBoZWlnaHQ6IDEwcmVtO1xcbiAgcGFkZGluZzogMC4ycmVtIDAuNXJlbTtcXG59XFxuXFxuLmljb24tY29udGFpbmVyIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBhZGRpbmctdG9wOiAzcmVtO1xcbn1cXG5cXG4ubG9jYXRpb24ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm90dG9tOiAwLjNyZW07XFxuICByaWdodDogMDtcXG4gIGxlZnQ6IDA7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDJyZW07XFxufVxcblxcbi8qIFdFQVRIRVIgSU5GTyBDTEFTU0VTICovXFxuXFxuLndlYXRoZXItaW5mby1jb250YWluZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNTAlIDUwJTtcXG59XFxuLndlYXRoZXItZGVzY3JpcHRpb24ge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbi53ZWF0aGVyLWN1cnJlbnQtdGVtcCB7XFxuICBmb250LXNpemU6IDVyZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi53ZWF0aGVyLWRldGFpbHMge1xcbiAgcGFkZGluZy10b3A6IDFyZW07XFxuICBwYWRkaW5nLWxlZnQ6IDAuMnJlbTtcXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xcbiAgbGluZS1oZWlnaHQ6IDEuNDVlbTtcXG59XFxuXFxuLyogVE9QICovXFxuXFxuLnRvcCB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwO1xcbiAgaGVpZ2h0OiB2YXIoLS10b3AtaGVpZ2h0KTtcXG4gIHdpZHRoOiAxMDAlO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBwYWRkaW5nOiAwLjNlbTtcXG5cXG4gIGJhY2tncm91bmQ6IHZhcigtLWNvbC1saWdodC1taWQpO1xcbiAgY29sb3I6IHZhcigtLWNvbC1zZWNvbmRhcnkpO1xcblxcbiAgei1pbmRleDogdmFyKC0tei1iYXNlKTtcXG59XFxuXFxuLyogU1dJVENIIFNUWUxFUyAqL1xcblxcbi5zd2l0Y2gge1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJhY2tncm91bmQ6IHZhcigtLWNvbC1wcmltYXJ5LWxpZ2h0KTtcXG4gIGJveC1zaGFkb3c6IGluc2V0IDBweCAzcHggMTBweCB2YXIoLS1jb2wtcHJpbWFyeS1taWQpO1xcbiAgYm9yZGVyLXJhZGl1czogMTAwcHg7XFxuICB3aWR0aDogM3JlbTtcXG4gIHotaW5kZXg6IHZhcigtLXotZWxlbWVudCk7XFxuICBwYWRkaW5nOiAwIDAuNHJlbTtcXG59XFxuXFxuLnN3aXRjaCA+IGlucHV0IHtcXG4gIG9wYWNpdHk6IDA7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4uc3dpdGNoID4gaW5wdXQgfiAuc3dpdGNoLXRodW1iIHtcXG4gIGNvbnRlbnQ6ICcnO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMDtcXG4gIGJhY2tncm91bmQ6IHZhcigtLWNvbC1saWdodC10ZXh0KTtcXG4gIC8qIChzbGlnaHRseSBsYXJnZXIgdGh1bWIpICovXFxuICBoZWlnaHQ6IGNhbGMoMTAwJSArIDRweCk7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XFxuICB3aWR0aDogMS41cmVtO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgei1pbmRleDogMTtcXG4gIHRyYW5zaXRpb246IDAuM3MgY3ViaWMtYmV6aWVyKDAuNTMsIC0wLjM3LCAwLjUzLCAxLjM3KTtcXG59XFxuXFxuLnN3aXRjaCA+IGlucHV0OmNoZWNrZWQgfiAuc3dpdGNoLXRodW1iIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KSB0cmFuc2xhdGVYKDEuNXJlbSk7XFxufVxcblxcbi5zd2l0Y2gtdGh1bWI6OmJlZm9yZSB7XFxuICBjb250ZW50OiAnJztcXG4gIHotaW5kZXg6IC01MDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGJveC1zaGFkb3c6IDAgMCAwLjRyZW0gdmFyKC0tY29sLXByaW1hcnktbGlnaHQpO1xcbiAgb3BhY2l0eTogMC43O1xcbn1cXG5cXG4uc3dpdGNoLWxhYmVsIHtcXG4gIG1hcmdpbjogMC4xMnJlbSAwO1xcbiAgei1pbmRleDogMjtcXG4gIGNvbG9yOiB2YXIoLS1jb2wtbGlnaHQtdGV4dCk7XFxufVxcblxcbi5zd2l0Y2ggPiBpbnB1dDpjaGVja2VkIH4gLm9uLFxcbi5zd2l0Y2ggPiBpbnB1dDpub3QoOmNoZWNrZWQpIH4gLm9mZiB7XFxuICBjb2xvcjogdmFyKC0tY29sLXNlY29uZGFyeSk7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIHRyYW5zaXRpb246IDAuM3M7XFxufVxcblxcbi5naC1sb2dvIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxLjVyZW07XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2wtc2Vjb25kYXJ5KTtcXG59XFxuXFxuLyogU0VBUkNIICovXFxuXFxuLnNlYXJjaC1jb250YWluZXIge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGhlaWdodDogdmFyKC0tYm90dG9tLWhlaWdodCk7XFxuICBib3R0b206IDA7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2wtbGlnaHQtbWlkKTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMC41cmVtIDFyZW07XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICBjb2xvcjogdmFyKC0tY29sLXNlY29uZGFyeSk7XFxufVxcblxcbi5zZWFyY2gtYmFyOmhvdmVyLFxcbi5zZWFyY2gtYmFyOmZvY3VzLXdpdGhpbiB7XFxuICBib3gtc2hhZG93OiBpbnNldCAwIDAgMTBweCB2YXIoLS1jb2wtc2Vjb25kYXJ5LWRhcmspO1xcbiAgLyogYm9yZGVyOiAycHggc29saWQgdmFyKC0tY29sLWxpZ2h0LXRleHQpOyAqL1xcbn1cXG5cXG4uc2VhcmNoLWJhciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgaGVpZ2h0OiAxLjVyZW07XFxuICB3aWR0aDogMTAwJTtcXG4gIG1heC13aWR0aDogMjByZW07XFxuICBtYXJnaW4tdG9wOiAwLjVyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZDogdmFyKC0tY29sLXNlY29uZGFyeSk7XFxuICBjb2xvcjogdmFyKC0tY29sLWxpZ2h0LXRleHQpO1xcbiAgYm9yZGVyLXJhZGl1czogMnJlbTtcXG59XFxuXFxuLnNlYXJjaC1pbnB1dCB7XFxuICBjb2xvcjogdmFyKC0tY29sLWxpZ2h0LXRleHQpO1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBmb250LXNpemU6IDFyZW07XFxuICB6LWluZGV4OiAxO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbWF4LXdpZHRoOiA3NSU7XFxufVxcblxcbi5zZWFyY2gtaW5wdXQ6OnBsYWNlaG9sZGVyIHtcXG4gIGNvbG9yOiB2YXIoLS1jb2wtbGlnaHQtdGV4dCk7XFxuICBmb250LXNpemU6IDAuOHJlbTtcXG59XFxuXFxuLnNlYXJjaC1pbnB1dDpmb2N1czo6cGxhY2Vob2xkZXIge1xcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG4uc2VhcmNoLWljb24tcGxhY2Vob2xkZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDA7XFxuICBoZWlnaHQ6IDFyZW07XFxuICB3aWR0aDogMXJlbTtcXG4gIG1hcmdpbjogMCAwLjJyZW07XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1jb2wtbGlnaHQtbWlkKTtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxufVxcblxcbi5zZWFyY2gtaWNvbi1wbGFjZWhvbGRlci5sZWZ0IHtcXG4gIGxlZnQ6IDA7XFxuICBib3JkZXItY29sb3I6IHZhcigtLWNvbC1zZWNvbmRhcnkpO1xcbiAgb3BhY2l0eTogMDtcXG59XFxuXFxuLmZvb3RlciB7XFxuICBmb250LXNpemU6IDAuN3JlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkgeyByZXR1cm4gX2FycmF5V2l0aEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgX25vbkl0ZXJhYmxlUmVzdCgpOyB9XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7IH1cblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikgeyBpZiAoIW8pIHJldHVybjsgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpOyBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lOyBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTsgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB9XG5cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7IGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoOyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcInVuZGVmaW5lZFwiIHx8ICEoU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChhcnIpKSkgcmV0dXJuOyB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9lID0gdW5kZWZpbmVkOyB0cnkgeyBmb3IgKHZhciBfaSA9IGFycltTeW1ib2wuaXRlcmF0b3JdKCksIF9zOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7IF9hcnIucHVzaChfcy52YWx1ZSk7IGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhazsgfSB9IGNhdGNoIChlcnIpIHsgX2QgPSB0cnVlOyBfZSA9IGVycjsgfSBmaW5hbGx5IHsgdHJ5IHsgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoX2QpIHRocm93IF9lOyB9IH0gcmV0dXJuIF9hcnI7IH1cblxuZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyOyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKSB7XG4gIHZhciBfaXRlbSA9IF9zbGljZWRUb0FycmF5KGl0ZW0sIDQpLFxuICAgICAgY29udGVudCA9IF9pdGVtWzFdLFxuICAgICAgY3NzTWFwcGluZyA9IF9pdGVtWzNdO1xuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgY29udGVudC5sb2NhbHMgfHwge307IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgdmFyIGF0dHJpYnV0ZXMgPSBvcHRpb25zLmF0dHJpYnV0ZXMgfHwge307XG5cbiAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIGF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5tZWRpYSA/IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIikuY29uY2F0KG9iai5jc3MsIFwifVwiKSA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHRpZihfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdKSB7XG5cdFx0cmV0dXJuIF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0uZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIEFueXRoaW5nIEkgbmVlZCB0byBwcmVsb2FkXG5pbXBvcnQgJy4vc3R5bGVzL3N0eWxlLmNzcyc7XG4iXSwic291cmNlUm9vdCI6IiJ9