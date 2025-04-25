<script setup lang="ts">
import router from '@/router';
import { ref } from 'vue'

interface Props {
  size: number | number
  hiddenTitle?: boolean
}

const props = defineProps<Props>()
const defaultWidth = 40

const toProfile = () => {
  router.push('/') // 跳转工作台
}

</script>

<template>

<img src="@/assets/logo.svg" :style="{
  width: (size || defaultWidth) + 'px',
  height: (size || defaultWidth) + 'px',
}" class="logo"/>
</template>

<style lang="scss">
.logo {
  height: 40px;
  height: 40px;
  cursor: pointer;
}

</style>