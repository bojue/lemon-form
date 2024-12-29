
<template>
  <a-typography-text type="secondary" class="block-title">分页描述</a-typography-text>
  <a-textarea 
    v-if="compStore.currentCompConfig"
    placeholder="请输入分页描述" 
    allow-clear 
    show-count
    v-model:value="comp.pageSubDescription"
    @Input="handleChangeInput"
    :auto-size="{ minRows: 2, maxRows: 5 }"
    :maxlength="200"
  ></a-textarea>
</template>
<script lang="ts" setup>
import { defineProps,watch, computed, defineEmits, ref, onMounted }  from 'vue'
import { useSelectCompStore  } from '@/stores/selectCompStore'

const compStore: any = useSelectCompStore()

const handleChangeInput = (event: any) => {
  const data = event.target.value 
  compStore.updateCurrentComp({
    pageSubDescription: data
  })
}


interface Props{
  comp: any
}

const props = defineProps<Props>()

</script>
<style lang="scss" scoped>

.comp {
  padding: 10px;
  color: yellowgreen;
}
.block-title {
  margin-top: 15px;
}

</style>