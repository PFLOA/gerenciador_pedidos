"use strict";
self["webpackHotUpdate_N_E"]("pages/produto",{

/***/ "./utils/utilsMoney.ts":
/*!*****************************!*\
  !*** ./utils/utilsMoney.ts ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "formatMoney": function() { return /* binding */ formatMoney; },
/* harmony export */   "maskMoney": function() { return /* binding */ maskMoney; }
/* harmony export */ });
/* module decorator */ module = __webpack_require__.hmd(module);
var formatMoney = function formatMoney(money) {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(money);
};
var maskMoney = function maskMoney(value) {
  value = value.replace('R$', '').replaceAll('.', '').replace(',', '.');
  var options = {
    minimumFractionDigits: 2
  };
  var result = new Intl.NumberFormat('pt-BR', options).format(parseFloat(value) / 100);
  return "R$ ".concat(result);
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvZHV0by5mNDY1MDg4ODgwODg4NTliNmI5OC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFPLElBQU1BLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNDLEtBQUQsRUFBMkI7QUFDckQsU0FBTyxJQUFJQyxJQUFJLENBQUNDLFlBQVQsQ0FBc0IsT0FBdEIsRUFBK0I7QUFDckNDLElBQUFBLEtBQUssRUFBRSxVQUQ4QjtBQUVyQ0MsSUFBQUEsUUFBUSxFQUFFO0FBRjJCLEdBQS9CLEVBR0pDLE1BSEksQ0FHR0wsS0FISCxDQUFQO0FBSUEsQ0FMTTtBQU1BLElBQU1NLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUNDLEtBQUQsRUFBMkI7QUFDbkRBLEVBQUFBLEtBQUssR0FBR0EsS0FBSyxDQUFDQyxPQUFOLENBQWMsSUFBZCxFQUFvQixFQUFwQixFQUF3QkMsVUFBeEIsQ0FBbUMsR0FBbkMsRUFBd0MsRUFBeEMsRUFBNENELE9BQTVDLENBQW9ELEdBQXBELEVBQXlELEdBQXpELENBQVI7QUFFQSxNQUFNRSxPQUFPLEdBQUc7QUFBRUMsSUFBQUEscUJBQXFCLEVBQUU7QUFBekIsR0FBaEI7QUFDQSxNQUFNQyxNQUFNLEdBQUcsSUFBSVgsSUFBSSxDQUFDQyxZQUFULENBQXNCLE9BQXRCLEVBQStCUSxPQUEvQixFQUF3Q0wsTUFBeEMsQ0FBK0NRLFVBQVUsQ0FBQ04sS0FBRCxDQUFWLEdBQW9CLEdBQW5FLENBQWY7QUFFQSxzQkFBYUssTUFBYjtBQUNBLENBUE0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbHMvdXRpbHNNb25leS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgZm9ybWF0TW9uZXkgPSAobW9uZXk6IG51bWJlcik6IHN0cmluZyA9PiB7XHJcblx0cmV0dXJuIG5ldyBJbnRsLk51bWJlckZvcm1hdCgncHQtQlInLCB7XHJcblx0XHRzdHlsZTogJ2N1cnJlbmN5JyxcclxuXHRcdGN1cnJlbmN5OiAnQlJMJyxcclxuXHR9KS5mb3JtYXQobW9uZXkpO1xyXG59O1xyXG5leHBvcnQgY29uc3QgbWFza01vbmV5ID0gKHZhbHVlOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xyXG5cdHZhbHVlID0gdmFsdWUucmVwbGFjZSgnUiQnLCAnJykucmVwbGFjZUFsbCgnLicsICcnKS5yZXBsYWNlKCcsJywgJy4nKTtcclxuXHJcblx0Y29uc3Qgb3B0aW9ucyA9IHsgbWluaW11bUZyYWN0aW9uRGlnaXRzOiAyIH07XHJcblx0Y29uc3QgcmVzdWx0ID0gbmV3IEludGwuTnVtYmVyRm9ybWF0KCdwdC1CUicsIG9wdGlvbnMpLmZvcm1hdChwYXJzZUZsb2F0KHZhbHVlKSAvIDEwMCk7XHJcblxyXG5cdHJldHVybiBgUiQgJHtyZXN1bHR9YDtcclxufTtcclxuIl0sIm5hbWVzIjpbImZvcm1hdE1vbmV5IiwibW9uZXkiLCJJbnRsIiwiTnVtYmVyRm9ybWF0Iiwic3R5bGUiLCJjdXJyZW5jeSIsImZvcm1hdCIsIm1hc2tNb25leSIsInZhbHVlIiwicmVwbGFjZSIsInJlcGxhY2VBbGwiLCJvcHRpb25zIiwibWluaW11bUZyYWN0aW9uRGlnaXRzIiwicmVzdWx0IiwicGFyc2VGbG9hdCJdLCJzb3VyY2VSb290IjoiIn0=