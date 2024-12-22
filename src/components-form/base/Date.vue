<template>
  <a-date-picker :disabled="isDev" :title="isDev ? disableInputByDev : placeholder"
  class="item-comp" v-model:value="props.value" />
</template>
<script setup lang="ts">
import { ref, reactive } from 'vue'
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