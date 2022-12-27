/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/platform.js":
/*!*********************************!*\
  !*** ./src/modules/platform.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Platform": () => (/* binding */ Platform)
/* harmony export */ });
/* harmony import */ var _sprite_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sprite.js */ "./src/modules/sprite.js");


class Platform extends _sprite_js__WEBPACK_IMPORTED_MODULE_0__.Sprite {
  constructor(x, y, width, height) {
    super(x, y, width, height);
  }
}


/***/ }),

/***/ "./src/modules/player.js":
/*!*******************************!*\
  !*** ./src/modules/player.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Player": () => (/* binding */ Player)
/* harmony export */ });
/* harmony import */ var _sprite_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sprite.js */ "./src/modules/sprite.js");


class Player extends _sprite_js__WEBPACK_IMPORTED_MODULE_0__.Sprite {
  constructor(x, y, width, height) {
    super(x, y, width, height);
    this.gravity = 2;
    this.vel = {
      x: 0,
      y: 0,
    };
  }

  isOnFloor(sprite) {
    const isAbove =
      this.pos.y + this.height <= sprite.pos.y &&
      this.pos.y + this.height + this.vel.y >= sprite.pos.y;
    const isWithin =
      this.pos.x >= sprite.pos.x &&
      this.pos.x + this.width <= sprite.pos.x + sprite.width;
    return isAbove && isWithin;
  }

  update(winHeight) {
    this.pos.y += this.vel.y;
    this.pos.x += this.vel.x;

    if (this.pos.y + this.height + this.vel.y < winHeight) {
      this.vel.y += this.gravity;
    } else {
      this.vel.y = 0;
    }
  }
}


/***/ }),

/***/ "./src/modules/sprite.js":
/*!*******************************!*\
  !*** ./src/modules/sprite.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Sprite": () => (/* binding */ Sprite)
/* harmony export */ });
class Sprite {
  constructor(x, y, width, height) {
    this.pos = { x, y };
    this.width = width;
    this.height = height;
  }

  draw(context, color) {
    context.fillStyle = color;
    context.fillRect(this.pos.x, this.pos.y, this.width, this.height);
  }
}


/***/ }),

/***/ "./src/res/player/idle sync \\.png$":
/*!*******************************************************!*\
  !*** ./src/res/player/idle/ sync nonrecursive \.png$ ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./idle-1.png": "./src/res/player/idle/idle-1.png",
	"./idle-2.png": "./src/res/player/idle/idle-2.png",
	"./idle-3.png": "./src/res/player/idle/idle-3.png",
	"./idle-4.png": "./src/res/player/idle/idle-4.png"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/res/player/idle sync \\.png$";

/***/ }),

/***/ "./src/res/player/idle/idle-1.png":
/*!****************************************!*\
  !*** ./src/res/player/idle/idle-1.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/06e65887eed4356c5a8d.png";

/***/ }),

/***/ "./src/res/player/idle/idle-2.png":
/*!****************************************!*\
  !*** ./src/res/player/idle/idle-2.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/050371102f217c188188.png";

/***/ }),

/***/ "./src/res/player/idle/idle-3.png":
/*!****************************************!*\
  !*** ./src/res/player/idle/idle-3.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/e3a2461854f4fd3de37b.png";

/***/ }),

/***/ "./src/res/player/idle/idle-4.png":
/*!****************************************!*\
  !*** ./src/res/player/idle/idle-4.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/55e8596a5ed2a9dc8128.png";

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
/******/ 				scriptUrl = document.currentScript.src
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_player_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/player.js */ "./src/modules/player.js");
/* harmony import */ var _modules_platform_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/platform.js */ "./src/modules/platform.js");



const importImages = (req) => req.keys().map(req);

const idleImages = importImages(
  __webpack_require__("./src/res/player/idle sync \\.png$")
);
console.log(idleImages);
const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

canvas.width = innerWidth - 10;
canvas.height = innerHeight - 10;

const player = new _modules_player_js__WEBPACK_IMPORTED_MODULE_0__.Player(200, 100, 64, 64);
const platforms = [
  new _modules_platform_js__WEBPACK_IMPORTED_MODULE_1__.Platform(100, 10, 300, 50),
  new _modules_platform_js__WEBPACK_IMPORTED_MODULE_1__.Platform(50, 150, 300, 50),
  new _modules_platform_js__WEBPACK_IMPORTED_MODULE_1__.Platform(500, 300, 300, 50),
];

const keys = {
  right: {
    pressed: false,
  },
  left: {
    pressed: false,
  },
};

