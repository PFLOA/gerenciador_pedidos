exports.id = 700;
exports.ids = [700];
exports.modules = {

/***/ 4700:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Form_FormCadastro)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: ./components/Form/FormCadastroButton/style.module.scss
var style_module = __webpack_require__(7895);
var style_module_default = /*#__PURE__*/__webpack_require__.n(style_module);
;// CONCATENATED MODULE: ./components/Form/FormCadastroButton/index.tsx






const FormCadastroButton = () => {
  //#region [ UseRouter ]
  const router = (0,router_.useRouter)(); //#endregion
  //#region [ Handles ]

  const handleClick = (0,external_react_.useCallback)(() => {
    router.back();
  }, [router]); //#endregion

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "d-flex align-items-center",
    children: [/*#__PURE__*/jsx_runtime_.jsx("button", {
      type: "button",
      className: (style_module_default()).novo,
      onClick: handleClick,
      children: /*#__PURE__*/jsx_runtime_.jsx("p", {
        children: "Voltar"
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("button", {
      type: "submit",
      className: (style_module_default()).submit,
      children: "Salvar"
    })]
  });
};

/* harmony default export */ const Form_FormCadastroButton = (FormCadastroButton);
// EXTERNAL MODULE: ./components/Form/FormCadastro/style.module.scss
var FormCadastro_style_module = __webpack_require__(2090);
var FormCadastro_style_module_default = /*#__PURE__*/__webpack_require__.n(FormCadastro_style_module);
;// CONCATENATED MODULE: ./components/Form/FormCadastro/index.tsx





const FormCadastro = ({
  onSubmit,
  formRef,
  children
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("form", {
    onSubmit: onSubmit,
    className: (FormCadastro_style_module_default()).form,
    ref: formRef,
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: (FormCadastro_style_module_default()).inputs,
      children: children
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: (FormCadastro_style_module_default()).submit,
      children: /*#__PURE__*/jsx_runtime_.jsx(Form_FormCadastroButton, {})
    })]
  });
};

/* harmony default export */ const Form_FormCadastro = (FormCadastro);

/***/ }),

/***/ 7895:
/***/ ((module) => {

// Exports
module.exports = {
	"novo": "style_novo__urol1",
	"submit": "style_submit__3N5fz"
};


/***/ }),

/***/ 2090:
/***/ ((module) => {

// Exports
module.exports = {
	"form": "style_form__2xt3y",
	"submit": "style_submit__I2PJG"
};


/***/ })

};
;