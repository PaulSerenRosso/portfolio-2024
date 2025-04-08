import './assets/main.css'
import { createPinia } from 'pinia'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)
import { register } from 'swiper/element/bundle'
register()
app.use(router)

app.use(createPinia())
app.mount('#app')
