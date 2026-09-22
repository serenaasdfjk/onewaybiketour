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
exports.id = "app/api/auth/logout/route";
exports.ids = ["app/api/auth/logout/route"];
exports.modules = {

/***/ "./action-async-storage.external":
/*!*******************************************************************************!*\
  !*** external "next/dist/client/components/action-async-storage.external.js" ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/action-async-storage.external.js");

/***/ }),

/***/ "./request-async-storage.external":
/*!********************************************************************************!*\
  !*** external "next/dist/client/components/request-async-storage.external.js" ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/request-async-storage.external.js");

/***/ }),

/***/ "./static-generation-async-storage.external":
/*!******************************************************************************************!*\
  !*** external "next/dist/client/components/static-generation-async-storage.external.js" ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/static-generation-async-storage.external.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2Flogout%2Froute&page=%2Fapi%2Fauth%2Flogout%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2Flogout%2Froute.ts&appDir=%2FUsers%2Fserenacelli2%2FDownloads%2Fone%20way%20bike%20tours%2Fonewaybiketour%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fserenacelli2%2FDownloads%2Fone%20way%20bike%20tours%2Fonewaybiketour&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2Flogout%2Froute&page=%2Fapi%2Fauth%2Flogout%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2Flogout%2Froute.ts&appDir=%2FUsers%2Fserenacelli2%2FDownloads%2Fone%20way%20bike%20tours%2Fonewaybiketour%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fserenacelli2%2FDownloads%2Fone%20way%20bike%20tours%2Fonewaybiketour&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_serenacelli2_Downloads_one_way_bike_tours_onewaybiketour_app_api_auth_logout_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/auth/logout/route.ts */ \"(rsc)/./app/api/auth/logout/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/auth/logout/route\",\n        pathname: \"/api/auth/logout\",\n        filename: \"route\",\n        bundlePath: \"app/api/auth/logout/route\"\n    },\n    resolvedPagePath: \"/Users/serenacelli2/Downloads/one way bike tours/onewaybiketour/app/api/auth/logout/route.ts\",\n    nextConfigOutput,\n    userland: _Users_serenacelli2_Downloads_one_way_bike_tours_onewaybiketour_app_api_auth_logout_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/auth/logout/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZhdXRoJTJGbG9nb3V0JTJGcm91dGUmcGFnZT0lMkZhcGklMkZhdXRoJTJGbG9nb3V0JTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGYXV0aCUyRmxvZ291dCUyRnJvdXRlLnRzJmFwcERpcj0lMkZVc2VycyUyRnNlcmVuYWNlbGxpMiUyRkRvd25sb2FkcyUyRm9uZSUyMHdheSUyMGJpa2UlMjB0b3VycyUyRm9uZXdheWJpa2V0b3VyJTJGYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj0lMkZVc2VycyUyRnNlcmVuYWNlbGxpMiUyRkRvd25sb2FkcyUyRm9uZSUyMHdheSUyMGJpa2UlMjB0b3VycyUyRm9uZXdheWJpa2V0b3VyJmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBc0c7QUFDdkM7QUFDYztBQUM0QztBQUN6SDtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsZ0hBQW1CO0FBQzNDO0FBQ0EsY0FBYyx5RUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLGlFQUFpRTtBQUN6RTtBQUNBO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ3VIOztBQUV2SCIsInNvdXJjZXMiOlsid2VicGFjazovL29uZS13YXktYmlrZS10b3Vycy8/MmFhYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCIvVXNlcnMvc2VyZW5hY2VsbGkyL0Rvd25sb2Fkcy9vbmUgd2F5IGJpa2UgdG91cnMvb25ld2F5YmlrZXRvdXIvYXBwL2FwaS9hdXRoL2xvZ291dC9yb3V0ZS50c1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvYXV0aC9sb2dvdXQvcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9hdXRoL2xvZ291dFwiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvYXV0aC9sb2dvdXQvcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCIvVXNlcnMvc2VyZW5hY2VsbGkyL0Rvd25sb2Fkcy9vbmUgd2F5IGJpa2UgdG91cnMvb25ld2F5YmlrZXRvdXIvYXBwL2FwaS9hdXRoL2xvZ291dC9yb3V0ZS50c1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzIH0gPSByb3V0ZU1vZHVsZTtcbmNvbnN0IG9yaWdpbmFsUGF0aG5hbWUgPSBcIi9hcGkvYXV0aC9sb2dvdXQvcm91dGVcIjtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgc2VydmVySG9va3MsXG4gICAgICAgIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgb3JpZ2luYWxQYXRobmFtZSwgcGF0Y2hGZXRjaCwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2Flogout%2Froute&page=%2Fapi%2Fauth%2Flogout%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2Flogout%2Froute.ts&appDir=%2FUsers%2Fserenacelli2%2FDownloads%2Fone%20way%20bike%20tours%2Fonewaybiketour%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fserenacelli2%2FDownloads%2Fone%20way%20bike%20tours%2Fonewaybiketour&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/api/auth/logout/route.ts":
