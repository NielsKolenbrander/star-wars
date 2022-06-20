import { createStore } from 'vuex'
import ApiServices from '@/services/ApiServices.js'

export default createStore({
  state: {
    sabers: [],
    saber: {},
    user: {}
  },
  getters: {
  },
  mutations: {
    SET_SABERS(state, sabers){
      state.sabers = sabers
    },
    SET_SABER(state, saber){
      state.saber = saber
    },
    SET_USER(state, user){
      state.user = user
    }
  },
  actions: {
    fetchSabers({ commit }){
      ApiServices.getSabers()
        .then(response => {
          commit('SET_SABERS', response.data)
        })
        .catch(error => {
          console.log(error)
        })
    },
    fetchUser({ commit }){
      ApiServices.getMainUser()
        .then(response => {
          commit('SET_USER', response.data)
        })
        .catch(error => {
          console.log(error)
        })
    }
  },
  modules: {
  }
})
