<template>
  <div class="setting-item h-50">
    <a-typography-text type="secondary" class="block-title2">图标</a-typography-text>
  </div>
  <div>
    <a-radio-group class="rate-character-icon" v-model:value="comp.rateCharacter">
      <a-radio-button v-for="item in imgList" :key="item" :value="item"
        @click="changeRateCharacter(item)">{{ item }}</a-radio-button>
    </a-radio-group>
  </div>

  <div class="setting-item h-50">
    <a-typography-text type="secondary" class="block-title2">数量</a-typography-text>
    <a-select v-model:value="comp.rateCount" style="width: 120px" class="abs-r" @change="changeRateCount">
      <a-select-option :value="item.value" v-for="item in dataList">{{ item.name }}</a-select-option>
    </a-select>
  </div>


  <div class="setting-item h-50">
    <a-typography-text type="secondary" class="block-title2">允许半选</a-typography-text>
    <a-space direction="vertical" class="abs-r switch-r ">
      <a-switch  v-model:checked="comp.rateAllowHalf" @change="changeHalf($event)" />
    </a-space> 
  </div>
</template>


<script lang="ts" setup>
import { defineProps, onMounted, ref } from 'vue'
import { useSelectCompStore } from '@/stores/selectCompStore'

const compStore = useSelectCompStore()

interface Props {
  comp: any
}

const props = defineProps<Props>()
const comp = ref(props.comp)


const dataList: any = ref([])
const imgList = ['⭐️', '❤️', '😊', '🔥', '🌩']

onMounted(() => {
  for (let i = 1; i <= 10; i++) {
    dataList.value.push({
      name: i + ' 个',
      value: i
    })
  }
})

const changeRateCount = (event: any) => {
  compStore.updateCurrentComp({
    rateCount: event
  })
}

const changeRateCharacter = (event: any) => {
  compStore.updateCurrentComp({
    rateCharacter: event
  })
}

const changeHalf = (event: any) => {
  compStore.updateCurrentComp({
    rateAllowHalf: event
  })
}

</script>
<style lang="scss" scoped>
.comp {
  padding: 10px;
  color: yellowgreen;
}

.comp {
  margin-bottom: 10px;
}
.rate-character-icon {
  display: flex;
  flex: 0 0 auto;
}
</style>