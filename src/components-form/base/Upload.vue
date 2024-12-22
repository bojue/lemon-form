<template>
 <a-upload
    :disabled="isDev" 
    :title="isDev && disableInputByDev " 
    v-model:file-list="fileList"
    name="file"
    action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
    @change="handleChange"
  >
    <a-button>
      <upload-outlined></upload-outlined>
      Click to Upload
    </a-button>
  </a-upload>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { disableInputByDev } from '@/views/FormEditor/comp-config-data'

interface Props {
  id: string
  placeholder: string
  value: string
  isDev: boolean
  fileList: Array<any>
}

const props = defineProps<Props>()

const fileList = ref(props.fileList)

const handleChange = (e) => {
  console.log(e)
}

</script>
<style lang="scss">
</style>