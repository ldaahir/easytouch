import{G as I,f as C,d as E,$ as Q,I as i,J as _,K as t,L as v,M as b,N as w,u as d,k as e,P as s,R as l,Q as p,_ as q,ad as te,ae as se,q as O,n as J,T as H}from"./frappe-ui-b8f10d89.js";import{_ as z}from"./MoreBtn-16e45dce.js";import{i as A,g as y,o as L,y as ae,G as X,w as le,bu as oe,bv as ne,bw as ie,bx as re}from"./index-e43e3799.js";import{a as D,V as B}from"./VRow-b8bac363.js";import{V,a as U,b as N,d as $}from"./VCard-bd92c839.js";import{V as j}from"./VAvatar-26ec77a4.js";import{V as F}from"./VChip-c30ae960.js";import{V as S,a as P,b as T,c as Y}from"./VList-ce82f9df.js";import{V as ce,a as R}from"./VTimelineItem-900ee0b2.js";import{_ as de}from"./AppTextField-7c20f864.js";import{x as ue,p as pe,s as _e}from"./xamarin-79c17898.js";import{V as Z}from"./VSpacer-b05e1fe2.js";import{V as W}from"./VDivider-7eec4b6d.js";import{w as me}from"./VDataTable-e59f8ca5.js";import{V as fe}from"./VPagination-537b9129.js";import{V as ee}from"./VImg-dcfe0017.js";import{V as he}from"./VTooltip-e30b7516.js";import{b as K}from"./route-block-83d24a4e.js";import{V as ge,a as ve}from"./VTabs-bc7af8d5.js";import{a as M,V as xe}from"./VWindowItem-52eb92ae.js";import"./VMenu-e207a306.js";import"./forwardRefs-bb5e4b03.js";import"./VOverlay-dc43e014.js";import"./lazy-b5e818f7.js";import"./easing-512405f0.js";import"./transition-61bfbac1.js";import"./dialog-transition-478eb809.js";import"./ssrBoot-066fc73e.js";import"./VInput-545a0bfa.js";import"./VTextField-61b1d2aa.js";/* empty css                   */import"./VField-5b446628.js";import"./VCounter-cc8846c3.js";import"./VCheckboxBtn-0ece9886.js";import"./VSelectionControl-bcc9ca9d.js";import"./VSelect-25505b64.js";import"./filter-a01fa339.js";import"./VTable-2e4e7897.js";import"./VSlideGroup-cf52aaa2.js";const be={class:"vertical-more"},ye={class:"mt-4 mb-0"},we={class:"text-body-1"},$e={class:"d-flex align-center flex-wrap gap-2 mt-2"},Ve={class:"d-flex justify-space-around"},je={class:"text-center"},ke={class:"text-h6"},De=s("span",{class:"text-body-1"},"Projects",-1),Pe={class:"text-center"},Te={class:"text-h6"},Ce=s("span",{class:"text-body-1"},"Tasks",-1),Ae={class:"text-center"},ze={class:"text-h6"},Se=s("span",{class:"text-body-1"},"Connections",-1),Be={class:"d-flex justify-center gap-4 mt-5"},Ie={__name:"index",setup(f){const n=I(),r=C([]);return E(n,()=>{n.params.tab==="connections"&&L.get("/pages/profile",{params:{tab:n.params.tab}}).then(o=>{r.value=o.data})},{immediate:!0}),(o,u)=>{const c=z,h=Q("IconBtn");return i(),_(B,null,{default:t(()=>[(i(!0),v(b,null,w(d(r),a=>(i(),_(D,{key:a.name,sm:"6",lg:"4",cols:"12"},{default:t(()=>[e(V,null,{default:t(()=>[s("div",be,[e(c,{"menu-list":[{title:"Share connection",value:"Share connection"},{title:"Block connection",value:"Block connection"},{type:"divider",class:"my-2"},{title:"Delete",value:"Delete",class:"text-error"}],"item-props":""})]),e(U,null,{default:t(()=>[e(N,{class:"d-flex flex-column align-center justify-center"},{default:t(()=>[e(j,{size:"100",image:a.avatar},null,8,["image"]),s("p",ye,l(a.name),1),s("span",we,l(a.designation),1),s("div",$e,[(i(!0),v(b,null,w(a.chips,g=>(i(),_(F,{key:g.title,label:"",color:g.color,size:"small"},{default:t(()=>[p(l(g.title),1)]),_:2},1032,["color"]))),128))])]),_:2},1024)]),_:2},1024),e($,null,{default:t(()=>[s("div",Ve,[s("div",je,[s("h6",ke,l(a.projects),1),De]),s("div",Pe,[s("h6",Te,l(a.tasks),1),Ce]),s("div",Ae,[s("h6",ze,l(a.connections),1),Se])]),s("div",Be,[e(A,{"prepend-icon":a.isConnected?"tabler-user-check":"tabler-user-plus",variant:a.isConnected?"elevated":"tonal"},{default:t(()=>[p(l(a.isConnected?"connected":"connect"),1)]),_:2},1032,["prepend-icon","variant"]),e(h,{variant:"tonal",class:"rounded"},{default:t(()=>[e(y,{icon:"tabler-mail"})]),_:1})])]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:1})}}};const G=f=>(te("data-v-18191724"),f=f(),se(),f),Le=G(()=>s("p",{class:"text-xs"}," ABOUT ",-1)),Re={class:"font-weight-medium me-1"},Me=G(()=>s("p",{class:"text-xs mt-5"}," CONTACTS ",-1)),Ee={class:"font-weight-medium me-1"},He=G(()=>s("p",{class:"text-xs mt-5"}," TEAMS ",-1)),Ue={class:"font-weight-medium me-1"},Ne=G(()=>s("p",{class:"text-xs"}," OVERVIEW ",-1)),Fe={class:"font-weight-medium me-1"},Ge={__name:"About",props:{data:{type:null,required:!0}},setup(f){const n=f;return(r,x)=>(i(),v(b,null,[e(V,{class:"mb-4"},{default:t(()=>[e($,null,{default:t(()=>[Le,e(S,{class:"card-list text-medium-emphasis"},{default:t(()=>[(i(!0),v(b,null,w(n.data.about,o=>(i(),_(P,{key:o.property},{prepend:t(()=>[e(y,{icon:o.icon,size:"20",class:"me-2"},null,8,["icon"])]),default:t(()=>[e(T,null,{default:t(()=>[s("span",Re,l(o.property)+":",1),s("span",null,l(o.value),1)]),_:2},1024)]),_:2},1024))),128))]),_:1}),Me,e(S,{class:"card-list text-medium-emphasis"},{default:t(()=>[(i(!0),v(b,null,w(n.data.contacts,o=>(i(),_(P,{key:o.property},{prepend:t(()=>[e(y,{icon:o.icon,size:"20",class:"me-2"},null,8,["icon"])]),default:t(()=>[e(T,null,{default:t(()=>[s("span",Ee,l(o.property)+":",1),s("span",null,l(o.value),1)]),_:2},1024)]),_:2},1024))),128))]),_:1}),He,e(S,{class:"card-list text-medium-emphasis"},{default:t(()=>[(i(!0),v(b,null,w(n.data.teams,o=>(i(),_(P,{key:o.property},{prepend:t(()=>[e(y,{icon:o.icon,size:"20",color:o.color,class:"me-2"},null,8,["icon","color"])]),default:t(()=>[e(T,null,{default:t(()=>[s("span",Ue,l(o.property)+":",1),s("span",null,l(o.value),1)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1}),e(V,null,{default:t(()=>[e($,null,{default:t(()=>[Ne,e(S,{class:"card-list text-medium-emphasis"},{default:t(()=>[(i(!0),v(b,null,w(n.data.overview,o=>(i(),_(P,{key:o.property},{prepend:t(()=>[e(y,{icon:o.icon,size:"20",class:"me-2"},null,8,["icon"])]),default:t(()=>[e(T,null,{default:t(()=>[s("span",Fe,l(o.property)+":",1),s("span",null,l(o.value),1)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1})],64))}},Oe=q(Ge,[["__scopeId","data-v-18191724"]]),We=s("div",{class:"d-flex justify-space-between align-center flex-wrap"},[s("span",{class:"app-timeline-title"}," Client Meeting "),s("span",{class:"app-timeline-meta"},"Today")],-1),qe=s("p",{class:"app-timeline-text mb-2"}," Project meeting with john @10:15am ",-1),Je={class:"d-flex align-center mt-3"},Ke=s("div",null,[s("h6",{class:"text-sm font-weight-medium mb-n1"}," Lester McCarthy (Client) "),s("span",{class:"app-timeline-meta"}," CEO of Infidel ")],-1),Qe=s("div",{class:"d-flex justify-space-between align-center flex-wrap"},[s("span",{class:"app-timeline-title"}," Create a new project for client 😎 "),s("span",{class:"app-timeline-meta"},"2 Day Ago")],-1),Xe=s("p",{class:"app-timeline-text mb-1"}," Add files to new design folder ",-1),Ye=s("div",{class:"d-flex justify-space-between align-center flex-wrap"},[s("span",{class:"app-timeline-title"}," Shared 2 New Project Files "),s("span",{class:"app-timeline-meta"},"6 Day Ago")],-1),Ze=s("p",{class:"app-timeline-text mb-0"}," Sent by Mollie Dixon ",-1),et={class:"d-flex align-center mt-3"},tt=s("h6",{class:"font-weight-medium text-xs me-3"}," App Guidelines ",-1),st=s("h6",{class:"font-weight-medium text-xs"}," Testing Results ",-1),at=s("div",{class:"d-flex justify-space-between align-center flex-wrap"},[s("span",{class:"app-timeline-title"}," Project status updated "),s("span",{class:"app-timeline-meta"},"10 Day Ago")],-1),lt=s("p",{class:"app-timeline-text mb-1"}," WooCommerce iOS App Completed ",-1),ot={__name:"ActivityTimeline",setup(f){return(n,r)=>{const x=z;return i(),_(V,null,{default:t(()=>[e(U,null,{prepend:t(()=>[e(y,{icon:"tabler-timeline"})]),append:t(()=>[s("div",null,[e(x,{"menu-list":[{title:"Share timeline",value:"Share timeline"},{title:"Suggest edits",value:"Suggest edits"},{title:"Report bug",value:"Report bug"}]})])]),default:t(()=>[e(N,null,{default:t(()=>[p("Activity Timeline")]),_:1})]),_:1}),e($,null,{default:t(()=>[e(ce,{density:"compact",align:"start","truncate-line":"both",class:"v-timeline-density-compact"},{default:t(()=>[e(R,{"dot-color":"warning",size:"x-small"},{default:t(()=>[We,qe,s("div",Je,[e(j,{size:"38",class:"me-3",image:d(ae)},null,8,["image"]),Ke])]),_:1}),e(R,{"dot-color":"primary",size:"x-small"},{default:t(()=>[Qe,Xe]),_:1}),e(R,{"dot-color":"info",size:"x-small"},{default:t(()=>[Ye,Ze,s("div",et,[e(y,{color:"warning",icon:"tabler-file-text",size:"20",class:"me-2"}),tt,e(y,{color:"success",icon:"tabler-table",size:"20",class:"me-2"}),st])]),_:1}),e(R,{"dot-color":"secondary",size:"x-small"},{default:t(()=>[at,lt]),_:1})]),_:1})]),_:1})]),_:1})}}};const nt={class:"me-n2"},it={__name:"Connection",props:{connectionsData:{type:Array,required:!0}},setup(f){const n=f,r=[{title:"Share connections",value:"Share connections"},{title:"Suggest edits",value:"Suggest edits"},{title:"Report Bug",value:"Report Bug"}];return(x,o)=>{const u=z;return i(),_(V,{title:"Connection"},{append:t(()=>[s("div",nt,[e(u,{"menu-list":r})])]),default:t(()=>[e($,null,{default:t(()=>[e(S,{class:"card-list"},{default:t(()=>[(i(!0),v(b,null,w(n.connectionsData,c=>(i(),_(P,{key:c.name},{prepend:t(()=>[e(j,{size:"38",image:c.avatar},null,8,["image"])]),append:t(()=>[e(A,{icon:"",size:"30",class:"rounded",variant:c.isFriend?"elevated":"tonal"},{default:t(()=>[e(y,{size:"20",icon:c.isFriend?"tabler-user-x":"tabler-user-check"},null,8,["icon"])]),_:2},1032,["variant"])]),default:t(()=>[e(T,{class:"font-weight-medium"},{default:t(()=>[p(l(c.name),1)]),_:2},1024),e(Y,null,{default:t(()=>[p(l(c.connections)+" Connections",1)]),_:2},1024)]),_:2},1024))),128)),e(P,null,{default:t(()=>[e(T,null,{default:t(()=>[e(A,{block:"",variant:"text"},{default:t(()=>[p(" View all connections ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}}},rt=q(it,[["__scopeId","data-v-e74d309b"]]),ct={style:{"inline-size":"272px"}},dt={class:"d-flex"},ut={class:"font-weight-medium mb-0"},pt={class:"text-xs text-medium-emphasis mb-0"},_t={class:"d-flex align-center gap-3"},mt={class:"flex-grow-1"},ft={class:"d-flex align-center justify-space-between flex-wrap gap-3 pa-5 pt-3"},ht={class:"text-sm text-disabled mb-0"},gt={__name:"ProjectList",setup(f){const n=[{title:"PROJECT",key:"name"},{title:"LEADER",key:"leader"},{title:"PROGRESS",key:"progress"},{title:"Action",key:"Action",sortable:!1}],r=[{logo:oe,name:"BGC eCommerce App",project:"React Project",leader:"Eileen",progress:78,hours:"18:42"},{logo:ne,name:"Falcon Logo Design",project:"Figma Project",leader:"Owen",progress:25,hours:"20:42"},{logo:ie,name:"Dashboard Design",project:"Vuejs Project",leader:"Keith",progress:62,hours:"120:87"},{logo:ue,name:"Foodista mobile app",project:"Xamarin Project",leader:"Merline",progress:8,hours:"120:87"},{logo:pe,name:"Dojo Email App",project:"Python Project",leader:"Harmonia",progress:51,hours:"230:10"},{logo:_e,name:"Blockchain Website",project:"Sketch Project",leader:"Allyson",progress:92,hours:"342:41"},{logo:re,name:"Hoffman Website",project:"HTML Project",leader:"Georgie",progress:80,hours:"12:45"}],x=h=>h<=25?"error":h>25&&h<=50?"warning":h>50&&h<=75?"primary":h>75&&h<=100?"success":"secondary",o=C(""),u=C({page:1,itemsPerPage:5}),c=[{title:"Download",value:"Download"},{title:"Delete",value:"Delete"},{title:"View",value:"View"}];return(h,a)=>{const g=de,k=z;return i(),_(V,null,{default:t(()=>[e(U,null,{append:t(()=>[s("div",ct,[e(g,{modelValue:d(o),"onUpdate:modelValue":a[0]||(a[0]=m=>O(o)?o.value=m:null),placeholder:"Search"},null,8,["modelValue"])])]),default:t(()=>[e(N,null,{default:t(()=>[p(" Project List")]),_:1}),e(Z)]),_:1}),e(W),e(d(me),{page:d(u).page,"onUpdate:page":a[2]||(a[2]=m=>d(u).page=m),headers:n,"items-per-page":d(u).itemsPerPage,items:r,"hide-default-footer":"",search:d(o),"onUpdate:options":a[3]||(a[3]=m=>u.value=m)},{"item.name":t(({item:m})=>[s("div",dt,[e(j,{size:34,class:"me-3",image:m.raw.logo},null,8,["image"]),s("div",null,[s("p",ut,l(m.raw.name),1),s("p",pt,l(m.raw.project),1)])])]),"item.progress":t(({item:m})=>[s("div",_t,[s("div",mt,[e(X,{height:6,"model-value":m.raw.progress,rounded:"",color:x(m.raw.progress)},null,8,["model-value","color"])]),s("span",null,l(m.raw.progress)+"%",1)])]),"item.Action":t(()=>[e(k,{color:void 0,"menu-list":c})]),bottom:t(()=>[e(W),s("div",ft,[s("p",ht,l(d(le)(d(u),r.length)),1),e(fe,{modelValue:d(u).page,"onUpdate:modelValue":a[1]||(a[1]=m=>d(u).page=m),"total-visible":Math.ceil(r.length/5),length:Math.ceil(r.length/5)},{next:t(m=>[e(A,J(m,{icon:!1,variant:"tonal",color:"default"}),{default:t(()=>[p(" Next ")]),_:2},1040)]),prev:t(m=>[e(A,J(m,{icon:!1,variant:"tonal",color:"default"}),{default:t(()=>[p(" Previous ")]),_:2},1040)]),_:1},8,["modelValue","total-visible","length"])])]),_:1},8,["page","items-per-page","search"])]),_:1})}}};const vt={class:"me-n2"},xt={__name:"Teams",props:{teamsData:{type:Array,required:!0}},setup(f){const n=f,r=[{title:"Share connections",value:"Share connections"},{title:"Suggest edits",value:"Suggest edits"},{title:"Report Bug",value:"Report Bug"}];return(x,o)=>{const u=z;return i(),_(V,{title:"Teams"},{append:t(()=>[s("div",vt,[e(u,{"menu-list":r})])]),default:t(()=>[e($,null,{default:t(()=>[e(S,{class:"card-list"},{default:t(()=>[(i(!0),v(b,null,w(n.teamsData,c=>(i(),_(P,{key:c.title},{prepend:t(()=>[e(j,{size:"38",image:c.avatar},null,8,["image"])]),append:t(()=>[e(F,{label:"",color:c.ChipColor,size:"small",class:"font-weight-medium"},{default:t(()=>[p(l(c.chipText),1)]),_:2},1032,["color"])]),default:t(()=>[e(T,{class:"font-weight-medium"},{default:t(()=>[p(l(c.title),1)]),_:2},1024),e(Y,null,{default:t(()=>[p(l(c.members)+" Members",1)]),_:2},1024)]),_:2},1024))),128)),e(P,null,{default:t(()=>[e(T,null,{default:t(()=>[e(A,{block:"",variant:"text"},{default:t(()=>[p(" View all teams ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}}},bt=q(xt,[["__scopeId","data-v-e80544bd"]]),yt={__name:"index",setup(f){const n=I(),r=C();return E(n,()=>{n.params.tab==="profile"&&L.get("/pages/profile",{params:{tab:n.params.tab}}).then(o=>{r.value=o.data})},{immediate:!0}),(o,u)=>d(r)?(i(),_(B,{key:0},{default:t(()=>[e(D,{md:"4",cols:"12"},{default:t(()=>[e(Oe,{data:d(r)},null,8,["data"])]),_:1}),e(D,{cols:"12",md:"8"},{default:t(()=>[e(B,null,{default:t(()=>[e(D,{cols:"12"},{default:t(()=>[e(ot)]),_:1}),e(D,{cols:"12",md:"6"},{default:t(()=>[e(rt,{"connections-data":d(r).connections},null,8,["connections-data"])]),_:1}),e(D,{cols:"12",md:"6"},{default:t(()=>[e(bt,{"teams-data":d(r).teamsTech},null,8,["teams-data"])]),_:1}),e(D,{cols:"12"},{default:t(()=>[e(gt)]),_:1})]),_:1})]),_:1})]),_:1})):H("",!0)}},wt={class:"mb-0"},$t=s("span",{class:"font-weight-medium me-1"},"Client:",-1),Vt={class:"mt-n8 me-n3"},jt={class:"d-flex align-center justify-space-between flex-wrap gap-x-2 gap-y-4"},kt={class:"pa-2 bg-var-theme-background rounded"},Dt={class:"text-base font-weight-medium"},Pt={class:"text-body-1"},Tt=s("span",null,"Total Budget",-1),Ct={class:"text-base font-weight-medium"},At={class:"text-body-1"},zt={class:"text-base font-weight-medium mb-1"},St={class:"text-body-1"},Bt={class:"mt-4 mb-0 clamp-text"},It={class:"d-flex align-center justify-space-between flex-wrap gap-2"},Lt={class:"text-base font-weight-medium"},Rt={class:"text-body-1"},Mt={class:"d-flex align-center justify-space-between flex-wrap text-sm mt-4 mb-2"},Et={class:"d-flex align-center justify-space-between flex-wrap gap-2 mt-3"},Ht={class:"d-flex align-center"},Ut={class:"v-avatar-group me-2"},Nt={class:"text-xs"},Ft={__name:"index",setup(f){const n=I(),r=C([]);E(n,()=>{n.params.tab==="projects"&&L.get("/pages/profile",{params:{tab:n.params.tab}}).then(u=>{r.value=u.data})},{immediate:!0});const o=[{title:"Rename Project",value:"Rename Project"},{title:"View Details",value:"View Details"},{title:"Add to favorites",value:"Add to favorites"},{type:"divider",class:"my-2"},{title:"Leave Project",value:"Leave Project",class:"text-error"}];return(u,c)=>{const h=z;return d(r)?(i(),_(B,{key:0},{default:t(()=>[(i(!0),v(b,null,w(d(r),a=>(i(),_(D,{key:a.title,cols:"12",sm:"6",lg:"4"},{default:t(()=>[e(V,null,{default:t(()=>[e(U,null,{prepend:t(()=>[e(j,{image:a.avatar},null,8,["image"])]),append:t(()=>[s("div",Vt,[e(h,{"item-props":"","menu-list":o})])]),default:t(()=>[e(N,null,{default:t(()=>[p(l(a.title),1)]),_:2},1024),s("p",wt,[$t,s("span",null,l(a.client),1)])]),_:2},1024),e($,null,{default:t(()=>[s("div",jt,[s("div",kt,[s("h6",Dt,[p(l(a.budgetSpent)+" ",1),s("span",Pt,"/ "+l(a.budget),1)]),Tt]),s("div",null,[s("h6",Ct,[p(" Start Date: "),s("span",At,l(a.startDate),1)]),s("h6",zt,[p(" Deadline: "),s("span",St,l(a.deadline),1)])])]),s("p",Bt,l(a.description),1)]),_:2},1024),e(W),e($,null,{default:t(()=>[s("div",It,[s("h6",Lt,[p(" All Hours: "),s("span",Rt,l(a.hours),1)]),e(F,{label:"",color:a.chipColor,size:"small"},{default:t(()=>[p(l(a.daysLeft)+" Days left ",1)]),_:2},1032,["color"])]),s("div",Mt,[s("span",null,"Task: "+l(a.tasks),1),s("span",null,l(Math.round(a.completedTask/a.totalTask*100))+"% Completed",1)]),e(X,{rounded:"","rounded-bar":"",height:"8","model-value":a.completedTask,max:a.totalTask,color:"primary"},null,8,["model-value","max"]),s("div",Et,[s("div",Ht,[s("div",Ut,[(i(!0),v(b,null,w(a.avatarGroup,g=>(i(),_(j,{key:g.name,image:g.avatar,size:32},null,8,["image"]))),128))]),s("span",Nt,l(a.members),1)]),s("span",null,[e(y,{icon:"tabler-message-dots",class:"me-1"}),s("span",null,l(a.comments),1)])])]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:1})):H("",!0)}}},Gt={class:"me-n3"},Ot={class:"text-base"},Wt={class:"v-avatar-group"},qt={class:"d-flex align-center gap-2"},Jt={__name:"index",setup(f){const n=I(),r=C([]);E(n,()=>{n.params.tab==="teams"&&L.get("/pages/profile",{params:{tab:n.params.tab}}).then(u=>{r.value=u.data})},{immediate:!0});const o=[{title:"Rename Project",value:"Rename Project"},{title:"View Details",value:"View Details"},{title:"Add to favorites",value:"Add to favorites"},{type:"divider",class:"my-2"},{title:"Leave Project",value:"Leave Project",class:"text-error"}];return(u,c)=>{const h=Q("IconBtn"),a=z;return d(r)?(i(),_(B,{key:0},{default:t(()=>[(i(!0),v(b,null,w(d(r),g=>(i(),_(D,{key:g.title,cols:"12",md:"6",lg:"4"},{default:t(()=>[e(V,{title:g.title},{prepend:t(()=>[e(j,{size:"38",image:g==null?void 0:g.avatar},null,8,["image"])]),append:t(()=>[s("div",Gt,[e(h,null,{default:t(()=>[e(y,{size:"20",icon:"tabler-star",class:"text-disabled"})]),_:1}),e(a,{"menu-list":o,"item-props":"",density:"comfortable"})])]),default:t(()=>[e($,null,{default:t(()=>[s("span",Ot,l(g.description),1)]),_:2},1024),e($,{class:"d-flex align-center"},{default:t(()=>[s("div",Wt,[(i(!0),v(b,null,w(g.avatarGroup,k=>(i(),_(j,{key:k.name,size:"32"},{default:t(()=>[e(ee,{src:k.avatar},null,8,["src"]),e(he,{activator:"parent",location:"top"},{default:t(()=>[p(l(k.name),1)]),_:2},1024)]),_:2},1024))),128))]),e(Z),s("div",qt,[(i(!0),v(b,null,w(g.chips,k=>(i(),_(F,{key:k.title,label:"",color:k.color,size:"small",class:"font-weight-medium"},{default:t(()=>[p(l(k.title),1)]),_:2},1032,["color"]))),128))])]),_:2},1024)]),_:2},1032,["title"])]),_:2},1024))),128))]),_:1})):H("",!0)}}};const Kt={class:"d-flex h-0"},Qt={class:"user-profile-info w-100 mt-16 pt-6 pt-sm-0 mt-sm-0"},Xt={class:"text-h6 text-center text-sm-start font-weight-medium mb-3"},Yt={class:"d-flex align-center justify-center justify-sm-space-between flex-wrap gap-4"},Zt={class:"d-flex flex-wrap justify-center justify-sm-start flex-grow-1 gap-2"},es={class:"d-flex"},ts={class:"text-body-1"},ss={class:"d-flex align-center"},as={class:"text-body-1"},ls={class:"d-flex align-center"},os={class:"text-body-1"},ns={__name:"UserProfileHeader",setup(f){const n=C();return(()=>{L.get("/pages/profile-header").then(x=>{n.value=x.data})})(),(x,o)=>d(n)?(i(),_(V,{key:0},{default:t(()=>[e(ee,{src:d(n).coverImg,"min-height":"125","max-height":"250",cover:""},null,8,["src"]),e($,{class:"d-flex align-bottom flex-sm-row flex-column justify-center gap-x-5"},{default:t(()=>{var u,c,h,a;return[s("div",Kt,[e(j,{rounded:"",size:"120",image:d(n).profileImg,class:"user-profile-avatar mx-auto"},null,8,["image"])]),s("div",Qt,[s("h6",Xt,l((u=d(n))==null?void 0:u.fullName),1),s("div",Yt,[s("div",Zt,[s("span",es,[e(y,{size:"20",icon:"tabler-color-swatch",class:"me-1"}),s("span",ts,l((c=d(n))==null?void 0:c.designation),1)]),s("span",ss,[e(y,{size:"20",icon:"tabler-map-pin",class:"me-2"}),s("span",as,l((h=d(n))==null?void 0:h.location),1)]),s("span",ls,[e(y,{size:"20",icon:"tabler-calendar",class:"me-2"}),s("span",os,l((a=d(n))==null?void 0:a.joiningDate),1)])]),e(A,{"prepend-icon":"tabler-check"},{default:t(()=>[p(" Connected ")]),_:1})])])]}),_:1})]),_:1})):H("",!0)}},is={__name:"[tab]",setup(f){const n=I(),r=C(n.params.tab),x=[{title:"Profile",icon:"tabler-user-check",tab:"profile"},{title:"Team",icon:"tabler-users",tab:"teams"},{title:"Projects",icon:"tabler-layout-grid",tab:"projects"},{title:"Connections",icon:"tabler-link",tab:"connections"}];return(o,u)=>(i(),v("div",null,[e(ns,{class:"mb-5"}),e(ge,{modelValue:d(r),"onUpdate:modelValue":u[0]||(u[0]=c=>O(r)?r.value=c:null),class:"v-tabs-pill"},{default:t(()=>[(i(),v(b,null,w(x,c=>e(ve,{key:c.icon,value:c.tab,to:{name:"pages-user-profile-tab",params:{tab:c.tab}}},{default:t(()=>[e(y,{size:"20",start:"",icon:c.icon},null,8,["icon"]),p(" "+l(c.title),1)]),_:2},1032,["value","to"])),64))]),_:1},8,["modelValue"]),e(xe,{modelValue:d(r),"onUpdate:modelValue":u[1]||(u[1]=c=>O(r)?r.value=c:null),class:"mt-5 disable-tab-transition",touch:!1},{default:t(()=>[e(M,{value:"profile"},{default:t(()=>[e(yt)]),_:1}),e(M,{value:"teams"},{default:t(()=>[e(Jt)]),_:1}),e(M,{value:"projects"},{default:t(()=>[e(Ft)]),_:1}),e(M,{value:"connections"},{default:t(()=>[e(Ie)]),_:1})]),_:1},8,["modelValue"])]))}};typeof K=="function"&&K(is);export{is as default};
//# sourceMappingURL=_tab_-a156f33f.js.map
