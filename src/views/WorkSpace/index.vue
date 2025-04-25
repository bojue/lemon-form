
<template>
  <div class="workspace">
    <div class="body">
      <RouteComp/>
      <div class="page-content">
        <NavComp/>
        <router-view v-slot="{ Component }">
          <transition name="fade" mode="out-in">
            <component :is="Component" />
          </transition>
        </router-view>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink, RouterView,useRouter } from 'vue-router'
import NavComp from '@/views/WorkSpace/comps/pageNav.vue'
import RouteComp from '@/views/WorkSpace/comps/route.vue'



const router = useRouter()

const toEditor = (item: any) => {
  const url = `${item.id}/form-editor`
  router.push(url)
}

</script>

<style scoped lang="scss">
.workspace {
  position:relative;
  display: block;
  width: 100%;
  height: 100%;
  background: linear-gradient(225deg,#ffffff,#f0f5ff);
  overflow: hidden;
}

.body {
  padding: 0px;
  display: grid;
  grid-template-columns: 260px 1fr;
  height: 100%;
}

.side-bar {
  padding:20px 16px;
  background: #fafafa;
  height: 100%;
  border-right: 1px solid #e6e6e8;
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
      font-size: 18px;
      color: rgb(31, 35, 41);
      margin-left: 40px;
      position: absolute;
      top: 2px;
    }
  }

}

.page-content {
  padding: 0px 20px;
}

</style>
