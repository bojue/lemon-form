<template>
  <a-input v-model:value="props.value" placeholder="Basic usage" >
    <template #prefix>
        <ie-outlined />
    </template>
  </a-input>
 </template>
 <script setup lang="ts">
 import { ref, reactive } from 'vue'
 import { IeOutlined } from '@ant-design/icons-vue';
 
 const radioStyle = reactive({
 
 });
 
 const props = defineProps({
   value: {
     type: String
   },
 })
 </script>
 <style lang="scss">
 </style>