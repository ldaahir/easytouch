var N=Object.defineProperty;var m=Object.getOwnPropertySymbols;var x=Object.prototype.hasOwnProperty,P=Object.prototype.propertyIsEnumerable;var b=(e,a,t)=>a in e?N(e,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[a]=t,n=(e,a)=>{for(var t in a||(a={}))x.call(a,t)&&b(e,t,a[t]);if(m)for(var t of m(a))P.call(a,t)&&b(e,t,a[t]);return e};import{E as f,k as l,X as T,Y as L,n as v}from"./frappe-ui-26ef7369.js";import{J as R,W as _,K as $,at as w,ah as X,ac as Y,L as A,ak as I,an as M,$ as D,O as E,h as J,au as K,T as O,av as W,g as j}from"./index-e1b913cd.js";import{m as q,M as z}from"./transition-6a62c7af.js";const U=R()({name:"VBadge",inheritAttrs:!1,props:n(n(n(n(n(n({bordered:Boolean,color:String,content:[Number,String],dot:Boolean,floating:Boolean,icon:_,inline:Boolean,label:{type:String,default:"$vuetify.badge"},max:[Number,String],modelValue:{type:Boolean,default:!0},offsetX:[Number,String],offsetY:[Number,String],textColor:String},$()),w({location:"top end"})),X()),Y()),A()),q({transition:"scale-rotate-transition"})),setup(e,a){const{backgroundColorClasses:t,backgroundColorStyles:C}=I(f(e,"color")),{roundedClasses:k}=M(e),{t:S}=D(),{textColorClasses:y,textColorStyles:h}=E(f(e,"textColor")),{themeClasses:B}=J(),{locationStyles:V}=K(e,!0,o=>{var s,i;return(e.floating?e.dot?2:4:e.dot?8:12)+(["top","bottom"].includes(o)?+((s=e.offsetY)!=null?s:0):["left","right"].includes(o)?+((i=e.offsetX)!=null?i:0):0)});return O(()=>{const o=Number(e.content),r=!e.max||isNaN(o)?e.content:o<=+e.max?o:`${e.max}+`,[s,i]=W(a.attrs,["aria-atomic","aria-label","aria-live","role","title"]);return l(e.tag,v({class:["v-badge",{"v-badge--bordered":e.bordered,"v-badge--dot":e.dot,"v-badge--floating":e.floating,"v-badge--inline":e.inline},e.class]},i,{style:e.style}),{default:()=>{var d,u;return[l("div",{class:"v-badge__wrapper"},[(u=(d=a.slots).default)==null?void 0:u.call(d),l(z,{transition:e.transition},{default:()=>{var c,g;return[T(l("span",v({class:["v-badge__badge",B.value,t.value,k.value,y.value],style:[C.value,h.value,e.inline?{}:V.value],"aria-atomic":"true","aria-label":S(e.label,o),"aria-live":"polite",role:"status"},s),[e.dot?void 0:a.slots.badge?(g=(c=a.slots).badge)==null?void 0:g.call(c):e.icon?l(j,{icon:e.icon},null):r]),[[L,e.modelValue]])]}})])]}})}),{}}});export{U as V};
//# sourceMappingURL=VBadge-b6984835.js.map