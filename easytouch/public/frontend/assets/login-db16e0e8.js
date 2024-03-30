import{_ as T}from"./AppTextField-7c20f864.js";import{f as m,I as B,J as F,K as t,k as e,P as o,u as s,Q as r,R as M,ac as q,q as V,G as E,H as J,$}from"./frappe-ui-b8f10d89.js";import{u as j}from"./useAppAbility-028a5aec.js";import{_ as O}from"./AuthProvider-e5896e20.js";import{V as U,t as y,i as G,o as z}from"./index-e43e3799.js";import{u as v}from"./useGenerateImageVariant-ae146784.js";import{a as H,b as K,c as Q,d as W}from"./auth-v2-login-illustration-light-d76bf8dc.js";import{m as X,a as Y}from"./misc-mask-light-eb104613.js";import{r as k,e as Z}from"./validators-50c95554.js";import{b as w}from"./route-block-83d24a4e.js";import{V as I}from"./VImg-dcfe0017.js";import{a as n,V as S}from"./VRow-b8bac363.js";import{V as ee,d as b}from"./VCard-bd92c839.js";import{V as te}from"./VAlert-aaebddcc.js";import{V as se}from"./VForm-d6366f14.js";import{V as ae}from"./VCheckbox-7c4598f5.js";import{V as C}from"./VDivider-7eec4b6d.js";import"./VInput-545a0bfa.js";import"./transition-61bfbac1.js";import"./VTextField-61b1d2aa.js";/* empty css                   */import"./VField-5b446628.js";import"./easing-512405f0.js";import"./forwardRefs-bb5e4b03.js";import"./VCounter-cc8846c3.js";import"./index-61e4df1a.js";import"./VAvatar-26ec77a4.js";import"./VCheckboxBtn-0ece9886.js";import"./VSelectionControl-bcc9ca9d.js";const oe={class:"position-relative bg-background rounded-lg w-100 ma-8 me-0"},re={class:"d-flex align-center justify-center w-100 h-100"},le={class:"text-h5 mb-1"},ne={class:"text-capitalize"},ie=o("p",{class:"mb-0"}," Please sign-in to your account and start the adventure ",-1),me=o("p",{class:"text-caption mb-2"},[r(" Admin Email: "),o("strong",null,"admin@demo.com"),r(" / Pass: "),o("strong",null,"admin")],-1),ue=o("p",{class:"text-caption mb-0"},[r(" Client Email: "),o("strong",null,"client@demo.com"),r(" / Pass: "),o("strong",null,"client")],-1),de={class:"d-flex align-center flex-wrap justify-space-between mt-2 mb-4"},ce=o("span",null,"New on our platform?",-1),pe=o("span",{class:"mx-4"},"or",-1),fe={__name:"login",setup(_e){const L=v(W,Q,K,H,!0),R=v(Y,X),d=m(!1),h=E(),N=J(),A=j(),_=m({email:void 0,password:void 0}),x=m(),c=m("admin@demo.com"),p=m("admin"),g=m(!1),D=()=>{z.post("/auth/login",{email:c.value,password:p.value}).then(l=>{const{accessToken:a,userData:f,userAbilities:u}=l.data;localStorage.setItem("userAbilities",JSON.stringify(u)),A.update(u),localStorage.setItem("userData",JSON.stringify(f)),localStorage.setItem("accessToken",JSON.stringify(a)),N.replace(h.query.to?String(h.query.to):"/")}).catch(l=>{const{errors:a}=l.response.data;_.value=a,console.error(l.response.data)})},P=()=>{var l;(l=x.value)==null||l.validate().then(({valid:a})=>{a&&D()})};return(l,a)=>{const f=T,u=$("RouterLink");return B(),F(S,{"no-gutters":"",class:"auth-wrapper bg-surface"},{default:t(()=>[e(n,{lg:"8",class:"d-none d-lg-flex"},{default:t(()=>[o("div",oe,[o("div",re,[e(I,{"max-width":"505",src:s(L),class:"auth-illustration mt-16 mb-2"},null,8,["src"])]),e(I,{src:s(R),class:"auth-footer-mask"},null,8,["src"])])]),_:1}),e(n,{cols:"12",lg:"4",class:"auth-card-v2 d-flex align-center justify-center"},{default:t(()=>[e(ee,{flat:"","max-width":500,class:"mt-12 mt-sm-0 pa-4"},{default:t(()=>[e(b,null,{default:t(()=>[e(s(U),{nodes:s(y).app.logo,class:"mb-6"},null,8,["nodes"]),o("h5",le,[r(" Welcome to "),o("span",ne,M(s(y).app.title),1),r("! 👋🏻 ")]),ie]),_:1}),e(b,null,{default:t(()=>[e(te,{color:"primary",variant:"tonal"},{default:t(()=>[me,ue]),_:1})]),_:1}),e(b,null,{default:t(()=>[e(s(se),{ref_key:"refVForm",ref:x,onSubmit:q(P,["prevent"])},{default:t(()=>[e(S,null,{default:t(()=>[e(n,{cols:"12"},{default:t(()=>[e(f,{modelValue:s(c),"onUpdate:modelValue":a[0]||(a[0]=i=>V(c)?c.value=i:null),label:"Email",type:"email",autofocus:"",rules:[s(k),s(Z)],"error-messages":s(_).email},null,8,["modelValue","rules","error-messages"])]),_:1}),e(n,{cols:"12"},{default:t(()=>[e(f,{modelValue:s(p),"onUpdate:modelValue":a[1]||(a[1]=i=>V(p)?p.value=i:null),label:"Password",rules:[s(k)],type:s(d)?"text":"password","error-messages":s(_).password,"append-inner-icon":s(d)?"tabler-eye-off":"tabler-eye","onClick:appendInner":a[2]||(a[2]=i=>d.value=!s(d))},null,8,["modelValue","rules","type","error-messages","append-inner-icon"]),o("div",de,[e(ae,{modelValue:s(g),"onUpdate:modelValue":a[3]||(a[3]=i=>V(g)?g.value=i:null),label:"Remember me"},null,8,["modelValue"]),e(u,{class:"text-primary ms-2 mb-1",to:{name:"forgot-password"}},{default:t(()=>[r(" Forgot Password? ")]),_:1})]),e(G,{block:"",type:"submit"},{default:t(()=>[r(" Login ")]),_:1})]),_:1}),e(n,{cols:"12",class:"text-center"},{default:t(()=>[ce,e(u,{class:"text-primary ms-2",to:{name:"register"}},{default:t(()=>[r(" Create an account ")]),_:1})]),_:1}),e(n,{cols:"12",class:"d-flex align-center"},{default:t(()=>[e(C),pe,e(C)]),_:1}),e(n,{cols:"12",class:"text-center"},{default:t(()=>[e(O)]),_:1})]),_:1})]),_:1},8,["onSubmit"])]),_:1})]),_:1})]),_:1})]),_:1})}}};typeof w=="function"&&w(fe);export{fe as default};
//# sourceMappingURL=login-db16e0e8.js.map