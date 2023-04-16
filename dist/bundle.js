/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Roboto&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root{\n  /* ORIGINAL */\n  --lt-sh-clr: 255, 252, 197;\n  --lt-acc-clr: 115, 178, 153; \n  --main-clr: 218, 156, 113;\n  --dk-acc-clr: 135, 109, 85;\n  --dk-sh-clr: 44, 44, 41;\n}\n\n*::after,\n*::before,\n*{\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n\nbody{\n  font-size: clamp(1rem, 3.5vw,1.5rem);\n  font-style: 'Roboto', sans-serif;\n  color: rgb(var(--dk-sh-clr));\n  background-color: rgb(var(--lt-sh-clr))\n}\n\n#content{\n  display: grid;\n  grid-template-rows: auto 1fr auto;\n  gap: 2rem;\n  height: 100dvh;  \n}\n\nheader{\n  display: flex;\n  justify-content: space-evenly;\n  padding: 1rem;\n  background-color: rgb(var(--lt-acc-clr));\n  align-items: center;\n}\n.search-div{\n  position: relative;\n}\n.search-div>input{\n  background-color: rgba(var(--lt-sh-clr), 0.3);\n  font-size: inherit;\n  padding: 0.5rem;\n  border: none;\n  outline: none;\n}\n.search-div>button{\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n}\nbutton{\n  background-color: rgb(var(--main-clr));\n  font-size: inherit;\n  padding: 0.5rem;\n  border: none;\n  cursor: pointer;\n}\nbutton:hover{\n  box-shadow: 2px 2px 5px black;\n}\nbutton:active{\n  box-shadow: none;\n}\n\nfooter{\n  padding: 1rem;\n  text-align: center;\n}\n\nmain{\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  gap: 1rem;\n  align-items: center;\n  /* border: 1px solid green; */\n  width: clamp(380px, 75%, 700px);\n  margin: 0 auto;\n}\n\n.current-card{\n  text-align: center;\n}\n.miscData-container{\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 1rem;\n}\n.miscData-card{\n  padding: 0.5rem 1rem;\n  text-align: left;\n}\n.miscData-card img{\n  width: 32px;\n}\n.miscData-card div{\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n\n.hidden{\n  display: none;\n}\n\n.hourly-container{\n  text-align:center;\n  padding: 0 1.5rem;\n  position: relative;\n  height: 50dvh;\n  overflow: scroll;\n}\n#hourlyContainerTop{\n  position: sticky;\n  top: 0;\n  background-color: rgb(var(--lt-sh-clr));\n  padding: 0.5rem 1rem;\n}\n.close-pane{\n  position: absolute;\n  top: 0.5rem;\n  right: 1rem;\n  cursor: pointer;\n}\n.hourly-container ul{\n  list-style: none;\n  /* margin-top: 1rem; */\n}\n.hourly-container li{\n  margin-bottom: 0.5rem;\n}\n.hourly-element{\n  background-color: rgba(var(--dk-acc-clr), 0.8);\n  padding: 0.5rem 1rem;\n}\n.hourly-element>div{\n  display: flex;\n}\n.hourly-container img{\n  width: 32px;\n}\n\n\n#forecastContainer{\n  display: flex;\n}\n.forecast-card{\n  background-color: rgba(var(--main-clr), 0.5);\n  padding: 0.5rem 1rem;\n  text-align: center;\n  cursor: pointer;\n}\n.forecast-card:nth-child(1),\n.forecast-card:nth-child(2){\n  border-right: 1px solid black;\n}\n\n\n.temperature.metric-system::after{\n  content: ' °C' \n}\n.temperature::after{\n  content: ' °F'\n}\n.velocity.metric-system::after{\n  content: ' km/h'\n}\n.velocity::after{\n  content: ' mph'\n}\n\n.text-big{\n  font-size: 1.4em;\n}\n.text-small{\n  font-size: 0.7em;\n}\n\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAEA;EACE,aAAa;EACb,0BAA0B;EAC1B,2BAA2B;EAC3B,yBAAyB;EACzB,0BAA0B;EAC1B,uBAAuB;AACzB;;AAEA;;;EAGE,UAAU;EACV,SAAS;EACT,sBAAsB;AACxB;;AAEA;EACE,oCAAoC;EACpC,gCAAgC;EAChC,4BAA4B;EAC5B;AACF;;AAEA;EACE,aAAa;EACb,iCAAiC;EACjC,SAAS;EACT,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,6BAA6B;EAC7B,aAAa;EACb,wCAAwC;EACxC,mBAAmB;AACrB;AACA;EACE,kBAAkB;AACpB;AACA;EACE,6CAA6C;EAC7C,kBAAkB;EAClB,eAAe;EACf,YAAY;EACZ,aAAa;AACf;AACA;EACE,kBAAkB;EAClB,MAAM;EACN,QAAQ;EACR,SAAS;AACX;AACA;EACE,sCAAsC;EACtC,kBAAkB;EAClB,eAAe;EACf,YAAY;EACZ,eAAe;AACjB;AACA;EACE,6BAA6B;AAC/B;AACA;EACE,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,SAAS;EACT,mBAAmB;EACnB,6BAA6B;EAC7B,+BAA+B;EAC/B,cAAc;AAChB;;AAEA;EACE,kBAAkB;AACpB;AACA;EACE,aAAa;EACb,8BAA8B;EAC9B,SAAS;AACX;AACA;EACE,oBAAoB;EACpB,gBAAgB;AAClB;AACA;EACE,WAAW;AACb;AACA;EACE,aAAa;EACb,mBAAmB;EACnB,WAAW;AACb;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,iBAAiB;EACjB,iBAAiB;EACjB,kBAAkB;EAClB,aAAa;EACb,gBAAgB;AAClB;AACA;EACE,gBAAgB;EAChB,MAAM;EACN,uCAAuC;EACvC,oBAAoB;AACtB;AACA;EACE,kBAAkB;EAClB,WAAW;EACX,WAAW;EACX,eAAe;AACjB;AACA;EACE,gBAAgB;EAChB,sBAAsB;AACxB;AACA;EACE,qBAAqB;AACvB;AACA;EACE,8CAA8C;EAC9C,oBAAoB;AACtB;AACA;EACE,aAAa;AACf;AACA;EACE,WAAW;AACb;;;AAGA;EACE,aAAa;AACf;AACA;EACE,4CAA4C;EAC5C,oBAAoB;EACpB,kBAAkB;EAClB,eAAe;AACjB;AACA;;EAEE,6BAA6B;AAC/B;;;AAGA;EACE;AACF;AACA;EACE;AACF;AACA;EACE;AACF;AACA;EACE;AACF;;AAEA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');\n\n:root{\n  /* ORIGINAL */\n  --lt-sh-clr: 255, 252, 197;\n  --lt-acc-clr: 115, 178, 153; \n  --main-clr: 218, 156, 113;\n  --dk-acc-clr: 135, 109, 85;\n  --dk-sh-clr: 44, 44, 41;\n}\n\n*::after,\n*::before,\n*{\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n\nbody{\n  font-size: clamp(1rem, 3.5vw,1.5rem);\n  font-style: 'Roboto', sans-serif;\n  color: rgb(var(--dk-sh-clr));\n  background-color: rgb(var(--lt-sh-clr))\n}\n\n#content{\n  display: grid;\n  grid-template-rows: auto 1fr auto;\n  gap: 2rem;\n  height: 100dvh;  \n}\n\nheader{\n  display: flex;\n  justify-content: space-evenly;\n  padding: 1rem;\n  background-color: rgb(var(--lt-acc-clr));\n  align-items: center;\n}\n.search-div{\n  position: relative;\n}\n.search-div>input{\n  background-color: rgba(var(--lt-sh-clr), 0.3);\n  font-size: inherit;\n  padding: 0.5rem;\n  border: none;\n  outline: none;\n}\n.search-div>button{\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n}\nbutton{\n  background-color: rgb(var(--main-clr));\n  font-size: inherit;\n  padding: 0.5rem;\n  border: none;\n  cursor: pointer;\n}\nbutton:hover{\n  box-shadow: 2px 2px 5px black;\n}\nbutton:active{\n  box-shadow: none;\n}\n\nfooter{\n  padding: 1rem;\n  text-align: center;\n}\n\nmain{\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  gap: 1rem;\n  align-items: center;\n  /* border: 1px solid green; */\n  width: clamp(380px, 75%, 700px);\n  margin: 0 auto;\n}\n\n.current-card{\n  text-align: center;\n}\n.miscData-container{\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 1rem;\n}\n.miscData-card{\n  padding: 0.5rem 1rem;\n  text-align: left;\n}\n.miscData-card img{\n  width: 32px;\n}\n.miscData-card div{\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n\n.hidden{\n  display: none;\n}\n\n.hourly-container{\n  text-align:center;\n  padding: 0 1.5rem;\n  position: relative;\n  height: 50dvh;\n  overflow: scroll;\n}\n#hourlyContainerTop{\n  position: sticky;\n  top: 0;\n  background-color: rgb(var(--lt-sh-clr));\n  padding: 0.5rem 1rem;\n}\n.close-pane{\n  position: absolute;\n  top: 0.5rem;\n  right: 1rem;\n  cursor: pointer;\n}\n.hourly-container ul{\n  list-style: none;\n  /* margin-top: 1rem; */\n}\n.hourly-container li{\n  margin-bottom: 0.5rem;\n}\n.hourly-element{\n  background-color: rgba(var(--dk-acc-clr), 0.8);\n  padding: 0.5rem 1rem;\n}\n.hourly-element>div{\n  display: flex;\n}\n.hourly-container img{\n  width: 32px;\n}\n\n\n#forecastContainer{\n  display: flex;\n}\n.forecast-card{\n  background-color: rgba(var(--main-clr), 0.5);\n  padding: 0.5rem 1rem;\n  text-align: center;\n  cursor: pointer;\n}\n.forecast-card:nth-child(1),\n.forecast-card:nth-child(2){\n  border-right: 1px solid black;\n}\n\n\n.temperature.metric-system::after{\n  content: ' °C' \n}\n.temperature::after{\n  content: ' °F'\n}\n.velocity.metric-system::after{\n  content: ' km/h'\n}\n.velocity::after{\n  content: ' mph'\n}\n\n.text-big{\n  font-size: 1.4em;\n}\n.text-small{\n  font-size: 0.7em;\n}\n\n"],"sourceRoot":""}]);
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
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
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
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/apiFns.js":
/*!***********************!*\
  !*** ./src/apiFns.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "weatherFetch": () => (/* binding */ weatherFetch)
