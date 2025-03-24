<template>
  <a-input v-model:value="value" :placeholder="placeholder" >
   <template #prefix>
       <img class="icon" :src="ID" alt="">
     </template>
  </a-input>
 </template>
 <script setup lang="ts">
 import { ref, reactive } from 'vue'
 import ID from '/src/assets/form/id.svg'
 
 interface Props {
  id: string
  placeholder: string
  value: string
  isDev: boolean
}
const props = defineProps<Props>()
const value = ref(props.value || null)
 </script>
 <style lang="scss" scoped>
 .icon {
   height: 18px;
 }
 </style>