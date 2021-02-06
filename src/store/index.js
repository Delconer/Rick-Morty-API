import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    info:{},
    personajes:[],
    search:''
  },
  mutations: {
    guardarPersonajes(state, payload){
      state.personajes = payload
    },
    guardarInfo(state, payload){
      state.info = payload
    },
    setSearch(state, payload){
      state.search = payload
    }
  },
  actions: {
    async obtenerPersonajes({commit, state}, page){
      const text = state.search
      try {
        const res = await fetch(`https://rickandmortyapi.com/api/character/?page=${page}&name=${text}`)
        const data =  await res.json()
        commit('guardarPersonajes', data.results)
        commit('guardarInfo', data.info)

      } catch (error) {
        console.log(error);
      }
    },
    updateSearch({commit}, payload){
      commit('setSearch', payload)
    }
  },
  modules: {
  }
})