/* harmony export */ });

const API_KEY = '1723de81b21140ddbac225948230304'
const BASE_URL = 'https://api.weatherapi.com/v1/'

const FORECAST_API = `${BASE_URL}forecast.json?key=${API_KEY}&days=3&q=`

async function weatherFetch(location){
  try {
    if(!location) throw new Error ('No location given')
    const response = await fetch(FORECAST_API+location)
    if(response.status == 200) {
      return await response.json()
    } else {
      throw new Error (`Http error: ${response.status}`)
    }
  } catch(err){
    console.error(err)
  }
}




/***/ }),

/***/ "./src/domGen.js":
/*!***********************!*\
  !*** ./src/domGen.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "init": () => (/* binding */ init)
/* harmony export */ });
/* harmony import */ var _icons_humidity_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./icons/humidity.png */ "./src/icons/humidity.png");
/* harmony import */ var _icons_air_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icons/air.png */ "./src/icons/air.png");
/* harmony import */ var _icons_sunny_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./icons/sunny.png */ "./src/icons/sunny.png");
/* harmony import */ var _icons_thermometer_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./icons/thermometer.png */ "./src/icons/thermometer.png");





function init(){
  const content = document.createElement('div')
  content.id = 'content'

  content.append(header(),main(),footer())

  document.body.appendChild(content)
}

