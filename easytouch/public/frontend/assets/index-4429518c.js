import{_ as $}from"./AppSearchHeader-44d8f211.js";import{a as h,V as f}from"./VRow-a794fb6c.js";import{V as k,d as i}from"./VCard-98364713.js";import{V as w}from"./VImg-9de85dec.js";import{i as b,o as L}from"./index-e1b913cd.js";import{I as o,J as m,K as e,k as t,L as _,M as C,N as V,P as s,R as d,Q as n,_ as A,$ as B,f as H,u as g,T as N}from"./frappe-ui-26ef7369.js";import{V as R}from"./VAvatar-7de7fc90.js";import"./AppTextField-9d8f30b5.js";import"./VInput-ea621834.js";import"./transition-6a62c7af.js";import"./VTextField-ae5a2228.js";/* empty css                   */import"./VField-f7afb4c1.js";import"./easing-512405f0.js";import"./forwardRefs-bb5e4b03.js";import"./VCounter-b723ae3f.js";const D={class:"text-h5 my-3"},K={class:"clamp-text"},v={__name:"HelpCenterLandingArticlesOverview",props:{articles:{type:Array,required:!0}},setup(p){const a=p;return(y,c)=>(o(),m(f,null,{default:e(()=>[t(h,{cols:"12",lg:"10",class:"mx-auto mb-8"},{default:e(()=>[t(f,null,{default:e(()=>[(o(!0),_(C,null,V(a.articles,r=>(o(),m(h,{key:r.title,cols:"12",md:"4"},{default:e(()=>[t(k,{flat:"",border:""},{default:e(()=>[t(i,{class:"text-center"},{default:e(()=>[t(w,{src:r.img,"aspect-ratio":"1",width:"58",class:"mx-auto"},null,8,["src"]),s("h6",D,d(r.title),1),s("p",K,d(r.subtitle),1),t(b,{size:"small",variant:"tonal",to:{name:"pages-help-center-category-subcategory-article",params:{category:"getting-started",subcategory:"account",article:"changing-your-username"}}},{default:e(()=>[n(" Read More ")]),_:1})]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1}))}},I={},S={class:"bg-var-theme-background py-12"},T=s("h5",{class:"text-h3 text-center mb-6"}," Still need help? ",-1),q=s("p",null,[n(" Our specialists are always happy to help. Contact us during standard business hours or email us "),s("br"),n(" 24/7 and we'll get back to you. ")],-1),F={class:"d-flex justify-center gap-4 flex-wrap"};function M(p,a){return o(),_("div",S,[t(i,{class:"text-center py-6"},{default:e(()=>[T,q,s("div",F,[t(b,null,{default:e(()=>[n("Visit our community")]),_:1}),t(b,null,{default:e(()=>[n("Contact us")]),_:1})])]),_:1})])}const O=A(I,[["render",M]]),P={class:"text-h5"},j={class:"ps-6"},z={class:"mt-4"},E={__name:"HelpCenterLandingKnowledgeBase",props:{categories:{type:Array,required:!0}},setup(p){const a=p,y=c=>c.subCategories.map(r=>r.articles.length).reduce((r,u)=>r+u,0);return(c,r)=>{const u=B("RouterLink");return o(),m(f,null,{default:e(()=>[t(h,{cols:"12",lg:"10",class:"mx-auto mb-8"},{default:e(()=>[t(f,null,{default:e(()=>[(o(!0),_(C,null,V(a.categories,l=>(o(),m(h,{key:l.title,cols:"12",sm:"6",md:"4"},{default:e(()=>[t(k,null,{title:e(()=>[s("span",P,d(l.title),1)]),prepend:e(()=>[t(R,{icon:l.icon,rounded:"",color:l.avatarColor,variant:"tonal"},null,8,["icon","color"])]),default:e(()=>[t(i,null,{default:e(()=>[s("ul",j,[(o(!0),_(C,null,V(l.subCategories,x=>(o(),_("li",{key:x.title,class:"text-primary mb-2"},[t(u,{to:{name:"pages-help-center-category-subcategory",params:{category:l.slug,subcategory:x.slug}}},{default:e(()=>[n(d(x.title),1)]),_:2},1032,["to"])]))),128))]),s("div",z,[t(u,{to:{name:"pages-help-center-category-subcategory",params:{category:l.slug,subcategory:l.subCategories[0].slug}},class:"text-base font-weight-medium"},{default:e(()=>[n(d(y(l))+" articles ",1)]),_:2},1032,["to"])])]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1})}}},J=s("h5",{class:"text-h3 text-center my-6"}," Popular Articles ",-1),Q=s("h5",{class:"text-h3 text-center my-6"}," Knowledge Base ",-1),G=s("h5",{class:"text-h3 text-center my-6"}," Keep Learning ",-1),pe={__name:"index",setup(p){const a=H();return(()=>L.get("/pages/help-center/landing").then(c=>{a.value=c.data}))(),(c,r)=>{const u=$;return g(a)?(o(),m(k,{key:0},{default:e(()=>[t(u,{title:"Hello, how can we help?",subtitle:"Common troubleshooting topics: eCommerce, Blogging to payment","custom-class":"rounded-0"}),t(i,{class:"py-12"},{default:e(()=>[J,t(v,{articles:g(a).popularArticles},null,8,["articles"])]),_:1}),s("div",null,[t(i,{class:"bg-var-theme-background py-12"},{default:e(()=>[Q,t(E,{categories:g(a).categories},null,8,["categories"])]),_:1})]),t(i,{class:"py-12"},{default:e(()=>[G,t(v,{articles:g(a).keepLearning},null,8,["articles"])]),_:1}),t(O)]),_:1})):N("",!0)}}};export{pe as default};
//# sourceMappingURL=index-4429518c.js.map