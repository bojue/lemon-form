
<template>
  <div class="setting-item h-42">
    <a-typography-text type="secondary" class="secondary">自定错误提示</a-typography-text>

    <a-space direction="vertical" class="abs-r switch-r ">
      <a-radio-group v-model:value="size">
        <a-switch size="small" />
      </a-radio-group>
    </a-space> 
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