
<template>
  <div class="setting-item h-42 mb-10">
    <a-typography-text 
      type="secondary" 
      class="secondary">显示其他数据
    </a-typography-text>
    <a-space direction="vertical" class="abs-r switch-r ">
      <a-switch  v-model:checked="comp.useOtherDataList" @change="handleChangeInput" />
    </a-space> 
  </div>
  <div class="setting-item">
    <!-- <a-typography-text type="secondary" class="block-title">请输入其他选项文本</a-typography-text> -->
  <a-input 
    class="mb-10"
    placeholder="请输入其他文本(最长15个字符)" 
    v-model:value="comp.dataOtherList[0].label"
    @Input="changeOther"
    :maxlength="15"
  ></a-input>
  </div>
</template>
<script lang="ts" setup>
import { defineProps, defineEmits, ref }  from 'vue'
import { useSelectCompStore  } from '@/stores/selectCompStore'

const compStore = useSelectCompStore()

const handleChangeInput = (event: boolean) => {
  const data = event
  compStore.updateCurrentComp({
    useOtherDataList: data
  })
}

const changeOther = (event: any) => {
  const data = event.target.value
  compStore.updateCurrentComp({
    dataOtherList: [{
      label: data,
      value: data,
    }]
  }) 
}

interface Props{
  comp: any
}

const props = defineProps<Props>()
const comp = ref(props.comp)

</script>
<style lang="scss" scoped>
.block-title {
  margin-top: 10px;
}
.comp {
  padding: 10px;
  color: yellowgreen;
}
.mb-10 {
  margin-bottom: 10px;
}
</style>

<style lang="scss" scoped>

</style>