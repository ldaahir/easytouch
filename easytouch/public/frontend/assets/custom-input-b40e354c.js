import{_ as v,f as g,l as I,d as y,u as i,I as r,J as d,K as a,L as h,M as R,N as V,n as k,k as n,S as W,P as p,q as m,T as x,V as z,R as C}from"./frappe-ui-26ef7369.js";import{a as b,V as f}from"./VRow-a794fb6c.js";import{V as w}from"./VInput-ea621834.js";import{V as $}from"./VCheckbox-ad265177.js";import{a as j,V as S}from"./VRadioGroup-d6bf20f6.js";import{g as q}from"./index-e1b913cd.js";import{_ as B}from"./CustomRadiosWithIcon-1ca19d79.js";import{V as G}from"./VSpacer-1617770f.js";import{_ as F}from"./AppCardCode-cc96e90f.js";import{_ as A}from"./CustomRadios-1463ed99.js";import"./transition-6a62c7af.js";import"./VCheckboxBtn-fb30a6d7.js";import"./VSelectionControl-9d86a850.js";import"./VAvatar-7de7fc90.js";import"./VImg-9de85dec.js";import"./vue.runtime.esm-bundler-4877976f.js";import"./VCard-98364713.js";import"./VDivider-66cdee18.js";const P=["src"],E={__name:"CustomCheckboxesWithImage",props:{selectedCheckbox:{type:Array,required:!0},checkboxContent:{type:Array,required:!0},gridColumn:{type:null,required:!1}},emits:["update:selectedCheckbox"],setup(u,{emit:l}){const o=u,t=g(structuredClone(I(o.selectedCheckbox)));return y(t,()=>{l("update:selectedCheckbox",t.value)}),(c,s)=>o.checkboxContent&&i(t)?(r(),d(f,{key:0,modelValue:i(t),"onUpdate:modelValue":s[1]||(s[1]=e=>m(t)?t.value=e:null)},{default:a(()=>[(r(!0),h(R,null,V(o.checkboxContent,e=>(r(),d(b,k({key:e.value},u.gridColumn),{default:a(()=>[n(w,{class:W(["custom-input custom-checkbox rounded cursor-pointer w-100",i(t).includes(e.value)?"active":""])},{default:a(()=>[p("div",null,[n($,{modelValue:i(t),"onUpdate:modelValue":s[0]||(s[0]=_=>m(t)?t.value=_:null),value:e.value},null,8,["modelValue","value"])]),p("img",{src:e.bgImage,alt:"bg-img",class:"custom-checkbox-image"},null,8,P)]),_:2},1032,["class"])]),_:2},1040))),128))]),_:1},8,["modelValue"])):x("",!0)}},T=v(E,[["__scopeId","data-v-4388636f"]]),L="/assets/easytouch/frontend/assets/custom-checkbox-img-1-ad01355a.png",J="/assets/easytouch/frontend/assets/custom-checkbox-img-2-2d35a86b.png",N="/assets/easytouch/frontend/assets/custom-checkbox-img-3-1a4526bb.png",O={__name:"DemoCustomInputCustomCheckboxesWithImage",setup(u){const l=[{bgImage:L,value:"basic"},{bgImage:J,value:"premium"},{bgImage:N,value:"enterprise"}],o=g(["basic"]);return(t,c)=>{const s=T;return r(),d(s,{"selected-checkbox":i(o),"onUpdate:selectedCheckbox":c[0]||(c[0]=e=>m(o)?o.value=e:null),"checkbox-content":l,"grid-column":{sm:"4",cols:"12"}},null,8,["selected-checkbox"])}}};const K=["src"],M={__name:"CustomRadiosWithImage",props:{selectedRadio:{type:String,required:!0},radioContent:{type:Array,required:!0},gridColumn:{type:null,required:!1}},emits:["update:selectedRadio"],setup(u,{emit:l}){const o=u,t=g(structuredClone(I(o.selectedRadio)));return y(t,()=>{l("update:selectedRadio",t.value)}),(c,s)=>o.radioContent?(r(),d(S,{key:0,modelValue:i(t),"onUpdate:modelValue":s[0]||(s[0]=e=>m(t)?t.value=e:null)},{default:a(()=>[n(f,null,{default:a(()=>[(r(!0),h(R,null,V(o.radioContent,e=>(r(),d(b,k({key:e.bgImage},u.gridColumn),{default:a(()=>[n(w,{class:W(["custom-input custom-radio rounded cursor-pointer w-100",i(t)===e.value?"active":""])},{default:a(()=>[p("img",{src:e.bgImage,alt:"bg-img",class:"custom-radio-image"},null,8,K),n(j,{value:e.value},null,8,["value"])]),_:2},1032,["class"])]),_:2},1040))),128))]),_:1})]),_:1},8,["modelValue"])):x("",!0)}},H=v(M,[["__scopeId","data-v-76689b43"]]),Q="/assets/easytouch/frontend/assets/custom-radio-img-1-9fd6addb.png",X="/assets/easytouch/frontend/assets/custom-radio-img-2-81c76549.png",Y="/assets/easytouch/frontend/assets/custom-radio-img-3-9150de6f.png",Z={__name:"DemoCustomInputCustomRadiosWithImage",setup(u){const l=[{bgImage:Q,value:"basic"},{bgImage:X,value:"premium"},{bgImage:Y,value:"enterprise"}],o=g("basic");return(t,c)=>{const s=H;return r(),d(s,{"selected-radio":i(o),"onUpdate:selectedRadio":c[0]||(c[0]=e=>m(o)?o.value=e:null),"radio-content":l,"grid-column":{sm:"4",cols:"12"}},null,8,["selected-radio"])}}};const ee={class:"d-flex flex-column align-center text-center gap-2"},te={class:"cr-title text-base"},oe={class:"text-sm clamp-text mb-0"},se={__name:"CustomCheckboxesWithIcon",props:{selectedCheckbox:{type:Array,required:!0},checkboxContent:{type:Array,required:!0},gridColumn:{type:null,required:!1}},emits:["update:selectedCheckbox"],setup(u,{emit:l}){const o=u,t=g(structuredClone(I(o.selectedCheckbox)));return y(t,()=>{l("update:selectedCheckbox",t.value)}),(c,s)=>o.checkboxContent&&i(t)?(r(),d(f,{key:0,modelValue:i(t),"onUpdate:modelValue":s[1]||(s[1]=e=>m(t)?t.value=e:null)},{default:a(()=>[(r(!0),h(R,null,V(o.checkboxContent,e=>(r(),d(b,k({key:e.title},u.gridColumn),{default:a(()=>[n(w,{class:W(["custom-input custom-checkbox-icon rounded cursor-pointer",i(t).includes(e.value)?"active":""])},{default:a(()=>[z(c.$slots,"default",{item:e},()=>[p("div",ee,[n(q,k(e.icon,{class:"text-high-emphasis"}),null,16),p("h6",te,C(e.title),1),p("p",oe,C(e.desc),1)])],!0),p("div",null,[n($,{modelValue:i(t),"onUpdate:modelValue":s[0]||(s[0]=_=>m(t)?t.value=_:null),value:e.value},null,8,["modelValue","value"])])]),_:2},1032,["class"])]),_:2},1040))),128))]),_:3},8,["modelValue"])):x("",!0)}},ce=v(se,[["__scopeId","data-v-18cc8252"]]),ne={__name:"DemoCustomInputCustomCheckboxesWithIcon",setup(u){const l=[{title:"Backup",desc:"Backup every file from your project.",value:"backup",icon:{icon:"tabler-server-2",size:"28"}},{title:"Encrypt",desc:"Translate your data to encrypted text.",value:"encrypt",icon:{icon:"tabler-ban",size:"28"}},{title:"Site Lock",desc:"Security tool to protect your website.",value:"site-lock",icon:{icon:"tabler-lock",size:"28"}}],o=g(["basic"]);return(t,c)=>{const s=ce;return r(),d(s,{"selected-checkbox":i(o),"onUpdate:selectedCheckbox":c[0]||(c[0]=e=>m(o)?o.value=e:null),"checkbox-content":l,"grid-column":{sm:"4",cols:"12"}},null,8,["selected-checkbox"])}}},ae={__name:"DemoCustomInputCustomRadiosWithIcon",setup(u){const l=[{title:"Starter",desc:"For freelancers who work with multiple clients",value:"starter",icon:{icon:"tabler-rocket",size:"28"}},{title:"Personal",desc:"Join our talented community of talented digital agencies",value:"personal",icon:{icon:"tabler-star",size:"28"}},{title:"Enterprise",desc:"Team plan for free upto 15 seats",value:"enterprise",icon:{icon:"tabler-crown",size:"28"}}],o=g("basic");return(t,c)=>{const s=B;return r(),d(s,{"selected-radio":i(o),"onUpdate:selectedRadio":c[0]||(c[0]=e=>m(o)?o.value=e:null),"radio-content":l,"grid-column":{sm:"4",cols:"12"}},null,8,["selected-radio"])}}};const le={class:"flex-grow-1"},ie={class:"d-flex align-center mb-1"},re={class:"cr-title text-base"},ue={key:0,class:"text-disabled text-base"},de={class:"text-sm mb-0"},me={__name:"CustomCheckboxes",props:{selectedCheckbox:{type:Array,required:!0},checkboxContent:{type:Array,required:!0},gridColumn:{type:null,required:!1}},emits:["update:selectedCheckbox"],setup(u,{emit:l}){const o=u,t=g(structuredClone(I(o.selectedCheckbox)));return y(t,()=>{l("update:selectedCheckbox",t.value)}),(c,s)=>o.checkboxContent&&i(t)?(r(),d(f,{key:0,modelValue:i(t),"onUpdate:modelValue":s[1]||(s[1]=e=>m(t)?t.value=e:null)},{default:a(()=>[(r(!0),h(R,null,V(o.checkboxContent,e=>(r(),d(b,k({key:e.title},u.gridColumn),{default:a(()=>[n(w,{class:W(["custom-input custom-checkbox rounded cursor-pointer",i(t).includes(e.value)?"active":""])},{default:a(()=>[p("div",null,[n($,{modelValue:i(t),"onUpdate:modelValue":s[0]||(s[0]=_=>m(t)?t.value=_:null),value:e.value},null,8,["modelValue","value"])]),z(c.$slots,"default",{item:e},()=>[p("div",le,[p("div",ie,[p("h6",re,C(e.title),1),n(G),e.subtitle?(r(),h("span",ue,C(e.subtitle),1)):x("",!0)]),p("p",de,C(e.desc),1)])],!0)]),_:2},1032,["class"])]),_:2},1040))),128))]),_:3},8,["modelValue"])):x("",!0)}},pe=v(me,[["__scopeId","data-v-b4c64ae8"]]),be={__name:"DemoCustomInputCustomCheckboxes",setup(u){const l=[{title:"Discount",subtitle:"20%",desc:"Wow! Get 20% off on your next purchase!",value:"discount"},{title:"Updates",subtitle:"Free",desc:"Get Updates regarding related products.",value:"updates"}],o=g(["basic"]);return(t,c)=>{const s=pe;return r(),d(s,{"selected-checkbox":i(o),"onUpdate:selectedCheckbox":c[0]||(c[0]=e=>m(o)?o.value=e:null),"checkbox-content":l,"grid-column":{sm:"6",cols:"12"}},null,8,["selected-checkbox"])}}},ge={__name:"DemoCustomInputCustomRadios",setup(u){const l=[{title:"Basic",subtitle:"Free",desc:"Get 1 project with 1 team member.",value:"basic"},{title:"Premium",subtitle:"$45.80",value:"premium",desc:"Get 5 projects with 5 team members."}],o=g("basic");return(t,c)=>{const s=A;return r(),d(s,{"selected-radio":i(o),"onUpdate:selectedRadio":c[0]||(c[0]=e=>m(o)?o.value=e:null),"radio-content":l,"grid-column":{sm:"6",cols:"12"}},null,8,["selected-radio"])}}},_e={ts:`<script setup lang="ts">
import type { CustomInputContent } from '@core/types'

const checkboxContent: CustomInputContent[] = [
  {
    title: 'Discount',
    subtitle: '20%',
    desc: 'Wow! Get 20% off on your next purchase!',
    value: 'discount',
  },
  {
    title: 'Updates',
    subtitle: 'Free',
    desc: 'Get Updates regarding related products.',
    value: 'updates',
  },
]

const selectedCheckbox = ref(['basic'])
<\/script>

<template>
  <CustomCheckboxes
    v-model:selected-checkbox="selectedCheckbox"
    :checkbox-content="checkboxContent"
    :grid-column="{ sm: '6', cols: '12' }"
  />
</template>
`,js:`<script setup>
const checkboxContent = [
  {
    title: 'Discount',
    subtitle: '20%',
    desc: 'Wow! Get 20% off on your next purchase!',
    value: 'discount',
  },
  {
    title: 'Updates',
    subtitle: 'Free',
    desc: 'Get Updates regarding related products.',
    value: 'updates',
  },
]

const selectedCheckbox = ref(['basic'])
<\/script>

<template>
  <CustomCheckboxes
    v-model:selected-checkbox="selectedCheckbox"
    :checkbox-content="checkboxContent"
    :grid-column="{ sm: '6', cols: '12' }"
  />
</template>
`},Ce={ts:`<script setup lang="ts">
import type { CustomInputContent } from '@core/types'

const checkboxContent: CustomInputContent[] = [
  {
    title: 'Backup',
    desc: 'Backup every file from your project.',
    value: 'backup',
    icon: { icon: 'tabler-server-2', size: '28' },
  },
  {
    title: 'Encrypt',
    desc: 'Translate your data to encrypted text.',
    value: 'encrypt',
    icon: { icon: 'tabler-ban', size: '28' },
  },
  {
    title: 'Site Lock',
    desc: 'Security tool to protect your website.',
    value: 'site-lock',
    icon: { icon: 'tabler-lock', size: '28' },
  },
]

const selectedCheckbox = ref(['basic'])
<\/script>

<template>
  <CustomCheckboxesWithIcon
    v-model:selected-checkbox="selectedCheckbox"
    :checkbox-content="checkboxContent"
    :grid-column="{ sm: '4', cols: '12' }"
  />
</template>
`,js:`<script setup>
const checkboxContent = [
  {
    title: 'Backup',
    desc: 'Backup every file from your project.',
    value: 'backup',
    icon: {
      icon: 'tabler-server-2',
      size: '28',
    },
  },
  {
    title: 'Encrypt',
    desc: 'Translate your data to encrypted text.',
    value: 'encrypt',
    icon: {
      icon: 'tabler-ban',
      size: '28',
    },
  },
  {
    title: 'Site Lock',
    desc: 'Security tool to protect your website.',
    value: 'site-lock',
    icon: {
      icon: 'tabler-lock',
      size: '28',
    },
  },
]

const selectedCheckbox = ref(['basic'])
<\/script>

<template>
  <CustomCheckboxesWithIcon
    v-model:selected-checkbox="selectedCheckbox"
    :checkbox-content="checkboxContent"
    :grid-column="{ sm: '4', cols: '12' }"
  />
</template>
`},he={ts:`<script setup lang="ts">
import bg1 from '@images/pages/custom-checkbox-img-1.png'
import bg2 from '@images/pages/custom-checkbox-img-2.png'
import bg3 from '@images/pages/custom-checkbox-img-3.png'

const checkboxContent: { bgImage: string; value: string }[] = [
  {
    bgImage: bg1,
    value: 'basic',
  },
  {
    bgImage: bg2,
    value: 'premium',
  },
  {
    bgImage: bg3,
    value: 'enterprise',
  },
]

const selectedCheckbox = ref(['basic'])
<\/script>

<template>
  <CustomCheckboxesWithImage
    v-model:selected-checkbox="selectedCheckbox"
    :checkbox-content="checkboxContent"
    :grid-column="{ sm: '4', cols: '12' }"
  />
</template>
`,js:`<script setup>
import bg1 from '@images/pages/custom-checkbox-img-1.png'
import bg2 from '@images/pages/custom-checkbox-img-2.png'
import bg3 from '@images/pages/custom-checkbox-img-3.png'

const checkboxContent = [
  {
    bgImage: bg1,
    value: 'basic',
  },
  {
    bgImage: bg2,
    value: 'premium',
  },
  {
    bgImage: bg3,
    value: 'enterprise',
  },
]

const selectedCheckbox = ref(['basic'])
<\/script>

<template>
  <CustomCheckboxesWithImage
    v-model:selected-checkbox="selectedCheckbox"
    :checkbox-content="checkboxContent"
    :grid-column="{ sm: '4', cols: '12' }"
  />
</template>
`},ke={ts:`<script setup lang="ts">
import type { CustomInputContent } from '@core/types'

const radioContent: CustomInputContent[] = [
  {
    title: 'Basic',
    subtitle: 'Free',
    desc: 'Get 1 project with 1 team member.',
    value: 'basic',
  },
  {
    title: 'Premium',
    subtitle: '$45.80',
    value: 'premium',
    desc: 'Get 5 projects with 5 team members.',
  },
]

const selectedRadio = ref('basic')
<\/script>

<template>
  <CustomRadios
    v-model:selected-radio="selectedRadio"
    :radio-content="radioContent"
    :grid-column="{ sm: '6', cols: '12' }"
  />
</template>
`,js:`<script setup>
const radioContent = [
  {
    title: 'Basic',
    subtitle: 'Free',
    desc: 'Get 1 project with 1 team member.',
    value: 'basic',
  },
  {
    title: 'Premium',
    subtitle: '$45.80',
    value: 'premium',
    desc: 'Get 5 projects with 5 team members.',
  },
]

const selectedRadio = ref('basic')
<\/script>

<template>
  <CustomRadios
    v-model:selected-radio="selectedRadio"
    :radio-content="radioContent"
    :grid-column="{ sm: '6', cols: '12' }"
  />
</template>
`},xe={ts:`<script setup lang="ts">
import type { CustomInputContent } from '@core/types'

const radioContent: CustomInputContent[] = [
  {
    title: 'Starter',
    desc: 'For freelancers who work with multiple clients',
    value: 'starter',
    icon: { icon: 'tabler-rocket', size: '28' },
  },
  {
    title: 'Personal',
    desc: 'Join our talented community of talented digital agencies',
    value: 'personal',
    icon: { icon: 'tabler-star', size: '28' },
  },
  {
    title: 'Enterprise',
    desc: 'Team plan for free upto 15 seats',
    value: 'enterprise',
    icon: { icon: 'tabler-crown', size: '28' },
  },
]

const selectedRadio = ref('basic')
<\/script>

<template>
  <CustomRadiosWithIcon
    v-model:selected-radio="selectedRadio"
    :radio-content="radioContent"
    :grid-column="{ sm: '4', cols: '12' }"
  />
</template>
`,js:`<script setup>
const radioContent = [
  {
    title: 'Starter',
    desc: 'For freelancers who work with multiple clients',
    value: 'starter',
    icon: {
      icon: 'tabler-rocket',
      size: '28',
    },
  },
  {
    title: 'Personal',
    desc: 'Join our talented community of talented digital agencies',
    value: 'personal',
    icon: {
      icon: 'tabler-star',
      size: '28',
    },
  },
  {
    title: 'Enterprise',
    desc: 'Team plan for free upto 15 seats',
    value: 'enterprise',
    icon: {
      icon: 'tabler-crown',
      size: '28',
    },
  },
]

const selectedRadio = ref('basic')
<\/script>

<template>
  <CustomRadiosWithIcon
    v-model:selected-radio="selectedRadio"
    :radio-content="radioContent"
    :grid-column="{ sm: '4', cols: '12' }"
  />
</template>
`},fe={ts:`<script setup lang="ts">
import bg1 from '@images/pages/custom-radio-img-1.png'
import bg2 from '@images/pages/custom-radio-img-2.png'
import bg3 from '@images/pages/custom-radio-img-3.png'

const radioContent: { bgImage: string; value: string }[] = [
  {
    bgImage: bg1,
    value: 'basic',
  },
  {
    bgImage: bg2,
    value: 'premium',
  },
  {
    bgImage: bg3,
    value: 'enterprise',
  },
]

const selectedRadio = ref('basic')
<\/script>

<template>
  <CustomRadiosWithImage
    v-model:selected-radio="selectedRadio"
    :radio-content="radioContent"
    :grid-column="{ sm: '4', cols: '12' }"
  />
</template>
`,js:`<script setup>
import bg1 from '@images/pages/custom-radio-img-1.png'
import bg2 from '@images/pages/custom-radio-img-2.png'
import bg3 from '@images/pages/custom-radio-img-3.png'

const radioContent = [
  {
    bgImage: bg1,
    value: 'basic',
  },
  {
    bgImage: bg2,
    value: 'premium',
  },
  {
    bgImage: bg3,
    value: 'enterprise',
  },
]

const selectedRadio = ref('basic')
<\/script>

<template>
  <CustomRadiosWithImage
    v-model:selected-radio="selectedRadio"
    :radio-content="radioContent"
    :grid-column="{ sm: '4', cols: '12' }"
  />
</template>
`},Pe={__name:"custom-input",setup(u){return(l,o)=>{const t=ge,c=F,s=be,e=ae,_=ne,U=Z,D=O;return r(),d(f,null,{default:a(()=>[n(b,{cols:"12",md:"6"},{default:a(()=>[n(c,{title:"Custom Radios",code:ke},{default:a(()=>[n(t)]),_:1},8,["code"])]),_:1}),n(b,{cols:"12",md:"6"},{default:a(()=>[n(c,{title:"Custom Checkboxes",code:_e},{default:a(()=>[n(s)]),_:1},8,["code"])]),_:1}),n(b,{cols:"12",md:"6"},{default:a(()=>[n(c,{title:"Custom Radios With Icon",code:xe},{default:a(()=>[n(e)]),_:1},8,["code"])]),_:1}),n(b,{cols:"12",md:"6"},{default:a(()=>[n(c,{title:"Custom Checkboxes With Icon",code:Ce},{default:a(()=>[n(_)]),_:1},8,["code"])]),_:1}),n(b,{cols:"12",md:"6"},{default:a(()=>[n(c,{title:"Custom Radios With Image",code:fe},{default:a(()=>[n(U)]),_:1},8,["code"])]),_:1}),n(b,{cols:"12",md:"6"},{default:a(()=>[n(c,{title:"Custom Checkboxes With Image",code:he},{default:a(()=>[n(D)]),_:1},8,["code"])]),_:1})]),_:1})}}};export{Pe as default};
//# sourceMappingURL=custom-input-b40e354c.js.map
