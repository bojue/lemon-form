
<template>
  <Title :title="'项目开发'"/>
  <div class="btn-create">
    <a-button :icon="h(PlusOutlined)" type="primary" @click="open">创建
    </a-button>
    
    <CreateForm :openState="openState" @handleCreateForm="handleCreateForm"/>
  </div>
  <FormList/>
</template>
<script setup lang="ts">
import { ref, h } from 'vue'
import { PlusOutlined } from '@ant-design/icons-vue';
import Title from '../comps/title.vue';
import FormList from '../comps/formList.vue';
import CreateForm from './createForm/index.vue';

const openState = ref(false)

const open = () => {
  openState.value = true
}

const handleCreateForm = (state: boolean) => {
  openState.value = state
}

</script>

<style scoped lang="scss">
.btn-create {
  position: absolute;
  right: 30px;
  top: 70px;
}

:deep(button svg ){
  font-size: 15px;
}

</style>
