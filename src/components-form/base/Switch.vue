<template>
  <a-switch 
  :disabled="isDev" 
  :title="isDev ? disableInputByDev : placeholder" 
  v-model:checked="props.value" />
</template>
<script setup lang="ts">
import { ref, reactive } from 'vue'
import { disableInputByDev } from '@/views/FormEditor/comp-config-data'

interface Props {
  id: string
  placeholder: string
  value: string
  isDev: boolean
  dataList: Array<any>
}

const props = defineProps<Props>()

</script>
<style lang="scss">
</style>