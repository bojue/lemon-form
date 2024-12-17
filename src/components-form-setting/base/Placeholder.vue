
<template>
  <a-typography-text type="secondary" class="block-title">输入框提示</a-typography-text>
  <a-input 
    v-if="compStore.currentCompConfig"
    placeholder="输入框提示" 
    allow-clear 
    v-model:value="comp.placeholder"
    @Input="handleChangeInput"
  ></a-input>
</template>
<script lang="ts" setup>
import { defineProps, defineEmits, ref }  from 'vue'
import { useSelectCompStore  } from '@/stores/selectCompStore'

const compStore = useSelectCompStore()

const handleChangeInput = (event: any) => {
  const data = event.target.value 
  compStore.updateCurrentComp({
    placeholder: data
  })
}

interface Props{
  comp: any
}

const props = defineProps<Props>()
const comp = ref(props.comp)

</script>
<style lang="scss" scoped>
.block-title {
  margin-top: 10px;
}
.comp {
  padding: 10px;
  color: yellowgreen;
}

</style>