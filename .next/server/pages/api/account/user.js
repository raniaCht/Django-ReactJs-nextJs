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
exports.id = "pages/api/account/user";
exports.ids = ["pages/api/account/user"];
exports.modules = {

/***/ "cookie":
/*!*************************!*\
  !*** external "cookie" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("cookie");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("react-redux");

/***/ }),

/***/ "./src/config/index.js":
/*!*****************************!*\
  !*** ./src/config/index.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"API_URL\": () => (/* binding */ API_URL),\n/* harmony export */   \"SERVER_URL\": () => (/* binding */ SERVER_URL)\n/* harmony export */ });\nconst API_URL = \"http://127.0.0.1:8000\";\nconst SERVER_URL = process.env.NEXT_SERVER_API_URL;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29uZmlnL2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQU8sS0FBSyxDQUFDQSxPQUFPLEdBQUdDLHVCQUErQjtBQUMvQyxLQUFLLENBQUNHLFVBQVUsR0FBR0gsT0FBTyxDQUFDQyxHQUFHLENBQUNHLG1CQUFtQiIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kLy4vc3JjL2NvbmZpZy9pbmRleC5qcz8zM2E2Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBBUElfVVJMID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBJX1VSTDtcclxuZXhwb3J0IGNvbnN0IFNFUlZFUl9VUkwgPSBwcm9jZXNzLmVudi5ORVhUX1NFUlZFUl9BUElfVVJMOyJdLCJuYW1lcyI6WyJBUElfVVJMIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX0FQSV9VUkwiLCJTRVJWRVJfVVJMIiwiTkVYVF9TRVJWRVJfQVBJX1VSTCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/config/index.js\n");

/***/ }),

