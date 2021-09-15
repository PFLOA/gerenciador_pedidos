(() => {
var exports = {};
exports.id = 242;
exports.ids = [242];
exports.modules = {

/***/ 5479:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(701);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Form_FormFilter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9609);
/* harmony import */ var _components_Form_Input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1884);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9624);
/* harmony import */ var _components_TableProduto__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6839);
/* harmony import */ var _components_Loader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1800);
/* harmony import */ var _style_module_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(7306);
/* harmony import */ var _style_module_scss__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_style_module_scss__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _utils_handleChanges__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7839);
/* harmony import */ var _service_produto_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1375);
/* harmony import */ var _utils_propriedadesFormulario__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2357);

















const Produto = ({
  produtoListaResult
}) => {
  //#region [ UseState ]
  const {
    0: isLoading,
    1: setIsLoading
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const {
    0: filtro,
    1: setFiltro
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
    countTotal: true,
    page: 1,
    itemsPerPage: 10
  });
  const {
    0: produtoLista,
    1: setProdutoLista
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(); //#endregion
  //#region [ ref ]

  const formRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null); //#endregion
  //#region [ Handles ]

  const handleChange = e => {
    (0,_utils_handleChanges__WEBPACK_IMPORTED_MODULE_8__/* .handleEventChange */ .wG)(e, filtro);
  };

  const handleSubmit = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(async e => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const result = await (0,_service_produto_service__WEBPACK_IMPORTED_MODULE_9__/* .buscarProdutosPorFiltro */ .a$)({
        params: filtro
      });
      setProdutoLista(result);
    } catch (error) {}

    setIsLoading(false);
  }, [filtro]); //#endregion
  //#region [ UseEffects ]

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    (0,_service_produto_service__WEBPACK_IMPORTED_MODULE_9__/* .buscarProdutosPorFiltro */ .a$)({
      params: {
        countTotal: true,
        page: 1,
        itemsPerPage: 10
      }
    }).then(result => {
      setProdutoLista(result);
    });
  }, []); //#endregion

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
        children: "Produtos"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
        rel: "icon",
        href: "/favicon.ico"
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, {
      active: 'produto',
      children: produtoLista !== null && produtoLista !== void 0 && produtoLista.data ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
          className: `mb-4 py-2 ${(_style_module_scss__WEBPACK_IMPORTED_MODULE_11___default().titulo)}`,
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
            children: "Produtos"
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Form_FormFilter__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
          onSubmit: handleSubmit,
          link: "produto/novo",
          formRef: formRef,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "row",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
              className: "col-3",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Form_Input__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
                type: "text",
                name: "nomeProduto",
                label: "Nome Produto",
                onChange: handleChange
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
              className: "col-3",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Form_Input__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
                type: "text",
                name: _utils_propriedadesFormulario__WEBPACK_IMPORTED_MODULE_10__/* .PropriedadesFormularios.Money */ .r.Money,
                label: "Pre\xE7o",
                onChange: handleChange
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
              className: "col-3",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Form_Input__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
                type: "date",
                name: "dataCadastro",
                label: "Data de Cadastro",
                onChange: handleChange
              })
            })]
          })
        }), isLoading ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
          className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_11___default().loader),
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Loader__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z, {})
        }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_TableProduto__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z, {
          data: produtoLista
        })]
      }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_11___default().loader),
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Loader__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z, {})
      })
    })]
  });
};

const getServerSideProps = async context => {
  try {
    const produtoListaResult = await (0,_service_produto_service__WEBPACK_IMPORTED_MODULE_9__/* .buscarProdutosPorFiltro */ .a$)({
      params: {
        countTotal: true,
        page: 1,
        itemsPerPage: 10
      }
    });
    return {
      props: {
        produtoListaResult
      }
    };
  } catch (error) {
    if (error.status === 404) return {
      props: {}
    };
    return {
      props: {}
    };
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Produto);

/***/ }),

/***/ 7306:
/***/ ((module) => {

// Exports
module.exports = {
	"loader": "style_loader__1W8_s"
};


/***/ }),

/***/ 2376:
/***/ ((module) => {

"use strict";
module.exports = require("axios");

/***/ }),

/***/ 9325:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 5378:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 7162:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 8773:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 2248:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 9372:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 665:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 2747:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 333:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 3456:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 7620:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 701:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 9297:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 5282:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [664,308,760,413,839,375,667,20], () => (__webpack_exec__(5479)));
module.exports = __webpack_exports__;

})();