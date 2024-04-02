import{_ as K}from"./AppStepper-0a25e9d4.js";import{_ as Q}from"./CustomRadiosWithIcon-1ca19d79.js";import{_ as X}from"./CustomRadios-1463ed99.js";import{a as h,V as U}from"./VRow-a794fb6c.js";import{V as A}from"./VChip-a66962cb.js";import{V as j}from"./VDivider-66cdee18.js";import{i as D,g as C}from"./index-e1b913cd.js";import{V as G,d as V}from"./VCard-98364713.js";import{V as Z,a as ee,c as te}from"./VList-5632fe53.js";import{V as F}from"./VImg-9de85dec.js";import{f as P,c as q,d as R,I as m,J as T,K as s,k as t,u as l,P as e,R as o,Q as u,a2 as se,ag as ae,L as v,M as S,N as B,T as L,_ as le,$ as oe,S as I,ad as de,ae as ne,q as w,n as re}from"./frappe-ui-26ef7369.js";import{_ as M}from"./AppTextField-9d8f30b5.js";import{V as W,a as Y}from"./VAlert-176826a5.js";import{V as ie}from"./VRating-a4f61925.js";import{V as H}from"./VSpacer-1617770f.js";import{V as ce,a as E}from"./VTabs-c6b2d1ac.js";import{V as J,a as N}from"./VWindowItem-5073949f.js";import{V as z}from"./VForm-d2878bb6.js";import{V as ue}from"./VTooltip-f89e823b.js";import{V as pe}from"./VSwitch-3d0b974f.js";import"./VSlideGroupItem-7699ea98.js";import"./VSlideGroup-5e21ae36.js";import"./VInput-ea621834.js";import"./transition-6a62c7af.js";import"./VRadioGroup-d6bf20f6.js";import"./VSelectionControl-9d86a850.js";import"./VAvatar-7de7fc90.js";import"./ssrBoot-2565eb67.js";import"./VTextField-ae5a2228.js";/* empty css                   */import"./VField-f7afb4c1.js";import"./easing-512405f0.js";import"./forwardRefs-bb5e4b03.js";import"./VCounter-b723ae3f.js";import"./lazy-2551cdf3.js";import"./VOverlay-3a4af559.js";const me=e("h6",{class:"text-base font-weight-regular mb-4"}," Select your preferable address ",-1),_e={class:"w-100"},he={class:"d-flex justify-space-between mb-3"},fe={class:"text-base font-weight-medium"},ve={class:"mb-0 text-sm"},be={class:"text-sm"},ye=e("div",{class:"pt-4"},[e("a",{href:"#",class:"me-3"},"Edit"),e("a",{href:"#"},"Remove")],-1),ge=e("h6",{class:"text-base font-weight-regular mb-4"}," Choose Delivery Speed ",-1),xe={class:"d-flex flex-column align-center gap-2 w-100"},$e={class:"d-flex justify-end w-100 mb-n3"},ke={class:"text-base font-weight-medium"},we={class:"text-sm text-center mb-0"},Ce=e("h6",{class:"text-base font-weight-medium mb-5"}," Estimated Delivery Date ",-1),Ve={class:"font-weight-medium text-sm"},Se=e("h6",{class:"text-base font-weight-medium mb-5"}," Price Details ",-1),De={class:"d-flex align-center justify-space-between mb-2"},Ae=e("span",{class:"text-high-emphasis"},"Order Total",-1),Ie={class:"d-flex align-center justify-space-between"},Pe=e("span",{class:"text-high-emphasis"},"Delivery Charges",-1),Ne={class:"text-end"},Ue={key:0,class:"text-decoration-line-through me-1 text-disabled"},je={key:2},Te=e("span",{class:"text-base font-weight-medium"},"Total",-1),Be={class:"text-base font-weight-medium"},Oe={__name:"Address",props:{currentStep:{type:Number,required:!1},checkoutData:{type:null,required:!0}},emits:["update:currentStep","update:checkout-data"],setup($,{emit:k}){const r=$,a=P(r.checkoutData),b=[{icon:{icon:"tabler-user"},title:"Standard",desc:"Get your product in 1 Week.",value:"free"},{icon:{icon:"tabler-crown"},title:"Express",desc:"Get your product in 3-4 days.",value:"express"},{icon:{icon:"tabler-rocket"},title:"Overnight",desc:"Get your product in 1 day.",value:"overnight"}],d={home:"primary",office:"success"},f={free:{color:"success",price:"Free"},express:{color:"secondary",price:10},overnight:{color:"secondary",price:15}},n=q(()=>(a.value.deliveryCharges=0,a.value.deliverySpeed!=="free"&&(a.value.deliveryCharges=f[a.value.deliverySpeed].price),a.value.orderAmount+a.value.deliveryCharges)),y=()=>{k("update:checkout-data",a.value)},x=()=>{y(),k("update:currentStep",r.currentStep?r.currentStep+1:1)};return R(()=>r.currentStep,y),(O,c)=>{const _=X,i=Q;return m(),T(U,null,{default:s(()=>[t(h,{cols:"12",md:"8"},{default:s(()=>[me,t(_,{"selected-radio":l(a).deliveryAddress,"onUpdate:selectedRadio":c[0]||(c[0]=p=>l(a).deliveryAddress=p),"radio-content":l(a).addresses,"grid-column":{cols:"12",sm:"6"}},{default:s(({item:p})=>[e("div",_e,[e("div",he,[e("h6",fe,o(p.title),1),t(A,{color:d[p.value],label:"",class:"text-capitalize"},{default:s(()=>[u(o(p.value),1)]),_:2},1032,["color"])]),e("p",ve,o(p.desc),1),e("p",be," Mobile: "+o(p.subtitle),1),t(j),ye])]),_:1},8,["selected-radio","radio-content"]),t(D,{variant:"tonal",class:"mt-5 mb-8"},{default:s(()=>[u(" Add New Address ")]),_:1}),ge,t(i,{"selected-radio":l(a).deliverySpeed,"onUpdate:selectedRadio":c[1]||(c[1]=p=>l(a).deliverySpeed=p),"radio-content":b,"grid-column":{cols:"12",sm:"4"}},{default:s(({item:p})=>[e("div",xe,[e("div",$e,[t(A,{color:f[p.value].color,label:""},{default:s(()=>[u(o(f[p.value].price==="Free"?f[p.value].price:`$${f[p.value].price}`),1)]),_:2},1032,["color"])]),t(C,se(ae(p.icon)),null,16),e("h6",ke,o(p.title),1),e("p",we,o(p.desc),1)])]),_:1},8,["selected-radio"])]),_:1}),t(h,{cols:"12",md:"4"},{default:s(()=>[t(G,{flat:"",variant:"outlined"},{default:s(()=>[t(V,null,{default:s(()=>[Ce,t(Z,{class:"card-list"},{default:s(()=>[(m(!0),v(S,null,B(l(a).cartItems,p=>(m(),T(ee,{key:p.name},{prepend:s(()=>[t(F,{width:"60",src:p.image,class:"me-2"},null,8,["src"])]),default:s(()=>[t(te,null,{default:s(()=>[u(o(p.name),1)]),_:2},1024),e("span",Ve,o(p.estimatedDelivery),1)]),_:2},1024))),128))]),_:1})]),_:1}),t(j),t(V,null,{default:s(()=>[Se,e("div",De,[Ae,e("span",null,"$"+o(l(a).orderAmount),1)]),e("div",Ie,[Pe,e("div",Ne,[l(a).deliverySpeed==="free"?(m(),v("span",Ue," $5.00 ")):L("",!0),l(a).deliverySpeed==="free"?(m(),T(A,{key:1,color:"success",label:""},{default:s(()=>[u(" Free ")]),_:1})):(m(),v("span",je,"$"+o(f[l(a).deliverySpeed].price)+".00",1))])])]),_:1}),t(j),t(V,{class:"d-flex align-center justify-space-between text-high-emphasis py-3"},{default:s(()=>[Te,e("span",Be," $"+o(l(n)),1)]),_:1})]),_:1}),t(D,{block:"",class:"mt-4",onClick:x},{default:s(()=>[u(" Place Order ")]),_:1})]),_:1})]),_:1})}}};const g=$=>(de("data-v-953625fc"),$=$(),ne(),$),qe=g(()=>e("p",{class:"mb-1"}," - 10% Instant Discount on Bank of America Corp Bank Debit and Credit cards ",-1)),Ge=g(()=>e("p",{class:"mb-0"}," - 25% Cashback Voucher of up to $60 on first ever PayPal transaction. TCA ",-1)),Ee={class:"text-h6 my-4"},Fe={class:"border rounded"},Re={class:"text-base font-weight-regular mb-4"},ze={class:"d-flex align-center text-no-wrap gap-2 text-base"},Le=g(()=>e("span",{class:"text-disabled"},"Sold by:",-1)),Me={class:"text-primary"},We={class:"text-xs font-weight-medium"},Ye={class:"mt-1"},He={class:"text-base mt-4"},Je={class:"text-primary"},Ke=g(()=>e("span",null,"/",-1)),Qe={class:"text-decoration-line-through text-disabled"},Xe={class:"d-flex align-center justify-space-between border rounded py-2 px-5 text-base mt-4"},Ze=g(()=>e("a",{href:"#"},"Add more products from wishlist",-1)),et=g(()=>e("h6",{class:"text-base font-weight-medium mb-3"}," Offer ",-1)),tt={class:"d-flex align-center gap-4"},st=g(()=>e("div",{class:"bg-var-theme-background rounded pa-5 mt-4"},[e("h6",{class:"text-base font-weight-medium mb-1"}," Buying gift for a loved one? "),e("p",null," Gift wrap and personalized message on card, Only for $2. "),e("a",{href:"#",class:"font-weight-medium"},"Add a gift wrap")],-1)),at=g(()=>e("h6",{class:"text-base font-weight-medium mb-3"}," Price Details ",-1)),lt={class:"text-high-emphasis"},ot={class:"d-flex justify-space-between mb-2"},dt=g(()=>e("span",null,"Bag Total",-1)),nt=g(()=>e("div",{class:"d-flex justify-space-between mb-2"},[e("span",null,"Coupon Discount"),e("a",{href:"#",class:"font-weight-medium"},"Apply Coupon")],-1)),rt={class:"d-flex justify-space-between mb-2"},it=g(()=>e("span",null,"Order Total",-1)),ct={class:"d-flex justify-space-between"},ut=g(()=>e("span",null,"Delivery Charges",-1)),pt=g(()=>e("span",{class:"text-decoration-line-through text-disabled me-2"},"$5.00",-1)),mt=g(()=>e("h6",{class:"text-base font-weight-medium"}," Total ",-1)),_t={class:"text-base font-weight-medium"},ht={__name:"Cart",props:{currentStep:{type:Number,required:!1},checkoutData:{type:null,required:!0}},emits:["update:currentStep","update:checkout-data"],setup($,{emit:k}){const r=$,a=P(r.checkoutData),b=y=>{a.value.cartItems=a.value.cartItems.filter(x=>x.id!==y.id),console.log(a.value.cartItems)},d=q(()=>a.value.orderAmount=a.value.cartItems.reduce((y,x)=>y+x.price*x.quantity,0)),f=()=>{k("update:checkout-data",a.value)},n=()=>{f(),k("update:currentStep",r.currentStep?r.currentStep+1:1)};return R(()=>r.currentStep,f),(y,x)=>{const O=oe("IconBtn"),c=M;return l(a)?(m(),T(U,{key:0},{default:s(()=>[t(h,{cols:"12",md:"8"},{default:s(()=>[t(W,{color:"success",variant:"tonal"},{prepend:s(()=>[t(C,{size:"34",icon:"tabler-bookmarks"})]),default:s(()=>[t(Y,{class:"text-success mb-3"},{default:s(()=>[u(" Available Offers ")]),_:1}),qe,Ge]),_:1}),e("h6",Ee," My Shopping Bag ("+o(l(a).cartItems.length)+" Items) ",1),e("div",Fe,[(m(!0),v(S,null,B(l(a).cartItems,(_,i)=>(m(),v("div",{key:_.name,class:I(["d-flex align-center gap-3 pa-5 position-relative flex-column flex-sm-row",i?"border-t":""])},[t(O,{class:"checkout-item-remove-btn",onClick:p=>b(_)},{default:s(()=>[t(C,{size:"20",icon:"tabler-x"})]),_:2},1032,["onClick"]),e("div",null,[t(F,{width:"140",src:_.image},null,8,["src"])]),e("div",{class:I(["d-flex w-100",y.$vuetify.display.width<=700?"flex-column":"flex-row"])},[e("div",null,[e("h6",Re,o(_.name),1),e("div",ze,[Le,e("span",Me,o(_.seller),1),t(A,{color:_.inStock?"success":"error",label:""},{default:s(()=>[e("span",We,o(_.inStock?"In Stock":"Out of Stock"),1)]),_:2},1032,["color"])]),e("div",Ye,[t(ie,{density:"compact","model-value":_.rating,readonly:""},null,8,["model-value"])]),t(c,{modelValue:_.quantity,"onUpdate:modelValue":p=>_.quantity=p,type:"number",style:{width:"7.5rem"},density:"compact"},null,8,["modelValue","onUpdate:modelValue"])]),t(H),e("div",{class:I(["d-flex flex-column justify-space-between mt-5",y.$vuetify.display.width<=700?"text-start":"text-end"])},[e("p",He,[e("span",Je,"$"+o(_.price),1),Ke,e("span",Qe,"$"+o(_.discountPrice),1)]),e("div",null,[t(D,{variant:"tonal"},{default:s(()=>[u(" move to wishlist ")]),_:1})])],2)],2)],2))),128))]),e("div",Xe,[Ze,t(C,{icon:"tabler-chevron-right",class:"flip-in-rtl"})])]),_:1}),t(h,{cols:"12",md:"4"},{default:s(()=>[t(G,{flat:"",variant:"outlined"},{default:s(()=>[t(V,null,{default:s(()=>[et,e("div",tt,[t(c,{modelValue:l(a).promoCode,"onUpdate:modelValue":x[0]||(x[0]=_=>l(a).promoCode=_),density:"compact",placeholder:"Enter Promo Code"},null,8,["modelValue"]),t(D,{variant:"tonal",onClick:f},{default:s(()=>[u(" Apply ")]),_:1})]),st]),_:1}),t(j),t(V,null,{default:s(()=>[at,e("div",lt,[e("div",ot,[dt,e("span",null,"$"+o(l(d))+".00",1)]),nt,e("div",rt,[it,e("span",null,"$"+o(l(d))+".00",1)]),e("div",ct,[ut,e("div",null,[pt,t(A,{label:"",color:"success"},{default:s(()=>[u(" Free ")]),_:1})])])])]),_:1}),t(j),t(V,{class:"d-flex justify-space-between py-4"},{default:s(()=>[mt,e("h6",_t," $"+o(l(d))+".00 ",1)]),_:1})]),_:1}),t(D,{block:"",class:"mt-4",onClick:n},{default:s(()=>[u(" Place Order ")]),_:1})]),_:1})]),_:1})):L("",!0)}}},ft=le(ht,[["__scopeId","data-v-953625fc"]]),vt={class:"text-base"},bt={class:"text-center"},yt=e("h5",{class:"text-h5 mb-3"}," Thank You! 😇 ",-1),gt=e("p",null,[u(" Your order "),e("span",{class:"text-primary"},"#1536548131"),u(" has been placed! ")],-1),xt=e("p",{class:"mb-0"},[u(" We sent an email to "),e("span",{class:"text-primary"},"john.doe@example.com"),u(" with your order confirmation and receipt. ")],-1),$t=e("p",null,"If the email hasn't arrived within two minutes, please check your spam folder to see if the email was routed there.",-1),kt={class:"d-flex align-center gap-2 justify-center"},wt=e("span",null,"Time placed: 25/05/2020 13:35pm",-1),Ct={class:"d-flex align-center gap-2 text-high-emphasis mb-4"},Vt=e("span",{class:"text-base font-weight-medium"}," Shipping ",-1),St={class:"mb-1"},Dt={class:"mb-4"},At={class:"font-weight-medium"},It={class:"d-flex align-center gap-2 text-high-emphasis mb-4"},Pt=e("span",{class:"text-base font-weight-medium"}," Billing Address ",-1),Nt={class:"mb-1"},Ut={class:"mb-4"},jt={class:"font-weight-medium"},Tt={class:"d-flex align-center gap-2 text-high-emphasis mb-4"},Bt=e("span",{class:"text-base font-weight-medium"}," Shipping Method ",-1),Ot=e("p",{class:"font-weight-medium"}," Preferred Method: ",-1),qt={class:"mb-0"},Gt={class:"border rounded"},Et={class:"text-base font-weight-regular mb-4"},Ft={class:"d-flex align-center text-no-wrap gap-2 text-base"},Rt=e("span",{class:"text-disabled"},"Sold by:",-1),zt={class:"text-primary"},Lt={class:"text-base mb-0"},Mt={class:"text-primary"},Wt=e("span",null,"/",-1),Yt={class:"text-decoration-line-through text-disabled"},Ht={class:"border rounded"},Jt={class:"border-b pa-5"},Kt=e("h6",{class:"text-base font-weight-medium mb-3"}," Price Details ",-1),Qt={class:"d-flex align-center justify-space-between text-sm mb-3"},Xt=e("span",{class:"text-high-emphasis"},"Order Total",-1),Zt={class:"d-flex align-center justify-space-between text-sm"},es=e("span",{class:"text-high-emphasis"},"Delivery Charges",-1),ts={key:0},ss=e("span",{class:"text-decoration-line-through text-disabled me-2"},"$5.00",-1),as={key:1},ls={class:"d-flex align-center justify-space-between text-high-emphasis font-weight-medium px-5 py-3"},os=e("span",null,"Total",-1),ds={__name:"Confirmation",props:{currentStep:{type:Number,required:!1},checkoutData:{type:null,required:!0}},emits:["update:currentStep","update:checkout-data"],setup($,{emit:k}){const r=$,a=q(()=>r.checkoutData.addresses.filter(d=>d.value===r.checkoutData.deliveryAddress)),b=q(()=>r.checkoutData.deliverySpeed==="overnight"?{method:"Overnight Delivery",desc:"In 1 business day."}:r.checkoutData.deliverySpeed==="express"?{method:"Express Delivery",desc:"Normally in 3-4 business days"}:{method:"Standard Delivery",desc:"Normally in 1 Week"});return(d,f)=>(m(),v("section",vt,[e("div",bt,[yt,gt,xt,$t,e("div",kt,[t(C,{size:"20",icon:"tabler-clock"}),wt])]),t(U,{class:"border rounded ma-0 mt-6"},{default:s(()=>[t(h,{cols:"12",md:"4",class:I(["pa-5",d.$vuetify.display.mdAndUp?"border-e":"border-b"])},{default:s(()=>[e("div",Ct,[t(C,{icon:"tabler-map-pin"}),Vt]),(m(!0),v(S,null,B(l(a),n=>(m(),v(S,{key:n.value},[e("p",St,o(n.title),1),e("p",Dt,o(n.desc),1),e("span",At,"+"+o(n.subtitle),1)],64))),128))]),_:1},8,["class"]),t(h,{cols:"12",md:"4",class:I(["pa-5",d.$vuetify.display.mdAndUp?"border-e":"border-b"])},{default:s(()=>[e("div",It,[t(C,{icon:"tabler-credit-card"}),Pt]),(m(!0),v(S,null,B(l(a),n=>(m(),v(S,{key:n.value},[e("p",Nt,o(n.title),1),e("p",Ut,o(n.desc),1),e("span",jt,"+"+o(n.subtitle),1)],64))),128))]),_:1},8,["class"]),t(h,{cols:"12",md:"4",class:"pa-5"},{default:s(()=>[e("div",Tt,[t(C,{icon:"tabler-ship"}),Bt]),Ot,e("p",qt,o(l(b).method),1),e("span",null,"( "+o(l(b).desc)+" )",1)]),_:1})]),_:1}),t(U,null,{default:s(()=>[t(h,{cols:"12",md:"9"},{default:s(()=>[e("div",Gt,[(m(!0),v(S,null,B(r.checkoutData.cartItems,(n,y)=>(m(),v("div",{key:n.name,class:I(["d-flex align-start gap-3 pa-5 position-relative flex-column flex-sm-row",y?"border-t":""])},[e("div",null,[t(F,{width:"80",src:n.image},null,8,["src"])]),e("div",{class:I(["d-flex w-100 pt-3",d.$vuetify.display.width<=700?"flex-column":"flex-row"])},[e("div",null,[e("h6",Et,o(n.name),1),e("div",Ft,[Rt,e("span",zt,o(n.seller),1),t(A,{color:n.inStock?"success":"error",label:""},{default:s(()=>[e("span",null,o(n.inStock?"In Stock":"Out of Stock"),1)]),_:2},1032,["color"])])]),t(H),e("div",{class:I(["d-flex flex-column justify-space-between mt-3",d.$vuetify.display.width<=700?"text-start":"text-end"])},[e("p",Lt,[e("span",Mt,"$"+o(n.price),1),Wt,e("span",Yt,"$"+o(n.discountPrice),1)])],2)],2)],2))),128))])]),_:1}),t(h,{cols:"12",md:"3"},{default:s(()=>[e("div",Ht,[e("div",Jt,[Kt,e("div",Qt,[Xt,e("span",null,"$"+o(r.checkoutData.orderAmount)+".00",1)]),e("div",Zt,[es,r.checkoutData.deliverySpeed==="free"?(m(),v("div",ts,[ss,t(A,{color:"success",label:""},{default:s(()=>[u(" Free ")]),_:1})])):(m(),v("div",as,[e("span",null,"$"+o(r.checkoutData.deliveryCharges),1)]))])]),e("div",ls,[os,e("span",null,"$"+o(r.checkoutData.orderAmount+r.checkoutData.deliveryCharges)+".00",1)])])]),_:1})]),_:1})]))}},ns=e("p",{class:"mb-1"}," - 10% Instant Discount on Bank of America Corp Bank Debit and Credit cards ",-1),rs={class:"mt-4"},is=e("p",{class:"text-base text-high-emphasis"}," Cash on Delivery is a type of payment method where the recipient make payment for the order at the time of delivery rather than in advance. ",-1),cs=e("h6",{class:"text-base font-weight-medium mb-4"}," Enter Gift Card Details ",-1),us=e("h6",{class:"text-base font-weight-medium mb-4"}," Price Details ",-1),ps={class:"d-flex justify-space-between text-base mb-2"},ms=e("span",{class:"text-high-emphasis"},"Order Total",-1),_s={class:"d-flex justify-space-between text-base"},hs=e("span",{class:"text-high-emphasis"},"Delivery Charges",-1),fs={key:0},vs=e("span",{class:"text-decoration-line-through text-disabled me-2"},"$5.00",-1),bs={key:1},ys={class:"d-flex justify-space-between text-base mb-2"},gs=e("span",{class:"text-high-emphasis font-weight-medium"},"Total",-1),xs={class:"d-flex justify-space-between text-base mb-4"},$s=e("span",{class:"text-high-emphasis font-weight-medium"},"Deliver to:",-1),ks={class:"text-base font-weight-medium"},ws={class:"text-base mb-1"},Cs={class:"text-base mb-3"},Vs=e("a",{href:"#",class:"font-weight-medium text-base"},"Change address",-1),Ss={__name:"Payment",props:{currentStep:{type:Number,required:!1},checkoutData:{type:null,required:!0}},emits:["update:currentStep","update:checkout-data"],setup($,{emit:k}){const r=$,a=P(r.checkoutData),b=P("card"),d=P({cardNumber:null,cardName:"",cardExpiry:"",cardCvv:null,isCardSave:!0}),f=P({giftCardNumber:null,giftCardPin:null}),n=q(()=>a.value.addresses.filter(O=>O.value===a.value.deliveryAddress)),y=()=>{k("update:checkout-data",a.value)},x=()=>{y(),k("update:currentStep",r.currentStep?r.currentStep+1:1)};return R(()=>r.currentStep,y),(O,c)=>{const _=M;return m(),T(U,null,{default:s(()=>[t(h,{cols:"12",md:"8"},{default:s(()=>[t(W,{color:"success",variant:"tonal",class:"mb-4"},{prepend:s(()=>[t(C,{icon:"tabler-bookmarks",size:"34"})]),default:s(()=>[t(Y,{class:"text-success mb-3"},{default:s(()=>[u(" Bank Offers ")]),_:1}),ns]),_:1}),t(ce,{modelValue:l(b),"onUpdate:modelValue":c[0]||(c[0]=i=>w(b)?b.value=i:null),class:"v-tabs-pill",density:"comfortable"},{default:s(()=>[t(E,{value:"card"},{default:s(()=>[u(" Card ")]),_:1}),t(E,{value:"cash-on-delivery"},{default:s(()=>[u(" Cash on Delivery ")]),_:1}),t(E,{value:"gift-card"},{default:s(()=>[u(" Gift Card ")]),_:1})]),_:1},8,["modelValue"]),t(J,{modelValue:l(b),"onUpdate:modelValue":c[8]||(c[8]=i=>w(b)?b.value=i:null),class:"mt-5",style:{"max-width":"600px"}},{default:s(()=>[t(N,{value:"card"},{default:s(()=>[t(z,{class:"mt-3"},{default:s(()=>[t(U,null,{default:s(()=>[t(h,{cols:"12"},{default:s(()=>[t(_,{modelValue:l(d).cardNumber,"onUpdate:modelValue":c[1]||(c[1]=i=>l(d).cardNumber=i),type:"number",label:"Card Number"},null,8,["modelValue"])]),_:1}),t(h,{cols:"12",md:"6"},{default:s(()=>[t(_,{modelValue:l(d).cardName,"onUpdate:modelValue":c[2]||(c[2]=i=>l(d).cardName=i),label:"Name"},null,8,["modelValue"])]),_:1}),t(h,{cols:"6",md:"3"},{default:s(()=>[t(_,{modelValue:l(d).cardExpiry,"onUpdate:modelValue":c[3]||(c[3]=i=>l(d).cardExpiry=i),label:"Expiry"},null,8,["modelValue"])]),_:1}),t(h,{cols:"6",md:"3"},{default:s(()=>[t(_,{modelValue:l(d).cardCvv,"onUpdate:modelValue":c[4]||(c[4]=i=>l(d).cardCvv=i),label:"CVV",type:"number"},{"append-inner":s(()=>[t(ue,{text:"Card Verification Value",location:"bottom"},{activator:s(({props:i})=>[t(C,re(i,{size:"20",icon:"tabler-help"}),null,16)]),_:1})]),_:1},8,["modelValue"])]),_:1}),t(h,{cols:"12"},{default:s(()=>[t(pe,{modelValue:l(d).isCardSave,"onUpdate:modelValue":c[5]||(c[5]=i=>l(d).isCardSave=i),label:"Save Card for future billing?"},null,8,["modelValue"]),e("div",rs,[t(D,{class:"me-3",onClick:x},{default:s(()=>[u(" Checkout ")]),_:1}),t(D,{variant:"tonal",color:"secondary"},{default:s(()=>[u(" Reset ")]),_:1})])]),_:1})]),_:1})]),_:1})]),_:1}),t(N,{value:"cash-on-delivery"},{default:s(()=>[is,t(D,{onClick:x},{default:s(()=>[u(" Pay on delivery ")]),_:1})]),_:1}),t(N,{value:"gift-card"},{default:s(()=>[cs,t(z,null,{default:s(()=>[t(U,null,{default:s(()=>[t(h,{cols:"12"},{default:s(()=>[t(_,{modelValue:l(f).giftCardNumber,"onUpdate:modelValue":c[6]||(c[6]=i=>l(f).giftCardNumber=i),label:"Gift Card Number"},null,8,["modelValue"])]),_:1}),t(h,{cols:"12"},{default:s(()=>[t(_,{modelValue:l(f).giftCardPin,"onUpdate:modelValue":c[7]||(c[7]=i=>l(f).giftCardPin=i),label:"Gift Card Pin"},null,8,["modelValue"])]),_:1}),t(h,{cols:"12"},{default:s(()=>[t(D,{onClick:x},{default:s(()=>[u(" Redeem Gift Card ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1}),t(h,{cols:"12",md:"4"},{default:s(()=>[t(G,{flat:"",variant:"outlined"},{default:s(()=>[t(V,null,{default:s(()=>[us,e("div",ps,[ms,e("span",null,"$"+o(l(a).orderAmount)+".00",1)]),e("div",_s,[hs,l(a).deliverySpeed==="free"?(m(),v("div",fs,[vs,t(A,{color:"success",label:""},{default:s(()=>[u(" Free ")]),_:1})])):(m(),v("div",bs,[e("span",null,"$"+o(l(a).deliveryCharges),1)]))])]),_:1}),t(j),t(V,null,{default:s(()=>[e("div",ys,[gs,e("span",null,"$"+o(l(a).orderAmount+l(a).deliveryCharges)+".00",1)]),e("div",xs,[$s,t(A,{color:"primary",class:"text-capitalize",label:""},{default:s(()=>[u(o(l(a).deliveryAddress),1)]),_:1})]),(m(!0),v(S,null,B(l(n),i=>(m(),v(S,{key:i.value},[e("h6",ks,o(i.title),1),e("p",ws,o(i.desc),1),e("p",Cs," Mobile : "+o(i.subtitle),1)],64))),128)),Vs]),_:1})]),_:1})]),_:1})]),_:1})}}},Ds="/assets/easytouch/frontend/assets/google-home-4be81e8d.png",As="/assets/easytouch/frontend/assets/iphone-11-dc8d7c8d.png";const pa={__name:"checkout",setup($){const k=[{title:"Cart",icon:"custom-cart"},{title:"Address",icon:"custom-address"},{title:"Payment",icon:"custom-payment"},{title:"Confirmation",icon:"custom-trending"}],r=P({cartItems:[{id:1,name:"Google - Google Home - White",seller:"Google",inStock:!0,rating:4,price:299,discountPrice:359,image:Ds,quantity:1,estimatedDelivery:"18th Nov 2021"},{id:2,name:"Apple iPhone 11 (64GB, Black)",seller:"Apple",inStock:!0,rating:4,price:899,discountPrice:999,image:As,quantity:1,estimatedDelivery:"20th Nov 2021"}],promoCode:"",orderAmount:1198,deliveryAddress:"home",deliverySpeed:"free",deliveryCharges:0,addresses:[{title:"John Doe (Default)",desc:"4135 Parkway Street, Los Angeles, CA, 90017",subtitle:"1234567890",value:"home"},{title:"ACME Inc.",desc:"87 Hoffman Avenue, New York, NY, 10016",subtitle:"1234567890",value:"office"}]}),a=P(0);return(b,d)=>{const f=K;return m(),T(G,null,{default:s(()=>[t(V,null,{default:s(()=>[t(f,{"current-step":l(a),"onUpdate:currentStep":d[0]||(d[0]=n=>w(a)?a.value=n:null),class:"checkout-stepper",items:k,direction:b.$vuetify.display.smAndUp?"horizontal":"vertical"},null,8,["current-step","direction"])]),_:1}),t(j),t(V,null,{default:s(()=>[t(J,{modelValue:l(a),"onUpdate:modelValue":d[8]||(d[8]=n=>w(a)?a.value=n:null),class:"disable-tab-transition"},{default:s(()=>[t(N,null,{default:s(()=>[t(ft,{"current-step":l(a),"onUpdate:currentStep":d[1]||(d[1]=n=>w(a)?a.value=n:null),"checkout-data":l(r),"onUpdate:checkoutData":d[2]||(d[2]=n=>w(r)?r.value=n:null)},null,8,["current-step","checkout-data"])]),_:1}),t(N,null,{default:s(()=>[t(Oe,{"current-step":l(a),"onUpdate:currentStep":d[3]||(d[3]=n=>w(a)?a.value=n:null),"checkout-data":l(r),"onUpdate:checkoutData":d[4]||(d[4]=n=>w(r)?r.value=n:null)},null,8,["current-step","checkout-data"])]),_:1}),t(N,null,{default:s(()=>[t(Ss,{"current-step":l(a),"onUpdate:currentStep":d[5]||(d[5]=n=>w(a)?a.value=n:null),"checkout-data":l(r),"onUpdate:checkoutData":d[6]||(d[6]=n=>w(r)?r.value=n:null)},null,8,["current-step","checkout-data"])]),_:1}),t(N,null,{default:s(()=>[t(ds,{"checkout-data":l(r),"onUpdate:checkoutData":d[7]||(d[7]=n=>w(r)?r.value=n:null)},null,8,["checkout-data"])]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1})}}};export{pa as default};
//# sourceMappingURL=checkout-9fdf6c85.js.map