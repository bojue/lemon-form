<template>
  <div>
    <a-divider background="#e0e0e0" class="paging">
      <span class="pageNumber">
        {{ pagingValue }}
      </span>
    </a-divider>
    <div class="page-title" contenteditable="true" @blur="changeValue($event)">

    </div>
    <div class="page-sub-title" contenteditable="true" @blur="changeValue($event)">

    </div>
  </div>
 </template>
 <script setup lang="ts">
 import { ref, reactive } from 'vue'
 
 interface Props {
  pagingValue: string
 }
 
 const props = defineProps<Props>()

 const changeValue = (event: any) => {
  const hasDataBool = event.target.innerText !== null &&  event.target.innerText !== '\n'

  console.log(hasDataBool, event.target.innerText)
  if(!hasDataBool) {
    event.target.innerHTML = null
  }
}
 
 </script>
 <style lang="scss" scoped>
 .paging {
  .pageNumber {
    border: 1px solid #e0e0e0;
    padding: 4px 18px;
    border-radius: 5px;
  }
}

.page-title, .page-sub-title {
  padding: 8px 12px;
  outline: none;
  font-size: 16px;
  color:#333333;
  border: 1px solid transparent;
  &:hover, &:active {
    border: 1px solid #eaeaea;
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

.page-sub-title {
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