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
exports.id = "pages/api/service/list";
exports.ids = ["pages/api/service/list"];
exports.modules = {

/***/ "./src/config/index.js?9236":
/*!*****************************!*\
  !*** ./src/config/index.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"API_URL\": () => (/* binding */ API_URL),\n/* harmony export */   \"SERVER_URL\": () => (/* binding */ SERVER_URL)\n/* harmony export */ });\nconst API_URL = \"http://127.0.0.1:8000\";\nconst SERVER_URL = process.env.NEXT_SERVER_API_URL;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29uZmlnL2luZGV4LmpzPzkyMzYuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBTyxLQUFLLENBQUNBLE9BQU8sR0FBR0MsdUJBQStCO0FBQy9DLEtBQUssQ0FBQ0csVUFBVSxHQUFHSCxPQUFPLENBQUNDLEdBQUcsQ0FBQ0csbUJBQW1CIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvY29uZmlnL2luZGV4LmpzPzMzYTYiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IEFQSV9VUkwgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUElfVVJMO1xyXG5leHBvcnQgY29uc3QgU0VSVkVSX1VSTCA9IHByb2Nlc3MuZW52Lk5FWFRfU0VSVkVSX0FQSV9VUkw7Il0sIm5hbWVzIjpbIkFQSV9VUkwiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfQVBJX1VSTCIsIlNFUlZFUl9VUkwiLCJORVhUX1NFUlZFUl9BUElfVVJMIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/config/index.js?9236\n");

/***/ }),

/***/ "./src/pages/api/service/list.js":
/*!***************************************!*\
  !*** ./src/pages/api/service/list.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _config_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../config/index */ \"./src/config/index.js?9236\");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{\n    if (req.method === 'GET') {\n        try {\n            const apiRes = await fetch(`${_config_index__WEBPACK_IMPORTED_MODULE_0__.API_URL}/services/`, {\n                method: 'GET'\n            });\n            const data = await apiRes.json();\n            if (apiRes.status === 200) {\n                return res.status(200).json(data);\n            } else {\n                return res.status(apiRes.status).json({\n                    error: 'Getting the services failed'\n                });\n            }\n        } catch (e) {\n            console.log('wrong');\n            return res.status(500).json({\n                error: 'something going wrong'\n            });\n        }\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvYXBpL3NlcnZpY2UvbGlzdC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUErQztBQUMvQyxpRUFBTSxPQUFnQkMsR0FBRyxFQUFFQyxHQUFHLEdBQUssQ0FBQztJQUNoQyxFQUFFLEVBQUVELEdBQUcsQ0FBQ0UsTUFBTSxLQUFLLENBQUssTUFBRSxDQUFDO1FBQ3ZCLEdBQUcsQ0FBQyxDQUFDO1lBQ0QsS0FBSyxDQUFDQyxNQUFNLEdBQUcsS0FBSyxDQUFDQyxLQUFLLElBQUlMLGtEQUFPLENBQUMsVUFBVSxHQUFHLENBQUM7Z0JBQ2hERyxNQUFNLEVBQUUsQ0FBSztZQUNqQixDQUFDO1lBRUQsS0FBSyxDQUFDRyxJQUFJLEdBQUcsS0FBSyxDQUFDRixNQUFNLENBQUNHLElBQUk7WUFFOUIsRUFBRSxFQUFFSCxNQUFNLENBQUNJLE1BQU0sS0FBSyxHQUFHLEVBQUUsQ0FBQztnQkFDeEIsTUFBTSxDQUFDTixHQUFHLENBQUNNLE1BQU0sQ0FBQyxHQUFHLEVBQUVELElBQUksQ0FBQ0QsSUFBSTtZQUNwQyxDQUFDLE1BQU0sQ0FBQztnQkFDSixNQUFNLENBQUNKLEdBQUcsQ0FBQ00sTUFBTSxDQUFDSixNQUFNLENBQUNJLE1BQU0sRUFBRUQsSUFBSSxDQUFDLENBQUM7b0JBQ25DRSxLQUFLLEVBQUUsQ0FBNkI7Z0JBQ3hDLENBQUM7WUFDTCxDQUFDO1FBQ0wsQ0FBQyxDQUNELEtBQUssRUFBRUMsQ0FBQyxFQUFFLENBQUM7WUFDUEMsT0FBTyxDQUFDQyxHQUFHLENBQUMsQ0FBTztZQUNuQixNQUFNLENBQUNWLEdBQUcsQ0FBQ00sTUFBTSxDQUFDLEdBQUcsRUFBRUQsSUFBSSxDQUFDLENBQUM7Z0JBQ3pCRSxLQUFLLEVBQUUsQ0FBdUI7WUFDbEMsQ0FBQztRQUNMLENBQUM7SUFDTCxDQUFDO0FBQ0wsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kLy4vc3JjL3BhZ2VzL2FwaS9zZXJ2aWNlL2xpc3QuanM/MTllMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBUElfVVJMIH0gZnJvbSAnLi4vLi4vLi4vY29uZmlnL2luZGV4JztcclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgKHJlcSwgcmVzKSA9PiB7XHJcbiAgICBpZiAocmVxLm1ldGhvZCA9PT0gJ0dFVCcpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCBhcGlSZXMgPSBhd2FpdCBmZXRjaChgJHtBUElfVVJMfS9zZXJ2aWNlcy9gLCB7XHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBhcGlSZXMuanNvbigpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGFwaVJlcy5zdGF0dXMgPT09IDIwMCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKGRhdGEpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoYXBpUmVzLnN0YXR1cykuanNvbih7XHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3I6ICdHZXR0aW5nIHRoZSBzZXJ2aWNlcyBmYWlsZWQnXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnd3JvbmcnKTtcclxuICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHtcclxuICAgICAgICAgICAgICAgIGVycm9yOiAnc29tZXRoaW5nIGdvaW5nIHdyb25nJ1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXSwibmFtZXMiOlsiQVBJX1VSTCIsInJlcSIsInJlcyIsIm1ldGhvZCIsImFwaVJlcyIsImZldGNoIiwiZGF0YSIsImpzb24iLCJzdGF0dXMiLCJlcnJvciIsImUiLCJjb25zb2xlIiwibG9nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/api/service/list.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/api/service/list.js"));
module.exports = __webpack_exports__;

})();