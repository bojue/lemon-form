<template>
  <div class="setting-item h-42">
    <a-typography-text type="secondary" class="secondary">最小值</a-typography-text>

    <a-input-number  class="abs-r" v-model:value="comp.minValue" placeholder="最小值" allow-clear
      @Input="handleChangeInput($event, 'minValue')" />
  </div>

  <div class="setting-item h-42">
    <a-typography-text type="secondary" class="secondary">最大值</a-typography-text>
    <a-input-number class="abs-r" v-model:value="comp.maxValue" placeholder="最大值" allow-clear
      @Input="handleChangeInput($event, 'maxValue')" />
  </div>


</template>
<script lang="ts" setup>
import type { SizeType } from 'ant-design-vue/es/config-provider';
import { ref } from 'vue';
import { useSelectCompStore } from '@/stores/selectCompStore'

interface Props {
  comp: any
}
const compStore = useSelectCompStore()

const props = defineProps<Props>()
const comp = ref(props.comp)


const handleChangeInput = (event: any, param: 'maxValue' | 'minValue') => {
  const data = event.target.value
  compStore.updateCurrentComp({
    [param]: data
  })
}

</script>
<style lang="scss" scoped></style>