function footer(){
  const foot = document.createElement('footer')
  const div = document.createElement('div')
  div.textContent = '©2023 Luis Trejo'
  foot.appendChild(div)

  return foot
}

function header(){
  const header = document.createElement('header')
  header.innerHTML = `
  <div class="logo">LOGO</div>
  <div class="search-div">
    <input type="text" id="searchCity">
    <button class="search-button">Search</button>
  </div>
  <button id="toggleDegreeBtn">°C / °F</button>
  `

  return header
}

 function main(){
  const main = document.createElement('main')

  const mainContent = document.createElement('div')
  mainContent.id = 'mainContent'
  currentWeather().forEach(div => mainContent.appendChild(div))

  const forecastHeader = document.createElement('h3')
  forecastHeader.textContent = '3 Day Forecast'

  const forecastContainer = document.createElement('div')
  forecastContainer.id = 'forecastContainer'

  let cards = forecastCards()
  for(let i=0; i<3; i++){
    forecastContainer.appendChild(cards[i])
  }

  main.append(mainContent, forecastHeader, forecastContainer)
  
  return main
}

function currentWeather(){
  const hourlyCointainer = document.createElement('div') 
  hourlyCointainer.classList.add('hourly-container', 'hidden')

  const hourlyContainerTop = document.createElement('div')
  hourlyContainerTop.id = 'hourlyContainerTop'
  const hourlyDay = document.createElement('p')
  const exitHourlyData = document.createElement('span')
  exitHourlyData.classList.add('close-pane')
  exitHourlyData.textContent = 'X'
  hourlyContainerTop.append(hourlyDay, exitHourlyData)
  
  const hourlyUl = document.createElement('ul')
  for(let i=0; i<24; i++){
    const li = document.createElement('li')
    li.setAttribute('hour',i)
    li.appendChild(hourlyElement(i))
    hourlyUl.appendChild(li)
  }
  hourlyCointainer.append(hourlyContainerTop, hourlyUl)

  const currentCard = document.createElement('div')
  currentCard.classList.add('current-card')

  const cityDiv = document.createElement('p')
  cityDiv.classList.add('text-normal')
  cityDiv.innerHTML = `<span id="currentCity"></span>, <span id="currentRegion"></span>`

  const icon = document.createElement('img')
  icon.id = 'currentConditionIcon'

  const condition = document.createElement('p')
  condition.classList.add('text-normal')
  condition.id = 'currentCondition'

  const date = document.createElement('p')
  date.classList.add('text-small')
  date.id = 'currentDate'

  const temperature = document.createElement('p')
  temperature.classList.add('text-big', 'temperature', 'metric-system')
  temperature.id = 'currentTemperature'

  const miscDataContainer = document.createElement('div')
  miscDataContainer.classList.add('miscData-container')

  const feelsLikeCard = document.createElement('div')
  feelsLikeCard.classList.add('miscData-card')
  feelsLikeCard.innerHTML = `
  <p>Feels like</p>
  <div>
    <img src=${_icons_thermometer_png__WEBPACK_IMPORTED_MODULE_3__}>
    <span id='currentFeelsLike' class='temperature metric-system'></span>
  </div>
  `
  const windCard = document.createElement('div')
  windCard.classList.add('miscData-card')
  windCard.innerHTML = `
  <p>Wind</p>
  <div>
    <img src=${_icons_air_png__WEBPACK_IMPORTED_MODULE_1__}>
    <span id='currentWind' class='velocity metric-system'></span> | <span id='currentWindDir'></span>
  </div>
  `

  const humidityCard = document.createElement('div')
  humidityCard.classList.add('miscData-card')
  humidityCard.innerHTML = `
  <p>Humidity</p>
  <div>
    <img src=${_icons_humidity_png__WEBPACK_IMPORTED_MODULE_0__}>
    <span id='currentHumidity'></span>
  </div>
  `
  const uvCard = document.createElement('div')
  uvCard.classList.add('miscData-card')
  uvCard.innerHTML = `
  <p>UV index</p>
  <div>
    <img src=${_icons_sunny_png__WEBPACK_IMPORTED_MODULE_2__}>
    <span id='currentUv'></span>
  </div>
  `
  miscDataContainer.append(feelsLikeCard, windCard, humidityCard, uvCard)

  currentCard.append(cityDiv, icon, condition, date, temperature, miscDataContainer)

  return [currentCard, hourlyCointainer]
}

