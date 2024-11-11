export enum CompType {
  input = 'Input',
  textarea = 'Textarea',
  number = 'Number',
  switch = "Switch",
  url = "Url", // 网址
  radio = 'Radio',
  checkout = 'Checkout',
  date = "Date",
  dateRange = 'DateRange', // 日期范围
  time = 'Time',
  timeRange = 'TimeRange', // 时间范围
  upload = "Upload",
  select = 'Select', // 下拉选择
  img = 'Img', // 图片选择
  sort = 'Sort', // 排序
  button = "Button", // 按钮

  // 个人信息
  name = 'Name', // 姓名
  gender = 'Gender', // 性别
  wx = "WX", // 微信
  phone = 'Phone', // 手机
  email = "Email", // 邮箱
  landline = 'Landline', // 座机
  idCard = 'IDCard', // 身份证
  address = 'Address', // 地址
  
  // 布局组件
  dividing = 'Dividing', // 分割线
  paging = 'Paging', // 分页

  // 高级组件
  score = 'Score', // 评分
  nps = 'NPS', // nps
  electronicSignature = 'ElectronicSignature', // 电子签名
  location = 'Location', // 位置信息
  editor = "Editor", // 富文本
  serialNumber = 'SerialNumber', // 流水号

  // 常见组件
  boolean = "Boolean", // 常见组件
  satisfactionLevel = "SatisfactionLevel", // 满意度
  annualIncome = "AnnualIncome", // 年收入
}

// 组件元素类型
export interface CompItemType {
  name: string 
  label: string 
  type: CompType
}

enum CompListType {
  basic = "Basic Component",
  advanced = "Advanced Component",
  personal = "Personal Component",
  form = "Form Component",
  layout = "Layout Component",
  business = "Business Component",
  common = "Common Component",
}

// 组件分类列表类型
interface CompCategoryType {
  name: string
  label: string 
  type: CompListType,
  children: CompItemType[]
}

// 基础组件
const BasicComponentList:CompItemType[] = [
  {
    label: '单选',
    name: '单选',
    type: CompType.radio,
  },
  {
    label: '多选',
    name: '多选',
    type: CompType.checkout
  },
  {
    label: '单行输入',
    name: '单行输入',
    type: CompType.input
  },
  {
    label: '多行输入',
    name: '多行输入',
    type: CompType.textarea
  },
  {
    label: '日期',
    name: '日期',
    type: CompType.date
  },
  {
    label: '日期范围',
    name: '日期范围',
    type: CompType.dateRange
  },
  {
    label: '时间',
    name: '时间',
    type: CompType.time
  },
  {
    label: '时间范围',
    name: '时间范围',
    type: CompType.timeRange
  },
  {
    label: '上传',
    name: '上传',
    type: CompType.upload
  },
  {
    label: '数字',
    name: '数字',
    type: CompType.number
  },
  {
    label: '开关',
    name: '开关',
    type: CompType.switch
  },
  {
    label: '网址',
    name: '网址',
    type: CompType.url
  },
  {
    label: '评分',
    name: '评分',
    type: CompType.score
  }
  
]

// 布局组件
const LayoutComponentList: CompItemType[] = [
  {
    label: '分割线',
    name: '分割线',
    type: CompType.dividing
  },  {
    label: '分页',
    name: '分页',
    type: CompType.paging
  }
]

// 个人信息
const PersonalComponentList: CompItemType[] = [
  {
    label: '姓名',
    name: '姓名',
    type: CompType.name
  },
  {
    label: '性别',
    name: '性别',
    type: CompType.gender
  },{
    label: '手机',
    name: '手机',
    type: CompType.phone
  },{
    label: '身份证',
    name: '身份证',
    type: CompType.idCard
  }, 
  {
    label: '地址',
    name: '地址',
    type: CompType.address
  },{
    label: '邮件',
    name: '邮件',
    type: CompType.email
  },{
    label: '微信',
    name: '微信',
    type: CompType.wx
  }
]

// 高级
const AdvancedComponentList = [  {
  label: 'NPS',
  name: 'NPS',
  type: CompType.nps
},  {
  label: '排序',
  name: '排序',
  type: CompType.sort
},{
  label: '定位',
  name: '定位',
  type: CompType.location
},{
  label: '流水号',
  name: '流水号',
  type: CompType.serialNumber
}, {
  label: '富文本',
  name: '富文本',
  type: CompType.editor
},{
  label: '电子签名',
  name: '电子签名',
  type: CompType.electronicSignature
}]

// 常见组件
const CommonComponentList = [{
  label: '满意度',
  name: '满意度',
  type: CompType.satisfactionLevel
},{
  label: '是否',
  name: '是否',
  type: CompType.boolean
},{
  label: '社会关系',
  name: '社会关系',
  type: CompType.select
},{
  label: '年收入',
  name: '年收入',
  type: CompType.annualIncome
}, {
  label: '年收入',
  name: '年收入',
  type: CompType.radio
},{
  label: '部门',
  name: '部门',
  type: CompType.select
},{
  label: '政治面貌',
  name: '政治面貌',
  type: CompType.radio
}]

// 组件列表
export const CompListData:CompCategoryType[] = [{
  name: '基础',
  label: '基础',
  type: CompListType.basic,
  children: [...BasicComponentList]
},{
  name: '布局',
  label: '布局',
  type: CompListType.layout,
  children: [...LayoutComponentList]
},{
  name: '联系方式',
  label: '联系方式',
  type: CompListType.personal,
  children: [...PersonalComponentList]
},{
  name: '高级',
  label: '高级',
  type: CompListType.advanced,
  children: [...AdvancedComponentList]
}, {
  name: '常见题目',
  label: '常见题目',
  type: CompListType.common,
  children: [...CommonComponentList]
}]