<template>
  <div class="setting-item p-t-10">
    <a-typography-text type="secondary" class="secondary">选项排序</a-typography-text>

    <VueDraggable v-if="comp.dataList.length" v-model="comp.dataList" :animation="150" ghostClass="ghost"
      handle=".handle" class="flex flex-col gap-2 p-4 w-300px bg-gray-500/5 rounded compList">
      <!-- <div v-for="item in comp.dataList" class="cursor-move h-50px bg-gray-500/5 item">
        {{ item?.value }}
      </div> -->
      <div v-for="(item, index) in comp.dataList" :key="item" :class="{
        'cursor-move': true,
        'form-item': true,
      }">
        <div class="active-drag handle">
          <img src="/src/assets/form/drag.svg" alt="">
          <span class="label">
            {{ item?.value }}

          </span>
        </div>

      </div>

    </VueDraggable>
  </div>

</template>
<script lang="ts" setup>
import { ref, watch } from 'vue';
import { VueDraggable } from 'vue-draggable-plus'

interface Props {
  comp: any
}
const props = defineProps<Props>()
const dataList = ref(props)

watch(
  () => props.comp.dataList,
  (newValue: any) => {
    dataList.value = newValue
  }
);


</script>
<style lang="scss" scoped>
.handle {
  display: inline-block;
  height: 36px;

  img {
    width: 12px;
    cursor: move;
  }
}

.label {
  display: inline-block;
  margin-left: 10px;
  font-size: 14px;
  color: #666;
  user-select: none;
  white-space: nowrap; /* 强制文本在一行显示 */
  overflow: hidden; /* 隐藏超出部分 */
  text-overflow: ellipsis; 
  width: 200px;
}

.secondary {
  display: block;
  padding-bottom: 8px;
}

.form-item {
  height: 36px;
  line-height: 36px;
  img {
    margin-top: -26px;
  }
}
</style>