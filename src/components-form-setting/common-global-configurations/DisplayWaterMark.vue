
<template>
  <div class="setting-item h-42">
    <a-typography-text type="secondary" class="secondary">
      水印
      <a-tooltip placement="top">
        <template #title>
          <span>可根据需求灵活使用水印，需要注意平衡品牌宣传，专业形象，版权所有权声明和用户体验</span>
        </template>
        <QuestionCircleOutlined />
    </a-tooltip>
    </a-typography-text>
    <a-space direction="vertical" class="abs-r switch-r " >
      <a-switch  v-model:checked="form.displayWaterMark"  @change="changeValue($event)" />
    </a-space> 
  </div>
  <a-input 
    class="mb-10"
    v-if="compStore.currentCompConfig && form.displayWaterMark"
    placeholder="请输入水印（最多15个字）" 
    v-model:value="form.waterMarkText"
    @Input="handleChangeInput"
    :maxlength="15"
  ></a-input>

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
    displayWaterMark: value
  })
}

const handleChangeInput = (event: any) => {
  const data = event.target.value 
  compStore.updateCurrentComp({
    waterMarkText: data
  })
}

</script>
<style lang="scss" scoped>

</style>