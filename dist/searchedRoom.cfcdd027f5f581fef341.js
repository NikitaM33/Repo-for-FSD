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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pug/pages/searchedRoom/searchedRoom.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/pug/pages/searchedRoom/searchedRoom.js":
/*!****************************************************!*\
  !*** ./src/pug/pages/searchedRoom/searchedRoom.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/babel-loader/lib/index.js):\\nSyntaxError: C:/Users/Admin/Desktop/project-for-real-work/src/pug/pages/searchedRoom/searchedRoom.js: Unexpected token, expected , (204:75)\\n\\n\\u001b[0m \\u001b[90m 202 | \\u001b[39m   \\u001b[36mvar\\u001b[39m dot_width \\u001b[33m=\\u001b[39m $(carusel)\\u001b[33m.\\u001b[39mfind(\\u001b[32m'.carousel-wrapper__dot'\\u001b[39m)\\u001b[33m.\\u001b[39mouterWidth()\\u001b[33m;\\u001b[39m\\n \\u001b[90m 203 | \\u001b[39m   $(carusel)\\u001b[33m.\\u001b[39mfind(\\u001b[32m\\\".carousel-wrapper__dots-wrapper .carousel-wrapper__dot\\\"\\u001b[39m)\\u001b[33m.\\u001b[39meq(\\u001b[33m-\\u001b[39m\\u001b[35m1\\u001b[39m)\\u001b[33m.\\u001b[39mclone()\\u001b[33m.\\u001b[39mprependTo($(carusel)\\u001b[33m.\\u001b[39mfind(\\u001b[32m\\\".carousel-wrapper__dots-wrapper\\\"\\u001b[39m))\\u001b[33m;\\u001b[39m\\n\\u001b[31m\\u001b[1m>\\u001b[22m\\u001b[39m\\u001b[90m 204 | \\u001b[39m   $(carusel)\\u001b[33m.\\u001b[39mfind(\\u001b[32m\\\".carousel-wrapper__dot\\\"\\u001b[39m)\\u001b[33m.\\u001b[39mcss({\\u001b[32m\\\"left\\\"\\u001b[39m\\u001b[33m:\\u001b[39m\\u001b[32m\\\"-\\\"\\u001b[39m\\u001b[33m+\\u001b[39mdot_width\\u001b[33m+\\u001b[39m\\u001b[32m\\\"px\\\"\\u001b[39m\\u001b[33m;\\u001b[39m})\\u001b[33m;\\u001b[39m\\n \\u001b[90m     | \\u001b[39m                                                                           \\u001b[31m\\u001b[1m^\\u001b[22m\\u001b[39m\\n \\u001b[90m 205 | \\u001b[39m}\\n \\u001b[90m 206 | \\u001b[39m\\u001b[36mfunction\\u001b[39m right_carusel(carusel){\\n \\u001b[90m 207 | \\u001b[39m   \\u001b[36mvar\\u001b[39m block_width \\u001b[33m=\\u001b[39m $(carusel)\\u001b[33m.\\u001b[39mfind(\\u001b[32m'.carousel-block'\\u001b[39m)\\u001b[33m.\\u001b[39mouterWidth()\\u001b[33m;\\u001b[39m\\u001b[0m\\n\");\n\n//# sourceURL=webpack:///./src/pug/pages/searchedRoom/searchedRoom.js?");

/***/ })

/******/ });