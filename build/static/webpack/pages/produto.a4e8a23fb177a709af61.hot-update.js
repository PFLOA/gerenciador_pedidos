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
            console.log(filtro);
            _context.next = 5;
            return (0,_service_produto_service__WEBPACK_IMPORTED_MODULE_12__.buscarProdutosPorFiltro)({
              params: filtro
            });

          case 5:
            result = _context.sent;
            setProdutoLista(result);
            _context.next = 11;
            break;

          case 9:
            _context.prev = 9;
            _context.t0 = _context["catch"](1);

          case 11:
            setIsLoading(false);

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 9]]);
  })), [filtro]); //#region [ Handles ]

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvZHV0by5hNGU4YTIzZmIxNzdhNzA5YWY2MS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOztBQVlBLElBQU1lLE9BQStCLEdBQUcsU0FBbENBLE9BQWtDLE9BQTRCO0FBQUE7O0FBQUEsTUFBekJDLGtCQUF5QixRQUF6QkEsa0JBQXlCOztBQUNuRTtBQURtRSxrQkFHakNkLCtDQUFRLENBQUMsS0FBRCxDQUh5QjtBQUFBLE1BRzVEZSxTQUg0RDtBQUFBLE1BR2pEQyxZQUhpRDs7QUFBQSxtQkFJdkNoQiwrQ0FBUSxDQUFxQjtBQUN4RGlCLElBQUFBLFVBQVUsRUFBRSxJQUQ0QztBQUV4REMsSUFBQUEsSUFBSSxFQUFFLENBRmtEO0FBR3hEQyxJQUFBQSxZQUFZLEVBQUU7QUFIMEMsR0FBckIsQ0FKK0I7QUFBQSxNQUk1REMsTUFKNEQ7QUFBQSxNQUlwREMsU0FKb0Q7O0FBQUEsbUJBVWxFckIsK0NBQVEsRUFWMEQ7QUFBQSxNQVM1RHNCLFlBVDREO0FBQUEsTUFTOUNDLGVBVDhDLGtCQVluRTtBQUNBOzs7QUFFQSxNQUFNQyxPQUFPLEdBQUd6Qiw2Q0FBTSxDQUFrQixJQUFsQixDQUF0QixDQWZtRSxDQWlCbkU7O0FBQ0EsTUFBTTBCLHNCQUFzQixHQUFHM0Isa0RBQVcseVZBQUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQzFDa0IsWUFBQUEsWUFBWSxDQUFDLElBQUQsQ0FBWjtBQUQwQztBQUd4Q1UsWUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlQLE1BQVo7QUFId0M7QUFBQSxtQkFJbkJWLGtGQUF1QixDQUFDO0FBQzVDa0IsY0FBQUEsTUFBTSxFQUFFUjtBQURvQyxhQUFELENBSko7O0FBQUE7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QUksRUFBQyxNQUROO0FBRUMsb0JBQUksRUFBRW5CLHlGQUZQO0FBR0MscUJBQUssRUFBQyxVQUhQO0FBSUMsd0JBQVEsRUFBRW1CO0FBSlg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBVEQsZUFpQkM7QUFBSyx1QkFBUyxFQUFDLE9BQWY7QUFBQSxxQ0FDQyw4REFBQywyREFBRDtBQUNDLG9CQUFJLEVBQUMsTUFETjtBQUVDLG9CQUFJLEVBQUMsY0FGTjtBQUdDLHFCQUFLLEVBQUMsa0JBSFA7QUFJQyx3QkFBUSxFQUFFQTtBQUpYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQWpCRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFORDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUpELEVBcUNFZixTQUFTLGdCQUNUO0FBQUssbUJBQVMsRUFBRVAsbUVBQWhCO0FBQUEsaUNBQ0MsOERBQUMsd0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRFMsZ0JBS1QsOERBQUMsNkRBQUQ7QUFBYyxjQUFJLEVBQUVjO0FBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBMUNGO0FBQUEsc0JBREEsZ0JBK0NBO0FBQUssaUJBQVMsRUFBRWQsbUVBQWhCO0FBQUEsK0JBQ0MsOERBQUMsd0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFoREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUxEO0FBQUEsa0JBREQ7QUE2REEsQ0EzSEQ7O0dBQU1LOztLQUFBQTs7QUF3Sk4sK0RBQWVBLE9BQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZHV0by9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuaW1wb3J0IHsgR2V0U2VydmVyU2lkZVByb3BzIH0gZnJvbSAnbmV4dCc7XHJcblxyXG5pbXBvcnQgRm9ybUZpbHRlciBmcm9tICcuLi8uLi9jb21wb25lbnRzL0Zvcm0vRm9ybUZpbHRlcic7XHJcblxyXG5pbXBvcnQgSW5wdXQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9Gb3JtL0lucHV0JztcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi8uLi9jb21wb25lbnRzL0xheW91dCc7XHJcbmltcG9ydCBUYWJsZVByb2R1dG8gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9UYWJsZVByb2R1dG8nO1xyXG5cclxuaW1wb3J0IExvYWRlciBmcm9tICcuLi8uLi9jb21wb25lbnRzL0xvYWRlcic7XHJcblxyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGUubW9kdWxlLnNjc3MnO1xyXG5pbXBvcnQgeyBoYW5kbGVFdmVudENoYW5nZSwgaGFuZGxlTWFzayB9IGZyb20gJy4uLy4uL3V0aWxzL2hhbmRsZUNoYW5nZXMnO1xyXG5pbXBvcnQgeyBidXNjYXJQcm9kdXRvc1BvckZpbHRybyB9IGZyb20gJy4uLy4uL3NlcnZpY2UvcHJvZHV0by5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQnVzY2FyUHJvZHV0b3NGaWx0cm9SZXNwb25zZSB9IGZyb20gJy4uLy4uL3NlcnZpY2UvbW9kZWxzL3Byb2R1dG8vcHJvZHV0by5tb2RlbCc7XHJcbmltcG9ydCB7IFByb3ByaWVkYWRlc0Zvcm11bGFyaW9zIH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJvcHJpZWRhZGVzRm9ybXVsYXJpbyc7XHJcbmltcG9ydCB7IHJlbW92ZXJNYXNrTW9uZXkgfSBmcm9tICcuLi8uLi91dGlscy91dGlsc01vbmV5JztcclxuXHJcbmludGVyZmFjZSBQcm9kdXRvUHJvcHMge1xyXG5cdHByb2R1dG9MaXN0YVJlc3VsdDogQnVzY2FyUHJvZHV0b3NGaWx0cm9SZXNwb25zZTtcclxufVxyXG5pbnRlcmZhY2UgUHJvZHV0b0ZpbHRlclN0YXRlIHtcclxuXHRjb3VudFRvdGFsOiBib29sZWFuO1xyXG5cdHBhZ2U6IG51bWJlcjtcclxuXHRpdGVtc1BlclBhZ2U6IG51bWJlcjtcclxuXHRwcmVjbz86IG51bWJlcjtcclxufVxyXG5cclxuY29uc3QgUHJvZHV0bzogUmVhY3QuRkM8UHJvZHV0b1Byb3BzPiA9ICh7IHByb2R1dG9MaXN0YVJlc3VsdCB9KSA9PiB7XHJcblx0Ly8jcmVnaW9uIFsgVXNlU3RhdGUgXVxyXG5cclxuXHRjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cdGNvbnN0IFtmaWx0cm8sIHNldEZpbHRyb10gPSB1c2VTdGF0ZTxQcm9kdXRvRmlsdGVyU3RhdGU+KHtcclxuXHRcdGNvdW50VG90YWw6IHRydWUsXHJcblx0XHRwYWdlOiAxLFxyXG5cdFx0aXRlbXNQZXJQYWdlOiAxMCxcclxuXHR9KTtcclxuXHRjb25zdCBbcHJvZHV0b0xpc3RhLCBzZXRQcm9kdXRvTGlzdGFdID1cclxuXHRcdHVzZVN0YXRlPEJ1c2NhclByb2R1dG9zRmlsdHJvUmVzcG9uc2U+KCk7XHJcblxyXG5cdC8vI2VuZHJlZ2lvblxyXG5cdC8vI3JlZ2lvbiBbIHJlZiBdXHJcblxyXG5cdGNvbnN0IGZvcm1SZWYgPSB1c2VSZWY8SFRNTEZvcm1FbGVtZW50PihudWxsKTtcclxuXHJcblx0Ly8jZW5kcmVnaW9uXHJcblx0Y29uc3QgYnVzY2FyTGlzdGFnZW1Qcm9kdXRvcyA9IHVzZUNhbGxiYWNrKGFzeW5jICgpID0+IHtcclxuXHRcdHNldElzTG9hZGluZyh0cnVlKTtcclxuXHRcdFx0dHJ5IHtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhmaWx0cm8pO1xyXG5cdFx0XHRcdGNvbnN0IHJlc3VsdCA9IGF3YWl0IGJ1c2NhclByb2R1dG9zUG9yRmlsdHJvKHtcclxuXHRcdFx0XHRcdHBhcmFtczogZmlsdHJvLFxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHRcdHNldFByb2R1dG9MaXN0YShyZXN1bHQpO1xyXG5cdFx0XHR9IGNhdGNoIChlcnJvcikge31cclxuXHRcdFx0c2V0SXNMb2FkaW5nKGZhbHNlKTtcclxuXHR9LCBbZmlsdHJvXSlcclxuXHQvLyNyZWdpb24gWyBIYW5kbGVzIF1cclxuXHJcblx0Y29uc3QgaGFuZGxlQ2hhbmdlID0gKGU6IGFueSkgPT4ge1xyXG5cdFx0aGFuZGxlRXZlbnRDaGFuZ2UoZSwgZmlsdHJvKTtcclxuXHRcdGlmKGZpbHRyby5wcmVjbyl7XHJcblx0XHRcdHNldEZpbHRybyh7Li4uZmlsdHJvLCBwcmVjbzogcmVtb3Zlck1hc2tNb25leShmaWx0cm8ucHJlY28pfSlcclxuXHRcdH1cclxuXHR9O1xyXG5cdGNvbnN0IGhhbmRsZVN1Ym1pdCA9IHVzZUNhbGxiYWNrKFxyXG5cdFx0YXN5bmMgKGU6IGFueSkgPT4ge1xyXG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRcdGJ1c2Nhckxpc3RhZ2VtUHJvZHV0b3MoKS50aGVuKClcclxuXHRcdH0sXHJcblx0XHRbYnVzY2FyTGlzdGFnZW1Qcm9kdXRvc11cclxuXHQpO1xyXG5cclxuXHQvLyNlbmRyZWdpb25cclxuXHQvLyNyZWdpb24gWyBVc2VFZmZlY3RzIF1cclxuXHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdGJ1c2Nhckxpc3RhZ2VtUHJvZHV0b3MoKS50aGVuKCk7XHJcblx0fSwgW2J1c2Nhckxpc3RhZ2VtUHJvZHV0b3NdKTtcclxuXHJcblx0Ly8jZW5kcmVnaW9uXHJcblx0Y29uc3QgY2xlYXJGaWx0ZXIgPSAoKSA9PiB7XHJcblx0XHRmb3JtUmVmLmN1cnJlbnQ/LnJlc2V0KCk7XHJcblx0XHRzZXRGaWx0cm8oe1xyXG5cdFx0XHRjb3VudFRvdGFsOiB0cnVlLFxyXG5cdFx0XHRwYWdlOiAxLFxyXG5cdFx0XHRpdGVtc1BlclBhZ2U6IDEwXHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8PlxyXG5cdFx0XHQ8SGVhZD5cclxuXHRcdFx0XHQ8dGl0bGU+UHJvZHV0b3M8L3RpdGxlPlxyXG5cdFx0XHRcdDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cclxuXHRcdFx0PC9IZWFkPlxyXG5cdFx0XHQ8TGF5b3V0IGFjdGl2ZT17J3Byb2R1dG8nfT5cclxuXHRcdFx0XHR7cHJvZHV0b0xpc3RhPy5kYXRhID8gKFxyXG5cdFx0XHRcdFx0PD5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e2BtYi00IHB5LTIgJHtzdHlsZXMudGl0dWxvfWB9PlxyXG5cdFx0XHRcdFx0XHRcdDxoMj5Qcm9kdXRvczwvaDI+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8Rm9ybUZpbHRlclxyXG5cdFx0XHRcdFx0XHRcdGNsZWFyRmlsdGVyPXtjbGVhckZpbHRlcn1cclxuXHRcdFx0XHRcdFx0XHRvblN1Ym1pdD17aGFuZGxlU3VibWl0fVxyXG5cdFx0XHRcdFx0XHRcdGxpbms9XCJwcm9kdXRvL25vdm9cIlxyXG5cdFx0XHRcdFx0XHRcdGZvcm1SZWY9e2Zvcm1SZWZ9XHJcblx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtM1wiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8SW5wdXRcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR0eXBlPVwidGV4dFwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0bmFtZT1cIm5vbWVQcm9kdXRvXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRsYWJlbD1cIk5vbWUgUHJvZHV0b1wiXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtM1wiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8SW5wdXRcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR0eXBlPVwidGV4dFwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0bmFtZT17UHJvcHJpZWRhZGVzRm9ybXVsYXJpb3MuTW9uZXl9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0bGFiZWw9XCJQcmXDp29cIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcblx0XHRcdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sLTNcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PElucHV0XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0dHlwZT1cImRhdGVcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG5hbWU9XCJkYXRhQ2FkYXN0cm9cIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGxhYmVsPVwiRGF0YSBkZSBDYWRhc3Ryb1wiXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8L0Zvcm1GaWx0ZXI+XHJcblx0XHRcdFx0XHRcdHtpc0xvYWRpbmcgPyAoXHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sb2FkZXJ9PlxyXG5cdFx0XHRcdFx0XHRcdFx0PExvYWRlciAvPlxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQpIDogKFxyXG5cdFx0XHRcdFx0XHRcdDxUYWJsZVByb2R1dG8gZGF0YT17cHJvZHV0b0xpc3RhfSAvPlxyXG5cdFx0XHRcdFx0XHQpfVxyXG5cdFx0XHRcdFx0PC8+XHJcblx0XHRcdFx0KSA6IChcclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubG9hZGVyfT5cclxuXHRcdFx0XHRcdFx0PExvYWRlciAvPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0KX1cclxuXHRcdFx0PC9MYXlvdXQ+XHJcblx0XHQ8Lz5cclxuXHQpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wczogR2V0U2VydmVyU2lkZVByb3BzID0gYXN5bmMgKGNvbnRleHQ6IGFueSkgPT4ge1xyXG5cdHRyeSB7XHJcblx0XHRjb25zdCBwcm9kdXRvTGlzdGFSZXN1bHQgPSBhd2FpdCBidXNjYXJQcm9kdXRvc1BvckZpbHRybyh7XHJcblx0XHRcdHBhcmFtczoge1xyXG5cdFx0XHRcdGNvdW50VG90YWw6IHRydWUsXHJcblx0XHRcdFx0cGFnZTogMSxcclxuXHRcdFx0XHRpdGVtc1BlclBhZ2U6IDEwLFxyXG5cdFx0XHR9LFxyXG5cdFx0fSk7XHJcblxyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0cHJvcHM6IHtcclxuXHRcdFx0XHRwcm9kdXRvTGlzdGFSZXN1bHQsXHJcblx0XHRcdH0sXHJcblx0XHR9O1xyXG5cdH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuXHRcdGlmIChlcnJvci5zdGF0dXMgPT09IDQwNClcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRwcm9wczoge30sXHJcblx0XHRcdH07XHJcblxyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0cHJvcHM6IHt9LFxyXG5cdFx0fTtcclxuXHR9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9kdXRvO1xyXG4iXSwibmFtZXMiOlsidXNlQ2FsbGJhY2siLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkhlYWQiLCJGb3JtRmlsdGVyIiwiSW5wdXQiLCJMYXlvdXQiLCJUYWJsZVByb2R1dG8iLCJMb2FkZXIiLCJzdHlsZXMiLCJoYW5kbGVFdmVudENoYW5nZSIsImJ1c2NhclByb2R1dG9zUG9yRmlsdHJvIiwiUHJvcHJpZWRhZGVzRm9ybXVsYXJpb3MiLCJyZW1vdmVyTWFza01vbmV5IiwiUHJvZHV0byIsInByb2R1dG9MaXN0YVJlc3VsdCIsImlzTG9hZGluZyIsInNldElzTG9hZGluZyIsImNvdW50VG90YWwiLCJwYWdlIiwiaXRlbXNQZXJQYWdlIiwiZmlsdHJvIiwic2V0RmlsdHJvIiwicHJvZHV0b0xpc3RhIiwic2V0UHJvZHV0b0xpc3RhIiwiZm9ybVJlZiIsImJ1c2Nhckxpc3RhZ2VtUHJvZHV0b3MiLCJjb25zb2xlIiwibG9nIiwicGFyYW1zIiwicmVzdWx0IiwiaGFuZGxlQ2hhbmdlIiwiZSIsInByZWNvIiwiaGFuZGxlU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJ0aGVuIiwiY2xlYXJGaWx0ZXIiLCJjdXJyZW50IiwicmVzZXQiLCJkYXRhIiwidGl0dWxvIiwiTW9uZXkiLCJsb2FkZXIiXSwic291cmNlUm9vdCI6IiJ9