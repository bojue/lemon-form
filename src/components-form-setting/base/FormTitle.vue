
<template>
  <div class="setting-item h-42">
    <a-typography-text type="secondary" class="secondary">显示标题图片
    </a-typography-text>
    <a-space direction="vertical" class="abs-r switch-r ">
      <a-switch  v-model:checked="comp.titleImageShow" @change="changeValue($event, 'titleImageShow')" />
    </a-space> 
  </div>
    <a-typography-text type="secondary" class="block-title">标题图片</a-typography-text>
  <a-input 
    class="mb-10"
    placeholder="请输入图片URL" 
    v-model:value="comp.titleImageUrl"
    @Input="handleChangeInput($event, 'titleImageUrl')"
    :maxlength="100"
  ></a-input>

  <a-typography-text type="secondary" class="block-title">表单标题</a-typography-text>
  <a-input 
    class="mb-10"
    placeholder="请输入标题文字（最多30个字）" 
    v-model:value="comp.titleValue"
    @Input="handleChangeInput"
    :maxlength="30"
  ></a-input>

    <div class="setting-item h-50">
    <a-typography-text type="secondary" class="block-title2">标题大小</a-typography-text>
    <a-select v-model:value="comp.titleSize" style="width: 120px" class="abs-r" @change="changeSelect">
      <a-select-option :value="item.value" v-for="item in orientationList">{{ item.name }}</a-select-option>
    </a-select>
  </div>

    <div class="setting-item h-42 ">
    <a-typography-text type="secondary" class="secondary">显示标题描述
    </a-typography-text>
    <a-space direction="vertical" class="abs-r switch-r">
      <a-switch  v-model:checked="comp.titleDescriptionShow" @change="changeValue($event, 'titleDescriptionShow')" />
    </a-space> 
  </div>
  <a-typography-text type="secondary" class="block-title">标题描述</a-typography-text>
    <a-textarea 
    class="mb-10 m-b-10"
    placeholder="请输入描述" 
    allow-clear 
    show-count
    v-model:value="comp.titleDescription"
    @Input="handleChangeInput($event, 'titleDescription')"
    :auto-size="{ minRows: 2, maxRows: 5 }"
    :maxlength="200"
  ></a-textarea>
  <div class="setting-item h-50">
    <a-typography-text type="secondary" class="block-title2">位置</a-typography-text>
    <a-select v-model:value="comp.titleDescriptionPosition" style="width: 120px" class="abs-r" @change="changeSelect($event, 'titleDescriptionPosition')">
      <a-select-option :value="item.value" v-for="item in positionList">{{ item.name }}</a-select-option>
    </a-select>
  </div>

</template>
<script lang="ts" setup>
import { defineProps,watch, computed, defineEmits, ref, onMounted }  from 'vue'
import { useSelectCompStore  } from '@/stores/selectCompStore'
import Description from '@/components-form-setting/base/Description.vue';
import { optionData, textOrButtonSizeData } from '../setting-config-data';

const compStore: any = useSelectCompStore()
const orientationList = ref([...textOrButtonSizeData])

const positionList = ref([...optionData])

const handleChangeInput = (event: any, params?: string) => {
  const data = event.target.value 
  compStore.updateCurrentComp({
    [params || 'titleValue']: data
  })
}

const changeSelect = (event: any, param?: string) => {
  const data = event
  compStore.updateCurrentComp({
    [param || 'titleSize']: data
  })
}

const changeValue = (event: any, param?: string) => {
  const data = event
  compStore.updateCurrentComp({
    [param || 'buttonIconShowBool']: data
  })
}


interface Props{
  comp: any
}

const props = defineProps<Props>()

</script>
<style lang="scss" scoped>

.comp {
  padding: 10px;
  color: yellowgreen;
}

.mb-10 {
  margin-top: 4px;
  margin-bottom: 5px;
}

.h-42 {
  height: 42px;
  line-height: 42px;
}

.m-b-10 {
  margin-bottom: 20px;
}

</style>