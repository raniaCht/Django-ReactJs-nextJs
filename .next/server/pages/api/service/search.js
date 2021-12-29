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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../config */ \"./src/config/index.js?9236\");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async ({ body , method  }, res)=>{\n    if (method == \"POST\") {\n        try {\n            const { term , wilaya , type  } = JSON.parse(body);\n            let query = \"\";\n            if (term) {\n                query += `&search=${term}`;\n            }\n            if (wilaya) {\n                query += `&location=${wilaya.replace(\" \", \"+\")}`;\n            }\n            if (type) {\n                if (type == -1) {\n                    query += `&type=`;\n                } else {\n                    query += `&type=${type.replace(\" \", \"+\")}`;\n                }\n            }\n            if (query.length) {\n                query = query.substring(1);\n            }\n            const data = await fetch(`${_config__WEBPACK_IMPORTED_MODULE_0__.API_URL}/services/search?${query}`);\n            const json = await data.json();\n            return res.status(200).json(json);\n        } catch (err) {\n            return res.status(500).json({\n                error: err\n            });\n        }\n    } else {\n        res.setHeader('Allow', [\n            'POST'\n        ]);\n        return res.status(405).json({\n            error: `Method ${method} now allowed`\n        });\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvYXBpL3NlcnZpY2Uvc2VhcmNoLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQXlDO0FBRXpDLGlFQUFNLE9BQWdCLENBQUMsQ0FBQ0MsSUFBSSxHQUFFQyxNQUFNLEVBQUMsQ0FBQyxFQUFFQyxHQUFHLEdBQUssQ0FBQztJQUM3QyxFQUFFLEVBQUVELE1BQU0sSUFBSSxDQUFNLE9BQUUsQ0FBQztRQUNuQixHQUFHLENBQUMsQ0FBQztZQUNELEtBQUssQ0FBQyxDQUFDLENBQUNFLElBQUksR0FBRUMsTUFBTSxHQUFFQyxJQUFJLEVBQUMsQ0FBQyxHQUFHQyxJQUFJLENBQUNDLEtBQUssQ0FBQ1AsSUFBSTtZQUM5QyxHQUFHLENBQUNRLEtBQUssR0FBRyxDQUFFO1lBQ2QsRUFBRSxFQUFFTCxJQUFJLEVBQUUsQ0FBQztnQkFDUEssS0FBSyxLQUFLLFFBQVEsRUFBRUwsSUFBSTtZQUM1QixDQUFDO1lBQ0QsRUFBRSxFQUFFQyxNQUFNLEVBQUUsQ0FBQztnQkFDVEksS0FBSyxLQUFLLFVBQVUsRUFBRUosTUFBTSxDQUFDSyxPQUFPLENBQUMsQ0FBRyxJQUFFLENBQUc7WUFDakQsQ0FBQztZQUNELEVBQUUsRUFBRUosSUFBSSxFQUFFLENBQUM7Z0JBQ1AsRUFBRSxFQUFFQSxJQUFJLEtBQUssQ0FBQyxFQUFFLENBQUM7b0JBQ2JHLEtBQUssS0FBSyxNQUFNO2dCQUNwQixDQUFDLE1BQU0sQ0FBQztvQkFDSkEsS0FBSyxLQUFLLE1BQU0sRUFBRUgsSUFBSSxDQUFDSSxPQUFPLENBQUMsQ0FBRyxJQUFFLENBQUc7Z0JBQzNDLENBQUM7WUFDTCxDQUFDO1lBQ0QsRUFBRSxFQUFFRCxLQUFLLENBQUNFLE1BQU0sRUFBRSxDQUFDO2dCQUNmRixLQUFLLEdBQUdBLEtBQUssQ0FBQ0csU0FBUyxDQUFDLENBQUM7WUFDN0IsQ0FBQztZQUNELEtBQUssQ0FBQ0MsSUFBSSxHQUFHLEtBQUssQ0FBQ0MsS0FBSyxJQUFJZCw0Q0FBTyxDQUFDLGlCQUFpQixFQUFFUyxLQUFLO1lBQzVELEtBQUssQ0FBQ00sSUFBSSxHQUFHLEtBQUssQ0FBQ0YsSUFBSSxDQUFDRSxJQUFJO1lBQzVCLE1BQU0sQ0FBQ1osR0FBRyxDQUFDYSxNQUFNLENBQUMsR0FBRyxFQUFFRCxJQUFJLENBQUNBLElBQUk7UUFDcEMsQ0FBQyxDQUFDLEtBQUssRUFBRUUsR0FBRyxFQUFFLENBQUM7WUFDWCxNQUFNLENBQUNkLEdBQUcsQ0FBQ2EsTUFBTSxDQUFDLEdBQUcsRUFBRUQsSUFBSSxDQUFDLENBQUM7Z0JBQ3pCRyxLQUFLLEVBQUVELEdBQUc7WUFDZCxDQUFDO1FBQ0wsQ0FBQztJQUNMLENBQUMsTUFBTSxDQUFDO1FBQ0pkLEdBQUcsQ0FBQ2dCLFNBQVMsQ0FBQyxDQUFPLFFBQUUsQ0FBQztZQUFBLENBQU07UUFBQSxDQUFDO1FBQy9CLE1BQU0sQ0FBQ2hCLEdBQUcsQ0FBQ2EsTUFBTSxDQUFDLEdBQUcsRUFBRUQsSUFBSSxDQUFDLENBQUM7WUFBQ0csS0FBSyxHQUFHLE9BQU8sRUFBRWhCLE1BQU0sQ0FBQyxZQUFZO1FBQUUsQ0FBQztJQUN6RSxDQUFDO0FBQ0wsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kLy4vc3JjL3BhZ2VzL2FwaS9zZXJ2aWNlL3NlYXJjaC5qcz8zMmExIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFQSV9VUkwgfSBmcm9tIFwiLi4vLi4vLi4vY29uZmlnXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyAoeyBib2R5LCBtZXRob2QgfSwgcmVzKSA9PiB7XHJcbiAgICBpZiAobWV0aG9kID09IFwiUE9TVFwiKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgeyB0ZXJtLCB3aWxheWEsIHR5cGUgfSA9IEpTT04ucGFyc2UoYm9keSlcclxuICAgICAgICAgICAgbGV0IHF1ZXJ5ID0gXCJcIlxyXG4gICAgICAgICAgICBpZiAodGVybSkge1xyXG4gICAgICAgICAgICAgICAgcXVlcnkgKz0gYCZzZWFyY2g9JHt0ZXJtfWBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAod2lsYXlhKSB7XHJcbiAgICAgICAgICAgICAgICBxdWVyeSArPSBgJmxvY2F0aW9uPSR7d2lsYXlhLnJlcGxhY2UoXCIgXCIsIFwiK1wiKX1gO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0eXBlKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZSA9PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5ICs9IGAmdHlwZT1gO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBxdWVyeSArPSBgJnR5cGU9JHt0eXBlLnJlcGxhY2UoXCIgXCIsIFwiK1wiKX1gO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChxdWVyeS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIHF1ZXJ5ID0gcXVlcnkuc3Vic3RyaW5nKDEpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGZldGNoKGAke0FQSV9VUkx9L3NlcnZpY2VzL3NlYXJjaD8ke3F1ZXJ5fWApXHJcbiAgICAgICAgICAgIGNvbnN0IGpzb24gPSBhd2FpdCBkYXRhLmpzb24oKVxyXG4gICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oanNvbilcclxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHtcclxuICAgICAgICAgICAgICAgIGVycm9yOiBlcnJcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJlcy5zZXRIZWFkZXIoJ0FsbG93JywgWydQT1NUJ10pO1xyXG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwNSkuanNvbih7IGVycm9yOiBgTWV0aG9kICR7bWV0aG9kfSBub3cgYWxsb3dlZGAgfSk7XHJcbiAgICB9XHJcbn0iXSwibmFtZXMiOlsiQVBJX1VSTCIsImJvZHkiLCJtZXRob2QiLCJyZXMiLCJ0ZXJtIiwid2lsYXlhIiwidHlwZSIsIkpTT04iLCJwYXJzZSIsInF1ZXJ5IiwicmVwbGFjZSIsImxlbmd0aCIsInN1YnN0cmluZyIsImRhdGEiLCJmZXRjaCIsImpzb24iLCJzdGF0dXMiLCJlcnIiLCJlcnJvciIsInNldEhlYWRlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/api/service/search.js\n");

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