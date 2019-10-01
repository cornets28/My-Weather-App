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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/cityForm.js":
/*!*************************!*\
  !*** ./src/cityForm.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst cityForm = `\n\n\n  <div class=\"weatherHead\">\n    <h1> Weather App</h1>\n    </div>\n      <form id=\"city-search\">\n        \n          <div class=\"card-body\">\n            <label for=\"city-name\">\n              Enter your City\n              <input type=\"text\" id=\"city-name\" class=\"form-control form-control-lg\" required minlength=\"3\" maxlength=\"20\">\n            </label>\n            <button id=\"btn-city-search\" class=\"btn btn-primary btn-lg\">Search</button>\n        </div>\n    \n      </form>\n    </div>\n        \n  </div>\n  `;\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (cityForm); \n\n//# sourceURL=webpack:///./src/cityForm.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _cityForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cityForm */ \"./src/cityForm.js\");\n/* harmony import */ var _saveToLocalStorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./saveToLocalStorage */ \"./src/saveToLocalStorage.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\n\n\n\nconst formArea = document.querySelector('#form-area');\nconst btnSearch = document.querySelector('#btn-city-search');\nconst btnChangeCity = document.querySelector('#btn-change-city');\nconst weatherDiv = document.querySelector('.weather-info');\n\n\nif(localStorage.getItem('weatherData')) {\n  const weatherData = JSON.parse(localStorage.getItem('weatherData'));\n  console.log(weatherData);\n  renderWeatherData(weatherData, weatherDiv);\n  btnChangeCity.style.display = 'block';\n  btnChangeCity.addEventListener('click', (e) => {\n    e.preventDefault();\n    renderCityForm(_cityForm__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n  })\n} else {\n  renderCityForm(_cityForm__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n}\n\nfunction renderCityForm(formRaw) {\n  formArea.innerHTML = formRaw;\n  \n  const cityForm = document.querySelector('#city-search');\n  const cityInput = document.querySelector('#city-name');\n  cityInput.focus();\n\n  cityForm.addEventListener('submit', (e) => {\n    e.preventDefault();\n    getCityInfo(cityInput.value)\n      .then(weatherData => renderWeatherData(weatherData, weatherDiv));\n\n  });\n}\n\nfunction renderWeatherData(weatherData, weatherDiv) {\n  console.log(weatherData)\n  const location = weatherDiv.querySelector('#location');\n  const weather = weatherDiv.querySelector('#weather');\n  const humidity = weatherDiv.querySelector('#humidity');\n  \n  if (weatherData.cod !== '404') {\n    location.textContent = `${weatherData.name}, ${weatherData.sys.country}`;\n    weather.textContent = `${weatherData.main.temp} C`;\n    humidity.textContent = `Humidity: ${weatherData.main.humidity}%`;\n  } else {\n    location.textContent = \"CITY NOT FOUND!\";\n    weather.textContent = '';\n    humidity.textContent = '';\n  }\n}\n\nasync function getCityInfo(city) {\n  const API_KEY = '60893133019f8947f3001b83a0d2b23d';\n  const units = 'metric';\n  const targetURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&appid=${API_KEY}`;\n  let response = await fetch(targetURL);\n  let weatherData = await response.json();\n  console.log(\"WEATHER DATA:\"+weatherData)\n  Object(_saveToLocalStorage__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('weatherData', weatherData);\n  return weatherData;\n\n}\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/saveToLocalStorage.js":
/*!***********************************!*\
  !*** ./src/saveToLocalStorage.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction saveToLocalStorage(key, value) {\n  if(localStorage.getItem(key) !== JSON.stringify(value)){\n    localStorage.setItem(key, JSON.stringify(value));\n  }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (saveToLocalStorage);\n\n//# sourceURL=webpack:///./src/saveToLocalStorage.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* .weather-info {\n  border: 1px solid #3333;\n  border-radius: 5px;\n  background: #f5f5f5;\n  text-align: center;\n}\n\n#location {\n  font-size: 32px;\n}\n\n#weather {\n  font-size: 48px;\n}\n\n#humidity {\n  font-size: 24px;\n}\n\n.hidden {\n  display: none;\n} */\n\n//# sourceURL=webpack:///./src/style.css?");

/***/ })

/******/ });