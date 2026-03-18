import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '@/assets/styles/main.scss'
import { useAuth } from './helpers/useAuth'

const app = createApp(App)

const { initAuth } = useAuth()

initAuth()

app.use(router)

app.mount('#app')
