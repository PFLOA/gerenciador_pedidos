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
/* harmony import */ var C_Users_117704_Documents_ReactJs_Projetos_react_gerenciador_pedidos_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
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
/* harmony import */ var _style_module_scss__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./style.module.scss */ "./pages/produto/style.module.scss");
/* harmony import */ var _style_module_scss__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_style_module_scss__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _utils_handleChanges__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../utils/handleChanges */ "./utils/handleChanges.ts");
/* harmony import */ var _service_produto_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../service/produto.service */ "./service/produto.service.ts");
/* harmony import */ var _utils_propriedadesFormulario__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../utils/propriedadesFormulario */ "./utils/propriedadesFormulario.ts");
/* module decorator */ module = __webpack_require__.hmd(module);






var _jsxFileName = "C:\\Users\\117704\\Documents\\ReactJs Projetos\\react\\gerenciador_pedidos\\pages\\produto\\index.tsx",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_117704_Documents_ReactJs_Projetos_react_gerenciador_pedidos_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }















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
  //#region [ Handles ]

  var handleChange = function handleChange(e) {
    (0,_utils_handleChanges__WEBPACK_IMPORTED_MODULE_11__.handleEventChange)(e, filtro);
  };

  var handleSubmit = (0,react__WEBPACK_IMPORTED_MODULE_4__.useCallback)( /*#__PURE__*/function () {
    var _ref2 = (0,C_Users_117704_Documents_ReactJs_Projetos_react_gerenciador_pedidos_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__.default)( /*#__PURE__*/C_Users_117704_Documents_ReactJs_Projetos_react_gerenciador_pedidos_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(e) {
      var result;
      return C_Users_117704_Documents_ReactJs_Projetos_react_gerenciador_pedidos_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              e.preventDefault();
              setIsLoading(true);
              _context.prev = 2;
              setFiltro(_objectSpread(_objectSpread({}, filtro), {}, {
                preco: removerMaskMoney(filtro.preco)
              }));
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

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_5___default()), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        children: "Produtos"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 5
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
        rel: "icon",
        href: "/favicon.ico"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 5
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 4
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_8__.default, {
      active: 'produto',
      children: produtoLista !== null && produtoLista !== void 0 && produtoLista.data ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "mb-4 py-2 ".concat((_style_module_scss__WEBPACK_IMPORTED_MODULE_14___default().titulo)),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
            children: "Produtos"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 91,
            columnNumber: 8
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 7
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form_FormFilter__WEBPACK_IMPORTED_MODULE_6__.default, {
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
                lineNumber: 100,
                columnNumber: 10
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 99,
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
                lineNumber: 108,
                columnNumber: 10
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 107,
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
                lineNumber: 116,
                columnNumber: 10
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 115,
              columnNumber: 9
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 98,
            columnNumber: 8
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 7
        }, _this), isLoading ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_14___default().loader),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Loader__WEBPACK_IMPORTED_MODULE_10__.default, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 127,
            columnNumber: 9
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 126,
          columnNumber: 8
        }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_TableProduto__WEBPACK_IMPORTED_MODULE_9__.default, {
          data: produtoLista
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 130,
          columnNumber: 8
        }, _this)]
      }, void 0, true) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_14___default().loader),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Loader__WEBPACK_IMPORTED_MODULE_10__.default, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 135,
          columnNumber: 7
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 134,
        columnNumber: 6
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 4
    }, _this)]
  }, void 0, true);
};

