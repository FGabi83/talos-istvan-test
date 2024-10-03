/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./public/javascripts/modules/activeNavItem.js":
/*!*****************************************************!*\
  !*** ./public/javascripts/modules/activeNavItem.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
function activeNavItem() {
  // Lekérjük az összes navigációs elemet
  var links = document.querySelectorAll('.js-nav--item');

  // Lekérjük az aktuális hash-t (pl. #about vagy #contact)
  var currentHash = window.location.hash || '#home'; // Alapértelmezett a #home, ha nincs hash

  // Végigmegyünk a linkeken, és ellenőrizzük, hogy a hash egyezik-e
  links.forEach(function (link) {
    var linkHash = link.getAttribute('href'); // A hivatkozás (pl. #about, #contact)

    if (linkHash === currentHash) {
      console.log('ok', 'linkHash:', linkHash, 'currentHash:', currentHash);
      link.classList.add('js-nav--item__active'); // Aktív osztály hozzáadása
    } else {
      console.log('not ok', 'linkHash:', linkHash, 'currentHash:', currentHash);
      link.classList.remove('js-nav--item__active'); // Aktív osztály eltávolítása
    }
  });
}

// Meghívjuk az activeNavItem függvényt minden hash változáskor
window.addEventListener('hashchange', activeNavItem);

// Meghívjuk egyszer, amikor az oldal betöltődik
document.addEventListener('DOMContentLoaded', activeNavItem);
/* harmony default export */ __webpack_exports__["default"] = (activeNavItem);

/***/ }),

/***/ "./public/javascripts/modules/dropdownMenu.js":
/*!****************************************************!*\
  !*** ./public/javascripts/modules/dropdownMenu.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
function dropdownMenu() {
  var navMenu = document.querySelector(".js-nav--menu");
  var navWrapper = document.querySelector(".js-nav--wrapper");
  var navLinks = document.querySelectorAll(".js-nav--item");
  navMenu.addEventListener("click", function () {
    navWrapper.classList.toggle("js-is-open");
    navMenu.classList.toggle("js-highlight");
  });
  navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      navWrapper.classList.remove("js-is-open");
      navMenu.classList.remove("js-highlight");
    });
  });
}
/* harmony default export */ __webpack_exports__["default"] = (dropdownMenu);

/***/ }),

/***/ "./public/css/style.css":
/*!******************************!*\
  !*** ./public/css/style.css ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!********************************************!*\
  !*** ./public/javascripts/homepage-app.js ***!
  \********************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/style.css */ "./public/css/style.css");
/* harmony import */ var _modules_activeNavItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/activeNavItem */ "./public/javascripts/modules/activeNavItem.js");
/* harmony import */ var _modules_dropdownMenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/dropdownMenu */ "./public/javascripts/modules/dropdownMenu.js");
 // without this import webpack doesn't generate the css file



(0,_modules_activeNavItem__WEBPACK_IMPORTED_MODULE_1__["default"])();
(0,_modules_dropdownMenu__WEBPACK_IMPORTED_MODULE_2__["default"])();
}();
/******/ })()
;
//# sourceMappingURL=App.bundle.js.map