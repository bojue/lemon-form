<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink, useRouter } from 'vue-router'
import LogoIcon from '@/components/logoHasTitleIcon.vue'


interface Props {
  type: 'logo' | 'title'
}
const router = useRouter()
const props = defineProps<Props>()



const toProfile = () => {
  router.push('/') // 跳转工作台
}

const size = ref('large')
</script>

<template>
  <div class="logo-comp"  @click="toProfile">
    <LogoIcon :size="30" />
    <span class="logo-title"> Lemon Form</span>
  </div>
</template>

<style lang="scss">
.logo-comp {
  height: 40px;
  z-index: 100;
}
.logoIcon {
  font-size: 34px;
}

.logo-title {
  position: absolute;
  position: absolute;
  padding-left: 10px;
  padding-top: 3px;
  font-size: 20px;
  font-weight: 500;
  min-width: 160px;
}
</style>