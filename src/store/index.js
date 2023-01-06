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
    paysAll: [],
  },
  getters: {},
  mutations: {
    setSaisonId(state, saisonId) {
      state.saisonId = saisonId
    },
    setSaisons(state, saisons){
      state.saisons = saisons
      console.log(state.saisons)
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
      state.paysAll = pays
    },
  },
  actions: {
    async fetchSaisons({commit}) {
      try {
        const saisons = await axios.get('/api/saisons/')
        commit('setSaisons', saisons.data.data)
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
    async fetchPays({commit}) {
      try {
        const pays = await axios.get('/api/pays/')
        commit('setPays', pays.data)
      } catch (error) {
        console.error(error)
      }
    },
    async fetchNews({commit}){
      try {
        const news = await axios.get("/api/news/")
        commit('setNews', news)
      }catch (err) {
        console.error(err)
      }
    }
  },
  modules: {}
})
