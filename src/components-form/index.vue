<template>
  <div class="comp-item">
    <div class="comp-item-title" v-if="!!displaySection">
      <a-typography-title :level="5" class="title-value" v-bind:class="{'title-value-isRequired': component.isRequired}">
        <span class="number" v-if="formConfig?.displayNumberSort">
          {{component?.lineNumber }}. 
        </span>
        <span class="title-value">
          {{ component?.name || component?.title }} 
        </span>
      </a-typography-title>
    </div>
    <div class="comp-item-description" v-if="displaySection && formConfig?.displayDescription">
      <a-typography-text type="secondary">
        {{ component.description || '描述' }}
      </a-typography-text>
    </div>
    <div class="component">
      <component :key="currentComp" :isDev="isDev" :is="getCompConfig(props.type).comp"  v-bind="component"></component>
    </div>
    <div class="active-comp-setting" v-if="compConfig.id === selectedComp?.id && !isIgnoreEditor()" >
      <div class="bottom-setting">
        <a-checkbox class="setting-item" v-model:checked="component.isRequired" @click="component.isRequired = !component.isRequired">必填</a-checkbox>
      </div>
    </div>
    <div class="active-comp-setting-side-bar" v-if="compConfig.id === selectedComp?.id">
      <a-tooltip placement="left" @click="compControl($event,'copy')">
        <template  #title>
          <span>复制</span>
        </template>
        <CopyOutlined class="control"/>
      </a-tooltip>
      <a-tooltip placement="left" :color="'#f50'"  @click="compControl($event,'delete')">
        <template #title>
          <span>删除</span>
        </template>
        <DeleteOutlined class="control"/>
      </a-tooltip>


    </div>
  </div>

</template>

<script lang="ts" setup>
import { ref, computed,  watch, defineEmits } from 'vue'
// 基础组件
import RadioComponent from '@/components-form/base/Radio.vue'
import CheckoutComponent from '@/components-form/base/Checkout.vue'
import InputComponent from '@/components-form/base/Input.vue'
import TextareaComponent from '@/components-form/base/Textarea.vue'
import UrlComponent from '@/components-form/base/Url.vue'
import DateComponent from '@/components-form/base/Date.vue'
import DateRangeComponent from '@/components-form/base/DateRange.vue'
import TimeComponent from '@/components-form/base/Time.vue'
import DividerComponent from '@/components-form/base/Divider.vue'
import PagingComponent from '@/components-form/base/Paging.vue'
import RateComponent from '@/components-form/base/Rate.vue'
import UploadComponent from '@/components-form/base/Upload.vue'
import SwitchComponent from '@/components-form/base/Switch.vue'
import NumberComponent from '@/components-form/base/Number.vue'
import TimeRangeComponent from '@/components-form/base/TimeRange.vue'

// 联系方式
import NameComponent from '@/components-form/contact-information/Name.vue'
import GenderComponent from '@/components-form/contact-information/Gender.vue'
import PhoneComponent from '@/components-form/contact-information/Phone.vue'
import IdCardComponent from '@/components-form/contact-information/IdCard.vue'
import EmailComponent from '@/components-form/contact-information/Email.vue'
import WXComponent from '@/components-form/contact-information/WX.vue'
import AddressComponent from '@/components-form/contact-information/Address.vue'


interface Props {
  component: any,
  type: string,
  lineNumber: string,
  formConfig: any
  selectedComp?: any
  isDev: boolean
}


const props = defineProps<Props>()

const compConfig = props.component // 组件配置
const currentComp = getCompConfig(props.type)//组件
const emit = defineEmits(['compControl'])

function getCompConfig(type: any) {
  const compType = { comp: getTypeToComponent(type) }
  const comp = { ...compConfig, ...compType }
  return comp
}

const displaySection = computed(() => !['Divider', 'Paging'].includes(props.type))

function getTypeToComponent(type: string) {
  const compsObject: any = {
    Radio: RadioComponent,
    Input: InputComponent,
    Textarea: TextareaComponent,
    Checkout: CheckoutComponent,
    Date: DateComponent,
    DateRange: DateRangeComponent,
    Time: TimeComponent,
    TimeRange: TimeRangeComponent,
    Url: UrlComponent,
    Score: RateComponent,
    Number: NumberComponent,
    Switch: SwitchComponent,
    Upload: UploadComponent,
    Divider: DividerComponent,
    Paging: PagingComponent,

    // 联系信息
    Name: NameComponent,
    Gender: GenderComponent,
    WX: WXComponent,
    Email: EmailComponent,
    IdCard: IdCardComponent,
    Phone: PhoneComponent,
    Address: AddressComponent,
  }
  const comp = compsObject[type]
  return comp
}

const compControl = (event: any, type: string) => {
  event.stopPropagation()
  emit('compControl', type, props.component)
}

const isIgnoreEditor = () => {
  return ['Divider', 'Paging'].includes(props.type)
}

</script>
<style lang="scss" scoped>

::v-deep(input[disabled]) {
  background: #ffffff !important;
}
::v-deep(textarea[disabled]) {
  background: #ffffff !important;
}
::v-deep(.ant-picker-disabled) {
  background: #ffffff !important;
}
::v-deep(.ant-time-disabled) {
  background: #ffffff !important;
}

.control {
  &:active, &:hover {
    background: #ebebeb;
  }
}
.form-item {
  .comp-item {
    padding: 16px 60px 24px;
  }
}

.form-item-active {
  .comp-item { 
    padding: 32px 60px 40px;
  }

}
.comp-item {
  // padding: 20px 30px;

  .comp-item-title {
    height: 40px;
    line-height: 40px;

  }


  .title-value-isRequired::before {
    color: #ff4d4f;
    font-size: 14px;
    font-family: SimSun, sans-serif;
    line-height: 1;
    display: inline-block;
    margin-inline-end: 4px;
    content: "*";
  }

  .comp-item-description {
    margin-bottom: 10px;
  }
}

.active-comp-setting-side-bar {
  position: absolute;
  right: -33px;
  width: 32px;
  top: 50%;
  transform: translateY(-50%);
  background: #ffffff;
  font-size: 14px;
  padding:5px 3px;
  border-bottom-right-radius: 6px;
  border-top-right-radius: 6px;
  .control {
    padding:10px 5px;
  }
}

.active-comp-setting {
  width: 100%;
  position: relative;
  height: 64px;
  line-height: 64px;
  padding-top: 16px;
  .bottom-setting {

    position: absolute;
    right: 10px;
  }
}

.item-comp {
  width: 100%;
}

</style>