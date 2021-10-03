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
    preco: undefined
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

    if (filtro.preco) {
      setFiltro(_objectSpread(_objectSpread({}, filtro), {}, {
        preco: (0,_utils_utilsMoney__WEBPACK_IMPORTED_MODULE_14__.removerMaskMoney)(filtro.preco)
      }));
    }
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
      preco: undefined
    });
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_5___default()), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        children: "Produtos"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 5
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
        rel: "icon",
        href: "/favicon.ico"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 5
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 103,
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
            lineNumber: 111,
            columnNumber: 8
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 110,
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
                type: "text",
                name: _utils_propriedadesFormulario__WEBPACK_IMPORTED_MODULE_13__.PropriedadesFormularios.Money,
                label: "Pre\xE7o",
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
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "col-3",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form_Input__WEBPACK_IMPORTED_MODULE_7__.default, {
                type: "date",
                name: "dataCadastro",
                label: "Data de Cadastro",
                onChange: handleChange
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 137,
                columnNumber: 10
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 136,
              columnNumber: 9
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 119,
            columnNumber: 8
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 113,
          columnNumber: 7
        }, _this), isLoading ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_15___default().loader),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Loader__WEBPACK_IMPORTED_MODULE_10__.default, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 148,
            columnNumber: 9
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 147,
          columnNumber: 8
        }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_TableProduto__WEBPACK_IMPORTED_MODULE_9__.default, {
          data: produtoLista
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 151,
          columnNumber: 8
        }, _this)]
      }, void 0, true) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_15___default().loader),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Loader__WEBPACK_IMPORTED_MODULE_10__.default, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 156,
          columnNumber: 7
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 155,
        columnNumber: 6
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 4
    }, _this)]
  }, void 0, true);
};

