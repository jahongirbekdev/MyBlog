import {createRouter, createWebHistory} from "vue-router";

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('@/pages/HomePage.vue')
    },
    {
        path: '/article-content/:articleId',
        name: 'article-content',
        component: () => import('@/pages/ArticleContent.vue')
    },
    {
        path: '/login',
        component: () => import('@/pages/LoginPage.vue')
    }
]

export default createRouter({
    history: createWebHistory(),
    routes
})
