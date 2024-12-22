<template>
  <a-space direction="vertical">
    <a-radio-group :value="dataValue" size="large">
    <a-radio v-for="item of dataList" :value="item"  :style="layoutType === 'vertical' ? radioVerticalStyle : radioStyle">{{ item?.label}}</a-radio>
  </a-radio-group>
  </a-space>
</template>
<script setup lang="ts">
import { Layout } from 'ant-design-vue';
import { ref, reactive } from 'vue'

interface Props {
  dataList: Array<any>
  dataValue: string
  layoutType: string
  isDev: boolean
}


const radioVerticalStyle = ref({
  display: 'flex',
  // height: '40px',
  lineHeight: '40px',
});

const radioStyle = ref({
  height: '40px',
  lineHeight: '40px',
});


const props = defineProps<Props>()

</script>
<style lang="scss">
</style>