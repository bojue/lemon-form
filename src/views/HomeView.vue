<template>
  <div class="home">
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
      <a-button type="default" @click="toGithub" :size="size">
        <span class="github">
          GitHub仓库
        </span>
      </a-button>
      <QuestionTitle title="为什么选择【柠檬轻表单】"/>
      <SelectLearn/>
      <QuestionTitle title="你可能感兴趣的问题"/>
      <QuestionCard/>
      <!-- <NewIssue/> -->

    </div>
  </div>

</template>



<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink, useRouter } from 'vue-router'
import LogoComp from './../components/Logo.vue'
import { toGithub } from '@/utils/toGithub'
import LogoIcon from '@/components/logoIcon.vue'
import SelectLearn from '@/components/SelectLearn.vue'
import QuestionCard from '@/components/QuestionCard.vue'
import QuestionTitle from '@/components/QuestionTitle.vue'
import NewIssue from '@/components/NewIssue.vue'

const router = useRouter()

const size = ref('large')
const toProfile = () => {
  router.push('/workspace') // 跳转工作台
}

const toLogin = () => {
  router.push('/login') // 跳转登录
}


</script>


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
  @media(max-height: 1200px) {
    margin-top: 0px;
  }
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
  .github {
    padding: 0 10px;
  }
  .giticon {
    margin-top: -5px;
  }
}
.home {
  height: 100%;
  background: linear-gradient(180deg,transparent, #fff, #fff, #fff, #fff)  #7aff0c40;
  /* background: linear-gradient(180deg,transparent, #fff, #fff, #fff, #fff)  yellowgreen; */
  /* background: linear-gradient(-45deg,#fff, #fff, #fff, #fff, #fff, #fff, #fff, #fff, #fff, #fff, #fff, #fff, #fff,
   #fff, #fff, #fff, #fff, #fff, #fff, #fff, #fff, #ffda0c, #fff70c, #c2ff0c, #7aff0c,#fff, #fff, #fff, #fff, #fff, #fff, #fff, #fff, #fff, #fff, #fff, #fff, #fff,
   #fff, #fff) ; */

}

</style>
