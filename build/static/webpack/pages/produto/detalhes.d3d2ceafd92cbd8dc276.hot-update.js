"use strict";
self["webpackHotUpdate_N_E"]("pages/produto/detalhes",{

/***/ "./service/produto.service.ts":
/*!************************************!*\
  !*** ./service/produto.service.ts ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "buscarProdutosPorFiltro": function() { return /* binding */ buscarProdutosPorFiltro; },
/* harmony export */   "buscarProdutoPorGuid": function() { return /* binding */ buscarProdutoPorGuid; },
/* harmony export */   "alterarProduto": function() { return /* binding */ alterarProduto; },
/* harmony export */   "criarProduto": function() { return /* binding */ criarProduto; }
/* harmony export */ });
/* harmony import */ var C_Users_117704_Documents_ReactJs_Projetos_react_gerenciador_pedidos_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_117704_Documents_ReactJs_Projetos_react_gerenciador_pedidos_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_117704_Documents_ReactJs_Projetos_react_gerenciador_pedidos_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_117704_Documents_ReactJs_Projetos_react_gerenciador_pedidos_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _endpoints_endpoints__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./endpoints/endpoints */ "./service/endpoints/endpoints.ts");
/* harmony import */ var _infra_core_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./infra/core/service */ "./service/infra/core/service.ts");
/* module decorator */ module = __webpack_require__.hmd(module);




