import{_ as y}from"./AppTextField-9d8f30b5.js";import{f as s,I as o,L as p,P as c,M as g,N as h,J as v,n as k,u as w}from"./frappe-ui-26ef7369.js";const x=c("h6",{class:"text-h6 mb-3"}," Type your 6 digit security code ",-1),A={__name:"AppOtpInput",props:{totalInput:{type:Number,required:!1,default:6},default:{type:String,required:!1,default:""}},emits:["updateOtp"],setup(i,{emit:f}){const r=i,u=s([]),a=s(null);u.value=r.default.split("");const d={style:"max-width: 54px; text-align: center;"},m=(t,l)=>{if(t.code!=="Tab"&&t.code!=="ArrowRight"&&t.code!=="ArrowLeft"&&t.preventDefault(),t.code==="Backspace"&&(u.value[l-1]="",a.value!==null&&l>1)){const e=a.value.children[l-2].querySelector("input");e&&e.focus()}if(/^([0-9])$/.test(t.key)&&(u.value[l-1]=t.key,a.value!==null&&l!==0&&l<a.value.children.length)){const e=a.value.children[l].querySelector("input");e&&e.focus()}f("updateOtp",u.value.join(""))};return(t,l)=>{const n=y;return o(),p("div",null,[x,c("div",{ref_key:"refOtpComp",ref:a,class:"d-flex align-center gap-4"},[(o(!0),p(g,null,h(r.totalInput,e=>(o(),v(n,k({key:e,"model-value":w(u)[e-1]},d,{maxlength:"1",onKeydown:_=>m(_,e)}),null,16,["model-value","onKeydown"]))),128))],512)])}}};export{A as _};
//# sourceMappingURL=AppOtpInput-03940eaf.js.map