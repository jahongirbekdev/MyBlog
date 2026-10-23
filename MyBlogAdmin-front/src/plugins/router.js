import { createRouter, createWebHistory } from "vue-router"
import { defineAsyncComponent } from "vue"

// Layoutlarni oldindan define qilib olamiz
const BlankLayout = defineAsyncComponent(() => import('@/layouts/BlankLayout.vue'))
const DefaultLayout = defineAsyncComponent(() => import('@/layouts/DefaultLayout.vue'))

const routes = [
    {
        path: '/',
        redirect: '/login'   // / ga kirilganda avtomatik /login ga yo'naltirish
    },
    {
        path: '/login',
        component: () => import('@/pages/LoginPage.vue'),
        meta: {
            layout: BlankLayout
        }
    },
    {
        path: '/add',
        component: () => import('@/pages/ArticleAdd.vue'),
        meta: {
            layout: DefaultLayout
        }
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
