
<template>
  <a-typography-text type="secondary" class="block-title">输入框提示（区间）</a-typography-text>
  <a-input 
    v-if="compStore.currentCompConfig && comp.placeholderRange"
    placeholder="开始提示" 
    allow-clear 
    v-model:value="comp.placeholderRange[0]"
    @Input="handleChangeInput($event, 'start')"
  ></a-input>
  <a-input 
    class="mt-10"
    v-if="compStore.currentCompConfig && comp.placeholderRange"
    placeholder="结束提示" 
    allow-clear 
    v-model:value="comp.placeholderRange[1]"
    @Input="handleChangeInput($event, 'end')"
  ></a-input>
</template>
<script lang="ts" setup>
import { defineProps, defineEmits, ref }  from 'vue'
import { useSelectCompStore  } from '@/stores/selectCompStore'

const compStore = useSelectCompStore()

const handleChangeInput = (event: any, state: 'start' | 'end') => {
  const data = event.target.value 
  const val = [...comp.value.placeholderRange]
  if(state === 'start') {
    val[0] = data
  } else {
    val[1] = data
  }
  const value =
  compStore.updateCurrentComp({
    placeholderRange: val
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

.mt-10 {
  margin-top: 8px;
}

</style>