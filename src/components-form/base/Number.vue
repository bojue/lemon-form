<template>
 <a-input-number 
  :disabled="isDev" 
  :title="isDev ? disableInputByDev : placeholder" 
  class="item-comp" 
  v-model:value="props.value" 
  :placeholder="placeholder || '提示信息'"
  :min="1" 
  :max="100" />
</template>
<script setup lang="ts">
import { ref,watch, reactive } from 'vue'
import { disableInputByDev } from '@/views/FormEditor/comp-config-data'

interface Props {
  id: string
  placeholder: string
  value: string
  isDev: boolean
}

const props = defineProps<Props>()
</script>
<style lang="scss">
</style>