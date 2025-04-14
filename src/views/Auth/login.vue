
<template>
  <LogoComp class="logo" type="logo"/>
  <div class="login-content">
    <div class="login">
      <div class="login-body">
        <div class="title">欢迎使用柠檬表单</div>
        <LoginForm/>
      </div>
    </div>
    <div class="description">
     <div class="content">
      <div class="title">
        <div class="mark">“</div>
        Create a Lemon Form
        <div class="sub-title">
        <!-- <div class="des">
          🚀 3步极简创建 | 拖拽式操作 | 专业级表单功能
        </div> -->
        <span class="des">
          零门槛设计表单，30秒完成创建，小白也能轻松上手！
        </span>
        <div class="des"><span class="icon-index">✔</span> 精美模板一键套用</div>
        <div class="des"><span class="icon-index">✔</span> 智能数据分析实时可见</div>
        <div class="des"><span class="icon-index">✔</span> 消息实时通知</div>
      </div>

      </div>
     </div>
    </div>
  
  </div>
</template>
<script setup lang="ts">
import { ref, defineProps, reactive } from 'vue';
import LoginForm from './login-form.vue'
import LogoComp from '@/components/Logo.vue'

interface Props {
  title: string
}


const props = defineProps<Props>()

</script>

<style scoped lang="scss">
:deep(:where(.css-dev-only-do-not-override-17yhhjv).ant-input-affix-wrapper >input.ant-input) {
  background: #f2f3f9;
}
.logo {
      position: absolute;
      top: 10px;
      left: 30px;
    }
  .login-content {
    align-items: center;
    width: 100%;
    height: 100vh;
    background-color: #fff;
    display: grid;
    grid-template-columns: 1fr 40%;
  }

  .login {
    height: 100vh;
    position: relative;
    .login-body {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 360px;
      height: 300px;
    }
    .title {
      font-size: 28px;
      font-weight: 500;
      color: #333333;
      margin-bottom: 16px;
    }


  }

  .description {
    background: rgb(20, 86, 240);
    height: 100vh;
    position: relative;

    .content {
      position: absolute;
      top: 30%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
    .mark {
      color: rgb(20, 86, 240);
      background: yellow;
      font-size: 80px;
      padding: 10px;
      height: 62px;
      width: 62px;
      border-radius: 50%;
      margin-left: -39px;
      padding-top: 26px;

    }

    .title {
      font-size: 38px;
      color: #fff;
      margin: auto;
    }
    .sub-title {
      margin: 20px 0;
      font-size: 18px;
      color: #f0f2f5;

      .des {
        white-space: nowrap;  /* 强制不换行 */
        // color: gold;
        padding-left: 5px;
      }
      .des1 {
        color: mediumaquamarine;
      }
    }
  }
  .icon-index {
    color: chartreuse;
  }
</style>
