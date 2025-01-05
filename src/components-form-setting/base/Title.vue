
<template>
  <a-typography-text type="secondary" class="block-title">标题</a-typography-text>
  <a-textarea 
    class="mb-10"
    v-if="compStore.currentCompConfig"
    placeholder="请输入标题" 
    allow-clear 
    show-count
    v-model:value="comp.title"
    @Input="handleChangeInput"
    :auto-size="{ minRows: 2, maxRows: 5 }"
    :maxlength="50"
  ></a-textarea>

</template>
<script lang="ts" setup>
import { defineProps,watch, computed, defineEmits, ref, onMounted }  from 'vue'
import { useSelectCompStore  } from '@/stores/selectCompStore'
import Description from '@/components-form-setting/base/Description.vue';

const compStore: any = useSelectCompStore()

const handleChangeInput = (event: any) => {
  const data = event.target.value 
  compStore.updateCurrentComp({
    title: data
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

.mb-10 {
  margin-bottom: 20px;
}

</style>