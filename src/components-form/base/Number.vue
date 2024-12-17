<template>
 <a-input-number class="item-comp" id="inputNumber" v-model:value="props.value" :min="1" :max="100" />
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