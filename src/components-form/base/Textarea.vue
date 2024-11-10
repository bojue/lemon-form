<template>
    <a-textarea v-model:value="props.value" placeholder="textarea with clear icon" allow-clear />
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