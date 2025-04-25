import { message } from 'ant-design-vue';
import axios from 'axios'

const api = axios.create({
  baseURL: 'http://127.0.0.1:8000/', // 统一接口前缀
  timeout: 10000, // 10秒超时
  headers: {
    'Content-Type': 'application/json',
     'X-Requested-With': 'XMLHttpRequest'
  }
})

api.interceptors.request.use((config: any) => {
  if (config.url.includes('/upload')) {
    config.headers['Content-Type'] = 'multipart/form-data';
  }
  return config;
});

api.interceptors.response.use(
  (response) => {
    // 对响应数据做处理
    return Promise.resolve(response); // 直接返回业务数据
  },
  (error) => {
    // 对响应错误做处理
    console.error('响应拦截器 - 错误响应:', error);
    
    // 处理 HTTP 状态码
    if (error.response) {
      const { message: messageStr } = error.response.data
      console.log(messageStr,error.response.status)
      switch (error.response.status) {
        case 401:
          // 未授权处理（跳转登录）
          window.location.href = '/login';
          break;
        case 403:
          alert('无权限访问');
          break;
        case 404:
          alert('资源不存在');
          break;
        case 409:
          alert();
          message.warning(messageStr, 1000);
          break;
        case 500:
          alert('服务器内部错误');
          break;
        default:
          message.error(messageStr || `请求错误: ${error.response.status}`);
      }
    } else if (error.request) {
      // 请求已发出但无响应
      alert('网络异常，请检查网络连接');
    } else {
      // 其他错误
      alert('请求配置错误');
    }
    
    return Promise.reject(error);
  }
);

export default api
