<template>
  <div class="title">
    标题 
  </div>
  <div class="description">
    描述
  </div>
  <div class="component">
    <component :is="currentComp.comp"></component>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import RadioComponent from '@/components-form/base/Radio.vue'
import CheckoutComponent from '@/components-form/base/Checkout.vue'
import ButtonComponent from '@/components-form/base/Button.vue'
import { getDefaultConfig } from '@/views/FormEditor/comp-config-data';


const props = defineProps({
  component: {
    type: Object,
    require: true
  }
})

const currentComp = ref(getCompConfig(props.component)) 


function getCompConfig(component: any){
  const defaultConfig = getDefaultConfig()
  const compType = {comp : getTypeToComponent(component.type)}
  const comp = {...defaultConfig, ...component, comp: compType}
  return comp
}


function getTypeToComponent(type: string) {
  console.info('当前组件', type)
  const compsObject:any = {
    Radio: RadioComponent,
    Checkout: CheckoutComponent,
    Button: ButtonComponent,
  }

  return compsObject[type]
}



</script>