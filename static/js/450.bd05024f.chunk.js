"use strict";(self.webpackChunkreact_movies=self.webpackChunkreact_movies||[]).push([[450],{288:function(e,t,n){n.d(t,{BG:function(){return l},Tg:function(){return f},bI:function(){return p},fU:function(){return h},sv:function(){return v}});var r=n(861),c=n(757),o=n.n(c),i="?api_key=c70b39411477d027ba1d4b2d81ddb9d1",a="https://api.themoviedb.org/3/";function u(){return s.apply(this,arguments)}function s(){return s=(0,r.Z)(o().mark((function e(){var t,n,r=arguments;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:"",e.next=3,fetch(t);case 3:if(!(n=e.sent).ok){e.next=10;break}return e.next=7,n.json();case 7:e.t0=e.sent,e.next=11;break;case 10:e.t0=Promise.reject(new Error("Not Found!"));case 11:return e.abrupt("return",e.t0);case 12:case"end":return e.stop()}}),e)}))),s.apply(this,arguments)}function f(){return u("".concat(a,"/trending/movie/week").concat(i))}function l(e){return u("".concat(a,"/movie/").concat(e).concat(i))}function p(e){return u("".concat(a,"/search/movie").concat(i,"&query=").concat(e))}function h(e){return u("".concat(a,"/movie/").concat(e,"/credits").concat(i,"&language=en-US"))}function v(e){return u("".concat(a,"/movie/").concat(e,"/reviews").concat(i,"&language=en-US&page=1"))}},450:function(e,t,n){n.r(t);var r=n(152),c=n(791),o=n(25),i=n(288),a=n(542),u=n(184),s=(0,c.lazy)((function(){return n.e(350).then(n.bind(n,350))})),f=(0,c.lazy)((function(){return n.e(643).then(n.bind(n,643))})),l=(0,c.lazy)((function(){return n.e(21).then(n.bind(n,777))}));t.default=function(){var e=(0,a.$B)().url,t=(0,o.UO)().movieId,n=(0,c.useState)(""),p=(0,r.Z)(n,2),h=p[0],v=p[1];(0,c.useEffect)((function(){(0,i.BG)(t).then(v)}),[t]);var d=h.title,y=h.overview,m=h.poster_path,j=h.popularity,x=h.genres;return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(l,{}),(0,u.jsxs)("div",{children:[(0,u.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(m),alt:"".concat(d)}),(0,u.jsxs)("div",{children:[(0,u.jsx)("h2",{children:d}),(0,u.jsxs)("p",{children:["User Score: ",j]}),(0,u.jsx)("h2",{children:"Overview"}),(0,u.jsx)("p",{children:y}),(0,u.jsx)("h2",{children:"Genres"}),(0,u.jsx)("ul",{children:h&&x.map((function(e){return(0,u.jsx)("li",{children:(0,u.jsx)("p",{children:e.name})},e.id)}))})]}),(0,u.jsx)("hr",{}),(0,u.jsx)(a.OL,{to:"".concat(e,"/cast"),children:"Cast"}),(0,u.jsx)(a.OL,{to:"".concat(e,"/reviews"),children:"Reviews"}),(0,u.jsx)(a.AW,{exact:!0,path:"".concat(e,"/cast"),children:(0,u.jsx)(s,{movieId:t})}),(0,u.jsx)(a.AW,{exact:!0,path:"".concat(e,"/reviews"),children:(0,u.jsx)(f,{movieId:t})})]})]})}},542:function(e,t,n){function r(e){return e&&"object"==typeof e&&"default"in e?e.default:e}var c=n(880),o=r(n(791)),i=n(610);n(7),n(501);var a=r(n(90));function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function s(e,t){e.prototype=Object.create(t.prototype),f(e.prototype.constructor=e,t)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function l(e,t){if(null==e)return{};var n,r,c={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],0<=t.indexOf(n)||(c[n]=e[n]);return c}var p=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))||this).history=i.createBrowserHistory(t.props),t}return s(t,e),t.prototype.render=function(){return o.createElement(c.Router,{history:this.history,children:this.props.children})},t}(o.Component),h=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))||this).history=i.createHashHistory(t.props),t}return s(t,e),t.prototype.render=function(){return o.createElement(c.Router,{history:this.history,children:this.props.children})},t}(o.Component),v=function(e,t){return"function"==typeof e?e(t):e},d=function(e,t){return"string"==typeof e?i.createLocation(e,null,null,t):e},y=function(e){return e},m=o.forwardRef;void 0===m&&(m=y);var j=m((function(e,t){var n=e.innerRef,r=e.navigate,c=e.onClick,i=l(e,["innerRef","navigate","onClick"]),a=i.target,s=u({},i,{onClick:function(t){try{c&&c(t)}catch(e){throw t.preventDefault(),e}t.defaultPrevented||0!==t.button||a&&"_self"!==a||function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(t)||(t.preventDefault(),r())}});return s.ref=y!==m&&t||n,o.createElement("a",s)})),x=m((function(e,t){var n=e.component,r=void 0===n?j:n,s=e.replace,f=e.to,p=e.innerRef,h=l(e,["component","replace","to","innerRef"]);return o.createElement(c.__RouterContext.Consumer,null,(function(e){e||a(!1);var n=e.history,c=d(v(f,e.location),e.location),l=c?n.createHref(c):"",j=u({},h,{href:l,navigate:function(){var t=v(f,e.location),r=i.createPath(e.location)===i.createPath(d(t));(s||r?n.replace:n.push)(t)}});return y!==m?j.ref=t||p:j.innerRef=p,o.createElement(r,j)}))})),g=function(e){return e},b=o.forwardRef;void 0===b&&(b=g);var w=b((function(e,t){var n=e["aria-current"],r=void 0===n?"page":n,i=e.activeClassName,s=void 0===i?"active":i,f=e.activeStyle,p=e.className,h=e.exact,y=e.isActive,m=e.location,j=e.sensitive,w=e.strict,O=e.style,R=e.to,k=e.innerRef,C=l(e,["aria-current","activeClassName","activeStyle","className","exact","isActive","location","sensitive","strict","style","to","innerRef"]);return o.createElement(c.__RouterContext.Consumer,null,(function(e){e||a(!1);var n=m||e.location,i=d(v(R,n),n),l=i.pathname,_=l&&l.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1"),P=_?c.matchPath(n.pathname,{path:_,exact:h,sensitive:j,strict:w}):null,E=!!(y?y(P,n):P),A="function"==typeof p?p(E):p,H="function"==typeof O?O(E):O;E&&(A=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter((function(e){return e})).join(" ")}(A,s),H=u({},H,f));var N=u({"aria-current":E&&r||null,className:A,style:H,to:i},C);return g!==b?N.ref=t||k:N.innerRef=k,o.createElement(x,N)}))}));Object.defineProperty(t,"AW",{enumerable:!0,get:function(){return c.Route}}),Object.defineProperty(t,"k6",{enumerable:!0,get:function(){return c.useHistory}}),Object.defineProperty(t,"TH",{enumerable:!0,get:function(){return c.useLocation}}),Object.defineProperty(t,"$B",{enumerable:!0,get:function(){return c.useRouteMatch}}),t.OL=w}}]);
//# sourceMappingURL=450.bd05024f.chunk.js.map