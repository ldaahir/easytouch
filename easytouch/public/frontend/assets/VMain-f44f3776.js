var b=Object.defineProperty;var i=Object.getOwnPropertySymbols;var V=Object.prototype.hasOwnProperty,L=Object.prototype.propertyIsEnumerable;var m=(e,t,a)=>t in e?b(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,n=(e,t)=>{for(var a in t||(t={}))V.call(t,a)&&m(e,a,t[a]);if(i)for(var a of i(t))L.call(t,a)&&m(e,a,t[a]);return e};import{am as p,J as y,K as d,b7 as k,b8 as S,T as f,ac as g,b9 as B}from"./index-e1b913cd.js";import{f as C,d as I,k as r}from"./frappe-ui-26ef7369.js";import{u as M}from"./ssrBoot-2565eb67.js";const D=(e=void 0)=>{const{mdAndDown:t,name:a}=p(),l=e||t,s=C(!0);return(()=>{s.value=!l.value})(),I(a,()=>{s.value=!l.value}),{isLeftSidebarOpen:s}};const T=y()({name:"VLayout",props:n(n({},d()),k()),setup(e,t){let{slots:a}=t;const{layoutClasses:l,layoutStyles:s,getLayoutItem:o,items:u,layoutRef:v}=S(e);return f(()=>{var c;return r("div",{ref:v,class:[l.value,e.class],style:[s.value,e.style]},[(c=a.default)==null?void 0:c.call(a)])}),{getLayoutItem:o,items:u}}});const $=y()({name:"VMain",props:n(n({scrollable:Boolean},d()),g({tag:"main"})),setup(e,t){let{slots:a}=t;const{mainStyles:l}=B(),{ssrBootStyles:s}=M();return f(()=>r(e.tag,{class:["v-main",{"v-main--scrollable":e.scrollable},e.class],style:[l.value,s.value,e.style]},{default:()=>{var o,u;return[e.scrollable?r("div",{class:"v-main__scroller"},[(o=a.default)==null?void 0:o.call(a)]):(u=a.default)==null?void 0:u.call(a)]}})),{}}});export{$ as V,T as a,D as u};
//# sourceMappingURL=VMain-f44f3776.js.map