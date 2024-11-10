<template>
 <a-input v-model:value="props.value" placeholder="Basic usage" />
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