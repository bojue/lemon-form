import api from '@/utils/http'

export const authLogin = async (data: any) => {
  const response = await api.post('/users/login/', data)
  console.log('response',response)
  return response
} 


export const authRegister = async (data: any) => {
  const response = await api.post('/users/register/', data)
  console.log('response',response)
  return response
} 


export const authLogout = async () => {
  const response = await api.post('/users/logout/')
  return response
}