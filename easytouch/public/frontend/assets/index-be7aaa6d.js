import{_ as k}from"./AppSelect-19abff1f.js";import{_ as P}from"./InvoiceEditable-a81f9050.js";import{a as _,V as w}from"./VRow-b8bac363.js";import{V as x,d as B}from"./VCard-bd92c839.js";import{i as c}from"./index-e43e3799.js";import{V as f}from"./VInput-545a0bfa.js";import{V}from"./VSwitch-8d349bf4.js";import{f as s,I as S,J as N,K as t,k as e,u as i,Q as l,q as m,P as n}from"./frappe-ui-b8f10d89.js";import"./VSelect-25505b64.js";import"./VTextField-61b1d2aa.js";/* empty css                   */import"./VField-5b446628.js";import"./easing-512405f0.js";import"./VImg-dcfe0017.js";import"./transition-61bfbac1.js";import"./forwardRefs-bb5e4b03.js";import"./VCounter-cc8846c3.js";import"./VList-ce82f9df.js";import"./ssrBoot-066fc73e.js";import"./VAvatar-26ec77a4.js";import"./VDivider-7eec4b6d.js";import"./dialog-transition-478eb809.js";import"./VMenu-e207a306.js";import"./VOverlay-dc43e014.js";import"./lazy-b5e818f7.js";import"./VCheckboxBtn-0ece9886.js";import"./VSelectionControl-bcc9ca9d.js";import"./VChip-c30ae960.js";import"./AppTextarea-4825a949.js";import"./VTextarea-1637f920.js";import"./AppDateTimePicker-8d0d7f59.js";import"./AppTextField-7c20f864.js";import"./VTooltip-e30b7516.js";import"./useInvoiceStore-2bdc9af9.js";const C={class:"d-flex align-center justify-space-between mb-2"},D={class:"d-flex align-center justify-space-between mb-2"},T={class:"d-flex align-center justify-space-between"},ue={__name:"index",setup(U){const b=s({invoice:{id:5037,issuedDate:"",service:"",total:0,avatar:"",invoiceStatus:"",dueDate:"",balance:0,client:{address:"",company:"",companyEmail:"",contact:"",country:"",name:""}},paymentDetails:{totalDue:"$12,110.55",bankName:"American Bank",country:"United States",iban:"ETD95476213874685",swiftCode:"BR91905"},purchasedProducts:[{title:"",cost:0,qty:0,description:""}],note:"",paymentMethod:"",salesperson:"",thanksNote:""}),r=s(!0),d=s(!1),p=s(!1),u=s("Bank Account"),v=["Bank Account","PayPal","UPI Transfer"];return(A,a)=>{const y=k;return S(),N(w,null,{default:t(()=>[e(_,{cols:"12",md:"9"},{default:t(()=>[e(P,{data:i(b)},null,8,["data"])]),_:1}),e(_,{cols:"12",md:"3"},{default:t(()=>[e(x,{class:"mb-8"},{default:t(()=>[e(B,null,{default:t(()=>[e(c,{block:"","prepend-icon":"tabler-send",class:"mb-2"},{default:t(()=>[l(" Send Invoice ")]),_:1}),e(c,{block:"",color:"default",variant:"tonal",class:"mb-2",to:{name:"apps-invoice-preview-id",params:{id:"5036"}}},{default:t(()=>[l(" Preview ")]),_:1}),e(c,{block:"",color:"default",variant:"tonal"},{default:t(()=>[l(" Save ")]),_:1})]),_:1})]),_:1}),e(y,{modelValue:i(u),"onUpdate:modelValue":a[0]||(a[0]=o=>m(u)?u.value=o:null),items:v,label:"Accept Payment Via",class:"mb-6"},null,8,["modelValue"]),n("div",C,[e(f,{for:"payment-terms"},{default:t(()=>[l(" Payment Terms ")]),_:1}),n("div",null,[e(V,{id:"payment-terms",modelValue:i(r),"onUpdate:modelValue":a[1]||(a[1]=o=>m(r)?r.value=o:null)},null,8,["modelValue"])])]),n("div",D,[e(f,{for:"client-notes"},{default:t(()=>[l(" Client Notes ")]),_:1}),n("div",null,[e(V,{id:"client-notes",modelValue:i(d),"onUpdate:modelValue":a[2]||(a[2]=o=>m(d)?d.value=o:null)},null,8,["modelValue"])])]),n("div",T,[e(f,{for:"payment-stub"},{default:t(()=>[l(" Payment Stub ")]),_:1}),n("div",null,[e(V,{id:"payment-stub",modelValue:i(p),"onUpdate:modelValue":a[3]||(a[3]=o=>m(p)?p.value=o:null)},null,8,["modelValue"])])])]),_:1})]),_:1})}}};export{ue as default};
//# sourceMappingURL=index-be7aaa6d.js.map
