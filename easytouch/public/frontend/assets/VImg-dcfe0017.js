var H=Object.defineProperty;var B=Object.getOwnPropertySymbols;var L=Object.prototype.hasOwnProperty,U=Object.prototype.propertyIsEnumerable;var C=(e,n,t)=>n in e?H(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,S=(e,n)=>{for(var t in n||(n={}))L.call(n,t)&&C(e,t,n[t]);if(B)for(var t of B(n))U.call(n,t)&&C(e,t,n[t]);return e};import{k as r,c as z,f as _,d as I,D as J,B as K,X as O,a6 as Q,M as X,Y}from"./frappe-ui-b8f10d89.js";import{aw as W,J as j,K as D,ax as G,ay as Z,T as M,Q as p}from"./index-e43e3799.js";import{m as ee,M as b}from"./transition-61bfbac1.js";function te(e,n){if(!W)return;const t=n.modifiers||{},s=n.value,{handler:m,options:i}=typeof s=="object"?s:{handler:s,options:{}},u=new IntersectionObserver(function(){var f;let v=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],g=arguments.length>1?arguments[1]:void 0;const l=(f=e._observe)==null?void 0:f[n.instance.$.uid];if(!l)return;const o=v.some(h=>h.isIntersecting);m&&(!t.quiet||l.init)&&(!t.once||o||l.init)&&m(o,v,g),o&&t.once?P(e,n):l.init=!0},i);e._observe=Object(e._observe),e._observe[n.instance.$.uid]={init:!1,observer:u},u.observe(e)}function P(e,n){var s;const t=(s=e._observe)==null?void 0:s[n.instance.$.uid];t&&(t.observer.unobserve(e),delete e._observe[n.instance.$.uid])}const ne={mounted:te,unmounted:P},ae=ne;function re(e){return{aspectStyles:z(()=>{const n=Number(e.aspectRatio);return n?{paddingBottom:String(1/n*100)+"%"}:void 0})}}const se=j()({name:"VResponsive",props:S(S({aspectRatio:[String,Number],contentClass:String},D()),G()),setup(e,n){let{slots:t}=n;const{aspectStyles:s}=re(e),{dimensionStyles:m}=Z(e);return M(()=>{var i;return r("div",{class:["v-responsive",e.class],style:[m.value,e.style]},[r("div",{class:"v-responsive__sizer",style:s.value},null),(i=t.additional)==null?void 0:i.call(t),t.default&&r("div",{class:["v-responsive__content",e.contentClass]},[t.default()])])}),{}}}),oe=j()({name:"VImg",directives:{intersect:ae},props:S(S({aspectRatio:[String,Number],alt:String,cover:Boolean,eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},sizes:String,src:{type:[String,Object],default:""},srcset:String,width:[String,Number]},D()),ee()),emits:{loadstart:e=>!0,load:e=>!0,error:e=>!0},setup(e,n){let{emit:t,slots:s}=n;const m=_(""),i=_(),u=_(e.eager?"loading":"idle"),v=_(),g=_(),l=z(()=>e.src&&typeof e.src=="object"?{src:e.src.src,srcset:e.srcset||e.src.srcset,lazySrc:e.lazySrc||e.src.lazySrc,aspect:Number(e.aspectRatio||e.src.aspect||0)}:{src:e.src,srcset:e.srcset,lazySrc:e.lazySrc,aspect:Number(e.aspectRatio||0)}),o=z(()=>l.value.aspect||v.value/g.value||0);I(()=>e.src,()=>{f(u.value!=="idle")}),I(o,(a,c)=>{!a&&c&&i.value&&y(i.value)}),J(()=>f());function f(a){if(!(e.eager&&a)&&!(W&&!a&&!e.eager)){if(u.value="loading",l.value.lazySrc){const c=new Image;c.src=l.value.lazySrc,y(c,null)}l.value.src&&K(()=>{var c,d;if(t("loadstart",((c=i.value)==null?void 0:c.currentSrc)||l.value.src),(d=i.value)!=null&&d.complete){if(i.value.naturalWidth||R(),u.value==="error")return;o.value||y(i.value,null),h()}else o.value||y(i.value),w()})}}function h(){var a;w(),u.value="loaded",t("load",((a=i.value)==null?void 0:a.currentSrc)||l.value.src)}function R(){var a;u.value="error",t("error",((a=i.value)==null?void 0:a.currentSrc)||l.value.src)}function w(){const a=i.value;a&&(m.value=a.currentSrc||a.src)}let T=-1;function y(a){let c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:100;const d=()=>{clearTimeout(T);const{naturalHeight:$,naturalWidth:k}=a;$||k?(v.value=k,g.value=$):!a.complete&&u.value==="loading"&&c!=null?T=window.setTimeout(d,c):(a.currentSrc.endsWith(".svg")||a.currentSrc.startsWith("data:image/svg+xml"))&&(v.value=1,g.value=1)};d()}const N=z(()=>({"v-img__img--cover":e.cover,"v-img__img--contain":!e.cover})),x=()=>{var d;if(!l.value.src||u.value==="idle")return null;const a=r("img",{class:["v-img__img",N.value],src:l.value.src,srcset:l.value.srcset,alt:e.alt,sizes:e.sizes,ref:i,onLoad:h,onError:R},null),c=(d=s.sources)==null?void 0:d.call(s);return r(b,{transition:e.transition,appear:!0},{default:()=>[O(c?r("picture",{class:"v-img__picture"},[c,a]):a,[[Y,u.value==="loaded"]])]})},E=()=>r(b,{transition:e.transition},{default:()=>[l.value.lazySrc&&u.value!=="loaded"&&r("img",{class:["v-img__img","v-img__img--preload",N.value],src:l.value.lazySrc,alt:e.alt},null)]}),F=()=>s.placeholder?r(b,{transition:e.transition,appear:!0},{default:()=>[(u.value==="loading"||u.value==="error"&&!s.error)&&r("div",{class:"v-img__placeholder"},[s.placeholder()])]}):null,q=()=>s.error?r(b,{transition:e.transition,appear:!0},{default:()=>[u.value==="error"&&r("div",{class:"v-img__error"},[s.error()])]}):null,A=()=>e.gradient?r("div",{class:"v-img__gradient",style:{backgroundImage:`linear-gradient(${e.gradient})`}},null):null,V=_(!1);{const a=I(o,c=>{c&&(requestAnimationFrame(()=>{requestAnimationFrame(()=>{V.value=!0})}),a())})}return M(()=>O(r(se,{class:["v-img",{"v-img--booting":!V.value},e.class],style:[{width:p(e.width==="auto"?v.value:e.width)},e.style],aspectRatio:o.value,"aria-label":e.alt,role:e.alt?"img":void 0},{additional:()=>r(X,null,[r(x,null,null),r(E,null,null),r(A,null,null),r(F,null,null),r(q,null,null)]),default:s.default}),[[Q("intersect"),{handler:f,options:e.options},null,{once:!0}]])),{currentSrc:m,image:i,state:u,naturalWidth:v,naturalHeight:g}}});export{ae as I,oe as V,se as a};
//# sourceMappingURL=VImg-dcfe0017.js.map
