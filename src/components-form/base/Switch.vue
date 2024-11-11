<template>
  <a-switch v-model:checked="props.value" />
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