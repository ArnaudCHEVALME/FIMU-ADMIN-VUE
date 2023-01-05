import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

axios.defaults.headers.common['Content-Type'] = 'application/x-www-form-urlencoded';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    saisonId:-1,
    saisons: [],
    genres: [],
    sousGenres: [],
    news: [],
    pays: [],
  },
  getters: {},
  mutations: {
    setSaisonId(state, saisonId) {
      state.saisonId = saisonId
    },
    setSaisons(state, saisons){
      state.saisons = saisons
    },
    setGenres(state, genres){
      state.genres = genres
    },
    setSousGenres(state, sousGenres){
      state.sousGenres = sousGenres
    },
    setNews(state, news){
      state.news = news
    },
    setPays(state, pays){
      state.pays = pays
    },
  },
  actions: {
    async fetchSaisons({commit}) {
      try {
        const response = await axios.get('/api/saisons/')
        commit('setSaisons', response.data.data)
      } catch (error) {
        console.error(error)
      }
    },
    async fetchGenres({commit, saisonId}) {
      try {
        const response = await axios.get('/api/genres/', {saisonId})
        commit('setGenres', response.data.data)
      } catch (error) {
        console.error(error)
      }
    },
    async fetchSousGenres({commit}, saisonId) {
      try {
        const response = await axios.get('/api/sousGenre/', {saisonId})
        commit('setSousGenres', response.data.data)
      } catch (error) {
        console.error(error)
      }
    },
  },
  modules: {}
})
