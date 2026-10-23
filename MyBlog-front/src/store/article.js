import {defineStore} from "pinia"
import axios from "@/plugins/axios.js"
import {reactive} from "vue";

export const useArticlesStore = defineStore("articlesStore", () => {
    const state = reactive({
        articles: [],
        article: null,
        totalItems: 0,
        pageCount: 0,
    });

    const fetchArticles = async (url = '') => {
        try {
            const {data} = await axios.get('/articles' + url)
            state.articles = data["member"]
            state.totalItems = data["totalItems"]
            state.pageCount = Math.ceil(state.totalItems / 10)
        } catch (error) {
            console.log(error)
        }
    }

    function fetchArticle(articleId) {
        return new Promise((resolve, reject) => {
            axios.get(`/articles/` + articleId)
                .then((response) => {
                    state.article = {
                        id: response.data.id,
                        title: response.data.title,
                        shortText: response.data.shortText,
                        fullText: response.data.fullText,
                        author: response.data.author,
                        createdAt: response.data.createdAt
                    }

                    resolve()
                })
                .catch(() => {
                    reject()
                })
        })
    }

    return {
        state,
        fetchArticles,
        fetchArticle
    };
});
