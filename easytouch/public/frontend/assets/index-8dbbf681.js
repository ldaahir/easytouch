import{_ as W}from"./AppTextField-7c20f864.js";import{_ as X}from"./AppSelect-19abff1f.js";import{i as m,g as d,w as Y}from"./index-e43e3799.js";import{_ as Z}from"./AddNewUserDrawer-0df78ac1.js";import{u as ee}from"./useUserListStore-7475e7a8.js";import{a as te}from"./formatters-9ef7de78.js";import{a as f,V as I}from"./VRow-b8bac363.js";import{V as R,d as k}from"./VCard-bd92c839.js";import{V as S}from"./VDivider-7eec4b6d.js";import{V as ae}from"./VSpacer-b05e1fe2.js";import{V as le}from"./VDataTableServer-c40014e1.js";import{V as C}from"./VAvatar-26ec77a4.js";import{V as se}from"./VImg-dcfe0017.js";import{V as re}from"./VChip-c30ae960.js";import{V as oe}from"./VMenu-e207a306.js";import{V as ie,a as L,b as z}from"./VList-ce82f9df.js";import{V as ne}from"./VPagination-537b9129.js";import{f as c,w as ce,I as y,L as A,k as t,K as a,M as ue,N as de,u as s,q as v,P as r,Q as u,J as pe,R as n,n as T,$,S as me}from"./frappe-ui-b8f10d89.js";import"./VInput-545a0bfa.js";import"./transition-61bfbac1.js";import"./VTextField-61b1d2aa.js";/* empty css                   */import"./VField-5b446628.js";import"./easing-512405f0.js";import"./forwardRefs-bb5e4b03.js";import"./VCounter-cc8846c3.js";import"./VSelect-25505b64.js";import"./dialog-transition-478eb809.js";import"./VCheckboxBtn-0ece9886.js";import"./VSelectionControl-bcc9ca9d.js";import"./AppDrawerHeaderSection-ff97163b.js";import"./validators-50c95554.js";import"./index-61e4df1a.js";import"./VForm-d6366f14.js";import"./VNavigationDrawer-ecf2ad0a.js";import"./ssrBoot-066fc73e.js";import"./VDataTable-e59f8ca5.js";import"./filter-a01fa339.js";import"./VTable-2e4e7897.js";import"./VOverlay-dc43e014.js";import"./lazy-b5e818f7.js";const fe={class:"d-flex align-center gap-2 my-1"},ve={class:"text-h4"},_e={class:"me-3 d-flex gap-3"},ge={class:"app-user-search-filter d-flex align-center flex-wrap gap-4"},be={style:{"inline-size":"10rem"}},we={class:"d-flex align-center"},Ve={key:1},xe={class:"d-flex flex-column"},ye={class:"text-base"},he={class:"text-sm text-medium-emphasis"},Pe={class:"d-flex align-center gap-4"},Ue={class:"text-capitalize"},ke={class:"text-capitalize font-weight-medium"},Se={class:"d-flex align-center justify-sm-space-between justify-center flex-wrap gap-3 pa-5 pt-3"},Ce={class:"text-sm text-disabled mb-0"},gt={__name:"index",setup(Le){const h=ee(),_=c(""),g=c(),b=c(),w=c(),M=c(1),p=c(0),B=c([]),i=c({page:1,itemsPerPage:10,sortBy:[],groupBy:[],search:void 0}),E=[{title:"User",key:"user"},{title:"Role",key:"role"},{title:"Plan",key:"plan"},{title:"Billing",key:"billing"},{title:"Status",key:"status"},{title:"Actions",key:"actions",sortable:!1}],P=()=>{h.fetchUsers({q:_.value,status:w.value,plan:b.value,role:g.value,options:i.value}).then(o=>{B.value=o.data.users,M.value=o.data.totalPage,p.value=o.data.totalUsers,i.value.page=o.data.page}).catch(o=>{console.error(o)})};ce(P);const j=[{title:"Admin",value:"admin"},{title:"Author",value:"author"},{title:"Editor",value:"editor"},{title:"Maintainer",value:"maintainer"},{title:"Subscriber",value:"subscriber"}],F=[{title:"Basic",value:"basic"},{title:"Company",value:"company"},{title:"Enterprise",value:"enterprise"},{title:"Team",value:"team"}],O=[{title:"Pending",value:"pending"},{title:"Active",value:"active"},{title:"Inactive",value:"inactive"}],U=o=>{const l=o.toLowerCase();return l==="subscriber"?{color:"warning",icon:"tabler-circle-check"}:l==="author"?{color:"success",icon:"tabler-user"}:l==="maintainer"?{color:"primary",icon:"tabler-chart-pie-2"}:l==="editor"?{color:"info",icon:"tabler-edit"}:l==="admin"?{color:"secondary",icon:"tabler-device-laptop"}:{color:"primary",icon:"tabler-user"}},q=o=>{const l=o.toLowerCase();return l==="pending"?"warning":l==="active"?"success":l==="inactive"?"secondary":"primary"},V=c(!1),Q=o=>{h.addUser(o),P()},J=[{icon:"tabler-user",color:"primary",title:"Session",stats:"21,459",percentage:29,subtitle:"Total Users"},{icon:"tabler-user-plus",color:"error",title:"Paid Users",stats:"4,567",percentage:18,subtitle:"Last week analytics"},{icon:"tabler-user-check",color:"success",title:"Active Users",stats:"19,860",percentage:-14,subtitle:"Last week analytics"},{icon:"tabler-user-exclamation",color:"warning",title:"Pending Users",stats:"237",percentage:42,subtitle:"Last week analytics"}],N=o=>{h.deleteUser(o),P()};return(o,l)=>{const x=X,K=W,G=$("RouterLink"),D=$("IconBtn");return y(),A("section",null,[t(I,null,{default:a(()=>[(y(),A(ue,null,de(J,e=>t(f,{key:e.title,cols:"12",sm:"6",lg:"3"},{default:a(()=>[t(R,null,{default:a(()=>[t(k,{class:"d-flex justify-space-between"},{default:a(()=>[r("div",null,[r("span",null,n(e.title),1),r("div",fe,[r("h6",ve,n(e.stats),1),r("span",{class:me(e.percentage>0?"text-success":"text-error")},"( "+n(e.percentage>0?"+":"")+" "+n(e.percentage)+"%)",3)]),r("span",null,n(e.subtitle),1)]),t(C,{rounded:"",variant:"tonal",color:e.color,icon:e.icon},null,8,["color","icon"])]),_:2},1024)]),_:2},1024)]),_:2},1024)),64)),t(f,{cols:"12"},{default:a(()=>[t(R,{title:"Search Filter"},{default:a(()=>[t(k,null,{default:a(()=>[t(I,null,{default:a(()=>[t(f,{cols:"12",sm:"4"},{default:a(()=>[t(x,{modelValue:s(g),"onUpdate:modelValue":l[0]||(l[0]=e=>v(g)?g.value=e:null),label:"Select Role",items:j,clearable:"","clear-icon":"tabler-x"},null,8,["modelValue"])]),_:1}),t(f,{cols:"12",sm:"4"},{default:a(()=>[t(x,{modelValue:s(b),"onUpdate:modelValue":l[1]||(l[1]=e=>v(b)?b.value=e:null),label:"Select Plan",items:F,clearable:"","clear-icon":"tabler-x"},null,8,["modelValue"])]),_:1}),t(f,{cols:"12",sm:"4"},{default:a(()=>[t(x,{modelValue:s(w),"onUpdate:modelValue":l[2]||(l[2]=e=>v(w)?w.value=e:null),label:"Select Status",items:O,clearable:"","clear-icon":"tabler-x"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),t(S),t(k,{class:"d-flex flex-wrap py-4 gap-4"},{default:a(()=>[r("div",_e,[t(x,{"model-value":s(i).itemsPerPage,items:[{value:10,title:"10"},{value:25,title:"25"},{value:50,title:"50"},{value:100,title:"100"},{value:-1,title:"All"}],style:{width:"6.25rem"},"onUpdate:modelValue":l[3]||(l[3]=e=>s(i).itemsPerPage=parseInt(e,10))},null,8,["model-value"])]),t(ae),r("div",ge,[r("div",be,[t(K,{modelValue:s(_),"onUpdate:modelValue":l[4]||(l[4]=e=>v(_)?_.value=e:null),placeholder:"Search",density:"compact"},null,8,["modelValue"])]),t(m,{variant:"tonal",color:"secondary","prepend-icon":"tabler-screen-share"},{default:a(()=>[u(" Export ")]),_:1}),t(m,{"prepend-icon":"tabler-plus",onClick:l[5]||(l[5]=e=>V.value=!0)},{default:a(()=>[u(" Add New User ")]),_:1})])]),_:1}),t(S),t(s(le),{"items-per-page":s(i).itemsPerPage,"onUpdate:itemsPerPage":l[7]||(l[7]=e=>s(i).itemsPerPage=e),page:s(i).page,"onUpdate:page":l[8]||(l[8]=e=>s(i).page=e),items:s(B),"items-length":s(p),headers:E,class:"text-no-wrap","onUpdate:options":l[9]||(l[9]=e=>i.value=e)},{"item.user":a(({item:e})=>[r("div",we,[t(C,{size:"34",variant:e.raw.avatar?void 0:"tonal",color:e.raw.avatar?void 0:U(e.raw.role).color,class:"me-3"},{default:a(()=>[e.raw.avatar?(y(),pe(se,{key:0,src:e.raw.avatar},null,8,["src"])):(y(),A("span",Ve,n(s(te)(e.raw.fullName)),1))]),_:2},1032,["variant","color"]),r("div",xe,[r("h6",ye,[t(G,{to:{name:"apps-user-view-id",params:{id:e.raw.id}},class:"font-weight-medium user-list-name"},{default:a(()=>[u(n(e.raw.fullName),1)]),_:2},1032,["to"])]),r("span",he,"@"+n(e.raw.email),1)])])]),"item.role":a(({item:e})=>[r("div",Pe,[t(C,{size:30,color:U(e.raw.role).color,variant:"tonal"},{default:a(()=>[t(d,{size:20,icon:U(e.raw.role).icon},null,8,["icon"])]),_:2},1032,["color"]),r("span",Ue,n(e.raw.role),1)])]),"item.plan":a(({item:e})=>[r("span",ke,n(e.raw.currentPlan),1)]),"item.status":a(({item:e})=>[t(re,{color:q(e.raw.status),size:"small",label:"",class:"text-capitalize"},{default:a(()=>[u(n(e.raw.status),1)]),_:2},1032,["color"])]),"item.actions":a(({item:e})=>[t(D,{onClick:H=>N(e.raw.id)},{default:a(()=>[t(d,{icon:"tabler-trash"})]),_:2},1032,["onClick"]),t(D,null,{default:a(()=>[t(d,{icon:"tabler-edit"})]),_:1}),t(m,{icon:"",variant:"text",size:"small",color:"medium-emphasis"},{default:a(()=>[t(d,{size:"24",icon:"tabler-dots-vertical"}),t(oe,{activator:"parent"},{default:a(()=>[t(ie,null,{default:a(()=>[t(L,{to:{name:"apps-user-view-id",params:{id:e.raw.id}}},{prepend:a(()=>[t(d,{icon:"tabler-eye"})]),default:a(()=>[t(z,null,{default:a(()=>[u("View")]),_:1})]),_:2},1032,["to"]),t(L,{link:""},{prepend:a(()=>[t(d,{icon:"tabler-pencil"})]),default:a(()=>[t(z,null,{default:a(()=>[u("Edit")]),_:1})]),_:1}),t(L,{onClick:H=>N(e.raw.id)},{prepend:a(()=>[t(d,{icon:"tabler-trash"})]),default:a(()=>[t(z,null,{default:a(()=>[u("Delete")]),_:1})]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024)]),_:2},1024)]),bottom:a(()=>[t(S),r("div",Se,[r("p",Ce,n(s(Y)(s(i),s(p))),1),t(ne,{modelValue:s(i).page,"onUpdate:modelValue":l[6]||(l[6]=e=>s(i).page=e),length:Math.ceil(s(p)/s(i).itemsPerPage),"total-visible":o.$vuetify.display.xs?1:Math.ceil(s(p)/s(i).itemsPerPage)},{prev:a(e=>[t(m,T({variant:"tonal",color:"default"},e,{icon:!1}),{default:a(()=>[u(" Previous ")]),_:2},1040)]),next:a(e=>[t(m,T({variant:"tonal",color:"default"},e,{icon:!1}),{default:a(()=>[u(" Next ")]),_:2},1040)]),_:1},8,["modelValue","length","total-visible"])])]),_:1},8,["items-per-page","page","items","items-length"])]),_:1}),t(Z,{isDrawerOpen:s(V),"onUpdate:isDrawerOpen":l[10]||(l[10]=e=>v(V)?V.value=e:null),onUserData:Q},null,8,["isDrawerOpen"])]),_:1})]),_:1})])}}};export{gt as default};
//# sourceMappingURL=index-8dbbf681.js.map