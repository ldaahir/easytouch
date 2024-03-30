import{V as t}from"./VChip-c30ae960.js";import{V as $,a as E,b as W,c as w}from"./VList-ce82f9df.js";import{V as L}from"./VListItemAction-40419d78.js";import{i as A,g as f,x as M,y as J,n as T,l as j}from"./index-e43e3799.js";import{V as N}from"./VMenu-e207a306.js";import{f as u,I as c,J as h,K as i,k as e,a2 as B,ag as U,Q as a,u as s,q as z,_ as y,L as _,P as o,T as g}from"./frappe-ui-b8f10d89.js";import{_ as F}from"./AppCombobox-8eea82c1.js";import{V as x}from"./VAvatar-26ec77a4.js";import{_ as R}from"./AppCardCode-454d9e68.js";import{a as m,V as Y}from"./VRow-b8bac363.js";import"./transition-61bfbac1.js";import"./ssrBoot-066fc73e.js";import"./VDivider-7eec4b6d.js";import"./forwardRefs-bb5e4b03.js";import"./VOverlay-dc43e014.js";import"./lazy-b5e818f7.js";import"./easing-512405f0.js";import"./dialog-transition-478eb809.js";import"./VInput-545a0bfa.js";import"./VSelect-25505b64.js";import"./VTextField-61b1d2aa.js";/* empty css                   */import"./VField-5b446628.js";import"./VImg-dcfe0017.js";import"./VCounter-cc8846c3.js";import"./VCheckboxBtn-0ece9886.js";import"./VSelectionControl-bcc9ca9d.js";import"./filter-a01fa339.js";import"./vue.runtime.esm-bundler-c0d7c61a.js";import"./VCard-bd92c839.js";const O={__name:"DemoChipExpandable",setup(d){const r=u(!1);return(V,p)=>(c(),h(N,{modelValue:s(r),"onUpdate:modelValue":p[1]||(p[1]=l=>z(r)?r.value=l:null),transition:"scale-transition"},{activator:i(({props:l})=>[e(t,B(U(l)),{default:i(()=>[a(" VueJS ")]),_:2},1040)]),default:i(()=>[e($,null,{default:i(()=>[e(E,null,{append:i(()=>[e(L,{class:"ms-3"},{default:i(()=>[e(A,{icon:"",variant:"text",size:"x-small",color:"default",onClick:p[0]||(p[0]=l=>r.value=!1)},{default:i(()=>[e(f,{size:"20",icon:"tabler-x"})]),_:1})]),_:1})]),default:i(()=>[e(W,{class:"mb-2"},{default:i(()=>[a(" VueJS ")]),_:1}),e(w,null,{default:i(()=>[a("The Progressive JavaScript Framework")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"]))}},q={__name:"DemoChipInSelects",setup(d){const r=u(["Programming","Playing video games","Sleeping"]),V=u(["Streaming","Eating","Programming","Playing video games","Sleeping"]);return(p,l)=>{const v=F;return c(),h(v,{modelValue:s(r),"onUpdate:modelValue":l[0]||(l[0]=b=>z(r)?r.value=b:null),chips:"",clearable:"",multiple:"","closable-chips":"","clear-icon":"tabler-circle-x",items:s(V),label:"Your favorite hobbies","prepend-icon":"tabler-filter"},null,8,["modelValue","items"])}}},K={},Q={class:"demo-space-x"};function G(d,r){return c(),_("div",Q,[e(t,{size:"x-small"},{default:i(()=>[a(" x-small chip ")]),_:1}),e(t,{size:"small"},{default:i(()=>[a(" small chip ")]),_:1}),e(t,{size:"default"},{default:i(()=>[a(" Default ")]),_:1}),e(t,{size:"large"},{default:i(()=>[a(" large chip ")]),_:1}),e(t,{size:"x-large"},{default:i(()=>[a(" x-large chip ")]),_:1})])}const H=y(K,[["render",G]]),X={class:"demo-space-x"},Z=o("span",null,"John Doe",-1),ee=o("span",null,"Darcy Nooser",-1),ie=o("span",null,"Felicia Risker",-1),ae=o("span",null,"Minnie Mostly",-1),te={__name:"DemoChipWithAvatar",setup(d){return(r,V)=>(c(),_("div",X,[e(t,{pill:""},{default:i(()=>[e(x,{start:"",image:s(M)},null,8,["image"]),Z]),_:1}),e(t,{pill:""},{default:i(()=>[e(x,{start:"",image:s(J)},null,8,["image"]),ee]),_:1}),e(t,{pill:""},{default:i(()=>[e(x,{start:"",image:s(T)},null,8,["image"]),ie]),_:1}),e(t,{pill:""},{default:i(()=>[e(x,{start:"",image:s(j)},null,8,["image"]),ae]),_:1})]))}},oe={},le={class:"demo-space-x"};function se(d,r){return c(),_("div",le,[e(t,null,{default:i(()=>[e(f,{start:"",size:"16",icon:"tabler-user"}),a(" Account ")]),_:1}),e(t,{color:"primary"},{default:i(()=>[e(f,{start:"",size:"16",icon:"tabler-star"}),a(" Premium ")]),_:1}),e(t,{color:"secondary"},{default:i(()=>[e(f,{start:"",size:"16",icon:"tabler-cake"}),a(" 1 Year ")]),_:1}),e(t,{color:"success"},{default:i(()=>[e(f,{start:"",size:"16",icon:"tabler-bell"}),a(" Notification ")]),_:1}),e(t,{color:"info"},{default:i(()=>[e(f,{start:"",size:"16",icon:"tabler-messages"}),a(" Message ")]),_:1}),e(t,{color:"warning"},{default:i(()=>[e(f,{start:"",size:"16",icon:"tabler-alert-triangle"}),a(" Warning ")]),_:1}),e(t,{color:"error"},{default:i(()=>[e(f,{start:"",size:"16",icon:"tabler-alert-circle"}),a(" Error ")]),_:1})])}const re=y(oe,[["render",se]]),ce={class:"demo-space-x"},ne={__name:"DemoChipClosable",setup(d){const r=u(!0),V=u(!0),p=u(!0),l=u(!0),v=u(!0),b=u(!0),S=u(!0);return(I,n)=>(c(),_("div",ce,[s(r)?(c(),h(t,{key:0,closable:"","onClick:close":n[0]||(n[0]=C=>r.value=!s(r))},{default:i(()=>[a(" Default ")]),_:1})):g("",!0),s(V)?(c(),h(t,{key:1,closable:"",color:"primary","onClick:close":n[1]||(n[1]=C=>V.value=!s(V))},{default:i(()=>[a(" Primary ")]),_:1})):g("",!0),s(p)?(c(),h(t,{key:2,closable:"",color:"secondary","onClick:close":n[2]||(n[2]=C=>p.value=!s(p))},{default:i(()=>[a(" Secondary ")]),_:1})):g("",!0),s(l)?(c(),h(t,{key:3,closable:"",color:"success","onClick:close":n[3]||(n[3]=C=>l.value=!s(l))},{default:i(()=>[a(" Success ")]),_:1})):g("",!0),s(v)?(c(),h(t,{key:4,closable:"",color:"info","onClick:close":n[4]||(n[4]=C=>v.value=!s(v))},{default:i(()=>[a(" Info ")]),_:1})):g("",!0),s(b)?(c(),h(t,{key:5,closable:"",color:"warning","onClick:close":n[5]||(n[5]=C=>b.value=!s(b))},{default:i(()=>[a(" Warning ")]),_:1})):g("",!0),s(S)?(c(),h(t,{key:6,closable:"",color:"error","onClick:close":n[6]||(n[6]=C=>S.value=!s(S))},{default:i(()=>[a(" Error ")]),_:1})):g("",!0)]))}},pe={},de={class:"demo-space-x"};function me(d,r){return c(),_("div",de,[e(t,{label:""},{default:i(()=>[a(" Default ")]),_:1}),e(t,{label:"",color:"primary"},{default:i(()=>[a(" Primary ")]),_:1}),e(t,{label:"",color:"secondary"},{default:i(()=>[a(" Secondary ")]),_:1}),e(t,{label:"",color:"success"},{default:i(()=>[a(" Success ")]),_:1}),e(t,{label:"",color:"info"},{default:i(()=>[a(" Info ")]),_:1}),e(t,{label:"",color:"warning"},{default:i(()=>[a(" Warning ")]),_:1}),e(t,{label:"",color:"error"},{default:i(()=>[a(" Error ")]),_:1})])}const ue=y(pe,[["render",me]]),he={},Ve={class:"demo-space-x"};function Ce(d,r){return c(),_("div",Ve,[e(t,{variant:"outlined"},{default:i(()=>[a(" Default ")]),_:1}),e(t,{color:"primary",variant:"outlined"},{default:i(()=>[a(" Primary ")]),_:1}),e(t,{color:"secondary",variant:"outlined"},{default:i(()=>[a(" Secondary ")]),_:1}),e(t,{color:"success",variant:"outlined"},{default:i(()=>[a(" Success ")]),_:1}),e(t,{color:"info",variant:"outlined"},{default:i(()=>[a(" Info ")]),_:1}),e(t,{color:"warning",variant:"outlined"},{default:i(()=>[a(" Warning ")]),_:1}),e(t,{color:"error",variant:"outlined"},{default:i(()=>[a(" Error ")]),_:1})])}const fe=y(he,[["render",Ce]]),_e={},ve={class:"demo-space-x"};function be(d,r){return c(),_("div",ve,[e(t,{variant:"elevated"},{default:i(()=>[a(" Default ")]),_:1}),e(t,{color:"primary",variant:"elevated"},{default:i(()=>[a(" Primary ")]),_:1}),e(t,{color:"secondary",variant:"elevated"},{default:i(()=>[a(" Secondary ")]),_:1}),e(t,{color:"success",variant:"elevated"},{default:i(()=>[a(" Success ")]),_:1}),e(t,{color:"info",variant:"elevated"},{default:i(()=>[a(" Info ")]),_:1}),e(t,{color:"warning",variant:"elevated"},{default:i(()=>[a(" Warning ")]),_:1}),e(t,{color:"error",variant:"elevated"},{default:i(()=>[a(" Error ")]),_:1})])}const ge=y(_e,[["render",be]]),ye={},Se={class:"demo-space-x"};function xe(d,r){return c(),_("div",Se,[e(t,null,{default:i(()=>[a(" Default ")]),_:1}),e(t,{color:"primary"},{default:i(()=>[a(" Primary ")]),_:1}),e(t,{color:"secondary"},{default:i(()=>[a(" Secondary ")]),_:1}),e(t,{color:"success"},{default:i(()=>[a(" Success ")]),_:1}),e(t,{color:"info"},{default:i(()=>[a(" Info ")]),_:1}),e(t,{color:"warning"},{default:i(()=>[a(" Warning ")]),_:1}),e(t,{color:"error"},{default:i(()=>[a(" Error ")]),_:1})])}const Ie=y(ye,[["render",xe]]),ze={ts:`<script lang="ts" setup>
const isDefaultChipVisible = ref(true)
const isPrimaryChipVisible = ref(true)
const isSecondaryChipVisible = ref(true)
const isSuccessChipVisible = ref(true)
const isInfoChipVisible = ref(true)
const isWarningChipVisible = ref(true)
const isErrorChipVisible = ref(true)
<\/script>

<template>
  <div class="demo-space-x">
    <VChip
      v-if="isDefaultChipVisible"
      closable
      @click:close="isDefaultChipVisible = !isDefaultChipVisible"
    >
      Default
    </VChip>

    <VChip
      v-if="isPrimaryChipVisible"
      closable
      color="primary"
      @click:close="isPrimaryChipVisible = !isPrimaryChipVisible"
    >
      Primary
    </VChip>

    <VChip
      v-if="isSecondaryChipVisible"
      closable
      color="secondary"
      @click:close="isSecondaryChipVisible = !isSecondaryChipVisible"
    >
      Secondary
    </VChip>

    <VChip
      v-if="isSuccessChipVisible"
      closable
      color="success"
      @click:close="isSuccessChipVisible = !isSuccessChipVisible"
    >
      Success
    </VChip>

    <VChip
      v-if="isInfoChipVisible"
      closable
      color="info"
      @click:close="isInfoChipVisible = !isInfoChipVisible"
    >
      Info
    </VChip>

    <VChip
      v-if="isWarningChipVisible"
      closable
      color="warning"
      @click:close="isWarningChipVisible = !isWarningChipVisible"
    >
      Warning
    </VChip>

    <VChip
      v-if="isErrorChipVisible"
      closable
      color="error"
      @click:close="isErrorChipVisible = !isErrorChipVisible"
    >
      Error
    </VChip>
  </div>
</template>
`,js:`<script setup>
const isDefaultChipVisible = ref(true)
const isPrimaryChipVisible = ref(true)
const isSecondaryChipVisible = ref(true)
const isSuccessChipVisible = ref(true)
const isInfoChipVisible = ref(true)
const isWarningChipVisible = ref(true)
const isErrorChipVisible = ref(true)
<\/script>

<template>
  <div class="demo-space-x">
    <VChip
      v-if="isDefaultChipVisible"
      closable
      @click:close="isDefaultChipVisible = !isDefaultChipVisible"
    >
      Default
    </VChip>

    <VChip
      v-if="isPrimaryChipVisible"
      closable
      color="primary"
      @click:close="isPrimaryChipVisible = !isPrimaryChipVisible"
    >
      Primary
    </VChip>

    <VChip
      v-if="isSecondaryChipVisible"
      closable
      color="secondary"
      @click:close="isSecondaryChipVisible = !isSecondaryChipVisible"
    >
      Secondary
    </VChip>

    <VChip
      v-if="isSuccessChipVisible"
      closable
      color="success"
      @click:close="isSuccessChipVisible = !isSuccessChipVisible"
    >
      Success
    </VChip>

    <VChip
      v-if="isInfoChipVisible"
      closable
      color="info"
      @click:close="isInfoChipVisible = !isInfoChipVisible"
    >
      Info
    </VChip>

    <VChip
      v-if="isWarningChipVisible"
      closable
      color="warning"
      @click:close="isWarningChipVisible = !isWarningChipVisible"
    >
      Warning
    </VChip>

    <VChip
      v-if="isErrorChipVisible"
      closable
      color="error"
      @click:close="isErrorChipVisible = !isErrorChipVisible"
    >
      Error
    </VChip>
  </div>
</template>
`},De={ts:`<template>
  <div class="demo-space-x">
    <VChip>
      Default
    </VChip>

    <VChip color="primary">
      Primary
    </VChip>

    <VChip color="secondary">
      Secondary
    </VChip>

    <VChip color="success">
      Success
    </VChip>

    <VChip color="info">
      Info
    </VChip>

    <VChip color="warning">
      Warning
    </VChip>

    <VChip color="error">
      Error
    </VChip>
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <VChip>
      Default
    </VChip>

    <VChip color="primary">
      Primary
    </VChip>

    <VChip color="secondary">
      Secondary
    </VChip>

    <VChip color="success">
      Success
    </VChip>

    <VChip color="info">
      Info
    </VChip>

    <VChip color="warning">
      Warning
    </VChip>

    <VChip color="error">
      Error
    </VChip>
  </div>
</template>
`},ke={ts:`<template>
  <div class="demo-space-x">
    <VChip variant="elevated">
      Default
    </VChip>

    <VChip
      color="primary"
      variant="elevated"
    >
      Primary
    </VChip>

    <VChip
      color="secondary"
      variant="elevated"
    >
      Secondary
    </VChip>

    <VChip
      color="success"
      variant="elevated"
    >
      Success
    </VChip>

    <VChip
      color="info"
      variant="elevated"
    >
      Info
    </VChip>

    <VChip
      color="warning"
      variant="elevated"
    >
      Warning
    </VChip>

    <VChip
      color="error"
      variant="elevated"
    >
      Error
    </VChip>
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <VChip variant="elevated">
      Default
    </VChip>

    <VChip
      color="primary"
      variant="elevated"
    >
      Primary
    </VChip>

    <VChip
      color="secondary"
      variant="elevated"
    >
      Secondary
    </VChip>

    <VChip
      color="success"
      variant="elevated"
    >
      Success
    </VChip>

    <VChip
      color="info"
      variant="elevated"
    >
      Info
    </VChip>

    <VChip
      color="warning"
      variant="elevated"
    >
      Warning
    </VChip>

    <VChip
      color="error"
      variant="elevated"
    >
      Error
    </VChip>
  </div>
</template>
`},Pe={ts:`<script lang="ts" setup>
const isMenuVisible = ref(false)
<\/script>

<template>
  <VMenu
    v-model="isMenuVisible"
    transition="scale-transition"
  >
    <!-- v-menu activator -->
    <template #activator="{ props }">
      <VChip v-bind="props">
        VueJS
      </VChip>
    </template>

    <!-- v-menu list -->
    <VList>
      <VListItem>
        <VListItemTitle class="mb-2">
          VueJS
        </VListItemTitle>
        <VListItemSubtitle>The Progressive JavaScript Framework</VListItemSubtitle>

        <template #append>
          <VListItemAction class="ms-3">
            <VBtn
              icon
              variant="text"
              size="x-small"
              color="default"
              @click="isMenuVisible = false"
            >
              <VIcon
                size="20"
                icon="tabler-x"
              />
            </VBtn>
          </VListItemAction>
        </template>
      </VListItem>
    </VList>
  </VMenu>
</template>
`,js:`<script setup>
const isMenuVisible = ref(false)
<\/script>

<template>
  <VMenu
    v-model="isMenuVisible"
    transition="scale-transition"
  >
    <!-- v-menu activator -->
    <template #activator="{ props }">
      <VChip v-bind="props">
        VueJS
      </VChip>
    </template>

    <!-- v-menu list -->
    <VList>
      <VListItem>
        <VListItemTitle class="mb-2">
          VueJS
        </VListItemTitle>
        <VListItemSubtitle>The Progressive JavaScript Framework</VListItemSubtitle>

        <template #append>
          <VListItemAction class="ms-3">
            <VBtn
              icon
              variant="text"
              size="x-small"
              color="default"
              @click="isMenuVisible = false"
            >
              <VIcon
                size="20"
                icon="tabler-x"
              />
            </VBtn>
          </VListItemAction>
        </template>
      </VListItem>
    </VList>
  </VMenu>
</template>
`},$e={ts:`<script lang="ts" setup>
const chips = ref(['Programming', 'Playing video games', 'Sleeping'])
const items = ref(['Streaming', 'Eating', 'Programming', 'Playing video games', 'Sleeping'])
<\/script>

<template>
  <AppCombobox
    v-model="chips"
    chips
    clearable
    multiple
    closable-chips
    clear-icon="tabler-circle-x"
    :items="items"
    label="Your favorite hobbies"
    prepend-icon="tabler-filter"
  />
</template>
`,js:`<script setup>
const chips = ref([
  'Programming',
  'Playing video games',
  'Sleeping',
])

const items = ref([
  'Streaming',
  'Eating',
  'Programming',
  'Playing video games',
  'Sleeping',
])
<\/script>

<template>
  <AppCombobox
    v-model="chips"
    chips
    clearable
    multiple
    closable-chips
    clear-icon="tabler-circle-x"
    :items="items"
    label="Your favorite hobbies"
    prepend-icon="tabler-filter"
  />
</template>
`},Ee={ts:`<template>
  <div class="demo-space-x">
    <VChip label>
      Default
    </VChip>

    <VChip
      label
      color="primary"
    >
      Primary
    </VChip>

    <VChip
      label
      color="secondary"
    >
      Secondary
    </VChip>

    <VChip
      label
      color="success"
    >
      Success
    </VChip>

    <VChip
      label
      color="info"
    >
      Info
    </VChip>

    <VChip
      label
      color="warning"
    >
      Warning
    </VChip>

    <VChip
      label
      color="error"
    >
      Error
    </VChip>
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <VChip label>
      Default
    </VChip>

    <VChip
      label
      color="primary"
    >
      Primary
    </VChip>

    <VChip
      label
      color="secondary"
    >
      Secondary
    </VChip>

    <VChip
      label
      color="success"
    >
      Success
    </VChip>

    <VChip
      label
      color="info"
    >
      Info
    </VChip>

    <VChip
      label
      color="warning"
    >
      Warning
    </VChip>

    <VChip
      label
      color="error"
    >
      Error
    </VChip>
  </div>
</template>
`},We={ts:`<template>
  <div class="demo-space-x">
    <VChip variant="outlined">
      Default
    </VChip>

    <VChip
      color="primary"
      variant="outlined"
    >
      Primary
    </VChip>

    <VChip
      color="secondary"
      variant="outlined"
    >
      Secondary
    </VChip>

    <VChip
      color="success"
      variant="outlined"
    >
      Success
    </VChip>

    <VChip
      color="info"
      variant="outlined"
    >
      Info
    </VChip>

    <VChip
      color="warning"
      variant="outlined"
    >
      Warning
    </VChip>

    <VChip
      color="error"
      variant="outlined"
    >
      Error
    </VChip>
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <VChip variant="outlined">
      Default
    </VChip>

    <VChip
      color="primary"
      variant="outlined"
    >
      Primary
    </VChip>

    <VChip
      color="secondary"
      variant="outlined"
    >
      Secondary
    </VChip>

    <VChip
      color="success"
      variant="outlined"
    >
      Success
    </VChip>

    <VChip
      color="info"
      variant="outlined"
    >
      Info
    </VChip>

    <VChip
      color="warning"
      variant="outlined"
    >
      Warning
    </VChip>

    <VChip
      color="error"
      variant="outlined"
    >
      Error
    </VChip>
  </div>
</template>
`},we={ts:`<template>
  <div class="demo-space-x">
    <VChip size="x-small">
      x-small chip
    </VChip>

    <VChip size="small">
      small chip
    </VChip>

    <VChip size="default">
      Default
    </VChip>

    <VChip size="large">
      large chip
    </VChip>

    <VChip size="x-large">
      x-large chip
    </VChip>
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <VChip size="x-small">
      x-small chip
    </VChip>

    <VChip size="small">
      small chip
    </VChip>

    <VChip size="default">
      Default
    </VChip>

    <VChip size="large">
      large chip
    </VChip>

    <VChip size="x-large">
      x-large chip
    </VChip>
  </div>
</template>
`},Le={ts:`<script setup lang="ts">
import avatar1 from '@images/avatars/avatar-1.png'
import avatar2 from '@images/avatars/avatar-2.png'
import avatar3 from '@images/avatars/avatar-3.png'
import avatar4 from '@images/avatars/avatar-4.png'
<\/script>

<template>
  <div class="demo-space-x">
    <VChip pill>
      <VAvatar
        start
        :image="avatar1"
      />
      <span>John Doe</span>
    </VChip>

    <VChip pill>
      <VAvatar
        start
        :image="avatar2"
      />
      <span>Darcy Nooser</span>
    </VChip>

    <VChip pill>
      <VAvatar
        start
        :image="avatar3"
      />
      <span>Felicia Risker</span>
    </VChip>

    <VChip pill>
      <VAvatar
        start
        :image="avatar4"
      />
      <span>Minnie Mostly</span>
    </VChip>
  </div>
</template>
`,js:`<script setup>
import avatar1 from '@images/avatars/avatar-1.png'
import avatar2 from '@images/avatars/avatar-2.png'
import avatar3 from '@images/avatars/avatar-3.png'
import avatar4 from '@images/avatars/avatar-4.png'
<\/script>

<template>
  <div class="demo-space-x">
    <VChip pill>
      <VAvatar
        start
        :image="avatar1"
      />
      <span>John Doe</span>
    </VChip>

    <VChip pill>
      <VAvatar
        start
        :image="avatar2"
      />
      <span>Darcy Nooser</span>
    </VChip>

    <VChip pill>
      <VAvatar
        start
        :image="avatar3"
      />
      <span>Felicia Risker</span>
    </VChip>

    <VChip pill>
      <VAvatar
        start
        :image="avatar4"
      />
      <span>Minnie Mostly</span>
    </VChip>
  </div>
</template>
`},Ae={ts:`<template>
  <div class="demo-space-x">
    <VChip>
      <VIcon
        start
        size="16"
        icon="tabler-user"
      />
      Account
    </VChip>

    <VChip color="primary">
      <VIcon
        start
        size="16"
        icon="tabler-star"
      />
      Premium
    </VChip>

    <VChip color="secondary">
      <VIcon
        start
        size="16"
        icon="tabler-cake"
      />
      1 Year
    </VChip>

    <VChip color="success">
      <VIcon
        start
        size="16"
        icon="tabler-bell"
      />
      Notification
    </VChip>

    <VChip color="info">
      <VIcon
        start
        size="16"
        icon="tabler-messages"
      />
      Message
    </VChip>

    <VChip color="warning">
      <VIcon
        start
        size="16"
        icon="tabler-alert-triangle"
      />
      Warning
    </VChip>

    <VChip color="error">
      <VIcon
        start
        size="16"
        icon="tabler-alert-circle"
      />
      Error
    </VChip>
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <VChip>
      <VIcon
        start
        size="16"
        icon="tabler-user"
      />
      Account
    </VChip>

    <VChip color="primary">
      <VIcon
        start
        size="16"
        icon="tabler-star"
      />
      Premium
    </VChip>

    <VChip color="secondary">
      <VIcon
        start
        size="16"
        icon="tabler-cake"
      />
      1 Year
    </VChip>

    <VChip color="success">
      <VIcon
        start
        size="16"
        icon="tabler-bell"
      />
      Notification
    </VChip>

    <VChip color="info">
      <VIcon
        start
        size="16"
        icon="tabler-messages"
      />
      Message
    </VChip>

    <VChip color="warning">
      <VIcon
        start
        size="16"
        icon="tabler-alert-triangle"
      />
      Warning
    </VChip>

    <VChip color="error">
      <VIcon
        start
        size="16"
        icon="tabler-alert-circle"
      />
      Error
    </VChip>
  </div>
</template>
`},Me=o("p",null,[a("Use "),o("code",null,"color"),a(" prop to change the background color of chips.")],-1),Je=o("p",null,[a("Use "),o("code",null,"elevated"),a(" variant option to create filled chips.")],-1),Te=o("p",null,[a("Use "),o("code",null,"outlined"),a(" variant option to create outline border chips.")],-1),je=o("p",null,[a("Label chips use the "),o("code",null,"v-card"),a(" border-radius. Use "),o("code",null,"label"),a(" prop to create label chips.")],-1),Ne=o("p",null,[a("Closable chips can be controlled with a "),o("code",null,"v-model"),a(".")],-1),Be=o("p",null,"Chips can use text or any icon available in the Material Icons font library.",-1),Ue=o("p",null,[a("Use "),o("code",null,"pill"),a(" prop to remove the "),o("code",null,"v-avatar"),a(" padding.")],-1),Fe=o("p",null,[a("The "),o("code",null,"v-chip"),a(" component can have various sizes from "),o("code",null,"x-small"),a(" to "),o("code",null,"x-large"),a(".")],-1),Re=o("p",null,[a("Selects can use "),o("code",null,"chips"),a(" to display the selected data. Try adding your own tags below.")],-1),Ye=o("p",null,[a("Chips can be combined with "),o("code",null,"v-menu"),a(" to enable a specific set of actions for a chip.")],-1),yi={__name:"chip",setup(d){return(r,V)=>{const p=Ie,l=R,v=ge,b=fe,S=ue,I=ne,n=re,C=te,D=H,k=q,P=O;return c(),h(Y,{class:"match-height"},{default:i(()=>[e(m,{cols:"12",md:"6"},{default:i(()=>[e(l,{title:"Color",code:De},{default:i(()=>[Me,e(p)]),_:1},8,["code"])]),_:1}),e(m,{cols:"12",md:"6"},{default:i(()=>[e(l,{title:"Elevated",code:ke},{default:i(()=>[Je,e(v)]),_:1},8,["code"])]),_:1}),e(m,{cols:"12",md:"6"},{default:i(()=>[e(l,{title:"Outlined",code:We},{default:i(()=>[Te,e(b)]),_:1},8,["code"])]),_:1}),e(m,{cols:"12",md:"6"},{default:i(()=>[e(l,{title:"Label",code:Ee},{default:i(()=>[je,e(S)]),_:1},8,["code"])]),_:1}),e(m,{cols:"12",md:"6"},{default:i(()=>[e(l,{title:"Closable",code:ze},{default:i(()=>[Ne,e(I)]),_:1},8,["code"])]),_:1}),e(m,{cols:"12",md:"6"},{default:i(()=>[e(l,{title:"With Icon",code:Ae},{default:i(()=>[Be,e(n)]),_:1},8,["code"])]),_:1}),e(m,{cols:"12",md:"6"},{default:i(()=>[e(l,{title:"With Avatar",code:Le},{default:i(()=>[Ue,e(C)]),_:1},8,["code"])]),_:1}),e(m,{cols:"12",md:"6"},{default:i(()=>[e(l,{title:"Sizes",code:we},{default:i(()=>[Fe,e(D)]),_:1},8,["code"])]),_:1}),e(m,{cols:"12",md:"6"},{default:i(()=>[e(l,{title:"In Selects",code:$e},{default:i(()=>[Re,e(k)]),_:1},8,["code"])]),_:1}),e(m,{cols:"12",md:"6"},{default:i(()=>[e(l,{title:"Expandable",code:Pe},{default:i(()=>[Ye,e(P)]),_:1},8,["code"])]),_:1})]),_:1})}}};export{yi as default};
//# sourceMappingURL=chip-59ca5029.js.map
