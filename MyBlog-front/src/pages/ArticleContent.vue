<script setup>
import { useRoute } from 'vue-router'
import {useArticlesStore} from '@/store/article.js'
import BackButton from "@/components/BackButton.vue";
import {computed, watch} from "vue";

const route = useRoute()
const store = useArticlesStore()

const article = computed(() => store.state.article)

watch(
    () => route.params.articleId,
    async (id) => {
        store.state.article = null
        await store.fetchArticle(id)
    },
    { immediate: true }
)
</script>

<template>
    <div class="container mx-auto p-4">
        <div
            v-if="article && article.title"
            class="grid grid-cols-3 items-center mb-4"
        >
            <div class="justify-self-start">
                <BackButton link="/" />
            </div>

            <h1 class="justify-self-center text-3xl font-bold">{{ article.title }}</h1>
        </div>

        <div v-if="article && article.fullText" class="flex justify-center">
            <p class="text-xl mt-4">{{ article.fullText }}</p>
        </div>
    </div>
</template>

<style scoped>
::v-deep(.back-button img) {
    width: 30px;
    height: 30px;
}
</style>
