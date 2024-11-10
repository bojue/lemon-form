<template>
  <a-radio-group v-model:value="props.value" size="large">
    <a-radio v-for="item of props.dataList" :value="item" :style="radioStyle">{{ item.label}}</a-radio>
  </a-radio-group>
</template>
<script setup lang="ts">
import { ref, reactive } from 'vue'

const radioStyle = reactive({
  display: 'flex',
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
})

</script>
<style lang="scss">
</style>