/*!**************************************!*\
  !*** ./app/api/auth/logout/route.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var _lib_supabase_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/lib/supabase/server */ \"(rsc)/./lib/supabase/server.ts\");\n\nasync function POST(request) {\n    if (request.headers.get(\"origin\") !== new URL(request.url).origin) return Response.json({\n        error: \"Request not allowed.\"\n    }, {\n        status: 403\n    });\n    try {\n        const { error } = await (0,_lib_supabase_server__WEBPACK_IMPORTED_MODULE_0__.createClient)().auth.signOut({\n            scope: \"local\"\n        });\n        if (error) throw error;\n        return Response.json({\n            success: true\n        }, {\n            headers: {\n                \"Cache-Control\": \"no-store\"\n            }\n        });\n    } catch  {\n        return Response.json({\n            error: \"Could not log out. Please try again.\"\n        }, {\n            status: 503\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2F1dGgvbG9nb3V0L3JvdXRlLnRzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQXFEO0FBRTlDLGVBQWVDLEtBQUtDLE9BQWdCO0lBQ3pDLElBQUlBLFFBQVFDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLGNBQWMsSUFBSUMsSUFBSUgsUUFBUUksR0FBRyxFQUFFQyxNQUFNLEVBQUUsT0FBT0MsU0FBU0MsSUFBSSxDQUFDO1FBQUVDLE9BQU87SUFBdUIsR0FBRztRQUFFQyxRQUFRO0lBQUk7SUFDekksSUFBSTtRQUNGLE1BQU0sRUFBRUQsS0FBSyxFQUFFLEdBQUcsTUFBTVYsa0VBQVlBLEdBQUdZLElBQUksQ0FBQ0MsT0FBTyxDQUFDO1lBQUVDLE9BQU87UUFBUTtRQUNyRSxJQUFJSixPQUFPLE1BQU1BO1FBQ2pCLE9BQU9GLFNBQVNDLElBQUksQ0FBQztZQUFFTSxTQUFTO1FBQUssR0FBRztZQUFFWixTQUFTO2dCQUFFLGlCQUFpQjtZQUFXO1FBQUU7SUFDckYsRUFBRSxPQUFNO1FBQUUsT0FBT0ssU0FBU0MsSUFBSSxDQUFDO1lBQUVDLE9BQU87UUFBdUMsR0FBRztZQUFFQyxRQUFRO1FBQUk7SUFBSTtBQUN0RyIsInNvdXJjZXMiOlsid2VicGFjazovL29uZS13YXktYmlrZS10b3Vycy8uL2FwcC9hcGkvYXV0aC9sb2dvdXQvcm91dGUudHM/OWI5NyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDbGllbnQgfSBmcm9tIFwiQC9saWIvc3VwYWJhc2Uvc2VydmVyXCI7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBQT1NUKHJlcXVlc3Q6IFJlcXVlc3QpIHtcbiAgaWYgKHJlcXVlc3QuaGVhZGVycy5nZXQoXCJvcmlnaW5cIikgIT09IG5ldyBVUkwocmVxdWVzdC51cmwpLm9yaWdpbikgcmV0dXJuIFJlc3BvbnNlLmpzb24oeyBlcnJvcjogXCJSZXF1ZXN0IG5vdCBhbGxvd2VkLlwiIH0sIHsgc3RhdHVzOiA0MDMgfSk7XG4gIHRyeSB7XG4gICAgY29uc3QgeyBlcnJvciB9ID0gYXdhaXQgY3JlYXRlQ2xpZW50KCkuYXV0aC5zaWduT3V0KHsgc2NvcGU6IFwibG9jYWxcIiB9KTtcbiAgICBpZiAoZXJyb3IpIHRocm93IGVycm9yO1xuICAgIHJldHVybiBSZXNwb25zZS5qc29uKHsgc3VjY2VzczogdHJ1ZSB9LCB7IGhlYWRlcnM6IHsgXCJDYWNoZS1Db250cm9sXCI6IFwibm8tc3RvcmVcIiB9IH0pO1xuICB9IGNhdGNoIHsgcmV0dXJuIFJlc3BvbnNlLmpzb24oeyBlcnJvcjogXCJDb3VsZCBub3QgbG9nIG91dC4gUGxlYXNlIHRyeSBhZ2Fpbi5cIiB9LCB7IHN0YXR1czogNTAzIH0pOyB9XG59XG4iXSwibmFtZXMiOlsiY3JlYXRlQ2xpZW50IiwiUE9TVCIsInJlcXVlc3QiLCJoZWFkZXJzIiwiZ2V0IiwiVVJMIiwidXJsIiwib3JpZ2luIiwiUmVzcG9uc2UiLCJqc29uIiwiZXJyb3IiLCJzdGF0dXMiLCJhdXRoIiwic2lnbk91dCIsInNjb3BlIiwic3VjY2VzcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./app/api/auth/logout/route.ts\n");

/***/ }),

