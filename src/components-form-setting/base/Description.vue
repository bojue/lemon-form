
<template>
  <a-typography-text type="secondary" class="block-title">描述/备注</a-typography-text>
  <a-textarea 
    v-if="compStore.currentCompConfig"
    placeholder="请输入描述" 
    allow-clear 
    show-count
    v-model="comp.description"
    @Input="handleChangeInput"
    :auto-size="{ minRows: 2, maxRows: 5 }"
    :maxlength="200"
  ></a-textarea>
</template>
<script lang="ts" setup>
import { defineProps, defineEmits, ref }  from 'vue'
import { useSelectCompStore  } from '@/stores/selectCompStore'

const compStore = useSelectCompStore()

const handleChangeInput = (event: any) => {
  const data = event.target.value 
  compStore.updateCurrentComp({
    description: data
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

</style>