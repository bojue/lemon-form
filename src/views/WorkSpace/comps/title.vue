
<template>
  <div class="category">
    <div class="name">{{ title }}</div>
  </div>
</template>
<script setup lang="ts">
import { ref, defineProps } from 'vue'

interface Props {
  title: string
}

const props = defineProps<Props>()

</script>

<style scoped lang="scss">
  .category {
    line-height: 30px;
    font-weight: 500;
    font-size: 18px;
    color: #141a25;
    height: 44px;
    line-height: 44px;

  }
</style>
