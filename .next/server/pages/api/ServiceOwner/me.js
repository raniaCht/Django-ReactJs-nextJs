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
exports.id = "pages/api/ServiceOwner/me";
exports.ids = ["pages/api/ServiceOwner/me"];
exports.modules = {

/***/ "cookie":
/*!*************************!*\
  !*** external "cookie" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("cookie");

/***/ }),

/***/ "./src/config/index.js":
/*!*****************************!*\
  !*** ./src/config/index.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"API_URL\": () => (/* binding */ API_URL),\n/* harmony export */   \"SERVER_URL\": () => (/* binding */ SERVER_URL)\n/* harmony export */ });\nconst API_URL = \"http://127.0.0.1:8000\";\nconst SERVER_URL = process.env.NEXT_SERVER_API_URL;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29uZmlnL2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQU8sS0FBSyxDQUFDQSxPQUFPLEdBQUdDLHVCQUErQjtBQUMvQyxLQUFLLENBQUNHLFVBQVUsR0FBR0gsT0FBTyxDQUFDQyxHQUFHLENBQUNHLG1CQUFtQiIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kLy4vc3JjL2NvbmZpZy9pbmRleC5qcz8zM2E2Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBBUElfVVJMID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBJX1VSTDtcclxuZXhwb3J0IGNvbnN0IFNFUlZFUl9VUkwgPSBwcm9jZXNzLmVudi5ORVhUX1NFUlZFUl9BUElfVVJMOyJdLCJuYW1lcyI6WyJBUElfVVJMIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX0FQSV9VUkwiLCJTRVJWRVJfVVJMIiwiTkVYVF9TRVJWRVJfQVBJX1VSTCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/config/index.js\n");

/***/ }),

