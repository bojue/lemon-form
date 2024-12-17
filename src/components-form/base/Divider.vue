<template>
  <div>
    <a-divider background="#e0e0e0" class="divider" :orientation="dividerOrientation" :dashed="dividerBorderType">{{ dividerValue }}</a-divider>
  </div>
 </template>
 <script setup lang="ts">
 import { ref, reactive } from 'vue'

 const radioStyle = reactive({
 
 });

 interface Props {
  type: string
  dividerValue: string
  dividerBorderType: boolean // 虚线类型 
  dividerOrientation: string
 }
 
 const props = defineProps<Props>()


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