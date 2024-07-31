/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_scoreHandlers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/scoreHandlers.js */ \"./src/modules/scoreHandlers.js\");\n\nvar form = document.getElementById('score-form');\nvar refreshButton = document.getElementById('refresh');\nform.addEventListener('submit', function (event) {\n  event.preventDefault();\n  var name = document.getElementById('name').value;\n  var score = document.getElementById('score').value;\n  (0,_modules_scoreHandlers_js__WEBPACK_IMPORTED_MODULE_0__.addScore)(name, score);\n});\nrefreshButton.addEventListener('click', function () {\n  (0,_modules_scoreHandlers_js__WEBPACK_IMPORTED_MODULE_0__.refreshScores)();\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/modules/scoreHandlers.js":
/*!**************************************!*\
  !*** ./src/modules/scoreHandlers.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addScore: () => (/* binding */ addScore),\n/* harmony export */   refreshScores: () => (/* binding */ refreshScores)\n/* harmony export */ });\nvar addScore = function addScore(name, score) {\n  var scoresList = document.getElementById('scores-list');\n  var listItem = document.createElement('li');\n  listItem.textContent = \"\".concat(name, \": \").concat(score);\n  scoresList.appendChild(listItem);\n};\nvar refreshScores = function refreshScores() {\n  var scoresList = document.getElementById('scores-list');\n  while (scoresList.firstChild) {\n    scoresList.removeChild(scoresList.firstChild);\n  }\n  var scores = [{\n    name: 'Name',\n    score: 100\n  }, {\n    name: 'Name',\n    score: 20\n  }, {\n    name: 'Name',\n    score: 50\n  }, {\n    name: 'Name',\n    score: 78\n  }, {\n    name: 'Name',\n    score: 125\n  }, {\n    name: 'Name',\n    score: 77\n  }, {\n    name: 'Name',\n    score: 42\n  }];\n  scores.forEach(function (score) {\n    var listItem = document.createElement('li');\n    listItem.textContent = \"\".concat(score.name, \": \").concat(score.score);\n    scoresList.appendChild(listItem);\n  });\n};\n\n//# sourceURL=webpack:///./src/modules/scoreHandlers.js?");

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
/******/ 			// no module.id needed
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;