
<template>
  <div class="setting-item h-42">
    <a-typography-text type="secondary" class="secondary">
      显示描述
      <a-tooltip placement="top">
        <template #title>
          <span>批量操作：描述字段且有值的显示隐藏</span>
        </template>
        <QuestionCircleOutlined />
    </a-tooltip>
    </a-typography-text>
    <a-space direction="vertical" class="abs-r switch-r " >
      <a-switch v-model:checked="form.displayDescription"  @change="changeValue($event)" />
    </a-space> 
  </div>

</template>
<script lang="ts" setup>
import type { SizeType } from 'ant-design-vue/es/config-provider';
import { ref, watch, defineProps } from 'vue';
import { useSelectCompStore  } from '@/stores/selectCompStore'

interface Props {
  form: any
}

const props = defineProps<Props>()
const form = ref(props.form)

const compStore = useSelectCompStore()

const changeValue = (value: boolean) => {
  compStore.updateGlobalFormConfig({
    displayDescription: value
  })
}

</script>
<style lang="scss" scoped>

</style>