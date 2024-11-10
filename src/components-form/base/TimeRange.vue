<template>
  <a-time-range-picker v-model:value="props.value" />
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
<style lang="scss">
</style>