function forecastCards(){
  const cards = []

  for(let i=0; i<3; i++){
    const card = document.createElement('div')
    card.setAttribute('card-id', i)
    card.classList.add('forecast-card')

    const day = document.createElement('p')
    day.classList.add('text-normal')

    const icon = document.createElement('img')
    icon.src = "#"

    const minMaxTemp = document.createElement('p')
    minMaxTemp.classList.add('text-small')
    minMaxTemp.innerHTML = `
    <span class='forecast-min temperature metric-system'></span> | <span class='forecast-max temperature metric-system'></span>
    `
    card.append(day, icon, minMaxTemp)

    cards.push(card)
  }

  return cards
}

function hourlyElement(i){
  const hourlyDiv = document.createElement('div')
  hourlyDiv.classList.add('hourly-element')
  const hourlyPreview = document.createElement('div')
  const p = document.createElement('p')
  p.innerHTML = `${i < 10 ? '0'.concat(i) : i} Hrs | Temperature: 
    <span class="temperature metric-system"></span> | `
  const img = document.createElement('img')
  hourlyPreview.append(p, img)
  hourlyDiv.appendChild(hourlyPreview)

  return hourlyDiv
}
  




/***/ }),

/***/ "./src/listeners.js":
/*!**************************!*\
  !*** ./src/listeners.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "listenersInit": () => (/* binding */ listenersInit)
