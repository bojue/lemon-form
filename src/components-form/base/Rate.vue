

<template>
  <a-rate class='item' v-model:value="props.value" :character="rateCharacter" :count="props.rateCount" :allowHalf="props.rateAllowHalf" />
</template>
<script setup lang="ts">
import { ref, reactive } from 'vue'
interface Props{
  value: string,
  rateCharacter: number | string
  rateCount: number
  rateAllowHalf: boolean
}

const props = defineProps<Props>()

</script>
<style lang="scss" scoped>

.item {
  text-align: left;
  margin-left: -10px;
}

.ant-rate-star-zero{
  color: rgba(0,0,0,1) !important;
  filter:grayscale(0);
}




::v-deep(  .ant-rate-star-first) {
  color: rgba(0,0,0,1);
  filter:grayscale(0);
}

::v-deep(.ant-rate-star-second) {
  color: rgba(0,0,0,1);
  filter:grayscale(1);
}

::v-deep(.ant-rate-star-full .ant-rate-star-second,  .ant-rate-star-full  .ant-rate-star-first) {
  color: rgba(0,0,0,1) !important;
  filter:grayscale(0);
}

</style>