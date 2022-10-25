import axios from 'axios'
import qs from 'qs'

import { useAuthStore } from '~/stores/auth'

/*
  Set up basic configuration for axios.
*/
export function setupApi() {
  const baseURL = `${import.meta.env.VITE_API_URL}`
  const apiOptions = { headers: {}}
  const token = window.localStorage.getItem('__fr__token')

  // Set token if one exists
  if (token) apiOptions.headers.Authorization = `bearer ${token}`

  // Create axios instance
  const axiosClient = axios.create({ baseURL, ...apiOptions })

  return { axiosClient, token }
}

/*
  AUTH API
*/
export function useAuthApi() {
  const loading = ref(false)

  const { axiosClient } = setupApi()

  // GET ME
  const getMe = () => axiosClient.get(`/users/me`)

  // LOGIN
  const login = async payload => {
    loading.value = true
    try {
      const { data } = await axiosClient.post(`/auth/login`, payload)
      loading.value = false
      return [null, data]
    } catch (error) {
      console.error(error)
      loading.value = false
      return [error]
    }
  }

  const register = () => console.log('register isn\'t implemented yet');
  const forgotPassword = () => console.log('Forgot password isn\'t implemented yet')
  const logout = () => console.log('logout isn\'t implemented yet')
  
  return { loading, getMe, login }
}