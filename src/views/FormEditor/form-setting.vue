<template>
  <div class="setting" >
    <div class="comp-name">
      <a-typography-title :level="5">
        {{ selectComp?.title }} 
      </a-typography-title>
    </div>
    <div class="setting-base">
      <div class="category-name">
        基础设置
      </div>
      <div class="content m-b-0">
        <Title v-if="showParams('name')" :comp="selectComp" :key="selectComp._selectedId "/>
        <Description v-if="showParams('description')" :comp="selectComp" :key="selectComp._selectedId "/>
        <PageSubTitle v-if="showParams('pageSubTitle')"  :comp="selectComp" :key="selectComp._selectedId "/>
        <PageSubDescription v-if="showParams('pageSubTitle')" :comp="selectComp" :key="selectComp._selectedId "/>
        <Placeholder v-if="showParams('placeholder')" :comp="selectComp" :key="selectComp._selectedId "/>
        <RangePlaceholder v-if="showParams('rangePlaceholder')" :comp="selectComp" :key="selectComp._selectedId "/>
        <LayoutType v-if="showParams('layoutType')" :comp="selectComp"/>
        <DividerText v-if="showParams('dividerValue')" :comp="selectComp" ></DividerText>
        <DividerBorderType v-if="showParams('dividerValue')" :comp="selectComp"></DividerBorderType>
        <RateConfig v-if="selectComp.type=== 'Rate'" :comp="selectComp" />
      </div>
      <div class="category-name">
        表单验证 
      </div>
      <div class="content">
        <NumberConfig v-if="showParams('maxValue')" :comp="selectComp"/>
        <Required v-if="showParams('isRequired')" :comp="selectComp"/>
        <ValidationSystem v-if="showRegParams()" :comp="selectComp"/>
        <ValidationCustom v-if="showParams('isCustomErrorMessage')" :comp="selectComp" />
        <CustomText v-if="selectComp?.isCustomErrorMessage" :comp="selectComp"/>
      </div>
      <div class="category-name">
        全局表单配置
      </div>
      <div class="content">
        <DisplaySerialNumber :form="selectForm"/>
        <DisplayDescription :form="selectForm"/>
      </div>

    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, watch, reactive } from 'vue'
import Title from '@/components-form-setting/base/Title.vue'
import Description from '@/components-form-setting/base/Description.vue'
import Placeholder from '@/components-form-setting/base/Placeholder.vue'
import RangePlaceholder from '@/components-form-setting/base/RangePlaceholder.vue'
import PageSubTitle from '@/components-form-setting/base/PageSubTitle.vue'
import PageSubDescription from '@/components-form-setting/base/PageSubDescription.vue'
import DividerText from '@/components-form-setting/base/DividerText.vue'
import LayoutType from '@/components-form-setting/base/LayoutType.vue'
import RateConfig from '@/components-form-setting/base/RateConfig.vue'
import DividerBorderType from '@/components-form-setting/base/DividerBorderType.vue'
import Required from '@/components-form-setting/form-validation/Required.vue'
import ValidationSystem from '@/components-form-setting/form-validation/ValidationFormat.vue'
import ValidationCustom from '@/components-form-setting/form-validation/ValidationCustom.vue'
import CustomText from '@/components-form-setting/form-validation/CustomText.vue'
import NumberConfig from '@/components-form-setting/form-validation/NumberConfig.vue'
import DisplaySerialNumber from '@/components-form-setting/common-global-configurations/DisplaySerialNumber.vue'
import DisplayDescription from '@/components-form-setting/common-global-configurations/DisplayDescription.vue'

import { hasOwnPropertyFunction, verifyRegularityCompList } from '@/views/FormEditor/comp-config-data'
import * as _ from 'lodash'


interface Props {
  selectComp: any
  selectForm: any
}

const props = defineProps<Props>()
const selectComp = reactive(props.selectComp)
const selectForm = reactive(props.selectForm)

const showParams = (params: string) => {
  const bool = hasOwnPropertyFunction(selectComp, params)
  return bool
}

const showRegParams = () => {
  const compList = verifyRegularityCompList()
  return compList.includes(selectComp.type)
}

watch([() => props.selectComp, () => props.selectForm],
([newValue,newFormConfig]) => {
    selectComp.value = newValue
    selectForm.value = newFormConfig
  },
);


</script>

<style>



.setting {

}

.comp-name {
  padding: 15px 15px 10px;
  border-bottom: 1px solid rgba(0, 0, 0, .06);
}
.setting-base {
  padding: 15px 25px;
}
.category-name {
  height: 42px;
  line-height: 42px;
  font-weight: 700;
  color: rgba(0, 0, 0, .65);
  font-size: 14px;
}
.border-top {
  margin-top: 20px;
  border-top: 1px solid rgba(0, 0, 0, .065);
}

.block-title {
  display: block;
  padding-bottom: 8px;
}
.setting-item {
  position: relative;
  .ant-select {
    top: 10px;
  }
}
.h-80 {
  height: 80px;
  line-height: 80px;
}
.h-50 {
  height: 50px;
  line-height: 50px;
}

.h-42 {
  height: 42px;
  line-height: 42px;
}
.p-t-10 {
  padding-top: 6px;
}

.abs-r {
  position: absolute;
  right: 0px;
}

.switch-r {
  top: -5px;
}

.content {
  display: block;
  margin-bottom: 18px;

  &.m-b-0 {
    margin-bottom: 0;
  }
}

</style>