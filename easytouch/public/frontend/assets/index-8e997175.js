var R=(_,h,i)=>new Promise((r,y)=>{var C=d=>{try{n(i.next(d))}catch(v){y(v)}},S=d=>{try{n(i.throw(d))}catch(v){y(v)}},n=d=>d.done?r(d.value):Promise.resolve(d.value).then(C,S);n((i=i.apply(_,h)).next())});import{_ as pe}from"./MoreBtn-16e45dce.js";import{f as A,I as f,J as T,K as t,k as e,P as l,u as o,q as H,Q as E,$ as oe,L as k,M as L,N as I,n as de,R as g,T as se,G as fe,X as P,Y as O,ac as B,S as q,c as Q,d as ce,W as Ve}from"./frappe-ui-b8f10d89.js";import{g as u,r as we,i as G,P as ne,v as Ee,o as te}from"./index-e43e3799.js";import{_ as Se}from"./AppTextField-7c20f864.js";import{a as Me,V as W,d as ae}from"./VCard-bd92c839.js";import{V as N}from"./VSpacer-b05e1fe2.js";import{V as z}from"./VDivider-7eec4b6d.js";import{V as Le}from"./VTextarea-1637f920.js";import{V as J}from"./VMenu-e207a306.js";import{V as K,a as X,b as Y}from"./VList-ce82f9df.js";import{V as ve}from"./VChip-c30ae960.js";import{V as Z}from"./VBadge-6330fe5b.js";import{f as De,b as Te}from"./formatters-9ef7de78.js";import{V as _e}from"./VAvatar-26ec77a4.js";import{V as ie}from"./VImg-dcfe0017.js";import{V as he}from"./VNavigationDrawer-ecf2ad0a.js";import{u as Ie,V as ze,a as Ae}from"./VMain-29ad2da6.js";import{b as me}from"./route-block-83d24a4e.js";import{V as Re}from"./VTextField-61b1d2aa.js";import{V as ue}from"./VCheckbox-7c4598f5.js";import{V as le}from"./VTooltip-e30b7516.js";import"./VInput-545a0bfa.js";import"./transition-61bfbac1.js";/* empty css                   */import"./VField-5b446628.js";import"./easing-512405f0.js";import"./forwardRefs-bb5e4b03.js";import"./VCounter-cc8846c3.js";import"./VOverlay-dc43e014.js";import"./lazy-b5e818f7.js";import"./dialog-transition-478eb809.js";import"./ssrBoot-066fc73e.js";import"./index-61e4df1a.js";import"./VCheckboxBtn-0ece9886.js";import"./VSelectionControl-bcc9ca9d.js";const Be={class:"d-flex align-center"},Ne=l("span",{class:"font-weight-medium"},"Compose Mail",-1),Ue={class:"pe-5"},Fe=l("div",{class:"text-sm text-disabled"}," To: ",-1),Pe=l("span",{class:"cursor-pointer text-primary"},"Cc | Bcc",-1),Oe=l("div",{class:"text-sm text-disabled"}," Subject: ",-1),je={class:"d-flex align-center px-5 py-4"},qe={__name:"ComposeDialog",emits:["close"],setup(_,{emit:h}){const i=A(""),r=A(""),y=A(""),C=A(!1),S=()=>{i.value=r.value=y.value=""};return(n,d)=>{const v=Se;return f(),T(W,{class:"email-compose-dialog"},{default:t(()=>[e(Me,{class:"py-3 px-5"},{default:t(()=>[l("div",Be,[Ne,e(N),e(u,{size:"20",icon:"tabler-minus",class:"me-4",onClick:d[0]||(d[0]=b=>n.$emit("close"))}),e(u,{size:"20",icon:"tabler-x",onClick:d[1]||(d[1]=b=>{n.$emit("close"),S()})})])]),_:1}),l("div",Ue,[e(v,{modelValue:o(i),"onUpdate:modelValue":d[2]||(d[2]=b=>H(i)?i.value=b:null),density:"compact",class:"elevation-0"},{"prepend-inner":t(()=>[Fe]),append:t(()=>[Pe]),_:1},8,["modelValue"])]),e(z),e(v,{modelValue:o(r),"onUpdate:modelValue":d[3]||(d[3]=b=>H(r)?r.value=b:null),density:"compact"},{"prepend-inner":t(()=>[Oe]),_:1},8,["modelValue"]),e(z),e(Le,{modelValue:o(y),"onUpdate:modelValue":d[4]||(d[4]=b=>H(y)?y.value=b:null),placeholder:"Message"},null,8,["modelValue"]),e(z),l("div",je,[e(we,{color:"primary",divided:"",density:"comfortable"},{default:t(()=>[e(G,null,{default:t(()=>[E("Send")]),_:1}),e(G,{icon:"",onClick:d[5]||(d[5]=()=>C.value=!o(C))},{default:t(()=>[e(u,{icon:"tabler-send ",size:"18"}),e(J,{activator:"parent"},{default:t(()=>[e(K,{items:["Schedule Mail","Save Draft"]})]),_:1})]),_:1})]),_:1}),e(u,{icon:"tabler-link",class:"ms-4 cursor-pointer"}),e(N),e(G,{icon:"",variant:"text",color:"default",density:"comfortable"},{default:t(()=>[e(u,{icon:"tabler-dots-vertical",size:"20"})]),_:1}),e(G,{icon:"",variant:"text",color:"default",density:"comfortable",onClick:d[6]||(d[6]=b=>{n.$emit("close"),S()})},{default:t(()=>[e(u,{icon:"tabler-trash",size:"20"})]),_:1})])]),_:1})}}};const Ge={class:"d-flex flex-column h-100"},He={class:"px-6 pb-5 pt-6"},Je={class:"email-filters"},Ke=["href","onClick"],Qe={class:"font-weight-medium"},We={class:"email-labels"},Xe=l("li",{class:"text-xs d-block text-uppercase text-disabled mt-6 mb-2"}," LABELS ",-1),Ye=["href","onClick"],Ze={class:"font-weight-medium"},et={__name:"EmailLeftSidebarContent",emits:["toggleComposeDialogVisibility"],setup(_,{emit:h}){const i=[{title:"Inbox",prependIcon:"tabler-mail",to:{name:"apps-email"},badge:{content:"4",color:"primary"}},{title:"Sent",prependIcon:"tabler-send",to:{name:"apps-email-filter",params:{filter:"sent"}}},{title:"Draft",prependIcon:"tabler-pencil",to:{name:"apps-email-filter",params:{filter:"draft"}},badge:{content:"2",color:"warning"}},{title:"Starred",prependIcon:"tabler-star",to:{name:"apps-email-filter",params:{filter:"starred"}},badge:{content:"9",color:"success"}},{title:"Spam",prependIcon:"tabler-info-circle",to:{name:"apps-email-filter",params:{filter:"spam"}}},{title:"Trash",prependIcon:"tabler-trash",to:{name:"apps-email-filter",params:{filter:"trashed"}}}],r=[{title:"Personal",color:"success",to:{name:"apps-email-label",params:{label:"personal"}}},{title:"Company",color:"primary",to:{name:"apps-email-label",params:{label:"company"}}},{title:"Important",color:"warning",to:{name:"apps-email-label",params:{label:"important"}}},{title:"Private",color:"error",to:{name:"apps-email-label",params:{label:"private"}}}];return(y,C)=>{const S=oe("RouterLink");return f(),k("div",Ge,[l("div",He,[e(G,{block:"",onClick:C[0]||(C[0]=n=>y.$emit("toggleComposeDialogVisibility"))},{default:t(()=>[E(" Compose ")]),_:1})]),e(o(ne),{options:{wheelPropagation:!1},class:"h-100"},{default:t(()=>[l("ul",Je,[(f(),k(L,null,I(i,n=>e(S,{key:n.title,class:"d-flex align-center cursor-pointer",to:n.to,custom:""},{default:t(({isActive:d,href:v,navigate:b})=>{var m;return[l("li",de(y.$attrs,{href:v,class:[d&&"email-filter-active text-primary","d-flex align-center cursor-pointer"],onClick:b}),[e(u,{icon:n.prependIcon,class:"me-2",size:"20"},null,8,["icon"]),l("span",Qe,g(n.title),1),e(N),(m=n.badge)!=null&&m.content?(f(),T(ve,{key:0,color:n.badge.color,pill:""},{default:t(()=>[E(g(n.badge.content),1)]),_:2},1032,["color"])):se("",!0)],16,Ke)]}),_:2},1032,["to"])),64))]),l("ul",We,[Xe,(f(),k(L,null,I(r,n=>e(S,{key:n.title,class:"d-flex align-center",to:n.to,custom:""},{default:t(({isActive:d,href:v,navigate:b})=>[l("li",de(y.$attrs,{href:v,class:[d&&"email-label-active text-primary","cursor-pointer"],onClick:b}),[e(Z,{inline:"",dot:"",color:n.color,class:"me-4"},null,8,["color"]),l("span",Ze,g(n.title),1)],16,Ye)]),_:2},1032,["to"])),64))])]),_:1})])}}},re=Ee("email",{state:()=>({emails:[],emailsMeta:{draft:0,inbox:0,spam:0}}),actions:{fetchEmails(_){return R(this,null,function*(){const h=yield te.get("/apps/email/emails",{params:_}),{emails:i,emailsMeta:r}=h.data;this.emails=i,this.emailsMeta=r})},updateEmails(_,h){return R(this,null,function*(){return te.post("/apps/email/update-emails/",{ids:_,data:h})})},updateEmailLabels(_,h){return R(this,null,function*(){return te.post("/apps/email/update-emails-label",{ids:_,label:h})})}}}),be=()=>{const _=fe(),h=re();return{labels:[{title:"personal",color:"success"},{title:"company",color:"primary"},{title:"important",color:"warning"},{title:"private",color:"error"}],resolveLabelColor:n=>n==="personal"?"success":n==="company"?"primary":n==="important"?"warning":n==="private"?"error":"secondary",shallShowMoveToActionFor:n=>n==="trash"?_.params.filter!=="trashed":n==="inbox"?!(_.params.filter===void 0||_.params.filter==="sent"||_.params.filter==="draft"):n==="spam"?!(_.params.filter==="spam"||_.params.filter==="sent"||_.params.filter==="draft"):!1,emailMoveToFolderActions:[{action:"inbox",icon:"tabler-mail"},{action:"spam",icon:"tabler-alert-octagon"},{action:"trash",icon:"tabler-trash"}],moveSelectedEmailTo:(n,d)=>{const v={};n==="inbox"?(_.params.filter==="trashed"&&(v.isDeleted=!1),v.folder="inbox"):n==="spam"?(_.params.filter==="trashed"&&(v.isDeleted=!1),v.folder="spam"):n==="trash"&&(v.isDeleted=!0),h.updateEmails(d,v)}}};const tt={class:"email-view-header d-flex align-center px-5 py-3"},at={class:"d-flex align-center flex-wrap flex-grow-1 overflow-hidden gap-3"},lt={class:"text-body-1 font-weight-medium text-high-emphasis text-truncate"},st={class:"d-flex flex-wrap gap-1"},it={class:"email-view-action-bar d-flex align-center text-medium-emphasis px-5"},ot={class:"d-flex align-center"},nt=l("span",null,"1-10 of 448",-1),rt={class:"d-flex align-center"},dt={class:"d-flex align-start align-sm-center px-6 py-3"},ct={class:"d-flex flex-wrap flex-grow-1 overflow-hidden"},mt={class:"text-truncate"},ut={class:"d-block text-high-emphasis font-weight-medium text-truncate"},pt={class:"text-sm text-disabled"},ft={class:"d-flex align-center"},vt={class:"me-2"},_t=["innerHTML"],ht=l("span",null,"2 Attachments",-1),bt=l("div",{class:"text-base"},[E(" Click here to "),l("span",{class:"text-primary cursor-pointer"}," Reply "),E(" or "),l("span",{class:"text-primary cursor-pointer"}," Forward ")],-1),xt={__name:"EmailView",props:{email:{type:null,required:!0},emailMeta:{type:Object,required:!0}},emits:["refresh","navigated","close","trash","unread","star","unstar"],setup(_,{emit:h}){const i=_,r=re(),{labels:y,resolveLabelColor:C,emailMoveToFolderActions:S,shallShowMoveToActionFor:n,moveSelectedEmailTo:d}=be(),v=m=>{d(m,[i.email.id]),h("refresh"),h("close")},b=m=>{r.updateEmailLabels([i.email.id],m),h("refresh")};return(m,V)=>{const w=oe("IconBtn"),j=pe;return f(),T(he,{temporary:"","model-value":!!i.email,location:"right",scrim:!1,floating:"",class:"email-view"},{default:t(()=>[i.email?(f(),k(L,{key:0},[l("div",tt,[e(w,{class:"me-4",onClick:V[0]||(V[0]=p=>m.$emit("close"))},{default:t(()=>[e(u,{size:"22",icon:"tabler-chevron-left",class:"flip-in-rtl"})]),_:1}),l("div",at,[l("h2",lt,g(i.email.subject),1),l("div",st,[(f(!0),k(L,null,I(i.email.labels,p=>(f(),T(ve,{key:p,color:o(C)(p),density:"default",class:"px-2 text-capitalize flex-shrink-0 me-2",label:""},{default:t(()=>[E(g(p),1)]),_:2},1032,["color"]))),128))])]),l("div",null,[e(w,null,{default:t(()=>[e(u,{icon:"tabler-printer"})]),_:1}),e(j,{density:"comfortable",color:"undefined"})])]),e(z),l("div",it,[P(e(w,{onClick:V[1]||(V[1]=p=>{m.$emit("trash"),m.$emit("close")})},{default:t(()=>[e(u,{icon:"tabler-trash"})]),_:1},512),[[O,!i.email.isDeleted]]),e(w,{onClick:V[2]||(V[2]=B(p=>{m.$emit("unread"),m.$emit("close")},["stop"]))},{default:t(()=>[e(u,{icon:"tabler-mail"})]),_:1}),e(w,null,{default:t(()=>[e(u,{icon:"tabler-folder"}),e(J,{activator:"parent"},{default:t(()=>[e(K,{density:"compact"},{default:t(()=>[(f(!0),k(L,null,I(o(S),p=>(f(),T(X,{key:p.title,class:q([o(n)(p.action)?"d-flex":"d-none","align-center"]),href:"#",onClick:U=>v(p.action)},{prepend:t(()=>[e(u,{icon:p.icon,class:"me-2",size:"20"},null,8,["icon"])]),default:t(()=>[e(Y,{class:"text-capitalize"},{default:t(()=>[E(g(p.action),1)]),_:2},1024)]),_:2},1032,["class","onClick"]))),128))]),_:1})]),_:1})]),_:1}),e(w,null,{default:t(()=>[e(u,{icon:"tabler-tag"}),e(J,{activator:"parent"},{default:t(()=>[e(K,{density:"compact"},{default:t(()=>[(f(!0),k(L,null,I(o(y),p=>(f(),T(X,{key:p.title,href:"#",onClick:B(U=>b(p.title),["stop"])},{prepend:t(()=>[e(Z,{inline:"",color:o(C)(p.title),dot:""},null,8,["color"])]),default:t(()=>[e(Y,{class:"ms-2 text-capitalize"},{default:t(()=>[E(g(p.title),1)]),_:2},1024)]),_:2},1032,["onClick"]))),128))]),_:1})]),_:1})]),_:1}),e(N),l("div",ot,[nt,l("div",rt,[e(w,{disabled:!i.emailMeta.hasPreviousEmail,onClick:V[3]||(V[3]=p=>m.$emit("navigated","previous"))},{default:t(()=>[e(u,{icon:"tabler-chevron-left",class:"flip-in-rtl"})]),_:1},8,["disabled"]),e(w,{disabled:!i.emailMeta.hasNextEmail,onClick:V[4]||(V[4]=p=>m.$emit("navigated","next"))},{default:t(()=>[e(u,{icon:"tabler-chevron-right",class:"flip-in-rtl"})]),_:1},8,["disabled"])])])]),e(z),e(o(ne),{tag:"div",class:"mail-content-container flex-grow-1",options:{wheelPropagation:!1}},{default:t(()=>[e(W,{class:"mx-5 my-4"},{default:t(()=>[l("div",dt,[e(_e,{class:"me-3",size:"32"},{default:t(()=>[e(ie,{src:i.email.from.avatar,alt:i.email.from.name},null,8,["src","alt"])]),_:1}),l("div",ct,[l("div",mt,[l("span",ut,g(i.email.from.name),1),l("span",pt,g(i.email.from.email),1)]),e(N),l("div",ft,[l("span",vt,g(o(De)(i.email.time)),1),P(e(w,null,{default:t(()=>[e(u,{icon:"tabler-paperclip"})]),_:1},512),[[O,i.email.attachments.length]]),e(w,{color:i.email.isStarred?"warning":"default",onClick:V[5]||(V[5]=p=>{var U;(U=i.email)!=null&&U.isStarred?m.$emit("unstar"):m.$emit("star"),m.$emit("refresh")})},{default:t(()=>[e(u,{icon:i.email.isStarred?"tabler-star-filled":"tabler-star"},null,8,["icon"])]),_:1},8,["color"])])]),e(j,{class:"align-self-sm-center",density:"comfortable",color:"undefined"})]),e(z),e(ae,null,{default:t(()=>[l("div",{class:"text-base",innerHTML:i.email.message},null,8,_t)]),_:1}),i.email.attachments.length?(f(),k(L,{key:0},[e(z),e(ae,{class:"d-flex flex-column gap-y-4 pt-4"},{default:t(()=>[ht,(f(!0),k(L,null,I(i.email.attachments,p=>(f(),k("div",{key:p.fileName,class:"d-flex align-center"},[e(ie,{src:p.thumbnail,alt:p.fileName,"aspect-ratio":"1","max-height":"24","max-width":"24",class:"me-2"},null,8,["src","alt"]),l("span",null,g(p.fileName),1)]))),128))]),_:1})],64)):se("",!0)]),_:1}),e(W,{class:"mx-5 mb-5"},{default:t(()=>[e(ae,{class:"font-weight-medium text-high-emphasis"},{default:t(()=>[bt]),_:1})]),_:1})]),_:1})],64)):se("",!0)]),_:1},8,["model-value"])}}};const gt={class:"d-flex align-center"},yt={class:"py-2 px-5 d-flex align-center"},$t=["onClick"],kt={class:"mx-3 text-body-1 font-weight-medium text-high-emphasis"},Ct={class:"truncate"},Vt={class:"text-disabled text-sm ms-2"},wt={class:"email-actions d-none"},Et={class:"py-4 px-5 text-center"},St=l("span",{class:"text-high-emphasis"},"No items found.",-1),Mt=[St],Lt={__name:"index",setup(_){const{isLeftSidebarOpen:h}=Ie(),i=fe(),r=re(),{labels:y,resolveLabelColor:C,emailMoveToFolderActions:S,shallShowMoveToActionFor:n,moveSelectedEmailTo:d}=be(),v=A(!1),b=A(""),m=A([]),V=c=>{const s=m.value.indexOf(c);s===-1?m.value.push(c):m.value.splice(s,1)},w=Q(()=>r.emails.length&&r.emails.length===m.value.length),j=Q(()=>!!m.value.length&&r.emails.length!==m.value.length),p=Q(()=>m.value.every(c=>{var s;return(s=r.emails.find($=>$.id===c))==null?void 0:s.isRead})),U=()=>{m.value=w.value?[]:r.emails.map(c=>c.id)},x=A(null),xe=Q(()=>{const c={hasNextEmail:!1,hasPreviousEmail:!1};if(x.value){const s=r.emails.findIndex($=>$.id===x.value.id);c.hasNextEmail=!!r.emails[s+1],c.hasPreviousEmail=!!r.emails[s-1]}return c}),F=()=>R(this,null,function*(){m.value=[],yield r.fetchEmails({q:b.value,filter:i.params.filter,label:i.params.label})}),M=($,...ee)=>R(this,[$,...ee],function*(c,s=m.value){s.length&&(c==="trash"?r.updateEmails(s,{isDeleted:!0}):c==="spam"?r.updateEmails(s,{folder:"spam"}):c==="unread"?r.updateEmails(s,{isRead:!1}):c==="read"?r.updateEmails(s,{isRead:!0}):c==="star"?r.updateEmails(s,{isStarred:!0}):c==="unstar"&&r.updateEmails(s,{isStarred:!1}),yield F())});ce([b,()=>i.params.filter,()=>i.params.label],F,{immediate:!0}),ce([()=>i.params.filter,()=>i.params.label],()=>{x.value=null});const ge=c=>{d(c,m.value),F()},ye=c=>{r.updateEmailLabels(m.value,c),F()},$e=c=>{if(!x.value)return;const s=r.emails.findIndex(ee=>ee.id===x.value.id),$=c==="previous"?s-1:s+1;x.value=r.emails[$]},ke=c=>{x.value=c,M("read",[c.id])},Ce=()=>R(this,null,function*(){yield F(),x.value&&(x.value=r.emails.find(c=>c.id===x.value.id))});return(c,s)=>{const $=oe("IconBtn"),ee=pe;return f(),T(Ae,{class:"email-app-layout"},{default:t(()=>[e(he,{modelValue:o(h),"onUpdate:modelValue":s[1]||(s[1]=a=>H(h)?h.value=a:null),absolute:"",touchless:"",location:"start",temporary:c.$vuetify.display.mdAndDown},{default:t(()=>[e(et,{onToggleComposeDialogVisibility:s[0]||(s[0]=a=>v.value=!o(v))})]),_:1},8,["modelValue","temporary"]),e(xt,{email:o(x),"email-meta":o(xe),onRefresh:Ce,onNavigated:$e,onClose:s[2]||(s[2]=a=>x.value=null),onRemove:s[3]||(s[3]=a=>M("trash",o(x)?[o(x).id]:[])),onUnread:s[4]||(s[4]=a=>M("unread",o(x)?[o(x).id]:[])),onStar:s[5]||(s[5]=a=>M("star",o(x)?[o(x).id]:[])),onUnstar:s[6]||(s[6]=a=>M("unstar",o(x)?[o(x).id]:[]))},null,8,["email","email-meta"]),e(ze,null,{default:t(()=>[e(W,{flat:"",class:"email-content-list h-100 d-flex flex-column"},{default:t(()=>[l("div",gt,[e($,{class:"d-lg-none ms-3",onClick:s[7]||(s[7]=a=>h.value=!0)},{default:t(()=>[e(u,{icon:"tabler-menu-2"})]),_:1}),e(Re,{modelValue:o(b),"onUpdate:modelValue":s[8]||(s[8]=a=>H(b)?b.value=a:null),density:"default",class:"email-search px-1 flex-grow-1","prepend-inner-icon":"tabler-search",placeholder:"Search email"},null,8,["modelValue"])]),e(z),l("div",yt,[e(ue,{"model-value":o(w),indeterminate:o(j),"onUpdate:modelValue":U},null,8,["model-value","indeterminate"]),l("div",{class:"w-100 d-flex align-center action-bar-actions",style:Ve({visibility:o(j)||o(w)?void 0:"hidden"})},[P(e($,{onClick:s[9]||(s[9]=a=>M("trash"))},{default:t(()=>[e(u,{icon:"tabler-trash"})]),_:1},512),[[O,c.$route.params.filter!=="trashed"]]),e($,{onClick:s[10]||(s[10]=a=>o(p)?M("unread"):M("read"))},{default:t(()=>[e(u,{icon:o(p)?"tabler-mail":"tabler-mail-opened"},null,8,["icon"])]),_:1}),e($,null,{default:t(()=>[e(u,{icon:"tabler-folder"}),e(J,{activator:"parent"},{default:t(()=>[e(K,{density:"compact"},{default:t(()=>[(f(!0),k(L,null,I(o(S),a=>(f(),T(X,{key:a.title,class:q([o(n)(a.action)?"d-flex":"d-none","items-center"]),href:"#",onClick:D=>ge(a.action)},{prepend:t(()=>[e(u,{icon:a.icon,class:"me-2",size:"20"},null,8,["icon"])]),default:t(()=>[e(Y,{class:"text-capitalize"},{default:t(()=>[E(g(a.action),1)]),_:2},1024)]),_:2},1032,["class","onClick"]))),128))]),_:1})]),_:1})]),_:1}),e($,null,{default:t(()=>[e(u,{icon:"tabler-tag"}),e(J,{activator:"parent"},{default:t(()=>[e(K,{density:"compact"},{default:t(()=>[(f(!0),k(L,null,I(o(y),a=>(f(),T(X,{key:a.title,href:"#",onClick:D=>ye(a.title)},{prepend:t(()=>[e(Z,{inline:"",color:o(C)(a.title),dot:""},null,8,["color"])]),default:t(()=>[e(Y,{class:"ms-2 text-capitalize"},{default:t(()=>[E(g(a.title),1)]),_:2},1024)]),_:2},1032,["onClick"]))),128))]),_:1})]),_:1})]),_:1})],4),e(N),e($,{onClick:F},{default:t(()=>[e(u,{icon:"tabler-reload"})]),_:1}),e(ee,{density:"comfortable",color:"undefined"})]),e(z),e(o(ne),{tag:"ul",options:{wheelPropagation:!1},class:"email-list"},{default:t(()=>[(f(!0),k(L,null,I(o(r).emails,a=>P((f(),k("li",{key:a.id,class:q(["email-item d-flex align-center py-2 px-5 cursor-pointer",[{"email-read":a.isRead}]]),onClick:D=>ke(a)},[e(ue,{"model-value":o(m).includes(a.id),class:"flex-shrink-0","onUpdate:modelValue":D=>V(a.id),onClick:s[11]||(s[11]=B(()=>{},["stop"]))},null,8,["model-value","onUpdate:modelValue"]),e($,{color:a.isStarred?"warning":"default",onClick:B(D=>M(a.isStarred?"unstar":"star",[a.id]),["stop"])},{default:t(()=>[e(u,{icon:a.isStarred?"tabler-star-filled":"tabler-star",class:q(a.isStarred?"":"text-disabled")},null,8,["icon","class"])]),_:2},1032,["color","onClick"]),e(_e,{class:"mx-2",size:"32"},{default:t(()=>[e(ie,{src:a.from.avatar,alt:a.from.name},null,8,["src","alt"])]),_:2},1024),l("h6",kt,g(a.from.name),1),l("span",Ct,g(a.subject),1),e(N),l("div",{class:q(["email-meta",c.$vuetify.display.xs?"d-none":"d-block"])},[(f(!0),k(L,null,I(a.labels,D=>(f(),T(Z,{key:D,inline:"",color:o(C)(D),dot:""},null,8,["color"]))),128)),l("small",Vt,g(o(Te)(a.time)),1)],2),l("div",wt,[e($,{onClick:B(D=>M("trash",[a.id]),["stop"])},{default:t(()=>[e(u,{icon:"tabler-trash"}),e(le,{activator:"parent",location:"top"},{default:t(()=>[E(" Delete Mail ")]),_:1})]),_:2},1032,["onClick"]),e($,{onClick:B(D=>M(a.isRead?"unread":"read",[a.id]),["stop"])},{default:t(()=>[e(u,{icon:a.isRead?"tabler-mail":"tabler-mail-opened"},null,8,["icon"]),e(le,{activator:"parent",location:"top"},{default:t(()=>[E(g(a.isRead?"Unread Mail":"read Mail"),1)]),_:2},1024)]),_:2},1032,["onClick"]),e($,{onClick:B(D=>M("spam",[a.id]),["stop"])},{default:t(()=>[e(u,{icon:"tabler-alert-octagon"}),e(le,{activator:"parent",location:"top"},{default:t(()=>[E(" Move to Spam ")]),_:1})]),_:2},1032,["onClick"])])],10,$t)),[[O,o(r).emails.length]])),128)),P(l("li",Et,Mt,512),[[O,!o(r).emails.length]])]),_:1})]),_:1}),P(e(qe,{onClose:s[12]||(s[12]=a=>v.value=!1)},null,512),[[O,o(v)]])]),_:1})]),_:1})}}};typeof me=="function"&&me(Lt);export{Lt as default};
//# sourceMappingURL=index-8e997175.js.map
