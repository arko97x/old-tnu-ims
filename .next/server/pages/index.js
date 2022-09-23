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
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/components/animatedTextWord.js":
/*!**********************************************!*\
  !*** ./pages/components/animatedTextWord.js ***!
  \**********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ AnimatedTextWord)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ \"framer-motion\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_2__]);\nframer_motion__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nfunction AnimatedTextWord(props) {\n    var text = props.text;\n    var delay = props.delay;\n    if (text) {\n        var words = text.split(\" \");\n    }\n    const container = {\n        hidden: {\n            opacity: 0\n        },\n        visible: (i = 1)=>({\n                opacity: 1,\n                transition: {\n                    staggerChildren: 0.12,\n                    delayChildren: delay * i\n                }\n            })\n    };\n    const child = {\n        visible: {\n            opacity: 1,\n            x: 0,\n            y: 0,\n            transition: {\n                type: \"spring\",\n                damping: 12,\n                stiffness: 100\n            }\n        },\n        hidden: {\n            opacity: 0,\n            x: 20,\n            y: -20,\n            transition: {\n                type: \"spring\",\n                damping: 12,\n                stiffness: 100\n            }\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex items-center justify-center\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {\n            className: \"overflow-hidden flex\",\n            variants: container,\n            initial: \"hidden\",\n            animate: \"visible\",\n            children: words ? words.map((word, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.span, {\n                    className: \"mr-[0.3125rem]\",\n                    variants: child,\n                    children: word\n                }, index, false, {\n                    fileName: \"/Users/arko/Desktop/tnu-ims/pages/components/animatedTextWord.js\",\n                    lineNumber: 51,\n                    columnNumber: 21\n                }, this)) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false)\n        }, void 0, false, {\n            fileName: \"/Users/arko/Desktop/tnu-ims/pages/components/animatedTextWord.js\",\n            lineNumber: 44,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/arko/Desktop/tnu-ims/pages/components/animatedTextWord.js\",\n        lineNumber: 43,\n        columnNumber: 9\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb21wb25lbnRzL2FuaW1hdGVkVGV4dFdvcmQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFBeUI7QUFDYTtBQUV2QixTQUFTRSxnQkFBZ0IsQ0FBQ0MsS0FBSyxFQUFFO0lBQzVDLElBQUlDLElBQUksR0FBR0QsS0FBSyxDQUFDQyxJQUFJO0lBQ3JCLElBQUlDLEtBQUssR0FBR0YsS0FBSyxDQUFDRSxLQUFLO0lBQ3ZCLElBQUlELElBQUksRUFBRTtRQUNOLElBQUlFLEtBQUssR0FBR0YsSUFBSSxDQUFDRyxLQUFLLENBQUMsR0FBRyxDQUFDO0lBQy9CLENBQUM7SUFFRCxNQUFNQyxTQUFTLEdBQUc7UUFDZEMsTUFBTSxFQUFFO1lBQUVDLE9BQU8sRUFBRSxDQUFDO1NBQUU7UUFDdEJDLE9BQU8sRUFBRSxDQUFDQyxDQUFDLEdBQUcsQ0FBQyxHQUFNO2dCQUNqQkYsT0FBTyxFQUFFLENBQUM7Z0JBQ1ZHLFVBQVUsRUFBRTtvQkFBRUMsZUFBZSxFQUFFLElBQUk7b0JBQUVDLGFBQWEsRUFBRVYsS0FBSyxHQUFHTyxDQUFDO2lCQUFFO2FBQ2xFO0tBQ0o7SUFFRCxNQUFNSSxLQUFLLEdBQUc7UUFDVkwsT0FBTyxFQUFFO1lBQ0xELE9BQU8sRUFBRSxDQUFDO1lBQ1ZPLENBQUMsRUFBRSxDQUFDO1lBQ0pDLENBQUMsRUFBRSxDQUFDO1lBQ0pMLFVBQVUsRUFBRTtnQkFDUk0sSUFBSSxFQUFFLFFBQVE7Z0JBQ2RDLE9BQU8sRUFBRSxFQUFFO2dCQUNYQyxTQUFTLEVBQUUsR0FBRzthQUNqQjtTQUNKO1FBQ0RaLE1BQU0sRUFBRTtZQUNKQyxPQUFPLEVBQUUsQ0FBQztZQUNWTyxDQUFDLEVBQUUsRUFBRTtZQUNMQyxDQUFDLEVBQUUsQ0FBQyxFQUFFO1lBQ05MLFVBQVUsRUFBRTtnQkFDUk0sSUFBSSxFQUFFLFFBQVE7Z0JBQ2RDLE9BQU8sRUFBRSxFQUFFO2dCQUNYQyxTQUFTLEVBQUUsR0FBRzthQUNqQjtTQUNKO0tBQ0o7SUFFRCxxQkFDSSw4REFBQ0MsS0FBRztRQUFDQyxTQUFTLEVBQUMsa0NBQWtDO2tCQUM3Qyw0RUFBQ3RCLHFEQUFVO1lBQ1BzQixTQUFTLEVBQUMsc0JBQXNCO1lBQ2hDQyxRQUFRLEVBQUVoQixTQUFTO1lBQ25CaUIsT0FBTyxFQUFDLFFBQVE7WUFDaEJDLE9BQU8sRUFBQyxTQUFTO3NCQUVoQnBCLEtBQUssR0FBR0EsS0FBSyxDQUFDcUIsR0FBRyxDQUFDLENBQUNDLElBQUksRUFBRUMsS0FBSyxpQkFDM0IsOERBQUM1QixzREFBVztvQkFDUnNCLFNBQVMsRUFBQyxnQkFBZ0I7b0JBQzFCQyxRQUFRLEVBQUVSLEtBQUs7OEJBR2RZLElBQUk7bUJBRkFDLEtBQUs7Ozs7d0JBR0EsQ0FDaEIsaUJBQUcsNklBQUs7Ozs7O2dCQUNEOzs7OztZQUNYLENBQ1Q7QUFDTCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG51LWltcy8uL3BhZ2VzL2NvbXBvbmVudHMvYW5pbWF0ZWRUZXh0V29yZC5qcz8yZDk1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFuaW1hdGVkVGV4dFdvcmQocHJvcHMpIHtcbiAgICB2YXIgdGV4dCA9IHByb3BzLnRleHRcbiAgICB2YXIgZGVsYXkgPSBwcm9wcy5kZWxheVxuICAgIGlmICh0ZXh0KSB7XG4gICAgICAgIHZhciB3b3JkcyA9IHRleHQuc3BsaXQoXCIgXCIpXG4gICAgfVxuXG4gICAgY29uc3QgY29udGFpbmVyID0ge1xuICAgICAgICBoaWRkZW46IHsgb3BhY2l0eTogMCB9LFxuICAgICAgICB2aXNpYmxlOiAoaSA9IDEpID0+ICh7XG4gICAgICAgICAgICBvcGFjaXR5OiAxLFxuICAgICAgICAgICAgdHJhbnNpdGlvbjogeyBzdGFnZ2VyQ2hpbGRyZW46IDAuMTIsIGRlbGF5Q2hpbGRyZW46IGRlbGF5ICogaSB9LFxuICAgICAgICB9KSxcbiAgICB9XG5cbiAgICBjb25zdCBjaGlsZCA9IHtcbiAgICAgICAgdmlzaWJsZToge1xuICAgICAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgICAgIHg6IDAsXG4gICAgICAgICAgICB5OiAwLFxuICAgICAgICAgICAgdHJhbnNpdGlvbjoge1xuICAgICAgICAgICAgICAgIHR5cGU6IFwic3ByaW5nXCIsXG4gICAgICAgICAgICAgICAgZGFtcGluZzogMTIsXG4gICAgICAgICAgICAgICAgc3RpZmZuZXNzOiAxMDAsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBoaWRkZW46IHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDAsXG4gICAgICAgICAgICB4OiAyMCxcbiAgICAgICAgICAgIHk6IC0yMCxcbiAgICAgICAgICAgIHRyYW5zaXRpb246IHtcbiAgICAgICAgICAgICAgICB0eXBlOiBcInNwcmluZ1wiLFxuICAgICAgICAgICAgICAgIGRhbXBpbmc6IDEyLFxuICAgICAgICAgICAgICAgIHN0aWZmbmVzczogMTAwLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXInPlxuICAgICAgICAgICAgPG1vdGlvbi5kaXZcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9J292ZXJmbG93LWhpZGRlbiBmbGV4J1xuICAgICAgICAgICAgICAgIHZhcmlhbnRzPXtjb250YWluZXJ9XG4gICAgICAgICAgICAgICAgaW5pdGlhbD1cImhpZGRlblwiXG4gICAgICAgICAgICAgICAgYW5pbWF0ZT1cInZpc2libGVcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHt3b3JkcyA/IHdvcmRzLm1hcCgod29yZCwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgPG1vdGlvbi5zcGFuXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J21yLVswLjMxMjVyZW1dJ1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudHM9e2NoaWxkfVxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAge3dvcmR9XG4gICAgICAgICAgICAgICAgICAgIDwvbW90aW9uLnNwYW4+XG4gICAgICAgICAgICAgICAgKSkgOiA8PjwvPn1cbiAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufSJdLCJuYW1lcyI6WyJSZWFjdCIsIm1vdGlvbiIsIkFuaW1hdGVkVGV4dFdvcmQiLCJwcm9wcyIsInRleHQiLCJkZWxheSIsIndvcmRzIiwic3BsaXQiLCJjb250YWluZXIiLCJoaWRkZW4iLCJvcGFjaXR5IiwidmlzaWJsZSIsImkiLCJ0cmFuc2l0aW9uIiwic3RhZ2dlckNoaWxkcmVuIiwiZGVsYXlDaGlsZHJlbiIsImNoaWxkIiwieCIsInkiLCJ0eXBlIiwiZGFtcGluZyIsInN0aWZmbmVzcyIsImRpdiIsImNsYXNzTmFtZSIsInZhcmlhbnRzIiwiaW5pdGlhbCIsImFuaW1hdGUiLCJtYXAiLCJ3b3JkIiwiaW5kZXgiLCJzcGFuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/components/animatedTextWord.js\n");

/***/ }),

