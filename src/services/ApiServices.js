import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'http://localhost:3000',
  withCredentials: false,
  headers: { Accept: 'application/json', 'Content-Type': 'application/json' }
})

export default {
  getSabers(perPage, page){
    return apiClient.get('/sabers?_limit='+ perPage + '&_page='+ page)
  },
  getSaber(id){
    return apiClient.get('/sabers/'+ id)
  },
  getMainUser(){
    return apiClient.get('/users/1')
  },
  getOrders(){
    return apiClient.get('/orders')
  }
}