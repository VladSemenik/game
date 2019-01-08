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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js!./node_modules/sass-loader/lib/loader.js!./src/screens/battle/index.scss":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src!./node_modules/sass-loader/lib/loader.js!./src/screens/battle/index.scss ***!
  \**************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js!./node_modules/sass-loader/lib/loader.js!./src/scss/main.scss":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src!./node_modules/sass-loader/lib/loader.js!./src/scss/main.scss ***!
  \***************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/json/english.json":
/*!*******************************!*\
  !*** ./src/json/english.json ***!
  \*******************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, default */
/***/ (function(module) {

module.exports = [{"word":"apple","translation":["яблоко","яблочко"],"img":"apple.jpg"},{"word":"pear","translation":["груша"],"img":"pear.jpg"},{"word":"orange","translation":["апельсин","оранжевый"],"img":"orange.jpg"},{"word":"banana","translation":["банан","бананчик"],"img":"banana.jpg"},{"word":"lemon","translation":["лемон","лемончик"],"img":"lemon.jpg"},{"word":"pineapple","translation":["ананас","ананасик"],"img":"pineapple.jpg"},{"word":"grapes","translation":["виноград","виноградик"]},{"word":"kiwi","translation":["киви"]},{"word":"tangerine","translation":["мандарин","мандаринчик"]},{"word":"carrot","translation":["морковь","морковка"]},{"word":"onion","translation":["лук"]},{"word":"garlic","translation":["чеснок"]},{"word":"tomato","translation":["помидор","помидорка"]},{"word":"cabbage","translation":["капуста"]},{"word":"potato","translation":["картофель","картошка"]},{"word":"cucumber","translation":["огурец"]},{"word":"dog","translation":["собака","пес","пёс","песик","пёсик"]},{"word":"cat","translation":["кот","котик","кошка","кошечка"]},{"word":"snake","translation":["змея","змейка","змей"]},{"word":"hamster","translation":["хомяк","хомячок"]},{"word":"rabbit","translation":["кролик","заяц","зайчик"]},{"word":"budgie","translation":["волнистый попугайчик","попугай","попугайчик","волнистый попугай"]},{"word":"goat","translation":["козел","козлик","коза","козочка"]},{"word":"pig","translation":["свинья","свинка","поросенок","хрюшка","молодая свинья"]},{"word":"sheep","translation":["овца","баран","овечка","барашек"]},{"word":"horse","translation":["лошадь","лошадка","конь","коник"]},{"word":"cow","translation":["корова","коровка"]},{"word":"ox","translation":["бык","бычок"]},{"word":"goose","translation":["гусь","гусыня"]},{"word":"chicken","translation":["курица","курочка","цыпленок","петух"]},{"word":"duck","translation":["утка","уточка"]},{"word":"fox","translation":["лиса","лис","лисичка"]},{"word":"wolf","translation":["волк","волчок"]},{"word":"bear","translation":["медведь","медведица"]},{"word":"hare","translation":["заяц","зайчик","кролик"]},{"word":"elephant","translation":["слон","слоник","слониха"]},{"word":"tiger","translation":["тигр"]},{"word":"lion","translation":["лев"]},{"word":"crocodile","translation":["крокодил"]},{"word":"giraffe","translation":["жираф","жирафик"]},{"word":"car","translation":["машина","автомобиль"]},{"word":"taxi","translation":["такси"]},{"word":"bus","translation":["автобус"]},{"word":"train","translation":["поезд","состав"]},{"word":"plane","translation":["самолет","самолетик"]},{"word":"ship","translation":["корабль","кораблик"]},{"word":"doctor","translation":["доктор","врач"]},{"word":"teacher","translation":["учитель","учительница"]},{"word":"policeman","translation":["полицейский","милиционер"]},{"word":"scientist","translation":["ученый"]},{"word":"hairdresser","translation":["парикмахер"]},{"word":"bedroom","translation":["спальня"]},{"word":"kitchen","translation":["кухня"]},{"word":"bathroom","translation":["ванная комната"]},{"word":"attic","translation":["чердак","мансарда"]},{"word":"garage","translation":["гараж"]},{"word":"head","translation":["голова"]},{"word":"hair","translation":["волосы"]},{"word":"eyes","translation":["глаза","глазки"]},{"word":"nose","translation":["нос","носик"]},{"word":"teeth","translation":["зубы","зубки"]},{"word":"lips","translation":["губы","губки"]},{"word":"ears","translation":["уши","ушки"]},{"word":"neck","translation":["шея","шейка"]},{"word":"shoulders","translation":["плечи"]},{"word":"leg","translation":["нога"]},{"word":"foot","translation":["ступня","нога"]},{"word":"red","translation":["красный"]},{"word":"green","translation":["зеленый"]},{"word":"blue","translation":["синий","голубой","лазурный"]},{"word":"pink","translation":["розовый"]},{"word":"grey","translation":["серый"]},{"word":"black","translation":["черный"]},{"word":"purple","translation":["пурпурный","фиолетовый","багровый"]},{"word":"brown","translation":["коричневый"]},{"word":"dress","translation":["платье"]},{"word":"skirt","translation":["юбка"]},{"word":"blouse","translation":["блузка","кофта","кофточка"]},{"word":"jeans","translation":["джинсы"]},{"word":"trousers","translation":["брюки","штаны"]},{"word":"go","translation":["идти","ходить"]},{"word":"walk","translation":["гулять"]},{"word":"run","translation":["бегать","бежать"]},{"word":"jump","translation":["прыгать"]},{"word":"swim","translation":["плавать"]},{"word":"climb","translation":["лазать","корабкаться"]},{"word":"sit","translation":["сидеть"]},{"word":"stand","translation":["стоять"]}];

/***/ }),

