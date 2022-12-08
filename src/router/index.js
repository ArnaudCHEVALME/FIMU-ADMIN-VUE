import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginView from '../views/LoginView.vue'
import CardNews from "@/components/CardNews"
import GridComponent from '../components/GridComponent'
import SaisonPage from '../views/SaisonView.vue'
import SearchBar from '../components/SearchBar'
import NavBar from "@/components/NavBar.vue";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'login',
        components: {
            default: LoginView,
            menu: null
        }
    },
    {
        path: '/news',
        name: 'news',
        components: {
            default: CardNews,
            menu: NavBar
        }
    },
    {
        path: '/saisons',
        name: 'saisons',
        components: {
            default: SaisonPage,
            menu: NavBar
        }
    },
    {
        path: '/grid',
        name: 'grid',
        components: GridComponent
    },
    {
        path: '/search',
        name: 'search,',
        components: {
            default: SearchBar,
            menu: NavBar
        }
    }
]
const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
