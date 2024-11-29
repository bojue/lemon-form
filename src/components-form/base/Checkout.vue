<template>
  <a-checkbox-group :value="props.value" :options="props.dataList" :style="props.layoutType === 'vertical' ? radioVerticalStyle : radioStyle"
   class="group-item">
    <template #label="{ label }" class="item">
      <span >{{ label }}</span>
    </template>
  </a-checkbox-group>
</template>
<script setup lang="ts">
import { ref, reactive } from 'vue'

const props = defineProps({
  dataList: {
    type: Array
  },
  value: {
    type: String
  },
  layoutType: String
})

const radioVerticalStyle = ref({
  display: 'flex',
  height: '40px',
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