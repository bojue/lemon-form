<template>
  <div class="setting-item h-42">
    <a-textarea
      v-model:value="requiredCustomText"
      placeholder="请输入自定义错误提示"
      auto-size
      />
  </div>

</template>
<script lang="ts" setup>
import type { SizeType } from 'ant-design-vue/es/config-provider';
import { ref } from 'vue';
const size = ref<SizeType>('large');
const requiredCustomText = ref(null)

</script>
<style lang="scss" scoped>

</style>