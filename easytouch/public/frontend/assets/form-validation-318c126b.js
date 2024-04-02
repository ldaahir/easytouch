import{_ as T}from"./AppTextField-9d8f30b5.js";import{f as d,I as w,J as y,K as o,k as l,u as e,q as p,Q as v,ac as _,P as M}from"./frappe-ui-26ef7369.js";import{r as n,b as S,i as D,a as $,c as Y,l as E,p as k,d as L,f as O,e as R,u as I}from"./validators-50c95554.js";import{V as x,a}from"./VRow-a794fb6c.js";import{i as U}from"./index-e1b913cd.js";import{V as N}from"./VForm-d2878bb6.js";import{_ as j}from"./AppCardCode-cc96e90f.js";import"./VInput-ea621834.js";import"./transition-6a62c7af.js";import"./VTextField-ae5a2228.js";/* empty css                   */import"./VField-f7afb4c1.js";import"./easing-512405f0.js";import"./VImg-9de85dec.js";import"./forwardRefs-bb5e4b03.js";import"./VCounter-b723ae3f.js";import"./index-61e4df1a.js";import"./vue.runtime.esm-bundler-4877976f.js";import"./VCard-98364713.js";import"./VAvatar-7de7fc90.js";import"./VDivider-66cdee18.js";const J={__name:"DemoFormValidationValidationTypes",setup(g){const V=d(""),u=d(""),F=d(""),m=d(""),i=d(""),C=d(""),s=d(""),f=d(""),c=d(""),b=d(""),q=d(""),A=d(""),P=d();return(X,r)=>{const h=T;return w(),y(N,{ref_key:"refForm",ref:P,onSubmit:r[13]||(r[13]=_(()=>{},["prevent"]))},{default:o(()=>[l(x,null,{default:o(()=>[l(a,{cols:"12",md:"6"},{default:o(()=>[l(h,{modelValue:e(V),"onUpdate:modelValue":r[0]||(r[0]=t=>p(V)?V.value=t:null),"persistent-placeholder":"",placeholder:"This field is required",rules:[e(n)]},null,8,["modelValue","rules"])]),_:1}),l(a,{cols:"12",md:"6"},{default:o(()=>[l(h,{modelValue:e(u),"onUpdate:modelValue":r[1]||(r[1]=t=>p(u)?u.value=t:null),"persistent-placeholder":"",placeholder:"Enter Number between 10 & 20",rules:[e(n),e(S)(e(u),10,20)]},null,8,["modelValue","rules"])]),_:1}),l(a,{cols:"12",md:"6"},{default:o(()=>[l(h,{modelValue:e(F),"onUpdate:modelValue":r[2]||(r[2]=t=>p(F)?F.value=t:null),"persistent-placeholder":"",placeholder:"Must only consist of numbers",rules:[e(n),e(D)]},null,8,["modelValue","rules"])]),_:1}),l(a,{cols:"12",md:"6"},{default:o(()=>[l(h,{modelValue:e(m),"onUpdate:modelValue":r[3]||(r[3]=t=>p(m)?m.value=t:null),"persistent-placeholder":"",placeholder:"Must match the specified regular expression : ^([0-9]+)$ - numbers only",rules:[e(n),e($)(e(m),"^([0-9]+)$")]},null,8,["modelValue","rules"])]),_:1}),l(a,{cols:"12",md:"6"},{default:o(()=>[l(h,{modelValue:e(i),"onUpdate:modelValue":r[4]||(r[4]=t=>p(i)?i.value=t:null),"persistent-placeholder":"",placeholder:"Only alphabetic characters",rules:[e(n),e(Y)]},null,8,["modelValue","rules"])]),_:1}),l(a,{cols:"12",md:"6"},{default:o(()=>[l(h,{modelValue:e(C),"onUpdate:modelValue":r[5]||(r[5]=t=>p(C)?C.value=t:null),"persistent-placeholder":"",placeholder:"Length should not be less than the specified length : 3",rules:[e(n),e(E)(e(C),3)]},null,8,["modelValue","rules"])]),_:1}),l(a,{cols:"12",md:"6"},{default:o(()=>[l(h,{modelValue:e(s),"onUpdate:modelValue":r[6]||(r[6]=t=>p(s)?s.value=t:null),"persistent-placeholder":"",placeholder:"Password Input Field",type:"password",rules:[e(n),e(k)],autocomplete:"on"},null,8,["modelValue","rules"])]),_:1}),l(a,{cols:"12",md:"6"},{default:o(()=>[l(h,{modelValue:e(f),"onUpdate:modelValue":r[7]||(r[7]=t=>p(f)?f.value=t:null),"persistent-placeholder":"",placeholder:"The digits field must be numeric and exactly contain 3 digits",rules:[e(n),e(E)(e(f),3),e(D)]},null,8,["modelValue","rules"])]),_:1}),l(a,{cols:"12",md:"6"},{default:o(()=>[l(h,{modelValue:e(c),"onUpdate:modelValue":r[8]||(r[8]=t=>p(c)?c.value=t:null),"persistent-placeholder":"",placeholder:"Repeat password must match",type:"password",rules:[e(n),e(L)(e(c),e(s))],autocomplete:"on"},null,8,["modelValue","rules"])]),_:1}),l(a,{cols:"12",md:"6"},{default:o(()=>[l(h,{modelValue:e(b),"onUpdate:modelValue":r[9]||(r[9]=t=>p(b)?b.value=t:null),"persistent-placeholder":"",placeholder:"Only alphabetic characters, numbers, dashes or underscores",rules:[e(n),e(O)]},null,8,["modelValue","rules"])]),_:1}),l(a,{cols:"12",md:"6"},{default:o(()=>[l(h,{modelValue:e(q),"onUpdate:modelValue":r[10]||(r[10]=t=>p(q)?q.value=t:null),"persistent-placeholder":"",placeholder:"Must be a valid email",rules:[e(n),e(R)]},null,8,["modelValue","rules"])]),_:1}),l(a,{cols:"12",md:"6"},{default:o(()=>[l(h,{modelValue:e(A),"onUpdate:modelValue":r[11]||(r[11]=t=>p(A)?A.value=t:null),"persistent-placeholder":"",placeholder:"Must be a valid url",rules:[e(n),e(I)]},null,8,["modelValue","rules"])]),_:1}),l(a,{cols:"12"},{default:o(()=>[l(U,{type:"submit",onClick:r[12]||(r[12]=t=>{var B;return(B=e(P))==null?void 0:B.validate()})},{default:o(()=>[v(" Submit ")]),_:1})]),_:1})]),_:1})]),_:1},512)}}},K={__name:"DemoFormValidationValidatingMultipleRules",setup(g){const V=d(""),u=d(""),F=d(),m=d(""),i=d("");return(C,s)=>{const f=T;return w(),y(N,{ref_key:"refForm",ref:F,onSubmit:s[5]||(s[5]=_(()=>{},["prevent"]))},{default:o(()=>[l(x,null,{default:o(()=>[l(a,{cols:"12",md:"6"},{default:o(()=>[l(f,{modelValue:e(V),"onUpdate:modelValue":s[0]||(s[0]=c=>p(V)?V.value=c:null),placeholder:"Your Name","persistent-placeholder":"",rules:[e(n)]},null,8,["modelValue","rules"])]),_:1}),l(a,{cols:"12",md:"6"},{default:o(()=>[l(f,{modelValue:e(u),"onUpdate:modelValue":s[1]||(s[1]=c=>p(u)?u.value=c:null),placeholder:"Your Email","persistent-placeholder":"",rules:[e(n),e(R)]},null,8,["modelValue","rules"])]),_:1}),l(a,{cols:"12",md:"6"},{default:o(()=>[l(f,{modelValue:e(m),"onUpdate:modelValue":s[2]||(s[2]=c=>p(m)?m.value=c:null),type:"password",placeholder:"Your Password","persistent-placeholder":"",rules:[e(n),e(k)],autocomplete:"on"},null,8,["modelValue","rules"])]),_:1}),l(a,{cols:"12",md:"6"},{default:o(()=>[l(f,{modelValue:e(i),"onUpdate:modelValue":s[3]||(s[3]=c=>p(i)?i.value=c:null),type:"password",placeholder:"Confirm Password","persistent-placeholder":"",rules:[e(n),e(L)(e(i),e(m))],autocomplete:"on"},null,8,["modelValue","rules"])]),_:1}),l(a,{cols:"12"},{default:o(()=>[l(U,{type:"submit",onClick:s[4]||(s[4]=c=>{var b;return(b=e(F))==null?void 0:b.validate()})},{default:o(()=>[v(" Submit ")]),_:1})]),_:1})]),_:1})]),_:1},512)}}},Q={__name:"DemoFormValidationSimpleFormValidation",setup(g){const V=d(""),u=d(""),F=d();return(m,i)=>{const C=T;return w(),y(N,{ref_key:"refForm",ref:F,onSubmit:i[3]||(i[3]=_(()=>{},["prevent"]))},{default:o(()=>[l(x,null,{default:o(()=>[l(a,{cols:"12",md:"6"},{default:o(()=>[l(C,{modelValue:e(V),"onUpdate:modelValue":i[0]||(i[0]=s=>p(V)?V.value=s:null),label:"First Name",rules:[e(n)]},null,8,["modelValue","rules"])]),_:1}),l(a,{cols:"12",md:"6"},{default:o(()=>[l(C,{modelValue:e(u),"onUpdate:modelValue":i[1]||(i[1]=s=>p(u)?u.value=s:null),label:"Email",rules:[e(n),e(R)]},null,8,["modelValue","rules"])]),_:1}),l(a,{cols:"12"},{default:o(()=>[l(U,{type:"submit",onClick:i[2]||(i[2]=s=>{var f;return(f=e(F))==null?void 0:f.validate()})},{default:o(()=>[v(" Submit ")]),_:1})]),_:1})]),_:1})]),_:1},512)}}},z={ts:`<script lang="ts" setup>
// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import type { VForm } from 'vuetify/components/VForm'
import { emailValidator, requiredValidator } from '@validators'

const firstName = ref('')
const email = ref('')

const refForm = ref<VForm>()
<\/script>

<template>
  <VForm
    ref="refForm"
    @submit.prevent="() => {}"
  >
    <VRow>
      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="firstName"
          label="First Name"
          :rules="[requiredValidator]"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="email"
          label="Email"
          :rules="[requiredValidator, emailValidator]"
        />
      </VCol>

      <VCol cols="12">
        <VBtn
          type="submit"
          @click="refForm?.validate()"
        >
          Submit
        </VBtn>
      </VCol>
    </VRow>
  </VForm>
</template>
`,js:`<script setup>
import {
  emailValidator,
  requiredValidator,
} from '@validators'

const firstName = ref('')
const email = ref('')
const refForm = ref()
<\/script>

<template>
  <VForm
    ref="refForm"
    @submit.prevent="() => {}"
  >
    <VRow>
      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="firstName"
          label="First Name"
          :rules="[requiredValidator]"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="email"
          label="Email"
          :rules="[requiredValidator, emailValidator]"
        />
      </VCol>

      <VCol cols="12">
        <VBtn
          type="submit"
          @click="refForm?.validate()"
        >
          Submit
        </VBtn>
      </VCol>
    </VRow>
  </VForm>
</template>
`},G={ts:`<script lang="ts" setup>
// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import type { VForm } from 'vuetify/components/VForm'
import { confirmedValidator, emailValidator, passwordValidator, requiredValidator } from '@validators'

const name = ref('')
const email = ref('')
const refForm = ref<VForm>()
const password = ref('')
const confirmPassword = ref('')
<\/script>

<template>
  <VForm
    ref="refForm"
    @submit.prevent="() => {}"
  >
    <VRow>
      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="name"
          placeholder="Your Name"
          persistent-placeholder
          :rules="[requiredValidator]"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="email"
          placeholder="Your Email"
          persistent-placeholder
          :rules="[requiredValidator, emailValidator]"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="password"
          type="password"
          placeholder="Your Password"
          persistent-placeholder
          :rules="[requiredValidator, passwordValidator]"
          autocomplete="on"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="confirmPassword"
          type="password"
          placeholder="Confirm Password"
          persistent-placeholder
          :rules="[requiredValidator, confirmedValidator(confirmPassword, password)]"
          autocomplete="on"
        />
      </VCol>

      <VCol cols="12">
        <VBtn
          type="submit"
          @click="refForm?.validate()"
        >
          Submit
        </VBtn>
      </VCol>
    </VRow>
  </VForm>
</template>
`,js:`<script setup>
import {
  confirmedValidator,
  emailValidator,
  passwordValidator,
  requiredValidator,
} from '@validators'

const name = ref('')
const email = ref('')
const refForm = ref()
const password = ref('')
const confirmPassword = ref('')
<\/script>

<template>
  <VForm
    ref="refForm"
    @submit.prevent="() => {}"
  >
    <VRow>
      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="name"
          placeholder="Your Name"
          persistent-placeholder
          :rules="[requiredValidator]"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="email"
          placeholder="Your Email"
          persistent-placeholder
          :rules="[requiredValidator, emailValidator]"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="password"
          type="password"
          placeholder="Your Password"
          persistent-placeholder
          :rules="[requiredValidator, passwordValidator]"
          autocomplete="on"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="confirmPassword"
          type="password"
          placeholder="Confirm Password"
          persistent-placeholder
          :rules="[requiredValidator, confirmedValidator(confirmPassword, password)]"
          autocomplete="on"
        />
      </VCol>

      <VCol cols="12">
        <VBtn
          type="submit"
          @click="refForm?.validate()"
        >
          Submit
        </VBtn>
      </VCol>
    </VRow>
  </VForm>
</template>
`},H={ts:`<script lang="ts" setup>
// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import type { VForm } from 'vuetify/components/VForm'
import {
  alphaDashValidator,
  alphaValidator,
  betweenValidator,
  confirmedValidator,
  emailValidator,
  integerValidator,
  lengthValidator,
  passwordValidator,
  regexValidator,
  requiredValidator,
  urlValidator,
} from '@validators'

const requiredField = ref('')
const numberBetween10to20 = ref('')
const onlyConsistNumber = ref('')
const matchRegularEx = ref('')
const onlyAlphabeticCharacters = ref('')
const specifiedLength = ref('')
const password = ref('')
const digits = ref('')
const repeatPassword = ref('')
const onlyAlphabeticNumbersDashesUnderscores = ref('')
const email = ref('')
const validURL = ref('')
const refForm = ref<VForm>()
<\/script>

<template>
  <VForm
    ref="refForm"
    @submit.prevent
  >
    <VRow>
      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="requiredField"
          persistent-placeholder
          placeholder="This field is required"
          :rules="[requiredValidator]"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="numberBetween10to20"
          persistent-placeholder
          placeholder="Enter Number between 10 & 20"
          :rules="[requiredValidator, betweenValidator(numberBetween10to20, 10, 20)]"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="onlyConsistNumber"
          persistent-placeholder
          placeholder="Must only consist of numbers"
          :rules="[requiredValidator, integerValidator]"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="matchRegularEx"
          persistent-placeholder
          placeholder="Must match the specified regular expression : ^([0-9]+)$ - numbers only"
          :rules="[requiredValidator, regexValidator(matchRegularEx, '^([0-9]+)$')]"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="onlyAlphabeticCharacters"
          persistent-placeholder
          placeholder="Only alphabetic characters"
          :rules="[requiredValidator, alphaValidator]"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="specifiedLength"
          persistent-placeholder
          placeholder="Length should not be less than the specified length : 3"
          :rules="[requiredValidator, lengthValidator(specifiedLength, 3)]"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="password"
          persistent-placeholder
          placeholder="Password Input Field"
          type="password"
          :rules="[requiredValidator, passwordValidator]"
          autocomplete="on"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="digits"
          persistent-placeholder
          placeholder="The digits field must be numeric and exactly contain 3 digits"
          :rules="[requiredValidator, lengthValidator(digits, 3), integerValidator]"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="repeatPassword"
          persistent-placeholder
          placeholder="Repeat password must match"
          type="password"
          :rules="[requiredValidator, confirmedValidator(repeatPassword, password)]"
          autocomplete="on"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="onlyAlphabeticNumbersDashesUnderscores"
          persistent-placeholder
          placeholder="Only alphabetic characters, numbers, dashes or underscores"
          :rules="[requiredValidator, alphaDashValidator]"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="email"
          persistent-placeholder
          placeholder="Must be a valid email"
          :rules="[requiredValidator, emailValidator]"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="validURL"
          persistent-placeholder
          placeholder="Must be a valid url"
          :rules="[requiredValidator, urlValidator]"
        />
      </VCol>

      <VCol cols="12">
        <VBtn
          type="submit"
          @click="refForm?.validate()"
        >
          Submit
        </VBtn>
      </VCol>
    </VRow>
  </VForm>
</template>
`,js:`<script setup>
import {
  alphaDashValidator,
  alphaValidator,
  betweenValidator,
  confirmedValidator,
  emailValidator,
  integerValidator,
  lengthValidator,
  passwordValidator,
  regexValidator,
  requiredValidator,
  urlValidator,
} from '@validators'

const requiredField = ref('')
const numberBetween10to20 = ref('')
const onlyConsistNumber = ref('')
const matchRegularEx = ref('')
const onlyAlphabeticCharacters = ref('')
const specifiedLength = ref('')
const password = ref('')
const digits = ref('')
const repeatPassword = ref('')
const onlyAlphabeticNumbersDashesUnderscores = ref('')
const email = ref('')
const validURL = ref('')
const refForm = ref()
<\/script>

<template>
  <VForm
    ref="refForm"
    @submit.prevent
  >
    <VRow>
      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="requiredField"
          persistent-placeholder
          placeholder="This field is required"
          :rules="[requiredValidator]"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="numberBetween10to20"
          persistent-placeholder
          placeholder="Enter Number between 10 & 20"
          :rules="[requiredValidator, betweenValidator(numberBetween10to20, 10, 20)]"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="onlyConsistNumber"
          persistent-placeholder
          placeholder="Must only consist of numbers"
          :rules="[requiredValidator, integerValidator]"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="matchRegularEx"
          persistent-placeholder
          placeholder="Must match the specified regular expression : ^([0-9]+)$ - numbers only"
          :rules="[requiredValidator, regexValidator(matchRegularEx, '^([0-9]+)$')]"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="onlyAlphabeticCharacters"
          persistent-placeholder
          placeholder="Only alphabetic characters"
          :rules="[requiredValidator, alphaValidator]"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="specifiedLength"
          persistent-placeholder
          placeholder="Length should not be less than the specified length : 3"
          :rules="[requiredValidator, lengthValidator(specifiedLength, 3)]"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="password"
          persistent-placeholder
          placeholder="Password Input Field"
          type="password"
          :rules="[requiredValidator, passwordValidator]"
          autocomplete="on"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="digits"
          persistent-placeholder
          placeholder="The digits field must be numeric and exactly contain 3 digits"
          :rules="[requiredValidator, lengthValidator(digits, 3), integerValidator]"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="repeatPassword"
          persistent-placeholder
          placeholder="Repeat password must match"
          type="password"
          :rules="[requiredValidator, confirmedValidator(repeatPassword, password)]"
          autocomplete="on"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="onlyAlphabeticNumbersDashesUnderscores"
          persistent-placeholder
          placeholder="Only alphabetic characters, numbers, dashes or underscores"
          :rules="[requiredValidator, alphaDashValidator]"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="email"
          persistent-placeholder
          placeholder="Must be a valid email"
          :rules="[requiredValidator, emailValidator]"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="validURL"
          persistent-placeholder
          placeholder="Must be a valid url"
          :rules="[requiredValidator, urlValidator]"
        />
      </VCol>

      <VCol cols="12">
        <VBtn
          type="submit"
          @click="refForm?.validate()"
        >
          Submit
        </VBtn>
      </VCol>
    </VRow>
  </VForm>
</template>
`},W=M("p",null,[v("Use "),M("code",null,"Rules"),v(" prop to validate the input.")],-1),ve={__name:"form-validation",setup(g){return(V,u)=>{const F=Q,m=j,i=K,C=J;return w(),y(x,null,{default:o(()=>[l(a,{cols:"12"},{default:o(()=>[l(m,{title:"Simple Form Validation",code:z},{default:o(()=>[W,l(F)]),_:1},8,["code"])]),_:1}),l(a,{cols:"12"},{default:o(()=>[l(m,{title:"Validating Multiple Rules",code:G},{default:o(()=>[l(i)]),_:1},8,["code"])]),_:1}),l(a,{cols:"12"},{default:o(()=>[l(m,{title:"Validation Types",code:H},{default:o(()=>[l(C)]),_:1},8,["code"])]),_:1})]),_:1})}}};export{ve as default};
//# sourceMappingURL=form-validation-318c126b.js.map