const run = () => {
  requestAnimationFrame(run);
  c.clearRect(0, 0, canvas.width, canvas.height);
  player.draw(c, 'red');
  platforms.forEach((platform) => {
    platform.draw(c, 'green');
  });
  player.update(canvas.height);
  if (keys.right.pressed && player.pos.x < canvas.width / 2 - 50) {
    player.vel.x = 5;
  } else if (keys.left.pressed && player.pos.x > 50) {
    player.vel.x = -5;
  } else {
    player.vel.x = 0;
    if (keys.right.pressed) {
      platforms.forEach((platform) => {
        platform.pos.x -= 5;
      });
    } else if (keys.left.pressed) {
      platforms.forEach((platform) => {
        platform.pos.x += 5;
      });
    }
  }
  platforms.forEach((platform) => {
    if (player.isOnFloor(platform)) {
      player.vel.y = 0;
    }
  });
};

run();

addEventListener('keydown', ({ key }) => {
  if (key == 'ArrowLeft' || key == 'a') {
    keys.left.pressed = true;
  } else if (key == 'ArrowRight' || key == 'd') {
    keys.right.pressed = true;
  } else if (key == 'ArrowUp' || key == 'w') {
    player.vel.y -= 60;
  }
});

addEventListener('keyup', ({ key }) => {
  if (key == 'ArrowLeft' || key == 'a') {
    keys.left.pressed = false;
  } else if (key == 'ArrowRight' || key == 'd') {
    keys.right.pressed = false;
  }
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBcUM7QUFDckM7QUFDTyx1QkFBdUIsOENBQU07QUFDcEM7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTnFDO0FBQ3JDO0FBQ08scUJBQXFCLDhDQUFNO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDaENPO0FBQ1A7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ1hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ3pCQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7Ozs7Ozs7Ozs7QUNmNkM7QUFDSTtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUseURBQXNEO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsc0RBQU07QUFDekI7QUFDQSxNQUFNLDBEQUFRO0FBQ2QsTUFBTSwwREFBUTtBQUNkLE1BQU0sMERBQVE7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsTUFBTTtBQUNOO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLEtBQUs7QUFDcEM7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0EsNkJBQTZCLEtBQUs7QUFDbEM7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25lb24tbmlnaHRzLy4vc3JjL21vZHVsZXMvcGxhdGZvcm0uanMiLCJ3ZWJwYWNrOi8vbmVvbi1uaWdodHMvLi9zcmMvbW9kdWxlcy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vbmVvbi1uaWdodHMvLi9zcmMvbW9kdWxlcy9zcHJpdGUuanMiLCJ3ZWJwYWNrOi8vbmVvbi1uaWdodHMvLi9zcmMvcmVzL3BsYXllci9pZGxlLyBzeW5jIG5vbnJlY3Vyc2l2ZSBcXC5wbmckIiwid2VicGFjazovL25lb24tbmlnaHRzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL25lb24tbmlnaHRzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9uZW9uLW5pZ2h0cy93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL25lb24tbmlnaHRzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vbmVvbi1uaWdodHMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9uZW9uLW5pZ2h0cy93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9uZW9uLW5pZ2h0cy8uL3NyYy9nYW1lLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNwcml0ZSB9IGZyb20gJy4vc3ByaXRlLmpzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBQbGF0Zm9ybSBleHRlbmRzIFNwcml0ZSB7XHJcbiAgY29uc3RydWN0b3IoeCwgeSwgd2lkdGgsIGhlaWdodCkge1xyXG4gICAgc3VwZXIoeCwgeSwgd2lkdGgsIGhlaWdodCk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IFNwcml0ZSB9IGZyb20gJy4vc3ByaXRlLmpzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBQbGF5ZXIgZXh0ZW5kcyBTcHJpdGUge1xyXG4gIGNvbnN0cnVjdG9yKHgsIHksIHdpZHRoLCBoZWlnaHQpIHtcclxuICAgIHN1cGVyKHgsIHksIHdpZHRoLCBoZWlnaHQpO1xyXG4gICAgdGhpcy5ncmF2aXR5ID0gMjtcclxuICAgIHRoaXMudmVsID0ge1xyXG4gICAgICB4OiAwLFxyXG4gICAgICB5OiAwLFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGlzT25GbG9vcihzcHJpdGUpIHtcclxuICAgIGNvbnN0IGlzQWJvdmUgPVxyXG4gICAgICB0aGlzLnBvcy55ICsgdGhpcy5oZWlnaHQgPD0gc3ByaXRlLnBvcy55ICYmXHJcbiAgICAgIHRoaXMucG9zLnkgKyB0aGlzLmhlaWdodCArIHRoaXMudmVsLnkgPj0gc3ByaXRlLnBvcy55O1xyXG4gICAgY29uc3QgaXNXaXRoaW4gPVxyXG4gICAgICB0aGlzLnBvcy54ID49IHNwcml0ZS5wb3MueCAmJlxyXG4gICAgICB0aGlzLnBvcy54ICsgdGhpcy53aWR0aCA8PSBzcHJpdGUucG9zLnggKyBzcHJpdGUud2lkdGg7XHJcbiAgICByZXR1cm4gaXNBYm92ZSAmJiBpc1dpdGhpbjtcclxuICB9XHJcblxyXG4gIHVwZGF0ZSh3aW5IZWlnaHQpIHtcclxuICAgIHRoaXMucG9zLnkgKz0gdGhpcy52ZWwueTtcclxuICAgIHRoaXMucG9zLnggKz0gdGhpcy52ZWwueDtcclxuXHJcbiAgICBpZiAodGhpcy5wb3MueSArIHRoaXMuaGVpZ2h0ICsgdGhpcy52ZWwueSA8IHdpbkhlaWdodCkge1xyXG4gICAgICB0aGlzLnZlbC55ICs9IHRoaXMuZ3Jhdml0eTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMudmVsLnkgPSAwO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJleHBvcnQgY2xhc3MgU3ByaXRlIHtcclxuICBjb25zdHJ1Y3Rvcih4LCB5LCB3aWR0aCwgaGVpZ2h0KSB7XHJcbiAgICB0aGlzLnBvcyA9IHsgeCwgeSB9O1xyXG4gICAgdGhpcy53aWR0aCA9IHdpZHRoO1xyXG4gICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XHJcbiAgfVxyXG5cclxuICBkcmF3KGNvbnRleHQsIGNvbG9yKSB7XHJcbiAgICBjb250ZXh0LmZpbGxTdHlsZSA9IGNvbG9yO1xyXG4gICAgY29udGV4dC5maWxsUmVjdCh0aGlzLnBvcy54LCB0aGlzLnBvcy55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XHJcbiAgfVxyXG59XHJcbiIsInZhciBtYXAgPSB7XG5cdFwiLi9pZGxlLTEucG5nXCI6IFwiLi9zcmMvcmVzL3BsYXllci9pZGxlL2lkbGUtMS5wbmdcIixcblx0XCIuL2lkbGUtMi5wbmdcIjogXCIuL3NyYy9yZXMvcGxheWVyL2lkbGUvaWRsZS0yLnBuZ1wiLFxuXHRcIi4vaWRsZS0zLnBuZ1wiOiBcIi4vc3JjL3Jlcy9wbGF5ZXIvaWRsZS9pZGxlLTMucG5nXCIsXG5cdFwiLi9pZGxlLTQucG5nXCI6IFwiLi9zcmMvcmVzL3BsYXllci9pZGxlL2lkbGUtNC5wbmdcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9zcmMvcmVzL3BsYXllci9pZGxlIHN5bmMgXFxcXC5wbmckXCI7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiaW1wb3J0IHsgUGxheWVyIH0gZnJvbSAnLi9tb2R1bGVzL3BsYXllci5qcyc7XHJcbmltcG9ydCB7IFBsYXRmb3JtIH0gZnJvbSAnLi9tb2R1bGVzL3BsYXRmb3JtLmpzJztcclxuXHJcbmNvbnN0IGltcG9ydEltYWdlcyA9IChyZXEpID0+IHJlcS5rZXlzKCkubWFwKHJlcSk7XHJcblxyXG5jb25zdCBpZGxlSW1hZ2VzID0gaW1wb3J0SW1hZ2VzKFxyXG4gIHJlcXVpcmUuY29udGV4dCgnLi9yZXMvcGxheWVyL2lkbGUvJywgZmFsc2UsIC9cXC5wbmckLylcclxuKTtcclxuY29uc29sZS5sb2coaWRsZUltYWdlcyk7XHJcbmNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2NhbnZhcycpO1xyXG5jb25zdCBjID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XHJcblxyXG5jYW52YXMud2lkdGggPSBpbm5lcldpZHRoIC0gMTA7XHJcbmNhbnZhcy5oZWlnaHQgPSBpbm5lckhlaWdodCAtIDEwO1xyXG5cclxuY29uc3QgcGxheWVyID0gbmV3IFBsYXllcigyMDAsIDEwMCwgNjQsIDY0KTtcclxuY29uc3QgcGxhdGZvcm1zID0gW1xyXG4gIG5ldyBQbGF0Zm9ybSgxMDAsIDEwLCAzMDAsIDUwKSxcclxuICBuZXcgUGxhdGZvcm0oNTAsIDE1MCwgMzAwLCA1MCksXHJcbiAgbmV3IFBsYXRmb3JtKDUwMCwgMzAwLCAzMDAsIDUwKSxcclxuXTtcclxuXHJcbmNvbnN0IGtleXMgPSB7XHJcbiAgcmlnaHQ6IHtcclxuICAgIHByZXNzZWQ6IGZhbHNlLFxyXG4gIH0sXHJcbiAgbGVmdDoge1xyXG4gICAgcHJlc3NlZDogZmFsc2UsXHJcbiAgfSxcclxufTtcclxuXHJcbmNvbnN0IHJ1biA9ICgpID0+IHtcclxuICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUocnVuKTtcclxuICBjLmNsZWFyUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xyXG4gIHBsYXllci5kcmF3KGMsICdyZWQnKTtcclxuICBwbGF0Zm9ybXMuZm9yRWFjaCgocGxhdGZvcm0pID0+IHtcclxuICAgIHBsYXRmb3JtLmRyYXcoYywgJ2dyZWVuJyk7XHJcbiAgfSk7XHJcbiAgcGxheWVyLnVwZGF0ZShjYW52YXMuaGVpZ2h0KTtcclxuICBpZiAoa2V5cy5yaWdodC5wcmVzc2VkICYmIHBsYXllci5wb3MueCA8IGNhbnZhcy53aWR0aCAvIDIgLSA1MCkge1xyXG4gICAgcGxheWVyLnZlbC54ID0gNTtcclxuICB9IGVsc2UgaWYgKGtleXMubGVmdC5wcmVzc2VkICYmIHBsYXllci5wb3MueCA+IDUwKSB7XHJcbiAgICBwbGF5ZXIudmVsLnggPSAtNTtcclxuICB9IGVsc2Uge1xyXG4gICAgcGxheWVyLnZlbC54ID0gMDtcclxuICAgIGlmIChrZXlzLnJpZ2h0LnByZXNzZWQpIHtcclxuICAgICAgcGxhdGZvcm1zLmZvckVhY2goKHBsYXRmb3JtKSA9PiB7XHJcbiAgICAgICAgcGxhdGZvcm0ucG9zLnggLT0gNTtcclxuICAgICAgfSk7XHJcbiAgICB9IGVsc2UgaWYgKGtleXMubGVmdC5wcmVzc2VkKSB7XHJcbiAgICAgIHBsYXRmb3Jtcy5mb3JFYWNoKChwbGF0Zm9ybSkgPT4ge1xyXG4gICAgICAgIHBsYXRmb3JtLnBvcy54ICs9IDU7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuICBwbGF0Zm9ybXMuZm9yRWFjaCgocGxhdGZvcm0pID0+IHtcclxuICAgIGlmIChwbGF5ZXIuaXNPbkZsb29yKHBsYXRmb3JtKSkge1xyXG4gICAgICBwbGF5ZXIudmVsLnkgPSAwO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59O1xyXG5cclxucnVuKCk7XHJcblxyXG5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKHsga2V5IH0pID0+IHtcclxuICBpZiAoa2V5ID09ICdBcnJvd0xlZnQnIHx8IGtleSA9PSAnYScpIHtcclxuICAgIGtleXMubGVmdC5wcmVzc2VkID0gdHJ1ZTtcclxuICB9IGVsc2UgaWYgKGtleSA9PSAnQXJyb3dSaWdodCcgfHwga2V5ID09ICdkJykge1xyXG4gICAga2V5cy5yaWdodC5wcmVzc2VkID0gdHJ1ZTtcclxuICB9IGVsc2UgaWYgKGtleSA9PSAnQXJyb3dVcCcgfHwga2V5ID09ICd3Jykge1xyXG4gICAgcGxheWVyLnZlbC55IC09IDYwO1xyXG4gIH1cclxufSk7XHJcblxyXG5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsICh7IGtleSB9KSA9PiB7XHJcbiAgaWYgKGtleSA9PSAnQXJyb3dMZWZ0JyB8fCBrZXkgPT0gJ2EnKSB7XHJcbiAgICBrZXlzLmxlZnQucHJlc3NlZCA9IGZhbHNlO1xyXG4gIH0gZWxzZSBpZiAoa2V5ID09ICdBcnJvd1JpZ2h0JyB8fCBrZXkgPT0gJ2QnKSB7XHJcbiAgICBrZXlzLnJpZ2h0LnByZXNzZWQgPSBmYWxzZTtcclxuICB9XHJcbn0pO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=