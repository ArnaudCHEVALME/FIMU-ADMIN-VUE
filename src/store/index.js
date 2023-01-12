import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import LoginView from "@/views/LoginView.vue";
import NewsView from "@/views/NewsView.vue";
import NavBar from "@/components/NavBar.vue";
import SaisonPage from "@/views/SaisonView.vue";
import SearchBar from "@/components/SearchBar.vue";
import StatsView from "@/views/StatsView.vue";
import SceneView from "@/views/SceneView.vue";
import TypeLiens from "@/views/TypeLiens.vue";
import GenreView from "@/views/GenreView.vue";

axios.defaults.headers.common['Content-Type'] = 'application/x-www-form-urlencoded';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    artistes: [],
    selectedSaison: null,
    saisons: [],
    genres: [],
    sousGenres: [],
    news: [],
    pays: [],
    categoriesLiens:[],
    scenes: [],
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
        path: '/scenes',
        name: 'Scenes',
        components: {
          default: SceneView,
          menu: NavBar
        }
      },
      {
        path: '/liens',
        name: 'Liens',
        components: {
          default: TypeLiens,
          menu: NavBar
        }
      },
      {
        path: '/genres',
        name: 'Genres',
        components: {
          default: GenreView,
          menu: NavBar
        }
      },
    ]
  },
  getters: {},
  mutations: {
    setScenes(state, scenes){
      state.scenes = scenes
    },
    setCategoriesLiens(state, categoriesLiens){
      state.categoriesLiens = categoriesLiens
    },
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
      state.pays = pays
    },
    setArtists(state, artistes){
      state.artistes = artistes
    },
  },
  actions: {
    async fetchScenes({commit}, saisonId) {
      try{
        const scenes = await axios.get('/api/scene/?saisonId='+saisonId )
        commit('setScenes', scenes.data)
      }catch (e){
        console.error(e)
      }
    },
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
        const response = await axios.get('/api/genres/?saisonId='+saisonId )
        commit('setGenres', response.data)
      } catch (error) {
        console.error(error)
      }
    },
    async fetchSousGenres({commit}, saisonId) {
      try {
        const response = await axios.get('/api/sousGenre/?saisonId='+saisonId)
        commit('setSousGenres', response.data)
      } catch (error) {
        console.error(error)
      }
    },
    async fetchCategoriesLiens({commit}) {
      try {
        const response = await axios.get('/api/categoriesReseaux/')
        commit('setCategoriesLiens', response.data.data)
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
    async fetchNews({commit}, saisonId){
      try {
        const news = await axios.get('/api/news/?saisonId='+saisonId)
        commit('setNews', news.data)
      }catch (err) {
        console.error(err)
      }
    },
    async fetchArtists({commit}, saisonId){
      try {
        const news = await axios.get("/api/artistes/?saisonId=", +saisonId)
        commit('setArtists', news.data.data)
      }catch (err) {
        console.error(err)
      }
    },
    async loadEveryThing({dispatch}, saisonId){
      dispatch("fetchGenres", saisonId)
      dispatch("fetchSousGenres", saisonId)
      dispatch("fetchNews", saisonId)
      dispatch("fetchPays")
      dispatch("fetchArtists")
      dispatch("fetchCategoriesLiens")
      dispatch("fetchScenes", saisonId)
    }
  },
  modules: {}
})
