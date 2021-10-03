"use strict";
self["webpackHotUpdate_N_E"]("pages/produto/detalhes",{

/***/ "./pages/produto/detalhes/index.tsx":
/*!******************************************!*\
  !*** ./pages/produto/detalhes/index.tsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_117704_Documents_ReactJs_Projetos_react_gerenciador_pedidos_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_117704_Documents_ReactJs_Projetos_react_gerenciador_pedidos_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_Users_117704_Documents_ReactJs_Projetos_react_gerenciador_pedidos_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_117704_Documents_ReactJs_Projetos_react_gerenciador_pedidos_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_Form_FormCadastro__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/Form/FormCadastro */ "./components/Form/FormCadastro/index.tsx");
/* harmony import */ var _components_Form_Input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/Form/Input */ "./components/Form/Input/index.tsx");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../components/Layout */ "./components/Layout/index.tsx");
/* harmony import */ var _components_Loader__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../components/Loader */ "./components/Loader/index.tsx");
/* harmony import */ var _style_module_scss__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./style.module.scss */ "./pages/produto/detalhes/style.module.scss");
/* harmony import */ var _style_module_scss__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_style_module_scss__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _utils_handleChanges__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../utils/handleChanges */ "./utils/handleChanges.ts");
/* harmony import */ var _service_produto_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../service/produto.service */ "./service/produto.service.ts");
/* harmony import */ var _utils_utilsMoney__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../utils/utilsMoney */ "./utils/utilsMoney.ts");
/* module decorator */ module = __webpack_require__.hmd(module);





var _jsxFileName = "C:\\Users\\117704\\Documents\\ReactJs Projetos\\react\\gerenciador_pedidos\\pages\\produto\\detalhes\\index.tsx",
    _this = undefined,
    _s = $RefreshSig$();

/* eslint-disable react-hooks/exhaustive-deps */













var DetalhesProduto = function DetalhesProduto() {
  _s();

  //#region [ UseState ]
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false),
      isLoading = _useState[0],
      setIsLoading = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({}),
      produto = _useState2[0],
      setProduto = _useState2[1]; //#endregion
  //#region [ ref ]


  var formRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null); //#endregion
  //#region [ UseRouter ]

  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)(); //#endregion
  //#region [ Functions ]

  var fetch = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(function (guid) {
    setIsLoading(true);
    (0,_service_produto_service__WEBPACK_IMPORTED_MODULE_12__.buscarProdutoPorGuid)(guid).then(function (result) {
      valoresForm(result);
      setProduto(result);
    })["catch"](function (error) {
      console.log(error);
    });
    setIsLoading(false);
  }, []);

  var valoresForm = function valoresForm(item) {
    var _formRef$current;

    var formElements = (_formRef$current = formRef.current) === null || _formRef$current === void 0 ? void 0 : _formRef$current.elements;

    if (formElements) {
      var element = formElements.namedItem('nomeProduto');
      element.setAttribute('value', item === null || item === void 0 ? void 0 : item.nomeProduto);
      element = formElements.namedItem('preco');
      element.setAttribute('value', (0,_utils_utilsMoney__WEBPACK_IMPORTED_MODULE_13__.formatMoney)(item === null || item === void 0 ? void 0 : item.preco));
      element = formElements.namedItem('dataCadastro');
      element.setAttribute('value', moment__WEBPACK_IMPORTED_MODULE_6___default()(item === null || item === void 0 ? void 0 : item.dataCadastro).format('yyyy-MM-D'));
    }
  }; //#endregion
  //#region [ Handles ]


  var handleChange = function handleChange(e) {
    (0,_utils_handleChanges__WEBPACK_IMPORTED_MODULE_11__.handleEventChange)(e, produto);
  };

  var handleSubmit = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)( /*#__PURE__*/function () {
    var _ref = (0,C_Users_117704_Documents_ReactJs_Projetos_react_gerenciador_pedidos_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/C_Users_117704_Documents_ReactJs_Projetos_react_gerenciador_pedidos_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(e) {
      var result;
      return C_Users_117704_Documents_ReactJs_Projetos_react_gerenciador_pedidos_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              e.preventDefault();
              setIsLoading(true);
              _context.prev = 2;
              _context.next = 5;
              return (0,_service_produto_service__WEBPACK_IMPORTED_MODULE_12__.alterarProduto)({
                nomeProduto: produto.nomeProduto,
                guid: produto.guid,
                preco: (0,_utils_utilsMoney__WEBPACK_IMPORTED_MODULE_13__.removerMaskMoney)(produto.preco)
              });

            case 5:
              result = _context.sent;
              fetch(result.guid);
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
      return _ref.apply(this, arguments);
    };
  }(), [produto, fetch]); //#endregion
  //#region [ UseEffects ]

  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {
    var _ref2 = router.query,
        guid = _ref2.guid;
    fetch(guid);
  }, [router]); //#endregion
  //#region [ UseMemo ]
  //#endregion

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_4___default()), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        children: "Detalhes Produto"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 5
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
        rel: "icon",
        href: "/favicon.ico"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 5
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 4
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_9__.default, {
      active: 'cliente',
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "mb-4 py-2 ".concat((_style_module_scss__WEBPACK_IMPORTED_MODULE_14___default().titulo)),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
          children: "Detalhes Produto"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 118,
          columnNumber: 6
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 5
      }, _this), !isLoading ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form_FormCadastro__WEBPACK_IMPORTED_MODULE_7__.default, {
          onSubmit: handleSubmit,
          formRef: formRef,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "row",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "col-5",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form_Input__WEBPACK_IMPORTED_MODULE_8__.default, {
                type: "text",
                name: "nomeProduto",
                label: "Nome Produto",
                onChange: handleChange
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 125,
                columnNumber: 10
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 124,
              columnNumber: 9
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "col-3",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form_Input__WEBPACK_IMPORTED_MODULE_8__.default, {
                type: "text",
                name: "preco",
                label: "Pre\xE7o",
                onChange: handleChange
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 133,
                columnNumber: 10
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 132,
              columnNumber: 9
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "col-3",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form_Input__WEBPACK_IMPORTED_MODULE_8__.default, {
                type: "date",
                name: "dataCadastro",
                label: "Data de Cadastro",
                onChange: handleChange,
                disabled: true
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 141,
                columnNumber: 10
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 140,
              columnNumber: 9
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 123,
            columnNumber: 8
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 122,
          columnNumber: 7
        }, _this)
      }, void 0, false) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_14___default().loader),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Loader__WEBPACK_IMPORTED_MODULE_10__.default, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 154,
          columnNumber: 7
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 153,
        columnNumber: 6
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 4
    }, _this)]
  }, void 0, true);
};

