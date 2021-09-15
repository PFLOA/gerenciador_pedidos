exports.id = 760;
exports.ids = [760];
exports.modules = {

/***/ 9624:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_Layout)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: ./components/Navbar/style.module.scss
var style_module = __webpack_require__(1751);
var style_module_default = /*#__PURE__*/__webpack_require__.n(style_module);
;// CONCATENATED MODULE: ./components/Navbar/index.tsx



const Navbar = () => {
  return /*#__PURE__*/jsx_runtime_.jsx("nav", {
    className: (style_module_default()).navbar
  });
};

/* harmony default export */ const components_Navbar = (Navbar);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: ./node_modules/react-icons/bi/index.esm.js
var index_esm = __webpack_require__(7516);
// EXTERNAL MODULE: ./node_modules/react-icons/fa/index.esm.js
var fa_index_esm = __webpack_require__(9583);
;// CONCATENATED MODULE: ./components/Sidebar/index.tsx








const Menu = (item, index) => {
  const linkAtivo = (0,external_react_.useMemo)(() => {
    return item.to == item.active ? true : false;
  }, [item]);
  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: `menu-item ${linkAtivo && 'menu-item-ativo'}`,
      children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
        href: `/${item.to}`,
        passHref: true,
        children: /*#__PURE__*/jsx_runtime_.jsx("button", {
          type: "button",
          className: "link-btn",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "data",
            children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "img",
              children: item.img
            }), /*#__PURE__*/jsx_runtime_.jsx("p", {
              children: item.label
            })]
          })
        })
      })
    }, index)
  });
};

const Sidebar = ({
  active
}) => {
  const rotas = [{
    id: 1,
    img: /*#__PURE__*/jsx_runtime_.jsx(fa_index_esm/* FaHome */.xng, {
      size: 16
    }),
    label: 'Dashboard',
    to: 'dashboard',
    active: active
  }, {
    id: 2,
    img: /*#__PURE__*/jsx_runtime_.jsx(fa_index_esm/* FaAddressBook */.nl4, {
      size: 16
    }),
    label: 'Clientes',
    to: 'cliente',
    active: active
  }];
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx("input", {
      type: "checkbox",
      id: "check"
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("label", {
      htmlFor: "check",
      className: "toggle-sidebar",
      children: [/*#__PURE__*/jsx_runtime_.jsx(index_esm/* BiGridAlt */.rp3, {
        size: 32,
        id: "open",
        color: "white"
      }), /*#__PURE__*/jsx_runtime_.jsx(index_esm/* BiX */.czh, {
        size: 32,
        id: "close",
        color: "white"
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "sidebar",
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "d-flex flex-column mt-5",
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "menu",
          children: rotas.map(Menu)
        })
      })
    })]
  });
};

/* harmony default export */ const components_Sidebar = (Sidebar);
// EXTERNAL MODULE: ./components/Footer/style.module.scss
var Footer_style_module = __webpack_require__(8476);
var Footer_style_module_default = /*#__PURE__*/__webpack_require__.n(Footer_style_module);
;// CONCATENATED MODULE: ./components/Footer/index.tsx



const Footer = () => {
  return /*#__PURE__*/jsx_runtime_.jsx("footer", {
    className: (Footer_style_module_default()).footer,
    children: "Powered By Eu"
  });
};

/* harmony default export */ const components_Footer = (Footer);
// EXTERNAL MODULE: ./components/Layout/style.module.scss
var Layout_style_module = __webpack_require__(4683);
var Layout_style_module_default = /*#__PURE__*/__webpack_require__.n(Layout_style_module);
;// CONCATENATED MODULE: ./components/Layout/index.tsx








const Layout = ({
  children,
  active
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: (Layout_style_module_default()).nav,
      children: [/*#__PURE__*/jsx_runtime_.jsx(components_Sidebar, {
        active: active
      }), /*#__PURE__*/jsx_runtime_.jsx(components_Navbar, {})]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: (Layout_style_module_default()).layout,
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: (Layout_style_module_default()).container,
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: (Layout_style_module_default()).card,
          children: children
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(components_Footer, {})]
    })]
  });
};

/* harmony default export */ const components_Layout = (Layout);

/***/ }),

/***/ 8476:
/***/ ((module) => {

// Exports
module.exports = {
	"footer": "style_footer__2F7ob"
};


/***/ }),

/***/ 4683:
/***/ ((module) => {

// Exports
module.exports = {
	"nav": "style_nav__1ZZ0W",
	"layout": "style_layout__1nyGB",
	"container": "style_container__11tHh",
	"card": "style_card__3acWb",
	"footer": "style_footer__3j065"
};


/***/ }),

/***/ 1751:
/***/ ((module) => {

// Exports
module.exports = {
	"navbar": "style_navbar__1fNKP"
};


/***/ }),

/***/ 2431:
/***/ (() => {

/* (ignored) */

/***/ })

};
;