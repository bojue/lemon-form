
<template>
  <a-typography-text type="secondary" class="block-title">描述/备注</a-typography-text>
  <a-textarea 
    v-if="compStore.currentCompConfig"
    placeholder="请输入描述" 
    allow-clear 
    show-count
    v-model:value="comp.description"
    @Input="handleChangeInput"
    :auto-size="{ minRows: 2, maxRows: 5 }"
    :maxlength="200"
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
    description: data
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

</style>