/***/ "(rsc)/./lib/supabase/server.ts":
/*!********************************!*\
  !*** ./lib/supabase/server.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createClient: () => (/* binding */ createClient)\n/* harmony export */ });\n/* harmony import */ var _supabase_ssr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @supabase/ssr */ \"(rsc)/./node_modules/@supabase/ssr/dist/module/createServerClient.js\");\n/* harmony import */ var next_headers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/headers */ \"(rsc)/./node_modules/next/dist/api/headers.js\");\n\n\nfunction createClient() {\n    const store = (0,next_headers__WEBPACK_IMPORTED_MODULE_0__.cookies)();\n    return (0,_supabase_ssr__WEBPACK_IMPORTED_MODULE_1__.createServerClient)(\"https://crzvpynjdzaudzhfrcgj.supabase.co\", \"sb_publishable_pY3lLo7T_GqZcGI6UuBM4Q_2S4xbVMO\", {\n        cookies: {\n            getAll: ()=>store.getAll(),\n            setAll (values) {\n                try {\n                    values.forEach(({ name, value, options })=>store.set(name, value, options));\n                } catch  {}\n            }\n        }\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvc3VwYWJhc2Uvc2VydmVyLnRzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFtRDtBQUNaO0FBRWhDLFNBQVNFO0lBQ2QsTUFBTUMsUUFBUUYscURBQU9BO0lBQ3JCLE9BQU9ELGlFQUFrQkEsQ0FBQ0ksMENBQW9DLEVBQUdBLGdEQUFnRCxFQUFHO1FBQ2xISCxTQUFTO1lBQ1BPLFFBQVEsSUFBTUwsTUFBTUssTUFBTTtZQUMxQkMsUUFBT0MsTUFBTTtnQkFDWCxJQUFJO29CQUFFQSxPQUFPQyxPQUFPLENBQUMsQ0FBQyxFQUFFQyxJQUFJLEVBQUVDLEtBQUssRUFBRUMsT0FBTyxFQUFFLEdBQUtYLE1BQU1ZLEdBQUcsQ0FBQ0gsTUFBTUMsT0FBT0M7Z0JBQVcsRUFDckYsT0FBTSxDQUFzRTtZQUM5RTtRQUNGO0lBQ0Y7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL29uZS13YXktYmlrZS10b3Vycy8uL2xpYi9zdXBhYmFzZS9zZXJ2ZXIudHM/NjYyNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTZXJ2ZXJDbGllbnQgfSBmcm9tIFwiQHN1cGFiYXNlL3NzclwiO1xuaW1wb3J0IHsgY29va2llcyB9IGZyb20gXCJuZXh0L2hlYWRlcnNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUNsaWVudCgpIHtcbiAgY29uc3Qgc3RvcmUgPSBjb29raWVzKCk7XG4gIHJldHVybiBjcmVhdGVTZXJ2ZXJDbGllbnQocHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfU1VQQUJBU0VfVVJMISwgcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfU1VQQUJBU0VfUFVCTElTSEFCTEVfS0VZISwge1xuICAgIGNvb2tpZXM6IHtcbiAgICAgIGdldEFsbDogKCkgPT4gc3RvcmUuZ2V0QWxsKCksXG4gICAgICBzZXRBbGwodmFsdWVzKSB7XG4gICAgICAgIHRyeSB7IHZhbHVlcy5mb3JFYWNoKCh7IG5hbWUsIHZhbHVlLCBvcHRpb25zIH0pID0+IHN0b3JlLnNldChuYW1lLCB2YWx1ZSwgb3B0aW9ucykpOyB9XG4gICAgICAgIGNhdGNoIHsgLyogTWlkZGxld2FyZSByZWZyZXNoZXMgY29va2llcyBmb3IgcmVhZC1vbmx5IFNlcnZlciBDb21wb25lbnRzLiAqLyB9XG4gICAgICB9LFxuICAgIH0sXG4gIH0pO1xufVxuIl0sIm5hbWVzIjpbImNyZWF0ZVNlcnZlckNsaWVudCIsImNvb2tpZXMiLCJjcmVhdGVDbGllbnQiLCJzdG9yZSIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19TVVBBQkFTRV9VUkwiLCJORVhUX1BVQkxJQ19TVVBBQkFTRV9QVUJMSVNIQUJMRV9LRVkiLCJnZXRBbGwiLCJzZXRBbGwiLCJ2YWx1ZXMiLCJmb3JFYWNoIiwibmFtZSIsInZhbHVlIiwib3B0aW9ucyIsInNldCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./lib/supabase/server.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@supabase","vendor-chunks/tslib","vendor-chunks/iceberg-js","vendor-chunks/cookie"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2Flogout%2Froute&page=%2Fapi%2Fauth%2Flogout%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2Flogout%2Froute.ts&appDir=%2FUsers%2Fserenacelli2%2FDownloads%2Fone%20way%20bike%20tours%2Fonewaybiketour%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fserenacelli2%2FDownloads%2Fone%20way%20bike%20tours%2Fonewaybiketour&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();