/* harmony export */ });
/* harmony import */ var _apiFns_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./apiFns.js */ "./src/apiFns.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils.js */ "./src/utils.js");



function listenersInit(){

  const citySearchTxt = document.querySelector('#searchCity')
  const citySearchBtn = document.querySelector('.search-div > button')

  const toggleDegreesBtn = document.querySelector('#toggleDegreeBtn')

  //MAIN CARD
  const currentCity = document.querySelector('#currentCity')
  const currentRegion = document.querySelector('#currentRegion')
  const currentCard = document.querySelector('.current-card')
  //HOURLY CONTAINER
  const hourlyContainer = document.querySelector('.hourly-container')
  const closeHourlyData = document.querySelector('.close-pane')

  //condition ICON
  const currentConditionIcon = document.querySelector('#currentConditionIcon')
  const currentCondition = document.querySelector('#currentCondition')

  const currentDate = document.querySelector('#currentDate')

  const currentTemp = document.querySelector('#currentTemperature')
  //MISC CARDS
  const currentFeelsLike = document.querySelector('#currentFeelsLike')
  const currentWind = document.querySelector('#currentWind')
  const currentWindDir = document.querySelector('#currentWindDir')
  const currentHumidity = document.querySelector('#currentHumidity')
  const currentUv = document.querySelector('#currentUv')

  //FORECAST CARDS
  const forecastCards = document.querySelectorAll('.forecast-card')

  //SYSTEM DEPENDANT VALUES
  const systemDependantValues = document.querySelectorAll('.temperature, .velocity')

  let weatherData = null 
  let isMetric = true

  console.log(citySearchTxt)
  console.log(forecastCards)

  //LISTENERS
  window.addEventListener('load', firstLoad)
  citySearchBtn.addEventListener('click', getWeatherData)
  citySearchTxt.addEventListener('keypress', (e)=> {
    if(e.key == 'Enter') getWeatherData()
  })
  toggleDegreesBtn.addEventListener('click', toggleMetricSys)
  forecastCards.forEach(card => card.addEventListener('click', toggleHourly))
  closeHourlyData.addEventListener('click', closePanel)

  function closePanel(){
    hourlyContainer.classList.add('hidden')
    currentCard.classList.remove('hidden')
  }

  function toggleHourly(e){
    console.log(e.currentTarget)
    //Hidding current card, show hourly data
    currentCard.classList.add('hidden')
    hourlyContainer.classList.remove('hidden')
    hourlyContainer.scrollTop = 0

    //Clicked the same day
    if(hourlyContainer.firstChild.firstChild.textContent == e.currentTarget.firstChild.textContent)
      return
    let id = e.currentTarget.attributes[0].value
    let hoursData = weatherData.forecast.forecastday[id].hour
    hourlyContainer.attributes['card-id'].value = id
    hourlyContainer.firstChild.firstChild.textContent = forecastCards[id].firstChild.textContent
    console.log(id)
    //Fill ul
    let ul = hourlyContainer.children[1]
    for(let i=0; i<24; i++){
      //Hourly element Temp
      ul.children[i].firstChild.firstChild.firstChild.children[0].textContent = 
        isMetric ? hoursData[i].temp_c : hoursData[i].temp_f
      //Hourly element Icon 
      ul.children[i].firstChild.firstChild.lastChild.src = 
        hoursData[i].condition.icon
    }
  }

  async function firstLoad(){
    weatherData = await (0,_apiFns_js__WEBPACK_IMPORTED_MODULE_0__.weatherFetch)('Cancun')

    fillWeatherData()
    //first hourly data - current day
    let hoursData = weatherData.forecast.forecastday[0].hour
    hourlyContainer.setAttribute('card-id', 0)
    hourlyContainer.firstChild.firstChild.textContent = forecastCards[0].firstChild.textContent
    //Fill ul
    let ul = hourlyContainer.children[1]
    for(let i=0; i<24; i++){
      //Hourly element Temp
      ul.children[i].firstChild.firstChild.firstChild.children[0].textContent = 
        isMetric ? hoursData[i].temp_c : hoursData[i].temp_f
      //Hourly element Icon 
      ul.children[i].firstChild.firstChild.lastChild.src = 
        hoursData[i].condition.icon
    }
  }
  function toggleMetricSys(){
    if(isMetric){
      currentTemp.textContent = weatherData.current.temp_f
      currentFeelsLike.textContent = weatherData.current.feelslike_f
      currentWind.textContent = weatherData.current.wind_mph

      for (let i=0; i<3; i++){
        forecastCards[i].childNodes[2].children[0].textContent = 
          weatherData.forecast.forecastday[i].day.mintemp_f
        forecastCards[i].childNodes[2].children[1].textContent = 
          weatherData.forecast.forecastday[i].day.maxtemp_f
      }
      //Toggle hourlyData
      let id = hourlyContainer.attributes['card-id'].value
      let ul = hourlyContainer.children[1]
      let hoursData = weatherData.forecast.forecastday[id].hour
      for(let i=0; i<24; i++){
        ul.children[i].firstChild.firstChild.firstChild.children[0].textContent = 
          hoursData[i].temp_f
      }
      isMetric = false
    } else {
      currentTemp.textContent = weatherData.current.temp_c
      currentFeelsLike.textContent = weatherData.current.feelslike_c
      currentWind.textContent = weatherData.current.wind_kph

      for (let i=0; i<3; i++){
        forecastCards[i].childNodes[2].children[0].textContent = 
          weatherData.forecast.forecastday[i].day.mintemp_c
        forecastCards[i].childNodes[2].children[1].textContent = 
          weatherData.forecast.forecastday[i].day.maxtemp_c
      }
      //Toggle hourlyData
      let id = hourlyContainer.attributes['card-id'].value
      let ul = hourlyContainer.children[1]
      let hoursData = weatherData.forecast.forecastday[id].hour
      for(let i=0; i<24; i++){
        ul.children[i].firstChild.firstChild.firstChild.children[0].textContent = 
          hoursData[i].temp_c
      }
      isMetric = true 
    }
    systemDependantValues.forEach(ele => ele.classList.toggle('metric-system'))
  }
  async function getWeatherData(){
    try{
      console.log(weatherData)
      let tempWeather = await (0,_apiFns_js__WEBPACK_IMPORTED_MODULE_0__.weatherFetch)(citySearchTxt.value)
      //Caching data
      if(tempWeather) weatherData = tempWeather
      if(weatherData) fillWeatherData()
      currentCard.classList.remove('hidden')
      hourlyContainer.classList.add('hidden')
    } catch (err) {
      console.error(err)
    }
  }

  function fillWeatherData(){
    
    //MainCard
    currentCity.textContent = weatherData.location.name
    currentRegion.textContent = weatherData.location.region
    currentConditionIcon.src = weatherData.current.condition.icon
    currentCondition.textContent = weatherData.current.condition.text
    currentDate.textContent = (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.getFormatedDate)(weatherData.location.localtime)
    currentTemp.textContent = isMetric ? weatherData.current.temp_c : weatherData.current.temp_f
    //MiscCards
    currentFeelsLike.textContent = isMetric ? weatherData.current.feelslike_c : weatherData.current.feelslike_f
    currentWind.textContent = isMetric ? weatherData.current.wind_kph : weatherData.current.wind_mph
    currentWindDir.textContent = weatherData.current.wind_dir
    currentHumidity.textContent = weatherData.current.humidity
    currentUv.textContent = weatherData.current.uv

    //Forecast
    for (let i=0; i<3; i++){
      forecastCards[i].childNodes[0].textContent = 
        (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.getDay)(weatherData.forecast.forecastday[i].date)
      forecastCards[i].childNodes[1].src = 
        weatherData.forecast.forecastday[i].day.condition.icon
      forecastCards[i].childNodes[2].children[0].textContent = isMetric 
        ? weatherData.forecast.forecastday[i].day.mintemp_c
        : weatherData.forecast.forecastday[i].day.mintemp_f
      forecastCards[i].childNodes[2].children[1].textContent = isMetric
        ? weatherData.forecast.forecastday[i].day.maxtemp_c
        : weatherData.forecast.forecastday[i].day.maxtemp_f
    }
  }
}





