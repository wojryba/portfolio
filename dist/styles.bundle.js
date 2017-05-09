webpackJsonp([2,4],{

/***/ 146:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(22)();
// imports


// module
exports.push([module.i, "/* You can add global styles to this file, and also import other style files */\nbody {\n  max-width: 1080px;\n  margin: auto;\n}\n\n/* NAV BAR AND HEADER */\n.nav-wrapper {\n  background-color: #1976D2 !important;\n  margin: 0;\n}\n\n.heading {\n  margin: 0;\n  padding: 1%;\n  background-color: #2196F3;\n  color: #FFFFFF;\n}\n\n.name  {\n  margin-left: 6%;\n}\n\n/* RESUME */\n.accent-color {\n  color: #03A9F4;\n}\n\n.top {\n  background-color: #BBDEFB;\n  width: 100%;\n  padding: 2%;\n\n}\n\n/* SIDEBAR */\n.sidebar {\n  width: 30%;\n  height: 100%;\n  float: left;\n  line-height: 2em;\n  margin: 0;\n  background-color: white;\n}\n\n.sidebar md-card {\n  height: 630px;\n}\n\n.sidebar span {\n  float: right;\n}\n\n.sidebar li {\n  border-bottom: 1px solid #BDBDBD;\n}\n\n/* MAIN PAGE */\n\n.mainResume {\n  width: 70%;\n  float: right;\n  padding: 2%;\n  min-height: 630px;\n  background-color: #EEEEEE;\n}\n\n.list {\n  margin-left: 4%;\n}\n\n.list p {\n  margin-left: 5%;\n}\n\n/* PORTFOLIO */\n.projects md-card {\n  width: 40%;\n  min-height: 310px;\n}\n\n.projects a {\n  color: black;\n}\n\n#heroku {\n  margin-bottom: -2%;\n}\n\n.projectIcons {\n  text-align: center;\n}\n\n.projectImg {\n  width: 60%;\n  min-height: 310px;\n  height: auto;\n}\n\n.projectImg img {\n  width: 100%;\n  min-height: 310px;\n  height: auto;\n}\n\n.leftProject md-card {\n  float: left;\n  border-bottom: 2px solid #BDBDBD;\n  border-right: 2px solid #BDBDBD;\n}\n\n.rightProject md-card {\n  float: right;\n  border-bottom: 2px solid #BDBDBD;\n  border-left: 2px solid #BDBDBD;\n}\n\n.right {\n  float: right;\n}\n\n.left {\n  float: left;\n}\n\n.buttons {\n  width: 100%;\n  padding: 4%;\n  text-align: center;\n  background-color: #EEEEEE;\n}\n\n.buttons a {\n  margin-top: 4%;\n  width: 400px;\n  height: 80px;\n  line-height: 40px;\n}\n\n/* FOOTER */\nfooter a {\n  color: black;\n  margin: 10%;\n}\n\n/* MOBILE VIEW */\n@media (max-width: 460px) {\n  body {\n    margin: 0;\n  }\n\n  .nav-wrapper {\n    width: 100%;\n  }\n\n  .heading {\n    text-align: center;\n    margin: 0;\n    padding: 1%;\n  }\n\n  /* RESUME */\n  .top {\n    font-size: 1.5em;\n    padding: 4%;\n  }\n\n  .sidebar {\n    float: none;\n    width: 100%;\n    min-height: 0px;\n  }\n\n  .sidebar md-card {\n    height: auto;\n  }\n\n  .mainResume {\n    width: 100%;\n    float: none;\n  }\n\n  /* PORTFOLIO */\n  .projects {\n    padding: 2%;\n  }\n\n  .projects md-card {\n    text-align: center;\n    width: auto;\n    min-height: 0px;\n    margin-bottom: 20px;\n  }\n\n  .projectImg {\n    width: 100%;\n    min-height: 0px;\n    height: auto;\n  }\n\n  .projectImg img {\n    width: 100%;\n    min-height: 0px;\n    height: auto;\n    border: 2px solid #BDBDBD;\n    margin: 0;\n  }\n\n\n  .buttons a {\n    width: 100%;\n  }\n}\n\n@media (max-width: 768px) {\n  .projects {\n    padding: 2%;\n  }\n\n  .projects md-card {\n    text-align: center;\n    width: 100%;\n    min-height: 0px;\n    margin-bottom: 20px;\n  }\n\n  .projectImg {\n    width: 100%;\n    min-height: 0px;\n    height: auto;\n  }\n\n  .projectImg img {\n    width: 100%;\n    min-height: 0px;\n    height: auto;\n    border: 2px solid #BDBDBD;\n    margin: 0;\n  }\n\n}\n", ""]);

// exports


/***/ }),

