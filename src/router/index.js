import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CardNews from "@/components/CardNews";
import GridComponent from '../components/GridComponent'
import CardSaison from '../components/CardSaison.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/news',
    name: 'news',
    component: CardNews
  },
  {
    path: '/saisons',
    name: 'saisons',
    component: CardSaison
  },
  {
    path: '/grid',
    name: 'grid',
    component: GridComponent
  },
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
