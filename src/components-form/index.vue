<template>
  <div class="comp-item">
    <div class="comp-item-title" v-if="!!displaySection">
      <a-typography-title :level="5" class="title-value">
        <span class="number" v-if="formConfig?.displayNumberSort">
          {{lineNumberValue }}.
        </span>
        <span>
          {{ currentComp.title }}
        </span>
      </a-typography-title>
    </div>
    <div class="comp-item-description" v-if="displaySection && formConfig?.displayDescription">
      <a-typography-text type="secondary">
        {{ currentComp.description || '描述' }}
      </a-typography-text>
    </div>
    <div class="component">
      <component :is="currentComp.comp"  v-bind="currentComp"></component>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed, watch, defineEmits } from 'vue'
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
}


const props = defineProps<Props>()

const lineNumberValue = ref(props.lineNumber)
const currentComp = ref(getCompConfig(props.type))
const formConfig = ref(props.formConfig)


function getCompConfig(type: any) {
  const compType = { comp: getTypeToComponent(type) }
  const comp = { ...props.component, ...compType }
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



</script>
<style lang="scss">
.comp-item {
  padding: 20px 30px;

  .comp-item-title {
    height: 40px;
    line-height: 40px;

  }

  .title-value::before {
    display: inline-block;
    margin-inline-end: 4px;
    color: #ff4d4f;
    font-size: 14px;
    font-family: SimSun, sans-serif;
    line-height: 1;
    content: "*";
  }

  .comp-item-description {
    margin-bottom: 10px;
  }
}
</style>