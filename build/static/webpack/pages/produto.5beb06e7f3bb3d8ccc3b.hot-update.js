"use strict";
self["webpackHotUpdate_N_E"]("pages/produto",{

/***/ "./utils/utilsMoney.ts":
/*!*****************************!*\
  !*** ./utils/utilsMoney.ts ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "removerMaskMoney": function() { return /* binding */ removerMaskMoney; },
/* harmony export */   "formatMoney": function() { return /* binding */ formatMoney; },
/* harmony export */   "maskMoney": function() { return /* binding */ maskMoney; }
/* harmony export */ });
/* module decorator */ module = __webpack_require__.hmd(module);
var removerMaskMoney = function removerMaskMoney(value) {
  return parseFloat(value.toString().replace('R$', '').replaceAll('.', '').replace(',', '.'));
};
var formatMoney = function formatMoney(money) {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(money);
};
var maskMoney = function maskMoney(value) {
  value = value.replace(/\D/g, '');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvZHV0by41YmViMDZlN2YzYmIzZDhjY2MzYi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTyxJQUFNQSxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLENBQUNDLEtBQUQsRUFBMkI7QUFDMUQsU0FBT0MsVUFBVSxDQUFDRCxLQUFLLENBQUNFLFFBQU4sR0FBaUJDLE9BQWpCLENBQXlCLElBQXpCLEVBQStCLEVBQS9CLEVBQW1DQyxVQUFuQyxDQUE4QyxHQUE5QyxFQUFtRCxFQUFuRCxFQUF1REQsT0FBdkQsQ0FBK0QsR0FBL0QsRUFBb0UsR0FBcEUsQ0FBRCxDQUFqQjtBQUNBLENBRk07QUFHQSxJQUFNRSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDQyxLQUFELEVBQTJCO0FBQ3JELFNBQU8sSUFBSUMsSUFBSSxDQUFDQyxZQUFULENBQXNCLE9BQXRCLEVBQStCO0FBQ3JDQyxJQUFBQSxLQUFLLEVBQUUsVUFEOEI7QUFFckNDLElBQUFBLFFBQVEsRUFBRTtBQUYyQixHQUEvQixFQUdKQyxNQUhJLENBR0dMLEtBSEgsQ0FBUDtBQUlBLENBTE07QUFNQSxJQUFNTSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxDQUFDWixLQUFELEVBQTJCO0FBQ25EQSxFQUFBQSxLQUFLLEdBQUdBLEtBQUssQ0FBQ0csT0FBTixDQUFjLEtBQWQsRUFBcUIsRUFBckIsQ0FBUjtBQUVBLE1BQU1VLE9BQU8sR0FBRztBQUFFQyxJQUFBQSxxQkFBcUIsRUFBRTtBQUF6QixHQUFoQjtBQUNBLE1BQU1DLE1BQU0sR0FBRyxJQUFJUixJQUFJLENBQUNDLFlBQVQsQ0FBc0IsT0FBdEIsRUFBK0JLLE9BQS9CLEVBQXdDRixNQUF4QyxDQUErQ1YsVUFBVSxDQUFDRCxLQUFELENBQVYsR0FBb0IsR0FBbkUsQ0FBZjtBQUVBLHNCQUFhZSxNQUFiO0FBQ0EsQ0FQTSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi91dGlscy91dGlsc01vbmV5LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCByZW1vdmVyTWFza01vbmV5ID0gKHZhbHVlOiBudW1iZXIpOiBudW1iZXIgPT4ge1xyXG5cdHJldHVybiBwYXJzZUZsb2F0KHZhbHVlLnRvU3RyaW5nKCkucmVwbGFjZSgnUiQnLCAnJykucmVwbGFjZUFsbCgnLicsICcnKS5yZXBsYWNlKCcsJywgJy4nKSk7XHJcbn07XHJcbmV4cG9ydCBjb25zdCBmb3JtYXRNb25leSA9IChtb25leTogbnVtYmVyKTogc3RyaW5nID0+IHtcclxuXHRyZXR1cm4gbmV3IEludGwuTnVtYmVyRm9ybWF0KCdwdC1CUicsIHtcclxuXHRcdHN0eWxlOiAnY3VycmVuY3knLFxyXG5cdFx0Y3VycmVuY3k6ICdCUkwnLFxyXG5cdH0pLmZvcm1hdChtb25leSk7XHJcbn07XHJcbmV4cG9ydCBjb25zdCBtYXNrTW9uZXkgPSAodmFsdWU6IHN0cmluZyk6IHN0cmluZyA9PiB7XHJcblx0dmFsdWUgPSB2YWx1ZS5yZXBsYWNlKC9cXEQvZywgJycpO1xyXG5cclxuXHRjb25zdCBvcHRpb25zID0geyBtaW5pbXVtRnJhY3Rpb25EaWdpdHM6IDIgfTtcclxuXHRjb25zdCByZXN1bHQgPSBuZXcgSW50bC5OdW1iZXJGb3JtYXQoJ3B0LUJSJywgb3B0aW9ucykuZm9ybWF0KHBhcnNlRmxvYXQodmFsdWUpIC8gMTAwKTtcclxuXHJcblx0cmV0dXJuIGBSJCAke3Jlc3VsdH1gO1xyXG59O1xyXG4iXSwibmFtZXMiOlsicmVtb3Zlck1hc2tNb25leSIsInZhbHVlIiwicGFyc2VGbG9hdCIsInRvU3RyaW5nIiwicmVwbGFjZSIsInJlcGxhY2VBbGwiLCJmb3JtYXRNb25leSIsIm1vbmV5IiwiSW50bCIsIk51bWJlckZvcm1hdCIsInN0eWxlIiwiY3VycmVuY3kiLCJmb3JtYXQiLCJtYXNrTW9uZXkiLCJvcHRpb25zIiwibWluaW11bUZyYWN0aW9uRGlnaXRzIiwicmVzdWx0Il0sInNvdXJjZVJvb3QiOiIifQ==