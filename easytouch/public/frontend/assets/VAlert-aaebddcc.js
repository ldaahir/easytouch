var R=Object.defineProperty;var k=Object.getOwnPropertySymbols;var w=Object.prototype.hasOwnProperty,F=Object.prototype.propertyIsEnumerable;var b=(e,t,l)=>t in e?R(e,t,{enumerable:!0,configurable:!0,writable:!0,value:l}):e[t]=l,n=(e,t)=>{for(var l in t||(t={}))w.call(t,l)&&b(e,l,t[l]);if(k)for(var l of k(t))F.call(t,l)&&b(e,l,t[l]);return e};import{c as M}from"./VAvatar-26ec77a4.js";import{J as j,W as G,K as H,a7 as J,ax as K,af as N,at as Q,aP as W,ah as Y,ac as q,L as U,aE as X,Y as Z,M as p,aG as ee,a8 as ae,ay as te,al as le,au as ne,aQ as se,an as oe,O as ie,$ as re,aH as ce,g as ue,az as P,i as de}from"./index-e43e3799.js";import{c,E as ve,k as s,n as me}from"./frappe-ui-b8f10d89.js";const ye=M("v-alert-title"),fe=["success","info","warning","error"],Ve=j()({name:"VAlert",props:n(n(n(n(n(n(n(n(n(n({border:{type:[Boolean,String],validator:e=>typeof e=="boolean"||["top","end","bottom","start"].includes(e)},borderColor:String,closable:Boolean,closeIcon:{type:G,default:"$close"},closeLabel:{type:String,default:"$vuetify.close"},icon:{type:[Boolean,String,Function,Object],default:null},modelValue:{type:Boolean,default:!0},prominent:Boolean,title:String,text:String,type:{type:String,validator:e=>fe.includes(e)}},H()),J()),K()),N()),Q()),W()),Y()),q()),U()),X({variant:"flat"})),emits:{"click:close":e=>!0,"update:modelValue":e=>!0},setup(e,t){let{emit:l,slots:a}=t;const u=Z(e,"modelValue"),r=c(()=>{var o;if(e.icon!==!1)return e.type?(o=e.icon)!=null?o:`$${e.type}`:e.icon}),C=c(()=>{var o;return{color:(o=e.color)!=null?o:e.type,variant:e.variant}}),{themeClasses:V}=p(e),{colorClasses:x,colorStyles:g,variantClasses:S}=ee(C),{densityClasses:_}=ae(e),{dimensionStyles:h}=te(e),{elevationClasses:T}=le(e),{locationStyles:B}=ne(e),{positionClasses:$}=se(e),{roundedClasses:I}=oe(e),{textColorClasses:L,textColorStyles:z}=ie(ve(e,"borderColor")),{t:A}=re(),d=c(()=>({"aria-label":A(e.closeLabel),onClick(o){u.value=!1,l("click:close",o)}}));return()=>{const o=!!(a.prepend||r.value),D=!!(a.title||e.title),E=!!(e.text||a.text),O=!!(a.close||e.closable);return u.value&&s(e.tag,{class:["v-alert",e.border&&{"v-alert--border":!!e.border,[`v-alert--border-${e.border===!0?"start":e.border}`]:!0},{"v-alert--prominent":e.prominent},V.value,x.value,_.value,T.value,$.value,I.value,S.value,e.class],style:[g.value,h.value,B.value,e.style],role:"alert"},{default:()=>{var v,m,y;return[ce(!1,"v-alert"),e.border&&s("div",{key:"border",class:["v-alert__border",L.value],style:z.value},null),o&&s("div",{key:"prepend",class:"v-alert__prepend"},[a.prepend?s(P,{key:"prepend-defaults",disabled:!r.value,defaults:{VIcon:{density:e.density,icon:r.value,size:e.prominent?44:28}}},a.prepend):s(ue,{key:"prepend-icon",density:e.density,icon:r.value,size:e.prominent?44:28},null)]),s("div",{class:"v-alert__content"},[D&&s(ye,{key:"title"},{default:()=>{var i,f;return[(f=(i=a.title)==null?void 0:i.call(a))!=null?f:e.title]}}),E&&((m=(v=a.text)==null?void 0:v.call(a))!=null?m:e.text),(y=a.default)==null?void 0:y.call(a)]),a.append&&s("div",{key:"append",class:"v-alert__append"},[a.append()]),O&&s("div",{key:"close",class:"v-alert__close"},[a.close?s(P,{key:"close-defaults",defaults:{VBtn:{icon:e.closeIcon,size:"x-small",variant:"text"}}},{default:()=>{var i;return[(i=a.close)==null?void 0:i.call(a,{props:d.value})]}}):s(de,me({key:"close-btn",icon:e.closeIcon,size:"x-small",variant:"text"},d.value),null)])]}})}}});export{Ve as V,ye as a};
//# sourceMappingURL=VAlert-aaebddcc.js.map
