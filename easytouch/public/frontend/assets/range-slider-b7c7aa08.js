var ae=Object.defineProperty,te=Object.defineProperties;var se=Object.getOwnPropertyDescriptors;var J=Object.getOwnPropertySymbols;var oe=Object.prototype.hasOwnProperty,ue=Object.prototype.propertyIsEnumerable;var q=(e,l,a)=>l in e?ae(e,l,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[l]=a,C=(e,l)=>{for(var a in l||(l={}))oe.call(l,a)&&q(e,a,l[a]);if(J)for(var a of J(l))ue.call(l,a)&&q(e,a,l[a]);return e},z=(e,l)=>te(e,se(l));import{m as ne,u as re,a as ie,V as de,b as E,g as K}from"./VSliderTrack-20212f52.js";import{c as ce,m as me,u as pe,a as Q,V as ve}from"./VInput-545a0bfa.js";import{J as fe,Y as be,T as Ve,g as _e}from"./index-e43e3799.js";import{f as V,c as G,k as s,M as ge,n as he,I as R,J as k,u as w,q as x,K as i,P as d,Q as p}from"./frappe-ui-b8f10d89.js";import{_ as Se}from"./AppCardCode-454d9e68.js";import{a as $,V as Re}from"./VRow-b8bac363.js";import"./transition-61bfbac1.js";import"./vue.runtime.esm-bundler-c0d7c61a.js";import"./VCard-bd92c839.js";import"./VAvatar-26ec77a4.js";import"./VImg-dcfe0017.js";import"./VDivider-7eec4b6d.js";const y=fe()({name:"VRangeSlider",props:z(C(C(C({},ce()),me()),ne()),{strict:Boolean,modelValue:{type:Array,default:()=>[0,0]}}),emits:{"update:focused":e=>!0,"update:modelValue":e=>!0,end:e=>!0,start:e=>!0},setup(e,l){let{slots:a,emit:u}=l;const t=V(),n=V(),h=V();function I(c){if(!t.value||!n.value)return;const v=K(c,t.value.$el,e.direction),f=K(c,n.value.$el,e.direction),r=Math.abs(v),m=Math.abs(f);return r<m||r===m&&v<0?t.value.$el:n.value.$el}const F=re(e),o=be(e,"modelValue",void 0,c=>c!=null&&c.length?c.map(v=>F.roundValue(v)):[0,0]),{activeThumbRef:b,hasLabels:H,max:L,min:j,mousePressed:X,onSliderMousedown:Z,onSliderTouchstart:ee,position:A,trackContainerRef:le}=ie({props:e,steps:F,onSliderStart:()=>{u("start",o.value)},onSliderEnd:c=>{var r;let{value:v}=c;const f=b.value===((r=t.value)==null?void 0:r.$el)?[v,o.value[1]]:[o.value[0],v];o.value=f,u("end",f)},onSliderMove:c=>{var m,_,g,D;let{value:v}=c;const[f,r]=o.value;!e.strict&&f===r&&f!==j.value&&(b.value=v>f?(m=n.value)==null?void 0:m.$el:(_=t.value)==null?void 0:_.$el,(g=b.value)==null||g.focus()),b.value===((D=t.value)==null?void 0:D.$el)?o.value=[Math.min(v,r),r]:o.value=[f,Math.max(f,v)]},getActiveThumb:I}),{isFocused:M,focus:N,blur:O}=pe(e),W=G(()=>A(o.value[0])),Y=G(()=>A(o.value[1]));return Ve(()=>{const[c,v]=Q.filterProps(e),f=!!(e.label||a.label||a.prepend);return s(Q,he({class:["v-slider","v-range-slider",{"v-slider--has-labels":!!a["tick-label"]||H.value,"v-slider--focused":M.value,"v-slider--pressed":X.value,"v-slider--disabled":e.disabled},e.class],style:e.style,ref:h},c,{focused:M.value}),z(C({},a),{prepend:f?r=>{var m,_,g;return s(ge,null,[((_=(m=a.label)==null?void 0:m.call(a,r))!=null?_:e.label)?s(ve,{class:"v-slider__label",text:e.label},null):void 0,(g=a.prepend)==null?void 0:g.call(a,r)])}:void 0,default:r=>{var g,D;let{id:m,messagesId:_}=r;return s("div",{class:"v-slider__container",onMousedown:Z,onTouchstartPassive:ee},[s("input",{id:`${m.value}_start`,name:e.name||m.value,disabled:e.disabled,readonly:e.readonly,tabindex:"-1",value:o.value[0]},null),s("input",{id:`${m.value}_stop`,name:e.name||m.value,disabled:e.disabled,readonly:e.readonly,tabindex:"-1",value:o.value[1]},null),s(de,{ref:le,start:W.value,stop:Y.value},{"tick-label":a["tick-label"]}),s(E,{ref:t,"aria-describedby":_.value,focused:M&&b.value===((g=t.value)==null?void 0:g.$el),modelValue:o.value[0],"onUpdate:modelValue":S=>o.value=[S,o.value[1]],onFocus:S=>{var T,P,U,B;N(),b.value=(T=t.value)==null?void 0:T.$el,o.value[0]===o.value[1]&&o.value[1]===j.value&&S.relatedTarget!==((P=n.value)==null?void 0:P.$el)&&((U=t.value)==null||U.$el.blur(),(B=n.value)==null||B.$el.focus())},onBlur:()=>{O(),b.value=void 0},min:j.value,max:o.value[1],position:W.value},{"thumb-label":a["thumb-label"]}),s(E,{ref:n,"aria-describedby":_.value,focused:M&&b.value===((D=n.value)==null?void 0:D.$el),modelValue:o.value[1],"onUpdate:modelValue":S=>o.value=[o.value[0],S],onFocus:S=>{var T,P,U,B;N(),b.value=(T=n.value)==null?void 0:T.$el,o.value[0]===o.value[1]&&o.value[0]===L.value&&S.relatedTarget!==((P=t.value)==null?void 0:P.$el)&&((U=n.value)==null||U.$el.blur(),(B=t.value)==null||B.$el.focus())},onBlur:()=>{O(),b.value=void 0},min:o.value[0],max:L.value,position:Y.value},{"thumb-label":a["thumb-label"]})])}}))}),{}}}),ke={__name:"DemoRangeSliderVertical",setup(e){const l=V([20,40]);return(a,u)=>(R(),k(y,{modelValue:w(l),"onUpdate:modelValue":u[0]||(u[0]=t=>x(l)?l.value=t:null),direction:"vertical"},null,8,["modelValue"]))}},$e={__name:"DemoRangeSliderThumbLabel",setup(e){const l=["Winter","Spring","Summer","Fall"],a=["tabler-snowflake","tabler-leaf","tabler-flame","tabler-droplet"],u=V([1,2]);return(t,n)=>(R(),k(y,{modelValue:w(u),"onUpdate:modelValue":n[0]||(n[0]=h=>x(u)?u.value=h:null),tick:l,min:"0",max:"3",step:1,"show-ticks":"always","thumb-label":"","tick-size":"4"},{"thumb-label":i(({modelValue:h})=>[s(_e,{icon:a[h]},null,8,["icon"])]),_:1},8,["modelValue"]))}},we={__name:"DemoRangeSliderStep",setup(e){const l=V([20,40]);return(a,u)=>(R(),k(y,{modelValue:w(l),"onUpdate:modelValue":u[0]||(u[0]=t=>x(l)?l.value=t:null),step:"10"},null,8,["modelValue"]))}},xe={__name:"DemoRangeSliderColor",setup(e){const l=V([10,60]);return(a,u)=>(R(),k(y,{modelValue:w(l),"onUpdate:modelValue":u[0]||(u[0]=t=>x(l)?l.value=t:null),color:"success","track-color":"warning"},null,8,["modelValue"]))}},ye={__name:"DemoRangeSliderDisabled",setup(e){const l=V([30,60]);return(a,u)=>(R(),k(y,{modelValue:w(l),"onUpdate:modelValue":u[0]||(u[0]=t=>x(l)?l.value=t:null),disabled:"",label:"Disabled"},null,8,["modelValue"]))}},De={__name:"DemoRangeSliderBasic",setup(e){const l=V([10,60]);return(a,u)=>(R(),k(y,{modelValue:w(l),"onUpdate:modelValue":u[0]||(u[0]=t=>x(l)?l.value=t:null)},null,8,["modelValue"]))}},Te={ts:`<script setup lang="ts">
const sliderValues = ref([10, 60])
<\/script>

<template>
  <VRangeSlider v-model="sliderValues" />
</template>
`,js:`<script setup>
const sliderValues = ref([
  10,
  60,
])
<\/script>

<template>
  <VRangeSlider v-model="sliderValues" />
</template>
`},Pe={ts:`<script lang="ts" setup>
const sliderValues = ref([10, 60])
<\/script>

<template>
  <VRangeSlider
    v-model="sliderValues"
    color="success"
    track-color="warning"
  />
</template>
`,js:`<script setup>
const sliderValues = ref([
  10,
  60,
])
<\/script>

<template>
  <VRangeSlider
    v-model="sliderValues"
    color="success"
    track-color="warning"
  />
</template>
`},Ue={ts:`<script lang="ts" setup>
const slidersValues = ref([30, 60])
<\/script>

<template>
  <VRangeSlider
    v-model="slidersValues"
    disabled
    label="Disabled"
  />
</template>
`,js:`<script setup>
const slidersValues = ref([
  30,
  60,
])
<\/script>

<template>
  <VRangeSlider
    v-model="slidersValues"
    disabled
    label="Disabled"
  />
</template>
`},Be={ts:`<script lang="ts" setup>
const sliderValues = ref([20, 40])
<\/script>

<template>
  <VRangeSlider
    v-model="sliderValues"
    step="10"
  />
</template>
`,js:`<script setup>
const sliderValues = ref([
  20,
  40,
])
<\/script>

<template>
  <VRangeSlider
    v-model="sliderValues"
    step="10"
  />
</template>
`},Ce={ts:`<script lang="ts" setup>
const seasons = ['Winter', 'Spring', 'Summer', 'Fall']
const icons = ['tabler-snowflake', 'tabler-leaf', 'tabler-flame', 'tabler-droplet']
const sliderValues = ref([1, 2])
<\/script>

<template>
  <VRangeSlider
    v-model="sliderValues"
    :tick="seasons"
    min="0"
    max="3"
    :step="1"
    show-ticks="always"
    thumb-label
    tick-size="4"
  >
    <template #thumb-label="{ modelValue }">
      <VIcon :icon="icons[modelValue]" />
    </template>
  </VRangeSlider>
</template>
`,js:`<script setup>
const seasons = [
  'Winter',
  'Spring',
  'Summer',
  'Fall',
]

const icons = [
  'tabler-snowflake',
  'tabler-leaf',
  'tabler-flame',
  'tabler-droplet',
]

const sliderValues = ref([
  1,
  2,
])
<\/script>

<template>
  <VRangeSlider
    v-model="sliderValues"
    :tick="seasons"
    min="0"
    max="3"
    :step="1"
    show-ticks="always"
    thumb-label
    tick-size="4"
  >
    <template #thumb-label="{ modelValue }">
      <VIcon :icon="icons[modelValue]" />
    </template>
  </VRangeSlider>
</template>
`},Fe={ts:`<script lang="ts" setup>
const sliderValues = ref([20, 40])
<\/script>

<template>
  <VRangeSlider
    v-model="sliderValues"
    direction="vertical"
  />
</template>
`,js:`<script setup>
const sliderValues = ref([
  20,
  40,
])
<\/script>

<template>
  <VRangeSlider
    v-model="sliderValues"
    direction="vertical"
  />
</template>
`},Me=d("p",null,[p("The "),d("code",null,"v-slider"),p(" component is a better visualization of the number input.")],-1),Ie=d("p",null,[p("You cannot interact with "),d("code",null,"disabled"),p(" sliders.")],-1),je=d("p",null,[p("Use "),d("code",null,"color"),p(" prop to the sets the slider color. "),d("code",null,"track-color"),p(" prop to sets the color of slider's unfilled track.")],-1),ze=d("p",null,[d("code",null,"v-range-slider"),p(" can have steps other than 1. This can be helpful for some applications where you need to adjust values with more or less accuracy.")],-1),Le=d("p",null,[p(" Using the "),d("code",null,"tick-labels"),p(" prop along with the "),d("code",null,"thumb-label"),p(" slot, you can create a very customized solution. ")],-1),Ae=d("p",null,[p("You can use the "),d("code",null,"vertical"),p(" prop to switch sliders to a vertical orientation. If you need to change the height of the slider, use css.")],-1),el={__name:"range-slider",setup(e){return(l,a)=>{const u=De,t=Se,n=ye,h=xe,I=we,F=$e,o=ke;return R(),k(Re,null,{default:i(()=>[s($,{cols:"12",md:"6"},{default:i(()=>[s(t,{title:"Basic",code:Te},{default:i(()=>[Me,s(u)]),_:1},8,["code"])]),_:1}),s($,{cols:"12",md:"6"},{default:i(()=>[s(t,{title:"Disabled",code:Ue},{default:i(()=>[Ie,s(n)]),_:1},8,["code"])]),_:1}),s($,{cols:"12",md:"6"},{default:i(()=>[s(t,{title:"Color",code:Pe},{default:i(()=>[je,s(h)]),_:1},8,["code"])]),_:1}),s($,{cols:"12",md:"6"},{default:i(()=>[s(t,{title:"Step",code:Be},{default:i(()=>[ze,s(I)]),_:1},8,["code"])]),_:1}),s($,{cols:"12",md:"6"},{default:i(()=>[s(t,{title:"Thumb label",code:Ce},{default:i(()=>[Le,s(F)]),_:1},8,["code"])]),_:1}),s($,{cols:"12",md:"6"},{default:i(()=>[s(t,{title:"Vertical",code:Fe},{default:i(()=>[Ae,s(o)]),_:1},8,["code"])]),_:1})]),_:1})}}};export{el as default};
//# sourceMappingURL=range-slider-b7c7aa08.js.map
