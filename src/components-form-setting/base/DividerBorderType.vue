
<template>
  <div class="setting-item h-42 comp">
    <a-typography-text type="secondary" class="secondary">虚线
    </a-typography-text>
    <a-space direction="vertical" class="abs-r switch-r  ">
      <a-switch v-model:checked="comp.dividerBorderType" @change="changeValue($event)" />
    </a-space> 
  </div>

</template>
<script lang="ts" setup>
import type { SizeType } from 'ant-design-vue/es/config-provider';
import { ref, watch, defineProps } from 'vue';
import { useSelectCompStore  } from '@/stores/selectCompStore'

interface Props {
  comp: any
}

const props = defineProps<Props>()

const compStore = useSelectCompStore()

const changeValue = (value: boolean) => {
  compStore.updateGlobalFormConfig({
    dividerBorderType: value
  })
}

</script>
<style lang="scss" scoped>
.comp {
  margin-bottom: 10px;
}
</style>