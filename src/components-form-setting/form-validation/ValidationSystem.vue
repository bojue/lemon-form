
<template>
  <div class="setting-item h-50">
    <a-typography-text type="secondary" class="secondary">格式</a-typography-text>
    <a-select v-model:value="val" style="width: 120px" class="abs-r">
      <a-select-option :value="item.value" v-for="item in systemFormatList">{{ item.name }}</a-select-option>
    </a-select>
  </div>

</template>
<script lang="ts" setup>
import type { SizeType } from 'ant-design-vue/es/config-provider';
import { ref } from 'vue';
const size = ref<SizeType>('large');
const val = ref(null)
const formList = [{
  name: '手机号',
  value: 'phone'
}, {
  name: '数字',
  value: 'number'
},{
  name: '网站',
  value: 'website'
},{
  name: '身份证',
  value: 'idCard'
},{
  name: '邮件',
  value: 'email'
},{
  name: '正则',
  value: 'regular'
},]
const systemFormatList = ref(formList)

</script>
<style lang="scss" scoped>

</style>