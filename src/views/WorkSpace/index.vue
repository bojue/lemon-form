<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink, useRouter } from 'vue-router'
import LogoComp from './../../components/Logo.vue'

const router = useRouter()

const toEditor = (item: any) => {
  const url = `${item.id}/form-editor`
  router.push(url)
}

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

<template>
  <div class="workspace">
    <div class="nav">
      <LogoComp/>
    </div>
    <div class="body">
      <div class="nav-data">
        <a-typography-title :level="4">我的表单</a-typography-title>
      </div>
      <div class="list-body">
        <div class="item" v-for="item in formList">
          <div class="form-item-body">
            <div class="icon">
              <img src="/src/assets/icon/form.svg"/>
            </div>
            <div class="data" @click="toEditor(item)" :title="item.name">
              <a-typography-title :level="5">{{item.name }}</a-typography-title>
              <a-typography-text type="secondary">{{ item.time }}</a-typography-text>
            </div>

            <span class="state">
              <a-tag :bordered="false" color="processing">{{ item.state }}</a-tag>
            </span>
          </div>
          <div class="des">
            <div class="count-item" v-for="countItem in countList">
              <a-typography-text>{{item[countItem.value] }}</a-typography-text>
              <a-typography-text class="label" type="secondary">{{countItem.label }}</a-typography-text>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.workspace {
  position:relative;
  display: block;
  width: 100%;
  height: 100%;
  background: linear-gradient(225deg,#ffffff,#f0f5ff);
}

.body {
  padding: 30px;
}

.list-body {
  position: relative;
  display: flex;
  flex-direction: row;
  .item {
    width: 340px;
    height: 168px;
    border-radius: 6px;
    padding: 30px 20px;
    margin-right: 10px;
    background: #fff;
    box-shadow: 0 0px 2px rgba(0, 0, 0, 0.12372549);
  }
}
.form-item-body {
  display: grid;
  grid-template-columns: 50px 1fr 60px;

  .icon {
    img {
      width: 36px;
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
    height: 60px;
    line-height: 60px;
    display: grid;
    grid-template-rows: 20px 1fr;
    text-align: center;

    .label {
      padding-top: 7px;
      font-size: 12px;
    }
  }
}
</style>
