var k=Object.defineProperty;var c=Object.getOwnPropertySymbols;var C=Object.prototype.hasOwnProperty,P=Object.prototype.propertyIsEnumerable;var m=(a,s,e)=>s in a?k(a,s,{enumerable:!0,configurable:!0,writable:!0,value:e}):a[s]=e,t=(a,s)=>{for(var e in s||(s={}))C.call(s,e)&&m(a,e,s[e]);if(c)for(var e of c(s))P.call(s,e)&&m(a,e,s[e]);return a};import{J as v,K as g,a0 as h,W as S,a7 as z,ah as A,aL as T,ac as I,L as R,aE as B,M as D,aG as F,a8 as L,an as M,aM as _,T as b,g as x,aH as E}from"./index-e43e3799.js";import{b as G,a7 as H,m as J,k as o}from"./frappe-ui-b8f10d89.js";import{V as K}from"./VImg-dcfe0017.js";function q(a){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"div",e=arguments.length>2?arguments[2]:void 0;return v()({name:e!=null?e:G(H(a.replace(/__/g,"-"))),props:t({tag:{type:String,default:s}},g()),setup(n,u){let{slots:l}=u;return()=>{var r;return J(n.tag,{class:[a,n.class],style:n.style},(r=l.default)==null?void 0:r.call(l))}}})}const N=h(t(t(t(t(t(t(t({start:Boolean,end:Boolean,icon:S,image:String},g()),z()),A()),T()),I()),R()),B({variant:"flat"})),"v-avatar"),w=v()({name:"VAvatar",props:N(),setup(a,s){let{slots:e}=s;const{themeClasses:n}=D(a),{colorClasses:u,colorStyles:l,variantClasses:r}=F(a),{densityClasses:d}=L(a),{roundedClasses:y}=M(a),{sizeClasses:f,sizeStyles:V}=_(a);return b(()=>o(a.tag,{class:["v-avatar",{"v-avatar--start":a.start,"v-avatar--end":a.end},n.value,u.value,d.value,y.value,f.value,r.value,a.class],style:[l.value,V.value,a.style]},{default:()=>{var i;return[a.image?o(K,{key:"image",src:a.image,alt:"",cover:!0},null):a.icon?o(x,{key:"icon",icon:a.icon},null):(i=e.default)==null?void 0:i.call(e),E(!1,"v-avatar")]}})),{}}});export{w as V,q as c};
//# sourceMappingURL=VAvatar-26ec77a4.js.map
