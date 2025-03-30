<template>
  <div class="body">
    <a-drawer :title="formTitle" class="drawer" :height="'calc(100% - 0px)'" :placement="placement" :rootStyle="{
      // borderTop: '2px solid #fff',s
    }" :bodyStyle="{
      background: 'aliceblue'
    }" :open="props.open" @close="onClose">
      <template #extra>
        <a-button style="margin-right: 8px" @click="onClose">取消</a-button>
        <a-button type="primary" @click="onClose">保存</a-button>
      </template>
      <div class="body-content">
        <div class="comps" v-if="pageCompList.length">
          <div v-for="(item, index) in pageCompList" :key="item?.name" :class="{
            'cursor-move': true,
            'form-item': true,
          }">
            <FormComponent :key="item.id" :component="item" :type="item.type" :isDev="false">
            </FormComponent>
          </div>
          <div class="form-footer" :class="{
            'form-item': true,
          }">
            <a-button v-if="props.pageFooter.buttonIconShowBool" class="submit" type="primary"
              :size="props.pageFooter.size" :style="{ 'padding': getSize(), 'lineHeight': getLineheight() }">
              {{ props.pageFooter.buttonText || '提交' }}
            </a-button>
            <a-button v-else class="submit" type="primary" :size="pageFooter.size"
              :style="{ 'padding': getSize(), 'lineHeight': getLineheight() }">
              {{ props.pageFooter.buttonText || '提交' }}
            </a-button>
          </div>
        </div>
        <div v-else class="no-data">
          <img src="@/assets/form/no_data.svg" alt="">
          <div class="description">表单为空，请返回编辑器配置内容</div>
          </div>
      </div>
    </a-drawer>
  </div>

</template>
<script setup lang="ts">
import { ref } from 'vue';
import type { DrawerProps } from 'ant-design-vue';
import { CheckOutlined } from '@ant-design/icons-vue';
import FormComponent from '@/components-form/index.vue'
const placement = ref<DrawerProps['placement']>('bottom');
const formTitle = "表单预览"

const emit = defineEmits(['onClose'])

interface Props {
  open: any
  pageFooter: any
  pageCompList: any[]
}

const props = defineProps<Props>()

const onClose = () => {
  emit('onClose')
};


const getSize = () => {
  const data = props.pageFooter?.value
  return data?.size == 'large' ? "0 26px" : (data?.size == "small" ? "0 10px" : "0 16px")
}

const getLineheight = () => {
  const data = props?.pageFooter?.value
  return data?.size == 'large' ? "40px" : (data?.size == "small" ? "24px" : "32px")
}


</script>

<style scoped lang="scss">
.drawer {
  background-image: url(./bg.png);
}

.body-content {
  width: 700px;
  background: #fff;
  position: absolute;
  transform: translateX(-50%);
  left: 50%;
  height: calc(100% - 110px);
  border-radius: 6px;
}

.comps {
  width: 100%;
  height: 100%;
  overflow-y: auto;
}

.form-footer {
  height: 90px;
  line-height: 90px;
  padding: 0 60px;
  width: 100%;
  margin-top: 10px;

}

::v-deep(.form-footer) {
  .submit {

    max-width: 100%;
    white-space: nowrap;
    /* 不换行 */
    overflow: hidden;
    /* 隐藏超出部分 */
    text-overflow: ellipsis;
    /* 显示省略号 */
  }
}

.no-data {
  text-align: center;
  margin: 20px;
  font-size: 16px;
  color: #666;
  img {
    width: 300px;
    margin: 20px;
  }
}
</style>
