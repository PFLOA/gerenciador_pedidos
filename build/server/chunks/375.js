"use strict";
exports.id = 375;
exports.ids = [375];
exports.modules = {

/***/ 1375:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "GQ": () => (/* binding */ alterarProduto),
  "zS": () => (/* binding */ buscarProdutoPorGuid),
  "a$": () => (/* binding */ buscarProdutosPorFiltro)
});

// UNUSED EXPORTS: criarProduto

// EXTERNAL MODULE: ./service/endpoints/endpoints.ts
var endpoints = __webpack_require__(9441);
// EXTERNAL MODULE: ./service/api.ts + 1 modules
var service_api = __webpack_require__(6417);
;// CONCATENATED MODULE: ./service/infra/core/service.ts

const BuscarPorFiltro = async (endpoint, request) => {
  try {
    const result = await service_api/* default.get */.Z.get(`${endpoint}`, request);
    return Promise.resolve(result.data);
  } catch (error) {
    return Promise.reject(error);
  }
};
const BuscarPorGuid = async (endpoint, guid) => {
  try {
    const result = await service_api/* default.get */.Z.get(`${endpoint}/${guid}`);
    return Promise.resolve(result.data.okResult);
  } catch (error) {
    return Promise.reject(error);
  }
};
const service_Criar = async (endpoint, body) => {
  try {
    const result = await api.post(`${endpoint}`, body);
    return Promise.resolve(result.data);
  } catch (error) {
    return Promise.reject(error);
  }
};
const Alterar = async (endpoint, body) => {
  try {
    const result = await service_api/* default.put */.Z.put(`${endpoint}`, body);
    return Promise.resolve(result.data);
  } catch (error) {
    return Promise.reject(error);
  }
};
const Remover = async (endpoint, guid) => {
  try {
    const result = await api.delete(`${endpoint}/${guid}`);
    return Promise.resolve(result.data);
  } catch (error) {
    return Promise.reject(error);
  }
};
;// CONCATENATED MODULE: ./service/produto.service.ts


const buscarProdutosPorFiltro = async (filtro) => {
  return await BuscarPorFiltro(endpoints/* default.Produto */.Z.Produto, filtro);
};
const buscarProdutoPorGuid = async (guid) => {
  return await BuscarPorGuid(endpoints/* default.GetProdutoPorGuid */.Z.GetProdutoPorGuid, guid);
};
const alterarProduto = async (body) => {
  return await Alterar(endpoints/* default.Produto */.Z.Produto, body);
};
const criarProduto = async (body) => {
  return await Criar(EndPoints.Produto, body);
};

/***/ })

};
;