"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/product/[id]";
exports.ids = ["pages/product/[id]"];
exports.modules = {

/***/ "./pages/product/[id].js":
/*!*******************************!*\
  !*** ./pages/product/[id].js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst ProductItem = ()=>{\n    const { 0: avocado , 1: setAvocado  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const url = `/api/avo/${router.query.id}`;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        window.fetch(url).then((response)=>response.json()\n        ).then((item)=>{\n            if (!item) {\n                return;\n            }\n            setAvocado(item);\n        });\n    });\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: avocado.name\n            }, void 0, false, {\n                fileName: \"/home/jose-sanclemente/coding/nextjs/avocado-store/pages/product/[id].js\",\n                lineNumber: 24,\n                columnNumber: 4\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                src: avocado.image\n            }, void 0, false, {\n                fileName: \"/home/jose-sanclemente/coding/nextjs/avocado-store/pages/product/[id].js\",\n                lineNumber: 25,\n                columnNumber: 4\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/jose-sanclemente/coding/nextjs/avocado-store/pages/product/[id].js\",\n        lineNumber: 23,\n        columnNumber: 3\n    }, undefined));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductItem);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wcm9kdWN0L1tpZF0uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBa0Q7QUFDWDtBQUV2QyxLQUFLLENBQUNJLFdBQVcsT0FBUyxDQUFDO0lBQzFCLEtBQUssTUFBRUMsT0FBTyxNQUFFQyxVQUFVLE1BQUlMLCtDQUFRLENBQUMsQ0FBQyxDQUFDO0lBQ3pDLEtBQUssQ0FBQ00sTUFBTSxHQUFHSixzREFBUztJQUN4QixLQUFLLENBQUNLLEdBQUcsSUFBSSxTQUFTLEVBQUVELE1BQU0sQ0FBQ0UsS0FBSyxDQUFDQyxFQUFFO0lBRXZDUixnREFBUyxLQUFPLENBQUM7UUFDaEJTLE1BQU0sQ0FDSkMsS0FBSyxDQUFDSixHQUFHLEVBQ1RLLElBQUksRUFBRUMsUUFBUSxHQUFLQSxRQUFRLENBQUNDLElBQUk7VUFDaENGLElBQUksRUFBRUcsSUFBSSxHQUFLLENBQUM7WUFDaEIsRUFBRSxHQUFHQSxJQUFJLEVBQUUsQ0FBQztnQkFDWCxNQUFNO1lBQ1AsQ0FBQztZQUVEVixVQUFVLENBQUNVLElBQUk7UUFDaEIsQ0FBQztJQUNILENBQUM7SUFFRCxNQUFNLDZFQUNKQyxDQUFHOzt3RkFDRkMsQ0FBRTswQkFBRWIsT0FBTyxDQUFDYyxJQUFJOzs7Ozs7d0ZBQ2hCQyxDQUFHO2dCQUFDQyxHQUFHLEVBQUVoQixPQUFPLENBQUNpQixLQUFLOzs7Ozs7Ozs7Ozs7QUFHMUIsQ0FBQztBQUVELGlFQUFlbEIsV0FBVyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYXZvY2Fkby1zdG9yZS8uL3BhZ2VzL3Byb2R1Y3QvW2lkXS5qcz9mNjg1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuXG5jb25zdCBQcm9kdWN0SXRlbSA9ICgpID0+IHtcblx0Y29uc3QgW2F2b2NhZG8sIHNldEF2b2NhZG9dID0gdXNlU3RhdGUoe30pO1xuXHRjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblx0Y29uc3QgdXJsID0gYC9hcGkvYXZvLyR7cm91dGVyLnF1ZXJ5LmlkfWA7XG5cblx0dXNlRWZmZWN0KCgpID0+IHtcblx0XHR3aW5kb3dcblx0XHRcdC5mZXRjaCh1cmwpXG5cdFx0XHQudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcblx0XHRcdC50aGVuKChpdGVtKSA9PiB7XG5cdFx0XHRcdGlmICghaXRlbSkge1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHNldEF2b2NhZG8oaXRlbSk7XG5cdFx0XHR9KTtcblx0fSk7XG5cblx0cmV0dXJuIChcblx0XHQ8ZGl2PlxuXHRcdFx0PGgyPnthdm9jYWRvLm5hbWV9PC9oMj5cblx0XHRcdDxpbWcgc3JjPXthdm9jYWRvLmltYWdlfSAvPlxuXHRcdDwvZGl2PlxuXHQpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdEl0ZW07XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVJvdXRlciIsIlByb2R1Y3RJdGVtIiwiYXZvY2FkbyIsInNldEF2b2NhZG8iLCJyb3V0ZXIiLCJ1cmwiLCJxdWVyeSIsImlkIiwid2luZG93IiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwiaXRlbSIsImRpdiIsImgyIiwibmFtZSIsImltZyIsInNyYyIsImltYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/product/[id].js\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/product/[id].js"));
module.exports = __webpack_exports__;

})();