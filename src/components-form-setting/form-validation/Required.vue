
<template>
  <div class="setting-item h-42">
    <a-typography-text type="secondary" class="secondary">必填</a-typography-text>
    <a-space direction="vertical" class="abs-r switch-r ">
      <a-switch  v-model:checked="comp.isRequired" :size="size" @change="handleChangeInput"/>
    </a-space> 
  </div>

</template>
<script lang="ts" setup>
import type { SizeType } from 'ant-design-vue/es/config-provider';
import { ref } from 'vue';
import { useSelectCompStore  } from '@/stores/selectCompStore'

const size = ref<SizeType>('large');

interface Props{
  comp: any
}

const props = defineProps<Props>()
const comp = ref(props.comp)

const compStore = useSelectCompStore()

const handleChangeInput = (event: any) => {
  const data = event
  compStore.updateCurrentComp({
    isRequired: data
  })
}



</script>
<style lang="scss" scoped>

</style>