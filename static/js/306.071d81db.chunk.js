"use strict";(self.webpackChunkreact_movies=self.webpackChunkreact_movies||[]).push([[306],{288:function(e,t,n){n.d(t,{BG:function(){return p},Tg:function(){return f},bI:function(){return l},fU:function(){return b},sv:function(){return h}});var r=n(861),c=n(757),o=n.n(c),u="?api_key=c70b39411477d027ba1d4b2d81ddb9d1",a="https://api.themoviedb.org/3/";function i(){return s.apply(this,arguments)}function s(){return s=(0,r.Z)(o().mark((function e(){var t,n,r=arguments;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:"",e.next=3,fetch(t);case 3:if(!(n=e.sent).ok){e.next=10;break}return e.next=7,n.json();case 7:e.t0=e.sent,e.next=11;break;case 10:e.t0=Promise.reject(new Error("Not Found!"));case 11:return e.abrupt("return",e.t0);case 12:case"end":return e.stop()}}),e)}))),s.apply(this,arguments)}function f(){return i("".concat(a,"/trending/movie/week").concat(u))}function p(e){return i("".concat(a,"/movie/").concat(e).concat(u))}function l(e){return i("".concat(a,"/search/movie").concat(u,"&query=").concat(e))}function b(e){return i("".concat(a,"/movie/").concat(e,"/credits").concat(u,"&language=en-US"))}function h(e){return i("".concat(a,"/movie/").concat(e,"/reviews").concat(u,"&language=en-US&page=1"))}},306:function(e,t,n){function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}n.r(t),n.d(t,{default:function(){return b}});var u=n(152),a=n(791),i=n(288),s=n(523),f=n(880),p=n(184),l=(0,a.lazy)((function(){return n.e(777).then(n.bind(n,777))})),b=function(){var e,t=(0,f.useHistory)(),n=(0,f.useLocation)(),r=(0,a.useState)(""),c=(0,u.Z)(r,2),b=c[0],h=c[1],d=(0,a.useState)(""),v=(0,u.Z)(d,2),y=v[0],g=v[1],m=(0,a.useState)(null),j=(0,u.Z)(m,2),O=j[0],w=j[1],x=null!==(e=new URLSearchParams(n.search).get("query"))&&void 0!==e?e:"";(0,a.useEffect)((function(){""!==y?(0,i.bI)(y).then(w):(0,i.bI)(x).then(w)}),[y,x]);return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(l,{}),(0,p.jsxs)("form",{onSubmit:function(e){e.preventDefault(),g(b),t.push(o(o({},n),{},{search:"query=".concat(b)})),h("")},children:[(0,p.jsx)("input",{type:"text",name:"query",value:b,onChange:function(e){h(e.target.value)},pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",required:!0}),(0,p.jsx)("button",{type:"submit",children:"Search"})]}),O&&O.results.map((function(e){return(0,p.jsx)("li",{children:(0,p.jsx)(s.rU,{to:"/movies/".concat(e.id),children:e.original_title})},e.id)}))]})}}}]);
//# sourceMappingURL=306.071d81db.chunk.js.map