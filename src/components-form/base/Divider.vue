<template>
  <div>
    <a-divider class="divider">With Text</a-divider>
  </div>
 </template>
 <script setup lang="ts">
 import { ref, reactive } from 'vue'
 
 const radioStyle = reactive({
 
 });
 
 const props = defineProps({
   value: {
     type: String
   },
 })


 </script>
 <style lang="scss" scoped>
 .divider {

}
::v-deep { 
    .ant-divider-with-text {
        color: #ccc;
        font-weight: 400 !important;
        font-size: 14px !important;
    }
  }
 </style>