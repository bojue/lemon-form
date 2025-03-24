<template>
 <a-input v-model:value="value" :placeholder="placeholder" >
  <template #prefix>
      <img class="icon" :src="TelePhone" alt="">
    </template>
 </a-input>
</template>
<script setup lang="ts">
import { ref, reactive } from 'vue'
import TelePhone from '/src/assets/form/telePhone.svg'

interface Props {
  id: string
  placeholder: string
  value: string | null
  isDev: boolean
}

const props = defineProps<Props>()
const value = ref(props.value || null)
</script>
<style lang="scss" scoped>
.icon {
  height: 18px;
}
</style>