/***/ "./src/json/math.json":
/*!****************************!*\
  !*** ./src/json/math.json ***!
  \****************************/
/*! exports provided: maxValue, maxResult, operators, default */
/***/ (function(module) {

module.exports = {"maxValue":50,"maxResult":100,"operators":["+","-","*","/"]};

/***/ }),

/***/ "./src/screens/battle/index.js":
/*!*************************************!*\
  !*** ./src/screens/battle/index.js ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.scss */ "./src/screens/battle/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../scss/main.scss */ "./src/scss/main.scss");
/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_scss_main_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _json_english__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../json/english */ "./src/json/english.json");
var _json_english__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../json/english */ "./src/json/english.json", 1);
/* harmony import */ var _json_math__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../json/math */ "./src/json/math.json");
var _json_math__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../json/math */ "./src/json/math.json", 1);
/* harmony import */ var _battle_player_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../battle/player/index */ "./src/screens/battle/player/index.js");





var startGame = document.querySelector('#button-start-game');
var selectTask = document.querySelector('.select-task');
var buttonSelectTask = document.querySelector('.button-task');
var scoreWrapper = document.querySelector('.score');
var player = new _battle_player_index__WEBPACK_IMPORTED_MODULE_4__["default"](localStorage.userName);
var countTimer = 10;
var currentTask;
var tasks = {
  "english": _json_english__WEBPACK_IMPORTED_MODULE_2__,
  "math": _json_math__WEBPACK_IMPORTED_MODULE_3__
};
var englishTask;

function closeTrace() {
  for (var _len = arguments.length, elemClose = new Array(_len), _key = 0; _key < _len; _key++) {
    elemClose[_key] = arguments[_key];
  }

  elemClose.forEach(function (element) {
    element.setAttribute('close', '');
  });
}

startGame.addEventListener('click', function () {
  closeTrace(startGame);
  closeTrace(scoreWrapper);
  selectTask.removeAttribute('close');
});

