import dayjs from 'dayjs'

// 为了Mock数据比较真实，设置成当前时间
export const getCurrentTime = () => {
  return dayjs().format("YYYY-MM-DD HH:mm")
}
