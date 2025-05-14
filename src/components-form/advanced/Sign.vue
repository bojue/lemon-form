<template>
  <div class="sign" ref="signRef" :id="currId">
    <canvas />
    <div class="control-btns">
      <a-radio-group :size="size">
        <a-radio-button v-for="item in contList" value="large" @click="control(item.type)">{{ item.name }}</a-radio-button>
      </a-radio-group>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, reactive, onMounted, watch, nextTick } from 'vue';
import SmoothSignature from "smooth-signature";
const signRef = ref(null);
const size = ref('default')
interface Props {
  id: string
  isPreviewRender?: boolean
  previewType?: string
}
const props = defineProps<Props>()
const currId = ref(props.isPreviewRender ? `preview_${props.id}`: `${props.id}` )
const signature: any = ref(null)
const contList = [{
  name: '清空',
  type: 'clear'
}, {
  name: '撤销',
  type: 'undo'
},{
  name: '重做',
  type: 'redo'
},]

const control = (type: 'clear' | 'undo' | 'redo' | string) => {
  switch(type) {
    case 'clear':
      signature.value.clear()
      break;
    case 'redo':
      signature.value.redo()
      break;
    case 'undo':
      signature.value.undo()
      break;
  }
  console.log(type)
}

const initData = () => {
  const signDOM = document.getElementById(currId.value)
  const rect = signDOM?.getBoundingClientRect()
  const canvas: HTMLCanvasElement | null | undefined = signDOM?.querySelector("canvas");
  if (!canvas) {
    return 
  }

  let _width = rect?.width   
  if(props.isPreviewRender) {
    _width = props.previewType === 'PC' ? 566 : 350;
  }
  signature.value = new SmoothSignature(canvas, {
    width:_width || 300,
    height: 200,
    scale: 2,
    minWidth: 4,
    maxWidth: 10,
    color: '#333',
    bgColor: '#f6f8fa'
  });
}

onMounted(() => {
  initData()
})

watch([props.previewType] ,() => {
  initData()
})

</script>
<style lang="scss" scoped>
.sign {
  width: 100%;
}
.control-btns {
  width: 100%;
  text-align: center;
  margin: 10px;
}
</style>