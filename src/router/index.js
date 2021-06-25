import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        meta: {
            breadcrumb: "breadcrumbs.home"
        },
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
        meta: {
            breadcrumb: "breadcrumbs.about"
        },
    },
    {
        path: '/myAccount',
        name: 'MyAccount',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "MyAccount" */ '../views/MyAccount.vue'),
        meta: {
            breadcrumb: "breadcrumbs.myAccount"
        },
    },
    {
        path: '/addRecipe',
        name: 'AddRecipe',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "AddRecipe" */ '../views/AddRecipe.vue'),
        meta: {
            breadcrumb: "breadcrumbs.addRecipe"
        },
    },
    {
        path: '/recipe/:id',
        name: 'Recipe',
        component: () => import(/* webpackChunkName: "Recipe" */ '../views/Recipe.vue'),
    },
    {
        path: '/category/:id',
        name: 'Category',
        component: () => import(/* webpackChunkName: "Category" */ '../views/Category.vue'),
    }

]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
