<template>
  <div class="issue" @click="toIssue">
    <span>
      去提交新的需求
    </span>
  </div>
</template>
<script lang="ts" setup>
const toIssue = () => {
  const url = 'https://github.com/bojue/lemon-form/issues/new'
  window.open(url, '_blank')
}
</script>
<style lang="scss" scoped>

.issue {
  margin: 50px;
  color: #0969da;
  text-decoration: underline;
  opacity: 0.5;
  cursor: pointer;
  &:hover {
    opacity: 1;
  }
}
</style>