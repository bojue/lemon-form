
<template>
  <div class="content">
    <div class="no-data">  
      <img src="/src/assets/form-editor/no-data.svg"/>
      <div class="des">{{ des || '没有数据' }}</div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, h } from 'vue';

interface Props {
  type?: 'template'
  des?: string
}
const props = defineProps<Props>()

</script>

<style scoped lang="scss">
.content {
  width: 100%;
  height: 100%;
  position: relative;
  text-align: center;
  .no-data {
    position: relative;
    width: 400px;
    height: 400px;
    left: 50%;
    transform: translateX(-50%);
  }
  .des {
    top: 380px;
    color: rgba(0, 0, 0, 0.45);
  }
}

</style>
