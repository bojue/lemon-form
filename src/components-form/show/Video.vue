<template>
  <video :src="props.value" :alt="props.alt"></video>
</template>
<script setup lang="ts">
import { ref, reactive } from 'vue'
import { disableInputByDev } from '@/views/FormEditor/comp-config-data'

interface Props {
  id: string
  value: string
  alt?: string
  isDev: boolean
}

const props = defineProps<Props>()
</script>
<style lang="scss">
</style>