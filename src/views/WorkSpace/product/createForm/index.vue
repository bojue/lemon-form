

<template>
<a-modal v-model:open="open" title="Basic Modal" @ok="handleOk" @cancel="handleCancel">
  <p>Some contents...</p>
  <p>Some contents...</p>
  <p>Some contents...</p>
</a-modal>

</template>
<script setup lang="ts">
import { ref, h, defineEmits, watch } from 'vue';

interface Props {
  openState: boolean
}

const emits = defineEmits(['handleCreateForm'])
const props = defineProps<Props>()

const handleOk = () => {
  console.log('ok')
}

const open = ref(false)
const handleCancel = () => {
  open.value = false
  emits('handleCreateForm')
}
const handleOpen = () => {
  open.value = true
}

watch(() => props.openState, (val) => {
  open.value = val
})


</script>

<style scoped lang="scss">

</style>
