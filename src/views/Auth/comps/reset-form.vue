<template>
  <a-form :model="formState" class="form" name="basic"  autocomplete="off">
    <a-form-item name="username" :rules="[{ required: true, message: '手机号/邮箱必填' }]">
      <a-input class="input" v-model:value="formState.username" placeholder="手机号/邮箱" />
    </a-form-item>
    <a-form-item 
      name="code" class="code " :rules="[{ required: true, message: '验证码必填' }]">
      <div class="group">
        <a-input class="input" v-model:value="formState.password" placeholder="验证码" />
        <a-button class="code pointer" type="default" @click="() => { console.log('获取验证码') }">获取验证码</a-button>
      </div>
    </a-form-item>
    <a-form-item class="submit-item">
      <a-button class="submit" type="primary" html-type="submit">重置</a-button>
    </a-form-item>
    <div class="register-item">
      <span class="register pointer" @click="toRoute('/')">返回首页</span>
    </div>
    
  </a-form>
</template>
<script setup lang="ts">
import router from '@/router';

import { ref, defineProps, reactive, computed } from 'vue';

interface FormState {
  username: string | null;
  password: string | null;
  automaticLogon: boolean
}
const formState = reactive<FormState>({
  username: null,
  password: null,
  automaticLogon: false
});


interface Props {
  title?: string
}

const props = defineProps<Props>()


const toRoute = (url:string) => {
  router.push(url) // 跳转登录
}

</script>

<style scoped lang="scss">
.form {
  user-select: none;
}
.input {
  height: 48px;
  line-height: 48px;
  padding: 4px 10px;
  width: 360px;
  background: #f2f3f9;
  border: 1px solid #d9d9d9;
}
.min-margin-bottom {
  margin-bottom: 5px ;
}

.remember {
  height: 20px;
  line-height: 20px;
}
.submit-item {
  margin-bottom: 10px;
}

.login-type {
  height: 40px;
  line-height: 40px;
  display: flex;
  justify-content: space-between;

  .forgetPassword {
    color: rgba(0, 0, 0, 0.45);
  }
  .type { 
    color: #1677ff;
  }
}
.register-item {
  text-align: center;
  .label {
    color: rgba(0, 0, 0, 0.45);
  }
  .register {
    // color: #1677ff;
    color: rgba(0, 0, 0, 0.45);
    padding-left: 10px;

  }
}

.pointer {
  cursor: pointer;
}

.group {
  width: 360px;
  display: flex;
  flex-grow: 2;
  justify-content: space-between;
  .input {
    width: 250px;
  }
  .code {
    width: 100px;
    height: 48px;
    line-height: 26px;
  }
}

.submit {
  width: 360px;
  height: 48px;
  font-size: 20px;
}
</style>
