exports.id = 720;
exports.ids = [720];
exports.modules = {

/***/ 9814:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ login)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "react-bootstrap"
var external_react_bootstrap_ = __webpack_require__(9226);
// EXTERNAL MODULE: ./components/Form/InputLogin/style.module.scss
var style_module = __webpack_require__(3410);
var style_module_default = /*#__PURE__*/__webpack_require__.n(style_module);
;// CONCATENATED MODULE: ./components/Form/InputLogin/index.tsx





const InputLogin = () => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx("input", {
      id: "user",
      placeholder: "Usu\xE1rio",
      className: (style_module_default()).input,
      type: "text",
      name: "username"
    }), /*#__PURE__*/jsx_runtime_.jsx("input", {
      id: "pw",
      placeholder: "Senha",
      className: (style_module_default()).input,
      type: "password",
      name: "senha"
    })]
  });
};

/* harmony default export */ const Form_InputLogin = (InputLogin);
// EXTERNAL MODULE: ./pages/login/style.module.scss
var login_style_module = __webpack_require__(9829);
var login_style_module_default = /*#__PURE__*/__webpack_require__.n(login_style_module);
;// CONCATENATED MODULE: ./pages/login/index.tsx








const LoginWindow = () => {
  const handleSubmit = (0,external_react_.useCallback)(() => {}, []);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: (login_style_module_default()).login,
    children: [/*#__PURE__*/jsx_runtime_.jsx("h1", {
      children: "Login"
    }), /*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_.Form, {
      onSubmit: handleSubmit,
      children: /*#__PURE__*/jsx_runtime_.jsx(Form_InputLogin, {})
    }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
      href: "/dashboard",
      children: /*#__PURE__*/jsx_runtime_.jsx("a", {
        className: (login_style_module_default()).btn_login,
        children: "Logar"
      })
    })]
  });
};

/* harmony default export */ const login = (LoginWindow);

/***/ }),

/***/ 3410:
/***/ ((module) => {

// Exports
module.exports = {
	"label": "style_label__3_9My",
	"input": "style_input__OhcM1"
};


/***/ }),

/***/ 9829:
/***/ ((module) => {

// Exports
module.exports = {
	"login": "style_login__HUTBq",
	"btn_login": "style_btn_login__3AWqW"
};


/***/ }),

/***/ 2431:
/***/ (() => {

/* (ignored) */

/***/ })

};
;