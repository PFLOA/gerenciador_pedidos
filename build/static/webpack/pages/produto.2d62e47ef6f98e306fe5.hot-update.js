"use strict";
self["webpackHotUpdate_N_E"]("pages/produto",{

/***/ "./pages/produto/index.tsx":
/*!*********************************!*\
  !*** ./pages/produto/index.tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__N_SSP": function() { return /* binding */ __N_SSP; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_117704_Documents_ReactJs_Projetos_react_gerenciador_pedidos_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_117704_Documents_ReactJs_Projetos_react_gerenciador_pedidos_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_Users_117704_Documents_ReactJs_Projetos_react_gerenciador_pedidos_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_117704_Documents_ReactJs_Projetos_react_gerenciador_pedidos_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var C_Users_117704_Documents_ReactJs_Projetos_react_gerenciador_pedidos_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_Form_FormFilter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/Form/FormFilter */ "./components/Form/FormFilter/index.tsx");
/* harmony import */ var _components_Form_Input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/Form/Input */ "./components/Form/Input/index.tsx");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/Layout */ "./components/Layout/index.tsx");
/* harmony import */ var _components_TableProduto__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/TableProduto */ "./components/TableProduto/index.tsx");
/* harmony import */ var _components_Loader__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/Loader */ "./components/Loader/index.tsx");
/* harmony import */ var _style_module_scss__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./style.module.scss */ "./pages/produto/style.module.scss");
/* harmony import */ var _style_module_scss__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_style_module_scss__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _utils_handleChanges__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../utils/handleChanges */ "./utils/handleChanges.ts");
/* harmony import */ var _service_produto_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../service/produto.service */ "./service/produto.service.ts");
/* harmony import */ var _utils_propriedadesFormulario__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../utils/propriedadesFormulario */ "./utils/propriedadesFormulario.ts");
/* harmony import */ var _utils_utilsMoney__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../utils/utilsMoney */ "./utils/utilsMoney.ts");
/* module decorator */ module = __webpack_require__.hmd(module);






var _jsxFileName = "C:\\Users\\117704\\Documents\\ReactJs Projetos\\react\\gerenciador_pedidos\\pages\\produto\\index.tsx",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_117704_Documents_ReactJs_Projetos_react_gerenciador_pedidos_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
















