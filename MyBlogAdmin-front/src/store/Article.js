import {defineStore} from "pinia"
import {axios} from "@/plugins/axios.js"

export  const article = defineStore('article', {
    actions: {
        createArticle(data) {
            return new Promise((resolve, reject) => {
                axios.post('/articles', data, {
                    headers: {
                            'Content-Type': 'application/ld+json'
                    }
                })
                    .then((response) => {
                        console.log('Maqola joylandi')
                        console.log(response)

                        resolve()
                    })
                    .catch(() => {
                        console.log('Maqola joylashda xatolik!')
                        reject()
                    })
            })
        }
    },
    state() {
        return {
            articles: [],
            article: {}
        }
    },
    getters: {
        getArticles() {
            return this.articles
        },
        getArticle() {
            return this.article
        }
    }
})