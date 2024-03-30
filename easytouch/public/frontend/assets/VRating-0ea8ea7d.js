var T=Object.defineProperty,z=Object.defineProperties;var A=Object.getOwnPropertyDescriptors;var k=Object.getOwnPropertySymbols;var w=Object.prototype.hasOwnProperty,H=Object.prototype.propertyIsEnumerable;var C=(e,o,t)=>o in e?T(e,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[o]=t,r=(e,o)=>{for(var t in o||(o={}))w.call(o,t)&&C(e,t,o[t]);if(k)for(var t of k(o))H.call(o,t)&&C(e,t,o[t]);return e},P=(e,o)=>z(e,A(o));import{J as D,W as $,K as E,a7 as J,aL as K,ac as Q,L as U,$ as W,M as X,Y,a_ as j,bb as q,X as G,T as O,i as Z}from"./index-e43e3799.js";import{c,f as p,k as i,M as B,Q as ee}from"./frappe-ui-b8f10d89.js";const le=D()({name:"VRating",props:r(r(r(r(r({name:String,itemAriaLabel:{type:String,default:"$vuetify.rating.ariaLabel.item"},activeColor:String,color:String,clearable:Boolean,disabled:Boolean,emptyIcon:{type:$,default:"$ratingEmpty"},fullIcon:{type:$,default:"$ratingFull"},halfIncrements:Boolean,hover:Boolean,length:{type:[Number,String],default:5},readonly:Boolean,modelValue:{type:[Number,String],default:0},itemLabels:Array,itemLabelPosition:{type:String,default:"top",validator:e=>["top","bottom"].includes(e)},ripple:Boolean},E()),J()),K()),Q()),U()),emits:{"update:modelValue":e=>!0},setup(e,o){let{slots:t}=o;const{t:F}=W(),{themeClasses:R}=X(e),L=Y(e,"modelValue"),v=c(()=>j(parseFloat(L.value),0,+e.length)),I=c(()=>q(Number(e.length),1)),x=c(()=>I.value.flatMap(a=>e.halfIncrements?[a-.5,a]:[a])),g=p(-1),h=c(()=>x.value.map(a=>{var m;const u=e.hover&&g.value>-1,n=v.value>=a,l=g.value>=a,s=(u?l:n)?e.fullIcon:e.emptyIcon,y=(m=e.activeColor)!=null?m:e.color,b=n||l?y:e.color;return{isFilled:n,isHovered:l,icon:s,color:b}})),N=c(()=>[0,...x.value].map(a=>{function u(){g.value=a}function n(){g.value=-1}function l(){e.disabled||e.readonly||(L.value=v.value===a&&e.clearable?0:a)}return{onMouseenter:e.hover?u:void 0,onMouseleave:e.hover?n:void 0,onClick:l}})),S=c(()=>{var a;return(a=e.name)!=null?a:`v-rating-${G()}`});function f(a){var _,M;let{value:u,index:n,showStar:l=!0}=a;const{onMouseenter:d,onMouseleave:s,onClick:y}=N.value[n+1],b=`${S.value}-${String(u).replace(".","-")}`,m={color:(_=h.value[n])==null?void 0:_.color,density:e.density,disabled:e.disabled,icon:(M=h.value[n])==null?void 0:M.icon,ripple:e.ripple,size:e.size,variant:"plain"};return i(B,null,[i("label",{for:b,class:{"v-rating__item--half":e.halfIncrements&&u%1>0,"v-rating__item--full":e.halfIncrements&&u%1===0},onMouseenter:d,onMouseleave:s,onClick:y},[i("span",{class:"v-rating__hidden"},[F(e.itemAriaLabel,u,e.length)]),l?t.item?t.item(P(r({},h.value[n]),{props:m,value:u,index:n,rating:v.value})):i(Z,m,null):void 0]),i("input",{class:"v-rating__hidden",name:S.value,id:b,type:"radio",value:u,checked:v.value===u,tabindex:-1,readonly:e.readonly,disabled:e.disabled},null)])}function V(a){return t["item-label"]?t["item-label"](a):a.label?i("span",null,[a.label]):i("span",null,[ee(" ")])}return O(()=>{var u;const a=!!((u=e.itemLabels)!=null&&u.length)||t["item-label"];return i(e.tag,{class:["v-rating",{"v-rating--hover":e.hover,"v-rating--readonly":e.readonly},R.value,e.class],style:e.style},{default:()=>[i(f,{value:0,index:-1,showStar:!1},null),I.value.map((n,l)=>{var d,s;return i("div",{class:"v-rating__wrapper"},[a&&e.itemLabelPosition==="top"?V({value:n,index:l,label:(d=e.itemLabels)==null?void 0:d[l]}):void 0,i("div",{class:"v-rating__item"},[e.halfIncrements?i(B,null,[i(f,{value:n-.5,index:l*2},null),i(f,{value:n,index:l*2+1},null)]):i(f,{value:n,index:l},null)]),a&&e.itemLabelPosition==="bottom"?V({value:n,index:l,label:(s=e.itemLabels)==null?void 0:s[l]}):void 0])})]})}),{}}});export{le as V};
//# sourceMappingURL=VRating-0ea8ea7d.js.map
