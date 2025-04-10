<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink, useRouter } from 'vue-router'
import LogoComp from './../components/Logo.vue'

const router = useRouter()

const size = ref('large')
const toProfile = () => {
  router.push('/workspace') // 跳转工作台
}
</script>

<template>
  <header>
    <div class="nav">
      <nav>
        <LogoComp/>
        <a-button type="primary" :size="size" class="toHome" @click="toProfile">进入工作台</a-button>
      </nav>
    </div>
  </header>
  <div class="body">
      <div class="header">
        <div class="title">🍋 柠檬表单</div>
        <a-typography-text class="description">表单搭建，如此简单</a-typography-text>
      </div>
      <a-button type="primary" :size="size" class="toUseForm" @click="toProfile">免费使用</a-button>
    </div>
</template>


<style scoped>
header {
  max-height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
}
.toHome {
  position: absolute;
  right: 100px;
  top: 14px;
}

.body {
  text-align: center;
  margin: 30px 0;
  margin-top: 150px;
  .header {
    font-size: 30px;
  }
  .description {
    margin: 30px 20px;
    font-size: 16px;
  }

  .toUseForm {
    margin: 20px;
  }
}
</style>
