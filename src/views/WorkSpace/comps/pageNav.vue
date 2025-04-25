
<template>
  <div class="nav-content">
    <div class="search">
      <a-input-search class="search-input" placeholder="请输入搜索内容"/>
    </div>
    <div class="user-profile">
      <span class="icon">{{ userNamePre }}</span>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, defineProps, onMounted, computed } from 'vue';
import { storageStore } from '@/stores/storage' 
import { SearchOutlined } from '@ant-design/icons-vue'

const webStorage = storageStore()

// const props = defineProps<any>()
const userName = ref<string>('用户')
const userNamePre = computed(() => userName?.value?.slice(0, 1)?.toUpperCase() || '用')
const getAuthInfo = () => {
  const authInfo =  webStorage.getWebStorage('AuthInfo')
  userName.value = authInfo?.userName 
}

onMounted(() => {
  getAuthInfo()
})

</script>

<style scoped lang="scss">
  .nav-content {
    height: 64px;
    line-height: 64px;
    font-weight: 500;
    font-size: 18px;
    color: #141a25;
    position: relative;
    display: flex;
    justify-content: space-between;

    .user-profile {
      position: absolute;
      right: 10px;
      .icon {
        display: inline-block;
        width: 36px;
        height: 36px;
        color: #2468f2;
        text-align: center;
        border-radius: 50%;
        background: rgba(20, 86, 240, 0.1);
        line-height: 36px;
        cursor: pointer;
      }
    }
  }
  .search {
    margin-top: 20px;
  }
  .search-input {
    width: 420px;
  }
</style>
