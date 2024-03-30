var Fe=Object.defineProperty,ve=Object.defineProperties;var be=Object.getOwnPropertyDescriptors;var x=Object.getOwnPropertySymbols;var H=Object.prototype.hasOwnProperty,X=Object.prototype.propertyIsEnumerable;var G=(e,t,s)=>t in e?Fe(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,k=(e,t)=>{for(var s in t||(t={}))H.call(t,s)&&G(e,s,t[s]);if(x)for(var s of x(t))X.call(t,s)&&G(e,s,t[s]);return e},A=(e,t)=>ve(e,be(t));var T=(e,t)=>{var s={};for(var u in e)H.call(e,u)&&t.indexOf(u)<0&&(s[u]=e[u]);if(e!=null&&x)for(var u of x(e))t.indexOf(u)<0&&X.call(e,u)&&(s[u]=e[u]);return s};import{m as ge,f as Ie,V as ye}from"./VField-5b446628.js";import{m as Ce,u as we,a as ee}from"./VInput-545a0bfa.js";import{f as ze}from"./forwardRefs-bb5e4b03.js";import{J as ke,a4 as Se,$ as $e,Y as De,bo as le,T as Pe,Z as Be,b0 as je}from"./index-e43e3799.js";import{V as te}from"./VChip-c30ae960.js";import{V as xe}from"./VCounter-cc8846c3.js";import{c as S,f as I,d as ne,k as l,n as E,M as R,B as Ae,I as d,J as m,u as O,q as oe,K as a,L as Re,N as Ne,Q as n,R as Le,_ as F,P as o}from"./frappe-ui-b8f10d89.js";import{a as p,V as ae}from"./VRow-b8bac363.js";import{_ as Ue}from"./AppCardCode-454d9e68.js";import"./easing-512405f0.js";import"./transition-61bfbac1.js";import"./VAvatar-26ec77a4.js";import"./VImg-dcfe0017.js";import"./vue.runtime.esm-bundler-c0d7c61a.js";import"./VCard-bd92c839.js";import"./VDivider-7eec4b6d.js";const r=ke()({name:"VFileInput",inheritAttrs:!1,props:k(A(k({chips:Boolean,counter:Boolean,counterSizeString:{type:String,default:"$vuetify.fileInput.counterSize"},counterString:{type:String,default:"$vuetify.fileInput.counter"},multiple:Boolean,showSize:{type:[Boolean,Number],default:!1,validator:e=>typeof e=="boolean"||[1e3,1024].includes(e)}},Ce({prependIcon:"$file"})),{modelValue:{type:Array,default:()=>[],validator:e=>Se(e).every(t=>t!=null&&typeof t=="object")}}),ge({clearable:!0})),emits:{"click:control":e=>!0,"mousedown:control":e=>!0,"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,t){let{attrs:s,emit:u,slots:i}=t;const{t:h}=$e(),_=De(e,"modelValue"),{isFocused:g,focus:N,blur:L}=we(e),$=S(()=>typeof e.showSize!="boolean"?e.showSize:void 0),D=S(()=>{var c;return((c=_.value)!=null?c:[]).reduce((f,V)=>{let{size:C=0}=V;return f+C},0)}),P=S(()=>le(D.value,$.value)),y=S(()=>{var c;return((c=_.value)!=null?c:[]).map(f=>{const{name:V="",size:C=0}=f;return e.showSize?`${V} (${le(C,$.value)})`:V})}),U=S(()=>{var f,V;const c=(V=(f=_.value)==null?void 0:f.length)!=null?V:0;return e.showSize?h(e.counterSizeString,c,P.value):h(e.counterString,c)}),B=I(),Y=I(),v=I();function M(){var c;v.value!==document.activeElement&&((c=v.value)==null||c.focus()),g.value||N()}function ie(c){J(c)}function se(c){u("mousedown:control",c)}function J(c){var f;(f=v.value)==null||f.click(),u("click:control",c)}function ce(c){c.stopPropagation(),M(),Ae(()=>{_.value=[],je(e["onClick:clear"],c)})}return ne(_,c=>{(!Array.isArray(c)||!c.length)&&v.value&&(v.value.value="")}),Pe(()=>{const c=!!(i.counter||e.counter),f=!!(c||i.details),[V,C]=Be(s),[Tl]=ee.filterProps(e),q=Tl,{modelValue:Ml}=q,ue=T(q,["modelValue"]),[pe]=Ie(e);return l(ee,E({ref:B,modelValue:_.value,"onUpdate:modelValue":w=>_.value=w,class:["v-file-input",e.class],style:e.style,"onClick:prepend":ie},V,ue,{focused:g.value}),A(k({},i),{default:w=>{let{id:j,isDisabled:z,isDirty:K,isReadonly:re,isValid:de}=w;return l(ye,E({ref:Y,"prepend-icon":e.prependIcon,onMousedown:se,onClick:J,"onClick:clear":ce,"onClick:prependInner":e["onClick:prependInner"],"onClick:appendInner":e["onClick:appendInner"]},pe,{id:j.value,active:K.value||g.value,dirty:K.value,disabled:z.value,focused:g.value,error:de.value===!1}),A(k({},i),{default:me=>{var W;let{props:he}=me,Q=he,{class:_e}=Q,fe=T(Q,["class"]);return l(R,null,[l("input",E({ref:v,type:"file",readonly:re.value,disabled:z.value,multiple:e.multiple,name:e.name,onClick:b=>{b.stopPropagation(),M()},onChange:b=>{var Z;if(!b.target)return;const Ve=b.target;_.value=[...(Z=Ve.files)!=null?Z:[]]},onFocus:M,onBlur:L},fe,C),null),l("div",{class:_e},[!!((W=_.value)!=null&&W.length)&&(i.selection?i.selection({fileNames:y.value,totalBytes:D.value,totalBytesReadable:P.value}):e.chips?y.value.map(b=>l(te,{key:b,size:"small",color:e.color},{default:()=>[b]})):y.value.join(", "))])])}}))},details:f?w=>{var j,z;return l(R,null,[(j=i.details)==null?void 0:j.call(i,w),c&&l(R,null,[l("span",null,null),l(xe,{active:!!((z=_.value)!=null&&z.length),value:U.value},i.counter)])])}:void 0}))}),ze({},B,Y,v)}}),Me={__name:"DemoFileInputLoading",setup(e){const t=I(),s=I(!0);return ne(t,()=>{s.value=!t.value[0]}),(u,i)=>(d(),m(r,{modelValue:O(t),"onUpdate:modelValue":i[0]||(i[0]=h=>oe(t)?t.value=h:null),loading:O(s),color:"primary",label:"File input"},null,8,["modelValue","loading"]))}},Te={__name:"DemoFileInputSelectionSlot",setup(e){const t=I([]);return(s,u)=>(d(),m(r,{modelValue:O(t),"onUpdate:modelValue":u[0]||(u[0]=i=>oe(t)?t.value=i:null),multiple:"",placeholder:"Upload your documents",label:"File input","prepend-icon":"tabler-paperclip"},{selection:a(({fileNames:i})=>[(d(!0),Re(R,null,Ne(i,h=>(d(),m(te,{key:h,label:"",size:"small",variant:"outlined",color:"primary",class:"me-2"},{default:a(()=>[n(Le(h),1)]),_:2},1024))),128))]),_:1},8,["modelValue"]))}},Ee={__name:"DemoFileInputValidation",setup(e){const t=[s=>!s||!s.length||s[0].size<1e6||"Avatar size should be less than 1 MB!"];return(s,u)=>(d(),m(r,{rules:t,label:"Avatar",accept:"image/png, image/jpeg, image/bmp",placeholder:"Pick an avatar","prepend-icon":"tabler-camera"}))}},Oe={};function Ye(e,t){return d(),m(r,{"show-size":"",label:"File input"})}const Je=F(Oe,[["render",Ye]]),qe={};function Ke(e,t){return d(),m(r,{label:"File input","prepend-icon":"tabler-camera"})}const Qe=F(qe,[["render",Ke]]),We={};function Ze(e,t){return d(),m(r,{multiple:"",label:"File input"})}const Ge=F(We,[["render",Ze]]),He={};function Xe(e,t){return d(),m(r,{"show-size":"",counter:"",multiple:"",label:"File input"})}const el=F(He,[["render",Xe]]),ll={};function tl(e,t){return d(),m(r,{chips:"",label:"File input w/ chips"})}const nl=F(ll,[["render",tl]]),ol={};function al(e,t){return d(),m(r,{accept:"image/*",label:"File input"})}const il=F(ol,[["render",al]]),sl={};function cl(e,t){return d(),m(ae,null,{default:a(()=>[l(p,{cols:"12",sm:"6"},{default:a(()=>[l(r,{label:"Outlined"})]),_:1}),l(p,{cols:"12",sm:"6"},{default:a(()=>[l(r,{label:"Filled",variant:"filled"})]),_:1}),l(p,{cols:"12",sm:"6"},{default:a(()=>[l(r,{label:"Solo",variant:"solo"})]),_:1}),l(p,{cols:"12",sm:"6"},{default:a(()=>[l(r,{label:"Plain",variant:"plain"})]),_:1}),l(p,{cols:"12",sm:"6"},{default:a(()=>[l(r,{label:"Underlined",variant:"underlined",density:"default"})]),_:1})]),_:1})}const ul=F(sl,[["render",cl]]),pl={};function rl(e,t){return d(),m(r,{label:"File input",density:"compact"})}const dl=F(pl,[["render",rl]]),ml={};function _l(e,t){return d(),m(r,{label:"File input"})}const fl=F(ml,[["render",_l]]),hl={ts:`<template>
  <VFileInput
    accept="image/*"
    label="File input"
  />
</template>
`,js:`<template>
  <VFileInput
    accept="image/*"
    label="File input"
  />
</template>
`},Vl={ts:`<template>
  <VFileInput label="File input" />
</template>
`,js:`<template>
  <VFileInput label="File input" />
</template>
`},Fl={ts:`<template>
  <VFileInput
    chips
    label="File input w/ chips"
  />
</template>
`,js:`<template>
  <VFileInput
    chips
    label="File input w/ chips"
  />
</template>
`},vl={ts:`<template>
  <VFileInput
    show-size
    counter
    multiple
    label="File input"
  />
</template>
`,js:`<template>
  <VFileInput
    show-size
    counter
    multiple
    label="File input"
  />
</template>
`},bl={ts:`<template>
  <VFileInput
    label="File input"
    density="compact"
  />
</template>
`,js:`<template>
  <VFileInput
    label="File input"
    density="compact"
  />
</template>
`},gl={ts:`<script setup lang="ts">
const file = ref()
const loading = ref(true)

watch(file, () => {
  loading.value = !file.value[0]
})
<\/script>

<template>
  <VFileInput
    v-model="file"
    :loading="loading"
    color="primary"
    label="File input"
  />
</template>
`,js:`<script setup>
const file = ref()
const loading = ref(true)

watch(file, () => {
  loading.value = !file.value[0]
})
<\/script>

<template>
  <VFileInput
    v-model="file"
    :loading="loading"
    color="primary"
    label="File input"
  />
</template>
`},Il={ts:`<template>
  <VFileInput
    multiple
    label="File input"
  />
</template>
`,js:`<template>
  <VFileInput
    multiple
    label="File input"
  />
</template>
`},yl={ts:`<template>
  <VFileInput
    label="File input"
    prepend-icon="tabler-camera"
  />
</template>
`,js:`<template>
  <VFileInput
    label="File input"
    prepend-icon="tabler-camera"
  />
</template>
`},Cl={ts:`<script lang="ts" setup>
const files = ref<File[]>([])
<\/script>

<template>
  <VFileInput
    v-model="files"
    multiple
    placeholder="Upload your documents"
    label="File input"
    prepend-icon="tabler-paperclip"
  >
    <template #selection="{ fileNames }">
      <template
        v-for="fileName in fileNames"
        :key="fileName"
      >
        <VChip
          label
          size="small"
          variant="outlined"
          color="primary"
          class="me-2"
        >
          {{ fileName }}
        </VChip>
      </template>
    </template>
  </VFileInput>
</template>
`,js:`<script setup>
const files = ref([])
<\/script>

<template>
  <VFileInput
    v-model="files"
    multiple
    placeholder="Upload your documents"
    label="File input"
    prepend-icon="tabler-paperclip"
  >
    <template #selection="{ fileNames }">
      <template
        v-for="fileName in fileNames"
        :key="fileName"
      >
        <VChip
          label
          size="small"
          variant="outlined"
          color="primary"
          class="me-2"
        >
          {{ fileName }}
        </VChip>
      </template>
    </template>
  </VFileInput>
</template>
`},wl={ts:`<template>
  <VFileInput
    show-size
    label="File input"
  />
</template>
`,js:`<template>
  <VFileInput
    show-size
    label="File input"
  />
</template>
`},zl={ts:`<script lang="ts" setup>
const rules = [
  (fileList: FileList) => !fileList || !fileList.length || fileList[0].size < 1000000 || 'Avatar size should be less than 1 MB!',
]
<\/script>

<template>
  <VFileInput
    :rules="rules"
    label="Avatar"
    accept="image/png, image/jpeg, image/bmp"
    placeholder="Pick an avatar"
    prepend-icon="tabler-camera"
  />
</template>
`,js:`<script setup>
const rules = [fileList => !fileList || !fileList.length || fileList[0].size < 1000000 || 'Avatar size should be less than 1 MB!']
<\/script>

<template>
  <VFileInput
    :rules="rules"
    label="Avatar"
    accept="image/png, image/jpeg, image/bmp"
    placeholder="Pick an avatar"
    prepend-icon="tabler-camera"
  />
</template>
`},kl={ts:`<template>
  <VRow>
    <VCol
      cols="12"
      sm="6"
    >
      <VFileInput label="Outlined" />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VFileInput
        label="Filled"
        variant="filled"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VFileInput
        label="Solo"
        variant="solo"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VFileInput
        label="Plain"
        variant="plain"
      />
    </VCol>
    <VCol
      cols="12"
      sm="6"
    >
      <VFileInput
        label="Underlined"
        variant="underlined"
        density="default"
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
      <VFileInput label="Outlined" />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VFileInput
        label="Filled"
        variant="filled"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VFileInput
        label="Solo"
        variant="solo"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VFileInput
        label="Plain"
        variant="plain"
      />
    </VCol>
    <VCol
      cols="12"
      sm="6"
    >
      <VFileInput
        label="Underlined"
        variant="underlined"
        density="default"
      />
    </VCol>
  </VRow>
</template>
`},Sl=o("p",null,[n("The "),o("code",null,"v-file-input"),n(" component is used to selecting files.")],-1),$l=o("p",null,[n("You can reduces the file input height with "),o("code",null,"density"),n(" prop. Available options are: "),o("code",null,"default"),n(", "),o("code",null,"comfortable"),n(", and "),o("code",null,"compact"),n(".")],-1),Dl=o("p",null,[n("use "),o("code",null,"solo"),n(", "),o("code",null,"filled"),n(", "),o("code",null,"outlined"),n(", "),o("code",null,"plain"),n(" and "),o("code",null,"underlined"),n(" option of "),o("code",null,"variant"),n(" prop to change the look of file input.")],-1),Pl=o("p",null,[o("code",null,"v-file-input"),n(" component can accept only specific media formats/file types if you want.")],-1),Bl=o("p",null,[n("Use "),o("code",null,"chip"),n(" prop to display the selected file as a chip.")],-1),jl=o("p",null,[n("When using the "),o("code",null,"show-size"),n(" property along with "),o("code",null,"counter"),n(", the total number of files and size will be displayed under the input.")],-1),xl=o("p",null,[n(" The "),o("code",null,"v-file-input"),n(" can contain multiple files at the same time when using the "),o("code",null,"multiple"),n(" prop. ")],-1),Al=o("p",null,[n(" The "),o("code",null,"v-file-input"),n(" has a default "),o("code",null,"prepend-icon"),n(" that can be set on the component or adjusted globally. ")],-1),Rl=o("p",null,[n("The displayed size of the selected file(s) can be configured with the "),o("code",null,"show-size"),n(" property.")],-1),Nl=o("p",null,[n("You can use the "),o("code",null,"rules"),n(" prop to create your own custom validation parameters.")],-1),Ll=o("p",null,[n("Using the "),o("code",null,"selection"),n(" slot, you can customize the appearance of your input selections.")],-1),Ul=o("p",null,[n("Use "),o("code",null,"loading"),n(" prop to displays linear progress bar.")],-1),at={__name:"file-input",setup(e){return(t,s)=>{const u=fl,i=Ue,h=dl,_=ul,g=il,N=nl,L=el,$=Ge,D=Qe,P=Je,y=Ee,U=Te,B=Me;return d(),m(ae,{class:"match-height"},{default:a(()=>[l(p,{cols:"12",md:"6"},{default:a(()=>[l(i,{title:"Basic",code:Vl},{default:a(()=>[Sl,l(u)]),_:1},8,["code"])]),_:1}),l(p,{cols:"12",md:"6"},{default:a(()=>[l(i,{title:"Density",code:bl},{default:a(()=>[$l,l(h)]),_:1},8,["code"])]),_:1}),l(p,{cols:"12"},{default:a(()=>[l(i,{title:"Variant",code:kl},{default:a(()=>[Dl,l(_)]),_:1},8,["code"])]),_:1}),l(p,{cols:"12",md:"6"},{default:a(()=>[l(i,{title:"Accept",code:hl},{default:a(()=>[Pl,l(g)]),_:1},8,["code"])]),_:1}),l(p,{cols:"12",md:"6"},{default:a(()=>[l(i,{title:"Chips",code:Fl},{default:a(()=>[Bl,l(N)]),_:1},8,["code"])]),_:1}),l(p,{cols:"12",md:"6"},{default:a(()=>[l(i,{title:"Counter",code:vl},{default:a(()=>[jl,l(L)]),_:1},8,["code"])]),_:1}),l(p,{cols:"12",md:"6"},{default:a(()=>[l(i,{title:"Multiple",code:Il},{default:a(()=>[xl,l($)]),_:1},8,["code"])]),_:1}),l(p,{cols:"12",md:"6"},{default:a(()=>[l(i,{title:"Prepend icon",code:yl},{default:a(()=>[Al,l(D)]),_:1},8,["code"])]),_:1}),l(p,{cols:"12",md:"6"},{default:a(()=>[l(i,{title:"Show size",code:wl},{default:a(()=>[Rl,l(P)]),_:1},8,["code"])]),_:1}),l(p,{cols:"12",md:"6"},{default:a(()=>[l(i,{title:"Validation",code:zl},{default:a(()=>[Nl,l(y)]),_:1},8,["code"])]),_:1}),l(p,{cols:"12",md:"6"},{default:a(()=>[l(i,{title:"Selection slot",code:Cl},{default:a(()=>[Ll,l(U)]),_:1},8,["code"])]),_:1}),l(p,{cols:"12",md:"6"},{default:a(()=>[l(i,{title:"Loading",code:gl},{default:a(()=>[Ul,l(B)]),_:1},8,["code"])]),_:1})]),_:1})}}};export{at as default};
//# sourceMappingURL=file-input-d6ecadd7.js.map
