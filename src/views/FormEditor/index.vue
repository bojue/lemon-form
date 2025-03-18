<template>
  <div class="form-editor">
    <div class="nav-data">
      <div class="header">
        <div class="title-data">
          <span class="name">Vue动态表单</span>
          <a-typography-text type="secondary" class='time'>编辑于2024-11-03 09:12</a-typography-text>
        </div>
      </div>
    </div>

    <div class="content editor-content">
      <div class="sidebar">

      </div>
      <div class="comps">
        <div class="comp-category-item" v-for="compCategory in compList">
          <div class="category-title">
            {{ compCategory.name }}
            <a-tooltip placement="top" v-if="compCategory.tooltip">
              <template #title>
                <span>{{ compCategory.tooltip }}</span>
              </template>
              <QuestionCircleOutlined />
          </a-tooltip>
          </div>
          <VueDraggable v-model="compCategory.children" :animation="0"
            :group="{ name: 'sevenBotForm', pull: 'clone', put: false }" :sort="false" :clone="onClone"
            class="flex flex-col gap-2 p-4 w-300px bg-gray-500/5 rounded compList">
            <div v-for="item in compCategory.children" class="cursor-move h-50px bg-gray-500/5 item" v-bind:class="{
              'person': compCategory.type === 'Personal Component',
              'advanced': compCategory.type === 'Advanced Component',
              'layout': compCategory.type === 'Layout Component'
            }">
              <img class="icon" :src="item.icon" alt="" v-if="item.icon">
              {{ item.label }}
            </div>
          </VueDraggable>
        </div>
      </div>
      <div class="editor">
        <div class="preview-control" title="预览" @click="preview">
                <img :src="Icon.Preview" alt="">
                <div class="label">
                  预览
                </div>
              </div>
        <div class="form" v-bind:class="{
          'no-data': !pageCompList.length
        }">
          <div class="body">
    
            <div class="form-header">
              <!-- <div class="header-img"> <img src="/src/assets/background/bg.png"/></div> -->
              <!-- <div class="title" >
                <div class="title-val">每日健康打开表单</div>
              </div>
              <div class="description">
                <div class="description-value">
                  为了你的健康，希望你每天定时打卡登记，感谢你的参与！
                </div>
              </div> -->
            </div>
            <div class="form-body form-body-content">
              <VueDraggable v-model="pageCompList" :animation="150" group="sevenBotForm" ghostClass="ghost"
                handle=".handle"
                class="flex flex-col gap-2 p-4 w-300px max-h-350px m-auto bg-gray-500/5 rounded overflow-auto form-body">
                <template v-if="!pageCompList.length">
                  <div v-if="!pageCompList.length" @dragenter="handleDragHandle" @mouseleave="handleDragHandle"
                    @dragleave="handleDragHandle">
                    <div class="no-data-content" :class="[{
                      'dragenter': noDataContentRef === 'dragenter',
                    }]">
                      <!-- <span class="text" v-if="noDataContentRef === 'dragenter'">
                        鼠标释放，即可完成创建
                      </span> -->
                      <span class="text" :class="{
                        'has-data': pageCompList.length
                      }">
                        点击左侧题目 / 拖拽题目到此区域
                      </span>

                    </div>
                  </div>
                </template>

                <template v-else>
                  <div v-for="(item, index) in pageCompList" :key="item?.name" :class="{
                    'cursor-move': true,
                    'form-item': true,
                    'active-comp': activeComp.id == item?.id
                  }" @click="selectComp(item)">
                    <FormComponent :key="item?.id + pageCompList.length" @compControl="compControl"
                      @addItem="addItem($event, item, index)" :component="item" :formConfig="selectForm"
                      :type="item?.type" :isDev="isFormEditorDevBool" :selectedComp="getActiveComp()"></FormComponent>
                  </div>
                </template>
              </VueDraggable>
      
            </div>

            <div class="form-footer" @click="selectComp(pageFooter)" :class="{
              'form-item': true,
              'active-comp': activeComp.id == pageFooter?.id
            }" :style="{
              textAlign: pageFooter.position
            }">
              <a-button v-if="pageFooter.buttonIconShowBool" class="submit" type="primary" :icon="h(CheckOutlined)" :size="pageFooter.size"
                :style="{ 'padding': getSize(), 'lineHeight': getLineheight() }">
                {{ pageFooter.buttonText || '提交' }}
              </a-button>
              <a-button v-else class="submit" type="primary" :size="pageFooter.size"
                :style="{ 'padding': getSize(), 'lineHeight': getLineheight() }">
                {{ pageFooter.buttonText || '提交' }}
              </a-button>
            </div>
          </div>
        </div>

      </div>
      <CompSetting  v-if="activeComp.id" :key="activeComp.id + updateCompKey" :selectForm="selectForm"
        :selectComp="getActiveComp()"></CompSetting>
    </div>
  </div>
  <PreviewPage 
    :open="openDraw" 
    :pageCompList="pageCompList"
    :pageFooter="pageFooter"
    @onClose="onClose"></PreviewPage>


