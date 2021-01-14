import Vue from 'vue'
import Router from 'vue-router'
import App from '../App'

// 视图路由
import Index from '../components/index/index'
import Older from "../components/old/Old"
import VProduct from '../components/product/VProduct'
import VNews from '../components/news/VNews'
import about from '../components/about/about'
Vue.use(Router)

export default new Router({
    // mode: "history",
    // base: process.env.BASE_URL,
    routes: [{
            path: '/',
            name: 'App',
            redirect: "/index"
        },
        {
            path: '/index',
            name: 'index',
            component: Index
        },
        {
            path: '/old',
            name: 'old',
            component: Older,
        },
        {
            path: "/product",
            name: "product",
            component: VProduct
        },
        {
            path: "/news",
            name: "news",
            component: VNews
        },
        {
            path: "/add",
            name: "about",
            component: about
        }, {
            path: "/contact",
            name: "about",
            component: about
        }
    ]
})