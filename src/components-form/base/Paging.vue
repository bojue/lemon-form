<template>
  <div>
    <a-divider background="#e0e0e0" class="paging">
      <span class="pageNumber">
        {{ pagingValue }}
      </span>
    </a-divider>
    <div class="page-title border-radius" contenteditable="true" @input="changeValue($event, 'pageSubTitle')" ref="subTitle"></div>
    <div class="page-sub-description border-radius" contenteditable="true" @input="changeValue($event, 'pageSubDescription')" ref="subDescription"></div>
  </div>
 </template>
 <script setup lang="ts">
 import { ref, reactive, watch, onMounted } from 'vue'
 import { useSelectCompStore  } from '@/stores/selectCompStore'

 const subTitle = ref(null)
 const subDescription = ref(null)

  const compStore = useSelectCompStore()
 
 interface Props {
  pagingValue: string
  pageSubTitle: string 
  pageSubDescription: string
 }
 
 const props = defineProps<Props>()

 const changeValue = (event: any, params) => {
  const hasDataBool = event.target.innerText !== null &&  event.target.innerText !== '\n'
  if(!hasDataBool) {
    event.target.innerHTML = null
  } 
  const data = event.target.innerText
  if(params === 'pageSubTitle') {
    compStore.updateCurrentComp({
      pageSubTitle: data
    })
  } else if(params === 'pageSubDescription') {
    compStore.updateCurrentComp({
      pageSubDescription: data
    })
  }
}

onMounted(() => {
  subTitle.value.innerText = props.pageSubTitle  || null;
  subDescription.value.innerText = props.pageSubDescription || null
})
 
 </script>
 <style lang="scss" scoped>
 .border-radius {
  border-radius: 6px;
  border:1px solid #d9d9d9;
 }
 .paging {
  .pageNumber {
    border: 1px solid #e0e0e0;
    padding: 8px 18px;
    border-radius: 5px;
    color: #666666;
  }
}

.page-title, .page-sub-description {
  padding: 8px 12px;
  outline: none;
  font-size: 16px;
  color:#333333;
  border: 1px solid transparent; 
  &:hover, &:active {
    border: 1px solid #d9d9d9;
  }

  &:empty:before{ 
    content: '请输入分页标题'; 
    color: #b3b3b3; 
    font-weight: 200;
  } 

  &:focus:before {
    content: none;
  }
}
.page-title {
  font-weight: 500;
  height: 43px;
  line-height: 42px;
  padding: 0px 12px;
}

.page-sub-description {
  margin-top: 10px;
  font-size: 14px;
  color:#666666;
  &:empty:before{ 
    content: '请输入分页描述' ;
    color: #b3b3b3; 
  } 
  
}
::v-deep { 
    .ant-divider-with-text {
        color: #ccc;
        font-weight: 400 !important;
        font-size: 14px !important;
    }
  }
 </style>