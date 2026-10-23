<script setup>
import { reactive, ref } from "vue";
import { useRouter } from "vue-router";
import { useAuthorizationStore } from "@/store/authorization.js";

const router = useRouter()
const authStore = useAuthorizationStore()

let data = reactive({ phone: '', password: '' })
let isError = ref(false)

function login() {
    authStore.auth(data)
        .then(() => {
            isError.value = false
            router.push('/add')
        })
        .catch(() => {
            isError.value = true
        })
}
</script>

<template>
    <section class="bg-gray-100 min-h-screen flex items-center justify-center">
        <div class=" my-row w-full max-w-md bg-gray-200 p-6 rounded-lg shadow-lg border border-gray-400">
            <h1 class="text-black text-center font-bold text-2xl mb-4">Tizimga kirish</h1>

            <form @submit.prevent="login">
                <div class="mb-4">
                    <label for="phone" class="block text-xl font-medium text-black mb-1">Telefon</label>
                    <input
                        v-model="data.phone"
                        type="phone"
                        id="phone"
                        placeholder="+998901234567"
                        class="w-full p-2 rounded  bg-gray-100 text-black border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div class="mb-6">
                    <label for="password" class="block text-xl font-medium text-black mb-1">Parol</label>
                    <input
                        v-model="data.password"
                        type="password"
                        id="password"
                        placeholder="********"
                        class="w-full p-2 rounded bg-gray-100 text-black border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div v-if="isError" class="text-center text-xl text-red-500 font-semibold">
                    Admin kirish xuquqiga ega!
                </div>

                <div class="mt-10 mb-3">
                    <button
                        type="submit"
                        class="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2"
                    >
                        Kirish
                    </button>
                </div>
            </form>
        </div>
    </section>
</template>

<style scoped>
.my-row {
    margin: 0;
    background-color: rgba(128, 128, 128, 0.5);
    border-radius: 15px;
}
</style>
