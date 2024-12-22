<template>
    <a-time-picker 
    :disabled="isDev" :title="isDev ? disableInputByDev : placeholder"
    class="item-comp" v-model:value="inputValue" :placeholder="placeholder"/>
</template>
<script setup lang="ts">
import { ref, watch, reactive } from 'vue'
import { disableInputByDev } from '@/views/FormEditor/comp-config-data'

interface Props {
  id: string
  isDev: boolean
  placeholder: string
  value: string
}

const props = defineProps<Props>()
const inputValue = ref(props.value)

watch(() => props.value, (newValue) => inputValue.value = newValue)
</script>
<style lang="scss">
</style>