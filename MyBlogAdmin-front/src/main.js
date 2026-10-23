import { createApp } from 'vue'
import App from './App.vue'
import {createPinia} from "pinia";
import './assets/main.css'
import router from "@/plugins/router.js";
import LoginPage from "@/pages/LoginPage.vue";

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.use(router)
app.mount('#app')
