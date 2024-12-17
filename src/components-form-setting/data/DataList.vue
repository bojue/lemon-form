
<template>
  <div class="setting-item p-t-10">
    <a-typography-text type="secondary" class="secondary">选项列表</a-typography-text>

    <VueDraggable v-model="dataList" :animation="0" 
      :group="{ name: 'people', pull: 'clone', put: false }" 
      :sort="false"
      class="flex flex-col gap-2 p-4 w-300px bg-gray-500/5 rounded compList">
      <div v-for="item in dataList" class="cursor-move h-50px bg-gray-500/5 item">
        {{ item?.value }}
      </div>
    </VueDraggable>
  </div>

</template>
<script lang="ts" setup>
import { ref, watch } from 'vue';

interface Props {
  dataList: Array<any>
}
const props = defineProps<Props>()
const dataList = ref(props)

watch(
  () => props.dataList,
  (newValue: any) => {
    dataList.value = newValue
  }
);


</script>
<style lang="scss" scoped>
.secondary {
  margin: 10px 0;
}
</style>