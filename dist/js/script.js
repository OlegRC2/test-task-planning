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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/modules/createCalendar.js":
/*!******************************************!*\
  !*** ./src/js/modules/createCalendar.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createCalendar; });
function createCalendar(year, month) {
  var calendar = document.querySelector('#calendar');
  var mon = month - 1; // месяцы в JS идут от 0 до 11, а не от 1 до 12

  var d = new Date(year, mon);
  var md = new Date(year, mon, 0).getDate();
  var table = "<table>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<th class=\"nameOfDay\">\u041F\u043E\u043D\u0435\u0434\u0435\u043B\u044C\u043D\u0438\u043A</th>\n\t\t\t\t\t\t<th class=\"nameOfDay\">\u0412\u0442\u043E\u0440\u043D\u0438\u043A</th>\n\t\t\t\t\t\t<th class=\"nameOfDay\">\u0421\u0440\u0435\u0434\u0430</th>\n\t\t\t\t\t\t<th class=\"nameOfDay\">\u0427\u0435\u0442\u0432\u0435\u0440\u0433</th>\n\t\t\t\t\t\t<th class=\"nameOfDay\">\u041F\u044F\u0442\u043D\u0438\u0446\u0430</th>\n\t\t\t\t\t\t<th class=\"nameOfDay\">\u0421\u0443\u0431\u0431\u043E\u0442\u0430</th>\n\t\t\t\t\t\t<th class=\"nameOfDay\">\u0412\u043E\u0441\u043A\u0440\u0435\u0441\u0435\u043D\u044C\u0435</th>\n\t\t\t\t\t</tr>\n\t\t\t\t\t<tr>"; // пробелы для первого ряда
  // с понедельника до первого дня месяца
  // * * * 1  2  3  4

  for (var i = 0; i < getDay(d); i++) {
    table += "<td class=\"grayDay\">".concat(md - getDay(d) + 1 + i, "</td>");
  } // <td> ячейки календаря с датами


  while (d.getMonth() == mon) {
    if (getDay(d) == 5 || getDay(d) == 6) {
      table += "<td>\n\t\t\t\t\t\t".concat(d.getDate(), "\n\t\t\t\t\t\t<div class=\"dayOff \">\u0412\u044B\u0445\u043E\u0434\u043D\u043E\u0439</div>\n\t\t\t\t\t  </td>");
    } else {
      table += '<td>' + d.getDate() + '</td>';
    }

    if (getDay(d) % 7 == 6) {
      // вс, последний день - перевод строки
      table += '</tr><tr>';
    }

    d.setDate(d.getDate() + 1);
  } // добить таблицу пустыми ячейками, если нужно
  // 29 30 31 * * * *


  if (getDay(d) != 0) {
    for (var _i = getDay(d); _i < 7; _i++) {
      if (_i == 5 || _i == 6) {
        table += "<td class=\"grayDay\">\n\t\t\t\t\t\t\t".concat(_i - getDay(d) + 1, "\n\t\t\t\t\t\t\t<div class=\"dayOff \">\u0412\u044B\u0445\u043E\u0434\u043D\u043E\u0439</div>\n\t\t\t\t\t\t</td>");
      } else {
        table += "<td class=\"grayDay\">".concat(_i - getDay(d) + 1, "</td>");
      }
    }
  } // закрыть таблицу


  table += '</tr></table>';
  calendar.innerHTML = table;
}

function getDay(date) {
  // получить номер дня недели, от 0 (пн) до 6 (вс)
  var day = date.getDay();
  if (day == 0) day = 7; // сделать воскресенье (0) последним днем

  return day - 1;
}

/***/ }),

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_createCalendar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/createCalendar */ "./src/js/modules/createCalendar.js");

window.addEventListener('DOMContentLoaded', function () {
  Object(_modules_createCalendar__WEBPACK_IMPORTED_MODULE_0__["default"])(2021, 6);
});

/***/ })

/******/ });
//# sourceMappingURL=script.js.map