_s(Produto, "5wwdFKRUfjRTBwUhjcEzJ7PHutg=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvZHV0by43NmUwYTI0NjdhZjhmYTU0YTY4ZS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBOztBQU1BLElBQU1jLE9BQStCLEdBQUcsU0FBbENBLE9BQWtDLE9BQTRCO0FBQUE7O0FBQUEsTUFBekJDLGtCQUF5QixRQUF6QkEsa0JBQXlCOztBQUNuRTtBQURtRSxrQkFHakNiLCtDQUFRLENBQUMsS0FBRCxDQUh5QjtBQUFBLE1BRzVEYyxTQUg0RDtBQUFBLE1BR2pEQyxZQUhpRDs7QUFBQSxtQkFJdkNmLCtDQUFRLENBQUM7QUFDcENnQixJQUFBQSxVQUFVLEVBQUUsSUFEd0I7QUFFcENDLElBQUFBLElBQUksRUFBRSxDQUY4QjtBQUdwQ0MsSUFBQUEsWUFBWSxFQUFFO0FBSHNCLEdBQUQsQ0FKK0I7QUFBQSxNQUk1REMsTUFKNEQ7QUFBQSxNQUlwREMsU0FKb0Q7O0FBQUEsbUJBVWxFcEIsK0NBQVEsRUFWMEQ7QUFBQSxNQVM1RHFCLFlBVDREO0FBQUEsTUFTOUNDLGVBVDhDLGtCQVluRTtBQUNBOzs7QUFFQSxNQUFNQyxPQUFPLEdBQUd4Qiw2Q0FBTSxDQUFDLElBQUQsQ0FBdEIsQ0FmbUUsQ0FpQm5FO0FBQ0E7O0FBRUEsTUFBTXlCLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNDLENBQUQsRUFBWTtBQUNoQ2hCLElBQUFBLHdFQUFpQixDQUFDZ0IsQ0FBRCxFQUFJTixNQUFKLENBQWpCO0FBQ0EsR0FGRDs7QUFHQSxNQUFNTyxZQUFZLEdBQUc1QixrREFBVztBQUFBLDBWQUMvQixpQkFBTzJCLENBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0NBLGNBQUFBLENBQUMsQ0FBQ0UsY0FBRjtBQUNBWixjQUFB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QTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFKRCxFQW9DRVYsU0FBUyxnQkFDVDtBQUFLLG1CQUFTLEVBQUVOLG1FQUFoQjtBQUFBLGlDQUNDLDhEQUFDLHdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURTLGdCQUtULDhEQUFDLDZEQUFEO0FBQWMsY0FBSSxFQUFFYTtBQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQXpDRjtBQUFBLHNCQURBLGdCQThDQTtBQUFLLGlCQUFTLEVBQUViLG1FQUFoQjtBQUFBLCtCQUNDLDhEQUFDLHdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBL0NGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFMRDtBQUFBLGtCQUREO0FBNERBLENBcEhEOztHQUFNSTs7S0FBQUE7O0FBaUpOLCtEQUFlQSxPQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3Byb2R1dG8vaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCB7IEdldFNlcnZlclNpZGVQcm9wcyB9IGZyb20gJ25leHQnO1xyXG5cclxuaW1wb3J0IEZvcm1GaWx0ZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9Gb3JtL0Zvcm1GaWx0ZXInO1xyXG5cclxuaW1wb3J0IElucHV0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvRm9ybS9JbnB1dCc7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9MYXlvdXQnO1xyXG5pbXBvcnQgVGFibGVQcm9kdXRvIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvVGFibGVQcm9kdXRvJztcclxuXHJcbmltcG9ydCBMb2FkZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9Mb2FkZXInO1xyXG5cclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlLm1vZHVsZS5zY3NzJztcclxuaW1wb3J0IHsgaGFuZGxlRXZlbnRDaGFuZ2UsIGhhbmRsZU1hc2sgfSBmcm9tICcuLi8uLi91dGlscy9oYW5kbGVDaGFuZ2VzJztcclxuaW1wb3J0IHsgYnVzY2FyUHJvZHV0b3NQb3JGaWx0cm8gfSBmcm9tICcuLi8uLi9zZXJ2aWNlL3Byb2R1dG8uc2VydmljZSc7XHJcbmltcG9ydCB7IEJ1c2NhclByb2R1dG9zRmlsdHJvUmVzcG9uc2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlL21vZGVscy9wcm9kdXRvL3Byb2R1dG8ubW9kZWwnO1xyXG5pbXBvcnQgeyBQcm9wcmllZGFkZXNGb3JtdWxhcmlvcyB9IGZyb20gJy4uLy4uL3V0aWxzL3Byb3ByaWVkYWRlc0Zvcm11bGFyaW8nO1xyXG5cclxuaW50ZXJmYWNlIFByb2R1dG9Qcm9wcyB7XHJcblx0cHJvZHV0b0xpc3RhUmVzdWx0OiBCdXNjYXJQcm9kdXRvc0ZpbHRyb1Jlc3BvbnNlO1xyXG59XHJcblxyXG5jb25zdCBQcm9kdXRvOiBSZWFjdC5GQzxQcm9kdXRvUHJvcHM+ID0gKHsgcHJvZHV0b0xpc3RhUmVzdWx0IH0pID0+IHtcclxuXHQvLyNyZWdpb24gWyBVc2VTdGF0ZSBdXHJcblxyXG5cdGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblx0Y29uc3QgW2ZpbHRybywgc2V0RmlsdHJvXSA9IHVzZVN0YXRlKHtcclxuXHRcdGNvdW50VG90YWw6IHRydWUsXHJcblx0XHRwYWdlOiAxLFxyXG5cdFx0aXRlbXNQZXJQYWdlOiAxMCxcclxuXHR9KTtcclxuXHRjb25zdCBbcHJvZHV0b0xpc3RhLCBzZXRQcm9kdXRvTGlzdGFdID1cclxuXHRcdHVzZVN0YXRlPEJ1c2NhclByb2R1dG9zRmlsdHJvUmVzcG9uc2U+KCk7XHJcblxyXG5cdC8vI2VuZHJlZ2lvblxyXG5cdC8vI3JlZ2lvbiBbIHJlZiBdXHJcblxyXG5cdGNvbnN0IGZvcm1SZWYgPSB1c2VSZWYobnVsbCk7XHJcblxyXG5cdC8vI2VuZHJlZ2lvblxyXG5cdC8vI3JlZ2lvbiBbIEhhbmRsZXMgXVxyXG5cclxuXHRjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZTogYW55KSA9PiB7XHJcblx0XHRoYW5kbGVFdmVudENoYW5nZShlLCBmaWx0cm8pO1xyXG5cdH07XHJcblx0Y29uc3QgaGFuZGxlU3VibWl0ID0gdXNlQ2FsbGJhY2soXHJcblx0XHRhc3luYyAoZTogYW55KSA9PiB7XHJcblx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdFx0c2V0SXNMb2FkaW5nKHRydWUpO1xyXG5cdFx0XHR0cnkge1xyXG5cdFx0XHRcdHNldEZpbHRybyh7Li4uZmlsdHJvLCBwcmVjbzogcmVtb3Zlck1hc2tNb25leShmaWx0cm8ucHJlY28pfSlcclxuXHRcdFx0XHRjb25zdCByZXN1bHQgPSBhd2FpdCBidXNjYXJQcm9kdXRvc1BvckZpbHRybyh7XHJcblx0XHRcdFx0XHRwYXJhbXM6IGZpbHRybyxcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0XHRzZXRQcm9kdXRvTGlzdGEocmVzdWx0KTtcclxuXHRcdFx0fSBjYXRjaCAoZXJyb3IpIHt9XHJcblx0XHRcdHNldElzTG9hZGluZyhmYWxzZSk7XHJcblx0XHR9LFxyXG5cdFx0W2ZpbHRyb11cclxuXHQpO1xyXG5cclxuXHQvLyNlbmRyZWdpb25cclxuXHQvLyNyZWdpb24gWyBVc2VFZmZlY3RzIF1cclxuXHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdGJ1c2NhclByb2R1dG9zUG9yRmlsdHJvKHtcclxuXHRcdFx0cGFyYW1zOiB7XHJcblx0XHRcdFx0Y291bnRUb3RhbDogdHJ1ZSxcclxuXHRcdFx0XHRwYWdlOiAxLFxyXG5cdFx0XHRcdGl0ZW1zUGVyUGFnZTogMTAsXHJcblx0XHRcdH0sXHJcblx0XHR9KS50aGVuKChyZXN1bHQpID0+IHtcclxuXHRcdFx0c2V0UHJvZHV0b0xpc3RhKHJlc3VsdCk7XHJcblx0XHR9KTtcclxuXHR9LCBbXSk7XHJcblxyXG5cdC8vI2VuZHJlZ2lvblxyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PD5cclxuXHRcdFx0PEhlYWQ+XHJcblx0XHRcdFx0PHRpdGxlPlByb2R1dG9zPC90aXRsZT5cclxuXHRcdFx0XHQ8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XHJcblx0XHRcdDwvSGVhZD5cclxuXHRcdFx0PExheW91dCBhY3RpdmU9eydwcm9kdXRvJ30+XHJcblx0XHRcdFx0e3Byb2R1dG9MaXN0YT8uZGF0YSA/IChcclxuXHRcdFx0XHRcdDw+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtgbWItNCBweS0yICR7c3R5bGVzLnRpdHVsb31gfT5cclxuXHRcdFx0XHRcdFx0XHQ8aDI+UHJvZHV0b3M8L2gyPlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PEZvcm1GaWx0ZXJcclxuXHRcdFx0XHRcdFx0XHRvblN1Ym1pdD17aGFuZGxlU3VibWl0fVxyXG5cdFx0XHRcdFx0XHRcdGxpbms9XCJwcm9kdXRvL25vdm9cIlxyXG5cdFx0XHRcdFx0XHRcdGZvcm1SZWY9e2Zvcm1SZWZ9XHJcblx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtM1wiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8SW5wdXRcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR0eXBlPVwidGV4dFwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0bmFtZT1cIm5vbWVQcm9kdXRvXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRsYWJlbD1cIk5vbWUgUHJvZHV0b1wiXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtM1wiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8SW5wdXRcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR0eXBlPVwidGV4dFwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0bmFtZT17UHJvcHJpZWRhZGVzRm9ybXVsYXJpb3MuTW9uZXl9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0bGFiZWw9XCJQcmXDp29cIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcblx0XHRcdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sLTNcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PElucHV0XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0dHlwZT1cImRhdGVcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG5hbWU9XCJkYXRhQ2FkYXN0cm9cIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGxhYmVsPVwiRGF0YSBkZSBDYWRhc3Ryb1wiXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8L0Zvcm1GaWx0ZXI+XHJcblx0XHRcdFx0XHRcdHtpc0xvYWRpbmcgPyAoXHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sb2FkZXJ9PlxyXG5cdFx0XHRcdFx0XHRcdFx0PExvYWRlciAvPlxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQpIDogKFxyXG5cdFx0XHRcdFx0XHRcdDxUYWJsZVByb2R1dG8gZGF0YT17cHJvZHV0b0xpc3RhfSAvPlxyXG5cdFx0XHRcdFx0XHQpfVxyXG5cdFx0XHRcdFx0PC8+XHJcblx0XHRcdFx0KSA6IChcclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubG9hZGVyfT5cclxuXHRcdFx0XHRcdFx0PExvYWRlciAvPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0KX1cclxuXHRcdFx0PC9MYXlvdXQ+XHJcblx0XHQ8Lz5cclxuXHQpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wczogR2V0U2VydmVyU2lkZVByb3BzID0gYXN5bmMgKGNvbnRleHQ6IGFueSkgPT4ge1xyXG5cdHRyeSB7XHJcblx0XHRjb25zdCBwcm9kdXRvTGlzdGFSZXN1bHQgPSBhd2FpdCBidXNjYXJQcm9kdXRvc1BvckZpbHRybyh7XHJcblx0XHRcdHBhcmFtczoge1xyXG5cdFx0XHRcdGNvdW50VG90YWw6IHRydWUsXHJcblx0XHRcdFx0cGFnZTogMSxcclxuXHRcdFx0XHRpdGVtc1BlclBhZ2U6IDEwLFxyXG5cdFx0XHR9LFxyXG5cdFx0fSk7XHJcblxyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0cHJvcHM6IHtcclxuXHRcdFx0XHRwcm9kdXRvTGlzdGFSZXN1bHQsXHJcblx0XHRcdH0sXHJcblx0XHR9O1xyXG5cdH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuXHRcdGlmIChlcnJvci5zdGF0dXMgPT09IDQwNClcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRwcm9wczoge30sXHJcblx0XHRcdH07XHJcblxyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0cHJvcHM6IHt9LFxyXG5cdFx0fTtcclxuXHR9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9kdXRvO1xyXG4iXSwibmFtZXMiOlsidXNlQ2FsbGJhY2siLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkhlYWQiLCJGb3JtRmlsdGVyIiwiSW5wdXQiLCJMYXlvdXQiLCJUYWJsZVByb2R1dG8iLCJMb2FkZXIiLCJzdHlsZXMiLCJoYW5kbGVFdmVudENoYW5nZSIsImJ1c2NhclByb2R1dG9zUG9yRmlsdHJvIiwiUHJvcHJpZWRhZGVzRm9ybXVsYXJpb3MiLCJQcm9kdXRvIiwicHJvZHV0b0xpc3RhUmVzdWx0IiwiaXNMb2FkaW5nIiwic2V0SXNMb2FkaW5nIiwiY291bnRUb3RhbCIsInBhZ2UiLCJpdGVtc1BlclBhZ2UiLCJmaWx0cm8iLCJzZXRGaWx0cm8iLCJwcm9kdXRvTGlzdGEiLCJzZXRQcm9kdXRvTGlzdGEiLCJmb3JtUmVmIiwiaGFuZGxlQ2hhbmdlIiwiZSIsImhhbmRsZVN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwicHJlY28iLCJyZW1vdmVyTWFza01vbmV5IiwicGFyYW1zIiwicmVzdWx0IiwidGhlbiIsImRhdGEiLCJ0aXR1bG8iLCJNb25leSIsImxvYWRlciJdLCJzb3VyY2VSb290IjoiIn0=