var Produto = function Produto(_ref) {
  _s();

  var produtoListaResult = _ref.produtoListaResult;

  //#region [ UseState ]
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false),
      isLoading = _useState[0],
      setIsLoading = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)({
    countTotal: true,
    page: 1,
    itemsPerPage: 10,
    preco: 0
  }),
      filtro = _useState2[0],
      setFiltro = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(),
      produtoLista = _useState3[0],
      setProdutoLista = _useState3[1]; //#endregion
  //#region [ ref ]


  var formRef = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)(null); //#endregion
  //#region [ Handles ]

  var handleChange = function handleChange(e) {
    (0,_utils_handleChanges__WEBPACK_IMPORTED_MODULE_11__.handleEventChange)(e, filtro);
    setFiltro(_objectSpread(_objectSpread({}, filtro), {}, {
      preco: (0,_utils_utilsMoney__WEBPACK_IMPORTED_MODULE_14__.removerMaskMoney)(filtro.preco)
    }));
  };

  var handleSubmit = (0,react__WEBPACK_IMPORTED_MODULE_4__.useCallback)( /*#__PURE__*/function () {
    var _ref2 = (0,C_Users_117704_Documents_ReactJs_Projetos_react_gerenciador_pedidos_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/C_Users_117704_Documents_ReactJs_Projetos_react_gerenciador_pedidos_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(e) {
      var result;
      return C_Users_117704_Documents_ReactJs_Projetos_react_gerenciador_pedidos_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              e.preventDefault();
              setIsLoading(true);
              _context.prev = 2;
              console.log(filtro);
              _context.next = 6;
              return (0,_service_produto_service__WEBPACK_IMPORTED_MODULE_12__.buscarProdutosPorFiltro)({
                params: filtro
              });

            case 6:
              result = _context.sent;
              setProdutoLista(result);
              _context.next = 12;
              break;

            case 10:
              _context.prev = 10;
              _context.t0 = _context["catch"](2);

            case 12:
              setIsLoading(false);

            case 13:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[2, 10]]);
    }));

    return function (_x) {
      return _ref2.apply(this, arguments);
    };
  }(), [filtro]); //#endregion
  //#region [ UseEffects ]

  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function () {
    (0,_service_produto_service__WEBPACK_IMPORTED_MODULE_12__.buscarProdutosPorFiltro)({
      params: {
        countTotal: true,
        page: 1,
        itemsPerPage: 10
      }
    }).then(function (result) {
      setProdutoLista(result);
    });
  }, []); //#endregion

  var clearFilter = function clearFilter() {
    var _formRef$current;

    (_formRef$current = formRef.current) === null || _formRef$current === void 0 ? void 0 : _formRef$current.reset();
    setFiltro({
      countTotal: true,
      page: 1,
      itemsPerPage: 10,
      preco: 0
    });
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_5___default()), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        children: "Produtos"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 5
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
        rel: "icon",
        href: "/favicon.ico"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 5
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 4
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_8__.default, {
      active: 'produto',
      children: produtoLista !== null && produtoLista !== void 0 && produtoLista.data ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "mb-4 py-2 ".concat((_style_module_scss__WEBPACK_IMPORTED_MODULE_15___default().titulo)),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
            children: "Produtos"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 103,
            columnNumber: 8
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 102,
          columnNumber: 7
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form_FormFilter__WEBPACK_IMPORTED_MODULE_6__.default, {
          clearFilter: clearFilter,
          onSubmit: handleSubmit,
          link: "produto/novo",
          formRef: formRef,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "row",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "col-3",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form_Input__WEBPACK_IMPORTED_MODULE_7__.default, {
                type: "text",
                name: "nomeProduto",
                label: "Nome Produto",
                onChange: handleChange
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 113,
                columnNumber: 10
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 112,
              columnNumber: 9
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "col-3",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form_Input__WEBPACK_IMPORTED_MODULE_7__.default, {
                type: "text",
                name: _utils_propriedadesFormulario__WEBPACK_IMPORTED_MODULE_13__.PropriedadesFormularios.Money,
                label: "Pre\xE7o",
                onChange: handleChange
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 121,
                columnNumber: 10
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 120,
              columnNumber: 9
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "col-3",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form_Input__WEBPACK_IMPORTED_MODULE_7__.default, {
                type: "date",
                name: "dataCadastro",
                label: "Data de Cadastro",
                onChange: handleChange
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 129,
                columnNumber: 10
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 128,
              columnNumber: 9
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 111,
            columnNumber: 8
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 105,
          columnNumber: 7
        }, _this), isLoading ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_15___default().loader),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Loader__WEBPACK_IMPORTED_MODULE_10__.default, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 140,
            columnNumber: 9
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 139,
          columnNumber: 8
        }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_TableProduto__WEBPACK_IMPORTED_MODULE_9__.default, {
          data: produtoLista
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 143,
          columnNumber: 8
        }, _this)]
      }, void 0, true) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_15___default().loader),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Loader__WEBPACK_IMPORTED_MODULE_10__.default, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 148,
          columnNumber: 7
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 147,
        columnNumber: 6
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 4
    }, _this)]
  }, void 0, true);
};

_s(Produto, "7vNMVGKsTTYhttZRnsWdKiWGUdk=");

_c = Produto;
var __N_SSP = true;
/* harmony default export */ __webpack_exports__["default"] = (Produto);

var _c;

