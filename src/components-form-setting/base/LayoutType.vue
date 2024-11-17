
<template>
  <div class="setting-item h-80 p-t-10">
    <a-typography-text type="secondary" class="secondary">布局方式</a-typography-text>

    <a-space direction="vertical" class="abs-r ">
      <a-radio-group v-model:value="size">
        <a-radio-button value="large">纵向</a-radio-button>
        <a-radio-button value="default">横向</a-radio-button>
      </a-radio-group>
    </a-space> 
  </div>

</template>
<script lang="ts" setup>
import type { SizeType } from 'ant-design-vue/es/config-provider';
import { ref } from 'vue';
const size = ref<SizeType>('large');

</script>
<style lang="scss" scoped>
.secondary {
  margin: 10px 0;
}
</style>