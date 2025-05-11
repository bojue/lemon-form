<template>
  <a-checkbox-group :value="dataValue" :options="dataList"
    :disabled="isDev"
    :style="layoutType === 'vertical' || isSelected ? radioVerticalStyle : radioStyle" 
    :class="{
      'group-item': true,
      'group-item-select': isSelected
    }"
    :key="isSelected + _updateKey">
    <template #label="{ label, subType, value, _index }" class="item list-item ">
      <div class="editor-item" :contenteditable="!isPreviewRender" @blur="changeValue($event, _index)">{{ label }}</div>
      <span class="other-val" v-if="subType === 'other'">
        <a-input :disabled="isDev" class="item-comp" :value="value" placeholder="待填表者更新" />
      </span>
      <span class="delete" v-if="dataList.length > 1 && !isPreviewRender" @click="deleteSubItem(_index)" :title="label">
        <CloseOutlined />
      </span>
    </template>
  </a-checkbox-group>
</template>
<script setup lang="ts">
import { ref, reactive } from 'vue'
import { v4 as uuidv4  } from 'uuid'
import { render } from 'vue'

interface Props {
  dataList: Array<any>
  dataValue: string
  layoutType: string
  isDev: boolean
  isSelected: boolean
  isPreviewRender?: boolean
}

const props = defineProps<Props>()
const _updateKey = ref('')

const updateKey = () => {
  _updateKey.value = uuidv4()
}

const deleteSubItem = (index: number) => {
  props.dataList.splice(index, 1)
  updateKey()
}

const changeValue = (event: any, index: number) => {
  const { innerHTML, innerText } = event.target
  const hasDataBool = innerText !== null &&  innerText !== '\n'
  const isOtherBool = props.dataList[index].subType === 'other'
  const value = !hasDataBool  ? (isOtherBool ? '其他': '选项') : innerText
  const isChangeBool = props.dataList[index].label !== value
  if(!isChangeBool) {
    return 
  }
  if(isOtherBool) {
    props.dataList[index].label = value
  } else {
    props.dataList[index].label = value
    props.dataList[index].value = value
  }

  updateKey()

}

const radioVerticalStyle = ref({
  display: 'flex',
  lineHeight: '40px',
});

const radioStyle = ref({
  display: 'inline-block',
  minHeight: '40px',
  lineHeight: '40px'
});

</script>
<style lang="scss" scoped>
::v-deep {
  .ant-checkbox-group-item {
    position: relative;
    min-height: 40px;
    line-height: 40px;
    width: 100%;

    .delete  {
    display: none;
  }

  &:hover, &:active, &:focus {
    .delete {
      position: absolute;
      display: block;
      right: 0;
      top: 0;
      cursor: pointer;
    }
  }
  }

  span.ant-checkbox {
    position: absolute;
    top:12px;
  }
}

.other-val {
  display: block;
}

.editor-item {
  outline: none;
  margin-left: 15px;
  &:active,&:focus {
    border:1px solid #e0e0e0;
    padding: 0px 12px 0px 10px;
    border-radius: 6px;
  }
}

::v-deep(:where(.css-dev-only-do-not-override-17yhhjv).ant-checkbox-disabled+span) {
  color: #000;
}



::v-deep(:where(.css-dev-only-do-not-override-17yhhjv).ant-checkbox .ant-checkbox-input) {
  display: inline;
}


</style>