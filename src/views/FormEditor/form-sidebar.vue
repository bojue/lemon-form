<template>
  <div class="sidebar" >
    <div class="item" v-for="item in classifyList">
      <img class="icon" :src="item.icon" alt="">
      <div class="label">{{ item.label }}</div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, watch, reactive, computed } from 'vue'
import Icon from './comp-icon'

interface ClassifyType {
  label: string
  icon: any
  type: 'questionBank' | 'theme' | 'logic' | 'outline'
}

const classifyList = ref<ClassifyType[]>([{
  label: '题库',
  icon: Icon.Question,
  type: 'questionBank'
// }, {
//   label: '大纲',
//   icon: Icon.Outline,
//   type: 'outline'
// }, {
//   label: '逻辑',
//   icon: Icon.Logic,
//   type: 'logic',

},])



</script>

<style>
.sidebar {
  font-size: 12px;
  color: #314666;
}

.item {
  text-align: center;
  height: 50px;
  padding: 10px;
  display: block;
  .icon {
    width: 20px;
    display: inline-block;
  }

  .label {
    margin-top: 5px;
    height: 20px;
    line-height: 20px;
  }
}
</style>