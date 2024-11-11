<template>
  <div class="comp-item">
    <div class="comp-item-title">
      <a-typography-title :level="5" class="title-value">
        <span class="number">
          {{ props.lineNumber }}.
        </span>
        <span>
          {{ currentComp.title }}
        </span>
      </a-typography-title>
    </div>
    <div class="comp-item-description">
      <!-- <a-descriptions-item >{{ currentComp.description  || '描述' }}</a-descriptions-item> -->
      <a-typography-text type="secondary">
        {{ currentComp.description || '描述' }}
      </a-typography-text>
    </div>
    <div class="component">
      <component :is="currentComp.comp" v-bind="{ ...currentComp }"></component>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

import RadioComponent from '@/components-form/base/Radio.vue'
import CheckoutComponent from '@/components-form/base/Checkout.vue'
import InputComponent from '@/components-form/base/Input.vue'
import TextareaComponent from '@/components-form/base/Textarea.vue'
import UrlComponent from '@/components-form/base/Url.vue'
import DateComponent from '@/components-form/base/Date.vue'
import DateRangeComponent from '@/components-form/base/DateRange.vue'
import TimeComponent from '@/components-form/base/Time.vue'
import RateComponent from '@/components-form/base/Rate.vue'
import UploadComponent from '@/components-form/base/Upload.vue'
import SwitchComponent from '@/components-form/base/Switch.vue'
import NumberComponent from '@/components-form/base/Number.vue'
import TimeRangeComponent from '@/components-form/base/TimeRange.vue'
import { getDefaultConfig } from '@/views/FormEditor/comp-config-data';
import TimeRange from '@/components-form/base/TimeRange.vue'


const props = defineProps({
  component: {
    type: Object,
    require: true
  },
  lineNumber: {
    type: String
  }
})

const currentComp = ref(getCompConfig(props.component))


function getCompConfig(component: any) {
  const defaultConfig = getDefaultConfig()
  const compType = { comp: getTypeToComponent(component.type) }
  const comp = { ...defaultConfig, ...component, ...compType }
  console.log('defaultConfig', defaultConfig, 'comp', comp)
  return comp
}


function getTypeToComponent(type: string) {
  console.info('当前组件', type)
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
  }

  return compsObject[type]
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