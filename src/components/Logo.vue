<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink, useRouter } from 'vue-router'

const router = useRouter()


const toProfile = () => {
  router.push('/workspace') // 跳转工作台
}

const size = ref('large')
</script>

<template>
  <a-typography-title :level="4" class="title">🍋 Lemon Form</a-typography-title>
</template>

<style lang="scss">
.title {
  height: 60px !important;
  line-height: 60px !important;
}
</style>