<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink, useRouter } from 'vue-router'

interface Props {
  size: number 
}

const props = defineProps<Props>()
const defaultWidth = 40

</script>

<template>
<img src="@/assets/logo.svg" :style="{
  width: (size || defaultWidth) + 'px',
  height: (size || defaultWidth) + 'px',
}" class="logo"/>
</template>

<style lang="scss">
.logo {
  height: 40px;
  height: 40px;
}

</style>