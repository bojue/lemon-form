<template>
  <a-space direction="vertical">
    <a-radio-group :value="dataValue"  :disabled="isDev" size="large">
    <a-radio  :key="isSelected + _updateKey" v-for="(item, _index) of dataList" :value="item" :style="layoutType === 'vertical' || isSelected ? radioVerticalStyle : radioStyle">
      <div class="editor-item"  @blur="changeValue($event, _index)" contenteditable="true">{{ item.label }}</div>
      <span class="other-val" v-if="item.subType === 'other'">
        <a-input :disabled="isDev" class="item-comp" v-model="item.value" 
        placeholder="其他选项内容自定义" />
      </span>
    </a-radio>
  </a-radio-group>
  </a-space>
</template>
<script setup lang="ts">
import { Layout } from 'ant-design-vue';
import { ref, reactive } from 'vue'
import { v4 as uuidv4  } from 'uuid'

interface Props {
  dataList: Array<any>
  dataValue: string
  layoutType: string
  isDev: boolean
  isSelected: boolean
}


const radioVerticalStyle = ref({
  display: 'flex',
  // height: '40px',
  lineHeight: '40px',
});

const radioStyle = ref({
  height: '40px',
  lineHeight: '40px',
});


const props = defineProps<Props>()

const _updateKey = ref('')

const updateKey = () => {
  _updateKey.value = uuidv4()
}

const changeValue = (event: any, index: number) => {
  const { innerHTML, innerText } = event.target
  const hasDataBool = innerText !== null &&  innerText !== '\n'
  const isOtherBool = props.dataList[index].subType === 'other'
  const value = !hasDataBool  ? (isOtherBool ? '其他': '选项') : innerText
  if(isOtherBool) {
    props.dataList[index].label = value
  } else {
    props.dataList[index].label = value
    props.dataList[index].value = value
  }

  updateKey()

}

</script>
<style lang="scss" scoped>
::v-deep {
  .ant-radio-group {
    .ant-radio {
      position: absolute;
      top: 12px;
    }
  }
}

.editor-item {
  outline: none;
  &:active,&:focus {
    border:1px solid #e0e0e0;
    padding: 0px 12px 0px 40px;
    border-radius: 6px;
  }
}

::v-deep(:where(.css-dev-only-do-not-override-17yhhjv).ant-radio-group) {
  width: 100%;
  display: block;
}

::v-deep(:where(.css-dev-only-do-not-override-17yhhjv).ant-radio-wrapper span.ant-radio+*) {
  color: #000;
}

::v-deep(:where(.css-dev-only-do-not-override-17yhhjv).ant-radio-wrapper span.ant-radio+*) {
  width: 100%;
  margin-left: -20px;
  .editor-item {
    width: 100%;
    padding-left: 35px;
  }
}

::v-deep(:where(.css-dev-only-do-not-override-17yhhjv).ant-radio-wrapper .ant-radio-input) {
  display: inline;
}
</style>