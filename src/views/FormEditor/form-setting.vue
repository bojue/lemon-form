<template>
  <div class="setting">
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
        <Description :key="selectComp.selectComp.id" :comp="selectComp.selectComp"/>
        <LayoutType :comp="selectComp"/>
      </div>
      <div class="category-name border-top">
        表单验证
      </div>
      <div class="content">
        <Required :comp="selectComp"/>
        <ValidationSystem :comp="selectComp"/>
        <ValidationCustom :comp="selectComp"/>
        <CustomText :comp="selectComp"/>
      </div>
      <div class="category-name border-top">
        全局表单配置
      </div>
      <div class="content">
        <DisplaySerialNumber :key="selectForm?._update" :form="selectForm"/>
        <DisplayDescription :key="selectForm?._update" :form="selectForm"/>
      </div>

    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, watch, reactive } from 'vue'
import Description from '@/components-form-setting/base/Description.vue'
import LayoutType from '@/components-form-setting/base/LayoutType.vue'
import DataList from '@/components-form-setting/data/DataList.vue'
import Required from '@/components-form-setting/form-validation/Required.vue'
import ValidationSystem from '@/components-form-setting/form-validation/ValidationSystem.vue'
import ValidationCustom from '@/components-form-setting/form-validation/ValidationCustom.vue'
import CustomText from '@/components-form-setting/form-validation/CustomText.vue'
import DisplaySerialNumber from '@/components-form-setting/common-global-configurations/DisplaySerialNumber.vue'
import DisplayDescription from '@/components-form-setting/common-global-configurations/DisplayDescription.vue'


interface Props {
  selectComp: any
  selectForm: any
}

const props = defineProps<Props>()
const selectComp = reactive(props)
const selectForm = ref({})

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