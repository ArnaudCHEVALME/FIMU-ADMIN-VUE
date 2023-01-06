import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginView from '../views/LoginView.vue'
import GridComponent from '../components/GridComponent'
import SaisonPage from '../views/SaisonView.vue'
import SearchBar from '../components/SearchBar'
import NavBar from "@/components/NavBar.vue";
import NewsView from "@/views/NewsView.vue";
import StatsView from "@/views/StatsView.vue";

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
            default: NewsView,
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
    },
    {
        path: '/stats',
        name: 'stats',
        components: {
            default: StatsView,
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
