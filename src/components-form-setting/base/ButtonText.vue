
<template>
  <a-typography-text type="secondary" class="block-title">按钮文字</a-typography-text>
  <a-input 
    class="mb-10"
    v-if="compStore.currentCompConfig"
    placeholder="请输入按钮文字（最多30个字）" 
    v-model:value="comp.buttonText"
    @Input="handleChangeInput"
    :maxlength="30"
  ></a-input>

  <div class="setting-item h-32">
    <a-typography-text type="secondary" class="secondary">显示图标
    </a-typography-text>
    <a-space direction="vertical" class="abs-r switch-r ">
      <a-switch  v-model:checked="comp.buttonIconShowBool" @change="changeValue($event)" />
    </a-space> 
  </div>
</template>
<script lang="ts" setup>
import { defineProps,watch, computed, defineEmits, ref, onMounted }  from 'vue'
import { useSelectCompStore  } from '@/stores/selectCompStore'
import Description from '@/components-form-setting/base/Description.vue';

const compStore: any = useSelectCompStore()


const handleChangeInput = (event: any) => {
  const data = event.target.value 
  compStore.updateCurrentComp({
    buttonText: data
  })
}

const changeValue = (event: any) => {
  const data = event
  compStore.updateCurrentComp({
    buttonIconShowBool: data
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
  margin-bottom: 20px;
}

.h-32 {
  height: 32px;
}

</style>