
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

  // 按钮
  buttonText?: string // 按钮文本
  size?: 'large' | 'middle' | 'small' // 按钮大小
  position?: 'left' | 'right' | 'center' // 按钮位置
  buttonIconShowBool?: boolean // 按钮图标

  // 扩展字段
  minValue?: number // 最小值
  maxValue?: number // 最大值
}
export const defaultConfig: CompConfig = {
  type: '',
  dataValue: null,
  defaultValue: null,
  customErrorMessage: '',
  title: '',
}

export const dataListType: CompType[] = [CompType.checkout, CompType.radio, CompType.select] // 数组列表
export const isLayoutType: CompType[] = [CompType.paging, CompType.divider] // 忽略类型
export const isIgnoreRequireType: CompType[] = [CompType.paging, CompType.divider, CompType.button] // 忽略类型
export const isPlaceholderType: CompType[] = [CompType.input, CompType.textarea, CompType.number, CompType.date, CompType.time,CompType.url, CompType.email, CompType.phone, CompType.idCard, CompType.location]
export const isRangePlaceholderType: CompType[]  = [CompType.dateRange, CompType.timeRange]
export const isNumberType: CompType[] = [CompType.number]
export const isRate: CompType[] = [CompType.rate]
export const isButton: CompType[] = [CompType.button]

export const getCompConfig = (type: CompType) => {
  let compConfig: any = {}

  if(dataListType.includes(type)) {
    compConfig  = {
      ...compConfig,
      layoutType: 'vertical',
      dataList: [{
        label: '选项一',
        value: '选项一',
        _index: 0,
      },{
        label: '选项二',
        value: '选项二',
        _index: 1,
      },{
        label: '选项三',
        value: '选项三',
        _index: 2,
      }]
    }
  }

  if(isLayoutType.includes(type)) {
    const isPageBool = CompType.paging === type 
    const data = isPageBool ? {
      pagingValue: '分页',
      pageSubTitle: '',
      pageSubDescription: ''
    } : {
      dividerValue: '分割线',
      position: 'center'
    }
    compConfig = {
      ...compConfig,
      ...data,
    }
  }

  if(!isIgnoreRequireType.includes(type)) {
    compConfig = {
      ...compConfig,
      isRequired: true,
      isCustomErrorMessage: false,
      description: '描述',
    }
  }

  if(isPlaceholderType.includes(type)) {
    compConfig = {
      ...compConfig,
      placeholder: '请输入'
    }
  }

  if(isNumberType.includes(type)) {
    compConfig = {
      ...compConfig,
      minValue: 0,
      maxValue: 100,
      placeholder: '请输入数字'
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

  if(isRate.includes(type)) {
    compConfig = {
      ...compConfig,
      rateCount:5,
      rateCharacter: '⭐️',
      rateColor: '#ff9900',
      rateAllowHalf: false,
    }
  }
  
  // 按钮
  if(isButton.includes(type)) {
    compConfig = {
      ...compConfig,
      buttonText: '提交',
      size: 'large',
      position: 'center',
      buttonIconShowBool: true,
      
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

export const disableInputByDev = '编辑模式不支持输入'
export const hasOwnPropertyFunction = (object: Object, key: string)=> {
  return object && Object.prototype.hasOwnProperty.call(object, key)
}


export const verifyRegularityCompList = () => {
  return [
    CompType.input,
    CompType.textarea,
    CompType.url,
    CompType.email,
    CompType.phone,
    CompType.idCard
  ]
}
