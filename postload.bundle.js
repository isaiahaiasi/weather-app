/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/display-data.js":
/*!*****************************!*\
  !*** ./src/display-data.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const testQuery = {
  coord: { lon: -112.074, lat: 33.4484 },
  weather: [{ id: 800, main: 'Clear', description: 'clear sky', icon: '01n' }],
  base: 'stations',
  main: {
    temp: 289.57,
    feels_like: 284.75,
    temp_min: 287.59,
    temp_max: 291.15,
    pressure: 1012,
    humidity: 16,
  },
  visibility: 10000,
  wind: { speed: 2.57, deg: 70 },
  clouds: { all: 1 },
  dt: 1614748884,
  sys: {
    type: 1,
    id: 5347,
    country: 'US',
    sunrise: 1614693308,
    sunset: 1614734755,
  },
  timezone: -25200,
  id: 5308655,
  name: 'Phoenix',
  cod: 200,
};

function filterWeatherData(obj) {
  return {
    description: obj.weather[0].description,
    currentTemp: obj.main.temp,
    feelsLike: obj.main.feels_like,
    minTemp: obj.main.temp_min,
    maxTemp: obj.main.temp_max,
    humidity: obj.main.humidity,
    wind: obj.wind.speed,
    localTime: obj.dt - obj.timezone,
    sunrise: obj.sys.sunrise - obj.timezone,
    sunset: obj.sys.sunset - obj.timezone,
  };
}

// This will take the raw data object from the API call
function assignData() {
  const data = filterWeatherData(testQuery);

  // TODO: check if mode is set to F or C
  const getTemp = (rawTemp) => Math.round(convertKelvinToFahrenheit(rawTemp));

  const description = document.body.querySelector('.weather-description');
  description.textContent = data.description;

  const currentTemp = document.body.querySelector('.weather-current-temp');
  currentTemp.textContent = getTemp(data.currentTemp) + '°';

  const feelsLike = document.body.querySelector('.weather-feels-like');
  feelsLike.textContent = 'feels like: ' + getTemp(data.feelsLike) + '°';

  const maxTemp = document.body.querySelector('.weather-detail-max');
  maxTemp.textContent = 'high: ' + getTemp(data.maxTemp) + '°';

  const lowTemp = document.body.querySelector('.weather-detail-min');
  lowTemp.textContent = 'low: ' + getTemp(data.minTemp) + '°';

  const humidity = document.body.querySelector('.weather-detail-humidity');
  humidity.textContent = 'humidity: ' + data.humidity + '%';

  const wind = document.body.querySelector('.weather-detail-wind');
  wind.textContent = 'wind: ' + data.wind + 'mph';
}

// TEMPERATURE HANDLING FUNCTIONS

function convertKelvinToFahrenheit(temp) {
  return (convertKelvinToCelsius(temp) * 9) / 5 + 32;
}

function convertKelvinToCelsius(temp) {
  return temp - 273.15;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (assignData);


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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*************************!*\
  !*** ./src/postload.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _display_data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./display-data.js */ "./src/display-data.js");


