
<template>
  <a-typography-text type="secondary" class="block-title">选择框省/市/区提示</a-typography-text>
  <a-input 
    v-if="compStore.currentCompConfig"
    placeholder="输入框提示" 
    allow-clear 
    v-model:value="comp.address_placeholder"
    @Input="handleChangeInput($event,'address_placeholder')"
  ></a-input>

  <a-typography-text type="secondary" class="block-title">详细地址输入框提示</a-typography-text>
  <a-input 
    v-if="compStore.currentCompConfig"
    placeholder="输入框提示" 
    allow-clear 
    v-model:value="comp.address_detail_placeholder"
    @Input="handleChangeInput($event, 'address_detail_placeholder')"
  ></a-input>



</template>
<script lang="ts" setup>
import { defineProps, defineEmits, ref }  from 'vue'
import { useSelectCompStore  } from '@/stores/selectCompStore'


const compStore = useSelectCompStore()

const handleChangeInput = (event: any, key: string) => {
  const data = event.target.value 
  compStore.updateCurrentComp({
    [key]: data
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