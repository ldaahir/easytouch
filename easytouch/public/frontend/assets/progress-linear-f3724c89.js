import{_,I as u,L as g,k as e,f,u as v,q as h,K as s,P as r,R as L,J as y,A as k,v as B,d as $,Q as o}from"./frappe-ui-b8f10d89.js";import{G as a}from"./index-e43e3799.js";import{_ as M}from"./AppCardCode-454d9e68.js";import{a as p,V as x}from"./VRow-b8bac363.js";import"./vue.runtime.esm-bundler-c0d7c61a.js";import"./VCard-bd92c839.js";import"./VAvatar-26ec77a4.js";import"./VImg-dcfe0017.js";import"./transition-61bfbac1.js";import"./VDivider-7eec4b6d.js";const I={},D={class:"demo-space-y"};function U(m,l){return u(),g("div",D,[e(a,{color:"rgb(var(--v-theme-primary))","model-value":"75",striped:""}),e(a,{color:"rgb(var(--v-theme-success))","model-value":"55",striped:""}),e(a,{color:"rgb(var(--v-theme-warning))","model-value":"35",striped:""})])}const R=_(I,[["render",U]]),T={class:"demo-space-y"},j={__name:"DemoProgressLinearSlots",setup(m){const l=f(20),c=f(33),d=f(78);return(n,i)=>(u(),g("div",T,[e(a,{modelValue:v(d),"onUpdate:modelValue":i[0]||(i[0]=t=>h(d)?d.value=t:null),color:"primary",height:"8"},null,8,["modelValue"]),e(a,{modelValue:v(l),"onUpdate:modelValue":i[1]||(i[1]=t=>h(l)?l.value=t:null),color:"primary",height:"20"},{default:s(({value:t})=>[r("strong",null,L(Math.ceil(t))+"%",1)]),_:1},8,["modelValue"]),e(a,{modelValue:v(c),"onUpdate:modelValue":i[2]||(i[2]=t=>h(c)?c.value=t:null),height:"20",color:"primary"},{default:s(()=>[r("strong",null,L(Math.ceil(v(c)))+"%",1)]),_:1},8,["modelValue"])]))}},C={},S={class:"demo-space-y"};function N(m,l){return u(),g("div",S,[e(a,{"model-value":"78",height:"8",color:"primary",rounded:!1}),e(a,{"model-value":"20",color:"primary",height:"20",rounded:!1}),e(a,{"model-value":"33",height:"20",color:"primary",rounded:!1})])}const A=_(C,[["render",N]]),Y={};function q(m,l){return u(),y(a,{color:"primary",indeterminate:"",reverse:""})}const E=_(Y,[["render",q]]),G={};function J(m,l){return u(),y(a,{indeterminate:"",color:"primary"})}const K=_(G,[["render",J]]),Q={class:"demo-space-y"},z={__name:"DemoProgressLinearBuffering",setup(m){const l=f(10),c=f(20),d=f(),n=()=>{clearInterval(d.value),d.value=setInterval(()=>{l.value+=Math.random()*(15-5)+5,c.value+=Math.random()*(15-5)+6},2e3)};return k(n),B(()=>{clearInterval(d.value)}),$(l,()=>{if(l.value<100)return!1;l.value=0,c.value=10,n()}),(i,t)=>(u(),g("div",Q,[e(a,{modelValue:v(l),"onUpdate:modelValue":t[0]||(t[0]=V=>h(l)?l.value=V:null),color:"primary",height:"8","buffer-value":v(c)},null,8,["modelValue","buffer-value"])]))}},F={},H={class:"demo-space-y"};function O(m,l){return u(),g("div",H,[e(a,{"model-value":"15","bg-color":"primary",color:"primary"}),e(a,{"model-value":"30","bg-color":"secondary",color:"secondary"}),e(a,{"model-value":"45","bg-color":"success",color:"success"})])}const W=_(F,[["render",O]]),X={ts:`<script setup lang="ts">
const modelValue = ref(10)
const bufferValue = ref(20)
const interval = ref()

const startBuffer = () => {
  clearInterval(interval.value)

  interval.value = setInterval(() => {
    modelValue.value += Math.random() * (15 - 5) + 5
    bufferValue.value += Math.random() * (15 - 5) + 6
  }, 2000)
}

onMounted(startBuffer)

onBeforeUnmount(() => {
  clearInterval(interval.value)
})

watch(modelValue, () => {
  if (modelValue.value < 100)
    return false

  modelValue.value = 0
  bufferValue.value = 10
  startBuffer()
})
<\/script>

<template>
  <div class="demo-space-y">
    <VProgressLinear
      v-model="modelValue"
      color="primary"
      height="8"
      :buffer-value="bufferValue"
    />
  </div>
</template>
`,js:`<script setup>
const modelValue = ref(10)
const bufferValue = ref(20)
const interval = ref()

const startBuffer = () => {
  clearInterval(interval.value)
  interval.value = setInterval(() => {
    modelValue.value += Math.random() * (15 - 5) + 5
    bufferValue.value += Math.random() * (15 - 5) + 6
  }, 2000)
}

onMounted(startBuffer)
onBeforeUnmount(() => {
  clearInterval(interval.value)
})
watch(modelValue, () => {
  if (modelValue.value < 100)
    return false
  modelValue.value = 0
  bufferValue.value = 10
  startBuffer()
})
<\/script>

<template>
  <div class="demo-space-y">
    <VProgressLinear
      v-model="modelValue"
      color="primary"
      height="8"
      :buffer-value="bufferValue"
    />
  </div>
</template>
`},Z={ts:`<template>
  <div class="demo-space-y">
    <VProgressLinear
      model-value="15"
      bg-color="primary"
      color="primary"
    />

    <VProgressLinear
      model-value="30"
      bg-color="secondary"
      color="secondary"
    />

    <VProgressLinear
      model-value="45"
      bg-color="success"
      color="success"
    />
  </div>
</template>
`,js:`<template>
  <div class="demo-space-y">
    <VProgressLinear
      model-value="15"
      bg-color="primary"
      color="primary"
    />

    <VProgressLinear
      model-value="30"
      bg-color="secondary"
      color="secondary"
    />

    <VProgressLinear
      model-value="45"
      bg-color="success"
      color="success"
    />
  </div>
</template>
`},ee={ts:`<template>
  <VProgressLinear
    indeterminate
    color="primary"
  />
</template>
`,js:`<template>
  <VProgressLinear
    indeterminate
    color="primary"
  />
</template>
`},re={ts:`<template>
  <VProgressLinear
    color="primary"
    indeterminate
    reverse
  />
</template>
`,js:`<template>
  <VProgressLinear
    color="primary"
    indeterminate
    reverse
  />
</template>
`},oe={ts:`<template>
  <div class="demo-space-y">
    <VProgressLinear
      model-value="78"
      height="8"
      color="primary"
      :rounded="false"
    />

    <VProgressLinear
      model-value="20"
      color="primary"
      height="20"
      :rounded="false"
    />

    <VProgressLinear
      model-value="33"
      height="20"
      color="primary"
      :rounded="false"
    />
  </div>
</template>
`,js:`<template>
  <div class="demo-space-y">
    <VProgressLinear
      model-value="78"
      height="8"
      color="primary"
      :rounded="false"
    />

    <VProgressLinear
      model-value="20"
      color="primary"
      height="20"
      :rounded="false"
    />

    <VProgressLinear
      model-value="33"
      height="20"
      color="primary"
      :rounded="false"
    />
  </div>
</template>
`},le={ts:`<script setup lang="ts">
const skill = ref(20)
const knowledge = ref(33)
const power = ref(78)
<\/script>

<template>
  <div class="demo-space-y">
    <VProgressLinear
      v-model="power"
      color="primary"
      height="8"
    />

    <VProgressLinear
      v-model="skill"
      color="primary"
      height="20"
    >
      <template #default="{ value }">
        <strong>{{ Math.ceil(value) }}%</strong>
      </template>
    </VProgressLinear>

    <VProgressLinear
      v-model="knowledge"
      height="20"
      color="primary"
    >
      <strong>{{ Math.ceil(knowledge) }}%</strong>
    </VProgressLinear>
  </div>
</template>
`,js:`<script setup>
const skill = ref(20)
const knowledge = ref(33)
const power = ref(78)
<\/script>

<template>
  <div class="demo-space-y">
    <VProgressLinear
      v-model="power"
      color="primary"
      height="8"
    />

    <VProgressLinear
      v-model="skill"
      color="primary"
      height="20"
    >
      <template #default="{ value }">
        <strong>{{ Math.ceil(value) }}%</strong>
      </template>
    </VProgressLinear>

    <VProgressLinear
      v-model="knowledge"
      height="20"
      color="primary"
    >
      <strong>{{ Math.ceil(knowledge) }}%</strong>
    </VProgressLinear>
  </div>
</template>
`},se={ts:`<template>
  <div class="demo-space-y">
    <VProgressLinear
      color="rgb(var(--v-theme-primary))"
      model-value="75"
      striped
    />

    <VProgressLinear
      color="rgb(var(--v-theme-success))"
      model-value="55"
      striped
    />

    <VProgressLinear
      color="rgb(var(--v-theme-warning))"
      model-value="35"
      striped
    />
  </div>
</template>
`,js:`<template>
  <div class="demo-space-y">
    <VProgressLinear
      color="rgb(var(--v-theme-primary))"
      model-value="75"
      striped
    />

    <VProgressLinear
      color="rgb(var(--v-theme-success))"
      model-value="55"
      striped
    />

    <VProgressLinear
      color="rgb(var(--v-theme-warning))"
      model-value="35"
      striped
    />
  </div>
</template>
`},ae=r("p",null,[o("Use the props "),r("code",null,"color"),o(" and "),r("code",null,"background-color"),o(" to set colors.")],-1),te=r("p",null,[o("The primary value is controlled by "),r("code",null,"v-model"),o(", whereas the buffer is controlled by the "),r("code",null,"buffer-value"),o(" prop.")],-1),ne=r("p",null,[o("for continuously animating progress bar,use prop "),r("code",null,"indeterminate"),o(". This indicates continuous process. ")],-1),ce=r("p",null,[o("Use prop "),r("code",null,"reverse"),o(" to animate continuously in reverse direction. The component also has RTL support.")],-1),de=r("p",null,[o(" The "),r("code",null," rounded "),o("prop is used to apply a border radius to the v-progress-linear component. By default we have set "),r("code",null,"rounded"),o(" prop true. You can disable it by using "),r("code",null,":rounded='false'"),o(". ")],-1),ie=r("p",null,[o("The v-progress-linear component will be responsive to user input when using "),r("code",null,"v-model"),o(". You can use the default slot or bind a local model to display inside of the progress.")],-1),ue=r("p",null,[o(" The "),r("code",null,"striped"),o(" prop is used to apply striped background.")],-1),Pe={__name:"progress-linear",setup(m){return(l,c)=>{const d=W,n=M,i=z,t=K,V=E,P=A,b=j,w=R;return u(),y(x,{class:"match-height"},{default:s(()=>[e(p,{cols:"12",md:"6"},{default:s(()=>[e(n,{title:"Color",code:Z},{default:s(()=>[ae,e(d)]),_:1},8,["code"])]),_:1}),e(p,{cols:"12",md:"6"},{default:s(()=>[e(n,{title:"Buffering",code:X},{default:s(()=>[te,e(i)]),_:1},8,["code"])]),_:1}),e(p,{cols:"12",md:"6"},{default:s(()=>[e(n,{title:"Indeterminate",code:ee},{default:s(()=>[ne,e(t)]),_:1},8,["code"])]),_:1}),e(p,{cols:"12",md:"6"},{default:s(()=>[e(n,{title:"Reversed",code:re},{default:s(()=>[ce,e(V)]),_:1},8,["code"])]),_:1}),e(p,{cols:"12",md:"6"},{default:s(()=>[e(n,{title:"Rounded",code:oe},{default:s(()=>[de,e(P)]),_:1},8,["code"])]),_:1}),e(p,{cols:"12",md:"6"},{default:s(()=>[e(n,{title:"Slots",code:le},{default:s(()=>[ie,e(b)]),_:1},8,["code"])]),_:1}),e(p,{cols:"12",md:"6"},{default:s(()=>[e(n,{title:"Striped",code:se},{default:s(()=>[ue,e(w)]),_:1},8,["code"])]),_:1})]),_:1})}}};export{Pe as default};
//# sourceMappingURL=progress-linear-f3724c89.js.map
