<template>
  <div class="form-editor">
    <div class="nav-data">
      <div class="header">
        <div class="title-data">
          <span class="name">健康打卡登记表单</span>
          <a-typography-text type="secondary" class='time'>编辑于2024-11-03 09:12</a-typography-text>
        </div>
      </div>
    </div>

    <div class="content">
        <div class="comps">
          <div class="comp-category-item" v-for="compCategory in compList">
            <div class="category-title">
              {{ compCategory.name }}
            </div>
            <VueDraggable v-model="compCategory.children" :animation="150" ghostClass="ghost"
            :group="{ name: 'people', pull: 'clone', put: false }" :sort="false"
            class="flex flex-col gap-2 p-4 w-300px bg-gray-500/5 rounded compList">
            <div v-for="item in compCategory.children" :key="item.name" class="cursor-move h-50px bg-gray-500/5 item" v-bind:class="{
                'person': compCategory.type === 'Personal Component',
                'advanced': compCategory.type === 'Advanced Component',
                'layout': compCategory.type === 'Layout Component'
              }">
              {{ item.label }}
            </div>
          </VueDraggable>
          </div>

        </div>
        <div class="editor">
          <div class="form">
            <div class="form-header"></div>
            <div class="form-body">
              <VueDraggable v-model="pageCompList" :animation="150" group="people" ghostClass="ghost"
                class="flex flex-col gap-2 p-4 w-300px max-h-350px m-auto bg-gray-500/5 rounded overflow-auto form-body">
                <div v-for="item in pageCompList" 
                  class="cursor-move h-50px bg-gray-500/5 rounded p-3 form-item">
                  {{ item.name }}
                </div>
              </VueDraggable>
            </div>
          </div>
        </div>
        <div class="setting">

        </div>
      </div>
  </div>
</template>
<script setup lang="ts">
import { VueDraggable } from 'vue-draggable-plus'
import { ref } from 'vue'
import { CompListData} from './comp-list-data'

const compList = ref([...CompListData])
const pageCompList = ref(
  compList.value.map(item => ({
    name: `${item.name}-2`
  }))
)


const dyCreateComp = (type: string) => {
  console.log('type', type)
}
</script>

<style scoped>
.nav-data {
  height: 56px;
  line-height: 1;
  box-shadow: inset 0 -1px 0 #e7e7e7;
  padding: 0 50px;

  .title-data {
    display: flex;
    flex-direction: column;
    padding: 10px;
    font-size: 16px;
  }
}
.content {
  display: grid;
  grid-template-columns:200px 1fr 280px;
  padding: 20px;

  .category-title {
    font-weight: 700;
    color: rgba(0, 0, 0, .65);
    padding: 15px 0px 15px;
    font-size: 14px;
  }

  .compList {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 10px;

    .item {
      /* border: 1px solid #D7D9DC; */
      background: rgba(0, 102, 255, .08);
      height: 32px;
      line-height: 32px;
      text-align: left;
      padding: 0px 20px;
      border-radius: 5px;
      /* color: #141E31; */
      color: #314666;
      font-size: 12px;

      &.person {
        background: #E6F8F5;
      }
      &.advanced {
        background: rgba(255, 0, 0, .09);
      }
      &.layout {
        background: beige;
      }
    }
  }
}
</style>
