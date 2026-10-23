<script setup>

import { mediaObject} from "@/store/mediaObject.js";
import { article} from "@/store/Article.js";
import {reactive, ref, watch} from "vue";
import {useRoute, useRouter} from "vue-router";

// Routerlar
const router = useRouter()
const route = useRoute()

const image = ref(null)
const formData = new FormData()

// Fayl tanlash
function selectImage(event) {
  const file = event.target.files[0]
  if (file) {
    formData.set('file', file)
    image.value = URL.createObjectURL(file)
  }
}

const newArticle = reactive({
  title: '',
  shortText: '',
  fullText: '',
  author: '',
  createdAt: '',
  image: ''
})

// Formani tozalovchi funksiya
function resetForm() {
  newArticle.title = '';
  newArticle.shortText = '';
  newArticle.fullText = '';
  newArticle.author = '';
  newArticle.createdAt = '';
  newArticle.image = '';
  image.value = null;
  formData.delete('file');
}

// Maqola saqlash
function saveArticle() {
  mediaObject().createImage(formData)
    .then(() => {
      newArticle.image = mediaObject().getImage

      article().createArticle(newArticle)
        .then(() => {
            resetForm() // ✅ avval formani tozalaymiz
            router.push('/add')
        })
    })
}

// Route kuzatuvchisi → sahifaga qaytilganda forma tozalansin
watch(
  () => route.fullPath,
  (newPath) => {
    if (newPath === '/add') {
      resetForm()
    }
  },
  { immediate: true }
)
</script>

<template>
    <div class="flex justify-center items-center h-screen bg-gray-100">
        <div class="row w-full max-w-xl bg-gray p-6 rounded shadow-md">
          <h1 class="text-3xl font-bold text-center mb-6">Maqola yaratish</h1>

            <!-- Maqola mavzusi -->
          <label for="about" class="block text-sm font-medium text-gray-700 mb-1">Maqola mavzusi</label>
          <input
            v-model="newArticle.title"
            type="text"
            id="title"
            placeholder="Mavzuni kiriting"
            class="w-full border bg-white border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
          />

          <!-- Maqola xaqida qisqacha -->
          <label for="about" class="block text-sm font-medium text-gray-700 mb-1">Maqola haqida</label>
          <input
            v-model="newArticle.shortText"
            type="text"
            id="about"
            placeholder="Maqola mavzusi haqida qisqacha"
            class="w-full border bg-white border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
          />

          <!-- Matni -->
          <label for="text" class="block text-sm font-medium text-gray-700 mb-1">Matni</label>
          <textarea
            v-model="newArticle.fullText"
            id="text"
            rows="3"
            placeholder="Maqola matni"
            class="w-full border bg-white border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
          ></textarea>

          <!-- Ism -->
          <label for="name" class="block text-sm font-medium text-gray-700 mb-1">Ism</label>
          <input
            v-model="newArticle.author"
            type="text"
            id="name"
            placeholder="Ismingiz"
            class="w-full border bg-white border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-6"
          />

            <!-- Sana -->
          <label for="date" class="block text-sm font-medium text-gray-700 mb-1">Sana</label>
          <input
            v-model="newArticle.createdAt"
            type="date"
            id="date"
            class="w-full border bg-white border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
          />

            <!-- Rasm yuklash -->
          <label for="imageUpload" class="block text-sm font-medium text-gray-700 mb-1">Rasm yuklash</label>
          <input
            id="imageUpload"
            @change="selectImage($event)"
            type="file"
            accept="image/*"
            class="w-full border bg-white border-gray-300 rounded-md p-2 file:bg-blue-50 file:border-0 file:rounded file:mr-4 file:text-sm file:font-semibold file:text-blue-700 hover:file:bg-blue-100 mb-4"
          />

          <!-- Rasm preview -->
          <div v-if="image" class="mt-3 mb-4">
            <img :src="image" alt="Rasm" class="max-w-xs rounded border border-gray-200 shadow" />
          </div>

          <!-- Button -->
          <button
            @click="saveArticle"
            type="button"
            class="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
          >
            Joylash
          </button>
        </div>
    </div>
</template>

<style scoped>
.row {
    margin: 0;
    background-color: rgba(128, 128, 128, 0.5);
    border-radius: 15px;
}
</style>
