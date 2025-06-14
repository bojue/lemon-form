<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
const size = ref('large')
</script>

<template id="app">
  <RouterView />
</template>

<style scoped>
#app{
  /* background: linear-gradient(180deg,transparent,#fff, #fff, #fff)  yellow; */
}
</style>