/***/ "./pages/components/navbar.js":
/*!************************************!*\
  !*** ./pages/components/navbar.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Navbar)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction Navbar() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full p-8 fixed z-50 top-0\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"bg-white w-full border border-black rounded-xl p-4 flex flex-row justify-between\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                className: \"h-7 sm:h-9 w-auto object-contain\",\n                src: \"/logo-color.png\"\n            }, void 0, false, {\n                fileName: \"/Users/arko/Desktop/tnu-ims/pages/components/navbar.js\",\n                lineNumber: 5,\n                columnNumber: 17\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/arko/Desktop/tnu-ims/pages/components/navbar.js\",\n            lineNumber: 4,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/arko/Desktop/tnu-ims/pages/components/navbar.js\",\n        lineNumber: 3,\n        columnNumber: 9\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb21wb25lbnRzL25hdmJhci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUFlLFNBQVNBLE1BQU0sR0FBRztJQUM3QixxQkFDSSw4REFBQ0MsS0FBRztRQUFDQyxTQUFTLEVBQUMsNkJBQTZCO2tCQUN4Qyw0RUFBQ0QsS0FBRztZQUFDQyxTQUFTLEVBQUMsa0ZBQWtGO3NCQUM3Riw0RUFBQ0MsS0FBRztnQkFBQ0QsU0FBUyxFQUFDLGtDQUFrQztnQkFBQ0UsR0FBRyxFQUFDLGlCQUFpQjs7Ozs7b0JBQUc7Ozs7O2dCQUN4RTs7Ozs7WUFDSixDQUNUO0FBQ0wsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RudS1pbXMvLi9wYWdlcy9jb21wb25lbnRzL25hdmJhci5qcz9iOTZiIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5hdmJhcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndy1mdWxsIHAtOCBmaXhlZCB6LTUwIHRvcC0wJz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdiZy13aGl0ZSB3LWZ1bGwgYm9yZGVyIGJvcmRlci1ibGFjayByb3VuZGVkLXhsIHAtNCBmbGV4IGZsZXgtcm93IGp1c3RpZnktYmV0d2Vlbic+XG4gICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9J2gtNyBzbTpoLTkgdy1hdXRvIG9iamVjdC1jb250YWluJyBzcmM9Jy9sb2dvLWNvbG9yLnBuZycgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59Il0sIm5hbWVzIjpbIk5hdmJhciIsImRpdiIsImNsYXNzTmFtZSIsImltZyIsInNyYyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/components/navbar.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/navbar */ \"./pages/components/navbar.js\");\n/* harmony import */ var _components_animatedTextWord__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/animatedTextWord */ \"./pages/components/animatedTextWord.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"framer-motion\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_animatedTextWord__WEBPACK_IMPORTED_MODULE_3__, framer_motion__WEBPACK_IMPORTED_MODULE_4__]);\n([_components_animatedTextWord__WEBPACK_IMPORTED_MODULE_3__, framer_motion__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\nfunction Home() {\n    const heroImg = {\n        visible: {\n            opacity: 1,\n            x: 0,\n            y: 0,\n            transition: {\n                type: \"spring\",\n                damping: 32,\n                stiffness: 100\n            }\n        },\n        hidden: {\n            opacity: 0,\n            x: 10,\n            y: 20,\n            transition: {\n                type: \"spring\",\n                damping: 32,\n                stiffness: 40\n            }\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Oh, my E!\"\n                    }, void 0, false, {\n                        fileName: \"/Users/arko/Desktop/tnu-ims/pages/index.js\",\n                        lineNumber: 33,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Don't be a trashy human. Trash your E. Responsibly.\"\n                    }, void 0, false, {\n                        fileName: \"/Users/arko/Desktop/tnu-ims/pages/index.js\",\n                        lineNumber: 34,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"/Users/arko/Desktop/tnu-ims/pages/index.js\",\n                        lineNumber: 35,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/arko/Desktop/tnu-ims/pages/index.js\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"w-screen\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_navbar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/arko/Desktop/tnu-ims/pages/index.js\",\n                        lineNumber: 40,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"pt-20 sm:pt-28 p-8 w-full h-screen flex items-center justify-center bg-[#FFF7AB]\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-col items-center justify-center\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {\n                                    variants: heroImg,\n                                    initial: \"hidden\",\n                                    animate: \"visible\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                        className: \"h-24 sm:h-48 w-auto\",\n                                        src: \"/heroImg1.png\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/arko/Desktop/tnu-ims/pages/index.js\",\n                                        lineNumber: 50,\n                                        columnNumber: 15\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/arko/Desktop/tnu-ims/pages/index.js\",\n                                    lineNumber: 45,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"text-2xl sm:text-5xl font-light flex flex-col\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_animatedTextWord__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                            text: \"Don't be a trashy human.\",\n                                            delay: 0.24\n                                        }, void 0, false, {\n                                            fileName: \"/Users/arko/Desktop/tnu-ims/pages/index.js\",\n                                            lineNumber: 55,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_animatedTextWord__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                            text: \"Trash your E! Responsibly.\",\n                                            delay: 0.84\n                                        }, void 0, false, {\n                                            fileName: \"/Users/arko/Desktop/tnu-ims/pages/index.js\",\n                                            lineNumber: 56,\n                                            columnNumber: 15\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/arko/Desktop/tnu-ims/pages/index.js\",\n                                    lineNumber: 54,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/arko/Desktop/tnu-ims/pages/index.js\",\n                            lineNumber: 43,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/arko/Desktop/tnu-ims/pages/index.js\",\n                        lineNumber: 42,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/arko/Desktop/tnu-ims/pages/index.js\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {}, void 0, false, {\n                fileName: \"/Users/arko/Desktop/tnu-ims/pages/index.js\",\n                lineNumber: 62,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/arko/Desktop/tnu-ims/pages/index.js\",\n        lineNumber: 31,\n        columnNumber: 5\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQTRCO0FBQ1k7QUFDb0I7QUFDdEI7QUFFdkIsU0FBU0ksSUFBSSxHQUFHO0lBQzdCLE1BQU1DLE9BQU8sR0FBRztRQUNkQyxPQUFPLEVBQUU7WUFDUEMsT0FBTyxFQUFFLENBQUM7WUFDVkMsQ0FBQyxFQUFFLENBQUM7WUFDSkMsQ0FBQyxFQUFFLENBQUM7WUFDSkMsVUFBVSxFQUFFO2dCQUNWQyxJQUFJLEVBQUUsUUFBUTtnQkFDZEMsT0FBTyxFQUFFLEVBQUU7Z0JBQ1hDLFNBQVMsRUFBRSxHQUFHO2FBQ2Y7U0FDRjtRQUNEQyxNQUFNLEVBQUU7WUFDTlAsT0FBTyxFQUFFLENBQUM7WUFDVkMsQ0FBQyxFQUFFLEVBQUU7WUFDTEMsQ0FBQyxFQUFFLEVBQUU7WUFDTEMsVUFBVSxFQUFFO2dCQUNWQyxJQUFJLEVBQUUsUUFBUTtnQkFDZEMsT0FBTyxFQUFFLEVBQUU7Z0JBQ1hDLFNBQVMsRUFBRSxFQUFFO2FBQ2Q7U0FDRjtLQUNGO0lBRUQscUJBQ0UsOERBQUNFLEtBQUc7OzBCQUNGLDhEQUFDZixrREFBSTs7a0NBQ0gsOERBQUNnQixPQUFLO2tDQUFDLFdBQVM7Ozs7OzRCQUFRO2tDQUN4Qiw4REFBQ0MsTUFBSTt3QkFBQ0MsSUFBSSxFQUFDLGFBQWE7d0JBQUNDLE9BQU8sRUFBQyxxREFBcUQ7Ozs7OzRCQUFHO2tDQUN6Riw4REFBQ0MsTUFBSTt3QkFBQ0MsR0FBRyxFQUFDLE1BQU07d0JBQUNDLElBQUksRUFBQyxjQUFjOzs7Ozs0QkFBRzs7Ozs7O29CQUNsQzswQkFFUCw4REFBQ0MsTUFBSTtnQkFBQ0MsU0FBUyxFQUFDLFVBQVU7O2tDQUV4Qiw4REFBQ3ZCLDBEQUFNOzs7OzRCQUFHO2tDQUVWLDhEQUFDYyxLQUFHO3dCQUFDUyxTQUFTLEVBQUMsa0ZBQWtGO2tDQUMvRiw0RUFBQ1QsS0FBRzs0QkFBQ1MsU0FBUyxFQUFDLDJDQUEyQzs7OENBRXhELDhEQUFDckIscURBQVU7b0NBQ1RzQixRQUFRLEVBQUVwQixPQUFPO29DQUNqQnFCLE9BQU8sRUFBQyxRQUFRO29DQUNoQkMsT0FBTyxFQUFDLFNBQVM7OENBRWpCLDRFQUFDQyxLQUFHO3dDQUFDSixTQUFTLEVBQUMscUJBQXFCO3dDQUFDSyxHQUFHLEVBQUMsZUFBZTs7Ozs7NENBQUc7Ozs7O3dDQUNoRDs4Q0FHYiw4REFBQ2QsS0FBRztvQ0FBQ1MsU0FBUyxFQUFDLCtDQUErQzs7c0RBQzVELDhEQUFDdEIsb0VBQWdCOzRDQUFDNEIsSUFBSSxFQUFDLDBCQUEwQjs0Q0FBQ0MsS0FBSyxFQUFFLElBQUk7Ozs7O2dEQUFJO3NEQUNqRSw4REFBQzdCLG9FQUFnQjs0Q0FBQzRCLElBQUksRUFBQyw0QkFBNEI7NENBQUNDLEtBQUssRUFBRSxJQUFJOzs7OztnREFBSTs7Ozs7O3dDQUMvRDs7Ozs7O2dDQUNGOzs7Ozs0QkFDRjs7Ozs7O29CQUNEOzBCQUVQLDhEQUFDQyxRQUFNOzs7O29CQUFVOzs7Ozs7WUFDYixDQUNQO0FBQ0gsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RudS1pbXMvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBOYXZiYXIgZnJvbSAnLi9jb21wb25lbnRzL25hdmJhcidcbmltcG9ydCBBbmltYXRlZFRleHRXb3JkIGZyb20gJy4vY29tcG9uZW50cy9hbmltYXRlZFRleHRXb3JkJ1xuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbidcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgaGVyb0ltZyA9IHtcbiAgICB2aXNpYmxlOiB7XG4gICAgICBvcGFjaXR5OiAxLFxuICAgICAgeDogMCxcbiAgICAgIHk6IDAsXG4gICAgICB0cmFuc2l0aW9uOiB7XG4gICAgICAgIHR5cGU6IFwic3ByaW5nXCIsXG4gICAgICAgIGRhbXBpbmc6IDMyLFxuICAgICAgICBzdGlmZm5lc3M6IDEwMCxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBoaWRkZW46IHtcbiAgICAgIG9wYWNpdHk6IDAsXG4gICAgICB4OiAxMCxcbiAgICAgIHk6IDIwLFxuICAgICAgdHJhbnNpdGlvbjoge1xuICAgICAgICB0eXBlOiBcInNwcmluZ1wiLFxuICAgICAgICBkYW1waW5nOiAzMixcbiAgICAgICAgc3RpZmZuZXNzOiA0MCxcbiAgICAgIH0sXG4gICAgfSxcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+T2gsIG15IEUhPC90aXRsZT5cbiAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIkRvbid0IGJlIGEgdHJhc2h5IGh1bWFuLiBUcmFzaCB5b3VyIEUuIFJlc3BvbnNpYmx5LlwiIC8+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgIDwvSGVhZD5cblxuICAgICAgPG1haW4gY2xhc3NOYW1lPSd3LXNjcmVlbic+XG4gICAgICAgIHsvKiBOYXZiYXIgKi99XG4gICAgICAgIDxOYXZiYXIgLz5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncHQtMjAgc206cHQtMjggcC04IHctZnVsbCBoLXNjcmVlbiBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBiZy1bI0ZGRjdBQl0nPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlcic+XG4gICAgICAgICAgICB7LyogSGVybyBpbWFnZSAqL31cbiAgICAgICAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgICAgICAgIHZhcmlhbnRzPXtoZXJvSW1nfVxuICAgICAgICAgICAgICBpbml0aWFsPVwiaGlkZGVuXCJcbiAgICAgICAgICAgICAgYW5pbWF0ZT1cInZpc2libGVcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT0naC0yNCBzbTpoLTQ4IHctYXV0bycgc3JjPScvaGVyb0ltZzEucG5nJyAvPlxuICAgICAgICAgICAgPC9tb3Rpb24uZGl2PlxuXG4gICAgICAgICAgICB7LyogVGFnbGluZSAqL31cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd0ZXh0LTJ4bCBzbTp0ZXh0LTV4bCBmb250LWxpZ2h0IGZsZXggZmxleC1jb2wnPlxuICAgICAgICAgICAgICA8QW5pbWF0ZWRUZXh0V29yZCB0ZXh0PVwiRG9uJ3QgYmUgYSB0cmFzaHkgaHVtYW4uXCIgZGVsYXk9ezAuMjR9IC8+XG4gICAgICAgICAgICAgIDxBbmltYXRlZFRleHRXb3JkIHRleHQ9J1RyYXNoIHlvdXIgRSEgUmVzcG9uc2libHkuJyBkZWxheT17MC44NH0gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbWFpbj5cblxuICAgICAgPGZvb3Rlcj48L2Zvb3Rlcj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIl0sIm5hbWVzIjpbIkhlYWQiLCJOYXZiYXIiLCJBbmltYXRlZFRleHRXb3JkIiwibW90aW9uIiwiSG9tZSIsImhlcm9JbWciLCJ2aXNpYmxlIiwib3BhY2l0eSIsIngiLCJ5IiwidHJhbnNpdGlvbiIsInR5cGUiLCJkYW1waW5nIiwic3RpZmZuZXNzIiwiaGlkZGVuIiwiZGl2IiwidGl0bGUiLCJtZXRhIiwibmFtZSIsImNvbnRlbnQiLCJsaW5rIiwicmVsIiwiaHJlZiIsIm1haW4iLCJjbGFzc05hbWUiLCJ2YXJpYW50cyIsImluaXRpYWwiLCJhbmltYXRlIiwiaW1nIiwic3JjIiwidGV4dCIsImRlbGF5IiwiZm9vdGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next/head");

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

/***/ }),

/***/ "framer-motion":
/*!********************************!*\
  !*** external "framer-motion" ***!
  \********************************/
/***/ ((module) => {

module.exports = import("framer-motion");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();