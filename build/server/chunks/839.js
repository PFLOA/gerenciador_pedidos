"use strict";
exports.id = 839;
exports.ids = [839];
exports.modules = {

/***/ 7839:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "wG": () => (/* binding */ handleEventChange)
});

// UNUSED EXPORTS: decomporEventInput, handleMask

// EXTERNAL MODULE: ./utils/propriedadesFormulario.ts
var propriedadesFormulario = __webpack_require__(2357);
;// CONCATENATED MODULE: ./utils/utilsCpf.ts
/* eslint-disable no-plusplus */

/* eslint-disable radix */
const maskCpf = value => {
  return value.replace(/\D/g, '').replace(/(\d{3})(\d)/, '$1.$2').replace(/(\d{3})(\d)/, '$1.$2').replace(/(\d{3})(\d{1,2})/, '$1-$2').replace(/(-\d{2})\d+?$/, '$1');
};
const validateCPF = CPF => {
  let Sum = 0;
  let Rest = 0;
  const strCPF = CPF.replaceAll('.', '').replace('-', '');
  if (strCPF === '00000000000' || strCPF === '11111111111' || strCPF === '22222222222' || strCPF === '33333333333' || strCPF === '44444444444' || strCPF === '55555555555' || strCPF === '66666666666' || strCPF === '77777777777' || strCPF === '88888888888' || strCPF === '99999999999') return false;

  for (let i = 1; i <= 9; i++) Sum += parseInt(strCPF.substring(i - 1, i)) * (11 - i);

  Rest = Sum * 10 % 11;
  if (Rest === 10 || Rest === 11) Rest = 0;
  if (Rest !== parseInt(strCPF.substring(9, 10))) return false;
  Sum = 0;

  for (let i = 1; i <= 10; i++) Sum += parseInt(strCPF.substring(i - 1, i)) * (12 - i);

  Rest = Sum * 10 % 11;
  if (Rest === 10 || Rest === 11) Rest = 0;
  if (Rest !== parseInt(strCPF.substring(10, 11))) return false;
  return true;
};
// EXTERNAL MODULE: ./utils/utilsMoney.ts
var utilsMoney = __webpack_require__(3319);
;// CONCATENATED MODULE: ./utils/utilsTelefone.ts
const validateTelefoneRegex = value => {
  const reg = new RegExp(/\d{2}\d{4,5}\d{4}/g);
  const result = reg.test(value.replace(/\s/g, ''));
  return result;
};
const maskTelefone = value => {
  return value.replace(/\D/g, '').replace(/^(\d{2})(\d)/g, '($1) $2').replace(/(\d)(\d{4})$/, '$1-$2');
};
;// CONCATENATED MODULE: ./utils/handleChanges.ts




function handleEventChange(e, state) {
  handleMask(e);
  const obj = state;
  const name = e.target.name;
  var value = e.target.value.trim();
  if (value === '') value = undefined;
  if (name === e.target.name) obj[name] = value;
  return {
    name,
    value
  };
}
const decomporEventInput = e => {
  const name = e.target.name;
  const value = e.target.value.trim();
  return {
    name,
    value
  };
};
const handleMask = e => {
  const {
    name,
    value
  } = decomporEventInput(e);

  switch (name) {
    case propriedadesFormulario/* PropriedadesFormularios.Telefone */.r.Telefone:
      e.target.value = maskTelefone(value);
      break;

    case propriedadesFormulario/* PropriedadesFormularios.Cpf */.r.Cpf:
      e.target.value = maskCpf(value);
      break;

    case propriedadesFormulario/* PropriedadesFormularios.Money */.r.Money:
      e.target.value = (0,utilsMoney/* maskMoney */.S)(value);
      break;

    default:
      break;
  }
};

/***/ }),

/***/ 2357:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "r": () => (/* binding */ PropriedadesFormularios)
/* harmony export */ });
/* eslint-disable no-shadow */
let PropriedadesFormularios;

(function (PropriedadesFormularios) {
  PropriedadesFormularios["Telefone"] = "telefone";
  PropriedadesFormularios["Cpf"] = "cpf";
  PropriedadesFormularios["Email"] = "email";
  PropriedadesFormularios["Money"] = "preco";
})(PropriedadesFormularios || (PropriedadesFormularios = {}));

/***/ }),

/***/ 3319:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "l": () => (/* binding */ formatMoney),
/* harmony export */   "S": () => (/* binding */ maskMoney)
/* harmony export */ });
const formatMoney = money => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(money);
};
const maskMoney = value => {
  value = value.replace('.', '').replace(',', '').replace(/\D/g, '');
  const options = {
    minimumFractionDigits: 2
  };
  const result = new Intl.NumberFormat('pt-BR', options).format(parseFloat(value) / 100);
  return `R$ ${result}`;
};

/***/ })

};
;