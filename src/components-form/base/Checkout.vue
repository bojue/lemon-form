<template>
  <a-checkbox-group :value="dataValue" :options="dataList" :style="layoutType === 'vertical' ? radioVerticalStyle : radioStyle"
   class="group-item">
    <template #label="{ label }" class="item">
      <span >{{ label }}</span>
    </template>
  </a-checkbox-group>
</template>
<script setup lang="ts">
import { ref, reactive } from 'vue'

interface Props {
  dataList: Array<any>
  dataValue: string
  layoutType: string
}

const props = defineProps<Props>()

const radioVerticalStyle = ref({
  display: 'flex',
  lineHeight: '40px',
});

const radioStyle = ref({
  display: 'inline-block',
  height: '40px',
  lineHeight: '40px'
});

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