/***/ "./src/pages/api/account/user.js":
/*!***************************************!*\
  !*** ./src/pages/api/account/user.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cookie */ \"cookie\");\n/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cookie__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _config_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../config/index */ \"./src/config/index.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{\n    if (req.method === 'GET') {\n        const cookies = cookie__WEBPACK_IMPORTED_MODULE_0___default().parse(req.headers.cookie ?? '');\n        const access = cookies.access ?? false;\n        if (access === false) {\n            return res.status(401).json({\n                error: 'User unauthorized to make this request'\n            });\n        }\n        try {\n            const apiRes = await fetch(`${_config_index__WEBPACK_IMPORTED_MODULE_1__.API_URL}/auth/users/me/`, {\n                method: 'GET',\n                headers: {\n                    'Accept': 'application/json',\n                    'Authorization': `Bearer ${access}`\n                }\n            });\n            const data = await apiRes.json();\n            if (apiRes.status === 200) {\n                return res.status(200).json({\n                    user: data\n                });\n            } else {\n                return res.status(apiRes.status).json({\n                    error: data.error\n                });\n            }\n        } catch (err) {\n            return res.status(500).json({\n                error: 'Something went wrong when retrieving user'\n            });\n        }\n    } else {\n        res.setHeader('Allow', [\n            'GET'\n        ]);\n        return res.status(405).json({\n            error: `Method ${req.method} not allowed`\n        });\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvYXBpL2FjY291bnQvdXNlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBMkI7QUFDb0I7QUFDTztBQUV0RCxpRUFBTSxPQUFnQkksR0FBRyxFQUFFQyxHQUFHLEdBQUssQ0FBQztJQUNoQyxFQUFFLEVBQUVELEdBQUcsQ0FBQ0UsTUFBTSxLQUFLLENBQUssTUFBRSxDQUFDO1FBQ3ZCLEtBQUssQ0FBQ0MsT0FBTyxHQUFHUCxtREFBWSxDQUFDSSxHQUFHLENBQUNLLE9BQU8sQ0FBQ1QsTUFBTSxJQUFJLENBQUU7UUFDckQsS0FBSyxDQUFDVSxNQUFNLEdBQUdILE9BQU8sQ0FBQ0csTUFBTSxJQUFJLEtBQUs7UUFFdEMsRUFBRSxFQUFFQSxNQUFNLEtBQUssS0FBSyxFQUFFLENBQUM7WUFDbkIsTUFBTSxDQUFDTCxHQUFHLENBQUNNLE1BQU0sQ0FBQyxHQUFHLEVBQUVDLElBQUksQ0FBQyxDQUFDO2dCQUN6QkMsS0FBSyxFQUFFLENBQXdDO1lBQ25ELENBQUM7UUFDTCxDQUFDO1FBRUQsR0FBRyxDQUFDLENBQUM7WUFDRCxLQUFLLENBQUNDLE1BQU0sR0FBRyxLQUFLLENBQUNDLEtBQUssSUFBSWQsa0RBQU8sQ0FBQyxlQUFlLEdBQUcsQ0FBQztnQkFDckRLLE1BQU0sRUFBRSxDQUFLO2dCQUNiRyxPQUFPLEVBQUUsQ0FBQztvQkFDTixDQUFRLFNBQUUsQ0FBa0I7b0JBQzVCLENBQWUsaUJBQUcsT0FBTyxFQUFFQyxNQUFNO2dCQUNyQyxDQUFDO1lBQ0wsQ0FBQztZQUNELEtBQUssQ0FBQ00sSUFBSSxHQUFHLEtBQUssQ0FBQ0YsTUFBTSxDQUFDRixJQUFJO1lBRTlCLEVBQUUsRUFBRUUsTUFBTSxDQUFDSCxNQUFNLEtBQUssR0FBRyxFQUFFLENBQUM7Z0JBQ3hCLE1BQU0sQ0FBQ04sR0FBRyxDQUFDTSxNQUFNLENBQUMsR0FBRyxFQUFFQyxJQUFJLENBQUMsQ0FBQztvQkFDekJLLElBQUksRUFBRUQsSUFBSTtnQkFDZCxDQUFDO1lBQ0wsQ0FBQyxNQUFNLENBQUM7Z0JBQ0osTUFBTSxDQUFDWCxHQUFHLENBQUNNLE1BQU0sQ0FBQ0csTUFBTSxDQUFDSCxNQUFNLEVBQUVDLElBQUksQ0FBQyxDQUFDO29CQUNuQ0MsS0FBSyxFQUFFRyxJQUFJLENBQUNILEtBQUs7Z0JBQ3JCLENBQUM7WUFDTCxDQUFDO1FBQ0wsQ0FBQyxDQUFDLEtBQUssRUFBRUssR0FBRyxFQUFFLENBQUM7WUFDWCxNQUFNLENBQUNiLEdBQUcsQ0FBQ00sTUFBTSxDQUFDLEdBQUcsRUFBRUMsSUFBSSxDQUFDLENBQUM7Z0JBQ3pCQyxLQUFLLEVBQUUsQ0FBMkM7WUFDdEQsQ0FBQztRQUNMLENBQUM7SUFDTCxDQUFDLE1BQU0sQ0FBQztRQUNKUixHQUFHLENBQUNjLFNBQVMsQ0FBQyxDQUFPLFFBQUUsQ0FBQztZQUFBLENBQUs7UUFBQSxDQUFDO1FBQzlCLE1BQU0sQ0FBQ2QsR0FBRyxDQUFDTSxNQUFNLENBQUMsR0FBRyxFQUFFQyxJQUFJLENBQUMsQ0FBQztZQUN6QkMsS0FBSyxHQUFHLE9BQU8sRUFBRVQsR0FBRyxDQUFDRSxNQUFNLENBQUMsWUFBWTtRQUM1QyxDQUFDO0lBQ0wsQ0FBQztBQUNMLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9wYWdlcy9hcGkvYWNjb3VudC91c2VyLmpzPzk2NWUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNvb2tpZSBmcm9tICdjb29raWUnO1xyXG5pbXBvcnQgeyBBUElfVVJMIH0gZnJvbSAnLi4vLi4vLi4vY29uZmlnL2luZGV4JztcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IsIHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgKHJlcSwgcmVzKSA9PiB7XHJcbiAgICBpZiAocmVxLm1ldGhvZCA9PT0gJ0dFVCcpIHtcclxuICAgICAgICBjb25zdCBjb29raWVzID0gY29va2llLnBhcnNlKHJlcS5oZWFkZXJzLmNvb2tpZSA/PyAnJyk7XHJcbiAgICAgICAgY29uc3QgYWNjZXNzID0gY29va2llcy5hY2Nlc3MgPz8gZmFsc2U7XHJcblxyXG4gICAgICAgIGlmIChhY2Nlc3MgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMSkuanNvbih7XHJcbiAgICAgICAgICAgICAgICBlcnJvcjogJ1VzZXIgdW5hdXRob3JpemVkIHRvIG1ha2UgdGhpcyByZXF1ZXN0J1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGFwaVJlcyA9IGF3YWl0IGZldGNoKGAke0FQSV9VUkx9L2F1dGgvdXNlcnMvbWUvYCwge1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICAgICAgICAgICdBdXRob3JpemF0aW9uJzogYEJlYXJlciAke2FjY2Vzc31gXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgYXBpUmVzLmpzb24oKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChhcGlSZXMuc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbih7XHJcbiAgICAgICAgICAgICAgICAgICAgdXNlcjogZGF0YVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyhhcGlSZXMuc3RhdHVzKS5qc29uKHtcclxuICAgICAgICAgICAgICAgICAgICBlcnJvcjogZGF0YS5lcnJvclxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHtcclxuICAgICAgICAgICAgICAgIGVycm9yOiAnU29tZXRoaW5nIHdlbnQgd3Jvbmcgd2hlbiByZXRyaWV2aW5nIHVzZXInXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmVzLnNldEhlYWRlcignQWxsb3cnLCBbJ0dFVCddKTtcclxuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDUpLmpzb24oe1xyXG4gICAgICAgICAgICBlcnJvcjogYE1ldGhvZCAke3JlcS5tZXRob2R9IG5vdCBhbGxvd2VkYFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59OyJdLCJuYW1lcyI6WyJjb29raWUiLCJBUElfVVJMIiwidXNlU2VsZWN0b3IiLCJ1c2VEaXNwYXRjaCIsInJlcSIsInJlcyIsIm1ldGhvZCIsImNvb2tpZXMiLCJwYXJzZSIsImhlYWRlcnMiLCJhY2Nlc3MiLCJzdGF0dXMiLCJqc29uIiwiZXJyb3IiLCJhcGlSZXMiLCJmZXRjaCIsImRhdGEiLCJ1c2VyIiwiZXJyIiwic2V0SGVhZGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/api/account/user.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/api/account/user.js"));
module.exports = __webpack_exports__;

})();