import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { authLogin, authRegister } from '@/apis/auth'
import { storageStore  } from './storage'

interface AuthInfo {
  token: string
  userId: string
  userName: string  
}

export const useAuthStore = defineStore('auth', () => {
  const webStorage = storageStore()
  
  // 当前表单
  const authInfo = ref<AuthInfo>({
    token: '',
    userId: '',
    userName: ''
  })


  // 当前组件配置
  const currentAuthInfo = computed(() => authInfo.value)
  const currentToken = computed(() => authInfo.value.token)
  // 获取当前组件
  const login = async (info: any) => {
    const result: any = await authLogin(info)
    const {
      token,
      username,
    } = result?.data || {}

    console.log('data',result)
    authInfo.value.token = token
    authInfo.value.userName = username
    webStorage.setWebStorage('AuthInfo', authInfo.value)
    return result
  }

  const register = async (info: any) => {
    const data = await authRegister(info)
    return data
  }
  

  return { 
    login,
    register
  }
})
