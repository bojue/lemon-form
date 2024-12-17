<template>
  <div class="setting-item h-42">
    <a-textarea
      v-model:value="comp.customErrorMessage"
      placeholder="请输入自定义错误提示"
      auto-size
      allow-clear 
      maxlength="40"
      :autosize="autosize"
      @Input="handleChangeInput"
      />
  </div>

</template>
<script lang="ts" setup>
import type { SizeType } from 'ant-design-vue/es/config-provider';
import { ref } from 'vue';
import { useSelectCompStore  } from '@/stores/selectCompStore'

interface Props{
  comp: any
}
const compStore = useSelectCompStore()

const props = defineProps<Props>()
const comp = ref(props.comp)
const autosize = ref({
  minRows:2,
  maxRows:3,
})

const handleChangeInput = (event: any) => {
  const data = event.target.value 
  compStore.updateCurrentComp({
    customErrorMessage: data
  })
}

</script>
<style lang="scss" scoped>

</style>