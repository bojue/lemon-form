<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink, useRouter } from 'vue-router'
import LogoComp from './../components/Logo.vue'
import LogoIcon from '@/components/logoIcon.vue'

const router = useRouter()

const size = ref('large')
const toProfile = () => {
  router.push('/workspace') // 跳转工作台
}

const toLogin = () => {
  router.push('/login') // 跳转登录
}
</script>

<template>
  <header>
    <div class="nav">
      <nav>
        <!-- <LogoComp/> -->
        <div class="controls">
          <a-button size="large" type="primary" class="login" @click="toLogin">登录</a-button>
          <a-button type="default" :size="size" class="toHome" @click="toProfile">进入工作台</a-button>
        </div>
      </nav>
    </div>
  </header>
  <div class="body">
      <div class="header">
        <div class="title"><LogoIcon/> 柠檬轻表单</div>
        <a-typography-text class="description">表单搭建，如此简单</a-typography-text>
      </div>
      <a-button type="primary" :size="size" class="toUseForm" @click="toProfile">立即使用</a-button>
    </div>
</template>


<style scoped>
header {
  max-height: 100vh;
  top: 0;
  left: 0;
  width: 100%;
}
.controls {
  position: absolute;
  right: 60px;
  top: 14px;
  width: 190px;
  display: flex;
  flex-grow: 2;
  justify-content: space-between;
}

.body {
  text-align: center;
  margin: 30px 0;
  margin-top: 150px;
  .header {
    font-size: 30px;

    .title {
      margin-bottom: 15px;
    }
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
