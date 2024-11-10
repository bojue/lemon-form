

<template>
  <a-rate v-model:value="props.value" />
</template>
<script setup lang="ts">
import { ref, reactive } from 'vue'

const props = defineProps({
  value: {
    type: String
  },
})

</script>
<style lang="scss">
</style>