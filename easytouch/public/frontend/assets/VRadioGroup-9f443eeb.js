var O=Object.defineProperty,U=Object.defineProperties;var h=Object.getOwnPropertyDescriptors;var f=Object.getOwnPropertySymbols;var x=Object.prototype.hasOwnProperty,M=Object.prototype.propertyIsEnumerable;var p=(e,a,t)=>a in e?O(e,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[a]=t,l=(e,a)=>{for(var t in a||(a={}))x.call(a,t)&&p(e,t,a[t]);if(f)for(var t of f(a))M.call(a,t)&&p(e,t,a[t]);return e},i=(e,a)=>U(e,h(a));import{m as N,V as b,a as T,b as _}from"./VSelectionControl-bcc9ca9d.js";import{J as v,T as I,U as D,W as V,X as F,Y as J,Z as L}from"./index-e43e3799.js";import{k as o,n as c,c as W,M as X}from"./frappe-ui-b8f10d89.js";import{m as Y,a as y,V as Z}from"./VInput-545a0bfa.js";const K=v()({name:"VRadio",props:l({},N({falseIcon:"$radioOff",trueIcon:"$radioOn"})),setup(e,a){let{slots:t}=a;return I(()=>o(b,c(e,{class:["v-radio",e.class],style:e.style,type:"radio"}),t)),{}}});const Q=v()({name:"VRadioGroup",inheritAttrs:!1,props:i(l(l({height:{type:[Number,String],default:"auto"}},Y()),D(T(),["multiple"])),{trueIcon:{type:V,default:"$radioOn"},falseIcon:{type:V,default:"$radioOff"},type:{type:String,default:"radio"}}),emits:{"update:modelValue":e=>!0},setup(e,a){let{attrs:t,slots:s}=a;const g=F(),m=W(()=>e.id||`radio-group-${g}`),r=J(e,"modelValue");return I(()=>{const[P,R]=L(t),[S,j]=y.filterProps(e),[$,q]=b.filterProps(e),u=s.label?s.label({label:e.label,props:{for:m.value}}):e.label;return o(y,c({class:["v-radio-group",e.class],style:e.style},P,S,{modelValue:r.value,"onUpdate:modelValue":n=>r.value=n,id:m.value}),i(l({},s),{default:n=>{let{id:d,messagesId:C,isDisabled:G,isReadonly:k}=n;return o(X,null,[u&&o(Z,{id:d.value},{default:()=>[u]}),o(_,c($,{id:d.value,"aria-describedby":C.value,defaultsTarget:"VRadio",trueIcon:e.trueIcon,falseIcon:e.falseIcon,type:e.type,disabled:G.value,readonly:k.value,"aria-labelledby":u?d.value:void 0,multiple:!1},R,{modelValue:r.value,"onUpdate:modelValue":A=>r.value=A}),s)])}}))}),{}}});export{Q as V,K as a};
//# sourceMappingURL=VRadioGroup-9f443eeb.js.map
