import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useSelectCompStore = defineStore('compEvent', () => {
  const compConfig= ref({})

  // init组件配置
  const initCurrentComp = (comp: any) => {
    compConfig.value = {...comp}
  }

  // 更新组件
  const updateCurrentComp = (updateData: any) => {
    compConfig.value = {
      ...compConfig.value,
      ...updateData
    }
  }

  // 当前组件配置
  const currentCompConfig = computed(() => compConfig.value)

  // 获取当前组件
  const getCurrentCompConfig = () => {
    return currentCompConfig
  }


  return { 
    compConfig,
    currentCompConfig,
    initCurrentComp,
    updateCurrentComp,
    getCurrentCompConfig
  }
})
