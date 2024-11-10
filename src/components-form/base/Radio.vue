<template>
  <a-radio-group v-model:value="props.value">
    <a-radio :value="1">A</a-radio>
    <a-radio :value="2">B</a-radio>
    <a-radio :value="3">C</a-radio>
    <a-radio :value="4">D</a-radio>
  </a-radio-group>
</template>
<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps({
  value: {
    type: String
  }
})

</script>
<style lang="scss">
</style>