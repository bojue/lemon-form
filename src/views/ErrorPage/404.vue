<template>
  <div class="page-body">
    <div class="noFound">
      <NoFound/>
    </div>
    <div class="btns">
      <a-button class="btn" @click="goPage('/')">返回首页</a-button>
      <a-button class="btn"type="primary" @click="goPage('/workspace')">返回工作空间</a-button>

      
    </div>
  </div>
</template>



<script setup lang="ts">
import NoFound from 'ant-design-vue/es/result/noFound';
import { useRouter } from 'vue-router'
const router = useRouter()

const goPage = (pageUrl: string) => {
  router.push(pageUrl) // 跳转工作台
}
</script>


<style lang="scss" scoped>
.page-body {
  height: 100%;
  width: 100%;
  margin: auto;
}

.noFound {
  text-align: center;
  padding-top: 200px;
}

.btns {
  margin: 40px;
  text-align: center;
  .btn {
    margin: 10px;
  }
}

</style>
