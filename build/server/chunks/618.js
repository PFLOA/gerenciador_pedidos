"use strict";
exports.id = 618;
exports.ids = [618];
exports.modules = {

/***/ 4618:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "aF": () => (/* binding */ buscarClientesPorFiltro),
/* harmony export */   "CX": () => (/* binding */ buscarClientesPorGuid),
/* harmony export */   "yt": () => (/* binding */ criarCliente),
/* harmony export */   "VZ": () => (/* binding */ alterarCliente)
/* harmony export */ });
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6417);
/* harmony import */ var _endpoints_endpoints__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9441);


const buscarClientesPorFiltro = async (filter) => {
  try {
    const result = await _api__WEBPACK_IMPORTED_MODULE_0__/* .default.get */ .Z.get(`${_endpoints_endpoints__WEBPACK_IMPORTED_MODULE_1__/* .default.Cliente */ .Z.Cliente}`, filter);
    return Promise.resolve(result.data);
  } catch (error) {
    return Promise.reject(error);
  }
};
const buscarClientesPorGuid = async (guid) => {
  try {
    const result = await _api__WEBPACK_IMPORTED_MODULE_0__/* .default.get */ .Z.get(`${_endpoints_endpoints__WEBPACK_IMPORTED_MODULE_1__/* .default.GetClientePorGuid */ .Z.GetClientePorGuid}/${guid}`);
    return Promise.resolve(result.data.cliente);
  } catch (error) {
    return Promise.reject(error);
  }
};
const criarCliente = async (request) => {
  try {
    const result = await _api__WEBPACK_IMPORTED_MODULE_0__/* .default.post */ .Z.post(`${_endpoints_endpoints__WEBPACK_IMPORTED_MODULE_1__/* .default.Cliente */ .Z.Cliente}`, request);
    return Promise.resolve(result.data.cliente);
  } catch (error) {
    return Promise.reject(error);
  }
};
const alterarCliente = async (request) => {
  try {
    const result = await _api__WEBPACK_IMPORTED_MODULE_0__/* .default.put */ .Z.put(`${_endpoints_endpoints__WEBPACK_IMPORTED_MODULE_1__/* .default.Cliente */ .Z.Cliente}`, request);
    return Promise.resolve(result.data.cliente);
  } catch (error) {
    return Promise.reject(error);
  }
};

/***/ })

};
;