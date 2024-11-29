
<template>
  <div class="setting-item h-80 p-t-10">
    <a-typography-text type="secondary" class="secondary">布局方式</a-typography-text>
    <a-space direction="vertical" class="abs-r ">
      <a-radio-group v-model:value="comp.layoutType" @change="handleChangeInput">
        <a-radio-button v-for="item in layoutTypeList" :value="item.value" >{{ item.label }}</a-radio-button>
      </a-radio-group>
    </a-space> 
  </div>

</template>
<script lang="ts" setup>
import type { SizeType } from 'ant-design-vue/es/config-provider';
import { defineProps, defineEmits, ref }  from 'vue'
import { useSelectCompStore  } from '@/stores/selectCompStore'

const compStore = useSelectCompStore()

const handleChangeInput = (event: any) => {
  const data = event.target.value 
  compStore.updateCurrentComp({
    layoutType: data
  })
}

interface Props{
  comp: any
}

const props = defineProps<Props>()
const comp = ref(props.comp)

const layoutTypeList = [{
  label: '横向',
  value: 'horizontal'
}, {
  label: '纵向',
  value: 'vertical'
}]

</script>
<style lang="scss" scoped>
.secondary {
  margin: 10px 0;
}
</style>