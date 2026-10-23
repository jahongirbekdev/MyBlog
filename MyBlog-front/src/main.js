import './assets/main.css'
import router from "@/plugins/router.js";
import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'

// Bitta app instance yaratamiz
const app = createApp(App)

// Pinia instansini yaratamiz
const pinia = createPinia()

// Pinia va router'ni ilovaga ulaymiz
app.use(pinia)
app.use(router)

// Ilovani mount qilamiz
app.mount('#app')