_s(Produto, "Wu/MIrYzZ69YVrVqoZZumqHr6uM=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvZHV0by5lMjZiZDBiMjY2NzFiZjExOGYzYy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOztBQVlBLElBQU1lLE9BQStCLEdBQUcsU0FBbENBLE9BQWtDLE9BQTRCO0FBQUE7O0FBQUEsTUFBekJDLGtCQUF5QixRQUF6QkEsa0JBQXlCOztBQUNuRTtBQURtRSxrQkFHakNkLCtDQUFRLENBQUMsS0FBRCxDQUh5QjtBQUFBLE1BRzVEZSxTQUg0RDtBQUFBLE1BR2pEQyxZQUhpRDs7QUFBQSxtQkFJdkNoQiwrQ0FBUSxDQUFxQjtBQUN4RGlCLElBQUFBLFVBQVUsRUFBRSxJQUQ0QztBQUV4REMsSUFBQUEsSUFBSSxFQUFFLENBRmtEO0FBR3hEQyxJQUFBQSxZQUFZLEVBQUUsRUFIMEM7QUFJeERDLElBQUFBLEtBQUssRUFBRUM7QUFKaUQsR0FBckIsQ0FKK0I7QUFBQSxNQUk1REMsTUFKNEQ7QUFBQSxNQUlwREMsU0FKb0Q7O0FBQUEsbUJBV2xFdkIsK0NBQVEsRUFYMEQ7QUFBQSxNQVU1RHdCLFlBVjREO0FBQUEsTUFVOUNDLGVBVjhDLGtCQWFuRTtBQUNBOzs7QUFFQSxNQUFNQyxPQUFPLEdBQUczQiw2Q0FBTSxDQUFrQixJQUFsQixDQUF0QixDQWhCbUUsQ0FrQm5FO0FBQ0E7O0FBRUEsTUFBTTRCLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNDLENBQUQsRUFBWTtBQUNoQ25CLElBQUFBLHdFQUFpQixDQUFDbUIsQ0FBRCxFQUFJTixNQUFKLENBQWpCOztBQUNBLFFBQUdBLE1BQU0sQ0FBQ0YsS0FBVixFQUFnQjtBQUNmRyxNQUFBQSxTQUFTLGlDQUFLRCxNQUFMO0FBQWFGLFFBQUFBLEtBQUssRUFBRVIsb0VBQWdCLENBQUNVLE1BQU0sQ0FBQ0YsS0FBUjtBQUFwQyxTQUFUO0FBQ0E7QUFDRCxHQUxEOztBQU1BLE1BQU1TLFlBQVksR0FBRy9CLGtEQUFXO0FBQUEsMFZBQy9CLGlCQUFPOEIsQ0FBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQ0EsY0FBQUEsQ0FBQyxDQUFDRSxjQUFGO0FBQ0FkLGNBQUFBLFlBQVksQ0FBQyxJQUFELENBQVo7QUFGRDtBQUlFZSxjQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWVYsTUFBWjtBQUpGO0FBQUEscUJBS3VCWixrRkFBdUIsQ0FBQztBQUM1Q3VCLGdCQUFBQSxNQUFNLEVBQUVYO0FBRG9DLGVBQUQsQ0FMOUM7O0FBQUE7QUFLUVksY0FBQUEsTUFMUjtBQVFFVCxjQUFBQSxlQUFlLENBQUNTLE1BQUQsQ0FBZjtBQVJGO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBVUNsQixjQUFBQSxZQUFZLENBQUMsS0FBRCxDQUFaOztBQVZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRCtCOztBQUFBO0FBQUE7QUFBQTtBQUFBLE9BYS9CLENBQUNNLE1BQUQsQ0FiK0IsQ0FBaEMsQ0EzQm1FLENBMkNuRTtBQUNBOztBQUVBckIsRUFBQUEsZ0RBQVMsQ0FBQyxZQUFNO0FBQ2ZTLElBQUFBLGtGQUF1QixDQUFDO0FBQ3ZCdUIsTUFBQUEsTUFBTSxFQUFFO0FBQ1BoQixRQUFBQSxVQUFVLEVBQUUsSUFETDtBQUVQQyxRQUFBQSxJQUFJLEVBQUUsQ0FGQztBQUdQQyxRQUFBQSxZQUFZLEVBQUU7QUFIUDtBQURlLEtBQUQsQ0FBdkIsQ0FNR2dCLElBTkgsQ0FNUSxVQUFDRCxNQUFELEVBQVk7QUFDbkJULE1BQUFBLGVBQWUsQ0FBQ1MsTUFBRCxDQUFmO0FBQ0EsS0FSRDtBQVNBLEdBVlEsRUFVTixFQVZNLENBQVQsQ0E5Q21FLENBMERuRTs7QUFDQSxNQUFNRSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUFNO0FBQUE7O0FBQ3pCLHdCQUFBVixPQUFPLENBQUNXLE9BQVIsc0VBQWlCQyxLQUFqQjtBQUNBZixJQUFBQSxTQUFTLENBQUM7QUFDVE4sTUFBQUEsVUFBVSxFQUFFLElBREg7QUFFVEMsTUFBQUEsSUFBSSxFQUFFLENBRkc7QUFHVEMsTUFBQUEsWUFBWSxFQUFFLEVBSEw7QUFJVEMsTUFBQUEsS0FBSyxFQUFFQztBQUpFLEtBQUQsQ0FBVDtBQU1BLEdBUkQ7O0FBVUEsc0JBQ0M7QUFBQSw0QkFDQyw4REFBQyxrREFBRDtBQUFBLDhCQUNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREQsZUFFQztBQUFNLFdBQUcsRUFBQyxNQUFWO0FBQWlCLFlBQUksRUFBQztBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREQsZUFLQyw4REFBQyx1REFBRDtBQUFRLFlBQU0sRUFBRSxTQUFoQjtBQUFBLGdCQUNFRyxZQUFZLFNBQVosSUFBQUEsWUFBWSxXQUFaLElBQUFBLFlBQVksQ0FBRWUsSUFBZCxnQkFDQTtBQUFBLGdDQUNDO0FBQUssbUJBQVMsc0JBQWUvQixtRUFBZixDQUFkO0FBQUEsaUNBQ0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURELGVBSUMsOERBQUMsZ0VBQUQ7QUFDQyxxQkFBVyxFQUFFNEIsV0FEZDtBQUVDLGtCQUFRLEVBQUVQLFlBRlg7QUFHQyxjQUFJLEVBQUMsY0FITjtBQUlDLGlCQUFPLEVBQUVILE9BSlY7QUFBQSxpQ0FNQztBQUFLLHFCQUFTLEVBQUMsS0FBZjtBQUFBLG9DQUNDO0FBQUssdUJBQVMsRUFBQyxPQUFmO0FBQUEscUNBQ0MsOERBQUMsMkRBQUQ7QUFDQyxvQkFBSSxFQUFDLE1BRE47QUFFQyxvQkFBSSxFQUFDLGFBRk47QUFHQyxxQkFBSyxFQUFDLGNBSFA7QUFJQyx3QkFBUSxFQUFFQztBQUpYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURELGVBU0M7QUFBSyx1QkFBUyxFQUFDLE9BQWY7QUFBQSxxQ0FDQyw4REFBQywyREFBRDtBQUNDLG9CQUFJLEVBQUMsTUFETjtBQUVDLG9CQUFJLEVBQUVoQix5RkFGUDtBQUdDLHFCQUFLLEVBQUMsVUFIUDtBQUlDLHdCQUFRLEVBQUVnQjtBQUpYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQVRELGVBaUJDO0FBQUssdUJBQVMsRUFBQyxPQUFmO0FBQUEscUNBQ0MsOERBQUMsMkRBQUQ7QUFDQyxvQkFBSSxFQUFDLE1BRE47QUFFQyxvQkFBSSxFQUFDLGNBRk47QUFHQyxxQkFBSyxFQUFDLGtCQUhQO0FBSUMsd0JBQVEsRUFBRUE7QUFKWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFqQkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTkQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFKRCxFQXFDRVosU0FBUyxnQkFDVDtBQUFLLG1CQUFTLEVBQUVQLG1FQUFoQjtBQUFBLGlDQUNDLDhEQUFDLHdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURTLGdCQUtULDhEQUFDLDZEQUFEO0FBQWMsY0FBSSxFQUFFZ0I7QUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkExQ0Y7QUFBQSxzQkFEQSxnQkErQ0E7QUFBSyxpQkFBUyxFQUFFaEIsbUVBQWhCO0FBQUEsK0JBQ0MsOERBQUMsd0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFoREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUxEO0FBQUEsa0JBREQ7QUE2REEsQ0FsSUQ7O0dBQU1LOztLQUFBQTs7QUErSk4sK0RBQWVBLE9BQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZHV0by9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuaW1wb3J0IHsgR2V0U2VydmVyU2lkZVByb3BzIH0gZnJvbSAnbmV4dCc7XHJcblxyXG5pbXBvcnQgRm9ybUZpbHRlciBmcm9tICcuLi8uLi9jb21wb25lbnRzL0Zvcm0vRm9ybUZpbHRlcic7XHJcblxyXG5pbXBvcnQgSW5wdXQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9Gb3JtL0lucHV0JztcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi8uLi9jb21wb25lbnRzL0xheW91dCc7XHJcbmltcG9ydCBUYWJsZVByb2R1dG8gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9UYWJsZVByb2R1dG8nO1xyXG5cclxuaW1wb3J0IExvYWRlciBmcm9tICcuLi8uLi9jb21wb25lbnRzL0xvYWRlcic7XHJcblxyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGUubW9kdWxlLnNjc3MnO1xyXG5pbXBvcnQgeyBoYW5kbGVFdmVudENoYW5nZSwgaGFuZGxlTWFzayB9IGZyb20gJy4uLy4uL3V0aWxzL2hhbmRsZUNoYW5nZXMnO1xyXG5pbXBvcnQgeyBidXNjYXJQcm9kdXRvc1BvckZpbHRybyB9IGZyb20gJy4uLy4uL3NlcnZpY2UvcHJvZHV0by5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQnVzY2FyUHJvZHV0b3NGaWx0cm9SZXNwb25zZSB9IGZyb20gJy4uLy4uL3NlcnZpY2UvbW9kZWxzL3Byb2R1dG8vcHJvZHV0by5tb2RlbCc7XHJcbmltcG9ydCB7IFByb3ByaWVkYWRlc0Zvcm11bGFyaW9zIH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJvcHJpZWRhZGVzRm9ybXVsYXJpbyc7XHJcbmltcG9ydCB7IHJlbW92ZXJNYXNrTW9uZXkgfSBmcm9tICcuLi8uLi91dGlscy91dGlsc01vbmV5JztcclxuXHJcbmludGVyZmFjZSBQcm9kdXRvUHJvcHMge1xyXG5cdHByb2R1dG9MaXN0YVJlc3VsdDogQnVzY2FyUHJvZHV0b3NGaWx0cm9SZXNwb25zZTtcclxufVxyXG5pbnRlcmZhY2UgUHJvZHV0b0ZpbHRlclN0YXRlIHtcclxuXHRjb3VudFRvdGFsOiBib29sZWFuO1xyXG5cdFx0cGFnZTogbnVtYmVyO1xyXG5cdFx0aXRlbXNQZXJQYWdlOiBudW1iZXI7XHJcblx0XHRwcmVjbz86IG51bWJlcjtcclxufVxyXG5cclxuY29uc3QgUHJvZHV0bzogUmVhY3QuRkM8UHJvZHV0b1Byb3BzPiA9ICh7IHByb2R1dG9MaXN0YVJlc3VsdCB9KSA9PiB7XHJcblx0Ly8jcmVnaW9uIFsgVXNlU3RhdGUgXVxyXG5cclxuXHRjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cdGNvbnN0IFtmaWx0cm8sIHNldEZpbHRyb10gPSB1c2VTdGF0ZTxQcm9kdXRvRmlsdGVyU3RhdGU+KHtcclxuXHRcdGNvdW50VG90YWw6IHRydWUsXHJcblx0XHRwYWdlOiAxLFxyXG5cdFx0aXRlbXNQZXJQYWdlOiAxMCxcclxuXHRcdHByZWNvOiB1bmRlZmluZWRcclxuXHR9KTtcclxuXHRjb25zdCBbcHJvZHV0b0xpc3RhLCBzZXRQcm9kdXRvTGlzdGFdID1cclxuXHRcdHVzZVN0YXRlPEJ1c2NhclByb2R1dG9zRmlsdHJvUmVzcG9uc2U+KCk7XHJcblxyXG5cdC8vI2VuZHJlZ2lvblxyXG5cdC8vI3JlZ2lvbiBbIHJlZiBdXHJcblxyXG5cdGNvbnN0IGZvcm1SZWYgPSB1c2VSZWY8SFRNTEZvcm1FbGVtZW50PihudWxsKTtcclxuXHJcblx0Ly8jZW5kcmVnaW9uXHJcblx0Ly8jcmVnaW9uIFsgSGFuZGxlcyBdXHJcblxyXG5cdGNvbnN0IGhhbmRsZUNoYW5nZSA9IChlOiBhbnkpID0+IHtcclxuXHRcdGhhbmRsZUV2ZW50Q2hhbmdlKGUsIGZpbHRybyk7XHJcblx0XHRpZihmaWx0cm8ucHJlY28pe1xyXG5cdFx0XHRzZXRGaWx0cm8oey4uLmZpbHRybywgcHJlY286IHJlbW92ZXJNYXNrTW9uZXkoZmlsdHJvLnByZWNvKX0pXHJcblx0XHR9XHJcblx0fTtcclxuXHRjb25zdCBoYW5kbGVTdWJtaXQgPSB1c2VDYWxsYmFjayhcclxuXHRcdGFzeW5jIChlOiBhbnkpID0+IHtcclxuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0XHRzZXRJc0xvYWRpbmcodHJ1ZSk7XHJcblx0XHRcdHRyeSB7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coZmlsdHJvKTtcclxuXHRcdFx0XHRjb25zdCByZXN1bHQgPSBhd2FpdCBidXNjYXJQcm9kdXRvc1BvckZpbHRybyh7XHJcblx0XHRcdFx0XHRwYXJhbXM6IGZpbHRybyxcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0XHRzZXRQcm9kdXRvTGlzdGEocmVzdWx0KTtcclxuXHRcdFx0fSBjYXRjaCAoZXJyb3IpIHt9XHJcblx0XHRcdHNldElzTG9hZGluZyhmYWxzZSk7XHJcblx0XHR9LFxyXG5cdFx0W2ZpbHRyb11cclxuXHQpO1xyXG5cclxuXHQvLyNlbmRyZWdpb25cclxuXHQvLyNyZWdpb24gWyBVc2VFZmZlY3RzIF1cclxuXHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdGJ1c2NhclByb2R1dG9zUG9yRmlsdHJvKHtcclxuXHRcdFx0cGFyYW1zOiB7XHJcblx0XHRcdFx0Y291bnRUb3RhbDogdHJ1ZSxcclxuXHRcdFx0XHRwYWdlOiAxLFxyXG5cdFx0XHRcdGl0ZW1zUGVyUGFnZTogMTAsXHJcblx0XHRcdH0sXHJcblx0XHR9KS50aGVuKChyZXN1bHQpID0+IHtcclxuXHRcdFx0c2V0UHJvZHV0b0xpc3RhKHJlc3VsdCk7XHJcblx0XHR9KTtcclxuXHR9LCBbXSk7XHJcblxyXG5cdC8vI2VuZHJlZ2lvblxyXG5cdGNvbnN0IGNsZWFyRmlsdGVyID0gKCkgPT4ge1xyXG5cdFx0Zm9ybVJlZi5jdXJyZW50Py5yZXNldCgpO1xyXG5cdFx0c2V0RmlsdHJvKHtcclxuXHRcdFx0Y291bnRUb3RhbDogdHJ1ZSxcclxuXHRcdFx0cGFnZTogMSxcclxuXHRcdFx0aXRlbXNQZXJQYWdlOiAxMCxcclxuXHRcdFx0cHJlY286IHVuZGVmaW5lZFxyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PD5cclxuXHRcdFx0PEhlYWQ+XHJcblx0XHRcdFx0PHRpdGxlPlByb2R1dG9zPC90aXRsZT5cclxuXHRcdFx0XHQ8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XHJcblx0XHRcdDwvSGVhZD5cclxuXHRcdFx0PExheW91dCBhY3RpdmU9eydwcm9kdXRvJ30+XHJcblx0XHRcdFx0e3Byb2R1dG9MaXN0YT8uZGF0YSA/IChcclxuXHRcdFx0XHRcdDw+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtgbWItNCBweS0yICR7c3R5bGVzLnRpdHVsb31gfT5cclxuXHRcdFx0XHRcdFx0XHQ8aDI+UHJvZHV0b3M8L2gyPlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PEZvcm1GaWx0ZXJcclxuXHRcdFx0XHRcdFx0XHRjbGVhckZpbHRlcj17Y2xlYXJGaWx0ZXJ9XHJcblx0XHRcdFx0XHRcdFx0b25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH1cclxuXHRcdFx0XHRcdFx0XHRsaW5rPVwicHJvZHV0by9ub3ZvXCJcclxuXHRcdFx0XHRcdFx0XHRmb3JtUmVmPXtmb3JtUmVmfVxyXG5cdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sLTNcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PElucHV0XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0dHlwZT1cInRleHRcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG5hbWU9XCJub21lUHJvZHV0b1wiXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0bGFiZWw9XCJOb21lIFByb2R1dG9cIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcblx0XHRcdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sLTNcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PElucHV0XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0dHlwZT1cInRleHRcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG5hbWU9e1Byb3ByaWVkYWRlc0Zvcm11bGFyaW9zLk1vbmV5fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGxhYmVsPVwiUHJlw6dvXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC0zXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxJbnB1dFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHR5cGU9XCJkYXRlXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRuYW1lPVwiZGF0YUNhZGFzdHJvXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRsYWJlbD1cIkRhdGEgZGUgQ2FkYXN0cm9cIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcblx0XHRcdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PC9Gb3JtRmlsdGVyPlxyXG5cdFx0XHRcdFx0XHR7aXNMb2FkaW5nID8gKFxyXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubG9hZGVyfT5cclxuXHRcdFx0XHRcdFx0XHRcdDxMb2FkZXIgLz5cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0KSA6IChcclxuXHRcdFx0XHRcdFx0XHQ8VGFibGVQcm9kdXRvIGRhdGE9e3Byb2R1dG9MaXN0YX0gLz5cclxuXHRcdFx0XHRcdFx0KX1cclxuXHRcdFx0XHRcdDwvPlxyXG5cdFx0XHRcdCkgOiAoXHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxvYWRlcn0+XHJcblx0XHRcdFx0XHRcdDxMb2FkZXIgLz5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdCl9XHJcblx0XHRcdDwvTGF5b3V0PlxyXG5cdFx0PC8+XHJcblx0KTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHM6IEdldFNlcnZlclNpZGVQcm9wcyA9IGFzeW5jIChjb250ZXh0OiBhbnkpID0+IHtcclxuXHR0cnkge1xyXG5cdFx0Y29uc3QgcHJvZHV0b0xpc3RhUmVzdWx0ID0gYXdhaXQgYnVzY2FyUHJvZHV0b3NQb3JGaWx0cm8oe1xyXG5cdFx0XHRwYXJhbXM6IHtcclxuXHRcdFx0XHRjb3VudFRvdGFsOiB0cnVlLFxyXG5cdFx0XHRcdHBhZ2U6IDEsXHJcblx0XHRcdFx0aXRlbXNQZXJQYWdlOiAxMCxcclxuXHRcdFx0fSxcclxuXHRcdH0pO1xyXG5cclxuXHRcdHJldHVybiB7XHJcblx0XHRcdHByb3BzOiB7XHJcblx0XHRcdFx0cHJvZHV0b0xpc3RhUmVzdWx0LFxyXG5cdFx0XHR9LFxyXG5cdFx0fTtcclxuXHR9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcblx0XHRpZiAoZXJyb3Iuc3RhdHVzID09PSA0MDQpXHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0cHJvcHM6IHt9LFxyXG5cdFx0XHR9O1xyXG5cclxuXHRcdHJldHVybiB7XHJcblx0XHRcdHByb3BzOiB7fSxcclxuXHRcdH07XHJcblx0fVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvZHV0bztcclxuIl0sIm5hbWVzIjpbInVzZUNhbGxiYWNrIiwidXNlUmVmIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJIZWFkIiwiRm9ybUZpbHRlciIsIklucHV0IiwiTGF5b3V0IiwiVGFibGVQcm9kdXRvIiwiTG9hZGVyIiwic3R5bGVzIiwiaGFuZGxlRXZlbnRDaGFuZ2UiLCJidXNjYXJQcm9kdXRvc1BvckZpbHRybyIsIlByb3ByaWVkYWRlc0Zvcm11bGFyaW9zIiwicmVtb3Zlck1hc2tNb25leSIsIlByb2R1dG8iLCJwcm9kdXRvTGlzdGFSZXN1bHQiLCJpc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJjb3VudFRvdGFsIiwicGFnZSIsIml0ZW1zUGVyUGFnZSIsInByZWNvIiwidW5kZWZpbmVkIiwiZmlsdHJvIiwic2V0RmlsdHJvIiwicHJvZHV0b0xpc3RhIiwic2V0UHJvZHV0b0xpc3RhIiwiZm9ybVJlZiIsImhhbmRsZUNoYW5nZSIsImUiLCJoYW5kbGVTdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsImNvbnNvbGUiLCJsb2ciLCJwYXJhbXMiLCJyZXN1bHQiLCJ0aGVuIiwiY2xlYXJGaWx0ZXIiLCJjdXJyZW50IiwicmVzZXQiLCJkYXRhIiwidGl0dWxvIiwiTW9uZXkiLCJsb2FkZXIiXSwic291cmNlUm9vdCI6IiJ9