import { CompType } from "./comp-data"

interface CompConfig {
  name: string 
  type: string // 类型
  title: string // 标题
  description: string | null // 描述
  dataValue: any // 赋值，因为value和vue的绑定冲突，所以改成dataValue
  dividerValue?: string // 分割线文本
  pagingValue?: string // 分页内容
  defaultValue: string | null// 默认值
  dataList?: any[] // 列表数据，包括单选，多选，下拉选择
  layoutType?: 'horizontal' | 'vertical' // 横向布局，纵向布局
  isRequired?: boolean // 必填
  placeholder?: string // 占位符
  placeholderRange?: [string, string ] // 占位符-范围场景
  isCustomErrorMessage?: boolean // 自定义报错
  customErrorMessage?: string // 自定义报错
  formValidationFormat?: string // 表单校验格式
  formValidationFormatRegex?: string // 表单正则校验内容
}
export const defaultConfig: CompConfig = {
  type: '',
  name: '组件名称',
  dataValue: null,
  defaultValue: null,
  isCustomErrorMessage: false,
  customErrorMessage: '',
  title: '',
  description: null,
}

export const dataListType: CompType[] = [CompType.checkout, CompType.radio, CompType.select] // 数组列表
export const isIgnoreRequireType: CompType[] = [CompType.paging, CompType.divider] // 忽略类型
export const isPlaceholderType: CompType[] = [CompType.input, CompType.textarea, CompType.number, CompType.date, CompType.time,CompType.url, CompType.email, CompType.phone, CompType.idCard, CompType.location]
export const isRangePlaceholderType: CompType[]  = [CompType.dateRange, CompType.timeRange]


export const getCompConfig = (type: CompType) => {
  let compConfig: any = {}

  if(dataListType.includes(type)) {
    compConfig  = {
      ...compConfig,
      layoutType: 'vertical',
      dataList: [{
        label: '选项一',
        value: '选项一'
      },{
        label: '选项二',
        value: '选项二'
      },{
        label: '选项三',
        value: '选项三'
      }]
    }
  }

  if(isIgnoreRequireType.includes(type)) {
    const isPageBool = CompType.paging === type 
    const data = isPageBool ? {
      pagingValue: '分页'
    } : {
      dividerValue: '分割线',
      dividerOrientation: 'center'
    }
    compConfig = {
      ...compConfig,
      ...data
    }

    console.log('data', data)
  }

  if(!isIgnoreRequireType.includes(type)) {
    compConfig = {
      ...compConfig,
      isRequired: true,
    }
  }

  if(isPlaceholderType.includes(type)) {
    compConfig = {
      ...compConfig,
      placeholder: '请输入'
    }
  }

  if(isRangePlaceholderType.includes(type)) {
    let rangePlaceholder = []
    switch (type) {
      case CompType.dateRange:
        rangePlaceholder = ['开始日期', '结束日期']
        break;
      case CompType.timeRange:
        rangePlaceholder = ['开始时间', '结束时间']
        break;
      default: 
      rangePlaceholder = ['开始', '结束']
        break;
    }

    compConfig = {
      ...compConfig,
      placeholderRange: rangePlaceholder
    }
  }
  
  return compConfig

}

export const getDefaultConfig = (type: CompType) => {
  const compConfig = getCompConfig(type)
  const configData = {
    ...defaultConfig,
    ...compConfig
  }
  
  return {...configData}
}