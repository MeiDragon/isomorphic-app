"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkisomorphic"] = self["webpackChunkisomorphic"] || []).push([["client_components_Extra_tsx"],{

/***/ "./client/components/Extra.tsx":
/*!*************************************!*\
  !*** ./client/components/Extra.tsx ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/.pnpm/react@18.3.1/node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _const_posts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../const/posts */ \"./const/posts.js\");\n/* harmony import */ var _wrapPromise__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../wrapPromise */ \"./client/wrapPromise.ts\");\n\n\n\nvar networkRequest = function networkRequest() {\n  return new Promise(function (resolve, reject) {\n    setTimeout(function () {\n      return resolve(_const_posts__WEBPACK_IMPORTED_MODULE_1__.posts);\n    }, 3000);\n  });\n};\nvar getData = function getData() {\n  var promise = networkRequest();\n  return (0,_wrapPromise__WEBPACK_IMPORTED_MODULE_2__.wrapPromise)(promise);\n};\nvar resource = getData();\nvar Extra = function Extra() {\n  var posts = resource.read();\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"aside\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h1\", null, \"Related Content\"), posts.map(function (p) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"article\", {\n      key: p.title\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h3\", null, p.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"address\", null, p.author), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"time\", {\n      dateTime: p.createdAt\n    }, \"~ \", p.createdAt)));\n  }));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Extra);\n\n//# sourceURL=webpack://isomorphic/./client/components/Extra.tsx?");

/***/ }),

/***/ "./client/wrapPromise.ts":
/*!*******************************!*\
  !*** ./client/wrapPromise.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   wrapPromise: () => (/* binding */ wrapPromise)\n/* harmony export */ });\nvar wrapPromise = function wrapPromise(promise) {\n  var status = \"pending\";\n  var result;\n  var suspender = promise.then(function (res) {\n    result = res;\n    status = \"success\";\n  }, function (err) {\n    result = err;\n    status = \"error\";\n  });\n  return {\n    read: function read() {\n      if (status === \"pending\") {\n        throw suspender;\n      } else if (status === \"error\") {\n        throw result;\n      } else if (status === \"success\") {\n        return result;\n      }\n    }\n  };\n};\n\n//# sourceURL=webpack://isomorphic/./client/wrapPromise.ts?");

/***/ }),

/***/ "./const/posts.js":
/*!************************!*\
  !*** ./const/posts.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   posts: () => (/* binding */ posts)\n/* harmony export */ });\nvar posts = [{\n  author: \"optimus\",\n  createdAt: \"01/01/2023\",\n  title: \"Optimus saves the day again\"\n}, {\n  author: \"optimus\",\n  createdAt: \"01/02/2023\",\n  title: \"Bumblebee speaks again!\"\n}, {\n  author: \"optimus\",\n  createdAt: \"01/01/2023\",\n  title: \"My past with Megatron\"\n}];\n\n//# sourceURL=webpack://isomorphic/./const/posts.js?");

/***/ })

}]);