(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[397],{4700:function(e,t,r){"use strict";r.d(t,{Z:function(){return d}});var n=r(5893),a=r(1163),c=r(7294),s=r(9190),i=r.n(s),o=function(){var e=(0,a.useRouter)(),t=(0,c.useCallback)((function(){e.back()}),[e]);return(0,n.jsxs)("div",{className:"d-flex align-items-center",children:[(0,n.jsx)("button",{type:"button",className:i().novo,onClick:t,children:(0,n.jsx)("p",{children:"Voltar"})}),(0,n.jsx)("button",{type:"submit",className:i().submit,children:"Salvar"})]})},l=r(8499),u=r.n(l),d=function(e){var t=e.onSubmit,r=e.formRef,a=e.children;return(0,n.jsxs)("form",{onSubmit:t,className:u().form,ref:r,children:[(0,n.jsx)("div",{className:u().inputs,children:a}),(0,n.jsx)("div",{className:u().submit,children:(0,n.jsx)(o,{})})]})}},1884:function(e,t,r){"use strict";var n=r(4942),a=r(5893),c=r(6707),s=(r(7294),r(7863)),i=r.n(s);function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}t.Z=function(e){var t=e.label,r=e.error,n=e.opcional,s=(0,c.Z)(e,["label","error","opcional"]);return(0,a.jsxs)("div",{className:"d-flex flex-column mb-1 mx-0 ".concat(i().input_h),children:[t&&(0,a.jsx)("label",{htmlFor:t,className:"mb-1",children:(0,a.jsxs)("div",{className:"d-flex justify-content-between",children:[(0,a.jsx)("div",{className:i().styled_label,children:(0,a.jsx)("p",{className:r&&i().styled_label_error,children:t})}),n&&(0,a.jsx)("div",{className:i().opcional,children:"(opcional)"})]})}),(0,a.jsx)("div",{className:"d-flex",children:(0,a.jsx)("input",l({className:"form-control ".concat(i().styled_input," ").concat(r&&i().styled_input_error)},s))}),(0,a.jsx)("p",{className:"".concat(i().error_p),children:r&&r})]})}},9624:function(e,t,r){"use strict";r.d(t,{Z:function(){return x}});var n=r(5893),a=r(4335),c=r.n(a),s=function(){return(0,n.jsx)("nav",{className:c().navbar})},i=r(1664),o=r(7294),l=r(7516),u=r(9583),d=function(e,t){var r=(0,o.useMemo)((function(){return e.to==e.active}),[e]);return(0,n.jsx)("div",{className:"menu-item ".concat(r&&"menu-item-ativo"),children:(0,n.jsx)(i.default,{href:"/".concat(e.to),passHref:!0,children:(0,n.jsx)("button",{type:"button",className:"link-btn",children:(0,n.jsxs)("div",{className:"data",children:[(0,n.jsx)("div",{className:"img",children:e.img}),(0,n.jsx)("p",{children:e.label})]})})})},t)},f=function(e){var t=e.active,r=[{id:1,img:(0,n.jsx)(u.xng,{size:16}),label:"Dashboard",to:"dashboard",active:t},{id:2,img:(0,n.jsx)(u.nl4,{size:16}),label:"Clientes",to:"cliente",active:t},{id:3,img:(0,n.jsx)(u.nl4,{size:16}),label:"Produtos",to:"produto",active:t},{id:4,img:(0,n.jsx)(u.nl4,{size:16}),label:"Pedidos",to:"pedido",active:t}];return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("input",{type:"checkbox",id:"check"}),(0,n.jsxs)("label",{htmlFor:"check",className:"toggle-sidebar",children:[(0,n.jsx)(l.rp3,{size:32,id:"open",color:"white"}),(0,n.jsx)(l.czh,{size:32,id:"close",color:"white"})]}),(0,n.jsx)("div",{className:"sidebar",children:(0,n.jsx)("div",{className:"d-flex flex-column mt-5",children:(0,n.jsx)("div",{className:"menu",children:r.map(d)})})})]})},p=r(5475),m=r.n(p),v=function(){return(0,n.jsx)("footer",{className:m().footer,children:"Powered By Eu"})},_=r(4098),h=r.n(_),x=function(e){var t=e.children,r=e.active;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{className:h().nav,children:[(0,n.jsx)(f,{active:r}),(0,n.jsx)(s,{})]}),(0,n.jsxs)("div",{className:h().layout,children:[(0,n.jsx)("div",{className:h().container,children:(0,n.jsx)("div",{className:h().card,children:t})}),(0,n.jsx)(v,{})]})]})}},1800:function(e,t,r){"use strict";var n=r(5893),a=r(8039),c=r.n(a);t.Z=function(){return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("div",{className:c().loader})})}},8059:function(e,t,r){"use strict";r.r(t);var n=r(5893),a=r(7757),c=r.n(a),s=r(5861),i=r(7294),o=r(9008),l=r(4700),u=r(1884),d=r(9624),f=r(1800),p=r(2221),m=r.n(p),v=r(7839),_=r(4618);t.default=function(){var e=(0,i.useState)(!1),t=e[0],r=e[1],a=(0,i.useState)({}),p=a[0],h=(a[1],(0,i.useRef)(null)),x=(0,i.useCallback)(function(){var e=(0,s.Z)(c().mark((function e(t){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),r(!0),e.prev=2,e.next=5,(0,_.yt)(p);case 5:e.sent,e.next=10;break;case 8:e.prev=8,e.t0=e.catch(2);case 10:r(!1);case 11:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(t){return e.apply(this,arguments)}}(),[p]);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(o.default,{children:[(0,n.jsx)("title",{children:"Clientes"}),(0,n.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,n.jsx)(d.Z,{active:"cliente",children:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{className:"mb-4 py-2 ".concat(m().titulo),children:(0,n.jsx)("h2",{children:"Novo Cliente"})}),t?(0,n.jsx)(f.Z,{}):(0,n.jsx)(l.Z,{onSubmit:x,formRef:h,children:(0,n.jsx)("div",{className:"row",children:(0,n.jsx)("div",{className:"col-5",children:(0,n.jsx)(u.Z,{type:"text",name:"nomeCliente",label:"Nome Cliente",onChange:function(e){var t=(0,v.wG)(e,p);t.name,t.value}})})})})]})})]})}},6417:function(e,t,r){"use strict";r.d(t,{Z:function(){return l}});var n=r(7757),a=r.n(n),c=r(5861),s=r(9669),i="@g-pedidos-Token",o=r.n(s)().create({baseURL:"https://localhost:44329/api/v1/"});o.interceptors.request.use(function(){var e=(0,c.Z)(a().mark((function e(t){var r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(r=localStorage.getItem(i))&&(t.headers.Authorization="Bearer ".concat(r)),e.abrupt("return",t);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());var l=o},4618:function(e,t,r){"use strict";r.d(t,{aF:function(){return o},CX:function(){return l},yt:function(){return u},VZ:function(){return d}});var n=r(7757),a=r.n(n),c=r(5861),s=r(6417),i=r(9441),o=function(){var e=(0,c.Z)(a().mark((function e(t){var r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("".concat(i.Z.Cliente),t);case 3:return r=e.sent,e.abrupt("return",Promise.resolve(r.data));case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",Promise.reject(e.t0));case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,c.Z)(a().mark((function e(t){var r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("".concat(i.Z.GetClientePorGuid,"/").concat(t));case 3:return r=e.sent,e.abrupt("return",Promise.resolve(r.data.cliente));case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",Promise.reject(e.t0));case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),u=function(){var e=(0,c.Z)(a().mark((function e(t){var r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.post("".concat(i.Z.Cliente),t);case 3:return r=e.sent,e.abrupt("return",Promise.resolve(r.data.cliente));case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",Promise.reject(e.t0));case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=(0,c.Z)(a().mark((function e(t){var r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.put("".concat(i.Z.Cliente),t);case 3:return r=e.sent,e.abrupt("return",Promise.resolve(r.data.cliente));case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",Promise.reject(e.t0));case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()},9441:function(e,t,r){"use strict";r.d(t,{Z:function(){return c}});var n=r(5671),a=r(4942),c=function e(){(0,n.Z)(this,e)};(0,a.Z)(c,"Login","Login"),(0,a.Z)(c,"Cliente","Cliente"),(0,a.Z)(c,"GetClientePorGuid","Cliente/Guid"),(0,a.Z)(c,"Produto","Produto"),(0,a.Z)(c,"GetProdutoPorGuid","Produto/Guid")},7839:function(e,t,r){"use strict";r.d(t,{wG:function(){return c}});var n=r(2357),a=r(3319);function c(e,t){s(e);var r=t,n=e.target.name,a=e.target.value.trim();return""===a&&(a=void 0),n===e.target.name&&(r[n]=a),{name:n,value:a}}var s=function(e){var t=function(e){return{name:e.target.name,value:e.target.value.trim()}}(e),r=t.name,c=t.value;switch(r){case n.r.Telefone:e.target.value=function(e){return e.replace(/\D/g,"").replace(/^(\d{2})(\d)/g,"($1) $2").replace(/(\d)(\d{4})$/,"$1-$2")}(c);break;case n.r.Cpf:e.target.value=function(e){return e.replace(/\D/g,"").replace(/(\d{3})(\d)/,"$1.$2").replace(/(\d{3})(\d)/,"$1.$2").replace(/(\d{3})(\d{1,2})/,"$1-$2").replace(/(-\d{2})\d+?$/,"$1")}(c);break;case n.r.Money:e.target.value=(0,a.S)(c)}}},2357:function(e,t,r){"use strict";var n;r.d(t,{r:function(){return n}}),function(e){e.Telefone="telefone",e.Cpf="cpf",e.Email="email",e.Money="preco"}(n||(n={}))},3319:function(e,t,r){"use strict";r.d(t,{l:function(){return n},S:function(){return a}});var n=function(e){return new Intl.NumberFormat("pt-BR",{style:"currency",currency:"BRL"}).format(e)},a=function(e){e=e.replace(".","").replace(",","").replace(/\D/g,"");var t=new Intl.NumberFormat("pt-BR",{minimumFractionDigits:2}).format(parseFloat(e)/100);return"R$ ".concat(t)}},1265:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/produto/novo",function(){return r(8059)}])},5475:function(e){e.exports={footer:"style_footer__2F7ob"}},9190:function(e){e.exports={novo:"style_novo__urol1",submit:"style_submit__3N5fz"}},8499:function(e){e.exports={form:"style_form__2xt3y",submit:"style_submit__I2PJG"}},7863:function(e){e.exports={styled_input:"style_styled_input__3N1tr",styled_label:"style_styled_label__3fHyl",opcional:"style_opcional__1W3Tg",input_h:"style_input_h__FGWbo",styled_input_error:"style_styled_input_error__MlEkp",styled_label_error:"style_styled_label_error__Q3XNn",img_validation:"style_img_validation__1FpbT",error_p:"style_error_p__Amymo"}},4098:function(e){e.exports={nav:"style_nav__1ZZ0W",layout:"style_layout__1nyGB",container:"style_container__11tHh",card:"style_card__3acWb",footer:"style_footer__3j065"}},8039:function(e){e.exports={loader:"style_loader__VQLpy",loading:"style_loading__36UWQ"}},4335:function(e){e.exports={navbar:"style_navbar__1fNKP"}},2221:function(e){e.exports={loader:"style_loader__2Qf71"}},1163:function(e,t,r){e.exports=r(4651)}},function(e){e.O(0,[445,874,629,774,888,179],(function(){return t=1265,e(e.s=t);var t}));var t=e.O();_N_E=t}]);