
<template>
  <a-typography-text type="secondary" class="block-title">标题</a-typography-text>
  <a-input 
    class="mb-10"
    v-if="compStore.currentCompConfig"
    placeholder="请输入描述" 
    v-model:value="comp.name"
    @Input="handleChangeInput"
    :maxlength="100"
  ></a-input>
</template>
<script lang="ts" setup>
import { defineProps,watch, computed, defineEmits, ref, onMounted }  from 'vue'
import { useSelectCompStore  } from '@/stores/selectCompStore'
import Description from '@/components-form-setting/base/Description.vue';

const compStore: any = useSelectCompStore()

const handleChangeInput = (event: any) => {
  const data = event.target.value 
  compStore.updateCurrentComp({
    name: data
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