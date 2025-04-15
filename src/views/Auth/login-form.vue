<template>
  <a-form :model="formState" name="basic"  autocomplete="off">
    <a-form-item name="username" :rules="[{ required: true, message: '手机号/邮箱必填' }]">
      <a-input class="input" v-model:value="formState.username" placeholder="手机号/邮箱" />
    </a-form-item>
    <a-form-item  name="password" :rules="[{ required: true, message: '验证码必填' }]">
      <div class="group">
        <a-input class="input" v-model:value="formState.password" placeholder="验证码" />
        <a-button class="code" type="default" @click="() => { console.log('获取验证码') }">获取验证码</a-button>
      </div>
    </a-form-item>
    <a-form-item name="remember" :wrapper-col="{ span: 24 }">
      <a-checkbox v-model:checked="formState.automaticLogon">未注册的手机号/邮箱将自动注册</a-checkbox>
    </a-form-item>
    <a-form-item >
      <a-button class="submit" type="primary" html-type="submit">登录</a-button>
    </a-form-item>
  </a-form>
</template>
<script setup lang="ts">
import { ref, defineProps, reactive } from 'vue';
import Placeholder from '@/components-form-setting/base/Placeholder.vue';
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
  title: string
}

const props = defineProps<Props>()

</script>

<style scoped lang="scss">
.input {
  height: 48px;
  line-height: 48px;
  padding: 4px 10px;
  width: 360px;
  background: #f2f3f9;
  border: 1px solid #d9d9d9;
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