/***/ 204:
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var stylesInDom = {},
	memoize = function(fn) {
		var memo;
		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	},
	isOldIE = memoize(function() {
		return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase());
	}),
	getHeadElement = memoize(function () {
		return document.head || document.getElementsByTagName("head")[0];
	}),
	singletonElement = null,
	singletonCounter = 0,
	styleElementsInsertedAtTop = [];

module.exports = function(list, options) {
	if(typeof DEBUG !== "undefined" && DEBUG) {
		if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};
	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (typeof options.singleton === "undefined") options.singleton = isOldIE();

	// By default, add <style> tags to the bottom of <head>.
	if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

	var styles = listToStyles(list);
	addStylesToDom(styles, options);

	return function update(newList) {
		var mayRemove = [];
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			domStyle.refs--;
			mayRemove.push(domStyle);
		}
		if(newList) {
			var newStyles = listToStyles(newList);
			addStylesToDom(newStyles, options);
		}
		for(var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];
			if(domStyle.refs === 0) {
				for(var j = 0; j < domStyle.parts.length; j++)
					domStyle.parts[j]();
				delete stylesInDom[domStyle.id];
			}
		}
	};
}

function addStylesToDom(styles, options) {
	for(var i = 0; i < styles.length; i++) {
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

function listToStyles(list) {
	var styles = [];
	var newStyles = {};
	for(var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};
		if(!newStyles[id])
			styles.push(newStyles[id] = {id: id, parts: [part]});
		else
			newStyles[id].parts.push(part);
	}
	return styles;
}

function insertStyleElement(options, styleElement) {
	var head = getHeadElement();
	var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
	if (options.insertAt === "top") {
		if(!lastStyleElementInsertedAtTop) {
			head.insertBefore(styleElement, head.firstChild);
		} else if(lastStyleElementInsertedAtTop.nextSibling) {
			head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			head.appendChild(styleElement);
		}
		styleElementsInsertedAtTop.push(styleElement);
	} else if (options.insertAt === "bottom") {
		head.appendChild(styleElement);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement(styleElement) {
	styleElement.parentNode.removeChild(styleElement);
	var idx = styleElementsInsertedAtTop.indexOf(styleElement);
	if(idx >= 0) {
		styleElementsInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement(options) {
	var styleElement = document.createElement("style");
	styleElement.type = "text/css";
	insertStyleElement(options, styleElement);
	return styleElement;
}

function createLinkElement(options) {
	var linkElement = document.createElement("link");
	linkElement.rel = "stylesheet";
	insertStyleElement(options, linkElement);
	return linkElement;
}

function addStyle(obj, options) {
	var styleElement, update, remove;

	if (options.singleton) {
		var styleIndex = singletonCounter++;
		styleElement = singletonElement || (singletonElement = createStyleElement(options));
		update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
		remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
	} else if(obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function") {
		styleElement = createLinkElement(options);
		update = updateLink.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
			if(styleElement.href)
				URL.revokeObjectURL(styleElement.href);
		};
	} else {
		styleElement = createStyleElement(options);
		update = applyToTag.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
		};
	}

	update(obj);

	return function updateStyle(newObj) {
		if(newObj) {
			if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
				return;
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

function applyToSingletonTag(styleElement, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = styleElement.childNodes;
		if (childNodes[index]) styleElement.removeChild(childNodes[index]);
		if (childNodes.length) {
			styleElement.insertBefore(cssNode, childNodes[index]);
		} else {
			styleElement.appendChild(cssNode);
		}
	}
}

function applyToTag(styleElement, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		styleElement.setAttribute("media", media)
	}

	if(styleElement.styleSheet) {
		styleElement.styleSheet.cssText = css;
	} else {
		while(styleElement.firstChild) {
			styleElement.removeChild(styleElement.firstChild);
		}
		styleElement.appendChild(document.createTextNode(css));
	}
}

function updateLink(linkElement, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	if(sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = linkElement.href;

	linkElement.href = URL.createObjectURL(blob);

	if(oldSrc)
		URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ 208:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(83);


/***/ }),

/***/ 22:
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function() {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		var result = [];
		for(var i = 0; i < this.length; i++) {
			var item = this[i];
			if(item[2]) {
				result.push("@media " + item[2] + "{" + item[1] + "}");
			} else {
				result.push(item[1]);
			}
		}
		return result.join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};


/***/ }),

/***/ 83:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(146);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(204)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../node_modules/postcss-loader/index.js!./styles.css", function() {
			var newContent = require("!!../node_modules/css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../node_modules/postcss-loader/index.js!./styles.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ })

},[208]);
//# sourceMappingURL=styles.bundle.js.map