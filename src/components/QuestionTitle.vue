
<template>
  <div class="question-title">
    <span class="title">{{ title }}</span>
  </div>
</template>
<script setup lang="ts">
import { ref, h } from 'vue';

interface Props {
  title: string 
}
const props = defineProps<Props>()

</script>

<style scoped lang="scss">
.question-title {
  height: 60px;
  line-height: 60px;
  font-size: 20px;
  margin: 10px;

  .title {
    display: inline-block;
    width: 850px;
    text-align: left;
    color: #777;
  }
}

</style>
