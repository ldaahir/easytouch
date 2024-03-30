import{_ as m}from"./AppTextarea-4825a949.js";import{f as x,I as p,J as i,u as V,q as h,_ as w,K as t,k as e,P as o,Q as a}from"./frappe-ui-b8f10d89.js";import{a as l,V as b}from"./VRow-b8bac363.js";import{V as _}from"./VTextarea-1637f920.js";import{_ as k}from"./AppCardCode-454d9e68.js";import"./VInput-545a0bfa.js";import"./index-e43e3799.js";import"./transition-61bfbac1.js";/* empty css                   */import"./VField-5b446628.js";import"./easing-512405f0.js";import"./VImg-dcfe0017.js";import"./forwardRefs-bb5e4b03.js";import"./VCounter-cc8846c3.js";import"./vue.runtime.esm-bundler-c0d7c61a.js";import"./VCard-bd92c839.js";import"./VAvatar-26ec77a4.js";import"./VDivider-7eec4b6d.js";const $={__name:"DemoTextareaValidation",setup(u){const r=x("Hello!"),n=[c=>c.length<=25||"Max 25 characters"];return(c,s)=>{const d=m;return p(),i(d,{modelValue:V(r),"onUpdate:modelValue":s[0]||(s[0]=f=>h(r)?r.value=f:null),label:"Validation",rules:n,rows:"2"},null,8,["modelValue"])}}},z={__name:"DemoTextareaNoResize",setup(u){const r=x("Marshmallow tiramisu pie dessert gingerbread tart caramels marzipan oat cake. Muffin sesame snaps cupcake bonbon cookie tiramisu. Pudding biscuit gingerbread halvah lollipop jelly-o cookie.");return(n,c)=>{const s=m;return p(),i(s,{modelValue:V(r),"onUpdate:modelValue":c[0]||(c[0]=d=>h(r)?r.value=d:null),label:"Text","no-resize":"",rows:"2"},null,8,["modelValue"])}}},j={};function H(u,r){const n=m;return p(),i(b,null,{default:t(()=>[e(l,{cols:"12",sm:"6"},{default:t(()=>[e(n,{label:"One row","auto-grow":"",rows:"1","row-height":"15"})]),_:1}),e(l,{cols:"12",sm:"6"},{default:t(()=>[e(n,{"auto-grow":"",label:"Two rows",rows:"2","row-height":"20"})]),_:1}),e(l,{cols:"12",sm:"6"},{default:t(()=>[e(n,{label:"Three rows","auto-grow":"",rows:"3","row-height":"25"})]),_:1}),e(l,{cols:"12",sm:"6"},{default:t(()=>[e(n,{"auto-grow":"",label:"Four rows",rows:"4","row-height":"30"})]),_:1})]),_:1})}const U=w(j,[["render",H]]),M={};function B(u,r){const n=m;return p(),i(b,null,{default:t(()=>[e(l,{cols:"12"},{default:t(()=>[e(n,{label:"prepend-icon",rows:"1","prepend-icon":"tabler-message-2"})]),_:1}),e(l,{cols:"12"},{default:t(()=>[e(n,{"append-icon":"tabler-message-2",label:"append-icon",rows:"1"})]),_:1}),e(l,{cols:"12"},{default:t(()=>[e(n,{"prepend-inner-icon":"tabler-message-2",label:"prepend-inner-icon",rows:"1"})]),_:1}),e(l,{cols:"12"},{default:t(()=>[e(n,{"append-inner-icon":"tabler-message-2",label:"append-inner-icon",rows:"1"})]),_:1})]),_:1})}const G=w(M,[["render",B]]),P={__name:"DemoTextareaCounter",setup(u){const r=x("Hello!");return(n,c)=>{const s=m;return p(),i(s,{modelValue:V(r),"onUpdate:modelValue":c[0]||(c[0]=d=>h(r)?r.value=d:null),counter:"",label:"Text"},null,8,["modelValue"])}}},F={__name:"DemoTextareaClearable",setup(u){const r=x("This is clearable text.");return(n,c)=>{const s=m;return p(),i(s,{modelValue:V(r),"onUpdate:modelValue":c[0]||(c[0]=d=>h(r)?r.value=d:null),clearable:"","clear-icon":"tabler-circle-x",label:"Text"},null,8,["modelValue"])}}},N={};function O(u,r){const n=m;return p(),i(n,{autocomplete:"email",label:"Email"})}const S=w(N,[["render",O]]),W={};function E(u,r){const n=m;return p(),i(b,null,{default:t(()=>[e(l,{cols:"12"},{default:t(()=>[e(n,{disabled:"",label:"Disabled",hint:"Hint text",rows:"2"})]),_:1}),e(l,{cols:"12"},{default:t(()=>[e(n,{readonly:"",rows:"2",label:"Readonly",hint:"Hint text"})]),_:1})]),_:1})}const I=w(W,[["render",E]]),q={};function J(u,r){return p(),i(b,null,{default:t(()=>[e(l,{cols:"12",sm:"6"},{default:t(()=>[e(_,{label:"Default",rows:"2"})]),_:1}),e(l,{cols:"12",sm:"6"},{default:t(()=>[e(_,{label:"Solo",rows:"2",variant:"solo"})]),_:1}),e(l,{cols:"12",sm:"6"},{default:t(()=>[e(_,{label:"Filled",rows:"2",variant:"filled"})]),_:1}),e(l,{cols:"12",sm:"6"},{default:t(()=>[e(_,{label:"Outlined",rows:"2",variant:"outlined"})]),_:1}),e(l,{cols:"12",sm:"6"},{default:t(()=>[e(_,{label:"Underlined",rows:"2",variant:"underlined"})]),_:1}),e(l,{cols:"12",sm:"6"},{default:t(()=>[e(_,{label:"Plain",rows:"2",variant:"plain"})]),_:1})]),_:1})}const K=w(q,[["render",J]]),Q={__name:"DemoTextareaAutoGrow",setup(u){const r=x("The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through.");return(n,c)=>{const s=m;return p(),i(s,{modelValue:V(r),"onUpdate:modelValue":c[0]||(c[0]=d=>h(r)?r.value=d:null),label:"Auto Grow","auto-grow":""},null,8,["modelValue"])}}},Y={};function L(u,r){const n=m;return p(),i(n,{label:"Default"})}const X=w(Y,[["render",L]]),Z={ts:`<script setup lang="ts">
const textareaValue = ref('The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through.')
<\/script>

<template>
  <AppTextarea
    v-model="textareaValue"
    label="Auto Grow"
    auto-grow
  />
</template>
`,js:`<script setup>
const textareaValue = ref('The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through.')
<\/script>

<template>
  <AppTextarea
    v-model="textareaValue"
    label="Auto Grow"
    auto-grow
  />
</template>
`},ee={ts:`<template>
  <AppTextarea label="Default" />
</template>
`,js:`<template>
  <AppTextarea label="Default" />
</template>
`},te={ts:`<template>
  <AppTextarea
    autocomplete="email"
    label="Email"
  />
</template>
`,js:`<template>
  <AppTextarea
    autocomplete="email"
    label="Email"
  />
</template>
`},oe={ts:`<script setup lang="ts">
const textareaValue = ref('This is clearable text.')
<\/script>

<template>
  <AppTextarea
    v-model="textareaValue"
    clearable
    clear-icon="tabler-circle-x"
    label="Text"
  />
</template>
`,js:`<script setup>
const textareaValue = ref('This is clearable text.')
<\/script>

<template>
  <AppTextarea
    v-model="textareaValue"
    clearable
    clear-icon="tabler-circle-x"
    label="Text"
  />
</template>
`},ae={ts:`<script lang="ts" setup>
const textareaValue = ref('Hello!')
<\/script>

<template>
  <AppTextarea
    v-model="textareaValue"
    counter
    label="Text"
  />
</template>
`,js:`<script setup>
const textareaValue = ref('Hello!')
<\/script>

<template>
  <AppTextarea
    v-model="textareaValue"
    counter
    label="Text"
  />
</template>
`},le={ts:`<template>
  <VRow>
    <VCol cols="12">
      <AppTextarea
        label="prepend-icon"
        rows="1"
        prepend-icon="tabler-message-2"
      />
    </VCol>

    <VCol cols="12">
      <AppTextarea
        append-icon="tabler-message-2"
        label="append-icon"
        rows="1"
      />
    </VCol>

    <VCol cols="12">
      <AppTextarea
        prepend-inner-icon="tabler-message-2"
        label="prepend-inner-icon"
        rows="1"
      />
    </VCol>

    <VCol cols="12">
      <AppTextarea
        append-inner-icon="tabler-message-2"
        label="append-inner-icon"
        rows="1"
      />
    </VCol>
  </VRow>
</template>
`,js:`<template>
  <VRow>
    <VCol cols="12">
      <AppTextarea
        label="prepend-icon"
        rows="1"
        prepend-icon="tabler-message-2"
      />
    </VCol>

    <VCol cols="12">
      <AppTextarea
        append-icon="tabler-message-2"
        label="append-icon"
        rows="1"
      />
    </VCol>

    <VCol cols="12">
      <AppTextarea
        prepend-inner-icon="tabler-message-2"
        label="prepend-inner-icon"
        rows="1"
      />
    </VCol>

    <VCol cols="12">
      <AppTextarea
        append-inner-icon="tabler-message-2"
        label="append-inner-icon"
        rows="1"
      />
    </VCol>
  </VRow>
</template>
`},re={ts:`<script lang="ts" setup>
const value = ref('Marshmallow tiramisu pie dessert gingerbread tart caramels marzipan oat cake. Muffin sesame snaps cupcake bonbon cookie tiramisu. Pudding biscuit gingerbread halvah lollipop jelly-o cookie.')
<\/script>

<template>
  <AppTextarea
    v-model="value"
    label="Text"
    no-resize
    rows="2"
  />
</template>
`,js:`<script setup>
const value = ref('Marshmallow tiramisu pie dessert gingerbread tart caramels marzipan oat cake. Muffin sesame snaps cupcake bonbon cookie tiramisu. Pudding biscuit gingerbread halvah lollipop jelly-o cookie.')
<\/script>

<template>
  <AppTextarea
    v-model="value"
    label="Text"
    no-resize
    rows="2"
  />
</template>
`},ne={ts:`<template>
  <VRow>
    <VCol
      cols="12"
      sm="6"
    >
      <AppTextarea
        label="One row"
        auto-grow
        rows="1"
        row-height="15"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <AppTextarea
        auto-grow
        label="Two rows"
        rows="2"
        row-height="20"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <AppTextarea
        label="Three rows"
        auto-grow
        rows="3"
        row-height="25"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <AppTextarea
        auto-grow
        label="Four rows"
        rows="4"
        row-height="30"
      />
    </VCol>
  </VRow>
</template>
`,js:`<template>
  <VRow>
    <VCol
      cols="12"
      sm="6"
    >
      <AppTextarea
        label="One row"
        auto-grow
        rows="1"
        row-height="15"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <AppTextarea
        auto-grow
        label="Two rows"
        rows="2"
        row-height="20"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <AppTextarea
        label="Three rows"
        auto-grow
        rows="3"
        row-height="25"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <AppTextarea
        auto-grow
        label="Four rows"
        rows="4"
        row-height="30"
      />
    </VCol>
  </VRow>
</template>
`},se={ts:`<template>
  <VRow>
    <VCol cols="12">
      <AppTextarea
        disabled
        label="Disabled"
        hint="Hint text"
        rows="2"
      />
    </VCol>

    <VCol cols="12">
      <AppTextarea
        readonly
        rows="2"
        label="Readonly"
        hint="Hint text"
      />
    </VCol>
  </VRow>
</template>
`,js:`<template>
  <VRow>
    <VCol cols="12">
      <AppTextarea
        disabled
        label="Disabled"
        hint="Hint text"
        rows="2"
      />
    </VCol>

    <VCol cols="12">
      <AppTextarea
        readonly
        rows="2"
        label="Readonly"
        hint="Hint text"
      />
    </VCol>
  </VRow>
</template>
`},ce={ts:`<script lang="ts" setup>
const textareaValue = ref('Hello!')
const rules = [(v: string) => v.length <= 25 || 'Max 25 characters']
<\/script>

<template>
  <AppTextarea
    v-model="textareaValue"
    label="Validation"
    :rules="rules"
    rows="2"
  />
</template>
`,js:`<script setup>
const textareaValue = ref('Hello!')
const rules = [v => v.length <= 25 || 'Max 25 characters']
<\/script>

<template>
  <AppTextarea
    v-model="textareaValue"
    label="Validation"
    :rules="rules"
    rows="2"
  />
</template>
`},pe={ts:`<template>
  <VRow>
    <VCol
      cols="12"
      sm="6"
    >
      <VTextarea
        label="Default"
        rows="2"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VTextarea
        label="Solo"
        rows="2"
        variant="solo"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VTextarea
        label="Filled"
        rows="2"
        variant="filled"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VTextarea
        label="Outlined"
        rows="2"
        variant="outlined"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VTextarea
        label="Underlined"
        rows="2"
        variant="underlined"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VTextarea
        label="Plain"
        rows="2"
        variant="plain"
      />
    </VCol>
  </VRow>
</template>
`,js:`<template>
  <VRow>
    <VCol
      cols="12"
      sm="6"
    >
      <VTextarea
        label="Default"
        rows="2"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VTextarea
        label="Solo"
        rows="2"
        variant="solo"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VTextarea
        label="Filled"
        rows="2"
        variant="filled"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VTextarea
        label="Outlined"
        rows="2"
        variant="outlined"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VTextarea
        label="Underlined"
        rows="2"
        variant="underlined"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VTextarea
        label="Plain"
        rows="2"
        variant="plain"
      />
    </VCol>
  </VRow>
</template>
`},ie=o("p",null," v-textarea in its simplest form is a multi-line text-field, useful for larger amounts of text. ",-1),ue=o("p",null,[a("When using the "),o("code",null,"auto-grow"),a(" prop, textarea's will automatically increase in size when the contained text exceeds its size.")],-1),de=o("p",null,[a("Use "),o("code",null,"filled"),a(", "),o("code",null,"plain"),a(", "),o("code",null,"outlined"),a(", "),o("code",null,"solo"),a(" and "),o("code",null,"underlined"),a(" option of "),o("code",null,"variant"),a(" prop to change the look of file input.")],-1),me=o("p",null,[a("Use "),o("code",null,"disabled"),a(" and "),o("code",null,"readonly"),a(" prop to change the state of textarea.")],-1),_e=o("p",null,[a(" The "),o("code",null,"autocomplete"),a(" prop gives you the option to enable the browser to predict user input. ")],-1),we=o("p",null,[a("You can clear the text from a "),o("code",null,"v-textarea"),a(" by using the "),o("code",null,"clearable"),a(" prop, and customize the icon used with the "),o("code",null,"clearable-icon"),a(" prop.")],-1),xe=o("p",null,[a(" The "),o("code",null,"counter"),a(" prop informs the user of a character limit for the "),o("code",null,"v-textarea"),a(". ")],-1),Ve=o("p",null,[a("The "),o("code",null,"append-icon"),a(", "),o("code",null,"prepend-icon"),a(", "),o("code",null,"append-inner-icon"),a(" and "),o("code",null,"prepend-inner-icon"),a(" props help add context to v-textarea.")],-1),he=o("p",null,[a("The "),o("code",null,"rows"),a(" prop allows you to define how many rows the textarea has, when combined with the "),o("code",null,"row-height"),a(" prop you can further customize your rows by defining their height.")],-1),be=o("p",null,[o("code",null,"v-textarea"),a("'s have the option to remain the same size regardless of their content's size, using the "),o("code",null,"no-resize"),a(" prop.")],-1),fe=o("p",null,[a("Use "),o("code",null,"rules"),a(" prop to validate the textarea.")],-1),Fe={__name:"textarea",setup(u){return(r,n)=>{const c=X,s=k,d=Q,f=K,T=I,g=S,C=F,v=P,A=G,R=U,D=z,y=$;return p(),i(b,{class:"match-height"},{default:t(()=>[e(l,{cols:"12",md:"6"},{default:t(()=>[e(s,{title:"Basic",code:ee},{default:t(()=>[ie,e(c)]),_:1},8,["code"])]),_:1}),e(l,{cols:"12",md:"6"},{default:t(()=>[e(s,{title:"Auto Grow",code:Z},{default:t(()=>[ue,e(d)]),_:1},8,["code"])]),_:1}),e(l,{cols:"12"},{default:t(()=>[e(s,{title:"Variant",code:pe},{default:t(()=>[de,e(f)]),_:1},8,["code"])]),_:1}),e(l,{cols:"12",md:"6"},{default:t(()=>[e(s,{title:"States",code:se},{default:t(()=>[me,e(T)]),_:1},8,["code"])]),_:1}),e(l,{cols:"12",md:"6"},{default:t(()=>[e(s,{title:"Browser autocomplete",code:te},{default:t(()=>[_e,e(g)]),_:1},8,["code"])]),_:1}),e(l,{cols:"12",md:"6"},{default:t(()=>[e(s,{title:"Clearable",code:oe},{default:t(()=>[we,e(C)]),_:1},8,["code"])]),_:1}),e(l,{cols:"12",md:"6"},{default:t(()=>[e(s,{title:"Counter",code:ae},{default:t(()=>[xe,e(v)]),_:1},8,["code"])]),_:1}),e(l,{cols:"12",md:"6"},{default:t(()=>[e(s,{title:"Icons",code:le},{default:t(()=>[Ve,e(A)]),_:1},8,["code"])]),_:1}),e(l,{cols:"12",md:"6"},{default:t(()=>[e(s,{title:"Rows",code:ne},{default:t(()=>[he,e(R)]),_:1},8,["code"])]),_:1}),e(l,{cols:"12",md:"6"},{default:t(()=>[e(s,{title:"No resize",code:re},{default:t(()=>[be,e(D)]),_:1},8,["code"])]),_:1}),e(l,{cols:"12",md:"6"},{default:t(()=>[e(s,{title:"Validation",code:ce},{default:t(()=>[fe,e(y)]),_:1},8,["code"])]),_:1})]),_:1})}}};export{Fe as default};
//# sourceMappingURL=textarea-88a5825b.js.map
