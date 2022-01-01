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
exports.id = "pages/api/account/logout";
exports.ids = ["pages/api/account/logout"];
exports.modules = {

/***/ "cookie":
/*!*************************!*\
  !*** external "cookie" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("cookie");

/***/ }),

/***/ "./src/pages/api/account/logout.js":
/*!*****************************************!*\
  !*** ./src/pages/api/account/logout.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cookie */ \"cookie\");\n/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cookie__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{\n    if (req.method === 'POST') {\n        res.setHeader('Set-Cookie', [\n            cookie__WEBPACK_IMPORTED_MODULE_0___default().serialize('access', '', {\n                httpOnly: true,\n                secure: \"development\" !== 'development',\n                expires: new Date(0),\n                sameSite: 'strict',\n                path: '/api/'\n            }),\n            cookie__WEBPACK_IMPORTED_MODULE_0___default().serialize('refresh', '', {\n                httpOnly: true,\n                secure: \"development\" !== 'development',\n                expires: new Date(0),\n                sameSite: 'strict',\n                path: '/api/'\n            })\n        ]);\n        return res.status(200).json({\n            success: 'Successfully logged out'\n        });\n    } else {\n        res.setHeader('Allow', [\n            'POST'\n        ]);\n        return res.status(405).json({\n            error: `Method ${req.method} now allowed`\n        });\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvYXBpL2FjY291bnQvbG9nb3V0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUEyQjtBQUUzQixpRUFBTSxPQUFnQkMsR0FBRyxFQUFFQyxHQUFHLEdBQUssQ0FBQztJQUNoQyxFQUFFLEVBQUVELEdBQUcsQ0FBQ0UsTUFBTSxLQUFLLENBQU0sT0FBRSxDQUFDO1FBQ3hCRCxHQUFHLENBQUNFLFNBQVMsQ0FBQyxDQUFZLGFBQUUsQ0FBQztZQUN6QkosdURBQWdCLENBQ1osQ0FBUSxTQUFFLENBQUUsR0FBRSxDQUFDO2dCQUNmTSxRQUFRLEVBQUUsSUFBSTtnQkFDZEMsTUFBTSxFQVJ0QixDQUFhLGlCQVFvQyxDQUFhO2dCQUM5Q0MsT0FBTyxFQUFFLEdBQUcsQ0FBQ0MsSUFBSSxDQUFDLENBQUM7Z0JBQ25CQyxRQUFRLEVBQUUsQ0FBUTtnQkFDbEJDLElBQUksRUFBRSxDQUFPO1lBQ2pCLENBQUM7WUFFRFgsdURBQWdCLENBQ1osQ0FBUyxVQUFFLENBQUUsR0FBRSxDQUFDO2dCQUNoQk0sUUFBUSxFQUFFLElBQUk7Z0JBQ2RDLE1BQU0sRUFqQnRCLENBQWEsaUJBaUJvQyxDQUFhO2dCQUM5Q0MsT0FBTyxFQUFFLEdBQUcsQ0FBQ0MsSUFBSSxDQUFDLENBQUM7Z0JBQ25CQyxRQUFRLEVBQUUsQ0FBUTtnQkFDbEJDLElBQUksRUFBRSxDQUFPO1lBQ2pCLENBQUM7UUFFTCxDQUFDO1FBRUQsTUFBTSxDQUFDVCxHQUFHLENBQUNVLE1BQU0sQ0FBQyxHQUFHLEVBQUVDLElBQUksQ0FBQyxDQUFDO1lBQ3pCQyxPQUFPLEVBQUUsQ0FBeUI7UUFDdEMsQ0FBQztJQUNMLENBQUMsTUFBTSxDQUFDO1FBQ0paLEdBQUcsQ0FBQ0UsU0FBUyxDQUFDLENBQU8sUUFBRSxDQUFDO1lBQUEsQ0FBTTtRQUFBLENBQUM7UUFDL0IsTUFBTSxDQUFDRixHQUFHLENBQUNVLE1BQU0sQ0FBQyxHQUFHLEVBQUVDLElBQUksQ0FBQyxDQUFDO1lBQ3pCRSxLQUFLLEdBQUcsT0FBTyxFQUFFZCxHQUFHLENBQUNFLE1BQU0sQ0FBQyxZQUFZO1FBQzVDLENBQUM7SUFDTCxDQUFDO0FBQ0wsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kLy4vc3JjL3BhZ2VzL2FwaS9hY2NvdW50L2xvZ291dC5qcz81ZDNkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjb29raWUgZnJvbSAnY29va2llJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIChyZXEsIHJlcykgPT4ge1xyXG4gICAgaWYgKHJlcS5tZXRob2QgPT09ICdQT1NUJykge1xyXG4gICAgICAgIHJlcy5zZXRIZWFkZXIoJ1NldC1Db29raWUnLCBbXHJcbiAgICAgICAgICAgIGNvb2tpZS5zZXJpYWxpemUoXHJcbiAgICAgICAgICAgICAgICAnYWNjZXNzJywgJycsIHtcclxuICAgICAgICAgICAgICAgIGh0dHBPbmx5OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgc2VjdXJlOiBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ2RldmVsb3BtZW50JyxcclxuICAgICAgICAgICAgICAgIGV4cGlyZXM6IG5ldyBEYXRlKDApLFxyXG4gICAgICAgICAgICAgICAgc2FtZVNpdGU6ICdzdHJpY3QnLFxyXG4gICAgICAgICAgICAgICAgcGF0aDogJy9hcGkvJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgIGNvb2tpZS5zZXJpYWxpemUoXHJcbiAgICAgICAgICAgICAgICAncmVmcmVzaCcsICcnLCB7XHJcbiAgICAgICAgICAgICAgICBodHRwT25seTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIHNlY3VyZTogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdkZXZlbG9wbWVudCcsXHJcbiAgICAgICAgICAgICAgICBleHBpcmVzOiBuZXcgRGF0ZSgwKSxcclxuICAgICAgICAgICAgICAgIHNhbWVTaXRlOiAnc3RyaWN0JyxcclxuICAgICAgICAgICAgICAgIHBhdGg6ICcvYXBpLydcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgXSk7XHJcblxyXG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbih7XHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6ICdTdWNjZXNzZnVsbHkgbG9nZ2VkIG91dCdcclxuICAgICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmVzLnNldEhlYWRlcignQWxsb3cnLCBbJ1BPU1QnXSk7XHJcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDA1KS5qc29uKHtcclxuICAgICAgICAgICAgZXJyb3I6IGBNZXRob2QgJHtyZXEubWV0aG9kfSBub3cgYWxsb3dlZGBcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufTsiXSwibmFtZXMiOlsiY29va2llIiwicmVxIiwicmVzIiwibWV0aG9kIiwic2V0SGVhZGVyIiwic2VyaWFsaXplIiwiaHR0cE9ubHkiLCJzZWN1cmUiLCJleHBpcmVzIiwiRGF0ZSIsInNhbWVTaXRlIiwicGF0aCIsInN0YXR1cyIsImpzb24iLCJzdWNjZXNzIiwiZXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/api/account/logout.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/api/account/logout.js"));
module.exports = __webpack_exports__;

})();