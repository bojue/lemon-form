
<template>
  <div class="side-bar">
    <div class="nav-icon">
      <span class="icon">
        <LogoIcon :size="30"/>
      </span>
      <span class="title">柠檬轻表单</span>
    </div>
    <div class="nav-data">
      <router-link 
        v-for="item in workspaceNavList" 
        :key="item.route"
        :to="item.route"
        class="nav-item"
      >
      <img class="img-icon" :src="item.icon" alt="">
      <span class="name"> {{ item.title }}</span>
      </router-link>
      <div class="nav-item storage">
        <img :src="Storage" alt="">
        <span class="name">存储空间</span>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink,useRouter } from 'vue-router'
import Home from '@/assets/form-editor/home.svg'
import LogoIcon from '@/components/logoIcon.vue'
import Collection from '@/assets/form-editor/collcetion.svg'
import Delete from '@/assets/form-editor/delete.svg'
import Folder from '@/assets/form-editor/folder.svg'
import Storage from '@/assets/form-editor/storage.svg'
import Template from '@/assets/form-editor/template.svg'



const workspaceNavList = [{
  title: '主页',
  icon: Home,
  route: '/workspace'
},{
  title: '我的空间',
  icon: Folder,
  route: '/workspace/me'
},
{
  title: '模版库',
  icon: Template,
  route: '/workspace/template'
},
{
  title: '收藏',
  icon: Collection,
  route: '/workspace/favorites'
},{
  title: '回收站',
  icon: Delete,
  route: '/workspace/recycle'
}]

</script>

<style scoped lang="scss">


.side-bar {
  padding:20px 16px;
  background: #fafafa;
  height: 100%;
  .nav-icon {
    position: relative;
    height: 36px;
    line-height: 36px;
    margin-bottom: 40px;
    .icon {
      font-size: 26px;
      position: absolute;
      left: 0;
      top: 0px;
    }
    .title {
      font-weight: 500;
      font-size: 16px;
      color: rgb(31, 35, 41);
      margin-left: 40px;
      position: absolute;
      top: -9px;
    }
  }
}

.storage {
    img {
      width: 20px;
      filter: grayscale(1);
    }
    border-top: 1px solid rgb(222, 224, 227);
    width: 228px;
    position: absolute !important;
    bottom: 0;
    line-height: 40px;
    height: 40px;
    font-size: 14px;
    .name {
      font-weight: 400;
      padding: 0 10px;
    }
  }

.nav-data {
  color: rgb(31, 35, 41);
  font-weight: 500;
  font-size: 14px;
  .nav-item {
    position: relative;
    display: block;
    height: 40px;
    line-height: 40px;
    padding: 0 20px;
    border-radius: 5px;
    text-decoration: none;
    cursor: pointer;
    color: #1f2329;
    &.router-link-exact-active {
      .img-icon {
        filter: grayscale(0);
      }
      &::after {
        content: '>';
        position: absolute;
        right: 10px;
        border-radius: 50%;
        font-size: 15px;
      }
    }
    &:hover, &.router-link-exact-active  {
      background: rgba(20, 86, 240, 0.1);
      color: rgb(20, 86, 240);
    }
    .img-icon {
      filter: grayscale(1);
      width: 18px;
    }
    .name {
      padding: 2px 8px;
    }
  }

}

</style>
