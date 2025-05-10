<template>
  <div class="support-content">
    <div class="support">
      <LogoIcon :size="18" />
      <span class="des">
        柠檬轻表单 提供技术支持
      </span>
    </div>
  </div>

</template>
<script setup lang="ts">
import { ref, h } from 'vue';
import LogoIcon from './logoIcon.vue'

interface Props {

}
const props = defineProps<Props>()

</script>

<style scoped lang="scss">
.support-content {
  position: relative;
  height: 100px;
  line-height: 100px;
  text-align: center;
  font-size: 12px;
  color: #8f959e;

  .support {
    img {
      margin-top: -3px;
    }

    .des {
      padding-left: 8px;
      padding-top: 1px;
    }
  }
}
</style>
