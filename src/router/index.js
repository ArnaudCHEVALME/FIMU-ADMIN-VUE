import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginView from '../views/LoginView.vue'
import CardNews from "@/components/CardNews";
import GridComponent from '../components/GridComponent'
import CardSaison from '../components/CardSaison.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: LoginView
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
