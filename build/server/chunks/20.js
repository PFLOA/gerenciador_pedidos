exports.id = 20;
exports.ids = [20];
exports.modules = {

/***/ 6839:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Table_Td__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5340);
/* harmony import */ var _Table_Th__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(610);
/* harmony import */ var _Table_Tr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1814);
/* harmony import */ var _Table_TdLink__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3177);
/* harmony import */ var _style_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6862);
/* harmony import */ var _style_module_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_style_module_scss__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils_utilsMoney__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3319);










const Linhas = (item, index) => {
  const {
    guid,
    nomeProduto,
    preco
  } = item;
  const precoFormatado = (0,react__WEBPACK_IMPORTED_MODULE_5__.useMemo)(() => {
    return (0,_utils_utilsMoney__WEBPACK_IMPORTED_MODULE_6__/* .formatMoney */ .l)(preco);
  }, [preco]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Table_Tr__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    index: index,
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Table_Td__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
      children: nomeProduto
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Table_Td__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
      children: guid
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Table_Td__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
      children: precoFormatado
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Table_TdLink__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
      link: {
        pathname: 'produto/detalhes/',
        query: {
          guid: item.guid
        }
      },
      children: "Detalhes"
    })]
  }, index);
};

const TableProduto = ({
  data
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("table", {
    className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_7___default().table),
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("thead", {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Table_Th__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
          width: 400,
          children: "Nome Produto"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Table_Th__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
          width: 400,
          children: "Guid"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Table_Th__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
          width: 400,
          children: "Pre\xE7o"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Table_Th__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
          width: 250
        })]
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("tbody", {
      children: data.data.map(Linhas)
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TableProduto);

/***/ }),

/***/ 6862:
/***/ ((module) => {

// Exports
module.exports = {
	"table": "style_table__2OD3l"
};


/***/ })

};
;