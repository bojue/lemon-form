<template>
 <a-input v-model:value="props.value" placeholder="Basic usage" >
  <template #prefix>
    <img class="icon" :src="Gender" alt="">
      </template>
 </a-input>
</template>
<script setup lang="ts">
import { ref, reactive } from 'vue'
 import Gender from '/src/assets/form/gender.svg'
const radioStyle = reactive({

});

const props = defineProps({
  value: {
    type: String
  },
})
</script>
<style lang="scss">
 .icon {
   height: 18px;
 }
</style>