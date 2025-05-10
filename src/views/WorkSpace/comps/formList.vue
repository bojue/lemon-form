
<template>
<div class="list-body">
  <template v-if="type === 'template'">
    <NoData/>
  </template>
  <template v-else>
    <div class="item" v-for="item in formList">
    <div class="form-item-body">
      <div class="icon">
        <img src="/src/assets/icon/form.svg"/>
      </div>
      <div class="data" @click="toEditor(item)" :title="item.name">
        <a-typography-title class="label-text" :level="5">{{item.name }}</a-typography-title>
        <!-- Mock数据使用当前时间 -->
        <a-typography-text type="secondary">{{ getCurrentTime() }}</a-typography-text>
      </div>

      <span class="state">
        <a-tag :bordered="false" color="processing">{{ item.state }}</a-tag>
      </span>
    </div>
    <div class="des">
      <div class="count-item" v-for="(countItem, index) in countList" >
        <a-typography-text class="label" type="secondary">{{countItem.label }}</a-typography-text>
        <span class="data-val">{{ defCount || '-' }}</span>
      </div>
    </div>
  </div>
  </template>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink, useRouter } from 'vue-router'
import { getCurrentTime  } from '@/utils/currentTime'
import Home from '@/assets/form-editor/home.svg'
import Collection from '@/assets/form-editor/collcetion.svg'
import Delete from '@/assets/form-editor/delete.svg'
import Folder from '@/assets/form-editor/folder.svg'
import Storage from '@/assets/form-editor/storage.svg'

import NoData from '@/components/NoData.vue'

interface Props {
  type?: 'template'
}

const props = defineProps<Props>()
const defCount = ref(42)

const router = useRouter()

const toEditor = (item: any) => {
 const url = `/${item.id}/form-editor`
 router.push(url)
}

const workspaceNavList = [{
 name: '主页',
 icon: Home,
 route: 'workspace'
},{
 name: '我的空间',
 icon: Folder,
 route: 'workspace/me'
},{
 name: '收藏',
 icon: Collection,
 route: 'workspace/favorites'
},{
 name: '回收站',
 icon: Delete,
 route: 'workspace/recycle'
}]

const formList = ref([{
 id:1,
 name: "会员申请表",
 state: "待发布",
 time: '编辑于 2024-10-01 12:23',
 show_count: 100,
 commit_count: 22,
 today_add_count: 12,
}, {
 id:2,
 name: "会员申请表",
 state: "待发布",
 time: '编辑于 2024-10-01 12:23',
 show_count: 100,
 commit_count: 22,
 today_add_count: 12,
},{
 id:3,
 name: "会员申请表",
 state: "待发布",
 time: '编辑于 2024-10-01 12:23',
 show_count: 100,
 commit_count: 22,
 today_add_count: 12,
}, {
 id:4,
 name: "会员申请表",
 state: "待发布",
 time: '编辑于 2024-10-01 12:23',
 show_count: 100,
 commit_count: 22,
 today_add_count: 12,
}])

const countList = ref([{
 label:'浏览数',
 value: 'show_count'
},{
 label:'提交数',
 value: 'commit_count'
},{
 label:'今日新增',
 value: 'today_add_count'
}])
</script>

<style scoped lang="scss">

.list-body {
 position: relative;
 display: flex;
 flex-direction: row;
 flex-wrap: wrap;
 padding: 20px 0;
 .item {
   max-width: 340px;
   height: 168px;
   border-radius: 6px;
   padding: 30px 20px;
   margin-right: 10px;
   background: #fff;
   box-shadow: 0 0px 2px rgba(0, 0, 0, 0.12372549);
   margin-bottom: 10px;
 }
}
.form-item-body {
 display: grid;
 grid-template-columns: 50px 1fr 60px;

 .icon {
   img {
     width: 40px;
   }
 }
 .data {
   cursor: pointer;
 }
}
.des {
 display: grid;
 grid-template-columns: 1fr 1fr 1fr;
 .count-item {
   margin-top: 20px;
   height: 45px;
   line-height: 45px;
   display: grid;
   grid-template-rows: 20px 1fr;
   text-align: center;

   .label {
     padding-top: 7px;
     font-size: 12px;
    //  color:#151b26;
   }
   .data-val {
      color: #151b26;
      font-size: 13px;
   }
 }
}
.label-text {
  color: #141a25;
  font-weight: 400;
  text-align: left;
}

</style>
