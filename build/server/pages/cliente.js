(() => {
var exports = {};
exports.id = 732;
exports.ids = [732];
exports.modules = {

/***/ 7231:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ cliente),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(701);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./components/Form/FormFilter/index.tsx + 1 modules
var FormFilter = __webpack_require__(9609);
// EXTERNAL MODULE: ./components/Form/Input/index.tsx
var Input = __webpack_require__(1884);
// EXTERNAL MODULE: ./components/Layout/index.tsx + 3 modules
var Layout = __webpack_require__(9624);
// EXTERNAL MODULE: ./components/Table/Td/index.tsx
var Td = __webpack_require__(5340);
// EXTERNAL MODULE: ./components/Table/Th/index.tsx
var Th = __webpack_require__(610);
// EXTERNAL MODULE: ./components/Table/Tr/index.tsx
var Tr = __webpack_require__(1814);
// EXTERNAL MODULE: ./components/Table/TdLink/index.tsx
var TdLink = __webpack_require__(3177);
// EXTERNAL MODULE: ./components/TableCliente/style.module.scss
var style_module = __webpack_require__(8042);
var style_module_default = /*#__PURE__*/__webpack_require__.n(style_module);
;// CONCATENATED MODULE: ./components/TableCliente/index.tsx








const Linhas = (item, index) => {
  const {
    guid
  } = item;
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(Tr/* default */.Z, {
    index: index,
    children: [/*#__PURE__*/jsx_runtime_.jsx(Td/* default */.Z, {
      children: item.nomeCliente
    }), /*#__PURE__*/jsx_runtime_.jsx(Td/* default */.Z, {
      children: item.guid
    }), /*#__PURE__*/jsx_runtime_.jsx(TdLink/* default */.Z, {
      link: {
        pathname: 'cliente/detalhes/',
        query: {
          guid: item.guid
        }
      },
      children: "Detalhes"
    })]
  }, index);
};

const TableCliente = ({
  data
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("table", {
    className: (style_module_default()).table,
    children: [/*#__PURE__*/jsx_runtime_.jsx("thead", {
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("tr", {
        children: [/*#__PURE__*/jsx_runtime_.jsx(Th/* default */.Z, {
          width: 400,
          children: "Nome Cliente"
        }), /*#__PURE__*/jsx_runtime_.jsx(Th/* default */.Z, {
          width: 400,
          children: "Guid"
        }), /*#__PURE__*/jsx_runtime_.jsx(Th/* default */.Z, {
          width: 250
        })]
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("tbody", {
      children: data.data.map(Linhas)
    })]
  });
};

/* harmony default export */ const components_TableCliente = (TableCliente);
// EXTERNAL MODULE: ./service/cliente.service.ts
var cliente_service = __webpack_require__(4618);
// EXTERNAL MODULE: ./components/Loader/index.tsx
var Loader = __webpack_require__(1800);
// EXTERNAL MODULE: ./pages/cliente/style.module.scss
var cliente_style_module = __webpack_require__(5800);
var cliente_style_module_default = /*#__PURE__*/__webpack_require__.n(cliente_style_module);
// EXTERNAL MODULE: ./utils/handleChanges.ts + 2 modules
var handleChanges = __webpack_require__(7839);
;// CONCATENATED MODULE: ./pages/cliente/index.tsx
















const Cliente = ({
  clienteListaResult
}) => {
  //#region [ UseState ]
  const {
    0: isLoading,
    1: setIsLoading
  } = (0,external_react_.useState)(false);
  const {
    0: filtro,
    1: setFiltro
  } = (0,external_react_.useState)({
    countTotal: true,
    page: 1,
    itemsPerPage: 10
  });
  const {
    0: clienteLista,
    1: setClienteLista
  } = (0,external_react_.useState)(); //#endregion
  //#region [ ref ]

  const formRef = (0,external_react_.useRef)(null); //#endregion
  //#region [ Handles ]

  const handleChange = e => {
    const {
      name,
      value
    } = (0,handleChanges/* handleEventChange */.wG)(e, filtro);
  };

  const handleSubmit = (0,external_react_.useCallback)(async e => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const result = await (0,cliente_service/* buscarClientesPorFiltro */.aF)({
        params: filtro
      });
      setClienteLista(result);
    } catch (error) {}

    setIsLoading(false);
  }, [filtro]); //#endregion
  //#region [ UseEffects ]

  (0,external_react_.useEffect)(() => {
    (0,cliente_service/* buscarClientesPorFiltro */.aF)({
      params: {
        countTotal: true,
        page: 1,
        itemsPerPage: 10
      }
    }).then(result => {
      setClienteLista(result);
    });
  }, []); //#endregion

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)((head_default()), {
      children: [/*#__PURE__*/jsx_runtime_.jsx("title", {
        children: "Clientes"
      }), /*#__PURE__*/jsx_runtime_.jsx("link", {
        rel: "icon",
        href: "/favicon.ico"
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(Layout/* default */.Z, {
      active: 'cliente',
      children: clienteLista !== null && clienteLista !== void 0 && clienteLista.data ? /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: `mb-4 py-2 ${(cliente_style_module_default()).titulo}`,
          children: /*#__PURE__*/jsx_runtime_.jsx("h2", {
            children: "Clientes"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(FormFilter/* default */.Z, {
          onSubmit: handleSubmit,
          link: "cliente/novo",
          formRef: formRef,
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "row",
            children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "col-3",
              children: /*#__PURE__*/jsx_runtime_.jsx(Input/* default */.Z, {
                type: "text",
                name: "nomeCliente",
                label: "Nome Cliente",
                onChange: handleChange
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "col-3",
              children: /*#__PURE__*/jsx_runtime_.jsx(Input/* default */.Z, {
                type: "date",
                name: "dataCadastro",
                label: "Data de Cadastro",
                onChange: handleChange
              })
            })]
          })
        }), isLoading ? /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: (cliente_style_module_default()).loader,
          children: /*#__PURE__*/jsx_runtime_.jsx(Loader/* default */.Z, {})
        }) : /*#__PURE__*/jsx_runtime_.jsx(components_TableCliente, {
          data: clienteLista
        })]
      }) : /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: (cliente_style_module_default()).loader,
        children: /*#__PURE__*/jsx_runtime_.jsx(Loader/* default */.Z, {})
      })
    })]
  });
};

const getServerSideProps = async context => {
  try {
    const clienteListaResult = await (0,cliente_service/* buscarClientesPorFiltro */.aF)({
      params: {
        countTotal: true,
        page: 1,
        itemsPerPage: 10
      }
    });
    return {
      props: {
        clienteListaResult
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
/* harmony default export */ const cliente = (Cliente);

/***/ }),

/***/ 8042:
/***/ ((module) => {

// Exports
module.exports = {
	"table": "style_table__1XMFz"
};


/***/ }),

/***/ 5800:
/***/ ((module) => {

// Exports
module.exports = {
	"loader": "style_loader__3AtiU"
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
var __webpack_exports__ = __webpack_require__.X(0, [664,308,760,413,839,618,667], () => (__webpack_exec__(7231)));
module.exports = __webpack_exports__;

})();