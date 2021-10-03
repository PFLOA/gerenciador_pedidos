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
/* harmony import */ var C_Users_117704_Documents_ReactJs_Projetos_react_gerenciador_pedidos_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var C_Users_117704_Documents_ReactJs_Projetos_react_gerenciador_pedidos_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_117704_Documents_ReactJs_Projetos_react_gerenciador_pedidos_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(C_Users_117704_Documents_ReactJs_Projetos_react_gerenciador_pedidos_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var C_Users_117704_Documents_ReactJs_Projetos_react_gerenciador_pedidos_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
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

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_117704_Documents_ReactJs_Projetos_react_gerenciador_pedidos_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
















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
    itemsPerPage: 10
  }),
      filtro = _useState2[0],
      setFiltro = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(),
      produtoLista = _useState3[0],
      setProdutoLista = _useState3[1]; //#endregion
  //#region [ ref ]


  var formRef = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)(null); //#endregion

  var buscarListagemProdutos = (0,react__WEBPACK_IMPORTED_MODULE_4__.useCallback)( /*#__PURE__*/(0,C_Users_117704_Documents_ReactJs_Projetos_react_gerenciador_pedidos_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__.default)( /*#__PURE__*/C_Users_117704_Documents_ReactJs_Projetos_react_gerenciador_pedidos_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee() {
    var result;
    return C_Users_117704_Documents_ReactJs_Projetos_react_gerenciador_pedidos_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            setIsLoading(true);
            _context.prev = 1;
            _context.next = 4;
            return (0,_service_produto_service__WEBPACK_IMPORTED_MODULE_12__.buscarProdutosPorFiltro)({
              params: filtro
            });

          case 4:
            result = _context.sent;
            setProdutoLista(result);
            _context.next = 10;
            break;

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](1);

          case 10:
            setIsLoading(false);

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 8]]);
  })), []); //#region [ Handles ]

  var handleChange = function handleChange(e) {
    (0,_utils_handleChanges__WEBPACK_IMPORTED_MODULE_11__.handleEventChange)(e, filtro);

    if (filtro.preco) {
      setFiltro(_objectSpread(_objectSpread({}, filtro), {}, {
        preco: (0,_utils_utilsMoney__WEBPACK_IMPORTED_MODULE_14__.removerMaskMoney)(filtro.preco)
      }));
    }
  };

  var handleSubmit = (0,react__WEBPACK_IMPORTED_MODULE_4__.useCallback)( /*#__PURE__*/function () {
    var _ref3 = (0,C_Users_117704_Documents_ReactJs_Projetos_react_gerenciador_pedidos_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__.default)( /*#__PURE__*/C_Users_117704_Documents_ReactJs_Projetos_react_gerenciador_pedidos_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee2(e) {
      return C_Users_117704_Documents_ReactJs_Projetos_react_gerenciador_pedidos_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              e.preventDefault();
              buscarListagemProdutos().then();

            case 2:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function (_x) {
      return _ref3.apply(this, arguments);
    };
  }(), [buscarListagemProdutos]); //#endregion
  //#region [ UseEffects ]

  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function () {
    buscarListagemProdutos().then();
  }, [buscarListagemProdutos]); //#endregion

  var clearFilter = function clearFilter() {
    var _formRef$current;

    (_formRef$current = formRef.current) === null || _formRef$current === void 0 ? void 0 : _formRef$current.reset();
    setFiltro({
      countTotal: true,
      page: 1,
      itemsPerPage: 10
    });
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_5___default()), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        children: "Produtos"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 5
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
        rel: "icon",
        href: "/favicon.ico"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 5
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 96,
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
            lineNumber: 104,
            columnNumber: 8
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 103,
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
                lineNumber: 114,
                columnNumber: 10
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 113,
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
                lineNumber: 122,
                columnNumber: 10
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 121,
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
                lineNumber: 130,
                columnNumber: 10
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 129,
              columnNumber: 9
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 112,
            columnNumber: 8
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 106,
          columnNumber: 7
        }, _this), isLoading ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_15___default().loader),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Loader__WEBPACK_IMPORTED_MODULE_10__.default, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 141,
            columnNumber: 9
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 140,
          columnNumber: 8
        }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_TableProduto__WEBPACK_IMPORTED_MODULE_9__.default, {
          data: produtoLista
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 144,
          columnNumber: 8
        }, _this)]
      }, void 0, true) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_15___default().loader),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Loader__WEBPACK_IMPORTED_MODULE_10__.default, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 149,
          columnNumber: 7
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 148,
        columnNumber: 6
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 4
    }, _this)]
  }, void 0, true);
};

