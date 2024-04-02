import{_ as C}from"./AppSelect-6ee5ecd4.js";import{_ as T,a as N}from"./InvoiceSendInvoiceDrawer-44c1ffe4.js";import{_ as U}from"./InvoiceEditable-e82f09f4.js";import{u as B}from"./useInvoiceStore-5dc0556a.js";import{f as s,I as P,J as D,K as a,u as l,k as e,T as I,Q as i,P as n,q as r,G as O}from"./frappe-ui-26ef7369.js";import{a as S,V as $}from"./VRow-a794fb6c.js";import{V as h,d as j}from"./VCard-98364713.js";import{i as u}from"./index-e1b913cd.js";import{V}from"./VInput-ea621834.js";import{V as b}from"./VSwitch-3d0b974f.js";import"./VSelect-31041ca2.js";import"./VTextField-ae5a2228.js";/* empty css                   */import"./VField-f7afb4c1.js";import"./easing-512405f0.js";import"./VImg-9de85dec.js";import"./transition-6a62c7af.js";import"./forwardRefs-bb5e4b03.js";import"./VCounter-b723ae3f.js";import"./VList-5632fe53.js";import"./ssrBoot-2565eb67.js";import"./VAvatar-7de7fc90.js";import"./VDivider-66cdee18.js";import"./dialog-transition-40895cfb.js";import"./VMenu-71a8a06d.js";import"./VOverlay-3a4af559.js";import"./lazy-2551cdf3.js";import"./VCheckboxBtn-fb30a6d7.js";import"./VSelectionControl-9d86a850.js";import"./VChip-a66962cb.js";import"./AppTextarea-c737c140.js";import"./VTextarea-111be2a2.js";import"./AppDateTimePicker-dd128bad.js";import"./AppTextField-9d8f30b5.js";import"./AppDrawerHeaderSection-eb6189d7.js";import"./VSpacer-1617770f.js";import"./VForm-d2878bb6.js";import"./VNavigationDrawer-02c85ee6.js";import"./VTooltip-f89e823b.js";const M={class:"d-flex gap-2"},R={class:"w-50"},q={class:"w-50"},L={class:"d-flex align-center justify-space-between mb-2"},G={class:"d-flex align-center justify-space-between mb-2"},J={class:"d-flex align-center justify-space-between"},Ne={__name:"[id]",setup(K){const A=B(),k=O(),c=s();A.fetchInvoice(Number(k.params.id)).then(m=>{c.value={invoice:m.data.invoice,paymentDetails:m.data.paymentDetails,purchasedProducts:[{title:"App Design",cost:24,qty:2,description:"Designed UI kit & app pages."}],note:"It was a pleasure working with you and your team. We hope you will keep us in mind for future freelance projects. Thank You!",paymentMethod:"Bank Account",salesperson:"Tom Cook",thanksNote:"Thanks for your business"}}).catch(m=>{console.log(m)});const d=s(!1),p=s(!1),f=s(!0),v=s(!1),y=s(!1),_=s("Bank Account"),g=["Bank Account","PayPal","UPI Transfer"];return(m,t)=>{const x=C;return P(),D($,null,{default:a(()=>{var w;return[(w=l(c))!=null&&w.invoice?(P(),D(S,{key:0,cols:"12",md:"9"},{default:a(()=>[e(U,{data:l(c)},null,8,["data"])]),_:1})):I("",!0),e(S,{cols:"12",md:"3"},{default:a(()=>[e(h,{class:"mb-8"},{default:a(()=>[e(j,null,{default:a(()=>[e(u,{block:"","prepend-icon":"tabler-send",class:"mb-2",onClick:t[0]||(t[0]=o=>d.value=!0)},{default:a(()=>[i(" Send Invoice ")]),_:1}),n("div",M,[n("div",R,[e(u,{block:"",color:"secondary",variant:"tonal",class:"mb-2",to:{name:"apps-invoice-preview-id",params:{id:l(k).params.id}}},{default:a(()=>[i(" Preview ")]),_:1},8,["to"])]),n("div",q,[e(u,{block:"",color:"secondary",variant:"tonal",class:"mb-2"},{default:a(()=>[i(" Save ")]),_:1})])]),e(u,{block:"","prepend-icon":"tabler-currency-dollar",onClick:t[1]||(t[1]=o=>p.value=!0)},{default:a(()=>[i(" Add Payment ")]),_:1})]),_:1})]),_:1}),e(x,{modelValue:l(_),"onUpdate:modelValue":t[2]||(t[2]=o=>r(_)?_.value=o:null),items:g,label:"Accept Payment Via",class:"mb-6"},null,8,["modelValue"]),n("div",L,[e(V,{for:"payment-terms"},{default:a(()=>[i(" Payment Terms ")]),_:1}),n("div",null,[e(b,{id:"payment-terms",modelValue:l(f),"onUpdate:modelValue":t[3]||(t[3]=o=>r(f)?f.value=o:null)},null,8,["modelValue"])])]),n("div",G,[e(V,{for:"client-notes"},{default:a(()=>[i(" Client Notes ")]),_:1}),n("div",null,[e(b,{id:"client-notes",modelValue:l(v),"onUpdate:modelValue":t[4]||(t[4]=o=>r(v)?v.value=o:null)},null,8,["modelValue"])])]),n("div",J,[e(V,{for:"payment-stub"},{default:a(()=>[i(" Payment Stub ")]),_:1}),n("div",null,[e(b,{id:"payment-stub",modelValue:l(y),"onUpdate:modelValue":t[5]||(t[5]=o=>r(y)?y.value=o:null)},null,8,["modelValue"])])])]),_:1}),e(T,{isDrawerOpen:l(d),"onUpdate:isDrawerOpen":t[6]||(t[6]=o=>r(d)?d.value=o:null)},null,8,["isDrawerOpen"]),e(N,{isDrawerOpen:l(p),"onUpdate:isDrawerOpen":t[7]||(t[7]=o=>r(p)?p.value=o:null)},null,8,["isDrawerOpen"])]}),_:1})}}};export{Ne as default};
//# sourceMappingURL=_id_-54ddda2f.js.map