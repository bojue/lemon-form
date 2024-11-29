interface CompConfig {
  name: string 
  type: string // 类型
  title: string // 标题
  description: string | null // 描述
  value: any
  defaultValue: string | null// 默认值
  dataList?: any[] // 列表数据，包括单选，多选，下拉选择
  layoutType?: 'horizontal' | 'vertical' // 横向布局，纵向布局
}
export const defaultConfig: CompConfig = {
  type: '',
  name: '组件名称',
  value: null,
  defaultValue: null,
  title: '',
  description: null,
  layoutType: 'horizontal',
  dataList: [{
    label: '选项一',
    value: '选项一'
  },{
    label: '选项二',
    value: '选项二'
  },{
    label: '选项三',
    value: '选项三'
  }],
}

export const getDefaultConfig = () => {
  return {...defaultConfig}
}