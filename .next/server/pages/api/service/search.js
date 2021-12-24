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
exports.id = "pages/api/service/search";
exports.ids = ["pages/api/service/search"];
exports.modules = {

/***/ "./src/config/index.js?9236":
/*!*****************************!*\
  !*** ./src/config/index.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"API_URL\": () => (/* binding */ API_URL),\n/* harmony export */   \"SERVER_URL\": () => (/* binding */ SERVER_URL)\n/* harmony export */ });\nconst API_URL = \"http://127.0.0.1:8000\";\nconst SERVER_URL = process.env.NEXT_SERVER_API_URL;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29uZmlnL2luZGV4LmpzPzkyMzYuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBTyxLQUFLLENBQUNBLE9BQU8sR0FBR0MsdUJBQStCO0FBQy9DLEtBQUssQ0FBQ0csVUFBVSxHQUFHSCxPQUFPLENBQUNDLEdBQUcsQ0FBQ0csbUJBQW1CIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvY29uZmlnL2luZGV4LmpzPzMzYTYiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IEFQSV9VUkwgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUElfVVJMO1xyXG5leHBvcnQgY29uc3QgU0VSVkVSX1VSTCA9IHByb2Nlc3MuZW52Lk5FWFRfU0VSVkVSX0FQSV9VUkw7Il0sIm5hbWVzIjpbIkFQSV9VUkwiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfQVBJX1VSTCIsIlNFUlZFUl9VUkwiLCJORVhUX1NFUlZFUl9BUElfVVJMIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/config/index.js?9236\n");

/***/ }),

