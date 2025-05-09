

<template>
<a-modal 
  v-model:open="open" 
  title="创建表单" 
  cancelText="取消"
  okText="确定"
  @ok="handleOk"
  @cancel="handleCancel">
  <a-form
    :model="formState"
    name="formCreate"
    class="create-from-modal"
    :label-col="{ span: 3 }"
    :wrapper-col="{ span: 21 }"
  >
    <a-form-item
      label="名称"
      name="formName"
      :rules="[{ required: true, message: '请输入表单名称' }]"
    >
      <a-input v-model:value="formState.formName" Placeholder="请输入表单名称" />
    </a-form-item>

    <a-form-item
      label="类型"
      name="类型"
      :rules="[{ required: true }]"
    >
    <a-radio-group v-model:value="formState.formType">
        <a-radio-button v-for="item in formTypeList" :value="item.type" :disabled="item.disabled">{{ item.label }}</a-radio-button>
      </a-radio-group>
    </a-form-item>
    <!-- <a-form-item :wrapper-col="{ offset: 3, span: 16 }">
      <a-button type="default" class="margin-left-10" html-type="submit">取消</a-button>
      <a-button type="primary" html-type="submit">提交</a-button>
    </a-form-item> -->

  </a-form>

</a-modal>

</template>
<script setup lang="ts">
import { ref, h, defineEmits, watch, reactive } from 'vue';
import Placeholder from '@/components-form-setting/base/Placeholder.vue';

interface Props {
  openState: boolean
}

interface FormState {
  formName: string;
  formType: 'defaultForm' | 'slideshowForm'
}

const formState = reactive<FormState>({
  formName: '',
  formType: 'defaultForm'
});

const formTypeList = [{
  label: '默认表单',
  type: 'defaultForm'
}, {
  label: '幻灯片表单',
  type: 'slideshowForm',
  disabled: true
}]  




const emits = defineEmits(['handleCreateForm'])
const props = defineProps<Props>()



const handleOk = () => {
  console.log('ok')
}

const open = ref(false)
const handleCancel = () => {
  open.value = false
  emits('handleCreateForm')
}
const handleOpen = () => {
  open.value = true
}

watch(() => props.openState, (val) => {
  open.value = val
})


</script>

<style scoped lang="scss">

.create-from-modal {
  padding: 24px 0 8px;
}

.margin-left-10 {
  margin-right: 10px;
}

</style>
