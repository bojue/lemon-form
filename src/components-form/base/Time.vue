<template>
    <a-time-picker class="item-comp" v-model:value="inputValue" :placeholder="placeholder"/>
</template>
<script setup lang="ts">
import { ref, watch, reactive } from 'vue'
interface Props {
  id: string
  placeholder: string
  value: string
}

const props = defineProps<Props>()
const inputValue = ref(props.value)

watch(() => props.value, (newValue) => inputValue.value = newValue)
</script>
<style lang="scss">
</style>