$RefreshReg$(_c, "Produto");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvZHV0by4yZDYyZTQ3ZWY2Zjk4ZTMwNmZlNS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOztBQU1BLElBQU1lLE9BQStCLEdBQUcsU0FBbENBLE9BQWtDLE9BQTRCO0FBQUE7O0FBQUEsTUFBekJDLGtCQUF5QixRQUF6QkEsa0JBQXlCOztBQUNuRTtBQURtRSxrQkFHakNkLCtDQUFRLENBQUMsS0FBRCxDQUh5QjtBQUFBLE1BRzVEZSxTQUg0RDtBQUFBLE1BR2pEQyxZQUhpRDs7QUFBQSxtQkFJdkNoQiwrQ0FBUSxDQUFDO0FBQ3BDaUIsSUFBQUEsVUFBVSxFQUFFLElBRHdCO0FBRXBDQyxJQUFBQSxJQUFJLEVBQUUsQ0FGOEI7QUFHcENDLElBQUFBLFlBQVksRUFBRSxFQUhzQjtBQUlwQ0MsSUFBQUEsS0FBSyxFQUFFO0FBSjZCLEdBQUQsQ0FKK0I7QUFBQSxNQUk1REMsTUFKNEQ7QUFBQSxNQUlwREMsU0FKb0Q7O0FBQUEsbUJBV2xFdEIsK0NBQVEsRUFYMEQ7QUFBQSxNQVU1RHVCLFlBVjREO0FBQUEsTUFVOUNDLGVBVjhDLGtCQWFuRTtBQUNBOzs7QUFFQSxNQUFNQyxPQUFPLEdBQUcxQiw2Q0FBTSxDQUFrQixJQUFsQixDQUF0QixDQWhCbUUsQ0FrQm5FO0FBQ0E7O0FBRUEsTUFBTTJCLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNDLENBQUQsRUFBWTtBQUNoQ2xCLElBQUFBLHdFQUFpQixDQUFDa0IsQ0FBRCxFQUFJTixNQUFKLENBQWpCO0FBQ0FDLElBQUFBLFNBQVMsaUNBQUtELE1BQUw7QUFBYUQsTUFBQUEsS0FBSyxFQUFFUixvRUFBZ0IsQ0FBQ1MsTUFBTSxDQUFDRCxLQUFSO0FBQXBDLE9B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REFBRDtBQUNDLG9CQUFJLEVBQUMsTUFETjtBQUVDLG9CQUFJLEVBQUVmLHlGQUZQO0FBR0MscUJBQUssRUFBQyxVQUhQO0FBSUMsd0JBQVEsRUFBRWU7QUFKWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFURCxlQWlCQztBQUFLLHVCQUFTLEVBQUMsT0FBZjtBQUFBLHFDQUNDLDhEQUFDLDJEQUFEO0FBQ0Msb0JBQUksRUFBQyxNQUROO0FBRUMsb0JBQUksRUFBQyxjQUZOO0FBR0MscUJBQUssRUFBQyxrQkFIUDtBQUlDLHdCQUFRLEVBQUVBO0FBSlg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBakJEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU5EO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSkQsRUFxQ0VYLFNBQVMsZ0JBQ1Q7QUFBSyxtQkFBUyxFQUFFUCxtRUFBaEI7QUFBQSxpQ0FDQyw4REFBQyx3REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEUyxnQkFLVCw4REFBQyw2REFBRDtBQUFjLGNBQUksRUFBRWU7QUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkExQ0Y7QUFBQSxzQkFEQSxnQkErQ0E7QUFBSyxpQkFBUyxFQUFFZixtRUFBaEI7QUFBQSwrQkFDQyw4REFBQyx3REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWhERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTEQ7QUFBQSxrQkFERDtBQTZEQSxDQWhJRDs7R0FBTUs7O0tBQUFBOztBQTZKTiwrREFBZUEsT0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9wcm9kdXRvL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgeyBHZXRTZXJ2ZXJTaWRlUHJvcHMgfSBmcm9tICduZXh0JztcclxuXHJcbmltcG9ydCBGb3JtRmlsdGVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvRm9ybS9Gb3JtRmlsdGVyJztcclxuXHJcbmltcG9ydCBJbnB1dCBmcm9tICcuLi8uLi9jb21wb25lbnRzL0Zvcm0vSW5wdXQnO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTGF5b3V0JztcclxuaW1wb3J0IFRhYmxlUHJvZHV0byBmcm9tICcuLi8uLi9jb21wb25lbnRzL1RhYmxlUHJvZHV0byc7XHJcblxyXG5pbXBvcnQgTG9hZGVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTG9hZGVyJztcclxuXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZS5tb2R1bGUuc2Nzcyc7XHJcbmltcG9ydCB7IGhhbmRsZUV2ZW50Q2hhbmdlLCBoYW5kbGVNYXNrIH0gZnJvbSAnLi4vLi4vdXRpbHMvaGFuZGxlQ2hhbmdlcyc7XHJcbmltcG9ydCB7IGJ1c2NhclByb2R1dG9zUG9yRmlsdHJvIH0gZnJvbSAnLi4vLi4vc2VydmljZS9wcm9kdXRvLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBCdXNjYXJQcm9kdXRvc0ZpbHRyb1Jlc3BvbnNlIH0gZnJvbSAnLi4vLi4vc2VydmljZS9tb2RlbHMvcHJvZHV0by9wcm9kdXRvLm1vZGVsJztcclxuaW1wb3J0IHsgUHJvcHJpZWRhZGVzRm9ybXVsYXJpb3MgfSBmcm9tICcuLi8uLi91dGlscy9wcm9wcmllZGFkZXNGb3JtdWxhcmlvJztcclxuaW1wb3J0IHsgcmVtb3Zlck1hc2tNb25leSB9IGZyb20gJy4uLy4uL3V0aWxzL3V0aWxzTW9uZXknO1xyXG5cclxuaW50ZXJmYWNlIFByb2R1dG9Qcm9wcyB7XHJcblx0cHJvZHV0b0xpc3RhUmVzdWx0OiBCdXNjYXJQcm9kdXRvc0ZpbHRyb1Jlc3BvbnNlO1xyXG59XHJcblxyXG5jb25zdCBQcm9kdXRvOiBSZWFjdC5GQzxQcm9kdXRvUHJvcHM+ID0gKHsgcHJvZHV0b0xpc3RhUmVzdWx0IH0pID0+IHtcclxuXHQvLyNyZWdpb24gWyBVc2VTdGF0ZSBdXHJcblxyXG5cdGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblx0Y29uc3QgW2ZpbHRybywgc2V0RmlsdHJvXSA9IHVzZVN0YXRlKHtcclxuXHRcdGNvdW50VG90YWw6IHRydWUsXHJcblx0XHRwYWdlOiAxLFxyXG5cdFx0aXRlbXNQZXJQYWdlOiAxMCxcclxuXHRcdHByZWNvOiAwXHJcblx0fSk7XHJcblx0Y29uc3QgW3Byb2R1dG9MaXN0YSwgc2V0UHJvZHV0b0xpc3RhXSA9XHJcblx0XHR1c2VTdGF0ZTxCdXNjYXJQcm9kdXRvc0ZpbHRyb1Jlc3BvbnNlPigpO1xyXG5cclxuXHQvLyNlbmRyZWdpb25cclxuXHQvLyNyZWdpb24gWyByZWYgXVxyXG5cclxuXHRjb25zdCBmb3JtUmVmID0gdXNlUmVmPEhUTUxGb3JtRWxlbWVudD4obnVsbCk7XHJcblxyXG5cdC8vI2VuZHJlZ2lvblxyXG5cdC8vI3JlZ2lvbiBbIEhhbmRsZXMgXVxyXG5cclxuXHRjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZTogYW55KSA9PiB7XHJcblx0XHRoYW5kbGVFdmVudENoYW5nZShlLCBmaWx0cm8pO1xyXG5cdFx0c2V0RmlsdHJvKHsuLi5maWx0cm8sIHByZWNvOiByZW1vdmVyTWFza01vbmV5KGZpbHRyby5wcmVjbyl9KVxyXG5cdH07XHJcblx0Y29uc3QgaGFuZGxlU3VibWl0ID0gdXNlQ2FsbGJhY2soXHJcblx0XHRhc3luYyAoZTogYW55KSA9PiB7XHJcblx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdFx0c2V0SXNMb2FkaW5nKHRydWUpO1xyXG5cdFx0XHR0cnkge1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKGZpbHRybyk7XHJcblx0XHRcdFx0Y29uc3QgcmVzdWx0ID0gYXdhaXQgYnVzY2FyUHJvZHV0b3NQb3JGaWx0cm8oe1xyXG5cdFx0XHRcdFx0cGFyYW1zOiBmaWx0cm8sXHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdFx0c2V0UHJvZHV0b0xpc3RhKHJlc3VsdCk7XHJcblx0XHRcdH0gY2F0Y2ggKGVycm9yKSB7fVxyXG5cdFx0XHRzZXRJc0xvYWRpbmcoZmFsc2UpO1xyXG5cdFx0fSxcclxuXHRcdFtmaWx0cm9dXHJcblx0KTtcclxuXHJcblx0Ly8jZW5kcmVnaW9uXHJcblx0Ly8jcmVnaW9uIFsgVXNlRWZmZWN0cyBdXHJcblxyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHRidXNjYXJQcm9kdXRvc1BvckZpbHRybyh7XHJcblx0XHRcdHBhcmFtczoge1xyXG5cdFx0XHRcdGNvdW50VG90YWw6IHRydWUsXHJcblx0XHRcdFx0cGFnZTogMSxcclxuXHRcdFx0XHRpdGVtc1BlclBhZ2U6IDEwLFxyXG5cdFx0XHR9LFxyXG5cdFx0fSkudGhlbigocmVzdWx0KSA9PiB7XHJcblx0XHRcdHNldFByb2R1dG9MaXN0YShyZXN1bHQpO1xyXG5cdFx0fSk7XHJcblx0fSwgW10pO1xyXG5cclxuXHQvLyNlbmRyZWdpb25cclxuXHRjb25zdCBjbGVhckZpbHRlciA9ICgpID0+IHtcclxuXHRcdGZvcm1SZWYuY3VycmVudD8ucmVzZXQoKTtcclxuXHRcdHNldEZpbHRybyh7XHJcblx0XHRjb3VudFRvdGFsOiB0cnVlLFxyXG5cdFx0cGFnZTogMSxcclxuXHRcdGl0ZW1zUGVyUGFnZTogMTAsXHJcblx0XHRwcmVjbzogMFxyXG5cdH0pO1xyXG5cdH1cclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDw+XHJcblx0XHRcdDxIZWFkPlxyXG5cdFx0XHRcdDx0aXRsZT5Qcm9kdXRvczwvdGl0bGU+XHJcblx0XHRcdFx0PGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxyXG5cdFx0XHQ8L0hlYWQ+XHJcblx0XHRcdDxMYXlvdXQgYWN0aXZlPXsncHJvZHV0byd9PlxyXG5cdFx0XHRcdHtwcm9kdXRvTGlzdGE/LmRhdGEgPyAoXHJcblx0XHRcdFx0XHQ8PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17YG1iLTQgcHktMiAke3N0eWxlcy50aXR1bG99YH0+XHJcblx0XHRcdFx0XHRcdFx0PGgyPlByb2R1dG9zPC9oMj5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxGb3JtRmlsdGVyXHJcblx0XHRcdFx0XHRcdFx0Y2xlYXJGaWx0ZXI9e2NsZWFyRmlsdGVyfVxyXG5cdFx0XHRcdFx0XHRcdG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9XHJcblx0XHRcdFx0XHRcdFx0bGluaz1cInByb2R1dG8vbm92b1wiXHJcblx0XHRcdFx0XHRcdFx0Zm9ybVJlZj17Zm9ybVJlZn1cclxuXHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC0zXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxJbnB1dFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHR5cGU9XCJ0ZXh0XCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRuYW1lPVwibm9tZVByb2R1dG9cIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGxhYmVsPVwiTm9tZSBQcm9kdXRvXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC0zXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxJbnB1dFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHR5cGU9XCJ0ZXh0XCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRuYW1lPXtQcm9wcmllZGFkZXNGb3JtdWxhcmlvcy5Nb25leX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRsYWJlbD1cIlByZcOnb1wiXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtM1wiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8SW5wdXRcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR0eXBlPVwiZGF0ZVwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0bmFtZT1cImRhdGFDYWRhc3Ryb1wiXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0bGFiZWw9XCJEYXRhIGRlIENhZGFzdHJvXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDwvRm9ybUZpbHRlcj5cclxuXHRcdFx0XHRcdFx0e2lzTG9hZGluZyA/IChcclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxvYWRlcn0+XHJcblx0XHRcdFx0XHRcdFx0XHQ8TG9hZGVyIC8+XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdCkgOiAoXHJcblx0XHRcdFx0XHRcdFx0PFRhYmxlUHJvZHV0byBkYXRhPXtwcm9kdXRvTGlzdGF9IC8+XHJcblx0XHRcdFx0XHRcdCl9XHJcblx0XHRcdFx0XHQ8Lz5cclxuXHRcdFx0XHQpIDogKFxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sb2FkZXJ9PlxyXG5cdFx0XHRcdFx0XHQ8TG9hZGVyIC8+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQpfVxyXG5cdFx0XHQ8L0xheW91dD5cclxuXHRcdDwvPlxyXG5cdCk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzOiBHZXRTZXJ2ZXJTaWRlUHJvcHMgPSBhc3luYyAoY29udGV4dDogYW55KSA9PiB7XHJcblx0dHJ5IHtcclxuXHRcdGNvbnN0IHByb2R1dG9MaXN0YVJlc3VsdCA9IGF3YWl0IGJ1c2NhclByb2R1dG9zUG9yRmlsdHJvKHtcclxuXHRcdFx0cGFyYW1zOiB7XHJcblx0XHRcdFx0Y291bnRUb3RhbDogdHJ1ZSxcclxuXHRcdFx0XHRwYWdlOiAxLFxyXG5cdFx0XHRcdGl0ZW1zUGVyUGFnZTogMTAsXHJcblx0XHRcdH0sXHJcblx0XHR9KTtcclxuXHJcblx0XHRyZXR1cm4ge1xyXG5cdFx0XHRwcm9wczoge1xyXG5cdFx0XHRcdHByb2R1dG9MaXN0YVJlc3VsdCxcclxuXHRcdFx0fSxcclxuXHRcdH07XHJcblx0fSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG5cdFx0aWYgKGVycm9yLnN0YXR1cyA9PT0gNDA0KVxyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdHByb3BzOiB7fSxcclxuXHRcdFx0fTtcclxuXHJcblx0XHRyZXR1cm4ge1xyXG5cdFx0XHRwcm9wczoge30sXHJcblx0XHR9O1xyXG5cdH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2R1dG87XHJcbiJdLCJuYW1lcyI6WyJ1c2VDYWxsYmFjayIsInVzZVJlZiIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiSGVhZCIsIkZvcm1GaWx0ZXIiLCJJbnB1dCIsIkxheW91dCIsIlRhYmxlUHJvZHV0byIsIkxvYWRlciIsInN0eWxlcyIsImhhbmRsZUV2ZW50Q2hhbmdlIiwiYnVzY2FyUHJvZHV0b3NQb3JGaWx0cm8iLCJQcm9wcmllZGFkZXNGb3JtdWxhcmlvcyIsInJlbW92ZXJNYXNrTW9uZXkiLCJQcm9kdXRvIiwicHJvZHV0b0xpc3RhUmVzdWx0IiwiaXNMb2FkaW5nIiwic2V0SXNMb2FkaW5nIiwiY291bnRUb3RhbCIsInBhZ2UiLCJpdGVtc1BlclBhZ2UiLCJwcmVjbyIsImZpbHRybyIsInNldEZpbHRybyIsInByb2R1dG9MaXN0YSIsInNldFByb2R1dG9MaXN0YSIsImZvcm1SZWYiLCJoYW5kbGVDaGFuZ2UiLCJlIiwiaGFuZGxlU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJjb25zb2xlIiwibG9nIiwicGFyYW1zIiwicmVzdWx0IiwidGhlbiIsImNsZWFyRmlsdGVyIiwiY3VycmVudCIsInJlc2V0IiwiZGF0YSIsInRpdHVsbyIsIk1vbmV5IiwibG9hZGVyIl0sInNvdXJjZVJvb3QiOiIifQ==