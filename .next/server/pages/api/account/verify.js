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
exports.id = "pages/api/account/verify";
exports.ids = ["pages/api/account/verify"];
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

/***/ "./src/pages/api/account/verify.js":
/*!*****************************************!*\
  !*** ./src/pages/api/account/verify.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _config_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../config/index */ \"./src/config/index.js\");\n/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! cookie */ \"cookie\");\n/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(cookie__WEBPACK_IMPORTED_MODULE_1__);\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{\n    if (req.method === 'GET') {\n        const cookies = cookie__WEBPACK_IMPORTED_MODULE_1___default().parse(req.headers.cookie ?? '');\n        const access = cookies.access ?? false;\n        if (access === false) {\n            return res.status(403).json({\n                error: 'User forbidden from making the request'\n            });\n        }\n        const body = JSON.stringify({\n            token: access\n        });\n        try {\n            const apiRes = await fetch(`${_config_index__WEBPACK_IMPORTED_MODULE_0__.API_URL}/auth/jwt/verify/`, {\n                method: 'POST',\n                headers: {\n                    'Accept': 'application/json',\n                    'Content-Type': 'application/json'\n                },\n                body: body\n            });\n            if (apiRes.status === 200) {\n                return res.status(200).json({\n                    success: 'Authenticated successfully'\n                });\n            } else {\n                return res.status(apiRes.status).json({\n                    error: 'Failed to authenticate'\n                });\n            }\n        } catch (err) {\n            return res.status(500).json({\n                error: 'Something went wrong when trying to authenticate'\n            });\n        }\n    } else {\n        res.setHeader('Allow', [\n            'GET'\n        ]);\n        return res.status(405).json({\n            error: `Method ${req.method} not allowed`\n        });\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvYXBpL2FjY291bnQvdmVyaWZ5LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBK0M7QUFDcEI7QUFFM0IsaUVBQU0sT0FBZ0JFLEdBQUcsRUFBRUMsR0FBRyxHQUFLLENBQUM7SUFDaEMsRUFBRSxFQUFFRCxHQUFHLENBQUNFLE1BQU0sS0FBSyxDQUFLLE1BQUUsQ0FBQztRQUN2QixLQUFLLENBQUNDLE9BQU8sR0FBR0osbURBQVksQ0FBQ0MsR0FBRyxDQUFDSyxPQUFPLENBQUNOLE1BQU0sSUFBSSxDQUFFO1FBQ3JELEtBQUssQ0FBQ08sTUFBTSxHQUFHSCxPQUFPLENBQUNHLE1BQU0sSUFBSSxLQUFLO1FBRXRDLEVBQUUsRUFBRUEsTUFBTSxLQUFLLEtBQUssRUFBRSxDQUFDO1lBQ25CLE1BQU0sQ0FBQ0wsR0FBRyxDQUFDTSxNQUFNLENBQUMsR0FBRyxFQUFFQyxJQUFJLENBQUMsQ0FBQztnQkFDekJDLEtBQUssRUFBRSxDQUF3QztZQUNuRCxDQUFDO1FBQ0wsQ0FBQztRQUVELEtBQUssQ0FBQ0MsSUFBSSxHQUFHQyxJQUFJLENBQUNDLFNBQVMsQ0FBQyxDQUFDO1lBQ3pCQyxLQUFLLEVBQUVQLE1BQU07UUFDakIsQ0FBQztRQUVELEdBQUcsQ0FBQyxDQUFDO1lBQ0QsS0FBSyxDQUFDUSxNQUFNLEdBQUcsS0FBSyxDQUFDQyxLQUFLLElBQUlqQixrREFBTyxDQUFDLGlCQUFpQixHQUFHLENBQUM7Z0JBQ3ZESSxNQUFNLEVBQUUsQ0FBTTtnQkFDZEcsT0FBTyxFQUFFLENBQUM7b0JBQ04sQ0FBUSxTQUFFLENBQWtCO29CQUM1QixDQUFjLGVBQUUsQ0FBa0I7Z0JBQ3RDLENBQUM7Z0JBQ0RLLElBQUksRUFBRUEsSUFBSTtZQUNkLENBQUM7WUFFRCxFQUFFLEVBQUVJLE1BQU0sQ0FBQ1AsTUFBTSxLQUFLLEdBQUcsRUFBRSxDQUFDO2dCQUN4QixNQUFNLENBQUNOLEdBQUcsQ0FBQ00sTUFBTSxDQUFDLEdBQUcsRUFBRUMsSUFBSSxDQUFDLENBQUM7b0JBQUNRLE9BQU8sRUFBRSxDQUE0QjtnQkFBQyxDQUFDO1lBQ3pFLENBQUMsTUFBTSxDQUFDO2dCQUNKLE1BQU0sQ0FBQ2YsR0FBRyxDQUFDTSxNQUFNLENBQUNPLE1BQU0sQ0FBQ1AsTUFBTSxFQUFFQyxJQUFJLENBQUMsQ0FBQztvQkFDbkNDLEtBQUssRUFBRSxDQUF3QjtnQkFDbkMsQ0FBQztZQUNMLENBQUM7UUFDTCxDQUFDLENBQUMsS0FBSyxFQUFFUSxHQUFHLEVBQUUsQ0FBQztZQUNYLE1BQU0sQ0FBQ2hCLEdBQUcsQ0FBQ00sTUFBTSxDQUFDLEdBQUcsRUFBRUMsSUFBSSxDQUFDLENBQUM7Z0JBQ3pCQyxLQUFLLEVBQUUsQ0FBa0Q7WUFDN0QsQ0FBQztRQUNMLENBQUM7SUFDTCxDQUFDLE1BQU0sQ0FBQztRQUNKUixHQUFHLENBQUNpQixTQUFTLENBQUMsQ0FBTyxRQUFFLENBQUM7WUFBQSxDQUFLO1FBQUEsQ0FBQztRQUM5QixNQUFNLENBQUNqQixHQUFHLENBQUNNLE1BQU0sQ0FBQyxHQUFHLEVBQUVDLElBQUksQ0FBQyxDQUFDO1lBQUNDLEtBQUssR0FBRyxPQUFPLEVBQUVULEdBQUcsQ0FBQ0UsTUFBTSxDQUFDLFlBQVk7UUFBRSxDQUFDO0lBQzdFLENBQUM7QUFDTCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvcGFnZXMvYXBpL2FjY291bnQvdmVyaWZ5LmpzPzA3N2MiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQVBJX1VSTCB9IGZyb20gJy4uLy4uLy4uL2NvbmZpZy9pbmRleCc7XHJcbmltcG9ydCBjb29raWUgZnJvbSAnY29va2llJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIChyZXEsIHJlcykgPT4ge1xyXG4gICAgaWYgKHJlcS5tZXRob2QgPT09ICdHRVQnKSB7XHJcbiAgICAgICAgY29uc3QgY29va2llcyA9IGNvb2tpZS5wYXJzZShyZXEuaGVhZGVycy5jb29raWUgPz8gJycpO1xyXG4gICAgICAgIGNvbnN0IGFjY2VzcyA9IGNvb2tpZXMuYWNjZXNzID8/IGZhbHNlO1xyXG5cclxuICAgICAgICBpZiAoYWNjZXNzID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDMpLmpzb24oe1xyXG4gICAgICAgICAgICAgICAgZXJyb3I6ICdVc2VyIGZvcmJpZGRlbiBmcm9tIG1ha2luZyB0aGUgcmVxdWVzdCdcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBib2R5ID0gSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICB0b2tlbjogYWNjZXNzXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGFwaVJlcyA9IGF3YWl0IGZldGNoKGAke0FQSV9VUkx9L2F1dGgvand0L3ZlcmlmeS9gLCB7XHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgYm9keTogYm9keVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGlmIChhcGlSZXMuc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbih7IHN1Y2Nlc3M6ICdBdXRoZW50aWNhdGVkIHN1Y2Nlc3NmdWxseScgfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyhhcGlSZXMuc3RhdHVzKS5qc29uKHtcclxuICAgICAgICAgICAgICAgICAgICBlcnJvcjogJ0ZhaWxlZCB0byBhdXRoZW50aWNhdGUnXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oe1xyXG4gICAgICAgICAgICAgICAgZXJyb3I6ICdTb21ldGhpbmcgd2VudCB3cm9uZyB3aGVuIHRyeWluZyB0byBhdXRoZW50aWNhdGUnXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmVzLnNldEhlYWRlcignQWxsb3cnLCBbJ0dFVCddKTtcclxuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDUpLmpzb24oeyBlcnJvcjogYE1ldGhvZCAke3JlcS5tZXRob2R9IG5vdCBhbGxvd2VkYCB9KTtcclxuICAgIH1cclxufTsiXSwibmFtZXMiOlsiQVBJX1VSTCIsImNvb2tpZSIsInJlcSIsInJlcyIsIm1ldGhvZCIsImNvb2tpZXMiLCJwYXJzZSIsImhlYWRlcnMiLCJhY2Nlc3MiLCJzdGF0dXMiLCJqc29uIiwiZXJyb3IiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInRva2VuIiwiYXBpUmVzIiwiZmV0Y2giLCJzdWNjZXNzIiwiZXJyIiwic2V0SGVhZGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/api/account/verify.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/api/account/verify.js"));
module.exports = __webpack_exports__;

})();