/***/ "./src/pages/api/service/search.js":
/*!*****************************************!*\
  !*** ./src/pages/api/service/search.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../config */ \"./src/config/index.js?9236\");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async ({ body , method  }, res)=>{\n    if (method == \"POST\") {\n        try {\n            const { term  } = JSON.parse(body);\n            let query = \"\";\n            if (term) {\n                query += `&search=${term}`;\n            }\n            if (query.length) {\n                query = query.substring(1);\n            }\n            const data = await fetch(`${_config__WEBPACK_IMPORTED_MODULE_0__.API_URL}/services/search?${query}`);\n            const json = await data.json();\n            return res.status(200).json(json);\n        } catch (err) {\n            return res.status(500).json({\n                error: err\n            });\n        }\n    } else {\n        res.setHeader('Allow', [\n            'POST'\n        ]);\n        return res.status(405).json({\n            error: `Method ${method} now allowed`\n        });\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvYXBpL3NlcnZpY2Uvc2VhcmNoLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQXlDO0FBRXpDLGlFQUFNLE9BQWdCLENBQUMsQ0FBQ0MsSUFBSSxHQUFFQyxNQUFNLEVBQUMsQ0FBQyxFQUFFQyxHQUFHLEdBQUssQ0FBQztJQUM3QyxFQUFFLEVBQUVELE1BQU0sSUFBSSxDQUFNLE9BQUUsQ0FBQztRQUNuQixHQUFHLENBQUMsQ0FBQztZQUNELEtBQUssQ0FBQyxDQUFDLENBQUNFLElBQUksRUFBQyxDQUFDLEdBQUdDLElBQUksQ0FBQ0MsS0FBSyxDQUFDTCxJQUFJO1lBQ2hDLEdBQUcsQ0FBQ00sS0FBSyxHQUFHLENBQUU7WUFDZCxFQUFFLEVBQUVILElBQUksRUFBRSxDQUFDO2dCQUNQRyxLQUFLLEtBQUssUUFBUSxFQUFFSCxJQUFJO1lBQzVCLENBQUM7WUFDRCxFQUFFLEVBQUVHLEtBQUssQ0FBQ0MsTUFBTSxFQUFFLENBQUM7Z0JBQ2ZELEtBQUssR0FBR0EsS0FBSyxDQUFDRSxTQUFTLENBQUMsQ0FBQztZQUM3QixDQUFDO1lBQ0QsS0FBSyxDQUFDQyxJQUFJLEdBQUcsS0FBSyxDQUFDQyxLQUFLLElBQUlYLDRDQUFPLENBQUMsaUJBQWlCLEVBQUVPLEtBQUs7WUFDNUQsS0FBSyxDQUFDSyxJQUFJLEdBQUcsS0FBSyxDQUFDRixJQUFJLENBQUNFLElBQUk7WUFDNUIsTUFBTSxDQUFDVCxHQUFHLENBQUNVLE1BQU0sQ0FBQyxHQUFHLEVBQUVELElBQUksQ0FBQ0EsSUFBSTtRQUNwQyxDQUFDLENBQUMsS0FBSyxFQUFFRSxHQUFHLEVBQUUsQ0FBQztZQUNYLE1BQU0sQ0FBQ1gsR0FBRyxDQUFDVSxNQUFNLENBQUMsR0FBRyxFQUFFRCxJQUFJLENBQUMsQ0FBQztnQkFDekJHLEtBQUssRUFBRUQsR0FBRztZQUNkLENBQUM7UUFDTCxDQUFDO0lBQ0wsQ0FBQyxNQUFNLENBQUM7UUFDSlgsR0FBRyxDQUFDYSxTQUFTLENBQUMsQ0FBTyxRQUFFLENBQUM7WUFBQSxDQUFNO1FBQUEsQ0FBQztRQUMvQixNQUFNLENBQUNiLEdBQUcsQ0FBQ1UsTUFBTSxDQUFDLEdBQUcsRUFBRUQsSUFBSSxDQUFDLENBQUM7WUFBQ0csS0FBSyxHQUFHLE9BQU8sRUFBRWIsTUFBTSxDQUFDLFlBQVk7UUFBRSxDQUFDO0lBQ3pFLENBQUM7QUFDTCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvcGFnZXMvYXBpL3NlcnZpY2Uvc2VhcmNoLmpzPzMyYTEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQVBJX1VSTCB9IGZyb20gXCIuLi8uLi8uLi9jb25maWdcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jICh7IGJvZHksIG1ldGhvZCB9LCByZXMpID0+IHtcclxuICAgIGlmIChtZXRob2QgPT0gXCJQT1NUXCIpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCB7IHRlcm0gfSA9IEpTT04ucGFyc2UoYm9keSlcclxuICAgICAgICAgICAgbGV0IHF1ZXJ5ID0gXCJcIlxyXG4gICAgICAgICAgICBpZiAodGVybSkge1xyXG4gICAgICAgICAgICAgICAgcXVlcnkgKz0gYCZzZWFyY2g9JHt0ZXJtfWBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAocXVlcnkubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICBxdWVyeSA9IHF1ZXJ5LnN1YnN0cmluZygxKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBmZXRjaChgJHtBUElfVVJMfS9zZXJ2aWNlcy9zZWFyY2g/JHtxdWVyeX1gKVxyXG4gICAgICAgICAgICBjb25zdCBqc29uID0gYXdhaXQgZGF0YS5qc29uKClcclxuICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKGpzb24pXHJcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7XHJcbiAgICAgICAgICAgICAgICBlcnJvcjogZXJyXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICByZXMuc2V0SGVhZGVyKCdBbGxvdycsIFsnUE9TVCddKTtcclxuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDUpLmpzb24oeyBlcnJvcjogYE1ldGhvZCAke21ldGhvZH0gbm93IGFsbG93ZWRgIH0pO1xyXG4gICAgfVxyXG59Il0sIm5hbWVzIjpbIkFQSV9VUkwiLCJib2R5IiwibWV0aG9kIiwicmVzIiwidGVybSIsIkpTT04iLCJwYXJzZSIsInF1ZXJ5IiwibGVuZ3RoIiwic3Vic3RyaW5nIiwiZGF0YSIsImZldGNoIiwianNvbiIsInN0YXR1cyIsImVyciIsImVycm9yIiwic2V0SGVhZGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/api/service/search.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/api/service/search.js"));
module.exports = __webpack_exports__;

})();