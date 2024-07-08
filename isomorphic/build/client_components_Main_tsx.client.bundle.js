"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkisomorphic"] = self["webpackChunkisomorphic"] || []).push([["client_components_Main_tsx"],{

/***/ "./client/components/Main.tsx":
/*!************************************!*\
  !*** ./client/components/Main.tsx ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/.pnpm/react@18.3.1/node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _const_post__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../const/post */ \"./const/post.js\");\n/* harmony import */ var _wrapPromise__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../wrapPromise */ \"./client/wrapPromise.ts\");\n\n\n\nvar networkRequest = function networkRequest() {\n  return new Promise(function (resolve, reject) {\n    setTimeout(function () {\n      return resolve(_const_post__WEBPACK_IMPORTED_MODULE_1__.post);\n    }, 2000);\n  });\n};\nvar getData = function getData() {\n  var promise = networkRequest();\n  return (0,_wrapPromise__WEBPACK_IMPORTED_MODULE_2__.wrapPromise)(promise);\n};\nvar resource = getData();\nvar Main = function Main() {\n  var post = resource.read();\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"main\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"article\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h1\", null, post.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"address\", null, post.author), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"time\", {\n    dateTime: post.createdAt\n  }, \"~ \", post.createdAt)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"section\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, post.content.p1), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, post.content.p2), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, post.content.p3))));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Main);\n\n//# sourceURL=webpack://isomorphic/./client/components/Main.tsx?");

/***/ }),

/***/ "./client/wrapPromise.ts":
/*!*******************************!*\
  !*** ./client/wrapPromise.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   wrapPromise: () => (/* binding */ wrapPromise)\n/* harmony export */ });\nvar wrapPromise = function wrapPromise(promise) {\n  var status = \"pending\";\n  var result;\n  var suspender = promise.then(function (res) {\n    result = res;\n    status = \"success\";\n  }, function (err) {\n    result = err;\n    status = \"error\";\n  });\n  return {\n    read: function read() {\n      if (status === \"pending\") {\n        throw suspender;\n      } else if (status === \"error\") {\n        throw result;\n      } else if (status === \"success\") {\n        return result;\n      }\n    }\n  };\n};\n\n//# sourceURL=webpack://isomorphic/./client/wrapPromise.ts?");

/***/ }),

/***/ "./const/post.js":
/*!***********************!*\
  !*** ./const/post.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   post: () => (/* binding */ post)\n/* harmony export */ });\nvar post = {\n  author: \"optimus\",\n  createdAt: \"01/01/2023\",\n  title: \"Optimus saves the day again\",\n  content: {\n    p1: \"Earth has played a huge role in the live-action Transformers saga which has only deepened with each sequel. This connection to the Transformers gained another level with the release of 2018's Bumblebee, which took place prior to the other movies in the franchise.\",\n    p2: \"B-127 is sent to Earth after war breaks out on Cybertron. Optimus hopes to use the planet as the staging ground for a new Autobot base, and its importance is made clear to Bumblebee when he is sent to protect Earth.\",\n    p3: \"Even in the face of losing Cybertron to the combined might of the Decepticon forces, Optimus Prime never abandoned his fight to liberate the planet. During the events of the animated Transformers movie, Prime and the Autobots staged a plan to attack the Decepticons and free Cybertron from one of its moons.\"\n  }\n};\n\n//# sourceURL=webpack://isomorphic/./const/post.js?");

/***/ })

}]);