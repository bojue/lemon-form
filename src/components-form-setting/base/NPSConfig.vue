<template>
  <div class="setting-item">
    <a-typography-text type="secondary" class="block-title2">取值范围
      <a-tooltip placement="top">
        <template #title>
          <span>开始值可以选择0，结束值最小值是3</span>
        </template>
        <QuestionCircleOutlined />
    </a-tooltip>
    </a-typography-text>
  </div>
  <div class="setting-item g-2">
    <a-select v-model:value="comp.startValue" style="width: 110px" class="abs-item" @change="changeStartValue">
      <a-select-option :value="item" v-for="item in comp.startValueList">{{ item }}</a-select-option>
    </a-select>
    <a-select v-model:value="comp.rateCount" style="width: 110px" class="abs-item" @change="changeEndValue">
      <a-select-option :value="item.value" v-for="item in dataList">{{ item.name }}</a-select-option>
    </a-select>
  </div>
</template>


<script lang="ts" setup>
import { defineProps, onMounted, ref } from 'vue'
import { useSelectCompStore } from '@/stores/selectCompStore'

const compStore = useSelectCompStore()

interface Props {
  comp: any
}

const props = defineProps<Props>()
const comp = ref(props.comp)


const dataList: any = ref([])

onMounted(() => {
  for (let i = 3; i <= 10; i++) {
    dataList.value.push({
      name: i,
      value: i
    })
  }
})

const changeStartValue = (event: any) => {
  compStore.updateCurrentComp({
    startValue: event
  })
}

const changeEndValue = (event: any) => {
  compStore.updateCurrentComp({
    rateCount: event
  })
}
</script>
<style lang="scss" scoped>
.comp {
  padding: 10px;
  color: yellowgreen;
}

.comp {
  margin-bottom: 10px;
}

.g-2 {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
}

::v-deep(:where(.css-dev-only-do-not-override-17yhhjv).ant-radio-button-wrapper) {
  width: 42px;
}
</style>