<template>
  <a-input 
  :disabled="isDev" 
  :title="isDev ? disableInputByDev : placeholder" 
  v-model:value="props.value" 
  :placeholder="placeholder || '提示信息'" >
    <template #prefix>
        <ie-outlined />
    </template>
  </a-input>
 </template>
 <script setup lang="ts">
 import { ref, reactive } from 'vue'
 import { IeOutlined } from '@ant-design/icons-vue';
 import { disableInputByDev } from '@/views/FormEditor/comp-config-data'
 interface Props {
  id: string
  placeholder: string
  value: string
  isDev: boolean
}

const props = defineProps<Props>()
 
 </script>
 <style lang="scss">
 </style>