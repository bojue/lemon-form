<template>
  <a-cascader v-model:value="props.value" style="margin-bottom: 10px;width:100%" :options="options"
    :placeholder="props.address_placeholder"
    :disabled="isDev" >
    <template #prefix>
      <!-- <StepBackwardOutlined /> -->
    </template>
  </a-cascader>
  <a-input v-model:value="props.value" 
    :placeholder="props.address_detail_placeholder"
    :disabled="isDev">
    <template #prefix>
      <!-- <user-outlined />  -->
    </template>
  </a-input>
</template>
<script setup lang="ts">
import { addressData } from '@/views/FormEditor/comp-address-data';
import { ref, reactive } from 'vue'


interface Props {
  id: string
  address_placeholder: string
  address_detail_placeholder: string
  value: string
  isDev: boolean
}

const props = defineProps<Props>()

const options = ref([...addressData])


</script>
<style lang="scss" scoped>

</style>