var I=Object.defineProperty,B=Object.defineProperties;var F=Object.getOwnPropertyDescriptors;var r=Object.getOwnPropertySymbols;var R=Object.prototype.hasOwnProperty,U=Object.prototype.propertyIsEnumerable;var c=(e,s,t)=>s in e?I(e,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[s]=t,o=(e,s)=>{for(var t in s||(s={}))R.call(s,t)&&c(e,t,s[t]);if(r)for(var t of r(s))U.call(s,t)&&c(e,t,s[t]);return e},n=(e,s)=>B(e,F(s));import{m as _,u as $,a as u}from"./VInput-545a0bfa.js";import{m as D,V as i}from"./VCheckboxBtn-0ece9886.js";import{J,U as N,X as T,T as X,Z}from"./index-e43e3799.js";import{c as j,k as l,n as d}from"./frappe-ui-b8f10d89.js";const L=J()({name:"VCheckbox",inheritAttrs:!1,props:o(o({},_()),N(D(),["inline"])),emits:{"update:focused":e=>!0},setup(e,s){let{attrs:t,slots:a}=s;const{isFocused:m,focus:b,blur:f}=$(e),p=T(),k=j(()=>e.id||`checkbox-${p}`);return X(()=>{const[V,h]=Z(t),[x,q]=u.filterProps(e),[v,w]=i.filterProps(e);return l(u,d({class:["v-checkbox",e.class]},V,x,{id:k.value,focused:m.value,style:e.style}),n(o({},a),{default:P=>{let{id:C,messagesId:y,isDisabled:g,isReadonly:A}=P;return l(i,d(v,{id:C.value,"aria-describedby":y.value,disabled:g.value,readonly:A.value},h,{onFocus:b,onBlur:f}),a)}}))}),{}}});export{L as V};
//# sourceMappingURL=VCheckbox-7c4598f5.js.map
