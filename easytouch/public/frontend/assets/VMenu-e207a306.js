var O=Object.defineProperty;var v=Object.getOwnPropertySymbols;var b=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable;var f=(e,o,a)=>o in e?O(e,o,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[o]=a,p=(e,o)=>{for(var a in o||(o={}))b.call(o,a)&&f(e,a,o[a]);if(v)for(var a of v(o))x.call(o,a)&&f(e,a,o[a]);return e};import{f as T}from"./forwardRefs-bb5e4b03.js";import{J as U,U as k,Y as A,X as I,T as R,az as $}from"./index-e43e3799.js";import{m as j,u as z,a as V,V as g}from"./VOverlay-dc43e014.js";import{V as J}from"./dialog-transition-478eb809.js";import{c as P,f as y,i as N,d as X,n as C,k as S,p as Y}from"./frappe-ui-b8f10d89.js";const K=U()({name:"VMenu",props:p({id:String},k(j({closeDelay:250,closeOnContentClick:!0,locationStrategy:"connected",openDelay:300,scrim:!1,scrollStrategy:"reposition",transition:{component:J}}),["absolute"])),emits:{"update:modelValue":e=>!0},setup(e,o){let{slots:a}=o;const s=A(e,"modelValue"),{scopeId:h}=z(),M=I(),u=P(()=>e.id||`v-menu-${M}`),c=y(),t=N(V,null),r=y(0);Y(V,{register(){++r.value},unregister(){--r.value},closeParents(){setTimeout(()=>{r.value||(s.value=!1,t==null||t.closeParents())},40)}}),X(s,l=>{l?t==null||t.register():t==null||t.unregister()});function w(){t==null||t.closeParents()}const D=P(()=>C({"aria-haspopup":"menu","aria-expanded":String(s.value),"aria-owns":u.value},e.activatorProps));return R(()=>{const[l]=g.filterProps(e);return S(g,C({ref:c,class:["v-menu",e.class],style:e.style},l,{modelValue:s.value,"onUpdate:modelValue":n=>s.value=n,absolute:!0,activatorProps:D.value,"onClick:outside":w},h),{activator:a.activator,default:function(){for(var n=arguments.length,d=new Array(n),i=0;i<n;i++)d[i]=arguments[i];return S($,{root:!0},{default:()=>{var m;return[(m=a.default)==null?void 0:m.call(a,...d)]}})}})}),T({id:u,ΨopenChildren:r},c)}});export{K as V};
//# sourceMappingURL=VMenu-e207a306.js.map