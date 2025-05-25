
<template>
  <div class="setting-item h-50">
    <a-typography-text type="secondary" class="block-title2">大小</a-typography-text>
    <a-select v-model:value="comp.size" style="width: 120px" class="abs-r" @change="handleChange">
      <a-select-option :value="item.value" v-for="item in orientationList">{{ item.name }}</a-select-option>
    </a-select>
  </div>
</template>
<script lang="ts" setup>
import { defineProps, defineEmits, ref }  from 'vue'
import { useSelectCompStore  } from '@/stores/selectCompStore'
import { textOrButtonSizeData } from '../setting-config-data'

const compStore = useSelectCompStore()
const orientationList = ref([...textOrButtonSizeData])



const handleChange = (event: any) => {
  const data = event
  compStore.updateCurrentComp({
    size: data
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