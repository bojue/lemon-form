
<template>
  <div class="setting-item h-50">
    <a-typography-text type="secondary" class="block-title2">位置</a-typography-text>
    <a-select v-model:value="comp.position" style="width: 120px" class="abs-r" @change="handleChangePosition">
      <a-select-option :value="item.value" v-for="item in orientationList">{{ item.name }}</a-select-option>
    </a-select>
  </div>
</template>
<script lang="ts" setup>
import { defineProps, defineEmits, ref }  from 'vue'
import { useSelectCompStore  } from '@/stores/selectCompStore'

const compStore = useSelectCompStore()
const orientationList = ref([{
  name: "左",
  value: 'left'
}, {
  name: '中',
  value: 'center'
}, {
  name: "右",
  value: 'right'
}])

const handleChangeInput = (event: any) => {
  const data = event.target.value 
  compStore.updateCurrentComp({
    dividerValue: data
  })
}



const handleChangePosition = (event: any) => {
  const data = event
  compStore.updateCurrentComp({
    position: data
  })
}

interface Props{
  comp: any
}

const props = defineProps<Props>()
const comp = ref(props.comp)

</script>
<style lang="scss" scoped>

.comp {
  padding: 10px;
  color: yellowgreen;
}
.comp {
  margin-bottom: 10px;
}

</style>