/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getDay": () => (/* binding */ getDay),
/* harmony export */   "getFormatedDate": () => (/* binding */ getFormatedDate)
/* harmony export */ });
const weekdays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
const months = ["January", "February", "March", "April", "May", "June",
   "July", "August", "September", "October", "November", "December"]

const getDay = (date) => weekdays[new Date(date).getUTCDay()]
const getMonth = (date) => months[new Date(date).getUTCMonth()]

const getFormatedDate = (date) => `${getDay(date)}, ${getMonth(date)} ${date.slice(8,10)}`




/***/ }),

/***/ "./src/icons/air.png":
/*!***************************!*\
  !*** ./src/icons/air.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0dc2edc30c85741db834.png";

/***/ }),

/***/ "./src/icons/humidity.png":
/*!********************************!*\
  !*** ./src/icons/humidity.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "24d00c8f91456d436ca2.png";

/***/ }),

/***/ "./src/icons/sunny.png":
/*!*****************************!*\
  !*** ./src/icons/sunny.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "cf295f6b76dd3644332e.png";

/***/ }),

/***/ "./src/icons/thermometer.png":
/*!***********************************!*\
  !*** ./src/icons/thermometer.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "836620be5e31d3cdc4df.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _domGen_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./domGen.js */ "./src/domGen.js");
/* harmony import */ var _apiFns_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./apiFns.js */ "./src/apiFns.js");
/* harmony import */ var _listeners_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./listeners.js */ "./src/listeners.js");





'use strict'

console.log('HELLO WORLD')

window.weatherFetch = _apiFns_js__WEBPACK_IMPORTED_MODULE_2__.weatherFetch

firstLoad()

function firstLoad(){

  //gen HTML
  ;(0,_domGen_js__WEBPACK_IMPORTED_MODULE_1__.init)()

  //Setting up listeners
  ;(0,_listeners_js__WEBPACK_IMPORTED_MODULE_3__.listenersInit)()

}

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map