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
            <VueDraggable v-model="compCategory.children" :animation="150" 
            :group="{ name: 'people', pull: 'clone', put: false }" 
            :sort="false"
            :clone="onClone" 
            class="flex flex-col gap-2 p-4 w-300px bg-gray-500/5 rounded compList">
            <div v-for="item in compCategory.children" :key="item.name" class="cursor-move h-50px bg-gray-500/5 item" 
              v-bind:class="{
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
           <div class="body">
            <div class="form-header">
              <div class="header-img"> <img src="/src/assets/background/bg.png"/></div>
              <div class="title" >
                <div class="title-val">每日健康打开表单</div>
              </div>
              <div class="description">
                <div class="description-value">
                  为了你的健康，希望你每天定时打卡登记，感谢你的参与！
                </div>
              </div>
            </div>
            <div class="form-body">
              <VueDraggable 
                v-model="pageCompList" 
                :animation="150" 
                group="people" 
                ghostClass="ghost"
                class="flex flex-col gap-2 p-4 w-300px max-h-350px m-auto bg-gray-500/5 rounded overflow-auto form-body">
                <div v-for="(item, index) in pageCompList"  
                  class="cursor-move h-50px bg-gray-500/5 rounded p-3 form-item">    
                  <FormComponent :component="item" :type="item.type" :lineNumber="(index + 1 >= 10 ? (index + 1) + '' : ('0' + (index + 1)))"></FormComponent>
                </div>
              </VueDraggable>
            </div>
           </div>
          </div>
        </div>
        <CompSetting></CompSetting>
      </div>
  </div>
</template>
<script setup lang="ts">
import { VueDraggable } from 'vue-draggable-plus'
import { ref } from 'vue'
import { v4 as uuidv4  } from 'uuid'
import { CompListData} from './comp-list-data'
import CompSetting from '@/views/FormEditor/FormSetting.vue'
import FormComponent from '@/components-form/index.vue'

const compList = ref([...CompListData])
const pageCompList = ref([])


function onClone(element: any) {
  const item = {
    ...element.value,
    id: element.id || uuidv4(),
    title: element.name,
    type: element.type
  }
  return {...item}
}

const dyCreateComp = (type: string) => {
  console.log('type', type)
}
</script>

<style scoped>

.form-editor {
  height: 100%;
  overflow: hidden;
}
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
  grid-template-columns:270px 1fr 340px;
  padding: 0 20px;
  height: calc(100% - 86px);

  .category-title {
    font-weight: 700;
    color: rgba(0, 0, 0, .65);
    padding: 15px 0px 15px;
    font-size: 14px;
  }

  .comps {
    padding:0 30px 0 10px;
  }
  .compList {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 10px;
    margin-bottom: 15px;

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

  .editor {
    background: #1F1F1F;
    height: 100%;
    margin: 0;
    padding: 0;
  }
  .body {
    /* background-size: 20px 20px, 20px 20px, 100px 100px, 100px 100px;
    background-image: linear-gradient(rgba(200,205,208,.2) 1px,transparent 0),linear-gradient(90deg,rgba(200,205,208,.1),1px,transparent 0),linear-gradient(rgba(200,205,208,.1) 1px,transparent 0),linear-gradient(90deg,rgba(200,205,208,.1) 1px,transparent 0); */
    height: 100%;
    border-radius: 6px;
    /* padding: 20px; */

    .form-header {
      padding: 0;
      img {
        width: 100%;
        height: 250px;
        border-top-left-radius: 6px;
        border-top-right-radius: 6px;
      }

      .title {
        text-align: center;
        font-size: 18px;
        color: rgba(0, 0, 0, 0.8);
        font-weight: 600;
        margin-top: 40px;
        margin-bottom: 10px;
      }

      .description {
        font-size: 14px;
        text-align: center;
        color: rgba(0, 0, 0, 0.8);
        margin: 10px;
      }
    }
  }
  .form {
    margin: 30px;
    background: #fff;
    height: calc(100% - 50px);
    border-radius: 6px;
  }
}
</style>
