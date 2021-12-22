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
exports.id = "pages/api/service/[slug]";
exports.ids = ["pages/api/service/[slug]"];
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

/***/ "./src/pages/api/service/[slug].js":
/*!*****************************************!*\
  !*** ./src/pages/api/service/[slug].js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cookie */ \"cookie\");\n/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cookie__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _config_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../config/index */ \"./src/config/index.js\");\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{\n    if (req.method === 'GET') {\n        try {\n            const cookies = cookie__WEBPACK_IMPORTED_MODULE_0___default().parse(req.headers.cookie ?? '');\n            const access = req.cookies.access ?? false;\n            if (access === false) {\n                return res.status(403).json({\n                    error: 'User forbidden from making the request'\n                });\n            } else {\n                try {\n                    const { slug  } = req.query;\n                    const data = await fetch(`${_config_index__WEBPACK_IMPORTED_MODULE_1__.API_URL}/services/${slug}`, {\n                        method: 'GET',\n                        headers: {\n                            'Accept': 'application/json',\n                            'Authorization': `Bearer ${access}`\n                        }\n                    });\n                    const json = await data.json();\n                    return res.status(200).json(json);\n                } catch (err) {\n                    return res.status(data.status).json({\n                        error: json.error\n                    });\n                }\n            }\n        } catch (err) {\n            return res.status(500).json({\n                error: 'Something went wrong'\n            });\n        }\n    } else {\n        res.setHeader('Allow', [\n            'GET'\n        ]);\n        return res.status(405).json({\n            error: `Method ${req.method} now allowed`\n        });\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvYXBpL3NlcnZpY2UvW3NsdWddLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBMkI7QUFDb0I7QUFFL0MsaUVBQU0sT0FBZ0JFLEdBQUcsRUFBRUMsR0FBRyxHQUFLLENBQUM7SUFDaEMsRUFBRSxFQUFFRCxHQUFHLENBQUNFLE1BQU0sS0FBSyxDQUFLLE1BQUUsQ0FBQztRQUN2QixHQUFHLEVBQUM7WUFDQSxLQUFLLENBQUNDLE9BQU8sR0FBR0wsbURBQVksQ0FBQ0UsR0FBRyxDQUFDSyxPQUFPLENBQUNQLE1BQU0sSUFBSSxDQUFFO1lBQ3JELEtBQUssQ0FBQ1EsTUFBTSxHQUFHTixHQUFHLENBQUNHLE9BQU8sQ0FBQ0csTUFBTSxJQUFJLEtBQUs7WUFDMUMsRUFBRSxFQUFFQSxNQUFNLEtBQUssS0FBSyxFQUFFLENBQUM7Z0JBQ25CLE1BQU0sQ0FBQ0wsR0FBRyxDQUFDTSxNQUFNLENBQUMsR0FBRyxFQUFFQyxJQUFJLENBQUMsQ0FBQztvQkFDekJDLEtBQUssRUFBRSxDQUF3QztnQkFDbkQsQ0FBQztZQUNMLENBQUMsTUFBTSxDQUFDO2dCQUNKLEdBQUcsQ0FBQyxDQUFDO29CQUNELEtBQUssQ0FBQyxDQUFDLENBQUNDLElBQUksRUFBQyxDQUFDLEdBQUdWLEdBQUcsQ0FBQ1csS0FBSztvQkFDMUIsS0FBSyxDQUFDQyxJQUFJLEdBQUcsS0FBSyxDQUFDQyxLQUFLLElBQUlkLGtEQUFPLENBQUMsVUFBVSxFQUFFVyxJQUFJLElBQUksQ0FBQzt3QkFDckRSLE1BQU0sRUFBRSxDQUFLO3dCQUNiRyxPQUFPLEVBQUUsQ0FBQzs0QkFDTixDQUFRLFNBQUUsQ0FBa0I7NEJBQzVCLENBQWUsaUJBQUcsT0FBTyxFQUFFQyxNQUFNO3dCQUNyQyxDQUFDO29CQUNMLENBQUM7b0JBQ0QsS0FBSyxDQUFDRSxJQUFJLEdBQUcsS0FBSyxDQUFDSSxJQUFJLENBQUNKLElBQUk7b0JBQzVCLE1BQU0sQ0FBQ1AsR0FBRyxDQUFDTSxNQUFNLENBQUMsR0FBRyxFQUFFQyxJQUFJLENBQUNBLElBQUk7Z0JBQ3BDLENBQUMsQ0FBQyxLQUFLLEVBQUVNLEdBQUcsRUFBRSxDQUFDO29CQUNYLE1BQU0sQ0FBQ2IsR0FBRyxDQUFDTSxNQUFNLENBQUNLLElBQUksQ0FBQ0wsTUFBTSxFQUFFQyxJQUFJLENBQUMsQ0FBQzt3QkFDakNDLEtBQUssRUFBRUQsSUFBSSxDQUFDQyxLQUFLO29CQUNyQixDQUFDO2dCQUNMLENBQUM7WUFDTCxDQUFDO1FBQ0wsQ0FBQyxNQUFLLEVBQUNLLEdBQUcsRUFBQyxDQUFDO1lBQ1IsTUFBTSxDQUFDYixHQUFHLENBQUNNLE1BQU0sQ0FBQyxHQUFHLEVBQUVDLElBQUksQ0FBQyxDQUFDO2dCQUN6QkMsS0FBSyxFQUFFLENBQXNCO1lBQ2pDLENBQUM7UUFDTCxDQUFDO0lBQ0wsQ0FBQyxNQUFLLENBQUM7UUFDSFIsR0FBRyxDQUFDYyxTQUFTLENBQUMsQ0FBTyxRQUFFLENBQUM7WUFBQSxDQUFLO1FBQUEsQ0FBQztRQUM5QixNQUFNLENBQUNkLEdBQUcsQ0FBQ00sTUFBTSxDQUFDLEdBQUcsRUFBRUMsSUFBSSxDQUFDLENBQUM7WUFBQ0MsS0FBSyxHQUFHLE9BQU8sRUFBRVQsR0FBRyxDQUFDRSxNQUFNLENBQUMsWUFBWTtRQUFFLENBQUM7SUFDN0UsQ0FBQztBQUNMLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9wYWdlcy9hcGkvc2VydmljZS9bc2x1Z10uanM/MmQ3YSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY29va2llIGZyb20gJ2Nvb2tpZSc7XHJcbmltcG9ydCB7IEFQSV9VUkwgfSBmcm9tICcuLi8uLi8uLi9jb25maWcvaW5kZXgnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgKHJlcSwgcmVzKSA9PiB7XHJcbiAgICBpZiAocmVxLm1ldGhvZCA9PT0gJ0dFVCcpIHtcclxuICAgICAgICB0cnl7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvb2tpZXMgPSBjb29raWUucGFyc2UocmVxLmhlYWRlcnMuY29va2llID8/ICcnKTtcclxuICAgICAgICAgICAgY29uc3QgYWNjZXNzID0gcmVxLmNvb2tpZXMuYWNjZXNzID8/IGZhbHNlO1xyXG4gICAgICAgICAgICBpZiAoYWNjZXNzID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAzKS5qc29uKHtcclxuICAgICAgICAgICAgICAgICAgICBlcnJvcjogJ1VzZXIgZm9yYmlkZGVuIGZyb20gbWFraW5nIHRoZSByZXF1ZXN0J1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHsgc2x1ZyB9ID0gcmVxLnF1ZXJ5O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBmZXRjaChgJHtBUElfVVJMfS9zZXJ2aWNlcy8ke3NsdWd9YCwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiBgQmVhcmVyICR7YWNjZXNzfWBcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGpzb24gPSBhd2FpdCBkYXRhLmpzb24oKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oanNvbik7XHJcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyhkYXRhLnN0YXR1cykuanNvbih7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yOiBqc29uLmVycm9yXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9Y2F0Y2goZXJyKXtcclxuICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHtcclxuICAgICAgICAgICAgICAgIGVycm9yOiAnU29tZXRoaW5nIHdlbnQgd3JvbmcnXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1lbHNlIHtcclxuICAgICAgICByZXMuc2V0SGVhZGVyKCdBbGxvdycsIFsnR0VUJ10pO1xyXG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwNSkuanNvbih7IGVycm9yOiBgTWV0aG9kICR7cmVxLm1ldGhvZH0gbm93IGFsbG93ZWRgIH0pO1xyXG4gICAgfVxyXG59Il0sIm5hbWVzIjpbImNvb2tpZSIsIkFQSV9VUkwiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJjb29raWVzIiwicGFyc2UiLCJoZWFkZXJzIiwiYWNjZXNzIiwic3RhdHVzIiwianNvbiIsImVycm9yIiwic2x1ZyIsInF1ZXJ5IiwiZGF0YSIsImZldGNoIiwiZXJyIiwic2V0SGVhZGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/api/service/[slug].js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/api/service/[slug].js"));
module.exports = __webpack_exports__;

})();