var b=Object.defineProperty;var n=Object.getOwnPropertySymbols;var v=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable;var h=(a,t,e)=>t in a?b(a,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):a[t]=e,o=(a,t)=>{for(var e in t||(t={}))v.call(t,e)&&h(a,e,t[e]);if(n)for(var e of n(t))f.call(t,e)&&h(a,e,t[e]);return a};import{J as c,K as u,a7 as g,ac as x,L as T,M as y,a8 as k,T as V,Q as C}from"./index-e43e3799.js";import{k as l}from"./frappe-ui-b8f10d89.js";const w=c()({name:"VTable",props:o(o(o(o({fixedHeader:Boolean,fixedFooter:Boolean,height:[Number,String],hover:Boolean},u()),g()),x()),T()),setup(a,t){let{slots:e}=t;const{themeClasses:d}=y(a),{densityClasses:m}=k(a);return V(()=>l(a.tag,{class:["v-table",{"v-table--fixed-height":!!a.height,"v-table--fixed-header":a.fixedHeader,"v-table--fixed-footer":a.fixedFooter,"v-table--has-top":!!e.top,"v-table--has-bottom":!!e.bottom,"v-table--hover":a.hover},d.value,m.value,a.class],style:a.style},{default:()=>{var s,r,i;return[(s=e.top)==null?void 0:s.call(e),e.default?l("div",{class:"v-table__wrapper",style:{height:C(a.height)}},[l("table",null,[e.default()])]):(r=e.wrapper)==null?void 0:r.call(e),(i=e.bottom)==null?void 0:i.call(e)]}})),{}}});export{w as V};
//# sourceMappingURL=VTable-2e4e7897.js.map
