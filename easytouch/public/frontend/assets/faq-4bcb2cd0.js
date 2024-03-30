import{_ as N}from"./AppSearchHeader-8c9cd4fb.js";import{f as _,d as x,I as n,L as c,k as t,u as l,q as h,K as a,X as w,Y as q,M as V,N as v,S as U,P as s,Q as T,J as b,R as d}from"./frappe-ui-b8f10d89.js";import{g,o as B}from"./index-e43e3799.js";import{s as Q}from"./sitting-girl-with-laptop-56ac66db.js";import{a as y,V as k}from"./VRow-b8bac363.js";import{V as W,a as E}from"./VTabs-bc7af8d5.js";import{V as F}from"./VImg-dcfe0017.js";import{V as P,a as R}from"./VWindowItem-52eb92ae.js";import{V as A}from"./VChip-c30ae960.js";import{V as I}from"./VAvatar-26ec77a4.js";import{V as D,a as H}from"./VExpansionPanel-f10e0fc2.js";import{V as Y,d as S}from"./VCard-bd92c839.js";import"./AppTextField-7c20f864.js";import"./VInput-545a0bfa.js";import"./transition-61bfbac1.js";import"./VTextField-61b1d2aa.js";/* empty css                   */import"./VField-5b446628.js";import"./easing-512405f0.js";import"./forwardRefs-bb5e4b03.js";import"./VCounter-cc8846c3.js";import"./VSlideGroup-cf52aaa2.js";import"./lazy-b5e818f7.js";import"./ssrBoot-066fc73e.js";const j={class:"d-flex align-center mb-6"},G={class:"text-h6"},J={class:"text-sm"},K=s("span",{class:"text-base font-weight-medium"}," No Results Found!! ",-1),M={class:"text-center pt-15"},O=s("h5",{class:"text-h5 mb-2"}," You still have a question? ",-1),X=s("p",null," If you can't find question in our FAQ, you can contact us. We'll answer you shortly! ",-1),$={class:"text-h6 mb-2"},qe={__name:"faq",setup(Z){const u=_(""),r=_([]),z=()=>B.get("/pages/faqs",{params:{q:u.value}}).then(f=>{r.value=f.data}).catch(f=>{console.error(f)}),i=_("Payment"),p=_(0);x(i,()=>p.value=0),x(u,z,{immediate:!0});const C=[{icon:"tabler-phone",via:"+ (810) 2548 2568",tagLine:"We are always happy to help!"},{icon:"tabler-mail",via:"hello@help.com",tagLine:"Best way to get answer faster!"}];return(f,o)=>{const L=N;return n(),c("section",null,[t(L,{modelValue:l(u),"onUpdate:modelValue":o[0]||(o[0]=e=>h(u)?u.value=e:null),title:"Hello, how can we help?",subtitle:"or select a category to quickly find the help you require","custom-class":"mb-7"},null,8,["modelValue"]),t(k,null,{default:a(()=>[w(t(y,{cols:"12",sm:"4",lg:"3",class:"position-relative"},{default:a(()=>[t(W,{modelValue:l(i),"onUpdate:modelValue":o[1]||(o[1]=e=>h(i)?i.value=e:null),direction:"vertical",class:"v-tabs-pill",grow:""},{default:a(()=>[(n(!0),c(V,null,v(l(r),e=>(n(),b(E,{key:e.faqTitle,value:e.faqTitle,class:"text-high-emphasis"},{default:a(()=>[t(g,{icon:e.faqIcon,size:20,start:""},null,8,["icon"]),T(" "+d(e.faqTitle),1)]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"]),t(F,{width:245,src:l(Q),class:"d-none d-sm-block mt-10 mx-auto"},null,8,["src"])]),_:1},512),[[q,l(r).length]]),t(y,{cols:"12",sm:"8",lg:"9"},{default:a(()=>[t(P,{modelValue:l(i),"onUpdate:modelValue":o[3]||(o[3]=e=>h(i)?i.value=e:null),class:"faq-v-window disable-tab-transition"},{default:a(()=>[(n(!0),c(V,null,v(l(r),e=>(n(),b(R,{key:e.faqTitle,value:e.faqTitle},{default:a(()=>[s("div",j,[t(I,{rounded:"",color:"primary",variant:"tonal",class:"me-3",size:"large"},{default:a(()=>[t(g,{size:32,icon:e.faqIcon},null,8,["icon"])]),_:2},1024),s("div",null,[s("h6",G,d(e.faqTitle),1),s("span",J,d(e.faqSubtitle),1)])]),t(D,{modelValue:l(p),"onUpdate:modelValue":o[2]||(o[2]=m=>h(p)?p.value=m:null),multiple:""},{default:a(()=>[(n(!0),c(V,null,v(e.faqs,m=>(n(),b(H,{key:m.question,title:m.question,text:m.answer},null,8,["title","text"]))),128))]),_:2},1032,["modelValue"])]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"])]),_:1}),w(t(y,{cols:"12",class:U(l(r).length?"":"d-flex justify-center align-center")},{default:a(()=>[t(g,{icon:"tabler-help",start:"",size:"20"}),K]),_:1},8,["class"]),[[q,!l(r).length]])]),_:1}),s("div",M,[t(A,{label:"",color:"primary",size:"small",class:"mb-2"},{default:a(()=>[T(" QUESTION? ")]),_:1}),O,X,t(k,{class:"mt-4"},{default:a(()=>[(n(),c(V,null,v(C,e=>t(y,{key:e.icon,sm:"6",cols:"12"},{default:a(()=>[t(Y,{flat:"",class:"bg-var-theme-background"},{default:a(()=>[t(S,null,{default:a(()=>[t(I,{rounded:"",color:"primary",variant:"tonal",class:"me-3"},{default:a(()=>[t(g,{icon:e.icon},null,8,["icon"])]),_:2},1024)]),_:2},1024),t(S,null,{default:a(()=>[s("h6",$,d(e.via),1),s("span",null,d(e.tagLine),1)]),_:2},1024)]),_:2},1024)]),_:2},1024)),64))]),_:1})])])}}};export{qe as default};
//# sourceMappingURL=faq-4bcb2cd0.js.map