</template>
<script setup lang="ts">
import { VueDraggable } from 'vue-draggable-plus'
import { computed, h, onMounted, reactive, ref, watch, } from 'vue'
import { v4 as uuidv4 } from 'uuid'
import { CompListData, CompType, IgnoreLineNumberTypeList } from './comp-data'
import CompSetting from '@/views/FormEditor/form-setting.vue'
import PreviewPage from '@/views/Preview/index.vue'
import FormComponent from '@/components-form/index.vue'
import { getDefaultConfig } from '@/views/FormEditor/comp-config-data';
import { useSelectCompStore } from '@/stores/selectCompStore'
import { useRoute, createRouter } from 'vue-router';
import { CheckOutlined } from '@ant-design/icons-vue';
import { message } from 'ant-design-vue';


import * as _ from 'lodash'
import Icon from './comp-icon'

interface ActiveCompType {
  type: 'component' | 'header'
  id: string
}

const openDraw = ref(false)
const compList = ref([...CompListData]) // 来源组件列表

/**
 * 编辑器编辑内容
 * 1. pageHeader // 底部配置
 * 2. pageCompList // 页面组件
 * 3. pageFooter // 底部提交按钮配置
 */

const getSize = () => {
  const data = pageFooter?.value
  return data?.size == 'large' ? "0 26px" : (data?.size == "small" ? "0 10px" : "0 16px")
}

const getLineheight = () => {
  const data = pageFooter?.value
  return data?.size == 'large' ? "40px" : (data?.size == "small" ? "24px" : "32px")
}

const pageHeader = ref({}) // 顶部
const pageCompList = ref([]) // 页面组件内容
const pageFooter = ref({}) // 底部

const currentComp = ref()
const updateCompKey = ref()
const noDataContentRef = ref()
const activeComp = ref<ActiveCompType>({
  type: 'component',
  id: '',
}) // 当前选中组件

const selectForm = ref()

const defaultFormConfig = {
  displayNumberSort: true,
  displayDescription: true
}

onMounted(() => {
  useCompStore.initGlobalFormConfig({ ...defaultFormConfig })

  // 组件初始化
  pageFooter.value = getDefaultConfig(CompType.button)
  pageFooter.value.id = uuidv4()

})

const useCompStore = useSelectCompStore()
const isFormEditorDevBool = computed(() => {
  const bool = useRoute().path.includes('form-editor')
  return bool
})


const initDataState = () => {
  noDataContentRef.value = ''
}


// 更新选中组件数据
const updateCompByChange = (compConfig: any) => {
  currentComp.value = compConfig
  const index = getActiveCompIndex()
  if (index > -1 && pageCompList.value.length) {
    pageCompList.value[index] = { ...pageCompList.value[index], ...compConfig }
  }
}
const currentCompKeyData = computed(() => useCompStore.currentCompKey)

watch(currentCompKeyData, (newValue) => {
  updateCompKey.value = newValue
})


watch([() => useCompStore.compConfig, () => useCompStore.currentGlobalFormConfig], ([compConfig, currentGlobalFormConfig]) => {
  updateCompByChange({
    ...compConfig,
  })
  selectForm.value = currentGlobalFormConfig
})


const updateCompLineNumber = () => {
  if (Array.isArray(pageCompList.value)) {
    let lineNumber = 0
    let pageCount = _.filter(pageCompList.value, {
      type: CompType.paging
    })?.length
    let pageNumber = 0
    _.map(pageCompList.value, (item: any) => {
      const isIgnoreTypeBool = IgnoreLineNumberTypeList.includes(item.type)
      const isPageTypeBool = CompType.paging === item.type
      if (!isIgnoreTypeBool) {
        lineNumber++
        item.lineNumber = lineNumber && lineNumber.toString()?.length === 1 ? '0' + lineNumber : lineNumber
      }
      if (isPageTypeBool) {
        pageNumber++
        item.pagingValue = `第 ${pageNumber} 页 / 共 ${pageCount} 页`
      }
    })
  }
}

