<template>
  layoyt {{ props.layoutType }}
  <a-space direction="vertical">
    <a-radio-group v-model:value="props.value" size="large">
    <a-radio v-for="item of props.dataList" :value="item" :style="props.layoutType === 'vertical' ? radioVerticalStyle : radioStyle">{{ item?.label}}</a-radio>
  </a-radio-group>
  </a-space>
 
</template>
<script setup lang="ts">
import { Layout } from 'ant-design-vue';
import { ref, reactive } from 'vue'

const radioVerticalStyle = ref({
  display: 'flex',
  height: '40px',
  lineHeight: '40px',
});

const radioStyle = ref({
  height: '40px',
  lineHeight: '40px',
});

const props = defineProps({
  dataList: {
    type: Array
  },
  value: {
    type: String
  },
  layoutType: String
})

</script>
<style lang="scss">
</style>