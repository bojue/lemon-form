<template>
  <div class="setting-item h-42">
    <a-input-number
      v-model:value="comp.minValue"
      placeholder="最小值"
      allow-clear 
      @Input="handleChangeInput($event, 'minValue')"
      />
  </div>

  <a-input-number
      v-model:value="comp.maxValue"
      placeholder="最大值"
      allow-clear 
      @Input="handleChangeInput($event, 'maxValue')"
      />

</template>
<script lang="ts" setup>
import type { SizeType } from 'ant-design-vue/es/config-provider';
import { ref } from 'vue';
import { useSelectCompStore  } from '@/stores/selectCompStore'

interface Props{
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
<style lang="scss" scoped>

</style>