watch(pageCompList, (newValue) => {
  pageCompList.value = newValue
  updateCompLineNumber()
})


const onClone = (element: any) => {
  const defaultComp: any = getDefaultConfig(element.type)
  const item = {
    ...defaultComp,
    ...element.value,
    id: element.id || uuidv4(),
    title: element.name,
    type: element.type,
    name: element.name
  }
  return { ...item }
}


const selectComp = (item: any) => {
  useCompStore.initCurrentComp({
    ...item
  })
  activeComp.value.id = item.id
}

const updateDataListIndex = (index: number) => {
  if (index > -1 && Array.isArray(pageCompList.value[index]?.dataList)) {
    _.map(pageCompList.value[index].dataList, (item: any, index: number) => {
      item._index = index
    })
  }
}

const addItem = (type: 'new' | 'other', item: any, index: number) => {
  const isNewBool = type === 'new'
  const isOtherBool = type === 'other'
  const newDataItem = isNewBool ? {
    label: '选项',
    value: '选项',
  } : {
    subType: 'other',
    label: '其他',
    value: '',
  }
  if (['new', 'other'].includes(type)) {
    pageCompList.value[index].dataList.push(newDataItem)
  }

  updateDataListIndex(index)
  initDataState()
}



const deleteSuccess = (compName = '') => {
  message.success(`【${compName}】删除成功！`, 1);
};

const compControl = (controlType: string, value: any) => {
  const index = _.findIndex(pageCompList.value, (item: any) => item.id === value.id)
  if (index === -1) {
    console.log("没有查询到组件！！！")
    return
  }
  if (controlType === 'copy') {
    const newComp: any = {
      ...value,
      id: uuidv4()
    }
    pageCompList.value.splice(index + 1, 0, { ...newComp })
  }
  if (controlType === 'delete') {
    const deleteComp =  pageCompList.value.splice(index, 1)
    activeComp.value.id = pageCompList.value[index - 1]?.id
    deleteSuccess(deleteComp?.[0]?.name)
  } 
  initDataState()
  updateCompLineNumber()
}

const getActiveComp = () => {
  // 组件列表
  const item = _.filter(pageCompList.value, (item: any) => item.id === activeComp.value.id)?.[0]
  if (item) {
    return item
  }
  if (activeComp.value.id === pageFooter.value.id) {
    return pageFooter.value
  }
}

const getActiveCompIndex = () => {
  return _.findIndex(pageCompList.value, (item: any) => item.id === activeComp.value.id)
}


const handleDragHandle = (e: any) => {
  e.preventDefault()
  const { type } = e
  noDataContentRef.value = type
}

const preview = () => {
  openDraw.value = true
}

const onClose = () => {
  openDraw.value = false
}
</script>

<style scoped lang="scss">
.icon {
  width: 16px;
  height: 16px;
  margin-top: -4px;
}

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

.editor-content {
  display: grid;
  grid-template-columns:56px 270px 1fr 260px;
  padding: 0 0 0 0px;
  height: calc(100% - 86px);
  @media(max-width: 1480px) {
    grid-template-columns:56px 220px 1fr  220px;
    overflow-x: auto;
    .form {
      width: auto ;
    }
  }
  @media(max-width: 1180px) {
    grid-template-columns:56px 270px 1fr;
    overflow-x: auto;
    .form {
      width: auto ;
    }
  }
}

