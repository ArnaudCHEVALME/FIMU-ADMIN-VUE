import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import LoginView from "@/views/LoginView.vue";
import NewsView from "@/views/NewsView.vue";
import NavBar from "@/components/NavBar.vue";
import SaisonPage from "@/views/SaisonView.vue";
import SearchBar from "@/components/SearchBar.vue";
import StatsView from "@/views/StatsView.vue";
import MapView from "@/views/MapView.vue";

axios.defaults.headers.common['Content-Type'] = 'application/x-www-form-urlencoded';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    selectedSaison: null,
    saisons: [],
    genres: [],
    sousGenres: [],
    news: [],
    paysAll: [],
    routes: [
      {
        path: '/',
        name: 'Login',
        components: {
          default: LoginView,
          menu: null
        }
      },
      {
        path: '/news',
        name: 'News',
        components: {
          default: NewsView,
          menu: NavBar
        }
      },
      {
        path: '/saisons',
        name: 'Saisons',
        components: {
          default: SaisonPage,
          menu: NavBar
        }
      },
      {
        path: '/search',
        name: 'Search',
        components: {
          default: SearchBar,
          menu: NavBar
        }
      },
      {
        path: '/stats',
        name: 'Stats',
        components: {
          default: StatsView,
          menu: NavBar
        }
      },
      {
        path: '/cartes',
        name: 'Carte',
        components: {
          default: MapView,
          menu: NavBar
        }
      }
    ]

  },
  getters: {},
  mutations: {
    setSelectedSaison(state, saison) {
      state.selectedSaison = saison
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
        let s = saisons.data.data.sort((s0, s1) => new Date(s0.dateSaison) < new Date(s1.dateSaison))[0]
        commit('setSelectedSaison', s)
      } catch (error) {
        console.error(error)
      }
    },
    async fetchGenres({commit}, saisonId) {
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
        commit('setPays', pays.data.data)
      } catch (error) {
        console.error(error)
      }
    },
    async fetchNews({commit}, saisonId){
      try {
        const news = await axios.get("/api/news/", {saisonId})
        commit('setNews', news.data)
      }catch (err) {
        console.error(err)
      }
    },
    async loadEveryThing({commit}, saisonId){
      commit.dispatch("fetchGenres", saisonId)
      commit.dispatch("fetchSousGenres", commit, saisonId)
      commit.dispatch("fetchNews", commit, saisonId)
      commit.dispatch("fetchPays",commit)
    }
  },
  modules: {}
})
