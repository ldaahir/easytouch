import{_ as b}from"./AppSelect-6ee5ecd4.js";import{x as D,y as B,n as w,l as x,m as O}from"./index-e1b913cd.js";import{V as k}from"./VChip-a66962cb.js";import{V as y}from"./VAvatar-7de7fc90.js";import{f,I as p,J as d,K as a,k as e,P as s,R as G,u as _,q as v,Q as o}from"./frappe-ui-26ef7369.js";import{a as n,V as A}from"./VRow-a794fb6c.js";import{V}from"./VSelect-31041ca2.js";import{_ as $}from"./AppCardCode-cc96e90f.js";import"./VInput-ea621834.js";import"./transition-6a62c7af.js";import"./VImg-9de85dec.js";import"./VTextField-ae5a2228.js";/* empty css                   */import"./VField-f7afb4c1.js";import"./easing-512405f0.js";import"./forwardRefs-bb5e4b03.js";import"./VCounter-b723ae3f.js";import"./VList-5632fe53.js";import"./ssrBoot-2565eb67.js";import"./VDivider-66cdee18.js";import"./dialog-transition-40895cfb.js";import"./VMenu-71a8a06d.js";import"./VOverlay-3a4af559.js";import"./lazy-2551cdf3.js";import"./VCheckboxBtn-fb30a6d7.js";import"./VSelectionControl-9d86a850.js";import"./vue.runtime.esm-bundler-4877976f.js";import"./VCard-98364713.js";const N={__name:"DemoSelectSelectionSlot",setup(u){const t=[{name:"Sandra Adams",avatar:D},{name:"Ali Connors",avatar:B},{name:"Trevor Hansen",avatar:w},{name:"Tucker Smith",avatar:x},{name:"Britta Holt",avatar:O}],i=f(["Sandra Adams"]);return(m,l)=>{const c=b;return p(),d(c,{modelValue:_(i),"onUpdate:modelValue":l[0]||(l[0]=r=>v(i)?i.value=r:null),items:t,"item-title":"name","item-value":"name",label:"Select Item",multiple:"",clearable:"","clear-icon":"tabler-x"},{selection:a(({item:r})=>[e(k,null,{default:a(()=>[e(y,{start:"",image:r.raw.avatar},null,8,["image"]),s("span",null,G(r.title),1)]),_:2},1024)]),_:1},8,["modelValue"])}}},j={__name:"DemoSelectMultiple",setup(u){const t=f(["Alabama"]),i=["Alabama","Alaska","American Samoa","Arizona","Arkansas","California","Colorado","Connecticut","Delaware","District of Columbia","Federated States of Micronesia","Florida","Georgia","Guam"];return(m,l)=>{const c=b;return p(),d(c,{modelValue:_(t),"onUpdate:modelValue":l[0]||(l[0]=r=>v(t)?t.value=r:null),items:i,"menu-props":{maxHeight:"400"},label:"Select",multiple:"","persistent-hint":""},null,8,["modelValue"])}}},T={__name:"DemoSelectMenuProps",setup(u){const t=["Foo","Bar","Fizz","Buzz"];return(i,m)=>{const l=b;return p(),d(l,{items:t,"menu-props":{transition:"scroll-y-transition"},label:"Label"})}}},U={__name:"DemoSelectChips",setup(u){const t=["foo","bar","fizz","buzz"],i=f(["foo","bar","fizz","buzz"]);return(m,l)=>{const c=b;return p(),d(c,{modelValue:_(i),"onUpdate:modelValue":l[0]||(l[0]=r=>v(i)?i.value=r:null),items:t,label:"Chips",chips:"",multiple:""},null,8,["modelValue"])}}},M={__name:"DemoSelectIcons",setup(u){const t=f("Florida"),i=f("Texas"),m=["Alabama","Alaska","American Samoa","Arizona","Arkansas","California","Colorado","Connecticut","Delaware","District of Columbia","Federated States of Micronesia","Florida","Georgia","Guam"];return(l,c)=>{const r=b;return p(),d(A,null,{default:a(()=>[e(n,{cols:"12"},{default:a(()=>[e(r,{modelValue:_(t),"onUpdate:modelValue":c[0]||(c[0]=S=>v(t)?t.value=S:null),items:m,label:"Select","prepend-icon":"tabler-map","single-line":"",variant:"filled"},null,8,["modelValue"])]),_:1}),e(n,{cols:"12"},{default:a(()=>[e(r,{modelValue:_(i),"onUpdate:modelValue":c[1]||(c[1]=S=>v(i)?i.value=S:null),items:m,"append-icon":"tabler-map",label:"Select","single-line":"",variant:"filled"},null,8,["modelValue"])]),_:1})]),_:1})}}},R={__name:"DemoSelectCustomTextAndValue",setup(u){const t=f({state:"Florida",abbr:"FL"}),i=[{state:"Florida",abbr:"FL"},{state:"Georgia",abbr:"GA"},{state:"Nebraska",abbr:"NE"},{state:"California",abbr:"CA"},{state:"New York",abbr:"NY"}];return(m,l)=>{const c=b;return p(),d(c,{modelValue:_(t),"onUpdate:modelValue":l[0]||(l[0]=r=>v(t)?t.value=r:null),hint:`${_(t).state}, ${_(t).abbr}`,items:i,"item-title":"state","item-value":"abbr",label:"Select","persistent-hint":"","return-object":"","single-line":""},null,8,["modelValue","hint"])}}},H={__name:"DemoSelectVariant",setup(u){const t=["Foo","Bar","Fizz","Buzz"];return(i,m)=>(p(),d(A,null,{default:a(()=>[e(n,{cols:"12",sm:"6"},{default:a(()=>[e(V,{items:t,label:"Outlined"})]),_:1}),e(n,{cols:"12",sm:"6"},{default:a(()=>[e(V,{items:t,label:"Filled",variant:"filled"})]),_:1}),e(n,{cols:"12",sm:"6"},{default:a(()=>[e(V,{items:t,label:"Solo",variant:"solo"})]),_:1}),e(n,{cols:"12",sm:"6"},{default:a(()=>[e(V,{items:t,label:"Plain",variant:"plain"})]),_:1}),e(n,{cols:"12",sm:"6"},{default:a(()=>[e(V,{items:t,label:"Underlined",variant:"underlined",density:"default"})]),_:1})]),_:1}))}},L={__name:"DemoSelectDensity",setup(u){const t=["Foo","Bar","Fizz","Buzz"];return(i,m)=>{const l=b;return p(),d(l,{items:t,label:"Density",density:"compact"})}}},P={__name:"DemoSelectBasic",setup(u){const t=["Foo","Bar","Fizz","Buzz"];return(i,m)=>{const l=b;return p(),d(l,{items:t,label:"Standard"})}}},I={ts:`<script lang="ts" setup>
const items = ['Foo', 'Bar', 'Fizz', 'Buzz']
<\/script>

<template>
  <AppSelect
    :items="items"
    label="Standard"
  />
</template>
`,js:`<script setup>
const items = [
  'Foo',
  'Bar',
  'Fizz',
  'Buzz',
]
<\/script>

<template>
  <AppSelect
    :items="items"
    label="Standard"
  />
</template>
`},Y={ts:`<script lang="ts" setup>
const items = ['foo', 'bar', 'fizz', 'buzz']
const selected = ref(['foo', 'bar', 'fizz', 'buzz'])
<\/script>

<template>
  <AppSelect
    v-model="selected"
    :items="items"
    label="Chips"
    chips
    multiple
  />
</template>
`,js:`<script setup>
const items = [
  'foo',
  'bar',
  'fizz',
  'buzz',
]

const selected = ref([
  'foo',
  'bar',
  'fizz',
  'buzz',
])
<\/script>

<template>
  <AppSelect
    v-model="selected"
    :items="items"
    label="Chips"
    chips
    multiple
  />
</template>
`},E={ts:`<script lang="ts" setup>
const selectedOption = ref({ state: 'Florida', abbr: 'FL' })

const items = [
  { state: 'Florida', abbr: 'FL' },
  { state: 'Georgia', abbr: 'GA' },
  { state: 'Nebraska', abbr: 'NE' },
  { state: 'California', abbr: 'CA' },
  { state: 'New York', abbr: 'NY' },
]
<\/script>

<template>
  <AppSelect
    v-model="selectedOption"
    :hint="\`\${selectedOption.state}, \${selectedOption.abbr}\`"
    :items="items"
    item-title="state"
    item-value="abbr"
    label="Select"
    persistent-hint
    return-object
    single-line
  />
</template>
`,js:`<script setup>
const selectedOption = ref({
  state: 'Florida',
  abbr: 'FL',
})

const items = [
  {
    state: 'Florida',
    abbr: 'FL',
  },
  {
    state: 'Georgia',
    abbr: 'GA',
  },
  {
    state: 'Nebraska',
    abbr: 'NE',
  },
  {
    state: 'California',
    abbr: 'CA',
  },
  {
    state: 'New York',
    abbr: 'NY',
  },
]
<\/script>

<template>
  <AppSelect
    v-model="selectedOption"
    :hint="\`\${selectedOption.state}, \${selectedOption.abbr}\`"
    :items="items"
    item-title="state"
    item-value="abbr"
    label="Select"
    persistent-hint
    return-object
    single-line
  />
</template>
`},q={ts:`<script lang="ts" setup>
const items = ['Foo', 'Bar', 'Fizz', 'Buzz']
<\/script>

<template>
  <AppSelect
    :items="items"
    label="Density"
    density="compact"
  />
</template>
`,js:`<script setup>
const items = [
  'Foo',
  'Bar',
  'Fizz',
  'Buzz',
]
<\/script>

<template>
  <AppSelect
    :items="items"
    label="Density"
    density="compact"
  />
</template>
`},J={ts:`<script lang="ts" setup>
const selectedOption1 = ref('Florida')
const selectedOption2 = ref('Texas')

const states = [
  'Alabama',
  'Alaska',
  'American Samoa',
  'Arizona',
  'Arkansas',
  'California',
  'Colorado',
  'Connecticut',
  'Delaware',
  'District of Columbia',
  'Federated States of Micronesia',
  'Florida',
  'Georgia',
  'Guam',
]
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <AppSelect
        v-model="selectedOption1"
        :items="states"
        label="Select"
        prepend-icon="tabler-map"
        single-line
        variant="filled"
      />
    </VCol>

    <VCol cols="12">
      <AppSelect
        v-model="selectedOption2"
        :items="states"
        append-icon="tabler-map"
        label="Select"
        single-line
        variant="filled"
      />
    </VCol>
  </VRow>
</template>
`,js:`<script setup>
const selectedOption1 = ref('Florida')
const selectedOption2 = ref('Texas')

const states = [
  'Alabama',
  'Alaska',
  'American Samoa',
  'Arizona',
  'Arkansas',
  'California',
  'Colorado',
  'Connecticut',
  'Delaware',
  'District of Columbia',
  'Federated States of Micronesia',
  'Florida',
  'Georgia',
  'Guam',
]
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <AppSelect
        v-model="selectedOption1"
        :items="states"
        label="Select"
        prepend-icon="tabler-map"
        single-line
        variant="filled"
      />
    </VCol>

    <VCol cols="12">
      <AppSelect
        v-model="selectedOption2"
        :items="states"
        append-icon="tabler-map"
        label="Select"
        single-line
        variant="filled"
      />
    </VCol>
  </VRow>
</template>
`},K={ts:`<script lang="ts" setup>
const items = ['Foo', 'Bar', 'Fizz', 'Buzz']
<\/script>

<template>
  <AppSelect
    :items="items"
    :menu-props="{ transition: 'scroll-y-transition' }"
    label="Label"
  />
</template>
`,js:`<script setup>
const items = [
  'Foo',
  'Bar',
  'Fizz',
  'Buzz',
]
<\/script>

<template>
  <AppSelect
    :items="items"
    :menu-props="{ transition: 'scroll-y-transition' }"
    label="Label"
  />
</template>
`},Q={ts:`<script lang="ts" setup>
const selectedOptions = ref(['Alabama'])

const states = [
  'Alabama',
  'Alaska',
  'American Samoa',
  'Arizona',
  'Arkansas',
  'California',
  'Colorado',
  'Connecticut',
  'Delaware',
  'District of Columbia',
  'Federated States of Micronesia',
  'Florida',
  'Georgia',
  'Guam',
]
<\/script>

<template>
  <AppSelect
    v-model="selectedOptions"
    :items="states"
    :menu-props="{ maxHeight: '400' }"
    label="Select"
    multiple
    persistent-hint
  />
</template>
`,js:`<script setup>
const selectedOptions = ref(['Alabama'])

const states = [
  'Alabama',
  'Alaska',
  'American Samoa',
  'Arizona',
  'Arkansas',
  'California',
  'Colorado',
  'Connecticut',
  'Delaware',
  'District of Columbia',
  'Federated States of Micronesia',
  'Florida',
  'Georgia',
  'Guam',
]
<\/script>

<template>
  <AppSelect
    v-model="selectedOptions"
    :items="states"
    :menu-props="{ maxHeight: '400' }"
    label="Select"
    multiple
    persistent-hint
  />
</template>
`},W={ts:`<script lang="ts" setup>
import avatar1 from '@images/avatars/avatar-1.png'
import avatar2 from '@images/avatars/avatar-2.png'
import avatar3 from '@images/avatars/avatar-3.png'
import avatar4 from '@images/avatars/avatar-4.png'
import avatar5 from '@images/avatars/avatar-5.png'

const items: { name: string; avatar: string }[] = [
  { name: 'Sandra Adams', avatar: avatar1 },
  { name: 'Ali Connors', avatar: avatar2 },
  { name: 'Trevor Hansen', avatar: avatar3 },
  { name: 'Tucker Smith', avatar: avatar4 },
  { name: 'Britta Holt', avatar: avatar5 },
]

const value = ref(['Sandra Adams'])
<\/script>

<template>
  <AppSelect
    v-model="value"
    :items="items"
    item-title="name"
    item-value="name"
    label="Select Item"
    multiple
    clearable
    clear-icon="tabler-x"
  >
    <template #selection="{ item }">
      <VChip>
        <VAvatar
          start
          :image="item.raw.avatar"
        />
        <span>{{ item.title }}</span>
      </VChip>
    </template>
  </AppSelect>
</template>
`,js:`<script setup>
import avatar1 from '@images/avatars/avatar-1.png'
import avatar2 from '@images/avatars/avatar-2.png'
import avatar3 from '@images/avatars/avatar-3.png'
import avatar4 from '@images/avatars/avatar-4.png'
import avatar5 from '@images/avatars/avatar-5.png'

const items = [
  {
    name: 'Sandra Adams',
    avatar: avatar1,
  },
  {
    name: 'Ali Connors',
    avatar: avatar2,
  },
  {
    name: 'Trevor Hansen',
    avatar: avatar3,
  },
  {
    name: 'Tucker Smith',
    avatar: avatar4,
  },
  {
    name: 'Britta Holt',
    avatar: avatar5,
  },
]

const value = ref(['Sandra Adams'])
<\/script>

<template>
  <AppSelect
    v-model="value"
    :items="items"
    item-title="name"
    item-value="name"
    label="Select Item"
    multiple
    clearable
    clear-icon="tabler-x"
  >
    <template #selection="{ item }">
      <VChip>
        <VAvatar
          start
          :image="item.raw.avatar"
        />
        <span>{{ item.title }}</span>
      </VChip>
    </template>
  </AppSelect>
</template>
`},X={ts:`<script lang="ts" setup>
const items = ['Foo', 'Bar', 'Fizz', 'Buzz']
<\/script>

<template>
  <VRow>
    <VCol
      cols="12"
      sm="6"
    >
      <VSelect
        :items="items"
        label="Outlined"
      />
    </VCol>
    <VCol
      cols="12"
      sm="6"
    >
      <VSelect
        :items="items"
        label="Filled"
        variant="filled"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VSelect
        :items="items"
        label="Solo"
        variant="solo"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VSelect
        :items="items"
        label="Plain"
        variant="plain"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VSelect
        :items="items"
        label="Underlined"
        variant="underlined"
        density="default"
      />
    </VCol>
  </VRow>
</template>
`,js:`<script setup>
const items = [
  'Foo',
  'Bar',
  'Fizz',
  'Buzz',
]
<\/script>

<template>
  <VRow>
    <VCol
      cols="12"
      sm="6"
    >
      <VSelect
        :items="items"
        label="Outlined"
      />
    </VCol>
    <VCol
      cols="12"
      sm="6"
    >
      <VSelect
        :items="items"
        label="Filled"
        variant="filled"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VSelect
        :items="items"
        label="Solo"
        variant="solo"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VSelect
        :items="items"
        label="Plain"
        variant="plain"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VSelect
        :items="items"
        label="Underlined"
        variant="underlined"
        density="default"
      />
    </VCol>
  </VRow>
</template>
`},Z=s("p",null,"Select fields components are used for collecting user provided information from a list of options.",-1),ee=s("p",null,[o("You can use "),s("code",null,"density"),o(" prop to reduce the field height and lower max height of list items.")],-1),te=s("p",null,[o(" Use "),s("code",null,"filled"),o(", "),s("code",null,"outlined"),o(", "),s("code",null,"solo"),o(", "),s("code",null,"underlined"),o(" and "),s("code",null,"plain"),o(" options of "),s("code",null,"variant"),o(" prop to change appearance of select. ")],-1),ae=s("p",null,"You can specify the specific properties within your items array that correspond to the title and value fields. In this example we also use the return-object prop which will return the entire object of the selected item on selection.",-1),le=s("p",null,[o("Use a custom "),s("code",null,"prepend"),o(" or "),s("code",null,"appended"),o(" icon.")],-1),se=s("p",null,[o("Use "),s("code",null,"chips"),o(" prop to make selected option as chip.")],-1),oe=s("p",null,[o("Custom props can be passed directly to "),s("code",null,"v-menu"),o(" using "),s("code",null,"menuProps"),o(" prop.")],-1),ie=s("p",null,[o("Use "),s("code",null,"multiple"),o(" prop to select multiple option.")],-1),ne=s("p",null,[o("The "),s("code",null,"selection"),o(" slot can be used to customize the way selected values are shown in the input.")],-1),je={__name:"select",setup(u){return(t,i)=>{const m=P,l=$,c=L,r=H,S=R,C=M,z=U,g=T,h=j,F=N;return p(),d(A,null,{default:a(()=>[e(n,{cols:"12",md:"6"},{default:a(()=>[e(l,{title:"Basic",code:I},{default:a(()=>[Z,e(m)]),_:1},8,["code"])]),_:1}),e(n,{cols:"12",md:"6"},{default:a(()=>[e(l,{title:"Density",code:q},{default:a(()=>[ee,e(c)]),_:1},8,["code"])]),_:1}),e(n,{cols:"12"},{default:a(()=>[e(l,{title:"Variant",code:X},{default:a(()=>[te,e(r)]),_:1},8,["code"])]),_:1}),e(n,{cols:"12",md:"6"},{default:a(()=>[e(l,{title:"Custom text and value",code:E},{default:a(()=>[ae,e(S)]),_:1},8,["code"])]),_:1}),e(n,{cols:"12",md:"6"},{default:a(()=>[e(l,{title:"Icons",code:J},{default:a(()=>[le,e(C)]),_:1},8,["code"])]),_:1}),e(n,{cols:"12",md:"6"},{default:a(()=>[e(l,{title:"Chips",code:Y},{default:a(()=>[se,e(z)]),_:1},8,["code"])]),_:1}),e(n,{cols:"12",md:"6"},{default:a(()=>[e(l,{title:"Menu Props",code:K},{default:a(()=>[oe,e(g)]),_:1},8,["code"])]),_:1}),e(n,{cols:"12",md:"6"},{default:a(()=>[e(l,{title:"Multiple",code:Q},{default:a(()=>[ie,e(h)]),_:1},8,["code"])]),_:1}),e(n,{cols:"12",md:"6"},{default:a(()=>[e(l,{title:"Selection slot",code:W},{default:a(()=>[ne,e(F)]),_:1},8,["code"])]),_:1})]),_:1})}}};export{je as default};
//# sourceMappingURL=select-b8354720.js.map
