

<template>
    <a-modal 
      title="批次操作数据"
      :okText="'确定'"
      :cancelText="'取消'"
      v-model:open="props.open"
      @cancel="handleSubmit('cancel')"
      @ok="handleSubmit('ok')"
      >
      <a-textarea 
        placeholder="请输入批次操作数据（每行一条数据）" 
        allow-clear 
        v-model:value="batchDataValue"
        @Input="handleChangeInput"
        :auto-size="{ minRows: 5, maxRows: 50 }"
      ></a-textarea>
    </a-modal>

</template>
<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue'
import { v4 as uuidv4  } from 'uuid'
const emit = defineEmits(['handleBatchOperation'])

interface Props {
  open: boolean
  dataList: any[]
}

const props = defineProps<Props>()
const batchDataValue = ref('')
const dataList: any = ref(props.dataList)

const handleSubmit = (state : string) => {
  const isOk = state === 'ok'
  if (isOk) {
    const val = batchDataValue.value
    const nextData: any[] = []
    if(val) {
      const _list = val.split('\n').filter(item => item?.length > 0 && item)
      if(Array.isArray(_list)) {

        _list.forEach((element, index) => {
         nextData.push({
          label:element,
          value: element,
          _index: index
         })
        });
      }
    } 
    dataList.value = nextData
  }
  emit('handleBatchOperation', isOk, dataList.value)
}

const handleChangeInput = (event: any) => {
  const data = event.target.value
  console.log(data)
}


onMounted(() => {
  let  val = ''
  props.dataList.map(item => val += item.value + '\n')
  batchDataValue.value = val

})

</script>
<style lang="scss" scoped>

</style>