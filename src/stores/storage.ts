import { ref, computed } from 'vue'
import { defineStore } from 'pinia'


export const storageStore = defineStore('storage', () => {
  


  const getWebStorage = (key: string) => {
    const data = localStorage.getItem(key)
    return data ? JSON.parse(data) : null
  }
  const setWebStorage = (key: string, value: any) => {
    localStorage.setItem(key, JSON.stringify(value))
  }

  return { 
    getWebStorage,
    setWebStorage
  }
})
