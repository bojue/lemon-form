<template>
  <a-checkbox-group :value="props.value" :options="props.dataList" :style="radioStyle" class="group-item">
    <template #label="{ label }" class="item">
      <span >{{ label }}</span>
    </template>
  </a-checkbox-group>
</template>
<script setup lang="ts">
import { ref, reactive } from 'vue'

const radioStyle = reactive({

});

const props = defineProps({
  dataList: {
    type: Array
  },
  value: {
    type: String
  },
})
</script>
<style lang="scss" scoped>
::v-deep {
  .ant-checkbox-group-item {
    height: 40px;
    line-height: 40px;
    width: 100%;
  }
}
</style>