_s(DetalhesProduto, "tnCR5gvVoONPoCtqqPl5qez6KMg=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter];
});

_c = DetalhesProduto;
/* harmony default export */ __webpack_exports__["default"] = (DetalhesProduto);

var _c;

$RefreshReg$(_c, "DetalhesProduto");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvZHV0by9kZXRhbGhlcy4zOTBiYWI0ZTE3Zjk0YmM0MzkzNS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUlBOztBQUVBLElBQU1pQixlQUF5QixHQUFHLFNBQTVCQSxlQUE0QixHQUFNO0FBQUE7O0FBQ3ZDO0FBRHVDLGtCQUdMakIsK0NBQVEsQ0FBQyxLQUFELENBSEg7QUFBQSxNQUdoQ2tCLFNBSGdDO0FBQUEsTUFHckJDLFlBSHFCOztBQUFBLG1CQUlUbkIsK0NBQVEsQ0FBZSxFQUFmLENBSkM7QUFBQSxNQUloQ29CLE9BSmdDO0FBQUEsTUFJdkJDLFVBSnVCLGtCQU12QztBQUNBOzs7QUFFQSxNQUFNQyxPQUFPLEdBQUduQiw2Q0FBTSxDQUFrQixJQUFsQixDQUF0QixDQVR1QyxDQVd2QztBQUNBOztBQUVBLE1BQU1vQixNQUFNLEdBQUdsQixzREFBUyxFQUF4QixDQWR1QyxDQWdCdkM7QUFDQTs7QUFFQSxNQUFNbUIsS0FBSyxHQUFHdkIsa0RBQVcsQ0FBQyxVQUFDd0IsSUFBRCxFQUFrQjtBQUMzQ04sSUFBQUEsWUFBWSxDQUFDLElBQUQsQ0FBWjtBQUNBTCxJQUFBQSwrRUFBb0IsQ0FBQ1csSUFBRCxDQUFwQixDQUNFQyxJQURGLENBQ08sVUFBQ0MsTUFBRCxFQUFZO0FBQ2pCQyxNQUFBQSxXQUFXLENBQUNELE1BQUQsQ0FBWDtBQUNBTixNQUFBQSxVQUFVLENBQUNNLE1BQUQsQ0FBVjtBQUNBLEtBSkYsV0FLUSxVQUFDRSxLQUFELEVBQVc7QUFDakJDLE1BQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixLQUFaO0FBQ0EsS0FQRjtBQVFBVixJQUFBQSxZQUFZLENBQUMsS0FBRCxDQUFaO0FBQ0EsR0FYd0IsRUFXdEIsRUFY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LDhEQUFDLHdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBckNGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUxEO0FBQUEsa0JBREQ7QUFrREEsQ0F6SUQ7O0dBQU1NO1VBY1VaOzs7S0FkVlk7QUEySU4sK0RBQWVBLGVBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZHV0by9kZXRhbGhlcy9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgcmVhY3QtaG9va3MvZXhoYXVzdGl2ZS1kZXBzICovXHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xyXG5cclxuaW1wb3J0IEZvcm1DYWRhc3RybyBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL0Zvcm0vRm9ybUNhZGFzdHJvJztcclxuXHJcbmltcG9ydCBJbnB1dCBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL0Zvcm0vSW5wdXQnO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvTGF5b3V0JztcclxuaW1wb3J0IExvYWRlciBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL0xvYWRlcic7XHJcblxyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGUubW9kdWxlLnNjc3MnO1xyXG5cclxuaW1wb3J0IHsgaGFuZGxlRXZlbnRDaGFuZ2UsIGhhbmRsZU1hc2sgfSBmcm9tICcuLi8uLi8uLi91dGlscy9oYW5kbGVDaGFuZ2VzJztcclxuaW1wb3J0IHsgUHJvZHV0b01vZGVsIH0gZnJvbSAnLi4vLi4vLi4vc2VydmljZS9tb2RlbHMvcHJvZHV0by9wcm9kdXRvLm1vZGVsJztcclxuaW1wb3J0IHtcclxuXHRhbHRlcmFyUHJvZHV0byxcclxuXHRidXNjYXJQcm9kdXRvUG9yR3VpZCxcclxufSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlL3Byb2R1dG8uc2VydmljZSc7XHJcbmltcG9ydCB7IGZvcm1hdE1vbmV5LCByZW1vdmVyTWFza01vbmV5IH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvdXRpbHNNb25leSc7XHJcblxyXG5jb25zdCBEZXRhbGhlc1Byb2R1dG86IFJlYWN0LkZDID0gKCkgPT4ge1xyXG5cdC8vI3JlZ2lvbiBbIFVzZVN0YXRlIF1cclxuXHJcblx0Y29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHRjb25zdCBbcHJvZHV0bywgc2V0UHJvZHV0b10gPSB1c2VTdGF0ZTxQcm9kdXRvTW9kZWw+KHt9IGFzIFByb2R1dG9Nb2RlbCk7XHJcblxyXG5cdC8vI2VuZHJlZ2lvblxyXG5cdC8vI3JlZ2lvbiBbIHJlZiBdXHJcblxyXG5cdGNvbnN0IGZvcm1SZWYgPSB1c2VSZWY8SFRNTEZvcm1FbGVtZW50PihudWxsKTtcclxuXHJcblx0Ly8jZW5kcmVnaW9uXHJcblx0Ly8jcmVnaW9uIFsgVXNlUm91dGVyIF1cclxuXHJcblx0Y29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG5cdC8vI2VuZHJlZ2lvblxyXG5cdC8vI3JlZ2lvbiBbIEZ1bmN0aW9ucyBdXHJcblxyXG5cdGNvbnN0IGZldGNoID0gdXNlQ2FsbGJhY2soKGd1aWQ6IHN0cmluZykgPT4ge1xyXG5cdFx0c2V0SXNMb2FkaW5nKHRydWUpO1xyXG5cdFx0YnVzY2FyUHJvZHV0b1Bvckd1aWQoZ3VpZClcclxuXHRcdFx0LnRoZW4oKHJlc3VsdCkgPT4ge1xyXG5cdFx0XHRcdHZhbG9yZXNGb3JtKHJlc3VsdCk7XHJcblx0XHRcdFx0c2V0UHJvZHV0byhyZXN1bHQpO1xyXG5cdFx0XHR9KVxyXG5cdFx0XHQuY2F0Y2goKGVycm9yKSA9PiB7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coZXJyb3IpO1xyXG5cdFx0XHR9KTtcclxuXHRcdHNldElzTG9hZGluZyhmYWxzZSk7XHJcblx0fSwgW10pO1xyXG5cdGNvbnN0IHZhbG9yZXNGb3JtID0gKGl0ZW06IFByb2R1dG9Nb2RlbCkgPT4ge1xyXG5cdFx0Y29uc3QgZm9ybUVsZW1lbnRzID0gZm9ybVJlZi5jdXJyZW50Py5lbGVtZW50cztcclxuXHJcblx0XHRpZiAoZm9ybUVsZW1lbnRzKSB7XHJcblx0XHRcdHZhciBlbGVtZW50ID0gZm9ybUVsZW1lbnRzLm5hbWVkSXRlbSgnbm9tZVByb2R1dG8nKSBhcyBFbGVtZW50O1xyXG5cdFx0XHRlbGVtZW50LnNldEF0dHJpYnV0ZSgndmFsdWUnLCBpdGVtPy5ub21lUHJvZHV0byk7XHJcblx0XHRcdGVsZW1lbnQgPSBmb3JtRWxlbWVudHMubmFtZWRJdGVtKCdwcmVjbycpIGFzIEVsZW1lbnQ7XHJcblx0XHRcdGVsZW1lbnQuc2V0QXR0cmlidXRlKCd2YWx1ZScsIGZvcm1hdE1vbmV5KGl0ZW0/LnByZWNvKSk7XHJcblx0XHRcdGVsZW1lbnQgPSBmb3JtRWxlbWVudHMubmFtZWRJdGVtKCdkYXRhQ2FkYXN0cm8nKSBhcyBFbGVtZW50O1xyXG5cdFx0XHRlbGVtZW50LnNldEF0dHJpYnV0ZShcclxuXHRcdFx0XHQndmFsdWUnLFxyXG5cdFx0XHRcdG1vbWVudChpdGVtPy5kYXRhQ2FkYXN0cm8pLmZvcm1hdCgneXl5eS1NTS1EJylcclxuXHRcdFx0KTtcclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHQvLyNlbmRyZWdpb25cclxuXHQvLyNyZWdpb24gWyBIYW5kbGVzIF1cclxuXHJcblx0Y29uc3QgaGFuZGxlQ2hhbmdlID0gKGU6IGFueSkgPT4ge1xyXG5cdFx0aGFuZGxlRXZlbnRDaGFuZ2UoZSwgcHJvZHV0byk7XHJcblx0fTtcclxuXHRjb25zdCBoYW5kbGVTdWJtaXQgPSB1c2VDYWxsYmFjayhcclxuXHRcdGFzeW5jIChlOiBhbnkpID0+IHtcclxuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0XHRzZXRJc0xvYWRpbmcodHJ1ZSk7XHJcblx0XHRcdHRyeSB7XHJcblx0XHRcdFx0Y29uc3QgcmVzdWx0ID0gYXdhaXQgYWx0ZXJhclByb2R1dG8oe1xyXG5cdFx0XHRcdFx0bm9tZVByb2R1dG86IHByb2R1dG8ubm9tZVByb2R1dG8sXHJcblx0XHRcdFx0XHRndWlkOiBwcm9kdXRvLmd1aWQsXHJcblx0XHRcdFx0XHRwcmVjbzogcmVtb3Zlck1hc2tNb25leShwcm9kdXRvLnByZWNvKSxcclxuXHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdFx0ZmV0Y2gocmVzdWx0Lmd1aWQpO1xyXG5cdFx0XHR9IGNhdGNoIChlcnJvcikge31cclxuXHRcdFx0c2V0SXNMb2FkaW5nKGZhbHNlKTtcclxuXHRcdH0sXHJcblx0XHRbcHJvZHV0bywgZmV0Y2hdXHJcblx0KTtcclxuXHJcblx0Ly8jZW5kcmVnaW9uXHJcblx0Ly8jcmVnaW9uIFsgVXNlRWZmZWN0cyBdXHJcblxyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHRjb25zdCB7IGd1aWQgfSA9IHJvdXRlci5xdWVyeSBhcyB7XHJcblx0XHRcdGd1aWQ6IHN0cmluZztcclxuXHRcdH07XHJcblxyXG5cdFx0ZmV0Y2goZ3VpZCk7XHJcblx0fSwgW3JvdXRlcl0pO1xyXG5cclxuXHQvLyNlbmRyZWdpb25cclxuXHQvLyNyZWdpb24gWyBVc2VNZW1vIF1cclxuXHJcblx0Ly8jZW5kcmVnaW9uXHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8PlxyXG5cdFx0XHQ8SGVhZD5cclxuXHRcdFx0XHQ8dGl0bGU+RGV0YWxoZXMgUHJvZHV0bzwvdGl0bGU+XHJcblx0XHRcdFx0PGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxyXG5cdFx0XHQ8L0hlYWQ+XHJcblx0XHRcdDxMYXlvdXQgYWN0aXZlPXsnY2xpZW50ZSd9PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtgbWItNCBweS0yICR7c3R5bGVzLnRpdHVsb31gfT5cclxuXHRcdFx0XHRcdDxoMj5EZXRhbGhlcyBQcm9kdXRvPC9oMj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHR7IWlzTG9hZGluZyA/IChcclxuXHRcdFx0XHRcdDw+XHJcblx0XHRcdFx0XHRcdDxGb3JtQ2FkYXN0cm8gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0gZm9ybVJlZj17Zm9ybVJlZn0+XHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sLTVcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PElucHV0XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0dHlwZT1cInRleHRcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG5hbWU9XCJub21lUHJvZHV0b1wiXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0bGFiZWw9XCJOb21lIFByb2R1dG9cIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcblx0XHRcdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sLTNcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PElucHV0XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0dHlwZT1cInRleHRcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG5hbWU9XCJwcmVjb1wiXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0bGFiZWw9XCJQcmXDp29cIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcblx0XHRcdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sLTNcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PElucHV0XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0dHlwZT1cImRhdGVcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG5hbWU9XCJkYXRhQ2FkYXN0cm9cIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGxhYmVsPVwiRGF0YSBkZSBDYWRhc3Ryb1wiXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRkaXNhYmxlZFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDwvRm9ybUNhZGFzdHJvPlxyXG5cdFx0XHRcdFx0PC8+XHJcblx0XHRcdFx0KSA6IChcclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubG9hZGVyfT5cclxuXHRcdFx0XHRcdFx0PExvYWRlciAvPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0KX1cclxuXHRcdFx0PC9MYXlvdXQ+XHJcblx0XHQ8Lz5cclxuXHQpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGV0YWxoZXNQcm9kdXRvO1xyXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VDYWxsYmFjayIsInVzZUVmZmVjdCIsInVzZVJlZiIsIkhlYWQiLCJ1c2VSb3V0ZXIiLCJtb21lbnQiLCJGb3JtQ2FkYXN0cm8iLCJJbnB1dCIsIkxheW91dCIsIkxvYWRlciIsInN0eWxlcyIsImhhbmRsZUV2ZW50Q2hhbmdlIiwiYWx0ZXJhclByb2R1dG8iLCJidXNjYXJQcm9kdXRvUG9yR3VpZCIsImZvcm1hdE1vbmV5IiwicmVtb3Zlck1hc2tNb25leSIsIkRldGFsaGVzUHJvZHV0byIsImlzTG9hZGluZyIsInNldElzTG9hZGluZyIsInByb2R1dG8iLCJzZXRQcm9kdXRvIiwiZm9ybVJlZiIsInJvdXRlciIsImZldGNoIiwiZ3VpZCIsInRoZW4iLCJyZXN1bHQiLCJ2YWxvcmVzRm9ybSIsImVycm9yIiwiY29uc29sZSIsImxvZyIsIml0ZW0iLCJmb3JtRWxlbWVudHMiLCJjdXJyZW50IiwiZWxlbWVudHMiLCJlbGVtZW50IiwibmFtZWRJdGVtIiwic2V0QXR0cmlidXRlIiwibm9tZVByb2R1dG8iLCJwcmVjbyIsImRhdGFDYWRhc3RybyIsImZvcm1hdCIsImhhbmRsZUNoYW5nZSIsImUiLCJoYW5kbGVTdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsInF1ZXJ5IiwidGl0dWxvIiwibG9hZGVyIl0sInNvdXJjZVJvb3QiOiIifQ==