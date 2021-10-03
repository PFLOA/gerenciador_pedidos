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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvZHV0by5kZTIyNjdjNzJmYzkzZTlmMjVlMC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOztBQVlBLElBQU1lLE9BQStCLEdBQUcsU0FBbENBLE9BQWtDLE9BQTRCO0FBQUE7O0FBQUEsTUFBekJDLGtCQUF5QixRQUF6QkEsa0JBQXlCOztBQUNuRTtBQURtRSxrQkFHakNkLCtDQUFRLENBQUMsS0FBRCxDQUh5QjtBQUFBLE1BRzVEZSxTQUg0RDtBQUFBLE1BR2pEQyxZQUhpRDs7QUFBQSxtQkFJdkNoQiwrQ0FBUSxDQUFxQjtBQUN4RGlCLElBQUFBLFVBQVUsRUFBRSxJQUQ0QztBQUV4REMsSUFBQUEsSUFBSSxFQUFFLENBRmtEO0FBR3hEQyxJQUFBQSxZQUFZLEVBQUU7QUFIMEMsR0FBckIsQ0FKK0I7QUFBQSxNQUk1REMsTUFKNEQ7QUFBQSxNQUlwREMsU0FKb0Q7O0FBQUEsbUJBVWxFckIsK0NBQVEsRUFWMEQ7QUFBQSxNQVM1RHNCLFlBVDREO0FBQUEsTUFTOUNDLGVBVDhDLGtCQVluRTtBQUNBOzs7QUFFQSxNQUFNQyxPQUFPLEdBQUd6Qiw2Q0FBTSxDQUFrQixJQUFsQixDQUF0QixDQWZtRSxDQWlCbkU7O0FBQ0EsTUFBTTBCLHNCQUFzQixHQUFHM0Isa0RBQVcseVZBQUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQzFDa0IsWUFBQUEsWUFBWSxDQUFDLElBQUQsQ0FBWjtBQUQwQztBQUFBO0FBQUEsbUJBR25CTixrRkFBdUIsQ0FBQztBQUM1Q2dCLGNBQUFBLE1BQU0sRUFBRU47QUFEb0MsYUFBRCxDQUhKOztBQUFBO0FBR2xDTyxZQUFBQSxNQUhrQztBQU14Q0osWUFBQUEsZUFBZSxDQUFD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QkFBSyxFQUFDLFVBSFA7QUFJQyx3QkFBUSxFQUFFaUI7QUFKWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFURCxlQWlCQztBQUFLLHVCQUFTLEVBQUMsT0FBZjtBQUFBLHFDQUNDLDhEQUFDLDJEQUFEO0FBQ0Msb0JBQUksRUFBQyxNQUROO0FBRUMsb0JBQUksRUFBQyxjQUZOO0FBR0MscUJBQUssRUFBQyxrQkFIUDtBQUlDLHdCQUFRLEVBQUVBO0FBSlg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBakJEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU5EO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSkQsRUFxQ0ViLFNBQVMsZ0JBQ1Q7QUFBSyxtQkFBUyxFQUFFUCxtRUFBaEI7QUFBQSxpQ0FDQyw4REFBQyx3REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEUyxnQkFLVCw4REFBQyw2REFBRDtBQUFjLGNBQUksRUFBRWM7QUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkExQ0Y7QUFBQSxzQkFEQSxnQkErQ0E7QUFBSyxpQkFBUyxFQUFFZCxtRUFBaEI7QUFBQSwrQkFDQyw4REFBQyx3REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWhERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTEQ7QUFBQSxrQkFERDtBQTZEQSxDQTNIRDs7R0FBTUs7O0tBQUFBOztBQXdKTiwrREFBZUEsT0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9wcm9kdXRvL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgeyBHZXRTZXJ2ZXJTaWRlUHJvcHMgfSBmcm9tICduZXh0JztcclxuXHJcbmltcG9ydCBGb3JtRmlsdGVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvRm9ybS9Gb3JtRmlsdGVyJztcclxuXHJcbmltcG9ydCBJbnB1dCBmcm9tICcuLi8uLi9jb21wb25lbnRzL0Zvcm0vSW5wdXQnO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTGF5b3V0JztcclxuaW1wb3J0IFRhYmxlUHJvZHV0byBmcm9tICcuLi8uLi9jb21wb25lbnRzL1RhYmxlUHJvZHV0byc7XHJcblxyXG5pbXBvcnQgTG9hZGVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTG9hZGVyJztcclxuXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZS5tb2R1bGUuc2Nzcyc7XHJcbmltcG9ydCB7IGhhbmRsZUV2ZW50Q2hhbmdlLCBoYW5kbGVNYXNrIH0gZnJvbSAnLi4vLi4vdXRpbHMvaGFuZGxlQ2hhbmdlcyc7XHJcbmltcG9ydCB7IGJ1c2NhclByb2R1dG9zUG9yRmlsdHJvIH0gZnJvbSAnLi4vLi4vc2VydmljZS9wcm9kdXRvLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBCdXNjYXJQcm9kdXRvc0ZpbHRyb1Jlc3BvbnNlIH0gZnJvbSAnLi4vLi4vc2VydmljZS9tb2RlbHMvcHJvZHV0by9wcm9kdXRvLm1vZGVsJztcclxuaW1wb3J0IHsgUHJvcHJpZWRhZGVzRm9ybXVsYXJpb3MgfSBmcm9tICcuLi8uLi91dGlscy9wcm9wcmllZGFkZXNGb3JtdWxhcmlvJztcclxuaW1wb3J0IHsgcmVtb3Zlck1hc2tNb25leSB9IGZyb20gJy4uLy4uL3V0aWxzL3V0aWxzTW9uZXknO1xyXG5cclxuaW50ZXJmYWNlIFByb2R1dG9Qcm9wcyB7XHJcblx0cHJvZHV0b0xpc3RhUmVzdWx0OiBCdXNjYXJQcm9kdXRvc0ZpbHRyb1Jlc3BvbnNlO1xyXG59XHJcbmludGVyZmFjZSBQcm9kdXRvRmlsdGVyU3RhdGUge1xyXG5cdGNvdW50VG90YWw6IGJvb2xlYW47XHJcblx0cGFnZTogbnVtYmVyO1xyXG5cdGl0ZW1zUGVyUGFnZTogbnVtYmVyO1xyXG5cdHByZWNvPzogbnVtYmVyO1xyXG59XHJcblxyXG5jb25zdCBQcm9kdXRvOiBSZWFjdC5GQzxQcm9kdXRvUHJvcHM+ID0gKHsgcHJvZHV0b0xpc3RhUmVzdWx0IH0pID0+IHtcclxuXHQvLyNyZWdpb24gWyBVc2VTdGF0ZSBdXHJcblxyXG5cdGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblx0Y29uc3QgW2ZpbHRybywgc2V0RmlsdHJvXSA9IHVzZVN0YXRlPFByb2R1dG9GaWx0ZXJTdGF0ZT4oe1xyXG5cdFx0Y291bnRUb3RhbDogdHJ1ZSxcclxuXHRcdHBhZ2U6IDEsXHJcblx0XHRpdGVtc1BlclBhZ2U6IDEwLFxyXG5cdH0pO1xyXG5cdGNvbnN0IFtwcm9kdXRvTGlzdGEsIHNldFByb2R1dG9MaXN0YV0gPVxyXG5cdFx0dXNlU3RhdGU8QnVzY2FyUHJvZHV0b3NGaWx0cm9SZXNwb25zZT4oKTtcclxuXHJcblx0Ly8jZW5kcmVnaW9uXHJcblx0Ly8jcmVnaW9uIFsgcmVmIF1cclxuXHJcblx0Y29uc3QgZm9ybVJlZiA9IHVzZVJlZjxIVE1MRm9ybUVsZW1lbnQ+KG51bGwpO1xyXG5cclxuXHQvLyNlbmRyZWdpb25cclxuXHRjb25zdCBidXNjYXJMaXN0YWdlbVByb2R1dG9zID0gdXNlQ2FsbGJhY2soYXN5bmMgKCkgPT4ge1xyXG5cdFx0c2V0SXNMb2FkaW5nKHRydWUpO1xyXG5cdFx0XHR0cnkge1xyXG5cdFx0XHRcdGNvbnN0IHJlc3VsdCA9IGF3YWl0IGJ1c2NhclByb2R1dG9zUG9yRmlsdHJvKHtcclxuXHRcdFx0XHRcdHBhcmFtczogZmlsdHJvLFxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHRcdHNldFByb2R1dG9MaXN0YShyZXN1bHQpO1xyXG5cdFx0XHR9IGNhdGNoIChlcnJvcikge31cclxuXHRcdFx0c2V0SXNMb2FkaW5nKGZhbHNlKTtcclxuXHR9LCBbZmlsdHJvXSlcclxuXHQvLyNyZWdpb24gWyBIYW5kbGVzIF1cclxuXHJcblx0Y29uc3QgaGFuZGxlQ2hhbmdlID0gKGU6IGFueSkgPT4ge1xyXG5cdFx0aGFuZGxlRXZlbnRDaGFuZ2UoZSwgZmlsdHJvKTtcclxuXHRcdGlmKGZpbHRyby5wcmVjbyl7XHJcblx0XHRcdHNldEZpbHRybyh7Li4uZmlsdHJvLCBwcmVjbzogcmVtb3Zlck1hc2tNb25leShmaWx0cm8ucHJlY28pfSlcclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHRjb25zdCBoYW5kbGVTdWJtaXQgPSB1c2VDYWxsYmFjayhcclxuXHRcdGFzeW5jIChlOiBhbnkpID0+IHtcclxuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0XHRidXNjYXJMaXN0YWdlbVByb2R1dG9zKCkudGhlbigpXHJcblx0XHR9LFxyXG5cdFx0W2J1c2Nhckxpc3RhZ2VtUHJvZHV0b3NdXHJcblx0KTtcclxuXHJcblx0Ly8jZW5kcmVnaW9uXHJcblx0Ly8jcmVnaW9uIFsgVXNlRWZmZWN0cyBdXHJcblxyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHRidXNjYXJMaXN0YWdlbVByb2R1dG9zKCkudGhlbigpO1xyXG5cdH0sIFtidXNjYXJMaXN0YWdlbVByb2R1dG9zXSk7XHJcblxyXG5cdC8vI2VuZHJlZ2lvblxyXG5cdGNvbnN0IGNsZWFyRmlsdGVyID0gKCkgPT4ge1xyXG5cdFx0Zm9ybVJlZi5jdXJyZW50Py5yZXNldCgpO1xyXG5cdFx0c2V0RmlsdHJvKHtcclxuXHRcdFx0Y291bnRUb3RhbDogdHJ1ZSxcclxuXHRcdFx0cGFnZTogMSxcclxuXHRcdFx0aXRlbXNQZXJQYWdlOiAxMFxyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PD5cclxuXHRcdFx0PEhlYWQ+XHJcblx0XHRcdFx0PHRpdGxlPlByb2R1dG9zPC90aXRsZT5cclxuXHRcdFx0XHQ8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XHJcblx0XHRcdDwvSGVhZD5cclxuXHRcdFx0PExheW91dCBhY3RpdmU9eydwcm9kdXRvJ30+XHJcblx0XHRcdFx0e3Byb2R1dG9MaXN0YT8uZGF0YSA/IChcclxuXHRcdFx0XHRcdDw+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtgbWItNCBweS0yICR7c3R5bGVzLnRpdHVsb31gfT5cclxuXHRcdFx0XHRcdFx0XHQ8aDI+UHJvZHV0b3M8L2gyPlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PEZvcm1GaWx0ZXJcclxuXHRcdFx0XHRcdFx0XHRjbGVhckZpbHRlcj17Y2xlYXJGaWx0ZXJ9XHJcblx0XHRcdFx0XHRcdFx0b25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH1cclxuXHRcdFx0XHRcdFx0XHRsaW5rPVwicHJvZHV0by9ub3ZvXCJcclxuXHRcdFx0XHRcdFx0XHRmb3JtUmVmPXtmb3JtUmVmfVxyXG5cdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sLTNcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PElucHV0XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0dHlwZT1cInRleHRcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG5hbWU9XCJub21lUHJvZHV0b1wiXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0bGFiZWw9XCJOb21lIFByb2R1dG9cIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcblx0XHRcdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sLTNcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PElucHV0XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0dHlwZT1cInRleHRcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG5hbWU9e1Byb3ByaWVkYWRlc0Zvcm11bGFyaW9zLk1vbmV5fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGxhYmVsPVwiUHJlw6dvXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC0zXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxJbnB1dFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHR5cGU9XCJkYXRlXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRuYW1lPVwiZGF0YUNhZGFzdHJvXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRsYWJlbD1cIkRhdGEgZGUgQ2FkYXN0cm9cIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcblx0XHRcdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PC9Gb3JtRmlsdGVyPlxyXG5cdFx0XHRcdFx0XHR7aXNMb2FkaW5nID8gKFxyXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubG9hZGVyfT5cclxuXHRcdFx0XHRcdFx0XHRcdDxMb2FkZXIgLz5cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0KSA6IChcclxuXHRcdFx0XHRcdFx0XHQ8VGFibGVQcm9kdXRvIGRhdGE9e3Byb2R1dG9MaXN0YX0gLz5cclxuXHRcdFx0XHRcdFx0KX1cclxuXHRcdFx0XHRcdDwvPlxyXG5cdFx0XHRcdCkgOiAoXHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxvYWRlcn0+XHJcblx0XHRcdFx0XHRcdDxMb2FkZXIgLz5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdCl9XHJcblx0XHRcdDwvTGF5b3V0PlxyXG5cdFx0PC8+XHJcblx0KTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHM6IEdldFNlcnZlclNpZGVQcm9wcyA9IGFzeW5jIChjb250ZXh0OiBhbnkpID0+IHtcclxuXHR0cnkge1xyXG5cdFx0Y29uc3QgcHJvZHV0b0xpc3RhUmVzdWx0ID0gYXdhaXQgYnVzY2FyUHJvZHV0b3NQb3JGaWx0cm8oe1xyXG5cdFx0XHRwYXJhbXM6IHtcclxuXHRcdFx0XHRjb3VudFRvdGFsOiB0cnVlLFxyXG5cdFx0XHRcdHBhZ2U6IDEsXHJcblx0XHRcdFx0aXRlbXNQZXJQYWdlOiAxMCxcclxuXHRcdFx0fSxcclxuXHRcdH0pO1xyXG5cclxuXHRcdHJldHVybiB7XHJcblx0XHRcdHByb3BzOiB7XHJcblx0XHRcdFx0cHJvZHV0b0xpc3RhUmVzdWx0LFxyXG5cdFx0XHR9LFxyXG5cdFx0fTtcclxuXHR9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcblx0XHRpZiAoZXJyb3Iuc3RhdHVzID09PSA0MDQpXHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0cHJvcHM6IHt9LFxyXG5cdFx0XHR9O1xyXG5cclxuXHRcdHJldHVybiB7XHJcblx0XHRcdHByb3BzOiB7fSxcclxuXHRcdH07XHJcblx0fVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvZHV0bztcclxuIl0sIm5hbWVzIjpbInVzZUNhbGxiYWNrIiwidXNlUmVmIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJIZWFkIiwiRm9ybUZpbHRlciIsIklucHV0IiwiTGF5b3V0IiwiVGFibGVQcm9kdXRvIiwiTG9hZGVyIiwic3R5bGVzIiwiaGFuZGxlRXZlbnRDaGFuZ2UiLCJidXNjYXJQcm9kdXRvc1BvckZpbHRybyIsIlByb3ByaWVkYWRlc0Zvcm11bGFyaW9zIiwicmVtb3Zlck1hc2tNb25leSIsIlByb2R1dG8iLCJwcm9kdXRvTGlzdGFSZXN1bHQiLCJpc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJjb3VudFRvdGFsIiwicGFnZSIsIml0ZW1zUGVyUGFnZSIsImZpbHRybyIsInNldEZpbHRybyIsInByb2R1dG9MaXN0YSIsInNldFByb2R1dG9MaXN0YSIsImZvcm1SZWYiLCJidXNjYXJMaXN0YWdlbVByb2R1dG9zIiwicGFyYW1zIiwicmVzdWx0IiwiaGFuZGxlQ2hhbmdlIiwiZSIsInByZWNvIiwiaGFuZGxlU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJ0aGVuIiwiY2xlYXJGaWx0ZXIiLCJjdXJyZW50IiwicmVzZXQiLCJkYXRhIiwidGl0dWxvIiwiTW9uZXkiLCJsb2FkZXIiXSwic291cmNlUm9vdCI6IiJ9