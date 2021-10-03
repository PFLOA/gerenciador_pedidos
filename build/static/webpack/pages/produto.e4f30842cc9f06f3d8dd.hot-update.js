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
              _context.t0 = _context["catch"](2);

            case 11:
              setIsLoading(false);

            case 12:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[2, 9]]);
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
        lineNumber: 86,
        columnNumber: 5
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
        rel: "icon",
        href: "/favicon.ico"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 5
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 85,
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
            lineNumber: 93,
            columnNumber: 8
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 92,
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
                lineNumber: 102,
                columnNumber: 10
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 101,
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
                lineNumber: 110,
                columnNumber: 10
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 109,
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
                lineNumber: 118,
                columnNumber: 10
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 117,
              columnNumber: 9
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 100,
            columnNumber: 8
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 7
        }, _this), isLoading ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_15___default().loader),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Loader__WEBPACK_IMPORTED_MODULE_10__.default, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 129,
            columnNumber: 9
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 128,
          columnNumber: 8
        }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_TableProduto__WEBPACK_IMPORTED_MODULE_9__.default, {
          data: produtoLista
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 132,
          columnNumber: 8
        }, _this)]
      }, void 0, true) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_15___default().loader),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Loader__WEBPACK_IMPORTED_MODULE_10__.default, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 137,
          columnNumber: 7
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 136,
        columnNumber: 6
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 89,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvZHV0by5lNGYzMDg0MmNjOWYwNmYzZDhkZC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOztBQU1BLElBQU1lLE9BQStCLEdBQUcsU0FBbENBLE9BQWtDLE9BQTRCO0FBQUE7O0FBQUEsTUFBekJDLGtCQUF5QixRQUF6QkEsa0JBQXlCOztBQUNuRTtBQURtRSxrQkFHakNkLCtDQUFRLENBQUMsS0FBRCxDQUh5QjtBQUFBLE1BRzVEZSxTQUg0RDtBQUFBLE1BR2pEQyxZQUhpRDs7QUFBQSxtQkFJdkNoQiwrQ0FBUSxDQUFDO0FBQ3BDaUIsSUFBQUEsVUFBVSxFQUFFLElBRHdCO0FBRXBDQyxJQUFBQSxJQUFJLEVBQUUsQ0FGOEI7QUFHcENDLElBQUFBLFlBQVksRUFBRSxFQUhzQjtBQUlwQ0MsSUFBQUEsS0FBSyxFQUFFO0FBSjZCLEdBQUQsQ0FKK0I7QUFBQSxNQUk1REMsTUFKNEQ7QUFBQSxNQUlwREMsU0FKb0Q7O0FBQUEsbUJBV2xFdEIsK0NBQVEsRUFYMEQ7QUFBQSxNQVU1RHVCLFlBVjREO0FBQUEsTUFVOUNDLGVBVjhDLGtCQWFuRTtBQUNBOzs7QUFFQSxNQUFNQyxPQUFPLEdBQUcxQiw2Q0FBTSxDQUFDLElBQUQsQ0FBdEIsQ0FoQm1FLENBa0JuRTtBQUNBOztBQUVBLE1BQU0yQixZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDQyxDQUFELEVBQVk7QUFDaENsQixJQUFBQSx3RUFBaUIsQ0FBQ2tCLENBQUQsRUFBSU4sTUFBSixDQUFqQjtBQUNBQyxJQUFBQSxTQUFTLGlDQUFLRCxNQUFMO0FBQWFELE1BQUFBLEtBQUssRUFBRVIsb0VBQWdCLENBQUNTLE1BQU0sQ0FBQ0QsS0FBUjtBQUFwQyxPQUFU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REQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFqQkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFKRCxFQW9DRVgsU0FBUyxnQkFDVDtBQUFLLG1CQUFTLEVBQUVQLG1FQUFoQjtBQUFBLGlDQUNDLDhEQUFDLHdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURTLGdCQUtULDhEQUFDLDZEQUFEO0FBQWMsY0FBSSxFQUFFZTtBQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQXpDRjtBQUFBLHNCQURBLGdCQThDQTtBQUFLLGlCQUFTLEVBQUVmLG1FQUFoQjtBQUFBLCtCQUNDLDhEQUFDLHdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBL0NGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFMRDtBQUFBLGtCQUREO0FBNERBLENBckhEOztHQUFNSzs7S0FBQUE7O0FBa0pOLCtEQUFlQSxPQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3Byb2R1dG8vaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCB7IEdldFNlcnZlclNpZGVQcm9wcyB9IGZyb20gJ25leHQnO1xyXG5cclxuaW1wb3J0IEZvcm1GaWx0ZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9Gb3JtL0Zvcm1GaWx0ZXInO1xyXG5cclxuaW1wb3J0IElucHV0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvRm9ybS9JbnB1dCc7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9MYXlvdXQnO1xyXG5pbXBvcnQgVGFibGVQcm9kdXRvIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvVGFibGVQcm9kdXRvJztcclxuXHJcbmltcG9ydCBMb2FkZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9Mb2FkZXInO1xyXG5cclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlLm1vZHVsZS5zY3NzJztcclxuaW1wb3J0IHsgaGFuZGxlRXZlbnRDaGFuZ2UsIGhhbmRsZU1hc2sgfSBmcm9tICcuLi8uLi91dGlscy9oYW5kbGVDaGFuZ2VzJztcclxuaW1wb3J0IHsgYnVzY2FyUHJvZHV0b3NQb3JGaWx0cm8gfSBmcm9tICcuLi8uLi9zZXJ2aWNlL3Byb2R1dG8uc2VydmljZSc7XHJcbmltcG9ydCB7IEJ1c2NhclByb2R1dG9zRmlsdHJvUmVzcG9uc2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlL21vZGVscy9wcm9kdXRvL3Byb2R1dG8ubW9kZWwnO1xyXG5pbXBvcnQgeyBQcm9wcmllZGFkZXNGb3JtdWxhcmlvcyB9IGZyb20gJy4uLy4uL3V0aWxzL3Byb3ByaWVkYWRlc0Zvcm11bGFyaW8nO1xyXG5pbXBvcnQgeyByZW1vdmVyTWFza01vbmV5IH0gZnJvbSAnLi4vLi4vdXRpbHMvdXRpbHNNb25leSc7XHJcblxyXG5pbnRlcmZhY2UgUHJvZHV0b1Byb3BzIHtcclxuXHRwcm9kdXRvTGlzdGFSZXN1bHQ6IEJ1c2NhclByb2R1dG9zRmlsdHJvUmVzcG9uc2U7XHJcbn1cclxuXHJcbmNvbnN0IFByb2R1dG86IFJlYWN0LkZDPFByb2R1dG9Qcm9wcz4gPSAoeyBwcm9kdXRvTGlzdGFSZXN1bHQgfSkgPT4ge1xyXG5cdC8vI3JlZ2lvbiBbIFVzZVN0YXRlIF1cclxuXHJcblx0Y29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHRjb25zdCBbZmlsdHJvLCBzZXRGaWx0cm9dID0gdXNlU3RhdGUoe1xyXG5cdFx0Y291bnRUb3RhbDogdHJ1ZSxcclxuXHRcdHBhZ2U6IDEsXHJcblx0XHRpdGVtc1BlclBhZ2U6IDEwLFxyXG5cdFx0cHJlY286IDBcclxuXHR9KTtcclxuXHRjb25zdCBbcHJvZHV0b0xpc3RhLCBzZXRQcm9kdXRvTGlzdGFdID1cclxuXHRcdHVzZVN0YXRlPEJ1c2NhclByb2R1dG9zRmlsdHJvUmVzcG9uc2U+KCk7XHJcblxyXG5cdC8vI2VuZHJlZ2lvblxyXG5cdC8vI3JlZ2lvbiBbIHJlZiBdXHJcblxyXG5cdGNvbnN0IGZvcm1SZWYgPSB1c2VSZWYobnVsbCk7XHJcblxyXG5cdC8vI2VuZHJlZ2lvblxyXG5cdC8vI3JlZ2lvbiBbIEhhbmRsZXMgXVxyXG5cclxuXHRjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZTogYW55KSA9PiB7XHJcblx0XHRoYW5kbGVFdmVudENoYW5nZShlLCBmaWx0cm8pO1xyXG5cdFx0c2V0RmlsdHJvKHsuLi5maWx0cm8sIHByZWNvOiByZW1vdmVyTWFza01vbmV5KGZpbHRyby5wcmVjbyl9KVxyXG5cdH07XHJcblx0Y29uc3QgaGFuZGxlU3VibWl0ID0gdXNlQ2FsbGJhY2soXHJcblx0XHRhc3luYyAoZTogYW55KSA9PiB7XHJcblx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdFx0c2V0SXNMb2FkaW5nKHRydWUpO1xyXG5cdFx0XHR0cnkge1xyXG5cdFx0XHRcdGNvbnN0IHJlc3VsdCA9IGF3YWl0IGJ1c2NhclByb2R1dG9zUG9yRmlsdHJvKHtcclxuXHRcdFx0XHRcdHBhcmFtczogZmlsdHJvLFxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHRcdHNldFByb2R1dG9MaXN0YShyZXN1bHQpO1xyXG5cdFx0XHR9IGNhdGNoIChlcnJvcikge31cclxuXHRcdFx0c2V0SXNMb2FkaW5nKGZhbHNlKTtcclxuXHRcdH0sXHJcblx0XHRbZmlsdHJvXVxyXG5cdCk7XHJcblxyXG5cdC8vI2VuZHJlZ2lvblxyXG5cdC8vI3JlZ2lvbiBbIFVzZUVmZmVjdHMgXVxyXG5cclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0YnVzY2FyUHJvZHV0b3NQb3JGaWx0cm8oe1xyXG5cdFx0XHRwYXJhbXM6IHtcclxuXHRcdFx0XHRjb3VudFRvdGFsOiB0cnVlLFxyXG5cdFx0XHRcdHBhZ2U6IDEsXHJcblx0XHRcdFx0aXRlbXNQZXJQYWdlOiAxMCxcclxuXHRcdFx0fSxcclxuXHRcdH0pLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG5cdFx0XHRzZXRQcm9kdXRvTGlzdGEocmVzdWx0KTtcclxuXHRcdH0pO1xyXG5cdH0sIFtdKTtcclxuXHJcblx0Ly8jZW5kcmVnaW9uXHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8PlxyXG5cdFx0XHQ8SGVhZD5cclxuXHRcdFx0XHQ8dGl0bGU+UHJvZHV0b3M8L3RpdGxlPlxyXG5cdFx0XHRcdDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cclxuXHRcdFx0PC9IZWFkPlxyXG5cdFx0XHQ8TGF5b3V0IGFjdGl2ZT17J3Byb2R1dG8nfT5cclxuXHRcdFx0XHR7cHJvZHV0b0xpc3RhPy5kYXRhID8gKFxyXG5cdFx0XHRcdFx0PD5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e2BtYi00IHB5LTIgJHtzdHlsZXMudGl0dWxvfWB9PlxyXG5cdFx0XHRcdFx0XHRcdDxoMj5Qcm9kdXRvczwvaDI+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8Rm9ybUZpbHRlclxyXG5cdFx0XHRcdFx0XHRcdG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9XHJcblx0XHRcdFx0XHRcdFx0bGluaz1cInByb2R1dG8vbm92b1wiXHJcblx0XHRcdFx0XHRcdFx0Zm9ybVJlZj17Zm9ybVJlZn1cclxuXHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC0zXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxJbnB1dFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHR5cGU9XCJ0ZXh0XCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRuYW1lPVwibm9tZVByb2R1dG9cIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGxhYmVsPVwiTm9tZSBQcm9kdXRvXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC0zXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxJbnB1dFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHR5cGU9XCJ0ZXh0XCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRuYW1lPXtQcm9wcmllZGFkZXNGb3JtdWxhcmlvcy5Nb25leX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRsYWJlbD1cIlByZcOnb1wiXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtM1wiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8SW5wdXRcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR0eXBlPVwiZGF0ZVwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0bmFtZT1cImRhdGFDYWRhc3Ryb1wiXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0bGFiZWw9XCJEYXRhIGRlIENhZGFzdHJvXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDwvRm9ybUZpbHRlcj5cclxuXHRcdFx0XHRcdFx0e2lzTG9hZGluZyA/IChcclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxvYWRlcn0+XHJcblx0XHRcdFx0XHRcdFx0XHQ8TG9hZGVyIC8+XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdCkgOiAoXHJcblx0XHRcdFx0XHRcdFx0PFRhYmxlUHJvZHV0byBkYXRhPXtwcm9kdXRvTGlzdGF9IC8+XHJcblx0XHRcdFx0XHRcdCl9XHJcblx0XHRcdFx0XHQ8Lz5cclxuXHRcdFx0XHQpIDogKFxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sb2FkZXJ9PlxyXG5cdFx0XHRcdFx0XHQ8TG9hZGVyIC8+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQpfVxyXG5cdFx0XHQ8L0xheW91dD5cclxuXHRcdDwvPlxyXG5cdCk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzOiBHZXRTZXJ2ZXJTaWRlUHJvcHMgPSBhc3luYyAoY29udGV4dDogYW55KSA9PiB7XHJcblx0dHJ5IHtcclxuXHRcdGNvbnN0IHByb2R1dG9MaXN0YVJlc3VsdCA9IGF3YWl0IGJ1c2NhclByb2R1dG9zUG9yRmlsdHJvKHtcclxuXHRcdFx0cGFyYW1zOiB7XHJcblx0XHRcdFx0Y291bnRUb3RhbDogdHJ1ZSxcclxuXHRcdFx0XHRwYWdlOiAxLFxyXG5cdFx0XHRcdGl0ZW1zUGVyUGFnZTogMTAsXHJcblx0XHRcdH0sXHJcblx0XHR9KTtcclxuXHJcblx0XHRyZXR1cm4ge1xyXG5cdFx0XHRwcm9wczoge1xyXG5cdFx0XHRcdHByb2R1dG9MaXN0YVJlc3VsdCxcclxuXHRcdFx0fSxcclxuXHRcdH07XHJcblx0fSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG5cdFx0aWYgKGVycm9yLnN0YXR1cyA9PT0gNDA0KVxyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdHByb3BzOiB7fSxcclxuXHRcdFx0fTtcclxuXHJcblx0XHRyZXR1cm4ge1xyXG5cdFx0XHRwcm9wczoge30sXHJcblx0XHR9O1xyXG5cdH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2R1dG87XHJcbiJdLCJuYW1lcyI6WyJ1c2VDYWxsYmFjayIsInVzZVJlZiIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiSGVhZCIsIkZvcm1GaWx0ZXIiLCJJbnB1dCIsIkxheW91dCIsIlRhYmxlUHJvZHV0byIsIkxvYWRlciIsInN0eWxlcyIsImhhbmRsZUV2ZW50Q2hhbmdlIiwiYnVzY2FyUHJvZHV0b3NQb3JGaWx0cm8iLCJQcm9wcmllZGFkZXNGb3JtdWxhcmlvcyIsInJlbW92ZXJNYXNrTW9uZXkiLCJQcm9kdXRvIiwicHJvZHV0b0xpc3RhUmVzdWx0IiwiaXNMb2FkaW5nIiwic2V0SXNMb2FkaW5nIiwiY291bnRUb3RhbCIsInBhZ2UiLCJpdGVtc1BlclBhZ2UiLCJwcmVjbyIsImZpbHRybyIsInNldEZpbHRybyIsInByb2R1dG9MaXN0YSIsInNldFByb2R1dG9MaXN0YSIsImZvcm1SZWYiLCJoYW5kbGVDaGFuZ2UiLCJlIiwiaGFuZGxlU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJwYXJhbXMiLCJyZXN1bHQiLCJ0aGVuIiwiZGF0YSIsInRpdHVsbyIsIk1vbmV5IiwibG9hZGVyIl0sInNvdXJjZVJvb3QiOiIifQ==