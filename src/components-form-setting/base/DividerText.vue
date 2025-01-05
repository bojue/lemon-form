
<template>
  <a-typography-text type="secondary" class="block-title">分割线文本</a-typography-text>
  <a-input 
    class="comp"
    v-if="compStore.currentCompConfig"
    placeholder="输入分割线文本" 
    allow-clear 
    v-model:value="comp.dividerValue"
    @Input="handleChangeInput"
    maxLength="30"
    showCount
  ></a-input>

</template>
<script lang="ts" setup>
import { defineProps, defineEmits, ref }  from 'vue'
import { useSelectCompStore  } from '@/stores/selectCompStore'

const compStore = useSelectCompStore()

const handleChangeInput = (event: any) => {
  const data = event.target.value 
  compStore.updateCurrentComp({
    dividerValue: data
  })
}


interface Props{
  comp: any
}

const props = defineProps<Props>()
const comp = ref(props.comp)

</script>
<style lang="scss" scoped>

.comp {
  padding: 10px;
  color: yellowgreen;
}
.comp {
  margin-bottom: 10px;
}

</style>