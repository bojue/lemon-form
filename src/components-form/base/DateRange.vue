<template>
  <a-range-picker class="item-comp" v-model:value="props.value" :placeholder="placeholderRange"/>
</template>
<script setup lang="ts">
import { ref, reactive } from 'vue'

const radioStyle = reactive({

});

interface Props {
  value: string 
  placeholderRange: [string, string]
}
const props = defineProps<Props>()
</script>
<style lang="scss">
</style>