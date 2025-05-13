<template>
  <div class="setting-item h-50">
    <a-typography-text type="secondary" class="block-title2">保存图片格式</a-typography-text>
    <a-select v-model:value="comp.sign_create_type" style="width: 120px" class="abs-r" @change="changeType">
      <a-select-option :value="item.value" v-for="item in ImgTypeList">{{ item.label }}</a-select-option>
    </a-select>
  </div>

</template>
<script lang="ts" setup>
import { ref, watch } from 'vue';

interface Props {
  comp: any
}
const props = defineProps<Props>()
const ImgTypeList = ref([{
  label: 'JPG',
  value: 'jpg'
}, {
  label: 'PNG',
  value: 'png'
}])

const changeType = (item: any) => {
  console.log(item)
}


</script>
<style lang="scss" scoped>
.handle {
  display: flex;
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
    margin-top: 0px;
  }
}
</style>