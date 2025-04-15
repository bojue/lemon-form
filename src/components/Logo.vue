<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink, useRouter } from 'vue-router'
import LogoIcon from '@/components/logoIcon.vue'


interface Props {
  type: 'logo' | 'title'
}
const router = useRouter()
const props = defineProps<Props>()



const toProfile = () => {
  router.push('/workspace') // 跳转工作台
}

const size = ref('large')
</script>

<template>
  <div class="logo">
    <LogoIcon :size="30"/>
    <span class="logo-title"> Lemon Form</span>
  </div>
</template>

<style lang="scss">
.logo {
  height: 40px;
}
.title {
  height: 60px !important;
  line-height: 60px !important;
}

.logoIcon {
  font-size: 34px;
}

.logo-title {
  position: absolute;
  padding-left: 10px;
  padding-top: 7px;
  font-size: 20px;
  font-weight: 500;
  min-width: 160px;
}
</style>