_s(Produto, "jQoJGR8k07Zbvg/7CHX0tbRI1Z0=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvZHV0by4zOGFjZDM2OWI4OTcxZGY1ZjdhMS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOztBQVlBLElBQU1lLE9BQStCLEdBQUcsU0FBbENBLE9BQWtDLE9BQTRCO0FBQUE7O0FBQUEsTUFBekJDLGtCQUF5QixRQUF6QkEsa0JBQXlCOztBQUNuRTtBQURtRSxrQkFHakNkLCtDQUFRLENBQUMsS0FBRCxDQUh5QjtBQUFBLE1BRzVEZSxTQUg0RDtBQUFBLE1BR2pEQyxZQUhpRDs7QUFBQSxtQkFJdkNoQiwrQ0FBUSxDQUFxQjtBQUN4RGlCLElBQUFBLFVBQVUsRUFBRSxJQUQ0QztBQUV4REMsSUFBQUEsSUFBSSxFQUFFLENBRmtEO0FBR3hEQyxJQUFBQSxZQUFZLEVBQUU7QUFIMEMsR0FBckIsQ0FKK0I7QUFBQSxNQUk1REMsTUFKNEQ7QUFBQSxNQUlwREMsU0FKb0Q7O0FBQUEsbUJBVWxFckIsK0NBQVEsRUFWMEQ7QUFBQSxNQVM1RHNCLFlBVDREO0FBQUEsTUFTOUNDLGVBVDhDLGtCQVluRTtBQUNBOzs7QUFFQSxNQUFNQyxPQUFPLEdBQUd6Qiw2Q0FBTSxDQUFrQixJQUFsQixDQUF0QixDQWZtRSxDQWlCbkU7O0FBQ0EsTUFBTTBCLHNCQUFzQixHQUFHM0Isa0RBQVcseVZBQUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQzFDa0IsWUFBQUEsWUFBWSxDQUFDLElBQUQsQ0FBWjtBQUQwQztBQUFBO0FBQUEsbUJBR25CTixrRkFBdUIsQ0FBQztBQUM1Q2dCLGNBQUFBLE1BQU0sRUFBRU47QUFEb0MsYUFBRCxDQUhKOztBQUFBO0FBR2xDTyxZQUFBQSxNQUhrQztBQU14Q0osWUFBQUEsZUFBZSxDQUFD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QUhQO0FBSUMsd0JBQVEsRUFBRWlCO0FBSlg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBVEQsZUFpQkM7QUFBSyx1QkFBUyxFQUFDLE9BQWY7QUFBQSxxQ0FDQyw4REFBQywyREFBRDtBQUNDLG9CQUFJLEVBQUMsTUFETjtBQUVDLG9CQUFJLEVBQUMsY0FGTjtBQUdDLHFCQUFLLEVBQUMsa0JBSFA7QUFJQyx3QkFBUSxFQUFFQTtBQUpYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQWpCRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFORDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUpELEVBcUNFYixTQUFTLGdCQUNUO0FBQUssbUJBQVMsRUFBRVAsbUVBQWhCO0FBQUEsaUNBQ0MsOERBQUMsd0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRFMsZ0JBS1QsOERBQUMsNkRBQUQ7QUFBYyxjQUFJLEVBQUVjO0FBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBMUNGO0FBQUEsc0JBREEsZ0JBK0NBO0FBQUssaUJBQVMsRUFBRWQsbUVBQWhCO0FBQUEsK0JBQ0MsOERBQUMsd0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFoREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUxEO0FBQUEsa0JBREQ7QUE2REEsQ0EzSEQ7O0dBQU1LOztLQUFBQTs7QUF3Sk4sK0RBQWVBLE9BQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZHV0by9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuaW1wb3J0IHsgR2V0U2VydmVyU2lkZVByb3BzIH0gZnJvbSAnbmV4dCc7XHJcblxyXG5pbXBvcnQgRm9ybUZpbHRlciBmcm9tICcuLi8uLi9jb21wb25lbnRzL0Zvcm0vRm9ybUZpbHRlcic7XHJcblxyXG5pbXBvcnQgSW5wdXQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9Gb3JtL0lucHV0JztcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi8uLi9jb21wb25lbnRzL0xheW91dCc7XHJcbmltcG9ydCBUYWJsZVByb2R1dG8gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9UYWJsZVByb2R1dG8nO1xyXG5cclxuaW1wb3J0IExvYWRlciBmcm9tICcuLi8uLi9jb21wb25lbnRzL0xvYWRlcic7XHJcblxyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGUubW9kdWxlLnNjc3MnO1xyXG5pbXBvcnQgeyBoYW5kbGVFdmVudENoYW5nZSwgaGFuZGxlTWFzayB9IGZyb20gJy4uLy4uL3V0aWxzL2hhbmRsZUNoYW5nZXMnO1xyXG5pbXBvcnQgeyBidXNjYXJQcm9kdXRvc1BvckZpbHRybyB9IGZyb20gJy4uLy4uL3NlcnZpY2UvcHJvZHV0by5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQnVzY2FyUHJvZHV0b3NGaWx0cm9SZXNwb25zZSB9IGZyb20gJy4uLy4uL3NlcnZpY2UvbW9kZWxzL3Byb2R1dG8vcHJvZHV0by5tb2RlbCc7XHJcbmltcG9ydCB7IFByb3ByaWVkYWRlc0Zvcm11bGFyaW9zIH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJvcHJpZWRhZGVzRm9ybXVsYXJpbyc7XHJcbmltcG9ydCB7IHJlbW92ZXJNYXNrTW9uZXkgfSBmcm9tICcuLi8uLi91dGlscy91dGlsc01vbmV5JztcclxuXHJcbmludGVyZmFjZSBQcm9kdXRvUHJvcHMge1xyXG5cdHByb2R1dG9MaXN0YVJlc3VsdDogQnVzY2FyUHJvZHV0b3NGaWx0cm9SZXNwb25zZTtcclxufVxyXG5pbnRlcmZhY2UgUHJvZHV0b0ZpbHRlclN0YXRlIHtcclxuXHRjb3VudFRvdGFsOiBib29sZWFuO1xyXG5cdHBhZ2U6IG51bWJlcjtcclxuXHRpdGVtc1BlclBhZ2U6IG51bWJlcjtcclxuXHRwcmVjbz86IG51bWJlcjtcclxufVxyXG5cclxuY29uc3QgUHJvZHV0bzogUmVhY3QuRkM8UHJvZHV0b1Byb3BzPiA9ICh7IHByb2R1dG9MaXN0YVJlc3VsdCB9KSA9PiB7XHJcblx0Ly8jcmVnaW9uIFsgVXNlU3RhdGUgXVxyXG5cclxuXHRjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cdGNvbnN0IFtmaWx0cm8sIHNldEZpbHRyb10gPSB1c2VTdGF0ZTxQcm9kdXRvRmlsdGVyU3RhdGU+KHtcclxuXHRcdGNvdW50VG90YWw6IHRydWUsXHJcblx0XHRwYWdlOiAxLFxyXG5cdFx0aXRlbXNQZXJQYWdlOiAxMCxcclxuXHR9KTtcclxuXHRjb25zdCBbcHJvZHV0b0xpc3RhLCBzZXRQcm9kdXRvTGlzdGFdID1cclxuXHRcdHVzZVN0YXRlPEJ1c2NhclByb2R1dG9zRmlsdHJvUmVzcG9uc2U+KCk7XHJcblxyXG5cdC8vI2VuZHJlZ2lvblxyXG5cdC8vI3JlZ2lvbiBbIHJlZiBdXHJcblxyXG5cdGNvbnN0IGZvcm1SZWYgPSB1c2VSZWY8SFRNTEZvcm1FbGVtZW50PihudWxsKTtcclxuXHJcblx0Ly8jZW5kcmVnaW9uXHJcblx0Y29uc3QgYnVzY2FyTGlzdGFnZW1Qcm9kdXRvcyA9IHVzZUNhbGxiYWNrKGFzeW5jICgpID0+IHtcclxuXHRcdHNldElzTG9hZGluZyh0cnVlKTtcclxuXHRcdFx0dHJ5IHtcclxuXHRcdFx0XHRjb25zdCByZXN1bHQgPSBhd2FpdCBidXNjYXJQcm9kdXRvc1BvckZpbHRybyh7XHJcblx0XHRcdFx0XHRwYXJhbXM6IGZpbHRybyxcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0XHRzZXRQcm9kdXRvTGlzdGEocmVzdWx0KTtcclxuXHRcdFx0fSBjYXRjaCAoZXJyb3IpIHt9XHJcblx0XHRcdHNldElzTG9hZGluZyhmYWxzZSk7XHJcblx0fSwgW10pXHJcblx0Ly8jcmVnaW9uIFsgSGFuZGxlcyBdXHJcblxyXG5cdGNvbnN0IGhhbmRsZUNoYW5nZSA9IChlOiBhbnkpID0+IHtcclxuXHRcdGhhbmRsZUV2ZW50Q2hhbmdlKGUsIGZpbHRybyk7XHJcblx0XHRpZihmaWx0cm8ucHJlY28pe1xyXG5cdFx0XHRzZXRGaWx0cm8oey4uLmZpbHRybywgcHJlY286IHJlbW92ZXJNYXNrTW9uZXkoZmlsdHJvLnByZWNvKX0pXHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0Y29uc3QgaGFuZGxlU3VibWl0ID0gdXNlQ2FsbGJhY2soXHJcblx0XHRhc3luYyAoZTogYW55KSA9PiB7XHJcblx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdFx0YnVzY2FyTGlzdGFnZW1Qcm9kdXRvcygpLnRoZW4oKVxyXG5cdFx0fSxcclxuXHRcdFtidXNjYXJMaXN0YWdlbVByb2R1dG9zXVxyXG5cdCk7XHJcblxyXG5cdC8vI2VuZHJlZ2lvblxyXG5cdC8vI3JlZ2lvbiBbIFVzZUVmZmVjdHMgXVxyXG5cclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0YnVzY2FyTGlzdGFnZW1Qcm9kdXRvcygpLnRoZW4oKTtcclxuXHR9LCBbYnVzY2FyTGlzdGFnZW1Qcm9kdXRvc10pO1xyXG5cclxuXHQvLyNlbmRyZWdpb25cclxuXHRjb25zdCBjbGVhckZpbHRlciA9ICgpID0+IHtcclxuXHRcdGZvcm1SZWYuY3VycmVudD8ucmVzZXQoKTtcclxuXHRcdHNldEZpbHRybyh7XHJcblx0XHRcdGNvdW50VG90YWw6IHRydWUsXHJcblx0XHRcdHBhZ2U6IDEsXHJcblx0XHRcdGl0ZW1zUGVyUGFnZTogMTBcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDw+XHJcblx0XHRcdDxIZWFkPlxyXG5cdFx0XHRcdDx0aXRsZT5Qcm9kdXRvczwvdGl0bGU+XHJcblx0XHRcdFx0PGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxyXG5cdFx0XHQ8L0hlYWQ+XHJcblx0XHRcdDxMYXlvdXQgYWN0aXZlPXsncHJvZHV0byd9PlxyXG5cdFx0XHRcdHtwcm9kdXRvTGlzdGE/LmRhdGEgPyAoXHJcblx0XHRcdFx0XHQ8PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17YG1iLTQgcHktMiAke3N0eWxlcy50aXR1bG99YH0+XHJcblx0XHRcdFx0XHRcdFx0PGgyPlByb2R1dG9zPC9oMj5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxGb3JtRmlsdGVyXHJcblx0XHRcdFx0XHRcdFx0Y2xlYXJGaWx0ZXI9e2NsZWFyRmlsdGVyfVxyXG5cdFx0XHRcdFx0XHRcdG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9XHJcblx0XHRcdFx0XHRcdFx0bGluaz1cInByb2R1dG8vbm92b1wiXHJcblx0XHRcdFx0XHRcdFx0Zm9ybVJlZj17Zm9ybVJlZn1cclxuXHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC0zXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxJbnB1dFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHR5cGU9XCJ0ZXh0XCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRuYW1lPVwibm9tZVByb2R1dG9cIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGxhYmVsPVwiTm9tZSBQcm9kdXRvXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC0zXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxJbnB1dFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHR5cGU9XCJ0ZXh0XCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRuYW1lPXtQcm9wcmllZGFkZXNGb3JtdWxhcmlvcy5Nb25leX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRsYWJlbD1cIlByZcOnb1wiXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtM1wiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8SW5wdXRcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR0eXBlPVwiZGF0ZVwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0bmFtZT1cImRhdGFDYWRhc3Ryb1wiXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0bGFiZWw9XCJEYXRhIGRlIENhZGFzdHJvXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDwvRm9ybUZpbHRlcj5cclxuXHRcdFx0XHRcdFx0e2lzTG9hZGluZyA/IChcclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxvYWRlcn0+XHJcblx0XHRcdFx0XHRcdFx0XHQ8TG9hZGVyIC8+XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdCkgOiAoXHJcblx0XHRcdFx0XHRcdFx0PFRhYmxlUHJvZHV0byBkYXRhPXtwcm9kdXRvTGlzdGF9IC8+XHJcblx0XHRcdFx0XHRcdCl9XHJcblx0XHRcdFx0XHQ8Lz5cclxuXHRcdFx0XHQpIDogKFxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sb2FkZXJ9PlxyXG5cdFx0XHRcdFx0XHQ8TG9hZGVyIC8+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQpfVxyXG5cdFx0XHQ8L0xheW91dD5cclxuXHRcdDwvPlxyXG5cdCk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzOiBHZXRTZXJ2ZXJTaWRlUHJvcHMgPSBhc3luYyAoY29udGV4dDogYW55KSA9PiB7XHJcblx0dHJ5IHtcclxuXHRcdGNvbnN0IHByb2R1dG9MaXN0YVJlc3VsdCA9IGF3YWl0IGJ1c2NhclByb2R1dG9zUG9yRmlsdHJvKHtcclxuXHRcdFx0cGFyYW1zOiB7XHJcblx0XHRcdFx0Y291bnRUb3RhbDogdHJ1ZSxcclxuXHRcdFx0XHRwYWdlOiAxLFxyXG5cdFx0XHRcdGl0ZW1zUGVyUGFnZTogMTAsXHJcblx0XHRcdH0sXHJcblx0XHR9KTtcclxuXHJcblx0XHRyZXR1cm4ge1xyXG5cdFx0XHRwcm9wczoge1xyXG5cdFx0XHRcdHByb2R1dG9MaXN0YVJlc3VsdCxcclxuXHRcdFx0fSxcclxuXHRcdH07XHJcblx0fSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG5cdFx0aWYgKGVycm9yLnN0YXR1cyA9PT0gNDA0KVxyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdHByb3BzOiB7fSxcclxuXHRcdFx0fTtcclxuXHJcblx0XHRyZXR1cm4ge1xyXG5cdFx0XHRwcm9wczoge30sXHJcblx0XHR9O1xyXG5cdH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2R1dG87XHJcbiJdLCJuYW1lcyI6WyJ1c2VDYWxsYmFjayIsInVzZVJlZiIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiSGVhZCIsIkZvcm1GaWx0ZXIiLCJJbnB1dCIsIkxheW91dCIsIlRhYmxlUHJvZHV0byIsIkxvYWRlciIsInN0eWxlcyIsImhhbmRsZUV2ZW50Q2hhbmdlIiwiYnVzY2FyUHJvZHV0b3NQb3JGaWx0cm8iLCJQcm9wcmllZGFkZXNGb3JtdWxhcmlvcyIsInJlbW92ZXJNYXNrTW9uZXkiLCJQcm9kdXRvIiwicHJvZHV0b0xpc3RhUmVzdWx0IiwiaXNMb2FkaW5nIiwic2V0SXNMb2FkaW5nIiwiY291bnRUb3RhbCIsInBhZ2UiLCJpdGVtc1BlclBhZ2UiLCJmaWx0cm8iLCJzZXRGaWx0cm8iLCJwcm9kdXRvTGlzdGEiLCJzZXRQcm9kdXRvTGlzdGEiLCJmb3JtUmVmIiwiYnVzY2FyTGlzdGFnZW1Qcm9kdXRvcyIsInBhcmFtcyIsInJlc3VsdCIsImhhbmRsZUNoYW5nZSIsImUiLCJwcmVjbyIsImhhbmRsZVN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwidGhlbiIsImNsZWFyRmlsdGVyIiwiY3VycmVudCIsInJlc2V0IiwiZGF0YSIsInRpdHVsbyIsIk1vbmV5IiwibG9hZGVyIl0sInNvdXJjZVJvb3QiOiIifQ==