var buscarProdutosPorFiltro = /*#__PURE__*/function () {
  var _ref = (0,C_Users_117704_Documents_ReactJs_Projetos_react_gerenciador_pedidos_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/C_Users_117704_Documents_ReactJs_Projetos_react_gerenciador_pedidos_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(filtro) {
    return C_Users_117704_Documents_ReactJs_Projetos_react_gerenciador_pedidos_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0,_infra_core_service__WEBPACK_IMPORTED_MODULE_3__.BuscarPorFiltro)(_endpoints_endpoints__WEBPACK_IMPORTED_MODULE_2__.default.Produto, filtro);

          case 2:
            return _context.abrupt("return", _context.sent);

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function buscarProdutosPorFiltro(_x) {
    return _ref.apply(this, arguments);
  };
}();
var buscarProdutoPorGuid = /*#__PURE__*/function () {
  var _ref2 = (0,C_Users_117704_Documents_ReactJs_Projetos_react_gerenciador_pedidos_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/C_Users_117704_Documents_ReactJs_Projetos_react_gerenciador_pedidos_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2(guid) {
    return C_Users_117704_Documents_ReactJs_Projetos_react_gerenciador_pedidos_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return (0,_infra_core_service__WEBPACK_IMPORTED_MODULE_3__.BuscarPorGuid)(_endpoints_endpoints__WEBPACK_IMPORTED_MODULE_2__.default.GetProdutoPorGuid, guid);

          case 2:
            return _context2.abrupt("return", _context2.sent);

          case 3:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function buscarProdutoPorGuid(_x2) {
    return _ref2.apply(this, arguments);
  };
}();
var alterarProduto = /*#__PURE__*/function () {
  var _ref3 = (0,C_Users_117704_Documents_ReactJs_Projetos_react_gerenciador_pedidos_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/C_Users_117704_Documents_ReactJs_Projetos_react_gerenciador_pedidos_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee3(body) {
    return C_Users_117704_Documents_ReactJs_Projetos_react_gerenciador_pedidos_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            console.log(body);
            _context3.next = 3;
            return (0,_infra_core_service__WEBPACK_IMPORTED_MODULE_3__.Alterar)(_endpoints_endpoints__WEBPACK_IMPORTED_MODULE_2__.default.Produto, body);

          case 3:
            return _context3.abrupt("return", _context3.sent);

          case 4:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function alterarProduto(_x3) {
    return _ref3.apply(this, arguments);
  };
}();
var criarProduto = /*#__PURE__*/function () {
  var _ref4 = (0,C_Users_117704_Documents_ReactJs_Projetos_react_gerenciador_pedidos_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/C_Users_117704_Documents_ReactJs_Projetos_react_gerenciador_pedidos_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee4(body) {
    return C_Users_117704_Documents_ReactJs_Projetos_react_gerenciador_pedidos_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return (0,_infra_core_service__WEBPACK_IMPORTED_MODULE_3__.Criar)(_endpoints_endpoints__WEBPACK_IMPORTED_MODULE_2__.default.Produto, body);

          case 2:
            return _context4.abrupt("return", _context4.sent);

          case 3:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function criarProduto(_x4) {
    return _ref4.apply(this, arguments);
  };
}();

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvZHV0by9kZXRhbGhlcy5kM2QyY2VhZmQ5MmNiZDhkYzI3Ni5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFJTyxJQUFNSyx1QkFBdUI7QUFBQSx1VkFBRyxpQkFBT0MsTUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFDekJKLG9FQUFlLENBQUNGLGlFQUFELEVBQW9CTSxNQUFwQixDQURVOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBSDs7QUFBQSxrQkFBdkJELHVCQUF1QjtBQUFBO0FBQUE7QUFBQSxHQUE3QjtBQUdBLElBQU1HLG9CQUFvQjtBQUFBLHdWQUFHLGtCQUFPQyxJQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUN0Qk4sa0VBQWEsQ0FBZUgsMkVBQWYsRUFBNENTLElBQTVDLENBRFM7O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFIOztBQUFBLGtCQUFwQkQsb0JBQW9CO0FBQUE7QUFBQTtBQUFBLEdBQTFCO0FBR0EsSUFBTUcsY0FBYztBQUFBLHdWQUFHLGtCQUFPQyxJQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDN0JDLFlBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixJQUFaO0FBRDZCO0FBQUEsbUJBRWhCWCw0REFBTyxDQUFDRCxpRUFBRCxFQUFvQlksSUFBcEIsQ0FGUzs7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUg7O0FBQUEsa0JBQWRELGNBQWM7QUFBQTtBQUFBO0FBQUEsR0FBcEI7QUFJQSxJQUFNSSxZQUFZO0FBQUEsd1ZBQUcsa0JBQU9ILElBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQ2RSLDBEQUFLLENBQUNKLGlFQUFELEVBQW9CWSxJQUFwQixDQURTOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBSDs7QUFBQSxrQkFBWkcsWUFBWTtBQUFBO0FBQUE7QUFBQSxHQUFsQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zZXJ2aWNlL3Byb2R1dG8uc2VydmljZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRW5kUG9pbnRzIGZyb20gJy4vZW5kcG9pbnRzL2VuZHBvaW50cyc7XHJcbmltcG9ydCB7IEFsdGVyYXIsIEJ1c2NhclBvckZpbHRybywgQnVzY2FyUG9yR3VpZCwgQ3JpYXIgfSBmcm9tICcuL2luZnJhL2NvcmUvc2VydmljZSc7XHJcbmltcG9ydCB7IFRvUXVlcnlQYXJhbXMgfSBmcm9tICcuL21vZGVscy9jb3JlL2NvcmUubW9kZWwnO1xyXG5pbXBvcnQgeyBBbHRlcmFyUHJvZHV0b1JlcXVlc3QsIEJ1c2NhclByb2R1dG9zRmlsdHJvUmVxdWVzdCwgQnVzY2FyUHJvZHV0b3NGaWx0cm9SZXNwb25zZSwgQ3JpYXJQcm9kdXRvUmVxdWVzdCwgUHJvZHV0b01vZGVsIH0gZnJvbSAnLi9tb2RlbHMvcHJvZHV0by9wcm9kdXRvLm1vZGVsJztcclxuXHJcbmV4cG9ydCBjb25zdCBidXNjYXJQcm9kdXRvc1BvckZpbHRybyA9IGFzeW5jIChmaWx0cm86IFRvUXVlcnlQYXJhbXM8QnVzY2FyUHJvZHV0b3NGaWx0cm9SZXF1ZXN0Pik6IFByb21pc2U8QnVzY2FyUHJvZHV0b3NGaWx0cm9SZXNwb25zZT4gPT4ge1xyXG5cdHJldHVybiBhd2FpdCBCdXNjYXJQb3JGaWx0cm8oRW5kUG9pbnRzLlByb2R1dG8sIGZpbHRybyk7XHJcbn07XHJcbmV4cG9ydCBjb25zdCBidXNjYXJQcm9kdXRvUG9yR3VpZCA9IGFzeW5jIChndWlkOiBzdHJpbmcpOiBQcm9taXNlPFByb2R1dG9Nb2RlbD4gPT4ge1xyXG5cdHJldHVybiBhd2FpdCBCdXNjYXJQb3JHdWlkPFByb2R1dG9Nb2RlbD4oRW5kUG9pbnRzLkdldFByb2R1dG9Qb3JHdWlkLCBndWlkKTtcclxufTtcclxuZXhwb3J0IGNvbnN0IGFsdGVyYXJQcm9kdXRvID0gYXN5bmMgKGJvZHk6IEFsdGVyYXJQcm9kdXRvUmVxdWVzdCk6IFByb21pc2U8UHJvZHV0b01vZGVsPiA9PiB7XHJcblx0Y29uc29sZS5sb2coYm9keSk7XHJcblx0cmV0dXJuIGF3YWl0IEFsdGVyYXIoRW5kUG9pbnRzLlByb2R1dG8sIGJvZHkpO1xyXG59O1xyXG5leHBvcnQgY29uc3QgY3JpYXJQcm9kdXRvID0gYXN5bmMgKGJvZHk6IENyaWFyUHJvZHV0b1JlcXVlc3QpOiBQcm9taXNlPFByb2R1dG9Nb2RlbD4gPT4ge1xyXG5cdHJldHVybiBhd2FpdCBDcmlhcihFbmRQb2ludHMuUHJvZHV0bywgYm9keSk7XHJcbn07XHJcbiJdLCJuYW1lcyI6WyJFbmRQb2ludHMiLCJBbHRlcmFyIiwiQnVzY2FyUG9yRmlsdHJvIiwiQnVzY2FyUG9yR3VpZCIsIkNyaWFyIiwiYnVzY2FyUHJvZHV0b3NQb3JGaWx0cm8iLCJmaWx0cm8iLCJQcm9kdXRvIiwiYnVzY2FyUHJvZHV0b1Bvckd1aWQiLCJndWlkIiwiR2V0UHJvZHV0b1Bvckd1aWQiLCJhbHRlcmFyUHJvZHV0byIsImJvZHkiLCJjb25zb2xlIiwibG9nIiwiY3JpYXJQcm9kdXRvIl0sInNvdXJjZVJvb3QiOiIifQ==