/***/ "./src/pages/api/ServiceOwner/me.js":
/*!******************************************!*\
  !*** ./src/pages/api/ServiceOwner/me.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cookie */ \"cookie\");\n/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cookie__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _config_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../config/index */ \"./src/config/index.js\");\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{\n    if (req.method === 'POST') {\n        const cookies = cookie__WEBPACK_IMPORTED_MODULE_0___default().parse(req.headers.cookie ?? '');\n        const access = cookies.access ?? false;\n        if (access === false) {\n            return res.status(401).json({\n                error: 'User unauthorized to make this request'\n            });\n        }\n        try {\n            const apiRes = await fetch(`${_config_index__WEBPACK_IMPORTED_MODULE_1__.API_URL}/ServiceOwners/me/`, {\n                method: 'GET',\n                headers: {\n                    'Accept': 'application/json',\n                    'Authorization': `Bearer ${access}`\n                }\n            });\n            const data = await apiRes.json();\n            if (apiRes.status === 200) {\n                return res.status(200).json(data);\n            } else {\n                return res.status(apiRes.status).json({\n                    error: data.error\n                });\n            }\n        } catch (err) {\n            return res.status(500).json({\n                error: 'Something went wrong when retrieving user'\n            });\n        }\n    } else {\n        res.setHeader('Allow', [\n            'GET'\n        ]);\n        return res.status(405).json({\n            error: `Method ${req.method} not allowed`\n        });\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvYXBpL1NlcnZpY2VPd25lci9tZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQTJCO0FBQ29CO0FBRS9DLGlFQUFNLE9BQWdCRSxHQUFHLEVBQUVDLEdBQUcsR0FBSyxDQUFDO0lBQ2hDLEVBQUUsRUFBRUQsR0FBRyxDQUFDRSxNQUFNLEtBQUssQ0FBTSxPQUFFLENBQUM7UUFDeEIsS0FBSyxDQUFDQyxPQUFPLEdBQUdMLG1EQUFZLENBQUNFLEdBQUcsQ0FBQ0ssT0FBTyxDQUFDUCxNQUFNLElBQUksQ0FBRTtRQUNyRCxLQUFLLENBQUNRLE1BQU0sR0FBR0gsT0FBTyxDQUFDRyxNQUFNLElBQUksS0FBSztRQUV0QyxFQUFFLEVBQUVBLE1BQU0sS0FBSyxLQUFLLEVBQUUsQ0FBQztZQUNuQixNQUFNLENBQUNMLEdBQUcsQ0FBQ00sTUFBTSxDQUFDLEdBQUcsRUFBRUMsSUFBSSxDQUFDLENBQUM7Z0JBQ3pCQyxLQUFLLEVBQUUsQ0FBd0M7WUFDbkQsQ0FBQztRQUNMLENBQUM7UUFDRCxHQUFHLENBQUMsQ0FBQztZQUNELEtBQUssQ0FBQ0MsTUFBTSxHQUFHLEtBQUssQ0FBQ0MsS0FBSyxJQUFJWixrREFBTyxDQUFDLGtCQUFrQixHQUFHLENBQUM7Z0JBQ3hERyxNQUFNLEVBQUUsQ0FBSztnQkFDYkcsT0FBTyxFQUFFLENBQUM7b0JBQ04sQ0FBUSxTQUFFLENBQWtCO29CQUM1QixDQUFlLGlCQUFHLE9BQU8sRUFBRUMsTUFBTTtnQkFDckMsQ0FBQztZQUNMLENBQUM7WUFDRCxLQUFLLENBQUNNLElBQUksR0FBRyxLQUFLLENBQUNGLE1BQU0sQ0FBQ0YsSUFBSTtZQUU5QixFQUFFLEVBQUVFLE1BQU0sQ0FBQ0gsTUFBTSxLQUFLLEdBQUcsRUFBRSxDQUFDO2dCQUN4QixNQUFNLENBQUNOLEdBQUcsQ0FBQ00sTUFBTSxDQUFDLEdBQUcsRUFBRUMsSUFBSSxDQUFDSSxJQUFJO1lBQ3BDLENBQUMsTUFBTSxDQUFDO2dCQUNKLE1BQU0sQ0FBQ1gsR0FBRyxDQUFDTSxNQUFNLENBQUNHLE1BQU0sQ0FBQ0gsTUFBTSxFQUFFQyxJQUFJLENBQUMsQ0FBQztvQkFDbkNDLEtBQUssRUFBRUcsSUFBSSxDQUFDSCxLQUFLO2dCQUNyQixDQUFDO1lBQ0wsQ0FBQztRQUNMLENBQUMsQ0FBQyxLQUFLLEVBQUVJLEdBQUcsRUFBRSxDQUFDO1lBQ1gsTUFBTSxDQUFDWixHQUFHLENBQUNNLE1BQU0sQ0FBQyxHQUFHLEVBQUVDLElBQUksQ0FBQyxDQUFDO2dCQUN6QkMsS0FBSyxFQUFFLENBQTJDO1lBQ3RELENBQUM7UUFDTCxDQUFDO0lBQ0wsQ0FBQyxNQUFNLENBQUM7UUFDSlIsR0FBRyxDQUFDYSxTQUFTLENBQUMsQ0FBTyxRQUFFLENBQUM7WUFBQSxDQUFLO1FBQUEsQ0FBQztRQUM5QixNQUFNLENBQUNiLEdBQUcsQ0FBQ00sTUFBTSxDQUFDLEdBQUcsRUFBRUMsSUFBSSxDQUFDLENBQUM7WUFDekJDLEtBQUssR0FBRyxPQUFPLEVBQUVULEdBQUcsQ0FBQ0UsTUFBTSxDQUFDLFlBQVk7UUFDNUMsQ0FBQztJQUNMLENBQUM7QUFDTCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvcGFnZXMvYXBpL1NlcnZpY2VPd25lci9tZS5qcz83NWE0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjb29raWUgZnJvbSAnY29va2llJztcclxuaW1wb3J0IHsgQVBJX1VSTCB9IGZyb20gJy4uLy4uLy4uL2NvbmZpZy9pbmRleCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyAocmVxLCByZXMpID0+IHtcclxuICAgIGlmIChyZXEubWV0aG9kID09PSAnUE9TVCcpIHtcclxuICAgICAgICBjb25zdCBjb29raWVzID0gY29va2llLnBhcnNlKHJlcS5oZWFkZXJzLmNvb2tpZSA/PyAnJyk7XHJcbiAgICAgICAgY29uc3QgYWNjZXNzID0gY29va2llcy5hY2Nlc3MgPz8gZmFsc2U7XHJcblxyXG4gICAgICAgIGlmIChhY2Nlc3MgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMSkuanNvbih7XHJcbiAgICAgICAgICAgICAgICBlcnJvcjogJ1VzZXIgdW5hdXRob3JpemVkIHRvIG1ha2UgdGhpcyByZXF1ZXN0J1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgYXBpUmVzID0gYXdhaXQgZmV0Y2goYCR7QVBJX1VSTH0vU2VydmljZU93bmVycy9tZS9gLCB7XHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiBgQmVhcmVyICR7YWNjZXNzfWBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBhcGlSZXMuanNvbigpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGFwaVJlcy5zdGF0dXMgPT09IDIwMCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKGRhdGEpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoYXBpUmVzLnN0YXR1cykuanNvbih7XHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3I6IGRhdGEuZXJyb3IsXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oe1xyXG4gICAgICAgICAgICAgICAgZXJyb3I6ICdTb21ldGhpbmcgd2VudCB3cm9uZyB3aGVuIHJldHJpZXZpbmcgdXNlcidcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICByZXMuc2V0SGVhZGVyKCdBbGxvdycsIFsnR0VUJ10pO1xyXG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwNSkuanNvbih7XHJcbiAgICAgICAgICAgIGVycm9yOiBgTWV0aG9kICR7cmVxLm1ldGhvZH0gbm90IGFsbG93ZWRgXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn07Il0sIm5hbWVzIjpbImNvb2tpZSIsIkFQSV9VUkwiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJjb29raWVzIiwicGFyc2UiLCJoZWFkZXJzIiwiYWNjZXNzIiwic3RhdHVzIiwianNvbiIsImVycm9yIiwiYXBpUmVzIiwiZmV0Y2giLCJkYXRhIiwiZXJyIiwic2V0SGVhZGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/api/ServiceOwner/me.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/api/ServiceOwner/me.js"));
module.exports = __webpack_exports__;

})();