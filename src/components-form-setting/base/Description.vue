
<template>
  <a-typography-text type="secondary" class="block-title">描述/备注</a-typography-text>

  <a-textarea 
    placeholder="请输入描述" 
    allow-clear 
    show-count
    :auto-size="{ minRows: 2, maxRows: 5 }"
    :maxlength="200"
  ></a-textarea>
</template>
<script lang="ts" setup>

</script>
<style lang="scss" scoped>

</style>