function timer() {
  document.querySelector('.wrapp-time-count').innerHTML = countTimer;
  if (countTimer !== 0) setTimeout(timer, 1000);else countTimer = 10;
  countTimer--;
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function getTask(name, link) {
  if (name === 'english') {
    englishTask = link.english[getRandomInt(0, link.english.length)];
    return 'Напиши перевод слова ' + englishTask.word;
  } else if (name === 'math') {
    var left = getRandomInt(0, link.math.maxValue);
    var operator = getRandomInt(0, link.math.operators.length);
    var result = getRandomInt(0, link.math.maxResult);
    mathTask = "".concat(result).concat(operator % 2 ? operator -= 1 : operator += 1).concat(left);
    return "\u0420\u0435\u0448\u0438 \u0443\u0440\u0430\u0432\u043D\u0435\u043D\u0438\u0435 ".concat(left).concat(link.math.operators[operator], "X=").concat(result);
  } else {}
}

buttonSelectTask.addEventListener('click', function (event) {
  currentTask = event.target.value;
  setTimeout(timer, 1000);
  closeTrace(startGame, selectTask);
  document.querySelector('.task-dialog').removeAttribute('close');
  document.querySelector('task-dialog').innerHTML += '<div class="wrapp-time-count">10</div>';
  document.querySelector('task-dialog').innerHTML += "<div>".concat(getTask(event.target.value, tasks), "</div>");
  document.querySelector('task-dialog').innerHTML += '<input id="user-answer" value="" type="text" class="input"><input class="button" id="check-answer" type="button" value="Ответить">';
  var checkAnswer = document.querySelector('#check-answer');
  finalStage(checkAnswer);
});

function finalStage(checkButton) {
  checkButton.addEventListener('click', function () {
    var valueAnswer = document.querySelector('#user-answer');

    if (checkAnswerSolution(valueAnswer.value)) {
      player.incScore();
    } else {
      player.decHealth();
    }

    console.log(player, countTimer, checkAnswerSolution(valueAnswer), valueAnswer.value, englishTask.translation);
    playerLose(player);
  });
}

function checkAnswerSolution(userSet) {
  if (currentTask === 'english') {
    return englishTask.translation.some(function (element) {
      return element === userSet;
    });
  } else if (currentTask === 'math') {} else {}
}

function playerLose(player) {
  if (!player.health) {
    closeTrace(document.querySelector('.task-dialog'));
    showScore(player);
    countTimer = 10;
    player.score = 0;
    player.health = 5;
  } else {
    closeTrace(document.querySelector('.task-dialog'));
    document.querySelector('task-dialog').innerHTML = '';
    selectTask.removeAttribute('close');
    countTimer = 10;
  }
}

function showScore(player) {
  scoreWrapper.removeAttribute('close');
  scoreWrapper.innerHTML = "<h2>".concat(player.name ? player.name : 'Незнакомец', ", \u0442\u0432\u043E\u0439 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442:</h2><h1>").concat(player.score, "</h1><p class=\"improve\">\u0423\u043B\u0443\u0447\u0448\u0438\u0442\u044C \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442</p>");
  document.querySelector('task-dialog').innerHTML = '';
}

scoreWrapper.addEventListener('click', function () {
  closeTrace(scoreWrapper);
  startGame.removeAttribute('close');
});

/***/ }),

/***/ "./src/screens/battle/index.scss":
/*!***************************************!*\
  !*** ./src/screens/battle/index.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/mini-css-extract-plugin/dist/loader.js!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/postcss-loader/src!../../../node_modules/sass-loader/lib/loader.js!./index.scss */ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js!./node_modules/sass-loader/lib/loader.js!./src/screens/battle/index.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/screens/battle/player/index.js":
/*!********************************************!*\
  !*** ./src/screens/battle/player/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Player; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Player =
/*#__PURE__*/
function () {
  function Player(name) {
    _classCallCheck(this, Player);

    this.name = name;
    this.health = 5;
    this.score = 0;
  }

  _createClass(Player, [{
    key: "decHealth",
    value: function decHealth() {
      this.health -= 1;
    }
  }, {
    key: "incScore",
    value: function incScore() {
      this.score += 1;
    }
  }]);

  return Player;
}();



/***/ }),

/***/ "./src/scss/main.scss":
/*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/mini-css-extract-plugin/dist/loader.js!../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/src!../../node_modules/sass-loader/lib/loader.js!./main.scss */ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js!./node_modules/sass-loader/lib/loader.js!./src/scss/main.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 2:
/*!*******************************************!*\
  !*** multi ./src/screens/battle/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/screens/battle/index.js */"./src/screens/battle/index.js");


/***/ })

/******/ });
//# sourceMappingURL=battle.d1bd561e6e141e1772a3.js.map