.content {

  /* background-image: url(/src/assets/form-editor/bg-body.png); */

  .category-title {
    font-weight: 700;
    color: rgba(0, 0, 0, .65);
    padding: 15px 0px 15px;
    font-size: 14px;
    user-select: none;
  }

  .comps {
    padding: 0 30px 0 20px;
    background: #fafafa;
  }

  .compList {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 10px;
    margin-bottom: 15px;
    user-select: none;

    .item {
      /* border: 1px solid #D7D9DC; */
      /* background: rgba(0, 102, 255, .08); */
      height: 32px;
      line-height: 32px;
      text-align: left;
      padding: 0px 2px 0 10px;
      border-radius: 5px;
      /* color: #141E31; */
      color: rgba(0, 0, 0, 0.45);
      font-size: 15px;
      border: 1px solid #ebebeb;
      background: #fff;

      /* &.person {
        background: #E6F8F5;
      }
      &.advanced {
        background: linen ;
      }
      &.layout {
        background: beige;
      } */
    }
  }

  .editor {
    position: relative;
    /* background: lavender; */
    height: 100%;
    margin: 0;
    padding: 0;
    overflow-y: auto;
    background-image: url(./bg.png);
    background-repeat: round;
  }

  .body {
    /* background-size: 20px 20px, 20px 20px, 100px 100px, 100px 100px;
    background-image: linear-gradient(rgba(200,205,208,.2) 1px,transparent 0),linear-gradient(90deg,rgba(200,205,208,.1),1px,transparent 0),linear-gradient(rgba(200,205,208,.1) 1px,transparent 0),linear-gradient(90deg,rgba(200,205,208,.1) 1px,transparent 0); */
    height: 100%;
    border-radius: 6px;
    padding: 20px;
    background: #ffffff;



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
    margin: 10px 30px;
    /* background: #fff; */
    min-height: calc(100% - 10px);
    border-radius: 0px;
    width: 700px;
    position: absolute;
    transform: translateX(-50%);
    margin-left: 50%;
    display: grid;
    padding-bottom: 10px;

    .sortable-chosen:not(.active-comp){
      background: aliceblue;
      border-radius: 4px;
      border:1px dashed #94b4ff;
      width: calc(100% - 0px);
      padding: 48px 50px;
      text-align: center;
      margin: 2px 0;
      z-index: 0;
    }

    &.no-data {
      .sortable-chosen {
        margin: 2px;
        width: calc(100% - 4px);
      }
    }

  }

  .form-item {
    position: relative;
    background: #fff;
  }



  .active-comp {
    /* background: mintcream; */
    /* border-left: 6px solid red;
    border-color: teal; */
    /* background: aliceblue; */
    /* border-bottom: 1px dashed #ccc;
    border-top: 1px dashed #ccc; */
    /* border: 1px dashed #1677ff; */
    /* background: lightyellow; */
    background:aliceblue;
    /* darkseagreen; */
    border-radius: 5px;
    position: relative;
    box-shadow: 0px 4px 16px 4px rgba(31, 35, 41, 0.03), 0px 4px 8px 0px rgba(31, 35, 41, 0.02), 0px 2px 4px -4px rgba(31, 35, 41, 0.02);
    border: 1px dashed #94b4ff;

    &::before {
      content: '';
      /* border: 4px solid teal; */
      height: 100%;
      display: block;
      width: 4px;
      /* background: teal; */
      /* background: cornflowerblue; */
      /* background: #1677ff; */
      height: 100%;
      position: absolute;
    }
  }

  .no-data-content {
    border: 1px dashed #cdcdcd;
    text-align: center;
    border-radius: 4px;
    color: #666;
    padding: 50px 100px;
    position: absolute;
    top: 20px;
    width: calc(100% - 40px);


    &:hover,
    &.dragenter {
      border-color: #1677ff;
      color: #1677ff;
      z-index: 1000;
    
    }

  }

  .form-body-content {
    min-height: 120px;
  }

  .form-footer {
    height: 90px;
    line-height: 90px;
    padding: 0 60px;
    width: 100%;
    margin-top: 10px;

  }

  ::v-deep(.form-footer) {
    .submit {
    
      max-width: 100%;
      white-space: nowrap;
      /* 不换行 */
      overflow: hidden;
      /* 隐藏超出部分 */
      text-overflow: ellipsis;
      /* 显示省略号 */
    }
  }
}

.preview-control {
  position: fixed;
  box-shadow: 0 0 6px rgba(0,0,0,.08);
  color: #666;
  width: 50px;
  height: 55px;
  top: 0;
  text-align: center;
  font-size: 14px;
  padding: 5px 4px;
  background: #fff;
  border-radius: 5px;
  cursor: pointer;
  border: 1px solid #fff;
  transform: translateX(388px);
  left: 50%;
  top: 66px;
  img {
    width: 24px;
    height: 24px;
  }
  .label {
    font-size: 12px;
    padding-top: 5px;
  }
  &:hover {
    color: #1677ff;
    background: #fafafa;
  }
}

::v-deep(.ant-drawer-bottom>.ant-drawer-content-wrapper)   {
  height: calc(100% - 150px) !important;
  background: red;

}

.has-data {
  background: red !important;
}

</style>
