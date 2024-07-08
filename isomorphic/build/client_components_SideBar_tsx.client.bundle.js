"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkisomorphic"] = self["webpackChunkisomorphic"] || []).push([["client_components_SideBar_tsx"],{

/***/ "./client/components/SideBar.tsx":
/*!***************************************!*\
  !*** ./client/components/SideBar.tsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/.pnpm/react@18.3.1/node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _const_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../const/user */ \"./const/user.js\");\n/* harmony import */ var _wrapPromise__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../wrapPromise */ \"./client/wrapPromise.ts\");\n\n\n\nvar networkRequest = function networkRequest() {\n  return new Promise(function (resolve, reject) {\n    setTimeout(function () {\n      return resolve(_const_user__WEBPACK_IMPORTED_MODULE_1__.user);\n    }, 1000);\n  });\n};\nvar getData = function getData() {\n  var promise = networkRequest();\n  return (0,_wrapPromise__WEBPACK_IMPORTED_MODULE_2__.wrapPromise)(promise);\n};\nvar resource = getData();\nvar Sidebar = function Sidebar() {\n  var user = resource.read();\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"nav\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"img\", {\n    src: user.logo,\n    alt: \"Profile Picture\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, user.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"ul\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"li\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"a\", {\n    href: \"#\"\n  }, \"Home\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"li\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"a\", {\n    href: \"#\"\n  }, \"Blog\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"li\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"a\", {\n    href: \"#\"\n  }, \"About\"))));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Sidebar);\n\n//# sourceURL=webpack://isomorphic/./client/components/SideBar.tsx?");

/***/ }),

/***/ "./client/wrapPromise.ts":
/*!*******************************!*\
  !*** ./client/wrapPromise.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   wrapPromise: () => (/* binding */ wrapPromise)\n/* harmony export */ });\nvar wrapPromise = function wrapPromise(promise) {\n  var status = \"pending\";\n  var result;\n  var suspender = promise.then(function (res) {\n    result = res;\n    status = \"success\";\n  }, function (err) {\n    result = err;\n    status = \"error\";\n  });\n  return {\n    read: function read() {\n      if (status === \"pending\") {\n        throw suspender;\n      } else if (status === \"error\") {\n        throw result;\n      } else if (status === \"success\") {\n        return result;\n      }\n    }\n  };\n};\n\n//# sourceURL=webpack://isomorphic/./client/wrapPromise.ts?");

/***/ }),

/***/ "./const/user.js":
/*!***********************!*\
  !*** ./const/user.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   user: () => (/* binding */ user)\n/* harmony export */ });\nvar user = {\n  name: \"Optimus Prime\",\n  logo: \"optimus.png\"\n};\n\n//# sourceURL=webpack://isomorphic/./const/user.js?");

/***/ })

}]);