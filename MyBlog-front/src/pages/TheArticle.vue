<script setup>
import {computed, onMounted, ref} from "vue";
import {useArticlesStore} from "@/store/article.js";
import PaginationRow from "@/components/PaginationRow.vue";

const store = useArticlesStore()
const currentPage = ref(1)

onMounted(() => {
    store.fetchArticles()
})

const articles = computed(() => store.state.articles)

function formatDate(date) {
  const d = new Date(date)
  return d.toLocaleDateString('uz-UZ')
}
</script>

<template>
<div class="row flex justify-center">
    <div class="">
        <div
          v-for="item in articles"
          :key="item.id"
          class="flex flex-col md:flex-row bg-white rounded shadow-md overflow-hidden mb-6"
        >
           <img
             class="w-full h-48 md:w-72 md:h-48 object-cover md:rounded-l rounded-t md:rounded-t-none"
             :src="'https://api.iw8.jakhongirbek.uz' + item.image.contentUrl"
             alt="#"
           />

           <div class="flex-1 p-6 md:p-6">
                <h3 class="about-name mt-2 mb-4">
                    <router-link
                        class="text-xl md:text-2xl text-black hover:text-blue-700 transition"
                        :to="{ name: 'article-content', params: { articleId: item.id } }"
                    >
                        {{item.title}}
                    </router-link>
                </h3>
               <!-- Sana va muallif -->
                <p class="text-base md:text-xl text-gray-500 mt-1">
                    <span class="text-blue-500 font-medium">{{ formatDate(item.createdAt) }}</span>
                    sanadagi
                   <span class="text-xl text-blue-500 font-medium">{{ item.author }}</span>
                    maqolasi
                </p>
               <p class="text-base md:text-xl text-gray-700 mt-2 line-clamp-3">{{ item.shortText }}</p>
           </div>
        </div>
    </div>
</div>

<PaginationRow
    v-model="currentPage"
    :total-pages="store.state.pageCount"
    :max-visible="3"
/>
</template>

<style scoped>
.row {
    margin: 20px;
}
</style>
