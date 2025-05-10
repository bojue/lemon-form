<template>
  <a-form :model="formState" class="form" name="basic" autocomplete="off">
    <a-form-item name="username" :rules="[{ required: true, message: '手机号/邮箱必填' }]">
      <a-input class="input" v-model:value="formState.username" placeholder="手机号/邮箱" />
    </a-form-item>
    <a-form-item v-if="type === 'register' || type === 'login' && loginType === 'password'" :class='{
      "min-margin-bottom": type === "login" && loginType === "password"
    }' name="password" class="password" :rules="[{ required: true, message: '密码必填' }]">
      <a-input class="input" v-model:value="formState.password" placeholder="密码" />
    </a-form-item>
    <a-form-item v-if="type === 'register' || type === 'login' && loginType === 'code'" name="code"
      class="code min-margin-bottom " :rules="[{ required: true, message: '验证码必填' }]">
      <div class="group">
        <a-input class="input" v-model:value="formState.code" placeholder="验证码" />
        <a-button class="code pointer" type="default" @click="() => { console.log('获取验证码') }">获取验证码</a-button>
      </div>
    </a-form-item>
    <div class="login-type" v-if="type === 'login'">
      <span class="forgetPassword pointer" @click="toRoute('/reset')">忘记密码</span>
      <span class="type pointer" @click="changeType">{{ loginType === 'code' ? '密码登录' : '验证码登录' }}</span>
    </div>
    <a-form-item name="remember" class="remember" :wrapper-col="{ span: 24 }">
      <a-checkbox v-model:checked="formState.automaticLogon">未注册的手机号/邮箱将自动注册</a-checkbox>
    </a-form-item>
    <a-form-item class="submit-item">
      <a-button class="submit" type="primary" html-type="submit" @click="submit">{{ submitText }}</a-button>
    </a-form-item>
    <div class="register-item">
      <template v-if="type === 'login'">
        <span class="label">还没有账号?</span>
        <span class="register" @click="toRoute('/register')">立即注册</span>
      </template>
      <template v-if="type === 'register'">
        <span class="label">已有账号?</span>
        <span class="register pointer" @click="toRoute('/login')">返回登录</span>
      </template>
    </div>
  </a-form>
</template>
<script setup lang="ts">
import router from '@/router';

import { ref, defineProps, reactive, computed } from 'vue';
import { useAuthStore } from '@/stores/auth'
import { message } from 'ant-design-vue';

const authStore = useAuthStore()

interface FormState {
  username: string | null;
  password: string | null;
  code: string | null;
  automaticLogon: boolean
}
const formState = reactive<FormState>({
  username: null,
  password: null,
  code: null,
  automaticLogon: false
});


interface Props {
  titleValue?: string
  type: 'register' | 'login'
}

const props = defineProps<Props>()
const loginType = ref('code') // 登录方式

const changeType = () => {
  loginType.value = loginType.value === 'code' ? 'password' : 'code'
}

const submitText = computed(() => {
  return props.type === 'register' ? '注册' : '登录'
})

const toRoute = (url: string) => {
  console.log('跳转', url)
  router.push(url) // 跳转登录
}


const submit = async () => {
  const isLogin = props.type === 'login'
  const result: any =  isLogin? await authStore.login({...formState}): await authStore.register({...formState})
  if(!result) {
    return
  }
  const {
    data,
    status
  } = result

  if(props.type === 'register') {
    if(status === 201) {
      // 注册成功
      message.success(data.message, 100)
      setTimeout(() => {
        message.destroy()
        toRoute('/login')
      }, 100)
    } else {
      // 注册失败
      message.error('注册失败', 100)
    }
  } else {
    // 登录成功后跳转工作台
    if(status === 200) {
      message.success(data.message, 1000)
      setTimeout(() => {
        message.destroy()
        toRoute('/workspace')
      }, 1000)
    } else {
      // 登录失败
      message.error('登录失败', 100)
    }
  }

  console.log('登录结果', result)
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
  margin-bottom: 5px;
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
    color: #1677ff;
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
