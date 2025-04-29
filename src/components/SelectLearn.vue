<template>
  <div class="select-content">
    <div class="benefits-grid">
      <div class="benefit-item">
        <i class="icon-github"></i>
        <h3>完全开源</h3>
        <div class="des">
          表单产品核心代码完全开源:
          包括 <span class="col-1">表单编辑器引擎</span> ,<span class="col-2">表单组件库</span>,<span class="col-3">渲染引擎</span>
       </div>
      </div>
      
      <div class="benefit-item">
        <i class="icon-cog"></i>
        <h3>扩展能力</h3>
        <div class="des">
          低代码引擎，Web Studio H5编辑器 即将上线
        </div>
      </div>
      
      <div class="benefit-item">
        <i class="icon-chart"></i>
        <h3>数据赋能</h3>
        <div class="des">
          内置 BI 看板，表单数据深度分析
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, h } from 'vue';

interface Props {

}
const props = defineProps<Props>()

</script>

<style scoped lang="scss">
.select-content {
  margin: auto;
  width: 100%;
  display: ruby-text;
  text-align: center;
}
.benefits-grid {
  width: 850px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 50px;
  
}
.benefit-item {
  // padding: 20px 42px; 
  border-radius: 5px;
  text-align: left;
  // border: 1px solid rgba(0, 0, 0, .06);
  h3 {
    color: #333;
    font-size: 18px;
    // border-left: 4px solid #1677ff;
    padding-left: 0px;
    &::before {
      content: "";
      font-size: 20px;
      width: 10px;
      height: 10px;
      display: inline-block;
      background: #1677ff;
      margin-right: 10px;
    }
  }
  .des{
    color: #314666;
    font-size: 14px;
    line-height: 26px;
    span {
      padding: 2px 4px;
    }
    .col-1 {
      color:blue;
    }
    .col-2 {
      color:darkcyan;
    }
    .col-3 {
      color:saddlebrown;
    }
  }
}

</style>