
<template>
  <div class="setting-item h-50">
    <a-typography-text type="secondary" class="secondary">格式</a-typography-text>
    <a-select v-model:value="comp.formValidationFormat" style="width: 120px" class="abs-r" @change="handleChangeInput">
      <a-select-option :value="item.value" v-for="item in systemFormatList">{{ item.name }}</a-select-option>
    </a-select>
  </div>
  <div class="setting-item h-42" v-if="comp.formValidationFormat === 'regular'">
    <a-input
      v-model:value="comp.formValidationFormatRegex"
      placeholder="请输入自定义正则表达式"
      auto-size
      allow-clear 
      maxlength="40"
      :autosize="autosize"
      @Input="changeValidationFormatRegexInput"
      />
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import { useSelectCompStore  } from '@/stores/selectCompStore'
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
  name: '自定义正则',
  value: 'regular'
}]
const autosize = ref({
  minRows:2,
  maxRows:3,
})
const systemFormatList = ref(formList)
interface Props{
  comp: any
}

const props = defineProps<Props>()
const comp = ref(props.comp)

const compStore = useSelectCompStore()

const handleChangeInput = (event: any) => {
  const data = event
  compStore.updateCurrentComp({
    formValidationFormat: data
  })
}

const changeValidationFormatRegexInput = (event: any) => {
  const data = event.target.value 
  compStore.updateCurrentComp({
    formValidationFormatRegex: data
  })
}

</script>
<style lang="scss" scoped>

</style>