interface CompConfig {
  name: string 
  type: string // 类型
  title: string // 标题
  description: string | null // 描述
  value: any
  defaultValue: string | null// 默认值
  listData?: any[] // 列表数据，包括单选，多选，下拉选择
}
export const defaultConfig: CompConfig = {
  type: '',
  name: '组件名称',
  value: null,
  defaultValue: null,
  title: '组件',
  description: null,
  listData: [],
}

export const getDefaultConfig = () => {
  return {...defaultConfig}
}