(0,_display_data_js__WEBPACK_IMPORTED_MODULE_0__.default)();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9kaXNwbGF5LWRhdGEuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9wb3N0bG9hZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0EsVUFBVSw4QkFBOEI7QUFDeEMsYUFBYSxnRUFBZ0U7QUFDN0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLFNBQVMsdUJBQXVCO0FBQ2hDLFdBQVcsU0FBUztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsVUFBVSxFQUFDOzs7Ozs7O1VDbkYxQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0NyQkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx3Q0FBd0MseUNBQXlDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBLHdGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7Ozs7Ozs7Ozs7QUNONEM7O0FBRTVDLHlEQUFXIiwiZmlsZSI6InBvc3Rsb2FkLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHRlc3RRdWVyeSA9IHtcbiAgY29vcmQ6IHsgbG9uOiAtMTEyLjA3NCwgbGF0OiAzMy40NDg0IH0sXG4gIHdlYXRoZXI6IFt7IGlkOiA4MDAsIG1haW46ICdDbGVhcicsIGRlc2NyaXB0aW9uOiAnY2xlYXIgc2t5JywgaWNvbjogJzAxbicgfV0sXG4gIGJhc2U6ICdzdGF0aW9ucycsXG4gIG1haW46IHtcbiAgICB0ZW1wOiAyODkuNTcsXG4gICAgZmVlbHNfbGlrZTogMjg0Ljc1LFxuICAgIHRlbXBfbWluOiAyODcuNTksXG4gICAgdGVtcF9tYXg6IDI5MS4xNSxcbiAgICBwcmVzc3VyZTogMTAxMixcbiAgICBodW1pZGl0eTogMTYsXG4gIH0sXG4gIHZpc2liaWxpdHk6IDEwMDAwLFxuICB3aW5kOiB7IHNwZWVkOiAyLjU3LCBkZWc6IDcwIH0sXG4gIGNsb3VkczogeyBhbGw6IDEgfSxcbiAgZHQ6IDE2MTQ3NDg4ODQsXG4gIHN5czoge1xuICAgIHR5cGU6IDEsXG4gICAgaWQ6IDUzNDcsXG4gICAgY291bnRyeTogJ1VTJyxcbiAgICBzdW5yaXNlOiAxNjE0NjkzMzA4LFxuICAgIHN1bnNldDogMTYxNDczNDc1NSxcbiAgfSxcbiAgdGltZXpvbmU6IC0yNTIwMCxcbiAgaWQ6IDUzMDg2NTUsXG4gIG5hbWU6ICdQaG9lbml4JyxcbiAgY29kOiAyMDAsXG59O1xuXG5mdW5jdGlvbiBmaWx0ZXJXZWF0aGVyRGF0YShvYmopIHtcbiAgcmV0dXJuIHtcbiAgICBkZXNjcmlwdGlvbjogb2JqLndlYXRoZXJbMF0uZGVzY3JpcHRpb24sXG4gICAgY3VycmVudFRlbXA6IG9iai5tYWluLnRlbXAsXG4gICAgZmVlbHNMaWtlOiBvYmoubWFpbi5mZWVsc19saWtlLFxuICAgIG1pblRlbXA6IG9iai5tYWluLnRlbXBfbWluLFxuICAgIG1heFRlbXA6IG9iai5tYWluLnRlbXBfbWF4LFxuICAgIGh1bWlkaXR5OiBvYmoubWFpbi5odW1pZGl0eSxcbiAgICB3aW5kOiBvYmoud2luZC5zcGVlZCxcbiAgICBsb2NhbFRpbWU6IG9iai5kdCAtIG9iai50aW1lem9uZSxcbiAgICBzdW5yaXNlOiBvYmouc3lzLnN1bnJpc2UgLSBvYmoudGltZXpvbmUsXG4gICAgc3Vuc2V0OiBvYmouc3lzLnN1bnNldCAtIG9iai50aW1lem9uZSxcbiAgfTtcbn1cblxuLy8gVGhpcyB3aWxsIHRha2UgdGhlIHJhdyBkYXRhIG9iamVjdCBmcm9tIHRoZSBBUEkgY2FsbFxuZnVuY3Rpb24gYXNzaWduRGF0YSgpIHtcbiAgY29uc3QgZGF0YSA9IGZpbHRlcldlYXRoZXJEYXRhKHRlc3RRdWVyeSk7XG5cbiAgLy8gVE9ETzogY2hlY2sgaWYgbW9kZSBpcyBzZXQgdG8gRiBvciBDXG4gIGNvbnN0IGdldFRlbXAgPSAocmF3VGVtcCkgPT4gTWF0aC5yb3VuZChjb252ZXJ0S2VsdmluVG9GYWhyZW5oZWl0KHJhd1RlbXApKTtcblxuICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmJvZHkucXVlcnlTZWxlY3RvcignLndlYXRoZXItZGVzY3JpcHRpb24nKTtcbiAgZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBkYXRhLmRlc2NyaXB0aW9uO1xuXG4gIGNvbnN0IGN1cnJlbnRUZW1wID0gZG9jdW1lbnQuYm9keS5xdWVyeVNlbGVjdG9yKCcud2VhdGhlci1jdXJyZW50LXRlbXAnKTtcbiAgY3VycmVudFRlbXAudGV4dENvbnRlbnQgPSBnZXRUZW1wKGRhdGEuY3VycmVudFRlbXApICsgJ8KwJztcblxuICBjb25zdCBmZWVsc0xpa2UgPSBkb2N1bWVudC5ib2R5LnF1ZXJ5U2VsZWN0b3IoJy53ZWF0aGVyLWZlZWxzLWxpa2UnKTtcbiAgZmVlbHNMaWtlLnRleHRDb250ZW50ID0gJ2ZlZWxzIGxpa2U6ICcgKyBnZXRUZW1wKGRhdGEuZmVlbHNMaWtlKSArICfCsCc7XG5cbiAgY29uc3QgbWF4VGVtcCA9IGRvY3VtZW50LmJvZHkucXVlcnlTZWxlY3RvcignLndlYXRoZXItZGV0YWlsLW1heCcpO1xuICBtYXhUZW1wLnRleHRDb250ZW50ID0gJ2hpZ2g6ICcgKyBnZXRUZW1wKGRhdGEubWF4VGVtcCkgKyAnwrAnO1xuXG4gIGNvbnN0IGxvd1RlbXAgPSBkb2N1bWVudC5ib2R5LnF1ZXJ5U2VsZWN0b3IoJy53ZWF0aGVyLWRldGFpbC1taW4nKTtcbiAgbG93VGVtcC50ZXh0Q29udGVudCA9ICdsb3c6ICcgKyBnZXRUZW1wKGRhdGEubWluVGVtcCkgKyAnwrAnO1xuXG4gIGNvbnN0IGh1bWlkaXR5ID0gZG9jdW1lbnQuYm9keS5xdWVyeVNlbGVjdG9yKCcud2VhdGhlci1kZXRhaWwtaHVtaWRpdHknKTtcbiAgaHVtaWRpdHkudGV4dENvbnRlbnQgPSAnaHVtaWRpdHk6ICcgKyBkYXRhLmh1bWlkaXR5ICsgJyUnO1xuXG4gIGNvbnN0IHdpbmQgPSBkb2N1bWVudC5ib2R5LnF1ZXJ5U2VsZWN0b3IoJy53ZWF0aGVyLWRldGFpbC13aW5kJyk7XG4gIHdpbmQudGV4dENvbnRlbnQgPSAnd2luZDogJyArIGRhdGEud2luZCArICdtcGgnO1xufVxuXG4vLyBURU1QRVJBVFVSRSBIQU5ETElORyBGVU5DVElPTlNcblxuZnVuY3Rpb24gY29udmVydEtlbHZpblRvRmFocmVuaGVpdCh0ZW1wKSB7XG4gIHJldHVybiAoY29udmVydEtlbHZpblRvQ2Vsc2l1cyh0ZW1wKSAqIDkpIC8gNSArIDMyO1xufVxuXG5mdW5jdGlvbiBjb252ZXJ0S2VsdmluVG9DZWxzaXVzKHRlbXApIHtcbiAgcmV0dXJuIHRlbXAgLSAyNzMuMTU7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGFzc2lnbkRhdGE7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHRpZihfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdKSB7XG5cdFx0cmV0dXJuIF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0uZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgZGlzcGxheURhdGEgZnJvbSAnLi9kaXNwbGF5LWRhdGEuanMnO1xuXG5kaXNwbGF5RGF0YSgpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==